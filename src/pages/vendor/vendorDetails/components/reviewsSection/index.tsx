import StarIcon from "components/svg/starIcon";
import React from "react";

const Card = () => {
  return (
    <div className="">
      <div className="flex flex-row items-center">
        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-black" />
        <div className="flex-1 pl-3">
          <p className="text-sm lg:text-sm-15 text-primary font-semibold">
            Adedoyin Oluwatosin
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-row flex-wrap items-center">
        <div className="flex">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <p className="pl-4 text-sm-15 lg:text-base text-default font-semibold">
          Satisfactory
        </p>
      </div>

      <p className="mt-2 text-[#637189] text-sm lg:text-sm-15 font-semibold">
        <span>Item:</span>
        <span className="text-default pl-1">Forklift</span>
      </p>
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <div className="bg-white pt-8 lg:pt-12 pb-12 px-6 lg:px-8 rounded-lg space-y-12 max-h-[32rem] overflow-y-auto">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ReviewsSection;
