import React from "react";
import { IconButton } from "@mui/material";
import ViewEquipment from "./viewEquipment";
import AddEquipment from "./addEquipment";

function EquipmentList() {
  const [showEquipment, setShowEquipment] = React.useState(false);
  return (
    <div>
      <div className="flex justify-between">
        {!showEquipment ? (
          <p className="text-default font-bold text-xl lg:text-2xl xl:text-3xl">
            Equipment
          </p>
        ) : (
          <button
            type="button"
            className="bg-blue-200 rounded-2xl  w-fit px-5"
            onClick={() => setShowEquipment(false)}
          >
            x
          </button>
        )}
        <div className="text-blue-700 ">
          <span>Upload csv</span>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input hidden type="file" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          </IconButton>
          <button
            type="button"
            className="w-fit focus:outline-none mr-2 items-center py-3 text-sm-15 lg:text-base text-primary border-2 border-primary rounded-lg px-6 font-semibold"
          >
            Subscribe
          </button>
          <button
            type="button"
            onClick={() => setShowEquipment(true)}
            className="w-fit focus:outline-none items-center py-3 space-x-4 text-sm-15 lg:text-base text-white border-2 border-primary bg-primary rounded-lg px-6 font-semibold"
          >
            New Equipment
          </button>
        </div>
      </div>
      {showEquipment ? <AddEquipment /> : <ViewEquipment />}
    </div>
  );
}

export default EquipmentList;
