import React from "react";
import AboutImage from "../../../../../public/images/webp/about-top.webp";
import Image from "next/image";

const TopSection = () => {
  return (
    <section className="relative">
      <div className="container px-4 md:px-8 xl:px-4 mx-auto pt-20 md:pt-28 xl:pt-32 pb-2 md:pb-6 lg:pb-8 xl:pb-16 relative">
        <div className="flex flex-col-reverse md:flex-row flex-wrap w-full">
          <div className="mt-16 md:mt-0 w-full md:w-4/12 lg:w-5/12 hidden md:block">
            <Image src={AboutImage} alt="About iNoteOPX" />
          </div>
          <div className="w-full md:w-1/12" />
          <div className="w-full md:w-7/12 lg:w-6/12 xl:w-5/12">
            <h1 className="w-10/12 xl:w-full text-primary text-4xl lg:text-5xl xl:text-6xl font-extrabold">
              We’re Built For Your Integrity
            </h1>

            <div className="mt-12 md:mt-0 w-full block md:hidden">
            <Image src={AboutImage} alt="About iNoteOPX" />
            </div>

            <p className="mt-8 lg:mt-10 xl:mt-12 text-sm-15 leading-7 lg:text-base lg:leading-7 xl:text-lg xl:leading-7 text-textColor">
              At Note Operational Excellence Limited, we understand that your
              facility is only as strong as the integrity of its key assets:
              manpower, machines, and materials. That&apos;s why we&apos;ve developed an
              Enterprise Asset Management (EAM) software solution that is
              designed to streamline your operations and ensure the continuous
              integrity of your facility.
              <br /> <br />
              Our software is equipped with best-in-class features that have
              been specifically developed to help facilities with high-valued
              assets of a complicated makeup of human, equipment, and consumable
              resources. Whether you&apos;re in the manufacturing, energy,
              transportation, or any other industry, we have the expertise and
              tools to help you optimize your asset management strategy.
            </p>

            {/* <div className="mt-6 md:mt-6 lg:mt-8 flex flex-row flex-wrap space-x-6">
              <Link to="/" className="text-primary text-sm-15 lg:text-base">
                Read more...
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;