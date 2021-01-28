import { Container, Typography, Box, CardMedia } from "@material-ui/core";
import React from "react";
import LongChocJohn from "../images/Long-Choc-John.png";
import CerealTop from "../images/Cereal-Top.png";
import StrawberryGF from "../images/Strawberry-GF.png";
import Drumstick from "../images/Drumstick.png";
import BigOleBear from "../images/Big-Ole-Bear.png";
import Vampire from "../images/Vampire.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  scrollContainer: {
    display: "flex",
    height: 300,
    overflowY: "hidden",
    overflowX: "hidden",
    [theme.breakpoints.down("md")]: {
      overflowX: "scroll",
    },
  },
}));

const FeaturedList = [
  {
    name: "Long-Choc-John",
    img: LongChocJohn,
    alt: "Long Choc John",
    cost: "2.49",
  },
  {
    name: "Cereal Top",
    img: CerealTop,
    alt: "Cereal Top",
    cost: "1,99",
  },
  {
    name: "Strawberry (GF)",
    img: StrawberryGF,
    alt: "Strawberry (GF)",
    cost: "2.19",
  },
  {
    name: "Long-Choc-John",
    img: Drumstick,
    alt: "Long Choc John",
    cost: "2.49",
  },
  {
    name: "Long-Choc-John",
    img: BigOleBear,
    alt: "Long Choc John",
    cost: "2.49",
  },
  {
    name: "Long-Choc-John",
    img: Vampire,
    alt: "Long Choc John",
    cost: "2.49",
  },
];

export default function FeaturedItems() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" style={{ marginTop: 96 }}>
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        Featured Items
      </Typography>
      <Box pt={2} className={classes.scrollContainer}>
        {FeaturedList.map(({ name, img, alt, cost }, i) => (
          <Box pr={2} key={i}>
            <Box
              style={{
                width: 192,
                height: 192,
                display: "flex",
                FlexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                alt={alt}
                height="192"
                width="192"
                image={img}
                title={name}
              />
            </Box>
            <Typography variant="subtitle1" style={{ fontWeight: "600" }}>
              {name}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              style={{ lineHeight: 1 }}
            >
              ${cost}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
