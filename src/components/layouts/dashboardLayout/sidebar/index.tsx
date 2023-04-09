import React, { useState } from "react";
import Logo from "assets/NOTEOPX.png";
import { useLocation } from "react-router-dom";
import SidebarMenuItem from "./sidebarMenuItem";
import menuData from "./menuData";
import MenuToggler from "./menuToggler";

const LogoSection = () => {
  return (
    <div className="h-16 md:h-20 bg-white rounded-lg px-4 flex justify-center items-center">
      <img src={Logo} className="w-28" alt="Logo" />
      <span className="sr-only">iNote</span>
    </div>
  );
};

const DashboardSidebar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(true);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    const sidebarID = document.querySelector("#sidebar");

    if (isOpen) {
      sidebarID?.classList.add("menuClose");
    } else {
      sidebarID?.classList.remove("menuClose");
    }
  };

  return (
    <div
      id="sidebar"
      className="hidden w-56 lg:flex flex-col justify-start items-stretch min-h-screen"
    >
      <LogoSection />

      <div className="mt-4 h-full bg-white rounded-lg pl-4 md:pl-6 lg:pl-8 pt-8">
        <MenuToggler isOpen={isOpen} onClick={handleToggleMenu} />
        <div className="mt-4">
          {menuData.map((menu) => (
            <div key={menu.section} className="mb-4 lg:mb-6">
              {menu.menu.map((item) => (
                <SidebarMenuItem
                  key={item.id}
                  title={item.title}
                  url={item.url}
                  icon={item.icon}
                  isMenuOpen={isOpen}
                  active={location?.pathname?.includes(
                    item?.title?.toLowerCase(),
                  )}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
