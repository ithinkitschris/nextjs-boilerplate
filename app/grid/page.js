
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
      when: "beforeChildren",
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
      delay: 0.35, // Delay to make Works fade in after Skillsets
      when: "beforeChildren",
      staggerChildren: 0.03,
    },
  },
  exit: { opacity: 0 },
};

const VideoSquare = ({ videoSrc, link, tags, setHoveredWork }) => {
  return (
    <motion.div
      className="overflow-hidden bg-background drop-shadow-lg rounded-lg ease-in-out hover:scale-98 hover:drop-shadow-md"
      initial="hidden"
      animate="show"
      whileHover={{scale:0.98}}
      exit="fade"
      variants={scaleIn}
      onMouseEnter={() => setHoveredWork(tags[0])}
      onMouseLeave={() => setHoveredWork(null)}
    >
        <Link href={link}>
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
        </Link>
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
    { src: '/lounge/cover.mp4', link: '/works/lounge', tags: ['lounge', 'all', 'creative', 'sia', 'edit', 'motion'] },
    { src: '/hemsaker/cover.mp4', link: '/works/hemsaker', tags: ['hemsaker', 'all', 'creative', 'Ikea'] },
    { src: '/ispy/cover.mp4', link: '/works/ispy', tags: ['ispy', 'all', 'creative', 'sia'] },
    { src: '/jollieverafter/cover.mp4', link: '/works/jollieverafter', tags: ['jolli', 'all', 'motion', 'edit', 'best'] },
    { src: '/oneshow/cover.mp4', link: '/works/oneshow', tags: ['oneshow', 'all', 'motion', 'oneshow'] },
    { src: '/leica/leica.mp4', link: '/works/leica', tags: ['leica', 'all', 'motion'] },
    { src: '/iphone/iphone.mp4', link: '/works/iphone', tags: ['iphone', 'all', 'motion'] },
    
    
  ];

const [selectedTags, setSelectedTags] = useState([]);
const [showPhotography, setShowPhotography] = useState(false);
const [showNav, setShowNav] = useState(false);
const [hoveredWork, setHoveredWork] = useState(null);

const toggleTag = (tag) => {
  if (tag === 'all') {
    setSelectedTags([]);
    setShowPhotography(false);} 
  else if (tag === 'Photography') {
    setShowPhotography(!showPhotography);
    setSelectedTags([]);}
  else {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag])
      setShowPhotography(false);
    }
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
  if (selectedTags.length === 0) return true;
  return selectedTags.some((tag) => video.tags.includes(tag));
});

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-9 px-8 py-6 mt-12 text-sm 2xl:text-base">
      
      {/* Side Navbar */}
      <motion.div
        className="col-span-1 flex flex-col gap-10 tracking-tight"
        initial="hidden"
        animate="show"
        variants={animateIn}>

        {/* Give me... */}
        <div className="flex flex-col gap-1 items-start text-left text-neutral-350 dark:text-neutral-500">

          <motion.h1
          className="text-3xl font-medium mb-2 -ml-0.5 text-foreground tracking-tighter"
          variants={animateInChild}>
            Give me...
          </motion.h1>

          <motion.button 
          className={`hover:text-foreground text-left text-xl mr-8 
            ${(selectedTags.length===0 && showPhotography===(false)) ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
          whileHover={{scale:1.06}}
          animate={{scale: (selectedTags.length===0 && showPhotography===(false)) ? 1.06 : 1}}
          variants={animateInChild}
          onClick={() => toggleTag('all')}>everything.</motion.button>

          <motion.button 
          className={`hover:text-foreground text-left text-xl mr-8 
            ${selectedTags.includes('best') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
          whileHover={{scale:1.06}}
          animate={{scale: selectedTags.includes('best') ? 1.06 : 1}}
          variants={animateInChild}
          onClick={() => toggleTag('best')}>the best.</motion.button>

          <motion.button 
          className={"hover:text-foreground text-left text-xl mr-4"}
          whileHover={{scale:1.06}}
          variants={animateInChild}
          onClick={toggleNav}>more choice, man.</motion.button>

        </div>

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
                  console.log(selectedTags);
                }}>Creative Direction</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8 
                  ${selectedTags.includes('graphic') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('graphic') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => toggleTag('graphic')}>Visual Design</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8 
                  ${selectedTags.includes('edit') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('edit') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => toggleTag('edit')}>Video Editing</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8 
                  ${selectedTags.includes('motion') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('motion') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => toggleTag('motion')}>Motion Design</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8 
                  ${selectedTags.includes('ixd') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('ixd') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => toggleTag('ixd')}>Interaction Design</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8 
                  ${showPhotography ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{ scale: showPhotography ? 1.06 : 1 }}
                variants={animateInChild}
                onClick={() => toggleTag('Photography')}>Photography</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8 
                  ${selectedTags.includes('content') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('content') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => toggleTag('content')}>Content Creation</motion.button>
              </motion.div>

              {/* All Work */}
              <motion.div
              className="hidden sm:flex flex-col items-start gap-1 dark:text-neutral-500"
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
                ${selectedTags.includes('creative') || hoveredWork ==='ghibli' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('creative', 'motion') ||
                  hoveredWork==='ghibli' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}>The World of Studio Ghibli</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('creative') || hoveredWork ==='cabin' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('creative', 'motion') ||
                  hoveredWork==='cabin' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('2')}>Beyond the Cabin</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('creative') || hoveredWork ==='cocktail' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('creative', 'motion') ||
                  hoveredWork==='cocktail' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>Cocktail Conversations</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('creative') || hoveredWork ==='kris' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('creative', 'motion') ||
                  hoveredWork==='kris' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>Kris+ Brand Campaign</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('creative') || hoveredWork ==='travelbig' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('creative', 'motion') ||
                  hoveredWork==='travelbig' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>Travel Like Never Before</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('creative') || selectedTags.includes('motion') || selectedTags.includes('edit') || hoveredWork ==='lounge' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('creative') || selectedTags.includes('motion') || selectedTags.includes('edit') ||
                  hoveredWork==='lounge' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>SilverKris Lounge</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('creative') || hoveredWork ==='hemsaker' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('creative', 'motion') ||
                  hoveredWork==='hemsaker' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('Photography')}>Oops Happens</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('creative') || hoveredWork ==='ispy' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('creative', 'motion') ||
                  hoveredWork==='ispy' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>I Spy in the Sky</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                  ${selectedTags.includes('motion') || selectedTags.includes('edit') || hoveredWork ==='jolli' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('motion') || selectedTags.includes('edit') ||
                  hoveredWork==='jolli' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('1')}>JolliEverAfter</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('') || hoveredWork ==='virtualsentosa' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('') ||
                  hoveredWork==='virtualsentosa' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('2')}>Virtual Sentosa</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('') || hoveredWork ==='samsung' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('') ||
                  hoveredWork==='samsung' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>Samsung Lifestyle Displays</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('') || hoveredWork ==='nike' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('') ||
                  hoveredWork==='nike' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>Nike Athlete Stories: Koy & Toon</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('') || hoveredWork ==='uniqlo2' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('') ||
                  hoveredWork==='uniqlo2' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>New Style Fresh Start</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('') || hoveredWork ==='uniqlo1' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('') ||
                  hoveredWork==='uniqlo1' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('Photography')}>Your Stage Now Live</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('') || hoveredWork ==='sentosa' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('') ||
                  hoveredWork==='sentosa' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>Sentosa Island</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('') || hoveredWork ==='iphone12' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('') ||
                  hoveredWork==='iphone12' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>iPhone 12 Pro</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('') || hoveredWork ==='iphone' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('') ||
                  hoveredWork==='iphone' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>iPhone 15 Pro</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('') || hoveredWork ==='leica' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('') ||
                  hoveredWork==='leica' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('Photography')}>Leica M10-P</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('') || hoveredWork ==='bybit' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('') ||
                  hoveredWork==='bybit' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>ByBit Moon Pillow</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('') || hoveredWork ==='oneshow' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('') ||
                  hoveredWork==='oneshow' 
                  ? 1.06 : 1
                }}
                variants={animateInChild}
                onClick={() => toggleTag('Photography')}>TBWA One Show Shortlist</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('') || hoveredWork ==='3d' 
                  ? 'text-foreground' 
                  : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'
                } transition-colors duration-100`}
                whileHover={{scale:1.06}}
                animate={{scale: 
                  selectedTags.includes('') ||
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
        <motion.div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 col-span-full gap-2 mt-10 md:mt-0">
          <AnimatePresence>
            {showPhotography ? (
              <CabinCrewStories 
              key="photography"
              className="col-span-full -mt-24"
              />
            ) : (
                filteredVideos.map((video) => (
                <VideoSquare 
                key={video.src} 
                videoSrc={video.src} 
                link={video.link}
                tags={video.tags}
                setHoveredWork={setHoveredWork}
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