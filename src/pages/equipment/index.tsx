import React from "react";
import { Outlet } from "react-router-dom";
// import EquipmentList from "./EquipmentList";
// import EquipmentProfileLaypout from "./equipmentProfile";
//
function Equipment() {
  return (
    <div className=" ">
      <Outlet />
      {/* <EquipmentList /> */}
      {/* <EquipmentProfileLaypout /> */}
    </div>
  );
}

export default Equipment;
