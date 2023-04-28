import TableGroup from "components/elements/tableGroup";
import { DataProps } from "pages/material";
import React from "react";
import { Link } from "react-router-dom";
import { Column } from "react-table";

function List() {
  const columns = React.useMemo<Column<any>[]>(
    () => [
      {
        Header: "Store ID",
        accessor: "storeId", // accessor is the "key" in the data
      },
      {
        Header: "ROLE",
        accessor: "name",
        Cell: <Link to="/manpower/ManpowerLayout"> John Obidi</Link>,
      },
      {
        Header: "NAME",
        accessor: "Operator 2	",
        Cell: "Operator 2	",
      },
      {
        Header: "AVAILABILITY",
        accessor: "AVAILABILITY",
        Cell: (
          <button
            type="button"
            className="w-fit px-3 border-solid py-1 text-xs border-2 border-green-500 bg-green-200 "
          >
            Onboard
          </button>
        ),
      },
      {
        Header: "FORM",
        accessor: "manufacturer",
      },
      {
        Header: "DEPARTMENT	",
        accessor: "DEPARTMENT	",
        Cell: "DEPARTMENT",
      },
      {
        Header: "WORKGROUPS",
        accessor: "WORKGROUPS",
        Cell: (
          <div>
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
            <br />
            <button
              type="button"
              className="w-fit px-3 py-1 text-xs  mt-2  text-white rounded-lg bg-[#3D405B] "
            >
              ICT Unit 2
            </button>
          </div>
        ),
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
        <span className="leading-tight font-semibold">On board</span>
      </div>
      <div className="">
        <TableGroup columns={columns} data={data} showPagination />
      </div>
    </div>
  );
}

export default List;
