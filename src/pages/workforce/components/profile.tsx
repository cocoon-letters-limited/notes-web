import React from "react";
import thumbNailImage from "assets/Production1.png";

function Profile() {
  return (
    <div className="bg-white h-fit w-fix pb-5 rounded-2xl px-3">
      <div className="text-center">
        <div className="flex items-center justify-center ">
          <img
            src={thumbNailImage}
            className="h-52 w-52 rounded-3xl object-contain "
            alt=""
          />
        </div>

        <p>John james</p>
        <button
          className="rounded-3xl h-fit w-fit text-white bg-blue-700  m-4  p-3"
          type="submit"
        >
          John@gmail.com
        </button>
      </div>
      <div className="bg-[#F6F7FB] h-fit w-full mt-1  p-5 rounded-lg">
        <p className="font-semibold ">Work history</p>

        <ol className="relative text-gray-500 border-l mt-5 border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-3 h-3 bg-blue-50 rounded-full -left-2 ring-4 ring-white dark:ring-blue-700 dark:bg-blue-10" />
            <p className="font-medium leading-tight text-black text-sm">
              Burglary Welding (5/1/21)
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-3 h-3 bg-blue-50 rounded-full -left-2 ring-4 ring-white dark:ring-blue-700 dark:bg-blue-10" />
            <p className="font-medium leading-tight text-black  text-sm">
              Server Supervision (5/1/21)
            </p>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-3 h-3 bg-blue-50 rounded-full -left-2 ring-4 ring-white dark:ring-blue-700 dark:bg-blue-10" />
            <p className="font-medium leading-tight text-black   text-sm">
              Compressive Servicing (5/1/21)
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Profile;
