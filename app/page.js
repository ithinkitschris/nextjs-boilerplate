'use client';

import React, { useState, useEffect, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Resume from './components/pages/resume.js';
import { useBrowser } from './context/BrowserContext';
import { useHideNav } from './context/HideNavContext';

// Import new components and hooks
import VideoSquare from './components/ui/VideoSquare';
import DesktopNavbar from './components/ui/DesktopNavbar';
import MobileNavbar from './components/ui/MobileNavbar';
import { useMobileDetection } from './hooks/useMobileDetection';
import { useVideoNavigation } from './hooks/useVideoNavigation';
import { skillsetData, workTags } from './data/videoData';

// Main content component that uses useSearchParams
function HomeContent() {
  const { browserType } = useBrowser();
  const { hideNav, randomRotation, toggleHideNav, setIsWhiteBG, isWhiteBG, setIsArchiveInView, setArchiveSelectedTags } = useHideNav();

  // Use custom hooks
  const isMobile = useMobileDetection();
  const { selectedTags, setSelectedTags, selectedWork, setSelectedWork, toggleTag, toggleWork, filteredVideos } = useVideoNavigation();

  const [showNav, setShowNav] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const resumeRef = useRef(null);

  // Function to scroll to archive section
  const scrollToArchive = () => {
    if (selectedWork === 'resume' && resumeRef.current) {
      resumeRef.current.scrollToArchive();
    }
  };


  // Reset Archive state when navigating away from resume page
  useEffect(() => {
    if (selectedWork !== 'resume') {
      setIsArchiveInView(false);
      setArchiveSelectedTags(['all']);
    }
  }, [selectedWork, setIsArchiveInView, setArchiveSelectedTags]);

  return (
    <>
      {/* SVG Filter Definition */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <filter
              id="backdrop-distortion"
              x="0" y="0" width="100%" height="100%"
            >
              <feImage
                href="/displace-map.png"
                x="0" y="0"  
                preserveAspectRatio="none"
              />

              <feDisplacementMap
                in="SourceGraphic"
                scale="30"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>

        {/* Entire Page column setup */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 mt-12
        text-sm font-[family-name:var(--font-geist-sans)] max-w-9xl w-full mx-auto">            

          {/* Top Navbar */}
          <motion.div 
            className="col-span-full fixed top-[0.4rem] md:top-10 z-[45] mb-4 w-screen max-w-9xl pl-3"
            animate={{ 
              y: 0, // DISABLED: hideNav ? -240 : 0,
              rotateZ: 0 // DISABLED: hideNav ? randomRotation : 0
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 24
            }}
          >
            {/* Desktop Navbar */}
            <DesktopNavbar 
              showNav={showNav}
              setShowNav={setShowNav}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              selectedWork={selectedWork}
              setSelectedWork={setSelectedWork}
              toggleWork={toggleWork}
              setShowWork={setShowWork}
              skillsetData={skillsetData}
              toggleTag={toggleTag}
              isWhiteBG={isWhiteBG}
              scrollToArchive={scrollToArchive}
            />
          </motion.div>

          {/* Mobile Navbar */}
          <MobileNavbar 
            showNav={showNav}
            setShowNav={setShowNav}
            selectedTags={selectedTags}
            selectedWork={selectedWork}
            toggleWork={toggleWork}
            setShowWork={setShowWork}
            toggleTag={toggleTag}
            isSection13Active={isWhiteBG}
            scrollToArchive={scrollToArchive}
          />

          {/* Page Container (Adjust px here) */}
          <motion.div
            className="col-span-full mx-[6%]"  //shadow-mild rounded-2xl -mr-2 mt-4 pt-2 pb-6 px-6 dark:shadow-none  
            layout="position"
            layoutId='test'
            transition={{ type: "spring", stiffness: 600, damping: 25 }}  
          > 
            {/* Grid / Page */}
            <motion.div 
            className={`grid col-span-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1.5 md:gap-2.5 mt-8 md:mt-24`}>

              <AnimatePresence>
                {selectedWork === 'resume' && selectedTags.length === 0 ? (
                  <Resume ref={resumeRef} key="resume" className="col-span-full" showNav={showNav} toggleWork={toggleWork}/>
                ) : (
                  filteredVideos.map((video) => {
                    // Use video.link directly - all videos with pages now have links in videoData
                    const videoLink = video.link;
                    
                    // Don't pass onClick if there's a link - let VideoSquare handle navigation
                    const handleClick = videoLink ? undefined : () => { 
                      const matchedWork = workTags.find((tag) => video.tags.includes(tag));
                      if (matchedWork) {
                        toggleWork(matchedWork);
                      }
                    };
                    return (
                      <VideoSquare
                        key={video.src}
                        videoSrc={video.src}
                        title={video.title}
                        subheader={video.subheader}
                        poster={video.poster}
                        link={videoLink}
                        tags={video.tags}
                        loading="lazy"
                        selectedTags={selectedTags}
                        onClick={handleClick}
                      />
                    );
                  })
                )}
              </AnimatePresence>
            </motion.div> 
          </motion.div>
        </div>
    </>
  );
}

// Loading fallback component
function HomeLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-lg">Loading...</div>
    </div>
  );
}

// Main export component with Suspense boundary
export default function Home() {
  return (
    <Suspense fallback={<HomeLoading />}>
      <HomeContent />
    </Suspense>
  );
}
