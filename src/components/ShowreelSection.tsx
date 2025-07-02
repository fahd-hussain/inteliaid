
import { Button } from "@/components/ui/button";

const ShowreelSection = () => {
  return (
    <section className="py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Latest <span className="text-gradient">AI Masterpieces</span>
          </h2>
          <p className="text-xl text-gray-400">See how AI is reshaping storytelling</p>
        </div>

        {/* Main Showreel Video */}
        <div className="relative mb-16 animate-fade-in">
          <div className="aspect-video bg-gradient-to-br from-dark-card to-dark-bg rounded-2xl border-2 border-electric-blue/30 overflow-hidden group hover:border-electric-blue/60 transition-all duration-500 glow-electric">
            {/* Video placeholder with cinematic overlay */}
            <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
              
              {/* Placeholder for video */}
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Inteliad 2025 Showreel</h3>
                <p className="text-gray-400">5 minutes of pure AI cinematography</p>
              </div>

              {/* Animated background elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-neon-purple rounded-full animate-ping"></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-vivid-green rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Luxury Auto Campaign", brand: "Prestige Motors", views: "12M", category: "Automotive" },
            { title: "Fashion Week Spotlight", brand: "Avant Studio", views: "8.5M", category: "Fashion" },
            { title: "Tech Launch Film", brand: "NextGen AI", views: "15M", category: "Technology" }
          ].map((project, index) => (
            <div key={index} className="group cursor-pointer animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="aspect-video bg-gradient-to-br from-dark-card to-dark-bg rounded-xl border border-gray-700 hover:border-electric-blue/50 transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-electric-blue/20 text-electric-blue px-2 py-1 rounded-full border border-electric-blue/30">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-400">{project.views} views</span>
                  </div>
                  <h4 className="text-white font-semibold mb-1">{project.title}</h4>
                  <p className="text-gray-400 text-sm">{project.brand}</p>
                </div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-bg font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;
