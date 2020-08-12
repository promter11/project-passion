import {
  FETCH_REQUEST_ILLUSTRATIONS,
  FETCH_RECEIVE_ILLUSTRATIONS,
} from "../types/IllustrationsTypes";
import { Dispatch } from "redux";

import PhotoService from "../../services/PhotoService";

const requestIllustrations = () => {
  return {
    type: FETCH_REQUEST_ILLUSTRATIONS,
  };
};

const receiveIllustrations = (payload: object) => {
  return {
    type: FETCH_RECEIVE_ILLUSTRATIONS,
    payload,
  };
};

export const fetchIllustrations = (tags: string = "surrealism") => {
  return async (dispatch: Dispatch) => {
    dispatch(requestIllustrations());

    const photoService = new PhotoService();
    const result = await photoService.getIllustrations(tags);

    return dispatch(receiveIllustrations(result));
  };
};
