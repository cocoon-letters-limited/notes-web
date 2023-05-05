import React from "react";
import RecordedCard from "./recordedCard";

const RecordedSection = () => {
  //   const data = [
  //     {
  //       id: 1,
  //       title: "Digital Marketing Strategy",
  //       author: "Leslie Alexander",
  //       duration: "3hr 46min",
  //     },
  //   ];
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gapx-4 lg:gap-x-6 xl:gap-x-8 gap-y-12">
      <RecordedCard />
    </div>
  );
};

export default RecordedSection;
