import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CorrectiveMaintenanceForm from "./correctiveMaintenanceForm";
import PreventiveMaintenanceForm from "./preventiveMaintenanceForm";
import TopSection from "./components/topSection";

const MaintenanceWorkOrder = () => {
  const location = useLocation();

  const [type, setType] = useState("");

  useEffect(() => {
    // TODO: Delete Later /maintenance/12/work-order?type=corrective-maintenance
    if (location?.search) {
      const param = location?.search?.slice(6);
      setType(param);
    }
  }, [location]);

  const renderScreen = (formType: string) => {
    switch (formType) {
      case "corrective-maintenance":
        return <CorrectiveMaintenanceForm />;
      case "preventive-maintenance":
        return <PreventiveMaintenanceForm />;

      default:
        return <CorrectiveMaintenanceForm />;
    }
  };

  return (
    <section className="relative h-full pt-4">
      <TopSection />
      {renderScreen(type)}
    </section>
  );
};

export default MaintenanceWorkOrder;
