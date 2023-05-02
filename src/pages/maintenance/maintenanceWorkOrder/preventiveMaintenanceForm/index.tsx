import React from "react";
import SelectGroup from "components/elements/select";
import InputGroup from "components/elements/input";
import TextareaGroup from "components/elements/textarea";
import ButtonGroup from "components/elements/button";
import AddProcedureButton from "./components/addProcedureButton";

const PreventiveMaintenanceForm = () => {
  return (
    <div>
      <div className="mt-8 bg-white rounded-md pt-6 lg:pt-8 pb-16 px-4">
        <div className="w-full md:w-11/12 mx-auto">
          <form>
            <SelectGroup
              label="Select Machine"
              placeholder="Select"
              options={[
                {
                  label: "Engineering Note",
                  value: "Engineering Note",
                },
              ]}
            />
            <InputGroup type="text" label="Date:" placeholder="" />
            <TextareaGroup label="Description" />
            <SelectGroup
              label="Work type"
              placeholder="Select"
              options={[
                {
                  label: "Engineering Note",
                  value: "Engineering Note",
                },
              ]}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
              <InputGroup type="date" label="Start date:" placeholder="" />
              <InputGroup type="text" label="Frequency:" placeholder="" />
              <SelectGroup
                label="Period:"
                placeholder="Select"
                options={[
                  {
                    label: "Engineering Note",
                    value: "Engineering Note",
                  },
                ]}
              />
            </div>

            <div>
              <p className="text-sm-15 lg:text-base mb-4 text-[#A1ABBC]">
                Float Period
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
                <SelectGroup
                  label="PM Type:"
                  placeholder="Select"
                  options={[
                    {
                      label: "Engineering Note",
                      value: "Engineering Note",
                    },
                  ]}
                />
                <InputGroup type="text" label="Frequency" placeholder="" />
                <SelectGroup
                  label="Period:"
                  placeholder="Select"
                  options={[
                    {
                      label: "Engineering Note",
                      value: "Engineering Note",
                    },
                  ]}
                />
              </div>
            </div>

            <SelectGroup
              label="Select Workgroup"
              placeholder="Select"
              options={[
                {
                  label: "Engineering Note",
                  value: "Engineering Note",
                },
              ]}
            />

            <AddProcedureButton />

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
                <SelectGroup
                  label="Select matrial:"
                  placeholder="Select"
                  options={[
                    {
                      label: "Engineering Note",
                      value: "Engineering Note",
                    },
                  ]}
                />
                <InputGroup type="text" label="Frequency:" placeholder="" />
              </div>
              <button
                type="button"
                className="text-primary font-semibold text-sm-15 lg:tetx-base"
              >
                Add more
              </button>
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

export default PreventiveMaintenanceForm;
