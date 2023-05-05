import React, { useState } from "react";
import style from "../style.module.css";

interface TabItemProps {
  title: string;
  selectedTab: string;
  onSelectedTab: (val: string) => void;
  count: number;
}

const TabItem = ({
  selectedTab,
  title,
  onSelectedTab,
  count,
}: TabItemProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelectedTab(title)}
      className={`py-3 px-2 text-sm md:text-sm-15 lg:text-base focus:outline-none font-semibold ${
        title === selectedTab ? style.active : ""
      }`}
    >
      <span>{title}</span>
      {count > 0 && (
        <span className="ml-2 bg-[#F9A01B] text-sm py-1 px-2 text-white rounded-tl-lg rounded-tr-xl rounded-br-lg rounded-bl-xl">
          {count}
        </span>
      )}
    </button>
  );
};

const TabSection = () => {
  const [selectedTab, setSelectedTab] = useState("Calendar");

  const tabList = [
    {
      id: 1,
      title: "Calendar",
      count: 3,
    },
    {
      id: 2,
      title: "Live training",
      count: 0,
    },
    {
      id: 3,
      title: "Recorded",
      count: 0,
    },
    {
      id: 2,
      title: "Assessment",
      count: 0,
    },
  ];

  const onSelectedTab = (val: string) => {
    setSelectedTab(val);
  };

  return (
    <div className="mt-4 lg:mt-0 w-full lg:w-10/12 bg-white rounded-lg px-6">
      <div className="flex flex-row space-x-6">
        {tabList?.map((item) => (
          <TabItem
            key={item?.id}
            title={item?.title}
            count={item?.count}
            onSelectedTab={onSelectedTab}
            selectedTab={selectedTab}
          />
        ))}
      </div>
    </div>
  );
};

export default TabSection;
