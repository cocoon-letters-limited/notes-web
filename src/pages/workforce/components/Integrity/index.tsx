import React from "react";
import { RadarChart } from "./radarChart";
import { IntegrityBarChart } from "./integrityBarChart";

function WorkForceIntegrity() {
  return (
    <div>
      <div className="flex justify-between">
        <p>Live Feed from Sensors for various reading of equipment</p>
        <p>Maintenance</p>
      </div>
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
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Condition
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
          <p className="flex justify-between my-3">Work Histor</p>
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
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Condition
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
        </div>
        <div className=" p-5">
          <div>
            <p>Predictive Maintenance</p>
            <div className="  my-5 rounded-lg bg-slate-100 " />
            <IntegrityBarChart />
          </div>
          <div className="h-72">
            <p>Competence Radar</p>
            <div className="  my-5 rounded-lg bg-slate-100" />
            <RadarChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkForceIntegrity;
