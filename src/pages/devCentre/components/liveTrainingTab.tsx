import React from "react";

type TabItemProps = {
  title: string;
  active: boolean;
  handleClick: (val: string) => void;
};
const TabItem = ({ title, active, handleClick }: TabItemProps) => {
  return (
    <button
      type="button"
      onClick={() => handleClick(title)}
      className={`py-3 focus:outline-none font-semibold text-sm-15 lg:text-base text-center rounded-xl ${
        active ? "bg-white text-primary" : "text-default"
      }`}
    >
      {title}
    </button>
  );
};

type Props = {
  selectedTab: string;
  setSelectedTab: any;
};

const LiveTrainingTab = ({ selectedTab, setSelectedTab }: Props) => {
  const handleClick = (val: string) => {
    setSelectedTab(val);
  };
  return (
    <div className="bg-[#F6F7FB] rounded-xl grid grid-cols-2 p-1 mb-8">
      <TabItem
        active={selectedTab === "Participants" && true}
        title="Participants"
        handleClick={handleClick}
      />
      <TabItem
        active={selectedTab === "Chats" && true}
        title="Chats"
        handleClick={handleClick}
      />
    </div>
  );
};

export default LiveTrainingTab;
