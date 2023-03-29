import React from "react";
import style from "./style.module.css";

const TopSection = () => {
  return (
    <section className="relative bg-[#3B69E6]">
      <div className="container px-4 md:px-8 xl:px-4 mx-auto pt-24 md:pt-28 lg:pt-32 pb-32 lg:pb-40 relative">
        <div className="flex flex-row flex-wrap justify-between">
          <div className="w-full md:w-5/12">
            <div className="flex flex-row items-start">
              <div className="w-3 md:w-4 h-4 md:h-5 bg-[#FFC700]" />
              <div className="pl-2 md:pl-4 -mt-1 md:-mt-3 flex-1">
                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                  Reach out to us
                </h1>
              </div>
            </div>

            <div className="mt-6 text-base lg:text-lg text-white space-y-4 md:pl-9">
              <p>hello@noteopx.com</p>
              <p>+234 90 4480 8294, +234 70 6454 2162</p>
              <p>0700-NOTEOPX</p>

              <p>
                Call lines are open 08:00 to 17:00 WAT, <br />
                Mondays – Fridays
              </p>
              <p>
                3/4TH Floor, Polystar Building 3, <br />
                Remi Olowude Street, Lekki, Lagos State, Nigeria
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-0 w-full md:w-6/12">
            <form className="w-full">
              <textarea
                className={`w-full py-4 px-4 lg:py-6 lg:px-6 rounded-md placeholder:text-white text-white text-base lg:text-lg font-medium focus:outline-none ring-0 focus:ring-0 resize-none ${style.input}`}
                placeholder="Write message"
                rows={10}
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
