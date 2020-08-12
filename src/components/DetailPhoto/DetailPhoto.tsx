import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { fetchDetailPhoto } from "../../store/actions/ReceiveDetailPhoto";
import { IRootState } from "../../interfaces/IRootState";

import Spinner from "../Spinner";

import Heart from "../../assets/images/icons/heart.svg";
import Comment from "../../assets/images/icons/comment.svg";
import Eye from "../../assets/images/icons/eye.svg";
import Download from "../../assets/images/icons/download.svg";
import styles from "./DetailPhoto.module.css";

export const DetailPhoto: React.FC = () => {
  const photo = useSelector(
    (state: IRootState) => state.detailPhotoData.photo.hits
  );
  const isFetching = useSelector(
    (state: IRootState) => state.detailPhotoData.isFetching
  );

  const dispatch = useDispatch();

  const { params } = useRouteMatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchDetailPhoto(params.id));
    })();
  }, [dispatch, params.id]);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div className={styles.photo}>
      <div className="container">
        <h2 className={styles.title}>Photo's detail information</h2>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <img
              className={styles.img}
              src={photo[0].largeImageURL}
              alt="DetailPage"
            />
          </div>
          <div className={styles.right}>
            <ul className={styles.tags}>
              {photo[0].tags.split(", ").map((element: string) => (
                <li key={element} className={styles.tag}>
                  <Link
                    className={styles.tagLink}
                    to={`/photos/category/${element}/`}
                  >
                    {element}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.user}>
              <img
                className={styles.userImg}
                src={photo[0].userImageURL}
                alt="User"
              />
              <h4 className={styles.username}>{photo[0].user}</h4>
            </div>
            <ul className={styles.list}>
              <li className={styles.item}>
                <img className={styles.icon} src={Heart} alt="Heart" />
                <span className={styles.text}>{photo[0].likes}</span>
              </li>
              <li className={styles.item}>
                <img className={styles.icon} src={Comment} alt="Comment" />
                <span className={styles.text}>{photo[0].comments}</span>
              </li>
              <li className={styles.item}>
                <img className={styles.icon} src={Eye} alt="Eye" />
                <span className={styles.text}>{photo[0].views}</span>
              </li>
            </ul>
            <a
              className={styles.button}
              href={photo[0].pageURL}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className={styles.buttonImg} src={Download} alt="Download" />
              <span className={styles.buttonText}>Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
