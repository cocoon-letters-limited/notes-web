import React from "react";
import LiveImage from "assets/images/webp/dev_centre/live.webp";
import MicIcon from "components/svg/micIcon";
import VideoIcon from "components/svg/videoIcon";
import LiveTrainingListSlider from "./liveTrainingListSlider";

const LiveTrainingSection = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-row flex-wrap">
        <div className="w-full lg:w-8/12">
          <div className="">
            <LiveTrainingListSlider />
          </div>
          <div className="w-full relative">
            <img src={LiveImage} alt="Live Record User" />

            <div className="mt-6 flex flex-row justify-center">
              <div className="flex flex-row justify-center items-center space-x-4">
                <button
                  type="button"
                  className="bg-white border border-[#E0E6F1] rounded-xl py-3 px-5 mx-auto focus:outline-none"
                >
                  <MicIcon />
                </button>
                <button
                  type="button"
                  className="bg-[#F92F1B] border border-[#F92F1B] rounded-xl py-4 px-6 lg:px-8 mx-auto focus:outline-none text-sm md:text-sm-15 text-white font-bold"
                >
                  End live session
                </button>
                <button
                  type="button"
                  className="bg-white border border-[#E0E6F1] rounded-xl py-3 px-5 mx-auto focus:outline-none"
                >
                  <VideoIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTrainingSection;
