import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./header";
import DashboardSidebar from "./sidebar";

const DashboardLayout = () => {
  return (
    <main className="h-full w-full relative bg-[#F6F7FB] px-4 pt-6 pb-12 font-serif">
      <div className="flex flex-row">
        <DashboardSidebar />

        <div className="flex-1 md:pl-7">
          <DashboardHeader />

          <div className="relative">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
