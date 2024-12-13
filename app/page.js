
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import PhotographyPage from './components/photography.js';
import ContentPage from './components/content.js';
import IxdPage from './components/ixd.js';
import Ghibli from './components/ghibli.js';
import CabinCrewStories from './components/cabin.js';
import Cocktail from './components/cocktail.js';
import Kris from './components/kris.js';
import TravelBig from './components/travelbig.js';
import Lounge from './components/lounge.js';
import BestWorkPage from './components/bestwork.js';
import Resume from './components/resume.js';
import StreetPhotography from './components/street-photo.js';
import BBH from './components/bbh.js';
import StressedLa from './components/stressed.js';
import Unshackle from './components/unshackle.js';
import BTS from './components/bts.js';
import { ChevronDownIcon} from '@heroicons/react/24/solid';
import {useVideoContext, VideoProvider} from './components/expandedGridContext.js';



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
        transition: {staggerChildren: 0.02, duration:0.1, ease:"easeOut"},
    },
    fade: {
      opacity:0,
      transition: {duration: 0.1, ease: "easeOut"},
    },
  };
  const animateInChild ={
    hidden: {opacity:0, x:-20},
    show: {
      opacity:1, x:0,
      transition: {duration:0.25, ease:"easeOut"},
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
      transition: {
        //when: "beforeChildren",
        staggerChildren: 0.015, // Stagger the children
      },
    },
    exit: { opacity: 0 },
  };
  const worksContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        // delay: 0.05, // Delay to make Works fade in after Skillsets
        when: "beforeChildren",
        staggerChildren: 0.03,
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
      className="drop-shadow-md rounded-lg hover:drop-shadow-md cursor-pointer group-hover:z-50"
      initial="hidden"
      animate="show"
      whileHover={{scale:0.98}}
      exit="fade"
      variants={scaleIn}
      onMouseEnter={() => {setHoveredWork(tags[0]); console.log(tags)}}
      onMouseLeave={() => setHoveredWork(null)}
      onClick={() => {
        if (isMobileDevice()) {
          if (selectedTags.includes('all')) {
            if (isExpanded) {
              onClick();
            } else {
              toggleExpand();
            }
          } else {
            onClick();
          }
        } else {
          onClick();
        }
      }}>

        {/* Line */}
        {/* <div className="col-span-full ml-3 w-[90vw] h-[0.5px] bg-black/15 dark:bg-white/15"/> */}
        
        {/* Square */}
        <div className={`md:pt-[100%] group relative overflow-hidden brightness-100 md:brightness-100 transition-all duration-300 mb-0.5 bg-background rounded-lg border-1
          ${selectedTags.includes('all') 
          ? `${isExpanded ? 'pt-[155%] border-transparent' : 'pt-[13%] md:hover:pt-[100%] border-white/15 saturate-200 md:saturate-100 hover:saturate-100'}`
          : 'pt-[150%] border-transparent'}`}>

          {/* Text Container */}
          <div className="absolute inset-0 flex flex-col items-start justify-between p-2 md:p-4 lg:gap-4">

            {/* Title of work */}
            <h1 className={`tracking-tight font-medium md:p-0 transition-all duration-300 z-50 break-words hyphens-auto 
            w-5/6 md:w-3/4 md:leading-8 md:text-4xl md:opacity-0 md:group-hover:opacity-100 
            ${selectedTags.includes('all') 
            ? `${isExpanded ? 'text-[#e9e9e9] dark:text-white text-5xl leading-11 p-2' : 'p-1 -mt-1 text-[18px] text-black/80 dark:text-white md:group-hover:text-4xl md:group-hover:leading-8'}` 
            : 'text-5xl p-3 text-[#e9e9e9] dark:text-white leading-tighter'}`}>
              {title}
            </h1>

            {/* Gradient */}
            <div className={`transition-all duration-300 z-10 ${selectedTags.includes('all') 
              ? `${isExpanded ? 'opacity-75' : 'opacity-0'}` 
              : 'opacity-100'}`}>

              <div className={`absolute rounded-lg lg:hidden inset-x-0 -top-[0.10px] -right-[0.2px] z-10 h-1/2 md:h-1/3 bg-gradient-to-b from-black/70 dark:from-black/90 to-transparent mix-blend-multiply `}/>
              <div className="absolute rounded-lg lg:hidden inset-x-0 -bottom-[0.8px] -right-[0.2px] z-10 h-1/5 bg-gradient-to-t from-black/80 to-transparent mix-blend-multiply "/>
            </div>

            {/* Details Container */}
            <div className="z-50 flex flex-row justify-start w-full">

              {/* Subheader */}
              <h3 className={`z-10 md:pb-0 md:text-sm tracking-normal
              opacity-100 md:opacity-0 md:group-hover:opacity-100 ml-1 md:w-4/6
              transition-opacity duration-300 leading-normal md:leading-4 text-left
              ${selectedTags.includes('all') 
              ? `${isExpanded ? 'text-white opacity-100' : 'text-[8px] text-black dark:text-white opacity-50'} w-5/6` 
              : 'text-xxs p-1.5 pl-2.5 md:pl-0 text-white w-full font-light'}`}>
              {subheader}</h3>

            </div>
          </div>
    
          {/* Corner Arrow */}
          <button className="hidden lg:block absolute top-2 right-2 z-20 p-0 m-1 scale-100
          rounded-full border-0 border-[rgba(255,255,255,0.5)] text-white backdrop-blur
          group-hover:bg-white group-hover:text-black group-hover:scale-150 group-hover:m-2 group-hover:px-1
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

          {/* Mobile Corner Arrow */}
          <button className={`md:hidden absolute p-0.5 px-1 rounded-full z-50 
          flex items-center justify-center cursor-pointer group-hover:text-black transition-all duration-300
          ${selectedTags.includes('all') 
            ? `${isExpanded ? 'top-5 right-5 scale-150 text-black bg-white' : 'hidden'}` 
            : 'top-7 right-7 scale-150 group-hover:-m-2 group-hover:scale-150 group-hover:bg-white text-white border-1'}`}>

            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="2 2 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-3 h-3 ${selectedTags.includes('all') ? (isExpanded ? 'block' : 'hidden') : 'block'}`}>
            <path d="M7 17L17 7"/>
            <path d="M7 7h10v10"/>
            </svg>

          </button>

          {/* Mobile Dropdown Chevron */}     
          <ChevronDownIcon 
          className={`absolute z-50 top-3 right-4 text-black/80 dark:text-white opacity-100 w-3.5 h-3.5 md:hidden
          ${selectedTags.includes('all') ? (isExpanded ? 'hidden' : 'block') : 'hidden'}`}/>

          {/* Video */}
          {(!isMobileDevice() || (isMobileDevice() && (['creative', 'motion', 'edit'].some(tag => selectedTags.includes(tag)) || isExpanded ) )) && (
            <video
              className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-100 transition-all duration-500"
              style={{ clipPath: 'inset(0 round 0.5rem)' }}
              autoPlay
              muted
              loop
              playsInline
              poster={poster}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}

        </div>
        
      </motion.div>
    );
  };

