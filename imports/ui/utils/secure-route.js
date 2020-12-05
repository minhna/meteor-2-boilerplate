import React, { lazy, useContext } from "react";
import { Route } from "react-router-dom";

import { AccountContext } from "/imports/ui/contexts/account-context.js";

const NotAuthorized = lazy(() =>
  import("/imports/ui/components/not-authorized.js")
);

export default function SecureRoute({ ...rest }) {
  const { isLoggedIn } = useContext(AccountContext);

  if (isLoggedIn) {
    return <Route {...rest} />;
  }

  return <NotAuthorized />;
}
