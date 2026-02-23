import { Badge } from "@/components/ui/badge";

import fallbackImage from "@/assets/hero.jpg";

// Import event images (one representative image from each event folder)
const eventImages = import.meta.glob("../assets/**/**.jpg", { eager: true });

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

const Events = () => {
  const events: Event[] = [
    {
      title: "Genesis",
      description: "Introductory orientation session for newly recruited members, familiarizing them with the club's structure, goals, and upcoming activities.",
      status: "Ended",
      category: "Orientation",
      folderName: "Genesis",
    },
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
      title: "BUNSC Iftar Party",
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
      title: "International Biotechnology Conference (IBC)",
      description: "Participation and engagement in the International Biotechnology Conference, representing BUNSC and exploring innovations in biotechnology and life sciences.",
      status: "Ended",
      category: "Seminar",
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
  ];

  // Get representative image for each event
  const getEventImage = (folderName: string): string => {
    const imagePath = Object.keys(eventImages).find((path) => 
      path.includes(folderName) && !path.includes('Panel pictures') && !path.includes('icon') && !path.includes('hero-nature')
    );
    return imagePath ? (eventImages[imagePath] as ImageModule).default : fallbackImage;
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
          {events.map((event, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden hover:scale-105 transition-transform animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={getEventImage(event.folderName)}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    variant="outline"
                    className={getCategoryColor(event.category)}
                  >
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
