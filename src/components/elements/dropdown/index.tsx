import React, { useState } from "react";

type Props = {
  selected: string;
  iconSize?: "sm" | "md" | "lg" | undefined;
  iconColor?: "primary" | undefined;
  options: string[];
  onClick: (value: string) => void | undefined;
};

const DropDown = ({
  selected,
  iconSize,
  iconColor,
  options,
  onClick,
}: Props) => {
  const preferredIconSize = (size?: string) => {
    switch (size) {
      case "sm":
        return "w-2 h-2";
      case "md":
        return "w-3 h-3";
      case "lg":
        return "w-4 h-4";
      default:
        return "w-4 h-4";
    }
  };

  const preferredIconColor = (color?: string) => {
    switch (color) {
      case "primary":
        return "#054CD6";
      default:
        return "#051738";
    }
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const handleSelectDropdown = (value: string) => {
    setShowDropdown(!showDropdown);
    onClick(value);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="flex flex-row items-center focus:outline-none"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span>{selected}</span>
        <span className="pl-2">
          <svg
            className={preferredIconSize(iconSize)}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.1808 5.80942C3.39995 5.58588 3.74288 5.56556 3.98454 5.74846L4.05377 5.80942L9 10.8551L13.9462 5.80942C14.1654 5.58588 14.5083 5.56556 14.75 5.74846L14.8192 5.80942C15.0384 6.03297 15.0583 6.38278 14.879 6.62928L14.8192 6.6999L9.43649 12.1906C9.21734 12.4141 8.8744 12.4344 8.63275 12.2515L8.56351 12.1906L3.1808 6.6999C2.93973 6.454 2.93973 6.05532 3.1808 5.80942Z"
              fill={preferredIconColor(iconColor)}
              stroke={preferredIconColor(iconColor)}
            />
          </svg>
        </span>
      </button>
      {/* Dropdown Options */}
      {showDropdown && (
        <div
          onMouseLeave={() => setShowDropdown(false)}
          className="absolute z-10 space-y-3 top-10 bg-white text-sm md:text-sm-15 px-4 py-4 rounded-lg"
        >
          {options?.map((option) => (
            <button
              type="button"
              onClick={() => handleSelectDropdown(option)}
              className="block focus:outline-none hover:text-textColor transition-all ease-in-out duration-200"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
