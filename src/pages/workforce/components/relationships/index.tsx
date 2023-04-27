import { Rating } from "@mui/material";
import React from "react";

function Relationships() {
  return (
    <div>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border border-blue-700 rounded-l-lg hover:bg-blue-700 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-700 focus:text-white dark:border-blue-700 dark:text-blue-700 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:bg-blue-700"
        >
          Departments
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border-t border-b border-blue-700 hover:bg-blue-700 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-700 focus:text-white dark:border-blue-700 dark:text-blue-700 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:bg-blue-700"
        >
          Workgroups
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border border-blue-700 rounded-r-md hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-700 focus:text-white dark:border-blue-700 dark:text-blue-700 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:bg-blue-700"
        >
          Handover notes
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs text-white uppercase rounded bg-blue-700 dark:bg-blue-700 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Condition
              </th>
              <th scope="col" className="px-6 py-3">
                Icon
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="px-6 py-3">
                Adeniji Victor
              </th>
              <td className="px-6 py-4">Maintenance Superintendent</td>
              <td className="px-6 py-4">
                <Rating name="simple-controlled" value={4} />
              </td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="text-xs text-[#16F62C] px-3 border-[#16F62C] border-2 py-1 bg-[#C9FFCE] "
                >
                  Fit
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="text-xs text-[#F92F1B] px-3 border-[#F92F1B] border-2 py-1 bg-[#FFDADF] "
                >
                  Holiday
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Relationships;
