import React from "react";
import { useRouteMatch } from "react-router-dom";

import styles from "./Title.module.css";

export const Title: React.FC = () => {
  const { params } = useRouteMatch();

  return (
    <div className="container">
      <h2 className={styles.heading}>Photos in category: {params.title}</h2>
    </div>
  );
};
