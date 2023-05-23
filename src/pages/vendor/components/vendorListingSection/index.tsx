import React from "react";
import VendorImg from "assets/images/webp/vendors/logo1.webp";
import VendorImg2 from "assets/images/webp/vendors/logo2.webp";
import VendorImg3 from "assets/images/webp/vendors/logo3.webp";
import { Link } from "react-router-dom";

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

type CardProps = {
  image?: string;
};

const Card = ({ image }: CardProps) => {
  return (
    <div className="relative flex flex-col bg-white px-4 py-6 rounded-lg">
      <div className="w-full h-[10rem] object-contain">
        <img
          src={image || VendorImg}
          alt="Vendor"
          className="object-contain mx-auto"
        />
      </div>
      <div className="pt-6 lg:pt-8">
        <Link
          to="/marketplace/vendor1"
          className="text-base lg:text-lg xl:text-xl font-semibold text-default hover:text-primary"
        >
          Caterpillar (CAT)
        </Link>

        <div className="mt-4 flex flex-wrap">
          <Tag title="Boom lift" />
          <Tag title="Scissor Lift" />
          <Tag title="Forklift" />
        </div>
      </div>
    </div>
  );
};

const VendorListingSection = () => {
  return (
    <div className="w-full md:w-8/12 lg:w-9/12 lg:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        <Card image={VendorImg} />
        <Card image={VendorImg2} />
        <Card image={VendorImg3} />
        <Card image={VendorImg} />
        <Card image={VendorImg2} />
        <Card image={VendorImg3} />
      </div>
    </div>
  );
};

export default VendorListingSection;
