import React from "react";
import StoryImage1 from "assets/images/webp/story1.webp";
import StoryImage2 from "assets/images/webp/story2.webp";
import StoryImage3 from "assets/images/webp/story3.webp";

const OurStorySection = () => {
  return (
    <section className="relative">
      <div className="container px-4 md:px-8 xl:px-4 mx-auto pt-24 md:pt-28 lg:pt-32 pb-40 lg:pb-52 relative">
        <div className="w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto text-center">
          <h2 className="text-primary font-bold text-3xl lg:text-4xl">
            Our Story
          </h2>
          <p className="mx-auto text-center mt-6 lg:mt-10 text-base leading-7 lg:text-xl lg:leading-8 text-textColor">
            At Note Operational Excellence Limited, we understand that your
            facility is only as strong as the integrity of its key assets:
            manpower, machines, and materials. That's why we've developed an
            Enterprise Asset Management (EAM) software solution that is designed
            to streamline your operations and ensure the continuous integrity of
            your facility.
          </p>
        </div>
        <div className="mt-16 lg:mt-20 xl:mt-24 w-full md:w-11/12 lg:w-10/12 xl:w-9/12 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
            <img src={StoryImage1} alt="Story 1" />
            <img src={StoryImage2} alt="Story 2" />
            <img
              src={StoryImage3}
              alt="Story 3"
              className="col-span-2 md:col-span-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
