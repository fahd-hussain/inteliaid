
const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-dark-bg border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Inteliad</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              The future of video production is here. We create cinematic experiences 
              with artificial intelligence that captivate, inspire, and convert.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors">
                YouTube
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-electric-blue transition-colors">AI Commercials</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Viral Videos</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Music Videos</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Short Films</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-electric-blue transition-colors">About</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Masterclass</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 Inteliad — Crafted with Intelligence
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-electric-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-electric-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
