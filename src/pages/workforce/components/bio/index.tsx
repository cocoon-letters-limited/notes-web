import React, { useState } from "react";
import WorkforceBioView from "./workforceBioView";
import WorkforceeEditeBio from "./WorkforceeEditeBio";

function WorkforceBio() {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div>
      {showEdit ? (
        <WorkforceBioView onChildClick={setShowEdit(false)} />
      ) : (
        <WorkforceeEditeBio onChildClick={setShowEdit(true)} />
      )}
    </div>
  );
}

export default WorkforceBio;
