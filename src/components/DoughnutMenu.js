import React from "react";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import { Container, Typography, Box, Tabs, Tab } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function DoughnutMenu() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container disableGutters maxWidth="lg" className={classes.container}>
      <AntTabs value={value} onChange={handleChange} aria-label="ant example">
        <AntTab label="Tab 1" {...a11yProps(0)} />
        <AntTab label="Tab 2" {...a11yProps(1)} />
        <AntTab label="Tab 3" {...a11yProps(2)} />
      </AntTabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Container>
  );
}
