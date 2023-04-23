import React from "react";
import InputGroup from "components/elements/input";

const CostsForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
      <InputGroup type="text" label="Average unit cost" placeholder="" />
      <InputGroup type="text" label="YTD Last Refreshed" placeholder="" />
      <InputGroup type="text" label="Last unit cost" placeholder="" />
      <InputGroup type="text" label="Total Spend" placeholder="" />
      <InputGroup type="text" label="Spent YTD" placeholder="" />
    </div>
  );
};

export default CostsForm;
