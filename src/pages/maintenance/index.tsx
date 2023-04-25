import TableGroup from "components/elements/tableGroup";
import React from "react";
import { Column } from "react-table";
import MapIcon from "components/svg/mapIcon";
import { Link } from "react-router-dom";

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

const WoNumberCard = ({ value }: ValueProps) => {
  return (
    <Link
      to="/maintenance/12"
      aria-label={`${value}`}
      className="hover:text-primary flex flex-col space-y-2"
    >
      <span>{value}</span>
      <span className="text-xs text-primary">Preventive</span>
    </Link>
  );
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

const NextDueCard = ({ value }: ValueProps) => {
  return (
    <p className="flex items-center space-x-1" aria-label={`${value}`}>
      <span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.3082 2.07646L12.3089 2.63868C14.3749 2.8006 15.7396 4.2084 15.7418 6.36731L15.75 12.6866C15.7529 15.0405 14.2742 16.4887 11.9039 16.4925L6.11391 16.5C3.7584 16.503 2.26111 15.0202 2.25815 12.6597L2.25 6.41454C2.24704 4.24138 3.56364 2.83733 5.62963 2.64768L5.62889 2.08546C5.62815 1.75562 5.87251 1.5075 6.19833 1.5075C6.52415 1.50675 6.76851 1.75412 6.76925 2.08396L6.76999 2.6087L11.1685 2.6027L11.1678 2.07796C11.1671 1.74813 11.4114 1.50075 11.7372 1.5C12.0557 1.49925 12.3074 1.74663 12.3082 2.07646ZM3.39088 6.64589L14.602 6.63089V6.36853C14.5701 4.75683 13.7615 3.91126 12.3101 3.78532L12.3109 4.36253C12.3109 4.68487 12.0599 4.94049 11.7414 4.94049C11.4156 4.94124 11.1705 4.68637 11.1705 4.36403L11.1698 3.75683L6.77124 3.76283L6.77198 4.36928C6.77198 4.69237 6.52836 4.94724 6.20254 4.94724C5.87672 4.94799 5.63162 4.69386 5.63162 4.37078L5.63088 3.79357C4.18691 3.93824 3.38791 4.78682 3.39013 6.41275L3.39088 6.64589ZM11.4299 10.0525V10.0608C11.4373 10.4056 11.7187 10.6672 12.0601 10.6597C12.3933 10.6515 12.6592 10.3659 12.6517 10.0211C12.6362 9.69122 12.3689 9.4221 12.0364 9.42285C11.6958 9.43035 11.4292 9.70771 11.4299 10.0525ZM12.041 13.4182C11.7004 13.4107 11.4257 13.1266 11.4249 12.7817C11.4175 12.4369 11.6908 12.1513 12.0314 12.1431H12.0388C12.3868 12.1431 12.669 12.4272 12.669 12.7795C12.6697 13.1318 12.3883 13.4174 12.041 13.4182ZM8.37866 10.0653C8.39347 10.4102 8.6756 10.6793 9.01622 10.6643C9.34945 10.6486 9.61528 10.3637 9.60048 10.0189C9.59233 9.68154 9.31835 9.41917 8.98512 9.41992C8.6445 9.43491 8.37792 9.72052 8.37866 10.0653ZM9.01915 13.3845C8.67852 13.3995 8.39714 13.1304 8.38159 12.7856C8.38159 12.4407 8.64742 12.1559 8.98805 12.1401C9.32127 12.1394 9.596 12.4018 9.6034 12.7383C9.61895 13.0839 9.35238 13.3688 9.01915 13.3845ZM5.32812 10.0917C5.34293 10.4365 5.62506 10.7064 5.96569 10.6907C6.29891 10.6757 6.56475 10.3901 6.5492 10.0452C6.54179 9.70791 6.26781 9.44554 5.93385 9.44629C5.59322 9.46128 5.32738 9.74689 5.32812 10.0917ZM5.96886 13.3894C5.62823 13.4051 5.34684 13.1353 5.33129 12.7904C5.33055 12.4456 5.59713 12.16 5.93776 12.145C6.27098 12.1443 6.54571 12.4066 6.55311 12.744C6.56866 13.0888 6.30282 13.3744 5.96886 13.3894Z"
            fill="#054CD6"
          />
        </svg>
      </span>
      <span>{value}</span>
    </p>
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

const Maintenance = () => {
  const columns = React.useMemo<Column<DataProps>[]>(
    () => [
      {
        Header: "WO Number",
        accessor: "woNumber",
        Cell: WoNumberCard,
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Equipment",
        accessor: "equipment",
      },
      {
        Header: "Equipment No",
        accessor: "equipmentNo",
      },
      {
        Header: "Start - Finish Date",
        accessor: "date",
        Cell: DateCard,
      },
      {
        Header: "Type",
        accessor: "type",
        Cell: TypeStatusCard,
      },
      {
        Header: "Location",
        accessor: "location",
        Cell: LocationIconCard,
      },
      {
        Header: "Next Due",
        accessor: "nextDue",
        Cell: NextDueCard,
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
      <h1 className="text-default font-bold text-xl lg:text-2xl xl:text-3xl">
        Maintenance
      </h1>

      <div className="flex flex-row flex-wrap justify-center md:justify-end items-center space-x-4 xl:space-x-6">
        <button
          type="button"
          className="focus:outline-none flex items-center py-3 space-x-4 text-sm-15 lg:text-base text-primary border-2 border-primary rounded-lg px-6 font-semibold"
        >
          Subscribe
        </button>

        <Link
          to="/maintenance/create"
          className="focus:outline-none flex items-center py-3 space-x-4 text-sm-15 lg:text-base text-white border-2 border-primary bg-primary rounded-lg px-6 font-semibold"
        >
          New Maintenance
        </Link>
      </div>

      <div className="mt-12">
        <TableGroup columns={columns} data={data} showPagination />
      </div>
    </section>
  );
};

export default Maintenance;
