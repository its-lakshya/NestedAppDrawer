"use client";

import { menuData } from "@/lib/menuData";
import { Menu, PanelRight, X } from "lucide-react";
import { useState } from "react";
import { SidebarMenu } from "../navigation/SidebarMenu";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true); // open by default

  return (
    <div className="flex min-h-screen transition-all duration-300 ease-in-out bg-gray-50">
      {/* Sidebar (desktop only, with rounded border) */}
      <aside
        className={`hidden md:flex bg-white border-r border-gray-200 transition-all duration-300 ease-in-out ${
          sidebarOpen ? "w-64 opacity-100 rounded-r-4xl shadow" : "w-0 opacity-0"
        } overflow-hidden`}
      >
        <SidebarMenu items={menuData} />
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 relative z-10">
          <button
            className="p-2 rounded-md hover:bg-gray-100"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <PanelRight className="size-5 rotate-180" />
            ) : (
              <PanelRight className="size-5" />
            )}
          </button>
          <h1 className="text-lg font-semibold">My App</h1>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 transition-all duration-300 ease-in-out">
          {children}
        </main>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 flex md:hidden transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/40"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Drawer panel */}
        <div className="relative w-64 bg-white h-full flex flex-col shadow-xl rounded-r-2xl">
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
    </div>
  );
}
