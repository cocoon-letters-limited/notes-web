import GoBackButton from "components/blocks/goBackButton";
import React from "react";
import Step1 from "./components/step1";

const CreateCourse = () => {
  return (
    <section className="relative h-full bg-white px-6 lg:px-8 xl:px-12 pt-6 lg:pt-8 pb-36">
      <div className="">
        <GoBackButton title="New Course" />
      </div>

      <Step1 />
    </section>
  );
};

export default CreateCourse;
