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

const OrderDetailsSection = () => {
  return (
    <section className="mb-4 relative px-4 lg:px-6 pt-6 pb-8 lg:pb-10 rounded-lg bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-12">
        <Card title="Title" content="Doings" />
        <Card title="Work Type" content="CM" />
        <Card
          title="Type"
          content={
            <p className="text-[#F92F1B] bg-[#FFDBE0] px-5 py-1 rounded text-sm font-semibold">
              Hot
            </p>
          }
        />
        <Card
          title="Expert Needed?"
          content={<p className="text-[#FC0808] font-semibold">False</p>}
        />
        <Card
          title="Status"
          content={
            <p className="text-white bg-[#FF0404] px-5 py-1 rounded text-sm font-semibold">
              Closed
            </p>
          }
        />
        <Card title="Discipline" content="Maintenance" />
        <Card title="Planned start" content="12/30/21, 1:00 AM" />
        <Card title="Planned End" content="1/8/22, 1:00 AM" />
        <Card title="Actual start" content="1/8/22, 1:00 AM" />
        <Card title="Actual End" content="1/8/22, 1:00 AM" />
        <Card
          title="Work Safe?"
          content={<p className="text-[#16F62C] font-semibold">True</p>}
        />
        <Card title="Venue" content="PH" />
      </div>
    </section>
  );
};

export default OrderDetailsSection;
