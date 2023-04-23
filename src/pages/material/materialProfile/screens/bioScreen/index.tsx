/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import EditIcon from "components/svg/editIcon";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import style from "./style.module.css";

type CardProps = {
  name: string;
  value: any;
};

const Card = ({ name, value }: CardProps) => {
  return (
    <div className="text-default text-sm-15 lg:text-base">
      <p className="font-bold">{name}</p>
      <p className="mt-2">{value}</p>
    </div>
  );
};

const NoteCard = () => {
  return (
    <div className={`py-3 px-6 relative bg-white rounded-lg ${style.noteCard}`}>
      <div className="flex items-center">
        <p className="font-bold text-base mr-5">Use of Metal plates</p>
        <p className="bg-[#DA1BF9] text-white text-[10px] font-medium  px-3 py-1 rounded-full  dark:text-white">
          Lesson note
        </p>
      </div>
      <p className="text-[#B1BFD9] text-xs font-semibold">
        27th of August, 2021
      </p>
      <p className="mt-2 text-[#3F3F3F] text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus euismod{" "}
      </p>
    </div>
  );
};

const BioScreen = () => {
  return (
    <div className="relative w-full">
      <div className="relative bg-[#F6F7FB] px-4 lg:px-6 xl:px-8 pt-8 pb-12 rounded-lg">
        <div className="absolute top-6 right-6">
          <button
            type="button"
            className="focus:outline-none"
            aria-label="Edit"
          >
            <EditIcon />
          </button>
        </div>
        <div className="flex flex-row flex-wrap justify-between">
          <div className="w-4/12 flex flex-col space-y-5">
            <Card name="Name" value="Metal Sheet" />
            <Card
              name="Description"
              value="For constructing work path on large machines."
            />
            <Card name="Dimension" value="12" />
            <Card name="Available Quantity" value="48" />
            <Card name="Maximum Stock Level" value="12" />
          </div>
          <div className="w-3/12 flex flex-col space-y-5">
            <Card name="Stock Number" value="MS488478" />
            <Card name="Cost Code" value="CC494" />
            <Card name="Location" value="Lagos" />
            <Card name="Unit of Issue" value="M^3" />
            <Card name="Re-order Quantity" value="5" />
          </div>
          <div className="w-3/12 flex flex-col space-y-5">
            <Card name="Shelf Code" value="SH002" />
            <Card name="Weight" value="28" />
            <Card name="Manufacturer" value="Siemens" />
            <Card name="Minimum Stock Level" value="5" />
            <Card name="Cost Price" value="₦2500" />
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#F6F7FB] p-5 rounded-lg">
          <p className="font-bold text-xl text-default">Notes</p>
          <div className="">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </div>
        </div>
        <div className="bg-[#F6F7FB] px-4 py-5 rounded-lg">
          <div className="flex justify-between items-center">
            <p className="font-bold text-xl text-default">Notes</p>
            <button
              type="button"
              className="focus:outline-none text-sm-15 px-6 h-9 bg-primary text-white rounded-md"
            >
              New
            </button>
          </div>
          <div className="mt-4 lg:mt-6 flex flex-col space-y-4">
            <NoteCard />
            <NoteCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioScreen;
