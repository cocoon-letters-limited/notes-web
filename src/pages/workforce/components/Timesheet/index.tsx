/* eslint-disable import/no-extraneous-dependencies */
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers-pro";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";
import React from "react";

function Timesheet() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        <DemoItem label="Static variant">
          <DateCalendar defaultValue={dayjs("2022-04-17")} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default Timesheet;
