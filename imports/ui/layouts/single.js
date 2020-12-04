import React from "react";
import PropTypes from "prop-types";

export default function SingleLayout({ children }) {
  return <div>{children}</div>;
}

SingleLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
