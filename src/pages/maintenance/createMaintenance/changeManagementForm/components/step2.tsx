import React from "react";
import InputGroup from "components/elements/input";
import ButtonGroup from "components/elements/button";
import RadioButtonGroup from "components/elements/radioButton";
import TextareaGroup from "components/elements/textarea";

const Step2 = () => {
  return (
    <div>
      <h2 className="text-[#A1ABBC] text-base lg:text-lg mb-6">Desrciption</h2>
      <div className="">
        <TextareaGroup label="Problem Definition:" />
        <InputGroup
          type="text"
          label="Existing Equipment / Trip Set Point / System:"
          placeholder=""
        />
        <InputGroup
          type="text"
          label="Proposed Modifications / Trip Set Point:"
          placeholder=""
        />
        <InputGroup
          type="text"
          label="Justification / Benefits:"
          placeholder=""
        />
        <InputGroup type="text" label="Reasons for defferal:" placeholder="" />
        <InputGroup
          type="text"
          label="Reasons for degradation:"
          placeholder=""
        />
        <InputGroup
          type="text"
          label="Reasons for temporary repair:"
          placeholder=""
        />
        <InputGroup
          type="text"
          label="Risk assesment details:"
          placeholder=""
        />

        <div className="mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base">Safe to operate?</p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>

        <InputGroup
          type="text"
          label="Control /Mitigation Measure details:"
          placeholder=""
        />
      </div>

      <div className="flex flex-row justify-end">
        <div className="w-40">
          <ButtonGroup title="Next" />
        </div>
      </div>
    </div>
  );
};

export default Step2;