export default function Home(){

  const videoData = [
    { src: '/website/cover_1.mp4', title:'Literally this website.', subheader:'Interaction Design & Development', poster:'/poster/website.jpeg', tags: ['ixd', 'all'] },
    { src: '/Ghibli/cover1_1.mp4', title:'The World of Studio Ghibli', subheader:'Marketing campaign for ArtScience Museum', poster:'/poster/ghibli.jpeg', tags: ['ghibli', 'all', 'creative', 'asm', 'graphic', 'best'] },
    { src: '/CCS/cover1_1.mp4', title:'Beyond the Cabin', subheader:'Brand campaign for Singapore Airlines', poster:'/poster/cabin.jpeg', tags: ['cabin', 'all', 'creative', 'sia', 'motion','graphic', 'best'] },
    { src: '/Cocktail/cover1_1.mp4', title:'Cocktail Conversations', subheader:'Brand campaign for Singapore Airlines', poster:'/poster/cocktail.jpeg', tags: ['cocktail', 'all', 'creative', 'sia', 'motion','graphic', 'best'] },
    { src: '/Kris/cover1_1.mp4', title:'Kris+ Brand Campaign', subheader:'Brand campaign for Singapore Airlines', poster:'/poster/kris.jpeg', tags: ['kris', 'all', 'creative', 'sia'] },
    { src: '/travelbig/cover_1.mp4', title:'Travel Like Never Before', subheader:'Brand campaign for Singapore Airlines', poster:'/poster/travelbig.jpg', tags: ['travelbig', 'all', 'creative', 'sia'] },
    { src: '/lounge/cover_1.mp4', title:'SilverKris Lounge', subheader:'Brand campaign for Singapore Airlines', poster:'/poster/lounge.jpeg', tags: ['lounge', 'all', 'creative', 'sia', 'edit', 'motion', 'graphic'] },
    { src: '/Hemsaker/cover.mp4', title:'Oops Happens', subheader:'Product campaign for IKEA', poster:'/poster/hemsaker.jpeg', tags: ['hemsaker', 'all', 'creative', 'Ikea'] },
    { src: '/ispy/cover.mp4', title:'I Spy in The Sky...', subheader:'Social content for Singapore Airlines', poster:'/poster/ispy.jpeg', tags: ['ispy', 'all', 'creative', 'sia'] },
    { src: '/jollieverafter/cover_1.mp4', title:'JolliEverAfter', subheader:'Social media campaign for Jollibee', poster:'/poster/jollieverafter.jpeg', tags: ['jolli', 'all', 'motion', 'edit', 'best'] },
    { src: '/virtualsentosa/Cover.mp4', title:'Virtual Sentosa', subheader:'Activation Campaign for Sentosa', poster:'/poster/virtualsentosa.jpeg', tags: ['virtualsentosa', 'all', 'motion', 'edit'] },
    { src: '/3dpersonal/Cover.mp4', title:'3D Motion Explorations', subheader:'Personal Explorations', poster:'/poster/3d.jpeg', tags: ['3dpersonal', 'all', 'motion'] },
    { src: '/uniqlo2/Cover.mp4', title:'New Style Fresh Start', subheader:'Motion Design for Uniqlo', poster:'/poster/uniqlo2.jpeg', tags: ['uniqlo2', 'all', 'motion'] },
    { src: '/Photography/street/Cover2_2.mp4', title:'Personal Photography', subheader:'Photography', poster:'/poster/street.jpeg', tags: ['street', 'all', 'photography'] },
    { src: '/Photography/bbh/cover.mp4', title:'BBH Profile Headshots', subheader:'Portrait series', poster:'', tags: ['bbh', 'all', 'photography'] },
    { src: '/Photography/unshackle/Cover.mp4', title:'Unshackle:', subheader:'Photography', poster:'', tags: ['unshackle', 'all', 'photography'] },
    { src: '/oneshow/cover.mp4', title:'TBWA One Show Shortlists', subheader:'Social media post', poster:'/poster/oneshow.jpeg', tags: ['oneshow', 'all', 'motion'] },
    { src: '/leica/leica.mp4', title:'Leica M-10P', subheader:'3D Motion Design', poster:'/poster/leica.jpeg', tags: ['leica', 'all', 'motion'] },
    { src: '/moonpillow/cover.mp4', title:'ByBit Moon Pillow', subheader:'3D Motion Design', poster:'/poster/bybit.jpeg', tags: ['bybit', 'all', 'motion'] },
    { src: '/iphone/iphone.mp4', title:'iPhone 15 Pro', subheader:'Personal explorations', poster:'/poster/iphone15.jpeg', tags: ['iphone', 'all', 'motion'] }, 
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [selectedTags, setSelectedTags] = useState('');
  const [selectedWork, setSelectedWork] = useState('');
  const [showNav, setShowNav] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [hoveredWork, setHoveredWork] = useState(null);

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
      setSelectedTags('all');
      setSelectedWork('');
    }
  }, [isMobile]);

  // const [touchStart, setTouchStart] = useState(0);
  // const [touchEnd, setTouchEnd] = useState(0);

  // const handleSwipe = () => {
  //   if (touchStart - touchEnd > 60) {
  //     // Swipe Left, IF prevWork is Resume, set All.
  //     setSelectedWork((prevWork) => (prevWork === "resume" ? "all" : "resume"));
  //   } else if (touchEnd - touchStart > 60) {
  //     // Swipe Right, IF prevwork is All, set Resume.
  //     setSelectedWork((prevWork) => (prevWork === "all" ? "resume" : "all"));
  //   }
  // };

  // useEffect(() => {
  //   const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  //   const handleTouchEnd = (e) => {
  //     setTouchEnd(e.changedTouches[0].clientX);
  //     handleSwipe();
  //   };

  //   // Add event listeners
  //   document.addEventListener("touchstart", handleTouchStart);
  //   document.addEventListener("touchend", handleTouchEnd);

  //   return () => {
  //     // Cleanup event listeners
  //     document.removeEventListener("touchstart", handleTouchStart);
  //     document.removeEventListener("touchend", handleTouchEnd);
  //   };
  // }, [touchStart, touchEnd]);

  const includesTags = (tags) => {
    return tags.some((tag) => selectedTags.includes(tag));
  };

  const includesWorks = (works) => {
    return works.some((work) => selectedWork.includes(work));
  };

  // const toggleTag = (tag) => {
  //   if (tag === 'clear') {
  //     setSelectedTags([]);
  //   } else {
  //     // Remove 'all' from the selectedTags array if it exists
  //     const updatedTags = selectedTags.filter((t) => t !== 'all');

  //     // Check if the tag is already in updatedTags
  //     if (updatedTags.includes(tag)) {
  //       // Remove the tag if it's already selected
  //       setSelectedTags(updatedTags.filter((t) => t !== tag));
  //     } else {
  //       // Add the tag if it's not selected
  //       setSelectedTags([...updatedTags, tag]);
  //     }
  //   }
  // };

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
    console.log('selectedTags', selectedTags);
    console.log('selectedWork:', selectedWork)
    console.log('showReset:', showReset);
    console.log('showNav', showNav);
    console.log('showReset', showReset);
    
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
        {/* Entire Page column setup */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 mt-12
        px-3 sm:px-4 2xl:px-6 text-sm max-w-10xl font-[family-name:var(--font-geist-sans)] w-screen mx-auto">
          
          {/* Top Navbar */}
          <div className="col-span-full fixed top-2 md:top-2.5 z-40 mb-4 text-sm lg:text-[15px] font-base w-screen pr-6">

            {/* Sidenav / Dropdown Button */}
            <motion.button 
              className={`absolute text-foreground border-1 p-1.5 px-1.75 rounded-full border-black/0 md:dark:border-white/20 backdrop-blur-lg 
              flex items-center shadow md:hover:text-background transition-colors duration-100 z-50 md:right-auto md:left-0.5 mt-0.5 md:mt-0
              ${showNav ? "text-white dark:text-black bg-foreground right-8 md:hover:bg-foreground" : "bg-[#e9e9e9] dark:bg-black/20 md:hover:bg-foreground right-8"}`}
              whileHover={{ scale: 0.9 }}
              variants={animateInChild}
              layout="position"
              onClick={toggleNav}>

                {/* Example of an SVG icon */}
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 md:w-5 h-6 md:h-5">
                  <path d={`${showNav ? 'M2 10h16' : 'M6 10h8'}`}
                  className='transition-all duration-200'/>
                  <path d={`${showNav ? 'M2 15h16' : 'M6 15h8'}`}
                  className='transition-all duration-300'/>
                  <path d={`${showNav ? 'M2 5h16' : 'M6 5h8'}`}
                  className='transition-all duration-100'/>
                </svg>
              </motion.button>

              {/* Top Navbar Contents */}
              <motion.div
              className="flex flex-row justify-center max-w-10xl gap-2 md:gap-4 text-white mt-[7px] lg:mt-1"
              initial="hidden"
              animate="show"
              layout="position"
              variants={animateIn}
              transition={{ duration: 0.5 }}> 

                {/* Profile Button */}
                <motion.button
                  className={`hover:text-background dark:hover:text-white tracking-tight rounded-full px-3 py-0.5 border-1 border-black/0 dark:hover:bg-transparent md:mr-1
                    hover:border-black hover:bg-foreground dark:border-white/0 dark:hover:border-white/100 transition-colors duration-300 whitespace-nowrap font-medium
                    ${selectedWork.includes('resume') 
                      ? ' border-foreground dark:border-white text-foreground' 
                      : ' text-black dark:text-white '
                    }`}
                  whileHover={{ scale: 0.94 }}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('resume');
                    setSelectedTags(['']);
                    if (isMobile) {
                      setShowNav(false);
                    }
                  }}
                    >
                  <span className="hidden md:block">Who am I?</span>
                  <span className="block md:hidden">Who?</span>
                </motion.button>

                {/* Best Button */}
                <motion.button 
                  className={`hidden md:block hover:text-background dark:hover:text-white tracking-tight rounded-full px-3 py-0.5 border-1 border-black/0 dark:hover:bg-transparent 
                    hover:border-black hover:bg-foreground dark:border-white/0 dark:hover:border-white/100 transition-colors duration-300 whitespace-nowrap font-medium
                    ${selectedWork.includes('bestwork') 
                      ? ' border-black/100 dark:border-white/100 text-foreground' 
                      : ' text-black dark:text-white dark:hover:text-foreground'
                    }`}
                  whileHover={{ scale: 0.94 }}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('bestwork');
                    setSelectedTags(['']);
                    if (window.matchMedia('(max-width: 640px)').matches) {
                      setShowNav(false);
                    }
                  }}
                  >

                  <span className="hidden md:block">My personal favourites</span>
                  <span className="block md:hidden">Favourites</span>

                </motion.button>

                {/* All Button */}
                <motion.button 
                className={`hover:text-background dark:hover:text-white tracking-tight rounded-full px-3 py-0.5 border-1 border-black/0 dark:hover:bg-transparent 
                    hover:border-black hover:bg-foreground dark:border-white/0 dark:hover:border-white/100 transition-colors duration-300 whitespace-nowrap font-medium
                    ${['all', 'creative', 'edit', 'motion', 'photography', 'content', 'ixd'].some(tag => selectedTags.includes(tag))
                    
                    ? ' border-foreground dark:border-white text-foreground' 
                    : ' text-black dark:text-white dark:hover:text-foreground border-black/0'
                  }`}

                whileHover={{scale:0.94}}
                variants={animateInChild}
                layout="position"
                onClick={() => {
                  if (window.matchMedia('(max-width: 640px)').matches) {
                    toggleNav(true);
                    } else {
                      toggleTag('clear');
                      toggleWork('clear');
                      setSelectedTags(['all']);
                      setShowNav(true);
                    }
                  }}>

                  <span className="hidden md:block">Everything I&apos;ve got</span>
                  <span className="block md:hidden">Work</span>
                  
                </motion.button>

              </motion.div>
          </div>  

          {/* Mobile Navbar BG */}
          <motion.div
            className={`md:hidden fixed dark:backdrop-blur-lg top-2 w-full shadow z-2 z-30
              border-white/10 transition-colors bg-background dark:bg-black/20 blur-[0.2px] border-b-1 
              ${showNav ? "" : ""}`}
            style={{
              left: "50%",
              transform: "translateX(-50%)",
            }}
              animate={{ 
                width: showNav? "17rem" : "9.1rem",
                height: showNav ? "28rem" : "2.5rem",
                borderRadius: showNav ? "0.75rem" : "50rem"}}
              transition={{
                width: { type: "spring", stiffness: showNav ? 500 : 500 , damping: showNav ? 28 : 26 },
                height: { type: "spring", stiffness: showNav ? 500 : 500 , damping: showNav ? 26 : 36 }, // Faster or bouncier for height
                borderRadius: { duration: showNav ? 0.01 : 10 } // Separate easing for smooth border-radius transition
              }}
          ></motion.div>

          {/* Desktop Navbar BG */}
          <div
            className="hidden md:block fixed backdrop-blur-lg top-2 left-1/2 transform -translate-x-1/2 w-[480px] ml-[12px] rounded-full 
            drop-shadow bg-background dark:bg-transparent z-20 h-[38px] border-b-1 border-white/30 dark:mix-blend-overlay"
          ></div>

          {/* Side Navbar / Mobile Dropdown */}
          <motion.div
            className={`${showNav ? "col-span-1 flex flex-col tracking-tight " : "opacity-0 pointer-events-none"}
            relative transition-opacity duration-300 `} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            variants={animateInChildMobile}>

            {showNav && (
              <>
                {/* Mobile Dropdown Container */}
                <div className="lg:hidden flex flex-col gap-4 items-left justify-between z-50 fixed w-screen -ml-4 font-medium ">

                  {/* Dropdown Menu */}    
                  <motion.div 
                  className="flex flex-col gap-2 items-start tracking-tighter text-[23px] leading-tighter font-medium mt-4 w-full max-w-[16rem] mx-auto md:hidden"
                  initial="hidden"
                  animate="show"
                  exit="fade"
                  transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17, 
                  }}
                  variants={skillContainer}>

                    {/* <motion.div className="w-full bg-backgroundround dark:bg-white/[7%] shadow rounded-full h-[1.5px]" variants={animateInChildMobile}/> */}

                    <motion.button 
                    className="text-left text-foreground mt-2 mb-1 px-5"
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('all');
                      toggleNav('false');
                      toggleWork('clear');}}><span className='hidden mr-1.5 font-light text-base align-top tracking-normal'>∞</span>
                      Everything<span className='ml-1.5 absolute -rotate-2 mt-1 font-script italic tracking-wider text-[9px] align-super whitespace-nowrap'
                      ></span></motion.button>

                    {/* <motion.div className="mx-auto mr-2 w-[90%] bg-background dark:bg-white/[7%] shadow rounded-full h-[1.5px] " variants={animateInChildMobile}/> */}

                    <motion.button 
                    className="text-left text-foreground mt-2 mb-3 px-5 relative"
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('creative');
                      toggleWork('bestwork');
                      setShowNav(false)}}><span className='hidden mr-1 font-light text-xl align-center leading-none tracking-normal'>* </span>
                      My <span className="font-script ml-1.5 relative top-1">favorites</span></motion.button>
                      
                    <motion.div className="mx-auto mr-2 w-[90%] bg-background dark:bg-white/[7%] shadow rounded-full h-[1.5px]" variants={animateInChildMobile}/>

                    <motion.button 
                    className="text-left text-foreground font-normal mt-2.5 mb-3 px-5 "
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('creative');
                      toggleNav('false');
                      toggleWork('clear');}}><span className='hidden mr-1 opacity-35 text-xxs align-top tracking-normal'>01 </span>
                      Creative</motion.button>

                    {/* <motion.div className="w-full bg-background dark:bg-white/[7%] shadow rounded-full h-[1.5px]" variants={animateInChildMobile}/> */}

                    <motion.button 
                    className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('motion');
                      toggleNav('false');
                      toggleWork('clear');}}><span className='hidden mr-1 font-base opacity-35 text-xxs align-top tracking-normal'>02 </span>
                      Motion</motion.button>

                    {/* <motion.div className="w-full bg-background dark:bg-white/[7%] shadow rounded-full h-[1.5px]" variants={animateInChildMobile}/> */}

                    <motion.button 
                    className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('edit');
                      toggleNav('false');
                      toggleWork('clear');}}><span className='hidden mr-1 font-base opacity-35 text-xxs align-top tracking-normal'>03 </span>
                      Edit</motion.button>

                    {/* <motion.div className="w-full bg-background dark:bg-white/[7%] shadow rounded-full h-[1.5px]" variants={animateInChildMobile}/> */}

                    <motion.button 
                    className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('photography');
                      toggleNav('false');
                      toggleWork('photography');
                      }}><span className='hidden mr-1 font-base opacity-35 text-xxs align-top tracking-normal'>05 </span>
                      Photography</motion.button>

                    <motion.button 
                    className="text-left text-foreground font-normal mt-1 mb-3 px-5 whitespace-nowrap"
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('ixd');
                      toggleNav('false');
                      toggleWork('ixd');}}><span className='hidden mr-1 font-base opacity-35 text-xxs align-top tracking-normal'>04 </span>
                      Interaction Design</motion.button>                      
                    {/* <motion.div className="w-full bg-background dark:bg-white/[7%] shadow rounded-full h-[1.5px]" variants={animateInChildMobile}/> */}

                    <motion.button 
                   className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                   variants={animateInChildMobile}
                   onClick={() => {
                    toggleTag('content');
                    toggleNav('false');
                    toggleWork('content');
                    }}><span className='hidden mr-1 font-base opacity-35 text-xxs align-top tracking-normal'>06 </span>
                      Content Creation</motion.button>
                  </motion.div>
                </div>

                {/* Desktop Side Navbar Reset Button */}
                <motion.div 
                  className="sticky top-18 mt-4 z-50 hidden md:block">
                  {showReset && (
                    <motion.button
                      className="group hover:text-background font-medium flex gap-1.5
                      -ml-1 mb-6 pt-1 pb-1 pr-2 pl-2.5 backdrop-blur 
                      items-center text-foreground transition-colors hover:bg-foreground 
                      rounded-full border-1 border-foreground dark:border-neutral-400 "
                      initial={{ opacity: 0, y:-20 }} 
                      animate={{ opacity: 1, y:0 }}  
                      transition={{
                        type: "spring",
                        stiffness: 500, 
                        damping: 15, 
                        }} 
                      whileHover={{ scale: 0.97 }} 
                      onClick={() => {
                        setSelectedTags(['all']);
                        setSelectedWork([]);
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth' // Enables smooth scrolling to the top
                        });
                      }}
                    >Lets rewind
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 105"
                        className="w-4 h-4 group-hover:text-background"
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
                className="hidden md:flex flex-col items-start gap-1 mt-4 dark:text-neutral-500 sticky z-10"
                initial="hidden"
                animate="show"
                exit="fade"
                layout="position"
                  transition={{
                  type: "spring",
                  stiffness: 400, // Adjust for faster or slower animation
                  damping: 17, // Adjust for bounciness and smoothness
                  }}
                variants={skillContainer}>

                  <motion.h1
                  className="text-xl font-medium tracking-tighter mb-4 text-foreground hidden sm:block"
                  variants={animateInChild}
                  layout="position">
                    Skillsets
                  </motion.h1>

                  <motion.button 
                  className={`hover:text-foreground text-left md:mr-8
                    ${selectedTags.includes('creative') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0 text-foreground'
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                  whileHover={{scale:1.06}}
                  animate={{scale: selectedTags.includes('creative') ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('creative');
                    toggleWork('clear');}}>Creative Direction</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left md:mr-8
                    ${selectedTags.includes('motion') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0 text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                  whileHover={{scale:1.06}}
                  animate={{scale: selectedTags.includes('motion') ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('motion');
                    toggleWork('clear');}}>Motion Design</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left md:mr-8
                    ${selectedTags.includes('edit') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0 text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                  whileHover={{scale:1.06}}
                  animate={{scale: selectedTags.includes('edit') ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"  
                  onClick={() => {
                    toggleTag('edit');
                    toggleWork('clear');}}>Video Editing</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left md:mr-8
                    ${selectedWork.includes('photography') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0 text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                  whileHover={{scale:1.06}}
                  animate={{scale: includesWorks(['photography', 'street', 'bbh', 'bts', 'unshackle']) ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"      
                  onClick={() => {
                    toggleTag('clear');
                    setSelectedTags([]);
                    toggleWork('photography');
                    }}>Photography</motion.button>
                    
                  <motion.button 
                  className={`hover:text-foreground text-left md:mr-8
                    ${selectedWork.includes('ixd') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0 text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                  whileHover={{scale:1.06}}
                  animate={{scale: selectedWork.includes('ixd') ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('clear');
                    setSelectedTags([]);
                    toggleWork('ixd');}}>Interaction Design</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left md:mr-8
                    ${selectedTags.includes('content') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0 text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                  whileHover={{scale:1.06}}
                  animate={{scale: selectedTags.includes('content') ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('clear');
                    setSelectedTags([]);
                    toggleWork('content');}}>Content Creation</motion.button>
                </motion.div>

                {/* Desktop Side Navbar All Work */}
                <motion.div
                className={`hidden md:flex flex-col items-start gap-1 mt-12 dark:text-neutral-500 sticky z-10 ${showReset ? "top-32" : "top-16"}`}
                initial="hidden"
                animate="show"
                exit="exit"
                layout="position"
                transition={{
                  type: "spring",
                  stiffness: 400, // Adjust for faster or slower animation
                  damping: 15, // Adjust for bounciness and smoothness
                }}
                variants={worksContainer}
                >

                  <motion.h1
                  className="text-xl font-medium tracking-tight mb-4 text-foreground"
                  variants={animateInChild}>
                    Work
                  </motion.h1>

                  <motion.h1
                  className={`text-xs tracking-tighter transition-color" ${selectedTags.includes('all') ? 'text-foreground' : 'text-midground'}`}
                  variants={animateInChild}>
                    2024
                  </motion.h1>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${selectedWork.includes(['ixd']) || hoveredWork ==='ixd' 
                      ? 'text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                    } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['creative']) || selectedWork.includes(['ixd']) ||
                    hoveredWork==='ixd' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('ixd')}}>Portfolio Website</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['creative', 'motion', 'graphic', 'best']) || selectedWork.includes(['ghibli']) || hoveredWork ==='ghibli' 
                      ? 'text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                    } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['creative', 'motion', 'graphic', 'best']) || selectedWork.includes(['ghibli']) ||
                    hoveredWork==='ghibli' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('ghibli')}}>The World of Studio Ghibli</motion.button>

                  <motion.h1
                  className={`text-xs mt-5 tracking-tight transition-color" ${selectedTags.includes('all') ? 'text-foreground' : 'text-midground'}`}
                  variants={animateInChild}>
                    2023
                  </motion.h1>
                    
                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                  ${includesTags(['creative', 'motion', 'graphic', 'best']) || selectedWork.includes(['cabin']) || hoveredWork ==='cabin' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['creative', 'motion', 'graphic', 'best']) || selectedWork.includes(['cabin']) || hoveredWork==='cabin' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>Beyond the Cabin</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['creative', 'motion', 'graphic', 'best']) || selectedWork.includes(['cocktail']) || hoveredWork ==='cocktail' 
                      ? 'text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                    } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['creative', 'motion', 'graphic', 'best']) || selectedWork.includes(['cocktail']) ||
                    hoveredWork==='cocktail' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cocktail')}}>Cocktail Conversations</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['creative', 'motion']) || selectedWork.includes(['kris']) || hoveredWork ==='kris' 
                      ? 'text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                    } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['creative', 'motion']) || selectedWork.includes(['kris']) ||
                    hoveredWork==='kris' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('kris')}}>Kris+ Brand Campaign</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['creative']) || selectedWork.includes(['ispy']) || hoveredWork ==='ispy' 
                      ? 'text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                    } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['creative']) || selectedWork.includes(['ispy']) ||
                    hoveredWork==='ispy' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('ispy')}}>I Spy in the Sky</motion.button>

                  <motion.h1
                  className={`text-xs mt-5 tracking-tight transition-color" ${selectedTags.includes('all') ? 'text-foreground' : 'text-midground'}`}
                  variants={animateInChild}>
                    2022
                  </motion.h1>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['creative', 'motion']) || selectedWork.includes(['travelbig']) || hoveredWork ==='travelbig' 
                      ? 'text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                    } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['creative', 'motion']) || selectedWork.includes(['travelbig']) ||
                    hoveredWork==='travelbig' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('travelbig')}}>Travel Like Never Before</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['creative', 'motion', 'edit', 'graphic']) || selectedWork.includes(['lounge']) || hoveredWork ==='lounge' 
                      ? 'text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                    } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['creative', 'motion', 'edit', 'graphic']) || selectedWork.includes(['lounge']) ||
                    hoveredWork==='lounge' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('lounge')}}>SilverKris Lounge</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['creative']) || selectedWork.includes(['hemsaker']) || hoveredWork ==='hemsaker' 
                      ? 'text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                    } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['creative']) || selectedWork.includes(['hemsaker']) ||
                    hoveredWork==='hemsaker' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('hemsaker')}}>Oops Happens</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion']) || selectedWork.includes(['oneshow']) || hoveredWork ==='oneshow' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion']) || selectedWork.includes(['oneshow']) ||
                    hoveredWork==='oneshow' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('oneshow')}}>TBWA One Show Shortlist</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion']) || selectedWork.includes(['bybit']) || hoveredWork ==='bybit' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion']) || selectedWork.includes(['bybit']) ||
                    hoveredWork==='bybit' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('bybit')}}>ByBit Moon Pillow</motion.button>


                  <motion.h1
                  className={`text-xs mt-5 tracking-tight transition-color" ${selectedTags.includes('all') ? 'text-foreground' : 'text-midground'}`}
                  variants={animateInChild}>
                    2021
                  </motion.h1>


                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion', 'edit','best']) || selectedWork.includes(['jolli']) || hoveredWork ==='jolli' 
                      ? 'text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                    } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion', 'edit','best']) || selectedWork.includes(['jolli']) || selectedTags.includes('edit') ||
                    hoveredWork==='jolli' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('jolli')}}>JolliEverAfter</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion','edit']) || selectedWork.includes(['virtualsentosa']) || hoveredWork ==='virtualsentosa' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion', 'edit']) || selectedWork.includes(['virtualsentosa']) ||
                    hoveredWork==='virtualsentosa' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('virtualsentosa')}}>Virtual Sentosa</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion','edit']) || selectedWork.includes(['samsung']) || hoveredWork ==='samsung' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion','edit']) || selectedWork.includes(['samsung']) ||
                    hoveredWork==='samsung' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('samsung')}}>Samsung Lifestyle Displays</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion','edit']) || selectedWork.includes(['sentosa']) || hoveredWork ==='sentosa' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion','edit']) || selectedWork.includes(['sentosa']) ||
                    hoveredWork==='sentosa' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('sentosa')}}>Sentosa Island</motion.button>

                  <motion.h1
                  className={`text-xs mt-5 tracking-tight transition-color" ${selectedTags.includes('all') ? 'text-foreground' : 'text-midground'}`}
                  variants={animateInChild}>
                    2019
                  </motion.h1>
                  

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion','edit']) || selectedWork.includes(['nike']) || hoveredWork ==='nike' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion','edit']) || selectedWork.includes(['nike']) ||
                    hoveredWork==='nike' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('nike')}}>Nike Athlete Stories: Koy & Toon</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesWorks(['bbh']) || selectedWork.includes(['bbh']) || hoveredWork ==='bbh' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesWorks(['bbh']) || selectedWork.includes(['bbh']) ||
                    hoveredWork==='bbh' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    setSelectedWork('bbh')}}>BBH Profile Headshots</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion']) || selectedWork.includes(['uniqlo2']) || hoveredWork ==='uniqlo2' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion']) || selectedWork.includes(['uniqlo2']) ||
                    hoveredWork==='uniqlo2' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('uniqlo2')}}>New Style Fresh Start</motion.button>

                  <motion.h1
                  className={`text-xs mt-6 tracking-tight transition-color " ${selectedTags.includes('all') ? 'text-foreground' : 'text-midground'}`}
                  variants={animateInChild}>
                    2017
                  </motion.h1>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion', 'graphic']) || selectedWork.includes(['uniqlo1']) || hoveredWork ==='uniqlo1' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion', 'graphic']) || selectedWork.includes(['uniqlo1']) ||
                    hoveredWork==='uniqlo1' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('uniqlo1')}}>Your Stage Now Live</motion.button>

                  <motion.h1
                  className={`text-xs mt-5 tracking-tight transition-color" ${selectedTags.includes('all') ? 'text-foreground' : 'text-midground'}`}
                  variants={animateInChild}>
                    Personal
                  </motion.h1>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion']) || selectedWork.includes(['iphone12']) || hoveredWork ==='iphone12' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion']) || selectedWork.includes(['iphone12']) ||
                    hoveredWork==='iphone12' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('iphone12')}}>iPhone 12 Pro</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion']) || selectedWork.includes(['iphone']) || hoveredWork ==='iphone' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion']) || selectedWork.includes(['iphone']) ||
                    hoveredWork==='iphone' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('iphone')}}>iPhone 15 Pro</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion']) || selectedWork.includes(['leica']) || hoveredWork ==='leica' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion']) || selectedWork.includes(['leica']) ||
                    hoveredWork==='leica' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('leica')}}>Leica M10-P</motion.button>

              

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion']) || selectedWork.includes(['3d']) || hoveredWork ==='3d' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion']) || selectedWork.includes(['3d']) ||
                    hoveredWork==='3d' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('3d')}}>3D Motion Exploration</motion.button>
                </motion.div>
              </>
            )} 
          </motion.div>

          {/* Page Container */}
          <motion.div
            className={`${showNav ? "col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-8" : "col-span-full"}`}  //shadow-mild rounded-2xl -mr-2 mt-4 pt-2 pb-6 px-6 dark:shadow-none  
            layout="position"
            layoutId='test'
            transition={{ type: "spring", stiffness: 400, damping: 24 }}  
          > 
            {/* Grid / Page */}
            <motion.div 
            className={`grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-span-full md:gap-1.5 mt-4 md:mt-4
            ${selectedTags.includes('creative') || selectedTags.includes('edit') || selectedTags.includes('motion') ? 'grid-cols-1 gap-2' : 'grid-cols-1 gap-1'}`}>
              <AnimatePresence>
                {selectedWork === 'photography' ? (
                  <PhotographyPage key="photography" className="col-span-full -mt-22" setSelectedWork={setSelectedWork}/>
                ) : selectedWork === 'content' ? (
                  <ContentPage key="content" className="col-span-full"/>
                ) : selectedWork === 'ixd' ? (
                  <IxdPage key="ixd" className="col-span-full"/>
                ) : selectedWork === 'street' ? (
                  <StreetPhotography key="street" className="col-span-full"/>
                ) : selectedWork === 'bbh' ? (
                  <BBH key="bbh" className="col-span-full"/>
                ) : selectedWork === 'stressed' ? (
                  <StressedLa key="stressed" className="col-span-full"/>
                ) : selectedWork === 'unshackle' ? (
                  <Unshackle key="unshackle" className="col-span-full"/>
                ) : selectedWork === 'bts' ? (
                  <BTS key="bts" className="col-span-full"/>
                ) : selectedWork === 'resume' ? (
                  <Resume key="resume" className="col-span-full"/>
                ) : selectedWork === 'ghibli' ? (
                  <Ghibli key="ghibli" className="col-span-full"/>
                ) : selectedWork === 'cabin' ? (
                  <CabinCrewStories key="cabin" className="col-span-full" isMobile={isMobile}/>
                ) : selectedWork === 'cocktail' ? (
                  <Cocktail key="cocktail" className="col-span-full"/>
                ) : selectedWork === 'kris' ? (
                  <Kris key="kris" className="col-span-full"/>
                ) : selectedWork === 'travelbig' ? (
                  <TravelBig key="travelbig" className="col-span-full"/>
                ) : selectedWork === 'lounge' ? (
                  <Lounge key="lounge" className="col-span-full"/>
                ) : selectedWork === 'bestwork' ? (
                  <BestWorkPage key="bestwork" className="col-span-full" setSelectedWork={setSelectedWork} setHoveredWork={setHoveredWork}/>
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
                        const workTags = ['ixd', 'cabin', 'cocktail', 'ghibli', 'bbh', 'street', 'unshackle', 'kris', 'travelbig', 'lounge'];
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

