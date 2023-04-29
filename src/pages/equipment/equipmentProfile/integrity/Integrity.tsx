import React from "react";
import EquipmentCard from "pages/dashboard/components/criticalSummarySection/components/equipmentCard";
import { DataCard } from "pages/material/materialProfile/screens/integrityScreen";
import IntegrityTables from "./IntegrityTables";
import IntegrityPopUp from "./integrityPopUp";

function Integrity() {
  return (
    <div>
      <div className="flex justify-between">
        <p>Live Feed from Sensors for various reading of equipment</p>
        <IntegrityPopUp />
      </div>
      <div className="grid grid-cols-4 gap-5">
        <DataCard name="Running Hours" value="225 hrs" color="#E84CD8" />
        <DataCard name="Temperature" value="225 hrs" color="#4C78E8" />
        <DataCard name="Running Hours" value="225 hrs" color="#F16B40" />
        <DataCard name="Running Hours" value="225 hrs" color="#16F62C" />
        <DataCard name="Running Hours" value="225 hrs" color="#E84CD8" />
        <DataCard name="Running Hours" value="225 hrs" color="#4C78E8" />
        <DataCard name="Running Hours" value="225 hrs" color="#F16B40" />
        <DataCard name="Running Hours" value="225 hrs" color="#16F62C" />
      </div>
      <p className="text-blue-700 my-5">Create Procedure</p>
      <div className="grid grid-cols-2">
        <div className="">
          <div className="flex justify-between my-3">
            <p>PM Procedures</p>
          </div>
          <IntegrityTables />
        </div>
        <div className=" px-5">
          <p>Predictive Maintenance</p>
          <EquipmentCard />
        </div>
      </div>
    </div>
  );
}

export default Integrity;
