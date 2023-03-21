import ConstructionWorkerIcon from "components/svg/constructionWorkerIcon";
import DeadlineIcon from "components/svg/deadlineIcon";
import NetworkSettingIcon from "components/svg/networkSettingIcon";
import StatusIcon from "components/svg/statusIcon";
import TimeCircleIcon from "components/svg/timeCircleIcon";
import UserIcon from "components/svg/userIcon";
import React, { ReactElement } from "react";

type CardProps = {
  icon: ReactElement;
  title: string;
  content: string | ReactElement;
};

const Card = ({ icon, title, content }: CardProps) => {
  return (
    <div className="">
      <div className="text-primary font-bold text-sm lg:text-sm-15 flex items-center">
        <span>{icon}</span>
        <span className="pl-1">{title}</span>
      </div>
      <div className="mt-2 text-sm-15 lg:text-base text-[#051738]">
        <p>{content}</p>
      </div>
    </div>
  );
};

const WorkOrderCard = () => {
  return (
    <div className="relative bg-white rounded-xl h-[27rem] overflow-auto px-6 pt-6">
      <div className="flex flex-row flex-wrap justify-between items-center">
        <p className="font-bold text-base lg:text-lg text-[#230B34]">
          Work Order
        </p>
        <div className="bg-white border border-[#B1BFD9] text-[#08B919] font-semibold px-4 py-1 rounded text-xs lg:text-sm">
          Ongoing
        </div>
      </div>

      <div className="mt-3 flex flex-row flex-wrap justify-between items-center">
        <div className="">
          <p className="font-bold text-sm-15 lg:text-base text-[#230B34]">
            Fix burning gas leakage
          </p>
          <p className="mt-2 text-primary text-xs lg:text-sm">
            #WO-2021-08-02-0003
          </p>
        </div>
        <div className="">
          <div className="bg-[#F92F1B] text-white font-semibold px-4 py-1 rounded text-xs lg:text-sm">
            High
          </div>
        </div>
      </div>
      <div className="mt-4 lg:mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
        <Card
          icon={<TimeCircleIcon />}
          title="Planned Duration"
          content="6 Day(s) started (2/8/21  at 10:23pm)"
        />
        <Card
          icon={<UserIcon />}
          title="Team"
          content={
            <span className="text-primary underline underline-offset-4">
              Maintenance
            </span>
          }
        />
        <Card
          icon={<NetworkSettingIcon />}
          title="Equipment"
          content={
            <span className="text-primary underline underline-offset-4">
              heat exchanger kettle reboiler
            </span>
          }
        />
        <Card
          icon={<ConstructionWorkerIcon />}
          title="Work Group"
          content="Maintenance"
        />
        <Card icon={<DeadlineIcon />} title="Deadline" content="8/8/21" />
        <Card icon={<StatusIcon />} title="Status" content="Pending" />
      </div>
    </div>
  );
};

export default WorkOrderCard;
