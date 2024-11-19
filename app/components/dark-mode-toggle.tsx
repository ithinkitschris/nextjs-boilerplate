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
      group transition-all duration-200
      p-1.5 rounded-full backdrop-blur-md border-1.5 border-foreground hover:border-transparent dark:border-[rgba(255,255,255,.6)] dark:bg-transparent 
      dark:hover:bg-foreground dark:hover:border-transparent text-foreground hover:bg-foreground hover:scale-90
      z-20
      "
    >
      {/* Inline SVG for dark mode */}
      {isDarkMode ? (
        // Sun icon 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 120"
          className="w-5 h-5 text-foreground group-hover:text-background  transition-colors duration-200"
        >
          <circle className="stroke-current fill-none" cx="50.9" cy="60.6" r="30.4" style={{ strokeWidth: '6' }}/>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 90 90"
          className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-200"
        >
          <path
            d="M34.8,10c-2,4.7-3,9.8-3,15,0,21.6,17.5,39.1,39.1,39.1s4.1-.2,6.2-.5c-6.5,10.7-18.2,17.6-31.2,17.6-20.1,0-36.5-16.4-36.5-36.5s3.7-18.7,10.5-25.6c4.2-4.3,9.3-7.4,14.9-9.2M45.2,3C22.5,3.4,4.2,21.9,4.2,44.7s18.7,41.7,41.7,41.7,35.8-13.3,40.4-31.4c-4.6,2.4-9.8,3.7-15.4,3.7-18.7,0-33.8-15.1-33.8-33.8s3-16,8.1-21.9h0Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;
