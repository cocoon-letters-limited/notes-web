import React from "react";
import InputGroup from "components/elements/input";
import TextareaGroup from "components/elements/textarea";
import AddIcon from "@mui/icons-material/Add";
import CustomRadio from "components/elements/customRadioButton";
import CustomButton from "components/elements/CustomButton";
import HearderSafety from "../component/HearderSafety";
import Title from "../component/title";

function RadiographyPermit() {
  return (
    <>
      <Title title="Radiography Permit" />
      <div className="bg-white p-4 rounded-lg">
        <HearderSafety />
        <div>
          <div className="grid gap-2 mb-6 md:grid-cols-2 mt-2">
            <InputGroup label="Worksite Location" />
            <InputGroup label="System" />
            <InputGroup label="Equipment/system to be isolated" />
            <InputGroup label="Identification Works Tag No" />
          </div>
          <div className="col-span-6">
            <TextareaGroup label="Description" />
          </div>
          <div className="grid gap-2 mb-6 md:grid-cols-2">
            <InputGroup label="Reason for isolation" />
            <InputGroup label="Worksite Location" />
          </div>
          <div className="grid gap-3 mb-6 md:grid-cols-2 mt-2">
            <div className="space-y-3">
              <p className="font-semibold">Details</p>
              <div className="flex justify-between">
                <p>Remotely Controlled Equipment</p>
                <CustomRadio
                  options={[
                    { label: "yes", value: "no" },
                    { label: "No", value: "No" },
                  ]}
                  name="options"
                  selectedValue="yes"
                  onChange={() => {}}
                />
              </div>
              <div className="flex justify-between">
                <p>Automatic Fire Fighting Equipment</p>
                <CustomRadio
                  options={[
                    { label: "yes", value: "no" },
                    { label: "No", value: "No" },
                  ]}
                  name="options"
                  selectedValue="yes"
                  onChange={() => {}}
                />
              </div>
              <div className="flex justify-between">
                <p>Isolation Certificate</p>
                <CustomRadio
                  options={[
                    { label: "yes", value: "no" },
                    { label: "No", value: "No" },
                  ]}
                  name="options"
                  selectedValue="yes"
                  onChange={() => {}}
                />
              </div>
              <div className="flex justify-between">
                <p>Scaffolding Certificate</p>
                <CustomRadio
                  options={[
                    { label: "yes", value: "no" },
                    { label: "No", value: "No" },
                  ]}
                  name="options"
                  selectedValue="yes"
                  onChange={() => {}}
                />
              </div>
              <div className="flex justify-between">
                <p>Entry Permit</p>
                <CustomRadio
                  options={[
                    { label: "yes", value: "no" },
                    { label: "No", value: "No" },
                  ]}
                  name="options"
                  selectedValue="yes"
                  onChange={() => {}}
                />
              </div>
              <div className="flex justify-between">
                <p>Other</p>
                <CustomRadio
                  options={[
                    { label: "yes", value: "no" },
                    { label: "No", value: "No" },
                  ]}
                  name="options"
                  selectedValue="yes"
                  onChange={() => {}}
                />
              </div>
              <InputGroup label="Additional Comments" />
            </div>
            <div className="space-y-3 px-5">
              <p className="font-semibold">Personal Equipment</p>
              <div className="flex justify-between">
                <p>Remotely Controlled Equipment</p>
                <CustomRadio
                  options={[
                    { label: "yes", value: "no" },
                    { label: "No", value: "No" },
                  ]}
                  name="options"
                  selectedValue="yes"
                  onChange={() => {}}
                />
              </div>
              <div className="flex justify-between">
                <p>Automatic Fire Fighting Equipment</p>
                <CustomRadio
                  options={[
                    { label: "yes", value: "no" },
                    { label: "No", value: "No" },
                  ]}
                  name="options"
                  selectedValue="yes"
                  onChange={() => {}}
                />
              </div>
              <div className="flex justify-between">
                <p>Isolation Certificate</p>
                <CustomRadio
                  options={[
                    { label: "yes", value: "no" },
                    { label: "No", value: "No" },
                  ]}
                  name="options"
                  selectedValue="yes"
                  onChange={() => {}}
                />
              </div>
              <div className="flex justify-between">
                <p>Entry Permit</p>
                <CustomRadio
                  options={[
                    { label: "yes", value: "no" },
                    { label: "No", value: "No" },
                  ]}
                  name="options"
                  selectedValue="yes"
                  onChange={() => {}}
                />
              </div>
              <InputGroup label="Additional Comments" />
              <p className="font-semibold">Site Gas Test</p>
              <CustomRadio
                options={[
                  { label: "Flammable", value: "no" },
                  { label: "Toxic", value: "No" },
                  { label: "Other", value: "No" },
                ]}
                name="options"
                selectedValue="yes"
                onChange={() => {}}
              />
              <InputGroup label="Enter gas name:" />
              <p>
                Initialled by Authorised Gas Tester as being within acceptable
                gas test limits:
              </p>
              <small>Initial Test:</small>
              <button
                type="button"
                className="p-2 rounded-lg w-full bg-[#F6F8FF] border border-[#054CD6] text-[#054CD6] mr-2 mb-2"
              >
                Connect with MetaMask
                <AddIcon />
              </button>
              <div className="flex flex-row-reverse">
                <CustomButton title="Cancel" buttonStyleType="plain-gray" />
                <CustomButton title="Submit" buttonStyleType="solid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RadiographyPermit;
