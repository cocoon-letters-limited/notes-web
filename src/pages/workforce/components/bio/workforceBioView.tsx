/* eslint-disable import/no-extraneous-dependencies */
import { Rating } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers-pro";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import EditIcon from "components/svg/editIcon";
import style from "./style.module.css";

export type CardProps = {
  name: string;
  value: any;
  styleName?: string;
  children?: any;
};

export const Card = ({ name, value, styleName, children }: CardProps) => {
  return (
    <div className={`text-default text-sm-15  lg:text-base ${styleName}`}>
      <p className="font-bold text-[#AEB4CB] mb-2">{name}</p>
      {value ? <p className="">{value}</p> : children}
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

function WorkforceBioView({ onChildClick }: any) {
  return (
    <div>
      <div className=" bg-[#F6F7FB] p-4 rounded-lg rounded-lg">
        <div className="grid-cols-2 grid gap-2 mt-3">
          <Card name="Employee ID" value="34990599" />
          <div className="col-span-1 grid-cols-3 grid gap-3">
            <Card name="Department" value="Maintenance" />

            <Card name="Rating" value={false}>
              <Rating name="simple-controlled" value={4} />
            </Card>
            <button
              type="button"
              className="grid justify-items-end"
              onClick={() => onChildClick}
            >
              <EditIcon />
            </button>
          </div>
        </div>
        <div className="grid-cols-2 grid gap-2 mt-3">
          <Card name="Employee ID" value="34990599" />
          <div className="col-span-1 grid-cols-3 grid gap-3">
            <Card name="Department" value="Maintenance" />

            <Card name="Condition" value={false}>
              <button
                className=" bg-[#E0FFE3] border-2 px-2 py-1 text-xs rounded-lg text-green-600 border-green-300"
                type="button"
              >
                Onboard
              </button>
            </Card>
            <Card name="Status" value={false}>
              <button
                className=" bg-[#E0FFE3] border-2 px-2 py-1 text-xs rounded-lg text-green-600 border-green-300"
                type="button"
              >
                Fit
              </button>
            </Card>
          </div>
        </div>
        <div className="grid-cols-2 grid gap-2 mt-3">
          <Card name="Employee ID" value="34990599" />
          <div className="col-span-1 grid-cols-3 grid gap-3">
            <Card name="Level" value="99" />
          </div>
        </div>
        <div className="grid-cols-2 grid gap-2 mt-3">
          <div>
            <p className="text-[#AEB4CB] mb-3 font-bold">Team</p>
            <div>
              <button
                type="submit"
                className=" bg-[#054CD6] text-xs h-fix w-fit px-3 py-2 rounded-lg text-white"
              >
                ICT Unit 2
              </button>
              <button
                type="submit"
                className=" bg-[#3D405B] text-xs h-fix ml-2 w-fit px-3 py-2 rounded-lg text-white"
              >
                ICT Unit 3
              </button>
              <button
                type="submit"
                className=" text-xs bg-[#560BAD]  h-fix w-fit ml-2 px-3 py-2 rounded-lg text-white"
              >
                ICT Unit 4
              </button>
              <button
                type="submit"
                className=" bg-[#B5179E] text-xs h-fix w-fit mt-2 px-3 py-2 rounded-lg text-white"
              >
                Maintenance Unit 2
              </button>
            </div>
          </div>
          <div className="col-span-1 grid-cols-3 grid gap-3">
            <Card name="Degree(s)" value="Bsc Msc" />
            <Card
              name="Specializations Certificates"
              styleName="col-span-2"
              value="Cert 1 Cert 1"
            />
          </div>
        </div>
        <div className="grid-cols-2 grid gap-2 mt-3">
          <Card name="Contract till" value="April, 2022" />
          <div className="col-span-1 grid-cols-4 grid gap-3">
            <Card name="Standard" value="$1000" />
            <Card name="Holiday" value="$1000" />
            <Card name="Overtime" value="$1000" />
            <Card name="Travel" value="$1000" />
          </div>
        </div>
        <p className="my-2 text-[#AEB4CB] text-bold">CREW CALENDAR</p>
        <div className="flex">
          <Card name="Shift frequency" value="Every 14 days" />
          <Card name="Next shift date" value="08. 04. 2021" />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#F6F7FB] p-5 rounded-lg">
          <p className="font-bold text-xl text-default">Schedule</p>
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
}

export default WorkforceBioView;
