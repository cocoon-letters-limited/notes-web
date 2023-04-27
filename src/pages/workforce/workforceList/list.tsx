import { Pagination } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function List() {
  return (
    <div>
      <div className="flex space-x-2 my-5">
        <span className="inline-flex items-center p-2 justify-center w-5 h-5 text-xs font-semibold text-white  bg-green-600 rounded-full">
          2
        </span>
        <span className="leading-tight font-semibold">On board</span>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg  ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-blue-700 dark:bg-blue-700 dark:text-white">
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
                Staff ID
              </th>
              <th scope="col" className="p-3">
                Role
              </th>
              <th scope="col" className="p-3">
                Name
              </th>
              <th scope="col" className="p-3">
                Availability
              </th>
              <th scope="col" className="p-3">
                Form
              </th>
              <th scope="col" className="p-3">
                Department
              </th>
              <th scope="col" className="p-3">
                Workgroups
              </th>
              <th scope="col" className="p-3">
                icon
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  dark:border-gray-700">
              <th
                scope="row"
                className="p-3 font-medium text-gray-900  whitespace-nowrap dark:text-white"
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
              <td className="p-2">78863</td>
              <td className="p-3">John Obidi</td>
              <td className="p-2">Operator 2</td>
              <td className="p-2">
                <Link to="/manpower/ManpowerLayout">
                  <button
                    type="button"
                    className="w-fit px-3 border-solid py-1 text-xs border-2 border-green-500 bg-green-200 "
                  >
                    Onboard
                  </button>
                </Link>
              </td>
              <td className="p-2">.</td>
              <td className="p-2">Maintenance</td>
              <td className="p-2 ">
                <button
                  type="button"
                  className="w-fit px-3 py-1  text-xs text-white rounded-lg bg-[#560BAD] "
                >
                  ICT Unit 2
                </button>
                <button
                  type="button"
                  className="w-fit px-3 py-1 mx-2 text-xs text-white rounded-lg bg-blue-700 "
                >
                  ICT Unit 2
                </button>
                <button
                  type="button"
                  className="w-fit px-3 py-1 text-xs text-white rounded-lg bg-[#B5179E] "
                >
                  ICT Unit 2
                </button>
                <button
                  type="button"
                  className="w-fit px-3 py-1 text-xs  ml-2  text-white rounded-lg bg-[#3D405B] "
                >
                  ICT Unit 2
                </button>
              </td>
              <td className="p-2">.</td>
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

export default List;
