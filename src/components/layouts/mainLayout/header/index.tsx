/* eslint-disable prettier/prettier */

// import { useState } from "react";

// import React from "react";

const Header = () => {
  // const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-white shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <h2 className="text-2xl font-bold">LOGO</h2>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 `}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 hover:text-blue-600">
                  <p>Home</p>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <p>FAQ’s</p>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <p>About US</p>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <p>Contact US</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Explore features
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
