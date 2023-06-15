import React, { useState } from "react";
import BioScreen from "pages/material/materialProfile/screens/bioScreen";
import Breadcrumbs from "components/elements/breadcrumb";
import Tabs from "components/elements/Tabs";
import Profile from "./components/profile";
import WorkforceBio from "./components/bio/workforceBioView";
import Relationships from "./components/relationships";
// import WorkforceTraning from "./components/Training";
import Workfocefiles from "./components/files";
import Timesheet from "./components/Timesheet";
import WorkForceIntegrity from "./components/Integrity";
import WorkforceTraning from "./components/Training";

function ManpowerLayout() {
  // const [showEdit, setShowEdit] = useState(false);
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
        return <WorkforceBio />;

      case "Integrity":
        return <WorkForceIntegrity />;

      case "Timesheet":
        return <Timesheet />;

      case "Training":
        return <WorkforceTraning />;

      case "see":
        return <BioScreen handleShowEdit={handleShowEdit} />;

      case "Files":
        return <Workfocefiles />;

      case "Relationships":
        return <Relationships />;
      default:
        return null;
    }
  };

  return (
    <section className="relative h-full">
      <Breadcrumbs
        fistTitle="Workforce"
        secoundTitle="Profile"
        privRoute="/manpower"
      />

      <div className="flex flex-row flex-wrap mt-6">
        <Profile />
        <div className="mt-6 lg:mt-0 w-full lg:flex-1 lg:ml-4 bg-white rounded-xl pt-8 pb-12 px-6 lg:px-8">
          <Tabs
            tabList={[
              "Bio",
              "Timesheet",
              "Integrity",
              "Relationships",
              "Training",
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

export default ManpowerLayout;
