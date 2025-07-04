import React from 'react';
import { Award, TrendingUp, Users, Target, Star, ArrowRight, GraduationCap } from 'lucide-react';
import { founderBio } from '../data/content';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-bold">
                👨‍💼 MEET YOUR STRATEGIC PARTNER
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Expert Leadership for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                  Nonprofit Success
                </span>
              </h2>
              <h3 className="text-2xl font-semibold text-red-600">
                {founderBio.name}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {founderBio.bio}
              </p>
            </div>

            {/* Education & Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">DBA (c), MBA</h4>
                    <p className="text-gray-600">Saint Mary's University</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">$1M+ Secured</h4>
                    <p className="text-gray-600">In grants and funding</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">$100M Referendum</h4>
                    <p className="text-gray-600">Led in Rochester, MN</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">15+ Years</h4>
                    <p className="text-gray-600">Healthcare & nonprofit experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insight - Different from Hero */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
              <p className="text-blue-800 font-semibold text-lg">
                "Empowering communities through strategic nonprofit development and sustainable funding solutions with proven expertise in healthcare operations and grant writing."
              </p>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
              >
                Start Your Nonprofit Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative pt-8">
              {/* Expert Badge - Positioned to not cut off */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-bold z-10 shadow-lg">
                <Star className="w-4 h-4 inline mr-1" />
                EXPERT
              </div>
              
              <div className="w-80 h-96 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 rounded-2xl shadow-2xl overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-16 h-16 border border-red-500 rounded-full"></div>
                  <div className="absolute top-20 right-16 w-8 h-8 border border-red-400 rounded-full"></div>
                  <div className="absolute bottom-20 left-16 w-12 h-12 border border-red-300 rounded-full"></div>
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="space-y-4">
                    {/* CPU Chip Style Logo */}
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
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
                    
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-bold">{founderBio.name}</h3>
                      <p className="text-red-300 font-medium">{founderBio.title}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-sm text-gray-300 text-center leading-relaxed">
                        "Empowering communities through strategic nonprofit development and sustainable funding solutions."
                      </p>
                    </div>
                    
                    <div className="flex justify-center space-x-4 pt-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-red-400">$1M+</div>
                        <div className="text-xs text-gray-400">Secured</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-red-400">15+</div>
                        <div className="text-xs text-gray-400">Years</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-red-400">100+</div>
                        <div className="text-xs text-gray-400">Orgs</div>
                      </div>
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

export default About;