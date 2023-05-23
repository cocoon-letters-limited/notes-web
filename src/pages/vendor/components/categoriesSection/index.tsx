import React from "react";
import { Link } from "react-router-dom";

const CategoryLink = () => {
  return (
    <div className="pb-4">
      <Link
        to="/marketplace?vendor=vendor1"
        className="font-semibold text-sm lg:text-base text-default flex items-center"
      >
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.6665 3.33073L10.3332 7.9974L5.6665 12.6641"
              stroke="#200E32"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="pl-3">Category 1</span>
      </Link>
    </div>
  );
};

const CategoriesSection = () => {
  return (
    <div className="w-full md:w-4/12 lg:w-3/12 bg-white rounded-lg min-h-[45rem]">
      <div className="w-full bg-primary py-4 px-4 lg:px-6 rounded-t-lg">
        <p className="text-sm-15 lg:text-base xl:text-lg font-semibold text-white">
          Categories
        </p>
      </div>
      <div className="pt-4 lg:pt-6 pb-6 px-4 lg:px-6">
        <CategoryLink />
        <CategoryLink />
        <CategoryLink />
        <CategoryLink />
        <CategoryLink />
      </div>
    </div>
  );
};

export default CategoriesSection;
