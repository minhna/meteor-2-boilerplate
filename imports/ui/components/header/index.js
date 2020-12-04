import React from "react";
import styled from "styled-components";

import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  IconButton,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import Auth from "/imports/ui/components/account/auth.js";
import ThemeSwitcher from "/imports/ui/components/themes-switcher.js";

const StyledHeader = styled.div`
  .right-items {
    display: flex;
    align-items: center;
    flex-flow: row-reverse;
    width: 100%;
  }
`;

export default function Header() {
  return (
    <StyledHeader className="header">
      <Container>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">News</Typography>
            <div className="right-items">
              <Auth />
              <ThemeSwitcher />
            </div>
          </Toolbar>
        </AppBar>
      </Container>
    </StyledHeader>
  );
}
