import React from "react";
import InputGroup from "components/elements/input";
import ButtonGroup from "components/elements/button";
import CheckboxGroup from "components/elements/checkbox";
import RadioButtonGroup from "components/elements/radioButton";

const Step1 = () => {
  return (
    <div>
      <h2 className="text-[#A1ABBC] text-base lg:text-lg mb-6">Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
        <InputGroup type="text" label="Facility:" placeholder="" />
        <InputGroup type="text" label="Eqipment tag number:" placeholder="" />
        <InputGroup type="text" label="Name of Requestor:" placeholder="" />
      </div>

      <div className="mb-8">
        <p className="text-sm-15 lg:text-base mb-4">Benefits</p>
        <div className="mb-4 flex flex-row flex-wrap space-x-4 lg:space-x-6">
          <CheckboxGroup label="Improve Safety" />
          <CheckboxGroup label="Improve Operations" />
          <CheckboxGroup label="Cost Savings" />
          <CheckboxGroup label="Improve Facility Uptime" />
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm-15 lg:text-base mb-4">Type of Change</p>
        <div className="mb-4 flex flex-row flex-wrap space-x-4 lg:space-x-6">
          <CheckboxGroup label="Technical" />
          <CheckboxGroup label="Trip Set Point" />
          <CheckboxGroup label="Software Changes" />
          <CheckboxGroup label="System & IT Changes" />
          <CheckboxGroup label="Deferral, Degradation & Temporary Repair" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
        <InputGroup
          type="text"
          label="Work order number (optional):"
          placeholder=""
        />
        <InputGroup
          type="text"
          label="Incident Report/IAR Number: "
          placeholder=""
        />
      </div>

      <div className="mb-8">
        <p className="text-sm-15 lg:text-base mb-4 text-[#A1ABBC] italic">
          To be filled in by OIM after Offshore Review
        </p>
        <p className="text-sm-15 lg:text-base mb-4">Job priority</p>
        <div className="mb-4 flex flex-row flex-wrap space-x-4 lg:space-x-6">
          <RadioButtonGroup label="Priority 1" />
          <RadioButtonGroup label="Priority 2" />
          <RadioButtonGroup label="Priority 3" />
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm-15 lg:text-base mb-4 text-[#A1ABBC] italic">
          REGISTERED DETAILS (To be filled by Maintenance Department.)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          <InputGroup type="text" label="Registered date:" placeholder="" />
          <InputGroup
            type="text"
            label="Assigned lead engineer:"
            placeholder=""
          />
          <InputGroup
            type="text"
            label="Target approval due date:"
            placeholder=""
          />
          <InputGroup type="text" label="WBS Code:" placeholder="" />
        </div>
      </div>

      <div className="flex flex-row justify-end">
        <div className="w-40">
          <ButtonGroup title="Next" />
        </div>
      </div>
    </div>
  );
};

export default Step1;
