import React from "react";
import { Box, Hidden } from "@material-ui/core";
import HeroLeft1 from "../images/Hero-Image-Doughnuts-Left-1.png";
import HeroLeft2 from "../images/Hero-Image-Doughnuts-Left-2.png";
import HeroRight from "../images/Hero-Image-Doughnuts-Right.png";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  selector: {
    animation: "$spin 50s linear infinite",
  },
  "@keyframes spinRight": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  selectorRight: {
    animation: "$spin 50s linear infinite reverse",
  },
});

export default function Doughnuts() {
  const classes = useStyles();

  return (
    <Box style={{ display: "flex", justifyContent: "space-between" }}>
      <Hidden smDown>
        <Box>
          <div>
            <img
              className={clsx(classes.selector)}
              src={HeroLeft1}
              alt="doughnuts"
              style={{
                width: 250,
                marginLeft: 300,
                marginTop: -350,
                position: "fixed",
              }}
            />
          </div>
          <div>
            <img
              className={clsx(classes.selector)}
              src={HeroLeft2}
              alt="doughnuts"
              style={{
                width: 300,
                marginLeft: 0,
                marginTop: -200,
                position: "fixed",
              }}
            />
          </div>
        </Box>
        <div>
          <img
            src={HeroRight}
            className={clsx(classes.selectorRight)}
            alt="doughnuts again"
            style={{
              width: 450,
              marginRight: 100,
              marginTop: -350,
              position: "sticky",
            }}
          />
        </div>
      </Hidden>
      <Hidden mdUp>
        <Box>
          <div>
            <img
              className={clsx(classes.selector)}
              src={HeroLeft1}
              alt="doughnuts"
              style={{
                width: 150,
                marginLeft: 0,
                marginTop: -350,
                position: "fixed",
              }}
            />
          </div>
          <div>
            <img
              className={clsx(classes.selector)}
              src={HeroLeft2}
              alt="doughnuts"
              style={{
                width: 200,
                marginLeft: -100,
                marginTop: -200,
                position: "fixed",
              }}
            />
          </div>
        </Box>
        <div>
          <img
            src={HeroRight}
            className={clsx(classes.selectorRight)}
            alt="doughnuts again"
            style={{
              width: 250,
              marginRight: -100,
              marginTop: -450,
              position: "sticky",
            }}
          />
        </div>
      </Hidden>
    </Box>
  );
}
