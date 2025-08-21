import React from 'react';
import { motion } from "framer-motion";
import { useBrowser } from '../../context/BrowserContext';
import { animateIn } from '../../constants/animations';

const DesktopNavbar = ({ 
  showNav, 
  setShowNav, 
  selectedTags, 
  setSelectedTags, 
  selectedWork, 
  setSelectedWork,
  toggleWork, 
  setShowWork, 
  skillsetData, 
  toggleTag,
  isWhiteBG // Controls styling when white background sections are active
}) => {
  const { browserType } = useBrowser();

  return (
    <motion.div
      className="hidden md:flex items-center justify-center non-chromium-ml w-full z-50"
      initial="hidden"
      animate="show"
      variants={animateIn}
    >
      {/* Navbar Background with Buttons */}
      <motion.div
        className={`rounded-full flex items-center justify-center
        h-[46px] dark:bg-transparent border border-white/35 bg-white
        shadow-glass-border-light dark:shadow-glass-border
        ${browserType === 'chrome' 
          ? '' 
          : browserType === 'safari' 
            ? 'backdrop-blur-3xl bg-white' 
            : browserType === 'firefox' 
              ? 'backdrop-blur-3xl bg-white' 
              : 'backdrop-blur-3xl bg-white'
        }`}
        style={browserType === 'chrome' ? {
             backdropFilter: 'blur(1.25px) url(#backdrop-distortion)',
          } : {}}
        animate={{ width: showNav ? '578px' : '152px' }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 22.5
        }}
      >
        {/* Button Container - Centers when closed, left-aligned when open */}
        <motion.div
          layout
          className={`flex gap-1 w-full relative ${showNav ? 'ml-2' : 'ml-4'}`}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 27.5
          }}
        >
          {/* Home/Back Button */}
          <motion.button
            layout='position'
            className={`
              rounded-full ${showNav ? 'px-0.5 py-0' : 'px-3 py-[3px]'} border-1.5
              ${isWhiteBG ? 'font-medium' : 'font-semibold'} tracking-[-0.2pt] whitespace-nowrap text-sm lg:text-[15px] transition-colors duration-200
              hover:text-background hover:bg-foreground hover:text-white ${isWhiteBG ? 'border-black' : 'border-foreground'}
              dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
              ${isWhiteBG ? 'text-black !text-black dark:!text-black !important' : ''}
              
              ${showNav 
                ? 'border-transparent' 
                : selectedWork.includes('resume') 
                  ? '' 
                  : 'border-transparent'
              }
            `}
            style={{
              color: isWhiteBG ? '#000000' : undefined
            }}
            whileHover={{ scale: 0.96 }}
            onClick={() => {
              if (showNav) {
                // If nav is open, close it and go back to resume
                setShowNav(false);
                toggleWork('resume');
                setShowWork(false);
              } else {
                // If nav is closed, go to resume (home functionality)
                toggleWork('resume');
                setShowWork(false);
                setShowNav(false);
              }
            }}
            animate={{
              x: showNav ? 0 : 0
            }}
            transition={{
              duration: 0.2,  
              type: "spring",
              stiffness: 700, 
              damping: 15, 
            }}
          >
            {showNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
            ) : (
              'Home'
            )}
          </motion.button>

          {/* Work Button */}
          <motion.button 
            layout='position'
            className={`
              rounded-full px-3 py-[3px] border-1.5 text-sm lg:text-[15px]
              font-medium tracking-[-0.2pt] whitespace-nowrap
              transition-colors duration-200 ${isWhiteBG ? 'border-black' : 'border-foreground'}
              hover:text-background hover:bg-foreground hover:text-white hover:mix-blend-normal
              dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
              ${isWhiteBG ? 'text-black !text-black dark:!text-black !important' : showNav ? '' : 'text-black dark:text-white dark:hover:bg-transparent'}
              ${selectedTags.includes('all')
                ? '' 
                : 'border-transparent'
              }
            `}
            style={{
              color: isWhiteBG ? '#000000' : undefined
            }}
            whileHover={{ scale: 0.95 }}
            onClick={() => {
              if (!showNav) {
                setShowNav(true);
                setSelectedTags(['all']);
                setSelectedWork('');
              } else {
                setSelectedTags(['all']);
                setSelectedWork('');
              }
            }}
            animate={{
              x: showNav ? 0 : 0
            }}
            transition={{
              duration: 0.2,  
              type: "spring",
              stiffness: 700, 
              damping: 15, 
            }}
          >
            {showNav ? 'All' : 'Work'}
          </motion.button>

          {/* Skillset Buttons - Only show when nav is open */}
          <motion.div 
            layout
            className={`flex gap-2 ${showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            animate={{ 
              x: showNav ? 0 : -20
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20
            }}
          >
            {skillsetData.map(({ tag, label, work }, index) => (
              <motion.button 
                key={tag}
                className={`rounded-full px-3 py-[3px] border-1.5 text-sm lg:text-[15px]
                font-semibold tracking-[-0.2pt] whitespace-nowrap 
                dark:mix-blend-normal transition-colors duration-200 hover:text-background 
                hover:bg-foreground hover:text-white hover:mix-blend-normal ${isWhiteBG ? 'hover:border-black' : 'hover:border-foreground'}
                dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
                ${isWhiteBG ? 'text-black !text-black dark:!text-black !important' : ''}
                ${selectedTags.includes(tag) || (tag === 'photography' && selectedWork === 'photography') || (tag === 'content' && selectedWork === 'content') ? (isWhiteBG ? 'border-black' : 'border-foreground') : 'border-transparent'}`}
                style={{
                  color: isWhiteBG ? '#000000' : undefined
                }}
                whileHover={{ scale: 0.9 }}
                animate={{ 
                  x: showNav ? 0 : -30
                }}
                transition={{
                  type: "spring",
                  stiffness: 1000,
                  damping: 20,
                  delay: showNav ? index * 0 : 0
                }}
                onClick={() => {
                  if (work === 'clear') {
                    // For skillset filtering, just set the tag and clear selected work
                    toggleTag(tag);
                    // setSelectedWork('');
                  } else {
                    // For specific work pages (like photography, content)
                    toggleTag(tag);
                    toggleWork(work);
                  }
                }}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DesktopNavbar; 