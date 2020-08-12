import { FETCH_RECEIVE_BANNER } from "../types/BannerTypes";

export const receiveBanner = (payload: string) => {
  return {
    type: FETCH_RECEIVE_BANNER,
    payload,
  };
};
