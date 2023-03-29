import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

type Props = {
  isMenuOpen: boolean;
  title: string;
  url: string;
  icon: ReactElement;
  active: boolean;
};

const SidebarMenuItem = ({ isMenuOpen, title, url, icon, active }: Props) => {
  return (
    <Link
      to={url || "/"}
      className={`flex items-center py-3  ${
        active ? "text-primary sidebar-active" : "text-[#B1BFD9]"
      }`}
    >
      <span>{icon}</span>
      {isMenuOpen && <span className="pl-4 menu-title">{title}</span>}
    </Link>
  );
};

export default SidebarMenuItem;
