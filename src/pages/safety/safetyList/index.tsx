import TableGroup from "components/elements/tableGroup";
import MapIcon from "components/svg/mapIcon";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Column } from "react-table";

type DropdownLinkProps = {
  linkUrl: string;
  linkTitle: string;
};

const DropDownLink = ({ linkUrl, linkTitle }: DropdownLinkProps) => {
  return (
    <Link
      to={linkUrl || "/"}
      className="block focus:outline-none hover:text-primary transition-all ease-in-out duration-200"
    >
      {linkTitle}
    </Link>
  );
};
const TypeStatusCard = ({ value }: ValueProps) => {
  const styleClassName = value === "Cold" ? "status-blue" : "status-red";

  return (
    <div
      className={`text-xs px-4 py-2 rounded text-center font-semibold ${styleClassName}`}
    >
      {value}
    </div>
  );
};
type DataProps = {
  woNumber: string;
  title: string;
  equipment: string;
  equipmentNo: string;
  date: string;
  type: string;
  location: string;
  nextDue: string;
  status: string;
  action?: string | undefined;
};

type ValueProps = {
  value?: any;
};

const LocationIconCard = ({ value }: ValueProps) => {
  return (
    <div aria-label={`${value}`}>
      <MapIcon />
    </div>
  );
};

const DateCard = ({ value }: ValueProps) => {
  return (
    <p className="flex items-center space-x-2" aria-label={`${value}`}>
      <span className="text-primary">
        23. 11 <br />
        (08:20)
      </span>
      <span>to</span>
      <span className="text-primary">
        23. 11
        <br />
        (13:20)
      </span>
    </p>
  );
};

const StatusCard = ({ value }: ValueProps) => {
  const styleClassName =
    // eslint-disable-next-line no-nested-ternary
    value === "Issue" || value === "Complete"
      ? "status-green"
      : value === "Closed"
      ? "status-red"
      : "status-yellow";
  return (
    <div
      className={`text-xs px-4 py-2 rounded text-center font-semibold ${styleClassName}`}
    >
      {value}
    </div>
  );
};

const ActionCard = ({ value }: ValueProps) => {
  return (
    <button type="button" aria-label={`${value || ""}`}>
      <svg
        width="34"
        height="8"
        viewBox="0 0 34 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="4" r="4" fill="#2F80ED" />
        <circle cx="17" cy="4" r="4" fill="#2F80ED" />
        <circle cx="30" cy="4" r="4" fill="#2F80ED" />
      </svg>
    </button>
  );
};

const SatetyLayout = () => {
  const [show, setShow] = useState(false);
  const columns = React.useMemo<Column<any>[]>(
    () => [
      {
        Header: "Permit Number",
        accessor: "Permit Number",
        Cell: "PMT-349220",
      },
      {
        Header: "WO Number",
        accessor: "WO Number",
        Cell: "WO-2021-80 -02-0003",
      },
      {
        Header: "Title",
        accessor: "Title",
        Cell: "CNC Machine",
      },
      {
        Header: "Type",
        accessor: "type",
        Cell: TypeStatusCard,
      },
      {
        Header: "Start - Finish Date",
        accessor: "date",
        Cell: DateCard,
      },
      {
        Header: "Equipment",
        accessor: "Equipment",
        Cell: "CNC Machine",
      },
      {
        Header: "Location",
        accessor: "location",
        Cell: LocationIconCard,
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
        id: 1,
        woNumber: "WO-2021-80-02-0003",
        title: "CNC Machine",
        equipment: "CNC Machine",
        equipmentNo: "CNM",
        date: "23.11",
        type: "Hot",
        location: "Abuja",
        nextDue: "23. 11. 21",
        status: "Completed",
        action: "",
      },
      {
        id: 1,
        woNumber: "WO-2021-80-02-0003",
        title: "CNC Machine",
        equipment: "CNC Machine",
        equipmentNo: "CNM",
        date: "23.11",
        type: "Hot",
        location: "Abuja",
        nextDue: "23. 11. 21",
        status: "Issue",
        action: "",
      },
    ],
    [],
  );

  return (
    <section className="relative h-full pt-4">
      <div className="flex justify-between">
        <h1 className="text-default font-bold text-xl lg:text-2xl xl:text-3xl">
          Satety
        </h1>

        <div className="flex">
          <button
            type="button"
            onClick={() => {}}
            className="w-fit py-2 mr-2 border-2 bg-blue-700 rounded-lg px-3 border-blue-700 text-white"
          >
            Subscribe
          </button>
          <button
            type="button"
            onClick={() => {}}
            className="w-fit py-2 mr-2 border-2 bg-blue-700 rounded-lg px-3 border-blue-700 text-white"
          >
            New
          </button>
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="flex items-center focus:outline-none flex items-center py-3 text-sm-15 lg:text-base text-[#051738] border-2 border-[#B1BFD9] rounded-lg px-5 font-semibold"
          >
            <span>New Work</span>
            <span className="pl-2 lg:pl-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.24106 7.7459C4.53326 7.44784 4.99051 7.42074 5.31272 7.66461L5.40503 7.7459L12 14.4734L18.595 7.7459C18.8872 7.44784 19.3444 7.42074 19.6666 7.66461L19.7589 7.7459C20.0511 8.04396 20.0777 8.51037 19.8386 8.83904L19.7589 8.93321L12.582 16.2541C12.2898 16.5522 11.8325 16.5793 11.5103 16.3354L11.418 16.2541L4.24106 8.93321C3.91965 8.60534 3.91965 8.07376 4.24106 7.7459Z"
                  fill="#051738"
                  stroke="#051738"
                />
              </svg>
            </span>
          </button>
          {show && (
            <div
              onMouseLeave={() => setShow(false)}
              className="absolute z-10 space-y-4 top-28 mt-2 bg-white text-sm md:text-sm-15 px-4 py-4 rounded-lg"
            >
              <DropDownLink
                linkTitle="Hot work"
                linkUrl="/safety/CreateSafety"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-12">
        <TableGroup columns={columns} data={data} showPagination />
      </div>
    </section>
  );
};

export default SatetyLayout;
