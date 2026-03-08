import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const pinnedNotes = [
  {
    title: "On Redistribution with Attribution",
    date: "Pinned",
    body: "The core thesis of Avantesavante: educational value is created not only by original research but by the careful redistribution, synthesis, and contextualization of existing knowledge. Wikipedia proved this at scale. The obligation is always to cite, credit, and link back to the original thinkers.",
  },
  {
    title: "Prompting vs Fine-tuning",
    date: "AI Foundations",
    body: "Key distinction: prompting operates at inference time and requires no model retraining. Fine-tuning adjusts model weights and requires labeled data and compute. Most application development happens at the prompting layer — reserve fine-tuning for cases where prompting genuinely cannot meet the requirement.",
  },
  {
    title: "RAG Quality is Bounded by Retrieval",
    date: "RAG Systems",
    body: "A perfect language model cannot compensate for poor retrieval. If the retrieval step does not surface the relevant passage, the model will hallucinate or abstain. Retrieval quality is the leverage point — invest there first.",
  },
  {
    title: "Dark Mode Is Not an Inversion",
    date: "Creative Direction",
    body: "Dark mode designed by inverting a light-mode palette looks flat and lifeless. Proper dark mode uses a range of dark gray surfaces to communicate depth and elevation. Text contrast must meet WCAG AA as a minimum. Shadows are less effective in dark mode — use surface lightness to convey z-depth instead.",
  },
];

export default function Page() {
  return (
    <div className="@container/main flex flex-col gap-6">
      <div>
        <p className="mb-1 font-semibold text-muted-foreground text-xs uppercase tracking-widest">Library</p>
        <h1 className="mb-2 font-bold text-2xl tracking-tight md:text-3xl">Notes</h1>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Synthesis notes and key observations from across the curriculum. These are working notes — distillations, not
          transcriptions.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {pinnedNotes.map((note) => (
          <Card key={note.title}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="text-base">{note.title}</CardTitle>
                <CardDescription className="shrink-0 text-xs">{note.date}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{note.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
