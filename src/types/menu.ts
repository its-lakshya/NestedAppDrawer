import type { LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  description?: string;
  icon: LucideIcon;
  children?: MenuItem[];
}
