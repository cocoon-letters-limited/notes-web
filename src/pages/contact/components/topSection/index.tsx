import React from "react";
import style from "./style.module.css";

const TopSection = () => {
  return (
    <section className="relative bg-[#3B69E6]">
      <div className="container px-4 lg:px-8 xl:px-4 mx-auto pt-24 md:pt-28 lg:pt-32 pb-32 lg:pb-40 relative">
        <div className="flex flex-row flex-wrap justify-between">
          <div className="w-full md:w-5/12 flex flex-row items-start">
            <div className="w-4 h-5 bg-[#FFC700]" />
            <div className="pl-4 -mt-3 flex-1">
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                Reach out to us
              </h1>
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <form className="w-full">
              <textarea
                className={`w-full py-4 px-4 lg:py-6 lg:px-6 rounded-md placeholder:text-white text-white text-base lg:text-lg font-medium focus:outline-none ring-0 focus:ring-0 resize-none ${style.input}`}
                placeholder="Write message"
                rows={6}
              />

              <div className="flex flex-row flex-wrap">
                <div className="w-full md:w-8/12 mt-4 lg:mt-6">
                  <input
                    type="email"
                    placeholder="Email address"
                    className={`w-full py-4 px-4 lg:py-6 lg:px-6 rounded-md placeholder:text-white text-white text-base lg:text-lg font-medium focus:outline-none ring-0 focus:ring-0 ${style.input}`}
                  />
                </div>
                <div className="w-full md:w-4/12 mt-4 lg:mt-6 md:pl-4 lg:pl-6">
                  <button
                    type="button"
                    className="w-full py-4 px-4 lg:py-6 lg:px-6 bg-[#0E388B] rounded-md text-white text-base lg:text-lg font-medium focus:outline-none ring-0 focus:ring-0"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
