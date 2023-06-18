import MainModal from "components/modals/mainModal";
import React from "react";
import SelectGroup from "components/elements/select";
import ButtonGroup from "components/elements/button";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const AddVendorModal = ({ open, handleClose }: Props) => {
  return (
    <MainModal title="Add Vendor" open={open} handleClose={handleClose}>
      <form>
        <SelectGroup
          label="Vendor"
          placeholder="Select"
          options={[
            {
              label: "Engineering Note",
              value: "Engineering Note",
            },
          ]}
        />

        <div className="mt-24 space-y-6 lg:space-y-8">
          <ButtonGroup title="Submit" />
        </div>
      </form>
    </MainModal>
  );
};

export default AddVendorModal;
