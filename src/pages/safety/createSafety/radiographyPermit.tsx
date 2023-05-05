import React from "react";
import InputGroup from "components/elements/input";
import TextareaGroup from "components/elements/textarea";

import CustomRadio from "components/elements/customRadioButton";
import HearderSafety from "../component/HearderSafety";

function RadiographyPermit() {
  return (
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
            <InputGroup label="Worksite Location" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadiographyPermit;
