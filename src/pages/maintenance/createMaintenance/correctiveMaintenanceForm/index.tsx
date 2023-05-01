import React from "react";
import InputGroup from "components/elements/input";
import TextareaGroup from "components/elements/textarea";
import SelectGroup from "components/elements/select";
import ButtonGroup from "components/elements/button";

const CorrectiveMaintenanceForm = () => {
  return (
    <>
      <h1 className="text-default font-bold text-xl lg:text-2xl xl:text-3xl">
        Create
      </h1>

      <div className="mt-8 bg-white rounded-md pt-6 lg:pt-8 pb-16 px-4">
        <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
          <form>
            <InputGroup type="text" label="Title" placeholder="" />
            <TextareaGroup label="Fault dcescription" placeholder="" />

            <SelectGroup
              label="Department"
              placeholder=""
              options={[
                {
                  label: "1234A",
                  value: "1234A",
                },
              ]}
            />
            <SelectGroup
              label="Select machine"
              placeholder=""
              options={[
                {
                  label: "1234A",
                  value: "1234A",
                },
              ]}
            />
            <SelectGroup
              label="Select material"
              placeholder=""
              options={[
                {
                  label: "1234A",
                  value: "1234A",
                },
              ]}
            />

            <InputGroup type="text" label="Risk assessment" placeholder="" />
            <InputGroup type="text" label="Safety permit" placeholder="" />

            <SelectGroup
              label="Priority"
              placeholder=""
              options={[
                {
                  label: "High",
                  value: "High",
                },
                {
                  label: "Low",
                  value: "Low",
                },
              ]}
            />

            <SelectGroup
              label="Type"
              placeholder=""
              options={[
                {
                  label: "Hot",
                  value: "Hot",
                },
                {
                  label: "Cold",
                  value: "Cold",
                },
              ]}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6">
              <InputGroup type="date" label="Start date" placeholder="" />
              <InputGroup type="date" label="End Date" placeholder="" />
            </div>

            <SelectGroup
              label="Select Workforce"
              placeholder=""
              options={[
                {
                  label: "Hot",
                  value: "Hot",
                },
                {
                  label: "Cold",
                  value: "Cold",
                },
              ]}
            />

            <ButtonGroup title="Create work order" />
          </form>
        </div>
      </div>
    </>
  );
};

export default CorrectiveMaintenanceForm;
