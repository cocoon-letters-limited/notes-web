/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from "react";
// import { PhotoCamera } from "@mui/icons-material";
import { IconButton } from "@mui/material";
// import AddEquipment from "./addEquipment";
import ViewEquipment from "./viewEquipment";
import AddEquipment from "./addEquipment";

function EquipmentRegister() {
  const [showEquipment, setShowEquipment] = React.useState(false);
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-2xl">Equipment</p>
        <div className="text-blue-700">
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
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
          </IconButton>
          <button className="w-fit py-2 border-2 border-solid rounded-lg mx-2 px-3 border-blue-700 text-blue-700">
            Subscribe
          </button>
          <button
            onClick={() => setShowEquipment(true)}
            className="w-fit py-2 border-2 bg-blue-700 rounded-lg px-3 border-blue-700 text-white"
          >
            New Equipment
          </button>
        </div>
      </div>
      {showEquipment ? <AddEquipment /> : <ViewEquipment />}
    </div>
  );
}

export default EquipmentRegister;
