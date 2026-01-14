import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Youtube } from "lucide-react";
import logoIcon from "@/assets/icon.jpg";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 md:mb-16">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-10 h-10 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={logoIcon} alt="BUNSC Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-medium tracking-tight text-foreground">BUNSC</span>
            </Link>
            <p className="text-lg text-muted-foreground max-w-md font-light leading-relaxed">
              Bridging the gap between scientific inquiry and the natural world. We are building a future where research meets responsibility.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium text-sm tracking-widest uppercase text-foreground/50 mb-6">Explore</h3>
            <ul className="space-y-4">
              {[
                { name: "About", path: "/about" },
                { name: "Events", path: "/events" },
                { name: "Publications", path: "/publications" },
                { name: "Media", path: "/media" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-medium text-sm tracking-widest uppercase text-foreground/50 mb-6">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:club.bunsc@g.bracu.ac.bd" className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Email Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/share/1AYawDpv3X/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/nsc.bracu?igsh=YjcxdTU4c3VrYWp4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/@bunsc?si=kzhz3BvwpS9qGVOy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2"
                >
                  <Youtube className="w-4 h-4" />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/60">
          <p>&copy; {new Date().getFullYear()} BRAC University Natural Sciences Club.</p>
          <div className="flex gap-6">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
