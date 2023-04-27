import { Rating } from "@mui/material";
import TableGroup from "components/elements/tableGroup";
import { DataProps } from "pages/material";
import React from "react";
import { Link } from "react-router-dom";
import { Column } from "react-table";

function ViewEquipment() {
  const columns = React.useMemo<Column<any>[]>(
    () => [
      {
        Header: "STATUS",
        accessor: "storeId", // accessor is the "key" in the data
        Cell: (
          <button
            type="button"
            className="w-fit px-3 border-solid py-1 text-xs border-2 border-green-500 bg-green-200 "
          >
            IGC
          </button>
        ),
      },
      {
        Header: "CODE",
        accessor: "CODE",
        Cell: "EBMM",
      },
      {
        Header: "NAME",
        accessor: "NAME",
        Cell: (
          <Link to="/equipment/equipment-bio">
            {" "}
            Electric Block Moulding Machine
          </Link>
        ),
      },
      {
        Header: "LOCATION",
        accessor: "LOCATION",
        Cell: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-blue-700"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        Header: "MANUFACTURER	",
        accessor: "MANUFACTURER	",
        Cell: "Block",
      },
      {
        Header: "MODEL	",
        accessor: "MODEL	",
        Cell: "2018	",
      },
      {
        Header: "TYPE",
        accessor: "TYPE",
        Cell: "Blue",
      },
      {
        Header: "PM STATUS",
        accessor: "PM STATUS",
        Cell: (
          <button
            type="button"
            className="w-fit px-3 border-solid py-1 text-xs border-2 border-green-500 bg-green-200 "
          >
            IGC
          </button>
        ),
      },
      {
        Header: "CONDITION - POTENTIAL	",
        accessor: "CONDITION - POTENTIAL	",
        Cell: <Rating name="read-only" size="small" value={6} readOnly />,
      },
      {
        Header: "CRITICALITY",
        accessor: "	CRITICALITY",
        Cell: "1",
      },
      {
        Header: "LEVEL",
        accessor: "LEVEL",
        Cell: "1",
      },
    ],
    [],
  );

  const data: DataProps[] = React.useMemo(
    () => [
      {
        id: 1,
        storeId: "MT1993812",
        name: "Metal Sheet",
        qrCode: "123453",
        location: "12345",
        manufacturer: "Siemens",
        quantity: 48,
        unit: "M^3",
        condition: "High",
        criticality: 1,
        price: "2,500",
      },
      {
        id: 2,
        storeId: "MT1993812",
        name: "Metal Sheet",
        qrCode: "123453",
        location: "12345",
        manufacturer: "Siemens",
        quantity: 48,
        unit: "M^3",
        condition: "Low",
        criticality: 1,
        price: "2,500",
      },
      {
        id: 3,
        storeId: "MT1993812",
        name: "Metal Sheet",
        qrCode: "123453",
        location: "12345",
        manufacturer: "Siemens",
        quantity: 48,
        unit: "M^3",
        condition: "Out of Stock",
        criticality: 1,
        price: "2,500",
      },
    ],
    [],
  );

  return (
    <div>
      <div className="flex space-x-2 my-5">
        <span className="inline-flex items-center p-2 justify-center w-5 h-5 text-xs font-semibold text-white  bg-green-600 rounded-full">
          2
        </span>
        <span className="leading-tight font-semibold">In Good condition</span>
      </div>

      <TableGroup columns={columns} data={data} showPagination />
    </div>
  );
}

export default ViewEquipment;
