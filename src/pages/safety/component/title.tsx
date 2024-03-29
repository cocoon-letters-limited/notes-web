import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

function Title({ title }: { title: string }) {
  return (
    <div className="mb-5">
      <Link to="/safety">
        <button
          type="button"
          className="text-[#054CD6] border border-[#054CD6] hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-[#054CD6] dark:hover:bg-blue-500"
        >
          <ArrowBackIosIcon />
        </button>
      </Link>
      <p className="inline-flex items-center font-medium text-2xl m-2">
        {title}
      </p>
    </div>
  );
}

export default Title;
