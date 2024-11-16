
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import PhotographyPage from '../components/photography';
import Ghibli from '../works/ghibli/page';
import CabinCrewStories from '../works/cabin/page';
import Cocktail from '../works/cocktail/page';
import BestWorkPage from '../bestwork/page';
import Resume from '../resume/page';

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

const VideoSquare = ({ videoSrc, link, tags, setHoveredWork, onClick }) => {
  return (
    <motion.div
      className="overflow-hidden bg-background drop-shadow-lg rounded-lg ease-in-out hover:scale-98 hover:drop-shadow-md"
      initial="hidden"
      animate="show"
      whileHover={{scale:0.98}}
      exit="fade"
      variants={scaleIn}
      onMouseEnter={() => {setHoveredWork(tags[0]); console.log(tags)}}
      onMouseLeave={() => setHoveredWork(null)}
      onClick={onClick}
    >
        
          <div className="pt-[100%]">
            <video
              className="absolute scale-102 inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
      
    </motion.div>
  );
};

const GridPage = () => {
  const videoData = [
    { src: '/ghibli/cover1.mp4', link: '/works/ghibli', tags: ['ghibli', 'all', 'creative', 'asm', 'motion', 'graphic', 'best'] },
    { src: '/CCS/cover1.mp4', link: '/works/cabin', tags: ['cabin', 'all', 'creative', 'sia', 'motion','graphic', 'best'] },
    { src: '/cocktail/cover1.mp4', link: '/works/cocktail', tags: ['cocktail', 'all', 'creative', 'sia', 'motion','graphic', 'best'] },
    { src: '/kris/cover1.mp4', link: '/works/kris', tags: ['kris', 'all', 'creative', 'sia'] },
    { src: '/travelbig/cover.mp4', link: '/works/travelbig', tags: ['travelbig', 'all', 'creative', 'sia'] },
    { src: '/lounge/cover.mp4', link: '/works/lounge', tags: ['lounge', 'all', 'creative', 'sia', 'edit', 'motion', 'graphic'] },
    { src: '/hemsaker/cover.mp4', link: '/works/hemsaker', tags: ['hemsaker', 'all', 'creative', 'Ikea'] },
    { src: '/ispy/cover.mp4', link: '/works/ispy', tags: ['ispy', 'all', 'creative', 'sia'] },
    { src: '/jollieverafter/cover.mp4', link: '/works/jollieverafter', tags: ['jolli', 'all', 'motion', 'edit', 'best'] },
    { src: '/oneshow/cover.mp4', link: '/works/oneshow', tags: ['oneshow', 'all', 'motion', 'oneshow'] },
    { src: '/leica/leica.mp4', link: '/works/leica', tags: ['leica', 'all', 'motion'] },
    { src: '/iphone/iphone.mp4', link: '/works/iphone', tags: ['iphone', 'all', 'motion'] },
    
    
  ];

const [selectedTags, setSelectedTags] = useState(['all']);
const [selectedWork, setSelectedWork] = useState([]);
const [showNav, setShowNav] = useState(false);
const [hoveredWork, setHoveredWork] = useState(null);
const [moveUp, setMoveUp] = useState(false);

const includesTags = (tags) => {
  return tags.some((tag) => selectedTags.includes(tag));
};

const toggleTag = (tag) => {
  if (tag === 'clear') {
    setSelectedTags([]);
  } else {
    // Remove 'all' from the selectedTags array if it exists
    const updatedTags = selectedTags.filter((t) => t !== 'all');

    // Check if the tag is already in updatedTags
    if (updatedTags.includes(tag)) {
      // Remove the tag if it's already selected
      setSelectedTags(updatedTags.filter((t) => t !== tag));
    } else {
      // Add the tag if it's not selected
      setSelectedTags([...updatedTags, tag]);
    }
  }
};

const toggleWork = (work) => {
  if (work === 'clear') {
    setSelectedWork([])
    setSelectedWork(['all']);
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

const MoveUp = () => {
  if (moveUp) {
    setMoveUp(false);
  } else {
    setMoveUp(true);
  }
}

const filteredVideos = videoData.filter((video) => {
  if (selectedTags.includes('all')) return true;
  return selectedTags.some((tag) => video.tags.includes(tag));
});

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-9 
    px-6 text-sm 2xl:text-base max-w-9xl font-[family-name:var(--font-geist-sans)]">
     
      {/* Top Navbar
      <nav className="
        flex justify-center sm:justify-between sm:ml-4 2xl:ml-6 items-center z-10
        absolute top-0 left-0 right-0 p-2 mt-4 w-full
        tracking-tighter font-[family-name:var(--font-geist-sans)] text-base">
          <div className="flex gap-6 justify-center sm:justify-between w-full max-w-screen pr-12">
              <Link href="/"
              className="hover:text-midground hover:scale-95 transition-transform mr-1.5">
                  Take me back!
              </Link>
                <Link href="/resume"
              className="hover:text-midground hover:scale-95 transition-transform">
                  Who are you again?
              </Link>
              <Link href="/resume"
              className="hover:text-midground hover:scale-95 transition-transform">
                  
              </Link>
        
          </div>
      </nav>   */}

      {/* Top Navbar */}
      <div className={`col-span-full mb-5 sticky z-20 top-4 text-xl mr-28 text-neutral-350 dark:text-neutral-500
        moveUp`}>

        <AnimatePresence>

          <motion.div
          className="flex flex-row min-w-screen justify-between text-left"
          initial="hidden"
          animate="show"
          layout
          variants={animateIn}
          transition={{ duration: 0.5 }} // Adjust duration as needed
  >

            <motion.h1
            className="font-medium text-foreground text-xl tracking-tight"
            layout
            variants={animateInChild}>
              Here are...
            </motion.h1>

            {/* All Button */}
            <motion.button 
            className={`hover:text-foreground text-left tracking-tight ml-4
              ${(selectedTags.includes('all')) ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
            whileHover={{scale:1.03}}
            animate={{scale: (selectedTags.includes('all')) ? 1.03 : 1}}
            variants={animateInChild}
            layout
            onClick={() => {
              toggleTag('clear');
              toggleWork('clear');
              setSelectedTags(['all']);
            }}>all my work.</motion.button>

            {/* Best Button */}
            <motion.button 
            className={`hover:text-foreground text-left tracking-tight 
              ${selectedTags.includes('best') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
            whileHover={{scale:1.03}}
            animate={{scale: selectedTags.includes('best') ? 1.03 : 1}}
            variants={animateInChild}
            layout
            onClick={() => {
              toggleTag('clear');
              toggleWork('bestwork');
              setSelectedTags(['best'])}}>my personal favourites.</motion.button>

            {/* SideNav Button */}
            <motion.button 
            className="flex items-center gap-2 hover:text-foreground text-left tracking-tight"
            whileHover={{ scale: 1.03 }}
            variants={animateInChild}
            layout="position"
            onClick={toggleNav}
          >
            {/* Example of an SVG icon */}
            <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M5 12h14" />
              <path d="M5 6h14" />
              <path d="M5 18h14" />
            </svg>

            {/* Text content */}
            {showNav ? 'even less choices, fullscreen is always great.' : 'even more choices.'}
          </motion.button>
            
            {/* Resume Button */}
            <motion.div
              className={`hover:text-foreground text-left tracking-tight 
                ${selectedWork.includes('resume') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
              whileHover={{ scale: 1.03 }}
              variants={animateInChild}
              animate={{scale: selectedWork.includes('resume') ? 1.03 : 1}}
              layout
              onClick={() => {
                toggleTag('clear');
                toggleWork('resume')}}>
              all the details about myself.
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>  

      {/* Side Navbar */}
      <motion.div
        className={showNav ? "col-span-1 flex flex-col gap-10 tracking-tight"  : "hidden flex flex-col gap-10 tracking-tight"}
        initial="hidden"
        animate="show"
        variants={animateIn}>

        {/* Skillsets */}
        <AnimatePresence>
          {showNav && (
            <>
              <motion.div 
              className="flex flex-col gap-1 items-start text-left mt-18 dark:text-neutral-500"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={skillContainer}>

                <motion.h1
                className="text-xl tracking-tight mb-4 text-foreground"
                variants={animateInChild}>
                  Skillsets
                </motion.h1>

                <motion.button 
                className={`hover:text-foreground text-left mr-8 
                  ${selectedTags.includes('creative') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('creative') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => {
                  toggleTag('creative');
                  toggleWork('clear');}}>Creative Direction</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8 
                  ${selectedTags.includes('graphic') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('graphic') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => {
                  toggleTag('graphic');
                  toggleWork('clear');}}>Visual Design</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8 
                  ${selectedTags.includes('motion') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('motion') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => {
                  toggleTag('motion');
                  toggleWork('clear');}}>Motion Design</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8 
                  ${selectedTags.includes('edit') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('edit') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => {
                  toggleTag('edit');
                  toggleWork('clear');}}>Video Editing</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8 
                  ${selectedTags.includes('ixd') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('ixd') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => {
                  toggleTag('ixd');
                  toggleWork('clear');}}>Interaction Design</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8 
                  ${selectedWork.includes('photography') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedWork.includes('photography') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => {
                  toggleTag('clear');
                  toggleWork('photography');
                  setSelectedTags(['photography']);}}>Photography</motion.button>
                  

                <motion.button 
                className={`hover:text-foreground text-left mr-8 
                  ${selectedTags.includes('content') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('content') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => {
                  toggleTag('content');
                  toggleWork('clear');}}>Content Creation</motion.button>
              </motion.div>

              {/* All Work */}
              <motion.div
              className="hidden sm:flex flex-col items-start gap-1 dark:text-neutral-500 sticky top-24"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={worksContainer}
              >

                <motion.h1
                className="text-xl tracking-tight mb-4 text-foreground"
                variants={animateInChild}>
                  Work
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
                onClick={() => toggleWork('cocktail')}>Cocktail Conversations</motion.button>

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
                onClick={() => toggleTag('3')}>Kris+ Brand Campaign</motion.button>

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
                onClick={() => toggleTag('3')}>Travel Like Never Before</motion.button>

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
                onClick={() => toggleTag('3')}>SilverKris Lounge</motion.button>

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
                onClick={() => toggleTag('Photography')}>Oops Happens</motion.button>

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
                onClick={() => toggleTag('3')}>I Spy in the Sky</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                  ${includesTags(['motion', 'edit']) || hoveredWork ==='jolli' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  includesTags(['motion', 'edit']) || selectedTags.includes('edit') ||
                  hoveredWork==='jolli' 
                  ? 1.02 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('1')}>JolliEverAfter</motion.button>

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
                onClick={() => toggleTag('2')}>Virtual Sentosa</motion.button>

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
                onClick={() => toggleTag('3')}>Samsung Lifestyle Displays</motion.button>

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
                onClick={() => toggleTag('3')}>Nike Athlete Stories: Koy & Toon</motion.button>

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
                onClick={() => toggleTag('3')}>New Style Fresh Start</motion.button>

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
                onClick={() => toggleTag('Photography', 'graphic')}>Your Stage Now Live</motion.button>

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
                onClick={() => toggleTag('3')}>Sentosa Island</motion.button>

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
                onClick={() => toggleTag('3')}>iPhone 12 Pro</motion.button>

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
                onClick={() => toggleTag('3')}>iPhone 15 Pro</motion.button>

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
                onClick={() => toggleTag('3')}>ByBit Moon Pillow</motion.button>

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
                onClick={() => toggleTag('Photography')}>TBWA One Show Shortlist</motion.button>

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
                onClick={() => toggleTag('3')}>3D Motion Exploration</motion.button>

              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Grid */}
      <motion.div
        className={showNav ? "col-span-8" : "col-span-full"}
        layout="position"
        layoutId='test'
        transition={{ type: "spring", stiffness: 400, damping: 30 }}  // Control the speed of the transition
      > 

        <motion.div 
        className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 col-span-full gap-3 mt-14 md:mt-2">
          <AnimatePresence>
            {selectedWork === 'photography' ? (
              <PhotographyPage key="photography" className="col-span-full -mt-22"/>
            ) : selectedWork === 'resume' ? (
              <Resume key="resume" className="col-span-full"/>
            ) : selectedWork === 'ghibli' ? (
              <Ghibli key="ghibli" className="col-span-full"/>
            ) : selectedWork === 'cabin' ? (
              <CabinCrewStories key="cabin" className="col-span-full"/>
            ) : selectedWork === 'cocktail' ? (
              <Cocktail key="cocktail" className="col-span-full"/>
            ) : selectedWork === 'bestwork' ? (
              <BestWorkPage key="bestwork" className="col-span-full mt-2" setSelectedWork={setSelectedWork}/>
            ) : (
              filteredVideos.map((video) => (
                <VideoSquare
                  key={video.src}
                  videoSrc={video.src}
                  link={video.link}
                  tags={video.tags}
                  setHoveredWork={setHoveredWork}
                  onClick={() => { 
                    const workTags = ['cabin', 'cocktail', 'ghibli'];
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
  );
};

export default GridPage;