/* eslint-disable no-plusplus */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RecordedVideoDetails from "./components/recordedVideoDetails";
import WatchVideo from "./components/recordedVideoDetails/watchVideo";
import AssessmentDetails from "./components/assessmentDetails";

const DevCentreDetails = () => {
  const location = useLocation();

  const [slugData, setSlugData] = useState({});

  useEffect(() => {
    const splitSlugData = location?.search?.slice(1)?.split("&");
    const type = location?.pathname?.slice(12);

    let newObject = {
      type,
    };

    for (let i = 0; i < splitSlugData?.length; i++) {
      const splitData = splitSlugData[i]?.split("=");

      newObject = {
        ...newObject,
        [splitData[0]]: splitData[1],
      };
    }
    setSlugData(newObject);
  }, [location]);

  const renderScreen = (obj: any) => {
    if (obj?.type === "recorded" && obj?.["watch-video"] === "true") {
      return <WatchVideo />;
    }
    if (obj?.type === "recorded") {
      return <RecordedVideoDetails />;
    }

    if (obj?.type === "assessment") {
      return <AssessmentDetails />;
    }

    return null;
  };

  return <>{renderScreen(slugData)}</>;
};

export default DevCentreDetails;
