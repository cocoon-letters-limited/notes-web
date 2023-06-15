import React from "react";

function IntegrityTables() {
  return (
    <div className="relative overflow-x-auto mt-10">
      <table className="w-full text-sm text-left text-gray-500 ">
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
          <tr className="bg-white  dark:bg-gray-100 dark:border-gray-700  hover:bg-gray-50 dark:hover:bg-gray-600">
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
  );
}

export default IntegrityTables;
