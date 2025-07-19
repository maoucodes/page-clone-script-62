import React from 'react';
import { Button } from '@/components/ui/button';
import Button3DEffect from './Button3DEffect';

interface Enhanced3DButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Enhanced3DButton: React.FC<Enhanced3DButtonProps> = ({ children, className, onClick }) => {
  return (
    <div className="relative inline-block group">
      <Button 
        variant="schemely" 
        size="lg" 
        className={`relative overflow-hidden backdrop-blur-sm bg-schemely-button/80 border border-schemely-accent/20 shadow-lg hover:shadow-2xl hover:shadow-schemely-accent/20 hover:scale-105 transition-all duration-300 font-semibold ${className}`}
        onClick={onClick}
      >
        <div className="relative z-10 group-hover:text-schemely-accent transition-colors duration-300">
          {children}
        </div>
        <div className="absolute inset-0 w-full h-full">
          <Button3DEffect />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-schemely-accent/0 via-schemely-accent/10 to-schemely-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Button>
    </div>
  );
};

export default Enhanced3DButton;