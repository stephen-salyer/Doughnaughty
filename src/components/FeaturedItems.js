import {
  Container,
  Typography,
  Box,
  CardMedia,
  List,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import React from "react";
import LongChocJohn from "../images/Long-Choc-John.png";
import CerealTop from "../images/Cereal-Top.png";
import StrawberryGF from "../images/Strawberry-GF.png";
import Drumstick from "../images/Drumstick.png";
import BigOleBear from "../images/Big-Ole-Bear.png";
import Vampire from "../images/Vampire.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 96,
    paddingLeft: 24,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 24,
    },
  },
  scrollContainer: {
    display: "flex",
    overflowY: "hidden",
    overflowX: "hidden",
    [theme.breakpoints.down("md")]: {
      overflowX: "scroll",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
  featuredItems: {
    width: 192,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    [theme.breakpoints.down("xs")]: {
      width: "33vw",
      height: "33vw",
    },
  },
  cardMedia: {
    height: "192px",
    width: "192px",
    [theme.breakpoints.down("xs")]: {
      width: "33vw",
      height: "33vw",
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
    cost: "1.99",
  },
  {
    name: "Strawberry (GF)",
    img: StrawberryGF,
    alt: "Strawberry (GF)",
    cost: "2.19",
  },
  {
    name: "Drumstick",
    img: Drumstick,
    alt: "Drumstick",
    cost: "1.49",
  },
  {
    name: "Big Ole Bear",
    img: BigOleBear,
    alt: "Big Ole Bear",
    cost: "3.49",
  },
  {
    name: "Vampire",
    img: Vampire,
    alt: "Vampire",
    cost: "2.19",
  },
];

export default function FeaturedItems() {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth="lg" className={classes.container}>
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        Featured Items
      </Typography>
      <Box className={classes.scrollContainer}>
        <List style={{ display: "flex" }}>
          {FeaturedList.map(({ name, img, alt, cost }, i) => (
            <CardActionArea key={i} style={{ borderRadius: 5 }}>
              <CardContent className={classes.featuredItems}>
                <CardMedia
                  component="img"
                  alt={alt}
                  className={classes.cardMedia}
                  image={img}
                  title={name}
                />

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
              </CardContent>
            </CardActionArea>
          ))}
        </List>
      </Box>
    </Container>
  );
}
