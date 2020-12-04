import React, { Suspense, lazy } from "react";
import { Link, Switch, Route } from "react-router-dom";

const Test1 = lazy(() => import("/imports/ui/components/tests/test-1.js"));
const Test2 = lazy(() => import("/imports/ui/components/tests/test-2.js"));

export default function Home() {
  return (
    <div>
      <h1>Test page</h1>
      <div>
        <Link to="/">Home page</Link>
      </div>
      <div>
        <Link to="/test/1">Test 1</Link>
      </div>
      <div>
        <Link to="/test/2">Test 2</Link>
      </div>
      <div style={{ margin: "20px 0" }}>
        <Suspense fallback={<div>loading tests...</div>}>
          <Switch>
            <Route path="/test/1" component={Test1} />
            <Route path="/test/2" component={Test2} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}
