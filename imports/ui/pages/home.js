import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Typography, Link } from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <Typography variant="h1">Home page</Typography>
      <Typography variant="h2">h2 title</Typography>
      <Typography variant="h3">h3 title</Typography>
      <Typography variant="h4">h4 title</Typography>
      <Link component={RouterLink} to="/test">
        Test page
      </Link>
    </div>
  );
}
