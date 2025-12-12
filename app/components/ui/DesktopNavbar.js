import React from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { useBrowser } from '../../context/BrowserContext';
import { useHideNav } from '../../context/HideNavContext';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import { animateIn } from '../../constants/animations';
import { workTags } from '../../data/videoData';

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
  isWhiteBG, // Controls styling when white background sections are active
  scrollToArchive, // Function to scroll to archive section
  homeOnly = false, // If true, only show Home button
  onHomeClick // Optional custom handler for Home button click
}) => {
  const router = useRouter();
  const { browserType } = useBrowser();
  const { hideNav, isArchiveInView, archiveSelectedTags, setArchiveSelectedTags } = useHideNav();
  const isMobile = useMobileDetection();
  
  // Determine if Archive button should be shown (only on resume page)
  const showArchiveButton = !homeOnly && selectedWork === 'resume';
  // Determine if we're in Archive control mode
  const isArchiveMode = !homeOnly && isArchiveInView && selectedWork === 'resume';
  // Determine if navbar should be expanded (either manually opened or Archive mode)
  // Never expand on mobile - navbar stays collapsed
  const shouldExpandNav = !homeOnly && !isMobile && (showNav || isArchiveMode);
  // Calculate navbar width based on Archive button visibility and expansion state
  // On mobile, collapsed width is 161px; on desktop, use original widths
  const navbarWidth = homeOnly 
    ? '86px' 
    : (shouldExpandNav 
      ? (isMobile ? '161px' : '545px')
      : (showArchiveButton 
        ? (isMobile ? '161px' : '168px')
        : (isMobile ? '161px' : '85.5px')));

  return (
    <motion.div
      className="flex items-center justify-center non-chromium-ml w-full z-50"
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
        animate={{ width: navbarWidth }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 22.5
        }}
      >
        {/* Button Container - Centers when closed, left-aligned when open */}
        <motion.div
          layout
          className={`flex gap-1 w-full relative ${shouldExpandNav ? 'ml-2' : 'ml-4'}`}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 27.5
          }}
        >
          {/* Home Button - Only show when navbar is collapsed or homeOnly is true */}
          {(!shouldExpandNav || homeOnly) && (
            <motion.button
              tabIndex={0}
              layout='position'
              className={`
                rounded-full px-3 py-[3px] border-1.5
                ${isWhiteBG ? 'font-medium' : 'font-semibold'} tracking-[-0.2pt] whitespace-nowrap text-sm lg:text-[15px] transition-colors duration-200
                hover:text-background hover:bg-foreground hover:text-white ${isWhiteBG ? 'hover:border-black' : 'hover:border-foreground'}
                dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
                ${isWhiteBG ? 'text-black !text-black dark:!text-black !important' : ''}
                focus-visible-standard
              `}
              style={{
                color: isWhiteBG ? '#000000' : undefined,
                borderColor: (homeOnly || selectedWork === 'resume')
                  ? (isWhiteBG ? 'rgba(0, 0, 0, 1)' : 'var(--foreground)')
                  : (isWhiteBG 
                    ? 'rgba(0, 0, 0, 0.1)' 
                    : 'color-mix(in srgb, var(--foreground) 10%, transparent)')
              }}
              whileHover={{ scale: 0.96 }}
              onClick={() => {
                if (onHomeClick) {
                  onHomeClick();
                } else {
                  // If nav is closed, go to resume (home functionality)
                  toggleWork('resume');
                  setShowWork(false);
                  setShowNav(false);
                }
              }}
              animate={{
                x: 0
              }}
              transition={{
                duration: 0.2,  
                type: "spring",
                stiffness: 700, 
                damping: 15, 
              }}
            >
              Home
            </motion.button>
          )}

          {/* Work Button - Only show when on resume page */}
          {showArchiveButton && (
            <motion.button 
              tabIndex={0}
              layout='position'
              className={`
                rounded-full px-3 py-[3px] border-1.5 text-sm lg:text-[15px]
                font-medium tracking-[-0.2pt] whitespace-nowrap
                transition-colors duration-200 ${isWhiteBG ? 'hover:border-black' : 'hover:border-foreground'}
                hover:text-background hover:bg-foreground hover:text-white hover:mix-blend-normal
                dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
                ${isWhiteBG ? 'text-black !text-black dark:!text-black !important' : showNav ? '' : 'text-black dark:text-white dark:hover:bg-transparent'}
                focus-visible-standard
              `}
              style={{
                color: isWhiteBG ? '#000000' : undefined,
                borderColor: (isArchiveMode
                  ? archiveSelectedTags.includes('all')
                  : selectedTags.includes('all'))
                  ? (isWhiteBG ? 'rgba(0, 0, 0, 1)' : 'var(--foreground)')
                  : (isWhiteBG 
                    ? 'rgba(0, 0, 0, 0.1)' 
                    : 'color-mix(in srgb, var(--foreground) 10%, transparent)')
              }}
              whileHover={{ scale: 0.95 }}
              onClick={() => {
                if (selectedWork === 'resume') {
                  if (shouldExpandNav) {
                    // When navbar is expanded, filter archive to show all works
                    setArchiveSelectedTags(['all']);
                  } else {
                    // When navbar is collapsed, scroll to archive section
                    scrollToArchive();
                  }
                } else {
                  // Original behavior when not on resume page
                  if (!showNav) {
                    setShowNav(true);
                    setSelectedTags(['all']);
                    setSelectedWork('');
                  } else {
                    setSelectedTags(['all']);
                    setSelectedWork('');
                  }
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
              {shouldExpandNav ? 'All' : 'Archive'}
            </motion.button>
          )}

          {/* Skillset Buttons - Only show when nav is open or Archive is in view */}
          <motion.div 
            layout
            className={`flex gap-2 ${shouldExpandNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            animate={{ 
              x: shouldExpandNav ? 0 : -20
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
                tabIndex={shouldExpandNav ? 0 : -1}
                className={`rounded-full px-3 py-[3px] border-1.5 text-sm lg:text-[15px]
                font-semibold tracking-[-0.2pt] whitespace-nowrap 
                dark:mix-blend-normal transition-colors duration-200 hover:text-background 
                hover:bg-foreground hover:text-white hover:mix-blend-normal ${isWhiteBG ? 'hover:border-black' : 'hover:border-foreground'}
                dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
                ${isWhiteBG ? 'text-black !text-black dark:!text-black !important' : ''}
                focus-visible-standard`}
                style={{
                  color: isWhiteBG ? '#000000' : undefined,
                  borderColor: (isArchiveMode 
                    ? archiveSelectedTags.includes(tag)
                    : (selectedTags.includes(tag) || (tag === 'photography' && selectedWork === 'photography') || (tag === 'content' && selectedWork === 'content')))
                    ? (isWhiteBG ? 'rgba(0, 0, 0, 1)' : 'var(--foreground)')
                    : (isWhiteBG 
                      ? 'rgba(0, 0, 0, 0.1)' 
                      : 'color-mix(in srgb, var(--foreground) 10%, transparent)')
                }}
                whileHover={{ scale: 0.9 }}
                animate={{ 
                  x: shouldExpandNav ? 0 : -30
                }}
                transition={{
                  type: "spring",
                  stiffness: 1000,
                  damping: 20,
                  delay: shouldExpandNav ? index * 0 : 0
                }}
                onClick={() => {
                  if (isArchiveMode) {
                    // When in Archive mode, update Archive tags
                    if (tag === 'all') {
                      setArchiveSelectedTags(['all']);
                    } else {
                      // If clicking the same tag, toggle it off (go back to 'all')
                      if (archiveSelectedTags.includes(tag)) {
                        setArchiveSelectedTags(['all']);
                      } else {
                        setArchiveSelectedTags([tag]);
                      }
                    }
                  } else {
                    // Normal mode behavior
                    if (work === 'clear') {
                      // For skillset filtering, just set the tag and clear selected work
                      toggleTag(tag);
                      // setSelectedWork('');
                    } else {
                      // For specific work pages - use router navigation if route exists
                      toggleTag(tag);
                      // Check if this work has a route (is in workTags)
                      if (workTags.includes(work)) {
                        router.push(`/${work}`);
                      } else {
                        toggleWork(work);
                      }
                    }
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