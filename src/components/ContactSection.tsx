'use client';
import React, { useState, forwardRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import InstagramIcon from './icon/instagram';
import FacebookIcon from './icon/facebook';
import TiktokIcon from './icon/Tiktok';
import color from '@/constant/color';
import { SocialLinks } from '@/constant/links';

type ContactSectionProps = React.HTMLAttributes<HTMLDivElement>;

const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(
  ({ className = '', ...rest }, ref) => {
    const [formData, setFormData] = useState({
      name: '',
      brand: '',
      email: '',
      projectIdea: '',
      budget: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // TODO: Replace with real submission logic
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };

    return (
      <section
        ref={ref}
        className={`py-20 px-4 bg-gradient-to-b from-dark-card to-dark-bg ${className}`}
        {...rest}
      >
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build the <span className="text-gradient">Future of Your Brand</span> Together
              with inteliad
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to revolutionize your video content? Tell us about your vision and we'll show
              you what's possible with AI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* ─────────── Form ─────────── */}
            <div className="animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Your Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-dark-bg/50 border-gray-600 focus:border-electric-blue text-white"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Brand/Company</label>
                    <Input
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      className="bg-dark-bg/50 border-gray-600 focus:border-electric-blue text-white"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-dark-bg/50 border-gray-600 focus:border-electric-blue text-white"
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Project Idea *</label>
                  <textarea
                    name="projectIdea"
                    value={formData.projectIdea}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 bg-dark-bg/50 border border-gray-600 focus:border-electric-blue text-white rounded-md focus:outline-none resize-none"
                    placeholder="Tell us about your vision. What kind of video do you want to create? What's your goal?"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-electric-blue to-neon-purple hover:from-electric-blue/80 hover:to-neon-purple/80 text-white font-semibold py-4 text-lg rounded-full glow-electric transition-all duration-300 hover:scale-105"
                >
                  Start Our Collaboration
                </Button>
              </form>
            </div>

            {/* ─── Contact Info & Social Links ─── */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                {/* Direct Contact */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Direct Contact</h4>
                  <p className="text-electric-blue">info@inteliad.codignize.com</p>
                </div>

                {/* Response Time */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Response Time</h4>
                  <p className="text-gray-400">We typically respond within 24 hours</p>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Follow Our Journey</h4>
                  <div className="flex space-x-4">
                    <a
                      href={SocialLinks.tiktok}
                      target="_blank"
                      className="w-10 h-10 bg-dark-bg/50 rounded-full flex items-center justify-center border border-gray-600 hover:border-electric-blue transition-colors"
                    >
                      <TiktokIcon width={20} height={20} fill={color.electricBlue} />
                    </a>
                    <a
                      href={SocialLinks.facebook}
                      target="_blank"
                      className="w-10 h-10 bg-dark-bg/50 rounded-full flex items-center justify-center border border-gray-600 hover:border-electric-blue transition-colors"
                    >
                      <FacebookIcon width={20} height={20} fill={color.electricBlue} />
                    </a>
                    <a
                      href={SocialLinks.instagram}
                      target="_blank"
                      className="w-10 h-10 bg-dark-bg/50 rounded-full flex items-center justify-center border border-gray-600 hover:border-electric-blue transition-colors"
                    >
                      <InstagramIcon width={20} height={20} fill={color.electricBlue} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ContactSection.displayName = 'ContactSection';

export default ContactSection;
