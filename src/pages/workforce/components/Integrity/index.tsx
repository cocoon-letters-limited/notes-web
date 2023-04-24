import React from "react";
import { RadarChart } from "./radarChart";
import { IntegrityBarChart } from "./integrityBarChart";
import IntegrityTables from "./integrityTables";

function WorkForceIntegrity() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <div className="shadow rounded-lg mt-3 p-5">
          <button
            type="button"
            className="rounded-lg w-fit p-2 border-fuchsia-100 border-solid text-white bg-fuchsia-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <span className="m-2 text-gray-400 text-xs">Working Hours</span>
          <p className="text-fuchsia-600  mt-2">5.98hrs</p>
        </div>
        <div className="shadow rounded-lg mt-3 p-5">
          <button
            type="button"
            className="rounded-lg w-fit p-2 border-fuchsia-100 border-solid text-white bg-[#F16B40]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <span className="m-2 text-gray-400 text-xs">Condition</span>
          <p className="text-fuchsia-600  mt-2">Onboard</p>
        </div>
        <div className="shadow rounded-lg mt-3 p-5">
          <button
            type="button"
            className="rounded-lg w-fit p-2 border-fuchsia-100 border-solid text-white bg-[#4C78E8]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <span className="m-2 text-gray-400 text-xs">Running Hours</span>
          <p className="text-fuchsia-600  mt-2">225 hrs</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="">
          <p className="flex justify-between my-3">Work Histor</p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
            <table className="w-full text-sm text-left ">
              <thead className="text-xs text-white uppercase rounded bg-blue-700 dark:bg-blue-700 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Work Order No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Work Order Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ratings
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="px-6 py-3">
                    .
                  </th>
                  <td className="px-6 py-4">.</td>
                  <td className="px-6 py-4">.</td>
                  <td className="px-6 py-4">.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="flex justify-between my-3">Assessment Report</p>
          <IntegrityTables />
        </div>
        <div className=" p-5">
          <div>
            <p>Predictive Maintenance</p>
            <div className="  my-5 rounded-lg bg-slate-100 " />
            <IntegrityBarChart />
          </div>
          <div className="">
            <p className="mt-5">Competence Radar</p>
            <div className="  my-5 rounded-lg bg-slate-100" />
            <RadarChart />
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto mt-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase 0">
            <tr>
              <th scope="col" className="px-6 py-3">
                S/N
              </th>
              <th scope="col" className="px-6 py-3">
                Certificate Title
              </th>
              <th scope="col" className="px-6 py-3">
                Certificate Number
              </th>
              <th scope="col" className="px-6 py-3">
                Expiry Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  dark:bg-gray-800 dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td className="px-6 py-4">Vaccination Records</td>
              <td className="px-6 py-4">CTFc5893jh</td>
              <td className="px-6 py-4">08. 06. 2022</td>
              <td className="px-6 py-4">Valid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkForceIntegrity;
