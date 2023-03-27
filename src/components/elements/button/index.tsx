/* eslint-disable react/button-has-type */
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string | any;
  type?: "submit" | "reset" | "button" | undefined;
  buttonStyleType?: "primary" | "outline" | undefined;
  disabled?: boolean;
}

const ButtonGroup = ({ title, type, buttonStyleType, disabled }: Props) => {
  const buttonTypeClassName = () => {
    switch (buttonStyleType) {
      case "primary":
        return "bg-primary text-white border-primary hover:bg-[#073CA1]";
      case "outline":
        return "text-primary bg-white border-[#D8DDE7] hover:border-primary";

      default:
        return "bg-primary text-white border-primary hover:bg-[#073CA1]";
    }
  };

  return (
    <button
      type={type || "button"}
      className={`mt-3 block px-5 h-14 lg:h-16 font-semibold text-sm md:text-sm-15 lg:text-base w-full rounded-md border-[2px] focus:outline-none transition-all ease-in-out duration-200 ${buttonTypeClassName()}`}
      disabled={disabled || false}
    >
      {title}
    </button>
  );
};

export default ButtonGroup;
