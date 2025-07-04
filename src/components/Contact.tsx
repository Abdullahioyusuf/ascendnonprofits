import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Globe } from 'lucide-react';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    organization: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Contact form submission:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-bold">
            📞 GET IN TOUCH
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Ready to Start Your Nonprofit Journey?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can help you turn your vision into victory with proven strategies and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Let's Start the Conversation
              </h3>
              <p className="text-lg text-gray-600">
                Whether you're just starting to explore the idea of a nonprofit or ready to take the next step, I'm here to help guide you through the process with proven strategies and expert insights.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">info@ascendnonprofits.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Website</h4>
                  <p className="text-gray-600">ascendnonprofits.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Strategy Call</h4>
                  <p className="text-gray-600">Book a free 30-minute consultation</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-900 mb-4">Frequently Asked Questions</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-900">How long does it take to form a nonprofit?</h5>
                  <p className="text-sm text-gray-600">Typically 3-6 months, depending on complexity and state requirements.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">What's the cost to start a nonprofit?</h5>
                  <p className="text-sm text-gray-600">Total costs range from $500-$2,000, including filing fees and legal requirements.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">Do I need a board to start?</h5>
                  <p className="text-sm text-gray-600">Yes, most states require at least 3 board members for nonprofit formation.</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">Can you help with grant writing?</h5>
                  <p className="text-sm text-gray-600">Yes, I've secured over $1M in grants and offer comprehensive grant writing services.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {isSubmitted ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Message Sent!</h4>
                <p className="text-gray-600">
                  Thank you for reaching out. I'll get back to you within 24 hours with personalized recommendations for your nonprofit journey.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your organization (if applicable)"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="strategy-call">Free Strategy Call</option>
                    <option value="grant-writing">Grant Writing</option>
                    <option value="coaching">Strategy Coaching</option>
                    <option value="course">Course Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell me about your nonprofit vision and how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;