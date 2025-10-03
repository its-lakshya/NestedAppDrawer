import { PanelLeft, PanelRight } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";

type HeaderProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
  return (
    <header className="hidden md:flex items-center justify-between px-4 py-4">
      <button
        className="p-2 rounded-md hover:bg-accent -ml-2 cursor-pointer"
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
  );
};

export default Header;
