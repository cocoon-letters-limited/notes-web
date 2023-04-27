import { Box, Modal } from "@mui/material";
import React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
};
function Notes() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="notes ">
      <div className="flex justify-between">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border border-blue-700 rounded-l-lg hover:bg-blue-700 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-700 focus:text-white dark:border-blue-700 dark:text-blue-700 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:bg-blue-700"
          >
            Profile
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border-t border-b border-blue-700 hover:bg-blue-700 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-700 focus:text-white dark:border-blue-700 dark:text-blue-700 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:bg-blue-700"
          >
            Settings
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-blue-700 bg-transparent border border-blue-700 rounded-r-md hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-blue-700 focus:text-white dark:border-blue-700 dark:text-blue-700 dark:hover:text-white dark:hover:bg-blue-700 dark:focus:bg-blue-700"
          >
            Downloads
          </button>
        </div>

        <div className="flex ">
          {/* <label htmlFor="countries" className="block mb-2 text-sm font-medium  m-4 w-60 text-gray-900 dark:text-white">Select an option</label> */}
          <select
            id="countries"
            defaultValue="DEFAULT"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Choose a country</option>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
          <button
            type="button"
            onClick={handleOpen}
            className="rounded w-fit ml-3 pl-3 pr-3 text-white  bg-blue-700"
          >
            New
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 h-full gap-5 mt-5">
        <div className=" rounded-lg  shadow bg-white">
          <h2 className="mb-5  font-extrabold tracking-tight rounded-t-lg  p-5 text-white bg-blue-700">
            Categories
          </h2>
          <div className=" p-4 bg-white ml-2 mr-2">
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li className="flex space-x-2 ">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-light leading-tight">
                  Dynamic reports and dashboards
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-light leading-tight">
                  Templates for everyone
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-light leading-tight">
                  Development workflow
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-light leading-tight">
                  Limitless business automation
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 ">
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <div className="px-5 pb-5">
                <div className="border-b-2 mt-4 pb-3 mb-3">
                  <h5 className="font-semibold tracking-tight text-gray-900 ">
                    Service of machine - issued
                  </h5>
                  <p className="text-xs"> Work issued</p>
                </div>
                <p className="text-gray-400 text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor et justo, lectus rhoncus at lorem.
                </p>
                <div className="flex mt-3 mb-3">
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
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                  <p className="mr-2 ml-2">0</p>
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
                      d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                    />
                  </svg>
                  <p className="ml-2">3</p>
                </div>
                <div>
                  <div
                    className="text-blue-800 bg-blue-200 hover:bg-blue-200 focus:ring-4 w-fit focus:outline-none
                                 focus:ring-blue-300 font-medium rounded-lg text-sm px-5
                                 py-2.5 text-center dark:bg-blue-200 dark:hover:bg-blue-200 dark:focus:ring-blue-800"
                  >
                    Work issued
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <div className="px-5 pb-5">
                <div className="border-b-2 mt-4 pb-3 mb-3">
                  <h5 className=" font-semibold tracking-tight text-gray-900 ">
                    Service of machine - issued
                  </h5>
                  <p className="text-xs"> Work issued</p>
                </div>
                <p className="text-gray-400 text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor et justo, lectus rhoncus at lorem.
                </p>
                <div className="flex mt-3 mb-3">
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
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                  <p className="mr-2 ml-2">0</p>
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
                      d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                    />
                  </svg>
                  <p className="ml-2">3</p>
                </div>
                <div>
                  <div
                    className="text-blue-800 bg-blue-200 hover:bg-blue-200 focus:ring-4 w-fit focus:outline-none
         focus:ring-blue-300 font-medium rounded-lg text-sm px-5
         py-2.5 text-center dark:bg-blue-200 dark:hover:bg-blue-200 dark:focus:ring-blue-800"
                  >
                    Work issued
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <div className="px-5 pb-5">
                <div className="border-b-2 mt-4 pb-3 mb-3">
                  <h5 className=" font-semibold tracking-tight text-gray-900 ">
                    Service of machine - issued
                  </h5>
                  <p className="text-sm"> Work issued</p>
                </div>
                <p className="text-gray-400 text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor et justo, lectus rhoncus at lorem.
                </p>
                <div className="flex mt-3 mb-3">
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
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                  <p className="mr-2 ml-2">0</p>
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
                      d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                    />
                  </svg>
                  <p className="ml-2">3</p>
                </div>
                <div>
                  <div
                    className="text-blue-800 bg-blue-200 hover:bg-blue-200 text-xs focus:ring-4 w-fit focus:outline-none
         focus:ring-blue-300 font-medium rounded-lg  px-5
         py-2.5 text-center dark:bg-blue-200 dark:hover:bg-blue-200 dark:focus:ring-blue-800"
                  >
                    Work issued
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex bg-blue-700 p-4 rounded-t-lg justify-between">
            <p className="text-2xl text-white">Add note</p>
            <button
              type="button"
              onClick={handleClose}
              className="text-3xl text-white mr-4"
            >
              x
            </button>
          </div>
          <div className="p-2">
            <div className="ml-6 mr-6 mb-2 mt-2">
              <p className="block mb-2 text-sm font-medium text-gray-900 ">
                Category
              </p>
              <input
                type="text"
                id="large-input"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <p className="text-blue-700">Add new category</p>
            </div>

            <div className="ml-6 mr-6 mb-2 mt-2">
              <p className="block mb-2 text-sm font-medium text-gray-900 ">
                Category
              </p>
              <input
                type="text"
                id="large-input"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="ml-6 mr-6 mb-2 mt-2">
              <p className="block mb-2 text-sm font-medium text-gray-900 ">
                Category
              </p>
              <textarea
                cols={4}
                id="large-input"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="ml-6 mr-6 mb-2 mt-2">
              <p className="block mb-2 text-sm font-medium bg-white text-gray-900 ">
                Select an option
              </p>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5   dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <button
              type="button"
              className="bg-blue-700 w-5/6   text-white p-5 rounded-lg m-5"
            >
              Create Note
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Notes;
