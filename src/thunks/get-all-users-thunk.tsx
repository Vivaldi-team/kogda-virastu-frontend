import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { fetchAllUsers } from '../services/api';
import {
  allUsersRequested,
  allUsersRequestSucceeded,
  allUsersRequestFailed,
  setAllUsers,
} from '../store';
import { AppThunk } from '../store/store.types';
import { makeErrorObject } from '../services/helpers';
import { TAPIError } from '../services/api.types';

const getAllUsersThunk: AppThunk = () => async (dispatch) => {
  try {
    dispatch(allUsersRequested());
    const
      { data: { users } } = await fetchAllUsers();
    batch(() => {
      dispatch(setAllUsers(users));
      dispatch(allUsersRequestSucceeded());
    });
  } catch (error) {
    dispatch(allUsersRequestFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};

export default getAllUsersThunk;
