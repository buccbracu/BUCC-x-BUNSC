import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Import all event images
const eventImages = import.meta.glob("../assets/**/*.{jpg,jpeg,png}", { eager: true });

interface ImageModule {
  default: string;
}

interface Event {
  title: string;
  description: string;
  status: "Ended" | "Upcoming";
  category: "Workshop" | "Seminar" | "Campaign" | "Social" | "Competition" | "Orientation";
  folderName: string;
}

interface LightboxState {
  images: string[];
  index: number;
  title: string;
}

const Events = () => {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = useCallback((images: string[], index: number, title: string) => {
    setLightbox({ images, index, title });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((lb) => lb ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length } : lb);
  }, []);

  const nextImage = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((lb) => lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : lb);
  }, []);

  const events: Event[] = [
    {
      title: "Club Fair",
      description: "Annual club fair showcasing BUNSC activities, achievements, and recruitment of new members. A vibrant event connecting students with science and nature.",
      status: "Ended",
      category: "Social",
      folderName: "Club fair",
    },
    {
      title: "BUNSC Day Tour",
      description: "Educational day tour exploring natural habitats and environmental conservation sites. Members engaged in field research and nature photography.",
      status: "Ended",
      category: "Social",
      folderName: "BUNSC day tour",
    },
    {
      title: "BUNSC Iftar Get Together",
      description: "Community bonding event bringing together club members for iftar during Ramadan. Fostering friendship and unity among science enthusiasts.",
      status: "Ended",
      category: "Social",
      folderName: "BUNSC Iftar get together",
    },
    {
      title: "BRACU National Biotech Olympiad 2023",
      description: "National-level biotechnology competition challenging students' knowledge and problem-solving skills in biological sciences and biotechnology.",
      status: "Ended",
      category: "Competition",
      folderName: "Bracu national biotech olympiad",
    },
    {
      title: "BRAC University Premier League (BUPL)",
      description: "Annual inter-departmental cricket tournament bringing together students from across BRAC University. Teams competed in exciting matches showcasing sportsmanship and athletic excellence.",
      status: "Ended",
      category: "Competition",
      folderName: "BUPL",
    },
    {
      title: "DU Innovation Fair",
      description: "Participated in Dhaka University Science Society's innovation fair, showcasing BUNSC research projects and scientific innovations.",
      status: "Ended",
      category: "Competition",
      folderName: "DU Innovation Fair, hosted by the Dhaka University Science Society",
    },
    {
      title: "Food Safety & Climate-Resilient Agriculture",
      description: "Seminar by Dr. Abed Chaudhury on sustainable agriculture practices and food security in the face of climate change challenges.",
      status: "Ended",
      category: "Seminar",
      folderName: "Food safety and climate-resilient agriculture, Dr. Abed Chaudhury",
    },
    {
      title: "MNS Freshers Orientation Fall 2024",
      description: "Orientation program for new students of the Department of Mathematics and Natural Sciences, introducing them to academic life and club activities.",
      status: "Ended",
      category: "Orientation",
      folderName: "Fresher Orientation of fall2024,  Department of Mathematics and Natural Sciences",
    },
    {
      title: "International Biology Competition (IBC)",
      description: "Students prepared for and participated in the International Biology Competition, showcasing their expertise in biological sciences.",
      status: "Ended",
      category: "Competition",
      folderName: "IBC",
    },
    {
      title: "Lipid Profile Test Day",
      description: "Free medical screening campaign providing lipid profile tests to community members. Promoting health awareness and preventive healthcare.",
      status: "Ended",
      category: "Campaign",
      folderName: "Lipid profile test day",
    },
    {
      title: "Vitamin D Test Day",
      description: "Community health initiative offering free Vitamin D testing. Raising awareness about Vitamin D deficiency and its health implications.",
      status: "Ended",
      category: "Campaign",
      folderName: "Vitamin D test Day",
    },
    {
      title: "Ribbon of Hope",
      description: "Awareness campaign supporting cancer patients and survivors. Creating ribbons and spreading messages of hope and solidarity.",
      status: "Ended",
      category: "Campaign",
      folderName: "Ribbon of hope",
    },
    {
      title: "Spectrum Splash",
      description: "Colorful celebration of diversity and creativity in science. Interactive event featuring experiments, demonstrations, and artistic expression.",
      status: "Ended",
      category: "Social",
      folderName: "Spectrum Splash",
    },
    {
      title: "Genesis — Fall 2023",
      description: "BUNSC's flagship orientation and induction program for new members in Fall 2023. A celebration of science, community, and the beginning of new journeys.",
      status: "Ended",
      category: "Orientation",
      folderName: "BUNSC Genesis fall 2023",
    },
    {
      title: "Genesis — Summer 2024",
      description: "The Summer 2024 edition of Genesis, welcoming a new cohort of science enthusiasts into the BUNSC family with engaging activities and introductions.",
      status: "Ended",
      category: "Orientation",
      folderName: "GENESIS summer 2024",
    },
    {
      title: "Genesis — Fall 2024",
      description: "The latest Genesis induction event for Fall 2024 members, marking the start of an exciting new chapter for BUNSC and its growing community.",
      status: "Ended",
      category: "Orientation",
      folderName: "Genesis Fall 2024",
    },
  ];

  // Get all images for an event folder
  const getEventImages = (folderName: string): string[] => {
    return Object.keys(eventImages)
      .filter((path) =>
        path.includes(folderName) &&
        !path.includes('Panel pictures') &&
        !path.includes('icon') &&
        !path.includes('hero-nature')
      )
      .map((path) => (eventImages[path] as ImageModule).default);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Workshop":
        return "bg-blue-500/10 text-blue-500 border-blue-500/30";
      case "Seminar":
        return "bg-purple-500/10 text-purple-500 border-purple-500/30";
      case "Campaign":
        return "bg-green-500/10 text-green-500 border-green-500/30";
      case "Social":
        return "bg-pink-500/10 text-pink-500 border-pink-500/30";
      case "Competition":
        return "bg-orange-500/10 text-orange-500 border-orange-500/30";
      case "Orientation":
        return "bg-cyan-500/10 text-cyan-500 border-cyan-500/30";
      default:
        return "bg-primary/10 text-primary border-primary/30";
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gradient mb-8 text-center">Our Events</h1>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Discover our exciting lineup of seminars, workshops, and medical campaigns
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const imgs = getEventImages(event.folderName);
            return (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Main image */}
              <div
                className="h-48 overflow-hidden cursor-pointer relative group"
                onClick={() => imgs.length > 0 && openLightbox(imgs, 0, event.title)}
              >
                {imgs[0] ? (
                  <img
                    src={imgs[0]}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-sm">No image</div>
                )}
                {imgs.length > 1 && (
                  <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
                    +{imgs.length} photos
                  </span>
                )}
              </div>

              {/* Thumbnail strip */}
              {imgs.length > 1 && (
                <div className="flex gap-1 px-2 pt-2 overflow-x-auto scrollbar-none">
                  {imgs.slice(0, 6).map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${event.title} ${i + 1}`}
                      className="h-12 w-12 object-cover rounded cursor-pointer flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity ring-1 ring-border"
                      onClick={() => openLightbox(imgs, i, event.title)}
                    />
                  ))}
                  {imgs.length > 6 && (
                    <div
                      className="h-12 w-12 rounded flex-shrink-0 bg-muted flex items-center justify-center text-xs text-muted-foreground cursor-pointer hover:bg-muted/80 ring-1 ring-border"
                      onClick={() => openLightbox(imgs, 6, event.title)}
                    >
                      +{imgs.length - 6}
                    </div>
                  )}
                </div>
              )}

              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className={getCategoryColor(event.category)}>
                    {event.category}
                  </Badge>
                  <Badge
                    variant={event.status === "Ended" ? "secondary" : "default"}
                    className={event.status === "Ended" ? "bg-muted text-muted-foreground" : ""}
                  >
                    {event.status}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mt-2 mb-3">{event.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/70 to-transparent" onClick={(e) => e.stopPropagation()}>
            <span className="text-white font-semibold text-lg">{lightbox.title}</span>
            <div className="flex items-center gap-3">
              <span className="text-white/60 text-sm">{lightbox.index + 1} / {lightbox.images.length}</span>
              <Button size="icon" variant="outline" onClick={closeLightbox} className="bg-background/20 border-white/20 hover:bg-background/40">
                <X className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>

          {/* Main image */}
          <div className="relative flex items-center justify-center w-full h-full px-16" onClick={(e) => e.stopPropagation()}>
            <Button size="icon" variant="outline" onClick={prevImage} className="absolute left-4 bg-background/20 border-white/20 hover:bg-background/40 z-10">
              <ChevronLeft className="h-6 w-6 text-white" />
            </Button>
            <img
              src={lightbox.images[lightbox.index]}
              alt={`${lightbox.title} ${lightbox.index + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <Button size="icon" variant="outline" onClick={nextImage} className="absolute right-4 bg-background/20 border-white/20 hover:bg-background/40 z-10">
              <ChevronRight className="h-6 w-6 text-white" />
            </Button>
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-0 left-0 right-0 flex gap-2 justify-center px-6 py-4 bg-gradient-to-t from-black/70 to-transparent overflow-x-auto" onClick={(e) => e.stopPropagation()}>
            {lightbox.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`thumb ${i + 1}`}
                className={`h-14 w-14 object-cover rounded cursor-pointer flex-shrink-0 transition-all ${i === lightbox.index ? "ring-2 ring-white opacity-100 scale-110" : "opacity-50 hover:opacity-80"}`}
                onClick={() => setLightbox((lb) => lb ? { ...lb, index: i } : lb)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
