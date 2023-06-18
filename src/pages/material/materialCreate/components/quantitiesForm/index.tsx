import InputGroup from "components/elements/input";
import React from "react";

const QuantitiesForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
      <InputGroup type="text" label="Total Quantity" placeholder="" />
      <InputGroup type="text" label="Allocated Quantity" placeholder="" />
      <InputGroup type="text" label="Available Quantity" placeholder="" />
    </div>
  );
};

export default QuantitiesForm;
