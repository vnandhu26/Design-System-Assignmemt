import React from 'react';

const TopNavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-800">Design System</span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Components
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Documentation
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;