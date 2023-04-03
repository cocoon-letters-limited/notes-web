import Notification2Icon from "components/svg/notification2Icon";
import React from "react";
import { Link } from "react-router-dom";
import AvatarImage from "assets/images/webp/avatar.png";
import LogoutIcon from "components/svg/logoutIcon";
import SearchIcon from "components/svg/searchIcon";
import Logo from "assets/NOTEOPX.png";

const DashboardHeader = () => {
  return (
    <div className="bg-white rounded-lg pl-4 pr-8 py-3 flex justify-between items-center">
      <div className="hidden lg:block w-6/12 xl:w-5/12">
        <form>
          <div className="relative w-10/12">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pr-4 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="search"
              id="default-search"
              name="default-search"
              className="block w-full p-3 pl-16 bg-[#F6F7FB] placeholder:text-[#B1BFD9] rounded-lg text-sm lg:text-base text-[#96A1B4] focus:outline-none ring-0 focus:ring-0"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      {/* mobile view */}
      <div className="block lg:hidden w-5/12">
        <div className="">
          <img src={Logo} className="w-20 md:w-14" alt="Logo" />
          <span className="sr-only">iNote</span>
        </div>
      </div>

      <div className="w-8/12 lg:w-4/12 xl:w-3/12">
        <div className="flex flex-row items-center justify-end lg:justify-between">
          <Link to="/notifications" className="hidden lg:block">
            <Notification2Icon />
          </Link>

          <div className="lg:flex-1 pl-12 flex flex-row items-center">
            <div className="w-8 h-8 lg:w-10 lg:h-10">
              <img
                src={AvatarImage}
                alt="Avatar"
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
              />
            </div>

            <div className="flex pl-3 text-sm lg:text-base text-default items-center">
              <span className="hidden lg:block">David</span>
              <span className="pl-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.1808 5.80942C3.39995 5.58588 3.74288 5.56556 3.98454 5.74846L4.05377 5.80942L9 10.8551L13.9462 5.80942C14.1654 5.58588 14.5083 5.56556 14.75 5.74846L14.8192 5.80942C15.0384 6.03297 15.0583 6.38278 14.879 6.62928L14.8192 6.6999L9.43649 12.1906C9.21734 12.4141 8.8744 12.4344 8.63275 12.2515L8.56351 12.1906L3.1808 6.6999C2.93973 6.454 2.93973 6.05532 3.1808 5.80942Z"
                    fill="#B1BFD9"
                    stroke="#B1BFD9"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button type="button" className="hidden lg:block pl-4 lg:pl-0">
            <LogoutIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
