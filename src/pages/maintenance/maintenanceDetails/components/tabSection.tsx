import React, { useState } from "react";
import style from "../style.module.css";

type TabItemProps = {
  title: string;
  selectedTab?: string;
  handleSelectTab: (val: string) => void;
};

const TabItem = ({ title, selectedTab, handleSelectTab }: TabItemProps) => {
  return (
    <button
      type="button"
      onClick={() => handleSelectTab(title)}
      className={`text-sm lg:text-base focus:outline-none ${
        selectedTab === title
          ? `text-default font-semibold ${style.active}`
          : "text-[#B1BFD9]"
      }`}
    >
      {title}
    </button>
  );
};

const TabSection = () => {
  const [selectedTab, setSelectedTab] = useState("Details");

  const handleSelectTab = (val: string) => {
    setSelectedTab(val);
  };
  return (
    <section className="mb-4 bg-white rounded-lg px-4 lg:px-6 pt-5 pb-5 lg:pb-5">
      <div className="flex flex-row items-center space-x-8">
        <TabItem
          title="Details"
          selectedTab={selectedTab}
          handleSelectTab={handleSelectTab}
        />
        <TabItem
          title="W.O Notes"
          selectedTab={selectedTab}
          handleSelectTab={handleSelectTab}
        />
        <TabItem
          title="Safety Permit Document"
          selectedTab={selectedTab}
          handleSelectTab={handleSelectTab}
        />
      </div>
    </section>
  );
};

export default TabSection;
