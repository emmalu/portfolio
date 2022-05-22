import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import "fontsource-montserrat";
import PortfolioData from "./PortfolioData";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    backgroundColor: "#ebebeb",
  },
}));

export default function PortfolioTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        variant="fullWidth"
        value={value}
        indicatorColor="primary"
        onChange={handleChange}
        aria-label="Portfolio tabs"
        TabIndicatorProps={{
          style: { background: "#CAC486", height: "1vh", top: "35px" },
        }}
        centered
      >
        <Tab color="#000" label="Work" {...a11yProps(0)} />
        <Tab label="Creds" {...a11yProps(1)} />
        <Tab label="Bytes" {...a11yProps(2)} />
      </Tabs>
      <TabPanel className={classes.tabs} value={value} index={0}>
        <div
          className="flex items-start bg-ep-blue-dark text-white sm:text-sm px-4 py-3 mb-3"
          role="alert"
        >
          <span>
            <span className="text-ep-yellow font-semibold">
              I love what I do!
            </span>{" "}
            Whether it's creating{" "}
            <span class="font-semibold">beautiful maps</span> or{" "}
            <span class="font-semibold">meaningful visualizations</span>, I'm
            moved by the magic of{" "}
            <span class="font-semibold">geographic data</span>,{" "}
            <span class="font-semibold"> software engineering</span>,{" "}
            <span class="font-semibold">drone footage</span>, creative
            <span class="font-semibold"> graphics &amp; design</span>.
          </span>
        </div>
        <PortfolioData type={"projects"} />
      </TabPanel>
      <TabPanel className={classes.tabs} value={value} index={1}>
        <PortfolioData type={"skills"} />
        <PortfolioData type={"work"} />
      </TabPanel>
      <TabPanel className={classes.tabs} value={value} index={2}>
        <div
          className="flex items-start bg-ep-blue-dark text-white sm:text-sm font-bold px-4 py-3 mb-3"
          role="alert"
        >
          <span>
            In case you're interested: here is{" "}
            <em className="text-ep-yellow">some</em> of my most favorite,{" "}
            <span className="text-ep-yellow">inspiring content</span> on the
            web.
          </span>
        </div>
        <PortfolioData type={"extras"} />
      </TabPanel>
    </div>
  );
}
