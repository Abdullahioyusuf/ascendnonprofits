import React from 'react';
import { Download, ShoppingCart, BookOpen, Calendar, Users, ArrowRight, Zap, Target } from 'lucide-react';
import { handleFreeDownload } from '../utils/downloads';
import { handleProductPurchase } from '../utils/payment';

const Hero: React.FC = () => {
  const handleFreeDownloadClick = () => {
    handleFreeDownload('/downloads/nonprofit-starter-blueprint.pdf', 'nonprofit-starter-blueprint.pdf');
  };

  const handleMiniPlaybookPurchase = async () => {
    const result = await handleProductPurchase('mini-playbook', 5);
    if (result.success) {
      alert('Purchase successful! Check your email for download instructions.');
    }
  };

  const handleAmazonRedirect = () => {
    window.open('https://amazon.com/your-book-link', '_blank');
  };

  const handleCourseWaitlist = () => {
    const element = document.getElementById('course');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookCall = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-red-500 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-red-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-red-300 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-red-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <div className="inline-block bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 text-red-300 text-sm font-medium">
                ✨ Empowering Communities. Equipping Nonprofits.
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                From Vision to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  Victory
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Tools to Build the Nonprofit You Were Born to Lead
              </p>
              
              {/* Unique Catchphrases for Hero */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-lg text-red-300">
                  <Zap className="w-5 h-5" />
                  <span>"Your Nonprofit Journey Starts Here"</span>
                </div>
                <div className="flex items-center space-x-3 text-lg text-red-300">
                  <Target className="w-5 h-5" />
                  <span>ASCEND above the rest with proven strategies.</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">$1M+</div>
                <div className="text-sm text-gray-400">Grants Secured</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">100+</div>
                <div className="text-sm text-gray-400">Organizations Helped</div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="space-y-4">
              <button
                onClick={handleFreeDownloadClick}
                className="w-full sm:w-auto group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center"
              >
                <Download className="w-6 h-6 mr-3" />
                Your Nonprofit Journey Starts Here
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={handleMiniPlaybookPurchase}
                  className="flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Buy $5 Startup Essentials
                </button>
                <button
                  onClick={handleBookCall}
                  className="flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Strategy Call
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Book Cover */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Premium Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-bold z-10 shadow-lg">
                PREMIUM
              </div>
              
              {/* Book Cover */}
              <div className="w-80 h-96 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                {/* Circuit Pattern Background - Enhanced */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 400 500" fill="none">
                    {/* Main Circuit Board Pattern */}
                    <path d="M50 50 L350 50 L350 100 L300 100 L300 150 L350 150 L350 200" stroke="#C1272D" strokeWidth="3"/>
                    <path d="M50 100 L100 100 L100 200 L150 200 L150 250 L200 250" stroke="#C1272D" strokeWidth="3"/>
                    <path d="M250 300 L300 300 L300 350 L350 350 L350 400" stroke="#C1272D" strokeWidth="3"/>
                    <path d="M50 200 L100 200 L100 300 L150 300" stroke="#C1272D" strokeWidth="2"/>
                    <path d="M200 100 L250 100 L250 150 L300 150" stroke="#C1272D" strokeWidth="2"/>
                    
                    {/* CPU Chip Elements */}
                    <rect x="80" y="80" width="40" height="40" fill="none" stroke="#C1272D" strokeWidth="2"/>
                    <rect x="280" y="180" width="40" height="40" fill="none" stroke="#C1272D" strokeWidth="2"/>
                    <rect x="180" y="280" width="40" height="40" fill="none" stroke="#C1272D" strokeWidth="2"/>
                    
                    {/* Circuit Nodes */}
                    <circle cx="100" cy="100" r="8" fill="#C1272D"/>
                    <circle cx="300" cy="150" r="8" fill="#C1272D"/>
                    <circle cx="200" cy="250" r="8" fill="#C1272D"/>
                    <circle cx="300" cy="350" r="8" fill="#C1272D"/>
                    <circle cx="150" cy="300" r="6" fill="#C1272D"/>
                    <circle cx="250" cy="100" r="6" fill="#C1272D"/>
                  </svg>
                </div>
                
                {/* Content */}
                <div className="absolute inset-6 flex flex-col justify-between text-white">
                  <div>
                    <div className="text-red-400 text-sm font-bold mb-2">BOOK BY ASCEND NONPROFITS</div>
                    <h3 className="text-xl font-bold mb-4 leading-tight">
                      A Step-by-Step Guide to Launch, Fund, and Grow Your Nonprofit
                    </h3>
                    <p className="text-sm text-gray-300 mb-6">
                      With Modern Tools and Proven Tactics
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-center">
                      {/* CPU Chip Style Logo */}
                      <div className="w-16 h-16 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-lg flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-40">
                          <svg className="w-full h-full" viewBox="0 0 64 64" fill="none">
                            <path d="M8 8 L56 8 L56 16 L48 16 L48 24 L56 24 L56 32" stroke="#ffffff" strokeWidth="2"/>
                            <path d="M8 16 L16 16 L16 32 L24 32 L24 40 L32 40" stroke="#ffffff" strokeWidth="2"/>
                            <circle cx="16" cy="16" r="3" fill="#ffffff"/>
                            <circle cx="48" cy="24" r="3" fill="#ffffff"/>
                            <rect x="28" y="28" width="8" height="8" fill="none" stroke="#ffffff" strokeWidth="2"/>
                          </svg>
                        </div>
                        <span className="text-2xl font-bold relative z-10">A</span>
                      </div>
                      <div className="text-red-400 font-bold text-lg tracking-wider">ASCEND</div>
                    </div>
                    
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-xs text-gray-400 text-center">
                        ASCEND ABOVE THE REST: ELEVATE YOUR NONPROFIT WITH STRATEGY, SYSTEMS & AI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;