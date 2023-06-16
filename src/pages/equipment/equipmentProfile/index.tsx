import React, { useState } from "react";
import Breadcrumbs from "components/elements/breadcrumb";
import Profile from "pages/workforce/components/profile";
import Tabs from "components/elements/Tabs";
import BioScreen from "pages/material/materialProfile/screens/bioScreen";
import FilesScreen from "pages/material/materialProfile/screens/filesScreen";
import Integrity from "./integrity/Integrity";
import Bio from "./bio/bio";
import Relationships from "./equipmentRelationship/relationships";
import Hierarchy from "./hierachy";

function EquipmentProfileLaypout() {
  const [selectedTab, setSelectedTab] = useState("Bio");
  const [disableTab, setDisableTab] = useState(false);

  const handleShowEdit = () => {
    setDisableTab(true);
    // setShowEdit(!showEdit);
  };

  const handleChangeTab = (value: string) => {
    setSelectedTab(value);
  };

  const renderScreenBasedOnSelectedTab = (selectedValue: string) => {
    switch (selectedValue) {
      case "Bio":
        return <Bio />;

      case "Integrity":
        return <Integrity />;

      case "Hierarchy":
        return <Hierarchy />;

      case "see":
        return <BioScreen handleShowEdit={handleShowEdit} />;

      case "Files":
        return <FilesScreen />;

      case "Relationships":
        return <Relationships />;
      default:
        return null;
    }
  };

  return (
    <section className="relative h-full">
      <Breadcrumbs
        fistTitle="Machine"
        secoundTitle="Profile"
        privRoute="/machine"
      />

      <div className="flex flex-row flex-wrap mt-6">
        <Profile />
        <div className="mt-6 lg:mt-0 w-full lg:flex-1 lg:ml-4 bg-white rounded-xl pt-8 pb-12 px-6 lg:px-8">
          <Tabs
            tabList={[
              "Bio",
              "Hierarchy",
              "Integrity",
              "Relationships",
              "Files",
            ]}
            selectedTab={selectedTab}
            handleChangeTab={handleChangeTab}
            disableTab={disableTab}
          />
          <div className="relative">
            {renderScreenBasedOnSelectedTab(selectedTab)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EquipmentProfileLaypout;
