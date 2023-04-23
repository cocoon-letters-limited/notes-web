import React, { useState } from "react";
import LeftContainer from "./components/leftContainer";
import SiteMap from "./components/siteMap";
import Tab from "./components/tab";
import BioScreen from "./screens/bioScreen";
import IntegrityScreen from "./screens/integrityScreen";
import VendorScreen from "./screens/vendorScreen";

const MaterialProfile = () => {
  const [selectedTab, setSelectedTab] = useState("Bio");

  const handleChangeTab = (value: string) => {
    setSelectedTab(value);
  };

  const renderScreenBasedOnSelectedTab = (selectedValue: string) => {
    switch (selectedValue) {
      case "Bio":
        return <BioScreen />;

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
          <Tab selectedTab={selectedTab} handleChangeTab={handleChangeTab} />
          <div className="relative">
            {renderScreenBasedOnSelectedTab(selectedTab)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialProfile;
