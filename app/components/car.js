'use client'
import * as motion from "framer-motion/client"
import React, { useState, useEffect } from 'react';
import { carContent } from '../content/car-content';
import { pageLoad, pageLoadItem } from '../constants/animations';
import { useBrowser } from '../context/BrowserContext';

const Car = ({className, showNav}) => {
  const { browserType } = useBrowser();
  const [activeChapter, setActiveChapter] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const chapterNum = parseInt(entry.target.id.replace('section-', ''));
            setActiveChapter(chapterNum);
          }
        });
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0
      }
    );

    carContent.sections.forEach((section, index) => {
      const element = document.getElementById(`section-${index + 1}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleChapterClick = (chapterNum) => {
    setTimeout(() => {
      const element = document.getElementById(`chapter-${chapterNum}`);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  return (
    <motion.div 
      className={`grid grid-cols-7 font-[family-name:var(--font-geist-sans)] ${className} ${showNav ? 'max-w-7xl' : 'max-w-6xl mx-auto'}`}
      initial="hidden"
      animate="show"
      variants={pageLoad}
    >
      {/* Left Column */}
      <div className="col-span-2 sticky top-28 h-screen flex flex-col">
        {/* Header */}
        <motion.h1 
          className="text-6xl tracking-[-2pt] font-medium relative text-foreground -ml-1 w-[90%]" 
          variants={pageLoadItem}
        >
          Human (Car)mputer Interaction
        </motion.h1>

        {/* Subheader */}
        <motion.h3 
          className="text-[14pt] leading-tight tracking-[-0.2pt] text-black/80 font-medium dark:text-white/70 relative mt-8 w-[90%]" 
          variants={pageLoadItem}
        >
          A deep dive into the Human Computer Interaction of the automobile through the lens of design history.
        </motion.h3>

        {/* Chapter Selector */}
        <motion.div 
          className="text-[11pt] tracking-[-0.2pt] text-black/75 font-medium dark:text-white/40 relative mt-14 space-y-2" 
          variants={pageLoadItem}
        >
          {carContent.sections.map((section, index) => (
            <motion.button 
              key={index}
              onClick={() => handleChapterClick(index + 1)}
              className={`group transition-all duration-200 cursor-pointer text-left ${
                activeChapter === index + 1 
                  ? 'text-[12pt] dark:text-white/80' 
                  : 'text-black/20 dark:text-white/25 hover:text-black dark:hover:text-white/80 hover:text-[12.5pt]'
              }`}
            >
              <span className="text-[8pt] transition-all duration-200 mr-2 group-hover:mr-2 align-top inline-block">
                {String(index + 1).padStart(2, '0')}
              </span> 
              <span className="inline-block text-left whitespace-normal break-words">
                {section.chapterTitle}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="col-span-5 mt-2 pl-6">
        {/* Body Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 800,
            damping: 25,
          }}
          className="max-w-3xl"
        >
          {/* Body */}
          {carContent.sections.map((section, index) => (
            <motion.div
              key={index}
              id={`section-${index + 1}`}
              variants={pageLoadItem}
              className="mb-8"
            >
              {/* Chapter Number */}
              <h4 
                id={`chapter-${index + 1}`} 
                className="text-black/65 dark:text-white/90 font-semibold tracking-tight scroll-mt-[-30vh]"
              >
                {section.chapterNumber}
              </h4>

              {/* Chapter Title */}
              <h3 className="tracking-[-0.3pt] text-[13pt] font-semibold -ml-3.5 mt-2 mb-6 sticky top-28">
                <span 
                  className={`px-3 py-1 rounded-full bg-transparent glass-sm inline-block
                  ${browserType === 'chrome' 
                    ? '' 
                    : browserType === 'safari' 
                      ? 'backdrop-blur-3xl' 
                      : browserType === 'firefox' 
                        ? 'backdrop-blur-3xl' 
                        : 'backdrop-blur-3xl'
                    }`}
                  style={browserType === 'chrome' ? {
                    backdropFilter: 'blur(1px) url(#backdrop-distortion)',
                  } : {}}
                >
                  {section.chapterTitle}
                </span>
              </h3>
              
              {/* Subsections */}
              {section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-8">
                  {/* Subsection Title (if exists) */}
                  {subsection.title && (
                    <p className="text-black/65 dark:text-white tracking-tight font-semibold mb-4">
                      {subsection.title}
                    </p>
                  )}

                  {/* Subsection Content */}
                  <p className="text-black/55 dark:text-white/60 leading-relaxed tracking-[-0.1pt] text-left">
                    {subsection.content}
                  </p>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Car;
