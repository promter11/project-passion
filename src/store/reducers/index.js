import { combineReducers } from "redux";

import BannerReducer from "./BannerReducer";
import PhotosReducer from "./PhotosReducer";
import VideosReducer from "./VideosReducer";
import IllustrationsReducer from "./IllustrationsReducer";
import DetailPhotoReducer from "./DetailPhotoReducer";

const rootReducer = combineReducers({
  bannerData: BannerReducer,
  photosData: PhotosReducer,
  videosData: VideosReducer,
  illustrationsData: IllustrationsReducer,
  detailPhotoData: DetailPhotoReducer,
});

export default rootReducer;
