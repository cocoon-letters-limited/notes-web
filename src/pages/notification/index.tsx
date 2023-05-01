/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import { Pagination } from "@mui/material";
import React from "react";

function Notification() {
  return (
    <div className="p-5">
      <h1 className="font-semibold ">Notifications</h1>
      <div className="rounded shadow p-4 my-4 bg-white">
        <div className="flex justify-between ">
          <p className="">(Notifications type)</p>
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
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </div>
        <p className="my-3 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis cras
          adipiscing rhoncus, vel integer. Ante in a risus mauris convallis
          arcu, aliquam ut. Porttitor pellentesque ac dolor nec, volutpat
          cursus. Id elementum condimentum nunc ullamcorper.
        </p>
        <button className="w-fit px-5 p-2 text-xs rounded-lg text-white bg-blue-700">
          View
        </button>
        <button className="w-fit  px-5 p-2 text-xs rounded-lg ml-4 text-dark bg-blue-200">
          Dismss
        </button>
      </div>

      <Pagination count={10} />
    </div>
  );
}

export default Notification;
