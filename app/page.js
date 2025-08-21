'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import PhotographyPage from './components/pages/photography.js';
import ContentPage from './components/pages/content.js';
import Website from './components/pages/websitev2.js';
import Ghibli from './components/pages/ghibli.js';
import CabinCrewStories from './components/pages/cabin.js';
import Cocktail from './components/pages/cocktail.js';
import Kris from './components/pages/kris.js';
import TravelBig from './components/pages/travelbig.js';
import Lounge from './components/pages/lounge.js';
import Hemsaker from './components/pages/hemsaker.js';
import ISpy from './components/pages/ispy.js';
import Jolli from './components/pages/jolli.js';
import Uniqlo1 from './components/pages/uniqlo1.js';
import Uniqlo2 from './components/pages/uniqlo2.js';
import Oneshow from './components/pages/oneshow.js';
import BestWorkPage from './components/pages/bestworkv3.js';
import Resume from './components/pages/resume.js';
import StreetPhotography from './components/pages/street-photo.js';
import Film from './components/pages/film.js';
import BBH from './components/pages/bbh.js';
import StressedLa from './components/pages/stressed.js';
import ShotOnIphone from './components/pages/shotoniphone.js';
import BTS from './components/pages/bts.js';
import Samsung from './components/pages/samsung.js';
import Nike from './components/pages/nike.js';
import Iphone from './components/pages/iphone.js';
import ThreeD from './components/pages/3d.js';
import Leica from './components/pages/leica.js';
import NycSubway from './components/pages/nycsubway.js';
import Car from './components/pages/car.js';
import { useBrowser } from './context/BrowserContext';
import { useHideNav } from './context/HideNavContext';

// Import new components and hooks
import VideoSquare from './components/ui/VideoSquare';
import DesktopNavbar from './components/ui/DesktopNavbar';
import MobileNavbar from './components/ui/MobileNavbar';
import { useMobileDetection } from './hooks/useMobileDetection';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useVideoNavigation } from './hooks/useVideoNavigation';
import { skillsetData, workTags } from './data/videoData';

