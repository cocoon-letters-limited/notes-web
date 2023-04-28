import React from "react";

import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import EquipmentCard from "pages/dashboard/components/criticalSummarySection/components/equipmentCard";
import IntegrityCard from "./integrityCard";
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
        <IntegrityCard
          childElement={<AccessAlarmIcon />}
          iconColor="red-400"
          title="Running Hours"
          detail="225 hrs"
        />
        <IntegrityCard
          childElement={<AccessAlarmIcon />}
          iconColor="blue-400"
          title="Temperature"
          detail="2"
        />
        <IntegrityCard
          childElement={<AccessAlarmIcon />}
          iconColor="red-400"
          title="Running Hours"
          detail="225 hrs"
        />
        <IntegrityCard
          childElement={<AccessAlarmIcon />}
          iconColor="green-600"
          title="Running Hours"
          detail="225 hrs"
        />
        <IntegrityCard
          childElement={<AccessAlarmIcon />}
          iconColor="red-400"
          title="Running Hours"
          detail="225 hrs"
        />
        <IntegrityCard
          childElement={<AccessAlarmIcon />}
          iconColor="blue-400"
          title="Temperature"
          detail="2"
        />
        <IntegrityCard
          childElement={<AccessAlarmIcon />}
          iconColor="red-400"
          title="Running Hours"
          detail="225 hrs"
        />
        <IntegrityCard
          childElement={<AccessAlarmIcon />}
          iconColor="green-600"
          title="Running Hours"
          detail="225 hrs"
        />
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
