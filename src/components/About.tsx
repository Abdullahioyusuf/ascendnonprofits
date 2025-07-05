import React from 'react';
import { Award, TrendingUp, Users, Target, Star, ArrowRight, GraduationCap, CheckCircle, Zap, Shield, Lightbulb } from 'lucide-react';
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
        {/* ASCEND Platform Section */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-bold">
            🚀 THE ASCEND PLATFORM
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Solving the Nonprofit{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
              Success Crisis
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Over 80% of nonprofits fail within the first 3 years due to lack of planning, inadequate funding strategies, and poor organizational structure. ASCEND changes that statistic.
          </p>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* The Problem */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-800">The Challenge</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-red-700">80% failure rate within 3 years</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-red-700">Lack of strategic planning and systems</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-red-700">Inadequate funding and grant strategies</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-red-700">Poor board development and governance</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-red-700">Limited access to modern tools and technology</span>
              </li>
            </ul>
          </div>

          {/* The Solution */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-800">The ASCEND Solution</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-700">Proven strategic frameworks and systems</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-700">Expert grant writing and funding strategies</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-700">Comprehensive board development guidance</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-700">Modern digital tools and AI integration</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-green-700">Ongoing support and community access</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How ASCEND Works */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl font-bold text-gray-900">How ASCEND Transforms Nonprofits</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides everything you need to build, fund, and scale a successful nonprofit organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Foundation & Strategy</h4>
              <p className="text-gray-600">Build a solid foundation with proven legal structures, strategic planning, and governance frameworks.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Funding & Growth</h4>
              <p className="text-gray-600">Access proven funding strategies, grant writing expertise, and sustainable revenue models.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Scale & Impact</h4>
              <p className="text-gray-600">Leverage modern tools, technology, and systems to maximize your community impact and reach.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Founder Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold">
                👨‍💼 EXPERT LEADERSHIP FOR NONPROFIT SUCCESS
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Abdullahi Yusuf, MBA, DBA (c)
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A dynamic healthcare operations strategist, clinical research expert, and community leader with a proven track record in managing complex programs, transforming underperforming systems, and bridging the gap between technical and non-technical teams. Currently pursuing a Doctor of Business Administration in Accounting and Finance, with over 15 years of experience spanning quality management, healthcare operations, grant writing, and strategic consulting.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As the founder of ASCEND Nonprofits, Abdullahi leads a platform dedicated to empowering nonprofits with modern tools, actionable strategies, and systems thinking. His expertise spans diverse sectors including health, education, workforce development, and cultural initiatives. Committed to building sustainable organizations that create measurable community impact, Abdullahi is passionate about helping leaders transform passion into power through strategy, systems, and smart use of technology.
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
                    <h4 className="font-bold text-gray-900 text-lg">20+ Years</h4>
                    <p className="text-gray-600">Healthcare & nonprofit experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insight */}
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
                        <div className="text-lg font-bold text-red-400">20+</div>
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