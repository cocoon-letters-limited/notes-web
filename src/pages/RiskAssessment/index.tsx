import React from "react";
import { PieChartCustom } from "./pieChartCustom";
import CustomAccordion from "./customAccordion";

const ButtonGroup = ({ title, buttonStyleType }: any) => {
  return (
    <div>
      {buttonStyleType !== "outline" ? (
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {title}
        </button>
      ) : (
        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          {title}
        </button>
      )}
    </div>
  );
};

const InputGroup = ({ label }: any) => {
  return (
    <div>
      <div>
        <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </p>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Softwebdigital"
          required
        />
      </div>
    </div>
  );
};

function RiskAssessment() {
  return (
    <div>
      <div className="flex justify-between">
        <InputGroup label="Title" />
        <div className="flex space-x-3 text-right">
          <p className="">Status:Issued</p>
          <p>Risk assessment No:</p>
        </div>
      </div>
      <div className="grid grid-cols-8 my-5">
        <div className="w-full col-span-2">
          <PieChartCustom />
        </div>
        <div className="col-span-6">
          <p className="my-3 font-semibold">Select possible hazards</p>
          <div className="flex flex-wrap">
            <ButtonGroup title="Confined Space Entry" />
            <ButtonGroup buttonStyleType="outline" title="Awkward Access" />
            <ButtonGroup buttonStyleType="outline" title="Unguarded Opening" />
            <ButtonGroup buttonStyleType="outline" title="Dropped Object" />
            <ButtonGroup buttonStyleType="outline" title="Vibration" />
            <ButtonGroup
              buttonStyleType="outline"
              title="Confined Space Entry"
            />
            <ButtonGroup title="Awkward Access" />
          </div>
          <p className="text-right my-3 text-[#054CD6]">More hazards...</p>
          <p className="my-3 font-semibold">Select possible controls:</p>
          <div className="flex flex-wrap">
            <ButtonGroup
              buttonStyleType="outline"
              title="Erect signs and barriers"
            />
            <ButtonGroup
              buttonStyleType="outline"
              title="Keep worksite free of trip hazards"
            />
            <ButtonGroup
              buttonStyleType="outline"
              title="Check worksite for potential dropped objects"
            />
            <ButtonGroup
              buttonStyleType="outline"
              title="Safety harness to be worn"
            />
            <ButtonGroup
              buttonStyleType="outline"
              title="Inertia reel to be  worn"
            />
            <ButtonGroup
              buttonStyleType="outline"
              title="Standby man to be in attendance"
            />
            <ButtonGroup
              buttonStyleType="outline"
              title="Waste to be disposed of correctly"
            />
            <ButtonGroup
              buttonStyleType="outline"
              title="Use safe manual handling techniques"
            />
            <ButtonGroup
              buttonStyleType="outline"
              title="Ensure correct PPE to be worn"
            />
          </div>
          <p className="text-right my-3 text-[#054CD6]">More controls...</p>
        </div>
      </div>
      <div className="mt-4">
        <CustomAccordion />
      </div>
    </div>
  );
}

export default RiskAssessment;
