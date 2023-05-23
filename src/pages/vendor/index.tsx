import React from "react";
import CategoriesSection from "./components/categoriesSection";
import VendorListingSection from "./components/vendorListingSection";

const Vendor = () => {
  return (
    <section className="relative h-full pt-4">
      <h1 className="text-default font-bold text-xl lg:text-2xl xl:text-3xl">
        Vendor
      </h1>

      <div className="mt-6 flex flex-wrap">
        <CategoriesSection />
        <VendorListingSection />
      </div>
    </section>
  );
};

export default Vendor;
