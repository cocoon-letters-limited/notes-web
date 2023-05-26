import TableGroup from "components/elements/tableGroup";
import SearchIcon from "components/svg/searchIcon";
import React from "react";
import { Link } from "react-router-dom";
import { Column } from "react-table";

type DataProps = {
  id: string;
  title: string;
  groupNo: string;
  division: string;
  priority: string;
  dateRaised: string;
  dueDate: string;
  status: string;
};

type ValueProps = {
  value?: any;
};

const StatusCard = ({ value }: ValueProps) => {
  const styleClassName =
    // eslint-disable-next-line no-nested-ternary
    value === "Delivered"
      ? "bg-[#EAFFEC] text-[#00B61A]"
      : "bg-[#FFF3E0] text-[#F9A01B]";
  return (
    <div
      className={`text-xs px-3 py-3 rounded text-center font-semibold ${styleClassName}`}
    >
      {value}
    </div>
  );
};

const OrdersScreen = () => {
  const columns = React.useMemo<Column<DataProps>[]>(
    () => [
      {
        Header: "S/N",
        accessor: "id",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Group no.",
        accessor: "groupNo",
      },
      {
        Header: "Division",
        accessor: "division",
      },
      {
        Header: "Priority",
        accessor: "priority",
      },
      {
        Header: "Date raised",
        accessor: "dateRaised",
      },
      {
        Header: "Due date",
        accessor: "dueDate",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusCard,
      },
    ],
    [],
  );

  const data: DataProps[] = React.useMemo(
    () => [
      {
        id: "1.",
        title: "Stocking materials",
        groupNo: "GP3029",
        division: "Maintenance",
        priority: "High",
        dateRaised: "08 - 06 - 2021",
        dueDate: "08 - 07 - 2021",
        status: "Delivered",
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
              placeholder="Search orders"
            />
          </div>
        </form>

        <Link
          to="/create-order"
          className="px-6 py-3 rounded-lg bg-primary text-white"
        >
          New
        </Link>
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

export default OrdersScreen;
