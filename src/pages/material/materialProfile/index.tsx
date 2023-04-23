import React, { useState } from "react";
import LeftContainer from "./components/leftContainer";
import SiteMap from "./components/siteMap";
import Tab from "./components/tab";
import BioScreen from "./screens/bioScreen";
import IntegrityScreen from "./screens/integrityScreen";
import VendorScreen from "./screens/vendorScreen";
import EditScreen from "./screens/editScreen";

const MaterialProfile = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Bio");
  const [disableTab, setDisableTab] = useState(false);

  const handleShowEdit = () => {
    setDisableTab(true);
    setShowEdit(!showEdit);
  };

  const handleChangeTab = (value: string) => {
    setSelectedTab(value);
  };

  const renderScreenBasedOnSelectedTab = (selectedValue: string) => {
    switch (selectedValue) {
      case "Bio":
        if (showEdit) {
          return <EditScreen />;
        }
        return <BioScreen handleShowEdit={handleShowEdit} />;

      case "Integrity":
        return <IntegrityScreen />;

      case "Vendor":
        return <VendorScreen />;

      default:
        return null;
    }
  };

  return (
    <section className="relative h-full">
      <SiteMap />

      <div className="flex flex-row flex-wrap mt-6">
        <LeftContainer />
        <div className="mt-6 lg:mt-0 w-full lg:flex-1 lg:ml-4 bg-white rounded-xl pt-8 pb-12 px-6 lg:px-8">
          <Tab
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
};

export default MaterialProfile;
