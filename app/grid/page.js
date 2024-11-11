'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";

const scaleIn ={
  hidden: {opacity:0, scale:0.95},
  show: {
      opacity:1, scale:1, 
      transition: {staggerChildren: 0.15, duration:0.3, ease:"easeOut"},
  },
  fade: {
    opacity:0,
    transition: {duration: 0.1, ease: "easeOut"},
  },
};

const animateIn ={
  hidden: {opacity:0, y:10},
  show: {
      opacity:1, y:0, 
      transition: {staggerChildren: 0.2, duration:0.1, ease:"easeOut"},
  },
  fade: {
    opacity:0,
    transition: {duration: 0.1, ease: "easeOut"},
  },
};

const animateInChild ={
  hidden: {opacity:0, y:10},
  show: {
    opacity:1, y:0,
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
    { src: '/ghibli/cover.mov', link: '/works/ghibli', tags: ['Creative', 'ArtScience Museum', '1'] },
    { src: '/CCS/cover.mp4', link: '/works/cabin', tags: ['Creative', 'Singapore Airlines', '2'] },
    { src: '/cocktail/cover.mp4', link: '/works/cocktail', tags: ['Creative', 'Singapore Airlines', '3'] },
  ];

  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredVideos = videoData.filter((video) => {
    if (selectedTags.length === 0) return true;
    for (let tag of selectedTags) {
      if (!video.tags || !video.tags.includes(tag)) {
        return false;
      }
    }
    return true;
  });

  return (
    <div>
      <motion.div 
      className="flex flex-row px-10 py-6 mt-10 gap-4"
      initial="hidden"
      animate="show"
      variants={animateIn}>

        {/* <button 
        className="transition-all hover:scale-95 hover:text-midground"
        onClick={() => toggleTag('ArtScience Museum')}>ArtScience Museum</button>

        <button 
        className="transition-all hover:scale-95 hover:text-midground"
        onClick={() => toggleTag('Singapore Airlines')}>Singapore Airlines</button> */}

        <motion.button 
        className="hover:text-midground"
        whileHover={{scale:0.9}}
        variants={animateInChild}
        onClick={() => toggleTag('1')}>1</motion.button>

        <motion.button 
        className="hover:text-midground"
        whileHover={{scale:0.9}}
        variants={animateInChild}
        onClick={() => toggleTag('2')}>2</motion.button>

        <motion.button 
        className="hover:text-midground"
        whileHover={{scale:0.9}}
        variants={animateInChild}
        onClick={() => toggleTag('3')}>3</motion.button>

      </motion.div>
      <motion.div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-3 px-10">
        <AnimatePresence>
          {filteredVideos.map((video, index) => (
            <VideoSquare key={video.src} videoSrc={video.src} link={video.link} />
          ))}
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