import React from "react";
import { IProps } from "../../interfaces/IProps";
import { IPhotos } from "../../interfaces/IPhotos";

import Download from "../../assets/images/icons/download.svg";
import styles from "./IllustrationsList.module.css";

export const IllustrationsList: React.FC<IProps<IPhotos>> = ({
  illustrations,
}) => {
  return (
    <ul className={styles.list}>
      {illustrations.map(({ id, webformatURL, user, pageURL }: IPhotos) => {
        return (
          <li key={id} className={styles.item}>
            <div
              className={styles.block}
              style={{
                background: `rgba(0, 0, 0, 0.5) url(${webformatURL}) no-repeat center center / cover`,
              }}
            >
              <span className={styles.author}>{user}</span>
              <a className={styles.link} href={pageURL}>
                <img className={styles.icon} src={Download} alt="Download" />
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
