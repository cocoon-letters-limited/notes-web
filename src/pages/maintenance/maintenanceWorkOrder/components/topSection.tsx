import React from "react";
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="border md:border-2 border-primary px-1 md:px-2 py-1 md:py-2 rounded-lg focus:outline-none ring-0"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2541 4.24106C16.5522 4.53326 16.5793 4.99051 16.3354 5.31272L16.2541 5.40503L9.52658 12L16.2541 18.595C16.5522 18.8872 16.5793 19.3444 16.3354 19.6666L16.2541 19.7589C15.956 20.0511 15.4896 20.0777 15.161 19.8386L15.0668 19.7589L7.7459 12.582C7.44784 12.2898 7.42074 11.8325 7.66461 11.5103L7.7459 11.418L15.0668 4.24106C15.3947 3.91965 15.9262 3.91965 16.2541 4.24106Z"
            fill="#054CD6"
            stroke="#054CD6"
          />
        </svg>
      </button>
    </div>
  );
};

const Title = () => {
  return (
    <div className="flex-1">
      <h2 className=" pl-4 lg:pl-6 text-lg lg:text-xl xl:text-2xl font-bold text-[#051738]">
        Work Order
      </h2>
    </div>
  );
};

const TopSection = () => {
  return (
    <div className="mt-4 mb-6 flex flex-row flex-wrap">
      <div className="w-full lg:w-9/12 flex flex-row items-center flex-wrap">
        <GoBackButton />
        <Title />
      </div>
    </div>
  );
};

export default TopSection;
