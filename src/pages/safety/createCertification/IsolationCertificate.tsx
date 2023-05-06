import React from "react";
import InputGroup from "components/elements/input";
import CustomRadio from "components/elements/customRadioButton";
import HearderSafety from "../component/HearderSafety";
import SafetyFooter from "../component/SafetyFooter";
import Title from "../component/title";

function IsolationCertificate({ nextPage, privPage }: any) {
  return (
    <div>
      <Title title="Isolation Certificate" />
      <div className="bg-white p-5 space-y-5 rounded-lg">
        <HearderSafety />
        <div>
          <div className="grid gap-2 mb-6 md:grid-cols-2 mt-2">
            <InputGroup label="Isolate Signature:" />
            <InputGroup label="De-Isolate Signature:" />
          </div>
          <p className="font-semibold my-3">VALVE ISOLATION</p>
          <InputGroup label="Title" />
          <CustomRadio
            options={[
              { label: "OPEN", value: "OPEN" },
              { label: "CLOSED", value: "CLOSED" },
              { label: "DISCONNECT", value: "DISCONNECT" },
              { label: "SPADED", value: "SPADED" },
              { label: "BLANKED", value: "BLANKED" },
              { label: "TAGGED", value: "TAGGED" },
              { label: "LOCKED", value: "LOCKED" },
            ]}
            name="options"
            selectedValue="yes"
            onChange={() => {}}
          />
          <p className="font-semibold my-3">POSITIVE ISOLATION</p>
          <InputGroup label="Title" />
          <CustomRadio
            options={[
              { label: "OPEN", value: "OPEN" },
              { label: "CLOSED", value: "CLOSED" },
              { label: "DISCONNECT", value: "DISCONNECT" },
              { label: "SPADED", value: "SPADED" },
              { label: "BLANKED", value: "BLANKED" },
              { label: "TAGGED", value: "TAGGED" },
              { label: "LOCKED", value: "LOCKED" },
            ]}
            name="options"
            selectedValue="yes"
            onChange={() => {}}
          />
          <SafetyFooter submit={() => nextPage} cancel={() => privPage} />
        </div>
      </div>
    </div>
  );
}

export default IsolationCertificate;
