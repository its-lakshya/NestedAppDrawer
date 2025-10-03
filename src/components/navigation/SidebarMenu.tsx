"use client";

import { MenuItem } from "@/types/menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Logo from "../logo/Logo";

export function SidebarMenu({ items }: { items: MenuItem[] }) {
  return (
    <nav className="w-full h-full flex flex-col px-2 gap-6">
      <span className="px-3">
        <Logo />
      </span>

      {/* Menu Items */}
      <div className="h-full flex-1 overflow-y-scroll space-y-1 no-scrollbar">
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
        className="flex w-full items-start gap-2 px-3 py-2 rounded-md transition-colors hover:bg-accent cursor-pointer"
        onClick={() => hasChildren && setOpen(!open)}
      >
        <item.icon className="h-5 w-5 mt-0.5" />
        <div className="flex-1 text-left">
          <span className="block text-sm font-medium">{item.title}</span>
          {item.description && (
            <span className="block text-xs text-muted-foreground line-clamp-1">
              {item.description}
            </span>
          )}
        </div>
        {hasChildren && (
          <ChevronDown
            className={`h-4 w-4 mt-1 shrink-0 transition-transform duration-300 ${
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
