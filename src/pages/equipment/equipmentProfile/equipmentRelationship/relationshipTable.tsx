import TableGroup from "components/elements/tableGroup";
import { DataProps } from "pages/material";
import React from "react";
import { Column } from "react-table";

export default function RelationshipTable() {
  const columns = React.useMemo<Column<any>[]>(
    () => [
      {
        Header: "TITLE",
        accessor: "PM Title", // accessor is the "key" in the data
        Cell: "Service of machine",
      },
      {
        Header: "PM TYPE",
        accessor: "PM TYPE	",
        Cell: "Predictive",
      },
      {
        Header: "PM239203",
        accessor: "PM Number	",
        Cell: "PM239203",
      },
      {
        Header: "Equipment Type",
        accessor: "Due Date",
        Cell: (
          <button
            type="button"
            className="p-2 text-xs w-fit border border-2  border-[#8F0ECB]  rounded-lg text-[#8F0ECB]"
          >
            Type 1
          </button>
        ),
      },
      {
        Header: "Valid until",
        accessor: "Valid until",
        Cell: "PM239203",
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
