import React, { lazy, useContext } from "react";
import { Route, useHistory } from "react-router-dom";

import { AccountContext } from "/imports/ui/contexts/account-context.js";

const NotAuthorized = lazy(() =>
  import("/imports/ui/components/not-authorized.js")
);

export default function SecureRoute({ ...rest }) {
  const { push } = useHistory();

  const { isLoggedIn } = useContext(AccountContext);

  if (isLoggedIn) {
    return <Route {...rest} />;
  }

  // send user to the homepage?
  // push("/");
  // return null;
  return <NotAuthorized />;
}
