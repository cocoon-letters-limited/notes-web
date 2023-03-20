import React from "react";
import DiscoveryCallCard from "./components/discoveryCallCard";
import WorkScheduleCard from "./components/workScheduleCard";
import WorkOrderCard from "./components/workOrderCard";

const WorkSection = () => {
  return (
    <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DiscoveryCallCard />
      <WorkScheduleCard />
      <WorkOrderCard />
    </div>
  );
};

export default WorkSection;
