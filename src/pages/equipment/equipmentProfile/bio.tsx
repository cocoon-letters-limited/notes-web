/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DateCalendar } from "@mui/x-date-pickers-pro";
import CustomChart from "../component/customChart";
import EditBio from "../equipmentEdit/editBio";

function Bio() {
  return (
    <div>
      <EditBio />
      <div className="bg-gray-100 p-10 flex rounded-lg">
        <div className="w-3/4">
          <p className="font-semibold">Owing depatment</p>
          <p>Transactions</p>
        </div>

        <div className="w-3/4">
          <p className="font-semibold">Owing depatment</p>
          <p>Transactions</p>
        </div>

        <div className="w-3/4">
          <p className="font-semibold">Owing depatment</p>
          <p>Transactions</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-blue-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </div>
      </div>

      <div className="bg-gray-100 w-full  rounded-lg mt-5 h-80 p-5">
        <CustomChart />
      </div>

      <div className="w-full grid-cols-2 grid gap-5 mt-5">
        <div className="bg-gray-100 p-5 rounded-lg">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
              <DemoItem label="Static variant">
                <DateCalendar defaultValue={dayjs("2022-04-17")} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className="bg-gray-100 p-5 rounded-lg">
          <div className="flex justify-between">
            <p className="font-normal text-2xl">Notes</p>
            <button
              type="button"
              className="w-fit px-3 bg-blue-700 text-white rounded-lg"
            >
              New
            </button>
          </div>
          <div className="p-3 bg-white rounded-lg mt-4">
            <div className="border-l-8 border-fuchsia-600 pl-3">
              <div className="flex">
                <p className="font-medium text-1xl mr-5">Use of Metal plates</p>
                <span className="bg-fuchsia-600  text-white  text-xs font-medium  px-2.5 py-1 rounded-full  dark:text-white">
                  Lesson note
                </span>
              </div>
              <small className="text-gray-400">27th of August, 2021</small>
              <p className="font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                euismod{" "}
              </p>
            </div>
          </div>
          <div className="p-3 bg-white rounded-lg mt-4">
            <div className="border-l-8 border-fuchsia-600 pl-3">
              <div className="flex">
                <p className="font-medium text-1xl mr-5">Use of Metal plates</p>
                <span className="bg-fuchsia-600  text-white  text-xs font-medium  px-2.5 py-1 rounded-full  dark:text-white">
                  Lesson note
                </span>
              </div>
              <small className="text-gray-400">27th of August, 2021</small>
              <p className="font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                euismod{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
