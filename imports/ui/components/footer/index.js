import React from "react";
import styled from "styled-components";

import { Container, Typography } from "@material-ui/core";

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default function Footer() {
  return (
    <StyledFooter className="footer">
      <Container>
        <Typography>Some footer content</Typography>
      </Container>
    </StyledFooter>
  );
}
