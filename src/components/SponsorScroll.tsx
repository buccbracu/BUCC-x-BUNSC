const sponsors = [
  { name: "BioTech Corp", logo: "https://via.placeholder.com/150x60/10b981/ffffff?text=BioTech" },
  { name: "Green Solutions", logo: "https://via.placeholder.com/150x60/059669/ffffff?text=GreenSol" },
  { name: "EcoLab", logo: "https://via.placeholder.com/150x60/047857/ffffff?text=EcoLab" },
  { name: "Nature First", logo: "https://via.placeholder.com/150x60/065f46/ffffff?text=NatureFirst" },
  { name: "Science Pro", logo: "https://via.placeholder.com/150x60/10b981/ffffff?text=SciencePro" },
  { name: "Research Hub", logo: "https://via.placeholder.com/150x60/059669/ffffff?text=ResearchHub" },
];

const SponsorScroll = () => {
  return (
    <div className="w-full overflow-hidden bg-card/30 py-8 border-y border-border/50">
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set */}
          {sponsors.map((sponsor, index) => (
            <div
              key={`sponsor-1-${index}`}
              className="flex-shrink-0 mx-8 transition-all duration-300"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {sponsors.map((sponsor, index) => (
            <div
              key={`sponsor-2-${index}`}
              className="flex-shrink-0 mx-8 transition-all duration-300"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SponsorScroll;
