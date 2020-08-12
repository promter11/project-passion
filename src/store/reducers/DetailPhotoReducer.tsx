import {
  FETCH_REQUEST_DETAIL_PHOTO,
  FETCH_RECEIVE_DETAIL_PHOTO,
} from "../types/DetailPhotoTypes";
import { IState } from "../../interfaces/IState";
import { IAction } from "../../interfaces/IAction";
import { IPhotos } from "../../interfaces/IPhotos";

const initialState: IState = {
  photo: [],
  isFetching: true,
};

const DetailPhotoReducer = (
  state = initialState,
  action: IAction<string, IPhotos>
) => {
  switch (action.type) {
    case FETCH_REQUEST_DETAIL_PHOTO:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_RECEIVE_DETAIL_PHOTO:
      return {
        ...state,
        isFetching: false,
        photo: action.payload,
      };

    default:
      return state;
  }
};

export default DetailPhotoReducer;
