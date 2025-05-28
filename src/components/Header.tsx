
import React, { useState } from 'react';
import { Menu, User, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  isLoggedIn: boolean;
  userName?: string;
  onToggleSidebar: () => void;
  onLogin: () => void;
  onSignUp: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isLoggedIn,
  userName,
  onToggleSidebar,
  onLogin,
  onSignUp,
  onLogout,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side - Menu button (only show when logged in) */}
        {isLoggedIn && (
          <button
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        )}

        {/* Center - Site name */}
        <div className={`${isLoggedIn ? 'absolute left-1/2 transform -translate-x-1/2' : 'flex-1 text-center'}`}>
          <h1 className="text-2xl font-bold text-gray-900 animate-fade-in">
            CodeLearn<span className="text-blue-600">Hub</span>
          </h1>
        </div>

        {/* Right side - Login/Signup or User dropdown */}
        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            // Before login: only Login and Sign Up
            <>
              <Button
                variant="outline"
                onClick={onLogin}
                className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
              >
                Login
              </Button>
              <Button
                onClick={onSignUp}
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Sign Up
              </Button>
            </>
          ) : (
            // After login: Only user dropdown
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">{userName}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white shadow-lg border border-gray-200">
                <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={onLogout}
                  className="flex items-center space-x-2 cursor-pointer hover:bg-red-50 text-red-600"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
