import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GpsFixed, LocationOn } from "@material-ui/icons";
import React from "react";

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
}));

export default function HeroInfo() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" style={{ marginTop: -260 }}>
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
          <Typography variant="body1" component="body1">
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
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            flexDirection: "column",
            marginTop: 16,
          }}
        >
          <Typography variant="body2" component="body2">
            Find out if we deliver to you!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
