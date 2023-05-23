import React from "react";
import VendorImg from "assets/images/webp/vendors/logo1.webp";
import StarIcon from "components/svg/starIcon";

type TagProps = {
  title: string;
};

const Tag = ({ title }: TagProps) => {
  return (
    <div className="rounded-2xl px-3 py-2 bg-[#EDEDED] text-[#4F4F4F] text-xs mr-2 mb-3">
      {title}
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div className="px-4 lg:px-8 xl:px-12 py-6 lg:py-8 rounded-lg bg-white">
      <div className="w-full flex flex-row flex-wrap">
        <div className="w-full md:w-8/12 lg:w-9/12">
          <div className="flex flex-col md:flex-row flex-wrap">
            <div className="w-4/12">
              <div className="w-10/12">
                <img
                  src={VendorImg}
                  alt="Vendor"
                  className="object-contain mx-auto"
                />
              </div>
              <h2 className="mt-6 text-base lg:text-lg xl:text-xl font-bold text-default">
                Caterpillar (CAT)
              </h2>
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <div className="">
                <p className="text-sm lg:text-sm-15 text-[#B1BFD9]">
                  Item tags
                </p>
                <div className="mt-4 flex flex-wrap">
                  <Tag title="Boom lift" />
                  <Tag title="Scissor Lift" />
                  <Tag title="Forklift" />
                  <Tag title="Boom lift" />
                  <Tag title="Scissor Lift" />
                  <Tag title="Forklift" />
                </div>
              </div>
              <div className="pt-4">
                <p className="text-sm lg:text-sm-15 text-[#B1BFD9]">Rating</p>
                <div className="mt-2 flex flex-wrap">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>

              <div className="flex mt-4">
                <button
                  type="button"
                  className="bg-primary text-white border-primary hover:bg-[#073CA1] block px-6 h-10 lg:h-12 font-semibold text-sm md:text-sm-15 lg:text-base w-auto rounded-md border-[2px] focus:outline-none transition-all ease-in-out duration-200"
                >
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0 w-full md:w-auto md:flex-1 flex justify-end">
          <div className="flex mt-4">
            <button
              type="button"
              className="bg-primary text-white border-primary hover:bg-[#073CA1] block px-6 h-10 lg:h-12 font-semibold text-sm md:text-sm-15 lg:text-base w-auto rounded-md border-[2px] focus:outline-none transition-all ease-in-out duration-200"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
