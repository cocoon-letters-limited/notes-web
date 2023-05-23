import React, { useState } from "react";
import OverviewSection from "./components/overviewSection";
import ItemsListingSection from "./components/itemsListingSection";
import TabListSection from "./components/tabListSection";

const VendorDetails = () => {
  const [selectedTab, setSelectedTab] = useState("Items");

  const tabList = [
    "Items",
    "Ongoing orders",
    "Order Hsitory",
    "Invoice",
    "Reviews",
  ];

  const handleChangeTab = (val: string) => {
    setSelectedTab(val);
  };

  const renderScreen = () => {
    if (selectedTab === "Items") {
      return <ItemsListingSection />;
    }
    // if (selectedTab === "Ongoing orders") {
    //   return <OverviewSection />;
    // }
    // if (selectedTab === "Order Hsitory") {
    //   return <OverviewSection />;
    // }
    // if (selectedTab === "Invoice") {
    //   return <OverviewSection />;
    // }
    // if (selectedTab === "Reviews") {
    //   return <OverviewSection />;
    // }

    return null;
  };

  return (
    <section className="relative h-full pt-4">
      <div className="mt-6">
        <OverviewSection />

        <TabListSection
          tabList={tabList}
          selectedTab={selectedTab}
          onSelectedTab={handleChangeTab}
        />

        <div className="mt-6">{renderScreen()}</div>
      </div>
    </section>
  );
};

export default VendorDetails;
