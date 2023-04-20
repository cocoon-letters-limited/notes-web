/* eslint-disable import/no-extraneous-dependencies */
import { Rating } from "@mui/material";
import dayjs from "dayjs";
import { DateCalendar } from "@mui/x-date-pickers-pro";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

function Bio() {
  return (
    <div>
      <div className=" bg-[#F6F7FB] p-4 rounded-lg">
        <div className="grid-cols-2 grid gap-2">
          <div className="col-span-1">
            <p className="text-gray-400 font-semibold">Employee ID</p>
            <p>34990599</p>
          </div>
          <div className="col-span-1 grid-cols-3 grid gap-3">
            <div>
              <p className="text-gray-400 font-semibold">Department</p>
              <p>Maintenance</p>
            </div>
            <div>
              <p className="text-gray-400 font-semibold">Rating</p>
              <Rating name="simple-controlled" value={4} />
            </div>
            <div>
              <p>icon</p>
            </div>
          </div>
        </div>
        <div className="grid-cols-2 grid gap-2 mt-3">
          <div>
            <p className="text-gray-400 font-semibold">Employee ID</p>
            <p>34990599</p>
          </div>
          <div className="col-span-1 grid-cols-3 grid gap-3">
            <div>
              <p className="text-gray-400 font-semibold">Department</p>
              <p>Maintenance</p>
            </div>
            <div>
              <p className="text-gray-400 font-semibold">Condition</p>
              <button
                className=" bg-[#E0FFE3] border-4 p-2 rounded-lg text-green-600 border-green-300"
                type="button"
              >
                Onboard
              </button>
            </div>
            <div>
              <p className="text-gray-400 font-semibold">Status</p>
              <button
                className=" bg-[#E0FFE3] border-4 p-2 rounded-lg text-green-600 border-green-300"
                type="button"
              >
                Fit
              </button>
            </div>
          </div>
        </div>
        <div className="grid-cols-2 grid gap-2 mt-3">
          <div>
            <p className="text-gray-400 font-semibold">Employee ID</p>
            <p>34990599</p>
          </div>
          <div className="col-span-1 grid-cols-3 grid gap-3">
            <div>
              <p className="text-gray-400 font-semibold">Level</p>
              <p>1</p>
            </div>
          </div>
        </div>
        <div className="grid-cols-2 grid gap-2 mt-3">
          <div>
            <p className="text-gray-400 font-semibold">Team</p>
            <div>
              <button
                type="submit"
                className=" bg-[#054CD6] h-fix w-fit px-3 py-2 rounded-lg text-white"
              >
                ICT Unit 2
              </button>
              <button
                type="submit"
                className=" bg-[#3D405B] h-fix ml-2 w-fit px-3 py-2 rounded-lg text-white"
              >
                ICT Unit 3
              </button>
              <button
                type="submit"
                className=" bg-[#560BAD] h-fix w-fit ml-2 px-3 py-2 rounded-lg text-white"
              >
                ICT Unit 4
              </button>
              <button
                type="submit"
                className=" bg-[#B5179E] h-fix w-fit mt-2 px-3 py-2 rounded-lg text-white"
              >
                Maintenance Unit 2
              </button>
            </div>
          </div>
          <div className="col-span-1 grid-cols-3 grid gap-3">
            <div>
              <p className="text-gray-400 font-semibold">Degree(s)</p>
              <div>
                <span>Bsc</span>
                <span className="ml-2">Msc.</span>
              </div>
            </div>
            <div className="col-span-2 ">
              <p className="text-gray-400 font-semibold">
                Specializations Certificates
              </p>
              <div>
                <span>Cert 1</span>
                <span className="ml-2">Cert 1</span>
              </div>
            </div>
            <p className="text-gray-400 font-semibold">WAGES</p>
          </div>
        </div>
        <div className="grid-cols-2 grid gap-2 mt-3">
          <div>
            <p className="text-gray-400 font-semibold">Contract till</p>
            <p>April, 2022</p>
          </div>
          <div className="col-span-1 grid-cols-4 grid gap-3">
            <div>
              <p className="text-gray-400 font-semibold">Standard</p>
              <p>$1000</p>
            </div>
            <div className="">
              <p className="text-gray-400 font-semibold">Holiday</p>
              <p>$1000</p>
            </div>
            <div>
              <p className="text-gray-400 font-semibold">Overtime</p>
              <p>$1000</p>
            </div>
            <div>
              <p className="text-gray-400 font-semibold">Travel</p>
              <p>$1000</p>
            </div>
          </div>
        </div>
        <p className="my-2 text-gray-400 font-semibold">CREW CALENDAR</p>
        <div className="flex">
          <div>
            <p className="text-gray-400 font-semibold">Shift frequency</p>
            <p>Every 14 days</p>
          </div>
          <div className="ml-4">
            <p className="text-gray-400 font-semibold">Next shift date</p>
            <p>08. 04. 2021</p>
          </div>
        </div>
      </div>
      <div className="w-full grid-cols-2 grid gap-5 mt-5">
        <div className="bg-gray-100 p-5 rounded-lg">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
              <DemoItem label="Schedule">
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
