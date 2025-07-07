import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10"></div>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-dark-card">
        <div className="absolute inset-0 bg-gradient-radial from-electric-blue/10 via-transparent to-neon-purple/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            The Future of
            <span className="block text-gradient animate-glow">Commercials is AI</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
            Inteliad creates cinematic video ads powered by artificial intelligence.
            <span className="block mt-2 text-electric-blue font-medium">
              Ultra-realistic. Lightning-fast. Limitlessly creative.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-electric-blue to-neon-purple hover:from-electric-blue/80 hover:to-neon-purple/80 text-white font-semibold px-8 py-4 text-lg rounded-full glow-electric transition-all duration-300 hover:scale-105"
            >
              Watch Demo reel
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark-bg font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
