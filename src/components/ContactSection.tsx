import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import InstagramIcon from './icon/instagram';
import color from '@/constant/color';
import FacebookIcon from './icon/facebook';
import LinkedInIcon from './icon/linkedin';

const ContactSection = () => {
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
    // Handle form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build the <span className="text-gradient">Future of Your Brand</span> Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to revolutionize your video content? Tell us about your vision and we'll show you
            what's possible with AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
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

              {/* <div>
                <label className="block text-white font-medium mb-2">Project Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full p-3 bg-dark-bg/50 border border-gray-600 focus:border-electric-blue text-white rounded-md focus:outline-none"
                >
                  <option value="">Select budget range</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k-50k">$25k - $50k</option>
                  <option value="50k-100k">$50k - $100k</option>
                  <option value="100k+">$100k+</option>
                </select>
              </div> */}

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

          {/* Contact Info & Masterclass */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Masterclass Section */}
            {/* <div className="p-8 bg-gradient-to-br from-neon-purple/10 to-electric-blue/10 rounded-2xl border border-neon-purple/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                🎓 <span className="text-gradient">AI Video Masterclass</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Want to learn AI video production yourself? Join our exclusive masterclass and
                discover the secrets behind creating viral AI content.
              </p>
              <Button
                variant="outline"
                className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-bg font-semibold px-6 py-3 rounded-full transition-all duration-300"
              >
                Join the Masterclass
              </Button>
            </div> */}

            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-semibold mb-2">Direct Contact</h4>
                <p className="text-electric-blue">info@inteliad.com</p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2">Response Time</h4>
                <p className="text-gray-400">We typically respond within 24 hours</p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Follow Our Journey</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-dark-bg/50 rounded-full flex items-center justify-center border border-gray-600 hover:border-electric-blue transition-colors"
                  >
                    <LinkedInIcon width={20} height={20} fill={color.electricBlue} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-dark-bg/50 rounded-full flex items-center justify-center border border-gray-600 hover:border-electric-blue transition-colors"
                  >
                    <FacebookIcon width={20} height={20} fill={color.electricBlue} />
                  </a>
                  <a
                    href="#"
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
};

export default ContactSection;
