import React from "react";
import Step1 from "./components/step1";
// import Step2 from "./components/step2";
// import Step3 from "./components/step3";
// import Step4 from "./components/step4";

const ChangeManagementForm = () => {
  return (
    <>
      <h1 className="text-default font-bold text-xl lg:text-2xl xl:text-3xl">
        Change management
      </h1>

      <div className="mt-8 bg-white rounded-md pt-6 lg:pt-8 pb-16 px-4">
        <div className="w-full md:w-11/12 mx-auto">
          <form>
            <Step1 />
            {/* <Step2 /> */}
            {/* <Step3 /> */}
            {/* <Step4 /> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangeManagementForm;
