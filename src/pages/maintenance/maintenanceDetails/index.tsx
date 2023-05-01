import React, { useState } from "react";
import TopSection from "./components/topSection";
import TabSection from "./components/tabSection";
import DescriptionSection from "./components/descriptionSection";
import OrderDetailsSection from "./components/orderDetailsSection";
import EquipmentInfoSection from "./components/equipmentInfoSection";
import WorkDetailsSection from "./components/workDetailsSection";
import CommentsSection from "./components/commentsSection";
import UpdateStatusModal from "./components/updateStatusModal";

const MaintenanceDetails = () => {
  const [showUpdateStatusModal, setShowUpdateStatusModal] = useState(false);
  return (
    <div className="relative h-full">
      <TopSection
        handleShowForm={() => setShowUpdateStatusModal(!showUpdateStatusModal)}
      />
      <TabSection />
      <DescriptionSection />

      <OrderDetailsSection />

      <EquipmentInfoSection />

      <WorkDetailsSection />

      <CommentsSection />

      {/* Update status Modal */}
      <UpdateStatusModal
        open={showUpdateStatusModal}
        handleClose={() => setShowUpdateStatusModal(false)}
      />
    </div>
  );
};

export default MaintenanceDetails;
