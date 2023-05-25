import TableGroup from "components/elements/tableGroup";
import React from "react";
import { Column } from "react-table";

type DataProps = {
  invoiceId: string;
  amount: string;
  dueDate: string;
  status: string;
  action?: string | undefined;
};

type ValueProps = {
  value?: any;
};

const StatusCard = ({ value }: ValueProps) => {
  const styleClassName =
    // eslint-disable-next-line no-nested-ternary
    value === "Paid"
      ? "bg-[#EAFFEC] text-[#00B61A]"
      : "bg-[#FFEAEA] text-[#D30B0B]";
  return (
    <div
      className={`text-xs px-3 py-3 rounded text-center font-semibold ${styleClassName}`}
    >
      {value}
    </div>
  );
};

const ActionCard = ({ value }: ValueProps) => {
  return (
    <button
      type="button"
      className="px-4 py-3 rounded-lg bg-primary text-white font-semibold"
      aria-label={`${value || ""}`}
    >
      View Invoice
    </button>
  );
};

const InvoicesScreen = () => {
  const columns = React.useMemo<Column<DataProps>[]>(
    () => [
      {
        Header: "Invoice ID",
        accessor: "invoiceId",
      },
      {
        Header: "Invoice amount",
        accessor: "amount",
      },
      {
        Header: "Due Date",
        accessor: "dueDate",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusCard,
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ActionCard,
      },
    ],
    [],
  );

  const data: DataProps[] = React.useMemo(
    () => [
      {
        invoiceId: "#283747",
        amount: "NGN 180, 000",
        dueDate: "22. 03. 2022",
        status: "Paid",
        action: "",
      },
    ],
    [],
  );

  return (
    <div className="mt-6">
      <TableGroup
        columns={columns}
        data={data}
        hasCheckboxColumn={false}
        tableHeadBgColor="bg-[#EBEEF3]"
        tableHeadTextColor="text-[#707D95]"
        showPagination
      />
    </div>
  );
};

export default InvoicesScreen;
