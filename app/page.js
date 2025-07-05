'use client';

import React, { useState, useEffect, } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import PhotographyPage from './components/photography.js';
import ContentPage from './components/content.js';
import Website from './components/websitev2.js';
import Ghibli from './components/ghibli.js';
import CabinCrewStories from './components/cabin.js';
import Cocktail from './components/cocktail.js';
import Kris from './components/kris.js';
import TravelBig from './components/travelbig.js';
import Lounge from './components/lounge.js';
import Hemsaker from './components/hemsaker.js';
import ISpy from './components/ispy.js';
import Jolli from './components/jolli.js';
import Uniqlo1 from './components/uniqlo1.js';
import Uniqlo2 from './components/uniqlo2.js';
import Oneshow from './components/oneshow.js';
import BestWorkPage from './components/bestworkv3.js';
import Resume from './components/resume.js';
import StreetPhotography from './components/street-photo.js';
import Film from './components/film.js';
import BBH from './components/bbh.js';
import StressedLa from './components/stressed.js';
import Unshackle from './components/unshackle.js';
import BTS from './components/bts.js';
import Samsung from './components/samsung.js';
import Nike from './components/nike.js';
import Iphone from './components/iphone.js';
import ThreeD from './components/3d.js';
import Leica from './components/leica.js';
import NycSubway from './components/nycsubway.js';
import Car from './components/car.js';
import {useVideoContext, VideoProvider} from './components/expandedGridContext.js';
import Video from './components/Video';
import { useBrowser } from './context/BrowserContext';



  // Motion
  const scaleIn ={
    hidden: {opacity:0, scale:0.9},
    show: {
        opacity:1, scale:1, 
        transition: {
          staggerChildren: 0.1, 
          type: "spring",
          stiffness: 600,
          damping: 20, 
        },
    },
    fade: {
      opacity:0,
      transition: {duration: 0.1, ease: "easeOut"},
    },
  };
  const animateIn ={
    hidden: {opacity:0, x:-10},
    show: {
        opacity:1, x:0, 
        transition: {duration:0.1, ease:"easeOut"},
    },
    fade: {
      opacity:0,
      transition: {duration: 0.1, ease: "easeOut"},
    },
  };
  const animateInChild ={
    hidden: {opacity:0, x:-100},
    show: {
      opacity:1, x:0,
      transition: {
        type: "spring",
        stiffness: 400, // Adjust for faster or slower animation
        damping: 22, // Adjust for bounciness and smoothness
      }
    },
    fade: {
      opacity:0,
      transition: {duration: 0.5, ease: "easeOut"},
    },
  };
  const animateInChildMobile ={
    hidden: {opacity:0, y:-20},
    show: {
      opacity:1, y:0,
      transition: {duration:0.2, ease:"easeOut"},
      },
    fade: {
      opacity:0,
      transition: {duration: 0.5, ease: "easeOut"},
    },
  };
  const skillContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
    exit: { opacity: 0 },
  };
  const worksContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0,
      },
    },
    exit: { opacity: 0 },
  };

  const isMobileDevice = () => {
    return typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches;
  };



  const VideoSquare = ({ videoSrc, tags, setHoveredWork, onClick, title, subheader, selectedTags, poster }) => {

    const { expandedVideo, setExpandedVideo } = useVideoContext();
    
    const isExpanded = expandedVideo === videoSrc; // Check if this square is expanded
    
    const toggleExpand = () => {
      setExpandedVideo((prev) => (prev === videoSrc ? null : videoSrc)); // Toggle expansion only for this video
    };

    return (
      <motion.div
      lang='en'
      className="cursor-pointer group"
      initial="hidden"
      animate="show"
      // exit="fade"
      layout
      variants={scaleIn}
      onMouseEnter={() => {setHoveredWork(tags[0]); console.log(tags)}}
      onMouseLeave={() => setHoveredWork(null)}
      onClick={() => {

        // Checks if Mobile, Else default to Desktop Behaviour
        if (isMobileDevice()) {

          // Checks if Mobile Homepage, Else it means it is a Skillset Page
          if (selectedTags.includes('all')) {

            // Checks if Mobile Homepage tile is expanded
            if (isExpanded) {

              // If isExpanded is True, Click through to the page
              onClick();
            } else {

              // If isExpanded is False, Click to expand the tile
              toggleExpand();
            }
          } else {
            onClick();
          }
        } else {
          onClick();
        }
      }}>
        
        {/* Square */}
        <motion.div className={`group relative overflow-hidden rounded-2xl
        shadow-[3px_3px_15px_rgba(0,0,0,0.2)] group-hover:shadow-none border-b-0 border-white/20
        after:absolute after:inset-0 after:z-20 after:pointer-events-none after:rounded-2xl after:shadow-[inset_0px_0px_5px_0px_rgba(255,255,255,0.15)]

          ${selectedTags.includes('photography') 
          ? 'md:pt-[150%]' 
          : 'pt-[150%] lg:pt-[57.5%]'}

          ${selectedTags.includes('all') 
          ? `${isExpanded ? 'pt-[155%]' : 'pt-[14%] md:hover:pt-[100%] saturate-200 md:saturate-100 hover:saturate-100 bg-black/25'}`
          : 'pt-[150%]'}
          
          `}
          whileHover={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 1000, 
            damping: 25, 
          }}
          >

          {/* Corner Arrow */}
          <button className="hidden lg:block absolute top-2 right-2 z-20 p-0 m-1 scale-100 
          rounded-full border-1.5 text-white group-hover:text-black border-transparent group-hover:glass group-hover:bg-white/95
          group-hover:border-white group-hover:scale-125 group-hover:m-2 group-hover:p-0.5 group-hover:px-1
          transition-all duration-200">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="2 2 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4">
              <path d="M7 17L17 7"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <path d="M7 7h10v10" />
              </svg>
          </button>

          {/* Mobile Text Container */}
          <div className="lg:hidden absolute inset-0 flex flex-col items-start justify-end pb-2.5 p-3 pl-3.5 w-full mb-1">

            {/* Title */}
            <h1 
              className={`tracking-tight font-medium z-30 w-[80%] text-xl md:text-2xl leading-5 md:leading-6 mb-1.5`}>
                {title}
            </h1>

            <h3 
              className={`tracking-tight z-30 w-[95%] text-[6pt] leading-tight opacity-60 mix-blend-screen`}>
                {subheader}
            </h3>
          </div>
          
          {/* Mobile Gradient Blur */}
          <div 
            className="lg:hidden absolute bottom-0 left-0 right-0 h-[60%] z-10 pointer-events-none backdrop-blur-[100px] saturate-150 brightness-110 -mb-[0.5px]"
            style={{
              maskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 80%, transparent 100%)'
            }}
          />

          {/* Video */}
          <Video
            videoId={`grid-${videoSrc}`}
            src={videoSrc}
            className={`absolute inset-0 w-full h-full object-cover rounded-2xl 
              after:absolute after:inset-0 after:z-20 after:pointer-events-none after:rounded-2xl after:shadow-[inset_0px_0px_3px_0px_rgba(255,255,255,0.2)]
            ${selectedTags.includes('all') 
              ? `${isExpanded ? 'opacity-100' : 'opacity-100 blur-[30px] md:blur-0'}`
              : 'blur-[0px] opacity-100'}`}
            style={{ clipPath: 'inset(0 round 0.5rem)' }}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            loading="lazy"
            
          />
          
        </motion.div>

        {/* Desktop Text Container */}
        <div className='hidden lg:block ml-1 mt-4 text-foreground group'>
            <h1 className={`tracking-tight font-medium text-xl group-hover:ml-3 transition-all duration-200`}>
              {title}
            </h1>

            <h3 className={`mb-12 opacity-35 text-xs group-hover:opacity-100 group-hover:ml-3 transition-all duration-300`}>
              {subheader}
            </h3>
          </div>

      </motion.div>
    );
  };

