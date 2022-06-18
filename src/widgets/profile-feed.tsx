import React, { FC, MouseEventHandler } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { useDispatch, useSelector } from '../services/hooks';
import { Divider, RegularText } from '../ui-lib';
import ScrollRibbon from './scroll-ribbon';
import ArticleFullPreview from './article-full-preview';
import { addLikeThunk, deleteLikeThunk, publishArticleThunk } from '../thunks';
import declineArticleThunk from '../thunks/decline-article-thunk';

const RibbonWrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  list-style: none outside;
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  
 @media screen and (max-width: 1050px) {
         grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
     }
  @media screen and (max-width: 769px) {
         grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
     }
  @media screen and (max-width: 767px) {
         grid-template-columns: auto;
     }
`;

const ItemWrapper = styled.li`
  list-style: none outside;
  display: grid;
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;

`;

const DividerCust = styled(Divider)`
  align-self: end;
`;

const ProfileFeed : FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.view.feed);
  const tags = useSelector((state) => state.view.selectedTags) ?? [];
  const { isPublicFeedFetching } = useSelector((state) => state.api);
  if (!posts || isPublicFeedFetching) {
    return (
      <RegularText size='large' weight={500}>
        <FormattedMessage id='loading' />
      </RegularText>
    );
  }
  return (
    <ScrollRibbon>
      <RibbonWrapper>
        {posts.filter((post) => post.tagList.some((tag) => (tags.includes(tag)
              || !tags
              || tags.length < 1))).map((post, index) => {
          const onClick : MouseEventHandler = () => {
            if (post.favorited) {
              dispatch(deleteLikeThunk(post.slug));
            } else {
              dispatch(addLikeThunk(post.slug));
            }
          };
          const declineArticle: MouseEventHandler = () => {
            dispatch(declineArticleThunk(post.slug));
          };
          const publishArticle: MouseEventHandler = () => {
            dispatch(publishArticleThunk(post.slug));
          };
          return (
            <ItemWrapper key={post.slug}>
              <ArticleFullPreview
                article={post}
                onLikeClick={onClick}
                publishArticle={publishArticle}
                declineArticle={declineArticle}
                isModeration={false} />
              {index !== posts.length - 1 && index !== posts.length - 2
                  && <DividerCust distance={0} />}
            </ItemWrapper>
          );
        })}
      </RibbonWrapper>
    </ScrollRibbon>
  );
};

export default ProfileFeed;
