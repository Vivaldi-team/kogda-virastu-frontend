import { AxiosError } from 'axios';
import { AppThunk } from '../store/store.types';
import { declineArticle } from '../services/api';
import {
  declineArticlePostRequested,
  declineArticlePostSucceeded,
  declineArticlePostFailed,
  setViewArticle,
} from '../store';
import { TAPIError } from '../services/api.types';
import { makeErrorObject } from '../services/helpers';
import getPublicFeedThunk from './get-public-feed-thunk';

const declineArticleThunk: AppThunk = (slug: string) => async (dispatch, getState) => {
  try {
    dispatch(declineArticlePostRequested());
    await declineArticle(slug);
    const articles = getState().view.feed ?? [];
    articles.forEach((element) => {
      if (element.slug === slug) {
        dispatch(setViewArticle({ ...element, state: 'declined' }));
      }
    });
    dispatch(getPublicFeedThunk());
    dispatch(declineArticlePostSucceeded());
  } catch (error) {
    dispatch(declineArticlePostFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};
export default declineArticleThunk;
