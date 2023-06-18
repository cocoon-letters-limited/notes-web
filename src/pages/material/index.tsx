import TableGroup from "components/elements/tableGroup";
import React from "react";
import QRCodeImage from "assets/images/svg/qrcode_sm.svg";
import { Column } from "react-table";
import MapIcon from "components/svg/mapIcon";
import { Link } from "react-router-dom";

export type DataProps = {
  id: number;
  storeId: string;
  name: string;
  qrCode: string;
  location: string;
  manufacturer: string;
  quantity: string | number;
  unit: string;
  condition: string;
  criticality: number;
  price: string;
  action?: string | undefined;
};

type ValueProps = {
  value?: any;
};

const NameCard = ({ value }: ValueProps) => {
  return (
    <Link
      to="/material/12"
      aria-label={`${value}`}
      className="hover:text-primary"
    >
      {value}
    </Link>
  );
};

const QRCodeCard = ({ value }: ValueProps) => {
  return <img src={QRCodeImage} alt={`QR Code${value}`} />;
};

const LocationIconCard = ({ value }: ValueProps) => {
  return (
    <div aria-label={`${value}`}>
      <MapIcon />
    </div>
  );
};

const PriceCard = ({ value }: ValueProps) => {
  return <p aria-label={`${value}`}>${value}</p>;
};

const ConditionCard = ({ value }: ValueProps) => {
  const styleClassName =
    // eslint-disable-next-line no-nested-ternary
    value === "High"
      ? "condition-high"
      : value === "Low"
      ? "condition-low"
      : "condition-out";

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

const Material = () => {
  const columns = React.useMemo<Column<DataProps>[]>(
    () => [
      {
        Header: "Store ID",
        accessor: "storeId", // accessor is the "key" in the data
      },
      {
        Header: "Name",
        accessor: "name",
        Cell: NameCard,
      },
      {
        Header: "_",
        accessor: "qrCode",
        Cell: QRCodeCard,
      },
      {
        Header: "Location",
        accessor: "location",
        Cell: LocationIconCard,
      },
      {
        Header: "Manufacturer",
        accessor: "manufacturer",
      },
      {
        Header: "Quantity",
        accessor: "quantity",
      },
      {
        Header: "Unit",
        accessor: "unit",
      },
      {
        Header: "Condition",
        accessor: "condition",
        Cell: ConditionCard,
      },
      {
        Header: "Criticality",
        accessor: "criticality",
      },
      {
        Header: "Price",
        accessor: "price",
        Cell: PriceCard,
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
        action: "",
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
        action: "",
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
        action: "",
      },
    ],
    [],
  );

  return (
    <section className="relative h-full pt-4">
      <h1 className="text-default font-bold text-xl lg:text-2xl xl:text-3xl">
        Material
      </h1>

      <div className="flex flex-row flex-wrap justify-center md:justify-end items-center space-x-6 xl:space-x-8">
        <button
          type="button"
          className="focus:outline-none flex items-center py-3 space-x-3 text-sm-15 lg:text-base text-primary rounded-lg font-semibold"
        >
          <span>Upload CSV</span>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.02148 12.6685C2.02148 10.2893 3.89542 8.34739 6.24772 8.23837L6.45648 8.23354H7.38948C7.8037 8.23354 8.13948 8.56933 8.13948 8.98354C8.13948 9.36323 7.85733 9.67703 7.49125 9.72669L7.38948 9.73354H6.45648C4.89358 9.73354 3.61575 10.9556 3.52647 12.4961L3.52148 12.6685L3.52148 17.5435C3.52148 19.1056 4.74362 20.3833 6.28406 20.4726L6.45648 20.4775H17.5865C19.1493 20.4775 20.4272 19.2556 20.5165 17.7159L20.5215 17.5435V12.6585C20.5215 11.1012 19.3039 9.8275 17.7693 9.73851L17.5975 9.73354H16.6545C16.2403 9.73354 15.9045 9.39775 15.9045 8.98354C15.9045 8.60384 16.1866 8.29005 16.5527 8.24039L16.6545 8.23354H17.5975C19.9687 8.23354 21.9046 10.1003 22.0164 12.4442L22.0215 12.6585V17.5435C22.0215 19.922 20.1474 21.8637 17.7952 21.9727L17.5865 21.9775H6.45648C4.07743 21.9775 2.13535 20.1038 2.02631 17.7522L2.02148 17.5435V12.6685ZM11.4797 1.67133C11.6162 1.52879 11.8084 1.44004 12.0214 1.44004C12.2365 1.44004 12.4304 1.53058 12.5672 1.67564L15.4687 4.5891C15.761 4.88259 15.76 5.35747 15.4665 5.64976C15.1997 5.91548 14.783 5.93883 14.4898 5.72037L14.4059 5.64758L12.7714 4.00751L12.7714 14.231C12.7714 14.6453 12.4356 14.981 12.0214 14.981C11.6417 14.981 11.3279 14.6989 11.2782 14.3328L11.2714 14.231L11.2714 4.00583L9.63779 5.64749C9.37212 5.91435 8.95551 5.93948 8.66142 5.72228L8.57714 5.64985C8.31028 5.38417 8.28514 4.96757 8.50234 4.67347L8.57478 4.58919L11.4797 1.67133Z"
                fill="#054CD6"
              />
            </svg>
          </span>
        </button>

        <button
          type="button"
          className="focus:outline-none flex items-center py-3 space-x-4 text-sm-15 lg:text-base text-primary border-2 border-primary rounded-lg px-6 font-semibold"
        >
          Subscribe
        </button>

        <Link
          to="/material/create"
          className="focus:outline-none flex items-center py-3 space-x-4 text-sm-15 lg:text-base text-white border-2 border-primary bg-primary rounded-lg px-6 font-semibold"
        >
          New material
        </Link>
      </div>

      <div className="mt-12">
        <TableGroup columns={columns} data={data} showPagination />
      </div>
    </section>
  );
};

export default Material;
