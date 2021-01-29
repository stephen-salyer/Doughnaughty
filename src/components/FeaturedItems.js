import {
  Container,
  Typography,
  Box,
  CardMedia,
  List,
  ListItem,
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
    height: 250,
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
    height: 192,
    marginRight: 16,
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
    <Container disableGutters maxWidth="lg" className={classes.container}>
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        Featured Items
      </Typography>
      <Box className={classes.scrollContainer}>
        <List style={{ display: "flex" }}>
          {FeaturedList.map(({ name, img, alt, cost }, i) => (
            <div key={i}>
              <ListItem disableGutters className={classes.featuredItems}>
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
              </ListItem>
            </div>
          ))}
        </List>
      </Box>
    </Container>
  );
}
