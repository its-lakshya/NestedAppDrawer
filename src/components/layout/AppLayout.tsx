"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { menuData } from "@/lib/menuData";
import { SidebarMenu } from "../navigation/SidebarMenu";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex w-64 bg-white shadow-lg border-r">
        <SidebarMenu items={menuData} />
      </aside>

      {/* Main content wrapper */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 border-b bg-white shadow-sm">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>

          <h1 className="text-lg font-semibold">My App</h1>

          {/* Desktop toggle placeholder (optional, e.g. profile) */}
          <div />
        </header>

        {/* Page content */}
        <main className="flex-1 p-4">{children}</main>
      </div>

      {/* Mobile Drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Drawer panel */}
          <div className="relative w-64 bg-white shadow-lg h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <SidebarMenu items={menuData} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
