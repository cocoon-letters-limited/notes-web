import ButtonGroup from "components/elements/button";
import InputGroup from "components/elements/input";
import SelectGroup from "components/elements/select";
import TextareaGroup from "components/elements/textarea";
import MainModal from "components/modals/mainModal";
import React from "react";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const NewNoteModal = ({ open, handleClose }: Props) => {
  return (
    <MainModal title="Add Note" open={open} handleClose={handleClose}>
      <form>
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

        <button
          type="button"
          className="mb-6 text-sm-15 lg:text-base text-primary font-medium"
        >
          Add new category &nbsp;+
        </button>
        <InputGroup type="text" label="Title" placeholder="" />
        <TextareaGroup label="Summary" placeholder="" />
        <SelectGroup
          label="Select Machine"
          placeholder="Select"
          options={[
            {
              label: "Engineering Note",
              value: "Engineering Note",
            },
          ]}
        />
        <SelectGroup
          label="Select Material"
          placeholder="Select"
          options={[
            {
              label: "Engineering Note",
              value: "Engineering Note",
            },
          ]}
        />
        <SelectGroup
          label="Select Workforce"
          placeholder="Select"
          options={[
            {
              label: "Engineering Note",
              value: "Engineering Note",
            },
          ]}
        />
        <InputGroup type="text" label="Add tags(use “@” sign)" placeholder="" />

        <div className="mt-6 space-y-6 lg:space-y-8">
          <ButtonGroup title="Create Note" />
        </div>
      </form>
    </MainModal>
  );
};

export default NewNoteModal;
