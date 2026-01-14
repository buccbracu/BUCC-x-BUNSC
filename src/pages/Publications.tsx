import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/FadeIn";

// Import representative images from events
const eventImages = import.meta.glob("../assets/**/**.jpg", { eager: true });

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

const Publications = () => {
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

  // Get representative image for each publication
  const getPublicationImage = (folderName: string): string => {
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
              Insights.
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl">
              Thoughts, research, and stories from the frontier of natural sciences.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16 md:pb-24 border-t border-white/5">
        <div className="container mx-auto pt-16 md:pt-24">
          <FadeIn>
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-16">
              Articles
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
            {blogs.map((blog, index) => (
              <FadeIn key={index} delay={index * 100} className="h-full">
                <div className="group cursor-pointer hover-inspection p-4 rounded-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="aspect-[3/2] overflow-hidden rounded-xl mb-6 bg-secondary/20">
                    <img
                      src={getPublicationImage(blog.folderName)}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-medium tracking-widest uppercase text-primary">
                      {blog.category}
                    </span>
                    <span className="w-px h-3 bg-border" />
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                      {blog.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm font-light line-clamp-3">
                    {blog.preview}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-6 h-px bg-border" />
                    {blog.author}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16 md:pb-24 border-t border-white/5">
        <div className="container mx-auto pt-16 md:pt-24">
          <FadeIn>
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-16">
              Publications
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {magazines.map((magazine, index) => (
              <FadeIn key={index} delay={index * 100} className="h-full">
                <div className="group cursor-pointer hover-inspection p-4 rounded-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg mb-6 shadow-sm bg-secondary/20 relative">
                    <img
                      src={getPublicationImage(magazine.folderName)}
                      alt={magazine.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{magazine.title}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{magazine.issue}</p>
                  <p className="text-xs text-muted-foreground/60">{magazine.date}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
