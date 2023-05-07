import ButtonGroup from "components/elements/button";
import React from "react";

const Step1 = () => {
  return (
    <div className="mt-8 lg:mt-12">
      <div className="mb-8">
        <label htmlFor="name">
          <p className="mb-3 text-sm-15 lg:text-base">Course title:</p>
          <input
            type="text"
            className="w-full py-4 px-6 rounded-lg bg-[#F8F9FF] text-[#535353]"
          />
        </label>
      </div>
      <div className="mb-8">
        <label htmlFor="name">
          <p className="mb-3 text-sm-15 lg:text-base">Description:</p>
          <textarea className="w-full py-4 px-6 rounded-lg bg-[#F8F9FF] text-[#535353]" />
        </label>
      </div>

      <div className="">
        <button
          type="button"
          className="flex items-center bg-[#DDE9FF] px-5 py-2 text-primary font-semibold rounded-full text-sm-15"
        >
          <span>Add lesson</span>
          <span className="pl-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0V14" stroke="#054CD6" strokeWidth="1.8" />
              <path
                d="M14 7L4.17233e-07 7"
                stroke="#054CD6"
                strokeWidth="1.8"
              />
            </svg>
          </span>
        </button>
      </div>

      <div className="mt-12 flex flex-row justify-end">
        <div className="w-40">
          <ButtonGroup title="Next" />
        </div>
      </div>
    </div>
  );
};

export default Step1;
