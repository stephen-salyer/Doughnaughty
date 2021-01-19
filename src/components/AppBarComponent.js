import { AppBar, Avatar, IconButton, Toolbar } from "@material-ui/core";
import avatarImage from "../images/Danielle.png";
import logo from "../images/Doughnaughty-Logo.png";
import React from "react";

export default function AppBarComponent() {
  return (
    <AppBar position="static" style={{ background: "#FFFFFF" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton edge="start" aria-label="home">
          <img style={{ width: 80 }} src={logo} alt="Doughnaughty logo" />
        </IconButton>
        <Avatar edge="end" src={avatarImage} alt="Danielle" />
      </Toolbar>
    </AppBar>
  );
}
