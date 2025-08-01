'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
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
import ShotOnIphone from './components/shotoniphone.js';
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
import { useHideNav } from './context/HideNavContext';



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

  const isMobileDevice = () => {
    return typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches;
  };

  const VideoSquare = ({ videoSrc, tags, onClick, title, subheader, selectedTags, poster }) => {

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
        <motion.div className={`group relative overflow-hidden rounded-3xl pt-[150%]
        shadow-[3px_3px_15px_rgba(0,0,0,0.2)] group-hover:shadow-none border-b-0 border-white/20
        after:absolute after:inset-0 after:z-20 after:pointer-events-none after:rounded-2xl md:after:rounded-3xl after:shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.15)]
          
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

          {/* Text Container */}
          <div className="absolute inset-0 md:inset-2.5 flex flex-col items-start justify-end pb-2.5 p-3 pl-3.5 w-full mb-1">

            {/* Title */}
            <h1
              className="tracking-tight font-medium z-30 w-[80%] text-xl 2xl:text-2xl leading-5 2xl:leading-6 mb-1.5 text-white">
              {title}
            </h1>

            {/* Subheader */}
            <h3 
              className={`tracking-tight z-30 w-[95%] text-[6pt] md:text-[8pt] 2xl:text-[9pt] 2xl:w-3/4 leading-tight opacity-60 mix-blend-screen text-white`}>
                {subheader}
            </h3>
          </div>
          
          {/* Bottom Gradient Blur */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[60%] md:h-[50%] z-10 pointer-events-none backdrop-blur-[100px] saturate-150 brightness-110 -mb-[0.5px]"
            style={{
              maskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 100%)'
            }}
          />

          {/* Video */}
          <Video
            videoId={`grid-${videoSrc}`}
            src={videoSrc}
            className={`absolute inset-0 w-full h-full object-cover rounded-2xl 
              after:absolute after:inset-0 after:z-20 after:pointer-events-none after:rounded-2xl after:shadow-[inset_0px_0px_3px_0px_rgba(255,255,255,0.2)]
            `}
            style={{ clipPath: 'inset(0 round 0.5rem)' }}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            loading="lazy"
            
          />
          
        </motion.div>

      </motion.div>
    );
  };

  // URL Helper Functions for Deep Linking
  const createURL = (work, tags) => {
    const params = new URLSearchParams();
    if (work && work !== 'resume') params.set('work', work);
    if (tags && tags.length > 0) params.set('tags', tags.join(','));
    
    const paramString = params.toString();
    return paramString ? `?${paramString}` : '';
  };

  const parseURL = (searchParams) => {
    const work = searchParams.get('work') || 'resume';
    const tags = searchParams.get('tags')?.split(',').filter(Boolean) || [];
    
    return { work, tags };
  };

// Main content component that uses useSearchParams
function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { browserType } = useBrowser();
  const { hideNav, randomRotation, toggleHideNav } = useHideNav();

  const videoData = [
    { src: '/subway/coverportrait.mp4', title:'Enhanced Subway Navigation with Apple Maps', subheader:'An exercise in UX, UI design and potential thesis topic.', poster:'/poster/subwayportrait.jpg', tags: ['subway', 'all', 'product'] },
    { src: '/currently/car.mp4', title:'Human (Car)mputer Interaction', subheader:'A deep dive into the Human Computer Interaction of the automobile.', poster:'/poster/car.png', tags: ['car', 'all', 'product'] },
    { src: '/website/cover.mp4', title:'This website, literally.', subheader:'UI Design + Web Development', poster:'/poster/website.png', tags: ['website', 'all', 'product'] },
    { src: '/Ghibli/banner1.mp4', title:'The World of Studio Ghibli', subheader:'Marketing Campaign for ArtScience Museum', poster:'/poster/ghibli.jpeg', tags: ['ghibli', 'all', 'creative', 'asm', 'graphic', 'best'] },
    { src: '/CCS/bestworkmontage.mp4', title:'Beyond the Cabin', subheader:'Brand Campaign for Singapore Airlines', poster:'/poster/cabinbest.jpg', tags: ['cabin', 'all', 'creative', 'sia', 'motion','graphic', 'best'] },
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
    { src: '/photography/iphone/cover.mp4', title:'#shotoniPhone', subheader:'Personal Photography', poster:'', tags: ['shotoniphone', 'all', 'photography'] },
    { src: '/Photography/bbh/cover.mp4', title:'BBH Profile Headshots', subheader:'Portrait series', poster:'', tags: ['bbh', 'all', 'photography'] },
    { src: '/oneshow/cover.mp4', title:'TBWA One Show Shortlists', subheader:'Social media post', poster:'/poster/oneshow.jpeg', tags: ['oneshow', 'all', 'motion'] },
    { src: '/iphone/intro.mp4', title:'iPhone 15 Pro', subheader:'Personal explorations', poster:'/poster/iphone15.jpeg', tags: ['iphone', 'all', 'motion'] },
    { src: '/leica/leica.mp4', title:'Leica M-10P', subheader:'3D Motion Design', poster:'/poster/leica.jpeg', tags: ['leica', 'all', 'motion'] },

     
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedWork, setSelectedWork] = useState('');
  const [showNav, setShowNav] = useState(false);
  const [setShowWork] = useState(false);

  // Skillset data for navbar
  const skillsetData = [
    { tag: 'creative', label: 'Creative', work: 'clear' },
    { tag: 'product', label: 'Product', work: 'clear' },
    { tag: 'motion', label: 'Motion', work: 'clear' },
    { tag: 'edit', label: 'Edit', work: 'clear' },
                            { tag: 'photography', label: 'Photo', work: 'clear' },
    { tag: 'content', label: 'Content', work: 'clear' }
  ];

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

  // Keyboard event listener for Tab key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Tab') {
        event.preventDefault(); // Prevent default tab behavior
        toggleHideNav();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hideNav]); // Include hideNav in dependencies since toggleHideNav uses it



  useEffect(() => {
    if (isMobile) {
      setSelectedTags('');
      setSelectedWork('resume');
    } else {
      setSelectedTags('');
      setSelectedWork('resume');
    }
  }, [isMobile]);

  // NEW: Read URL and set initial state
  useEffect(() => {
    const { work, tags } = parseURL(searchParams);
    setSelectedWork(work);
    setSelectedTags(tags);
  }, [searchParams]);

  const toggleTag = (tag) => {
    let newTags;
    
    if (tag === 'clear') {
      newTags = [];
      setSelectedWork('resume');
    } else {
      newTags = [tag];
      setSelectedWork(''); // Clear selected work when filtering by tag
    }
    
    setSelectedTags(newTags);
    
    // NEW: Update URL
    const work = tag === 'clear' ? 'resume' : '';
    const newURL = createURL(work, newTags);
    router.push(pathname + newURL);
  };

  // Function to get tags for a selected work
  const getWorkTags = (work) => {
    const workVideo = videoData.find(video => {
      const workTags = ['website', 'cabin', 'cocktail', 'ghibli', 'bbh', 'street', 'shotoniphone', 'kris', 'iphone', '3d', 'car', 'subway',
      'travelbig', 'lounge', 'hemsaker', 'ispy', 'jolli', 'uniqlo1', 'uniqlo2', 'oneshow', 'samsung', 'leica', 
      'nike', 'film'];
      return workTags.includes(work) && video.tags.includes(work);
    });
    return workVideo ? workVideo.tags.filter(tag => ['creative', 'product', 'motion', 'edit', 'photography', 'content'].includes(tag)) : [];
  };

  const toggleWork = (work) => {
    if (work === 'clear') {
      setSelectedWork('resume');
      setSelectedTags([]);
      // Update URL to clean state
      router.push(pathname);
    } else {
      setSelectedWork(work);
      // Set tags based on the selected work
      const workTags = getWorkTags(work);
      setSelectedTags(workTags);
      
      // NEW: Update URL
      const newURL = createURL(work, workTags);
      router.push(pathname + newURL);
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
            
              {/* MOBILE Dropdown Button */}
              <motion.button 
                className={`
                  fixed md:absolute p-2 rounded-full md:hidden
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

              {/* DESKTOP Navbar Container */}
              <motion.div
                className="hidden md:flex items-center justify-center non-chromium-ml w-full z-50"
                initial="hidden"
                animate="show"
                variants={animateIn}
              >
                
                {/* Navbar Background with Buttons */}
                <motion.div
                  className={`rounded-full flex items-center justify-center gap-2 
                  h-[47px] dark:bg-transparent brightness-[100%]
                  saturate-100 border border-white/35
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
                  animate={{ width: showNav ? '602px' : '157px' }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 27.5
                  }}
                >

                {/* Button Container - Centers when closed, left-aligned when open */}
                  <motion.div
                    layout
                    className={`flex gap-2 w-full relative ${showNav ? 'ml-2' : 'ml-4'}`}
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
                        font-semibold tracking-[-0.2pt] whitespace-nowrap text-sm lg:text-[15px]
                        text-white mix-blend-difference dark:mix-blend-normal
                        transition-colors duration-200
                        hover:text-background hover:bg-foreground hover:text-white hover:mix-blend-normal
                        dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
                        
                        ${showNav 
                          ? 'border-transparent' 
                          : selectedWork.includes('resume') 
                            ? '' 
                            : 'border-transparent'
                        }
                      `}
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
                        font-semibold tracking-[-0.2pt] whitespace-nowrap
                        mix-blend-difference dark:mix-blend-normal
                        transition-colors duration-200
                        hover:text-background hover:bg-foreground hover:text-white hover:mix-blend-normal
                        dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
                        ${showNav ? '' : 'text-white dark:hover:text-white dark:hover:bg-transparent'}
                        ${selectedTags.includes('all')
                          ? '' 
                          : 'border-transparent'
                        }
                        `}
                        whileHover={{ scale: 0.95 }}
                        onClick={() => {
                          if (!showNav) {
                            toggleNav(true);
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
                        damping: 10
                      }}
                    >
                      {skillsetData.map(({ tag, label, work }, index) => (
                        <motion.button 
                          key={tag}
                          className={`rounded-full px-3 py-[3px] border-1.5 text-sm lg:text-[15px]
                          font-semibold tracking-[-0.2pt] whitespace-nowrap text-white mix-blend-difference 
                          dark:mix-blend-normal transition-colors duration-200 hover:text-background 
                          hover:bg-foreground hover:text-white hover:mix-blend-normal hover:border-foreground
                          dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
                          ${selectedTags.includes(tag) || (tag === 'photography' && selectedWork === 'photography') || (tag === 'content' && selectedWork === 'content') ? 'border-foreground' : 'border-transparent'}`}
                          whileHover={{ scale: 0.98 }}
                          animate={{ 
                            x: showNav ? 0 : -30
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 600,
                            damping: 12,
                            delay: showNav ? index * 0 : 0
                          }}
                          onClick={() => {
                            if (work === 'clear') {
                              // For skillset filtering, just set the tag and clear selected work
                              toggleTag(tag);
                              setSelectedWork('');
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

          </motion.div>  

          {/* Mobile Home Button */}
          <motion.button
            className={`
              md:hidden fixed top-[1.2rem] left-[50%] -ml-[4.3rem] z-50
              rounded-full px-3 py-[3px] border-1.5 
              font-semibold tracking-[-0.2pt] whitespace-nowrap text-sm lg:text-[15px]
              text-white mix-blend-difference dark:mix-blend-normal
              transition-colors duration-200
              hover:text-background hover:bg-foreground hover:text-white hover:mix-blend-normal
              dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
              
              ${selectedWork === 'resume' 
                ? '' 
                : 'border-transparent'
              }
            `}
            onClick={() => {
              toggleWork('resume');
              setShowWork(false);
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

          {/* Mobile Work Button */}
          <motion.button 
            className={`
              md:hidden fixed top-[1.2rem] left-[50%] ml-1.5 z-50
              rounded-full px-3 py-[3px] border-1.5 text-sm lg:text-[15px]
              font-semibold tracking-[-0.2pt] whitespace-nowrap
              text-white mix-blend-difference dark:mix-blend-normal
              transition-colors duration-200
              hover:text-background hover:bg-foreground hover:text-white hover:mix-blend-normal
              dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
              ${selectedTags.length > 0 || (selectedWork && selectedWork !== '' && selectedWork !== 'resume')
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
            className={`${showNav ? "" : "opacity-0 pointer-events-none"}
            relative transition-opacity duration-300`} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            variants={animateInChildMobile}>

            {showNav && (
              <>
                
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
                      setSelectedWork('');}}><span className='hidden mr-1 opacity-35 text-xxs align-top'>01 </span>
                      Creative Direction</motion.button>

                    <motion.button 
                    className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('product');
                      toggleNav('false');
                      setSelectedWork('');}}><span className='hidden mr-1 opacity-35 text-xxs align-top'>01 </span>
                      Product Design</motion.button>

                    <motion.button 
                    className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('motion');
                      toggleNav('false');
                      setSelectedWork('');}}><span className='hidden mr-1 font-base opacity-35 text-xxs align-top'>02 </span>
                      Motion Design</motion.button>

                    <motion.button 
                    className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                    variants={animateInChildMobile}
                    onClick={() => {
                      toggleTag('edit');
                      toggleNav('false');
                      setSelectedWork('');}}><span className='hidden mr-1 font-base opacity-35 text-xxs align-top'>03 </span>
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
                  <NycSubway key="subway" className="col-span-full"/>
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
                        const workTags = 
                        ['website', 'cabin', 'cocktail', 'ghibli', 'bbh', 'street', 'shotoniphone', 'kris', 'iphone', '3d', 'car', 'subway',
                          'travelbig', 'lounge', 'hemsaker', 'ispy', 'jolli', 'uniqlo1', 'uniqlo2', 'oneshow', 'samsung', 'leica', 
                          'nike', 'film'];
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
      </VideoProvider>
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

