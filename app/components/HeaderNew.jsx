'use client';

import { Calculator } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
              <Calculator className="h-5 w-5 text-gray-300" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">RAB Calculator</h1>
              <p className="text-gray-400 text-xs">Professional Workspace</p>
            </div>
          </div>
          
          {/* Center Info */}
          <div className="hidden md:flex items-center text-sm text-gray-400">
            <span>Rencana Anggaran Biaya Generator</span>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-400">
            <span className="px-3 py-1 bg-gray-800 rounded-full text-xs">v2.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
