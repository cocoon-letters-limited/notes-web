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
          className={`bg-white py-2 md:py-3 xl:py-4 px-4 md:px-6 lg:px-8 xl:px-12 font-semibold focus:outline-none ring-0 focus:ring-0 text-sm md:text-sm-15 lg:text-base xl:text-lg  
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
