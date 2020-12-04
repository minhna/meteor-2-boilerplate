import React, { useState } from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "@material-ui/core/styles";

import DefaultTheme from "/imports/ui/themes/default.js";
import DarkTheme from "/imports/ui/themes/dark.js";

export const MyThemeContext = React.createContext("theme");

export const MyThemeProvider = (props) => {
  const { children } = props;

  const [theme, setTheme] = useState("default");

  let theTheme;
  switch (theme) {
    case "dark":
      theTheme = DarkTheme;
      break;

    default:
      theTheme = DefaultTheme;
      break;
  }

  return (
    <MyThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theTheme}>{children}</ThemeProvider>
    </MyThemeContext.Provider>
  );
};

MyThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ThemeConsumer = MyThemeContext.Consumer;
