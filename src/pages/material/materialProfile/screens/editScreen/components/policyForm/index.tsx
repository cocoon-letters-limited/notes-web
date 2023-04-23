import React from "react";
import InputGroup from "components/elements/input";
import SelectGroup from "components/elements/select";

type RadioButtonProps = {
  label: string;
};

const RadioButton = ({ label }: RadioButtonProps) => {
  return (
    <label htmlFor="default-radio-1" className="flex items-center">
      <input
        id="default-radio-1"
        type="radio"
        value=""
        name="default-radio"
        className="w-4 h-4 lg:w-5 lg:h-5 text-primary bg-white border-[#B1BFD9] focus:ring-primary"
      />
      <span className="ml-2 lg:ml-3 text-sm ">{label}</span>
    </label>
  );
};

type CheckboxProps = {
  label: string;
};

const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <label htmlFor="checked-checkbox" className="flex items-center">
      <input
        id="checked-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 lg:w-5 lg:h-5 text-primary bg-white rounded border-[#B1BFD9] focus:ring-primary"
      />

      <span className="ml-2 lg:ml-3 text-sm ">{label}</span>
    </label>
  );
};

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
          <Checkbox label="Non Stock?" />
          <Checkbox label="Auto requsition?" />
          <Checkbox label="Maximum replenishment?" />
          <Checkbox label="Auto add to BOM?" />
          <Checkbox label="Quality check req?" />
        </div>

        <InputGroup type="text" label="Holding percent" placeholder="" />
        <InputGroup type="text" label="Buffer percent" placeholder="" />

        <div className="mb-8">
          <p className="text-sm lg:text-sm-15 mb-4">Re-order policy</p>
          <div className="mb-4 space-y-4">
            <RadioButton label="Use current stock levels" />
            <RadioButton label="Include bonded items" />
            <RadioButton label="Bonded and allocated items" />
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm lg:text-sm-15 mb-4">
            Re-order quantity insufficient policy
          </p>
          <div className="mb-4 space-y-4">
            <RadioButton label="Accept re-order quantity" />
            <RadioButton label="Add re-order quantities to exceed re-order level" />
            <RadioButton label="Exceed re-order level by" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyForm;
