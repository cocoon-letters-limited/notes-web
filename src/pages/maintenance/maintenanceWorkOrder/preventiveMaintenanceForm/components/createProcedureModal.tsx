import MainModal from "components/modals/mainModal";
import React from "react";
import InputGroup from "components/elements/input";
import ButtonGroup from "components/elements/button";
import TextareaGroup from "components/elements/textarea";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const CreateProcedureModal = ({ open, handleClose }: Props) => {
  return (
    <MainModal title="Create procedure" open={open} handleClose={handleClose}>
      <form>
        <InputGroup type="text" label="Title" placeholder="" />
        <TextareaGroup label="Description" placeholder="" rows={3} />

        <p className="text-sm-15 font-semibold text-[#8B95A9] mb-4 uppercase">
          Steps
        </p>

        <div className="">
          <p className="text-base font-semibold mb-4 underline">Step 1:</p>
          <InputGroup type="text" label="Title" placeholder="" />
          <TextareaGroup label="Description" placeholder="" rows={3} />
        </div>

        <button
          type="button"
          className="focus:outline-none text-primary font-semibold text-sm-15"
        >
          Add step +
        </button>

        <div className="mt-12 space-y-6 lg:space-y-8">
          <ButtonGroup title="Save procedure" />
        </div>
      </form>
    </MainModal>
  );
};

export default CreateProcedureModal;
