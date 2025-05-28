import React, { useState } from 'react';
import { Rocket, Compass, BookOpen, ArrowLeft, ArrowDown } from 'lucide-react';
import SubSectionLayout from './SubSectionLayout';

interface DashboardProps {
  userName: string;
}

type SectionType = 'start' | 'explore' | 'enroll' | null;
type SubSectionType = 'free-courses' | 'paid-courses' | 'resources' | 'notes' | 'practice-problems' | null;

const Dashboard: React.FC<DashboardProps> = ({ userName }) => {
  const [activeSection, setActiveSection] = useState<SectionType>(null);
  const [activeSubSection, setActiveSubSection] = useState<SubSectionType>(null);

  const sections = [
    {
      id: 'start' as const,
      title: 'Start – Beginner',
      description: 'Perfect for newcomers. Learn the basics and build your foundation.',
      icon: Rocket,
      color: 'from-green-500 to-emerald-600',
      hoverColor: 'hover:from-green-600 hover:to-emerald-700'
    },
    {
      id: 'explore' as const,
      title: 'Explore – Intermediate',
      description: 'For those with some experience. Expand your skills and dive deeper.',
      icon: Compass,
      color: 'from-blue-500 to-indigo-600',
      hoverColor: 'hover:from-blue-600 hover:to-indigo-700'
    },
    {
      id: 'enroll' as const,
      title: 'Go – Enroll',
      description: 'Advanced learners ready for structured content and guided paths.',
      icon: BookOpen,
      color: 'from-purple-500 to-violet-600',
      hoverColor: 'hover:from-purple-600 hover:to-violet-700'
    }
  ];

  // All sections now have the same five categories in flowchart style
  const getSubSections = (sectionId: SectionType) => {
    return [
      { id: 'free-courses', title: 'Free Courses', description: 'Access free programming courses and tutorials' },
      { id: 'paid-courses', title: 'Paid Courses', description: 'Premium courses with certification and advanced content' },
      { id: 'resources', title: 'Resources', description: 'Educational materials, tools, and references' },
      { id: 'notes', title: 'Notes', description: 'Study notes and documentation' },
      { id: 'practice-problems', title: 'Practice Problems', description: 'Coding challenges and exercises' }
    ];
  };

  const getSectionTitle = (sectionId: SectionType) => {
    const titles = {
      start: 'Start – Beginner Learning Path',
      explore: 'Explore – Intermediate Journey',
      enroll: 'Go – Advanced Enrollment Path'
    };
    return titles[sectionId!] || '';
  };

  const getSubSectionTitle = (subSectionId: SubSectionType) => {
    const titles = {
      'free-courses': 'Free Courses',
      'paid-courses': 'Paid Courses',
      'resources': 'Resources',
      'notes': 'Notes',
      'practice-problems': 'Practice Problems'
    };
    return titles[subSectionId!] || '';
  };

  // Handle sub-section view (full page view for individual sub-sections)
  if (activeSubSection) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <button
            onClick={() => setActiveSubSection(null)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to {getSectionTitle(activeSection)}</span>
          </button>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {getSubSectionTitle(activeSubSection)}
          </h1>
          <div className="bg-white rounded-lg shadow-md border p-8 min-h-96">
            <p className="text-gray-600 text-lg mb-8">
              Content for {getSubSectionTitle(activeSubSection)} will be added here.
            </p>
            {/* Blank content area for future implementation */}
            <div className="bg-gray-50 rounded-lg p-8 min-h-64 flex items-center justify-center">
              <p className="text-gray-500">Content coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Handle section view (showing sub-sections as flowchart cards)
  if (activeSection) {
    const subSections = getSubSections(activeSection);
    
    return (
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => setActiveSection(null)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </button>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{getSectionTitle(activeSection)}</h2>
          <p className="text-xl text-gray-600">
            Follow the learning path through these connected sections
          </p>
        </div>

        {/* Flowchart-style layout with connecting arrows */}
        <div className="max-w-2xl mx-auto">
          {subSections.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Card */}
              <div
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in group mb-6"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveSubSection(item.id as SubSectionType)}
              >
                <div className="flex flex-col space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                      View
                    </button>
                  </div>
                </div>
              </div>

              {/* Connecting Arrow (except for last item) */}
              {index < subSections.length - 1 && (
                <div className="flex justify-center mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-4 bg-blue-300"></div>
                    <ArrowDown className="w-6 h-6 text-blue-400" />
                    <div className="w-px h-4 bg-blue-300"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Main dashboard view
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Welcome Message */}
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome back, <span className="text-blue-600">{userName}!</span>
        </h2>
        <p className="text-xl text-gray-600">
          Choose your learning path and continue your software development journey
        </p>
      </div>

      {/* Dashboard Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <div
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`bg-gradient-to-br ${section.color} ${section.hoverColor} p-8 rounded-2xl text-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in group`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="bg-white/20 p-4 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                <section.icon className="w-12 h-12" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
                <p className="text-white/90 leading-relaxed">
                  {section.description}
                </p>
              </div>

              <div className="bg-white/20 px-6 py-2 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                <span className="font-medium">Click to Start</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Your Learning Journey Awaits
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Each path is carefully designed to match your current skill level and help you progress 
            systematically. Track your progress, get personalized feedback, and connect with mentors 
            who will guide you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
