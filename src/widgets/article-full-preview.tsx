/* eslint-disable ternary/no-unreachable */
import React, { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import parse from 'html-react-parser';
import AuthorHeadingWidget from './author-heading-widget';
import { TArticle } from '../types/types';
import BarTags from './bar-tags';
import { getPropOnCondition } from '../services/helpers';
import { DeclineArticle, PublishArticle } from '../ui-lib/buttons';

const ArticleCardContainer = styled.div`
    max-width: 700px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-top: 32px;

    @media screen and (max-width: 1050px) {
        
    }
    @media screen and (min-width: 769px) {
        padding-left: 20px;
    }
    @media screen and (max-width: 600px) {
        width: 280px;
        padding-right: 0;
    }

   /*  @media screen and (max-width:320px) {
        width:280px;
    } */
`;

const ArticleName = styled.h2`
    width:100%;
    font-size: ${({ theme: { secondLevelHeading: { size } } }) => `${size}px`} ;
    font-family: ${({ theme: { secondLevelHeading: { family } } }) => family};
    line-height: ${({ theme: { secondLevelHeading: { height } } }) => `${height}px`} ;
    font-weight: ${({ theme: { secondLevelHeading: { weight } } }) => weight};
    color: ${({ theme: { primaryText } }) => primaryText};
    word-break:break-all;
    margin: 0;
 @media screen and (max-width: 768px) {
        font-size: ${({ theme: { secondLevelHeadingMobile: { size } } }) => `${size}px`} ;
        font-family: ${({ theme: { secondLevelHeadingMobile: { family } } }) => family};
        line-height: ${({ theme: { secondLevelHeadingMobile: { height } } }) => `${height}px`} ;
        font-weight: ${({ theme: { secondLevelHeadingMobile: { weight } } }) => weight};
 }
 @media screen and (max-width: 320px) {
    grid-column: 1/1;
}

`;

type TElementWithImage = {
  image?: string,
};

const BarTagsWrapper = styled.div<TElementWithImage>`
  width:100%;
  @media screen and (max-width:600px) {
    ${({ image }) => getPropOnCondition(!!image, 'grid-row: 3/4', 'grid-row: 4/5 ')};
  }

`;

const ContentContainer = styled.div<TElementWithImage>`
    display: flex;
    flex-direction: column;
    //grid-template-columns: 1fr 6fr;
    grid-gap: 16px;
    .link {
        font-size: ${({ theme: { text18Sans: { size } } }) => `${size}px`} ;
        font-family: ${({ theme: { text18Sans: { family } } }) => family};
        line-height: ${({ theme: { text18Sans: { height } } }) => `${height}px`} ;
        font-weight: ${({ theme: { text18Sans: { weight } } }) => weight};
        color: ${(props) => props.theme.button.red.default};
        width: 106px;
        text-decoration: none;
        &:hover {
            color: ${(props) => props.theme.button.red.hover};
        }
        &:active {
            color: ${(props) => props.theme.button.red.active};
        }
        @media screen and (max-width: 600px) {                  // 'grid-row: 5/6 ' : 'grid-row: 4/5'

        ${({ image }) => (getPropOnCondition(!!image, 'grid-row: 5/6', 'grid-row: 4/5 '))};
        margin-top: -8px;
    }
    }
    @media screen and (max-width: 600px) {
        grid-template-columns: 280px;

    }
`;

const ArticleImage = styled.img`
    max-width: 100%;
    height: 150px;
    object-fit: cover;
    
    @media screen and (max-width: 320px) {
        width: 280px;
        height: 150px;
    }
`;

const ArticleActionsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 32px;
  @media screen and (max-width: 320px) {
    width: 262px;
    flex-flow: row nowrap;
    gap: 14px;
  }
  }
`;

const Article = styled.article<TElementWithImage>`
font-size: ${({ theme: { text18Sans: { size } } }) => `${size}px`};
font-family: ${({ theme: { text18Sans: { family } } }) => family};
line-height: ${({ theme: { text18Sans: { height } } }) => `${height}px`};
font-weight: ${({ theme: { text18Sans: { weight } } }) => weight};
color: ${({ theme: { primaryText } }) => primaryText};
overflow: hidden;
text-overflow: ellipsis;
display: -moz-box;
-moz-box-orient: vertical;
display: -webkit-box;
-webkit-line-clamp: 9;
-webkit-box-orient: vertical;
line-clamp: 9;
box-orient: vertical;
 ${((props) => !props.image && 'grid-column: 1/3')};
@media screen and (max-width: 768px) {
    font-size: ${({ theme: { text16Sans: { size } } }) => `${size}px`};
    font-family: ${({ theme: { text16Sans: { family } } }) => family};
    line-height: ${({ theme: { text16Sans: { height } } }) => `${height}px`};
    font-weight: ${({ theme: { text16Sans: { weight } } }) => weight};
}
@media screen and (max-width: 600px) {
    grid-column: 1/1;
}
`;

type TArticleFullPreview = {
  article: TArticle,
  onLikeClick: MouseEventHandler,
  declineArticle: MouseEventHandler,
  publishArticle: MouseEventHandler,
  isModeration: boolean,
};

const ArticleFullPreview: FC<TArticleFullPreview> = ({
  article, onLikeClick, declineArticle, publishArticle, isModeration = false,
}) => (
  <ArticleCardContainer>
    <AuthorHeadingWidget
      username={article.author?.username}
      nickname={article.author?.nickname ?? article.author?.username}
      image={article.author.image}
      date={new Date(article.createdAt)}
      isLiked={article.favorited}
      likesCount={article.favoritesCount}
      onLikeClick={onLikeClick} />
    <ContentContainer image={article.link}>
      <ArticleName>{article.title}</ArticleName>
      {article.link && <ArticleImage src={article.link} />}
      <Article image={article.link}>{parse(article.body)}</Article>
      <BarTagsWrapper image={article.link}>
        <BarTags
          isHasImage={!!article.link}
          rowReverse
          tagList={article.tagList} />
      </BarTagsWrapper>
      <Link className='link' to={`/article/${article.slug}`}>
        <FormattedMessage id='articleEnter' />
      </Link>
    </ContentContainer>
    {isModeration && (
      <ArticleActionsContainer>
        <PublishArticle onClick={publishArticle} />
        <DeclineArticle onClick={declineArticle} />
      </ArticleActionsContainer>
    )}
  </ArticleCardContainer>
);

export default ArticleFullPreview;
