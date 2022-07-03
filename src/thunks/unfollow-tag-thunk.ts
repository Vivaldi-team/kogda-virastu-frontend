import { AxiosError } from 'axios';
import { AppThunk } from '../store/store.types';
import {
  unfollowTagRequested,
  unfollowTagSucceeded,
  unfollowTagFailed,
  setFollowTags,
} from '../store';
import { unfollowTag } from '../services/api';
import { makeErrorObject } from '../services/helpers';
import { TAPIError } from '../services/api.types';

const unfollowTagThunk: AppThunk = (tag: string) => async (dispatch, getState) => {
  const { followTags } = getState().view;
  dispatch(unfollowTagRequested());
  try {
    await unfollowTag(tag);
    dispatch(unfollowTagSucceeded());
    if (followTags) {
      dispatch(setFollowTags(followTags.filter((el) => el !== tag)));
    }
  } catch (error) {
    dispatch(unfollowTagFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};

export default unfollowTagThunk;
