'use client'
import * as motion from "framer-motion/client"
import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { pageLoad, pageLoadItem } from '../constants/animations';
import { formatContent } from '../utils/markdownParser';

const WebsiteWithDropdowns = ({ className, showNav, content }) => {
  const [activeChapter, setActiveChapter] = useState(1);
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedSubsections, setExpandedSubsections] = useState({});

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

    content.sections.forEach((section, index) => {
      const element = document.getElementById(`section-${index + 1}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [content]);

  const handleChapterClick = (chapterNum) => {
    setTimeout(() => {
      const element = document.getElementById(`chapter-${chapterNum}`);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const toggleSection = (sectionIndex) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex]
    }));
  };

  const toggleSubsection = (sectionIndex, subsectionIndex) => {
    const key = `${sectionIndex}-${subsectionIndex}`;
    setExpandedSubsections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isSectionExpanded = (sectionIndex) => {
    return expandedSections[sectionIndex] || false;
  };

  const isSubsectionExpanded = (sectionIndex, subsectionIndex) => {
    const key = `${sectionIndex}-${subsectionIndex}`;
    return expandedSubsections[key] || false;
  };

  return (
    <motion.div 
      className={`grid grid-cols-7 font-[family-name:var(--font-geist-sans)] ${className} ${showNav ? 'max-w-7xl' : 'max-w-6xl mx-auto'}`}
      initial="hidden"
      animate="show"
      variants={pageLoad}
    >
      {/* Left Column - Navigation */}
      <div className="col-span-2 sticky top-28 h-screen flex flex-col">
        {/* Header */}
        <motion.h1 
          className="text-6xl tracking-[-2pt] font-medium relative text-foreground -ml-1 w-[90%]" 
          variants={pageLoadItem}
        >
          Portfolio Documentation
        </motion.h1>

        {/* Description */}
        <motion.h2 
          className="text-[12pt] leading-tight tracking-[-0.2pt] text-black/80 font-medium dark:text-white/70 relative mt-8 w-[90%] whitespace-pre-line" 
          variants={pageLoadItem}
        >
          Complete documentation of building a portfolio website from the ground up using React and Next.js.
        </motion.h2>

        {/* Page Selector with Dropdowns */}
        <motion.div 
          className="text-[11pt] tracking-[-0.2pt] text-black/75 font-medium dark:text-white/40 relative mt-14 space-y-2 overflow-y-auto" 
          variants={pageLoadItem}
        >
          {content.sections.map((section, index) => (
            <div key={index} className="space-y-1">
              {/* Main Section Button */}
              <motion.button 
                onClick={() => handleChapterClick(index + 1)}
                className={`group transition-all duration-200 cursor-pointer text-left w-full flex items-start gap-2 ${
                  activeChapter === index + 1 
                    ? 'text-[12pt] dark:text-white/80' 
                    : 'text-black/20 dark:text-white/25 hover:text-black dark:hover:text-white/80 hover:text-[12.5pt]'
                }`}
              >
                <span className="text-[8pt] transition-all duration-200 align-top inline-block mt-0.5">
                  {String(index + 1).padStart(2, '0')}
                </span> 
                <span className="inline-block text-left whitespace-normal break-words flex-1">
                  {section.chapterTitle}
                </span>
                
                {/* Dropdown toggle for sections with subsections */}
                {section.subsections && section.subsections.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSection(index);
                    }}
                    className="p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded transition-colors"
                  >
                    {isSectionExpanded(index) ? (
                      <ChevronDownIcon className="w-3 h-3" />
                    ) : (
                      <ChevronRightIcon className="w-3 h-3" />
                    )}
                  </button>
                )}
              </motion.button>

              {/* Subsections Dropdown */}
              {section.subsections && section.subsections.length > 1 && isSectionExpanded(index) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-6 space-y-1 pl-4 border-l border-black/10 dark:border-white/20"
                >
                  {section.subsections.map((subsection, subIndex) => (
                    subsection.title && (
                      <button
                        key={subIndex}
                        className="text-[10pt] text-black/40 dark:text-white/30 hover:text-black/60 dark:hover:text-white/50 transition-colors text-left block w-full"
                        onClick={() => {
                          const element = document.getElementById(`subsection-${index}-${subIndex}`);
                          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                      >
                        {subsection.title}
                      </button>
                    )
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Column - Content */}
      <div className="col-span-5 mt-2 pl-6">
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
          {/* Content Sections */}
          {content.sections.map((section, index) => (
            <motion.div
              key={index}
              id={`section-${index + 1}`}
              variants={pageLoadItem}
              className="mb-12"
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
                  className="px-3 py-1 rounded-full bg-transparent glass-sm inline-block"
                  style={{
                    WebkitBackdropFilter: 'blur(1px) url(#backdrop-distortion)',
                    backdropFilter: 'blur(1px) url(#backdrop-distortion)',
                  }}
                >
                  {section.chapterTitle}
                </span>
              </h3>
              
              {/* Subsections */}
              {section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-8">
                  {/* Subsection with collapsible content */}
                  {subsection.title ? (
                    <div className="space-y-4">
                      {/* Subsection Header */}
                      <button
                        id={`subsection-${index}-${subIndex}`}
                        onClick={() => toggleSubsection(index, subIndex)}
                        className="flex items-center gap-2 text-black/65 dark:text-white tracking-tight font-semibold hover:text-black dark:hover:text-white/90 transition-colors text-left w-full group"
                      >
                        <span className="flex-1">{subsection.title}</span>
                        {subsection.isCollapsible && (
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            {isSubsectionExpanded(index, subIndex) ? (
                              <ChevronDownIcon className="w-4 h-4" />
                            ) : (
                              <ChevronRightIcon className="w-4 h-4" />
                            )}
                          </div>
                        )}
                      </button>

                      {/* Subsection Content */}
                      {(!subsection.isCollapsible || isSubsectionExpanded(index, subIndex)) && (
                        <motion.div
                          initial={subsection.isCollapsible ? { opacity: 0, height: 0 } : false}
                          animate={subsection.isCollapsible ? { opacity: 1, height: 'auto' } : false}
                          className="text-black/55 dark:text-white/60 leading-relaxed tracking-[-0.1pt] text-left"
                          dangerouslySetInnerHTML={{ __html: formatContent(subsection.content) }}
                        />
                      )}
                    </div>
                  ) : (
                    /* Regular content without title */
                    <div
                      className="text-black/55 dark:text-white/60 leading-relaxed tracking-[-0.1pt] text-left"
                      dangerouslySetInnerHTML={{ __html: formatContent(subsection.content) }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WebsiteWithDropdowns; 