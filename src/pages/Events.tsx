import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/FadeIn";

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
  ];

  // Get representative image for each event
  const getEventImage = (folderName: string): string => {
    const imagePath = Object.keys(eventImages).find((path) => 
      path.includes(folderName) && !path.includes('Panel pictures') && !path.includes('icon') && !path.includes('hero-nature')
    );
    return imagePath ? (eventImages[imagePath] as ImageModule).default : "";
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12">
              Happenings.
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl">
              A chronicle of our journey through science, community, and discovery.
            </p>
          </FadeIn>
        </div>
      </section>
      
      <section className="px-6 md:px-12 pb-16 md:pb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
            {events.map((event, index) => (
              <FadeIn key={index} delay={index * 100} className="h-full">
                <div className="group cursor-pointer hover-inspection p-4 rounded-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl mb-6 bg-secondary/20">
                    <img
                      src={getEventImage(event.folderName)}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-medium tracking-widest uppercase text-primary">
                      {event.category}
                    </span>
                    <span className="w-px h-3 bg-border" />
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                      {event.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm font-light line-clamp-3">
                    {event.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
