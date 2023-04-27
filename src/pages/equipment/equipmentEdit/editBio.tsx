/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box, Tabs, Tab, Typography } from "@mui/material";
import React from "react";
import IdentificationEdit from "./IdentificationEdit";
import MaintenanceEdit from "./MaintenanceEdit";
import DepreciationEdit from "./DepreciationEdit";
import AssetsEdit from "./AssetsEdit";
import VendorEdit from "./VendorEdit";
import LinearAssetsEdit from "./LinearAssetsEdit";
import Insurance from "./Insurance";

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

function EditBio() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Equipment number
          </label>
          <input
            type="text"
            id="email"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <label htmlFor="email" className="block mb-2 text-sm font-medium ">
            Equipment type
          </label>
          <input
            type="text"
            id="email"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium "
          >
            Select your country
          </label>
          <select
            id="countries"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium "
          >
            Select your country
          </label>
          <select
            id="countries"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg  w-full">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Identification" {...a11yProps(0)} />
              <Tab label="Maintenance" {...a11yProps(1)} />
              <Tab label="Assets" {...a11yProps(2)} />
              <Tab label="Vendor" {...a11yProps(3)} />
              <Tab label="Depreciation" {...a11yProps(4)} />
              <Tab label="Linear Assets" {...a11yProps(5)} />
              <Tab label="Insurance" {...a11yProps(6)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <IdentificationEdit />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <MaintenanceEdit />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <AssetsEdit />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <VendorEdit />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <DepreciationEdit />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <LinearAssetsEdit />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Insurance />
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

export default EditBio;
