import {
  FETCH_REQUEST_ILLUSTRATIONS,
  FETCH_RECEIVE_ILLUSTRATIONS,
} from "../types/IllustrationsTypes";
import { IState } from "../../interfaces/IState";
import { IAction } from "../../interfaces/IAction";
import { IPhotos } from "../../interfaces/IPhotos";

const initialState: IState = {
  illustrations: [],
  isFetching: true,
};

const IllustrationsReducer = (
  state = initialState,
  action: IAction<string, IPhotos>
) => {
  switch (action.type) {
    case FETCH_REQUEST_ILLUSTRATIONS:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_RECEIVE_ILLUSTRATIONS:
      return {
        ...state,
        illustrations: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default IllustrationsReducer;
