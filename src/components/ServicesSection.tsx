
const ServicesSection = () => {
  const services = [
    {
      icon: "🎬",
      title: "AI Commercials",
      description: "Ultra-realistic brand commercials that captivate and convert",
      color: "electric-blue"
    },
    {
      icon: "🚀",
      title: "Viral Videos",
      description: "Scroll-stopping content designed to go viral across all platforms",
      color: "neon-purple"
    },
    {
      icon: "📝",
      title: "AI Storyboarding",
      description: "Visualize concepts instantly with AI-powered storyboard generation",
      color: "vivid-green"
    },
    {
      icon: "🎵",
      title: "Music Videos",
      description: "Cinematic music videos that bring artists' visions to life",
      color: "electric-blue"
    },
    {
      icon: "🎭",
      title: "Short AI Films",
      description: "Narrative short films that push the boundaries of AI storytelling",
      color: "neon-purple"
    },
    {
      icon: "⚡",
      title: "Rapid Prototyping",
      description: "Test concepts and iterate ideas at the speed of thought",
      color: "vivid-green"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We <span className="text-gradient">Create</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to viral sensation, we harness the power of AI to deliver video content 
            that was previously impossible to create.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-dark-bg/50 backdrop-blur rounded-2xl border border-gray-700 hover:border-electric-blue/40 transition-all duration-500 hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                service.color === 'electric-blue' ? 'text-electric-blue' :
                service.color === 'neon-purple' ? 'text-neon-purple' : 'text-vivid-green'
              }`}>
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                service.color === 'electric-blue' ? 'bg-electric-blue' :
                service.color === 'neon-purple' ? 'bg-neon-purple' : 'bg-vivid-green'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Why Choose AI Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-dark-card/50 to-dark-bg/50 rounded-3xl p-12 border border-electric-blue/20">
            <h3 className="text-3xl font-bold text-white mb-8">
              Why Choose <span className="text-gradient">AI Video Production?</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-electric-blue mb-2">10x</div>
                <div className="text-white font-semibold mb-2">Faster Production</div>
                <div className="text-gray-400 text-sm">From weeks to days</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neon-purple mb-2">80%</div>
                <div className="text-white font-semibold mb-2">Cost Reduction</div>
                <div className="text-gray-400 text-sm">Without quality compromise</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-vivid-green mb-2">∞</div>
                <div className="text-white font-semibold mb-2">Creative Possibilities</div>
                <div className="text-gray-400 text-sm">No physical limitations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
