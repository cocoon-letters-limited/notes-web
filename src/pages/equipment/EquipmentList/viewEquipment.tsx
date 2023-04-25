import { Pagination, Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ViewEquipment() {
  return (
    <div>
      <div className="flex space-x-2 my-5">
        <span className="inline-flex items-center p-2 justify-center w-5 h-5 text-xs font-semibold text-white  bg-green-600 rounded-full">
          2
        </span>
        <span className="leading-tight font-semibold">In Good condition</span>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-fit ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-blue-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-3">
                <span className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </span>
              </th>
              <th scope="col" className="p-3">
                Status
              </th>
              <th scope="col" className="p-3">
                Code
              </th>
              <th scope="col" className="p-3">
                Name
              </th>
              <th scope="col" className="p-3">
                <span>Location</span>
              </th>
              <th scope="col" className="p-3">
                Manufacturer
              </th>
              <th scope="col" className="p-3">
                Model
              </th>
              <th scope="col" className="p-3">
                Type
              </th>
              <th scope="col" className="p-3">
                Condition - Potential
              </th>
              <th scope="col" className="p-3">
                PM Status
              </th>
              <th scope="col" className="p-3">
                <span className="">Criticality</span>
              </th>
              <th scope="col" className="p-3">
                <span className="">Level</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="p-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </th>
              <td className="p-2">
                <Link to="/equipment/equipment-bio">
                  <button
                    type="button"
                    className="w-fit px-5 border-solid py-2 text-xs border-2 border-green-500 bg-green-200 "
                  >
                    IGC
                  </button>
                </Link>
              </td>
              <td className="p-2">EBMM</td>
              <td className="p-2">Electric Block Moulding Machine</td>
              <td className="p-2 text-left">
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
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </td>
              <td className="p-3">Block</td>
              <td className="p-2">2018</td>
              <td className="p-2">Blue</td>
              <td className="p-2">
                <Rating name="read-only" value={6} readOnly />
              </td>
              <td className="p-2">
                <button
                  type="button"
                  className="w-fit px-5 border-solid py-2 border-2 border-green-500 bg-green-200 "
                >
                  IGC
                </button>
              </td>
              <td className="p-2">
                <span>1 </span>
              </td>
              <td className="p-2">
                <span>1 </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex my-5">
        <Pagination count={10} variant="outlined" color="primary" />
      </div>
    </div>
  );
}

export default ViewEquipment;
