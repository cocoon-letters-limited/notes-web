import React from "react";

const TopSection = () => {
  return (
    <section className="relative bg-[#3B69E6]">
      <div className="container px-4 md:px-8 xl:px-4 mx-auto pt-24 md:pt-28 lg:pt-32 pb-32 lg:pb-40 relative">
        <div className="flex flex-row flex-wrap justify-between">
          <div className="w-full md:w-5/12 flex flex-row items-start">
            <div className="w-3 md:w-4 h-4 md:h-5 bg-[#FFC700]" />
            <div className="pl-2 md:pl-4 -mt-1 md:-mt-3 flex-1">
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                Blog
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
