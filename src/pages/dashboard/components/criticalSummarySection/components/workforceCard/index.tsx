import StarIcon from "components/svg/starIcon";
import React from "react";

const UserCard = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex-1 flex flex-wrap items-center">
        <div className="w-12 h-12 bg-black rounded-full" />
        <div className="flex-1 pl-3">
          <p className="text-sm-15 lg:text-base text-black font-semibold">
            Arlene McCoy
          </p>
          <p className="mt-1 text-[#555555] text-sm lg:text-sm-15 flex items-center space-x-2">
            <span className="italic">Operator</span>
            <span>
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="black" />
              </svg>
            </span>
            <span className="flex items-center">
              <span>3.5</span>
              <span>
                <StarIcon />
              </span>
            </span>
          </p>
        </div>
      </div>
      <div className="w-2/12 flex justify-end">
        <div className="py-1 px-3 rounded-lg border-2 border-[#06650F] bg-[#B2EEB7] flex items-center justify-center">
          <p className="text-lg lg:text-xl font-bold text-[#06650F]">4</p>
        </div>
      </div>
    </div>
  );
};

const WorkforceCard = () => {
  return (
    <div className="bg-[#F6F7FB] px-6 py-6 rounded-lg h-[27rem]">
      <h4 className="text-lg lg:text-xl text-[#224280] font-bold">Workforce</h4>

      <div className="mt-6 lg:mt-8 h-full overflow-auto">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default WorkforceCard;
