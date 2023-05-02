import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./header";
import DashboardSidebar from "./sidebar";

const DashboardLayout = () => {
  return (
    <main className="h-full w-full relative bg-[#F6F7FB] lg:px-4 pt-6 pb-12 font-serif">
      <div className="flex flex-row">
        <DashboardSidebar />

        <div className="flex-1 pl-4 md:pl-7 pr-4 md:pr-6 overflow-x-hidden">
          <DashboardHeader />

          <div className="relative pt-4 ">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
