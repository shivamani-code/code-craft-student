
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Lightbulb, Users } from 'lucide-react';

interface HeroSectionProps {
  isLoggedIn: boolean;
  userName?: string;
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isLoggedIn, userName, onGetStarted }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-teal-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Welcome message */}
          <div className="mb-8 animate-fade-in">
            {isLoggedIn ? (
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Welcome back, <span className="text-blue-400">{userName}!</span>
              </h1>
            ) : (
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Master <span className="text-blue-400">Software Development</span> 
                <br />Your Way
              </h1>
            )}
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {isLoggedIn 
              ? "Continue your journey with personalized courses, expert mentorship, and a supportive community."
              : "Comprehensive learning platform with courses, roadmaps, skills training, expert guidance, and mentorship designed for aspiring software developers."
            }
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Code, title: "Expert Courses", desc: "Industry-vetted curriculum" },
              { icon: Lightbulb, title: "Personalized Paths", desc: "Tailored learning roadmaps" },
              { icon: Users, title: "Mentor Support", desc: "1-on-1 expert guidance" },
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <feature.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          {!isLoggedIn && (
            <Button
              onClick={onGetStarted}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
