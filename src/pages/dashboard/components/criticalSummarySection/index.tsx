import React from "react";
import EquipmentCard from "./components/equipmentCard";
import MaterialCard from "./components/materialCard";
import WorkforceCard from "./components/workforceCard";

const CriticalSummarySection = () => {
  return (
    <div className="relative mt-8 lg:mt-12 bg-white rounded-xl pt-6 px-6 pb-12">
      <h3 className="text-xl lg:text-2xl font-bold text-[#224280]">
        Criticality summary
      </h3>
      <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EquipmentCard />
        <MaterialCard />
        <WorkforceCard />
      </div>
    </div>
  );
};

export default CriticalSummarySection;
