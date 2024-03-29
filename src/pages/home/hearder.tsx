import { useState } from "react";
import thumbNailImage from "assets/thumbtail.jpeg";
import Logolist from "./logolist";

function Hearder() {
  const handleScrollTo = () => {
    document.querySelector("#Taketotalcontrol")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleScrollFX = () => {
    document.querySelector("#features")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
  };

  // const scrollToSolution = () => {
  //   document.querySelector("#solutions")?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div>
      <div className="w-full" style={{ background: "#F1F5FF" }}>
        <div className="">
          <div className="bg-blue-700 pb-48 pt-20 h-auto w-full  text-center flex justify-center ">
            <div className="">
              <p className="font-bold md:text-6xl text-2xl mt-10 p-1  text-white ">
                Say Hello to
                <span className="text-yellow-400 ml-1">Excellence</span>
              </p>
              <div className="flex justify-center m-2">
                <p className="text-gray-300 text-xs md:text-sm md:w-2/6 ">
                  Ensure asset reliability and operational excellence with our
                  cutting-edge predictive maintenance and data-driven analytic
                  models for the increased operational efficiency and optimized
                  performance of your high-value physical assets and business
                  workflows.
                </p>
              </div>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={handleScrollTo}
                  className="bg-white mr-3 md:text-base text-xs text-blue-700 pl-2 pr-2 py-2 font-bold md:py-3 md:pr-8 md:pl-8 md:px-4 rounded"
                >
                  Explore Features
                </button>
                <button
                  type="button"
                  onClick={handleScrollFX}
                  className="  font-bold md:py-2 md:px-4  md:text-base text-xs rounded inline-flex items-center text-white"
                >
                  <span>View Solutions</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="fill-current w-4 h-4 ml-3 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-center ">
            {isPlaying ? (
              <video
                autoPlay
                controls
                className="bg-yellow-50  -mt-20 object-fit rounded-lg"
              >
                <source
                  src="https://noteopxds.blob.core.windows.net/media/vid.mp4"
                  type="video/mp4"
                />
                <track
                  kind="captions"
                  src="path/to/captions.vtt"
                  label="English"
                />
              </video>
            ) : (
              <button
                type="button"
                className="-mt-20 w-1/3 m-auto"
                onClick={handleClick}
              >
                {/* <img src={thumbNailImage} alt="Video thumbnail" /> */}
                <div className="relative">
                  <img
                    className="w-full h-auto rounded"
                    src={thumbNailImage}
                    alt="Video thumbnail"
                  />
                  <div className="absolute inset-0 flex  justify-center items-center">
                    <div className="h-fit w-fit p-2 bg-red-700 text-white rounded-xl">
                      <svg viewBox="0 0 24 24" width="24px" height="24px">
                        <path fill="currentColor" d="M6 4l15 8-15 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            )}
          </div>
          <div className="md:container md:mx-auto ">
            <div className="my-10 py-20">
              <Logolist />

              <div className="md:grid md:grid-cols-2 ml-5 md:gap-10 mt-10">
                <div>
                  <h1 className="font-medium text-2xl">Tools for</h1>
                  <p className="md:text-6xl   mt-3 mb-3 font-semibold ">
                    Continuous asset integrity
                  </p>
                  <p className="md:w-4/5 text-sm md:text-base">
                    unlock the power reliable assets from our range of advance
                    technologies designed to ensure the wellbeing of all
                    enterprise assets and prolong their productive life-span.
                  </p>
                </div>
                <div className="">
                  <div className="flex mt-5">
                    <button
                      type="button"
                      className=" rounded-full h-fit w-fit p-2 text-blue-700 flex items-center justify-center"
                      style={{ background: "#E5ECFF" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </button>
                    <p className=" text-1xl ml-5 mt-1"> Criticality ranking</p>
                  </div>
                  <div className="flex mt-5">
                    <button
                      type="button"
                      className=" rounded-full h-fit w-fit p-2 text-blue-700 flex items-center justify-center"
                      style={{ background: "#E5ECFF" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </button>
                    <p className=" text-1xl ml-5 mt-1"> Advanced analytics</p>
                  </div>
                  <div className="flex mt-5">
                    <button
                      type="button"
                      className=" rounded-full h-fit w-fit p-2 text-blue-700 flex items-center justify-center"
                      style={{ background: "#E5ECFF" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </button>
                    <p className=" text-1xl ml-5 mt-1"> Condition monitoring</p>
                  </div>
                  <div className="flex mt-5">
                    <button
                      type="button"
                      className=" rounded-full h-fit w-fit p-2 text-blue-700 flex items-center justify-center"
                      style={{ background: "#E5ECFF" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </button>
                    <p className=" text-1xl ml-5 mt-1">
                      {" "}
                      Health, Safety, Environment
                    </p>
                  </div>
                  <div className="flex mt-5 ">
                    <button
                      type="button"
                      className=" rounded-full h-fit w-fit p-2 text-blue-700 flex items-center justify-center"
                      style={{ background: "#E5ECFF" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </button>
                    <p className=" mt-1 text-1xl ml-5">
                      {" "}
                      Digital process authorization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hearder;
