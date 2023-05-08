import React from "react";
import Avatar from "assets/images/webp/dev_centre/avatar2.webp";

const LiveTrainingChat = () => {
  return (
    <div className="relative min-h-screen overflow-y-auto w-full">
      <div className="flex mb-6">
        <div className="h-12 w-12 object-cover">
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className="ml-2 w-8/12 bg-[#F6F7FB] text-[#353535] py-4 px-6 text-sm rounded-r-2xl rounded-tl-2xl rounded-bl">
          You know how it goes...
        </div>
      </div>
      <div className="flex justify-end mb-6">
        <p className="w-8/12 bg-primary text-white py-4 px-6 text-sm rounded-l-2xl rounded-tr-2xl rounded-br">
          You know how it goes...
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-white">
        <div className="p-1 border border-[#E3E8F0] rounded-lg flex flex-row justify-between">
          <input
            type="text"
            placeholder="Write a message"
            className="flex-1 rounded-lg placeholder:text-[#B1BFD9] text-default text-sm py-4 px-6 font-medium hover:border-none focus:outline-none"
          />
          <button type="button" className="bg-primary rounded-lg px-4">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8193 10.1514L12.7395 17.2784L4.4508 12.1768C3.3647 11.5082 3.58484 9.85871 4.80838 9.50358L24.3777 3.80929C25.4906 3.48723 26.5195 4.53057 26.1863 5.64861L20.3799 25.1978C20.0163 26.4211 18.3853 26.633 17.7261 25.5407L12.7395 17.2784"
                stroke="white"
                strokeWidth="1.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveTrainingChat;
