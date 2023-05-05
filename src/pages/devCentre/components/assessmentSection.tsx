import React from "react";
import AssessmentCard from "./assessmentCard";

const AssestmentSection = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gapx-4 lg:gap-x-6 xl:gap-x-8 gap-y-8">
      <AssessmentCard />
      <AssessmentCard />
      <AssessmentCard />
      <AssessmentCard />
      <AssessmentCard />
      <AssessmentCard />
    </div>
  );
};

export default AssestmentSection;
