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