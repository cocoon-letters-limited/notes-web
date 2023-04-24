import React from "react";

function IntegrityTables() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs text-white uppercase rounded bg-blue-700 dark:bg-blue-700 dark:text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Code
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
  );
}

export default IntegrityTables;
