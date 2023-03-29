import React, { useState } from "react";
import style from "./style.module.css";

type ListDropdownButtonProps = {
  title: string;
  show: boolean;
  onClick: () => void;
};

const ListDropdownButton = ({
  title,
  show,
  onClick,
}: ListDropdownButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus:outline-none py-4 px-4  flex items-center bg-[#5577EE] w-full text-white ${
        show ? "rounded-t-lg" : "rounded-lg"
      }`}
    >
      <span
        className={`${
          show ? "rotate-90" : "rotate-0"
        } transition-all ease-in-out duration-200`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.45492 16.4658C6.20653 16.2223 6.18395 15.8413 6.38718 15.5728L6.45492 15.4958L12.0612 10L6.45492 4.50421C6.20653 4.26071 6.18395 3.87967 6.38717 3.61117L6.45492 3.53424C6.7033 3.29074 7.09198 3.26861 7.36587 3.46783L7.44434 3.53424L13.5451 9.51504C13.7935 9.75854 13.816 10.1396 13.6128 10.4081L13.5451 10.485L7.44434 16.4658C7.17112 16.7336 6.72814 16.7336 6.45492 16.4658Z"
            fill="white"
            stroke="white"
          />
        </svg>
      </span>
      <span className="pl-2">{title}</span>
    </button>
  );
};

type Props = {
  data: any;
};

const ListItem = ({ data }: Props) => {
  return (
    <div className="flex text-xs justify-between items-center lg:text-sm gap-x-1 mb-2 lg:mb-3">
      <p className="text-[#054CD6]">{data?.title}</p>
      <p className="text-[#051738]">{data?.type}</p>
      <p className="bg-[#F92F1B] py-[2px] px-2 rounded text-white">
        {data?.priority}
      </p>
      <p className="text-[#F92F1B]">{data?.unit}</p>
      <p>{data?.date}</p>
    </div>
  );
};

type CardProps = {
  title: string;
  data: any;
  show: boolean;
  onClick: () => void;
};

const Card = ({ title, data, show, onClick }: CardProps) => {
  return (
    <div className="mb-3">
      <ListDropdownButton title={title} onClick={onClick} show={show} />

      <div
        id="scheduleTab"
        className={`bg-white rounded-b-lg px-3 py-4 h-[9rem] overflow-auto ${
          show ? `block ${style.showList}` : "hidden"
        }`}
      >
        <ListItem data={data} />
        <ListItem data={data} />
        <ListItem data={data} />
      </div>
    </div>
  );
};

const WorkScheduleCard = () => {
  const data = {
    title: "WO 21-08-02-0003",
    type: "Maint.",
    priority: "High",
    unit: "HW",
    date: "8/8/21",
  };

  const [selectedTab, setSelectedTab] = useState("Ongoing work");
  const handleToggleTab = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="relative bg-transparent rounded-xl h-[27rem] px-6 pt-6 pb-6 border-2 border-dashed">
      <p className="font-bold text-base lg:text-lg text-[#230B34]">
        Work Schedule
      </p>

      <div className="mt-4 relative">
        <Card
          title="Ongoing work"
          data={data}
          show={selectedTab === "Ongoing work" && true}
          onClick={() => handleToggleTab("Ongoing work")}
        />
        <Card
          title="Upcoming work"
          data={data}
          show={selectedTab === "Upcoming work" && true}
          onClick={() => handleToggleTab("Upcoming work")}
        />
        <Card
          title="Overdue work"
          data={data}
          show={selectedTab === "Overdue work" && true}
          onClick={() => handleToggleTab("Overdue work")}
        />
      </div>
    </div>
  );
};

export default WorkScheduleCard;
