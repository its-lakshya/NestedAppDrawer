"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { MobileDrawer } from "../navigation/MobileDrawer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />

      <div className="flex flex-1 flex-col">
        {/* Desktop Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-4">{children}</main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-background border-t border-accent flex justify-around items-center h-14 shadow-lg z-40">
        <button
          onClick={() => setMobileDrawerOpen(true)}
          className="flex flex-col items-center"
        >
          <Menu className="size-6" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer
        open={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
      />
    </div>
  );
}
