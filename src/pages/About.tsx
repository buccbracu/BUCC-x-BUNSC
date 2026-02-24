import { useState } from "react";
import { X, Mail, Phone, Users, Calendar, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gradient mb-8 text-center">About BUNSC</h1>
        
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Our Club Section */}
          <section id="club" className="scroll-mt-24 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Club</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The BRAC University Natural Sciences Club (BUNSC) is a student-led organization founded in 2011.
              We serve as a platform for students to learn beyond the classroom—through competitions, seminars,
              scientific news, and real-world awareness initiatives—while building a supportive science community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Founding Year</h3>
                </div>
                <p className="text-3xl font-bold text-gradient">2011</p>
              </div>
              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Current Members</h3>
                </div>
                <p className="text-3xl font-bold text-gradient">469</p>
              </div>
              <div className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  Discover the marvels of science and become part of a community of inquisitive minds.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Objectives */}
          <section id="mission" className="scroll-mt-24 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-6">Mission & Objectives</h2>

            <div className="glass rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Mission</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>1. To inspire and engage BRAC University students in the natural sciences.</li>
                <li>2. To organize seminars, workshops, and outreach that enhance scientific literacy.</li>
                <li>3. To foster research exposure, collaboration, and innovation among undergraduates in natural science disciplines.</li>
              </ul>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Objectives</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>1. Provide hands-on scientific learning experiences beyond coursework.</li>
                <li>2. Host expert-led lectures, panel discussions, and awareness campaigns.</li>
                <li>3. Promote interdisciplinary science initiatives and research exposure.</li>
                <li>4. Increase participation in national/international conferences and competitions.</li>
                <li>5. Build a supportive network among students across physics, biotechnology, microbiology, mathematics, CSE, and more.</li>
              </ul>
            </div>
          </section>

          {/* Goals & Uniqueness */}
          <section id="goals" className="scroll-mt-24 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-6">Goals & Uniqueness</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Goals (Next 3 Years)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>1. Achieve 500+ active members, growing from current participation.</li>
                  <li>2. Institutionalize annual signature events like research day or life sciences conferences/competitions.</li>
                  <li>3. Facilitate student research presentations at national/international forums.</li>
                  <li>4. Expand industry partnerships and sponsorships (e.g., Beacon Pharma, Quest Bangladesh).</li>
                  <li>5. Launch collaborative science–society outreach programs with academic and NGO institutions.</li>
                </ul>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">What Makes Us Different</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>1. Science-focused: centered exclusively on scientific inquiry and education.</li>
                  <li>2. Interdisciplinary: welcomes students from physics, biotechnology, microbiology, mathematics, and more.</li>
                  <li>3. Bridges academia & industry through applied awareness drives and expert seminars.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Programs */}
          <section id="programs" className="scroll-mt-24 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-6">Programs & Activities</h2>

            <div className="glass rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Yearly Signature Events</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>1. Seminars on life sciences featuring expert speakers from academia and industry.</li>
                <li>2. Health screening events (e.g., cancer screenings, Vitamin D deficiency screening and awareness).</li>
                <li>3. Online creative initiatives like Synapse and editorial/scientific write-up competitions.</li>
                <li>4. Club partnership in major inter-university events, contributing scientific expertise and representation.</li>
                <li>5. Active participation in university-wide events like BUFL and BUPL to build teamwork and engagement.</li>
              </ul>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Regular Events & Activities</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Genesis</Badge>
                <Badge variant="secondary">GBM</Badge>
                <Badge variant="secondary">Interactive Sessions</Badge>
                <Badge variant="secondary">Seminars & Webinars</Badge>
                <Badge variant="secondary">Health Campaigns</Badge>
                <Badge variant="secondary">Creative Writing</Badge>
                <Badge variant="secondary">Collaborations</Badge>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li><span className="font-semibold text-foreground">Genesis</span> – orientation for newly recruited members.</li>
                <li><span className="font-semibold text-foreground">General Body Meetings (GBM)</span> – planning, feedback, and transparency.</li>
                <li><span className="font-semibold text-foreground">Interactive Sessions</span> – bonding and open scientific dialogue.</li>
                <li><span className="font-semibold text-foreground">Educational Seminars & Webinars</span> – life sciences, sustainability, and careers.</li>
                <li><span className="font-semibold text-foreground">Health Awareness & Screening</span> – Vitamin D, cancer awareness, and other public health themes.</li>
                <li><span className="font-semibold text-foreground">Creative Writing & Art-Based Events</span> – Synapse and editorial writing.</li>
                <li><span className="font-semibold text-foreground">Collaborative Events</span> – club partner in national/inter-university forums.</li>
              </ul>
            </div>
          </section>

          {/* Advisors Section */}
          <section id="advisors" className="scroll-mt-24 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Advisors</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Advisor 1 */}
              <div className="glass p-6 rounded-xl hover:scale-105 transition-transform">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 mx-auto mb-4">
                  <img 
                    src={advisorRafiqul} 
                    alt="Dr. Mohammad Rafiqul Islam" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-1">Dr. Mohammad Rafiqul Islam</h3>
                <p className="text-center text-primary font-semibold mb-2">Club Advisor</p>
                <p className="text-center text-muted-foreground mb-2">Professor of Statistics</p>
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Department of Mathematics and Natural Sciences
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:01726331009" className="hover:text-primary transition-colors">
                      01726331009
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:mrafiq@bracu.ac.bd" className="hover:text-primary transition-colors">
                      mrafiq@bracu.ac.bd
                    </a>
                  </div>
                </div>
              </div>

              {/* Advisor 2 */}
              <div className="glass p-6 rounded-xl hover:scale-105 transition-transform">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 mx-auto mb-4">
                  <img 
                    src={advisorTawsif} 
                    alt="Md. Tawsif Ur Rashid" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-1">Md. Tawsif Ur Rashid</h3>
                <p className="text-center text-primary font-semibold mb-2">Club Co-Advisor</p>
                <p className="text-center text-muted-foreground mb-2">Lecturer, Biotechnology Program</p>
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Department of Mathematics and Natural Sciences
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:01689900896" className="hover:text-primary transition-colors">
                      01689900896
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:tawsif.rashid@bracu.ac.bd" className="hover:text-primary transition-colors">
                      tawsif.rashid@bracu.ac.bd
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Panel Section */}
          <section id="panel" className="scroll-mt-24 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-6">Panel</h2>

            <div className="glass rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Panel Members (Current)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {panelMembers.map((member) => (
                  <div key={member.id} className="glass rounded-xl p-5">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-lg font-bold">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.department} • {member.semester} Semester</p>
                      </div>
                      <Badge variant="secondary">{member.designation}</Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <a href={`tel:${member.contact}`} className="hover:text-primary transition-colors">
                          {member.contact}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                          {member.email}
                        </a>
                      </div>
                      <p className="text-muted-foreground">ID: {member.id}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-6">Panel Pictures</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {panelImages.map((panel) => (
                <div
                  key={panel.year}
                  className="glass rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => setSelectedImage(panel.image)}
                >
                  <img
                    src={panel.image}
                    alt={`Panel ${panel.year}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg">Panel {panel.year}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            size="icon"
            variant="outline"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-background/80 hover:bg-background"
          >
            <X className="h-5 w-5" />
          </Button>
          <img
            src={selectedImage}
            alt="Full size panel"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default About;
