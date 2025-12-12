'use client'

import React, { useMemo, forwardRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';
import VideoSquare from '../ui/VideoSquare';
import ContentPage from './content';
import { videoData, skillsetData, workTags } from '../../data/videoData';
import { animateIn } from '../../constants/animations';
import { useHideNav } from '../../context/HideNavContext';

const Archive = forwardRef(({ className, toggleWork }, ref) => {
  const router = useRouter();
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
    // If video has a link, use router navigation (for car, ghibli, cabin, isv, subway)
    if (video.link) {
      router.push(video.link);
      return;
    }
    
    // Otherwise, use toggleWork for other pages
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
      item.tag === 'motion' ? { ...item, label: 'Motion' } : item
    );
    
    return [productWithLabel, creativeWithLabel, ...restWithLabels].filter(Boolean);
  }, []);

  // Check if content tag is selected (Social)
  const showContentPage = archiveSelectedTags.includes('content') && !archiveSelectedTags.includes('all');

  return (
    <motion.div
      ref={ref}
      className={`font-[family-name:var(--font-geist-sans)] relative w-full  ${className}`}
      initial="hidden"
      animate="show"
      variants={animateIn}
    >
      {/* Category Selector */}
      <motion.div 
        className="flex flex-wrap gap-2 mb-6 md:mb-8 mx-[4%] md:mx-0"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* All button */}
        <motion.button
          id="archive-all-button"
          className="rounded-full px-3 py-[3px] border-1.5 text-sm lg:text-[15px]
            font-semibold tracking-[-0.2pt] whitespace-nowrap 
            text-white mix-blend-difference dark:mix-blend-normal 
            transition-colors duration-200 hover:text-background 
            hover:bg-foreground hover:text-white hover:mix-blend-normal
            dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          style={{
            borderColor: archiveSelectedTags.includes('all')
              ? 'var(--foreground)'
              : 'color-mix(in srgb, var(--foreground) 10%, transparent)'
          }}
          whileHover={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 1000,
            damping: 20
          }}
          onClick={() => handleCategoryClick('all')}
        >
          All
        </motion.button>

        {/* Category buttons */}
        {orderedSkillsets.map(({ tag, label }, index) => (
          <motion.button
            key={tag}
            className="rounded-full px-3 py-[3px] border-1.5 text-sm lg:text-[15px]
              font-semibold tracking-[-0.2pt] whitespace-nowrap 
              text-white mix-blend-difference dark:mix-blend-normal 
              transition-colors duration-200 hover:text-background 
              hover:bg-foreground hover:text-white hover:mix-blend-normal
              dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{
              borderColor: archiveSelectedTags.includes(tag)
                ? 'var(--foreground)'
                : 'color-mix(in srgb, var(--foreground) 10%, transparent)'
            }}
            whileHover={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 1000,
              damping: 20,
              delay: index * 0.02
            }}
            onClick={() => handleCategoryClick(tag)}
          >
            {label}
          </motion.button>
        ))}
      </motion.div>

      {showContentPage ? (
        // Show ContentPage when Social (content) is selected
        <ContentPage className="col-span-full" />
      ) : (
        // Show Video Grid for other tags
        <div className={`grid ${archiveSelectedTags.includes('product') ? 'grid-cols-1' : 'grid-cols-2'} lg:grid-cols-3 xl:grid-cols-4 gap-1.5 md:gap-2.5`}>
          <AnimatePresence>
            {filteredVideos.map((video) => {
              // Add col-span-full on mobile for product design items
              const isProduct = video.tags.includes('product');
              const gridClassName = isProduct ? 'col-span-full md:col-span-1' : '';
              
              return (
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
                  className={gridClassName}
                />
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
});

Archive.displayName = 'Archive';

export default Archive;

