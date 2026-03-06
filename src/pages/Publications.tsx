import { useState } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Import representative images from events
const eventImages = import.meta.glob("../assets/**/**.jpg", { eager: true });

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
  { author: "Shirin Sultana Anamika", season: "Fall", fileName: "Shirin_Sultana_Anamika_24103065.pdf" },
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
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; author: string } | null>(null);

  const blogs: BlogPost[] = [
    {
      title: "Advancing Healthcare Through Community Screening Programs",
      author: "BUNSC Medical Team",
      date: "November 2024",
      preview: "Exploring the impact of our Vitamin D and Lipid Profile testing campaigns. Learn how community health initiatives bridge the gap between medical awareness and preventive care.",
      category: "Health & Wellness",
      folderName: "Vitamin D test Day",
    },
    {
      title: "Food Safety and Climate-Resilient Agriculture",
      author: "Dr. Abed Chaudhury",
      date: "October 2024",
      preview: "A comprehensive overview of sustainable agricultural practices in the face of climate change. Insights from our seminar on ensuring food security for future generations.",
      category: "Environment",
      folderName: "Food safety and climate-resilient agriculture, Dr. Abed Chaudhury",
    },
    {
      title: "Ribbon of Hope: Standing with Cancer Warriors",
      author: "BUNSC Awareness Team",
      date: "September 2024",
      preview: "Our journey in creating awareness and spreading hope for cancer patients and survivors. A reflection on the power of community support and solidarity.",
      category: "Social Impact",
      folderName: "Ribbon of hope",
    },
    {
      title: "The BRACU National Biotech Olympiad Experience",
      author: "BUNSC Competition Team",
      date: "August 2024",
      preview: "Behind the scenes of organizing a national-level biotechnology competition. Celebrating young minds pushing the boundaries of biological sciences.",
      category: "Education",
      folderName: "Bracu national biotech olympiad",
    },
    {
      title: "Spectrum Splash: Where Science Meets Art",
      author: "BUNSC Creative Team",
      date: "July 2024",
      preview: "A vibrant celebration of diversity in science through creative expression. How art and science converge to inspire innovation and inclusivity.",
      category: "Culture",
      folderName: "Spectrum Splash",
    },
    {
      title: "Welcoming Fresh Minds: Fresher Orientation 2024",
      author: "BUNSC Panel",
      date: "September 2024",
      preview: "Introducing new students to the world of natural sciences at BRACU. Our approach to mentorship, guidance, and building a strong scientific community.",
      category: "Education",
      folderName: "Fresher Orientation of fall2024,  Department of Mathematics and Natural Sciences",
    },
  ];

  const magazines: Magazine[] = [
    {
      title: "BUNSC Annual Report 2024",
      issue: "Volume 3",
      date: "November 2024",
      description: "A comprehensive review of our achievements, events, and impact throughout the year. Featuring highlights from major campaigns and competitions.",
      folderName: "Club fair",
    },
    {
      title: "BioScience Today",
      issue: "Fall Edition",
      date: "October 2024",
      description: "Quarterly magazine featuring research articles, student projects, and breakthroughs in biotechnology and natural sciences.",
      folderName: "IBC",
    },
    {
      title: "The Nature Chronicle",
      issue: "Environmental Special",
      date: "September 2024",
      description: "Special issue focusing on environmental conservation, sustainable practices, and our field trips exploring natural habitats.",
      folderName: "BUNSC day tour",
    },
  ];

  const getPublicationImage = (folderName: string): string => {
    const imagePath = Object.keys(eventImages).find((path) =>
      path.includes(folderName) && !path.includes("Panel pictures") && !path.includes("icon") && !path.includes("hero-nature")
    );
    return imagePath ? (eventImages[imagePath] as ImageModule).default : "";
  };

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
  };

  return (
    <>
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gradient mb-8 text-center">Publications</h1>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Explore our blogs, research articles, and magazines documenting our journey in science and community service
          </p>

          <div className="max-w-6xl mx-auto space-y-16">

            {/* Latest Blogs Section */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Latest Blogs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {blogs.map((blog, index) => (
                  <div
                    key={index}
                    className="glass rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={getPublicationImage(blog.folderName)}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <Badge
                        variant="outline"
                        className={`mb-3 ${getCategoryColor(blog.category)}`}
                      >
                        {blog.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        By {blog.author} • {blog.date}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {blog.preview}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Magazines Section */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Magazines &amp; Publications</h2>
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
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{magazine.issue}</Badge>
                        <span className="text-xs text-muted-foreground">{magazine.date}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{magazine.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {magazine.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Editorial Writeup */}
            <section>
              <h2 className="text-3xl font-bold text-primary mb-2">Editorial Writeup</h2>
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

          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col animate-fade-in"
          onClick={() => setSelectedPdf(null)}
        >
          <div
            className="flex items-center justify-between px-6 py-3 bg-background/80 backdrop-blur-sm border-b border-border"
            onClick={(e) => e.stopPropagation()}
          >
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
