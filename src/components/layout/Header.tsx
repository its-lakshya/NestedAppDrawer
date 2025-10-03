"use client";

import { Menu } from "lucide-react";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b bg-white shadow-sm">
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-100"
        onClick={onMenuClick}
      >
        <Menu className="h-6 w-6" />
      </button>

      <h1 className="text-lg font-semibold">My App</h1>

      <div /> {/* Placeholder for profile/actions */}
    </header>
  );
}
