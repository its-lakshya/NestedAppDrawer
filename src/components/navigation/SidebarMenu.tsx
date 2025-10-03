"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { MenuItem } from "@/types/menu";

export function SidebarMenu({ items }: { items: MenuItem[] }) {
  return (
    <nav className="p-2 space-y-1">
      {items.map((item, idx) => (
        <SidebarItem key={idx} item={item} />
      ))}
    </nav>
  );
}

function SidebarItem({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <button
        className="flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100"
        onClick={() => hasChildren && setOpen(!open)}
      >
        <item.icon className="h-4 w-4 mr-2 text-gray-600" />
        <span className="flex-1 text-left">{item.title}</span>
        {hasChildren && (
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </button>
      {hasChildren && open && (
        <div className="ml-6 mt-1 space-y-1">
          {item.children!.map((child, idx) => (
            <SidebarItem key={idx} item={child} />
          ))}
        </div>
      )}
    </div>
  );
}
