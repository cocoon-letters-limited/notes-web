import React from "react";

const MiddleSection = () => {
  return (
    <section className="relative">
      <div className="container px-4 md:px-8 xl:px-4 mx-auto pt-20 md:pt-24 lg:pt-28 pb-32 lg:pb-40 relative">
        <div className="flex flex-row flex-wrap">
          <div className="w-full md:w-5/12">
            <p className="tracking-[.5em] text-sm-15 lg:text-base uppercase">
              Features
            </p>
            <h1 className="mt-3 text-default text-4xl md:text-5xl lg:text-6xl xl:text-7xl xl:leading-none font-bold">
              All in one place.
            </h1>
          </div>
          <div className="pt-6 flex-1 md:pl-4 lg:pl-8 xl:pl-12">
            <p className="text-base leading-7 lg:text-lg lg:leading-8 xl:text-xl xl:leading-9 text-textColor">
              Our overarching goal is to become the go-to solution for any
              facility looking to streamline their operations and ensure the
              continuous integrity of their assets. We believe that our software
              has the potential to revolutionize the way facilities manage their
              assets and resources, and we are committed to continuously
              improving our product to meet the evolving needs of our clients.
              We are excited about the future and look forward to empowering
              facilities to achieve their goals with our innovative EAM software
              solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
