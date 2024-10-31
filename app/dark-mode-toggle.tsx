// dark-mode-toggle.tsx
'use client';
import { FC } from "react";

interface DarkModeToggleProps {
  toggleDarkMode: () => void;
}

const DarkModeToggle: FC<DarkModeToggleProps> = ({ toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="mt-4 p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      Toggle Themes
    </button>
  );
};

export default DarkModeToggle;
