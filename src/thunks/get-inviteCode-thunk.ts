import { batch } from 'react-redux';
import { AxiosError } from 'axios';
import { AppThunk } from '../store/store.types';
import { fetchInviteCode } from '../services/api';
import { makeErrorObject } from '../services/helpers';
import { TAPIError } from '../services/api.types';
import { generateInviteCodeRequested, generateInviteCodeSucceeded, generateInviteCodeFailed } from '../store/apiSlice';
import { setGeneratedInviteCode } from '../store/viewSlice';

const GetInviteCodeThunk: AppThunk = () => async (dispatch) => {
  dispatch(generateInviteCodeRequested());
  try {
    const { data } = await fetchInviteCode();
    batch(() => {
      dispatch(setGeneratedInviteCode(data.code));
      dispatch(generateInviteCodeSucceeded());
    });
  } catch (error) {
    dispatch(generateInviteCodeFailed(makeErrorObject(error as AxiosError<TAPIError>)));
  }
};

export default GetInviteCodeThunk;
