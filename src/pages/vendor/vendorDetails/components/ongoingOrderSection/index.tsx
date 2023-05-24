import React from "react";

type TimelineProps = {
  name: string;
  value: string;
};

const Timeline = ({ name, value }: TimelineProps) => {
  return (
    <div className="relative text-xs lg:text-sm border-l border-dashed border-primary pl-3 h-8">
      <p>
        <span className="text-[#637189]">{name}</span>
        <span className="pl-1">{value}</span>
      </p>

      <div className="absolute -left-[0.4rem] top-1 bg-white border border-primary rounded-full w-3 h-3" />
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex items-start">
      <div className="w-4 h-4 rounded-md bg-primary" />
      <div className="-mt-1 flex-1 pl-3">
        <h3 className="font-bold text-default text-base lg:text-lg">
          ForkLift
        </h3>

        <div className="mt-4 flex flex-row">
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-black" />
          <div className="flex-1 pl-3">
            <p className="text-sm lg:text-sm-15 text-[#637189] font-semibold">
              Orderered by:
            </p>
            <p className="mt-1 text-sm lg:text-sm-15 text-primary font-semibold">
              Adedoyin Oluwatosin
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col">
          <Timeline name="Order date:" value="20. 02 2021" />
          <Timeline name="Expected delivery:" value="23. 02 2021" />
        </div>
      </div>
    </div>
  );
};

const OngoingOrderSection = () => {
  return (
    <div className="bg-white pt-8 lg:pt-12 pb-12 px-6 lg:px-8 rounded-lg space-y-12 max-h-[32rem] overflow-y-auto">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default OngoingOrderSection;
