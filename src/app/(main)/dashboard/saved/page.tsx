import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const saved = [
  {
    title: "Attention Is All You Need",
    type: "Paper",
    subject: "AI Foundations",
    note: "The transformer paper. Re-read the multi-head attention section.",
  },
  {
    title: "The Fourth Phase of Water — Pollack",
    type: "Book",
    subject: "Bioenergetics",
    note: "Chapter 5 on biological implications of EZ water.",
  },
  {
    title: "RAGAS: Automated Evaluation of RAG",
    type: "Paper",
    subject: "RAG Systems",
    note: "Metrics: faithfulness, context recall, answer relevance.",
  },
  {
    title: "ReAct: Synergizing Reasoning and Acting",
    type: "Paper",
    subject: "Agentic Workflows",
    note: "The ReAct trace format is worth implementing as a debugging tool.",
  },
  {
    title: "Make It Stick",
    type: "Book",
    subject: "Knowledge Design",
    note: "Retrieval practice section — directly applicable to how this platform should present material.",
  },
];

export default function Page() {
  return (
    <div className="@container/main flex flex-col gap-6">
      <div>
        <p className="mb-1 font-semibold text-muted-foreground text-xs uppercase tracking-widest">Library</p>
        <h1 className="mb-2 font-bold text-2xl tracking-tight md:text-3xl">Saved Material</h1>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Sources and materials marked for deeper review. Saving is a filter — not everything worth reading once is
          worth returning to.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {saved.map((item) => (
          <Card key={item.title}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="font-semibold text-sm">{item.title}</CardTitle>
                <div className="flex shrink-0 gap-1.5">
                  <Badge variant="outline" className="text-xs">
                    {item.type}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {item.subject}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{item.note}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
