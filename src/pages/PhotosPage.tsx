import React, { Fragment } from "react";

import Banner from "../components/Banner";
import Photos from "../components/Photos";

const PhotosPage: React.FC = () => {
  return (
    <Fragment>
      <Banner />
      <Photos />
    </Fragment>
  );
};

export default PhotosPage;
