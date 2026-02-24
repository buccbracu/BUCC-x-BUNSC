import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Youtube } from "lucide-react";
import logoIcon from "@/assets/icon.jpg";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                <img src={logoIcon} alt="BUNSC Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-lg font-bold text-gradient">BUNSC</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Bridging science and nature to create a sustainable future through
              research, education, and community outreach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  to="/media"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Media Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <a href="mailto:club.bunsc@g.bracu.ac.bd" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  club.bunsc@g.bracu.ac.bd
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Facebook className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <a 
                  href="https://www.facebook.com/share/1AYawDpv3X/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Instagram className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/nsc.bracu?igsh=YjcxdTU4c3VrYWp4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Youtube className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <a 
                  href="https://youtube.com/@bunsc?si=kzhz3BvwpS9qGVOy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  BRAC University, Merul Badda
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Follow Us</h3>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/brac-university-natural-sciences-club/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@bunsc?si=kzhz3BvwpS9qGVOy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            © {new Date().getFullYear()} BUNSC. All rights reserved.
          </p>
          <p className="text-base">
            Built by{" "}
            <a
              href="https://www.bracucc.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold text-lg hover:text-primary/80 hover:underline transition-all inline-flex items-center gap-1"
            >
              BRAC University Computer Club (BUCC)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
