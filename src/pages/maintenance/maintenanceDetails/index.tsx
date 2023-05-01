import React from "react";
import TopSection from "./components/topSection";
import TabSection from "./components/tabSection";
import DescriptionSection from "./components/descriptionSection";
import OrderDetailsSection from "./components/orderDetailsSection";
import EquipmentInfoSection from "./components/equipmentInfoSection";
import WorkDetailsSection from "./components/workDetailsSection";
import CommentsSection from "./components/commentsSection";

const MaintenanceDetails = () => {
  return (
    <div className="relative h-full">
      <TopSection />
      <TabSection />
      <DescriptionSection />

      <OrderDetailsSection />

      <EquipmentInfoSection />

      <WorkDetailsSection />

      <CommentsSection />
    </div>
  );
};

export default MaintenanceDetails;
