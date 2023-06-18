import React from "react";
import VendorImg from "assets/images/webp/vendors/item.webp";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="p-4 bg-white rounded-lg ">
      <div className="">
        <img src={VendorImg} alt="" className="rounded-lg" />
      </div>
      <div className="pt-4 lg:pt-6 pb-4">
        <Link to="/marketplace/vendor1/items/item1">
          <h3 className="font-semibold text-default text-lg lg:text-xl hover:text-primary">
            Forklift
          </h3>
        </Link>
        <p className="mt-2 text-primary font-semibold text-base lg:text-lg">
          NGN 7.3m
        </p>
      </div>
    </div>
  );
};

const ItemsListingSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ItemsListingSection;
