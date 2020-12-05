import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

const HomePage = lazy(() => import("/imports/ui/pages/home.js"));
const TestPage = lazy(() => import("/imports/ui/pages/test.js"));
const NotFoundPage = lazy(() => import("/imports/ui/pages/not-found.js"));

export default MainRoutes = () => (
  <Suspense fallback={<div>loading...</div>}>
    <Switch>
      <Route allowed path="/test" component={TestPage} />
      <Route path="/" exact component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
);
