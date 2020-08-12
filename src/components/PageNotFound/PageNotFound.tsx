import React from "react";

import styles from "./PageNotFound.module.css";

export const PageNotFound: React.FC = () => {
  return (
    <section className={styles.page}>
      <div className="container">
        <p className={styles.text}>Page not found</p>
      </div>
    </section>
  );
};
