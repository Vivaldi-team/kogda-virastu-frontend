import React, { FC, MouseEventHandler, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { useDispatch, useSelector } from '../services/hooks';
import { Divider, RegularText } from '../ui-lib';
import ScrollRibbon from './scroll-ribbon';
import ArticleFullPreview from './article-full-preview';
import { addLikeThunk, deleteLikeThunk, publishArticleThunk } from '../thunks';
import { blue, greySecondary, primaryBlack } from '../constants/colors';
import declineArticleThunk from '../thunks/decline-article-thunk';
import { TCompare, TArticle } from '../types/types';

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

const TabContainer = styled.div`
  
  display: flex;
  gap: 16px
`;

interface IButtonProps {
  active: boolean;
}

const Button = styled.button<IButtonProps>`
    background-color: transparent;
    color: ${greySecondary};
    border: none;
    ${({ active }) => active && `
    border-bottom: 2px solid ${blue};
    color: ${primaryBlack};
  `}
    cursor: pointer;
    padding: 16px 8px;
    margin-bottom: 32px;
    :active {
      outline: none;
    }
  `;

const DividerCust = styled(Divider)`
  align-self: end;
`;

const FeedRibbon : FC = () => {
  const dispatch = useDispatch();
  const sharedPosts = useSelector((state) => state.view.feed);
  const privatePosts = useSelector((state) => state.view.privateFeed);
  const currentUser = useSelector((state) => state.profile);
  const tags = useSelector((state) => state.view.selectedTags) ?? [];
  let itIsAdmin = false;
  if (currentUser.roles?.includes('admin')) {
    itIsAdmin = true;
  }
  const [activePost, setActivePost] = useState(true);
  const [active, setActive] = useState(false);
  const [activeModeration, setactiveModeration] = useState(false);
  let posts = sharedPosts;
  if (activeModeration && sharedPosts) {
    posts = sharedPosts?.filter((element) => element.state === 'pending');
  } else if (activePost && sharedPosts) {
    posts = sharedPosts?.filter((element) => element.state === 'published');
  } else if (active && privatePosts) {
    posts = privatePosts;
  }

  if (!posts) {
    return (
      <RegularText size='large' weight={500}>
        <FormattedMessage id='loading' />
      </RegularText>
    );
  }

  const compare:TCompare = (a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt));

  if (posts.length !== 0) {
    const arrayForSort = [...posts];
    arrayForSort.sort(compare);
    posts = arrayForSort;
  }

  if (posts.length === 0 && active) {
    return (
      <ScrollRibbon>
        <>
          <TabContainer>
            <Button
              type='button'
              onClick={() => {
                setActivePost(true);
                setActive(false);
                setactiveModeration(false);
              }}
              active={activePost}>
              <FormattedMessage id='viewAllArticle' />
            </Button>
            <Button
              type='button'
              onClick={() => {
                setActivePost(false);
                setActive(true);
                setactiveModeration(false);
              }}
              active={active}>
              <FormattedMessage id='mySubscriptions' />
            </Button>
            {itIsAdmin && (
            <Button
              type='button'
              onClick={() => {
                setActivePost(false);
                setActive(false);
                setactiveModeration(true);
              }}
              active={activeModeration}>
              <FormattedMessage id='onModeration' />
            </Button>
            )}
          </TabContainer>
          <RegularText size='large' weight={500}>
            <FormattedMessage id='zeroSubscriptions' />
          </RegularText>
        </>
      </ScrollRibbon>
    );
  }

  return (
    <ScrollRibbon>
      <>
        <TabContainer>
          <Button
            type='button'
            onClick={() => {
              setActivePost(true);
              setActive(false);
              setactiveModeration(false);
            }}
            active={activePost}>
            <FormattedMessage id='viewAllArticle' />
          </Button>
          <Button
            type='button'
            onClick={() => {
              setActivePost(false);
              setActive(true);
              setactiveModeration(false);
            }}
            active={active}>
            <FormattedMessage id='mySubscriptions' />
          </Button>
          {itIsAdmin && (
            <Button
              type='button'
              onClick={() => {
                setActivePost(false);
                setActive(false);
                setactiveModeration(true);
              }}
              active={activeModeration}>
              <FormattedMessage id='onModeration' />
            </Button>
          )}
        </TabContainer>

        <RibbonWrapper>
          {posts.filter((post) => post.tagList.some((tag) => (tags.includes(tag)
                || !tags
                || tags.length < 1))).map((post, index) => {
            const onClick: MouseEventHandler = () => {
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
            if (posts) {
              return (
                <ItemWrapper key={post.slug}>
                  <ArticleFullPreview
                    article={post}
                    onLikeClick={onClick}
                    publishArticle={publishArticle}
                    declineArticle={declineArticle}
                    isModeration={activeModeration && itIsAdmin} />
                  {index !== posts.length - 1 && index !== posts.length - 2
                      && <DividerCust distance={0} />}
                </ItemWrapper>
              );
            } return null;
          })}
        </RibbonWrapper>
      </>
    </ScrollRibbon>
  );
};

export default FeedRibbon;
