"use client";

import { useState } from "react";
import { Menu, PanelLeft, PanelRight } from "lucide-react";
import { SidebarMenu } from "../navigation/SidebarMenu"; 
import { menuData } from "@/lib/menuData";
import { MobileDrawer } from "../navigation/MobileDrawer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
          sidebarOpen ? "w-64 opacity-100 rounded-r-4xl shadow" : "w-0 opacity-0"
        } overflow-hidden`}
      >
        <SidebarMenu items={menuData} />
      </aside>

      {/* Desktop Header */}
      <div className="flex flex-1 flex-col">
        <header className="hidden md:flex items-center justify-between px-4 py-3">
          <button
            className="p-2 rounded-md hover:bg-gray-100"
            onClick={() => setSidebarOpen((prev) => !prev)}
          >
            {sidebarOpen ? (
              <PanelLeft className="size-5" />
            ) : (
              <PanelRight className="size-5" />
            )}
          </button>
          <h1 className="text-lg font-semibold">My App</h1>
        </header>

        <main className="flex-1 p-4">{children}</main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t flex justify-around items-center h-14 shadow-lg z-40">
        <button
          onClick={() => setMobileDrawerOpen(true)}
          className="flex flex-col items-center text-gray-600"
        >
          <Menu className='size-6' />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer open={mobileDrawerOpen} onClose={() => setMobileDrawerOpen(false)} />
    </div>
  );
}
