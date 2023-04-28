import React from "react";
import { Modal, Box, Button } from "@mui/material";

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
function IntegrityPopUp() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Telemetry
      </Button>
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
            <span className="bg-blue-100 ml-5 text-blue-700 text-xs font-medium mr-2 px-2.5 py-1  rounded">
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

export default IntegrityPopUp;
