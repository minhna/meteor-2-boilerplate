import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

const HomePage = lazy(() => import("/imports/ui/pages/home.js"));
const TestPage = lazy(() => import("/imports/ui/pages/test.js"));

export default MainRoutes = () => (
  <Suspense fallback={<div>loading...</div>}>
    <Switch>
      <Route path="/test" component={TestPage} />
      <Route component={HomePage} />
    </Switch>
  </Suspense>
);
