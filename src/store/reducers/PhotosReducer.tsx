import {
  FETCH_REQUEST_PHOTOS,
  FETCH_RECEIVE_PHOTOS,
} from "../types/PhotosTypes";
import { IPhotos } from "../../interfaces/IPhotos";
import { IState } from "../../interfaces/IState";
import { IAction } from "../../interfaces/IAction";

const initialState: IState = {
  photos: [],
  isFetching: true,
};

const PhotosReducer = (
  state = initialState,
  action: IAction<string, IPhotos>
) => {
  switch (action.type) {
    case FETCH_REQUEST_PHOTOS:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_RECEIVE_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default PhotosReducer;
