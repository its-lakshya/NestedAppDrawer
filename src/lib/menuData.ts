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
} from "lucide-react";

export const menuData: MenuItem[] = [
  {
    title: "Home",
    description: "Welcome to our comprehensive platform",
    icon: Home,
  },
  {
    title: "Products & Services",
    description: "Explore our comprehensive offerings",
    icon: Package,
    children: [
      {
        title: "Software Solutions",
        description: "Custom software development and deployment",
        icon: Code2,
      },
      {
        title: "Cloud & Infrastructure",
        description: "Scalable cloud solutions and infrastructure",
        icon: Cloud,
      },
      {
        title: "Consulting Services",
        description: "Expert guidance and strategic support",
        icon: Briefcase,
        children: [
          {
            title: "Technical Consulting",
            description: "Architecture and implementation guidance",
            icon: Code2,
          },
          {
            title: "Business Strategy",
            description: "Digital transformation and business planning",
            icon: TrendingUp,
          },
          {
            title: "Training & Workshops",
            description: "Team skill development and knowledge transfer",
            icon: BookOpen,
          },
        ],
      },
      {
        title: "Digital Transformation",
        description: "Comprehensive digital transformation strategies",
        icon: Lightbulb,
      },
      {
        title: "Cybersecurity Consulting",
        description: "Comprehensive cybersecurity services and solutions",
        icon: Shield,
      },
      {
        title: "Data & Analytics Consulting",
        description: "Data strategy, analytics, and business intelligence",
        icon: BarChart3,
        children: [
          {
            title: "Data Strategy",
            description: "Data governance and strategy development",
            icon: Target,
            children: [
              {
                title: "Data Governance",
                description: "Data quality, privacy, and compliance frameworks",
                icon: CheckCircle,
              },
              {
                title: "Data Architecture",
                description: "Enterprise data architecture design",
                icon: Database,
              },
              {
                title: "Data Lake Strategy",
                description: "Data lake design and implementation",
                icon: Layers,
              },
            ],
          },
          {
            title: "Advanced Analytics",
            description: "Machine learning and predictive analytics",
            icon: Activity,
          },
          {
            title: "Business Intelligence",
            description: "BI platform implementation and optimization",
            icon: BarChart,
          },
        ],
      },
      {
        title: "DevOps & Platform Engineering",
        description: "DevOps transformation and platform engineering",
        icon: Settings,
        children: [
          {
            title: "System Architecture",
            description: "Scalable system design and planning",
            icon: Server,
          },
          {
            title: "Performance Optimization",
            description: "Application and system optimization",
            icon: Zap,
          },
          {
            title: "Security Audits",
            description: "Comprehensive security assessments",
            icon: ShieldCheck,
          },
        ],
      },
      {
        title: "Support & Maintenance",
        description: "Ongoing maintenance and support services",
        icon: LifeBuoy,
      },
    ],
  },
  {
    title: "Industry Solutions",
    description: "Specialized solutions for different industries",
    icon: Globe,
  },
  {
    title: "Company",
    description: "Learn about our organization and culture",
    icon: Users,
  },
  {
    title: "Resources",
    description: "Knowledge base, tools, and learning materials",
    icon: Book,
  },
  {
    title: "Support",
    description: "Get help and support when you need it",
    icon: HelpCircle,
  },
  {
    title: "Research & Innovation",
    description: "Cutting-edge research and innovation initiatives",
    icon: FlaskConical,
  },
  {
    title: "Sustainability",
    description: "Environmental responsibility and sustainable technology",
    icon: Leaf,
  },
  {
    title: "Investor Relations",
    description: "Financial information and investor resources",
    icon: TrendingUp,
  },
  {
    title: "Contact",
    description: "Get in touch with our team",
    icon: Mail,
  },
  {
    title: "Training & Development",
    description: "Grow skills and leadership capabilities",
    icon: GraduationCap,
    children: [
      {
        title: "Technical Training",
        description: "Programming and technology skills",
        icon: Code2,
      },
      {
        title: "Agile Methodologies",
        description: "Scrum, Kanban, and agile practices",
        icon: GitBranch,
      },
      {
        title: "Leadership & Management",
        description: "Technical leadership and team management",
        icon: UserCog,
      },
    ],
  },
];
