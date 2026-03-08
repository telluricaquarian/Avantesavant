"use client";
import * as React from "react";

import {
  BookMarked,
  BookOpen,
  Bot,
  Brain,
  Database,
  Droplets,
  FileSearch,
  Layers,
  Monitor,
  Palette,
  Search,
  Terminal,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const searchItems = [
  { group: "Subjects", icon: Brain, label: "AI Foundations", url: "/dashboard/ai-foundations" },
  { group: "Subjects", icon: Database, label: "RAG Systems", url: "/dashboard/rag-systems" },
  { group: "Subjects", icon: Bot, label: "Agentic Workflows", url: "/dashboard/agentic-workflows" },
  { group: "Subjects", icon: Layers, label: "UI Libraries", url: "/dashboard/ui-libraries" },
  { group: "Subjects", icon: Palette, label: "Creative Direction", url: "/dashboard/creative-direction" },
  { group: "Subjects", icon: Terminal, label: "IDE Workflow", url: "/dashboard/ide-workflow" },
  { group: "Subjects", icon: Monitor, label: "Frontend Systems", url: "/dashboard/frontend-systems" },
  { group: "Subjects", icon: Zap, label: "Automation Systems", url: "/dashboard/automation-systems" },
  { group: "Subjects", icon: BookOpen, label: "Knowledge Design", url: "/dashboard/knowledge-design" },
  { group: "Subjects", icon: FileSearch, label: "Case Studies", url: "/dashboard/case-studies" },
  { group: "Bioenergetics & Water Science", icon: Droplets, label: "Bioenergetics", url: "/dashboard/bioenergetics" },
  { group: "Library", icon: BookMarked, label: "Reading Lists", url: "/dashboard/reading-lists" },
];

export function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="link"
        className="!px-0 font-normal text-muted-foreground hover:no-underline"
        onClick={() => setOpen(true)}
      >
        <Search className="size-4" />
        Search
        <kbd className="inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-medium text-[10px]">
          <span className="text-xs">⌘</span>J
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search subjects and library…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {[...new Set(searchItems.map((item) => item.group))].map((group, i) => (
            <React.Fragment key={group}>
              {i !== 0 && <CommandSeparator />}
              <CommandGroup heading={group}>
                {searchItems
                  .filter((item) => item.group === group)
                  .map((item) => (
                    <CommandItem className="!py-1.5" key={item.label} onSelect={() => setOpen(false)}>
                      {item.icon && <item.icon />}
                      <span>{item.label}</span>
                    </CommandItem>
                  ))}
              </CommandGroup>
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
