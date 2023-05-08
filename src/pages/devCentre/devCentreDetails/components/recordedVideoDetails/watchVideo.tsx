import GoBackButton from "components/blocks/goBackButton";
import React from "react";
import VideoImage from "assets/images/webp/dev_centre/playCard.webp";
import StarIcon from "components/svg/starIcon";
import VideoTimelines from "./components/videoTimelines";

const WatchVideo = () => {
  return (
    <section className="relativept-6 lg:pt-8 pb-36">
      <div className="flex flex-row flex-wrap justify-between">
        <div className="w-full md:w-7/12 lg:w-8/12">
          <div className="w-full flex flex-row justify-between flex-wrap">
            <GoBackButton title="Digital Marketing Strategy" />
            <button
              type="button"
              className="flex items-center justify-center rounded-full bg-primary p-2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0001 3.00195C17.4947 3.00204 17.9817 3.12453 18.4175 3.35849C18.8534 3.59246 19.2245 3.93063 19.4979 4.34286C19.7714 4.75508 19.9385 5.22856 19.9845 5.72108C20.0306 6.21359 19.954 6.70984 19.7617 7.16558C19.5693 7.62132 19.2672 8.02239 18.8823 8.33304C18.4973 8.64368 18.0415 8.85425 17.5554 8.94597C17.0693 9.03769 16.5681 9.0077 16.0964 8.85869C15.6247 8.70968 15.1973 8.44627 14.8521 8.09195L9.39509 11.212C9.53563 11.7282 9.53563 12.2727 9.39509 12.789L14.8531 15.908C15.3625 15.3857 16.0448 15.0671 16.7723 15.0118C17.4997 14.9565 18.2223 15.1684 18.8048 15.6078C19.3872 16.0471 19.7894 16.6837 19.9361 17.3984C20.0828 18.113 19.9639 18.8567 19.6016 19.4899C19.2393 20.1231 18.6586 20.6026 17.9682 20.8383C17.2778 21.0741 16.5251 21.05 15.8512 20.7706C15.1773 20.4912 14.6283 19.9757 14.3073 19.3206C13.9862 18.6655 13.915 17.9158 14.1071 17.212L8.65009 14.092C8.234 14.5191 7.69999 14.8124 7.11633 14.9345C6.53267 15.0565 5.92587 15.0018 5.37349 14.7772C4.82111 14.5526 4.34825 14.1684 4.01535 13.6737C3.68245 13.179 3.50464 12.5962 3.50464 12C3.50464 11.4037 3.68245 10.8209 4.01535 10.3262C4.34825 9.8315 4.82111 9.4473 5.37349 9.22272C5.92587 8.99814 6.53267 8.94338 7.11633 9.06544C7.69999 9.1875 8.234 9.48084 8.65009 9.90795L14.1071 6.78795C13.9859 6.34321 13.969 5.87653 14.0575 5.42416C14.146 4.9718 14.3377 4.54594 14.6175 4.17968C14.8974 3.81342 15.258 3.51663 15.6712 3.31237C16.0844 3.10812 16.5391 3.00189 17.0001 3.00195Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <div className="mt-8">
            <img src={VideoImage} alt="Video" />
          </div>

          <div className="mt-8">
            <h2 className="text-default font-semibold text-lg lg:text-xl">
              Lesson 5 - Exporting your display ads
            </h2>
          </div>

          <div className="mt-12">
            <div className="flex flex-row justify-between pb-4 border-b border-[#CFD2E4]">
              <div className="flex flex-row items-center space-x-6 md:space-x-8 lg:space-x-12">
                <button
                  type="button"
                  className="text-sm-15 lg:text-base text-primary font-semibold"
                >
                  Notes
                </button>
                <button
                  type="button"
                  className="text-sm-15 lg:text-base text-default font-semibold"
                >
                  Comments
                </button>
              </div>
              <div className="flex items-center">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm-15 lg:text-base text-[#4E4B66]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                donec nunc et, odio risus. Quam ac in hac enim id libero etiam.
                Facilisi tincidunt sit faucibus diam at amet. Non dignissim enim
                sit risus nulla mi aenean elementum.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-5/12 lg:w-4/12 md:pl-6 lg:pl-8">
          <VideoTimelines />
        </div>
      </div>
    </section>
  );
};

export default WatchVideo;
