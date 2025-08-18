'use client';
import { FC } from "react";
import { motion } from "framer-motion";
interface DarkModeToggleProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean; // Add isDarkMode prop
}

const DarkModeToggle: FC<DarkModeToggleProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <motion.button
      onClick={toggleDarkMode}
      className="
      group mt-1.5 md:mt-1 bg-background backdrop-blur dark:bg-transparent saturate-150 md:saturate-100 backdrop-brightness-125 md:backdrop-brightness-100 shadow-glass-border-sm md:shadow-glass-border
      p-2 rounded-full lg:hover:border-transparent lg:hover:text-white
      lg:dark:hover:bg-foreground text-foreground lg:hover:bg-foreground"
      initial={{ scale: 1 }}
      whileHover={{ scale: 0.9 }}
      transition={{
        duration: 0.2,  
        type: "spring",
        stiffness: 700, 
        damping: 15, 
      }}
    >
      {/* Inline SVG for dark mode */}
      {isDarkMode ? (
        // Sun icon 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 117 115"
          className="w-6 h-6 text-foreground lg:group-hover:text-background  transition-colors duration-200"
        >
          <circle className="stroke-current fill-none" cx="60.9" cy="60.6" r="30.4" style={{ strokeWidth: '6' }}/>
          <g>
            <line className="stroke-current" x1="60.9" y1="17.6" x2="60.9" y2="4.3" style={{ strokeWidth: '6' }} />
            <line className="stroke-current" x1="60.9" y1="116.8" x2="60.9" y2="103.5" style={{ strokeWidth: '6' }} />
            <line className="stroke-current" x1="103.9" y1="60.6" x2="117.2" y2="60.6" style={{ strokeWidth: '6' }} />
            <line className="stroke-current" x1="4.7" y1="60.6" x2="18" y2="60.6" style={{ strokeWidth: '6' }} />
          </g>
          <g>
            <line className="stroke-current" x1="91.3" y1="30.2" x2="100.7" y2="20.8" style={{ strokeWidth: '6' }} />
            <line className="stroke-current" x1="21.1" y1="100.3" x2="30.6" y2="90.9" style={{ strokeWidth: '6' }} />
            <line className="stroke-current" x1="91.3" y1="90.9" x2="100.7" y2="100.3" style={{ strokeWidth: '6' }} />
            <line className="stroke-current" x1="21.1" y1="20.8" x2="30.6" y2="30.2" style={{ strokeWidth: '6' }} />
          </g>
        </svg>
      ) : (
        // Moon icon 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 23 24" strokeWidth={1.3} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>


      )}
    </motion.button>
  );
};

export default DarkModeToggle;