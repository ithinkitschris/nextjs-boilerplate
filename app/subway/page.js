'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import NycSubway from '../components/pages/nycsubway.js';
import DesktopNavbar from '../components/ui/DesktopNavbar';
import { useMobileDetection } from '../hooks/useMobileDetection';
import { useVideoNavigationSimple } from '../hooks/useVideoNavigationSimple';
import { skillsetData } from '../data/videoData';
import { useBrowser } from '../context/BrowserContext';
import { useHideNav } from '../context/HideNavContext';

export default function SubwayPage() {
  const router = useRouter();
  const { browserType } = useBrowser();
  const { hideNav, randomRotation, toggleHideNav, setIsWhiteBG, isWhiteBG, setIsArchiveInView, setArchiveSelectedTags, setHideNav } = useHideNav();
  const isMobile = useMobileDetection();
  const { selectedTags, setSelectedTags, selectedWork, setSelectedWork, toggleTag, toggleWork } = useVideoNavigationSimple();
  
  const [showNav, setShowNav] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const scrollThreshold = 10; // Minimum scroll distance to trigger hide/show
  const scrollUpThreshold = 150; // Scroll up distance needed to show navbar
  const hideNavScrollY = useRef(0); // Track scroll position when navbar was hidden

  // Mobile-only scroll detection to hide/show navbar
  useEffect(() => {
    if (!isMobile) {
      // On desktop, ensure navbar is visible
      setHideNav(false);
      return;
    }

    // Initialize scroll position
    lastScrollY.current = window.scrollY;
    // Ensure navbar starts visible on mobile
    setHideNav(false);
    hideNavScrollY.current = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY.current);

      // Only update if scroll difference is significant
      if (scrollDifference < scrollThreshold) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        // Scrolling down - hide navbar
        setHideNav(true);
        hideNavScrollY.current = currentScrollY; // Track where navbar was hidden
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up - show navbar only after scrolling up 150px from hide position
        const scrollUpDistance = hideNavScrollY.current - currentScrollY;
        if (scrollUpDistance >= scrollUpThreshold || hideNavScrollY.current === 0) {
          setHideNav(false);
          hideNavScrollY.current = 0; // Reset hide position
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, setHideNav]);

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
            y: isMobile ? (hideNav ? -100 : 0) : 0,
            rotateZ: isMobile ? 0 : (hideNav ? randomRotation : 0)
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
            scrollToArchive={() => {}}
            homeOnly={true}
            onHomeClick={() => router.push('/')}
          />
        </motion.div>

        {/* Page Container */}
        <div className="col-span-full -mt-12">
          <NycSubway className="col-span-full -px-[6%]" />
        </div>
      </div>
    </>
  );
}

