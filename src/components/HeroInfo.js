import {
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Paper,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GpsFixed, LocationOn } from "@material-ui/icons";
import React from "react";
import grubhub from "../images/grubhub-logo.png";
import doordash from "../images/doordash-logo.png";
import postmates from "../images/postmates-Logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  margins: {
    marginTop: -350,
    [theme.breakpoints.down("sm")]: {
      marginTop: -310,
    },
  },
}));

const locations = [
  { city: "St. Louis" },
  { city: "Maryland Heights" },
  { city: "Creve Coeur" },
  { city: "Clayton" },
];

const logos = [
  {
    logo: doordash,
    alt: "Doordash-Logo",
    width: 86,
    height: 60,
    link: "https://www.doordash.com/en-US",
  },
  {
    logo: postmates,
    alt: "Postmates-Logo",
    width: 41,
    height: 40,
    link: "https://postmates.com/",
  },
  {
    logo: grubhub,
    alt: "Grubhub-Logo",
    width: 86,
    height: 61,
    link: "https://www.grubhub.com/lets-eat",
  },
];

export default function HeroInfo() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.margins}>
      <Box style={{ position: "relative" }}>
        <Box
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: 16,
          }}
        >
          <Typography variant="h3" component="h3">
            We Deliver
          </Typography>
          <Typography variant="body1">
            Find out if we deliver to you!
          </Typography>
        </Box>
        <Paper component="form" className={classes.root}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <LocationOn style={{ color: "#50E895" }} />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Type your address here"
            inputProps={{ "aria-label": "Type your address here" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            style={{ marginRight: 8 }}
          >
            <GpsFixed />
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            style={{ boxShadow: "0px 0px rgba(0,0,0,0)" }}
          >
            Search
          </Button>
        </Paper>
        <Box
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 16,
            }}
          >
            {locations.map(({ city }) => (
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ marginRight: 8 }}
              >
                {city}
              </Typography>
            ))}
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 8,
            }}
          >
            {logos.map(({ logo, alt, width, height, link }) => (
              <Link href={link} style={{ paddingRight: 8 }}>
                <Button>
                  <img
                    src={logo}
                    alt={alt}
                    style={{ width: width, height: height }}
                  />
                </Button>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
