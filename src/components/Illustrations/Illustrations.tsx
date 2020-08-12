import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIllustrations } from "../../store/actions/ReceiveIllustrations";
import { IRootState } from "../../interfaces/IRootState";

import IllustrationsList from "../IllustrationsList";
import Spinner from "../Spinner";

import styles from "./Illustrations.module.css";

export const Illustrations: React.FC = () => {
  const illustrations = useSelector(
    (state: IRootState) => state.illustrationsData.illustrations
  );
  const isFetching = useSelector(
    (state: IRootState) => state.illustrationsData.isFetching
  );

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchIllustrations());
    })();
  }, [dispatch]);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div className={styles.illustrations}>
      <div className="container">
        <IllustrationsList illustrations={illustrations.hits} />
      </div>
    </div>
  );
};
