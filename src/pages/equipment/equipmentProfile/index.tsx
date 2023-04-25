import { Box, Tabs, Tab, Typography } from "@mui/material";
import React from "react";
import production1 from "assets/images/webp/login.webp";
import Integrity from "./Integrity";
import Bio from "./bio";
import Relationships from "./relationships";
import Hierarchy from "./hierarchy";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function EquipmentProfileLaypout() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="md:flex">
        <div className="bg-white p-4 rounded-2xl basis-1/4">
          <div className=" flex justify-center align-center">
            <img
              src={production1}
              alt=""
              className="h-32 m-5 w-32 rounded-3xl"
            />
          </div>
          <div className="text-center">
            <p className="font-semibold text-xs ">Electrict block moulding</p>
            <button
              type="button"
              className="circle w-auto px-4 mb-4 mt-1 text-xs text-white rounded-full p-1  bg-blue-700"
            >
              EBM2392
            </button>
          </div>

          <div className="p-3 bg-slate-100 mt-4 rounded-lg">
            <p className="font-semibold m-4 text-xs">Maintenance history</p>

            <ol className="relative border-l ml-4 border-blue-700 dark:border-gray-700">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-blue-700 dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  February 2022
                </time>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-blue-700 dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  February 2022
                </time>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-blue-700 dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  February 2022
                </time>
              </li>
            </ol>
          </div>
        </div>

        <div className="bg-white rounded-lg ml-3 p-5 w-full">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Bio" {...a11yProps(0)} />
                <Tab label="Integrity" {...a11yProps(1)} />
                <Tab label="Hierarchy" {...a11yProps(2)} />
                <Tab label="Relationships" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Bio />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Integrity />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Hierarchy />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Relationships />
            </TabPanel>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default EquipmentProfileLaypout;
