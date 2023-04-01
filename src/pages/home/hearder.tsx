import production1 from "assets/Production1.png";
import Logolist from "./logolist";

function Hearder() {
  return (
    <div>
      <div className="w-full" style={{ background: "#F1F5FF" }}>
        <div className="">
          <div className="bg-blue-700 pb-48 pt-20 h-auto w-full  text-center flex justify-center ">
            <div className="">
              <p className="font-bold text-6xl text-white mt-10">
                Say Hello to Operational <br />{" "}
                <span className="text-yellow-400">Excellence</span>
              </p>
              <p className="text-gray-300 mt-10 mb-10 ">
                Ensure asset reliability and operational excellence with our
                cutting-edge predictive maintenance and
                <br />
                data-driven analytic models for the increased operational
                efficiency and optimized performance of
                <br />
                your high-value physical assets and business workflows.
              </p>
              <div className="">
                <button
                  type="button"
                  className="bg-white mr-3 text-blue-700  font-bold py-3 pr-8 pl-8 px-4 rounded"
                >
                  {" "}
                  Explore Features
                </button>
                <button
                  type="button"
                  className="  font-bold py-2 px-4 rounded inline-flex items-center text-white"
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
            <img
              className="bg-yellow-50 md:w-50 -mt-20  rounded-lg"
              src={production1}
              alt="product"
              sizes=""
            />
          </div>
          <div className="md:container md:mx-auto ">
            <div className="my-10 py-20">
              <Logolist />

              <div className="md:grid md:grid-cols-2 ml-5 md:gap-10 mt-10">
                <div>
                  <h1 className="font-medium text-2xl">Tools</h1>
                  <p className="text-6xl  mt-3 mb-3 font-semibold ">
                    Continuous asset integrity
                  </p>
                  <p className="md:w-4/5">
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
