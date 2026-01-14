import { Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12">
              Connect.
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl">
              We are always open to new ideas, collaborations, and conversations.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-16 md:pb-24 border-t border-white/5">
        <div className="container mx-auto pt-16 md:pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <FadeIn delay={100}>
              <div>
                <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-8">
                  Inquiries
                </h2>
                <a 
                  href="mailto:club.bunsc@g.bracu.ac.bd" 
                  className="text-3xl md:text-5xl font-medium hover:text-primary transition-colors block mb-4 break-words"
                >
                  club.bunsc@g.bracu.ac.bd
                </a>
                <p className="text-xl text-muted-foreground font-light">
                  For general questions, partnerships, and press.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div>
                <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-8">
                  Visit Us
                </h2>
                <p className="text-3xl md:text-4xl font-medium mb-4">
                  BRAC University
                </p>
                <p className="text-xl text-muted-foreground font-light">
                  Merul Badda, Dhaka<br />
                  Bangladesh
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="mt-16 md:mt-24 pt-16 md:pt-24 border-t border-white/5">
            <FadeIn delay={300}>
              <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-12">
                Social
              </h2>
              <div className="flex flex-wrap gap-8 md:gap-16">
                {[
                  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/share/1AYawDpv3X/" },
                  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/nsc.bracu?igsh=YjcxdTU4c3VrYWp4" },
                  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@bunsc?si=kzhz3BvwpS9qGVOy" },
                  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/brac-university-natural-sciences-club/" },
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 text-xl md:text-2xl font-medium hover:text-primary transition-colors"
                  >
                    <social.icon className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    {social.name}
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
