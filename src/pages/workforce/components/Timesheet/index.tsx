/* eslint-disable import/no-extraneous-dependencies */
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers-pro";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";
import React from "react";

import "./style.module.css";

function Timesheet() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        <DemoItem label="Static variant">
          <DateCalendar
            className="text-white texting font-semibold text-2xl px-6 py-4 lg:py-5 text-left style.button"
            defaultValue={dayjs("2022-04-17")}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default Timesheet;
