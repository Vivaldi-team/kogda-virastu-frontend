import { AxiosError } from 'axios';
import { AppThunk } from '../store/store.types';
import { publishArticle } from '../services/api';
import {
  publishArticlePostRequested,
  publishArticlePostSucceeded,
  publishArticlePostFailed,
  setViewArticle,
} from '../store';
import { TAPIError } from '../services/api.types';
import { makeErrorObject } from '../services/helpers';
import getPublicFeedThunk from './get-public-feed-thunk';

const publishArticleThunk: AppThunk = (slug: string) => async (dispatch, getState) => {
  try {
    dispatch(publishArticlePostRequested());
    await publishArticle(slug);
    const articles = getState().view.feed ?? [];
    articles.forEach((element) => {
      if (element.slug === slug) {
        dispatch(setViewArticle({ ...element, state: 'published' }));
      }
    });
    dispatch(getPublicFeedThunk());
    dispatch(publishArticlePostSucceeded());
  } catch (error) {
    dispatch(publishArticlePostFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};
export default publishArticleThunk;
