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

type ListCardProps = {
  image?: string;
};

const ListCard = ({ image }: ListCardProps) => {
  return (
    <div className="relative flex flex-row flex-wrap items-center bg-white pl-4 pr-4 lg:pr-6 py-4 rounded-lg">
      <div className="w-20 h-20 object-contain">
        <img
          src={image || VendorImg}
          alt="Vendor"
          className="object-contain w-20 h-20 mx-auto"
        />
      </div>
      <div className="flex-1 md:pl-4 pt-6 md:pt-0 flex items-center justify-between">
        <Link
          to="/marketplace/vendor1"
          className="text-base lg:text-lg xl:text-xl font-semibold text-default hover:text-primary"
        >
          Caterpillar (CAT)
        </Link>

        <div className="mt-4 md:mt-2 flex flex-wrap">
          <Tag title="Boom lift" />
          <Tag title="Scissor Lift" />
          <Tag title="Forklift" />
        </div>
      </div>

      <div className="w-full md:w-3/12 mt-4 md:mt-0 flex justify-end">
        <Link
          to="/marketplace/vendor1"
          className="text-[10px] lg:text-sm font-semibold text-white bg-primary px-4 py-2 rounded-lg"
        >
          View
        </Link>
      </div>
    </div>
  );
};

type Props = {
  displayType: string;
};

const VendorListingSection = ({ displayType }: Props) => {
  return (
    <div className="w-full md:w-8/12 lg:w-9/12 lg:pl-6">
      {displayType === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          <Card image={VendorImg} />
          <Card image={VendorImg2} />
          <Card image={VendorImg3} />
          <Card image={VendorImg} />
          <Card image={VendorImg2} />
          <Card image={VendorImg3} />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-y-6">
          <ListCard image={VendorImg} />
          <ListCard image={VendorImg2} />
          <ListCard image={VendorImg3} />
          <ListCard image={VendorImg} />
          <ListCard image={VendorImg2} />
          <ListCard image={VendorImg3} />
        </div>
      )}
    </div>
  );
};

export default VendorListingSection;
