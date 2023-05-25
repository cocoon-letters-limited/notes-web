import React, { useState } from "react";
import VendorTabListSection from "./components/vendorTabListSection";
import VendorScreen from "./components/screens/vendorScreen";

const Vendor = () => {
  const tabList = [
    "Dashboard",
    "Balance sheet",
    "Orders",
    "Invoices",
    "Vendor",
    "Payroll",
  ];

  const [selectedTab, setSelectedTab] = useState("Vendor");

  const handleChangeTab = (val: string) => {
    setSelectedTab(val);
  };

  const renderScreen = () => {
    switch (selectedTab) {
      case "Dashboard":
        return null;
      case "Balance sheet":
        return null;
      case "Orders":
        return null;
      case "Invoices":
        return null;
      case "Vendor":
        return <VendorScreen />;
      case "Payroll":
        return null;
      default:
        return null;
    }
  };

  return (
    <section className="relative h-full pt-4">
      <VendorTabListSection
        tabList={tabList}
        selectedTab={selectedTab}
        onSelectedTab={handleChangeTab}
      />

      {renderScreen()}
    </section>
  );
};

export default Vendor;
