import { Container, Typography } from "@material-ui/core";
import React from "react";
import LongChocJohn from "../images/Long-Choc-John.png";

export default function FeaturedItems() {
  return (
    <Container maxWidth="md" style={{ marginTop: 96 }}>
      <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
        Featured Items
      </Typography>
      <img
        src={LongChocJohn}
        alt="doughnuts"
        style={{
          width: 250,
          position: "fixed",
        }}
      />
    </Container>
  );
}
