import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TabSection from "./components/tabSection";
import SummarySection from "./components/summarySection";

const Dashboard = () => {
  const location = useLocation();
  const tabList = ["Overview", "Map", "Notes"];
  const [currentTab, setCurrentTab] = useState("");

  useEffect(() => {
    const search = location?.search;
    if (typeof search === "string" && search?.includes("?tab=")) {
      setCurrentTab(search?.replace("?tab=", ""));
    } else {
      setCurrentTab("overview");
    }
  }, [location]);

  return (
    <section className="relative h-full">
      <TabSection currentTab={currentTab} tabList={tabList} />
      <SummarySection />
    </section>
  );
};

export default Dashboard;
