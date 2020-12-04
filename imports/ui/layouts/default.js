import React from "react";
import PropTypes from "prop-types";

import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "/imports/ui/components/header";
import Footer from "/imports/ui/components/footer";

export default function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <CssBaseline />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
