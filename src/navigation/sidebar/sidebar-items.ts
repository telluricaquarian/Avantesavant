import {
  BookMarked,
  Bookmark,
  BookOpen,
  Bot,
  Brain,
  Database,
  Droplets,
  FileSearch,
  Layers,
  Library,
  type LucideIcon,
  Map as MapIcon,
  Monitor,
  Palette,
  StickyNote,
  Terminal,
  Zap,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Subjects",
    items: [
      { title: "AI Foundations", url: "/dashboard/ai-foundations", icon: Brain },
      { title: "RAG Systems", url: "/dashboard/rag-systems", icon: Database },
      { title: "Agentic Workflows", url: "/dashboard/agentic-workflows", icon: Bot },
      { title: "UI Libraries", url: "/dashboard/ui-libraries", icon: Layers },
      { title: "Creative Direction", url: "/dashboard/creative-direction", icon: Palette },
      { title: "IDE Workflow", url: "/dashboard/ide-workflow", icon: Terminal },
      { title: "Frontend Systems", url: "/dashboard/frontend-systems", icon: Monitor },
      { title: "Automation Systems", url: "/dashboard/automation-systems", icon: Zap },
      { title: "Knowledge Design", url: "/dashboard/knowledge-design", icon: BookOpen },
      { title: "Case Studies", url: "/dashboard/case-studies", icon: FileSearch },
    ],
  },
  {
    id: 2,
    label: "Bioenergetics & Water Science",
    items: [{ title: "Bioenergetics", url: "/dashboard/bioenergetics", icon: Droplets }],
  },
  {
    id: 3,
    label: "Library",
    items: [
      { title: "Reading Lists", url: "/dashboard/reading-lists", icon: BookMarked },
      { title: "Source Index", url: "/dashboard/source-index", icon: Library },
      { title: "Notes", url: "/dashboard/notes", icon: StickyNote },
      { title: "Saved Material", url: "/dashboard/saved", icon: Bookmark },
      { title: "Curriculum Map", url: "/dashboard/curriculum-map", icon: MapIcon },
    ],
  },
];
