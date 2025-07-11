'use client';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const projectData = [
  {
    title: 'Experience the Art of Automotive Luxury',
    brand: 'Mercedes',
    views: '12M',
    category: 'Automotive',
    video: '/videos/video-03.mp4',
    preview: '/videos/video-03.mp4',
  },
  {
    title: 'Refreshing Moments, Perfectly Captured',
    brand: 'THRISTY',
    views: '8.5M',
    category: 'Beverages',
    video: '/videos/video-04.mp4',
    preview: '/videos/video-04.mp4',
  },
  {
    title: 'Taste the Story Behind Every Bite',
    brand: 'Nutella',
    views: '15M',
    category: 'Food',
    video: '/videos/video-02.mp4',
    preview: '/videos/video-02.mp4',
  },
];

const ShowreelSection = () => {
  const [activeVideo, setActiveVideo] = useState<'main' | number | null>(null);
  const mainRef = useRef<HTMLVideoElement>(null);
  const cardRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (target: 'main' | number) => {
    if (target !== 'main') mainRef.current?.pause();
    else cardRefs.current.forEach((ref) => ref?.pause());

    if (typeof target === 'number') {
      cardRefs.current.forEach((ref, i) => {
        if (ref && i !== target) ref.pause();
      });
    }

    setActiveVideo(target);

    setTimeout(() => {
      if (target === 'main') {
        mainRef.current?.play();
      } else {
        cardRefs.current[target]?.play();
      }
    }, 0);
  };

  return (
    <section className="py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Latest <span className="text-gradient">AI Masterpieces</span>
          </h2>
          <p className="text-xl text-gray-400">See how AI is reshaping storytelling</p>
        </div>

        {/* Main Showreel Video with Preview */}
        <div className="relative mb-16 animate-fade-in">
          <div className="aspect-video relative rounded-2xl border-2 border-electric-blue/30 overflow-hidden group hover:border-electric-blue/60 transition-all duration-500 glow-electric">
            {/* Preview video for main */}
            <video
              className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
                activeVideo === 'main' ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
              src="/videos/video-01.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Full main video */}
            <video
              ref={mainRef}
              className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
                activeVideo === 'main' ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              src="/videos/video-01.mp4"
              controls
            />

            {/* Overlay Play Button */}
            {activeVideo !== 'main' && (
              <div
                onClick={() => handlePlay('main')}
                className="absolute inset-0 bg-black/60 backdrop-blur flex flex-col items-center justify-center cursor-pointer z-10"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Inteliad 2025 Showreel</h3>
                <p className="text-gray-400">5 minutes of pure AI cinematography</p>
              </div>
            )}
          </div>
        </div>

        {/* Grid of Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projectData.map((project, index) => {
            const isActive = activeVideo === index;

            return (
              <div
                key={index}
                className="group animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video relative rounded-xl border border-gray-700 overflow-hidden hover:border-electric-blue transition-all duration-300">
                  {/* Preview Video */}
                  <video
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
                      isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                    src={project.preview}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />

                  {/* Actual Full Video */}
                  <video
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    src={project.video}
                    controls
                  />

                  {/* Overlay Play Button */}
                  {!isActive && (
                    <div
                      onClick={() => handlePlay(index)}
                      className="absolute inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-10"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Bottom Labels */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs bg-electric-blue/20 text-electric-blue px-2 py-1 rounded-full border border-electric-blue/30">
                        {project.category}
                      </span>
                      {/* <span className="text-xs text-gray-400">{project.views} views</span> */}
                    </div>
                    <h4 className="font-semibold">{project.title}</h4>
                    <p className="text-sm text-gray-400">{project.brand}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
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
