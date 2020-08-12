import {
  FETCH_REQUEST_VIDEOS,
  FETCH_RECEIVE_VIDEOS,
} from "../types/VideosTypes";
import { IState } from "../../interfaces/IState";
import { IAction } from "../../interfaces/IAction";
import { IVideos } from "../../interfaces/IVideos";

const initialState: IState = {
  videos: [],
  isFetching: true,
};

const VideosReducer = (
  state = initialState,
  action: IAction<string, IVideos>
) => {
  switch (action.type) {
    case FETCH_REQUEST_VIDEOS:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_RECEIVE_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default VideosReducer;
