import React from "react";

type RadioButtonGroupProps = {
  label: string;
};

const RadioButtonGroup = ({ label }: RadioButtonGroupProps) => {
  return (
    <label htmlFor="default-radio-1" className="flex items-center">
      <input
        id="default-radio-1"
        type="radio"
        value=""
        name="default-radio"
        className="w-4 h-4 lg:w-5 lg:h-5 text-primary bg-white border-[#B1BFD9] focus:ring-primary"
      />
      <span className="ml-2 lg:ml-3 text-sm ">{label}</span>
    </label>
  );
};

export default RadioButtonGroup;
