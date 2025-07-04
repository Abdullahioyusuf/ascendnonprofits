import React from 'react';
import { Calendar, CheckCircle, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import { services } from '../data/content';

const Services: React.FC = () => {
  const handleBookCall = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceIcons = [Calendar, Target, TrendingUp];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 border border-red-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-red-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-red-300 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 text-red-300 text-sm font-bold">
            🚀 PROFESSIONAL SERVICES
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Expert Guidance & Support
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Accelerate your nonprofit's success with hands-on professional services and strategic guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[index];
            return (
              <div
                key={service.id}
                className={`group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-red-500/50 ${
                  index === 0 ? 'ring-2 ring-red-500/50' : ''
                }`}
              >
                {/* Free Badge */}
                {index === 0 && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Zap className="w-4 h-4 inline mr-1" />
                    FREE
                  </div>
                )}
                
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                    index === 0 ? 'bg-green-600/20 border border-green-500/30' :
                    'bg-red-600/20 border border-red-500/30'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      index === 0 ? 'text-green-400' : 'text-red-400'
                    }`} />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <div className={`text-3xl font-bold ${
                      index === 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {service.price}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-white flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      Includes:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={handleBookCall}
                    className={`w-full flex items-center justify-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 ${
                      index === 0 
                        ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800' 
                        : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800'
                    }`}
                  >
                    {index === 0 ? (
                      <>
                        <Calendar className="w-5 h-5 mr-2" />
                        Book Free Call
                      </>
                    ) : (
                      <>
                        Get Started
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4 w-16 h-16 border border-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Turn Your Vision Into Reality?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Schedule a free 30-minute strategy call to discuss your nonprofit goals and get personalized recommendations.
              </p>
              <button
                onClick={handleBookCall}
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Free Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;