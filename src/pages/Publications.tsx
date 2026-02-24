import { useState } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Import editorial write-up PDFs
const editorialPdfModules = import.meta.glob("../assets/Editorial write up/**/*.pdf", { eager: true });

// Import write-up PDFs as URLs
const writeupPdfs = import.meta.glob("../assets/write-up submissions/**/*.pdf", { query: "?url", import: "default", eager: true });
// Import write-up cover images
const writeupImages = import.meta.glob("../assets/write-up submissions/**/*.jpg", { eager: true });

interface ImageModule {
  default: string;
}

interface BlogPost {
  title: string;
  author: string;
  date: string;
  preview: string;
  category: string;
  folderName: string;
}

interface Magazine {
  title: string;
  issue: string;
  date: string;
  description: string;
  folderName: string;
}

interface WriteUpBlog {
  author: string;
  season: "Fall" | "Spring";
  fileName: string;
}

const fallWriteUps: WriteUpBlog[] = [
  { author: "Afrin Ali", season: "Fall", fileName: "Afrin Ali_1000054827 (1).pdf" },
  { author: "Ananya Ahmed Tisha", season: "Fall", fileName: "Ananya Ahmed TIsha _ 23226037-1.pdf" },
  { author: "Lamisa Morshed", season: "Fall", fileName: "LamisaMorshed_24226006.pdf" },
  { author: "Nuria Afroze", season: "Fall", fileName: "Nuria Afroze_22226035.pdf" },
];

const springWriteUps: WriteUpBlog[] = [
  { author: "Abontika Barua", season: "Spring", fileName: "Abontika_Barua.pdf" },
  { author: "Jahara Jinan Janifa", season: "Spring", fileName: "Jahara_Jinan_Janifa.pdf" },
  { author: "Lamisa Morshed", season: "Spring", fileName: "Lamisa_Morshed.pdf" },
  { author: "Sadia Rahman Oishi", season: "Spring", fileName: "Sadia_Rahman_Oishi.pdf" },
];

const getPdfUrl = (season: string, fileName: string): string => {
  const key = Object.keys(writeupPdfs).find((k) => k.includes(season) && k.includes(fileName));
  return key ? (writeupPdfs[key] as string) : "";
};

const getWriteupImage = (season: string, index: number): string => {
  const seasonImages = Object.keys(writeupImages)
    .filter((k) => k.includes(season))
    .sort();
  const imgKey = seasonImages[index];
  return imgKey ? (writeupImages[imgKey] as ImageModule).default : "";
};

const Publications = () => {
  // Organize editorial write-ups by season (Fall/Spring)
  const editorialWriteUps: Record<string, { title: string; url: string }[]> = {
    Fall: [],
    Spring: [],
  };

  const [selectedPdf, setSelectedPdf] = useState<{ url: string; author: string } | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Health & Wellness":
        return "bg-green-500/10 text-green-500 border-green-500/30";
      case "Environment":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/30";
      case "Social Impact":
        return "bg-pink-500/10 text-pink-500 border-pink-500/30";
      case "Education":
        return "bg-blue-500/10 text-blue-500 border-blue-500/30";
      case "Culture":
        return "bg-purple-500/10 text-purple-500 border-purple-500/30";
      default:
        return "bg-primary/10 text-primary border-primary/30";
    }
    editorialWriteUps[season].push({ title, url });
  });

  Object.values(editorialWriteUps).forEach((items) =>
    items.sort((a, b) => a.title.localeCompare(b.title))
  );

  const totalCount = (editorialWriteUps.Fall?.length || 0) + (editorialWriteUps.Spring?.length || 0);

  return (
    <>
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

          {/* Blogs Section - Student Write-up Submissions */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-2">Blogs</h2>
            <p className="text-muted-foreground mb-8">Student write-up submissions from our members</p>

            {/* Fall Write-ups */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
                <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/30 text-sm px-3 py-1">Fall</Badge>
                Fall Write-ups
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {fallWriteUps.map((writeup, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPdf({ url: getPdfUrl("Fall", writeup.fileName), author: writeup.author })}
                    className="glass rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                  >
                    <div className="h-44 overflow-hidden bg-gradient-to-br from-orange-500/20 to-amber-500/10">
                      {getWriteupImage("Fall", index) && (
                        <img
                          src={getWriteupImage("Fall", index)}
                          alt={writeup.author}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="p-5">
                      <Badge variant="outline" className="mb-3 bg-orange-500/10 text-orange-500 border-orange-500/30">
                        Fall
                      </Badge>
                      <h4 className="font-bold text-base mb-1">{writeup.author}</h4>
                      <p className="text-xs text-muted-foreground">Student Write-up • Fall Semester</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Spring Write-ups */}
            <div>
              <h3 className="text-xl font-semibold mb-5 flex items-center gap-2">
                <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/30 text-sm px-3 py-1">Spring</Badge>
                Spring Write-ups
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {springWriteUps.map((writeup, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPdf({ url: getPdfUrl("Spring", writeup.fileName), author: writeup.author })}
                    className="glass rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                  >
                    <div className="h-44 overflow-hidden bg-gradient-to-br from-green-500/20 to-emerald-500/10">
                      {getWriteupImage("Spring", index) && (
                        <img
                          src={getWriteupImage("Spring", index)}
                          alt={writeup.author}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="p-5">
                      <Badge variant="outline" className="mb-3 bg-green-500/10 text-green-500 border-green-500/30">
                        Spring
                      </Badge>
                      <h4 className="font-bold text-base mb-1">{writeup.author}</h4>
                      <p className="text-xs text-muted-foreground">Student Write-up • Spring Semester</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Magazines Section */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Magazines & Publications</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {magazines.map((magazine, index) => (
                <div
                  key={index}
                  className="glass rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="h-72 overflow-hidden">
                    <img
                      src={getPublicationImage(magazine.folderName)}
                      alt={magazine.title}
                      className="w-full h-full object-cover"
                    />
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

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col animate-fade-in"
          onClick={() => setSelectedPdf(null)}
        >
          <div className="flex items-center justify-between px-6 py-3 bg-background/80 backdrop-blur-sm border-b border-border" onClick={(e) => e.stopPropagation()}>
            <span className="font-semibold text-lg">{selectedPdf.author}</span>
            <Button size="icon" variant="outline" onClick={() => setSelectedPdf(null)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={selectedPdf.url}
              className="w-full h-full"
              title={selectedPdf.author}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Publications;
