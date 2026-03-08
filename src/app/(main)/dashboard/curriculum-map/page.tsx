import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const groups = [
  {
    label: "Technology Track",
    description: "Software engineering, AI systems, and development tooling.",
    subjects: [
      { title: "AI Foundations", url: "/dashboard/ai-foundations", status: "active" },
      { title: "RAG Systems", url: "/dashboard/rag-systems", status: "active" },
      { title: "Agentic Workflows", url: "/dashboard/agentic-workflows", status: "active" },
      { title: "UI Libraries", url: "/dashboard/ui-libraries", status: "active" },
      { title: "IDE Workflow", url: "/dashboard/ide-workflow", status: "active" },
      { title: "Frontend Systems", url: "/dashboard/frontend-systems", status: "active" },
      { title: "Automation Systems", url: "/dashboard/automation-systems", status: "active" },
    ],
  },
  {
    label: "Design & Communication Track",
    description: "Visual design, brand, editorial principles, and knowledge architecture.",
    subjects: [
      { title: "Creative Direction", url: "/dashboard/creative-direction", status: "active" },
      { title: "Knowledge Design", url: "/dashboard/knowledge-design", status: "active" },
    ],
  },
  {
    label: "Applied & Interdisciplinary",
    description: "Cross-domain case studies and bioenergetic science.",
    subjects: [
      { title: "Case Studies", url: "/dashboard/case-studies", status: "active" },
      { title: "Bioenergetics & Water Science", url: "/dashboard/bioenergetics", status: "active" },
    ],
  },
];

export default function Page() {
  return (
    <div className="@container/main flex flex-col gap-6">
      <div>
        <p className="mb-1 font-semibold text-muted-foreground text-xs uppercase tracking-widest">Library</p>
        <h1 className="mb-2 font-bold text-2xl tracking-tight md:text-3xl">Curriculum Map</h1>
        <p className="max-w-2xl text-muted-foreground text-sm">
          A structural overview of the AvantSavant curriculum organized by track and subject area. Each subject contains
          an overview, lessons, notes, and cited sources.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {groups.map((group) => (
          <div key={group.label}>
            <div className="mb-3">
              <h2 className="font-semibold text-base">{group.label}</h2>
              <p className="text-muted-foreground text-sm">{group.description}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.subjects.map((subject) => (
                <Card key={subject.title} className="transition-colors hover:bg-accent/30">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-medium text-sm">{subject.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        Active
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-xs">{subject.url}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
