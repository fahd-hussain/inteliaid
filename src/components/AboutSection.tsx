
const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-gradient">Directed by AI.</span>
            <br />
            <span className="text-white">Designed by Imagination.</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We are <span className="text-electric-blue font-semibold">Inteliad</span> — a visionary studio fusing creativity with artificial intelligence. 
              We craft impactful video experiences that feel like high-budget productions, but are generated with groundbreaking AI.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="p-6 bg-dark-card/50 rounded-2xl border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 hover:transform hover:scale-105 glow-electric">
                <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-neon-purple rounded-lg mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold text-electric-blue mb-3">Ultra-Realistic</h3>
                <p className="text-gray-400">Generate cinema-quality videos that are indistinguishable from traditional production</p>
              </div>
              
              <div className="p-6 bg-dark-card/50 rounded-2xl border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300 hover:transform hover:scale-105 glow-purple">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-vivid-green rounded-lg mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold text-neon-purple mb-3">Lightning Fast</h3>
                <p className="text-gray-400">From concept to completion in days, not months. Speed meets uncompromising quality</p>
              </div>
              
              <div className="p-6 bg-dark-card/50 rounded-2xl border border-vivid-green/20 hover:border-vivid-green/40 transition-all duration-300 hover:transform hover:scale-105 glow-green">
                <div className="w-12 h-12 bg-gradient-to-r from-vivid-green to-electric-blue rounded-lg mb-4 mx-auto"></div>
                <h3 className="text-xl font-semibold text-vivid-green mb-3">Limitless Creativity</h3>
                <p className="text-gray-400">No physical constraints. Create any scenario, any world, any impossible vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
