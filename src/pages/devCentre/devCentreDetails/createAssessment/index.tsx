import GoBackButton from "components/blocks/goBackButton";
import ButtonGroup from "components/elements/button";
import React from "react";

const CreateAssessment = () => {
  return (
    <section className="relative h-full bg-white rounded-lg px-6 lg:px-8 xl:px-12 pt-6 lg:pt-8 pb-36">
      <div className="">
        <GoBackButton title="New Assessment" />
      </div>

      <div className="mt-8 lg:mt-12">
        <div className="mb-4 flex flex-row items-center">
          <p className="font-semibold text-[#535353] pr-3">1.</p>
          <label htmlFor="name">
            <input
              type="text"
              placeholder="Type your question here"
              className="w-full py-4 px-6 rounded-lg text-[#535353] placeholder:text-[#535353] placeholder:italic focus:outline-none"
            />
          </label>
        </div>

        <div className="ml-8 lg:ml-12 mb-8 flex flex-row items-center">
          <button
            type="button"
            className="flex items-center space-x-2 font-semibold text-sm-15"
          >
            <span>Short text answer</span>
            <span>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.8277 5.66393C3.0225 5.46523 3.32733 5.44716 3.54214 5.60974L3.60368 5.66393L8.00033 10.1489L12.397 5.66393C12.5918 5.46523 12.8966 5.44716 13.1114 5.60974L13.1729 5.66393C13.3677 5.86264 13.3855 6.17358 13.2261 6.3927L13.1729 6.45547L8.38831 11.3361C8.19351 11.5348 7.88868 11.5528 7.67388 11.3903L7.61234 11.3361L2.8277 6.45547C2.61342 6.23689 2.61342 5.88251 2.8277 5.66393Z"
                  fill="#054CD6"
                  stroke="#054CD6"
                  strokeWidth="0.666667"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="">
          <button
            type="button"
            className="flex items-center text-primary font-semibold rounded-full text-sm-15"
          >
            Add question &nbsp;+
          </button>
        </div>

        <div className="mt-12 flex flex-row justify-end">
          <div className="w-52">
            <ButtonGroup title="Create assessment" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAssessment;
