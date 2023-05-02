import StarIcon from "components/svg/starIcon";
import React, { ReactElement } from "react";

type Props = {
  title: string;
  content: ReactElement | string;
};
const Card = ({ title, content }: Props) => {
  return (
    <div className="text-sm-15 lg:text-base">
      <p className="font-semibold">{title}</p>

      <div className="flex mt-2 text-[#3F3F3F]">{content}</div>
    </div>
  );
};

const EquipmentInfoSection = () => {
  return (
    <section className="mb-4 relative px-4 lg:px-6 pt-6 pb-8 lg:pb-10 rounded-lg bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-12">
        <Card title="Name" content="Gate Valve" />
        <Card title="Equipment No" content="ANSI-1500" />
        <Card title="Model" content="2016" />
        <Card
          title="Info Status"
          content={
            <p className="text-[#FF9900] bg-[#FFEACB] px-5 py-1 rounded text-sm font-semibold">
              ASP
            </p>
          }
        />
        <Card title="Owning Department" content="Production" />
        <Card title="Manufacturer" content="DF" />
        <Card title="Level" content="2" />

        <Card
          title="Potential Condition"
          content={
            <div className="flex items-center">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          }
        />
        <Card
          title="Current Condition"
          content={
            <div className="flex items-center">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          }
        />
        <Card
          title="PM Status"
          content={
            <p className="text-white bg-[#FF0404] px-5 py-1 rounded text-sm font-semibold">
              Closed
            </p>
          }
        />
        <Card title="Source" content="Blue" />
        <Card title="Spare" content="Yes" />
        <Card title="Tag No" content="GV-001" />
      </div>
    </section>
  );
};

export default EquipmentInfoSection;
