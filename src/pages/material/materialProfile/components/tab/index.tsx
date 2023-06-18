import React from "react";
import style from "./style.module.css";

type Props = {
  selectedTab?: string;
  handleChangeTab: (val: string) => void;
  disableTab?: boolean;
};
const Tab = ({ selectedTab, handleChangeTab, disableTab }: Props) => {
  const tabList = ["Bio", "Integrity", "Vendor", "Files"];
  return (
    <div className="mb-4 relative space-x-4 lg:space-x-6 xl:space-x-8 overflow-x-auto flex">
      {tabList?.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => handleChangeTab(tab)}
          className={`relative focus:outline-none text-sm-15 mb-4 ${
            selectedTab === tab ? style.active : "text-[#B1BFD9]"
          }`}
          disabled={disableTab}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;
