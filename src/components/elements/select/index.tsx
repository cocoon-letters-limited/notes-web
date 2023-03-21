import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from "react-select";

type Props = {
  label: string;
  placeholder?: string;
  name?: string;
  onChange?: any;
  onBlur?: any;
  error?: string;
  options: {
    label: string;
    value: string;
  }[];
  isClearable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
};

const customStyles = {
  placeholder: (baseStyles: any) => ({
    ...baseStyles,
    color: "#B1BFD9",
  }),
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    color: "#054CD6",
    boxShadow: "none",
    border:
      state.isFocused || state.isSelected
        ? "2px solid #054CD6"
        : "2px solid #D8DDE7",
    outline: state.isFocused ? "none" : "",
    height: "4rem",
    borderRadius: "0.35rem",
    paddingLeft: ".65rem",
  }),
  container: (baseStyles: any, state: any) => ({
    ...baseStyles,
    color: "#B1BFD9",
    boxShadow: "none",
    border: "none",
    outline: state.isFocused ? "none" : "",
  }),
  menu: (baseStyles: any) => ({
    ...baseStyles,
    color: "#000000",
  }),
  option: (baseStyles: any, state: any) => ({
    ...baseStyles,
    color: "#000000",
    backgroundColor: state.isFocused ? "#E7EDF9" : "",
    padding: 10,
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    const color = state.isFocused ? "#EFFBF9" : "";

    return { ...provided, opacity, color, transition };
  },
};

const SelectGroup = ({
  label,
  name,
  options,
  error,
  onChange,
  onBlur,
  placeholder,
  isClearable,
  isDisabled,
  isLoading,
  isSearchable,
}: Props) => {
  return (
    <div className="mb-4 lg:mb-8">
      <label
        htmlFor={name}
        className="text-sm-15 lg:text-base font-semibold text-black"
      >
        {label}
      </label>
      <Select
        styles={customStyles}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        options={options}
        className="mt-3 mb-2 text-sm md:text-sm-15 lg:text-base"
        placeholder={placeholder}
        isClearable={isClearable}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isSearchable={isSearchable}
      />

      <span className="text-red-600 text-xs lg:text-sm block">{error}</span>
    </div>
  );
};

export default SelectGroup;
