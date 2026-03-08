import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const subjects = [
  {
    title: "AI Foundations",
    href: "/dashboard/ai-foundations",
    tag: "Technology",
    description: "How language models work, tokens, embeddings, inference, and prompt engineering.",
  },
  {
    title: "RAG Systems",
    href: "/dashboard/rag-systems",
    tag: "Technology",
    description: "Retrieval-augmented generation, vector databases, chunking, reranking, and grounding.",
  },
  {
    title: "Agentic Workflows",
    href: "/dashboard/agentic-workflows",
    tag: "Technology",
    description: "AI agents, tool use, multi-step reasoning, orchestration, and human-in-the-loop design.",
  },
  {
    title: "UI Libraries",
    href: "/dashboard/ui-libraries",
    tag: "Technology",
    description: "Component libraries, design systems, frameworks, accessibility, and animation.",
  },
  {
    title: "Creative Direction",
    href: "/dashboard/creative-direction",
    tag: "Design",
    description: "Visual hierarchy, typography systems, color theory, brand systems, and motion.",
  },
  {
    title: "IDE Workflow",
    href: "/dashboard/ide-workflow",
    tag: "Technology",
    description: "Development environments, Git workflow, CLI tooling, debugging, and deployment.",
  },
  {
    title: "Frontend Systems",
    href: "/dashboard/frontend-systems",
    tag: "Technology",
    description: "Rendering patterns, state management, performance engineering, and build tooling.",
  },
  {
    title: "Automation Systems",
    href: "/dashboard/automation-systems",
    tag: "Technology",
    description: "Workflow automation, API integration, scripting, CI/CD pipelines, and data flows.",
  },
  {
    title: "Knowledge Design",
    href: "/dashboard/knowledge-design",
    tag: "Epistemology",
    description: "Information architecture, mental models, learning design, and personal knowledge systems.",
  },
  {
    title: "Case Studies",
    href: "/dashboard/case-studies",
    tag: "Applied",
    description: "Real-world analysis of software, design, and organizational decisions.",
  },
  {
    title: "Bioenergetics & Water Science",
    href: "/dashboard/bioenergetics",
    tag: "Interdisciplinary",
    description:
      "EZ water (Pollack), transmembrane potential (Cone), deuterium & ATP (Olgun), metabolic theory (Seyfried), vortex dynamics (Schauberger), and molecular hydrogen.",
  },
];

export default function Page() {
  return (
    <div className="@container/main flex flex-col gap-6">
      <div className="rounded-xl border bg-card px-6 py-8 md:px-10 md:py-10">
        <p className="mb-2 font-semibold text-muted-foreground text-xs uppercase tracking-widest">AvantSavant</p>
        <h1 className="mb-2 font-bold text-3xl tracking-tight md:text-4xl">The New Genius</h1>
        <p className="mb-4 text-lg text-muted-foreground">Breaking new ground. keeping the mind sound.</p>
        <p className="mb-2 max-w-2xl text-muted-foreground text-sm">
          Turning pre-existing educational content and redistributing it — purposefully derivative content
          redistribution, with all sourced content cited and original authors given their due credit.
        </p>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Educational platform dedicated towards ensuring your thinking machine (brain) is &ldquo;well oiled&rdquo;.
        </p>
      </div>

      <div>
        <h2 className="mb-4 font-semibold text-muted-foreground text-sm uppercase tracking-widest">
          Curriculum — {subjects.length} Subjects
        </h2>
        <div className="grid @4xl/main:grid-cols-3 gap-4 sm:grid-cols-2">
          {subjects.map((subject) => (
            <Link key={subject.href} href={subject.href} prefetch={false}>
              <Card className="h-full transition-colors hover:bg-accent/30">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-base leading-snug">{subject.title}</CardTitle>
                    <Badge variant="secondary" className="shrink-0 text-xs">
                      {subject.tag}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{subject.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
