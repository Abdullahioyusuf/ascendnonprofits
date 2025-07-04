import React from 'react';
import { Download, ShoppingCart, ExternalLink, CheckCircle, Star } from 'lucide-react';
import { products } from '../data/content';
import { handleFreeDownload } from '../utils/downloads';
import { handleProductPurchase } from '../utils/payment';

const Resources: React.FC = () => {
  const handleResourceAction = async (product: any) => {
    if (product.type === 'free') {
      handleFreeDownload(product.downloadUrl, `${product.title}.pdf`);
    } else if (product.type === 'paid') {
      const result = await handleProductPurchase(product.id, product.price);
      if (result.success) {
        alert('Purchase successful! Check your email for download instructions.');
      }
    } else if (product.type === 'external') {
      window.open(product.externalUrl, '_blank');
    }
  };

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-bold">
            📚 DIGITAL RESOURCES
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Resources for Every Stage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From free starter guides to comprehensive playbooks, we have the tools you need to launch and grow your nonprofit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                index === 1 ? 'ring-2 ring-red-500 transform scale-105' : 'hover:scale-105'
              }`}
            >
              {/* Premium Badge */}
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 text-sm font-bold z-10 rounded-bl-2xl">
                  <Star className="w-4 h-4 inline mr-1" />
                  POPULAR
                </div>
              )}
              
              {index === 2 && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 text-sm font-bold z-10 rounded-bl-2xl">
                  PREMIUM
                </div>
              )}

              {/* Gradient Header */}
              <div className={`h-32 ${
                index === 0 ? 'bg-gradient-to-br from-green-500 to-green-600' :
                index === 1 ? 'bg-gradient-to-br from-red-500 to-red-600' :
                'bg-gradient-to-br from-yellow-500 to-yellow-600'
              } relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <div className="text-3xl font-bold">
                    {product.price === 0 ? 'FREE' : `$${product.price}`}
                  </div>
                  {product.price === 29.99 && (
                    <div className="text-sm opacity-90">eBook</div>
                  )}
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleResourceAction(product)}
                  className={`w-full flex items-center justify-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${product.buttonColor} text-white group-hover:scale-105`}
                >
                  {product.type === 'free' && <Download className="w-5 h-5 mr-2" />}
                  {product.type === 'paid' && <ShoppingCart className="w-5 h-5 mr-2" />}
                  {product.type === 'external' && <ExternalLink className="w-5 h-5 mr-2" />}
                  {product.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Not sure which resource is right for you?</h3>
            <p className="text-gray-300 mb-6">
              Get personalized recommendations based on your nonprofit's current stage and goals.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Get Personalized Recommendations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;