import React from "react";
import { Link } from "react-router-dom";
import { IProps } from "../../interfaces/IProps";
import { IPhotos } from "../../interfaces/IPhotos";

import Eye from "../../assets/images/icons/eye.svg";
import Comment from "../../assets/images/icons/comment.svg";
import Heart from "../../assets/images/icons/heart.svg";
import styles from "./PhotosList.module.css";

export const PhotosList: React.FC<IProps<IPhotos>> = ({ photos }) => {
  return (
    <ul className={styles.list}>
      {photos.map(
        ({ id, webformatURL, user, tags, views, likes, comments }: IPhotos) => (
          <li className={styles.item} key={id}>
            <div
              className={styles.block}
              style={{
                background:
                  `rgba(0, 0, 0, 0.5) url(${webformatURL})` +
                  `no-repeat center center / cover`,
              }}
            >
              <Link className={styles.link} to={`/photos/detail/${id}`} />
              <div className={styles.author}>
                Author: <span className={styles.name}>{user}</span>
              </div>
              <div className={styles.tags}>Tags: {tags}</div>
              <div className={styles.wrapper}>
                <div className={styles.views}>
                  <img className={styles.icon} src={Eye} alt="Views" />
                  <span className={styles.text}>{views}</span>
                </div>
                <div className={styles.likes}>
                  <img className={styles.icon} src={Heart} alt="Heart" />
                  <span className={styles.text}>{likes}</span>
                </div>
                <div className={styles.comments}>
                  <img className={styles.icon} src={Comment} alt="Comment" />
                  <span className={styles.text}>{comments}</span>
                </div>
              </div>
            </div>
          </li>
        )
      )}
    </ul>
  );
};
