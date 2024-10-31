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
      className="transition-all duration-200 p-4 rounded-full border-2 border-foreground text-foreground hover:scale-120 hover:border-background hover:bg-neutral-800 hover:dark:bg-neutral-200 hover:text-background font-bold tracking-tight"
    >
      {isDarkMode ? 'Light' : 'Dark'} 
    </button>
  );
};

export default DarkModeToggle;
