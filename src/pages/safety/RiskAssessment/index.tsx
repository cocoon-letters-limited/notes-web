import React from "react";
import CustomButton from "components/elements/CustomButton";
import { PieChartCustom } from "./pieChartCustom";
import CustomAccordion from "./customAccordion";

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
            <CustomButton
              buttonStyleType="solid"
              title="Confined Space Entry"
            />
            <CustomButton buttonStyleType="outline" title="Awkward Access" />
            <CustomButton buttonStyleType="outline" title="Unguarded Opening" />
            <CustomButton buttonStyleType="outline" title="Dropped Object" />
            <CustomButton buttonStyleType="outline" title="Vibration" />
            <CustomButton
              buttonStyleType="outline"
              title="Confined Space Entry"
            />
            <CustomButton buttonStyleType="solid" title="Awkward Access" />
          </div>
          <p className="text-right my-3 text-[#054CD6]">More hazards...</p>
          <p className="my-3 font-semibold">Select possible controls:</p>
          <div className="flex flex-wrap">
            <CustomButton
              buttonStyleType="outline"
              title="Erect signs and barriers"
            />
            <CustomButton
              buttonStyleType="outline"
              title="Keep worksite free of trip hazards"
            />
            <CustomButton
              buttonStyleType="outline"
              title="Check worksite for potential dropped objects"
            />
            <CustomButton
              buttonStyleType="outline"
              title="Safety harness to be worn"
            />
            <CustomButton
              buttonStyleType="outline"
              title="Inertia reel to be  worn"
            />
            <CustomButton
              buttonStyleType="outline"
              title="Standby man to be in attendance"
            />
            <CustomButton
              buttonStyleType="outline"
              title="Waste to be disposed of correctly"
            />
            <CustomButton
              buttonStyleType="outline"
              title="Use safe manual handling techniques"
            />
            <CustomButton
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
      <div className="flex justify-between py-5">
        <p className="text-blue-700">Attach to safety permit</p>
        <div className="flex">
          <CustomButton buttonStyleType="plain-gray" title="Cancel" />
          <CustomButton buttonStyleType="solid" title="Submit" />
        </div>
      </div>
    </div>
  );
}

export default RiskAssessment;
