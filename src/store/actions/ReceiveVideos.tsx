import {
  FETCH_REQUEST_VIDEOS,
  FETCH_RECEIVE_VIDEOS,
} from "../types/VideosTypes";
import { Dispatch } from "redux";

import PhotoService from "../../services/PhotoService";

const requestVideos = () => {
  return {
    type: FETCH_REQUEST_VIDEOS,
  };
};

const receiveVideos = (payload: object) => {
  return {
    type: FETCH_RECEIVE_VIDEOS,
    payload,
  };
};

export const fetchVideos = (tags: string = "videos") => {
  return async (dispatch: Dispatch) => {
    dispatch(requestVideos());

    const photoService = new PhotoService();
    const result = await photoService.getVideos(tags);

    return dispatch(receiveVideos(result));
  };
};
