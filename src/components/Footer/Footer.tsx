import React from "react";

import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.text}>Passion &copy; All rights reserved.</p>
      </div>
    </footer>
  );
};
