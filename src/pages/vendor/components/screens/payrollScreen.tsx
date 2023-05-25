import TableGroup from "components/elements/tableGroup";
import SearchIcon from "components/svg/searchIcon";
import React from "react";
import { Column } from "react-table";

type DataProps = {
  id: string;
  workforce: string;
  department: string;
  amount: string;
  period: string;
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
      View
    </button>
  );
};

const PayrollScreen = () => {
  const columns = React.useMemo<Column<DataProps>[]>(
    () => [
      {
        Header: "S/N",
        accessor: "id",
      },
      {
        Header: "Workforce",
        accessor: "workforce",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Period",
        accessor: "period",
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
        id: "1.",
        workforce: "Solaru Olusegun E.",
        department: "Production",
        amount: "NGN 180, 000",
        period: "Jan 01 - Jan 31",
        status: "Paid",
        action: "",
      },
    ],
    [],
  );

  return (
    <div className="mt-6">
      <div className="flex flex-row justify-between mb-4">
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pr-4 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="search"
              id="default-search"
              name="default-search"
              className="block w-full p-3 px-4 pl-16 bg-white placeholder:text-[#B1BFD9] rounded-full text-sm lg:text-base text-[#96A1B4] focus:outline-none ring-0 focus:ring-0"
              placeholder="Search vendor"
            />
          </div>
        </form>
      </div>
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

export default PayrollScreen;
