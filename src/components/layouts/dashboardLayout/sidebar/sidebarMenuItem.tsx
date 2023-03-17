import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

type Props = {
  isMenuOpen: boolean;
  title: string;
  url: string;
  icon: ReactElement;
};

const SidebarMenuItem = ({ isMenuOpen, title, url, icon }: Props) => {
  return (
    <Link to={url || "/"} className="flex items-center py-3 text-[#B1BFD9]">
      <span>{icon}</span>
      {isMenuOpen && <span className="pl-4 menu-title">{title}</span>}
    </Link>
  );
};

export default SidebarMenuItem;
