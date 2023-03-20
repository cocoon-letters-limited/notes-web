import DropDown from "components/elements/dropdown";
import React, { useState } from "react";
import SummaryCard from "./components/summaryCard";
import summaryData from "./data";

const SummarySection = () => {
  const options = ["Production", "Maintenance", "Assets", "Finance"];
  const daysOptions = ["7", "30", "90"];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [selectedSummaryData, setSelectedSummaryData] = useState<
    | {
        id: number;
        color: string;
        icon: JSX.Element;
        name: string;
        value: string;
        unit: string;
        status: string;
        day?: string | undefined;
      }[]
    | undefined
  >(summaryData[0]?.summaryData);

  const handleClickOption = (option: string) => {
    setSelectedOption(option);
    setSelectedSummaryData(
      summaryData?.find((a) => a.summaryTitle?.includes(option))?.summaryData,
    );
  };

  const handleClickDayOption = (option: string, id: number) => {
    setSelectedSummaryData(
      selectedSummaryData?.map((a) =>
        a?.id === id
          ? {
              ...a,
              day: option,
            }
          : {
              ...a,
            },
      ),
    );
  };

  return (
    <div className="relative mt-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h3 className="text-lg lg:text-xl text-textColor">
          Summary of your current work status
        </h3>

        <div className="text-base lg:text-lg text-primary">
          <DropDown
            selected={selectedOption}
            options={options}
            onClick={handleClickOption}
            iconColor="primary"
          />
        </div>
      </div>

      <div className="mt-6 lg:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {selectedSummaryData?.map((data) => (
          <SummaryCard
            key={data?.id}
            name={data?.name}
            value={data?.value || "0"}
            unit={data?.unit || ""}
            icon={data?.icon}
            color={data?.color}
            status={data?.status}
            selectedOption={data?.day || "7"}
            options={daysOptions}
            onClick={(value) => handleClickDayOption(value, data?.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SummarySection;
