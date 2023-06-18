import React from "react";
import { Link } from "react-router-dom";

function Breadcrumbs({
  fistTitle,
  secoundTitle,
  privRoute,
}: {
  fistTitle: string;
  secoundTitle: string;
  privRoute: string;
}) {
  return (
    <div className="mt-4 flex flex-row items-center space-x-2 text-sm font-bold text-[#051738]">
      <Link to={privRoute}>{fistTitle}</Link>
      <span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.87295 9.87947C3.72392 9.73337 3.71037 9.50475 3.83231 9.34364L3.87295 9.29749L7.23671 6L3.87295 2.70251C3.72392 2.55641 3.71037 2.32779 3.8323 2.16669L3.87295 2.12053C4.02198 1.97443 4.25519 1.96115 4.41952 2.08069L4.4666 2.12053L8.12705 5.70901C8.27608 5.85511 8.28963 6.08373 8.16769 6.24483L8.12705 6.29099L4.4666 9.87947C4.30267 10.0402 4.03688 10.0402 3.87295 9.87947Z"
            fill="#051738"
            stroke="#051738"
            strokeWidth="0.666667"
          />
        </svg>
      </span>
      <span className="text-primary">{secoundTitle || "Profile"}</span>
    </div>
  );
}

export default Breadcrumbs;
