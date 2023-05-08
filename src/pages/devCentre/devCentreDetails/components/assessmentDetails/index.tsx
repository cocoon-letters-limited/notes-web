import React from "react";
import GoBackButton from "components/blocks/goBackButton";
import ButtonGroup from "components/elements/button";
import RadioButtonGroup from "components/elements/radioButton";
import CheckboxGroup from "components/elements/checkbox";

const AssessmentDetails = () => {
  return (
    <section className="relative h-full bg-white px-6 lg:px-8 xl:px-12 pt-6 lg:pt-8 pb-36">
      <div className="flex flex-row flex-wrap justify-between">
        <GoBackButton title="Digital Marketing Strategy" />
      </div>

      <div className="mt-12">
        <div className="mb-8">
          <label htmlFor="name">
            <p className="mb-3 text-sm-15 lg:text-base">
              Define what digital marketing is about
            </p>
            <input
              type="text"
              className="w-full py-4 px-6 rounded-lg bg-[#F8F9FF] text-[#535353]"
            />
          </label>
        </div>

        <div className="mb-8">
          <p className="text-sm-15 lg:text-base mb-4">
            Digital marketing helps your business
          </p>
          <div className="mb-4 flex flex-row flex-wrap space-x-4 lg:space-x-6">
            <RadioButtonGroup label="Yes" />
            <RadioButtonGroup label="No" />
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm-15 lg:text-base mb-4">
            Choose from the options below
          </p>
          <div className="mb-4 flex flex-col flex-wrap space-y-4">
            <CheckboxGroup label="Email marketing" />
            <CheckboxGroup label="Google ads" />
          </div>
        </div>

        <div className="mt-12 flex flex-row justify-end">
          <div className="w-40">
            <ButtonGroup title="Submit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentDetails;
