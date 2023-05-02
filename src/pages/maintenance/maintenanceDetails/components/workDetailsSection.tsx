import React from "react";

const Card = () => {
  return (
    <div className="text-center w-full bg-[#DCE8FF] py-3 px-6 rounded-md text-sm">
      Tobi Adeniji
    </div>
  );
};

const WorkDetailsSection = () => {
  return (
    <section className="mb-4 relative px-4 lg:px-6 pt-6 pb-8 lg:pb-10 rounded-lg bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
        <div className="">
          <h4 className="text-base lg:text-lg font-semibold">Workforce</h4>
          <div className="mt-6 w-full md:w-11/12 lg:w-10/12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <div className="">
          <h4 className="text-base lg:text-lg font-semibold">Materials</h4>
          <p className="mt-6 text-[#3F3F3F]">Boiler, Forklift</p>
        </div>
      </div>
    </section>
  );
};

export default WorkDetailsSection;
