
import React, { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';
import TestimonialSection from '@/components/TestimonialSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import AuthModal from '@/components/AuthModal';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const { toast } = useToast();

  const handleLogin = (email: string, password: string) => {
    // Simulate login
    const name = email.split('@')[0];
    setUserName(name.charAt(0).toUpperCase() + name.slice(1));
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
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
    toast({
      title: "Account created!",
      description: "Welcome to CodeLearnHub! Let's start your learning journey.",
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
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
      />

      <HeroSection
        isLoggedIn={isLoggedIn}
        userName={userName}
        onGetStarted={openSignUpModal}
      />

      <HowItWorksSection />
      <TestimonialSection />

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
