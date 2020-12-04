import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";

const TestComponent = lazy(() => import("/imports/ui/components/test.js"));

export default MainRoutes = () => (
  <Suspense fallback={<div>loading...</div>}>
    <Route path="/test" exact component={TestComponent} />
  </Suspense>
);
