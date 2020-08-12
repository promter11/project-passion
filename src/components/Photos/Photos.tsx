import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "../../hooks/useQuery";
import { useRouteMatch } from "react-router-dom";
import { fetchPhotos } from "../../store/actions/ReceivePhotos";
import { IRootState } from "../../interfaces/IRootState";

import PhotosList from "../PhotosList";
import Pagination from "../Pagination";
import Spinner from "../Spinner";

import styles from "./Photos.module.css";

export const Photos: React.FC = () => {
  const photos = useSelector((state: IRootState) => state.photosData.photos);
  const isFetching = useSelector(
    (state: IRootState) => state.photosData.isFetching
  );

  const dispatch = useDispatch();

  const query = useQuery();
  const page: number = Number(query.get("page")) || 1;

  const { params } = useRouteMatch();

  const photosRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const scrollToRef = (): void => {
    window.scrollTo({
      top: photosRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    (async () => {
      await dispatch(fetchPhotos(params.title, page));
    })();
  }, [dispatch, params.title, page]);

  if (photos.total === 0) {
    return (
      <div className="container">
        <p className={styles.errorText}>
          No results were found for this request :(
        </p>
      </div>
    );
  }

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div className={styles.photos} ref={photosRef}>
      <div className="container">
        <PhotosList photos={photos.hits} />
        <Pagination page={page} scrollToRef={scrollToRef} />
      </div>
    </div>
  );
};
