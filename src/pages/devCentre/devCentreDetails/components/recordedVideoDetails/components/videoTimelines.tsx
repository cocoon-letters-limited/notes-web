import React from "react";

type TimelineCardProps = {
  id: number;
  title: string;
  isActive?: boolean;
};

const TimelineCard = ({ id, title, isActive }: TimelineCardProps) => {
  return (
    <div className="mb-4">
      <div
        className={`w-full bg-primary  py-4 px-4 flex items-center ${
          isActive ? "rounded-t-lg " : "rounded-lg"
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-white text-primary text-sm-15 flex items-center justify-center font-semibold">
          {id}
        </div>
        <p className="pl-4 font-semibold text-white text-sm-15 lg:text-base">
          {title}
        </p>
      </div>
      {isActive && (
        <div className="border-l-4 border-primary bg-white py-4 px-6 lg:px-8 space-y-4">
          <div className="pl-2 text-primary font-semibold text-sm lg:text-sm-15 flex items-center">
            <span>
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5.26795C12.3333 6.03775 12.3333 7.96225 11 8.73205L3.5 13.0622C2.16666 13.832 0.499999 12.8697 0.499999 11.3301L0.5 2.66987C0.5 1.13027 2.16667 0.168021 3.5 0.937822L11 5.26795Z"
                  fill="#054CD6"
                />
              </svg>
            </span>
            <span className="pl-4">Welcome</span>
          </div>

          <div className="text-[#4E4B66] font-semibold text-sm lg:text-sm-15 flex items-center">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="#A0A3BD"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <span className="pl-4">Overview of...</span>
          </div>
        </div>
      )}
    </div>
  );
};

const VideoTimelines = () => {
  return (
    <div className="mt-12 lg:mt-20 flex flex-col">
      <TimelineCard id={1} title="Introduction" isActive />
      <TimelineCard id={2} title="Work backwards" />
      <TimelineCard id={3} title="Your teaser phase" />
      <TimelineCard id={4} title="Your promotion phase" />
      <TimelineCard id={5} title="Exporting your display" />
    </div>
  );
};

export default VideoTimelines;
