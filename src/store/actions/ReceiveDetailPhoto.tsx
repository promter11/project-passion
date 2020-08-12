import {
  FETCH_REQUEST_DETAIL_PHOTO,
  FETCH_RECEIVE_DETAIL_PHOTO,
} from "../types/DetailPhotoTypes";
import { Dispatch } from "redux";

import PhotoService from "../../services/PhotoService";

export const requestDetailPhoto = () => {
  return {
    type: FETCH_REQUEST_DETAIL_PHOTO,
  };
};

export const receiveDetailPhoto = (payload: object) => {
  return {
    type: FETCH_RECEIVE_DETAIL_PHOTO,
    payload,
  };
};

export const fetchDetailPhoto = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestDetailPhoto());

    const photoService = new PhotoService();
    const result = await photoService.getPhotoById(id);

    return dispatch(receiveDetailPhoto(result));
  };
};
