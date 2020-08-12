import React, { Fragment } from "react";

import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Photos from "../components/Photos";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <Banner />
      <Categories />
      <Photos />
    </Fragment>
  );
};

export default HomePage;
