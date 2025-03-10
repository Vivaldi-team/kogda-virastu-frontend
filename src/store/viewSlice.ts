import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  FeedTypes,
  TArticle,
  TArticles,
  TComment,
  TComments,
  TProfile,
  TTags,
  UserArticlesTypes,
} from '../types/types';

type TViewState = {
  feed: TArticles | null;
  privateFeed: TArticles | null;
  feedCount: number;
  article: TArticle | null;
  tagsList: TTags | null;
  selectedTags: TTags | null;
  followTags: TTags | null;
  tag: string | null,
  commentsFeed: TComments | null;
  comment: TComment | null;
  page: number;
  perPage: number;
  profile: TProfile | null;
  feedType: FeedTypes;
  articlesType: UserArticlesTypes;
  topFeed: TArticles | null;
  generatedCode: string | null;
  copyGeneratedCode: boolean;
};

const initialState: TViewState = {
  feed: null,
  privateFeed: null,
  feedCount: 0,
  article: null,
  tagsList: null,
  selectedTags: null,
  followTags: null,
  tag: null,
  commentsFeed: null,
  comment: null,
  page: 1,
  perPage: 10,
  profile: null,
  feedType: FeedTypes.public,
  articlesType: UserArticlesTypes.my,
  topFeed: null,
  generatedCode: null,
  copyGeneratedCode: false,
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setViewFeed: (state, action: PayloadAction<TArticles>) => ({
      ...state, feed: action.payload,
    }),
    setViewPrivateFeed: (state, action: PayloadAction<TArticles>) => ({
      ...state, privateFeed: action.payload,
    }),
    clearViewFeed: (state) => ({
      ...state, feed: null,
    }),
    setTopFeed: (state, action: PayloadAction<TArticles>) => ({
      ...state, topFeed: action.payload,
    }),
    clearTopFeed: (state) => ({
      ...state, topFeed: null,
    }),
    setFeedCount: (state, action: PayloadAction<number>) => ({
      ...state, feedCount: action.payload,
    }),
    setViewTags: (state, action: PayloadAction<TTags>) => ({
      ...state, tagsList: action.payload,
    }),
    clearViewTags: (state) => ({
      ...state, tagsList: null, selectedTags: null,
    }),
    setViewArticle: (state, action: PayloadAction<TArticle>) => ({
      ...state, article: action.payload,
    }),
    clearViewArticle: (state) => ({
      ...state, article: null,
    }),
    setSelectedTags: (state, action: PayloadAction<TTags>) => ({
      ...state, selectedTags: action.payload,
    }),
    setFollowTags: (state, action: PayloadAction<TTags>) => ({
      ...state, followTags: action.payload,
    }),
    clearSelectedTags: (state) => ({
      ...state, selectedTags: null,
    }),
    setTag: (state, action: PayloadAction<string>) => ({
      ...state, tag: action.payload,
    }),
    clearTag: (state) => ({
      ...state, tag: null,
    }),
    setViewCommentsFeed: (state, action: PayloadAction<TComments>) => ({
      ...state, commentsFeed: action.payload,
    }),
    clearViewCommentsFeed: (state) => ({
      ...state, commentsFeed: [],
    }),
    selectViewComment: (state, action: PayloadAction<TComment>) => ({
      ...state, comment: action.payload,
    }),
    clearViewComment: (state) => ({
      ...state, comment: null,
    }),
    setPage: (state, action: PayloadAction<number>) => ({
      ...state, page: action.payload,
    }),
    clearPage: (state) => ({
      ...state, page: 1,
    }),
    setPageLimit: (state, action: PayloadAction<number>) => ({
      ...state, perPage: action.payload,
    }),
    clearView: (state) => ({
      ...state, ...initialState,
    }),
    setViewProfile: (state, action: PayloadAction<TProfile>) => ({
      ...state, profile: action.payload,
    }),
    clearViewProfile: (state) => ({
      ...state, profile: null,
    }),
    setFeedType: (state, action: PayloadAction<FeedTypes>) => ({
      ...state, feedType: action.payload,
    }),
    setArtistProfile: (state, action: PayloadAction<UserArticlesTypes>) => ({
      ...state, articlesType: action.payload,
    }),
    setGeneratedInviteCode: (state, action: PayloadAction<string>) => ({
      ...state, generatedCode: action.payload,
    }),
    copyGeneratedInviteCode: (state) => ({
      ...state, copyGeneratedCode: !state.copyGeneratedCode,
    }),
  },
});

export const {
  clearPage,
  setViewFeed,
  setViewPrivateFeed,
  clearViewFeed,
  setFeedCount,
  setViewTags,
  clearViewTags,
  setViewArticle,
  clearViewArticle,
  setSelectedTags,
  setFollowTags,
  clearSelectedTags,
  setViewCommentsFeed,
  clearViewCommentsFeed,
  selectViewComment,
  clearViewComment,
  setPage,
  setPageLimit,
  clearView,
  setViewProfile,
  clearViewProfile,
  setTag,
  clearTag,
  setFeedType,
  setArtistProfile,
  setTopFeed,
  clearTopFeed,
  setGeneratedInviteCode,
  copyGeneratedInviteCode,
} = viewSlice.actions;
const viewReducer = viewSlice.reducer;
export default viewReducer;
