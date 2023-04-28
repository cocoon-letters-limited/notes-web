import TableGroup from "components/elements/tableGroup";
import { DataProps } from "pages/material";
import React from "react";
import { Column } from "react-table";

function IntegrityTables() {
  const columns = React.useMemo<Column<any>[]>(
    () => [
      {
        Header: "Title",
        accessor: "PM Title", // accessor is the "key" in the data
        Cell: "Service of...",
      },
      {
        Header: "PM TYPE",
        accessor: "PM TYPE	",
        Cell: (
          <button
            type="button"
            className="p-2 w-fit border border-2 border-red-400 bg-red-100  text-xs text-red-400"
          >
            Due
          </button>
        ),
      },
      {
        Header: "Due Date",
        accessor: "Due Date",
        Cell: "5/1/21",
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

  return <TableGroup columns={columns} data={data} showPagination />;
}

export default IntegrityTables;
