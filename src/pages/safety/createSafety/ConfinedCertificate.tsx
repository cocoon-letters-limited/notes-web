import React from "react";
import CustomRadio from "components/elements/customRadioButton";
import TextareaGroup from "components/elements/textarea";
import HearderSafety from "../component/HearderSafety";
import SafetyFooter from "../component/SafetyFooter";

function ConfinedCertificate() {
  return (
    <div>
      <div className="bg-white p-5 space-y-5 rounded-lg">
        <HearderSafety />

        <TextareaGroup label="Purpose" />
        <div className="grid gap-3 mb-6 md:grid-cols-2 mt-2">
          <div className="space-y-3">
            <p className="font-semibold">PRE ENTRY CHECKS</p>
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
            <p className="font-semibold ">SPECIAL EQUIPMENT AND PRECAUTIONS</p>
            <div className="flex justify-between pt-2">
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
        </div>
        <SafetyFooter />
      </div>
    </div>
  );
}

export default ConfinedCertificate;
