import React from "react";

type Props = {
  type?: string;
  label: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const InputGroup = ({
  type,
  label,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  error,
}: Props) => {
  const defaultClassName =
    "mt-3 text-primary block px-5 h-14 lg:h-16 text-sm md:text-sm-15 lg:text-base w-full rounded-md border-[2px] bg-white placeholder-[#B1BFD9] focus:outline-none focus:border-primary";

  return (
    <div className="mb-4 lg:mb-8">
      <label
        htmlFor={name}
        className="text-sm-15 lg:text-base font-semibold text-black"
      >
        {label}
      </label>
      <div className="relative input input-field w-full mb-2">
        <input
          type={type || "text"}
          className={`${defaultClassName} ${
            error ? "border-red-600" : " border-[#D8DDE7]"
          }`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      <span className="text-red-600 text-xs lg:text-sm">{error}</span>
    </div>
  );
};

export default InputGroup;
