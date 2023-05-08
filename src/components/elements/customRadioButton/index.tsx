import React, { useState } from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioProps {
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const CustomRadio: React.FC<RadioProps> = ({
  name,
  options,
  selectedValue,
  onChange,
}) => {
  const [value, setValue] = useState(selectedValue);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <form action="">
      <div className="flex space-x-4">
        {options.map((option) => (
          <label
            htmlFor={option.value}
            key={option.value}
            className="inline-flex items-center mt-1 mb-1"
          >
            <input
              type="radio"
              className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={handleValueChange}
            />
            <span className="ml-2 text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </form>
  );
};

export default CustomRadio;
