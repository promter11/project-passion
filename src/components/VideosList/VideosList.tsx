import React from "react";
import { IProps } from "../../interfaces/IProps";
import { IVideos } from "../../interfaces/IVideos";

import styles from "./VideosList.module.css";

export const VideosList: React.FC<IProps<IVideos>> = ({ videos }) => {
  return (
    <ul className={styles.list}>
      {videos.map(({ id, videos }: IVideos) => {
        return (
          <li key={id} className={styles.item}>
            <video className={styles.video} src={videos.small.url} controls />
          </li>
        );
      })}
    </ul>
  );
};
