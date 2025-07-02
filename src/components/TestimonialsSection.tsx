
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working with Inteliad felt like filming 5 years in the future.",
      author: "Sarah Chen",
      role: "Creative Director",
      company: "Nexus Brands"
    },
    {
      quote: "Mind-blowing visuals, at 1/10th the cost and time.",
      author: "Marcus Rodriguez",
      role: "Marketing VP",
      company: "TechFlow Industries"
    },
    {
      quote: "They didn't just meet our vision—they exceeded what we thought was possible.",
      author: "Elena Vasquez",
      role: "Founder",
      company: "Luna Collective"
    }
  ];

  const stats = [
    { number: "100M+", label: "Views Generated" },
    { number: "300+", label: "Videos Created" },
    { number: "50+", label: "Global Brands" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const clientLogos = [
    "TechFlow", "Nexus", "Luna Co", "Vibe", "Stellar", "Peak", "Flux", "Nova"
  ];

  return (
    <section className="py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        {/* Stats Section */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Trusted by <span className="text-gradient">Visionary Brands</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((logo, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-dark-card/30 rounded-lg border border-gray-700 hover:border-electric-blue/40 transition-all duration-300"
              >
                <span className="text-gray-300 font-semibold text-lg">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 bg-gradient-to-br from-dark-card/50 to-dark-bg/50 rounded-2xl border border-gray-700 hover:border-electric-blue/30 transition-all duration-500 animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-electric-blue mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-electric-blue">{testimonial.role}</div>
                <div className="text-sm text-gray-400">{testimonial.company}</div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 rounded-full border border-electric-blue/30 mb-4">
            <span className="text-electric-blue font-medium text-sm">Join the AI Revolution</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Ready to create your <span className="text-gradient">AI masterpiece?</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
