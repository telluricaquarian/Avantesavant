import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const sources = [
  { author: "Vaswani et al.", work: "Attention Is All You Need", year: "2017", subject: "AI Foundations" },
  { author: "Brown et al.", work: "Language Models are Few-Shot Learners", year: "2020", subject: "AI Foundations" },
  { author: "Wei et al.", work: "Chain-of-Thought Prompting", year: "2022", subject: "AI Foundations" },
  {
    author: "Lewis et al.",
    work: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
    year: "2020",
    subject: "RAG Systems",
  },
  {
    author: "Es et al.",
    work: "RAGAS: Automated Evaluation of Retrieval Augmented Generation",
    year: "2023",
    subject: "RAG Systems",
  },
  {
    author: "Yao et al.",
    work: "ReAct: Synergizing Reasoning and Acting in Language Models",
    year: "2022",
    subject: "Agentic Workflows",
  },
  { author: "Anthropic", work: "Building Effective Agents", year: "2024", subject: "Agentic Workflows" },
  { author: "W3C", work: "Web Content Accessibility Guidelines (WCAG) 2.1", year: "2018", subject: "UI Libraries" },
  { author: "Jan Tschichold", work: "The New Typography", year: "1928", subject: "Creative Direction" },
  {
    author: "Edward Tufte",
    work: "The Visual Display of Quantitative Information",
    year: "1983",
    subject: "Creative Direction",
  },
  { author: "Scott Chacon & Ben Straub", work: "Pro Git (2nd Edition)", year: "2014", subject: "IDE Workflow" },
  {
    author: "Peter Brown et al.",
    work: "Make It Stick: The Science of Successful Learning",
    year: "2014",
    subject: "Knowledge Design",
  },
  { author: "Niklas Luhmann", work: "Communicating with Slip Boxes", year: "1981", subject: "Knowledge Design" },
  { author: "John Sweller", work: "Cognitive Load Theory", year: "1988", subject: "Knowledge Design" },
  { author: "Gerald H. Pollack", work: "The Fourth Phase of Water", year: "2013", subject: "Bioenergetics" },
  { author: "Thomas Seyfried", work: "Cancer as a Metabolic Disease", year: "2012", subject: "Bioenergetics" },
  {
    author: "Ohsawa et al.",
    work: "Hydrogen acts as a therapeutic antioxidant (Nature Medicine)",
    year: "2007",
    subject: "Bioenergetics",
  },
  {
    author: "Viktor Schauberger",
    work: "The Water Wizard (compiled by Callum Coats)",
    year: "1998",
    subject: "Bioenergetics",
  },
];

export default function Page() {
  return (
    <div className="@container/main flex flex-col gap-6">
      <div>
        <p className="mb-1 font-semibold text-muted-foreground text-xs uppercase tracking-widest">Library</p>
        <h1 className="mb-2 font-bold text-2xl tracking-tight md:text-3xl">Source Index</h1>
        <p className="max-w-2xl text-muted-foreground text-sm">
          All primary sources referenced across the AvantSavant curriculum. Original authors and researchers are
          credited for every idea drawn from their work.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {sources.map((source) => (
          <Card key={source.work}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="font-semibold text-sm">{source.work}</CardTitle>
                  <CardDescription className="mt-0.5 text-xs">
                    {source.author} · {source.year}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="shrink-0 text-xs">
                  {source.subject}
                </Badge>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
