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
    <div className="relative inline-block">
      <Button 
        variant="schemely" 
        size="lg" 
        className={`relative overflow-hidden backdrop-blur-sm bg-schemely-button/80 border border-schemely-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
        onClick={onClick}
      >
        <div className="relative z-10">
          {children}
        </div>
        <div className="absolute inset-0 w-full h-full">
          <Button3DEffect />
        </div>
      </Button>
    </div>
  );
};

export default Enhanced3DButton;