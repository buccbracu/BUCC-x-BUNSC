import { FileText, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Import editorial write-up PDFs
const editorialPdfModules = import.meta.glob("../assets/Editorial write up/**/*.pdf", { eager: true });

interface PdfModule {
  default: string;
}

const Publications = () => {
  // Organize editorial write-ups by season (Fall/Spring)
  const editorialWriteUps: Record<string, { title: string; url: string }[]> = {
    Fall: [],
    Spring: [],
  };

  Object.entries(editorialPdfModules).forEach(([path, module]) => {
    const parts = path.split("/");
    const seasonIndex = parts.findIndex((p) => p === "Editorial write up") + 1;
    const season = parts[seasonIndex] || "Other";
    const fileName = parts[parts.length - 1] || "";
    const title = decodeURIComponent(fileName)
      .replace(/\.pdf$/i, "")
      .replace(/[_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const url = (module as PdfModule).default;

    if (!editorialWriteUps[season]) {
      editorialWriteUps[season] = [];
    }
    editorialWriteUps[season].push({ title, url });
  });

  Object.values(editorialWriteUps).forEach((items) =>
    items.sort((a, b) => a.title.localeCompare(b.title))
  );

  const totalCount = (editorialWriteUps.Fall?.length || 0) + (editorialWriteUps.Spring?.length || 0);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold text-gradient mb-4">Editorial Write-Ups</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse editorial submissions curated from our seasonal sessions.
            </p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <Badge variant="secondary">{totalCount} PDFs</Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">
                From Assets / Editorial write up
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {(["Fall", "Spring"] as const).map((season) => (
              <section key={season} className="glass rounded-2xl p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">{season}</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {editorialWriteUps[season]?.length || 0} submission(s)
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <FileText className="h-5 w-5" />
                    <span className="text-sm">PDF</span>
                  </div>
                </div>

                {editorialWriteUps[season]?.length ? (
                  <div className="space-y-3">
                    {editorialWriteUps[season].map((item) => (
                      <div
                        key={item.url}
                        className="flex items-center justify-between gap-3 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm p-4"
                      >
                        <div className="min-w-0">
                          <p className="font-semibold truncate">{item.title}</p>
                          <p className="text-xs text-muted-foreground">Opens in a new tab</p>
                        </div>
                        <Button asChild variant="outline" className="shrink-0">
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            Open <ArrowUpRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-border/60 p-6 text-center">
                    <p className="text-sm text-muted-foreground">No write-ups found in this season.</p>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
