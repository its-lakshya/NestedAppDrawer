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
    description: "Welcome to our platform",
    icon: Home,
    children: [
      {
        title: "Overview",
        description: "Quick platform navigation guide",
        icon: BookOpen,
        children: [
          { title: "Getting Started", description: "Quick setup and onboarding", icon: CheckCircle },
          { title: "Tutorials", description: "Step-by-step learning modules", icon: Book },
        ],
      },
      {
        title: "Announcements",
        description: "Latest news and updates",
        icon: TrendingUp,
        children: [
          { title: "Product Updates", description: "New features and improvements", icon: Zap },
          { title: "Events", description: "Upcoming webinars and sessions", icon: Calendar },
        ],
      },
    ],
  },
  {
    title: "Products & Services",
    description: "Explore company offerings",
    icon: Package,
    children: [
      {
        title: "Software Solutions",
        description: "Custom software development services",
        icon: Code2,
        children: [
          { title: "Web Apps", description: "Scalable full stack apps", icon: Layers },
          { title: "Mobile Apps", description: "Cross-platform mobile solutions", icon: Smartphone },
        ],
      },
      {
        title: "Cloud & Infrastructure",
        description: "Reliable cloud-based solutions",
        icon: Cloud,
        children: [
          { title: "Cloud Migration", description: "Seamless workload transfers", icon: Server },
          { title: "Infrastructure Automation", description: "IaC and DevOps workflows", icon: Settings },
        ],
      },
      {
        title: "Consulting Services",
        description: "Strategic business consulting",
        icon: Briefcase,
        children: [
          {
            title: "Technical Consulting",
            description: "Expert technical guidance",
            icon: Code2,
            children: [
              { title: "API Design", description: "Design scalable API strategy", icon: GitBranch },
              { title: "System Integration", description: "Seamless system connectivity", icon: Database },
            ],
          },
          {
            title: "Business Strategy",
            description: "Growth and digital planning",
            icon: TrendingUp,
            children: [
              { title: "Growth Strategy", description: "Expand into new markets", icon: Target },
              { title: "Change Management", description: "Smooth organizational transitions", icon: Users },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Industry Solutions",
    description: "Tailored industry offerings",
    icon: Globe,
    children: [
      {
        title: "Healthcare",
        description: "Modern digital healthcare tools",
        icon: LifeBuoy,
        children: [
          { title: "Patient Portals", description: "Engaging patient-facing apps", icon: Book },
          { title: "EHR Integration", description: "Seamless health records access", icon: Database },
        ],
      },
      {
        title: "Finance",
        description: "Banking and fintech services",
        icon: BarChart3,
        children: [
          { title: "Payments", description: "Secure transaction platforms", icon: ShieldCheck },
          { title: "Fraud Detection", description: "AI-driven fraud prevention", icon: Activity },
        ],
      },
    ],
  },
  {
    title: "Company",
    description: "About our culture and vision",
    icon: Users,
    children: [
      {
        title: "About Us",
        description: "Company story and journey",
        icon: BookOpen,
        children: [
          { title: "Mission", description: "Our driving principles", icon: Target },
          { title: "Values", description: "Core beliefs and ethics", icon: Shield },
        ],
      },
      {
        title: "Careers",
        description: "Join our growing team",
        icon: Briefcase,
        children: [
          { title: "Open Roles", description: "Active job opportunities", icon: CheckCircle },
          { title: "Internships", description: "Early career programs", icon: GraduationCap },
        ],
      },
    ],
  },
  {
    title: "Resources",
    description: "Guides, tools and docs",
    icon: Book,
    children: [
      {
        title: "Documentation",
        description: "Comprehensive product guides",
        icon: BookOpen,
        children: [
          { title: "API Docs", description: "Detailed API references", icon: Code2 },
          { title: "SDKs", description: "Software development kits", icon: Package },
        ],
      },
      {
        title: "Case Studies",
        description: "Real customer success stories",
        icon: BarChart,
        children: [
          { title: "Enterprise", description: "Large-scale case examples", icon: Layers },
          { title: "SMBs", description: "Small business solutions", icon: TrendingUp },
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
        description: "Guides and common FAQs",
        icon: Book,
        children: [
          { title: "Account Help", description: "Manage user accounts", icon: UserCog },
          { title: "Billing Support", description: "Payments and invoices", icon: Mail },
        ],
      },
      {
        title: "Contact Support",
        description: "Talk with support experts",
        icon: LifeBuoy,
        children: [
          { title: "Live Chat", description: "Instant chat assistance", icon: Zap },
          { title: "Email Support", description: "Ticket-based support system", icon: Mail },
        ],
      },
    ],
  },
  {
    title: "Research & Innovation",
    description: "Exploring future technologies",
    icon: FlaskConical,
    children: [
      {
        title: "Innovation Labs",
        description: "Cutting-edge research projects",
        icon: Lightbulb,
        children: [
          { title: "AI Lab", description: "Artificial intelligence research", icon: Activity },
          { title: "Blockchain", description: "Distributed ledger studies", icon: GitBranch },
        ],
      },
      {
        title: "Research Papers",
        description: "Published academic works",
        icon: Book,
        children: [
          { title: "Whitepapers", description: "Technical in-depth insights", icon: BookOpen },
          { title: "Case Reports", description: "Real-world research cases", icon: BarChart },
        ],
      },
    ],
  },
  {
    title: "Sustainability",
    description: "Environmentally responsible practices",
    icon: Leaf,
    children: [
      {
        title: "Green Initiatives",
        description: "Eco-friendly corporate programs",
        icon: ShieldCheck,
        children: [
          { title: "Carbon Neutral", description: "Sustainable green goals", icon: Target },
          { title: "Recycling Programs", description: "Reduce and reuse waste", icon: CheckCircle },
        ],
      },
      {
        title: "Renewable Energy",
        description: "Clean energy adoption efforts",
        icon: Zap,
        children: [
          { title: "Solar Projects", description: "Expanding solar initiatives", icon: Sun },
          { title: "Wind Energy", description: "Wind farm developments", icon: Activity },
        ],
      },
    ],
  },
  {
    title: "Investor Relations",
    description: "Financials and shareholder updates",
    icon: TrendingUp,
    children: [
      {
        title: "Financial Reports",
        description: "Quarterly and yearly data",
        icon: BarChart3,
        children: [
          { title: "Quarterly", description: "Quarter-specific results", icon: Database },
          { title: "Annual", description: "Yearly summary reports", icon: Layers },
        ],
      },
      {
        title: "Stock Info",
        description: "Market updates and data",
        icon: Target,
        children: [
          { title: "Stock Price", description: "Live stock market data", icon: BarChart },
          { title: "Dividends", description: "Shareholder payout details", icon: CheckCircle },
        ],
      },
    ],
  },
  {
    title: "Contact",
    description: "Get in touch today",
    icon: Mail,
    children: [
      {
        title: "Head Office",
        description: "Company main headquarters",
        icon: Users,
        children: [
          { title: "Location", description: "Office address details", icon: Globe },
          { title: "Phone", description: "Direct phone numbers", icon: Smartphone },
        ],
      },
      {
        title: "Regional Offices",
        description: "Worldwide operational centers",
        icon: Globe,
        children: [
          { title: "North America", description: "US and Canada offices", icon: Target },
          { title: "Europe", description: "EU business operations", icon: Shield },
        ],
      },
    ],
  },
  {
    title: "Training & Development",
    description: "Build skills and leadership",
    icon: GraduationCap,
    children: [
      {
        title: "Technical Training",
        description: "Programming and technical skills",
        icon: Code2,
        children: [
          { title: "Frontend", description: "React and Next.js training", icon: Layers },
          { title: "Backend", description: "Node.js and APIs training", icon: Server },
        ],
      },
      {
        title: "Agile Methodologies",
        description: "Scrum and agile coaching",
        icon: GitBranch,
        children: [
          { title: "Scrum", description: "Agile sprint practices", icon: Target },
          { title: "Kanban", description: "Workflow visualization boards", icon: Layers },
        ],
      },
      {
        title: "Leadership & Management",
        description: "Develop leadership expertise",
        icon: UserCog,
        children: [
          { title: "People Management", description: "Effective team leadership", icon: Users },
          { title: "Decision Making", description: "Strategic choice frameworks", icon: Lightbulb },
        ],
      },
    ],
  },
];
