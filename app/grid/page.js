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
  hidden: {opacity:0, x:-10},
  show: {
      opacity:1, x:0, 
      transition: {staggerChildren: 0.1, duration:0.1, ease:"easeOut"},
  },
  fade: {
    opacity:0,
    transition: {duration: 0.1, ease: "easeOut"},
  },
};

const animateInChild ={
  hidden: {opacity:0, x:-10},
  show: {
    opacity:1, x:0,
    transition: {duration:0.3, ease:"easeOut"},
    },
  fade: {
    opacity:0,
    transition: {duration: 0.5, ease: "easeOut"},
  },
};


// VideoSquare component to render each video in a grid cell
const VideoSquare = ({ videoSrc, link }) => {
  return (
    <motion.div
      className="video-square relative overflow-hidden bg-background 
    drop-shadow-lg rounded-2xl ease-in-out
    hover:scale-98 hover:drop-shadow-xl"
      initial="hidden"
      animate="show"
      whileHover={{scale:0.98}}
      exit="fade"
      variants={scaleIn}
    >
      {link ? (
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
      ) : (
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
      )}
    </motion.div>
  );
};

// HomePage component to render the grid of videos
  const GridPage = () => {
    const videoData = [
      { src: '/ghibli/cover1.mp4', link: '/works/ghibli', tags: ['all', 'Creative', 'ArtScience Museum', '1'] },
      { src: '/CCS/cover1.mp4', link: '/works/cabin', tags: ['all', 'Creative', 'Singapore Airlines', '2'] },
      { src: '/cocktail/cover1.mp4', link: '/works/cocktail', tags: ['all', 'Creative', 'Singapore Airlines', '3'] },
      { src: '/kris/cover.mp4', link: '/works/kris', tags: ['all', 'Creative', 'Singapore Airlines', '4'] },
      { src: '/ghibli/cover1.mp4', link: '/works/ghibli', tags: ['all', 'Creative', 'ArtScience Museum', '1'] },
      { src: '/CCS/cover1.mp4', link: '/works/cabin', tags: ['all', 'Creative', 'Singapore Airlines', '2'] },
      { src: '/cocktail/cover1.mp4', link: '/works/cocktail', tags: ['all', 'Creative', 'Singapore Airlines', '3'] },
      { src: '/kris/cover.mp4', link: '/works/kris', tags: ['all', 'Creative', 'Singapore Airlines', '4'] },



    ];

  const [selectedTags, setSelectedTags] = useState([]);
  const [showPhotography, setShowPhotography] = useState(false);

  const toggleTag = (tag) => {
    if (tag === 'Photography') {
      setShowPhotography(!showPhotography);
    } else {

      if (selectedTags.includes(tag)) {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    }
  };

  const filteredVideos = videoData.filter((video) => {
    if (selectedTags.length === 0) return true;
    return selectedTags.some((tag) => video.tags.includes(tag));
});

  return (
    <div className="grid grid-cols-1 md:grid-cols-9 px-8 py-6 mt-12 min-w-screen min-h-screen">
      
      {/* Side Navbar */}
      <motion.div
        className="flex flex-col gap-60 tracking-tight"
        initial="hidden"
        animate="show"
        variants={animateIn}>

        {/* Skillsets */}
        <div className="col-span-1 flex flex-col items-center md:items-start gap-1">

          <motion.button 
          className="text-xl hover:text-midground mb-6"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('all')}>Give me everything!</motion.button>

          <motion.h1
          className="text-xl font-medium mb-4"
          variants={animateInChild}>
            Skillsets
          </motion.h1>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('1')}>Creative Direction</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('2')}>Graphic Design</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>Video Editing</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>Motion Design</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>Interaction Design</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('Photography')}>Photography</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>Content Creation</motion.button>

        </div>

        {/* All Work */}
        <div className="hidden col-span-1 md:flex flex-col items-start gap-1">

          <motion.h1
          className="text-xl font-medium mb-4"
          variants={animateInChild}>
            Work
          </motion.h1>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('1')}>The World of Studio Ghibli</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('2')}>Beyond the Cabin</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>Cocktail Conversations</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>Kris+ Brand Campaign</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>SilverKris Lounge</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('Photography')}>Oops Happens</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>I Spy in the Sky</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('1')}>JolliEverAfter</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('2')}>Virtual Sentosa</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>Samsung Lifestyle Displays</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>Nike Athlete Stories: Koy & Toon</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>New Style Fresh Start</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('Photography')}>Your Stage Now Live</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>Sentosa Island</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>iPhone 12 Pro</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>iPhone 15 Pro</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('Photography')}>Leica M10-P</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>ByBit Moon Pillow</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('Photography')}>TBWA One Show Shortlist</motion.button>

          <motion.button 
          className="hover:text-midground"
          whileHover={{scale:0.95}}
          variants={animateInChild}
          onClick={() => toggleTag('3')}>3D Motion Exploration</motion.button>

        </div>
      </motion.div>

      {/* Works Grid */}
      <motion.div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 col-span-8 gap-2 mt-10 md:mt-0">
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
  );
};

export default GridPage;




// const handleTagClick = (tag: string) => {
//   setSelectedTags((prevTags) =>
//     prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
//   );
// };

// const filteredVideos = videoData.filter(video =>
//   selectedTags.length === 0 || (video.tags && selectedTags.some(tag => video.tags.includes(tag)))
// );

{/* <div className="tag-container px-10 mt-14 mb-6">
  {['ArtScience Museum', 'Singapore Airlines'].map(tag => (
    <button
      key={tag}
      className={`tag-button ${selectedTags.includes(tag) ? 'active' : ''}`}
      onClick={() => handleTagClick(tag)}
    >
      {tag}
    </button>
  ))}
</div> */}