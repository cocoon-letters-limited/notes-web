import React from "react";
import { Link, useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        type="button"
        className="border md:border-2 border-primary px-1 md:px-2 py-1 md:py-2 rounded-lg focus:outline-none ring-0"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2541 4.24106C16.5522 4.53326 16.5793 4.99051 16.3354 5.31272L16.2541 5.40503L9.52658 12L16.2541 18.595C16.5522 18.8872 16.5793 19.3444 16.3354 19.6666L16.2541 19.7589C15.956 20.0511 15.4896 20.0777 15.161 19.8386L15.0668 19.7589L7.7459 12.582C7.44784 12.2898 7.42074 11.8325 7.66461 11.5103L7.7459 11.418L15.0668 4.24106C15.3947 3.91965 15.9262 3.91965 16.2541 4.24106Z"
            fill="#054CD6"
            stroke="#054CD6"
          />
        </svg>
      </button>
    </div>
  );
};

const Title = () => {
  return (
    <div className="flex-1">
      <h2 className=" pl-4 lg:pl-6 text-lg lg:text-xl xl:text-2xl font-bold text-[#051738]">
        Service of machine - approved Profile
      </h2>
    </div>
  );
};

const EditButton = () => {
  return (
    <Link
      to="/notes/123/edit"
      className="border-2 border-primary px-6 py-2 lg:py-3 rounded-lg flex flex-row items-center text-primary text-sm-15 xl:text-base"
    >
      <span>Edit</span>
      <span className="pl-4">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.8764 20.0279L18.6628 8.66544C19.1403 8.0527 19.3101 7.3443 19.1509 6.62299C19.013 5.96726 18.6097 5.34377 18.0049 4.87078L16.5299 3.69906C15.2459 2.67784 13.6541 2.78534 12.7415 3.95706L11.7546 5.23735C11.6273 5.39752 11.6591 5.63401 11.8183 5.76301C11.8183 5.76301 14.312 7.76246 14.3651 7.80546C14.5349 7.96671 14.6622 8.1817 14.6941 8.43969C14.7471 8.94493 14.3969 9.41792 13.877 9.48242C13.6329 9.51467 13.3994 9.43942 13.2297 9.29967L10.6086 7.21422C10.4813 7.11855 10.2902 7.13898 10.1841 7.26797L3.95514 15.3303C3.5519 15.8355 3.41395 16.4912 3.5519 17.1255L4.34777 20.5761C4.39021 20.7589 4.54939 20.8879 4.74039 20.8879L8.24222 20.8449C8.87891 20.8341 9.47316 20.5439 9.8764 20.0279ZM14.7797 18.9533H20.4898C21.0469 18.9533 21.5 19.4123 21.5 19.9766C21.5 20.5421 21.0469 21 20.4898 21H14.7797C14.2226 21 13.7695 20.5421 13.7695 19.9766C13.7695 19.4123 14.2226 18.9533 14.7797 18.9533Z"
            fill="#054CD6"
          />
        </svg>
      </span>
    </Link>
  );
};

const DeleteButton = () => {
  return (
    <button
      type="button"
      className="border-2 border-primary px-6 py-3 rounded-lg flex flex-row items-center bg-primary text-white text-sm-15 xl:text-base"
    >
      <span>Delete</span>
      <span className="pl-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.2871 5.24297C20.6761 5.24297 21 5.56596 21 5.97696V6.35696C21 6.75795 20.6761 7.09095 20.2871 7.09095H3.71385C3.32386 7.09095 3 6.75795 3 6.35696V5.97696C3 5.56596 3.32386 5.24297 3.71385 5.24297H6.62957C7.22185 5.24297 7.7373 4.82197 7.87054 4.22798L8.02323 3.54598C8.26054 2.61699 9.0415 2 9.93527 2H14.0647C14.9488 2 15.7385 2.61699 15.967 3.49699L16.1304 4.22698C16.2627 4.82197 16.7781 5.24297 17.3714 5.24297H20.2871ZM18.8058 19.134C19.1102 16.2971 19.6432 9.55712 19.6432 9.48913C19.6626 9.28313 19.5955 9.08813 19.4623 8.93113C19.3193 8.78413 19.1384 8.69713 18.9391 8.69713H5.06852C4.86818 8.69713 4.67756 8.78413 4.54529 8.93113C4.41108 9.08813 4.34494 9.28313 4.35467 9.48913C4.35646 9.50162 4.37558 9.73903 4.40755 10.1359C4.54958 11.8992 4.94517 16.8102 5.20079 19.134C5.38168 20.846 6.50498 21.922 8.13206 21.961C9.38763 21.99 10.6811 22 12.0038 22C13.2496 22 14.5149 21.99 15.8094 21.961C17.4929 21.932 18.6152 20.875 18.8058 19.134Z"
            fill="white"
          />
        </svg>
      </span>
    </button>
  );
};

const TopSection = () => {
  return (
    <div className="mt-4 flex flex-row flex-wrap">
      <div className="w-full lg:w-9/12 flex flex-row items-center flex-wrap">
        <GoBackButton />
        <Title />
      </div>
      <div className="mt-8 lg:mt-8 xl:mt-0 flex-1 flex lg:justify-end">
        <div className="flex space-x-3">
          <EditButton />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
