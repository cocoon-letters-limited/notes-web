import GoBackButton from "components/blocks/goBackButton";
import ButtonGroup from "components/elements/button";
import InputGroup from "components/elements/input";
import TextareaGroup from "components/elements/textarea";
import React, { useState } from "react";
import SendModal from "./sendModal";

const VendorCreateOrder = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="mt-4 mb-6 flex flex-row flex-wrap">
        <div className="w-full lg:w-9/12 flex flex-row items-center flex-wrap">
          <GoBackButton title="Work Order" />
        </div>
      </div>
      <div className="mt-8 bg-white rounded-md pt-6 lg:pt-8 pb-16 px-4">
        <div className="w-full md:w-11/12 mx-auto">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
              <InputGroup type="text" label="Group Number:" placeholder="" />
              <InputGroup type="text" label="Originator:" placeholder="" />
              <InputGroup type="text" label="IWO Number:" placeholder="" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
              <InputGroup
                type="text"
                label="Purchase Priority:"
                placeholder=""
              />
              <InputGroup type="text" label="Cost centre:" placeholder="" />
              <InputGroup type="text" label="Date required:" placeholder="" />
            </div>

            <TextareaGroup label="Cost centre description:" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
              <InputGroup type="text" label="Division:" placeholder="" />
              <InputGroup type="text" label="Charge code:" placeholder="" />
              <InputGroup type="text" label="Requisition for:" placeholder="" />
            </div>

            <TextareaGroup label="Charge code description:" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
              <InputGroup type="text" label="Team:" placeholder="" />
              <InputGroup
                type="text"
                label="Assigned to (Buyer):"
                placeholder=""
              />
              <InputGroup type="text" label="Vendor code:" placeholder="" />
            </div>

            <TextareaGroup label="Comments:" />

            <div className="flex flex-row justify-end">
              <div className="w-40">
                <ButtonGroup
                  title="Raise"
                  type="button"
                  onClick={() => setShowModal(!showModal)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      <SendModal open={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};

export default VendorCreateOrder;
