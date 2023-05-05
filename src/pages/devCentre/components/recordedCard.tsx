import React from "react";
import CardImage from "assets/images/webp/dev_centre/record.webp";
import StarIcon from "components/svg/starIcon";
import { Link } from "react-router-dom";
import style from "../style.module.css";

const RecordedCard = () => {
  return (
    <Link
      to="/dev-centre/recorded?title=digital-marketing-class&id=1111"
      className={`relative rounded-lg bg-white ${style.recordCard}`}
    >
      <div className="h-36 w-full rounded-t-lg object-cover">
        <img src={CardImage} alt="Card" />
      </div>
      <div className="pt-4 px-4 lg:px-5 pb-6">
        <div className="">
          <h3 className="text-default text-sm-15 lg:text-base font-semibold">
            Digital Marketing Strategy
          </h3>
          <p className="mt-1 text-sm text-[#989898]">Leslie Alexander</p>

          <div className="mt-6 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p className="text-xs text-[#4E4B66]">3hr 46min</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecordedCard;
