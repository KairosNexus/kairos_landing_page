import { Code, Palette, Headset, Brain, FileText, Users, Briefcase, Database, Layout, BarChart, Settings, Search, Megaphone, Video, UserCheck } from "lucide-react";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  pay: string;
  featured?: boolean;
  urgent?: boolean;
  verified?: boolean;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  type: string; // Full-time, Contract, etc.
  postedAt: string;
  description: string;
}

export interface Category {
  id: string;
  title: string;
  desc: string;
  tag: string;
  count: string;
  icon: React.ComponentType<{ className?: string }>;

}

export const categories: Category[] = [
  { id: "1", title: "Marketing & Growth", desc: "Scale your reach with experts in social media, content, and paid ads.", tag: "Marketing", count: "390+ Experts", icon: Megaphone },
  { id: "2", title: "Graphic Design", desc: "Senior designers specialized in branding, SaaS UI/UX, and complex workflows.", tag: "Design", count: "420+ Experts", icon: Palette },
  { id: "3", title: "Video Editing", desc: "Professional editors for high-impact social content and brand storytelling.", tag: "Creative", count: "215+ Experts", icon: Video },
  { id: "4", title: "Web Development", desc: "Expert React, Node, and Full-stack developers for your core product.", tag: "Development", count: "850+ Experts", icon: Code },
  { id: "5", title: "Virtual Assistance", desc: "Efficient operational support to manage growth and executive tasks.", tag: "Operations", count: "310+ Experts", icon: UserCheck },
  { id: "6", title: "Backend Engineering", desc: "Robust Node.js, Python, and Go developers for scalable systems.", tag: "Development", count: "620+ Experts", icon: Database },
  { id: "7", title: "Data Science", desc: "AI and Machine Learning experts to drive your data-led decisions.", tag: "Science", count: "250+ Experts", icon: Brain },
  { id: "8", title: "Product Management", desc: "Strategic product leaders to guide your roadmap and execution.", tag: "Management", count: "280+ Experts", icon: Briefcase },
  { id: "9", title: "Legal & Compliance", desc: "Specialized legal talent for cross-border operations and SaaS.", tag: "Legal", count: "120+ Experts", icon: FileText },
  { id: "10", title: "Human Resources", desc: "People operations and talent acquisition experts.", tag: "HR", count: "210+ Experts", icon: Users },
  { id: "11", title: "DevOps & Infrastructure", desc: "Cloud infrastructure and CI/CD automation specialists.", tag: "Infrastructure", count: "340+ Experts", icon: Settings },
  { id: "12", title: "Sales & Account Management", desc: "Results-driven sales professionals for global markets.", tag: "Sales", count: "450+ Experts", icon: Search },
];

export const jobs: Job[] = [
  { 
    id: "j1",
    title: "Senior Marketing Manager", 
    company: "GrowthFlow US", 
    location: "Remote", 
    pay: "$3.0k-$4.5k/month", 
    featured: true, 
    icon: Megaphone,
    category: "Marketing",
    type: "Full-time",
    postedAt: "2 hours ago",
    description: "Lead our performance marketing efforts for the US market..."
  },
  { 
    id: "j2",
    title: "Creative Video Editor", 
    company: "Vivid Content", 
    location: "Remote", 
    pay: "$2.5k-$3.5k/month", 
    urgent: true, 
    icon: Video,
    category: "Creative",
    type: "Full-time",
    postedAt: "1 day ago",
    description: "Join our fast-paced creative team to produce viral video content..."
  },
  { 
    id: "j3",
    title: "Full Stack Engineer", 
    company: "Kairos Partner Role", 
    location: "Remote", 
    pay: "$4.0k-$5.5k/month", 
    verified: true, 
    icon: Code,
    category: "Development",
    type: "Contract",
    postedAt: "3 days ago",
    description: "Join a high-growth startup as a lead frontend engineer..."
  },
  { 
    id: "j4",
    title: "Executive Virtual Assistant", 
    company: "Nexus Partners", 
    location: "U.S. Hours", 
    pay: "$1.5k-$2.5k/month", 
    icon: UserCheck,
    category: "Operations",
    type: "Full-time",
    postedAt: "5 hours ago",
    description: "Provide high-level support to US-based executives..."
  },
  { 
    id: "j5",
    title: "Product Designer", 
    company: "SaaS Growth Co.", 
    location: "Remote", 
    pay: "$2.8k-$4.1k/month", 
    icon: Palette,
    category: "Design",
    type: "Full-time",
    postedAt: "4 days ago",
    description: "We are looking for a Product Designer to join our growing team..."
  },
  { 
    id: "j6",
    title: "Backend Developer (Node.js)", 
    company: "FinTech Solutions", 
    location: "Remote (EMEA)", 
    pay: "$4.0k-$6.0k/month", 
    icon: Database,
    category: "Development",
    type: "Full-time",
    postedAt: "1 week ago",
    description: "Help build the future of cross-border payments in Africa..."
  },
];

export async function getCategories() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return categories;
}

export async function getJobs() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return jobs;
}
