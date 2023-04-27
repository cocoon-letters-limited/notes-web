import React from "react";
import InputGroup from "components/elements/input";

const PastUsageForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
      <InputGroup type="text" label="Usage 1Month" placeholder="" />
      <InputGroup type="text" label="Usage 3 Months" placeholder="" />
      <InputGroup type="text" label="Usage 6 Months" placeholder="" />
      <InputGroup type="text" label="Usage 12 Months" placeholder="" />
      <InputGroup type="text" label="Total Usage" placeholder="" />
      <InputGroup type="text" label="Last update date" placeholder="" />
    </div>
  );
};

export default PastUsageForm;
