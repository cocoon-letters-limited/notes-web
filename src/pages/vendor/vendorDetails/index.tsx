import React, { useState } from "react";
import OverviewSection from "./components/overviewSection";
import ItemsListingSection from "./components/itemsListingSection";
import TabListSection from "./components/tabListSection";
import OngoingOrderSection from "./components/ongoingOrderSection";
import OrderHistory from "./components/orderHistory";
import ReviewsSection from "./components/reviewsSection";
import InvoiceSection from "./components/invoiceSection";

const VendorDetails = () => {
  const [selectedTab, setSelectedTab] = useState("Items");

  const tabList = [
    "Items",
    "Ongoing orders",
    "Order History",
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
    if (selectedTab === "Ongoing orders") {
      return <OngoingOrderSection />;
    }
    if (selectedTab === "Order History") {
      return <OrderHistory />;
    }
    if (selectedTab === "Invoice") {
      return <InvoiceSection />;
    }
    if (selectedTab === "Reviews") {
      return <ReviewsSection />;
    }

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
