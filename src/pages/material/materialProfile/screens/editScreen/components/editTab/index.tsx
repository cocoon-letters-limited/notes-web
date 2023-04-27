import React from "react";
import style from "./style.module.css";

type Props = {
  selectedTab?: string;
  handleChangeTab: (val: string) => void;
};

const EditTab = ({ selectedTab, handleChangeTab }: Props) => {
  const tabList = ["Quantities", "Costs", "Policy", "Past Usage", "Supplier"];
  return (
    <div className="mb-4 relative space-x-4 lg:space-x-6 xl:space-x-8 overflow-x-auto flex border-b border-default">
      {tabList?.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => handleChangeTab(tab)}
          className={`relative focus:outline-none text-sm-15 mb-2 ${
            selectedTab === tab ? style.active : "text-default"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default EditTab;
