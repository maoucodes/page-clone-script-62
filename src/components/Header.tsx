import React from 'react';

const Header = () => {
  return (
    <header className="w-full px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-schemely-accent">
              <path fill="currentColor" d="M3 3h18v18H3V3zm2 2v14h14V5H5zm3 3h8v2H8V8zm0 4h6v2H8v-2z"/>
            </svg>
          </div>
          <span className="text-schemely-accent font-medium">Schemely</span>
        </div>
        
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-schemely-text hover:text-schemely-accent transition-colors">
            Documentation
          </a>
          <a href="#" className="text-schemely-text hover:text-schemely-accent transition-colors">
            API
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;