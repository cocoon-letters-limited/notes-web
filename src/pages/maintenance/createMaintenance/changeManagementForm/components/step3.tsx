import React from "react";
import InputGroup from "components/elements/input";
import ButtonGroup from "components/elements/button";
import RadioButtonGroup from "components/elements/radioButton";
import TextareaGroup from "components/elements/textarea";

const Step3 = () => {
  return (
    <div>
      <h2 className="text-[#A1ABBC] text-base lg:text-lg mb-6">
        OFFSHORE MANAGEMENT REVIEW
      </h2>
      <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
        <p className="text-sm-15 lg:text-base">
          Change Management Number and Priority Assigned
        </p>
        <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
          <RadioButtonGroup label="Yes" />
          <RadioButtonGroup label="No" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
        <InputGroup type="text" label="Estimated Cost:" placeholder="" />
        <InputGroup type="text" label="Name of OIM:" placeholder="" />
        <InputGroup type="text" label="Date:" placeholder="" />
      </div>

      <div className="mb-8">
        <p className="text-sm-15 lg:text-base mb-4 text-[#A1ABBC]">
          ONSHORE REVIEW(BASE OFFICE)
        </p>
        <div className="">
          <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
            <p className="text-sm-15 lg:text-base w-full md:w-7/12">
              Sec2A - Recommended to Proceed for Preliminary Study
            </p>
            <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
              <RadioButtonGroup label="Yes" />
              <RadioButtonGroup label="No" />
              <RadioButtonGroup label="N/A" />
            </div>
          </div>
          <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
            <p className="text-sm-15 lg:text-base w-full md:w-7/12">
              Sec2B - Approved for implementation
            </p>
            <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
              <RadioButtonGroup label="Yes" />
              <RadioButtonGroup label="No" />
              <RadioButtonGroup label="N/A" />
            </div>
          </div>
          <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
            <p className="text-sm-15 lg:text-base w-full md:w-7/12">
              Is it a VOR?
            </p>
            <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
              <RadioButtonGroup label="Yes" />
              <RadioButtonGroup label="No" />
            </div>
          </div>
          <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
            <p className="text-sm-15 lg:text-base w-full md:w-7/12">
              Are cost associated with this CMR to be CAPEX
            </p>
            <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
              <RadioButtonGroup label="Yes" />
              <RadioButtonGroup label="No" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
        <InputGroup
          type="text"
          label="Name of Operations Manager:"
          placeholder=""
        />
      </div>

      <div className="mb-8">
        <p className="text-sm-15 lg:text-base mb-4 text-[#A1ABBC]">
          ENGINEERING REVIEW / COMMENTS
        </p>
        <TextareaGroup label="Comments:" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          <InputGroup
            type="text"
            label="Name of Lead Engineer:"
            placeholder=""
          />
          <InputGroup type="text" label="Attachment details:" placeholder="" />
        </div>

        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base">Recommended to Proceed</p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
            <RadioButtonGroup label="N/A" />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm-15 lg:text-base mb-4 text-[#A1ABBC]">
          HSEQ REVIEW/ COMMENTS
        </p>
        <TextareaGroup label="Comments:" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          <InputGroup
            type="text"
            label="Name of Vice President, HSEQ"
            placeholder=""
          />
        </div>

        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base">Recommended to Proceed</p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
            <RadioButtonGroup label="N/A" />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm-15 lg:text-base mb-4 text-[#A1ABBC]">
          REVIEW BY INFORMATION SYSTEM
        </p>
        <TextareaGroup label="Comments:" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          <InputGroup type="text" label="Name of IS Manager" placeholder="" />
        </div>

        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base">Recommended to Proceed</p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
            <RadioButtonGroup label="N/A" />
          </div>
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

export default Step3;
