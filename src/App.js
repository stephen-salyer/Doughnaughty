import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBarComponent from "./components/AppBarComponent";
import Hero from "./components/Hero";
import Doughnuts from "./components/Doughnuts";
import HeroInfo from "./components/HeroInfo";
import "./App.css";
import { green } from "@material-ui/core/colors";
import FeaturedItems from "./components/FeaturedItems";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#B5F3D4",
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    h3: {
      fontFamily: '"Nunito"',
    },
    h6: {
      fontFamily: '"Nunito"',
    },
    subtitle1: {
      fontFamily: '"Nunito"',
    },
    body1: {
      fontFamily: '"Open Sans"',
    },
    body2: {
      fontFamily: '"Open Sans"',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBarComponent />
        <Hero />
        <Doughnuts />
        <HeroInfo />
        <FeaturedItems />
      </div>
    </ThemeProvider>
  );
}
