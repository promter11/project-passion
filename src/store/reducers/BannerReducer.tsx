import { FETCH_RECEIVE_BANNER } from "../types/BannerTypes";
import { IState } from "../../interfaces/IState";
import { IAction } from "../../interfaces/IAction";

import Home from "../../assets/images/pages/home.jpg";
import Videos from "../../assets/images/pages/animated.jpg";
import Illustrations from "../../assets/images/pages/illustrations.jpg";

const initialState: IState = {
  data: [],
  info: {
    home: {
      title: "Passion",
      description:
        "Find a HD wallpaper for your Mac, Windows, Desktop or Android device.",
      image: Home,
    },
    videos: {
      title: "Videos",
      description: "Discover our large variety of topics and our best videos.",
      image: Videos,
    },
    illustrations: {
      title: "Illustrations",
      description: "Check out some illustrations that we select for you.",
      image: Illustrations,
    },
  },
};

const BannerReducer = (
  state = initialState,
  action: IAction<string, string>
) => {
  switch (action.type) {
    case FETCH_RECEIVE_BANNER:
      return {
        ...state,
        data: state.info![action.payload || "home"],
      };

    default:
      return state;
  }
};

export default BannerReducer;
