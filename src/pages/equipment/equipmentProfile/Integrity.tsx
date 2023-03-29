/* eslint-disable jsx-a11y/label-has-associated-control */
import { Box, Button, Menu, MenuItem, Modal, Pagination } from "@mui/material";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => ({ min: -2000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => ({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function Integrity() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="flex justify-between">
        <p>Live Feed from Sensors for various reading of equipment</p>
        <p>Maintenance</p>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div className="shadow rounded-lg mt-3 p-5">
          <button
            type="button"
            className="rounded-lg w-fit p-2 border-fuchsia-100 border-solid text-white bg-fuchsia-600"
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <span className="m-2 text-gray-400">Running Hours</span>
          <p className="text-fuchsia-600 text-3xl mt-2">225 hrs</p>
        </div>
        <div className="shadow rounded-lg mt-3 p-5">
          <button
            type="button"
            className="rounded-lg w-fit p-2 border-fuchsia-100 border-solid text-white bg-fuchsia-600"
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <span className="m-2 text-gray-400">Running Hours</span>
          <p className="text-fuchsia-600 text-3xl mt-2">225 hrs</p>
        </div>
        <div className="shadow rounded-lg mt-3 p-5">
          <button
            type="button"
            className="rounded-lg w-fit p-2 border-fuchsia-100 border-solid text-white bg-fuchsia-600"
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <span className="m-2 text-gray-400">Running Hours</span>
          <p className="text-fuchsia-600 text-3xl mt-2">225 hrs</p>
        </div>
      </div>
      <p className="text-blue-700 my-5">Create Procedure</p>
      <div className="grid grid-cols-2">
        <div className="">
          <div className="flex justify-between my-3">
            <p>PM Procedures</p>
            <Pagination count={3} />
          </div>
          <div className=" rounded-lg bg-white  shadow">
            <table className="w-full text-sm text-left  ">
              <thead className="text-xs text-white uppercase rounded bg-blue-700 dark:bg-blue-700 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PM Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PM Number
                  </th>

                  <th scope="col" className="px-6 py-3">
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
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
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{ "aria-labelledby": "basic-button" }}
                    >
                      <MenuItem onClick={handleClose}>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                          <input
                            id="checkbox-item-4"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100
                                 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700
                                  dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600
                                 dark:border-gray-500"
                          />
                          <label
                            htmlFor="checkbox-item-4"
                            className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                          >
                            Default checkbox
                          </label>
                        </div>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                          <input
                            id="checkbox-item-4"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100
                                 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700
                                  dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600
                                 dark:border-gray-500"
                          />
                          <label
                            htmlFor="checkbox-item-4"
                            className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                          >
                            Default checkbox
                          </label>
                        </div>
                      </MenuItem>
                    </Menu>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="px-6 py-4">
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">
                    <p className="px-3 w-fit border border-2 border-red-400 bg-red-100 rounded-lg text-red-400">
                      Pm Status
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="px-6 py-4">
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Black</td>
                  <td className="px-6 py-4">Accessories</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" px-5">
          <p>Predictive Maintenance</p>
          <div className=" p-3 my-5 rounded-lg bg-slate-100">
            <Line options={options} data={data} />
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
            <p className="text-xl text-white">Predictive Maintenance</p>
            <button
              type="button"
              onClick={handleClose}
              className="text-3xl text-white mr-4"
            >
              x
            </button>
          </div>
          <div className="p-6">
            <p className="font-medium text-xl">Critical: Potential failure</p>
            <p className="my-4">
              Description: This machine has reached a potential failure and it’s
              likely to fail soon. Raise a maintainance work order to prevent
              this.
            </p>
            <span>Affected components:</span>
            <span className="bg-blue-100 ml-5 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Engine Casing
            </span>
            <p className="my-4">Prescriptive maintenance?</p>

            <label
              htmlFor="testing"
              className="relative inline-flex items-center mb-4 cursor-pointer"
            >
              <input type="checkbox" value="" className="sr-only peer" />

              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                No/Yes
              </span>
            </label>
            <br />
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-1.5 text-blue-700 dark:text-green-400 flex-shrink-0"
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
              At least 10 characters
            </li>

            <div className="flex justify-between mt-14">
              <button
                type="button"
                className=" font-semibold e px-5 py-2  text-blue-700 rounded-lg "
              >
                Create Note
              </button>
              <button
                type="button"
                className="bg-blue-700   text-white px-5 py-2 rounded-lg "
              >
                Create Note
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Integrity;
