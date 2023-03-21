import React, { useState } from "react";
import NoteImage from "assets/images/webp/note.webp";
import style from "./style.module.css";

const FixedBottom = () => {
  return (
    <div className="absolute bottom-4 right-4 rounded-lg border-4 border-[#555555] bg-white pl-4 pr-16 py-3">
      <p className="flex items-center text-sm lg:text-base font-semibold pb-2">
        <span className="w-3 h-3 bg-primary rounded-full" />
        <span className="pl-2">Cold work</span>
      </p>
      <p className="flex items-center text-sm lg:text-base font-semibold pb-2">
        <span className="w-3 h-3 bg-[#F92F1B] rounded-full" />
        <span className="pl-2">Hot work</span>
      </p>
    </div>
  );
};

type TipButtonProps = {
  handleClick: () => void;
};

const TipButton = ({ handleClick }: TipButtonProps) => {
  return (
    <button type="button" onClick={handleClick}>
      <div
        className={` h-7 w-7 rounded-full border-2 border-white hover:scale-1 focus:outline-none ${style.pin}`}
      />
    </button>
  );
};

type TooltipProps = {
  handleClose: () => void;
};
const Tooltip = ({ handleClose }: TooltipProps) => {
  return (
    <div
      onMouseLeave={handleClose}
      className={`absolute -top-40 -left-36 lg:-left-48 rounded-lg bg-white border-2 border-[#555555] p-2 w-52 lg:w-64 ${style.tooltip}`}
    >
      <div className="bg-primary py-2 px-4 rounded">
        <p className="text-sm-15 lg:text-base text-white">CNC Machine</p>
      </div>
      <div className="mt-2 text-xs lg:text-sm pl-1 space-y-2 pb-2">
        <p>Status:</p>
        <p>ID number:</p>
        <p>Location name:</p>
      </div>
    </div>
  );
};

const MapSection = () => {
  const [show, setShow] = useState(false);
  const [selectedPin, setSelectedPin] = useState("");

  const handleClick = (value: string) => {
    setShow(!show);
    setSelectedPin(show ? "" : value);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedPin("");
  };

  return (
    <div className="relative mt-6">
      <h3 className="text-lg lg:text-xl text-textColor">
        Summary of your current work status
      </h3>
      <div className="mt-6">
        <div className="relative w-full h-full">
          <img
            src={NoteImage}
            alt="Note"
            className="h-[42rem] w-full object-contain"
          />

          <div className="absolute top-2/4 left-1/4">
            <TipButton handleClick={() => handleClick("1")} />

            {show && selectedPin === "1" && (
              <Tooltip handleClose={handleClose} />
            )}
          </div>

          <FixedBottom />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