// Main content component that uses useSearchParams
function HomeContent() {
  const { browserType } = useBrowser();
  const { hideNav, randomRotation, toggleHideNav, setIsWhiteBG, isWhiteBG } = useHideNav();

  // Use custom hooks
  const isMobile = useMobileDetection();
  const { selectedTags, setSelectedTags, selectedWork, setSelectedWork, toggleTag, toggleWork, filteredVideos } = useVideoNavigation();
  useKeyboardShortcuts({ toggleHideNav, hideNav });

  const [showNav, setShowNav] = useState(false);
  const [showWork, setShowWork] = useState(false);

  // Reset section 13-15 active state when navigating away from subway page
  useEffect(() => {
    if (selectedWork !== 'subway') {
      setIsWhiteBG(false);
    }
  }, [selectedWork, setIsWhiteBG]);

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
              y: hideNav ? -240 : 0,
              rotateZ: hideNav ? randomRotation : 0
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
          />

          {/* Page Container (Adjust px here) */}
          <motion.div
            className="col-span-full px-4 md:px-[7%]"  //shadow-mild rounded-2xl -mr-2 mt-4 pt-2 pb-6 px-6 dark:shadow-none  
            layout="position"
            layoutId='test'
            transition={{ type: "spring", stiffness: 600, damping: 25 }}  
          > 
            {/* Grid / Page */}
            <motion.div 
            className={`grid col-span-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1.5 md:gap-2.5 mt-8 md:mt-24`}>

              <AnimatePresence>
                {selectedWork === 'photography' ? (
                  <PhotographyPage key="photography" className="col-span-full -mt-22" toggleWork={toggleWork}/>
                ) : selectedWork === 'content' ? (
                  <ContentPage key="content" className="col-span-full"/>
                ) : selectedWork === 'website' ? (
                  <Website key="website" className="col-span-full" showNav={showNav}/>
                ) : selectedWork === 'street' ? (
                  <StreetPhotography key="street" className="col-span-full"/>
                ) : selectedWork === 'film' ? (
                  <Film key="film" className="col-span-full"/>
                ) : selectedWork === 'bbh' ? (
                  <BBH key="bbh" className="col-span-full"/>
                ) : selectedWork === 'stressed' ? (
                  <StressedLa key="stressed" className="col-span-full"/>
                ) : selectedWork === 'shotoniphone' ? (
                  <ShotOnIphone key="shotoniphone" className="col-span-full"/>
                ) : selectedWork === 'bts' ? (
                  <BTS key="bts" className="col-span-full"/>
                ) : selectedWork === 'bestwork' ? (
                  <BestWorkPage key="bestwork" className="col-span-full w-full" setSelectedWork={setSelectedWork}/>
                ) : selectedWork === 'resume' && selectedTags.length === 0 ? (
                  <Resume key="resume" className="col-span-full" showNav={showNav} toggleWork={toggleWork}/>
                ) : selectedWork === 'samsung' ? (
                  <Samsung key="samsung" className="col-span-full"/>
                ) : selectedWork === 'ghibli' ? (
                  <Ghibli key="ghibli" className="col-span-full"/>
                ) : selectedWork === 'cabin' ? (
                  <CabinCrewStories key="cabin" className="col-span-full md:px-2" isMobile={isMobile}/>
                ) : selectedWork === 'hemsaker' ? (
                  <Hemsaker key="hemsaker" className="col-span-full"/>
                ) : selectedWork === 'cocktail' ? (
                  <Cocktail key="cocktail" className="col-span-full"/>
                ) : selectedWork === 'kris' ? (
                  <Kris key="kris" className="col-span-full"/>
                ) : selectedWork === 'jolli' ? (
                  <Jolli key="jolli" className="col-span-full"/>
                ) : selectedWork === 'uniqlo1' ? (
                  <Uniqlo1 key="uniqlo1" className="col-span-full"/>
                ) : selectedWork === 'uniqlo2' ? (
                  <Uniqlo2 key="uniqlo2" className="col-span-full"/>
                ) : selectedWork === 'travelbig' ? (
                  <TravelBig key="travelbig" className="col-span-full"/>
                ) : selectedWork === 'ispy' ? (
                  <ISpy key="ispy" className="col-span-full"/>
                ) : selectedWork === 'lounge' ? (
                  <Lounge key="lounge" className="col-span-full"/>
                ) : selectedWork === 'oneshow' ? (
                  <Oneshow key="oneshow" className="col-span-full"/>
                ) : selectedWork === '3d' ? (
                  <ThreeD key="3d" className="col-span-full"/>
                ) : selectedWork === 'iphone' ? (
                  <Iphone key="iphone" className="col-span-full"/>
                ) : selectedWork === 'nike' ? (
                  <Nike key="nike" className="col-span-full"/>
                ) : selectedWork === 'leica' ? (
                  <Leica key="leica" className="col-span-full"/>
                ) : selectedWork === 'subway' ? (
                  <NycSubway key="subway" className="col-span-full -px-[7%]"/>
                ) : selectedWork === 'car' ? (
                  <Car key="car" className="col-span-full" showNav={showNav}/>
                ) : (
                  filteredVideos.map((video) => (
                    <VideoSquare
                      key={video.src}
                      videoSrc={video.src}
                      title={video.title}
                      subheader={video.subheader}
                      poster={video.poster}
                      link={video.link}
                      tags={video.tags}
                      loading="lazy"
                      selectedTags={selectedTags}
                      onClick={() => { 
                        const matchedWork = workTags.find((tag) => video.tags.includes(tag));
                        if (matchedWork) {
                          toggleWork(matchedWork);
                        }
                      }}
                    />
                  ))
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

