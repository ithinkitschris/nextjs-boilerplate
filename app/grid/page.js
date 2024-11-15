
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import PhotographyPage from '../components/photography';
import CabinCrewStories from '../works/cabin/page';

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
  hidden: {opacity:0, y:-6},
  show: {
      opacity:1, y:0, 
      transition: {staggerChildren: 0.05, duration:0.1, ease:"easeOut"},
  },
  fade: {
    opacity:0,
    transition: {duration: 0.1, ease: "easeOut"},
  },
};

const animateInChild ={
  hidden: {opacity:0, y:-6},
  show: {
    opacity:1, y:0,
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

const [selectedTags, setSelectedTags] = useState([]);
const [selectedWork, setSelectedWork] = useState([]);
const [showNav, setShowNav] = useState(false);
const [hoveredWork, setHoveredWork] = useState(null);

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

const filteredVideos = videoData.filter((video) => {
  if (selectedTags.includes('all')) return true;
  return selectedTags.some((tag) => video.tags.includes(tag));
});

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-9 px-8 py-6 mt-12 text-sm 2xl:text-base font-[family-name:var(--font-geist-sans)]">
     
      {/* Top Navbar */}
      <nav className="
        flex justify-center sm:justify-between sm:ml-4 2xl:ml-6 items-center z-10
        fixed top-0 left-0 right-0 p-2 mt-4 w-full
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
      </nav>  

      {/* Give me... */}
      <div className="col-span-full mb-4 -mt-4">
        <div className="flex flex-row text-left gap-10 items-end text-neutral-350 dark:text-neutral-500">

          <motion.h1
          className="text-3xl font-medium -ml-0.5 text-foreground tracking-tight"
          variants={animateInChild}>
            Give me...
          </motion.h1>

          <motion.button 
          className={`hover:text-foreground text-left text-xl tracking-tight ml-5
            ${(selectedTags.includes('all')) ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
          whileHover={{scale:1.06}}
          animate={{scale: (selectedTags.includes('all')) ? 1.06 : 1}}
          variants={animateInChild}
          onClick={() => {
            toggleTag('clear');
            toggleWork('clear');
            setSelectedTags(['all']);
          }}>everything.</motion.button>

          <motion.button 
          className={`hover:text-foreground text-left text-xl tracking-tight 
            ${selectedTags.includes('best') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
          whileHover={{scale:1.06}}
          animate={{scale: selectedTags.includes('best') ? 1.06 : 1}}
          variants={animateInChild}
          onClick={() => {
            toggleTag('best');
            toggleWork('clear');}}>the best.</motion.button>

          <motion.button 
          className={"hover:text-foreground text-left text-xl tracking-tight "}
          whileHover={{scale:1.06}}
          variants={animateInChild}
          onClick={toggleNav}>more choices, man.</motion.button>

        </div>
      </div>  

      {/* Side Navbar */}
      <motion.div
        className="col-span-1 flex flex-col gap-10 tracking-tight"
        initial="hidden"
        animate="show"
        variants={animateIn}>

      

        {/* Skillsets */}
        <AnimatePresence>
          {showNav && (
            <>
              <motion.div 
              className="flex flex-col gap-1 items-start text-left dark:text-neutral-500"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={skillContainer}>

                <motion.h1
                className="text-xl font-medium mb-4 text-foreground"
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
              className="hidden sm:flex flex-col items-start gap-1 dark:text-neutral-500 sticky top-20"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={worksContainer}
              >

                <motion.h1
                className="text-xl font-medium mb-4 text-foreground"
                variants={animateInChild}>
                  Work
                </motion.h1>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                  ${includesTags(['creative', 'motion', 'graphic']) || hoveredWork ==='ghibli' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  includesTags(['creative', 'motion', 'graphic']) ||
                  hoveredWork==='ghibli' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}>The World of Studio Ghibli</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${includesTags(['creative', 'motion', 'graphic']) || selectedWork.includes(['cabin']) || hoveredWork ==='cabin' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  includesTags(['creative', 'motion', 'graphic']) || selectedWork.includes(['cabin']) || hoveredWork==='cabin' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => {
                  toggleTag('clear');
                  toggleWork('cabin')}}>Beyond the Cabin</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                  ${includesTags(['creative', 'motion', 'graphic']) || hoveredWork ==='cocktail' 
                    ? 'text-foreground' 
                    : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                  } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  includesTags(['creative', 'motion', 'graphic']) ||
                  hoveredWork==='cocktail' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>Cocktail Conversations</motion.button>

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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
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
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>3D Motion Exploration</motion.button>

              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Works Grid */}
      <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 2xl:col-span-8">
        <motion.div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 col-span-full gap-3 mt-10 md:mt-0">
          <AnimatePresence>
            {selectedWork === 'photography' ? (
              <PhotographyPage key="photography" className="col-span-full -mt-22"/>
            ) : selectedWork === 'cabin' ? (
              <CabinCrewStories key="cabin" className="col-span-full -mt-10"/>
            ) : (
                filteredVideos.map((video) => (
                <VideoSquare 
                key={video.src} 
                videoSrc={video.src} 
                link={video.link}
                tags={video.tags}
                setHoveredWork={setHoveredWork}
                onClick={() => {
                  if (video.tags.includes('cabin')) {
                    toggleTag('clear');
                    toggleWork('cabin');
                    }
                  }}
                />
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default GridPage;