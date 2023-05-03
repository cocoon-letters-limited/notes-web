import InputGroup from "components/elements/input";
import React from "react";
import { PieChartCustom } from "./pieChartCustom";

function RiskAssessment() {
  return (
    <div>
      <div>
        <InputGroup label="Title" />
      </div>
      <div className="">
        <div className="w-80">
          <PieChartCustom />
        </div>
        <div className="">.</div>
      </div>
    </div>
  );
}

export default RiskAssessment;
