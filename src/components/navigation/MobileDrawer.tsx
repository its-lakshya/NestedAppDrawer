"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { menuData } from "@/lib/menuData";
import { MenuItem } from "@/types/menu";
import { useState } from "react";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [stack, setStack] = useState<MenuItem[][]>([menuData]);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const currentMenu: MenuItem[] = stack[stack.length - 1];

  const handleNavigate = (item: MenuItem): void => {
    if (item.children?.length) {
      setDirection("forward");
      setStack((prev) => [...prev, item.children!]);
    }
  };

  const handleBack = (): void => {
    setDirection("back");
    setStack((prev) => prev.slice(0, -1));
  };

  const handleClose = (): void => {
    onClose();
    setStack([menuData]);
  };

  // Slide variants
  const variants = {
    enter: (dir: "forward" | "back") => ({
      x: dir === "forward" ? "100%" : "-100%",
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
    },
    exit: (dir: "forward" | "back") => ({
      x: dir === "forward" ? "-100%" : "100%",
      opacity: 0,
      position: "absolute" as const,
    }),
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
          <div className="absolute inset-0 bg-black/40" onClick={handleClose} />

          {/* Drawer (stays mounted) */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-xl w-11/12 mb-16 max-h-[80vh] flex flex-col overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Sliding Menu Levels */}
            <div className="relative flex-1 overflow-hidden">
              <AnimatePresence mode="sync" custom={direction}>
                <motion.div
                  key={stack.length}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-2 overflow-y-auto no-scrollbar"
                >
                  {stack.length > 1 && (
                    <button
                      onClick={handleBack}
                      className="mb-2 px-3 py-2 flex items-center gap-2 text-sm hover:bg-accent rounded-md"
                    >
                      <ChevronLeft className="size-4" />
                      <span>Back</span>
                    </button>
                  )}

                  {currentMenu.map((item) => (
                    <button
                      key={item.title}
                      onClick={() => handleNavigate(item)}
                      className="flex items-center justify-between w-full px-3 py-3 text-left hover:bg-accent rounded-md"
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="size-[16px] -mt-3" />
                        <div className="flex flex-col">
                          <span className="text-sm">{item.title}</span>
                          {item.description && (
                            <span className="text-xs text-muted-foreground">
                              {item.description}
                            </span>
                          )}
                        </div>
                      </div>
                      {item.children && (
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      )}
                    </button>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
