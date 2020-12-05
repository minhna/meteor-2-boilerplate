import React, { Suspense, lazy } from "react";
import { Link as RouterLink, Switch, Route } from "react-router-dom";

import { Typography, Link } from "@material-ui/core";

const Test1 = lazy(() => import("/imports/ui/components/tests/test-1.js"));
const Test2 = lazy(() => import("/imports/ui/components/tests/test-2.js"));
const TestLayouts = lazy(() =>
  import("/imports/ui/components/tests/test-layouts.js")
);

export default function Home() {
  return (
    <div>
      <Typography variant="h1">Test page</Typography>
      <div>
        <Link component={RouterLink} to="/">
          Home page
        </Link>
      </div>
      <div>
        <Link component={RouterLink} to="/test/1">
          Test 1
        </Link>
      </div>
      <div>
        <Link component={RouterLink} to="/test/2">
          Test 2
        </Link>
      </div>
      <div>
        <Link component={RouterLink} to="/test/layout">
          Test Layouts
        </Link>
      </div>
      <div style={{ margin: "20px 0" }}>
        <Suspense fallback={<div>loading tests...</div>}>
          <Switch>
            <Route path="/test/1" component={Test1} />
            <Route path="/test/2" component={Test2} />
            <Route path="/test/layout" component={TestLayouts} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}
