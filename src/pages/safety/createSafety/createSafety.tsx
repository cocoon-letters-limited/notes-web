import InputGroup from "components/elements/input";
// import SelectGroup2 from "components/elements/select2";
import TextareaGroup from "components/elements/textarea";
import React from "react";
import HearderSafety from "../component/HearderSafety";

function CreateSafety() {
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
          <div className="col-span-6">
            <TextareaGroup label="Details of any manual or back up systems to be established and used during isolation period" />
          </div>
          <div className="col-span-6">
            <TextareaGroup label="Details of any manual or back up systems to be established and used during isolation period" />
          </div>
        </div>
        <p className="text-">AUTHORISATION</p>
        {/* <SelectGroup2
          label=""
          options={[{ label: "Worksite Location", value: "" }]}
        /> */}
        <p className="text-">SANCTION TO TEST </p>
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
          <button
            type="submit"
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateSafety;
