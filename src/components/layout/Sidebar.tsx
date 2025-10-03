
import {menuData} from "../../lib/menuData"
import { SidebarMenu } from "../navigation/SidebarMenu";

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 md:bg-blue-400 shadow-lg border-r">
      <SidebarMenu items={menuData} />
    </aside>
  );
}
