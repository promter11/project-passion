import React, { Fragment } from "react";

import Banner from "../components/Banner";
import Videos from "../components/Videos";

const VideosPage: React.FC = () => {
  return (
    <Fragment>
      <Banner />
      <Videos />
    </Fragment>
  );
};

export default VideosPage;
