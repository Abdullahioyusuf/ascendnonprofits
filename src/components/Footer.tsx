import React from 'react';
import { ArrowUp, Linkedin, Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              {/* CPU Chip Style Logo */}
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg">
                {/* Circuit Pattern Background */}
                <div className="absolute inset-0 opacity-40">
                  <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                    <path d="M6 6 L42 6 L42 12 L36 12 L36 18 L42 18 L42 24" stroke="#ffffff" strokeWidth="1.5"/>
                    <path d="M6 12 L12 12 L12 24 L18 24 L18 30 L24 30" stroke="#ffffff" strokeWidth="1.5"/>
                    <path d="M30 36 L36 36 L36 42 L42 42" stroke="#ffffff" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="2.5" fill="#ffffff"/>
                    <circle cx="36" cy="18" r="2.5" fill="#ffffff"/>
                    <circle cx="24" cy="30" r="2.5" fill="#ffffff"/>
                    <rect x="20" y="20" width="8" height="8" fill="none" stroke="#ffffff" strokeWidth="1.5"/>
                    <rect x="22" y="22" width="4" height="4" fill="#ffffff" opacity="0.8"/>
                  </svg>
                </div>
                <ArrowUp className="w-7 h-7 text-white font-bold relative z-10" />
              </div>
              <div>
                <span className="text-2xl font-black">ASCEND</span>
                <div className="text-sm text-gray-400">
                  <span className="text-red-400 font-bold">A</span>dvancing{' '}
                  <span className="text-red-400 font-bold">S</span>olutions for{' '}
                  <span className="text-red-400 font-bold">C</span>ommunity{' '}
                  <span className="text-red-400 font-bold">E</span>mpowerment &{' '}
                  <span className="text-red-400 font-bold">N</span>onprofit{' '}
                  <span className="text-red-400 font-bold">D</span>evelopment
                </div>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              From Vision to Victory - empowering nonprofit leaders with the tools and guidance to create lasting impact.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                <strong>Website:</strong> ascendnonprofits.org
              </p>
              <p className="text-sm text-gray-400">
                <strong>Email:</strong> info@ascendnonprofits.org
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:info@ascendnonprofits.org" className="text-gray-400 hover:text-red-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('resources')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Free Nonprofit Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Mini Playbook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Full Playbook
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('course')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Course Waitlist
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Abdullahi Yusuf. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;