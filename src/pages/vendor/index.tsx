import React, { useState } from "react";
import VendorTabListSection from "./components/vendorTabListSection";
import VendorScreen from "./components/screens/vendorScreen";
import InvoicesScreen from "./components/screens/invoicesScreen";
import PayrollScreen from "./components/screens/payrollScreen";
import OrdersScreen from "./components/screens/ordersScreen";

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
        return <OrdersScreen />;
      case "Invoices":
        return <InvoicesScreen />;
      case "Vendor":
        return <VendorScreen />;
      case "Payroll":
        return <PayrollScreen />;
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
