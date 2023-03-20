import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

type Props = {
  tabList: string[];
  currentTab: string;
};

const TabSection = ({ tabList, currentTab }: Props) => {
  return (
    <div className="relative mt-6">
      {tabList?.map((item) => (
        <Link
          to={`/dashboard?tab=${item?.toLowerCase()}`}
          type="button"
          key={item}
          className={`bg-white py-3 md:py-4 px-6 md:px-8 lg:px-12 font-semibold focus:outline-none ring-0 focus:ring-0 text-base lg:text-lg 
          ${style.tab} ${
            item?.toLowerCase()?.includes(currentTab) ? style.active : ""
          }`}
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

export default TabSection;
