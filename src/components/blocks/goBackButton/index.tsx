"use client";

import { useRouter } from 'next/navigation';
import React from 'react'

const GoBackButton = () => {
    const router = useRouter();
    return (
      <button
        type="button"
        onClick={() => router.back()}
        className="text-primary text-sm-15 lg:text-base xl:text-lg flex items-center font-semibold"
      >
        <span>
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.77191 7.0081L10.2084 1.68755L8.77529 0.285009L0.892181 8L8.77529 15.715L10.2084 14.3125L4.77191 8.9919H17.1084V7.0081H4.77191Z"
              fill="#054CD6"
            />
          </svg>
        </span>
        <span className="pl-3">Back</span>
      </button>
    );
  };

export default GoBackButton