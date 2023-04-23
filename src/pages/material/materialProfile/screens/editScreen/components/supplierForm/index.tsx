import React from "react";
import InputGroup from "components/elements/input";

const SupplierForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
      <InputGroup type="text" label="Preferred Supplier" placeholder="" />
      <InputGroup type="text" label="Last Supplier" placeholder="" />
    </div>
  );
};

export default SupplierForm;
