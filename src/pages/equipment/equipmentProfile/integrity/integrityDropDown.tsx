import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";

export default function IntegrityDropDown() {
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
            <p className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
              Default checkbox
            </p>
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
            <p className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
              Default checkbox
            </p>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
