'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import Cocktail from '../components/pages/cocktail.js';
import DesktopNavbar from '../components/ui/DesktopNavbar';
import MobileNavbar from '../components/ui/MobileNavbar';
import { useMobileDetection } from '../hooks/useMobileDetection';
import { useVideoNavigation } from '../hooks/useVideoNavigation';
import { skillsetData } from '../data/videoData';
import { useBrowser } from '../context/BrowserContext';
import { useHideNav } from '../context/HideNavContext';

export default function CocktailPage() {
  const router = useRouter();
  const { browserType } = useBrowser();
  const { hideNav, randomRotation, toggleHideNav, setIsWhiteBG, isWhiteBG, setIsArchiveInView, setArchiveSelectedTags } = useHideNav();
  const isMobile = useMobileDetection();
  const { selectedTags, setSelectedTags, selectedWork, setSelectedWork, toggleTag, toggleWork } = useVideoNavigation();
  
  const [showNav, setShowNav] = useState(false);
  const [showWork, setShowWork] = useState(false);

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
            scrollToArchive={() => {}}
            homeOnly={true}
            onHomeClick={() => router.push('/')}
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
          scrollToArchive={() => {}}
          homeOnly={true}
          onHomeClick={() => router.push('/')}
        />

        {/* Page Container */}
        <div className="col-span-full px-[6%]">
          <Cocktail className="col-span-full" />
        </div>
      </div>
    </>
  );
}

