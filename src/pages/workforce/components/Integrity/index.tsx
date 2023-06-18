import React from "react";
// import { Column } from "react-table";
// import { DataProps } from "pages/material";
import { DataCard } from "pages/material/materialProfile/screens/integrityScreen";
import { RadarChart } from "./radarChart";
import { IntegrityBarChart } from "./integrityBarChart";
import IntegrityTables from "./integrityTables";

function WorkForceIntegrity() {
  // const columns = React.useMemo<Column<any>[]>(
  //   () => [
  //     {
  //       Header: "WORK ORDER NO.",
  //       accessor: "storeId",
  //     },
  //     {
  //       Header: "WORK ORDER NO.",
  //       accessor: "	WORK ORDER TITLE",
  //       Cell: "Operator 2	",
  //     },
  //     {
  //       Header: "RATINGS",
  //       accessor: "RATINGS",
  //     },
  //     {
  //       Header: "DATE	",
  //       accessor: "DATE	",
  //       Cell: "DEPARTMENT",
  //     },
  //   ],
  //   [],
  // );

  // const data: DataProps[] = React.useMemo(() => [], []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <DataCard name="Working Hours" value="5.98hrs" color="#E84CD8" />
        <DataCard name="Availability" value="Fit" color="#4C78E8" />
        <DataCard name="Condition" value="Onboard" color="#F16B40" />
      </div>
      <div className="grid grid-cols-2">
        <div className="">
          <p className=" my-3">Work Histor</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white lg:grid-cols-7 p-2 bg-[#054cd6] rounded">
            <p className="text-xs col-span-2">Work Order No.</p>
            <p className=" text-xs col-span-2">Work Order Title</p>
            <p className=" text-xs">Ratings</p>
            <p className="text-xs">Date</p>
          </div>
        </div>
        <div>
          <p>Performance Rating</p>
          <div className="  my-5 rounded-lg bg-slate-100 " />
          <IntegrityBarChart />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <p className="my-3">Assessment Report</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white lg:grid-cols-4 p-2 bg-[#054cd6] rounded">
            <p className="text-xs ">Title</p>
            <p className=" text-xs ">Code</p>
            <p className=" text-xs">Ratings</p>
            <p className="text-xs">Date</p>
          </div>
        </div>
        <div className=" p-5">
          <div className="">
            <p className="mt-5">Competence Radar</p>
            <div className="  my-5 rounded-lg bg-slate-100" />
            <RadarChart />
          </div>
        </div>
      </div>
      <IntegrityTables />
    </div>
  );
}

export default WorkForceIntegrity;