export default function Home(){

  const { browserType } = useBrowser();

  const videoData = [
    
    { src: '/Ghibli/banner1.mp4', title:'The World of Studio Ghibli', subheader:'Marketing Campaign for ArtScience Museum', poster:'/poster/ghibli.jpeg', tags: ['ghibli', 'all', 'creative', 'asm', 'graphic', 'best'] },
    { src: '/CCS/bestworkmontage.mp4', title:'Beyond the Cabin', subheader:'Brand Campaign for Singapore Airlines', poster:'/poster/cabin.jpeg', tags: ['cabin', 'all', 'creative', 'sia', 'motion','graphic', 'best'] },
    { src: '/Cocktail/cover2.mp4', title:'Cocktail Conversations', subheader:'Brand Campaign for Singapore Airlines', poster:'/poster/cocktail.jpeg', tags: ['cocktail', 'all', 'creative', 'sia', 'motion','graphic', 'best'] },
    { src: '/Kris/cover2.mp4', title:'Kris+ Brand Campaign', subheader:'Brand Campaign for Singapore Airlines', poster:'/poster/kris.jpeg', tags: ['kris', 'all', 'creative', 'sia'] },
    { src: '/travelbig/cover_1.mp4', title:'Travel Like Never Before', subheader:'Brand Campaign for Singapore Airlines', poster:'/poster/travelbig.jpg', tags: ['travelbig', 'all', 'creative', 'sia'] },
    { src: '/lounge/montage.mp4', title:'SilverKris Lounge', subheader:'Brand Campaign for Singapore Airlines', poster:'/poster/lounge.jpeg', tags: ['lounge', 'all', 'creative', 'sia', 'edit', 'motion', 'graphic'] },
    { src: '/Hemsaker/cover.mp4', title:'Oops Happens', subheader:'Product Campaign for IKEA', poster:'/poster/hemsaker.jpeg', tags: ['hemsaker', 'all', 'creative', 'Ikea'] },
    { src: '/ispy/cover.mp4', title:'I Spy in The Sky...', subheader:'Social Content for Singapore Airlines', poster:'/poster/ispy.jpeg', tags: [] },
    { src: '/jollieverafter/cover_1.mp4', title:'JolliEverAfter', subheader:'Social Media Campaign for Jollibee', poster:'/poster/jollieverafter.jpeg', tags: ['jolli', 'all', 'motion', 'edit', 'best'] },
    { src: '/samsung/cover.mp4', title:'Samsung Lifestyle Displays', subheader:'Content Creation for Samsung', poster:'/poster/samsung.jpeg', tags: ['samsung', 'all', 'motion', 'edit'] },
    { src: '/nike/cover.mp4', title:'Nike Athlete Stories: Koy & Toon', subheader:'Social Media Campaign for Nike', poster:'/poster/samsung.jpeg', tags: ['nike', 'all', 'motion', 'edit'] },
    { src: '/3dpersonal/Cover.mp4', title:'3D Motion Explorations', subheader:'Personal Explorations', poster:'/poster/3d.jpeg', tags: ['3d', 'all', 'motion'] },
    { src: '/uniqlo2/Cover.mp4', title:'New Style Fresh Start', subheader:'Motion Design for Uniqlo', poster:'/poster/uniqlo2.jpeg', tags: ['uniqlo2', 'all', 'motion'] },
    { src: '/uniqlo1/cover.mp4', title:'Your Stage Now Live', subheader:'Motion Design for Uniqlo', poster:'/poster/uniqlo2.jpeg', tags: ['uniqlo1', 'all', 'motion'] },
    { src: '/Photography/street/Cover2_2.mp4', title:'Digital', subheader:'Personal Photography', poster:'/poster/street.jpeg', tags: ['street', 'all', 'photography'] },
    { src: '/Photography/film/cover4.mp4', title:'Film', subheader:'Personal Photography', poster:'/poster/street.jpeg', tags: ['film', 'all', 'photography'] },
    { src: '/Photography/bbh/cover.mp4', title:'BBH Profile Headshots', subheader:'Portrait series', poster:'', tags: ['bbh', 'all', 'photography'] },
    { src: '/oneshow/cover.mp4', title:'TBWA One Show Shortlists', subheader:'Social media post', poster:'/poster/oneshow.jpeg', tags: ['oneshow', 'all', 'motion'] },
    { src: '/iphone/intro.mp4', title:'iPhone 15 Pro', subheader:'Personal explorations', poster:'/poster/iphone15.jpeg', tags: ['iphone', 'all', 'motion'] },
    { src: '/leica/leica.mp4', title:'Leica M-10P', subheader:'3D Motion Design', poster:'/poster/leica.jpeg', tags: ['leica', 'all', 'motion'] },
    { src: '/Photography/unshackle/Cover.mp4', title:'Unshackle:', subheader:'Behind The Scenes', poster:'', tags: ['unshackle', 'all', 'photography'] },
    { src: '/subway/cover.mp4', title:'Enhanced Subway Navigation with Apple Maps', subheader:'An exercise in UX, UI design and potential thesis topic.', poster:'/poster/subway.png', tags: ['subway', 'all', 'product'] },
    // { src: '/wellnessco/cover.mp4', title:'Time Management by College Students', subheader:'Ethnographic User Research', poster:'', tags: ['wellnessco', 'all', 'product'] },
    { src: '/website/cover.mp4', title:'This website, literally.', subheader:'UI Design + Web Development', poster:'/poster/website.png', tags: ['website', 'all', 'product'] },
    { src: '/currently/car.mp4', title:'Human (Car)mputer Interaction', subheader:'A deep dive into the Human Computer Interaction of the automobile.', poster:'/poster/car.png', tags: ['car', 'all', 'product'] },
     
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedWork, setSelectedWork] = useState('');
  const [showNav, setShowNav] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [hoveredWork, setHoveredWork] = useState(null);
  const [setShowWork] = useState(false);

  // Check if Mobile
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(max-width: 640px)");

      setIsMobile(mediaQuery.matches);

      const handleResize = () => setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleResize);

      return () => mediaQuery.removeEventListener("change", handleResize);
    }
  }, []);

  useEffect(() => {
    if (isMobile) {
      setSelectedTags('');
      setSelectedWork('resume');
    } else {
      setSelectedTags('');
      setSelectedWork('resume');
    }
  }, [isMobile]);

  const includesTags = (tags) => {
    return tags.some((tag) => selectedTags.includes(tag));
  };

  const includesWorks = (works) => {
    return works.some((work) => selectedWork.includes(work));
  };

  // const toggleShowWork = () => {
  //   setShowWork((prevState) => !prevState);
  // }

  const toggleTag = (tag) => {
    if (tag === 'clear') {
      setSelectedTags([]); 
    } else {
      setSelectedTags([tag]); 
    }
  };

  const toggleWork = (work) => {
    if (work === 'clear') {
      setSelectedWork([]);
      //setSelectedWork(['all']);
    } else {
      toggleTag('clear');
      setSelectedWork(work);
    }

    window.scrollTo ({
      top:0,
      behavior:'smooth',
    });
  };

  const toggleNav = () => {
    if (showNav) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  // Reset Button Logic
  useEffect(() => {
    if (selectedWork.includes('bestwork') || selectedWork.includes('resume')) {
      setShowReset(false); 
    } else if (selectedWork.length > 0) {
      setShowReset(true); // Always show Reset button if there is any selected work
    } else if (selectedTags.includes('all') || selectedTags.length === 0) {
      setShowReset(false); // Hide Reset button if 'all' is selected or if there are no tags
    } else {
      setShowReset(true); // Show Reset button for other cases
    }
    
  }, [selectedTags, selectedWork]);

  const filteredVideos = videoData.filter((video) => {
    if (selectedTags.includes('all')) return true;

    // Safeguard for when selectedTags is not an array
    if (!Array.isArray(selectedTags)) return false;

    return selectedTags.some((tag) => video.tags.includes(tag));
  });

  return (
    <>
      <VideoProvider>

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
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 mt-12 mix-b
        text-sm font-[family-name:var(--font-geist-sans)] max-w-9xl w-screen mx-auto">            

          {/* Top Navbar */}
          <div className="col-span-full fixed top-[0.4rem] md:top-10 z-[45] mb-4 text-sm lg:text-[15px] w-screen max-w-9xl pr-6">
            
              {/* Desktop Sidenav / Dropdown Button */}
              <motion.button 
                className={`
                  fixed md:absolute p-2 rounded-full 
                  w-11 h-11 md:w-12 md:h-12 pl-1.5  
                  backdrop-brightness-125 md:backdrop-brightness-100
                  md:top-1 md:left-7 top-3 right-6 md:right-auto
                  flex items-center justify-center z-50

                  backdrop-blur-2xl saturate-150 md:saturate-100
                  shadow-glass-border-xs md:shadow-glass-border-sm
                  border-1 border-white/25
                  md:border-none
                  
                  text-foreground md:hover:text-background
                  transition-colors duration-200           

                  ${showNav 
                    ? "text-white dark:text-black bg-foreground dark:bg-white/90 md:hover:bg-foreground md:-ml-1" 
                    : "bg-background dark:bg-white/0 md:bg-white border-white md:hover:bg-foreground"
                  }
                `}
                
                // Animation properties
                whileHover={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 700, 
                  damping: 15, 
                }} 
                variants={animateInChild}
                onClick={toggleNav}
              >
                {/* Hamburger/Close Icon */}
                <svg 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  strokeLinecap="round" 
                  className="w-7 h-7"
                >
                  {/* Animated lines */}
                  <path 
                    d={`${showNav ? 'M2 10h16' : 'M4 10h13'}`}
                    className='transition-all duration-200'
                  />
                  <path 
                    d={`${showNav ? 'M2 15h16' : 'M4 15h13'}`}
                    className='transition-all duration-300'
                  />
                  <path 
                    d={`${showNav ? 'M2 5h16' : 'M4 5h13'}`}
                    className='transition-all duration-100'
                  />
                </svg>
              </motion.button>

              {/* Top Navbar Container */}
              <motion.div
                className="hidden md:flex items-center justify-center non-chromium-ml w-full z-50"
                initial="hidden"
                animate="show"
                variants={animateIn}
              >
                {/* Navbar Background */}
                <motion.div
                  className={`rounded-full flex items-center justify-center ml-2.5
                  w-[162px] h-[50px] dark:bg-transparent brightness-[100%]
                  saturate-100 border-r-1 border-b-1 border-white/35
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
                  whileHover={{ scaleY: 0.94, scaleX: 1.02}}
                  transition={{
                    type: "spring",
                    stiffness: 1000, 
                    damping: 6, 
                    }} 
                >
                  {/* Debug indicator */}
                  {/* <span className="text-xs text-white/50 pointer-events-none">
                    {browserType}
                  </span> */}
                </motion.div>
              </motion.div>

          </div>  

          {/* Home Button */}
          <motion.button
            className={`
              fixed top-[1.2rem] left-[50%] -ml-[4.3rem] md:-ml-[4.7rem] md:top-[3.2rem] z-50
              rounded-full px-3 py-[3px] border-1.5 
              font-semibold tracking-[-0.2pt] whitespace-nowrap
              text-white mix-blend-difference dark:mix-blend-normal
              transition-colors duration-200
              hover:text-background hover:bg-foreground hover:text-white hover:mix-blend-normal
              dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
              
              ${selectedWork.includes('resume') 
                ? '' 
                : 'border-transparent'
              }
            `}
            onClick={() => {
              toggleWork('resume');
              setShowWork(false);
              setSelectedTags([]);
              setShowNav(false);
            }}
            whileHover={{ scale: 0.96 }}
            transition={{
              type: "spring",
              stiffness: 600,
              damping: 10
            }}
          >
            Home
          </motion.button>

          {/* Work Button */}
          <motion.button 
            className={`
              fixed top-[1.2rem] left-[50%] ml-1.5 md:ml-0 md:top-[3.2rem] z-50
              rounded-full px-3 py-[3px] border-1.5
              font-semibold tracking-[-0.2pt] whitespace-nowrap
              text-white mix-blend-difference dark:mix-blend-normal
              transition-colors duration-200
              hover:text-background hover:bg-foreground hover:text-white hover:mix-blend-normal
              dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
              ${selectedTags.length > 0 || (selectedWork.length > 0 && !selectedWork.includes('resume'))
                ? '' 
                : 'border-transparent'
              }
              `}
              onClick={() => {
                toggleNav(true);
              }}
              whileHover={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 10
              }}
            >
              Work
          </motion.button>

          {/* Mobile Navbar BG */}
          <motion.div
            className={`
              md:hidden fixed top-3 md:top-6 w-full z-40
              border-white/40 transition-colors bg-background dark:bg-black/0
              backdrop-blur-xl
              glass border-b-1 border-r-0
              ${showNav ? "" : ""}
            `}
            style={{
              left: "50%",
              transform: "translateX(-50%)",
            }}
            animate={{ 
              width: showNav ? "16.5rem" : "9.6rem",
              height: showNav ? "23.5rem" : "2.7rem",
              borderRadius: showNav ? "1.5rem" : "50rem"
            }}
            transition={{
              width: { 
                type: "spring", 
                stiffness: showNav ? 500 : 500, 
                damping: showNav ? 28 : 26 
              },
              height: { 
                type: "spring", 
                stiffness: showNav ? 500 : 500, 
                damping: showNav ? 26 : 36 
              },
              borderRadius: { 
                duration: showNav ? 0.01 : 10 
              }
            }}
          />

          {/* Side Navbar / Mobile Dropdown */}
          <motion.div
            className={`${showNav ? "col-span-1 flex flex-col tracking-tight ml-5 md:-mr-6 md:sticky md:top-12 md:h-screen md:overflow-y-auto md:pl-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" : "opacity-0 pointer-events-none"}
            relative transition-opacity duration-300`} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            variants={animateInChildMobile}>

            {showNav && (
              <>
                {/* Desktop Side Navbar Reset Button */}
                <motion.div 
                  className="sticky top-20 z-40 hidden md:block">

                  {showReset && (

                    <motion.button
                      className="hover:text-background backdrop-blur flex items-start justify-start gap-2 px-3 py-2 pl-4 -ml-2 transition-colors
                      text-foreground hover:bg-foreground dark:hover:bg-foreground glass bg-background dark:bg-transparent text-[16.5px] 
                      rounded-full border-transparent dark:border-white/35"
                      initial={{ opacity: 0, y:-20 }} 
                      animate={{ opacity: 1, y:0 }}  
                      whileHover={{ scale: 0.92 }}
                      transition={{
                        type: "spring",
                        stiffness: 700, 
                        damping: 15, 
                        }} 
                      onClick={() => {
                        toggleWork('resume');
                        setShowWork(false);
                        setSelectedTags([]);
                        setShowNav(false);
                        if (isMobile) {
                          setShowNav(false);
                        }
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth' // Enables smooth scrolling to the top
                        });
                      }}
                    >
                      Home
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 10 100 100"
                        className="mt-[6%] w-3.5 h-3.5 group-hover:text-background -rotate-12 group-hover:-rotate-[360deg] transition-all duration-500"
                      >
                        <path
                          d="M50,96.7c-20.3,0-38-14.4-42.1-34.3-.4-2.2,1-4.3,3.1-4.7,2.2-.4,4.3,1,4.7,3.1,3.3,16.2,17.7,27.9,34.2,27.9s35-15.7,35-35-15.7-35-35-35-14.9,2.4-21,7c-1.8,1.3-4.3,1-5.6-.8-1.3-1.8-1-4.3.8-5.6,7.5-5.6,16.4-8.6,25.8-8.6,23.7,0,43,19.3,43,43s-19.3,43-43,43Z"
                          fill="currentColor"
                        />
                        <path
                          d="M42.6,44.4H11c-1.1,0-2.1-.4-2.8-1.2-.8-.8-1.2-1.8-1.2-2.9l.4-32.8c0-2.2,1.8-4,4-4s0,0,0,0c2.2,0,4,1.8,4,4l-.3,28.7h27.5c2.2,0,4,1.8,4,4s-1.8,4-4,4Z"
                          fill="currentColor"
                        />
                      </svg> 
                    </motion.button>
                  )}
                </motion.div>

                {/* Desktop Side Navbar Skillsets */}
                <motion.div 
                className={`hidden md:flex flex-col items-start gap-1 ${showReset ? "mt-32" : "mt-24"} dark:text-white/20 sticky`}
                initial="hidden"
                animate="show"
                exit="fade"
                layout="position"
                  transition={{
                  type: "spring",
                  stiffness: 500, // Adjust for faster or slower animation
                  damping: 14, // Adjust for bounciness and smoothness
                  }}
                variants={skillContainer}>

                  <motion.h1
                  className="text-xl font-medium tracking-tighter mb-4 text-foreground hidden sm:block"
                  variants={animateInChild}
                  layout="position">
                    Skillsets
                  </motion.h1>

                  {/* Creative Direction */}
                  <motion.button 
                  className={`hover:text-foreground text-left md:mr-8
                    ${selectedTags.includes('creative') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0 text-foreground'
                      : 'text-neutral-350 dark:text-white/50 dark:hover:text-foreground'}`}
                  whileHover={{scale:0.95}}
                  animate={{scale: selectedTags.includes('creative') ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('creative');
                    toggleWork('clear');}}>Creative Direction</motion.button>

                  {/* Product Design */}
                  <motion.button 
                  className={`hover:text-foreground text-left md:mr-8
                    ${selectedTags.includes('product') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0 text-foreground'
                      : 'text-neutral-350 dark:text-white/50 dark:hover:text-foreground'}`}
                  whileHover={{scale:0.95}}
                  animate={{scale: selectedTags.includes('product') ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('product');
                    toggleWork('clear');}}>Product Design</motion.button>

                  {/* Motion Design */}
                  <motion.button 
                  className={`hover:text-foreground text-left md:mr-8
                    ${selectedTags.includes('motion') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0 text-foreground' 
                      : 'text-neutral-350 dark:text-white/50 dark:hover:text-foreground'}`}
                  whileHover={{scale:0.95}}
                  animate={{scale: selectedTags.includes('motion') ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('motion');
                    toggleWork('clear');}}>Motion Design</motion.button>

                  {/* Video Editing */}
                  <motion.button 
                  className={`hover:text-foreground text-left md:mr-8
                    ${selectedTags.includes('edit') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0 text-foreground' 
                      : 'text-neutral-350 dark:text-white/50 dark:hover:text-foreground'}`}
                  whileHover={{scale:0.95}}
                  animate={{scale: selectedTags.includes('edit') ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"  
                  onClick={() => {
                    toggleTag('edit');
                    toggleWork('clear');}}>Video Editing</motion.button>

                  {/* Photography */}
                  <motion.button 
                  className={`hover:text-foreground text-left md:mr-8
                    ${selectedTags.includes('photography') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0 text-foreground' 
                      : 'text-neutral-350 dark:text-white/50 dark:hover:text-foreground'}`}
                  whileHover={{scale:0.95}}
                  animate={{scale: includesWorks(['photography', 'street', 'bbh', 'bts', 'unshackle']) ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"      
                  onClick={() => {
                    toggleTag('photography');
                    toggleWork('clear');}}>Photography</motion.button>

                  {/* Content Creation */}
                  <motion.button 
                  className={`hover:text-foreground text-left md:mr-8
                    ${selectedWork.includes('content') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0 text-foreground' 
                      : 'text-neutral-350 dark:text-white/50 dark:hover:text-foreground'}`}
                  whileHover={{scale:0.95}}
                  animate={{scale: selectedWork.includes('content') ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('clear');
                    setSelectedTags([]);
                    toggleWork('content');}}>Content Creation</motion.button>
                </motion.div>

                {/* Desktop Side Navbar All Work */}
                <motion.div
                className={`hidden md:flex flex-col items-start gap-1 mt-12 sticky z-10 ${showReset ? "top-48" : "top-36"}`}
                initial="hidden"
                animate="show"
                exit="exit"
                layout="position"
                transition={{
                  type: "spring",
                  stiffness: 500, 
                  damping: 10,
                }}
                variants={worksContainer}
                >
                  
                  <motion.h1
                  className="text-xl font-medium tracking-tight mb-4 text-foreground"
                  variants={animateInChild}>
                    Work
                  </motion.h1>

                  {/* 2025 */}
                  <motion.h1
                  className={`text-xs font-medium tracking-tighter dark:text-white ${selectedWork.includes('') ? 'text-foreground font-medium' : 'text-neutral-350 dark:text-white/40'}`}
                  variants={animateInChild}>
                    2025
                  </motion.h1>
                
                    {/* Enhanced Subway Navigation with Apple Maps */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['product']) || selectedWork.includes(['subway']) || hoveredWork ==='subway' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['product']) || selectedWork.includes(['subway']) ||
                      hoveredWork==='subway' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('subway')}}>Apple Maps x NYC Subway</motion.button>

                    {/* Bloom */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['product']) || selectedWork.includes(['bloom']) || hoveredWork ==='bloom' 
                        ? 'text-foreground font-medium text-[11pt] -ml-0.5' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['product']) || selectedWork.includes(['bloom']) ||
                      hoveredWork==='bloom' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('bloom')}}>Bloom</motion.button>

                    {/* Website v2 */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['product']) || selectedWork.includes(['car']) || hoveredWork ==='car' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['product']) || selectedWork.includes(['car']) ||
                      hoveredWork==='car' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('car')}}>Human (Car)mputer Interaction</motion.button>

                    {/* Website v2 */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['product']) || selectedWork.includes(['website']) || hoveredWork ==='website' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['product']) || selectedWork.includes(['website']) ||
                      hoveredWork==='website' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('website')}}>Portfolio Website v2</motion.button>

                  {/* 2024 */}
                  <motion.h1
                  className={`text-xs font-medium mt-5 tracking-tighter dark:text-white ${selectedWork.includes('') ? 'text-foreground font-medium' : 'text-neutral-350 dark:text-white/40'}`}
                  variants={animateInChild}>
                    2024
                  </motion.h1>

                    {/* Portfolio Website */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['product']) || selectedWork.includes(['website']) || hoveredWork ==='website' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['product']) || selectedWork.includes(['website']) ||
                      hoveredWork==='website' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('website')}}>Portfolio Website</motion.button>

                    {/* The World of Studio Ghibli */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['creative', 'motion', 'graphic', 'best']) || selectedWork.includes(['ghibli']) || hoveredWork ==='ghibli' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['creative', 'motion', 'graphic', 'best']) || selectedWork.includes(['ghibli']) ||
                      hoveredWork==='ghibli' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('ghibli')}}>The World of Studio Ghibli</motion.button>

                  {/* 2023 */}
                  <motion.h1
                  className={`text-xs font-medium mt-5 tracking-tighter dark:text-white ${selectedWork.includes('') ? 'text-foreground font-medium' : 'text-neutral-350 dark:text-white/40'}`}
                  variants={animateInChild}>
                    2023
                  </motion.h1>

                    {/* Beyond the Cabin */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['creative', 'motion', 'graphic', 'best']) || selectedWork.includes(['cabin']) || hoveredWork ==='cabin' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['creative', 'motion', 'graphic', 'best']) || selectedWork.includes(['cabin']) || hoveredWork==='cabin' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('cabin')}}>Beyond the Cabin</motion.button>

                    {/* Cocktail Conversations */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['creative', 'motion', 'graphic', 'best']) || selectedWork.includes(['cocktail']) || hoveredWork ==='cocktail' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['creative', 'motion', 'graphic', 'best']) || selectedWork.includes(['cocktail']) ||
                      hoveredWork==='cocktail' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('cocktail')}}>Cocktail Conversations</motion.button>

                    {/* Kris+ Brand Campaign */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['creative', 'motion',]) || selectedWork.includes(['kris']) || hoveredWork ==='kris' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20' 
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['creative', 'motion']) || selectedWork.includes(['kris']) ||
                      hoveredWork==='kris' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('kris')}}>Kris+ Brand Campaign</motion.button>

                    {/* I Spy in the Sky */}
                    {/* <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['creative']) || selectedWork.includes(['ispy']) || hoveredWork ==='ispy' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['creative']) || selectedWork.includes(['ispy']) ||
                      hoveredWork==='ispy' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('ispy')}}>I Spy in the Sky</motion.button> */}

                  {/* 2022 */}
                  <motion.h1
                  className={`text-xs font-medium mt-5 tracking-tighter dark:text-white ${selectedWork.includes('') ? 'text-foreground font-medium' : 'text-neutral-350 dark:text-white/40'}`}
                  variants={animateInChild}>
                    2022
                  </motion.h1>

                    {/* Travel Like Never Before */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['creative', 'motion']) || selectedWork.includes(['travelbig']) || hoveredWork ==='travelbig' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['creative', 'motion']) || selectedWork.includes(['travelbig']) ||
                      hoveredWork==='travelbig' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('travelbig')}}>Travel Like Never Before</motion.button>

                    {/* SilverKris Lounge */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['creative', 'motion', 'edit', 'graphic']) || selectedWork.includes(['lounge']) || hoveredWork ==='lounge' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20' 
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['creative', 'motion', 'edit', 'graphic']) || selectedWork.includes(['lounge']) ||
                      hoveredWork==='lounge' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('lounge')}}>SilverKris Lounge</motion.button>

                    {/* Oops Happens */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['creative']) || selectedWork.includes(['hemsaker']) || hoveredWork ==='hemsaker' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['creative']) || selectedWork.includes(['hemsaker']) ||
                      hoveredWork==='hemsaker' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('hemsaker')}}>Oops Happens</motion.button>

                    {/* TBWA One Show Shortlist */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['motion']) || selectedWork.includes(['oneshow']) || hoveredWork ==='oneshow' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['motion']) || selectedWork.includes(['oneshow']) ||
                      hoveredWork==='oneshow' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('oneshow')}}>TBWA One Show Shortlist</motion.button>

                  {/* 2021 */}
                  <motion.h1
                  className={`text-xs font-medium mt-5 tracking-tighter dark:text-white ${selectedWork.includes('') ? 'text-foreground font-medium' : 'text-neutral-350 dark:text-white/40'}`}
                  variants={animateInChild}>
                    2021
                  </motion.h1>

                    {/* JolliEverAfter */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['motion', 'edit','best']) || selectedWork.includes(['jolli']) || hoveredWork ==='jolli' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['motion', 'edit','best']) || selectedWork.includes(['jolli']) || selectedTags.includes('edit') ||
                      hoveredWork==='jolli' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('jolli')}}>JolliEverAfter</motion.button>

                    {/* Samsung Lifestyle Displays */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['motion','edit']) || selectedWork.includes(['samsung']) || hoveredWork ==='samsung' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['motion','edit']) || selectedWork.includes(['samsung']) ||
                      hoveredWork==='samsung' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('samsung')}}>Samsung Lifestyle Displays</motion.button>

                  {/* 2019 */}
                  <motion.h1
                  className={`text-xs font-medium mt-5 tracking-tighter dark:text-white ${selectedWork.includes('') ? 'text-foreground font-medium' : 'text-neutral-350 dark:text-white/40'}`}
                  variants={animateInChild}>
                    2019
                  </motion.h1>

                    {/* Nike Athlete Stories: Koy & Toon */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['edit', 'motion']) || selectedWork.includes(['nike']) || hoveredWork ==='nike' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['motion','edit']) || selectedWork.includes(['nike']) ||
                      hoveredWork==='nike' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('nike')}}>Nike Athlete Stories: Koy & Toon</motion.button>

                    {/* BBH Profile Headshots */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['photography']) || selectedWork.includes(['bbh']) || hoveredWork ==='bbh' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['photography']) || selectedWork.includes(['bbh']) ||
                      hoveredWork==='bbh' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      setSelectedWork('bbh')}}>BBH Profile Headshots</motion.button>

                    {/* New Style Fresh Start */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['motion']) || selectedWork.includes(['uniqlo2']) || hoveredWork ==='uniqlo2' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['motion']) || selectedWork.includes(['uniqlo2']) ||
                      hoveredWork==='uniqlo2' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('uniqlo2')}}>New Style Fresh Start</motion.button>

                  {/* 2017 */}
                  <motion.h1
                  className={`text-xs font-medium mt-5 tracking-tighter dark:text-white ${selectedWork.includes('') ? 'text-foreground font-medium' : 'text-neutral-350 dark:text-white/40'}`}
                  variants={animateInChild}>
                    2017
                  </motion.h1>

                    {/* Your Stage Now Live */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['motion', 'graphic']) || selectedWork.includes(['uniqlo1']) || hoveredWork ==='uniqlo1' 
                        ? 'text-foreground font-medium' 
                        : selectedWork.length === 0 && !hoveredWork
                          ? 'text-black/10 dark:text-white/20'
                          : 'text-black/30 dark:text-white/35'
                      } transition-colors duration-100`}
                    animate={{scale: 
                      includesTags(['motion', 'graphic']) || selectedWork.includes(['uniqlo1']) ||
                      hoveredWork==='uniqlo1' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('uniqlo1')}}>Your Stage Now Live</motion.button>

                  {/* Personal */}
                  <motion.h1
                  className={`text-sm font-medium mt-5 tracking-tighter dark:text-white ${selectedWork.includes('') ? 'text-foreground font-medium' : 'text-neutral-350 dark:text-white/40'}`}
                  variants={animateInChild}>
                    Personal
                  </motion.h1>

                    {/* Content Creation */}
                      <motion.button 
                      className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                        ${includesTags(['content']) || selectedWork.includes(['content']) || hoveredWork ==='content' 
                          ? 'text-foreground font-medium' 
                          : selectedWork.length === 0 && !hoveredWork
                            ? 'text-black/10 dark:text-white/20'
                            : 'text-black/30 dark:text-white/35'
                        } transition-colors duration-100`}
                      whileHover={{scale:0.95}}
                      animate={{scale: selectedWork.includes('content') ? 1.06 : 1}}
                      variants={animateInChild}
                      layout="position"
                      onClick={() => {
                        toggleTag('clear');
                        setSelectedTags([]);
                        toggleWork('content');}}>Content Creation
                      </motion.button>

                    {/* Digital Photography */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['photography']) || selectedWork.includes(['street']) || hoveredWork ==='street' 
                          ? 'text-foreground font-medium' 
                          : selectedWork.length === 0 && !hoveredWork
                            ? 'text-black/10 dark:text-white/20'
                            : 'text-black/30 dark:text-white/35'
                        } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['photography']) || selectedTags.includes(['street']) ||
                      hoveredWork==='street' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('street')}}>Digital Photography</motion.button>

                    {/* Film Photography */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['photography']) || selectedWork.includes(['film']) || hoveredWork ==='film' 
                          ? 'text-foreground font-medium' 
                          : selectedWork.length === 0 && !hoveredWork
                            ? 'text-black/10 dark:text-white/20'
                            : 'text-black/30 dark:text-white/35'
                        } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['photography']) || selectedWork.includes(['film']) ||
                      hoveredWork==='film' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('film')}}>Film Photography</motion.button>

                    {/* iPhone 15 Pro */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['motion']) || selectedWork.includes(['iphone']) || hoveredWork ==='iphone' 
                          ? 'text-foreground font-medium' 
                          : selectedWork.length === 0 && !hoveredWork
                            ? 'text-black/10 dark:text-white/20'
                            : 'text-black/30 dark:text-white/35'
                        } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['motion']) || selectedWork.includes(['iphone']) ||
                      hoveredWork==='iphone' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('iphone')}}>iPhone 15 Pro</motion.button>

                    {/* Leica M10-P */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['photography']) || selectedWork.includes(['leica']) || hoveredWork ==='leica' 
                          ? 'text-foreground font-medium' 
                          : selectedWork.length === 0 && !hoveredWork
                            ? 'text-black/10 dark:text-white/20'
                            : 'text-black/30 dark:text-white/35'
                        } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['motion']) || selectedWork.includes(['leica']) ||
                      hoveredWork==='leica' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('leica')}}>Leica M10-P</motion.button>

                    {/* 3D Motion Exploration */}
                    <motion.button 
                    className={`hover:text-foreground dark:hover:text-foreground text-left mr-8 
                      ${includesTags(['motion']) || selectedWork.includes(['3d']) || hoveredWork ==='3d' 
                          ? 'text-foreground font-medium' 
                          : selectedWork.length === 0 && !hoveredWork
                            ? 'text-black/10 dark:text-white/20'
                            : 'text-black/30 dark:text-white/35'
                        } transition-colors duration-100`}
                    whileHover={{scale:0.95}}
                    animate={{scale: 
                      includesTags(['motion']) || selectedWork.includes(['3d']) ||
                      hoveredWork==='3d' 
                      ? 1.03 : 1
                    }}
                    variants={animateInChild}
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('3d')}}>3D Motion Exploration</motion.button>


                </motion.div>

                {/* Mobile Dropdown Container */}
                <div className="lg:hidden flex flex-col gap-4 items-left justify-between z-50 fixed w-screen -ml-4 font-medium top-20">

                  {/* Dropdown Menu */}    
                  <motion.div 
                  className="flex flex-col gap-2 items-start tracking-tighter text-[23px] leading-tighter font-medium mt-4 w-full max-w-[16rem] mx-auto md:hidden z-50 relative"
                  initial="hidden"
                  animate="show"
                  exit="fade"
                  transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17, 
                  }}
                  variants={skillContainer}>

                    {/* <motion.button 
                    className="text-left text-foreground font-normal mb-3 px-5 "
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('creative');
                      toggleNav('false');
                      toggleWork('clear');}}><span className='hidden mr-1 opacity-35 text-xxs align-top'>01 </span>
                      Info</motion.button>

                    <motion.div className="w-full bg-background dark:bg-white/[7%] shadow -ml-1 mb-6 h-[1.5px]" variants={animateInChildMobile}/> */}

                    <motion.button 
                    className="text-left text-foreground font-normal mb-3 px-5 "
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('creative');
                      toggleNav('false');
                      toggleWork('clear');}}><span className='hidden mr-1 opacity-35 text-xxs align-top'>01 </span>
                      Creative Direction</motion.button>

                    <motion.button 
                    className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('product');
                      toggleNav('false');
                      toggleWork('clear');}}><span className='hidden mr-1 opacity-35 text-xxs align-top'>01 </span>
                      Product Design</motion.button>

                    <motion.button 
                    className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('motion');
                      toggleNav('false');
                      toggleWork('clear');}}><span className='hidden mr-1 font-base opacity-35 text-xxs align-top'>02 </span>
                      Motion Design</motion.button>

                    <motion.button 
                    className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('edit');
                      toggleNav('false');
                      toggleWork('clear');}}><span className='hidden mr-1 font-base opacity-35 text-xxs align-top'>03 </span>
                      Video Editing</motion.button>

                    <motion.button 
                    className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('photography');
                      toggleNav('false');
                      toggleWork('photography');
                      }}><span className='hidden mr-1 font-base opacity-35 text-xxs align-top'>05 </span>
                      Photography</motion.button>
                      

                    <motion.button 
                   className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                   variants={animateInChildMobile}
                   onClick={() => {
                    toggleTag('content');
                    toggleNav('false');
                    toggleWork('content');
                    }}><span className='hidden mr-1 font-base opacity-35 text-xxs align-top'>06 </span>
                      Content Creation</motion.button>
                  </motion.div>
                </div>
              </>
            )} 
          </motion.div>

          {/* Page Container (Adjust px here) */}
          <motion.div
            className={`${showNav ? `col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-8 md:-ml-12` : "col-span-full"} px-4 md:px-[7%]`}  //shadow-mild rounded-2xl -mr-2 mt-4 pt-2 pb-6 px-6 dark:shadow-none  
            layout="position"
            layoutId='test'
            transition={{ type: "spring", stiffness: 600, damping: 25 }}  
          > 
            {/* Grid / Page */}
            <motion.div 
            className={`grid col-span-full md:gap-3 mt-8 md:mt-24 
            ${selectedTags.includes('photography') 
              ? 'grid-cols-4' 
              : selectedTags.includes('creative') || selectedTags.includes('motion')
                ? 'xl:grid-cols-3 grid-cols-2 gap-1.5'
                : 'grid-cols-2 gap-1.5'
            }`}>

              <AnimatePresence>
                {selectedWork === 'photography' ? (
                  <PhotographyPage key="photography" className="col-span-full -mt-22" toggleWork={toggleWork} setHoveredWork={setHoveredWork}/>
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
                ) : selectedWork === 'unshackle' ? (
                  <Unshackle key="unshackle" className="col-span-full"/>
                ) : selectedWork === 'bts' ? (
                  <BTS key="bts" className="col-span-full"/>
                ) : selectedWork === 'resume' ? (
                  <Resume key="resume" className="col-span-full" showNav={showNav} setHoveredWork={setHoveredWork} toggleWork={toggleWork}/>
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
                  <NycSubway key="subway" className="col-span-full"/>
                ) : selectedWork === 'car' ? (
                  <Car key="car" className="col-span-full" showNav={showNav}/>
                ) : selectedWork === 'bestwork' ? (
                  <BestWorkPage key="bestwork" className="col-span-full w-full" setSelectedWork={setSelectedWork} setHoveredWork={setHoveredWork}/>
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
                      setHoveredWork={setHoveredWork}
                      selectedTags={selectedTags}
                      onClick={() => { 
                        const workTags = 
                        ['website', 'cabin', 'cocktail', 'ghibli', 'bbh', 'street', 'unshackle', 'kris', 'iphone', '3d', 'car', 'subway',
                          'travelbig', 'lounge', 'hemsaker', 'ispy', 'jolli', 'uniqlo1', 'uniqlo2', 'oneshow', 'samsung', 'leica', 
                          'nike', 'film'];
                        const matchedWork = workTags.find((tag) => video.tags.includes(tag));
                        if (matchedWork) {
                          toggleTag('clear');
                          setSelectedWork(matchedWork);
                        }
                        
                        window.scrollTo ({
                          top:0,
                          behavior:'smooth',
                        });
                      }}
                    />
                  ))
                )}
              </AnimatePresence>
            </motion.div> 
          </motion.div>
        </div>
      </VideoProvider>
    </>
  );
  
};

