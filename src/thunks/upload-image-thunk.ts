import { AxiosError } from 'axios';
import { AppThunk } from '../store/store.types';
import {
  uploadImageRequested,
  uploadImageSucceeded,
  uploadImageFailed,
  setImageURLProfile,
  setImageURL,
} from '../store';
import { uploadImage } from '../services/api';
import { makeErrorObject } from '../services/helpers';
import { TAPIError, TAPIResponse } from '../services/api.types';
import { API_ROOT, IMAGES_ROUTE } from '../constants';

const uploadImageThunk: AppThunk = (file: FormData, imageSource: string) => async (dispatch) => {
  dispatch(uploadImageRequested());
  try {
    const res: TAPIResponse = await uploadImage(file);
    dispatch(uploadImageSucceeded(res));
    const arr = res.data.url.split('/');
    const imageUrlFileName = arr[arr.length - 1];
    if (imageSource === 'profile') {
      dispatch(setImageURLProfile(`${API_ROOT}${IMAGES_ROUTE}${imageUrlFileName}`));
    }
    if (imageSource === 'article') {
      dispatch(setImageURL(`${API_ROOT}${IMAGES_ROUTE}${imageUrlFileName}`));
    }
  } catch (error) {
    dispatch(
      uploadImageFailed(makeErrorObject(error as AxiosError<TAPIError>)),
    );
  }
};

export default uploadImageThunk;
