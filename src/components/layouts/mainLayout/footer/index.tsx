/* eslint-disable prettier/prettier */
import React from "react";

import Logo from "assets/images/svg/logo/eam_logo.svg";

const Footer = () => {
  // eslint-disable-next-line react/self-closing-comp
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <div className=" ">

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
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Resources</h2>
                  <ul className="text-gray-600 dark:text-gray-400">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Follow us</h2>
                  <ul className="text-gray-600 dark:text-gray-400">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
                  <ul className="text-gray-600 dark:text-gray-400">
                      <li className="mb-4">
                          <div className="hover:underline">Privacy Policy</div>
                      </li>
                      <li>
                          <div className="hover:underline">Terms &amp; Conditions</div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
      <div className="sm:flex  justify-center m-10">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©2022 Note. All right reserved
          </span>

      </div>
    </div>
</footer>

  </div>
};

export default Footer;
