import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { receiveBanner } from "../../store/actions/ReceiveBanner";
import { IRootState } from "../../interfaces/IRootState";

import styles from "./Banner.module.css";

export const Banner: React.FC = () => {
  const title = useSelector((state: IRootState) => state.bannerData.data.title);
  const description = useSelector(
    (state: IRootState) => state.bannerData.data.description
  );
  const image = useSelector((state: IRootState) => state.bannerData.data.image);

  const dispatch = useDispatch();

  const { url } = useRouteMatch();
  const path: string = url.replace(/[^a-z]+/gi, "");

  useEffect(() => {
    dispatch(receiveBanner(path));
  }, [dispatch, path]);

  return (
    <section
      className={styles.banner}
      style={{
        background:
          `rgba(0, 0, 0, 0.25) url(${image})` +
          `no-repeat center center / cover`,
      }}
    >
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{description}</p>
      </div>
    </section>
  );
};
