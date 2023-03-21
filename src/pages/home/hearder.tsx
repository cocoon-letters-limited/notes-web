/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import production1 from "assets/Production1.png";

function Hearder() {
  // eslint-disable-next-line react/self-closing-comp
  return (
    <div>
      <div className="w-full" style={{ background: "#F1F5FF" }}>
        <div className="">
          <div className="bg-blue-700 pb-48 pt-20 h-auto w-full  text-center flex justify-center ">
            <div className="">
              <p className="font-bold text-6xl text-white mt-10">
                {" "}
                Make your assets do <br /> much more in{" "}
                <span className="text-yellow-400"> one place </span>
              </p>
              <p className="text-gray-300 mt-10 mb-10 ">
                The ability to build systems that resist, absorb, recover from,
                or adapt to an adverse <br /> occurrence during operation that
                may cause harm, destruction, or loss of the ability to <br />{" "}
                perform mission-related functions.
              </p>
              <div className="">
                <button className="bg-white mr-3 text-blue-700  font-bold py-3 pr-8 pl-8 px-4 rounded">
                  {" "}
                  Sales Enquiry
                </button>
                <button className="  font-bold py-2 px-4 rounded inline-flex items-center text-white">
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
              className="bg-yellow-50 md:w-50 -mt-20 rounded"
              src={production1}
              alt="product"
              sizes=""
            />
          </div>

          <div className="md:container md:mx-auto ">
            <div className="m-10 p-20">
              <button className="bg-white font-bold py-3  px-6  rounded">
                {" "}
                Button
              </button>

              <div className="md:grid md:grid-cols-2 gap-4 mt-10">
                <div>
                  <h1 className="font-medium text-2xl">Tools</h1>
                  <p className="text-6xl  mt-3 mb-3 font-semibold md:w-10">
                    Seamless integration
                  </p>
                  <p className="md:w-4/5">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit..
                  </p>
                </div>
                <div className="">
                  <div className="flex md:mt-20">
                    <button
                      className=" rounded-full h-fill w-fill p-4 text-blue-700 flex items-center justify-center"
                      style={{ background: "#E5ECFF" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </button>
                    <p className="m-3 text-2xl ml-5">
                      Secure and encrypted integration
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
