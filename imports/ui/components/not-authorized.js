import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Typography, Link } from "@material-ui/core";

export default function NotAuthorized() {
  return (
    <div>
      <Typography variant="h1">403 Not Authorized</Typography>
      <Link component={RouterLink} to="/">
        Back to homepage
      </Link>
    </div>
  );
}
