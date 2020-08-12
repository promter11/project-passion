import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import Routes from "../../routes";

import styles from "./App.module.css";

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className="main">
        <Routes />
      </main>
      <Footer />
    </div>
  );
};
