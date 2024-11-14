
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import PhotographyPage from '../components/photography';

const scaleIn ={
  hidden: {opacity:0, scale:0.95},
  show: {
      opacity:1, scale:1, 
      transition: {staggerChildren: 0.15, duration:0.2, ease:"easeOut"},
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



// VideoSquare component to render each video in a grid cell
const VideoSquare = ({ videoSrc, link }) => {
  return (
    <motion.div
      className="overflow-hidden bg-background drop-shadow-lg rounded-lg ease-in-out hover:scale-98 hover:drop-shadow-md"
      initial="hidden"
      animate="show"
      whileHover={{scale:0.98}}
      exit="fade"
      variants={scaleIn}
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

// HomePage component to render the grid of videos
  const GridPage = () => {
    const videoData = [
      { src: '/ghibli/cover1.mp4', link: '/works/ghibli', tags: ['all', 'creative', 'asm', 'motion', 'graphic', 'ghibli', 'best'] },
      { src: '/CCS/cover1.mp4', link: '/works/cabin', tags: ['all', 'creative', 'sia', 'motion','graphic', 'ccs', 'best'] },
      { src: '/cocktail/cover1.mp4', link: '/works/cocktail', tags: ['all', 'creative', 'sia', 'motion','graphic', 'cocktail', 'best'] },
      { src: '/kris/cover1.mp4', link: '/works/kris', tags: ['all', 'creative', 'sia', '4'] },
      { src: '/travelbig/cover.mp4', link: '/works/travelbig', tags: ['all', 'creative', 'sia'] },
      { src: '/lounge/cover.mp4', link: '/works/lounge', tags: ['all', 'creative', 'sia', 'edit', 'motion', '4'] },
      { src: '/ispy/cover.mp4', link: '/works/ispy', tags: ['all', 'creative', 'sia'] },
      { src: '/hemsaker/cover.mp4', link: '/works/hemsaker', tags: ['all', 'creative', 'Ikea', '5'] },
      { src: '/jollieverafter/cover.mp4', link: '/works/jollieverafter', tags: ['all', 'motion', 'edit', 'best'] },
      { src: '/oneshow/cover.mp4', link: '/works/oneshow', tags: ['all', 'motion', 'oneshow', '6'] },
      { src: '/leica/leica.mp4', link: '/works/leica', tags: ['all', 'motion', 'leica'] },
      { src: '/iphone/iphone.mp4', link: '/works/iphone', tags: ['all', 'motion', 'iphone'] },
      
      
    ];

  const [selectedTags, setSelectedTags] = useState([]);
  const [showPhotography, setShowPhotography] = useState(false);
  const [showNav, setShowNav] = useState(false);

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
          onClick={() => toggleTag('best')}>the best!</motion.button>

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
              className="hidden sm:flex flex-col items-start gap-1 text-neutral-300 dark:text-neutral-500"
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
                ${selectedTags.includes('creative', 'motion') ? 'text-foreground' : 'text-neutral-300 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('creative', 'motion') ? 1.06 : 1}}
                variants={animateInChild}>The World of Studio Ghibli</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('creative', 'motion') ? 'text-foreground' : 'text-neutral-300 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('creative', 'motion') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => toggleTag('2')}>Beyond the Cabin</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('creative', 'motion') ? 'text-foreground' : 'text-neutral-300 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('creative', 'motion') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>Cocktail Conversations</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('creative') ? 'text-foreground' : 'text-neutral-300 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('creative') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>Kris+ Brand Campaign</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('creative', 'motion') ? 'text-foreground' : 'text-neutral-300 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('creative', 'motion') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>SilverKris Lounge</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('creative') ? 'text-foreground' : 'text-neutral-300 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('creative') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => toggleTag('Photography')}>Oops Happens</motion.button>

                <motion.button 
                className={`hover:text-foreground text-left mr-8
                ${selectedTags.includes('creative') ? 'text-foreground' : 'text-neutral-300 dark:text-neutral-500 dark:hover:text-foreground'}`}
                whileHover={{scale:1.06}}
                animate={{scale: selectedTags.includes('creative') ? 1.06 : 1}}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>I Spy in the Sky</motion.button>

                <motion.button 
                className="hover:text-foreground text-left mr-8"
                whileHover={{scale:1.06}}
                variants={animateInChild}
                onClick={() => toggleTag('1')}>JolliEverAfter</motion.button>

                <motion.button 
                className="hover:text-foreground text-left mr-8"
                whileHover={{scale:1.06}}
                variants={animateInChild}
                onClick={() => toggleTag('2')}>Virtual Sentosa</motion.button>

                <motion.button 
                className="hover:text-foreground text-left mr-8"
                whileHover={{scale:1.06}}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>Samsung Lifestyle Displays</motion.button>

                <motion.button 
                className="hover:text-foreground text-left mr-8"
                whileHover={{scale:1.06}}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>Nike Athlete Stories: Koy & Toon</motion.button>

                <motion.button 
                className="hover:text-foreground text-left mr-8"
                whileHover={{scale:1.06}}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>New Style Fresh Start</motion.button>

                <motion.button 
                className="hover:text-foreground text-left mr-8"
                whileHover={{scale:1.06}}
                variants={animateInChild}
                onClick={() => toggleTag('Photography')}>Your Stage Now Live</motion.button>

                <motion.button 
                className="hover:text-foreground text-left mr-8"
                whileHover={{scale:1.06}}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>Sentosa Island</motion.button>

                <motion.button 
                className="hover:text-foreground text-left mr-8"
                whileHover={{scale:1.06}}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>iPhone 12 Pro</motion.button>

                <motion.button 
                className="hover:text-foreground text-left mr-8"
                whileHover={{scale:1.06}}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>iPhone 15 Pro</motion.button>

                <motion.button 
                className="hover:text-foreground text-left mr-8"
                whileHover={{scale:1.06}}
                variants={animateInChild}
                onClick={() => toggleTag('Photography')}>Leica M10-P</motion.button>

                <motion.button 
                className="hover:text-foreground text-left mr-8"
                whileHover={{scale:1.06}}
                variants={animateInChild}
                onClick={() => toggleTag('3')}>ByBit Moon Pillow</motion.button>

                <motion.button 
                className="hover:text-foreground text-left mr-8"
                whileHover={{scale:1.06}}
                variants={animateInChild}
                onClick={() => toggleTag('Photography')}>TBWA One Show Shortlist</motion.button>

                <motion.button 
                className="hover:text-foreground text-left mr-8"
                whileHover={{scale:1.06}}
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
              <PhotographyPage 
              key="photography"
              className="col-span-full"
              />
            ) : (
                filteredVideos.map((video, index) => (
                <VideoSquare key={video.src} videoSrc={video.src} link={video.link} />
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default GridPage;