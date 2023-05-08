import GoBackButton from "components/blocks/goBackButton";
import ButtonGroup from "components/elements/button";
import React from "react";

const Step2 = () => {
  return (
    <section className="relative h-full bg-white px-6 lg:px-8 xl:px-12 pt-6 lg:pt-8 pb-36">
      <div className="">
        <GoBackButton title="Upload videos" />
      </div>

      <div className="mt-8 lg:mt-12">
        <p className="font-semibold text-primary text-base">
          Lesson 1 (Introduction)
        </p>

        <div className="mt-6 mb-8">
          <label htmlFor="name">
            <p className="mb-3 text-sm-15 lg:text-base">Video title:</p>
            <input
              type="text"
              className="w-full py-4 px-6 rounded-lg bg-[#F8F9FF] text-[#535353]"
            />
          </label>
        </div>

        <div className="">
          <button
            type="button"
            className="flex items-center bg-[#DDE9FF] px-5 py-2 text-primary font-semibold rounded-full text-sm-15"
          >
            <span>Add video</span>
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
            <ButtonGroup title="Submit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step2;
