import React from "react";
import style from "./style.module.css";

interface TabItemProps {
  title: string;
  selectedTab: string;
  onSelectedTab: (val: string) => void;
}

const TabItem = ({ selectedTab, title, onSelectedTab }: TabItemProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelectedTab(title)}
      className={`py-4 px-2 lg:px-4 text-sm md:text-sm-15 lg:text-base focus:outline-none font-semibold ${
        title === selectedTab ? style.active : ""
      }`}
    >
      {title}
    </button>
  );
};

type VendorTabListSectionProps = {
  tabList: string[];
  selectedTab: string;
  onSelectedTab: (val: string) => void;
};

const VendorTabListSection = ({
  tabList,
  selectedTab,
  onSelectedTab,
}: VendorTabListSectionProps) => {
  return (
    <div className="w-full bg-white rounded-lg px-6">
      <div className="flex flex-row space-x-6 justify-between">
        {tabList?.map((item) => (
          <TabItem
            key={item}
            title={item}
            onSelectedTab={onSelectedTab}
            selectedTab={selectedTab}
          />
        ))}
      </div>
    </div>
  );
};

export default VendorTabListSection;
