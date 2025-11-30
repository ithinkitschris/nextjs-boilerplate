'use client'

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import VideoSquare from '../ui/VideoSquare';
import { videoData, skillsetData, workTags } from '../../data/videoData';
import { animateIn } from '../../constants/animations';

const Archive = ({ className, toggleWork }) => {
  const [selectedArchiveTags, setSelectedArchiveTags] = useState(['all']);

  // Filter videos based on selected tags
  const filteredVideos = useMemo(() => {
    if (selectedArchiveTags.includes('all')) {
      return videoData;
    }

    if (!Array.isArray(selectedArchiveTags)) {
      return [];
    }

    return videoData.filter((video) => 
      selectedArchiveTags.some((tag) => video.tags.includes(tag))
    );
  }, [selectedArchiveTags]);

  // Handle category button click
  const handleCategoryClick = (tag) => {
    if (tag === 'all') {
      setSelectedArchiveTags(['all']);
    } else {
      // If clicking the same tag, toggle it off (go back to 'all')
      if (selectedArchiveTags.includes(tag)) {
        setSelectedArchiveTags(['all']);
      } else {
        setSelectedArchiveTags([tag]);
      }
    }
  };

  // Handle video click - find matching work tag and navigate
  const handleVideoClick = (video) => {
    const matchedWork = workTags.find((tag) => video.tags.includes(tag));
    if (matchedWork) {
      toggleWork(matchedWork);
    }
  };

  // Reorder skillsets: Product Design first, then Creative Direction, then the rest
  const orderedSkillsets = useMemo(() => {
    const product = skillsetData.find(item => item.tag === 'product');
    const creative = skillsetData.find(item => item.tag === 'creative');
    const rest = skillsetData.filter(item => item.tag !== 'product' && item.tag !== 'creative');
    
    // Override labels for product, creative, and motion
    const productWithLabel = product ? { ...product, label: 'Product Design' } : null;
    const creativeWithLabel = creative ? { ...creative, label: 'Creative Direction' } : null;
    const restWithLabels = rest.map(item => 
      item.tag === 'motion' ? { ...item, label: 'Motion Design' } : item
    );
    
    return [productWithLabel, creativeWithLabel, ...restWithLabels].filter(Boolean);
  }, []);

  return (
    <motion.div
      className={`font-[family-name:var(--font-geist-sans)] relative w-full mt-8 md:mt-12 ${className}`}
      initial="hidden"
      animate="show"
      variants={animateIn}
    >
      {/* Category Buttons */}
      <motion.div
        className="flex flex-wrap gap-2 mb-6 md:mb-8"
        variants={animateIn}
      >
        {/* All Button */}
        <motion.button
          className={`rounded-full px-3 py-[3px] border-1.5 text-sm lg:text-[15px]
          font-semibold tracking-[-0.2pt] whitespace-nowrap 
          dark:mix-blend-normal transition-colors duration-200 hover:text-background 
          hover:bg-foreground hover:text-white hover:mix-blend-normal hover:border-foreground
          dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
          ${selectedArchiveTags.includes('all') ? 'border-foreground' : 'border-transparent'}`}
          whileHover={{ scale: 0.95 }}
          onClick={() => handleCategoryClick('all')}
        >
          All
        </motion.button>

        {/* Skillset Buttons */}
        {orderedSkillsets.map(({ tag, label }, index) => (
          <motion.button
            key={tag}
            className={`rounded-full px-3 py-[3px] border-1.5 text-sm lg:text-[15px]
            font-semibold tracking-[-0.2pt] whitespace-nowrap 
            dark:mix-blend-normal transition-colors duration-200 hover:text-background 
            hover:bg-foreground hover:text-white hover:mix-blend-normal hover:border-foreground
            dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
            ${selectedArchiveTags.includes(tag) ? 'border-foreground' : 'border-transparent'}`}
            whileHover={{ scale: 0.95 }}
            onClick={() => handleCategoryClick(tag)}
          >
            {label}
          </motion.button>
        ))}
      </motion.div>

      {/* Video Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1.5 md:gap-2.5">
        <AnimatePresence>
          {filteredVideos.map((video) => (
            <VideoSquare
              key={video.src}
              videoSrc={video.src}
              title={video.title}
              subheader={video.subheader}
              poster={video.poster}
              tags={video.tags}
              selectedTags={selectedArchiveTags}
              onClick={() => handleVideoClick(video)}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Archive;

