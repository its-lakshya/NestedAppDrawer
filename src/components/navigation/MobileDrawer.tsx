"use client";

import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { menuData } from "@/lib/menuData";
import { MenuItem } from "@/types/menu";
import { useState } from "react";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
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

  // reset on close
  const handleClose = (): void => {
    onClose();
    setStack([menuData]);
  };

  return (
    <AnimatePresence>
      {open && (
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

          {/* Floating Drawer */}
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
            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-2">

              {stack.length > 1 && (
                <button
                  onClick={handleBack}
                  className="mb-2 px-3 py-2 flex items-center gap-2 text-sm  hover:bg-gray-100 rounded-md"
                >
                  <ChevronLeft className='size-4' /> 
                  <span>Back</span>
                </button>
              )}

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
  );
}
