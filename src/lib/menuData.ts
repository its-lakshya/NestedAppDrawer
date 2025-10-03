import { MenuItem } from "@/types/menu";
import {
  Home,
  Package,
  Code2,
  Cloud,
  Briefcase,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Shield,
  BarChart3,
  Target,
  CheckCircle,
  Database,
  Layers,
  Activity,
  BarChart,
  Settings,
  Server,
  Zap,
  ShieldCheck,
  LifeBuoy,
  Globe,
  Users,
  Book,
  HelpCircle,
  FlaskConical,
  Leaf,
  Mail,
  GraduationCap,
  GitBranch,
  UserCog,
  Calendar,
  Smartphone,
  Sun,
} from "lucide-react";

export const menuData: MenuItem[] = [
  {
    title: "Home",
    description: "Welcome to our comprehensive platform",
    icon: Home,
    children: [
      {
        title: "Overview",
        description: "Platform overview and quick navigation",
        icon: BookOpen,
        children: [
          { title: "Getting Started", description: "Setup guides", icon: CheckCircle },
          { title: "Tutorials", description: "Learning modules", icon: Book },
        ],
      },
      {
        title: "Announcements",
        description: "Latest news and updates",
        icon: TrendingUp,
        children: [
          { title: "Product Updates", description: "New features", icon: Zap },
          { title: "Events", description: "Webinars & sessions", icon: Calendar },
        ],
      },
    ],
  },
  {
    title: "Products & Services",
    description: "Explore our comprehensive offerings",
    icon: Package,
    children: [
      {
        title: "Software Solutions",
        description: "Custom software development",
        icon: Code2,
        children: [
          { title: "Web Apps", description: "Full stack apps", icon: Layers },
          { title: "Mobile Apps", description: "iOS & Android", icon: Smartphone },
        ],
      },
      {
        title: "Cloud & Infrastructure",
        description: "Scalable cloud solutions",
        icon: Cloud,
        children: [
          { title: "Cloud Migration", description: "Move workloads", icon: Server },
          { title: "Infrastructure Automation", description: "IaC & DevOps", icon: Settings },
        ],
      },
      {
        title: "Consulting Services",
        description: "Expert guidance & strategy",
        icon: Briefcase,
        children: [
          {
            title: "Technical Consulting",
            description: "Implementation guidance",
            icon: Code2,
            children: [
              { title: "API Design", description: "Robust APIs", icon: GitBranch },
              { title: "System Integration", description: "Seamless systems", icon: Database },
            ],
          },
          {
            title: "Business Strategy",
            description: "Digital planning",
            icon: TrendingUp,
            children: [
              { title: "Growth Strategy", description: "Expand markets", icon: Target },
              { title: "Change Management", description: "Adapting teams", icon: Users },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Industry Solutions",
    description: "Specialized industry services",
    icon: Globe,
    children: [
      {
        title: "Healthcare",
        description: "Digital health solutions",
        icon: LifeBuoy,
        children: [
          { title: "Patient Portals", description: "Engagement apps", icon: Book },
          { title: "EHR Integration", description: "Records management", icon: Database },
        ],
      },
      {
        title: "Finance",
        description: "Banking & fintech",
        icon: BarChart3,
        children: [
          { title: "Payments", description: "Secure systems", icon: ShieldCheck },
          { title: "Fraud Detection", description: "AI analytics", icon: Activity },
        ],
      },
    ],
  },
  {
    title: "Company",
    description: "Our story, culture, and team",
    icon: Users,
    children: [
      {
        title: "About Us",
        description: "Who we are",
        icon: BookOpen,
        children: [
          { title: "Mission", description: "What drives us", icon: Target },
          { title: "Values", description: "Core beliefs", icon: Shield },
        ],
      },
      {
        title: "Careers",
        description: "Join our team",
        icon: Briefcase,
        children: [
          { title: "Open Roles", description: "Job listings", icon: CheckCircle },
          { title: "Internships", description: "Early careers", icon: GraduationCap },
        ],
      },
    ],
  },
  {
    title: "Resources",
    description: "Knowledge and tools",
    icon: Book,
    children: [
      {
        title: "Documentation",
        description: "Guides and references",
        icon: BookOpen,
        children: [
          { title: "API Docs", description: "Endpoints & usage", icon: Code2 },
          { title: "SDKs", description: "Dev kits", icon: Package },
        ],
      },
      {
        title: "Case Studies",
        description: "Customer success stories",
        icon: BarChart,
        children: [
          { title: "Enterprise", description: "Large-scale solutions", icon: Layers },
          { title: "SMBs", description: "Small business tools", icon: TrendingUp },
        ],
      },
    ],
  },
  {
    title: "Support",
    description: "Help and customer support",
    icon: HelpCircle,
    children: [
      {
        title: "Help Center",
        description: "FAQs and guides",
        icon: Book,
        children: [
          { title: "Account Help", description: "Manage accounts", icon: UserCog },
          { title: "Billing Support", description: "Payments & invoices", icon: Mail },
        ],
      },
      {
        title: "Contact Support",
        description: "Talk with experts",
        icon: LifeBuoy,
        children: [
          { title: "Live Chat", description: "Instant help", icon: Zap },
          { title: "Email Support", description: "Support tickets", icon: Mail },
        ],
      },
    ],
  },
  {
    title: "Research & Innovation",
    description: "Our R&D and labs",
    icon: FlaskConical,
    children: [
      {
        title: "Innovation Labs",
        description: "Cutting edge work",
        icon: Lightbulb,
        children: [
          { title: "AI Lab", description: "Artificial intelligence", icon: Activity },
          { title: "Blockchain", description: "DLT innovations", icon: GitBranch },
        ],
      },
      {
        title: "Research Papers",
        description: "Published work",
        icon: Book,
        children: [
          { title: "Whitepapers", description: "Deep insights", icon: BookOpen },
          { title: "Case Reports", description: "Use cases", icon: BarChart },
        ],
      },
    ],
  },
  {
    title: "Sustainability",
    description: "Green & responsible tech",
    icon: Leaf,
    children: [
      {
        title: "Green Initiatives",
        description: "Eco-friendly programs",
        icon: ShieldCheck,
        children: [
          { title: "Carbon Neutral", description: "Sustainability goals", icon: Target },
          { title: "Recycling Programs", description: "Reduce waste", icon: CheckCircle },
        ],
      },
      {
        title: "Renewable Energy",
        description: "Clean energy adoption",
        icon: Zap,
        children: [
          { title: "Solar Projects", description: "Solar adoption", icon: Sun },
          { title: "Wind Energy", description: "Wind farms", icon: Activity },
        ],
      },
    ],
  },
  {
    title: "Investor Relations",
    description: "Financials and reports",
    icon: TrendingUp,
    children: [
      {
        title: "Financial Reports",
        description: "Quarterly & annual reports",
        icon: BarChart3,
        children: [
          { title: "Quarterly", description: "Q1-Q4 data", icon: Database },
          { title: "Annual", description: "Yearly summary", icon: Layers },
        ],
      },
      {
        title: "Stock Info",
        description: "Shareholder updates",
        icon: Target,
        children: [
          { title: "Stock Price", description: "Live updates", icon: BarChart },
          { title: "Dividends", description: "Payouts & yields", icon: CheckCircle },
        ],
      },
    ],
  },
  {
    title: "Contact",
    description: "Get in touch with us",
    icon: Mail,
    children: [
      {
        title: "Head Office",
        description: "Our main HQ",
        icon: Users,
        children: [
          { title: "Location", description: "Find us", icon: Globe },
          { title: "Phone", description: "Direct line", icon: Smartphone },
        ],
      },
      {
        title: "Regional Offices",
        description: "Worldwide locations",
        icon: Globe,
        children: [
          { title: "North America", description: "US & Canada", icon: Target },
          { title: "Europe", description: "EU operations", icon: Shield },
        ],
      },
    ],
  },
  {
    title: "Training & Development",
    description: "Grow skills and leadership",
    icon: GraduationCap,
    children: [
      {
        title: "Technical Training",
        description: "Programming & tech",
        icon: Code2,
        children: [
          { title: "Frontend", description: "React, Next.js", icon: Layers },
          { title: "Backend", description: "Node, APIs", icon: Server },
        ],
      },
      {
        title: "Agile Methodologies",
        description: "Scrum, Kanban practices",
        icon: GitBranch,
        children: [
          { title: "Scrum", description: "Agile sprinting", icon: Target },
          { title: "Kanban", description: "Workflow boards", icon: Layers },
        ],
      },
      {
        title: "Leadership & Management",
        description: "Team growth",
        icon: UserCog,
        children: [
          { title: "People Management", description: "Lead teams", icon: Users },
          { title: "Decision Making", description: "Strategic choices", icon: Lightbulb },
        ],
      },
    ],
  },
];
