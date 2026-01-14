import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Play, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCarousel from "@/components/EventCarousel";
import LivingField from "@/components/LivingField";
import ErrorBoundary from "@/components/ErrorBoundary";
import FadeIn from "@/components/FadeIn";
import heroImage from "@/assets/hero-nature.jpg";
import introVideo from "@/assets/intro.mp4";
import videoThumbnail from "@/assets/hero.jpg";



const HeroContent = ({ navigate }: { navigate: any }) => (
  <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex items-center justify-center pointer-events-none">
    <div className="max-w-5xl mx-auto text-center pointer-events-auto">
      <FadeIn>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-8 leading-[1.1] animate-reveal drop-shadow-2xl">
          BRAC University <br />
          <span className="text-primary italic font-serif">Natural Sciences Club</span>
        </h1>
      </FadeIn>
      
      <FadeIn delay={200}>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed mb-12 animate-reveal" style={{ animationDelay: '0.2s' }}>
          To discover the marvels of science,<br className="hidden md:block" />
          and to become a part of the community of inquisitive minds.
        </p>
      </FadeIn>

      <FadeIn delay={400}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-reveal" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => navigate("/contact")}
            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(89,166,115,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Become a Member
            <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button 
            onClick={() => document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-foreground/90 hover:text-foreground text-lg font-medium transition-colors flex items-center gap-2 group"
          >
            Explore Our Vision
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </FadeIn>
    </div>
  </div>
);

const Home = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const handleVideoClick = () => {
    if (mainVideoRef.current) {
      if (isVideoPlaying) {
        mainVideoRef.current.pause();
      } else {
        mainVideoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Hero Section - Living Field of Curiosity */}
      <ErrorBoundary fallback={
        <div className="relative h-screen w-full overflow-hidden bg-background">
          <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <HeroContent navigate={navigate} />
        </div>
      }>
        <LivingField>
          <HeroContent navigate={navigate} />
        </LivingField>
      </ErrorBoundary>

      {/* Manifesto Section - Editorial Typography */}
      <section id="manifesto" className="py-24 md:py-48 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-medium leading-tight tracking-tight mb-16 text-center md:text-left max-w-4xl">
                <span className="text-muted-foreground">We believe that science is not just a subject.</span>
                <br />
                <span className="text-foreground">It is a language we use to speak with the universe.</span>
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="md:col-span-5">
                <FadeIn delay={200}>
                  <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                    <p className="text-lg leading-relaxed text-thought">
                      At BRAC University Natural Sciences Club, we strip away the sterility of the laboratory to reveal the pulse of discovery. We foster a community where research is driven by passion, and sustainability is more than a buzzword—it's a survival instinct.
                    </p>
                    <p className="text-lg leading-relaxed mt-6 text-thought" style={{ animationDelay: '0.2s' }}>
                      From the microscopic to the cosmic, we invite you to look closer. To question deeper. To belong to something that grows.
                    </p>
                  </div>
                </FadeIn>
              </div>
              
              <div className="md:col-span-7">
                <FadeIn delay={400}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-2xl hover-inspection" onClick={handleVideoClick}>
                    <video
                      ref={mainVideoRef}
                      className="w-full h-full object-cover"
                      poster={videoThumbnail}
                      controls={isVideoPlaying}
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                      onEnded={() => {
                        setIsVideoPlaying(false);
                        if (mainVideoRef.current) mainVideoRef.current.load();
                      }}
                    >
                      <source src={introVideo} type="video/mp4" />
                    </video>
                    {!isVideoPlaying && (
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 text-center md:text-left animate-reveal">
                    Watch our story unfold (02:14)
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Minimalist & Impactful */}
      <section className="py-32 bg-secondary/30 border-y border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
              {[
                { number: "500+", label: "Minds Ignited" },
                { number: "50+", label: "Gatherings" },
                { number: "20+", label: "Breakthroughs" },
                { number: "10K+", label: "Lives Touched" },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center group text-center">
                  <span className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-2 transition-colors duration-500 group-hover:text-primary">
                    {stat.number}
                  </span>
                  <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground/80">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Events Section - Curated Experiences */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 mb-16">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <h3 className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
                  Curated Experiences
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Moments that define us.
                </h2>
              </div>
              <Button variant="link" className="text-lg p-0 h-auto text-muted-foreground hover:text-foreground transition-colors" onClick={() => navigate('/events')}>
                View all events <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </FadeIn>
        </div>
        
        <div className="w-full">
          <EventCarousel />
        </div>
      </section>

      {/* CTA Section - Belonging Moment */}
      <section className="py-24 md:py-48 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <FadeIn>
            <p className="text-lg md:text-xl text-primary mb-6 tracking-widest uppercase opacity-80">
              Curiosity is better when shared
            </p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Find your place <br />
              <span className="text-muted-foreground">in the ecosystem.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-12 font-light">
              Whether you're a researcher, a dreamer, or a builder—there is a space for you here.
            </p>
            <button 
              onClick={() => navigate("/contact")}
              className="px-10 py-5 bg-foreground text-background rounded-full font-medium text-lg transition-all duration-500 hover:scale-[1.02] hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
            >
              Join BUNSC Today
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;
