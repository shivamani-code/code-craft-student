
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';
import TestimonialSection from '@/components/TestimonialSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import AuthModal from '@/components/AuthModal';
import Dashboard from '@/components/Dashboard';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const handleLogin = (email: string, password: string) => {
    // Simulate login
    const name = email.split('@')[0];
    setUserName(name.charAt(0).toUpperCase() + name.slice(1));
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
    setActiveSection('home');
    toast({
      title: "Welcome back!",
      description: "You have successfully logged in.",
    });
  };

  const handleSignUp = (name: string, email: string, password: string) => {
    // Simulate signup
    setUserName(name);
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
    setActiveSection('home');
    toast({
      title: "Account created!",
      description: "Welcome to CodeLearnHub! Let's start your learning journey.",
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setActiveSection('home');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const openLoginModal = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const openSignUpModal = () => {
    setAuthMode('signup');
    setIsAuthModalOpen(true);
  };

  const toggleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  };

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setIsSidebarOpen(false);
  };

  const renderContent = () => {
    if (!isLoggedIn) {
      return (
        <>
          <HeroSection
            isLoggedIn={isLoggedIn}
            userName={userName}
            onGetStarted={openSignUpModal}
          />
          <HowItWorksSection />
          <TestimonialSection />
        </>
      );
    }

    switch (activeSection) {
      case 'home':
        return <Dashboard userName={userName} />;
      case 'start':
        return (
          <div className="pt-20 px-6 py-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Start Learning</h1>
              <p className="text-lg text-gray-600 mb-8">Begin your coding journey with our structured learning paths.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                  <p className="text-gray-600 mb-4">Learn HTML, CSS, and JavaScript from scratch.</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start Course</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h3 className="text-xl font-semibold mb-3">Python Basics</h3>
                  <p className="text-gray-600 mb-4">Master the fundamentals of Python programming.</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start Course</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h3 className="text-xl font-semibold mb-3">Data Structures</h3>
                  <p className="text-gray-600 mb-4">Understand arrays, lists, stacks, and queues.</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start Course</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'explore':
        return (
          <div className="pt-20 px-6 py-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Explore Topics</h1>
              <p className="text-lg text-gray-600 mb-8">Discover new programming concepts and technologies.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
                  <p className="text-gray-600 mb-4">Dive into AI and ML algorithms.</p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Explore</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h3 className="text-xl font-semibold mb-3">Mobile Development</h3>
                  <p className="text-gray-600 mb-4">Build apps for iOS and Android.</p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Explore</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h3 className="text-xl font-semibold mb-3">Cloud Computing</h3>
                  <p className="text-gray-600 mb-4">Learn AWS, Azure, and Google Cloud.</p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Explore</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'go':
        return (
          <div className="pt-20 px-6 py-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Go & Practice</h1>
              <p className="text-lg text-gray-600 mb-8">Practice your coding skills with interactive challenges.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h3 className="text-xl font-semibold mb-3">Coding Challenges</h3>
                  <p className="text-gray-600 mb-4">Solve problems and improve your skills.</p>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Start Challenge</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border">
                  <h3 className="text-xl font-semibold mb-3">Project Builder</h3>
                  <p className="text-gray-600 mb-4">Build real-world projects step by step.</p>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Build Project</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'feedback':
        return (
          <div className="pt-20 px-6 py-12">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Feedback</h1>
              <p className="text-lg text-gray-600 mb-8">We'd love to hear your thoughts and suggestions!</p>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Feedback</label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-md resize-none h-32"
                      placeholder="Share your experience, suggestions, or report any issues..."
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} type="button" className="text-yellow-400 hover:text-yellow-500 text-xl">
                          ⭐
                        </button>
                      ))}
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    onClick={(e) => {
                      e.preventDefault();
                      toast({
                        title: "Thank you!",
                        description: "Your feedback has been submitted successfully.",
                      });
                    }}
                  >
                    Submit Feedback
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      default:
        return <Dashboard userName={userName} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        isLoggedIn={isLoggedIn}
        userName={userName}
        onToggleSidebar={() => setIsSidebarOpen(true)}
        onLogin={openLoginModal}
        onSignUp={openSignUpModal}
        onLogout={handleLogout}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        isLoggedIn={isLoggedIn}
        onLogin={openLoginModal}
        onSignUp={openSignUpModal}
        onNavigate={handleNavigation}
        activeSection={activeSection}
      />

      {renderContent()}

      <AuthModal
        isOpen={isAuthModalOpen}
        mode={authMode}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
        onSignUp={handleSignUp}
        onToggleMode={toggleAuthMode}
      />
    </div>
  );
};

export default Index;
