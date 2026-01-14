import { useState } from "react";
import { X, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

// Import panel images
import panel20222023 from "@/assets/Panel pictures/Panel pictures/panel 2022-2023.jpeg";
import panel20232024 from "@/assets/Panel pictures/Panel pictures/Panel 2023-2024.jpg";
import panel20242025 from "@/assets/Panel pictures/Panel pictures/Panel 2024_2025.jpg";

// Import advisor images
import advisorRafiqul from "@/assets/Dr. Mohammad Rafiqul Islam.jpg";
import advisorTawsif from "@/assets/Tawsif Ur Rashid.jpg";

interface PanelMember {
  name: string;
  designation: string;
  department: string;
  semester: string;
  id: string;
  contact: string;
  email: string;
}

const About = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const panelImages = [
    { year: "2024-2025", image: panel20242025 },
    { year: "2023-2024", image: panel20232024 },
    { year: "2022-2023", image: panel20222023 },
  ];

  const panelMembers: PanelMember[] = [
    {
      name: "Sheikh Samanta",
      designation: "President",
      department: "MNS (Microbiology)",
      semester: "11th",
      id: "22126006",
      contact: "01732689180",
      email: "sheikh.samanta@g.bracu.ac.bd",
    },
    {
      name: "Avijit Saha",
      designation: "Vice-President",
      department: "MNS (Biotechnology)",
      semester: "9th",
      id: "22236125",
      contact: "01791002913",
      email: "avijit.saha1@g.bracu.ac.bd",
    },
    {
      name: "Mekail Khan",
      designation: "General Secretary",
      department: "MNS (Microbiology)",
      semester: "11th",
      id: "22126050",
      contact: "01791666066",
      email: "mekail.khan@g.bracu.ac.bd",
    },
    {
      name: "Tasmin Tamanna",
      designation: "Treasurer",
      department: "MNS (Microbiology)",
      semester: "11th",
      id: "22126035",
      contact: "01313486797",
      email: "tasmin.tamanna@g.bracu.ac.bd",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Header Section */}
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12">
              Who we are.
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl">
              The BRAC University Natural Sciences Club is a collective of curious minds dedicated to bridging the gap between academic theory and the living world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Advisors Section - Clean & Minimal */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-16">
              Guidance
            </h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Mohammad Rafiqul Islam",
                role: "Club Advisor",
                title: "Professor of Statistics",
                image: advisorRafiqul,
                phone: "01726331009",
                email: "mrafiq@bracu.ac.bd"
              },
              {
                name: "Md. Tawsif Ur Rashid",
                role: "Club Co-Advisor",
                title: "Lecturer, Biotechnology Program",
                image: advisorTawsif,
                phone: "01689900896",
                email: "tawsif.rashid@bracu.ac.bd"
              }
            ].map((advisor, index) => (
              <FadeIn key={index} delay={index * 200} className="h-full">
                <div className="group hover-inspection p-6 rounded-2xl bg-secondary/5 transition-all duration-500 h-full flex flex-col">
                  <div className="aspect-square overflow-hidden rounded-full mb-6 bg-secondary/20 w-32 h-32 mx-auto">
                    <img 
                      src={advisor.image} 
                      alt={advisor.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-medium mb-1">{advisor.name}</h3>
                    <p className="text-primary text-sm mb-1">{advisor.role}</p>
                    <p className="text-muted-foreground text-xs mb-4">{advisor.title}</p>
                    
                    <div className="flex flex-col gap-2 text-xs text-muted-foreground/80 items-center">
                      <a href={`tel:${advisor.phone}`} className="hover:text-foreground transition-colors flex items-center gap-2">
                        <Phone className="w-3 h-3" /> {advisor.phone}
                      </a>
                      <a href={`mailto:${advisor.email}`} className="hover:text-foreground transition-colors flex items-center gap-2">
                        <Mail className="w-3 h-3" /> {advisor.email}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section - Editorial Grid */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-16">
              Leadership
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {panelMembers.map((member, index) => (
              <FadeIn key={index} delay={index * 100} className="h-full">
                <div className="p-6 rounded-2xl bg-secondary/5 hover-inspection transition-all duration-500 group h-full flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
                      {member.designation}
                    </p>
                    <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4">{member.department}</p>
                  </div>
                  
                  <div className="space-y-1 pt-4 border-t border-white/5">
                    <a href={`mailto:${member.email}`} className="block text-xs text-muted-foreground hover:text-foreground transition-colors truncate">
                      {member.email}
                    </a>
                    <p className="text-[10px] text-muted-foreground/60">ID: {member.id}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section - Horizontal Scroll */}
      <section className="py-16 md:py-24 border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 mb-12">
          <FadeIn>
            <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Legacy
            </h2>
          </FadeIn>
        </div>

        <div className="flex gap-8 overflow-x-auto px-6 md:px-12 pb-12 scrollbar-hide snap-x">
          {panelImages.map((panel, index) => (
            <div 
              key={index} 
              className="flex-none w-[85vw] md:w-[600px] snap-center cursor-pointer group"
              onClick={() => setSelectedImage(panel.image)}
            >
              <div className="aspect-video overflow-hidden rounded-2xl mb-4 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={panel.image}
                  alt={`Panel ${panel.year}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-lg font-medium">Panel {panel.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-foreground hover:bg-white/10 rounded-full w-12 h-12"
          >
            <X className="h-6 w-6" />
          </Button>
          <img
            src={selectedImage}
            alt="Full size panel"
            className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default About;
