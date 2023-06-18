import GoBackButton from "components/blocks/goBackButton";
import React from "react";
import Vendorimg from "assets/images/webp/vendors/itemDetail.webp";

type RowProps = {
  name: string;
  value: string;
};
const Row = ({ name, value }: RowProps) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between text-sm-15 md:text-base">
      <p className="font-semibold">{name}</p>
      <p className="md:text-right text-[#3F3F3F]">{value}</p>
    </div>
  );
};

const VendorItemDetails = () => {
  return (
    <div>
      <div className="mt-4 mb-6 flex flex-row flex-wrap">
        <div className="w-full lg:w-9/12 flex flex-row items-center flex-wrap">
          <GoBackButton title="Item Details" />
        </div>
      </div>
      <div className="mt-8 bg-white rounded-lg">
        <div className="flex flex-wrap flex-row">
          <div className="w-full md:w-6/12 lg:w-7/12">
            <img src={Vendorimg} alt="" />
          </div>
          <div className="mt-6 lg:mt-0 w-full md:w-5/12 px-6 lg:px-8 xl:px-12">
            <div className="pt-4 lg:pt-6 pb-4">
              <h3 className="font-semibold text-default text-xl lg:text-2xl hover:text-primary">
                Forklift
              </h3>
              <p className="mt-2 text-primary font-semibold text-base lg:text-lg">
                NGN 7.3m
              </p>

              <div className="mt-8 flex flex-col space-y-2 pb-4">
                <Row name="Article nr." value="FK-20R6656" />
                <Row name="Group:" value="Used Parts EnginepowerHolland" />
                <Row name="Status:" value="On Stock" />
                <Row name="Model:" value="C18 SHORT BLOCK" />
                <Row name="Brand:" value="Caterpillar" />
                <Row name="Used:" value="No" />
                <Row name="New:" value="Yes" />
                <Row name="Serial number:" value="GEX5335" />
                <Row name="Arrangement number:" value="367-2208" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorItemDetails;
