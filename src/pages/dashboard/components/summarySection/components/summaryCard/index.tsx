/* eslint-disable no-nested-ternary */
import React, { ReactElement } from "react";
import DropDown from "components/elements/dropdown";
import FlagIcon from "components/svg/flagIcon";
import ArrowUpRightIcon from "components/svg/arrowUpRightIcon";
import ArrowDownRightIcon from "components/svg/arrowDownRightIcon";
import style from "./style.module.css";

type IconCardProps = {
  icon: ReactElement;
  color?: string;
};

const IconCard = ({ icon, color }: IconCardProps) => {
  return (
    <div className="relative flex items-center justify-center rounded-3xl h-14 w-14">
      <div
        className="absolute top-0 left-0 right-0 w-full h-full rounded-3xl"
        style={{ background: color || "#F16B40", opacity: ".2" }}
      />
      <div
        className="flex items-center justify-center bg-[#F16B40] rounded-2xl h-10 w-10"
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
  unit: string;
  icon: ReactElement;
  color?: string;
  selectedOption: string;
  options: string[];
  status: string | undefined;
  onClick: (value: string) => void | undefined;
};

const SummaryCard = ({
  name,
  value,
  unit,
  icon,
  color,
  status,
  selectedOption,
  options,
  onClick,
}: Props) => {
  return (
    <div
      className={`relative bg-white px-4 py-4 lg:px-6 lg:py-6 rounded-xl ${style.card}`}
    >
      <div className="flex items-center">
        <IconCard icon={icon} color={color} />
        <p className="flex-1 pl-3 text-base lg:text-lg text-[#224280] font-bold">
          {name}
        </p>
      </div>
      <div className="relative mt-3 mx-auto text-center flex flex-col items-center">
        <div className="">
          <p
            className="text-3xl font-bold"
            style={{
              color: color || "#F16B40",
            }}
          >
            {value} <span className="text-base">{unit}</span>
          </p>

          <div className=" mt-1">
            <div className="text-sm font-semibold flex items-center">
              <span className="text-[#8A8A8A] pr-1">In the last</span>
              <span>
                <DropDown
                  selected={`${selectedOption}days`}
                  options={options}
                  onClick={onClick}
                  iconSize="md"
                />
              </span>
            </div>
            <div className="absolute right-2 bottom-3">
              {status === "increase" ? (
                <ArrowUpRightIcon />
              ) : status === "decrease" ? (
                <ArrowDownRightIcon />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
