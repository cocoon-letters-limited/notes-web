import React from "react";
import { Link } from "react-router-dom";
import style from "../style.module.css";

const AssessmentCard = () => {
  return (
    <Link
      to="/dev-centre/assessment?title=digital-marketing-strategy&id=1111"
      className={`relative rounded-lg bg-white ${style.assessmentCard}`}
    >
      <div className="px-4 lg:px-5 pt-5 pb-7">
        <h3 className="text-default text-sm-15 lg:text-base font-semibold">
          Digital Marketing Strategy
        </h3>
        <p className="mt-1 text-sm text-[#989898]">Leslie Alexander</p>
      </div>
      <div className="mt-6 px-4 lg:px-5 flex flex-row items-center justify-between text-xs text-[#4E4B66] bg-[#F4F8FF] py-3">
        <p className="italic">Due 08. 06. 22</p>
        <p className="flex items-center flex-row text-primary font-semibold">
          <span>View</span>
          <span className="ml-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.16393 13.1713C4.96523 12.9765 4.94716 12.6717 5.10974 12.4569L5.16393 12.3953L9.64894 7.9987L5.16393 3.60205C4.96523 3.40725 4.94716 3.10242 5.10974 2.88761L5.16393 2.82607C5.36264 2.63127 5.67358 2.61357 5.89269 2.77295L5.95547 2.82607L10.8361 7.61071C11.0348 7.80551 11.0528 8.11034 10.8903 8.32514L10.8361 8.38668L5.95547 13.1713C5.73689 13.3856 5.38251 13.3856 5.16393 13.1713Z"
                fill="#054CD6"
                stroke="#054CD6"
                strokeWidth="0.666667"
              />
            </svg>
          </span>
        </p>
      </div>
    </Link>
  );
};

export default AssessmentCard;
