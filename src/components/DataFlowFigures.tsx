import React from 'react';

const DataFlowFigures = () => {
  const figures = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="flex justify-center items-center space-x-4 mt-16">
      {figures.map((_, index) => (
        <div
          key={index}
          className="w-8 h-16 opacity-30"
          style={{
            animationDelay: `${index * 0.3}s`
          }}
        >
          <svg
            viewBox="0 0 24 48"
            className="w-full h-full text-schemely-accent animate-walk"
            fill="currentColor"
          >
            {/* Data packet representation */}
            <rect x="8" y="4" width="8" height="6" rx="2" />
            <rect x="6" y="12" width="12" height="4" rx="1" />
            <rect x="8" y="18" width="8" height="4" rx="1" />
            <rect x="4" y="24" width="16" height="6" rx="2" />
            <rect x="8" y="32" width="8" height="4" rx="1" />
            <rect x="10" y="38" width="4" height="6" rx="1" />
            {/* Connection lines */}
            <line x1="12" y1="10" x2="12" y2="12" stroke="currentColor" strokeWidth="1" />
            <line x1="12" y1="16" x2="12" y2="18" stroke="currentColor" strokeWidth="1" />
            <line x1="12" y1="22" x2="12" y2="24" stroke="currentColor" strokeWidth="1" />
            <line x1="12" y1="30" x2="12" y2="32" stroke="currentColor" strokeWidth="1" />
            <line x1="12" y1="36" x2="12" y2="38" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default DataFlowFigures;