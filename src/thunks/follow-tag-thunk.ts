import { AxiosError } from 'axios';
import { AppThunk } from '../store/store.types';
import { followTag } from '../services/api';
import {
  followTagRequested,
  followTagSucceeded,
  followTagFailed,
  setFollowTags,
} from '../store';
import { makeErrorObject } from '../services/helpers';
import { TAPIError } from '../services/api.types';

const followTagThunk: AppThunk = (tag: string) => async (dispatch, getState) => {
  const { followTags } = getState().view;
  dispatch(followTagRequested());
  try {
    await followTag(tag);
    dispatch(followTagSucceeded());
    if (followTags) {
      dispatch(setFollowTags([...followTags, tag]));
    } else {
      dispatch(setFollowTags([tag]));
    }
  } catch (error) {
    dispatch(followTagFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};
export default followTagThunk;
