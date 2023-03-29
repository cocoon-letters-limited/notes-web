import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TabSection from "./components/tabSection";
import SummarySection from "./components/summarySection";
import WorkSection from "./components/workSection";
import CriticalSummarySection from "./components/criticalSummarySection";
import MapSection from "./components/mapSection";
import NoteSection from "./components/noteSection";

const OverviewScreen = () => {
  return (
    <>
      <SummarySection />
      <WorkSection />
      <CriticalSummarySection />
    </>
  );
};

const MapScreen = () => {
  return <MapSection />;
};

const NoteScreen = () => {
  return <NoteSection />;
};

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

  const renderBasedOnSelectedTab = () => {
    switch (currentTab) {
      case "overview":
        return <OverviewScreen />;
      case "map":
        return <MapScreen />;
      case "notes":
        return <NoteScreen />;
      default:
        return <OverviewScreen />;
    }
  };

  return (
    <section className="relative h-full">
      <TabSection currentTab={currentTab} tabList={tabList} />
      {renderBasedOnSelectedTab()}
    </section>
  );
};

export default Dashboard;
