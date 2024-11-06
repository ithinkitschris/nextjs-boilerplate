// dark-mode-toggle.tsx
'use client';
import { FC } from "react";

interface DarkModeToggleProps {
    toggleDarkMode: () => void;
    isDarkMode: boolean; // Add isDarkMode prop
  }

const DarkModeToggle: FC<DarkModeToggleProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="
      transition-all duration-200 
      p-2 px-3 rounded-full border-1.5 border-foreground text-foreground 
      hover:scale-110 hover:bg-foreground
      hover:dark:bg-foreground hover:text-background 
      text-sm font-bold tracking-tight
      "
    >
      {isDarkMode ? 'Light' : 'Dark'} 
    </button>
  );
};

export default DarkModeToggle;
