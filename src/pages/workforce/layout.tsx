import React from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import Profile from "./components/profile";
import Bio from "./components/bio";

function Layout() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <Profile />
      <div className="col-span-2 bg-white p-3">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Bio" value="1" />
                <Tab label="Timesheet" value="2" />
                <Tab label="Integrity" value="3" />
                <Tab label="Relationships" value="4" />
                <Tab label="Training" value="5" />
                <Tab label="Files" value="6" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Bio />
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item Two</TabPanel>
            <TabPanel value="5">Item Three</TabPanel>
            <TabPanel value="6">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}

export default Layout;
