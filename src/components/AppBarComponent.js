import { AppBar, Avatar, Button, Toolbar } from "@material-ui/core";
import avatarImage from "../images/Danielle.png";
import logo from "../images/Doughnaughty-Logo-Long.png";
import React from "react";

export default function AppBarComponent() {
  return (
    <AppBar elevation={0} position="static" style={{ background: "#FFFFFF" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Button edge="start" aria-label="home">
          <img
            style={{ width: 230, marginBottom: -5 }}
            src={logo}
            alt="Doughnaughty logo"
          />
        </Button>
        <Avatar edge="end" src={avatarImage} alt="Danielle" />
      </Toolbar>
    </AppBar>
  );
}
