import InputGroup from "components/elements/input";
// import SelectGroup2 from "components/elements/select2";
import TextareaGroup from "components/elements/textarea";
import React from "react";
import Title from "pages/safety/component/title";
import { Link } from "react-router-dom";
import HearderSafety from "../../component/HearderSafety";
// import MultipleSelectChipCustom from "../component/mutiselectot";

function SystemsIsolation() {
  return (
    <>
      <Title title="Safety Systems Isolation Certificate" />
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
            <div className="col-span-6">
              <TextareaGroup label="Details of any manual or back up systems to be established and used during isolation period" />
            </div>
            <div className="col-span-6">
              <TextareaGroup label="Details of any manual or back up systems to be established and used during isolation period" />
            </div>
          </div>
          <p className="text-">AUTHORISATION</p>

          <InputGroup label="Add authorization" />
          {/* <MultipleSelectChipCustom /> */}
          <p className="text-">SANCTION TO TEST </p>
          <InputGroup label="Permission is granted to test subject to the following precautions" />
          <InputGroup label="Add authorization:" />
          <p className="text-">SAFETY SYSTEM DE-ISOLATION </p>
          <InputGroup label="Permission is granted to" />
          <InputGroup label="Add authorization:" />
          {/* <SelectGroup2
      label=""
      options={[{ label: "Worksite Location", value: "" }]}
    /> */}
          <div className="flex flex-row-reverse space-x-2 ">
            <button
              type="submit"
              className="ml-2  bg-[#E4EAF6] hover:bg-[#E4EAF6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#E4EAF6] dark:hover:bg-[#E4EAF6] dark:focus:ring-blue-800"
            >
              Cancel
            </button>
            <Link to="/safety/systems-isolation-detail">
              <button
                type="submit"
                className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SystemsIsolation;
