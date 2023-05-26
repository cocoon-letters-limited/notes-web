import ButtonGroup from "components/elements/button";
import CheckboxGroup from "components/elements/checkbox";
import InputGroup from "components/elements/input";
import RadioButtonGroup from "components/elements/radioButton";
import MainModal from "components/modals/mainModal";
import React from "react";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const SendModal = ({ open, handleClose }: Props) => {
  return (
    <MainModal title="Send order" open={open} handleClose={handleClose}>
      <div className="">
        <div className="flex flex-col space-y-3 mb-8">
          <RadioButtonGroup label="Send to marketplace" />
          <RadioButtonGroup label="Send to specific vendors" />
        </div>
        <CheckboxGroup label="Tender(criteria)" />
        <div className="mt-4">
          <InputGroup type="text" label="Maximum price:" placeholder="" />
          <InputGroup type="text" label="Maximimum duration" placeholder="" />
        </div>

        <div className="mt-6 lg:mt-8 space-y-6 lg:space-y-8">
          <ButtonGroup title="Send" />
        </div>
      </div>
    </MainModal>
  );
};

export default SendModal;
