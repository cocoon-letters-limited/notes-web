import React from "react";
import ActionButtonSection from "./components/actionButtonSection";
import TabSection from "./components/tabSection";

const DevCentre = () => {
  return (
    <section className="relative h-full pt-4">
      <div className="w-full flex flex-wrap flex-col lg:flex-row lg:justify-between">
        <ActionButtonSection />
        <TabSection />
      </div>
    </section>
  );
};

export default DevCentre;
