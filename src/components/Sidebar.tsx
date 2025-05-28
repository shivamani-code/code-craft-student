
import React from 'react';
import { Book, Award, FileText, Users, X, Home, MessageSquare, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onLogin: () => void;
  onSignUp: () => void;
  onNavigate?: (section: string) => void;
  activeSection?: string;
  onLogout?: () => void;
  onSettings?: () => void;
}

const loggedInMenuItems = [
  { icon: Home, label: 'Home', section: 'home' },
  { icon: MessageSquare, label: 'Feedback', section: 'feedback' },
  { icon: Book, label: 'Courses', section: 'courses' },
  { icon: Users, label: 'Mentor Support', section: 'mentors' },
  { icon: Users, label: 'Community', section: 'community' },
];

const loggedOutMenuItems = [
  { icon: Home, label: 'Home', section: 'home' },
  { icon: Book, label: 'About', section: 'about' },
  { icon: FileText, label: 'Features', section: 'features' },
  { icon: Users, label: 'Contact', section: 'contact' },
];

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  onClose, 
  isLoggedIn, 
  onLogin, 
  onSignUp, 
  onNavigate,
  activeSection = 'home',
  onLogout,
  onSettings
}) => {
  const menuItems = isLoggedIn ? loggedInMenuItems : loggedOutMenuItems;

  const handleItemClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900">Navigation</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleItemClick(item.section)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group ${
                  activeSection === item.section 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'hover:bg-blue-50 hover:text-blue-600'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium text-left">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Settings and Logout for logged in users */}
          {isLoggedIn && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="space-y-2">
                <button
                  onClick={() => {
                    if (onSettings) onSettings();
                    onClose();
                  }}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-all duration-200"
                >
                  <Settings className="w-5 h-5" />
                  <span className="font-medium">Settings</span>
                </button>
                <button
                  onClick={() => {
                    if (onLogout) onLogout();
                    onClose();
                  }}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-medium">Sign Out</span>
                </button>
              </div>
            </div>
          )}

          {/* Login/Signup buttons for non-logged in users */}
          {!isLoggedIn && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="space-y-3">
                <button
                  onClick={() => {
                    onLogin();
                    onClose();
                  }}
                  className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    onSignUp();
                    onClose();
                  }}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
