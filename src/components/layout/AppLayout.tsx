"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { MobileDrawer } from "../navigation/MobileDrawer";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />

      <div className="flex flex-1 flex-col">
        {/* Desktop Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
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
