import { AxiosError } from 'axios';
import { AppThunk } from '../store/store.types';
import { holdArticle } from '../services/api';
import {
  holdArticlePostRequested,
  holdArticlePostSucceeded,
  holdArticlePostFailed,
  setViewArticle,
} from '../store';
import { TAPIError } from '../services/api.types';
import { makeErrorObject } from '../services/helpers';
import getPublicFeedThunk from './get-public-feed-thunk';

const holdArticleThunk: AppThunk = (slug: string) => async (dispatch, getState) => {
  try {
    dispatch(holdArticlePostRequested());
    await holdArticle(slug);
    const articles = getState().view.feed ?? [];
    articles.forEach((element) => {
      if (element.slug === slug) {
        dispatch(setViewArticle({ ...element, state: 'pending' }));
      }
    });
    dispatch(getPublicFeedThunk());
    dispatch(holdArticlePostSucceeded());
  } catch (error) {
    dispatch(holdArticlePostFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};
export default holdArticleThunk;
