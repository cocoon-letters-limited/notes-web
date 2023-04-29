import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import EditIcon from "components/svg/editIcon";
import { DateCalendar } from "@mui/x-date-pickers-pro";
import EquipmentCard from "pages/dashboard/components/criticalSummarySection/components/equipmentCard";
import EditBio from "../equipmentEdit/editBio";
import style from "./style.module.css";

export type CardProps = {
  name: string;
  value: any;
};

export const Card = ({ name, value }: CardProps) => {
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

function Bio() {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <>
      {showEdit && (
        <div>
          <button type="button" onClick={() => setShowEdit(false)} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <EditBio />
        </div>
      )}
      {!showEdit && (
        <div>
          <div className="relative bg-[#F6F7FB] px-4 lg:px-6 xl:px-8 pt-8 pb-12 rounded-lg">
            <div className="absolute top-6 right-6">
              <button
                type="button"
                className="focus:outline-none"
                aria-label="Edit"
                onClick={() => setShowEdit(true)}
              >
                <EditIcon />
              </button>
            </div>
            <div className="flex flex-row flex-wrap justify-between">
              <div className="w-4/12 flex flex-col space-y-5">
                <Card name="Owning Department" value="Transmission" />
                <Card name="Manufacturer" value="Johnson Philips" />
                <Card name="Type" value="132 33 kv" />
                <Card name="Potential Condition" value="Good" />
                <Card name="Model" value="2018" />
              </div>
              <div className="w-3/12 flex flex-col space-y-5">
                <Card name="Manufacturer" value="Johnson Philips" />
                <Card name="Spare" value="NO" />
                <Card name="Info Status" value="2018" />
                <Card name="Tag No" value="TG849" />
                <Card name="Equipment No" value="T1A" />
              </div>
              <div className="w-3/12 flex flex-col space-y-5">
                <Card name="Shelf Code" value="SH002" />
                <Card name="Info Status" value="28" />
                <Card name="" value="" />
                <Card name="" value="" />
                <Card name="" value="" />
              </div>
            </div>
          </div>
          <EquipmentCard />
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
      )}
    </>
  );
}

export default Bio;
