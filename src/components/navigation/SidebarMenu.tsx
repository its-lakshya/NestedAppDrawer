"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { MenuItem } from "@/types/menu";

export function SidebarMenu({ items }: { items: MenuItem[] }) {
  return (
    <nav className="w-full h-full flex flex-col">
      {/* 🔥 Logo Section */}
      <div className="flex items-center gap-2 px-4 py-6">
        {/* <img
          src="/logo.png" // 👈 replace with your logo path
          alt="Company Logo"
          className="h-10 w-10 rounded-md object-contain"
        /> */}
        <span className="text-lg font-bold tracking-wide">
          MyCompany
        </span>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
        {items.map((item, idx) => (
          <SidebarItem key={idx} item={item} />
        ))}
      </div>
    </nav>
  );
}

function SidebarItem({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <button
        className="flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors"
        onClick={() => hasChildren && setOpen(!open)}
      >
        <item.icon className="h-4 w-4 mr-2" />
        <span className="flex-1 text-left">{item.title}</span>
        {hasChildren && (
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {hasChildren && (
        <div
          className={`ml-6 overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-1 space-y-1">
            {item.children!.map((child, idx) => (
              <SidebarItem key={idx} item={child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
