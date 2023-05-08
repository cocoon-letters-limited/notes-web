import React from "react";
import Avatar from "assets/images/webp/dev_centre/avatar.webp";

const Participant = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <div className="w-12 h-12 rounded-lg object-cover">
          <img src={Avatar} alt="Avatar" className="w-12 h-12" />
        </div>
        <h4 className="pl-3 lg:pl-5 font-semibold text-sm-15 lg:text-base">
          Jane Cooper
        </h4>
      </div>

      <div className="">
        <button type="button" className="focus:outline-none">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.2056 19.1138H6.74119C5.55407 19.1138 4.7536 18.3022 4.59177 16.9632C4.36077 15.3153 4.38301 12.3382 4.59177 10.6558C4.7536 9.49458 5.55407 8.58047 6.74119 8.58047H9.2056L13.5378 5.03641C13.917 4.71399 14.573 4.41011 14.972 4.41876C15.8157 4.39282 16.5976 5.00676 16.8978 6.00858C17.0633 6.64723 17.109 7.39211 17.193 8.08141C17.277 8.75217 17.3264 8.69164 17.34 10.7138"
              stroke="#054CD6"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.3365 16.5566C17.3142 18.1156 17.2611 19.0643 17.1932 19.6115C17.1092 20.3008 17.0845 20.9815 16.8979 21.6831C16.5978 22.6862 15.8158 23.2989 14.9721 23.2729C14.5731 23.2828 14.0086 23.0395 13.6294 22.7183L12 21.3891"
              stroke="#054CD6"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24.4944 3.84375L4.48877 23.8493"
              stroke="#054CD6"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const LiveTrainingParticipants = () => {
  return (
    <div className="flex flex-col space-y-5">
      <Participant />
      <Participant />
      <Participant />
    </div>
  );
};

export default LiveTrainingParticipants;
