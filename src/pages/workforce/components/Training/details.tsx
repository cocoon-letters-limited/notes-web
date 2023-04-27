import React from "react";

interface ChildProps {
  onClick: () => void;
}

const WorkForceTraningDetails: React.FC<ChildProps> = ({ onClick }) => {
  return (
    <div>
      <div className="flex justify-between mt-2">
        <div>
          <button type="button" onClick={onClick}>
            back icon
          </button>
          <span className="font-semibold ml-3">Digital Marketing Strategy</span>
        </div>
        <button
          type="button"
          className="px-5  text-xs py-2 bg-blue-700 text-white rounded-lg"
        >
          Start course
        </button>
      </div>
      <img
        className=" w-full h-52 object-cover mt-2 mb-2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWps7mcfhTQLPKFGekJQym7VGXmpCtMUlnblnm7TsxSUdqZ3HR53sx53wy3d7lILVLq84&usqp=CAU"
        alt=""
      />

      <ol className="relative text-gray-500 border-l-4 mt-5 border-[#B1BFD9]  dark:border-gray-700 dark:text-gray-400">
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-3 h-3 bg-[#054CD6] rounded-full -left-2 ring-1 ring-[#054CD6] dark:ring-blue-700 dark:bg-blue-10" />
          <p className="font-medium leading-tight text-black text-sm">
            Introduction
          </p>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            diam elit, quis massa aliquet tortor nisl fermentum. Tristique
            ultrices sagittis amet lacus morbi id. Sit eu congue egestas mi ac.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-3 h-3 bg-[#054CD6]  rounded-full -left-2 ring-1 ring-blue-600 dark:ring-blue-700 dark:bg-blue-10" />
          <p className="font-medium leading-tight text-black  text-sm">
            Server Supervision (5/1/21)
          </p>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            diam elit, quis massa aliquet tortor nisl fermentum. Tristique
            ultrices sagittis amet lacus morbi id. Sit eu congue egestas mi ac.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-3 h-3 bg-[#054CD6]  rounded-full -left-2 ring-1 ring-blue-600 dark:ring-blue-700 dark:bg-blue-10" />
          <p className="font-medium leading-tight text-black   text-sm">
            Compressive Servicing (5/1/21)
          </p>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            diam elit, quis massa aliquet tortor nisl fermentum. Tristique
            ultrices sagittis amet lacus morbi id. Sit eu congue egestas mi ac.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default WorkForceTraningDetails;
