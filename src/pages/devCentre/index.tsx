import React, { useState } from "react";
import ActionButtonSection from "./components/actionButtonSection";
import TabSection from "./components/tabSection";
import RecordedSection from "./components/recordedSection";
import AssestmentSection from "./components/assessmentSection";
import LiveTrainingSection from "./components/liveTrainingSection";
import CalendarSection from "./components/calendarSection";

const DevCentre = () => {
  const [selectedTab, setSelectedTab] = useState("Calendar");

  const renderScreen = (val: string) => {
    switch (val) {
      case "Calendar":
        return <CalendarSection />;
      case "Live training":
        return <LiveTrainingSection />;
      case "Recorded":
        return <RecordedSection />;
      case "Assessment":
        return <AssestmentSection />;
      default:
        return <RecordedSection />;
    }
  };

  return (
    <section className="relative h-full pt-4">
      <div className="w-full flex flex-wrap flex-col lg:flex-row lg:justify-between">
        <ActionButtonSection />
        <TabSection selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>

      {renderScreen(selectedTab)}
    </section>
  );
};

export default DevCentre;
