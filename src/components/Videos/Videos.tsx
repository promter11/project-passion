import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideos } from "../../store/actions/ReceiveVideos";
import { IRootState } from "../../interfaces/IRootState";

import VideosList from "../VideosList";
import Spinner from "../Spinner";

import styles from "./Videos.module.css";

export const Videos: React.FC = () => {
  const videos = useSelector((state: IRootState) => state.videosData.videos);
  const isFetching = useSelector(
    (state: IRootState) => state.videosData.isFetching
  );

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchVideos());
    })();
  }, [dispatch]);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div className={styles.videos}>
      <div className="container">
        <VideosList videos={videos.hits} />
      </div>
    </div>
  );
};
