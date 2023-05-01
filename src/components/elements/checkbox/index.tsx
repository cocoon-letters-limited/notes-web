import React from "react";

type CheckboxGroupProps = {
  label: string;
};

const CheckboxGroup = ({ label }: CheckboxGroupProps) => {
  return (
    <label htmlFor="checked-checkbox" className="flex items-center">
      <input
        id="checked-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 lg:w-5 lg:h-5 text-primary bg-white rounded border-[#B1BFD9] focus:ring-primary"
      />

      <span className="ml-2 lg:ml-3 text-sm ">{label}</span>
    </label>
  );
};

export default CheckboxGroup;
