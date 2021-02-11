import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 96,
    paddingLeft: 24,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 24,
    },
  },
}));

const AntTabs = withStyles((theme) => ({
  indicator: {
    backgroundColor: "rgba(0, 0, 0, .85)",
  },
}))(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightMedium,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "rgba(0, 0, 0, .85)",
      opacity: 1,
    },
    "&$selected": {
      color: "rgba(0, 0, 0, .85)",
    },
    "&:focus": {
      color: "rgba(0, 0, 0, .85)",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

export default function DoughnutMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container disableGutters maxWidth="lg" className={classes.container}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Tab 1" />
          <AntTab label="Tab 2" />
          <AntTab label="Tab 3" />
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
    </Container>
  );
}
