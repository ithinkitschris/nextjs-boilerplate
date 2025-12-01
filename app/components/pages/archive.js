'use client'

import React, { useMemo, forwardRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import VideoSquare from '../ui/VideoSquare';
import ContentPage from './content';
import { videoData, skillsetData, workTags } from '../../data/videoData';
import { animateIn } from '../../constants/animations';
import { useHideNav } from '../../context/HideNavContext';

const Archive = forwardRef(({ className, toggleWork }, ref) => {
  const { archiveSelectedTags, setArchiveSelectedTags } = useHideNav();

  // Filter videos based on selected tags
  const filteredVideos = useMemo(() => {
    if (archiveSelectedTags.includes('all')) {
      return videoData;
    }

    if (!Array.isArray(archiveSelectedTags)) {
      return [];
    }

    return videoData.filter((video) => 
      archiveSelectedTags.some((tag) => video.tags.includes(tag))
    );
  }, [archiveSelectedTags]);

  // Handle category button click
  const handleCategoryClick = (tag) => {
    if (tag === 'all') {
      setArchiveSelectedTags(['all']);
    } else {
      // If clicking the same tag, toggle it off (go back to 'all')
      if (archiveSelectedTags.includes(tag)) {
        setArchiveSelectedTags(['all']);
      } else {
        setArchiveSelectedTags([tag]);
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

  // Check if content tag is selected (Social)
  const showContentPage = archiveSelectedTags.includes('content') && !archiveSelectedTags.includes('all');

  return (
    <motion.div
      ref={ref}
      className={`font-[family-name:var(--font-geist-sans)] relative w-full mt-8 md:mt-12 ${className}`}
      initial="hidden"
      animate="show"
      variants={animateIn}
    >
      {showContentPage ? (
        // Show ContentPage when Social (content) is selected
        <ContentPage className="col-span-full" />
      ) : (
        // Show Video Grid for other tags
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
                selectedTags={archiveSelectedTags}
                link={video.link}
                onClick={() => handleVideoClick(video)}
              />
            ))}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
});

Archive.displayName = 'Archive';

export default Archive;

