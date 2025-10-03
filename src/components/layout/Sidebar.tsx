import React from "react";
import { SidebarMenu } from "../navigation/SidebarMenu";
import { menuData } from "./../../lib/menuData";

type SidebarProps = {
  sidebarOpen: boolean;
};

const Sidebar = ({ sidebarOpen }: SidebarProps) => {
  return (
    <aside
      className={`hidden md:flex bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
        sidebarOpen ? "w-64 opacity-100 rounded-r-4xl shadow" : "w-0 opacity-0"
      } overflow-hidden`}
    >
      <SidebarMenu items={menuData} />
    </aside>
  );
};

export default Sidebar;
