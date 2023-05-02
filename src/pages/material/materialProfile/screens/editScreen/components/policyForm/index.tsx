import React from "react";
import InputGroup from "components/elements/input";
import SelectGroup from "components/elements/select";
import RadioButtonGroup from "components/elements/radioButton";
import CheckboxGroup from "components/elements/checkbox";

const PolicyForm = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
      <div className="">
        <SelectGroup
          label="Unit of issue"
          placeholder=""
          options={[
            {
              label: "1234A",
              value: "1234A",
            },
          ]}
        />
        <InputGroup type="text" label="Ordering cost" placeholder="" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
          <InputGroup type="text" label="Max level" placeholder="" />
          <InputGroup type="text" label="Min level" placeholder="" />
          <InputGroup type="text" label="Re-order level" placeholder="" />
          <InputGroup type="text" label="Re-order Qty" placeholder="" />
        </div>

        <InputGroup type="text" label="Last Calc" placeholder="" />

        <InputGroup type="text" label="Suggested ROI" placeholder="" />

        <InputGroup type="text" label="Suggested ROG" placeholder="" />
      </div>

      <div className="lg:pl-2 xl:pl-4 lg:mt-8">
        <div className="mb-8 space-y-4 lg:space-y-6">
          <CheckboxGroup label="Non Stock?" />
          <CheckboxGroup label="Auto requsition?" />
          <CheckboxGroup label="Maximum replenishment?" />
          <CheckboxGroup label="Auto add to BOM?" />
          <CheckboxGroup label="Quality check req?" />
        </div>

        <InputGroup type="text" label="Holding percent" placeholder="" />
        <InputGroup type="text" label="Buffer percent" placeholder="" />

        <div className="mb-8">
          <p className="text-sm lg:text-sm-15 mb-4">Re-order policy</p>
          <div className="mb-4 space-y-4">
            <RadioButtonGroup label="Use current stock levels" />
            <RadioButtonGroup label="Include bonded items" />
            <RadioButtonGroup label="Bonded and allocated items" />
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm lg:text-sm-15 mb-4">
            Re-order quantity insufficient policy
          </p>
          <div className="mb-4 space-y-4">
            <RadioButtonGroup label="Accept re-order quantity" />
            <RadioButtonGroup label="Add re-order quantities to exceed re-order level" />
            <RadioButtonGroup label="Exceed re-order level by" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyForm;
