/* eslint-disable react/button-has-type */
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  type?: "submit" | "reset" | "button" | undefined;
  buttonStyleType?: "primary" | "outline" | undefined;
}

const ButtonGroup = ({ title, type, buttonStyleType, ...props }: Props) => {
  const buttonTypeClassName = () => {
    switch (buttonStyleType) {
      case "primary":
        return "bg-primary text-white border-primary";
      case "outline":
        return "text-primary bg-white border-[#D8DDE7]";

      default:
        return "bg-primary text-white border-primary";
    }
  };

  return (
    <button
      type={type || "button"}
      className={`mt-3 block px-5 h-14 lg:h-16 font-semibold text-sm md:text-sm-15 lg:text-base w-full rounded-md border-[2px] focus:outline-none ${buttonTypeClassName()}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default ButtonGroup;
