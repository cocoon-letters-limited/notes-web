/* eslint-disable prettier/prettier */
import React from "react";

const Footer = () => {
  // eslint-disable-next-line react/self-closing-comp
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    <div className="bg-gray-100 p-6 ">
      <div className="h-48 container mx-auto">
        <div className="grid grid-cols-3 gap-4 ">
          <div>
            <h1>Logo</h1>
            <p>Manage file easily. Everywhere, everytime.</p>
          </div>
          <div className="grid grid-cols-3 ">
            <ul className="items-center justify-center ">
              <li className="text-gray-900 font-bold">FAQ’s</li>
              <li className="text-gray-600 hover:text-blue-600">
                <p>About US</p>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <p>Contact US</p>
              </li>
            </ul>
            <ul className="items-center justify-center ">
              <li className="text-gray-900 font-bold">FAQ’s</li>
              <li className="text-gray-600 hover:text-blue-600">
                <p>About US</p>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <p>Contact US</p>
              </li>
            </ul>
            <ul className="items-center justify-center ">
              <li className="text-gray-900 font-bold">FAQ’s</li>
              <li className="text-gray-600 hover:text-blue-600">
                <p>About US</p>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <p>Contact US</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
