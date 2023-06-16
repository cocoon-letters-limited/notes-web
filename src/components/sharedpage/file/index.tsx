import PaperIcon from "components/svg/paperIcon";
import React, { ReactElement, useState } from "react";
import style from "./style.module.css";

type FileTabItemProps = {
  title: string;
  icon: string | ReactElement;
  onClick: () => void;
  active: boolean;
};

const FileTabItem = ({ title, icon, onClick, active }: FileTabItemProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full focus:outline-none px-6 py-4 flex items-center font-semibold ${
        active ? `bg-primary text-white ${style.activeFileTab}` : ""
      } ${active && title === "Files" && "rounded-t-lg"}`}
    >
      <span className="">{icon}</span>
      <span className="pl-4">{title}</span>
    </button>
  );
};

const FileData = () => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <div className="">
        <PaperIcon />
      </div>
      <div className="mt-2">
        <p className="text-sm-15 lg:text-base text-default">Playfair.pdf</p>
      </div>
    </div>
  );
};

function FilePage() {
  const [selectedTab, setSelectedTab] = useState("Files");

  const fileTabList = [
    {
      title: "Files",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.33 2H16.66C20.06 2 22 3.92 22 7.33V16.67C22 20.06 20.07 22 16.67 22H7.33C3.92 22 2 20.06 2 16.67V7.33C2 3.92 3.92 2 7.33 2ZM12.82 12.83H15.66C16.12 12.82 16.49 12.45 16.49 11.99C16.49 11.53 16.12 11.16 15.66 11.16H12.82V8.34C12.82 7.88 12.45 7.51 11.99 7.51C11.53 7.51 11.16 7.88 11.16 8.34V11.16H8.33C8.11 11.16 7.9 11.25 7.74 11.4C7.59 11.56 7.5 11.769 7.5 11.99C7.5 12.45 7.87 12.82 8.33 12.83H11.16V15.66C11.16 16.12 11.53 16.49 11.99 16.49C12.45 16.49 12.82 16.12 12.82 15.66V12.83Z"
            fill="#200E32"
          />
        </svg>
      ),
    },
    {
      title: "Trash",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.2871 5.24297C20.6761 5.24297 21 5.56596 21 5.97696V6.35696C21 6.75795 20.6761 7.09095 20.2871 7.09095H3.71385C3.32386 7.09095 3 6.75795 3 6.35696V5.97696C3 5.56596 3.32386 5.24297 3.71385 5.24297H6.62957C7.22185 5.24297 7.7373 4.82197 7.87054 4.22798L8.02323 3.54598C8.26054 2.61699 9.0415 2 9.93527 2H14.0647C14.9488 2 15.7385 2.61699 15.967 3.49699L16.1304 4.22698C16.2627 4.82197 16.7781 5.24297 17.3714 5.24297H20.2871ZM18.8058 19.134C19.1102 16.2971 19.6432 9.55712 19.6432 9.48913C19.6626 9.28313 19.5955 9.08813 19.4623 8.93113C19.3193 8.78413 19.1384 8.69713 18.9391 8.69713H5.06852C4.86818 8.69713 4.67756 8.78413 4.54529 8.93113C4.41108 9.08813 4.34494 9.28313 4.35467 9.48913C4.35646 9.50162 4.37558 9.73903 4.40755 10.1359C4.54958 11.8992 4.94517 16.8102 5.20079 19.134C5.38168 20.846 6.50498 21.922 8.13206 21.961C9.38763 21.99 10.6811 22 12.0038 22C13.2496 22 14.5149 21.99 15.8094 21.961C17.4929 21.932 18.6152 20.875 18.8058 19.134Z"
            fill="#200E32"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <div className="flex flex-row flex-wrap items-stretch h-[37rem]">
        <div className="w-full md:w-3/12 bg-[#F6F7FB] rounded-lg flex flex-col justify-between">
          <div className="">
            {fileTabList?.map((tab) => {
              return (
                <FileTabItem
                  key={tab.title}
                  title={tab.title}
                  icon={tab.icon}
                  onClick={() => setSelectedTab(tab.title)}
                  active={tab.title === selectedTab || false}
                />
              );
            })}
          </div>
          <div className="pb-4 px-6">
            <p className="text-[#230B34] mb-2 text-sm-15">2.8 GB left</p>
            <div className="relative h-2 rounded-lg bg-[#D4DBE7]">
              <div className="absolute left-0 h-2 rounded-lg bg-primary w-2/12" />
            </div>
          </div>
        </div>
        <div className="ml-0 md:ml-3 lg:ml-4 mt-4 md:mt-0 w-full md:w-auto flex-1 bg-[#F6F7FB] rounded-lg h-full overflow-y-auto">
          <div className="pt-6 lg:pt-8 px-4 lg:px-6 xl:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-8">
            <FileData />
            <FileData />
            <FileData />
            <FileData />
            <FileData />
            <FileData />
            <FileData />
            <FileData />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilePage;
