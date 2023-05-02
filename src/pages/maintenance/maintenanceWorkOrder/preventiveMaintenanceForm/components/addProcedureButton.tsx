import React, { useState } from "react";
import CreateProcedureModal from "./createProcedureModal";

const AddProcedureButton = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="mb-8 relative">
      <button
        type="button"
        onClick={handleShowOptions}
        className="focus:outline-none text-lg lg:text-xl font-semibold text-primary"
      >
        Add procedure
      </button>

      {showOptions && (
        <div
          onMouseLeave={() => setShowOptions(false)}
          className="absolute top-8 z-10 left-0 px-4 pt-4 pb-8 rounded-lg bg-white shadow w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12"
        >
          <ul className="list-none space-y-3 text-sm">
            <li>Prcd 201</li>
            <li>Prcd 203</li>
            <li>Prcd 205</li>
          </ul>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => setShowCreateModal(!showCreateModal)}
              className="text-primary focus:outline-none text-sm font-semibold"
            >
              Create new procedure
            </button>
          </div>
        </div>
      )}

      {/* create procedure modal */}
      <CreateProcedureModal
        open={showCreateModal}
        handleClose={() => setShowCreateModal(false)}
      />
    </div>
  );
};

export default AddProcedureButton;
