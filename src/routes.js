import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PhotosPage from "./pages/PhotosPage";
import CategoriesPage from "./pages/CategoriesPage";
import DetailPage from "./pages/DetailPage";
import PageNotFound from "./components/PageNotFound";
import VideosPage from "./pages/VideosPage";
import IllustrationsPage from "./pages/IllustrationsPage";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/?page=:page" exact>
        <HomePage />
      </Route>
      <Route path="/videos" exact>
        <VideosPage />
      </Route>
      <Route path="/illustrations" exact>
        <IllustrationsPage />
      </Route>
      <Route path="/photos/:title" exact>
        <PhotosPage />
      </Route>
      <Route path="/photos/category/:title" exact>
        <CategoriesPage />
      </Route>
      <Route path="/photos/detail/:id" exact>
        <DetailPage />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
