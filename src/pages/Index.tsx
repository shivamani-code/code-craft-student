
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

  const handleSettings = () => {
    setActiveSection('settings');
    toast({
      title: "Settings",
      description: "Settings page opened.",
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
      case 'settings':
        return (
          <div className="pt-20 px-6 py-12">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Settings</h1>
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
                    <p className="text-gray-600">Manage your account preferences and profile information.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Notification Settings</h3>
                    <p className="text-gray-600">Configure how you receive notifications.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Privacy Settings</h3>
                    <p className="text-gray-600">Control your privacy and data sharing preferences.</p>
                  </div>
                </div>
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
        onLogout={handleLogout}
        onSettings={handleSettings}
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
