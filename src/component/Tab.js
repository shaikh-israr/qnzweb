import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 400,
  },
}));

function FullWidthTabs() {
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
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{ outline: "none" }}
        >
          <Tab
            label="Product Description"
            style={{
              background: "#ed8a63",
              color: "white",
              fontSize: "12px",
              outline: "none",
            }}
          />
          <Tab
            label="Product Details"
            style={{
              background: "gray",
              color: "white",
              fontSize: "12px",
              outline: "none",
            }}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <p>
            101 Panchatantra Stories- a collection of all-time favourite stories
            written for children. These stories teach us lessons about wisdom,
            courage, bravery, wickedness and so on. Compiled in simple language,
            supported by beautiful illustrations each story of this book makes
            the reading on enjoyable experience.
          </p>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <p>
            Paperback : 64 pages Item Weight : 281 g ISBN-10 : 938797149X
            ISBN-13 : 978-9387971493 Dimensions : 24 x 18 x 1 cm Publisher :
            Dreamland Publications (3 September 2019) Reading level : 7 - 12
            years Language: : English
          </p>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
export default FullWidthTabs;
