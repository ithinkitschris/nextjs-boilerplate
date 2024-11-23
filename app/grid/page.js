
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import PhotographyPage from '../components/photography';
import Ghibli from '../works/ghibli/page';
import CabinCrewStories from '../works/cabin/page.js';
import Cocktail from '../works/cocktail/page';
import BestWorkPage from '../bestwork/page';
import BestWorkPage2 from '../bestwork2/page';
import Resume from '../resume/page';
import StreetPhotography from '../components/street-photo';
import BBH from '../components/bbh';
import Unshackle from '../components/unshackle'
import BTS from '../components/bts'

const scaleIn ={
  hidden: {opacity:0, scale:0.90},
  show: {
      opacity:1, scale:1, 
      transition: {staggerChildren: 0.1, duration:0.35, ease:"easeOut"},
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
      transition: {staggerChildren: 0.05, duration:0.1, ease:"easeOut"},
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

const skillContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      //when: "beforeChildren",
      staggerChildren: 0.03, // Stagger the children
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

const VideoSquare = ({ videoSrc, tags, setHoveredWork, onClick, title, subheader, role }) => {
  return (
    <motion.div
      className="overflow-hidden bg-background drop-shadow-lg rounded-lg ease-in-out hover:scale-98 hover:drop-shadow-md cursor-pointer group-hover:z-50"
      initial="hidden"
      animate="show"
      whileHover={{scale:0.98}}
      exit="fade"
      variants={scaleIn}
      onMouseEnter={() => {setHoveredWork(tags[0]); console.log(tags)}}
      onMouseLeave={() => setHoveredWork(null)}
      onClick={onClick}>

          {/* Title */}
          <div className="pt-[100%] group relative">

            {/* Text Container */}
            <div className="absolute inset-0 flex flex-col items-start justify-between p-3 md:p-6 gap-4">

              {/* Title of work */}
              <h1 className="text-3xl md:text-5xl tracking-tight font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 w-3/4 mix-blend-screen leading-tighter md:leading-11">
                {title}
              </h1>

              {/* Work Details Container */}
              <div className="z-50 flex flex-row justify-between">

                {/* Subheader */}
                <h3 className="z-50 text-white font-medium tracking-tight text-base opacity-0 group-hover:opacity-100
                transition-all duration-300 leading-5 w-1/2">
                {subheader}
                </h3>

                {/* Role */}
                <h3 className="z-50 text-white tracking-tight text-xs opacity-0 group-hover:opacity-100
                transition-all duration-300 leading-5 w-1/2">
                {role}
                </h3>
              </div>
            </div>
      
            {/* Corner Arrow */}
            <button className="absolute top-2 right-2 z-20 p-0 m-1 scale-100
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

            {/* Gradient */}
            {/* <div className="absolute inset-0 z-10 h-2/3 bg-gradient-to-b from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blend-multiply">
            </div> */}

            {/* Video */}
            <video
              className="absolute scale-102 inset-0 w-full h-full object-cover blur-none 
              md:group-hover:blur-xl group-hover:opacity-80 transition-all duration-200"
              autoPlay muted loop playsInline>
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
      
    </motion.div>
  );
};

const GridPage = () => {
  const videoData = [
    { src: '/ghibli/cover1.mp4', title:'The World of Studio Ghibli', subheader:'Marketing Campaign for ArtScience Museum', role:'Creative Direction | Motion Design | Visual Design', tags: ['ghibli', 'all', 'creative', 'asm', 'motion', 'graphic', 'best'] },
    { src: '/CCS/cover1.mp4', title:'Beyond the Cabin', subheader:'Brand Campaign for Singapore Airlines', role:'Creative Direction | Motion Design | Visual Design', tags: ['cabin', 'all', 'creative', 'sia', 'motion','graphic', 'best'] },
    { src: '/cocktail/cover1.mp4', title:'Cocktail Conversations', subheader:'Brand Campaign for Singapore Airlines', role:' Creative Direction | Motion Design', tags: ['cocktail', 'all', 'creative', 'sia', 'motion','graphic', 'best'] },
    { src: '/kris/cover1.mp4', title:'Kris+ Brand Campaign', subheader:'Brand Campaign for Singapore Airlines', role:'Creative Direction', tags: ['kris', 'all', 'creative', 'sia'] },
    { src: '/travelbig/cover.mp4', title:'Travel Like Never Before', subheader:'Brand Campaign for Singapore Airlines', role:'Creative Direction', tags: ['travelbig', 'all', 'creative', 'sia'] },
    { src: '/lounge/cover.mp4', title:'SilverKris Lounge', subheader:'Brand Campaign for Singapore Airlines', role:'Creative Direction | Motion Design | Visual Design | Video Edit', tags: ['lounge', 'all', 'creative', 'sia', 'edit', 'motion', 'graphic'] },
    { src: '/hemsaker/cover.mp4', title:'Oops Happens', subheader:'Product Campaign for IKEA', role:'Creative Direction', tags: ['hemsaker', 'all', 'creative', 'Ikea'] },
    { src: '/ispy/cover.mp4', title:'I Spy in The Sky...', subheader:'Social Content for Singapore Airlines', role:'Creative Direction', tags: ['ispy', 'all', 'creative', 'sia'] },
    { src: '/jollieverafter/cover.mp4', title:'JolliEverAfter', subheader:'Social Media Campaign for Jollibee', role:'Motion Design | Video Edit', tags: ['jolli', 'all', 'motion', 'edit', 'best'] },
    { src: '/photography/bbh/cover.mp4', title:'BBH Profile Headshots', subheader:'Portrait Series', role:'Art Direction | Photography', tags: ['bbh', 'all', 'photography'] },
    { src: '/oneshow/cover.mp4', title:'TBWA One Show Shortlists', subheader:'Social Media Post', role:'Art Direction | 3D Motion Design', tags: ['oneshow', 'all', 'motion', 'oneshow'] },
    { src: '/leica/leica.mp4', title:'Leica M10-P', subheader:'Personal Explorations', role:'3D Motion Design', tags: ['leica', 'all', 'motion'] },
    { src: '/iphone/iphone.mp4', title:'iPhone 15 Pro', subheader:'Personal Explorations', role:'3D Motion Design', tags: ['iphone', 'all', 'motion'] },
    
    
  ];

const [selectedTags, setSelectedTags] = useState(['all']);
const [selectedWork, setSelectedWork] = useState('');
const [showNav, setShowNav] = useState(false);
const [showReset, setShowReset] = useState(false);
const [hoveredWork, setHoveredWork] = useState(null);


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
    setSelectedTags([]); // Clear all tags
  } else {
    setSelectedTags([tag]); // Ensure selectedTags is always an array
  }
};



const toggleWork = (work) => {
  if (work === 'clear') {
    setSelectedWork([]);
    //setSelectedWork(['all']);
  } else {
    setSelectedWork(work);
  }
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
      {/* Entire Page column setup */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-9 mt-12
        px-3 sm:px-4 2xl:px-6 text-sm max-w-9xl font-[family-name:var(--font-geist-sans)] w-screen mx-auto">
          

          {/* Top Navbar */}
          <div className="col-span-full fixed top-2 z-40 mb-4 text-sm lg:text-base font-medium w-screen pr-6">

            {/* SideNav Button */}
            <motion.button 
              className="absolute text-foreground border-1 p-1 rounded-full border-foreground flex items-center justify-center pl-2 pr-1.5 pt-1.5 
              hover:bg-foreground hover:text-background transition-colors duration-100 z-50 right-5 md:right-auto md:left-0.5"
              whileHover={{ scale: 0.9 }}
              variants={animateInChild}
              layout="position"
              onClick={toggleNav}>

                {/* Example of an SVG icon */}
                <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5">
                  <path d={`${showNav ? 'M0 10h20' : 'M5 10h10'}`}
                  className='transition-all duration-200'/>
                  <path d={`${showNav ? 'M0 15h20' : 'M5 15h10'}`}
                  className='transition-all duration-300'/>
                  <path d={`${showNav ? 'M0 5h20' : 'M5 5h10'}`}
                  className='transition-all duration-100'/>
                </svg>
              </motion.button>

              <motion.div
              className="flex flex-row justify-center md:justify-start md:pl-20 md:mr-0 gap-6 md:gap-10 mix-blend-difference text-white"
              initial="hidden"
              animate="show"
              layout="position"
              variants={animateIn}
              transition={{ duration: 0.5 }}> 

                {/* Resume Button */}
                <motion.button
                  className={`hover:text-background dark:hover:text-white tracking-tight rounded-full px-3 py-1 border-1 border-black/0 dark:hover:bg-transparent 
                    hover:border-black hover:bg-foreground dark:border-white/0 dark:hover:border-white/100 transition-colors duration-300 whitespace-nowrap
                    ${selectedWork.includes('resume') 
                      ? ' border-black/100 dark:border-white/100 text-foreground' 
                      : ' text-[rgba(0,0,0,0.3)] dark:text-[rgba(255,255,255,0.5)] '
                    }`}
                  whileHover={{ scale: 0.94 }}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('resume');
                    setSelectedTags(['']);
                  }}
                    >
                  <span className="hidden md:block">Who am I?</span>
                  <span className="block md:hidden">Who am I?</span>
                </motion.button>

                {/* All Button */}
                <motion.button 
                className={`hover:text-background dark:hover:text-white tracking-tight rounded-full px-3 border-1 border-black/0 dark:hover:bg-transparent 
                    hover:border-black hover:bg-foreground dark:border-white/0 dark:hover:border-white/100 transition-colors duration-300 whitespace-nowrap
                  ${selectedTags.includes('all') 
                    ? ' border-black/100 dark:border-white/100 text-foreground' 
                    : ' text-[rgba(0,0,0,0.3)] dark:text-[rgba(255,255,255,0.5)] dark:hover:text-foreground'
                  }`}
                whileHover={{scale:1.03}}
                variants={animateInChild}
                layout="position"
                onClick={() => {
                  toggleTag('clear');
                  toggleWork('clear');
                  setSelectedTags(['all']);

                  // Check if the screen width is below the `sm` breakpoint
                  if (window.matchMedia('(max-width: 640px)').matches) {
                    setShowNav(true);
                    }
                  }}>

                  <span className="hidden md:block">Here's everything that I've got.</span>
                  <span className="block md:hidden">All Work</span>
                  
                </motion.button>

                {/* Best Button */}
                <motion.button 
                  className={`hover:text-background dark:hover:text-white tracking-tight rounded-full px-3 border-1 border-black/0 dark:hover:bg-transparent 
                    hover:border-black hover:bg-foreground dark:border-white/0 dark:hover:border-white/100 transition-colors duration-300 whitespace-nowrap
                    ${selectedWork.includes('bestwork') 
                      ? ' border-black/100 dark:border-white/100 text-foreground' 
                      : ' text-[rgba(0,0,0,0.3)] dark:text-[rgba(255,255,255,0.5)] dark:hover:text-foreground'
                    }`}
                  whileHover={{ scale: 1.03 }}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('bestwork');
                    setSelectedTags(['']);}}>

                  <span className="hidden md:block">These are my personal favourites</span>
                  <span className="block md:hidden">Favourites</span>

                </motion.button>

              </motion.div>
          </div>  

          {/* Top Navbar BG */}
          <motion.div
            className={`fixed backdrop-blur-md left-0 top-0 w-full shadow-[0px_0px_15px_-8px_rgba(0,0,0,0.2)] z-20
              border-white/20 dark:border-white/10
              ${showNav ? (showReset ? "h-48 border-b-1 backdrop-brightness-90" : "h-36 border-b-2 backdrop-brightness-90") : "h-12"}`}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          ></motion.div>


          {/* Side Navbar */}
          <motion.div
            className={`${showNav ? "col-span-1 flex flex-col tracking-tight " : "opacity-0 pointer-events-none"}
            relative transition-opacity duration-300`} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            variants={animateInChild}>

            {showNav && (
              <>
                {/* Mobile Container */}
                <div className="md:hidden flex flex-col gap-4 items-center justify-between z-20 fixed w-screen font-medium ">
                  {/* <motion.h1
                    className="text-4xl font-medium tracking-tighter mt-1.5 text-center text-foreground sm:hidden -ml-1"
                    initial={{ opacity: 0, y:-20 }} 
                      animate={{ opacity: 1, y:0 }}  
                      transition={{
                        type: "spring",
                        stiffness: 500, 
                        damping: 15, 
                        }} 
                    layout="position">
                      Skillsets
                  </motion.h1> */}

                  {/* Mobile Reset Button */}
                  <motion.div 
                  className={`z-50 ${showReset ? "mt-2" : "-mt-5"}`}>
                  {showReset && (
                    <motion.button
                      className="group font-medium flex gap-1.5
                      -ml-1 pt-1 pb-1 pr-2 pl-2.5 -mb-4 mr-5
                      items-center text-white 
                      rounded-full border-1 border-white"
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
                        className="w-4 h-4"
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

                  {/* Mobile Skillsets Container */}    
                  <motion.div 
                  className="flex-wrap grid grid-cols-3 gap-4 justify-between z-30 mt-6 w-full pl-5 md:hidden"
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

                    <motion.button 
                    className={`text-center w-32 mix-blend-difference text-white
                      ${selectedTags.includes('creative') ? 'rounded-full border-1 border-white py-0.5' 
                        : 'text-black dark:text-white dark:hover:text-foreground'}`}
                    whileHover={{scale:1.06}}
                    animate={{scale: selectedTags.includes('creative') ? 1.06 : 1}}
                    variants={animateInChild}
                    layout="position"
                    onClick={() => {
                      toggleTag('creative');
                      toggleWork('clear');}}>Creative Direction</motion.button>

                    <motion.button 
                    className={`text-center w-28 mix-blend-difference text-white
                      ${selectedTags.includes('motion') ? 'rounded-full border-1 border-white py-0.5' 
                        : 'text-black dark:text-white dark:hover:text-foreground'}`}
                    whileHover={{scale:1.06}}
                    animate={{scale: selectedTags.includes('motion') ? 1.06 : 1}}
                    variants={animateInChild}
                    layout="position"
                    onClick={() => {
                      toggleTag('motion');
                      toggleWork('clear');}}>Motion Design</motion.button>

                    <motion.button 
                    className={`text-center w-28 mix-blend-difference text-white -ml-4
                      ${selectedTags.includes('edit') ? 'rounded-full border-1 border-white py-0.5' 
                        : 'text-black dark:text-white dark:hover:text-foreground'}`}
                    whileHover={{scale:1.06}}
                    animate={{scale: selectedTags.includes('edit') ? 1.06 : 1}}
                    variants={animateInChild}
                    layout="position"  
                    onClick={() => {
                      toggleTag('edit');
                      toggleWork('clear');}}>Video Editing</motion.button>

                    <motion.button 
                    className={`text-center w-32 mix-blend-difference text-white
                      ${selectedTags.includes('ixd') ? 'rounded-full border-1 border-white py-0.5' 
                        : 'text-black dark:text-white dark:hover:text-foreground'}`}
                    whileHover={{scale:1.06}}
                    animate={{scale: selectedTags.includes('ixd') ? 1.06 : 1}}
                    variants={animateInChild}
                    layout="position"
                    onClick={() => {
                      toggleTag('ixd');
                      toggleWork('clear');}}>Interaction Design</motion.button>

                    <motion.button 
                    className={`text-center w-28 mix-blend-difference text-white
                      ${selectedWork.includes('photography') ? 'rounded-full border-1 border-white py-0.5' 
                        : 'text-black dark:text-white dark:hover:text-foreground'}`}
                    whileHover={{scale:1.06}}
                    animate={{scale: includesWorks(['photography', 'street', 'bbh', 'bts', 'unshackle']) ? 1.06 : 1}}
                    variants={animateInChild}
                    layout="position"      
                    onClick={() => {
                      toggleTag('clear');
                      toggleWork('photography');
                      }}>Photography</motion.button>
                      

                    <motion.button 
                    className={`text-center w-32 mix-blend-difference text-white -ml-6
                      ${selectedTags.includes('content') ? 'rounded-full border-1 border-white py-0.5' 
                        : 'text-black dark:text-white dark:hover:text-foreground'}`}
                    whileHover={{scale:1.06}}
                    animate={{scale: selectedTags.includes('content') ? 1.06 : 1}}
                    variants={animateInChild}
                    layout="position"
                    onClick={() => {
                      toggleTag('content');
                      toggleWork('clear');}}>Content Creation</motion.button>
                  </motion.div>
                </div>

                {/* Reset Button */}
                <motion.div 
                  className="sticky top-14 mt-4 z-50 hidden md:block">
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

                {/* Skillsets */}    
                <motion.div 
                className="flex-wrap grid grid-cols-3 sm:grid-cols-1 sm:flex-col gap-2 sm:gap-1 mt-4 dark:text-neutral-500 relative hidden md:flex"
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

                  {/* HIDDEN ON MOBILE */}
                  <motion.h1
                  className="text-xl font-medium tracking-tighter mb-4 text-foreground hidden sm:block"
                  variants={animateInChild}
                  layout="position">
                    Skillsets
                  </motion.h1>

                  <motion.button 
                  className={`hover:text-foreground text-center sm:text-left md:mr-8
                    ${selectedTags.includes('creative') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                  whileHover={{scale:1.06}}
                  animate={{scale: selectedTags.includes('creative') ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('creative');
                    toggleWork('clear');}}>Creative Direction</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-center sm:text-left md:mr-8
                    ${selectedTags.includes('motion') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                  whileHover={{scale:1.06}}
                  animate={{scale: selectedTags.includes('motion') ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('motion');
                    toggleWork('clear');}}>Motion Design</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-center sm:text-left md:mr-8
                    ${selectedTags.includes('edit') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                  whileHover={{scale:1.06}}
                  animate={{scale: selectedTags.includes('edit') ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"  
                  onClick={() => {
                    toggleTag('edit');
                    toggleWork('clear');}}>Video Editing</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-center sm:text-left md:mr-8
                    ${selectedTags.includes('ixd') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                  whileHover={{scale:1.06}}
                  animate={{scale: selectedTags.includes('ixd') ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('ixd');
                    toggleWork('clear');}}>Interaction Design</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-center sm:text-left md:mr-8
                    ${selectedWork.includes('photography') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                  whileHover={{scale:1.06}}
                  animate={{scale: includesWorks(['photography', 'street', 'bbh', 'bts', 'unshackle']) ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"      
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('photography');
                    }}>Photography</motion.button>
                    

                  <motion.button 
                  className={`hover:text-foreground text-center sm:text-left md:mr-8
                    ${selectedTags.includes('content') ? 'rounded-full border-1 border-foreground py-0.5 sm:py-0 sm:border-0' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                  whileHover={{scale:1.06}}
                  animate={{scale: selectedTags.includes('content') ? 1.06 : 1}}
                  variants={animateInChild}
                  layout="position"
                  onClick={() => {
                    toggleTag('content');
                    toggleWork('clear');}}>Content Creation</motion.button>
                </motion.div>

                {/* All Work */}
                <motion.div
                className={`hidden sm:flex flex-col items-start gap-1 mt-12 dark:text-neutral-500 sticky z-10 ${showReset ? "top-28" : "top-16"}`}
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
                  className={`text-xs tracking-tight transition-color" ${selectedTags.includes('all') ? 'text-foreground' : 'text-midground'}`}
                  variants={animateInChild}>
                    2024
                  </motion.h1>

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
                    ${includesTags(['creative', 'motion']) || hoveredWork ==='kris' 
                      ? 'text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                    } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['creative', 'motion']) ||
                    hoveredWork==='kris' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>Kris+ Brand Campaign</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['creative']) || hoveredWork ==='ispy' 
                      ? 'text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                    } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['creative']) ||
                    hoveredWork==='ispy' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>I Spy in the Sky</motion.button>

                  <motion.h1
                  className={`text-xs mt-5 tracking-tight transition-color" ${selectedTags.includes('all') ? 'text-foreground' : 'text-midground'}`}
                  variants={animateInChild}>
                    2022
                  </motion.h1>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['creative', 'motion']) || hoveredWork ==='travelbig' 
                      ? 'text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                    } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['creative', 'motion']) ||
                    hoveredWork==='travelbig' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>Travel Like Never Before</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['creative', 'motion', 'edit', 'graphic']) || hoveredWork ==='lounge' 
                      ? 'text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                    } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['creative', 'motion', 'edit', 'graphic']) ||
                    hoveredWork==='lounge' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>SilverKris Lounge</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['creative']) || hoveredWork ==='hemsaker' 
                      ? 'text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                    } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['creative']) ||
                    hoveredWork==='hemsaker' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>Oops Happens</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion']) || hoveredWork ==='oneshow' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion']) ||
                    hoveredWork==='oneshow' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>TBWA One Show Shortlist</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion']) || hoveredWork ==='bybit' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion']) ||
                    hoveredWork==='bybit' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>ByBit Moon Pillow</motion.button>


                  <motion.h1
                  className={`text-xs mt-5 tracking-tight transition-color" ${selectedTags.includes('all') ? 'text-foreground' : 'text-midground'}`}
                  variants={animateInChild}>
                    2021
                  </motion.h1>


                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion', 'edit','best']) || hoveredWork ==='jolli' 
                      ? 'text-foreground' 
                      : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                    } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion', 'edit','best']) || selectedTags.includes('edit') ||
                    hoveredWork==='jolli' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>JolliEverAfter</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion','edit']) || hoveredWork ==='virtualsentosa' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion', 'edit']) ||
                    hoveredWork==='virtualsentosa' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>Virtual Sentosa</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion','edit']) || hoveredWork ==='samsung' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion','edit']) ||
                    hoveredWork==='samsung' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>Samsung Lifestyle Displays</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion','edit']) || hoveredWork ==='sentosa' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion','edit']) ||
                    hoveredWork==='sentosa' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>Sentosa Island</motion.button>

                  <motion.h1
                  className={`text-xs mt-5 tracking-tight transition-color" ${selectedTags.includes('all') ? 'text-foreground' : 'text-midground'}`}
                  variants={animateInChild}>
                    2019
                  </motion.h1>
                  

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion','edit']) || hoveredWork ==='nike' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion','edit']) ||
                    hoveredWork==='nike' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>Nike Athlete Stories: Koy & Toon</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesWorks(['bbh']) || hoveredWork ==='bbh' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesWorks(['bbh']) ||
                    hoveredWork==='bbh' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    setSelectedWork('bbh')}}>BBH Profile Headshots</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion']) || hoveredWork ==='uniqlo2' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion']) ||
                    hoveredWork==='uniqlo2' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>New Style Fresh Start</motion.button>

                  <motion.h1
                  className={`text-xs mt-6 tracking-tight transition-color " ${selectedTags.includes('all') ? 'text-foreground' : 'text-midground'}`}
                  variants={animateInChild}>
                    2017
                  </motion.h1>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion', 'graphic']) || hoveredWork ==='uniqlo1' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion', 'graphic']) ||
                    hoveredWork==='uniqlo1' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => toggleTag('motion', 'graphic')}>Your Stage Now Live</motion.button>

                  <motion.h1
                  className={`text-xs mt-5 tracking-tight transition-color" ${selectedTags.includes('all') ? 'text-foreground' : 'text-midground'}`}
                  variants={animateInChild}>
                    Personal
                  </motion.h1>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion']) || hoveredWork ==='iphone12' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion']) ||
                    hoveredWork==='iphone12' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>iPhone 12 Pro</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion']) || hoveredWork ==='iphone' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion']) ||
                    hoveredWork==='iphone' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>iPhone 15 Pro</motion.button>

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion']) || hoveredWork ==='leica' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion']) ||
                    hoveredWork==='leica' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => toggleTag('Photography')}>Leica M10-P</motion.button>

              

                  <motion.button 
                  className={`hover:text-foreground text-left mr-8
                    ${includesTags(['motion']) || hoveredWork ==='3d' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                  whileHover={{scale:1.06}}
                  animate={{scale: 
                    includesTags(['motion']) ||
                    hoveredWork==='3d' 
                    ? 1.02 : 1
                  }}
                  variants={animateInChild}
                  onClick={() => {
                    toggleTag('clear');
                    toggleWork('cabin')}}>3D Motion Exploration</motion.button>
                </motion.div>
              </>
            )} 
          </motion.div>

          {/* Pages Container */}
          <motion.div
            className={`${showNav ? "col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 2xl:col-span-8" : "col-span-full"}`}  //shadow-mild rounded-2xl -mr-2 mt-4 pt-2 pb-6 px-6 dark:shadow-none  
            layout="position"
            layoutId='test'
            transition={{ type: "spring", stiffness: 400, damping: 24 }}  
          > 
            {/* Grid / Page */}
            <motion.div 
            className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 col-span-full gap-1.5 mt-6 md:mt-4">
              <AnimatePresence>
                {selectedWork === 'photography' ? (
                  <PhotographyPage key="photography" className="col-span-full -mt-22" setSelectedWork={setSelectedWork}/>
                ) : selectedWork === 'street' ? (
                  <StreetPhotography key="street" className="col-span-full"/>
                ) : selectedWork === 'bbh' ? (
                  <BBH key="bbh" className="col-span-full"/>
                ) : selectedWork === 'unshackle' ? (
                  <Unshackle key="unshackle" className="col-span-full"/>
                ) : selectedWork === 'bts' ? (
                  <BTS key="bts" className="col-span-full"/>
                ) : selectedWork === 'resume' ? (
                  <Resume key="resume" className="col-span-full"/>
                ) : selectedWork === 'ghibli' ? (
                  <Ghibli key="ghibli" className="col-span-full"/>
                ) : selectedWork === 'cabin' ? (
                  <CabinCrewStories key="cabin" className="col-span-full"/>
                ) : selectedWork === 'cocktail' ? (
                  <Cocktail key="cocktail" className="col-span-full"/>
                ) : selectedWork === 'bestwork' ? (
                  <BestWorkPage key="bestwork" className="col-span-full" setSelectedWork={setSelectedWork} setHoveredWork={setHoveredWork}/>
                ) : (
                  filteredVideos.map((video) => (
                    <VideoSquare
                      key={video.src}
                      videoSrc={video.src}
                      title={video.title}
                      subheader={video.subheader}
                      role={video.role}
                      link={video.link}
                      tags={video.tags}
                      setHoveredWork={setHoveredWork}
                      onClick={() => { 
                        const workTags = ['cabin', 'cocktail', 'ghibli', 'bbh'];
                        const matchedWork = workTags.find((tag) => video.tags.includes(tag));
                        if (matchedWork) {
                          setSelectedWork(matchedWork);
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
  
};

export default GridPage;