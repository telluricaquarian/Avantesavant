import { ChartAreaInteractive } from "./_components/chart-area-interactive";
import data from "./_components/data.json";
import { DataTable } from "./_components/data-table";
import { SectionCards } from "./_components/section-cards";

export default function Page() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
      <div className="rounded-xl border bg-card px-6 py-8 md:px-10 md:py-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Avantesavante</p>
        <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">The New Genius</h1>
        <p className="mb-4 text-lg text-muted-foreground">Breaking new ground. keeping the mind sound.</p>
        <p className="mb-2 max-w-2xl text-sm text-muted-foreground">
          Turning pre-existing educational content and redistributing it — purposefully derivative content
          redistribution, with all sourced content cited and original authors given their due credit.
        </p>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Educational platform dedicated towards ensuring your thinking machine (brain) is &ldquo;well oiled&rdquo;.
        </p>
      </div>
      <SectionCards />
      <ChartAreaInteractive />
      <DataTable data={data} />
    </div>
  );
}
