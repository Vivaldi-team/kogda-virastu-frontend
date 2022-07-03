import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { AppThunk } from '../store/store.types';
import { fetchFollowTags } from '../services/api';
import {
  followTagsFetchRequested,
  followTagsFetchSucceeded,
  followTagsFetchFailed,
  setFollowTags,
} from '../store';
import { makeErrorObject } from '../services/helpers';
import { TAPIError } from '../services/api.types';

const getFollowTagsThunk : AppThunk = () => async (dispatch) => {
  dispatch(followTagsFetchRequested());
  try {
    const { data: { tags } } = await fetchFollowTags();
    batch(() => {
      dispatch(setFollowTags(tags));
      dispatch(followTagsFetchSucceeded());
    });
  } catch (error) {
    dispatch(followTagsFetchFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};

export default getFollowTagsThunk;
