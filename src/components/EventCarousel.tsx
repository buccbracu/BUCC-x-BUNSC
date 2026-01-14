import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import event images
const eventImages = import.meta.glob("../assets/**/**.jpg", { eager: true });

interface ImageModule {
  default: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  folderName: string;
  date: string;
}

const eventsData: Event[] = [
  {
    id: 1,
    title: "Vitamin D Test Day",
    description: "Community health initiative offering free Vitamin D testing and raising awareness about deficiency prevention",
    folderName: "Vitamin D test Day",
    date: "October 2024",
  },
  {
    id: 2,
    title: "Club Fair 2024",
    description: "Annual club fair showcasing BUNSC activities, achievements, and welcoming new members to our community",
    folderName: "Club fair",
    date: "September 2024",
  },
  {
    id: 3,
    title: "BUNSC Day Tour",
    description: "Educational field trip exploring natural habitats and environmental conservation sites with club members",
    folderName: "BUNSC day tour",
    date: "August 2024",
  },
  {
    id: 4,
    title: "Food Safety & Climate Agriculture",
    description: "Seminar by Dr. Abed Chaudhury on sustainable agriculture and food security in climate change",
    folderName: "Food safety and climate-resilient agriculture, Dr. Abed Chaudhury",
    date: "July 2024",
  },
  {
    id: 5,
    title: "Ribbon of Hope",
    description: "Awareness campaign supporting cancer patients and survivors, spreading messages of hope and solidarity",
    folderName: "Ribbon of hope",
    date: "June 2024",
  },
  {
    id: 6,
    title: "Spectrum Splash",
    description: "Colorful celebration of diversity in science featuring experiments, demonstrations, and creative expression",
    folderName: "Spectrum Splash",
    date: "May 2024",
  },
];

// Get representative image for each event
const getEventImage = (folderName: string): string => {
  const imagePath = Object.keys(eventImages).find((path) => 
    path.includes(folderName) && !path.includes('Panel pictures') && !path.includes('icon') && !path.includes('hero-nature')
  );
  return imagePath ? (eventImages[imagePath] as ImageModule).default : "";
};

const events = eventsData.map(event => ({
  ...event,
  image: getEventImage(event.folderName)
}));

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const minSwipeDistance = 50;
  const autoPlayInterval = 5000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % events.length);
        setShowSwipeHint(false);
      }, autoPlayInterval);
    }
    return () => resetTimeout();
  }, [currentIndex, isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setShowSwipeHint(false);
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto px-6 md:px-12"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event) => (
            <div key={event.id} className="w-full flex-shrink-0">
              <Card className="border-0 bg-card/40 backdrop-blur-md overflow-hidden h-full">
                <CardContent className="p-0 h-full">
                  <div className="grid md:grid-cols-2 gap-0 h-full">
                    <div className="relative h-64 md:h-[500px] overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-16 bg-gradient-to-br from-card/50 to-background/50">
                      <span className="text-sm text-primary font-bold tracking-widest uppercase mb-4">
                        {event.date}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-bold mb-6 text-foreground tracking-tight leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        {showSwipeHint && (
          <div className="md:hidden absolute inset-0 pointer-events-none flex items-center justify-center z-30">
            <div className="bg-black/30 backdrop-blur-sm p-4 rounded-full text-white">
              <Hand className="w-8 h-8 animate-swipe-gesture" />
              <style>{`
                @keyframes swipe-gesture {
                  0%, 100% { transform: translateX(10px); opacity: 0.5; }
                  50% { transform: translateX(-10px); opacity: 1; }
                }
                .animate-swipe-gesture {
                  animation: swipe-gesture 1.5s ease-in-out infinite;
                }
              `}</style>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30 hover:border-primary bg-background/80 backdrop-blur-sm z-10"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30 hover:border-primary bg-background/80 backdrop-blur-sm z-10"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;
