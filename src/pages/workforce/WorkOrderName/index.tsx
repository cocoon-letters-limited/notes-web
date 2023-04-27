import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";

function WorkOrderName() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label={<p>Details</p>} value="1" />
                <Tab label={<p>W.O Notes</p>} value="2" />
                <Tab label="Safety Permit Document" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div>
                <div className="rounded-lg bg-white p-3 mb-2">
                  <p className="mb-2 font-medium">Description</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Habitant sed sit fermentum risus, aliquam. Sed adipiscing
                    praesent tempor eleifend leo laoreet nisl massa. Leo
                    pellentesque at tincidunt eu dignissim volutpat leo sit
                    aliquet. Risus risus, magna enim, dignissim feugiat et lorem
                    vel facilisi. Nulla sed tincidunt eu nam ornare arcu,
                    pulvinar et. Luctus mattis quisque maecenas placerat.
                    Consequat morbi mattis tortor quis eu volutpat, ac cursus.
                    Est laoreet ut augue nisi, netus. Nisi nunc libero sit metus
                    tortor phasellus in.
                  </p>
                </div>
                {/* <div className="rounded-lg bg-white p-3 grid grid-cols-6">
                  {[{title:"", discription:"", }].map((data) => {
                    <div className="my-2">
                      <p className="mb-2 font-medium">Title</p>
                      <p className="text-xs my-2">Doings</p>
                    </div>;
                  })}
                </div> */}
              </div>
            </TabPanel>
            <TabPanel value="2">{/* <Timesheet /> */}</TabPanel>
            <TabPanel value="3">{/* <WorkForceIntegrity /> */}</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}

export default WorkOrderName;
