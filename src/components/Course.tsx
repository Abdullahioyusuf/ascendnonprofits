import React, { useState } from 'react';
import { Users, CheckCircle, Clock, Video, Star, ArrowRight } from 'lucide-react';

const Course: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Course waitlist signup:', email);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const courseModules = [
    {
      title: 'Foundation & Legal Setup',
      description: 'Master the basics of nonprofit formation and legal requirements',
      duration: '2 hours'
    },
    {
      title: 'Strategic Planning & Mission',
      description: 'Develop a clear mission, vision, and strategic roadmap',
      duration: '1.5 hours'
    },
    {
      title: 'Fundraising & Grant Writing',
      description: 'Learn proven strategies for securing funding and grants',
      duration: '3 hours'
    },
    {
      title: 'Board Development & Governance',
      description: 'Build an effective board and governance structure',
      duration: '2 hours'
    },
    {
      title: 'Marketing & Community Engagement',
      description: 'Create awareness and build lasting community partnerships',
      duration: '2 hours'
    }
  ];

  return (
    <section id="course" className="py-20 bg-gradient-to-br from-blue-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
            🎓 COMING SOON
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Vision to Viability Course
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            How to Build & Fund a Mission-Driven Nonprofit with Modern Tools and Proven Strategies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Course Details */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">5 Comprehensive Modules</h3>
                  <p className="text-gray-600">Complete step-by-step system</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A complete step-by-step system with templates, video tutorials, and group coaching sessions to take your nonprofit from idea to impact.
              </p>
            </div>

            <div className="space-y-4">
              {courseModules.map((module, index) => (
                <div key={index} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {module.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{module.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{module.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Video className="w-4 h-4" />
                          <span>Video + Templates</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Waitlist Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
            {/* Premium Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 text-sm font-bold z-10 rounded-bl-2xl">
              <Star className="w-4 h-4 inline mr-1" />
              PREMIUM
            </div>

            <div className="text-center space-y-6 mb-8 pt-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Join the Waitlist
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Be the first to know when the course launches and get exclusive early bird pricing.
                </p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">You're In!</h4>
                  <p className="text-gray-600">
                    Thanks for joining the waitlist. We'll notify you as soon as the course is ready.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Joining...'
                  ) : (
                    <>
                      Join the Waitlist
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>Early bird pricing for waitlist members</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>Exclusive bonus materials and templates</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600 bg-red-50 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>Live group coaching sessions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;