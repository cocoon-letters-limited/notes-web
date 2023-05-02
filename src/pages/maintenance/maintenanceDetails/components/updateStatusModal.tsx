import MainModal from "components/modals/mainModal";
import React from "react";
import InputGroup from "components/elements/input";
import SelectGroup from "components/elements/select";
import ButtonGroup from "components/elements/button";
import TextareaGroup from "components/elements/textarea";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const UpdateStatusModal = ({ open, handleClose }: Props) => {
  return (
    <MainModal title="Update status" open={open} handleClose={handleClose}>
      <form>
        <SelectGroup
          label="Status"
          placeholder="Select"
          options={[
            {
              label: "Engineering Note",
              value: "Engineering Note",
            },
          ]}
        />
        <SelectGroup
          label="Category"
          placeholder="Select"
          options={[
            {
              label: "Engineering Note",
              value: "Engineering Note",
            },
          ]}
        />

        <SelectGroup
          label="Sub Category"
          placeholder="Select"
          options={[
            {
              label: "Engineering Note",
              value: "Engineering Note",
            },
          ]}
        />
        <InputGroup type="text" label="Title" placeholder="" />
        <InputGroup type="text" label="Image/Video url" placeholder="" />

        <TextareaGroup label="Summary" placeholder="" />

        <div className="mt-6 space-y-6 lg:space-y-8">
          <ButtonGroup title="Update" />
        </div>
      </form>
    </MainModal>
  );
};

export default UpdateStatusModal;
