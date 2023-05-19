/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { convertFirstLetterToUppercase } from "utils/convertFirstLetterToUppercase";

type Props = {
  columns: any[];
  onClose: () => void;
};

const TableColumnFilterModal = ({ columns, onClose }: Props) => {
  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-64 md:top-56 right-2 bg-white pl-6 pr-8 pt-6 pb-8 rounded-lg"
      style={{
        boxShadow: "0px 4px 20px rgba(199, 199, 199, 0.25)",
      }}
    >
      <div className="flex flex-col space-y-3">
        {columns.map((column) => (
          <div key={column.id}>
            <label className="text-sm font-semibold text-black">
              <input
                type="checkbox"
                className="mr-2"
                {...column.getToggleHiddenProps()}
              />{" "}
              {convertFirstLetterToUppercase(column.id)}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableColumnFilterModal;
