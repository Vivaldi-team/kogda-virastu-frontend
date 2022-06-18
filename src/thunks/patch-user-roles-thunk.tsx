import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { patchUserRoles } from '../services/api';
import {
  userRolesPatchFailed,
  userRolesPatchRequested,
  userRolesPatchSucceeded,
} from '../store';
import getAllUsersThunk from './get-all-users-thunk';
import { AppThunk } from '../store/store.types';
import { makeErrorObject } from '../services/helpers';
import { TAPIError, TAPIPatchUserData } from '../services/api.types';

const patchUserRolesThunk: AppThunk = (username: string, roles: string[]) => async (dispatch) => {
  dispatch(userRolesPatchRequested());
  const userData: TAPIPatchUserData = {
    username: username,
    roles: roles,
  };
  try {
    await patchUserRoles(userData);
    batch(() => {
      dispatch(getAllUsersThunk());
      dispatch(userRolesPatchSucceeded());
    });
  } catch (error) {
    dispatch(userRolesPatchFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};

export default patchUserRolesThunk;
