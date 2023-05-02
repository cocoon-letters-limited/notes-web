import React from "react";
import InputGroup from "components/elements/input";
import ButtonGroup from "components/elements/button";
import RadioButtonGroup from "components/elements/radioButton";

const Step4 = () => {
  return (
    <div>
      <h2 className="text-[#A1ABBC] text-base lg:text-lg mb-6">
        FINAL APPROVAL
        <br />
        (APPROVAL FOR CAPEX)
      </h2>

      <div className="mt-4">
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-4/12">
            Approved to proceed
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-4/12">
            Approved to proceed Implement
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          <InputGroup
            type="text"
            label="Name of SVP, Project Control"
            placeholder=""
          />
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm-15 lg:text-base mb-4 text-[#A1ABBC] italic">
          (WORK PACK DETAILS)
        </p>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-4/12">
            Work Pack for technical changes by :
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Lead Engineer" />
            <RadioButtonGroup label="VOR Team" />
            <RadioButtonGroup label="N.A." />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          <InputGroup type="text" label="Work Pack No:" placeholder="" />
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm-15 lg:text-base mb-4 text-[#A1ABBC]">
          IMPLEMENTATION CHECKLIST
        </p>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-5/12">
            Work Pack received and approved
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-5/12">
            Statutory / Regulatory / Class approval is received
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-5/12">
            Implementation Schedule produced
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-5/12">
            Performance standard verified for SCE
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm-15 lg:text-base mb-4 text-[#A1ABBC]">
          BASE OFFICE CLOSE OUT CHECKLIST
        </p>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-7/12">
            As Built drawings issued and filed through Document Control Group
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-7/12">
            Manuals/ procedures updated
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-7/12">
            CMMS updated
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-7/12">
            Lesson Learned submitted
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-7/12">
            Facilities informed on Lesson Learned
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-7/12">
            Software backup received and kept in lockers
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-7/12">
            Software backup received and kept in lockers
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          <InputGroup
            type="text"
            label="Name of Lead Engineer:"
            placeholder=""
          />
        </div>
      </div>

      <div className="mb-8">
        <p className="text-sm-15 lg:text-base mb-4 text-[#A1ABBC]">
          OFFSHORE CLOSE OUT CHECKLIST
        </p>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-7/12">
            Scope of Work completed
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-7/12">
            As Built drawings received and filed
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-7/12">
            Manuals/ Procedures updated
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-7/12">
            Operator Training completed
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-7/12">
            Spares available/ordered
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-7/12">
            Alarm and Trip set point register updated
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-7/12">
            Performance standard verified for SCEs
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="mt-4 mb-8 flex flex-row flex-wrap space-x-6 lg:space-x-8">
          <p className="text-sm-15 lg:text-base w-full md:w-7/12">
            Software changes completed and backup stored safely onboard
          </p>
          <div className="flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          <InputGroup type="text" label="Name of OIM" placeholder="" />
        </div>
      </div>

      <div className="flex flex-row justify-end">
        <div className="w-40">
          <ButtonGroup title="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Step4;
