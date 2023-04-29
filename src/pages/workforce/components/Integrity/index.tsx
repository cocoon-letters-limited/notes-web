import React from "react";
import { Column } from "react-table";
import TableGroup from "components/elements/tableGroup";
import { DataProps } from "pages/material";
import { DataCard } from "pages/material/materialProfile/screens/integrityScreen";
import { RadarChart } from "./radarChart";
import { IntegrityBarChart } from "./integrityBarChart";

function WorkForceIntegrity() {
  const columns = React.useMemo<Column<any>[]>(
    () => [
      {
        Header: "WORK ORDER NO.",
        accessor: "storeId", // accessor is the "key" in the data
      },
      {
        Header: "WORK ORDER NO.",
        accessor: "	WORK ORDER TITLE",
        Cell: "Operator 2	",
      },
      {
        Header: "RATINGS",
        accessor: "RATINGS",
      },
      {
        Header: "DATE	",
        accessor: "DATE	",
        Cell: "DEPARTMENT",
      },
    ],
    [],
  );

  const data: DataProps[] = React.useMemo(() => [], []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <DataCard name="Working Hours" value="5.98hrs" color="#E84CD8" />
        <DataCard name="Availability" value="Fit" color="#4C78E8" />
        <DataCard name="Condition" value="Onboard" color="#F16B40" />
      </div>
      <div className="grid grid-cols-2">
        <div className="">
          <p className="flex justify-between my-3">Work Histor</p>

          <TableGroup columns={columns} data={data} showPagination />

          <p className="flex justify-between my-3">Assessment Report</p>
          <TableGroup columns={columns} data={data} showPagination />
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
    </div>
  );
}

export default WorkForceIntegrity;
