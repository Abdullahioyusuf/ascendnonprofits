import React, { useState } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              {/* CPU Chip Style Logo */}
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg">
                {/* Circuit Pattern Background - More Complex */}
                <div className="absolute inset-0 opacity-40">
                  <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                    {/* Main Circuit Lines */}
                    <path d="M6 6 L42 6 L42 12 L36 12 L36 18 L42 18 L42 24" stroke="#ffffff" strokeWidth="1.5"/>
                    <path d="M6 12 L12 12 L12 24 L18 24 L18 30 L24 30" stroke="#ffffff" strokeWidth="1.5"/>
                    <path d="M30 36 L36 36 L36 42 L42 42" stroke="#ffffff" strokeWidth="1.5"/>
                    <path d="M6 30 L12 30 L12 36 L18 36" stroke="#ffffff" strokeWidth="1.5"/>
                    <path d="M24 6 L24 12 L30 12 L30 18" stroke="#ffffff" strokeWidth="1.5"/>
                    
                    {/* CPU Pins/Connectors */}
                    <rect x="2" y="8" width="2" height="4" fill="#ffffff"/>
                    <rect x="2" y="16" width="2" height="4" fill="#ffffff"/>
                    <rect x="2" y="24" width="2" height="4" fill="#ffffff"/>
                    <rect x="44" y="8" width="2" height="4" fill="#ffffff"/>
                    <rect x="44" y="16" width="2" height="4" fill="#ffffff"/>
                    <rect x="44" y="24" width="2" height="4" fill="#ffffff"/>
                    
                    {/* Circuit Nodes */}
                    <circle cx="12" cy="12" r="2.5" fill="#ffffff"/>
                    <circle cx="36" cy="18" r="2.5" fill="#ffffff"/>
                    <circle cx="24" cy="30" r="2.5" fill="#ffffff"/>
                    <circle cx="18" cy="36" r="2.5" fill="#ffffff"/>
                    
                    {/* Central Processing Unit */}
                    <rect x="20" y="20" width="8" height="8" fill="none" stroke="#ffffff" strokeWidth="1.5"/>
                    <rect x="22" y="22" width="4" height="4" fill="#ffffff" opacity="0.8"/>
                  </svg>
                </div>
                <ArrowUp className="w-7 h-7 text-white font-bold relative z-10 drop-shadow-sm" />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-black text-gray-900 tracking-tight">ASCEND</span>
                  <span className="hidden sm:block text-xs text-gray-600 font-medium">
                    Nonprofit Development & Strategy
                  </span>
                </div>
                <div className="hidden lg:block text-xs text-gray-500 font-medium">
                  <span className="text-red-600 font-bold">A</span>dvancing{' '}
                  <span className="text-red-600 font-bold">S</span>olutions for{' '}
                  <span className="text-red-600 font-bold">C</span>ommunity{' '}
                  <span className="text-red-600 font-bold">E</span>mpowerment &{' '}
                  <span className="text-red-600 font-bold">N</span>onprofit{' '}
                  <span className="text-red-600 font-bold">D</span>evelopment
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('course')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Course
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('resources')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Resources
              </button>
              <button
                onClick={() => scrollToSection('course')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Course
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;