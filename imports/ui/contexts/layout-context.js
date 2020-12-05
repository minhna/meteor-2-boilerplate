import React, { useState } from "react";
import PropTypes from "prop-types";

import DefaultLayout from "/imports/ui/layouts/default.js";
import SingleLayout from "/imports/ui/layouts/single.js";

export const LayoutContext = React.createContext("layout");

export const LayoutProvider = (props) => {
  const { children, layout: defaultLayout } = props;

  const [layout, setLayout] = useState(defaultLayout || "default");

  let TheLayout;
  switch (layout) {
    case "single":
      TheLayout = SingleLayout;
      break;

    default:
      TheLayout = DefaultLayout;
      break;
  }

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      <TheLayout>{children}</TheLayout>
    </LayoutContext.Provider>
  );
};

LayoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
  layout: PropTypes.string,
};

LayoutProvider.defaultProp = {
  layout: "default",
};

export const LayoutConsumer = LayoutContext.Consumer;
