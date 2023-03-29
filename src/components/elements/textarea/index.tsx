import React from "react";

type Props = {
  label: string;
  placeholder?: string;
  name?: string;
  value?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
};

const TextareaGroup = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  rows,
  error,
}: Props) => {
  const defaultClassName =
    "mt-3 text-primary block px-5 py-4 text-sm md:text-sm-15 lg:text-base w-full rounded-md border-[2px] bg-white placeholder-[#B1BFD9] focus:outline-none focus:border-primary";

  return (
    <div className="mb-4 lg:mb-8">
      <label
        htmlFor={name}
        className="text-sm-15 lg:text-base font-semibold text-black"
      >
        {label}
      </label>
      <div className="relative input input-field w-full mb-2">
        <textarea
          className={`resize-none ${defaultClassName} ${
            error ? "border-red-600" : " border-[#D8DDE7]"
          }`}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows={rows || 6}
        />
      </div>
      <span className="text-red-600 text-xs lg:text-sm">{error}</span>
    </div>
  );
};

export default TextareaGroup;
