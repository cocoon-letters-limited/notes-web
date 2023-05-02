import React from "react";
import ButtonGroup from "components/elements/button";
import InputGroup from "components/elements/input";
import TextareaGroup from "components/elements/textarea";
import CheckboxGroup from "components/elements/checkbox";

const CorrectiveMaintenanceForm = () => {
  return (
    <div>
      <div className="mt-8 bg-white rounded-md pt-6 lg:pt-8 pb-16 px-4">
        <div className="w-full md:w-11/12 mx-auto">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
              <InputGroup
                type="text"
                label="Work Order number/Description:"
                placeholder=""
              />
              <InputGroup
                type="text"
                label="Equipment number/description:"
                placeholder=""
              />
              <InputGroup type="text" label="Date:" placeholder="" />
            </div>

            <TextareaGroup label="Scope of work:" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
              <InputGroup
                type="text"
                label="As found condition:"
                placeholder=""
              />
              <InputGroup type="text" label="Readings taken:" placeholder="" />
              <InputGroup type="text" label="Work performed:" placeholder="" />
            </div>

            <TextareaGroup label="Parts changed (including quantities):" />

            <TextareaGroup label="Root cause of failure:" />

            <div>
              <p className="text-sm-15 lg:text-base mb-4 text-[#A1ABBC]">
                Additional work
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
                <InputGroup
                  type="text"
                  label="As left status:"
                  placeholder=""
                />
                <InputGroup
                  type="text"
                  label="Follow up work:"
                  placeholder=""
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
              <div className="mb-8">
                <p className="text-sm-15 lg:text-base mb-4 text-[#A1ABBC]">
                  Additional reports
                </p>
                <div className="mb-4 flex flex-col space-y-4">
                  <CheckboxGroup label="Signed off job No report" />
                  <CheckboxGroup label="P& ID Attached & Highlighted" />
                  <CheckboxGroup label="Inspection report" />
                  <CheckboxGroup label="NDT" />
                  <CheckboxGroup label="Photos" />
                  <CheckboxGroup label="Class surveyor report" />
                </div>
              </div>

              <InputGroup
                type="text"
                label="Equipment function test details:"
                placeholder=""
              />
            </div>

            <div className="flex flex-row justify-end">
              <div className="w-40">
                <ButtonGroup title="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CorrectiveMaintenanceForm;
