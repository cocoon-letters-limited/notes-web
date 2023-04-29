import FlagIcon from "components/svg/flagIcon";
import React, { ReactElement } from "react";
import style from "./style.module.css";

type IconCardProps = {
  icon?: ReactElement;
  color?: string;
};

const IconCard = ({ icon, color }: IconCardProps) => {
  return (
    <div className="relative flex items-center justify-center rounded-3xl h-12 xl:h-14 w-12 xl:w-14">
      <div
        className="absolute top-0 left-0 right-0 w-full h-full rounded-3xl"
        style={{ background: color || "#F16B40", opacity: ".2" }}
      />
      <div
        className="flex items-center justify-center bg-[#F16B40] rounded-2xl h-8 xl:h-10 w-8 xl:w-10"
        style={{ background: color || "#F16B40" }}
      >
        {icon || <FlagIcon />}
      </div>
    </div>
  );
};

type Props = {
  name: string;
  value: string;
  icon?: ReactElement;
  color?: string;
};

export const DataCard = ({ name, value, icon, color }: Props) => {
  return (
    <div
      className={`relative bg-white px-4 py-4 lg:px-4 lg:py-6 rounded-xl flex flex-col justify-between ${style.card}`}
    >
      <div className="flex items-center">
        <IconCard icon={icon} color={color} />
        <p className="flex-1 pl-3 text-sm-15 xl:text-base text-[#224280] font-bold">
          {name}
        </p>
      </div>
      <div className="relative mt-3 lg:mt-4 pl-2">
        <p
          className="text-2xl lg:text-3xl font-bold"
          style={{
            color: color || "#F16B40",
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
};

const IntegrityScreen = () => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">
        <DataCard name="Quantity in Stock" value="48" color="#E84CD8" />
        <DataCard name="Quantity Availability" value="48" color="#4C78E8" />
        <DataCard name="Minimum Quantity Level" value="Null" color="#F16B40" />
        <DataCard name="Maximum Quantity Level" value="5" color="#16F62C" />

        <DataCard name="Re-Order Quantity" value="2" color="#E84CD8" />
        <DataCard name="Cost Price" value="2,500" color="#4C78E8" />
        <DataCard name="Unit of Issue" value="kg" color="#F16B40" />
        <DataCard name="Quantity Allocated" value="500" color="#16F62C" />
      </div>

      <div className="mt-6 lg:mt-8">
        <div className="grid grid-cols-3 gap-6 bg-primary rounded-xl py-5 px-6 text-white text-sm">
          <p className="text-left">Name</p>
          <p className="text-center">Quantity</p>
          <p className="text-right">Date</p>
        </div>
      </div>
    </div>
  );
};

export default IntegrityScreen;
