import { Rating } from "@mui/material";
import TableGroup from "components/elements/tableGroup";
import React from "react";
import { Column } from "react-table";
import { DataProps } from "pages/material";

function Relationships() {
  const columns = React.useMemo<Column<any>[]>(
    () => [
      {
        Header: "NAME",
        accessor: "NAME", // accessor is the "key" in the data
        Cell: "Adeniji Victor	",
      },
      {
        Header: "ROLE",
        accessor: "	ROLE",
        Cell: "Maintenance Superintendent",
      },
      {
        Header: "RATINGS",
        accessor: "RATINGS",
        Cell: <Rating name="simple-controlled" value={4} />,
      },
      {
        Header: "STATUS	",
        accessor: "STATUS	",
        Cell: (
          <button
            type="button"
            className="text-xs text-[#16F62C] px-3 border-[#16F62C] border-2 py-1 bg-[#C9FFCE] "
          >
            Fit
          </button>
        ),
      },
      {
        Header: "CONDITION	",
        accessor: "DATE	",
        Cell: (
          <button
            type="button"
            className="text-xs text-[#F92F1B] px-3 border-[#F92F1B] border-2 py-1 bg-[#FFDADF] "
          >
            Holiday
          </button>
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
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border border-blue-700 rounded-l-lg hover:bg-blue-700 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-700 focus:text-white dark:border-blue-700 dark:text-blue-700 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:bg-blue-700"
        >
          Departments
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border-t border-b border-blue-700 hover:bg-blue-700 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-700 focus:text-white dark:border-blue-700 dark:text-blue-700 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:bg-blue-700"
        >
          Workgroups
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border border-blue-700 rounded-r-md hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-700 focus:text-white dark:border-blue-700 dark:text-blue-700 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:bg-blue-700"
        >
          Handover notes
        </button>
      </div>
      <TableGroup
        hasCheckboxColumn={false}
        columns={columns}
        data={data}
        showPagination
      />
    </div>
  );
}

export default Relationships;
