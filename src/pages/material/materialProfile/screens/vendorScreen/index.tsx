import StarIcon from "components/svg/starIcon";
import React, { useState } from "react";
import AddVendorModal from "./addVendorModal";

const Row = () => {
  return (
    <div className="grid grid-cols-5 gap-6 rounded-xl py-6 px-6 text-sm overflow-x-auto text-center border-b border-[#F6F7FB]">
      <p className="">CAT Contractors</p>
      <p className="">Equipments</p>
      <p className="">23, Idiaraba str, Lag</p>
      <p className="">09037281982</p>
      <p className="mx-auto flex flex-row">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </p>
    </div>
  );
};

const VendorScreen = () => {
  const [showAddVendorModal, setShowAddVendorModal] = useState(false);

  return (
    <div className="mt-4">
      <div className="flex flex-row justify-end">
        <button
          type="button"
          onClick={() => setShowAddVendorModal(!showAddVendorModal)}
          className="focus:outline-none py-4 px-6 lg:px-8 rounded-lg bg-primary text-white text-sm-15 lg:text-base font-semibold"
        >
          Add vendor
        </button>
      </div>

      <div className="mt-6 lg:mt-8">
        <div className="grid grid-cols-5 gap-6 bg-primary rounded-xl py-5 px-6 text-white text-sm overflow-x-auto text-center">
          <p className="">Name</p>
          <p className="">Type</p>
          <p className="">Address</p>
          <p className="">Phone No</p>
          <p className="">Reliability</p>
        </div>
        <div className="">
          <Row />
          <Row />
        </div>
      </div>

      {/* Add vendorModal */}
      <AddVendorModal
        open={showAddVendorModal}
        handleClose={() => setShowAddVendorModal(false)}
      />
    </div>
  );
};

export default VendorScreen;
