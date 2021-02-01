import { Container, Paper, InputBase } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "8px 8px",
    display: "flex",
    alignItems: "center",
    width: 300,
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

export default function Menu() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Paper
        style={{ backgroundColor: grey[100] }}
        elevation={0}
        component="form"
        className={classes.root}
      >
        <Search style={{ color: grey[400] }} />
        <InputBase
          className={classes.input}
          placeholder="Look us up and down..."
        />
      </Paper>
    </Container>
  );
}
