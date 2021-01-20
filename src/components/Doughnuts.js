import React from "react";
import { Box } from "@material-ui/core";
import HeroLeft from "../images/Hero-Image-Doughnuts-Left.png";
import HeroRight from "../images/Hero-Image-Doughnuts-Right.png";

export default function Doughnuts() {
  return (
    <Box style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <img
          src={HeroLeft}
          alt="doughnuts"
          style={{
            width: 600,
            marginLeft: -100,
            marginTop: -360,
            position: "fixed",
          }}
        />
      </div>
      <div>
        <img
          src={HeroRight}
          alt="doughnuts again"
          style={{
            width: 450,
            marginRight: 100,
            marginTop: -350,
            position: "sticky",
          }}
        />
      </div>
    </Box>
  );
}
