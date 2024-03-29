import React, { ChangeEvent } from "react";

type Props = {
  label: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  options: {
    label: string;
    value: string;
  }[];
  className?: string;
  labelColor?: string;
};

const SelectGroup2 = ({
  label,
  labelColor,
  name,
  value,
  options,
  error,
  onChange,
  className,
}: Props) => {
  const defaultClassName =
    className ||
    "mt-3 text-primary block px-5 h-14 lg:h-16 text-sm md:text-sm-15 lg:text-base w-full rounded-md border-[2px] bg-white placeholder-[#B1BFD9] focus:outline-none focus:border-primary";

  return (
    <div className="mb-4 lg:mb-8">
      <label
        htmlFor={name}
        className={`text-sm-15 lg:text-base font-semibold ${
          labelColor || "text-black"
        }`}
      >
        {label}
      </label>
      <div className="relative input input-field w-full mb-2">
        <select
          className={`${defaultClassName} ${
            error ? "border-red-600" : " border-[#D8DDE7]"
          }`}
          onChange={onChange}
          value={value}
        >
          <option>-- Select --</option>
          {options.map((option) => (
            <option key={value} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectGroup2;
