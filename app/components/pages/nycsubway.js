'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useHideNav } from '../../context/HideNavContext';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Scroll Progress Tracker Component
const ScrollProgressTracker = ({ currentSection, totalSections, sectionRefs, isMobile }) => {
  // Check mobile state directly
  const [isMobileState, setIsMobileState] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640;
    }
    return false;
  });
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobileState(window.innerWidth < 640);
      };
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);
  
  const [showDebug, setShowDebug] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [previousSection, setPreviousSection] = useState(currentSection);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isEnabled, setIsEnabled] = useState(true);
  const hideTimerRef = useRef(null);
  const trackerRef = useRef(null);
  const contentRef = useRef(null);
  
  const sections = [
    'Intro',
    'Personal',
    'Expert',
    'Problem',
    'UWB',
    'Prototype',
    'Summary'
  ];

  // Toggle debug window with Tab key, toggle tracker with Shift+Tab
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Tab') {
        event.preventDefault();
        if (event.shiftKey) {
          // Shift+Tab toggles the progress tracker
          setIsEnabled(prev => !prev);
        } else {
          // Tab toggles debug window
          setShowDebug(prev => !prev);
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Show tracker when grouped section changes
  useEffect(() => {
    if (!isEnabled) return; // Don't show tracker if disabled
    
    const currentGroupedSection = getGroupedSection(currentSection);
    const previousGroupedSection = getGroupedSection(previousSection);
    
    if (currentGroupedSection !== previousGroupedSection) {
      // Clear any existing timer
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
      
      // Show tracker with GSAP animation
      if (trackerRef.current) {
        gsap.to(trackerRef.current, {
          scaleX: 1,
          duration: 0.4,
          ease: "expo.out"
        });
        if (contentRef.current) {
          gsap.to(contentRef.current, {
            x: 0,
            duration: 0.4,
            ease: "expo.out"
          });
        }
      }
      setIsVisible(true);
      setPreviousSection(currentSection);
      
      // COMMENTED OUT: Start hide timer only if not hovering
      // if (!isHovering) {
      //   hideTimerRef.current = setTimeout(() => {
      //     // Hide tracker with GSAP animation
      //     if (trackerRef.current) {
      //       gsap.to(trackerRef.current, {
      //         scaleX: 0,
      //         duration: 0.4,
      //         ease: "expo.in"
      //       });
      //       if (contentRef.current) {
      //         gsap.to(contentRef.current, {
      //           x: "200%",
      //           duration: 0.4,
      //           ease: "expo.in"
      //         });
      //       }
      //     }
      //     setIsVisible(false);
      //   }, 2000);
      // }
    }
  }, [currentSection, previousSection, isHovering, isEnabled]);

  // Handle hover state changes
  useEffect(() => {
    if (!isEnabled) return; // Don't handle hover if disabled
    
    if (isVisible) {
      if (isHovering) {
        // Clear timer when hovering
        if (hideTimerRef.current) {
          clearTimeout(hideTimerRef.current);
          hideTimerRef.current = null;
        }
      } else {
        // COMMENTED OUT: Start timer when not hovering
        // if (!hideTimerRef.current) {
        //   hideTimerRef.current = setTimeout(() => {
        //     // Hide tracker with GSAP animation
        //     if (trackerRef.current) {
        //       gsap.to(trackerRef.current, {
        //         scaleX: 0,
        //         duration: 0.3,
        //         ease: "power3.in"
        //       });
        //       if (contentRef.current) {
        //         gsap.to(contentRef.current, {
        //           x: "200%",
        //           duration: 0.3,
        //           ease: "power3.in"
        //         });
        //       }
        //     }
        //     setIsVisible(false);
        //   }, 2000);
        // }
      }
    }
  }, [isHovering, isVisible, isEnabled]);

  // Handle enable/disable changes
  useEffect(() => {
    if (!isEnabled && isVisible) {
      // Hide tracker immediately when disabled
      if (trackerRef.current) {
        gsap.to(trackerRef.current, {
          scaleX: 0,
          duration: 0.3,
          ease: "power2.in"
        });
        if (contentRef.current) {
          gsap.to(contentRef.current, {
            x: "200%",
            duration: 0.3,
            ease: "power2.in"
          });
        }
      }
      setIsVisible(false);
      // Clear any existing timer
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    }
  }, [isEnabled, isVisible]);

  // Calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Calculate progress as a percentage of total scrollable area
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Calculate initial progress
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map individual sections to grouped sections
  const getGroupedSection = (sectionNumber) => {
    if (sectionNumber <= 2) return 1; // Setup
    if (sectionNumber >= 4 && sectionNumber <= 6) return 2; // Personal Insight
    if (sectionNumber <= 7) return 3; // Expert Insight
    if (sectionNumber === 9) return 4; // Problem Statement
    if (sectionNumber <= 12) return 5; // UWB
    if (sectionNumber <= 17) return 6; // Prototype
    if (sectionNumber >= 18) return 7; // Summary
    return 6; // Default to Prototype for section 19
  };

  // Scroll to section function
  const scrollToSection = (groupNumber) => {
    let targetRef;
    switch (groupNumber) {
      case 1: targetRef = sectionRefs[0]; break; // Introduction: section 1
      case 2: targetRef = sectionRefs[3]; break; // Lived Experience: section 4
      case 3: targetRef = sectionRefs[5]; break; // Expert Insight: section 5
      case 4: targetRef = sectionRefs[8]; break; // Problem Statement: section 9
      case 5: targetRef = sectionRefs[10]; break; // Ultra Wideband: section 7
      case 6: targetRef = sectionRefs[12]; break; // Prototype: section 11
      case 7: targetRef = sectionRefs[17]; break; // Summary: section 18
      default: targetRef = sectionRefs[0]; break;
    }
    
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    } else {
      console.log(`Section ${groupNumber} not found or null`);
    }
  };

  const currentGroupedSection = getGroupedSection(currentSection);

  return (
    <>
      {/* Debug Window */}
      {showDebug && (
        <div className="fixed left-6 top-6 z-50 bg-black/80 backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/10 text-white text-xs font-mono">
          <div className="mb-2 font-semibold">Debug Info:</div>
          <div>Current Section: {currentSection}</div>
          <div>Grouped Section: {currentGroupedSection}</div>
          <div>Total Sections: {totalSections}</div>
          <div className="mt-2 text-yellow-300">
            Active: {sections[currentGroupedSection - 1] || 'None'}
          </div>
          <div className="mt-2 text-blue-300">
            Section Refs: {sectionRefs.filter(ref => ref !== null).length} valid
          </div>
        </div>
      )}

      {/* Progress Tracker */}
      {isEnabled && !isMobile && !isMobileState && (
        <div 
          ref={trackerRef}
          className="fixed right-0 z-50 hidden md:block"
          style={{
            top: `${15 + (scrollProgress * 0.7)}%`,
            transform: 'translateY(-50%) scaleX(0)',
            transformOrigin: 'right'
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >

        <div 
          ref={contentRef}
          className="bg-black rounded-l-3xl pr-2 pl-2 py-8 relative drop-shadow-[3px_6px_7px_rgba(0,0,0,0.5)]"
          style={{ transform: 'translateX(200%)' }}
        >
          
          
          {/* Top right rounded corner SVG */}
          <svg 
            className="absolute -top-6 right-0 w-6 h-6 drop-shadow-2xl"
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0 24 L24 24 L24 0 Q24 24 0 24 Z" 
              fill="black"
            />
          </svg>
          
          {/* Bottom right rounded corner SVG */}
          <svg 
            className="absolute -bottom-6 right-0 w-6 h-6 drop-shadow-2xl"
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0 0 L24 0 L24 24 Q24 0 0 0 Z" 
              fill="black"
            />
          </svg>
          
          <div className="flex flex-col space-y-2 items-end">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index + 1)}
                className={`tracking-tight font-medium text-foreground transition-all duration-300 cursor-pointer ${
                  currentGroupedSection === index + 1
                    ? ' text-white text-md font-semibold'
                    : ' text-xs opacity-25 hover:text-base hover:opacity-100 text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
      )}
    </>
  );
};

// Mobile Screen Component
const MobileErrorScreen = () => {
  return (
    <div className="h-[90vh] flex col-span-full items-center justify-center text-white px-6" >
      <div className=" m-auto text-center">
        {/* Icon */}
        <div className="mb-4 -mt-10">
          <img src="/subway/section2emoji2.png" alt="Section 1 Emoji" className="w-52 h-auto mx-auto" />
          
        </div>
        
        {/* Title */}
        <h1 className="text-4xl font-medium tracking-tight mb-10 text-white">
          Check back soon! 
        </h1>
        
        {/* Message */}
        <p className="text text-gray-300 mb-6 leading-relaxed">
          I have unfortunately not had the courage to face the unsurmountable beast that is adapting this page that was meticulously designed and animated on desktop for the mobile experience.
        </p>

        <p className="text text-gray-300 mb-18 leading-relaxed">
          Rest assured, I will be getting to this in due time. For now, you may view this page on your desktop device.
        </p>
        
        
        
        {/* CTA */}
        <button 
          onClick={() => window.history.back()}
          className=" text-white p-3 rounded-full border-1 glass-sm mt-4"
        >
          <ChevronLeftIcon className="w-8 h-8 " />
        </button>
        
      </div>
    </div>
  );
};

const NycSubway = ({ className }) => {
  const { setIsWhiteBG, setHideFooter } = useHideNav();
  const isMobile = useMobileDetection();
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 7;

  // Hide footer on this page
  useEffect(() => {
    setHideFooter(true);
    return () => {
      setHideFooter(false);
    };
  }, [setHideFooter]);

  //#region Refs
  // Section 1 refs (title)
  const section1Ref = useRef(null);
  
  // Section 2 refs (speech bubbles + section 3 content)
  const section2Ref = useRef(null);
  const section2BubbleRefs = useRef([]);
  const section2EmojiRef = useRef(null);
  const section2MainTitleRef = useRef(null);
  const section2ProgressLineRef = useRef(null);
  const section3EmojiProgressBorderRef = useRef(null);
  
  // Section 3 refs (text replacement + emoji) - now part of section 2
  const section3Text1Ref = useRef(null);
  const section3Text2Ref = useRef(null);
  const section3EmojiRef = useRef(null);
  const section3Emoji2Ref = useRef(null);
  
  // Section 4 refs (text addition + emoji + gradient)
  const section4Ref = useRef(null);
  const section4Text1Ref = useRef(null);
  const section4Text2Ref = useRef(null);
  const section4EmojiRef = useRef(null);
  const section4BackgroundRef = useRef(null);
  
  // Section 5 refs (two text columns)
  const section5Ref = useRef(null);
  const section5Text1Ref = useRef(null);
  const section5Text2Ref = useRef(null);
  const section5TextBodyRef = useRef(null);
  
  // Section 6 refs (identical to section 4)
  const section6Ref = useRef(null);
  const section6Text1Ref = useRef(null);
  const section6Text2Ref = useRef(null);
  const section6EmojiRef = useRef(null);
  const section6BackgroundRef = useRef(null);
  
  // Section 7 refs (similar to section 6)
  const section7Ref = useRef(null);
  const section7Text1Ref = useRef(null);
  const section7Text2Ref = useRef(null);
  const section7EmojiRef = useRef(null);
  const section7BackgroundRef = useRef(null);
  
  // Section 8 refs (four columns) - now part of section 7
  const section8EmojiRef = useRef(null);
  const section8Emoji1Ref = useRef(null);
  const section8Emoji2Ref = useRef(null);
  const section8Emoji3Ref = useRef(null);
  const section8Text1Ref = useRef(null);
  const section8Text2Ref = useRef(null);
  const section8Text3Ref = useRef(null);

  // Section 9 refs (3-phase animation: icon, text, background)
  const section9Ref = useRef(null);
  const section9IconRef = useRef(null);
  const section9TextRef = useRef(null);
  const section9BackgroundRef = useRef(null);
  const section9RectangleRef = useRef(null);
  const section9RectangleText1Ref = useRef(null);
  const section9RectangleText2Ref = useRef(null);
  const section9RectangleText3Ref = useRef(null);
  const section9RectangleText4Ref = useRef(null);
  const section9RectangleText5Ref = useRef(null);
  const section9TextContainerRef = useRef(null);
  const section9EmojiRef = useRef(null);

  // Section 11 refs (rectangle replacement with 3 columns)
  const section11Ref = useRef(null);
  const section11OriginalRef = useRef(null);
  const section11NewRef = useRef(null);
  const section11Text1Ref = useRef(null);
  const section11Text2Ref = useRef(null);
  const section11Text3Ref = useRef(null);
  const section11TopParagraphRef = useRef(null);
  
  // Section 11 phase 2 refs (second content replacement)
  const section11Phase2Ref = useRef(null);
  const section11Phase2Text1Ref = useRef(null);
  const section11Phase2Text2Ref = useRef(null);
  const section11Phase2Text3Ref = useRef(null);
  const section11Phase2TopParagraphRef = useRef(null);
  const section11Phase2EmojiRef = useRef(null);
  const section11Header1Ref = useRef(null);
  const section11Header2Ref = useRef(null);
  
  // Section 12 refs (text addition + emoji + gradient) - duplicate of section 4
  const section12Ref = useRef(null);
  const section12Text1Ref = useRef(null);
  const section12Text2Ref = useRef(null);
  const section12EmojiRef = useRef(null);
  const section12BackgroundRef = useRef(null);
  const section12UnderlineRef = useRef(null);
  
  // Section 13 refs (3 columns: icon+text, image, paragraph)
  const section13Ref = useRef(null);
  const section13IconRef = useRef(null);
  const section13Text1Ref = useRef(null);
  const section13ImageRef = useRef(null);
  const section13ParagraphRef = useRef(null);

  // Section 14 refs (3 columns: icon+text, image, paragraph) - identical to section 13
  const section14Ref = useRef(null);
  const section14IconRef = useRef(null);
  const section14Text1Ref = useRef(null);
  const section14ImageRef = useRef(null);
  const section14LockscreenRef = useRef(null);
  const section14Paragraph1Ref = useRef(null);
  const section14Paragraph2Ref = useRef(null);

  // Section 15 refs (3 columns: icon+text, image, paragraph) - duplicate of section 14
  const section15Ref = useRef(null);
  const section15IconRef = useRef(null);
  const section15Text1Ref = useRef(null);
  const section15ImageRef = useRef(null);
  const section15LockscreenRef = useRef(null);
  const section15Column3ImageRef = useRef(null);
  const section15Paragraph1Ref = useRef(null);
  const section15Paragraph2Ref = useRef(null);
  
  // Phase 3 refs for section 15
  const section15Phase3IconRef = useRef(null);
  const section15Phase3HeaderRef = useRef(null);
  const section15Phase3PhoneRef = useRef(null);
  const section15Phase3TextRef = useRef(null);
  
  // Phase 4D refs for section 15
  const section15Phase4DImageRef = useRef(null);
  const section15Phase4DTextRef = useRef(null);
  
  // Section 16 refs (3 columns: icon+text, image, paragraph) - identical to section 14
  const section16Ref = useRef(null);
  const section16IconRef = useRef(null);
  const section16Text1Ref = useRef(null);
  const section16ImageRef = useRef(null);
  const section16Paragraph1Ref = useRef(null);
  const section16Paragraph2Ref = useRef(null);

  // Section 17 refs (3 columns: icon+text, image, paragraph) - duplicate of section 15
  const section17Ref = useRef(null);
  const section17IconRef = useRef(null);
  const section17Text1Ref = useRef(null);
  const section17ImageRef = useRef(null);
  const section17LockscreenRef = useRef(null);
  const section17Paragraph1Ref = useRef(null);
  const section17Paragraph2Ref = useRef(null);
  
  // Section 17 phase 3 refs (second content replacement)
  const section17Phase3IconRef = useRef(null);
  const section17Phase3HeaderRef = useRef(null);
  const section17Phase3PhoneRef = useRef(null);
  const section17Phase3TextRef = useRef(null);
  
  // Section 18 refs (4 columns: image, image, 2 stacked images, image)
  const section18Ref = useRef(null);
  const section18Image1Ref = useRef(null);
  const section18Image2Ref = useRef(null);
  const section18Image3TopRef = useRef(null);
  const section18Image3BottomRef = useRef(null);
  const section18Image4Ref = useRef(null);

  // Section 19 refs (3 columns: 3 images)
  const section19Ref = useRef(null);
  const section19Image1Ref = useRef(null);
  const section19Image2Ref = useRef(null);
  const section19Image3Ref = useRef(null);
  //#endregion

  // Section tracking for progress indicator
  const sectionRefs = [
    section1Ref, // Section 1 (Title)
    section2Ref,
    null, // Section 3 (combined with section 2)
    section4Ref,
    section5Ref,
    section6Ref,
    section7Ref,
    null, // Section 8 (combined with section 7)
    section9Ref,
    null, // Section 10 (no ref)
    section11Ref,
    section12Ref,
    section13Ref,
    section14Ref,
    section15Ref,
    section16Ref,
    section17Ref,
    section18Ref,
    section19Ref
  ];

  // Animations
  useEffect(() => {
    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // MOBILE FIX: Enable normalized scrolling for touch devices
    ScrollTrigger.normalizeScroll(true);

    // Create intersection observer for section tracking
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.dataset.section);
            if (sectionIndex !== null && sectionIndex !== undefined) {
              setCurrentSection(sectionIndex + 1); // Convert 0-based to 1-based
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.1
      }
    );

    // Observe all sections
    sectionRefs.forEach((ref, index) => {
      if (ref && ref.current) {
        ref.current.dataset.section = index;
        sectionObserver.observe(ref.current);
      }
    });

    // Set initial state for section 2 bubbles - start hidden for scroll animation
    section2BubbleRefs.current.forEach(bubble => {
      if (bubble) {
        gsap.set(bubble, { opacity: 0, scale: 0});
      }
    });

    // Set initial state for section 2 emoji - start hidden for onEnter animation
    gsap.set(section2EmojiRef.current, { opacity: 0, scale: 0.9 });
    
    // Set initial state for section 2 main title - start visible for onEnter animation
    gsap.set(section2MainTitleRef.current, { opacity: 1, scale: 1 });
    
    // Set initial state for section 2 progress line - start hidden
    gsap.set(section2ProgressLineRef.current, { scaleX: 0, opacity: 0.25 });
    
    // Set initial state for emoji progress border - start hidden
    gsap.set(section3EmojiProgressBorderRef.current, { 
      strokeDasharray: '0, 1000',
      opacity: 0 
    });

    //#region Initial States
    // Set initial state for section 3
    gsap.set(section3Text1Ref.current, { opacity: 0, y: 75 });
    gsap.set(section3Text2Ref.current, { opacity: 0, scale: 1.2});
    gsap.set(section3EmojiRef.current, { opacity: 0 });
    gsap.set(section3Emoji2Ref.current, { opacity: 0 });
    
    // Set initial state for section 4
    gsap.set(section4Text1Ref.current, { opacity: 1, scale: 2, y: 0 });
    gsap.set(section4Text2Ref.current, { opacity: 0, scale: 1.1 });
    gsap.set(section4EmojiRef.current, { opacity: 0, y: 100 });
    gsap.set(section4BackgroundRef.current, { opacity: 0 });
    
    // Set initial state for section 5
    gsap.set(section5Text1Ref.current, { opacity: 0, y: 50 });
    gsap.set(section5Text2Ref.current, { opacity: 0, y: 50 });
    gsap.set(section5TextBodyRef.current, { opacity: 1, y: 0 });
    
    // Set initial state for section 6 (identical to section 4)
    gsap.set(section6Text1Ref.current, { opacity: 1, scale: 2, y: 0 });
    gsap.set(section6Text2Ref.current, { opacity: 0, scale: 1.1 });
    gsap.set(section6EmojiRef.current, { opacity: 0, y: 100 });
    gsap.set(section6BackgroundRef.current, { opacity: 0 });
    
    // Set initial state for section 7
    gsap.set(section7BackgroundRef.current, { opacity: 0 });
    
    // Set initial state for section 8 (now hidden initially since it's combined with section 7)
    gsap.set(section8EmojiRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(section8Emoji1Ref.current, { opacity: 0 });
    gsap.set(section8Emoji2Ref.current, { opacity: 0 });
    gsap.set(section8Emoji3Ref.current, { opacity: 0 });
    gsap.set(section8Text1Ref.current, { opacity: 0, y: 50 });
    gsap.set(section8Text2Ref.current, { opacity: 0, y: 50 });
    gsap.set(section8Text3Ref.current, { opacity: 0, y: 50 });

    // Set initial state for section 11
    gsap.set(section11OriginalRef.current, { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' });
    gsap.set(section11NewRef.current, { opacity: 0, y: 50, filter: 'blur(4px)' });
    gsap.set(section11Text1Ref.current, { opacity: 0, y: 30 });
    gsap.set(section11Text2Ref.current, { opacity: 0, y: 30 });
    gsap.set(section11Text3Ref.current, { opacity: 0, y: 30 });
    gsap.set(section11TopParagraphRef.current, { opacity: 0, y: 20 });
    gsap.set(section11Header1Ref.current, { opacity: 0, y: 20 });
    gsap.set(section11Header2Ref.current, { opacity: 0, x: -20 });
    
    // Set initial state for section 11 phase 2
    gsap.set(section11Phase2Text1Ref.current, { opacity: 0, y: 30 });
    gsap.set(section11Phase2Text2Ref.current, { opacity: 0, y: 30 });
    gsap.set(section11Phase2Text3Ref.current, { opacity: 0, y: 30 });
    gsap.set(section11Phase2TopParagraphRef.current, { opacity: 0 });
    gsap.set(section11Phase2EmojiRef.current, { opacity: 0, y: 100 });
    
    // Set initial state for section 12 (identical to section 4)
    gsap.set(section12Text1Ref.current, { opacity: 1, scale: 2, y: 0 });
    gsap.set(section12Text2Ref.current, { opacity: 0, scale: 1.1 });
    gsap.set(section12EmojiRef.current, { opacity: 0, y: 100 });
    gsap.set(section12BackgroundRef.current, { opacity: 0 });
    gsap.set(section12UnderlineRef.current, { scaleX: 0 });
    
    // Set initial state for section 13
    gsap.set(section13IconRef.current, { opacity: 0, scale: 0.6, y: 0, rotation: -15 });
    gsap.set(section13Text1Ref.current, { opacity: 0, y: 30 });
    gsap.set(section13ImageRef.current, { opacity: 0.7, scale: 0.95, transformOrigin: "center center", filter: "blur(2px)" });
    gsap.set(section13ParagraphRef.current, { opacity: 0, y: 30 });

    // Set initial state for section 14 (header and video already visible)
    gsap.set(section14IconRef.current, { opacity: 1, scale: 1, y: 0, rotation: 0 });
    gsap.set(section14Text1Ref.current, { opacity: 1, y: 0 });
    gsap.set(section14ImageRef.current, { opacity: 1, transformOrigin: "center center" });
    gsap.set(section14LockscreenRef.current, { opacity: 0, scale: 1, transformOrigin: "center center" });
    gsap.set(section14Paragraph1Ref.current, { opacity: 0, y: 30 });
    gsap.set(section14Paragraph2Ref.current, { opacity: 0, y: 30 });

    // Set initial state for section 15 (header already visible)
    gsap.set(section15IconRef.current, { opacity: 1, scale: 1, y: 0, rotation: 0 });
    gsap.set(section15Text1Ref.current, { opacity: 1, y: 0 });
    gsap.set(section15ImageRef.current, { opacity: 1, transformOrigin: "center center" });
    gsap.set(section15LockscreenRef.current, { opacity: 0, scale: 1, transformOrigin: "center center" });
    gsap.set(section15Column3ImageRef.current, { opacity: 0, y: 30 });
    gsap.set(section15Paragraph1Ref.current, { opacity: 0, y: 30 });
    gsap.set(section15Paragraph2Ref.current, { opacity: 0, y: 30 });

    gsap.set(section15Phase3IconRef.current, { opacity: 0, scale: 0.8, y: 30, rotation: -21 });
    gsap.set(section15Phase3HeaderRef.current, { opacity: 0, y: 30 });
    gsap.set(section15Phase3PhoneRef.current, { opacity: 0, scale: 0.9, x: 0 });
    gsap.set(section15Phase3TextRef.current, { opacity: 0, y: 30 });
    
    // Initialize phase 4D elements as hidden
    gsap.set(section15Phase4DImageRef.current, { opacity: 0, y: 30 });
    gsap.set(section15Phase4DTextRef.current, { opacity: 0, y: 30 });
    
    // Set initial state for section 16 (header already visible)
    gsap.set(section16IconRef.current, { opacity: 1, scale: 1, y: 0, rotation: 0 });
    gsap.set(section16Text1Ref.current, { opacity: 1, y: 0 });
    gsap.set(section16ImageRef.current, { opacity: 1, transformOrigin: "center center" });
    gsap.set(section16Paragraph1Ref.current, { opacity: 0, y: 30 });
    gsap.set(section16Paragraph2Ref.current, { opacity: 0, y: 30 });

    // Set initial state for section 17 (header already visible)
    gsap.set(section17IconRef.current, { opacity: 1, scale: 1, y: 0, rotation: 0 });
    gsap.set(section17Text1Ref.current, { opacity: 1, y: 0 });
    gsap.set(section17ImageRef.current, { opacity: 1, transformOrigin: "center center" });
    gsap.set(section17LockscreenRef.current, { opacity: 0, scale: 1, transformOrigin: "center center" });
    gsap.set(section17Paragraph1Ref.current, { opacity: 0, y: 30 });
    gsap.set(section17Paragraph2Ref.current, { opacity: 0, y: 30 });
    
    // Set initial state for section 17 phase 3
    gsap.set(section17Phase3IconRef.current, { opacity: 0, scale: 0.8, y: 30, rotation: -21 });
    gsap.set(section17Phase3HeaderRef.current, { opacity: 0, y: 30 });
    gsap.set(section17Phase3PhoneRef.current, { opacity: 0, x: 0 });
    gsap.set(section17Phase3TextRef.current, { opacity: 0, y: 30 });
    
    
    //#endregion

    //#region Animation States
    let section3AnimationComplete = false;
    let section4AnimationComplete = false;
    let section5AnimationComplete = false;
    let section6AnimationComplete = false;
    let section7AnimationComplete = false;
      let section8AnimationComplete = false;
  let section9AnimationComplete = false;
  let section11AnimationComplete = false;
    let section11Phase2AnimationComplete = false;
    let section12AnimationComplete = false;
    let section13AnimationComplete = false;
    let section14AnimationComplete = false;
    let section15AnimationComplete = false;
    let section16AnimationComplete = false;
    let section17AnimationComplete = false;
    //#endregion

    // SECTION 2 (Bubbles) ANIMATION 
    ScrollTrigger.create({
      trigger: section2Ref.current,
      start: "bottom 100%",
      end: "+=220%", // Extend the trigger area for scroll control to accommodate 4 phases
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      ignoreMobileResize: true, // Prevent iOS address bar from breaking pinning
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Phase 1: Animate bubbles in with staggered timing (0-15%)
        if (progress <= 0.15) {
          const phase1Progress = progress / 0.15; // 0 to 1 for phase 1
          const totalBubbles = section2BubbleRefs.current.length;
          
          section2BubbleRefs.current.forEach((bubble, index) => {
            if (bubble) {
              // Each bubble gets a portion of the phase 1 progress
              const bubbleStart = index / totalBubbles;
              const bubbleEnd = (index + 1) / totalBubbles;
              const bubbleProgress = Math.max(0, Math.min(1, 
                (phase1Progress - bubbleStart) / (bubbleEnd - bubbleStart)
              ));
              
              const easedProgress = gsap.parseEase("back.out(0.8)")(bubbleProgress);
              gsap.set(bubble, {
                opacity: easedProgress,
                scale: easedProgress
              });
            }
          });
          
          // Emoji animates with first bubble
          if (section2EmojiRef.current) {
            const emojiProgress = Math.min(1, phase1Progress * totalBubbles);
            const easedEmojiProgress = gsap.parseEase("back.out(0.8)")(emojiProgress);
            gsap.set(section2EmojiRef.current, {
              opacity: easedEmojiProgress,
              scale: 0.9 + (0.1 * easedEmojiProgress)
            });
          }
          
          // Keep main title visible
          gsap.set(section2MainTitleRef.current, { opacity: 1, scale: 1 });
          
          // Keep section 3 elements hidden
          gsap.set(section3Text1Ref.current, { opacity: 0, scale: 1 });
          gsap.set(section3Text2Ref.current, { opacity: 0, scale: 1.2 });
          gsap.set(section3EmojiRef.current, { opacity: 0 });
          gsap.set(section3Emoji2Ref.current, { opacity: 0 });
        }
        // Phase 2: Fade out bubbles, emoji, and main title (15-40%)
        else if (progress > 0.15 && progress <= 0.40) {
          const phase2Progress = (progress - 0.15) / 0.25; // 0 to 1 for phase 2
          const easedPhase2Progress = gsap.parseEase("power3.inOut")(phase2Progress);
          
          // Fade out all bubbles
          section2BubbleRefs.current.forEach((bubble) => {
            if (bubble) {
              gsap.set(bubble, { 
                opacity: 1 - easedPhase2Progress, 
                scale: 1 - (0.2 * easedPhase2Progress) 
              });
            }
          });
          
          // Fade out section 2 emoji
          gsap.set(section2EmojiRef.current, { 
            opacity: 1 - easedPhase2Progress, 
            scale: 1 - (0.1 * easedPhase2Progress) 
          });
          
          // Fade out the main title text
          gsap.set(section2MainTitleRef.current, { 
            opacity: 1 - easedPhase2Progress,
            scale: 1 - (0.1 * easedPhase2Progress)
          });
          
          // Keep section 3 elements hidden during fade out phase
          gsap.set(section3Text1Ref.current, { opacity: 0, scale: 1 });
          gsap.set(section3Text2Ref.current, { opacity: 0, scale: 1.2 });
          gsap.set(section3EmojiRef.current, { opacity: 0 });
          gsap.set(section3Emoji2Ref.current, { opacity: 0 });
        }
        // Phase 3: "We all already knew that" (40-50%)
        else if (progress <= 0.50) {
          const phase3Progress = (progress - 0.40) / 0.10; // 0 to 1 for phase 3
          const easedPhase3Progress = gsap.parseEase("expo.out")(phase3Progress);
          
          // Keep everything hidden from previous phases
          section2BubbleRefs.current.forEach((bubble) => {
            if (bubble) {
              gsap.set(bubble, { opacity: 0, scale: 0 });
            }
          });
          gsap.set(section2EmojiRef.current, { opacity: 0, scale: 0.9 });
          
          // Keep main title hidden
          gsap.set(section2MainTitleRef.current, { opacity: 0, scale: 0.9 });
          
          // Animate in "We all already knew that"
          gsap.set(section3Text1Ref.current, {
            opacity: easedPhase3Progress,
            y: 75 - (75 * easedPhase3Progress)
          });
          
          // Animate in emoji in phase 3
          gsap.set(section3EmojiRef.current, {
            opacity: easedPhase3Progress,
            scale: 0.75 + (0.15 * easedPhase3Progress)
          });
          
          // Keep progress line hidden in phase 3
          gsap.set(section2ProgressLineRef.current, {
            scaleX: 0,
            opacity: 0.25
          });
          
          // Keep emoji progress border hidden in phase 3
          gsap.set(section3EmojiProgressBorderRef.current, {
            strokeDasharray: '0, 1000',
            opacity: 0
          });
          
          // Keep other section 3 elements hidden
          gsap.set(section3Text2Ref.current, { opacity: 0, scale: 1.2 });
          gsap.set(section3Emoji2Ref.current, { opacity: 0 });
        }
        // Phase 3b: Pause (50-80%)
        else if (progress <= 0.80) {
          const pauseProgress = (progress - 0.50) / 0.30; // 0 to 1 for pause duration
          const easedPauseProgress = gsap.parseEase("power2.out")(pauseProgress);
          
          // Keep everything hidden from previous phases
          section2BubbleRefs.current.forEach((bubble) => {
            if (bubble) {
              gsap.set(bubble, { opacity: 0, scale: 0 });
            }
          });
          gsap.set(section2EmojiRef.current, { opacity: 0, scale: 0.9 });
          
          // Keep main title hidden
          gsap.set(section2MainTitleRef.current, { opacity: 0, scale: 0.9 });
          
          // Keep "We all already knew that" visible during pause
          gsap.set(section3Text1Ref.current, { opacity: 1, y: 0 });
          
          // Keep emoji visible during pause
          gsap.set(section3EmojiRef.current, { opacity: 1, scale: 0.9 });
          
          // Animate progress line to show pause progress
          gsap.set(section2ProgressLineRef.current, {
            scaleX: easedPauseProgress, // Animate from 0 to 1 during pause
            opacity: 0.25
          });
          
          // Animate emoji progress border during pause
          const circumference = 2 * Math.PI * 160; // radius of 160px
          const dashOffset = circumference * (1 - easedPauseProgress);
          gsap.set(section3EmojiProgressBorderRef.current, {
            strokeDasharray: `${circumference}, ${circumference}`,
            strokeDashoffset: dashOffset,
            opacity: 0.3
          });
          
          // Keep other section 3 elements hidden
          gsap.set(section3Text2Ref.current, { opacity: 0, scale: 1.2 });
          gsap.set(section3Emoji2Ref.current, { opacity: 0 });
        }
        // Phase 4: "However, I decided to take a crack at it" (80-100%)
        else {
          const phase4Progress = (progress - 0.80) / 0.20; // 0 to 1 for phase 4
          const easedPhase4Progress = gsap.parseEase("back.out(2)")(phase4Progress);
          
          // Keep everything hidden from previous phases
          section2BubbleRefs.current.forEach((bubble) => {
            if (bubble) {
              gsap.set(bubble, { opacity: 0, scale: 0 });
            }
          });
          gsap.set(section2EmojiRef.current, { opacity: 0, scale: 0.9 });
          
          // Keep main title hidden
          gsap.set(section2MainTitleRef.current, { opacity: 0, scale: 0.9 });
          
          // "We all already knew that" scales down and fades out
          gsap.set(section3Text1Ref.current, { 
            opacity: 1 - easedPhase4Progress,
            scale: 1 - (0.2 * easedPhase4Progress)
          });
          
          // Crossfade emoji in phase 4 - first emoji fades out, second emoji fades in
          gsap.set(section3EmojiRef.current, { 
            opacity: 1 - easedPhase4Progress,
            scale: 0.9
          });
          gsap.set(section3Emoji2Ref.current, { 
            opacity: easedPhase4Progress,
            scale: 0.9
          });
          
          // Fade out progress line
          gsap.set(section2ProgressLineRef.current, {
            opacity: 0.25 - (0.25 * easedPhase4Progress) // Fade out from 0.25 to 0
          });
          
          // Keep emoji progress border visible in phase 4
          gsap.set(section3EmojiProgressBorderRef.current, {
            opacity: 0.3
          });
          
          // Animate in "However, I decided to take a crack at it"
          gsap.set(section3Text2Ref.current, {
            opacity: easedPhase4Progress,
            scale: 1.15 - (0.15 * easedPhase4Progress)
          });
        }
        
        // Mark animations as complete when all phases finish
        if (progress >= 1) {
          section3AnimationComplete = true;
        }
      }
    });
    
    // SECTION 4 (Look Inwards) ANIMATION
    ScrollTrigger.create({
      trigger: section4Ref.current,
      start: "bottom 100%",
      end: "+=30%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      ignoreMobileResize: true, // Prevent iOS address bar from breaking pinning
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Animation happens from 0% to 100% of scroll (no delays)
        const adjustedProgress = progress; // 0 to 1 for actual animation
        
        // Text 1 stays, Text 2 fades in, Emoji appears, Background fades in
        const textProgress = Math.min(1, adjustedProgress); // Cap at 1
        
        // Apply easing to the progress
        const easedBackProgress = gsap.parseEase("back.out")(textProgress);
        const easedProgress = gsap.parseEase("expo.out")(textProgress);
        
        // Text 1 scales down and moves upward as text2 appears
        gsap.set(section4Text1Ref.current, {
          opacity: 1,
          scale: 2 - (0.8 * easedBackProgress), // Scales from 2 to 1
          y: -80 * easedBackProgress // Moves up 40px as animation progresses
        });
        
        // Text 2 fades in, moves up, and scales up
        gsap.set(section4Text2Ref.current, {
          opacity: easedBackProgress,
          y: 80 - (80 * easedBackProgress), // Moves up from 120px below to 0px
          scale: 0.8 + (0.2 * easedBackProgress) // Scales from 0.8 to 1.0
        });
        
        // Emoji fades in and moves up
        gsap.set(section4EmojiRef.current, {
          opacity: easedBackProgress,
          y: 80 - (80 * easedProgress)
        });
        
        // Background gradient fades in
        gsap.set(section4BackgroundRef.current, {
          opacity: easedProgress
        });
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section4AnimationComplete = true;
        }
      }
    });
    
    // SECTION 5 (Personal Insights) ANIMATION
    ScrollTrigger.create({
      trigger: section5Ref.current,
      start: "bottom 100%",
      end: "+=50%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      ignoreMobileResize: true, // Prevent iOS address bar from breaking pinning
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Phase 1: Text body cross-fades with Text 1 (0-50%)
        if (progress <= 0.5) {
          const phase1Progress = progress / 0.5; // 0 to 1 for phase 1
          const phase1FadeOutProgress = gsap.parseEase("expo.out")(phase1Progress);
          const phase1FadeInProgress = gsap.parseEase("power3.inOut")(phase1Progress);
          
          // Text body fades out while Text 1 fades in (cross-fade)
          gsap.set(section5TextBodyRef.current, {
            opacity: 1 - phase1FadeOutProgress,
            y: 0
          });
          
          gsap.set(section5Text1Ref.current, {
            opacity: phase1FadeInProgress,
            y: 50 - (50 * phase1FadeInProgress)
          });
          gsap.set(section5Text2Ref.current, {
            opacity: 0,
            y: 50
          });
        } 
        // Phase 2: Text 2 fades in (50-100%)
        else {
          const phase2Progress = (progress - 0.5) / 0.5; // 0 to 1 for phase 2
          const easedPhase2Progress = gsap.parseEase("power4.out")(phase2Progress);
          
          // Text body stays hidden
          gsap.set(section5TextBodyRef.current, { opacity: 0, y: 0 });
          
          gsap.set(section5Text1Ref.current, {
            opacity: 1,
            y: 0
          });
          gsap.set(section5Text2Ref.current, {
            opacity: easedPhase2Progress,
            y: 50 - (50 * easedPhase2Progress)
          });
        }
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section5AnimationComplete = true;
        }
      }
    });
    
    // SECTION 6 (look to someone) ANIMATION
    ScrollTrigger.create({
      trigger: section6Ref.current,
      start: "bottom 100%",
      end: "+=25%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      ignoreMobileResize: true, // Prevent iOS address bar from breaking pinning
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Animation happens from 0% to 100% of scroll (no delays)
        const adjustedProgress = progress; // 0 to 1 for actual animation
        
        // Text 1 stays, Text 2 fades in, Emoji appears, Background fades in
        const textProgress = Math.min(1, adjustedProgress); // Cap at 1
        
        // Apply easing to the progress
        const easedProgress = gsap.parseEase("back.out")(textProgress);
        const easedExpoProgress = gsap.parseEase("expo.out")(textProgress);
        
        // Text 1 scales down and moves upward as text2 appears
        gsap.set(section6Text1Ref.current, {
          opacity: 1,
          scale: 2 - (0.8 * easedProgress), // Scales from 2 to 1
          y: -120 * easedProgress // Moves up 40px as animation progresses
        });
        
        // Text 2 fades in, moves up, and scales up
        gsap.set(section6Text2Ref.current, {
          opacity: easedProgress,
          y: 140 - (140 * easedProgress), // Moves up from 140px below to 0px
          scale: 0.8 + (0.2 * easedProgress) // Scales from 0.8 to 1.0
        });
        
        // Emoji fades in and moves up
        gsap.set(section6EmojiRef.current, {
          opacity: easedProgress,
          y: 100 - (100 * easedExpoProgress)
        });
        
        // Background gradient fades in
        gsap.set(section6BackgroundRef.current, {
          opacity: easedProgress
        });
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section6AnimationComplete = true;
        }
      }
    });
    
    // SECTION 7+8 (Expert INsights) ANIMATION
    ScrollTrigger.create({
      trigger: section7Ref.current,
      start: "bottom 100%",
      end: "+=90%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      ignoreMobileResize: true, // Prevent iOS address bar from breaking pinning
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Phase 1: Fade out section 7 content (0-25%)
        if (progress <= 0.25) {
          const phase1Progress = progress / 0.25; // 0 to 1 for phase 1
          const easedPhase1Progress = gsap.parseEase("power3.inOut")(phase1Progress);
          
          // Fade out section 7 content
          gsap.set(section7Text1Ref.current, {
            opacity: 1 - easedPhase1Progress,
            y: 0
          });
          
          gsap.set(section7Text2Ref.current, {
            opacity: 1 - easedPhase1Progress,
            y: 0
          });
          
          gsap.set(section7EmojiRef.current, {
            opacity: 1 - easedPhase1Progress
          });
          
          // Keep section 8 content hidden during phase 1
          gsap.set(section8EmojiRef.current, { opacity: 0, scale: 0.8 });
          gsap.set(section8Emoji1Ref.current, { opacity: 0 });
          gsap.set(section8Emoji2Ref.current, { opacity: 0 });
          gsap.set(section8Emoji3Ref.current, { opacity: 0 });
          gsap.set(section8Text1Ref.current, { opacity: 0, y: 50 });
          gsap.set(section8Text2Ref.current, { opacity: 0, y: 50 });
          gsap.set(section8Text3Ref.current, { opacity: 0, y: 50 });
        }
        // Phase 2: Animate section 8 emoji and first text column (25-50%)
        else if (progress <= 0.5) {
          const phase2Progress = (progress - 0.25) / 0.25; // 0 to 1 for phase 2
          const easedPhase2Progress = gsap.parseEase("expo.out")(phase2Progress);
          
          // Keep section 7 content hidden
          gsap.set(section7Text1Ref.current, { opacity: 0, y: 0 });
          gsap.set(section7Text2Ref.current, { opacity: 0, y: 0 });
          gsap.set(section7EmojiRef.current, { opacity: 0 });
          
          // Animate section 8 emoji container and first emoji
          gsap.set(section8EmojiRef.current, {
            opacity: easedPhase2Progress,
            scale: 0.8 + (0.2 * easedPhase2Progress)
          });
          gsap.set(section8Emoji1Ref.current, {
            opacity: easedPhase2Progress
          });
          
          // Animate first text column
          gsap.set(section8Text1Ref.current, {
            opacity: easedPhase2Progress,
            y: 50 - (50 * easedPhase2Progress)
          });
          
          // Keep other section 8 content hidden
          gsap.set(section8Emoji2Ref.current, { opacity: 0 });
          gsap.set(section8Emoji3Ref.current, { opacity: 0 });
          gsap.set(section8Text2Ref.current, { opacity: 0, y: 50 });
          gsap.set(section8Text3Ref.current, { opacity: 0, y: 50 });
        }
        // Phase 3: Second text column and change emoji (50-75%)
        else if (progress <= 0.75) {
          const phase3Progress = (progress - 0.5) / 0.25; // 0 to 1 for phase 3
          const easedPhase3Progress = gsap.parseEase("expo.out")(phase3Progress);
          
          // Keep section 7 content hidden
          gsap.set(section7Text1Ref.current, { opacity: 0, y: 0 });
          gsap.set(section7Text2Ref.current, { opacity: 0, y: 0 });
          gsap.set(section7EmojiRef.current, { opacity: 0 });
          
          // Keep emoji container and first text column visible
          gsap.set(section8EmojiRef.current, { opacity: 1, scale: 1 });
          gsap.set(section8Text1Ref.current, { opacity: 1, y: 0 });
          
          // Change emoji: emoji1 fades out, emoji2 fades in
          gsap.set(section8Emoji1Ref.current, {
            opacity: 1 - easedPhase3Progress
          });
          gsap.set(section8Emoji2Ref.current, {
            opacity: easedPhase3Progress
          });
          
          // Animate second text column
          gsap.set(section8Text2Ref.current, {
            opacity: easedPhase3Progress,
            y: 50 - (50 * easedPhase3Progress)
          });
          
          // Keep third text column hidden
          gsap.set(section8Text3Ref.current, { opacity: 0, y: 50 });
          gsap.set(section8Emoji3Ref.current, { opacity: 0 });
        }
        // Phase 4: Last text column and change emoji (75-100%)
        else {
          const phase4Progress = (progress - 0.75) / 0.25; // 0 to 1 for phase 4
          const easedPhase4Progress = gsap.parseEase("expo.out")(phase4Progress);
          
          // Keep section 7 content hidden
          gsap.set(section7Text1Ref.current, { opacity: 0, y: 0 });
          gsap.set(section7Text2Ref.current, { opacity: 0, y: 0 });
          gsap.set(section7EmojiRef.current, { opacity: 0 });
          
          // Keep emoji container and first two text columns visible
          gsap.set(section8EmojiRef.current, { opacity: 1, scale: 1 });
          gsap.set(section8Text1Ref.current, { opacity: 1, y: 0 });
          gsap.set(section8Text2Ref.current, { opacity: 1, y: 0 });
          
          // Change emoji: emoji2 fades out, emoji3 fades in
          gsap.set(section8Emoji2Ref.current, {
            opacity: 1 - easedPhase4Progress
          });
          gsap.set(section8Emoji3Ref.current, {
            opacity: easedPhase4Progress
          });
          
          // Animate third text column
          gsap.set(section8Text3Ref.current, {
            opacity: easedPhase4Progress,
            y: 50 - (50 * easedPhase4Progress)
          });
        }
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section7AnimationComplete = true;
          section8AnimationComplete = true;
        }
      }
    });

    // SECTION 9 (Problem Statement) ANIMATION
    ScrollTrigger.create({
      trigger: section9Ref.current,
      start: "bottom 100%",
      end: "+=120%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      ignoreMobileResize: true, // Prevent iOS address bar from breaking pinning
      onEnter: () => {
        // Check if mobile at runtime
        const isMobileCheck = typeof window !== 'undefined' && window.innerWidth < 768;
        // Set initial hidden state
        gsap.set(section9TextRef.current, { opacity: 1, y: 0 });
        gsap.set(section9IconRef.current, { opacity: 0, scale: 0.4, rotate: 80});
        gsap.set(section9BackgroundRef.current, { opacity: 0 });
        gsap.set(section9RectangleRef.current, { opacity: 0, scale: 0.6, height: isMobileCheck ? "160px" : "240px" });
        gsap.set(section9TextContainerRef.current, { y: 0 }); // Start at final position
        gsap.set(section9RectangleText1Ref.current, { opacity: 0, y: 0 });
        gsap.set(section9RectangleText2Ref.current, { opacity: 0, y: isMobileCheck ? 24 : 40 });
        gsap.set(section9RectangleText3Ref.current, { opacity: 0, y: isMobileCheck ? 24 : 40 });
        gsap.set(section9RectangleText4Ref.current, { opacity: 0, y: isMobileCheck ? 24 : 40 });
        gsap.set(section9RectangleText5Ref.current, { opacity: 0, y: isMobileCheck ? 24 : 40 });
        gsap.set(section9EmojiRef.current, { opacity: 1 }); // Start visible
      },
      onUpdate: (self) => {
        // Check if mobile at runtime
        const isMobileCheck = typeof window !== 'undefined' && window.innerWidth < 768;
        const progress = self.progress; // 0 to 1
        
        // Phase 1: Text exists, warning icon animates in (0-20%)
        if (progress <= 0.2) {
          const phase1Progress = progress / 0.2; // 0 to 1 for phase 1
          const easedPhase1Progress = gsap.parseEase("back.out")(phase1Progress);
          
          // Icon animates in with scale and fade
          gsap.set(section9IconRef.current, {
            opacity: easedPhase1Progress,
            scale: 0.4 + (0.6 * easedPhase1Progress),
            rotate: -80 + (74 * easedPhase1Progress)
          });
          
          // Background video hidden in phase 1
          gsap.set(section9BackgroundRef.current, {
            opacity: 0
          });
          
          // Rectangle hidden in phase 1
          gsap.set(section9RectangleRef.current, {
            opacity: 0,
            scale: 0.6
          });
        }
        // Phase 2: Clear text and icon completely (20-30%)
        else if (progress <= 0.3) {
          const phase2Progress = (progress - 0.2) / 0.1; // 0 to 1 for phase 2
          const easedPhase2Progress = gsap.parseEase("power2.in")(phase2Progress);
          
          // Text and icon fade out
          gsap.set(section9TextRef.current, {
            opacity: 1 - easedPhase2Progress,
          });
          
          gsap.set(section9IconRef.current, {
            opacity: 1 - easedPhase2Progress,
            scale: 1 - (0.2 * easedPhase2Progress),
          });
          
          // Emoji fades out in phase 2
          gsap.set(section9EmojiRef.current, {
            opacity: 1 - easedPhase2Progress
          });
          
          // Background video still hidden in phase 2
          gsap.set(section9BackgroundRef.current, {
            opacity: 0
          });
          
          // Rectangle still hidden in phase 2
          gsap.set(section9RectangleRef.current, {
            opacity: 0,
            scale: 0.6
          });
        }
        // Phase 3: Rectangle, textref1 and background reveal (30-50%)
        else if (progress <= 0.5) {
          const phase3Progress = (progress - 0.3) / 0.2; // 0 to 1 for phase 3
          const easedPhase3Progress = gsap.parseEase("expo.out")(phase3Progress);
          
          // Text and icon stay hidden
          gsap.set(section9TextRef.current, {
            opacity: 0,
            y: -20
          });
          
          gsap.set(section9IconRef.current, {
            opacity: 0,
            scale: 0.8,
            y: -20
          });
          
          // Emoji stays hidden
          gsap.set(section9EmojiRef.current, {
            opacity: 0
          });
          
          // Background video fades in
          gsap.set(section9BackgroundRef.current, {
            opacity: easedPhase3Progress
          });
          
          // Rectangle fades in and scales up from 0.6 to 1.0 with back.out easing
          gsap.set(section9RectangleRef.current, {
            opacity: easedPhase3Progress,
            scale: 0.6 + (0.4 * easedPhase3Progress)
          });
          
          // Text container stays at final position during Phase 3
          gsap.set(section9TextContainerRef.current, {
            y: 0
          });
          
          // Text1 animates in with rectangle (positioned in middle of container)
          gsap.set(section9RectangleText1Ref.current, {
            opacity: easedPhase3Progress,
            y: 0,
          });
          
          // Other text elements remain hidden
          gsap.set(section9RectangleText2Ref.current, { opacity: 0, y: isMobileCheck ? 24 : 40, color: '#0067d4' });
          gsap.set(section9RectangleText3Ref.current, { opacity: 0, y: isMobileCheck ? 24 : 40, color: '#0067d4' });
          gsap.set(section9RectangleText4Ref.current, { opacity: 0, y: isMobileCheck ? 24 : 40, color: '#0067d4' });
          gsap.set(section9RectangleText5Ref.current, { opacity: 0, y: isMobileCheck ? 24 : 40, color: '#0067d4'});
        }
        // Phase 4: Sequential text animations (50-100%)
        else {
          const phase4Progress = (progress - 0.5) / 0.5; // 0 to 1 for phase 4
          
          // Text and icon stay hidden
          gsap.set(section9TextRef.current, {
            opacity: 0,
            y: -20
          });
          
          gsap.set(section9IconRef.current, {
            opacity: 0,
            scale: 0.8,
            y: -20
          });
          
          // Emoji stays hidden
          gsap.set(section9EmojiRef.current, {
            opacity: 0
          });
          
          // Background stays visible
          gsap.set(section9BackgroundRef.current, { opacity: 1 });
          
          // Text container stays at final position
          gsap.set(section9TextContainerRef.current, { y: 0 });
          
          // Text1 stays visible and starts black
          gsap.set(section9RectangleText1Ref.current, { opacity: 1, y: 0});
          
          // PHASE 4A (60-80%)
          if (phase4Progress <= 0.5) {
            const combinedProgress = phase4Progress / 0.5;
            const easedCombinedProgress = gsap.parseEase("expo.out")(combinedProgress);
            const easedContainerProgress = gsap.parseEase("power2.out")(combinedProgress);
            
            // Rectangle maintains final phase 3 state and grows height
            const mobileHeight4A = 160 + (80 * easedContainerProgress);
            const desktopHeight4A = 240 + (120 * easedContainerProgress);
            gsap.set(section9RectangleRef.current, {
              opacity: 1,
              scale: 1,
              height: isMobileCheck ? `${mobileHeight4A}px` : `${desktopHeight4A}px`
            });
            
            // Text1 fades to 0.2 during phase 4a
            gsap.set(section9RectangleText1Ref.current, {
              opacity: 1 - (0.9 * easedCombinedProgress), // Fade from 1 to 0.2
              y: 0,
              color: '#000000' // Stay black
            });
            
            // Both text2 and text3 animate in together
            const textYOffset = isMobileCheck ? 24 : 40;
            gsap.set(section9RectangleText2Ref.current, {
              opacity: easedCombinedProgress,
              y: textYOffset - (textYOffset * easedCombinedProgress)
            });
            gsap.set(section9RectangleText3Ref.current, {
              opacity: easedCombinedProgress,
              y: textYOffset - (textYOffset * easedCombinedProgress)
            });
            
            gsap.set(section9RectangleText4Ref.current, { opacity: 0, y: isMobileCheck ? 24 : 40 });
            gsap.set(section9RectangleText5Ref.current, { opacity: 0, y: isMobileCheck ? 24 : 40 });
          }
          // PHASE 4B
          else if (phase4Progress <= 0.75) {
            const text4Progress = (phase4Progress - 0.5) / 0.25;
            const easedText4Progress = gsap.parseEase("expo.out")(text4Progress);
            const easedContainer4Progress = gsap.parseEase("power2.out")(text4Progress);
            
            // Rectangle grows from 380px to 520px height
            const mobileHeight4B = 240 + (30 * easedContainer4Progress);
            const desktopHeight4B = 360 + (60 * easedContainer4Progress);
            gsap.set(section9RectangleRef.current, {
              height: isMobileCheck ? `${mobileHeight4B}px` : `${desktopHeight4B}px`
            });
            
            gsap.set(section9RectangleText1Ref.current, { opacity: 0.1, y: 0, color: '#000000' }); // Keep text1 black
            gsap.set(section9RectangleText2Ref.current, { 
              opacity: 1 - (0.9 * easedText4Progress),
              y: 0
            });
            gsap.set(section9RectangleText3Ref.current, { 
              opacity: 1 - (0.9 * easedText4Progress),
              y: 0
            });
            const text4YOffset = isMobileCheck ? 24 : 40;
            gsap.set(section9RectangleText4Ref.current, {
              opacity: easedText4Progress,
              y: text4YOffset - (text4YOffset * easedText4Progress)
            });
            
            gsap.set(section9RectangleText5Ref.current, { opacity: 0, y: isMobile ? 24 : 40 });
          }
          // PHASE 4C
          else {
            const text5Progress = (phase4Progress - 0.75) / 0.25;
            const easedText5Progress = gsap.parseEase("expo.out")(text5Progress);
            const easedContainer5Progress = gsap.parseEase("power2.out")(text5Progress);
            
            // Rectangle grows from 520px to 620px height (final height)
            const mobileHeight4C = 270 + (150 * easedContainer5Progress);
            const desktopHeight4C = 420 + (200 * easedContainer5Progress);
            gsap.set(section9RectangleRef.current, {
              height: isMobileCheck ? `${mobileHeight4C}px` : `${desktopHeight4C}px`
            });
            
            gsap.set(section9RectangleText1Ref.current, { 
              opacity: 0.1,
              y: 0, 
              color: '#000000', 
            }); 

            gsap.set(section9RectangleText2Ref.current, { 
              opacity: 0.1,
              y: 0,
            }); 

            gsap.set(section9RectangleText3Ref.current, { 
              opacity: 0.1,
              y: 0,});

            gsap.set(section9RectangleText4Ref.current, { 
              opacity: 1 - (0.9 * easedText5Progress),
              y: 0
            });
            
            const text5YOffset = isMobileCheck ? 24 : 40;
            gsap.set(section9RectangleText5Ref.current, {
              opacity: easedText5Progress,
              y: text5YOffset - (text5YOffset * easedText5Progress),
            });
          }
        }
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section9AnimationComplete = true;
        }
      }
    });

    // SECTION 11 (UWB Explanation) ANIMATION
    ScrollTrigger.create({
      trigger: section11Ref.current,
      start: "bottom 100%",
      end: "+=100%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      ignoreMobileResize: true, // Prevent iOS address bar from breaking pinning
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Phase 1: Original rectangle fade out, new rectangle fade in (0-20%)
        if (progress <= 0.2) {
          const phase1Progress = progress / 0.2; // 0 to 1 for phase 1
          const easedPhase1Progress = gsap.parseEase("power3.inOut")(phase1Progress);
          
          // Original rectangle fades out, slides up, scales down, and blurs
          gsap.set(section11OriginalRef.current, {
            opacity: 1 - easedPhase1Progress,
            y: -10 * easedPhase1Progress,
            scale: 1 - (0.1 * easedPhase1Progress),
            filter: `blur(${5 * easedPhase1Progress}px)`
          });
          
          // New rectangle fades in and slides up
          gsap.set(section11NewRef.current, {
            opacity: easedPhase1Progress,
            y: 150 - (150 * easedPhase1Progress),
            filter: `blur(${4 - (4 * easedPhase1Progress)}px)`
          });
          
          // Keep most text content hidden during rectangle transition
          gsap.set(section11TopParagraphRef.current, { opacity: 0, y: 20 });
          gsap.set(section11Header2Ref.current, { opacity: 0, x: -20 });
          gsap.set(section11Text1Ref.current, { opacity: 0, y: 30 });
          gsap.set(section11Text2Ref.current, { opacity: 0, y: 30 });
          gsap.set(section11Text3Ref.current, { opacity: 0, y: 30 });
          
          // Header1 fades in during Phase 1
          gsap.set(section11Header1Ref.current, {
            opacity: easedPhase1Progress,
            y: 20 - (20 * easedPhase1Progress)
          });
        }
        // Phase 2a: Header2 + paragraph animate in (20-25%)
        else if (progress <= 0.25) {
          const phase2aProgress = (progress - 0.2) / 0.05; // 0 to 1 for phase 2a
          const easedPhase2aProgress = gsap.parseEase("power3.inOut")(phase2aProgress);
          const header2Phase2aProgress = gsap.parseEase("back.out")(phase2aProgress);
          
          // Original rectangle stays hidden
          gsap.set(section11OriginalRef.current, {
            opacity: 0,
            scale: 0.8
          });
          
          // New rectangle stays visible
          gsap.set(section11NewRef.current, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)'
          });
          
          // Header1 stays visible
          gsap.set(section11Header1Ref.current, { opacity: 1, y: 0 });
          
          // Header2 fades in
          gsap.set(section11Header2Ref.current, {
            opacity: header2Phase2aProgress,
            x: -20 + (20 * header2Phase2aProgress)
          });
          
          // Top paragraph fades in
          gsap.set(section11TopParagraphRef.current, {
            opacity: header2Phase2aProgress,
            y: -20 + (20 * header2Phase2aProgress),
          });
          
          // Keep columns hidden
          gsap.set(section11Text1Ref.current, { opacity: 0, y: 30 });
          gsap.set(section11Text2Ref.current, { opacity: 0, y: 30 });
          gsap.set(section11Text3Ref.current, { opacity: 0, y: 30 });
        }
        // Phase 2b: Three text columns fade in sequentially (25-50%)
        else if (progress <= 0.5) {
          const phase2bProgress = (progress - 0.25) / 0.25; // 0 to 1 for phase 2b
          const easedPhase2bProgress = gsap.parseEase("power3.inOut")(phase2bProgress);
          
          // Original rectangle stays hidden
          gsap.set(section11OriginalRef.current, {
            opacity: 0,
            scale: 0.8
          });
          
          // New rectangle stays visible
          gsap.set(section11NewRef.current, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)'
          });
          
          // Headers stay visible
          gsap.set(section11Header1Ref.current, { opacity: 1, y: 0 });
          gsap.set(section11Header2Ref.current, { opacity: 1, y: 0 });
          
          // Top paragraph stays visible
          gsap.set(section11TopParagraphRef.current, { opacity: 1 });
          
          // Three text columns fade in sequentially
          if (phase2bProgress <= 0.33) {
            const text1Progress = phase2bProgress / 0.33;
            const easedText1Progress = gsap.parseEase("power4.out")(text1Progress);
            
            gsap.set(section11Text1Ref.current, {
              opacity: easedText1Progress,
              y: 30 - (30 * easedText1Progress)
            });
            gsap.set(section11Text2Ref.current, { opacity: 0, y: 30 });
            gsap.set(section11Text3Ref.current, { opacity: 0, y: 30 });
          } else if (phase2bProgress <= 0.66) {
            const text2Progress = (phase2bProgress - 0.33) / 0.33;
            const easedText2Progress = gsap.parseEase("power4.out")(text2Progress);
            
            gsap.set(section11Text1Ref.current, { opacity: 1, y: 0 });
            gsap.set(section11Text2Ref.current, {
              opacity: easedText2Progress,
              y: 30 - (30 * easedText2Progress)
            });
            gsap.set(section11Text3Ref.current, { opacity: 0, y: 30 });
          } else {
            const text3Progress = (phase2bProgress - 0.66) / 0.34;
            const easedText3Progress = gsap.parseEase("power4.out")(text3Progress);
            
            gsap.set(section11Text1Ref.current, { opacity: 1, y: 0 });
            gsap.set(section11Text2Ref.current, { opacity: 1, y: 0 });
            gsap.set(section11Text3Ref.current, {
              opacity: easedText3Progress,
              y: 30 - (30 * easedText3Progress)
            });
          }
        }
        // Phase 3: All existing content fade out completely (50-60%)
        else if (progress <= 0.6) {
          const phase3Progress = (progress - 0.5) / 0.1; // 0 to 1 for phase 3
          const easedPhase3Progress = gsap.parseEase("power3.inOut")(phase3Progress);
          
          // Original rectangle stays hidden
          gsap.set(section11OriginalRef.current, {
            opacity: 0,
            scale: 0.8
          });
          
          // New rectangle stays visible
          gsap.set(section11NewRef.current, {
            opacity: 1,
            scale: 1
          });
          
          // All Phase 1 content fades out completely
          gsap.set(section11TopParagraphRef.current, {
            opacity: 1 - easedPhase3Progress
          });
          gsap.set(section11Header1Ref.current, {
            opacity: 1 - easedPhase3Progress,
            y: 0
          });
          gsap.set(section11Header2Ref.current, {
            opacity: 1 - easedPhase3Progress,
            y: 0
          });
          gsap.set(section11Text1Ref.current, {
            opacity: 1 - easedPhase3Progress,
            y: 0
          });
          gsap.set(section11Text2Ref.current, {
            opacity: 1 - easedPhase3Progress,
            y: 0
          });
          gsap.set(section11Text3Ref.current, {
            opacity: 1 - easedPhase3Progress,
            y: 0
          });
          
          // Phase 2 emoji fades out
          gsap.set(section11Phase2EmojiRef.current, {
            opacity: 0,
            y: 100
          });
          
          // Keep Phase 2 content hidden during fade out
          gsap.set(section11Phase2TopParagraphRef.current, { opacity: 0 });
          gsap.set(section11Phase2Text1Ref.current, { opacity: 0, y: 30 });
          gsap.set(section11Phase2Text2Ref.current, { opacity: 0, y: 30 });
          gsap.set(section11Phase2Text3Ref.current, { opacity: 0, y: 30 });
        }
        // Phase 4: New content fades in as per current sequence (60-100%)
        else {
          const phase4Progress = (progress - 0.6) / 0.4; // 0 to 1 for phase 4
          const easedPhase4Progress = gsap.parseEase("power3.inOut")(phase4Progress);
          
          // Original rectangle stays hidden
          gsap.set(section11OriginalRef.current, {
            opacity: 0,
            scale: 0.8
          });
          
          // New rectangle stays visible
          gsap.set(section11NewRef.current, {
            opacity: 1,
            scale: 1
          });
          
          // Phase 1 content stays completely hidden
          gsap.set(section11TopParagraphRef.current, { opacity: 0 });
          gsap.set(section11Header1Ref.current, { opacity: 0, y: 0 });
          gsap.set(section11Header2Ref.current, { opacity: 0, y: 0 });
          gsap.set(section11Text1Ref.current, { opacity: 0, y: 0 });
          gsap.set(section11Text2Ref.current, { opacity: 0, y: 0 });
          gsap.set(section11Text3Ref.current, { opacity: 0, y: 0 });
          
          // Phase 4 animation sequence: top paragraph first, then columns
          if (phase4Progress <= 0.25) {
            // First 25%: Top paragraph fades in
            const topProgress = phase4Progress / 0.25;
            const easedTopProgress = gsap.parseEase("power4.out")(topProgress);
            
            gsap.set(section11Phase2TopParagraphRef.current, {
              opacity: easedTopProgress
            });
            
            // Emoji fades in and slides up with top paragraph
            gsap.set(section11Phase2EmojiRef.current, {
              opacity: easedTopProgress,
              y: 100 - (100 * easedTopProgress)
            });
            
            // Keep columns hidden
            gsap.set(section11Phase2Text1Ref.current, { opacity: 0, y: 30 });
            gsap.set(section11Phase2Text2Ref.current, { opacity: 0, y: 30 });
            gsap.set(section11Phase2Text3Ref.current, { opacity: 0, y: 30 });
          } else if (phase4Progress <= 0.5) {
            // 25-50%: Column 1 fades in
            const text1Progress = (phase4Progress - 0.25) / 0.25;
            const easedText1Progress = gsap.parseEase("power4.out")(text1Progress);
            
            gsap.set(section11Phase2TopParagraphRef.current, { opacity: 1 });
            gsap.set(section11Phase2Text1Ref.current, {
              opacity: easedText1Progress,
              y: 30 - (30 * easedText1Progress)
            });
            gsap.set(section11Phase2Text2Ref.current, { opacity: 0, y: 30 });
            gsap.set(section11Phase2Text3Ref.current, { opacity: 0, y: 30 });
            gsap.set(section11Phase2EmojiRef.current, { opacity: 1, y: 0 });
          } else if (phase4Progress <= 0.75) {
            // 50-75%: Column 2 fades in
            const text2Progress = (phase4Progress - 0.5) / 0.25;
            const easedText2Progress = gsap.parseEase("power4.out")(text2Progress);
            
            gsap.set(section11Phase2TopParagraphRef.current, { opacity: 1 });
            gsap.set(section11Phase2Text1Ref.current, { opacity: 1, y: 0 });
            gsap.set(section11Phase2Text2Ref.current, {
              opacity: easedText2Progress,
              y: 30 - (30 * easedText2Progress)
            });
            gsap.set(section11Phase2Text3Ref.current, { opacity: 0, y: 30 });
            gsap.set(section11Phase2EmojiRef.current, { opacity: 1, y: 0 });
          } else {
            // 75-100%: Column 3 fades in
            const text3Progress = (phase4Progress - 0.75) / 0.25;
            const easedText3Progress = gsap.parseEase("power4.out")(text3Progress);
            
            gsap.set(section11Phase2TopParagraphRef.current, { opacity: 1 });
            gsap.set(section11Phase2Text1Ref.current, { opacity: 1, y: 0 });
            gsap.set(section11Phase2Text2Ref.current, { opacity: 1, y: 0 });
            gsap.set(section11Phase2Text3Ref.current, {
              opacity: easedText3Progress,
              y: 30 - (30 * easedText3Progress)
            });
            // Emoji animates out with a quick fade when Phase 4D starts
            const emojiFadeOutProgress = Math.min(1, text3Progress * 3); // Faster fade out
            gsap.set(section11Phase2EmojiRef.current, {
              opacity: 1 - emojiFadeOutProgress
            });
          }
        }
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section11AnimationComplete = true;
          section11Phase2AnimationComplete = true;
        }
      }
    });
    
    // SECTION 12 (How does it actually work?) ANIMATION
    ScrollTrigger.create({
      trigger: section12Ref.current,
      start: "bottom 100%",
      end: "+=30%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      ignoreMobileResize: true, // Prevent iOS address bar from breaking pinning
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Animation happens from 0% to 100% of scroll (no delays)
        const adjustedProgress = progress; // 0 to 1 for actual animation
        
        // Text 1 stays, Text 2 fades in, Emoji appears, Background fades in
        const textProgress = Math.min(1, adjustedProgress); // Cap at 1
        
        // Apply easing to the progress
        const easedProgress = gsap.parseEase("back.out")(textProgress);
        const easedExpoProgress = gsap.parseEase("expo.out")(textProgress);
        
        // Text 1 scales down and moves upward as text2 appears
        gsap.set(section12Text1Ref.current, {
          opacity: 1,
          scale: 2 - (0.8 * easedProgress), // Scales from 2 to 1
          y: -80 * easedProgress // Moves up 40px as animation progresses
        });
        
        // Text 2 fades in, moves up, and scales up
        gsap.set(section12Text2Ref.current, {
          opacity: easedProgress,
          y: 80 - (80 * easedProgress), // Moves up from 120px below to 0px
          scale: 0.8 + (0.2 * easedProgress) // Scales from 0.8 to 1.0
        });
        
        // Animate the underline drawing out
        if (easedProgress > 0.6) { // Start underline animation after text is fully visible
          const underlineProgress = Math.min(1, (easedProgress - 0.6) / 0.4); // 0 to 1 for underline
          const easedUnderlineProgress = gsap.parseEase("power2.out")(underlineProgress);
          
          gsap.set(section12UnderlineRef.current, {
            scaleX: easedUnderlineProgress // Scales from 0 to 1
          });
        } else {
          gsap.set(section12UnderlineRef.current, {
            scaleX: 0 // Keep hidden initially
          });
        }
        
        // Emoji fades in and moves up
        gsap.set(section12EmojiRef.current, {
          opacity: easedProgress,
          y: 80 - (80 * easedExpoProgress)
        });
        
        // Background gradient fades in
        gsap.set(section12BackgroundRef.current, {
          opacity: easedProgress
        });
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section12AnimationComplete = true;
        }
      }
    });
    
    // SECTION 13 (Set destination) ANIMATION 
    ScrollTrigger.create({
      trigger: section13Ref.current,
      start: "bottom 100%",
      end: "+=50%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Set isWhiteBG to true when scrolling down into section 13
        if (setIsWhiteBG && progress > 0) {
          setIsWhiteBG(true);
        }
        
        // Animation happens from 0% to 100% of scroll
        const textProgress = progress; // 0 to 1 for animation
        
        // Left text (Column 1) fades in first half
        if (progress <= 0.5) {
          const leftProgress = progress / 0.5; // 0 to 1 for left text
          const easedLeftProgress = gsap.parseEase("elastic.inOut")(leftProgress);
          const normalEasedProgress = gsap.parseEase("expo.out")(leftProgress);
          
          gsap.set(section13IconRef.current, {
            opacity: easedLeftProgress,
            scale: 0.6 + (0.4 * easedLeftProgress),
            y: 0,
            rotation: -15 + (15 * easedLeftProgress)
          });
          gsap.set(section13Text1Ref.current, {
            opacity: normalEasedProgress,
            y: 30 - (30 * normalEasedProgress)
          });
          
          // Phone scales up with icon and text
          gsap.set(section13ImageRef.current, { 
            opacity: 0.7 + (0.3 * normalEasedProgress), 
            scale: 0.95 + (0.05 * normalEasedProgress),
            transformOrigin: "center center",
            filter: `blur(${2 - (2 * normalEasedProgress)}px)`
          });
          
          // Keep right text hidden
          gsap.set(section13ParagraphRef.current, { opacity: 0, y: 30 });
        } 
        // Right text (Column 3) fades in second half
        else {
          const rightProgress = (progress - 0.5) / 0.5; // 0 to 1 for right text
          const easedRightProgress = gsap.parseEase("back.out")(rightProgress);
          
          gsap.set(section13IconRef.current, { opacity: 1, y: 0 });
          gsap.set(section13Text1Ref.current, { opacity: 1, y: 0 });
          gsap.set(section13ParagraphRef.current, {
            opacity: easedRightProgress,
            y: 30 - (30 * easedRightProgress)
          });
        }
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section13AnimationComplete = true;
        }
      },
      onLeave: () => {
        // Don't set to false here - let section 15 handle the final state
      },
      onEnterBack: () => {
        // Set isWhiteBG to true when scrolling back down into section 13
        if (setIsWhiteBG) {
          setIsWhiteBG(true);
        }
      }
    });

    // Additional ScrollTrigger to detect when user scrolls above section 13
    ScrollTrigger.create({
      trigger: section13Ref.current,
      start: "top bottom", // When the top of section 13 reaches the bottom of viewport
      end: "bottom 100%", // Until the bottom of section 13 reaches the top of viewport
      onLeaveBack: () => {
        // Set isWhiteBG to false only when scrolling up out of section 13
        if (setIsWhiteBG) {
          setIsWhiteBG(false);
        }
      }
    });

    // SECTION 14 (Incorrect Entrance) ANIMATION
    ScrollTrigger.create({
      trigger: section14Ref.current,
      start: "bottom 100%",
      end: "+=80%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      ignoreMobileResize: true, // Prevent iOS address bar from breaking pinning
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Section 14 animation - no longer controls isWhiteBG
        
        // Phase 2: Right text fades in (0-50%)
        if (progress <= 0.5) {
          const phase2Progress = progress / 0.5; // 0 to 1 for phase 2
          const easedPhase2Progress = gsap.parseEase("back.out")(phase2Progress);
          
          // Header stays visible during phase 2
          gsap.set(section14IconRef.current, { 
            opacity: 1, 
            scale: 1,
            y: 0,
            rotation: 0
          });
          gsap.set(section14Text1Ref.current, { 
            opacity: 1, 
            y: 0
          });
          
          // Only paragraph1 fades in, paragraph2 stays hidden
          gsap.set(section14Paragraph1Ref.current, {
            opacity: easedPhase2Progress,
            y: 30 - (30 * easedPhase2Progress)
          });
          gsap.set(section14Paragraph2Ref.current, {
            opacity: 0, // Keep hidden
            y: 30
          });
          
          // Video stays visible and plays
          gsap.set(section14ImageRef.current, { 
            opacity: 1, 
            x: 0
          });
          
          // Start playing video if not already playing
          if (section14ImageRef.current && section14ImageRef.current.paused) {
            section14ImageRef.current.play();
          }
        }
        // Phase 3: Phone moves left, paragraph1 moves up and fades, paragraph2 fades in (50-100%)
        else {
          const phase3Progress = (progress - 0.5) / 0.5; // 0 to 1 for phase 3
          const easedPhase3Progress = gsap.parseEase("power3.inOut")(phase3Progress);
          
          // Header stays visible (no fading out)
          gsap.set(section14IconRef.current, { 
            opacity: 1, 
            scale: 1,
            y: 0,
            rotation: 0
          });
          gsap.set(section14Text1Ref.current, { 
            opacity: 1, 
            y: 0
          });
          
          // Video moves to the left and fades with blur
          gsap.set(section14ImageRef.current, { 
            opacity: 1 - (0.85 * easedPhase3Progress),
            x: -100 * easedPhase3Progress, // Move left by 100px
            filter: `blur(${2 * easedPhase3Progress}px)` // Add blur effect
          });
          
          // Lockscreen image appears over the phone
          gsap.set(section14LockscreenRef.current, { 
            opacity: easedPhase3Progress, // Fade in
            scale: 1.05 - (0.05 * easedPhase3Progress), // Scale from 1.05 to 1.0
            x: 100 * easedPhase3Progress // Move left with the phone
          });
          
          // Paragraph1 moves up and fades to 0.75 opacity with blur
          gsap.set(section14Paragraph1Ref.current, {
            opacity: 1 - (0.85 * easedPhase3Progress), // Fade to 0.75 opacity
            y: -225 * easedPhase3Progress, // Move up by 225px
            filter: `blur(${1 * easedPhase3Progress}px)` // Add blur effect
          });
          
          // Paragraph2 fades in
          gsap.set(section14Paragraph2Ref.current, {
            opacity: easedPhase3Progress, // Fade in
            y: 225 - (225 * easedPhase3Progress) // Move up from initial position
          });
        }
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section14AnimationComplete = true;
        }
      },
      onEnterBack: () => {
        // Section 14 onEnterBack - no longer controls isWhiteBG
      }
    });

    // SECTION 15 (Enter Station) ANIMATION
    ScrollTrigger.create({
      trigger: section15Ref.current,
      start: "bottom 100%",
      end: "+=125%", // Extend the trigger area for scroll control to accommodate phase 3
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      ignoreMobileResize: true, // Prevent iOS address bar from breaking pinning
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Section 15 animation - no longer controls isWhiteBG
        
        // Phase 2: Right content fades in (0-40%)
        if (progress <= 0.4) {
          const phase2Progress = progress / 0.4; // 0 to 1 for phase 2
          const easedPhase2Progress = gsap.parseEase("back.out")(phase2Progress);
          
          // Header stays visible
          gsap.set(section15IconRef.current, { opacity: 1, scale: 1, y: 0, rotation: 0 });
          gsap.set(section15Text1Ref.current, { opacity: 1, y: 0 });
          
          // Start playing video when phase 1 triggers
          if (section15ImageRef.current && section15ImageRef.current.paused) {
            section15ImageRef.current.play();
          }
          
          // Split Phase 2 into two parts: image first (0-50%), then both paragraphs (50-100%)
          if (phase2Progress <= 0.5) {
            const imageProgress = phase2Progress / 0.5; // 0 to 1 for image
            const easedImageProgress = gsap.parseEase("back.out")(imageProgress);
            
            // Only image fades in, paragraphs stay hidden
            gsap.set(section15Paragraph1Ref.current, {
              opacity: 0, // Keep hidden
              y: 30
            });
            gsap.set(section15Paragraph2Ref.current, {
              opacity: 0, // Keep hidden
              y: 30
            });
            
            // Column 3 image fades in
            gsap.set(section15Column3ImageRef.current, {
              opacity: easedImageProgress,
              y: 30 - (30 * easedImageProgress)
            });
          } else {
            const paragraphsProgress = (phase2Progress - 0.5) / 0.5; // 0 to 1 for paragraphs
            const easedParagraphsProgress = gsap.parseEase("back.out")(paragraphsProgress);
            
            // Both paragraphs fade in together
            gsap.set(section15Paragraph1Ref.current, {
              opacity: easedParagraphsProgress,
              y: 30 - (30 * easedParagraphsProgress)
            });
            gsap.set(section15Paragraph2Ref.current, {
              opacity: easedParagraphsProgress,
              y: 30 - (30 * easedParagraphsProgress)
            });
            
            // Column 3 image stays visible
            gsap.set(section15Column3ImageRef.current, {
              opacity: 1,
              y: 0
            });
          }
          
          // Phone stays in center
          gsap.set(section15ImageRef.current, { 
            opacity: 1, 
            x: 0
          });
          
          // Keep phase 3 and 4 elements hidden
          gsap.set(section15Phase3IconRef.current, { opacity: 0, scale: 0.8, y: 30, rotation: -21 });
          gsap.set(section15Phase3HeaderRef.current, { opacity: 0, y: 30 });
          gsap.set(section15Phase3PhoneRef.current, { opacity: 0, scale: 0.9, x: 0 });
          gsap.set(section15Phase3TextRef.current, { opacity: 0, y: 30 });
          gsap.set(section15Phase4DImageRef.current, { opacity: 0, y: 30 });
          gsap.set(section15Phase4DTextRef.current, { opacity: 0, y: 30 });
        }
        // Phase 3: Fade out current elements completely (40-50%)
        else if (progress <= 0.5) {
          const phase3Progress = (progress - 0.4) / 0.1; // 0 to 1 for phase 3 (fade out)
          const easedPhase3Progress = gsap.parseEase("power3.inOut")(phase3Progress);
          
          // Fade out current elements completely to opacity 0
          gsap.set(section15IconRef.current, { 
            opacity: 1 - easedPhase3Progress, // Fade from 1 to 0
            y: 0,
            filter: `blur(${2 * easedPhase3Progress}px)` // Blur from 0 to 2px
          });
          gsap.set(section15Text1Ref.current, { 
            opacity: 1 - easedPhase3Progress, // Fade from 1 to 0
            y: 0,
            filter: `blur(${2 * easedPhase3Progress}px)` // Blur from 0 to 2px
          });
          gsap.set(section15ImageRef.current, { 
            opacity: 1, // Keep at full opacity
            x: 0
          });
          gsap.set(section15Column3ImageRef.current, { 
            opacity: 1 - easedPhase3Progress, // Fade from 1 to 0
            y: 0,
            filter: `blur(${2 * easedPhase3Progress}px)` // Add blur effect
          });
          gsap.set(section15Paragraph1Ref.current, {
            opacity: 1 - easedPhase3Progress, // Fade from 1 to 0
            y: 0,
            filter: `blur(${2 * easedPhase3Progress}px)` // Add blur effect
          });
          gsap.set(section15Paragraph2Ref.current, {
            opacity: 1 - easedPhase3Progress, // Fade from 1 to 0
            y: 0,
            filter: `blur(${2 * easedPhase3Progress}px)` // Add blur effect
          });
          
          // Keep phase 4 elements hidden during fade out
          gsap.set(section15Phase3IconRef.current, { opacity: 0, scale: 0.8, y: 30, rotation: -21 });
          gsap.set(section15Phase3HeaderRef.current, { opacity: 0, y: 30 });
          gsap.set(section15Phase3PhoneRef.current, { opacity: 0, scale: 0.9, x: 0 });
          gsap.set(section15Phase3TextRef.current, { opacity: 0, y: 30 });
          gsap.set(section15Phase4DImageRef.current, { opacity: 0, y: 30 });
          gsap.set(section15Phase4DTextRef.current, { opacity: 0, y: 30 });
        }
        // Phase 4: Fade in new elements (50-100%)
        else {
          const phase4Progress = (progress - 0.5) / 0.5; // 0 to 1 for phase 4 (fade in)
          
          // Split phase 4 into three parts: 4A+4B (0-50%), 4C (50-75%), 4D (75-100%)
          if (phase4Progress <= 0.5) {
            // Phase 4A+4B: Icon, header, and phone animate in together (50-75%)
            const phase4ABProgress = phase4Progress / 0.5; // 0 to 1 for phase 4A+4B
            const easedPhase4ABProgress = gsap.parseEase("power3.inOut")(phase4ABProgress);
            
            // Keep current elements at opacity 0
            gsap.set(section15IconRef.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Text1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Column3ImageRef.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Paragraph1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Paragraph2Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            
            // Animate in icon, header, and phone together
            gsap.set(section15Phase3IconRef.current, {
              opacity: easedPhase4ABProgress,
              scale: 0.8 + (0.2 * easedPhase4ABProgress),
              y: 30 - (30 * easedPhase4ABProgress),
              rotation: -21 + (21 * easedPhase4ABProgress)
            });
            gsap.set(section15Phase3HeaderRef.current, {
              opacity: easedPhase4ABProgress,
              y: 30 - (30 * easedPhase4ABProgress)
            });
            gsap.set(section15Phase3PhoneRef.current, {
              opacity: easedPhase4ABProgress,
              scale: 0.9,
              x: 0
            });
            
            // Start playing phase 3 video when phase 4 begins
            if (section15Phase3PhoneRef.current && section15Phase3PhoneRef.current.paused) {
              section15Phase3PhoneRef.current.play();
            }
            
            // Keep text and phase 4D elements hidden
            gsap.set(section15Phase3TextRef.current, { opacity: 0, y: 30 });
            gsap.set(section15Phase4DImageRef.current, { opacity: 0, y: 30 });
            gsap.set(section15Phase4DTextRef.current, { opacity: 0, y: 30 });
          } else if (phase4Progress <= 0.75) {
            // Phase 4C: Text animates in (75-87.5%)
            const phase4CProgress = (phase4Progress - 0.5) / 0.25; // 0 to 1 for phase 4C
            const easedPhase4CProgress = gsap.parseEase("power3.inOut")(phase4CProgress);
            
            // Keep current elements at opacity 0
            gsap.set(section15IconRef.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Text1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Column3ImageRef.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Paragraph1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Paragraph2Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            
            // Keep icon, header, and phone at full opacity
            gsap.set(section15Phase3IconRef.current, { opacity: 1, scale: 1, y: 0, rotation: 0 });
            gsap.set(section15Phase3HeaderRef.current, { opacity: 1, y: 0 });
            gsap.set(section15Phase3PhoneRef.current, { opacity: 1, scale: 0.9, x: 0 });
            
            // Animate in text
            gsap.set(section15Phase3TextRef.current, {
              opacity: easedPhase4CProgress,
              y: 30 - (30 * easedPhase4CProgress)
            });
            
            // Keep phase 4D elements hidden
            gsap.set(section15Phase4DImageRef.current, { opacity: 0, y: 30 });
            gsap.set(section15Phase4DTextRef.current, { opacity: 0, y: 30 });
          } else {
            // Phase 4D: Image and text animate in (87.5-100%)
            const phase4DProgress = (phase4Progress - 0.75) / 0.25; // 0 to 1 for phase 4D
            const easedPhase4DProgress = gsap.parseEase("power3.inOut")(phase4DProgress);
            
            // Keep current elements at opacity 0
            gsap.set(section15IconRef.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Text1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Column3ImageRef.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Paragraph1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Paragraph2Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            
            // Keep icon, header, phone, and text at full opacity
            gsap.set(section15Phase3IconRef.current, { opacity: 1, scale: 1, y: 0, rotation: 0 });
            gsap.set(section15Phase3HeaderRef.current, { opacity: 1, y: 0 });
            gsap.set(section15Phase3PhoneRef.current, { opacity: 1, scale: 0.9, x: 0 });
            gsap.set(section15Phase3TextRef.current, { opacity: 1, y: 0 });
            
            // Animate in phase 4D elements
            gsap.set(section15Phase4DImageRef.current, {
              opacity: easedPhase4DProgress,
              y: 30 - (30 * easedPhase4DProgress)
            });
            gsap.set(section15Phase4DTextRef.current, {
              opacity: easedPhase4DProgress,
              y: 30 - (30 * easedPhase4DProgress)
            });
          }
        }
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section15AnimationComplete = true;
        }
      },
      onLeave: () => {
        // Section 15 onLeave - no longer controls isWhiteBG
      },
      onEnterBack: () => {
        // Section 15 onEnterBack - no longer controls isWhiteBG
      }
    });

    // SECTION 16 (Platform) ANIMATION
    ScrollTrigger.create({
      trigger: section16Ref.current,
      start: "bottom 100%",
      end: "+=80%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      ignoreMobileResize: true, // Prevent iOS address bar from breaking pinning
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Section 16 animation - no longer controls isWhiteBG
        
        // Phase 2: Right text fades in (0-50%)
        if (progress <= 0.5) {
          const phase2Progress = progress / 0.5; // 0 to 1 for phase 2
          const easedPhase2Progress = gsap.parseEase("back.out")(phase2Progress);
          
          // Header stays visible during phase 2
          gsap.set(section16IconRef.current, { 
            opacity: 1, 
            scale: 1,
            y: 0,
            rotation: 0
          });
          gsap.set(section16Text1Ref.current, { 
            opacity: 1, 
            y: 0
          });
          
          // Only paragraph1 fades in, paragraph2 stays hidden
          gsap.set(section16Paragraph1Ref.current, {
            opacity: easedPhase2Progress,
            y: 30 - (30 * easedPhase2Progress)
          });
          gsap.set(section16Paragraph2Ref.current, {
            opacity: 0, // Keep hidden
            y: 30
          });
          
          // Phone stays in center
          gsap.set(section16ImageRef.current, { 
            opacity: 1, 
            x: 0
          });
        }
        // Phase 3: paragraph1 moves up and fades, paragraph2 fades in (50-100%)
        else {
          const phase3Progress = (progress - 0.5) / 0.5; // 0 to 1 for phase 3
          const easedPhase3Progress = gsap.parseEase("power3.inOut")(phase3Progress);
          
          // Header stays visible (no fading out)
          gsap.set(section16IconRef.current, { 
            opacity: 1, 
            scale: 1,
            y: 0,
            rotation: 0
          });
          gsap.set(section16Text1Ref.current, { 
            opacity: 1, 
            y: 0
          });
          
          // Phone stays in center (no animation)
          gsap.set(section16ImageRef.current, { 
            opacity: 1, 
            x: 0
          });
          
          // Paragraph1 moves up and fades to 0.75 opacity with blur
          gsap.set(section16Paragraph1Ref.current, {
            opacity: 1 - (0.85 * easedPhase3Progress), // Fade to 0.75 opacity
            y: -225 * easedPhase3Progress, // Move up by 225px
            filter: `blur(${1 * easedPhase3Progress}px)` // Add blur effect
          });
          
          // Paragraph2 fades in
          gsap.set(section16Paragraph2Ref.current, {
            opacity: easedPhase3Progress, // Fade in
            y: 225 - (225 * easedPhase3Progress) // Move up from initial position
          });
        }
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section16AnimationComplete = true;
        }
      },
      onEnterBack: () => {
        // Section 16 onEnterBack - no longer controls isWhiteBG
      }
    });

    // SECTION 17 (Destination) ANIMATION
    ScrollTrigger.create({
      trigger: section17Ref.current,
      start: "bottom 100%",
      end: "+=125%", // Extend the trigger area for scroll control to accommodate phase 3
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      ignoreMobileResize: true, // Prevent iOS address bar from breaking pinning
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Section 17 animation - no longer controls isWhiteBG
        
        // Phase 2: Right content fades in (0-40%)
        if (progress <= 0.4) {
          const phase2Progress = progress / 0.4; // 0 to 1 for phase 2
          const easedPhase2Progress = gsap.parseEase("back.out")(phase2Progress);
          
          // Header stays visible
          gsap.set(section17IconRef.current, { opacity: 1, scale: 1, y: 0, rotation: 0 });
          gsap.set(section17Text1Ref.current, { opacity: 1, y: 0 });
          
                     // Split Phase 2 into two parts: first paragraph (0-50%), then second paragraph (50-100%)
           if (phase2Progress <= 0.5) {
             const firstParagraphProgress = phase2Progress / 0.5; // 0 to 1 for first paragraph
             const easedFirstParagraphProgress = gsap.parseEase("back.out")(firstParagraphProgress);
             
             // First paragraph fades in, second paragraph stays hidden
             gsap.set(section17Paragraph1Ref.current, {
               opacity: easedFirstParagraphProgress,
               y: 30 - (30 * easedFirstParagraphProgress)
             });
             gsap.set(section17Paragraph2Ref.current, {
               opacity: 0, // Keep hidden
               y: 30
             });
           } else {
             const secondParagraphProgress = (phase2Progress - 0.5) / 0.5; // 0 to 1 for second paragraph
             const easedSecondParagraphProgress = gsap.parseEase("back.out")(secondParagraphProgress);
             
             // First paragraph stays visible, second paragraph fades in
             gsap.set(section17Paragraph1Ref.current, {
               opacity: 1, // Keep visible
               y: 0
             });
             gsap.set(section17Paragraph2Ref.current, {
               opacity: easedSecondParagraphProgress,
               y: 30 - (30 * easedSecondParagraphProgress)
             });
           }
          
          // Phone stays in center
          gsap.set(section17ImageRef.current, { 
            opacity: 1, 
            x: 0
          });
          
          // Keep phase 3 and 4 elements hidden
          gsap.set(section17Phase3IconRef.current, { opacity: 0, scale: 0.8, y: 30, rotation: -21 });
          gsap.set(section17Phase3HeaderRef.current, { opacity: 0, y: 30 });
          gsap.set(section17Phase3PhoneRef.current, { opacity: 0, x: 0 });
          gsap.set(section17Phase3TextRef.current, { opacity: 0, y: 30 });
        }
        // Phase 3: Fade out current elements completely (40-50%)
        else if (progress <= 0.5) {
          const phase3Progress = (progress - 0.4) / 0.1; // 0 to 1 for phase 3 (fade out)
          const easedPhase3Progress = gsap.parseEase("power3.inOut")(phase3Progress);
          
          // Fade out current elements completely to opacity 0
          gsap.set(section17IconRef.current, { 
            opacity: 1 - easedPhase3Progress, // Fade from 1 to 0
            y: 0,
            filter: `blur(${2 * easedPhase3Progress}px)` // Blur from 0 to 2px
          });
          gsap.set(section17Text1Ref.current, { 
            opacity: 1 - easedPhase3Progress, // Fade from 1 to 0
            y: 0,
            filter: `blur(${2 * easedPhase3Progress}px)` // Blur from 0 to 2px
          });
          gsap.set(section17ImageRef.current, { 
            opacity: 1, // Keep at full opacity
            x: 0
          });
          gsap.set(section17Paragraph1Ref.current, {
            opacity: 1 - easedPhase3Progress, // Fade from 1 to 0
            y: 0,
            filter: `blur(${2 * easedPhase3Progress}px)` // Add blur effect
          });
          gsap.set(section17Paragraph2Ref.current, {
            opacity: 1 - easedPhase3Progress, // Fade from 1 to 0
            y: 0,
            filter: `blur(${2 * easedPhase3Progress}px)` // Add blur effect
          });
          
          // Keep phase 4 elements hidden during fade out
          gsap.set(section17Phase3IconRef.current, { opacity: 0, scale: 0.8, y: 30, rotation: -21 });
          gsap.set(section17Phase3HeaderRef.current, { opacity: 0, y: 30 });
          gsap.set(section17Phase3PhoneRef.current, { opacity: 0, x: 0 });
          gsap.set(section17Phase3TextRef.current, { opacity: 0, y: 30 });
        }
        // Phase 4: Fade in new elements (50-100%)
        else {
          const phase4Progress = (progress - 0.5) / 0.5; // 0 to 1 for phase 4 (fade in)
          
          // Split phase 4 into two parts: 4A+4B (0-50%), 4C (50-100%)
          if (phase4Progress <= 0.5) {
            // Phase 4A+4B: Icon, header, and phone animate in together (50-75%)
            const phase4ABProgress = phase4Progress / 0.5; // 0 to 1 for phase 4A+4B
            const easedPhase4ABProgress = gsap.parseEase("power3.inOut")(phase4ABProgress);
            
            // Keep current elements at opacity 0
            gsap.set(section17IconRef.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section17Text1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section17Paragraph1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section17Paragraph2Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            
            // Animate in icon, header, and phone together
            gsap.set(section17Phase3IconRef.current, {
              opacity: easedPhase4ABProgress,
              scale: 0.8 + (0.2 * easedPhase4ABProgress),
              y: 30 - (30 * easedPhase4ABProgress),
              rotation: -21 + (21 * easedPhase4ABProgress)
            });
            gsap.set(section17Phase3HeaderRef.current, {
              opacity: easedPhase4ABProgress,
              y: 30 - (30 * easedPhase4ABProgress)
            });
            gsap.set(section17Phase3PhoneRef.current, {
              opacity: easedPhase4ABProgress,
              x: 0
            });
            
            // Keep text hidden
            gsap.set(section17Phase3TextRef.current, { opacity: 0, y: 30 });
          } else {
            // Phase 4C: Text animates in (75-100%)
            const phase4CProgress = (phase4Progress - 0.5) / 0.5; // 0 to 1 for phase 4C
            const easedPhase4CProgress = gsap.parseEase("power3.inOut")(phase4CProgress);
            
            // Keep current elements at opacity 0
            gsap.set(section17IconRef.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section17Text1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section17Paragraph1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section17Paragraph2Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            
            // Keep icon, header, and phone at full opacity
            gsap.set(section17Phase3IconRef.current, { opacity: 1, scale: 1, y: 0, rotation: 0 });
            gsap.set(section17Phase3HeaderRef.current, { opacity: 1, y: 0 });
            gsap.set(section17Phase3PhoneRef.current, { opacity: 1, x: 0 });
            
            // Animate in text
            gsap.set(section17Phase3TextRef.current, {
              opacity: easedPhase4CProgress,
              y: 30 - (30 * easedPhase4CProgress)
            });
          }
        }
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section17AnimationComplete = true;
        }
      },
      onLeave: () => {
        // Section 17 onLeave - no longer controls isWhiteBG
      },
      onEnterBack: () => {
        // Section 17 onEnterBack - no longer controls isWhiteBG
      }
    });

    // Handle mobile orientation changes
    const handleOrientationChange = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    // CLEANUP FUNCTION
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      document.body.style.overflow = 'auto';
      
      // Cleanup orientation change handlers
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
      
      // Cleanup section observer
      sectionObserver.disconnect();
      
      // Reset section 13 active state when component unmounts
      if (setIsWhiteBG) {
        setIsWhiteBG(false);
      }
    };
  }, [setIsWhiteBG]);

  // Show mobile screen if on mobile device
  // DISABLED: Mobile check temporarily disabled
  // if (isMobile) {
  //   return <MobileErrorScreen />;
  // }

  // Body
  return (
    <div className={`relative overflow-x-hidden col-span-full mt-0 pt-0 ${className || ''}`}>
      {/* Scroll Progress Tracker */}
      <ScrollProgressTracker currentSection={currentSection} totalSections={totalSections} sectionRefs={sectionRefs} isMobile={isMobile} />

    {/* Section 1 – Title */}
    <section 
      ref={section1Ref}
      className="h-screen w-full flex items-center justify-center text-white relative overflow-hidden"
    >
      {/* Video Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">

        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"

        >
          <source src="/subway/Title Frame.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <img 
          src="/subway/lockup.png" 
          alt="NYC Subway Lockup" 
          className="absolute top-[49%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto scale-[80%] md:scale-[50%] ml-6 z-10"
        />

        {/* Bouncing Chevron Down */}
        <div 
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          onClick={() => {
            const nextSection = section2Ref.current;
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <ChevronDownIcon className="w-auto h-10 text-white animate-bounce " />
        </div>


      </div>

      
    </section>

    {/* Section 2 – Bubbles + Take a Crack at It (Combined) */}
    <section 
      ref={section2Ref}
      className="min-h-screen flex items-center justify-center relative border-0 border-white/[20%]"
    >
      <div className="w-full mx-auto text-center relative h-screen">
        
        {/* Section 2 Text Box */}
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-1/2">
           <p 
             ref={section2MainTitleRef}
             className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight w-[90%] md:w-2/3 mx-auto -mt-8 md:mt-0"
             style={{ lineHeight: '0.9' }}
           >
           The New York City Subway is not great.
           </p>
         </div>
        
        {/* Speech Bubbles */}
        <img 
          ref={(el) => section2BubbleRefs.current[0] = el}
          src="/subway/bubble1.png" 
          alt="Speech Bubble 1" 
          className="absolute bottom-[29%] md:bottom-[25%] -left-5 md:left-[10%] w-60 md:w-120 h-auto"
        />
        <img 
          ref={(el) => section2BubbleRefs.current[1] = el}
          src="/subway/bubble4.png" 
          alt="Speech Bubble 2" 
          className="absolute bottom-[38%] md:bottom-[58%] left-[28%] md:left-[7%] w-[70%] md:w-[35%] h-auto blur-[0.6px] *:md:blur-[1.5px]"
        />
        <img 
          ref={(el) => section2BubbleRefs.current[2] = el}
          src="/subway/bubble3.png" 
          alt="Speech Bubble 3" 
          className="absolute bottom-[58%] md:bottom-[69%] -right-[8%] md:right-[35%] w-[70%] md:w-120 h-auto blur-[1px] md:blur-[2px]"
        />
        <img 
          ref={(el) => section2BubbleRefs.current[3] = el}
          src="/subway/bubble2.png" 
          alt="Speech Bubble 4" 
          className="absolute bottom-[68%] md:bottom-[50%] right-[35%] md:right-[3%] w-[67%] md:w-120 h-auto blur-[1px] md:blur-[3px]"
        />
        <img 
          ref={(el) => section2BubbleRefs.current[4] = el}
          src="/subway/bubble5.png" 
          alt="Speech Bubble 5" 
          className="absolute bottom-[80%] md:bottom-[15%] right-[6%] md:right-[7%] w-[80%] md:w-135 h-auto"
        />
        
        {/* Section 2 Bottom middle emoji */}
        <div 
          ref={section2EmojiRef}
          className="absolute bottom-[2%] md:bottom-0 left-1/2 transform -translate-x-1/2 w-[45%] md:w-96 h-auto rounded-full md:rounded-none overflow-hidden glass-sm md:border-0 md:shadow-none"
        >
          <img 
            src="/subway/section2emoji.png" 
            alt="Section 1 Emoji" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Section 3 Text Box 1 */}
        <div 
          ref={section3Text1Ref}
          className="absolute top-[45%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full mx-auto text-center"
        >
          <h2 className="text-4xl md:text-4.5xl font-medium text-foreground tracking-tight w-[70%] md:w-[60%] mx-auto leading-[1]">
            We all already knew that.
          </h2>
          {/* Progress Line */}
          {/* <div 
            ref={section2ProgressLineRef}
            className="w-full h-1 bg-foreground mt-4 transform origin-left rounded-full"
            style={{ transform: 'scaleX(0)' }}
          /> */}
        </div>
        
        {/* Section 3 Text Box 2 */}
        <div 
          ref={section3Text2Ref}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
        >
          <h2 className="text-[24pt] md:text-6xl font-medium text-foreground tracking-tight w-[70%] md:w-[40%] mx-auto -mt-18 md:-mt-4 leading-[1] origin-center">
            However, I decided to take a crack at it anyway.
          </h2>
        </div>
        
        {/* Section 3 Bottom middle emoji */}
        <div 
          className="absolute bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 w-80 h-80"
        >
          <div className="w-full h-full rounded-full overflow-hidden relative -z-50 scale-75 md:scale-95 origin-bottom">
            <img 
              ref={section3EmojiRef}
              src="/subway/section2emoji1.png" 
              alt="Section 1 Emoji" 
              className="w-auto h-full scale-90 object-cover origin-bottom"
            />
            <img 
              ref={section3Emoji2Ref}
              src="/subway/section3emoji.png" 
              alt="Section 3 Emoji 2" 
              className="w-auto h-[120%] -mt-4 object-cover absolute inset-0 opacity-0"
            />
            
            {/* Progress Border */}
            <svg 
              className="absolute inset-0 w-full h-full rotate-90 pointer-events-none"
              viewBox="0 0 320 320"
            >
              <circle
                ref={section3EmojiProgressBorderRef}
                cx="160"
                cy="160"
                r="160"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="blur-[8px] dark:blur-[2px] text-black/30 dark:text-white"
                style={{
                  strokeDasharray: '0, 1000',
                  strokeLinecap: 'round'
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>

    {/* Section 4 – Look Inwards */}
    <section 
      ref={section4Ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden md:overflow-visible"
    >
      {/* Background gradient */}
      <div 
        ref={section4BackgroundRef}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at bottom, #6CFDFF 0%, #3B26FF 100%)'
        }}
      />
      {/* Container */}
      <div className="w-full h-full relative">
         
          {/* Text 1 */}
           <div 
             ref={section4Text1Ref}
             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
           >
               <p className="text-xl md:text-2xl font-medium text-foreground tracking-tight text-center">So to begin...</p>

           </div>
           
           {/* Text 2 */}
           <div 
             ref={section4Text2Ref}
             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
           >
            <h2 className="text-[56pt] md:text-9xl font-semibold text-foreground w-full mx-auto tracking-tight text-center mt-6 md:mt-0 leading-[0.9] md:whitespace-nowrap">
              I looked inwards.
            </h2>
           </div>
      </div>
      
      {/* Bottom middle emoji */}
      <div 
        ref={section4EmojiRef}
        className="absolute -bottom-8 md:bottom-0 z-40"
      >
        <img 
          src="/subway/section4emoji.png" 
          alt="Section 4 Emoji" 
          className=" h-[18rem] md:h-[29rem] w-auto"
        />
      </div>
    </section>

    {/* Section 5 – Personal Insights */}
    <section 
      ref={section5Ref}
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Text Body - Phase 0 */}
      <div 
        ref={section5TextBodyRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
      >
        <h2 className="text-3xl md:text-4.5xl leading-[1.2] md:leading-[3rem] font-medium text-foreground tracking-tight mt-10 md:-mt-4 w-[80%] md:w-[45%] mx-auto">
          And through my own lived experience, deduced the following personal insights.
        </h2>
      </div>
      
      <div className="w-full max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28">
        
        {/* Text Column 1 */}
        <div 
          ref={section5Text1Ref}
          className="text-left mt-4 md:-mt-10 w-[90%] md:w-full mx-auto md:mx-0"
        >
          <div className="mb-3 md:mb-6">
            <img 
              src="/subway/section5icon1.png" 
              alt="Section 5 Icon 1" 
              className="h-8 md:h-10 dark:invert w-auto"
            />
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold dark:font-medium tracking-tight mb-4 md:mb-8 bg-gradient-to-r from-[#3d9bff] to-[#0067d4] bg-clip-text text-transparent leading-[1]">
               Making my way downtown. (or not) 
          </h2>
          <p className="text-[10pt] md:text-lg font-normal md:font-medium text-white/90 md:text-foreground text-left leading-[1.4] md:leading-[1.6]">
          Subway stations can have platforms on opposing sides of the tracks heading uptown/downtown respectively, with tracks running in the middle.
          </p>

          <p className="text-[10pt] md:text-lg font-normal md:font-medium text-white/90 md:text-foreground text-left mt-3 md:mt-8 leading-[1.4] md:leading-[1.6]">
          This, combined with the lack of options for crossing the tracks to get to the platform opposite can result in users entering the wrong platform via the wrong entrance and thus having to exit and re-enter.
          </p>
        </div>
        
        {/* Text Column 2 */}
        <div 
          ref={section5Text2Ref}
          className="text-left md:-mt-10 w-[90%] md:w-full mx-auto md:mx-0"
        >
          <div className="mb-3 md:mb-6">
            <img 
              src="/subway/section5icon2.png" 
              alt="Section 5 Icon 2" 
              className="h-8 md:h-10 dark:invert w-auto"
            />
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold dark:font-medium tracking-tight mb-4 md:mb-8 bg-gradient-to-r from-[#3d9bff] to-[#0067d4] bg-clip-text text-transparent leading-[1]">
            Conduct yourself accordingly.
          </h2>
          <p className="text-[10pt] md:text-lg font-normal md:font-medium text-white/90 md:text-foreground text-left leading-[1.4] md:leading-[1.6]">
          Train conductors are a reliable source of information as well as safety.  
          </p>
          <p className="mt-3 md:mt-5 text-[10pt] md:text-lg font-normal md:font-medium text-white/90 md:text-foreground text-left leading-[1.4] md:leading-[1.6]">  
          They tend to be located in the middle of the train and it is a common sight for commuters to ask the conductors for directions/guidance at stations. 
          </p>
          <p className="mt-3 md:mt-8 text-[10pt] md:text-lg font-normal md:font-medium text-white/90 md:text-foreground text-left leading-[1.4] md:leading-[1.6]">
          They are also figures of authority and representatives of the MTA while on the train and can be a support for help when it is required.
          </p>
          
        </div>
        
      </div>
    </section>

    {/* Section 6 – Look to Someone Who Knows What He's Talking About */}
    <section 
      ref={section6Ref}
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Background gradient */}
      <div 
        ref={section6BackgroundRef}
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at bottom right, #FFB06B 0%, #FF4671 100%)'
        }}
      />
      {/* Container */}
      <div className="w-full h-full relative">
         
          {/* Text 1 */}
           <div 
             ref={section6Text1Ref}
             className="absolute top-[51%] md:top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
           >
               <p className="text-xl font-medium text-foreground tracking-tight">After which...</p>

           </div>
           
           {/* Text 2 */}
           <div 
             ref={section6Text2Ref}
             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[95%] md:w-[85%] 2xl:w-[75%]"
           >
               <p className="text-[32pt] xl:text-[50pt] 2xl:text-[60pt] font-semibold text-foreground tracking-tight mx-auto mt-8 md:mt-0 w-[90%]"
               style={{ lineHeight: '0.9' }}>
               I looked to someone who knew what he was talking about.
               </p>
           </div>
      </div>
      
      {/* Bottom middle emoji */}
      <div 
        ref={section6EmojiRef}
        className="absolute bottom-0 right-4 md:right-28"
      >
        <img 
          src="/subway/section6emoji.png" 
          alt="Section 6 Emoji" 
          className="max-w-full h-[16rem] md:h-[24rem] w-auto"
        />
      </div>
    </section>

    {/* Section 7+8 – Sim Hao Jie + Expert Insights */}
    <section 
      ref={section7Ref}
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Section 7 Content */}
      <div className="w-full text-center">
         
          {/* Text 1 */}
           <div 
             ref={section7Text1Ref}
             className="absolute top-[55%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
           >
            <p className="text-[40pt] md:text-[60pt] py-10 font-semibold tracking-tight mx-auto bg-gradient-to-t from-[#ffa46b] to-[#ff5f46] bg-clip-text text-transparent -mt-36">Sim Hao Jie</p>

           </div>
           
           {/* Text 2 */}
           <div 
             ref={section7Text2Ref}
             className="absolute top-[55%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full md:w-[65%]"
           >
               <p className="text-[12pt] md:text-[20pt] mt-0 md:mt-14 font-medium text-foreground w-[80%] mx-auto"
                style={{ lineHeight: '1.25' }}>
               is a Service Designer based in New York City and has conducted studies with communities regarding the daily experience 
               and situation of the New York City Subway.
               </p>
           </div>
      </div>
      
      {/* Bottom middle emoji */}
      <div 
        ref={section7EmojiRef}
        className="absolute bottom-0"
      >
        <img 
          src="/subway/section7emoji.png" 
          alt="Section 7 Emoji" 
          className="max-w-full h-[15rem] md:h-[22rem] w-auto"
        />
      </div>

      {/* Section 8 Content - Overlaid on top */}
      <div className="absolute inset-0 w-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 items-start max-w-7xl mt-10
         md:-mt-10 ">
          
          {/* Column 1 - Emoji */}
          <div 
            ref={section8EmojiRef}
            className="flex justify-center items-center md:-ml-20 mt-[40%] absolute bottom-10 left-1/2 transform -translate-x-1/2 mx-auto md:relative hidden md:block"
          >
            <div className="bg-background dark:border-0 dark:glass-strong drop-shadow-xl w-44 h-44 md:w-64 md:h-64 rounded-full flex items-center justify-center relative">
              <img 
                ref={section8Emoji1Ref}
                src="/subway/section7emoji1.png" 
                alt="Section 7 Emoji 1" 
                className="max-w-full h-40 md:h-52 absolute inset-0 m-auto"
              />
              <img 
                ref={section8Emoji2Ref}
                src="/subway/section7emoji2.png" 
                alt="Section 7 Emoji 2" 
                className="max-w-full h-40 md:h-52 absolute inset-0 m-auto"
              />
              <img 
                ref={section8Emoji3Ref}
                src="/subway/section7emoji3.png" 
                alt="Section 7 Emoji 3" 
                className="max-w-full h-40 md:h-52 absolute inset-0 m-auto"
              />
            </div>
          </div>
          
          {/* Column 2 - Text 1 */}
          <div 
            ref={section8Text1Ref}
            className="flex items-start flex-col pt-4 md:pt-20 w-[80%] md:w-full mx-auto"
          >
            <div className="mb-4">
              <img 
                src="/subway/section7icon1.png" 
                alt="Safety Icon" 
                className="h-7 md:h-10 w-auto dark:invert"
              />
            </div>
            <h3 className="text-2xl md:text-4.5xl font-semibold dark:font-medium tracking-tight mb-4 md:mb-8 bg-gradient-to-t from-[#ffa46b] to-[#ff5f46] bg-clip-text text-transparent py-0 md:py-4 ">
              Safety
            </h3>
            <p className="text-[10pt] md:text-lg font-normal md:font-medium text-white/90 md:text-foreground text-left leading-[1.3] md:leading-[1.6]">
            A sense of unease and lack of safety while commuting is exacerbated by the physical environments of certain stations within the system. 
            </p>

            <p className="text-[10pt] md:text-lg font-normal md:font-medium text-white/90 md:text-foreground text-left mt-3 md:mt-8 leading-[1.3] md:leading-[1.6]">
            Unclear wayfinding within the system can result in a lack of confidence in navigating the system.
            </p>
          </div>
          
          {/* Column 3 - Text 2 */}
          <div 
            ref={section8Text2Ref}
            className="flex flex-col pt-0 md:pt-20 w-[80%] md:w-full mx-auto"
          >
            <div className="mb-4">
              <img 
                src="/subway/section7icon2.png" 
                alt="Wayfinding Icon" 
                className="h-7 md:h-10 w-auto dark:invert"
              />
            </div>
            <h3 className="text-2xl md:text-4.5xl font-semibold dark:font-medium tracking-tight mb-4 md:mb-10 bg-gradient-to-t from-[#ffa46b] to-[#ff5f46] bg-clip-text text-transparent py-0 md:py-4">
              Wayfinding
            </h3>
            <p className="text-[10pt] md:text-lg font-normal md:font-medium text-white/90 md:text-foreground text-left leading-[1.3] md:leading-[1.6]">
            Station exits/entrances can be difficult to comprehend for a commuter. 
            </p>

            <p className="text-[10pt] md:text-lg font-normal md:font-medium text-white/90 md:text-foreground text-left mt-3 md:mt-8 leading-[1.3] md:leading-[1.6]">
            Exits, in particular, can be confusing as they are labeled by road names and cardinal directions. A Southeast corner can be difficult to discern while underground with no visible landmarks to ground a directional cue like this.
            </p>
          </div>
          
          {/* Column 4 - Text 3 */}
          <div 
            ref={section8Text3Ref}
            className="flex flex-col pt-0 md:pt-20 w-[80%] md:w-full mx-auto"
          >
            <div className="mb-4">
              <img 
                src="/subway/section7icon3.png" 
                alt="Accessibility Icon" 
                className="h-7 md:h-10 w-auto dark:invert"
              />
            </div>
            <h3 className="text-2xl md:text-4.5xl font-semibold dark:font-medium tracking-tight mb-4 md:mb-10 bg-gradient-to-t from-[#ffa46b] to-[#ff5f46] bg-clip-text text-transparent py-0 md:py-4">
              Accessibility
            </h3>
            <p className="text-[10pt] md:text-lg font-normal md:font-medium text-white/90 md:text-foreground text-left leading-[1.3] md:leading-[1.6]">
            Not all stations within the system are fully accessible.
            </p>

            <p className="text-[10pt] md:text-lg font-normal md:font-medium text-white/90 md:text-foreground text-left mt-3 md:mt-8 leading-[1.3] md:leading-[1.6]">
            This has a major impact on commuters with movement disabilities and results in itineraries that differ for most commuters as their needs take into account stations with accessibility. 
            </p>
          </div>
          
        </div>
      </div>
    </section>

    {/* Section 9 – Problem Statement */}
    <section 
      ref={section9Ref}
      className="h-screen w-full flex items-center justify-center text-white relative overflow-hidden"
    >
      {/* Background Video */}
      <video
        ref={section9BackgroundRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-auto h-full object-cover z-0 opacity-0"
      >
        <source src="/subway/flyover.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text and Icon - positioned independently */}
      <div className="absolute flex flex-col items-center justify-center z-10 w-[75%] md:-mt-6">
        <h1 
          ref={section9TextRef}
          className="text-[32pt] md:text-[54pt] font-semibold text-foreground tracking-tight mx-auto text-center -mt-16 md:-mt-0"
          style={{ lineHeight: '1.05' }}
        >
          Navigating the NYC subway system comfortably can be challenging.
        </h1>
      </div>

      <img 
          ref={section9IconRef}
          src="/subway/section9icon1.png" 
          alt="Section 9 Icon" 
          className="h-12 md:h-16 w-auto dark:invert opacity-0 absolute bottom-[200px] md:bottom-[320px] right-[60px] md:right-[42%]" 
          style={{
          filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(335deg) brightness(130%) contrast(97%)'
            }}
      />

      {/* Emoji positioned at bottom of screen */}
      <img
        ref={section9EmojiRef}
        src="/subway/section9emoji1.png"
        alt="Section 9 Icon"
        className="absolute bottom-0 h-[280px] md:h-[350px] w-auto z-10"
      />

      {/* Rounded Rectangle - positioned in center */}
      <div 
        ref={section9RectangleRef}
        className="absolute inset-0 w-[340px] md:w-[475px] m-auto rounded-[24pt] md:rounded-[40pt] border-2 glass-strong backdrop-blur-lg backdrop-brightness-110 bg-white/60 z-5 flex flex-col items-start justify-start pl-8 md:pl-14 opacity-0 overflow-hidden"
      >
        <img 
          src="/subway/section9icon2.png" 
          alt="Section 9 Icon" 
          className="mt-5 md:mt-9 h-12 md:h-16 w-auto mb-2" 
        />
        <div ref={section9TextContainerRef} className="flex flex-col">
          <h1 
            className="text-[2.55rem] md:text-5xl font-semibold text-black tracking-tight leading-[2.55rem] md:leading-none"
            ref={section9RectangleText1Ref}>
            How might we<span className="font-light">...</span>
          </h1>

          <h1 
            className="text-[2.55rem] md:text-5xl font-semibold text-black tracking-tight leading-[2.55rem] md:leading-none"
            ref={section9RectangleText2Ref}>
            provide 
          </h1>
          <h1 
            className="text-[2.55rem] md:text-5xl font-semibold text-black tracking-tight leading-[2.55rem] md:leading-none"
            ref={section9RectangleText3Ref}>
            commuters
          </h1>
          <h1 
            className="text-[2.55rem] md:text-5xl font-semibold text-black tracking-tight leading-[2.55rem] md:leading-none"
            ref={section9RectangleText4Ref}>
            confidence 
          </h1>
          <h1 
            className="text-[2.55rem] md:text-5xl font-semibold text-black tracking-tight leading-[2.55rem] md:leading-none"
            ref={section9RectangleText5Ref}>
            when <br/>navigating <br/>the system?
          </h1>
        </div>
      </div>
    </section>

    {/* Section 11 – UWB Explanation with Animation */}
    <section 
      ref={section11Ref}
      className="h-screen w-full flex items-center justify-center text-white relative overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-75 contrast-[1.2]"
      >
        <source src="/subway/Title Frame.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* 1st Rounded Rectangle */}
      <div 
        ref={section11OriginalRef}
        className="bg-white/80 backdrop-brightness-150 backdrop-blur-lg drop-shadow-xl rounded-[28pt] md:rounded-[40pt] glass-strong border-1 border-b-2 border-r-2 w-[340px] h-[560px] md:w-[475px] md:h-[700px] mx-auto text-center absolute inset-0 m-auto z-10 overflow-hidden scale-95 md:scale-100"
        style={{ top: '4%' }}
      >
        {/* Text */}
        <div className="pl-8 pt-8 md:pl-14 md:pt-10 text-left w-full">

          {/* Icon */}
          <img 
            src="/subway/section11icon1.png" 
            alt="Section 11 Icon" 
            className="h-10 w-auto mb-5 md:h-12 md:mb-6"/>

          {/* Utilizing */}
          <p className="text-[16pt] md:text-[20pt] font-semibold tracking-tight text-left text-gray-600 mt-5 mb-3 md:mt-8 md:mb-4">
          Utilizing...
          </p>
        
          {/* Header */}
          <h2 className="text-[28pt] md:text-[38pt] font-semibold tracking-tight text-left bg-gradient-to-r to-[#3d9bff] from-[#0067d4] leading-[2.2rem] md:leading-[3rem] bg-clip-text text-transparent pb-1.5 md:pb-2">
            Ultra-Wideband Technology
          </h2>

        </div>

        {/* Phone */}
        <div className="relative w-full h-full mt-8 md:mt-10">
          <img 
            src="/subway/section11phone2.png" 
            alt="Section 11 Icon" 
            className="absolute w-full h-auto object-cover scale-[130%] md:scale-[120%] left-[69%] top-[70%] -translate-x-[50%] -translate-y-[50%]"
          />
        </div>
      </div>
      
      {/* 2nd Rounded Rectangle with 3 Text Columns */}
      <div 
        ref={section11NewRef}
        className="bg-white/80 backdrop-brightness-150 backdrop-blur-lg drop-shadow-xl rounded-[40pt] glass-strong border-1 border-b-2 border-r-2 w-[1000px] h-[500px] mx-auto text-center absolute inset-0 m-auto z-10 overflow-hidden pt-11 pr-14 pl-18"
      >
        {/* Header Container */}
        <div className="flex items-center mb-4">
          
          <h2 
            ref={section11Header1Ref}
            className="text-6xl font-semibold tracking-tight text-black/80"
          >
            Ultra-wide
          </h2>

          <h2 
            ref={section11Header2Ref}
            className="text-6xl font-semibold tracking-tight bg-gradient-to-r from-[#528ee8] to-[#1a78dd] bg-clip-text  text-transparent italic -ml-0.5 pr-2"
          >
            what?
          </h2>

        </div>

        {/* Phase 1 Content */}
        <div ref={section11TopParagraphRef} className="text-left mb-12">

          {/* Header Sub Paragraph */}
          <p className="text-xl tracking-tight text-black/60 font-semibold w-[90%]">
          Ultra-Wideband (UWB) is a short-range, high-bandwidth wireless communication technology, capable of providing precise spatial awareness and device tracking
          </p>

        </div>
        
        {/* Bottom 3 Columns */}
        <div className="flex h-full flex-1 items-start justify-start gap-6">

          {/* Column 1 */}
          <div 
            ref={section11Text1Ref}
            className="flex-1 flex flex-col justify-center items-start"
          >  
            <img 
              src="/subway/section11iconairtag.png" 
              alt="UWB Icon" 
              className="h-10 w-auto mb-4 -mt-1"
            />

            <h3 className="text-2xl tracking-tight font-semibold mb-4 text-black/90">
              Airtag/Find My
            </h3>

            <p className="text-sm text-gray-700 font-medium text-left">
              UWB enables an iPhone to measure its distance and direction from an AirTag, providing precision finding with centimeter-level accuracy.
            </p>

          </div>
          
          {/* Column 2 */}
          <div 
            ref={section11Text2Ref}
            className="flex-1 flex flex-col justify-center items-start"
          >
            <img 
              src="/subway/section11icon3.png" 
              alt="UWB Icon" 
              className="h-9 w-auto mb-4"
            />

            <h3 className="text-2xl tracking-tight font-semibold mb-4 text-black/90">
              Handoff
            </h3>

            <p className="text-sm text-gray-700 font-medium text-left">
              Handoff works more smoothly by prioritizing nearby devices. When you bring your iPhone close to a HomePod mini, a visual and haptic effect appears, making it easier to transfer music.
            </p>
              
          </div>
          
          {/* Column 3 */}
          <div 
            ref={section11Text3Ref}
            className="flex-1 flex flex-col justify-center items-start"
          >
            <img 
              src="/subway/section11icon4.png" 
              alt="UWB Icon" 
              className="h-9 w-auto mb-4"
            />

            <h3 className="text-2xl tracking-tight font-semibold mb-4 text-black/90">
              AirDrop
            </h3>

            <p className="text-sm text-gray-700 font-medium text-left">
              UWB also enables better device-to-device awareness, improving AirDrop by detecting which person you&apos;re pointing at.
            </p>

          </div>
        </div>
        
        {/* Phase 2 Content - Overlaid on top */}
        <div 
          ref={section11Phase2Ref}
          className="absolute inset-0 pt-11 pl-18 pr-6"
        >
          {/* Top Paragraph */}
          <div ref={section11Phase2TopParagraphRef} className="text-left mb-10">
            <h2 className="text-6xl font-semibold tracking-[-0.09rem] mb-4 text-black/80 leading-[3.75rem] w-[60%]">
              How it could work within the subway.
            </h2>
          </div>
          
          {/* Bottom Text */}
          <div className="flex h-full flex-1 items-start justify-start gap-10">

            {/* Column 1 */}
            <div 
              ref={section11Phase2Text1Ref}
              className="flex-1 flex flex-col justify-center items-start"
            >  
              <img 
                src="/subway/section11icon2.png" 
                alt="Navigation Icon" 
                className="h-9 w-auto mb-4 -ml-1"
              />

              <p className="text-lg font-medium text-gray-600 text-left leading-[1.7rem] ">
              UWB base stations will be installed within subway stations, namely at entrances and exits, diverging paths within the station, and platforms. 
              </p>

            </div>
            
            {/* Column 2 */}
            <div 
              ref={section11Phase2Text2Ref}
              className="flex-1 flex flex-col justify-center items-start"
            >
              <img 
                src="/subway/section11icon5.png" 
                alt="Safety Icon" 
                className="h-9 w-auto mb-4 -ml-1"
              />

              <p className="text-lg font-medium text-gray-600 text-left leading-[1.7rem]">
              The base stations will be programmed to transmit information regarding its respective location within stations.
              </p>
                
            </div>
            
            {/* Column 3 */}
            <div 
              ref={section11Phase2Text3Ref}
              className="flex-1 flex flex-col justify-center items-start"
            >
              <img 
                src="/subway/section11icon6.png" 
                alt="Accessibility Icon" 
                className="h-9 w-auto mb-4 -ml-1"
              />

              <p className="text-lg font-medium text-gray-600 text-left leading-[1.7rem] ">
              iPhones, in hand with Apple Maps, will query the base stations, resulting in precise spatial awareness within stations.
              </p>

                            </div>
            </div>
            
            {/* Phase 2 Emoji - Bottom Right */}
            <div 
              ref={section11Phase2EmojiRef}
              className="absolute bottom-0 right-10"
            >
              <img 
                src="/subway/section11emoji.png" 
                alt="Section 11 Emoji" 
                className="h-64 w-auto"
              />
            </div>
          </div>
        </div>
      
    </section>

    {/* Section 12 – How does it actually work? */}
    <section 
      ref={section12Ref}
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Background gradient */}
      <div 
        ref={section12BackgroundRef}
        className="absolute -inset-0"
        style={{
          background: 'radial-gradient(circle at bottom, #DECEBE 0%, #FF2020 100%)'
        }}
      />
      {/* Container */}
      <div className="w-full">
          
          {/* Text 1 */}
            <div 
              ref={section12Text1Ref}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-8"
            >
                <p className="text-2xl font-medium text-foreground tracking-tight">Wait, so how does it...</p>

            </div>
            
          {/* Text 2 */}
            <div 
              ref={section12Text2Ref}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-8"
            >
                <h2 className="text-4xl md:text-9xl whitespace-nowrap font-semibold text-foreground tracking-tight w-full -mt-4 relative">
                  <span className="relative inline-block">
                    actually
                    <div 
                      ref={section12UnderlineRef}
                      className="absolute bottom-0 left-1.5 w-[84%] h-2 bg-foreground transform scale-x-0 origin-left"
                      style={{ transform: 'scaleX(0)' }}
                    />
                  </span>
                  <span className="ml-5">work?</span>
                </h2>
            </div>
      </div>
      
      {/* Bottom middle emoji */}
      <div 
        ref={section12EmojiRef}
        className="absolute bottom-0"
      >
        <img 
          src="/subway/section12emoji1.png" 
          alt="Section 12 Emoji" 
          className="max-w-full h-[29rem]"
        />
      </div>
    </section>

    {/* Section 13 – Mock: Set Destination */}
    <section 
      ref={section13Ref}
      className="min-h-screen flex items-center justify-center relative bg-[#F5F5F5]"
    >
      <div className="w-full mx-auto px-20 grid grid-cols-1 md:grid-cols-3 items-center justify-center">
        
        {/* Column 1: Header */}
        <div 
          className="text-center md:text-left -mt-16 ml-10"
        >
          {/* Icon */}
          <div 
            ref={section13IconRef}
            className="mb-4 flex justify-center md:justify-start"
            style={{ transformOrigin: 'center', display: 'inline-block' }}
          >
            <div style={{ transformOrigin: 'center', display: 'inline-block' }}>
              <img 
                src="/subway/section13icon1.png" 
                alt="Section 13 Icon" 
                className="h-12 w-auto ml-1"
                style={{ transformOrigin: 'center', display: 'block' }}
              />
            </div>
          </div>

          {/* Text */}
          <h2 
            ref={section13Text1Ref}
            className="text-[48pt] font-semibold tracking-tight leading-[3.75rem] text-black/80 w-[83%]"
          >
            Set a destination in your maps.
          </h2>

        </div>
        
        {/* Column 2: Placeholder Image */}
        <div 
          ref={section13ImageRef}
          className="flex items-center justify-center relative"
        >
          <img 
              src="/subway/section13phone1.png" 
              alt="Section 13 Icon" 
              className="h-full w-auto scale-90 z-10"
              style={{ transformOrigin: 'center' }}
            />
          {/* Line from middle to bottom edge */}
          {/* <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-[15px] border-1 "
            style={{ 
              top: '50%',
              height: '50vh',
              zIndex: -1,
              boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.3)'
            }}
          /> */}
        </div>
        
        {/* Column 3: Text Paragraph */}
        <div 
          ref={section13ParagraphRef}
          className="text-center md:text-left"
        >
          <p className="text-2xl font-medium text-black/50 leading-9 px-24 mt-2">
          As Apple Maps is now aware of your itinerary, the logic within Apple Maps will also include specific entrances to take, directions to head towards the correct platform as well as the directions toward the Downtown platform instead of Uptown.
          </p>
        </div>
      </div>
    </section>

    {/* Section 14 – Mock: Incorrect Entrance */}
    <section 
      ref={section14Ref}
      className="min-h-screen flex items-center justify-center relative bg-[#F5F5F5]"
    >
      <div className="w-full mx-auto px-20 grid grid-cols-1 md:grid-cols-3 items-center justify-center">
        
        {/* Column 1: Header */}
        <div 
          className="text-center md:text-left -mt-20 ml-10"
        >
          <div 
            ref={section14IconRef}
            className="mb-4 flex justify-center md:justify-start"
            style={{ transformOrigin: 'center', display: 'inline-block' }}
          >
            <div style={{ transformOrigin: 'center', display: 'inline-block' }}>
              <img 
                src="/subway/section9icon1.png" 
                alt="Section 14 Icon" 
                className="h-11 w-auto"
                style={{ transformOrigin: 'center', display: 'block' }}
              />
            </div>
          </div>

          <h2 
            ref={section14Text1Ref}
            className="text-[46pt] font-semibold tracking-tight leading-[3.75rem] bg-gradient-to-r from-black/80 to-gray-700 bg-clip-text text-transparent w-[83%]"
          >
            You mistakenly approach the incorrect entrance for the station.
          </h2>

        </div>
        
        {/* Column 2: Video */}
        <div 
          className="flex items-center justify-center relative"
        >
          <video 
              ref={section14ImageRef}
              src="/subway/section14animation2.mp4" 
              className="scale-95 ml-6 mt-10 object-cover"
              style={{ 
                backgroundColor: 'transparent',
                clipPath: 'inset(1px 1px 1px 1px)'
              }}
              muted
              loop
              playsInline
            />
          <img 
              ref={section14LockscreenRef}
              src="/subway/section14lockscreen.png" 
              alt="Section 14 Lockscreen" 
              className="mx-auto absolute h-[72%] top-[14.5%] left-[14%] w-auto drop-shadow-[3px_4px_12px_rgba(0,0,0,0.2)]"
              style={{ transformOrigin: 'center' }}
            />
        </div>
        
        {/* Column 3: Text Paragraph */}
        <div 
          className="text-center md:text-left"
        >
          <p 
            ref={section14Paragraph1Ref}
            className="text-2xl font-medium text-black/50 leading-9 px-24 mt-14"
          >
          Your iPhone begins to receive the transmission from the base station that is installed at the entrance.
          </p>

          <p 
            ref={section14Paragraph2Ref}
            className="text-2xl font-medium text-black/50 leading-9 px-24 -mt-48"
          >
          You receive a haptic buzz and a time-sensitive notification that you are approaching the wrong entrance for your trip.
          </p>
        </div>
        
      </div>
    </section>

    {/* Section 15 – Mock: Enter Correct Station */}
    <section 
      ref={section15Ref}
      className="min-h-screen flex items-center justify-center relative bg-[#F5F5F5]"
    >
      <div className="w-full mx-auto px-20 grid grid-cols-1 md:grid-cols-3 items-center justify-center">
        
        {/* Column 1: Header */}
        <div 
          className="text-center md:text-left -mt-20 ml-10"
        >
          <div 
            ref={section15IconRef}
            className="mb-4 flex justify-center md:justify-start"
            style={{ transformOrigin: 'center', display: 'inline-block' }}
          >
            <div style={{ transformOrigin: 'center', display: 'inline-block' }}>
              <img 
                src="/subway/section15icon1.png" 
                alt="Section 15 Icon" 
                className="h-14 w-auto"
                style={{ transformOrigin: 'center', display: 'block' }}
              />
            </div>
          </div>

          <h2 
            ref={section15Text1Ref}
            className="text-[46pt] font-semibold tracking-tight leading-[3.75rem] bg-gradient-to-r from-black/80 to-gray-700 bg-clip-text text-transparent w-[83%]"
          >
            You receive directions to the correct entrance.
          </h2>

        </div>
        
        {/* Column 2: Video */}
        <div 
          className="flex items-center justify-center relative"
        >
          <video 
            ref={section15ImageRef}
            src="/subway/section15animation_1.mp4" 
            className="scale-90 ml-7 mt-10 object-cover"
            style={{ 
              transformOrigin: 'center',
              backgroundColor: 'transparent'
            }}
            muted
            loop
            playsInline
          />
          
        </div>
        
        {/* Column 3: Text Paragraph */}
        <div 
          className="text-center md:text-left pl-14 pr-18"
        >
          <img 
            ref={section15Column3ImageRef}
            src="/subway/section15phase2.png" 
            alt="Section 15 Column 3 Image" 
            className="h-auto w-full"
          />
          <p 
            ref={section15Paragraph1Ref}
            className="text-[16pt] font-medium text-black/50 leading-8 mt-6 ml-4"
          >
          A directional navigator shows up and guides you towards the direction of the correct entrance. 
          </p>

          <p 
            ref={section15Paragraph2Ref}
            className="text-[16pt] font-medium text-black/50 leading-8 mt-6 ml-4"
          >
          You receive a haptic tap and the blue circle fills when you are oriented in the right direction.
          </p>
        </div>
        
      </div>
      
      {/* Phase 3 Overlay Elements */}
      <div className="absolute inset-0 w-full mx-auto px-20 grid grid-cols-1 md:grid-cols-3 items-center justify-center pointer-events-none">
        
        {/* Phase 3 Column 1: New Header */}
        <div 
          className="text-center md:text-left -mt-20 ml-10"
        >
          <div 
            ref={section15Phase3IconRef}
            className="mb-4 flex justify-center md:justify-start"
            style={{ transformOrigin: 'center', display: 'inline-block' }}
          >
            <div style={{ transformOrigin: 'center', display: 'inline-block' }}>
              <img 
                src="/subway/section15icon2.png" 
                alt="Section 15 Phase 3 Icon" 
                className="h-12 w-auto"
                style={{ transformOrigin: 'center', display: 'block' }}
              />
            </div>
          </div>

          <h2 
            ref={section15Phase3HeaderRef}
            className="text-[46pt] font-semibold tracking-tight leading-[3.75rem] bg-gradient-to-r from-black/80 to-gray-700 bg-clip-text text-transparent w-[75%]"
          >
            You enter the correct station.
          </h2>

        </div>
        
        {/* Phase 3 Column 2: New Video */}
        <div 
          className="flex items-center justify-center relative"
        >
          <video 
            ref={section15Phase3PhoneRef}
            src="/subway/section15animation2.mp4" 
            className="scale-90 ml-7 mt-[2.375rem] object-cover"
            style={{ 
              backgroundColor: 'transparent'
            }}
            muted
            loop
            playsInline
          />
          
        </div>
        
        {/* Phase 3 Column 3: New Text */}
        <div 
          className="text-center md:text-left pl-14 pr-14"
        >
          <p 
            ref={section15Phase3TextRef}
            className="text-[16pt] font-medium text-black/50 leading-8 mt-6 ml-4 mb-4"
          >
          Your iPhone knows where it is due to the base stations within the station. 
          </p>

          <img 
            ref={section15Phase4DImageRef}
            src="/subway/section15phase3.png" 
            alt="Section 15 Phase 4D Image" 
            className="h-auto w-[90%]"
          />

          <p 
            ref={section15Phase4DTextRef}
            className="text-[16pt] font-medium text-black/50 leading-8 mt-6 ml-4"
          >
          The station&apos;s navigation system guides you to your platform with precision.
          </p>
          
        </div>
        
      </div>
    </section>

    {/* Section 16 – Mock: Along the Platform */}
    <section 
      ref={section16Ref}
      className="min-h-screen flex items-center justify-center relative bg-[#F5F5F5]"
    >
      <div className="w-full mx-auto px-20 grid grid-cols-1 md:grid-cols-3 items-center justify-center">
        
        {/* Column 1: Header */}
        <div 
          className="text-center md:text-left -mt-20 ml-10"
        >
          <div 
            ref={section16IconRef}
            className="mb-4 flex justify-center md:justify-start"
            style={{ transformOrigin: 'center', display: 'inline-block' }}
          >
            <div style={{ transformOrigin: 'center', display: 'inline-block' }}>
              <img 
                src="/subway/section16icon1.png" 
                alt="Section 16 Icon" 
                className="h-12 w-auto"
                style={{ transformOrigin: 'center', display: 'block' }}
              />
            </div>
          </div>

          <h2 
            ref={section16Text1Ref}
            className="text-[46pt] font-semibold tracking-tight leading-[3.75rem] bg-gradient-to-r from-black/80 to-gray-700 bg-clip-text text-transparent w-[83%]"
          >
            You head down to the platform.
          </h2>

        </div>
        
        {/* Column 2: Placeholder Image */}
        <div 
          className="flex items-center justify-center relative"
        >
          <img 
              ref={section16ImageRef}
              src="/subway/section16phone1.png" 
              alt="Section 16 Icon" 
              className="scale-90 ml-6 mt-10"
            />
        </div>
        
        {/* Column 3: Text Paragraph */}
        <div 
          className="text-center md:text-left"
        >
          <p 
            ref={section16Paragraph1Ref}
            className="text-2xl font-medium text-black/50 leading-9 px-24 mt-14"
          >
          As you descend to the platform, the iPhone is aware of your current location along the platform.
          </p>

          <p 
            ref={section16Paragraph2Ref}
            className="text-2xl font-medium text-black/50 leading-9 px-24 -mt-48"
          >
          You receive directions to head towards the front (in the direction of travel) of the platform as Apple Maps is aware of the exit to take at the destination station.
          </p>
        </div>
        
      </div>
    </section>

    {/* Section 17 – Mock: Reached Destination */}
    <section 
      ref={section17Ref}
      className="min-h-screen flex items-center justify-center relative bg-[#F5F5F5]"
    >
      <div className="w-full mx-auto px-20 grid grid-cols-1 md:grid-cols-3 items-center justify-center">
        
        {/* Column 1: Header */}
        <div 
          className="text-center md:text-left -mt-20 ml-10"
        >
          <div 
            ref={section17IconRef}
            className="mb-4 flex justify-center md:justify-start"
            style={{ transformOrigin: 'center', display: 'inline-block' }}
          >
            <div style={{ transformOrigin: 'center', display: 'inline-block' }}>
              <img 
                src="/subway/section17icon1.png" 
                alt="Section 17 Icon" 
                className="h-11 w-auto"
                style={{ transformOrigin: 'center', display: 'block' }}
              />
            </div>
          </div>

          <h2 
            ref={section17Text1Ref}
            className="text-[46pt] font-semibold tracking-tight leading-[3.75rem] bg-gradient-to-r from-black/80 to-gray-700 bg-clip-text text-transparent w-[83%]"
          >
            You arrive at your destination station.
          </h2>

        </div>
        
        {/* Column 2: Placeholder Image */}
        <div 
          className="flex items-center justify-center relative"
        >
          <img 
            ref={section17ImageRef}
            src="/subway/section17phone1.png" 
            alt="Section 17 Icon" 
            className="w-[92%] h-auto ml-6 mt-10"
            style={{ transformOrigin: 'center' }}
          />
          
        </div>
        
        {/* Column 3: Text Paragraph */}
        <div 
          className="text-center md:text-left pl-14 pr-36"
        >
          <p 
            ref={section17Paragraph1Ref}
            className="text-[16pt] font-medium text-black/50 leading-8 mt-6 ml-4"
          >
          The subway ride is uneventful (not necessarily a given in NYC), and you arrive at your destination station.
          </p>

          <p 
            ref={section17Paragraph2Ref}
            className="text-[16pt] font-medium text-black/50 leading-8 mt-6 ml-4"
          >
          You get off from the front of the train and as per planned, you find the set of stairs up from the platform in front of you.
          </p>
        </div>
        
      </div>
      
      {/* Phase 3 Overlay Elements */}
      <div className="absolute inset-0 w-full mx-auto px-20 grid grid-cols-1 md:grid-cols-3 items-center justify-center pointer-events-none">
        
        {/* Phase 3 Column 1: New Header */}
        <div 
          className="text-center md:text-left -mt-20 ml-10"
        >
          <div 
            ref={section17Phase3IconRef}
            className="mb-4 flex justify-center md:justify-start"
            style={{ transformOrigin: 'center', display: 'inline-block' }}
          >
            <div style={{ transformOrigin: 'center', display: 'inline-block' }}>
              <img 
                src="/subway/section17icon2.png" 
                alt="Section 17 Phase 3 Icon" 
                className="h-11 w-auto"
                style={{ transformOrigin: 'center', display: 'block' }}
              />
            </div>
          </div>

          <h2 
            ref={section17Phase3HeaderRef}
            className="text-[46pt] font-semibold tracking-tight leading-[3.75rem] bg-gradient-to-r from-black/80 to-gray-700 bg-clip-text text-transparent w-[75%]"
          >
            You are guided to your exit from the station.
          </h2>

        </div>
        
        {/* Phase 3 Column 2: New Phone */}
        <div 
          className="flex items-center justify-center relative"
        >
          <img 
            ref={section17Phase3PhoneRef}
            src="/subway/section17phone2.png" 
            alt="Section 17 Icon" 
            className="w-[74%] h-auto ml-1 mb-0.5"
            
          />
          
        </div>
        
        {/* Phase 3 Column 3: New Text */}
        <div 
          className="text-center md:text-left pl-14 pr-40"
        >
          <p 
            ref={section17Phase3TextRef}
            className="text-[16pt] font-medium text-black/50 leading-8 mt-6 ml-4 mb-4"
          >
          You continue to receive directions in the form of haptic feedback and time-sensitive notifications within the station that lead you to your specific exit from the station building.
          </p>

        </div>
        
      </div>
    </section>

    {/* Section 18 – Summary */}
    <section 
      ref={section18Ref}
      className="min-h-screen flex items-center justify-center relative bg-[#F5F5F5]"
    >
      <div className="w-full h-screen mx-auto px-20 flex flex-col md:flex-row items-center justify-center xl:gap-6 gap-3">
        
        {/* Column 1: Rounded Rectangle with Inset Image */}
        <div 
          className="flex-[4] flex flex-col items-center justify-between rounded-3xl xl:rounded-[35pt] md:h-[480px] lg:h-[550px] xl:h-[640px] 2xl:h-[780px] bg-white drop-shadow-xl"
          ref={section18Image1Ref}
        >  
          <div className="flex flex-col items-center w-[98%] mt-5 rounded-2xl overflow-hidden h-auto "> 
            <video 
              src="/subway/section14animation1.mp4" 
              alt="Section 14 Animation 1" 
              className="w-auto h-full object-cover ml-5 scale-[1.04]"
              style={{ transformOrigin: 'center' }}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <p className="md:text-[13pt] xl:text-[16pt] text-center font-semibold text-gray-600 tracking-tight mb-7">
            Error State
          </p>
        </div>
        
        {/* Column 2: Rounded Rectangle with Inset Image */}
        <div 
          className="flex-[4] flex flex-col items-center justify-between rounded-3xl xl:rounded-[35pt] md:h-[480px] lg:h-[550px] xl:h-[640px] 2xl:h-[780px] bg-white drop-shadow-xl"
          ref={section18Image2Ref}
        >
          <div className="flex flex-col items-center w-[90%] mt-5 rounded-2xl overflow-hidden h-auto "> 
            <img 
              src="/subway/section18image2.png" 
              alt="Section 18 Image 2" 
              className="h-[99%] w-auto ml-2 object-cover"
              style={{ transformOrigin: 'center' }}
            />
          </div>

          <p className="md:text-[13pt] xl:text-[16pt] text-center font-semibold text-gray-600 tracking-tight mb-7">
            Live Activity Cards
          </p>
        </div>
        
        {/* Column 3: 2 Stacked Images */}
        <div 
          className="flex-[3] md:h-[480px] lg:h-[550px] xl:h-[640px] 2xl:h-[780px] flex flex-col items-center justify-center space-y-2 xl:space-y-5"
        >
          <div 
          ref={section18Image3TopRef}
          className="flex flex-col items-center justify-between w-full h-1/2 bg-white rounded-3xl drop-shadow-xl">
            <img 
              src="/subway/section18image3top.png" 
              alt="Section 18 Image 3 Top" 
              className="w-[85%] h-auto py-4"
              style={{ transformOrigin: 'center' }}
            />
            <p className="md:text-[11pt] 2xl:text-[16pt] leading-[1] text-center font-semibold text-gray-600 tracking-tight mb-6 w-[90%]">
              Real-time directional navigation
            </p>
          </div>

          <div 
          ref={section18Image3BottomRef}
          className="flex flex-col items-center justify-between w-full h-1/2 bg-white rounded-3xl drop-shadow-xl">
            
            <div className="flex flex-col items-center mt-4 w-[85%] h-auto rounded-2xl shadow-lg overflow-hidden">
              <video 
                src="/subway/itinerary.mp4" 
                alt="Summary Itinerary Video" 
                className="w-full h-auto object-cover scale-[1.03]"
                style={{ transformOrigin: 'center' }}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <p className="md:text-[13pt] 2xl:text-[16pt] leading-[1] text-center font-semibold text-gray-600 tracking-tight mb-6">
              Step-by-step itinerary
            </p>
          </div>
        </div>
        
        {/* Column 4: Image */}
        <div 
          className="flex-[4] flex flex-col items-center justify-between rounded-3xl xl:rounded-[35pt] md:h-[480px] lg:h-[550px] xl:h-[640px] 2xl:h-[780px] bg-white drop-shadow-xl"
          ref={section18Image4Ref}
        >
          <div className="flex flex-col items-center w-full h-auto max-h-[88%]">
            <img 
              src="/subway/section18image4.png" 
              alt="Section 18 Image 4" 
              className="w-[90%] h-auto ml-1 mt-6 object-contain"
              style={{ transformOrigin: 'center' }}
            />
            <video 
              src="/subway/navigator1.mp4" 
              alt="Navigator Video" 
              className="w-[90%] h-[90%] ml-1 mt-4 object-cover rounded-3xl shadow-lg"
              style={{ transformOrigin: 'center' }}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          

          <p className="md:text-[13pt] xl:text-[16pt] leading-[1.2] text-center font-semibold text-gray-600 tracking-tight mb-6 w-[80%]">
            UWB-powered proximity guidance
          </p>

        </div>

        
        
      </div>
    </section>

    {/* Section 19 – End */}
    <section 
      ref={section19Ref}
      className="min-h-screen flex items-center justify-center relative bg-[#F5F5F5]"
    >
      <div className="w-full h-screen mx-auto flex items-center justify-center relative">
        
        {/* Logo Images - Side by side in the middle */}
        <div className="flex items-center justify-center gap-10">
          <img 
            ref={section19Image1Ref}
            src="/subway/section19logo1.png"   
            alt="Section 19 Image 1" 
            className="w-[25%] h-auto"
          />
          
          <img 
            ref={section19Image3Ref}
            src="/subway/section19logo2.png"   
            alt="Section 19 Image 3" 
            className="w-[10%] h-auto"
          />
        </div>
        
        {/* Emoji - Unchanged positioning */}
        <img 
          ref={section19Image2Ref}
          src="/subway/section19emoji.png"   
          alt="Section 19 Image 2" 
          className="absolute bottom-0 left-[50%] transform -translate-x-1/2 w-[20%] h-auto"
        />
        
      </div>
    </section>

      
    </div>
  );
};

export default NycSubway;
