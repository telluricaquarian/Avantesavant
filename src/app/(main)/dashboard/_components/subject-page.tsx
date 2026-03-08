import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface Concept {
  title: string;
  body: string;
}

export interface Lesson {
  title: string;
  body: string;
  tags?: string[];
}

export interface Source {
  author: string;
  work: string;
  description: string;
}

export interface SubjectData {
  title: string;
  eyebrow: string;
  intro: string;
  concepts: Concept[];
  lessons: Lesson[];
  notes: string;
  sources: Source[];
}

export function SubjectPage({ subject }: { readonly subject: SubjectData }) {
  return (
    <div className="@container/main flex flex-col gap-6">
      <div>
        <p className="mb-1 font-semibold text-muted-foreground text-xs uppercase tracking-widest">{subject.eyebrow}</p>
        <h1 className="mb-2 font-bold text-2xl tracking-tight md:text-3xl">{subject.title}</h1>
        <p className="max-w-2xl text-muted-foreground text-sm">{subject.intro}</p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="lessons">Lessons</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="sources">Sources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subject.concepts.map((concept) => (
              <Card key={concept.title}>
                <CardHeader className="pb-3">
                  <CardTitle className="font-semibold text-sm">{concept.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{concept.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="lessons" className="mt-4">
          <div className="flex flex-col gap-4">
            {subject.lessons.map((lesson, i) => (
              <Card key={lesson.title}>
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border font-semibold text-xs tabular-nums">
                      {i + 1}
                    </span>
                    <CardTitle className="text-base leading-snug">{lesson.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{lesson.body}</p>
                  {lesson.tags && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {lesson.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="notes" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <p className="whitespace-pre-line text-muted-foreground text-sm">{subject.notes}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sources" className="mt-4">
          <div className="flex flex-col gap-3">
            {subject.sources.map((source) => (
              <Card key={source.work}>
                <CardHeader className="pb-2">
                  <CardTitle className="font-semibold text-sm">{source.work}</CardTitle>
                  <CardDescription className="text-xs">{source.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{source.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
