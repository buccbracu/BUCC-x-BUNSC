import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCarousel from "@/components/EventCarousel";
import SponsorScroll from "@/components/SponsorScroll";
import heroImage from "@/assets/hero-nature.jpg";
import introVideo from "@/assets/intro.mp4";
import videoThumbnail from "@/assets/hero.jpg";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Nature and Science"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-bold mb-6 text-gradient leading-tight">
              BRAC University Natural Sciences Club
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              BUNSC - Fostering innovation, research, and sustainability through
              scientific exploration and community engagement.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => navigate("/contact")}
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Join Our Community
              </Button>
            </div>

            {/* Video Player */}
            <div
              className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl group"
            >
              <video
                ref={mainVideoRef}
                className="w-full h-auto"
                poster={videoThumbnail}
                controls={isVideoPlaying}
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
                onEnded={() => {
                  setIsVideoPlaying(false);
                  if (mainVideoRef.current) {
                    mainVideoRef.current.load();
                  }
                }}
              >
                <source src={introVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isVideoPlaying && (
                <div 
                  className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors flex items-center justify-center cursor-pointer"
                  onClick={handleVideoClick}
                >
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform animate-glow">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Recent Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest events, campaigns, and initiatives making a
              positive impact on science education and environmental
              conservation.
            </p>
          </div>
          <EventCarousel />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2011", label: "Founding Year" },
              { number: "469", label: "Current Members" },
              { number: "2", label: "Advisors" },
              { number: "4", label: "Panel Members" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl glass hover:bg-card/60 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Sponsors & Partners section (temporarily disabled) */}
      {/*
      <section className="py-12">
        <div className="container mx-auto px-4 text-center mb-8">
          <h2 className="text-3xl font-bold text-gradient mb-2">
            Our Sponsors & Partners
          </h2>
          <p className="text-muted-foreground">
            Supporting our mission for a sustainable future
          </p>
        </div>
        <SponsorScroll />
      </section>
      */}
    </div>
  );
};

export default Home;
