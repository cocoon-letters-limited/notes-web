import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";
import { Calendar } from "react-calendar";

function DropDown() {
  return (
    <div>
      <button
        id="dropdownTopButton"
        data-dropdown-toggle="dropdownTop"
        data-dropdown-placement="top"
        className="mr-3 mb-3 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        New
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        id="dropdownTop"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownTopButton"
        >
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Dashboard
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Schedule() {
  const [value, setValue] = React.useState("1");
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderColor: "divider",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <DropDown />
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label={<p>Calendar</p>} value="1" />
              <Tab label={<p>Agenda</p>} value="2" />
              <Tab label="Highlight" value="3" />
            </TabList>

            <DropDown />
          </Box>
          <TabPanel value="1">
            <Calendar
              tileClassName="bg-gray"
              value={selectedDate}
              selectRange
              onChange={(data: any) => setSelectedDate(data)}
              allowPartialRange
            />
          </TabPanel>
          <TabPanel value="2">
            <div />
          </TabPanel>
          <TabPanel value="3">
            <div />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default Schedule;
