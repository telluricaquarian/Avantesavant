import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const lists = [
  {
    title: "AI & Language Models",
    description: "Foundational papers and books on modern AI systems.",
    items: [
      "Attention Is All You Need — Vaswani et al., 2017",
      "Language Models are Few-Shot Learners — Brown et al., 2020",
      "Chain-of-Thought Prompting — Wei et al., 2022",
      "The Alignment Problem — Brian Christian, 2020",
    ],
  },
  {
    title: "Knowledge & Learning",
    description: "Research and books on how humans learn and retain information.",
    items: [
      "Make It Stick — Brown, Roediger, McDaniel",
      "Thinking, Fast and Slow — Daniel Kahneman",
      "Communicating with Slip Boxes — Niklas Luhmann",
      "A Mind for Numbers — Barbara Oakley",
    ],
  },
  {
    title: "Design & Systems",
    description: "Texts on visual design, information architecture, and systems thinking.",
    items: [
      "The Visual Display of Quantitative Information — Edward Tufte",
      "Thinking with Type — Ellen Lupton",
      "The Design of Everyday Things — Don Norman",
      "Thinking in Systems — Donella Meadows",
    ],
  },
  {
    title: "Bioenergetics & Biology",
    description: "Research into cellular energy systems and biological physics.",
    items: [
      "The Fourth Phase of Water — Gerald H. Pollack",
      "Cancer as a Metabolic Disease — Thomas Seyfried",
      "Hydrogen as a Therapeutic Antioxidant — Ohsawa et al., 2007",
      "The Water Wizard — Viktor Schauberger (compiled by Callum Coats)",
    ],
  },
];

export default function Page() {
  return (
    <div className="@container/main flex flex-col gap-6">
      <div>
        <p className="mb-1 font-semibold text-muted-foreground text-xs uppercase tracking-widest">Library</p>
        <h1 className="mb-2 font-bold text-2xl tracking-tight md:text-3xl">Reading Lists</h1>
        <p className="max-w-2xl text-muted-foreground text-sm">
          Curated reading lists organized by subject. Each entry links back to the thinkers and researchers whose work
          this platform draws from.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {lists.map((list) => (
          <Card key={list.title}>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">{list.title}</CardTitle>
              <CardDescription className="text-xs">{list.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5">
                {list.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm">
                    — {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
