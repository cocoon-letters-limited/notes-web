import React, { ReactElement, useState } from "react";
import SearchIcon from "components/svg/searchIcon";
import CategoriesSection from "../categoriesSection";
import VendorListingSection from "../vendorListingSection";

type DisplayTypeButtonProps = {
  isActive: boolean;
  icon: string | ReactElement;
  onClick: () => void;
};

const DisplayTypeButton = ({
  isActive,
  icon,
  onClick,
}: DisplayTypeButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={
        isActive
          ? "p-2 rounded-lg border border-[#DFE8EF]"
          : "border border-transparent"
      }
    >
      {icon}
    </button>
  );
};

const VendorScreen = () => {
  const [selectedDisplayType, setSelectedDisplayType] = useState("grid");

  const handleChangeDisplayType = (val: string) => {
    setSelectedDisplayType(val);
  };

  return (
    <div className="mt-6">
      <div className="flex flex-row justify-between">
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pr-4 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="search"
              id="default-search"
              name="default-search"
              className="block w-full p-3 px-4 pl-16 bg-white placeholder:text-[#B1BFD9] rounded-full text-sm lg:text-base text-[#96A1B4] focus:outline-none ring-0 focus:ring-0"
              placeholder="Search vendor"
            />
          </div>
        </form>

        <div className="flex items-center space-x-4">
          <DisplayTypeButton
            isActive={selectedDisplayType === "grid" && true}
            onClick={() => handleChangeDisplayType("grid")}
            icon={
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
                  d="M8.01348 2H4.97574C3.33089 2 2 3.34244 2 4.99552V8.05963C2 9.71203 3.33117 11.0551 4.97574 11.0551H8.01348C9.65805 11.0551 10.9892 9.71203 10.9892 8.05963V4.99552C10.9892 3.34244 9.65833 2 8.01348 2ZM4.97574 3.39535H8.01348C8.88499 3.39535 9.59387 4.11039 9.59387 4.99552V8.05963C9.59387 8.94418 8.88461 9.6598 8.01348 9.6598H4.97574C4.10461 9.6598 3.39535 8.94418 3.39535 8.05963V4.99552C3.39535 4.11039 4.10423 3.39535 4.97574 3.39535ZM19.0252 2H15.9865C14.3417 2 13.0108 3.34244 13.0108 4.99552V8.05963C13.0108 9.71203 14.342 11.0551 15.9865 11.0551H19.0252C20.669 11.0551 22 9.71184 22 8.05963V4.99552C22 3.34264 20.6693 2 19.0252 2ZM15.9865 3.39535H19.0252C19.8959 3.39535 20.6047 4.11049 20.6047 4.99552V8.05963C20.6047 8.94407 19.8955 9.6598 19.0252 9.6598H15.9865C15.1154 9.6598 14.4061 8.94418 14.4061 8.05963V4.99552C14.4061 4.11039 15.115 3.39535 15.9865 3.39535ZM4.97574 12.9449H8.01348C9.65852 12.9449 10.9892 14.2875 10.9892 15.9413V19.0045C10.9892 20.6576 9.65833 22 8.01348 22H4.97574C3.33089 22 2 20.6576 2 19.0045V15.9413C2 14.2875 3.3307 12.9449 4.97574 12.9449ZM8.01348 14.3402H4.97574C4.10413 14.3402 3.39535 15.0553 3.39535 15.9413V19.0045C3.39535 19.8896 4.10423 20.6047 4.97574 20.6047H8.01348C8.88499 20.6047 9.59387 19.8896 9.59387 19.0045V15.9413C9.59387 15.0553 8.88509 14.3402 8.01348 14.3402ZM19.0252 12.9449H15.9865C14.3415 12.9449 13.0108 14.2875 13.0108 15.9413V19.0045C13.0108 20.6576 14.3417 22 15.9865 22H19.0252C20.6693 22 22 20.6574 22 19.0045V15.9413C22 14.2877 20.6695 12.9449 19.0252 12.9449ZM15.9865 14.3402H19.0252C19.896 14.3402 20.6047 15.0554 20.6047 15.9413V19.0045C20.6047 19.8895 19.8959 20.6047 19.0252 20.6047H15.9865C15.115 20.6047 14.4061 19.8896 14.4061 19.0045V15.9413C14.4061 15.0553 15.1149 14.3402 15.9865 14.3402Z"
                  fill="#041E35"
                />
              </svg>
            }
          />
          <DisplayTypeButton
            isActive={selectedDisplayType === "list" && true}
            onClick={() => handleChangeDisplayType("list")}
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.25 6H20.25"
                  stroke="#49536E"
                  strokeWidth="1.71429"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.25 12H20.25"
                  stroke="#49536E"
                  strokeWidth="1.71429"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.25 18H20.25"
                  stroke="#49536E"
                  strokeWidth="1.71429"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.125 7.125C4.74632 7.125 5.25 6.62132 5.25 6C5.25 5.37868 4.74632 4.875 4.125 4.875C3.50368 4.875 3 5.37868 3 6C3 6.62132 3.50368 7.125 4.125 7.125Z"
                  fill="#49536E"
                />
                <path
                  d="M4.125 13.125C4.74632 13.125 5.25 12.6213 5.25 12C5.25 11.3787 4.74632 10.875 4.125 10.875C3.50368 10.875 3 11.3787 3 12C3 12.6213 3.50368 13.125 4.125 13.125Z"
                  fill="#49536E"
                />
                <path
                  d="M4.125 19.125C4.74632 19.125 5.25 18.6213 5.25 18C5.25 17.3787 4.74632 16.875 4.125 16.875C3.50368 16.875 3 17.3787 3 18C3 18.6213 3.50368 19.125 4.125 19.125Z"
                  fill="#49536E"
                />
              </svg>
            }
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap">
        <CategoriesSection />
        <VendorListingSection displayType={selectedDisplayType} />
      </div>
    </div>
  );
};

export default VendorScreen;
