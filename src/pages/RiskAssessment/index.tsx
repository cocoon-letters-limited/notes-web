import InputGroup from "components/elements/input";
import React from "react";
import ButtonGroup from "components/elements/button";
import { PieChartCustom } from "./pieChartCustom";
import CustomAccordion from "./customAccordion";

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
      <div className="grid grid-cols-8">
        <div className="w-full col-span-2">
          <PieChartCustom />
        </div>
        <div className="col-span-6">
          <p className="my-3 font-semibold">Select possible hazards</p>
          <div className="grid grid-cols-5 gap-3">
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
          <p className="my-3 font-semibold">Select possible hazards</p>
          <div className="grid grid-flow-row-dense grid-cols-3 gap-3 grid-rows-3">
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
        </div>
      </div>
      <div className="mt-4">
        <CustomAccordion />
      </div>
    </div>
  );
}

export default RiskAssessment;
