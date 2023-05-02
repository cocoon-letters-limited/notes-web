import React, { useState } from "react";
import { Link } from "react-router-dom";

type DropdownLinkProps = {
  linkUrl: string;
  linkTitle: string;
};

const DropDownLink = ({ linkUrl, linkTitle }: DropdownLinkProps) => {
  return (
    <Link
      to={linkUrl || "/"}
      className="block focus:outline-none hover:text-primary transition-all ease-in-out duration-200"
    >
      {linkTitle}
    </Link>
  );
};

const ActionButtonSection = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-row flex-wrap justify-center md:justify-end items-center space-x-4 xl:space-x-6">
      <button
        type="button"
        className="focus:outline-none flex items-center py-3 space-x-4 text-sm-15 lg:text-base text-white border-2 border-primary bg-primary rounded-lg px-6 font-semibold"
      >
        Subscribe
      </button>

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="flex items-center focus:outline-none flex items-center py-3 text-sm-15 lg:text-base text-[#051738] border-2 border-[#B1BFD9] rounded-lg px-5 font-semibold"
      >
        <span>New Work</span>
        <span className="pl-2 lg:pl-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.24106 7.7459C4.53326 7.44784 4.99051 7.42074 5.31272 7.66461L5.40503 7.7459L12 14.4734L18.595 7.7459C18.8872 7.44784 19.3444 7.42074 19.6666 7.66461L19.7589 7.7459C20.0511 8.04396 20.0777 8.51037 19.8386 8.83904L19.7589 8.93321L12.582 16.2541C12.2898 16.5522 11.8325 16.5793 11.5103 16.3354L11.418 16.2541L4.24106 8.93321C3.91965 8.60534 3.91965 8.07376 4.24106 7.7459Z"
              fill="#051738"
              stroke="#051738"
            />
          </svg>
        </span>
      </button>

      {show && (
        <div
          onMouseLeave={() => setShow(false)}
          className="absolute z-10 space-y-4 top-28 mt-2 bg-white text-sm md:text-sm-15 px-4 py-4 rounded-lg"
        >
          <DropDownLink
            linkTitle="Corrective Maintenance"
            linkUrl="/maintenance/create?type=corrective-maintenance"
          />
          <DropDownLink
            linkTitle="Preventive Maintenance"
            linkUrl="/maintenance/create?type=preventive-maintenance"
          />
          <DropDownLink
            linkTitle="Change Management"
            linkUrl="/maintenance/create?type=change-management"
          />
        </div>
      )}
    </div>
  );
};

export default ActionButtonSection;
