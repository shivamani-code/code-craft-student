
import React from 'react';
import { UserPlus, BookOpen, Trophy } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up & Assess",
    description: "Create your account and take our skill assessment to get personalized recommendations."
  },
  {
    icon: BookOpen,
    title: "Follow Your Roadmap",
    description: "Get a custom learning path with courses, projects, and mentorship tailored to your goals."
  },
  {
    icon: Trophy,
    title: "Build & Succeed",
    description: "Complete real-world projects, get expert feedback, and land your dream tech job."
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your software development journey in three simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step number */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <step.icon className="w-12 h-12 text-blue-600 mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
