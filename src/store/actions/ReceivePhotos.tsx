import {
  FETCH_REQUEST_PHOTOS,
  FETCH_RECEIVE_PHOTOS,
} from "../types/PhotosTypes";
import { Dispatch } from "redux";

import PhotoService from "../../services/PhotoService";

const requestPhotos = () => {
  return {
    type: FETCH_REQUEST_PHOTOS,
  };
};

const receivePhotos = (payload: object) => {
  return {
    type: FETCH_RECEIVE_PHOTOS,
    payload,
  };
};

export const fetchPhotos = (tags: string = "home", page: number = 1) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestPhotos());

    const photoService = new PhotoService();
    const result = await photoService.getPhotos(tags, page);

    return dispatch(receivePhotos(result));
  };
};
