import { useState } from "react";

import Logo from "assets/NOTEOPX.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(true);

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  font-dark">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
            <Link to="/">
              <img src={Logo} className="h-6 mr-3 sm:h-9" alt="iNoteOpx" />
            </Link>
          </div>
          <div className="flex md:order-2">
            <Link to="/trynow">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Contact sales
              </button>
            </Link>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                onClick={() => setNavbar((p) => !p)}
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              navbar ? "hidden" : ""
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li>
                <NavLink
                  to=""
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-700 md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                  aria-activedescendant="text-red-700"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about-us"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-700 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="faqs"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-blue-700  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-700 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  FAQ
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="contact-us"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-700 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact us
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
