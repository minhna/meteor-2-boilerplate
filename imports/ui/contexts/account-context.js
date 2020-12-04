import React, { useState } from "react";
import PropTypes from "prop-types";

export const AccountContext = React.createContext("account");

export const AccountProvider = (props) => {
  const { children } = props;

  const [loggedIn, setLoggedIn] = useState(false);

  const account = {
    isLoggedIn: loggedIn,
  };

  return (
    <AccountContext.Provider value={{ ...account, setLoggedIn }}>
      {children}
    </AccountContext.Provider>
  );
};

AccountProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AccountConsumer = AccountContext.Consumer;
