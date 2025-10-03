"use client";

import { useState } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SidebarMenu } from "../navigation/SidebarMenu"; // desktop sidebar
import { menuData } from "@/lib/menuData";
import { MenuItem } from "@/types/menu";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  // desktop sidebar state
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  // mobile bottom sheet state
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  // stack for nested menus
  const [stack, setStack] = useState<MenuItem[][]>([menuData]);

  const currentMenu: MenuItem[] = stack[stack.length - 1];

  // navigate deeper
  const handleNavigate = (item: MenuItem): void => {
    if (item.children && item.children.length > 0) {
      setStack((prev) => [...prev, item.children!]);
    }
  };

  // go back
  const handleBack = (): void => setStack((prev) => prev.slice(0, -1));

  // close drawer
  const handleClose = (): void => {
    setMobileDrawerOpen(false);
    setStack([menuData]);
  };

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
            ✕
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
          <ChevronRight className="h-5 w-5" />
          <span className="text-xs">Menu</span>
        </button>
      </nav>

      {/* Mobile Floating Drawer */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-end md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40"
              onClick={handleClose}
            />

            {/* Floating Card Drawer */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl w-11/12 mb-20 max-h-[80vh] flex flex-col"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
                if (info.offset.y > 100) handleClose();
              }}
            >
              {/* Drawer Content (no header) */}
              <div className="flex-1 overflow-y-auto p-2">
                {currentMenu.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => handleNavigate(item)}
                    className="flex items-center justify-between w-full px-3 py-3 text-left hover:bg-gray-50 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-5 w-5 text-gray-500" />
                      <div className="flex flex-col">
                        <span className="font-medium">{item.title}</span>
                        {item.description && (
                          <span className="text-xs text-gray-500">
                            {item.description}
                          </span>
                        )}
                      </div>
                    </div>
                    {item.children && (
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
