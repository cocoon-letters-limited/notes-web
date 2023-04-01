/* eslint-disable prettier/prettier */
import React from "react";

import Logo from "assets/NOTEOPX.png";
import { Link } from "react-router-dom";

const Footer = () => {
  // eslint-disable-next-line react/self-closing-comp
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <div className=" ">
      <footer className="bg-gray-100 dark:bg-gray-100">
        <div className="mx-auto w-full container p-4 sm:p-6">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img src={Logo} className="h-8 mr-3" alt="FlowBite Logo" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                  Home
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <Link to="/about-us" className="hover:underline">
                      About us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/contact-us" className="hover:underline">
                      Contact us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/faqs" className="hover:underline ">
                      Faqs
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                  FAQ's
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <Link to="/faqs"
                      className="hover:underline "
                    >
                      Faqs
                    </Link>
                  </li>
                </ul>
              </div> */}

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                  Quick Links
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-4">
                    <Link to="/pricing" className="hover:underline">
                      {" "}
                      Pricing{" "}
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/contact-us" className="hover:underline">
                      {" "}
                      Try Now
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/signup" className="hover:underline">
                      {" "}
                      Sign In
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
          <div className="sm:flex  justify-center m-10">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              ©2023 Note. All right reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
