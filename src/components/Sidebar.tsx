
import React from 'react';
import { Book, Map, Award, FileText, Users, X, Home, Rocket, Compass, BookOpen, MessageSquare } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onLogin: () => void;
  onSignUp: () => void;
}

const loggedInMenuItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: Rocket, label: 'Start', href: '#start' },
  { icon: Compass, label: 'Explore', href: '#explore' },
  { icon: BookOpen, label: 'Go', href: '#go' },
  { icon: MessageSquare, label: 'Feedback', href: '#feedback' },
  { icon: Book, label: 'Courses', href: '#courses' },
  { icon: Map, label: 'Roadmaps', href: '#roadmaps' },
  { icon: Award, label: 'Skills', href: '#skills' },
  { icon: FileText, label: 'Guides', href: '#guides' },
  { icon: Users, label: 'Mentor Support', href: '#mentors' },
  { icon: Users, label: 'Community', href: '#community' },
];

const loggedOutMenuItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: Book, label: 'About', href: '#about' },
  { icon: FileText, label: 'Features', href: '#features' },
  { icon: Users, label: 'Contact', href: '#contact' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, isLoggedIn, onLogin, onSignUp }) => {
  const menuItems = isLoggedIn ? loggedInMenuItems : loggedOutMenuItems;

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
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>

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
