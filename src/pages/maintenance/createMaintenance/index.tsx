import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CorrectiveMaintenanceForm from "./correctiveMaintenanceForm";
import PreventiveMaintenanceForm from "./preventiveMaintenanceForm";
import ChangeManagementForm from "./changeManagementForm";

const CreateMaintenance = () => {
  const location = useLocation();

  const [type, setType] = useState("");

  useEffect(() => {
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
      case "change-management":
        return <ChangeManagementForm />;

      default:
        return <CorrectiveMaintenanceForm />;
    }
  };

  return (
    <section className="relative h-full pt-4">{renderScreen(type)}</section>
  );
};

export default CreateMaintenance;
