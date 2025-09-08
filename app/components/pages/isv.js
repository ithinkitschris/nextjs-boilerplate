'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useHideNav } from '../../context/HideNavContext';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import { ChevronLeftIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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

const ISV = ({ className }) => {
  const { setIsWhiteBG } = useHideNav();
  const isMobile = useMobileDetection();
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 4;

  //#region Refs
  // Section 1 refs (title)
  const section1Ref = useRef(null);
  const chevronRef = useRef(null);
  
  // Section 2 refs (intro text content)
  const section2Ref = useRef(null);
  const section2MainTitleRef = useRef(null);
  
  // Section 2 text refs (phases within section 2)
  const section3Text1Ref = useRef(null);
  const section3Text2Ref = useRef(null);
  const section3Text3Ref = useRef(null);
  const section3ContainerRef = useRef(null);
  
  // Section 3 refs
  const section3Ref = useRef(null);
  const section3MainTitleRef = useRef(null);
  const section3Text1Ref_new = useRef(null);
  const section3BackgroundRef = useRef(null);
  const section3Text1Ref_phase3 = useRef(null);
  const section3Text1BRef_phase3 = useRef(null);
  const section3Text2Ref_phase3 = useRef(null);
  const section3Text2BRef_phase3 = useRef(null);
  const section3LineRef = useRef(null);
  
  // Section 4 refs
  const section4Ref = useRef(null);
  const section4TextRef = useRef(null);
  const section4Text2Ref = useRef(null);
  
  //#endregion

  // Section tracking for progress indicator
  const sectionRefs = [
    section1Ref, // Section 1 (Title)
    section2Ref, // Section 2 (Intro Text)
    section3Ref, // Section 3 (Duplicate of Section 2)
    section4Ref, // Section 4 (New Section)
  ];

  // Animations
  useEffect(() => {
    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

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

    //#region Initial States
    // Set initial state for section 2 main title
    gsap.set(section2MainTitleRef.current, { opacity: 1, scale: 1 });

    // Set initial state for section 2
    gsap.set(section3ContainerRef.current, { opacity: 0, y: 30 });
    gsap.set(section3Text1Ref.current, { opacity: 1, y: 0 });
    gsap.set(section3Text2Ref.current, { opacity: 0, y: 30 });
    gsap.set(section3Text3Ref.current, { opacity: 0, y: 30 });
    
    // Set initial state for section 3
    gsap.set(section3MainTitleRef.current, { opacity: 1, scale: 1 });
    gsap.set(section3Text1Ref_new.current, { opacity: 0, y: 0 }); // Hidden initially, in normal position
    gsap.set(section3BackgroundRef.current, { opacity: 1 }); // Background image visible initially
    gsap.set(section3Text1Ref_phase3.current, { opacity: 0, y: 50, x: 0 }); // Hidden initially, 50px below, center
    gsap.set(section3Text1BRef_phase3.current, { opacity: 0, y: 50, x: 0 }); // Hidden initially, 50px below, center
    gsap.set(section3Text2Ref_phase3.current, { opacity: 0, y: 0, x: 0, scale: 1 }); // Hidden initially, center position
    gsap.set(section3Text2BRef_phase3.current, { opacity: 0, y: 50, x: 300 }); // Hidden initially, 50px below, right
    gsap.set(section3LineRef.current, { opacity: 0, scaleX: 0 }); // Hidden initially, no scale
    
    // Set initial state for section 4
    gsap.set(section4TextRef.current, { opacity: 1, y: 0 }); // Visible initially
    
    
    //#endregion

    //#region Animation States
    let section1AnimationComplete = false;
    let section2AnimationComplete = false;
    let section3AnimationComplete = false;
    //#endregion

    // SECTION 2 Intro Text
    ScrollTrigger.create({
      trigger: section2Ref.current,
      start: "bottom 100%",
      end: "+=60%", // Extend the trigger area for scroll control to accommodate 3 phases
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Phase 1: Cross fade (0-33%)
        if (progress <= 0.33) {
          const crossFadeProgress = progress / 0.33; // 0 to 1 for cross fade
          const easedFadeOutProgress = gsap.parseEase("expo.out")(crossFadeProgress);
          const easedCrossFadeProgress = gsap.parseEase("expo.inOut")(crossFadeProgress);
          
          // Fade out initial text
          gsap.set(section2MainTitleRef.current, { 
            opacity: 1 - easedFadeOutProgress,
            scale: 1 - (0.1 * easedFadeOutProgress)
          });
          
          // Fade in phase 1 container
          gsap.set(section3ContainerRef.current, {
            opacity: easedCrossFadeProgress,
            y: 30 - (30 * easedCrossFadeProgress)
          });
          
          // Keep phase 2 and 3 hidden
          gsap.set(section3Text2Ref.current, { opacity: 0, y: 30 });
          gsap.set(section3Text3Ref.current, { opacity: 0, y: 30 });
        }
        // Phase 2: Second textbox appears (33-66%)
        else if (progress <= 0.66) {
          const phase2Progress = (progress - 0.33) / 0.33; // 0 to 1 for phase 2
          const easedPhase2Progress = gsap.parseEase("expo.inOut")(phase2Progress);
          
          // Keep initial text hidden
          gsap.set(section2MainTitleRef.current, { opacity: 0, scale: 0.9 });
          
          // Keep phase 1 container visible and animate it upwards
          gsap.set(section3ContainerRef.current, { 
            opacity: 1, 
            y: -50 * easedPhase2Progress // Animate container upwards by 50px
          });
          
          // Fade phase 1 text to 20% opacity
          gsap.set(section3Text1Ref.current, { 
            opacity: 1 - (0.8 * easedPhase2Progress) // Fade from 1 to 0.2 (20%)
          });
          
          // Show phase 2 text
          gsap.set(section3Text2Ref.current, {
            opacity: easedPhase2Progress,
            y: 30 - (30 * easedPhase2Progress)
          });
          
          // Keep phase 3 hidden
          gsap.set(section3Text3Ref.current, { opacity: 0, y: 30 });
        }
        // Phase 3: Third textbox appears (66-100%)
        else {
          const phase3Progress = (progress - 0.66) / 0.34; // 0 to 1 for phase 3
          const easedPhase3Progress = gsap.parseEase("expo.inOut")(phase3Progress);
          
          // Keep initial text hidden
          gsap.set(section2MainTitleRef.current, { opacity: 0, scale: 0.9 });
          
          // Keep phase 1 container visible and animate it further upwards
          gsap.set(section3ContainerRef.current, { 
            opacity: 1, 
            y: -50 - (30 * easedPhase3Progress) // Animate container further upwards by 30px
          });
          
          // Fade phase 1 text to lower opacity
          gsap.set(section3Text1Ref.current, { 
            opacity: 0.2 - (0.1 * easedPhase3Progress) // Fade from 0.2 to 0.1
          });
          
          // Fade phase 2 text to lower opacity and move up
          gsap.set(section3Text2Ref.current, { 
            opacity: 1 - (0.8 * easedPhase3Progress), // Fade from 1 to 0.2
            y: -20 * easedPhase3Progress // Move up by 20px
          });
          
          // Show phase 3 text from bottom
          gsap.set(section3Text3Ref.current, {
            opacity: easedPhase3Progress,
            y: 30 - (30 * easedPhase3Progress)
          });
        }
        
        // Mark animations as complete when all phases finish
        if (progress >= 1) {
          section2AnimationComplete = true;
        }
      }
    });
    
    // SECTION 3 Intro Text (simplified animation - Phase 1 only)
    ScrollTrigger.create({
      trigger: section3Ref.current,
      start: "bottom 100%",
      end: "+=50%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Phase 1: Main title animates upwards and fades slightly, new textbox animates upwards underneath (0-30%)
        if (progress <= 0.30) {
          const phase1Progress = progress / 0.30; // 0 to 1 for phase 1
          const easedPhase1Progress = gsap.parseEase("expo.inOut")(phase1Progress);
          
          // Main title animates upwards and fades slightly
          gsap.set(section3MainTitleRef.current, { 
            opacity: 1 - (0.9 * easedPhase1Progress), // Fade from 100% to 10%
            y: -160 * easedPhase1Progress // Move upwards by 80px
          });
          
          // New textbox animates upwards underneath
          gsap.set(section3Text1Ref_new.current, {
            opacity: easedPhase1Progress,
            y: 0 - (160 * easedPhase1Progress) // Animate from normal position to 80px up
          });
          
          // Keep other elements hidden
          gsap.set(section3BackgroundRef.current, { opacity: 1 });
          gsap.set(section3Text1Ref_phase3.current, { opacity: 0, y: 50, x: 0 });
          gsap.set(section3Text1BRef_phase3.current, { opacity: 0, y: 50, x: 0 });
          gsap.set(section3Text2Ref_phase3.current, { opacity: 0, y: 0, x: 0, scale: 1 });
          gsap.set(section3Text2BRef_phase3.current, { opacity: 0, y: 50, x: 300 });
          gsap.set(section3LineRef.current, { opacity: 0, scaleX: 0 });
        }
        // Phase 2: All text and background image fade (30-40%)
        else if (progress <= 0.40) {
          const phase2Progress = (progress - 0.30) / 0.10; // 0 to 1 for phase 2
          const easedPhase2Progress = gsap.parseEase("expo.in")(phase2Progress);
          
          // Both text elements fade out
          gsap.set(section3MainTitleRef.current, { 
            opacity: 0.1 - (0.1 * easedPhase2Progress)
          });
          
          gsap.set(section3Text1Ref_new.current, {
            opacity: 1 - easedPhase2Progress,
          });
          
          // Background image fades out
          gsap.set(section3BackgroundRef.current, {
            opacity: 1 - easedPhase2Progress // Fade from 100% to 0%
          });
          
          // Keep text elements hidden
          gsap.set(section3Text1Ref_phase3.current, { opacity: 0, y: 50, x: 0 });
          gsap.set(section3Text1BRef_phase3.current, { opacity: 0, y: 50, x: 0 });
          gsap.set(section3Text2Ref_phase3.current, { opacity: 0, y: 0, x: 0, scale: 1 });
          gsap.set(section3Text2BRef_phase3.current, { opacity: 0, y: 50, x: 300 });
          gsap.set(section3LineRef.current, { opacity: 0, scaleX: 0 });
        }
        // Phase 3: Three sub-phases (40-100%)
        else {
          const phase3Progress = (progress - 0.40) / 0.60; // 0 to 1 for phase 3
          
          // Keep previous elements hidden
          gsap.set(section3MainTitleRef.current, { opacity: 0, y: -100 });
          gsap.set(section3Text1Ref_new.current, { opacity: 0, y: -100 });
          gsap.set(section3BackgroundRef.current, { opacity: 0 });
          
          // Phase 3A: text1 animates in, 2 and 2B hidden (66-77%)
          if (phase3Progress <= 0.33) {
            const phase3AProgress = phase3Progress / 0.33; // 0 to 1 for phase 3A
            const easedPhase3AProgress = gsap.parseEase("expo.out")(phase3AProgress);
            
            // Text 1 animates in
            gsap.set(section3Text1Ref_phase3.current, {
              opacity: easedPhase3AProgress,
              y: 50 - (50 * easedPhase3AProgress), // Animate from 50px below to 0
              x: 0 // Keep at center position
            });
            
            // Keep text 1B, 2 and 2B hidden
            gsap.set(section3Text1BRef_phase3.current, { opacity: 0, y: 50, x: 0 });
            gsap.set(section3Text2Ref_phase3.current, { opacity: 0, y: 0, x: 0, scale: 1 });
            gsap.set(section3Text2BRef_phase3.current, { opacity: 0, y: 50, x: 300 });
            gsap.set(section3LineRef.current, { opacity: 0, scaleX: 0 });
          }
          // Phase 3B: text1 moves left, text2 animates in (77-88%)
          else if (phase3Progress <= 0.66) {
            const phase3BProgress = (phase3Progress - 0.33) / 0.33; // 0 to 1 for phase 3B
            const easedPhase3BProgress = gsap.parseEase("expo.inOut")(phase3BProgress);
            
            // Text 1 moves left by 200px and fades to 10%
            gsap.set(section3Text1Ref_phase3.current, {
              opacity: 1 - (0.7 * easedPhase3BProgress), // Fade from 100% to 10%
              y: 0,
              x: -300 * easedPhase3BProgress // Move left by 300px
            });
            
            // Text 2 animates in from left
            gsap.set(section3Text2Ref_phase3.current, {
              opacity: easedPhase3BProgress,
              y: -13, // Keep at center vertically
              x: 0 + (300 * easedPhase3BProgress), // Animate from left (0) to right (300px)
              scale: 1 // Keep at normal scale
            });
            
            // Keep text 1B and 2B hidden
            gsap.set(section3Text1BRef_phase3.current, { opacity: 0, y: 50, x: 0 });
            gsap.set(section3Text2BRef_phase3.current, { opacity: 0, y: 50, x: 300 });
            
            // Keep line hidden in phase 3B
            gsap.set(section3LineRef.current, {
              opacity: 0,
              scaleX: 0 // Keep hidden
            });
          }
          // Phase 3C: text2 fades out, text2B animates in (88-100%)
          else {
            const phase3CProgress = (phase3Progress - 0.66) / 0.34; // 0 to 1 for phase 3C
            const easedPhase3CProgress = gsap.parseEase("expo.inOut")(phase3CProgress);
            
            // Text 1 fades out and scales down
            gsap.set(section3Text1Ref_phase3.current, {
              opacity: 0.3 - easedPhase3CProgress, // Fade from 100% to 0%
              y: 0,
              x: -300, // Keep at left position
              scale: 1 - (0.3 * easedPhase3CProgress) // Scale down from 1 to 0.7
            });
            
            // Text 1B animates in at left position
            gsap.set(section3Text1BRef_phase3.current, {
              opacity: easedPhase3CProgress,
              y: -20, // Keep at center position
              x: -298, // Position to the left by 300px
              scale: 0.9 + (0.1 * easedPhase3CProgress) // Scale up from 0.3 to 1
            });
            
            // Text 2 fades out and scales down
            gsap.set(section3Text2Ref_phase3.current, {
              opacity: 1 - easedPhase3CProgress, // Fade from 100% to 0%
              y: -13,
              x: 300, // Keep at right position
              scale: 1 - (0.3 * easedPhase3CProgress) // Scale down from 1 to 0.7
            });
            
            // Text 2B animates in to replace text2
            gsap.set(section3Text2BRef_phase3.current, {
              opacity: easedPhase3CProgress,
              y: -20, // Animate from 50px below to 0
              x: 302,
              scale: 1.1 - (0.1 * easedPhase3CProgress), // Position to the right by 300px
            });
            
            // Line animates from left to right in phase 3C
            gsap.set(section3LineRef.current, {
              x: -25 + (25 * easedPhase3CProgress),
              opacity: 0.5 + (0.5 * easedPhase3CProgress), // Always visible
              scaleX: easedPhase3CProgress // Animate from 0 to 1 scale (left to right)
            });
          }
        }
        
        // Mark animations as complete when phase finishes
        if (progress >= 1) {
          section3AnimationComplete = true;
        }
      }
    });

    // SECTION 4 - No animation, text is always visible

    // CLEANUP FUNCTION
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      document.body.style.overflow = 'auto';
      
      // Cleanup section observer
      sectionObserver.disconnect();
      
      // Reset section active state when component unmounts
      if (setIsWhiteBG) {
        setIsWhiteBG(false);
      }
    };
  }, [setIsWhiteBG]);

  // Show mobile screen if on mobile device
  if (isMobile) {
    return <MobileErrorScreen />;
  }

  // Body
  return (
      <div className={`relative overflow-x-hidden col-span-full bg-[#000000] -z-50 -mx-[8.5%] -mt-36 ${className || ''}`}>

      {/* Section 1 – Cover Page */}
      <section 
        ref={section1Ref}
        className="h-screen w-full text-white relative flex flex-col items-center justify-center"
      >
        {/* Video Container */}
        <div className="w-[94%] h-[90%] mt-2 rounded-[35pt] overflow-hidden relative">

          {/* Glass Edge Effect */}
          <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_20px_0px_rgba(255,255,255,1)] pointer-events-none mix-blend-overlay z-10"/>

          {/* Video */}
          <video
            src="/isv/montage.mp4"
            autoPlay muted loop playsInline
            className="w-full h-full object-cover"
          />

          {/* Top left black gradient overlay */}
          <div 
            className="absolute top-0 left-0 w-full h-full mix-blend-multiply" 
            style={{
              background: 'linear-gradient(to bottom right, rgba(0,0,0,9) 0%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.01) 50%, transparent 100%)'
            }}
          ></div>
          
          {/* Blur overlay with mask */}
          <div 
            className="absolute top-0 left-0 w-full h-full backdrop-blur-[3pt]" 
            style={{
              mask: 'linear-gradient(to bottom right, black 0%, black 15%, transparent 40%, transparent 100%)',
              WebkitMask: 'linear-gradient(to bottom right, black 0%, black 15%, transparent 40%, transparent 100%)'
            }}
          ></div>
         
          {/* Header */}
          <h1 className="absolute top-12 left-16 text-[52pt] leading-[1] tracking-tight text-white font-medium w-[650px]">Singapore Airlines In-Flight Safety Video <span className="mix-blend-soft-light">2025</span></h1>

          {/* SIA Logo Bottom Corner*/}
          <img src="/isv/logo.png" className="absolute bottom-6 right-6 w-28 h-auto mix-blend-soft-light" />

          {/* Bouncing Chevron Down */}
          <div 
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
            onClick={() => {
              const nextSection = section2Ref.current;
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <ChevronDownIcon className="w-auto h-11 text-white/80  animate-bounce" />
          </div>

        </div>

        {/* Background Glow */}
        <video
          src="/isv/montage_glow.mp4"
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full scale-75 object-cover blur-3xl -z-10 saturate-200 brightness-125"
        />
        
      </section>

      {/* Section 2 – Intro */}
      <section 
        ref={section2Ref}
        className="min-h-screen w-screen flex items-center justify-center relative "
      >
        <div className="w-full mx-auto text-center relative h-screen">
          
          {/* Phase 1: Plain text box in the middle */}
          <div className="absolute top-1/2 left-[51%] transform -translate-x-1/2 -translate-y-1/2 w-full">
            <p 
              ref={section2MainTitleRef}
              className="text-[42pt] font-medium tracking-tight text-white w-[50%] mx-auto leading-[1.1]"
            >
              <span className="text-[20pt] font-semibold">In 2017,</span> <br/>Singapore Airlines unveiled their <br/> new In-Flight Safety Video.
            </p>
          </div>
          
          {/* Phase 3 & 4 Container */}
          <div 
            ref={section3ContainerRef}
            className="absolute top-1/2 left-[51%] transform -translate-x-1/2 -translate-y-1/2 mt-8 text-left"
          >
            <h2 
              ref={section3Text1Ref}
              className="text-[16pt] font-base text-white w-[50%] mx-auto leading-[1.5]"
            >
            Shot across iconic landmarks in Singapore rather than inside the aircraft cabin, it redefined airline safety videos at the time.
            </h2>
            
            {/* Phase 4: Second plain textbox under phase 3 textbox */}
            <div 
              ref={section3Text2Ref}
              className="w-[50%] mx-auto leading-[1.5]"
            >
              <h2 className="text-[16pt] font-base text-white mx-auto mt-2">
              Over seven years, the film's polished imagery and resonant score came to embody national pride, opening every Singapore Airlines journey worldwide.
              </h2>
            </div>
            
            {/* Phase 5: Third plain textbox under phase 4 textbox */}
            <div 
              ref={section3Text3Ref}
              className="w-[50%] mx-auto leading-[1.5]"
            >
              <h2 className="text-[16pt] font-base text-white mx-auto mt-2">
              Personally, I was a student in design school then. The film inspired me to pursue a career in Advertising; that it was possible to create brand films so creative, so meticulously crafted, that it fostered love for a brand.
              </h2>
            </div>
          </div>
          
        </div>
      </section>

      {/* Section 3 – Strategy */}
      <section 
        ref={section3Ref}
        className="min-h-screen w-screen flex items-center justify-center relative "
      >
         {/* Phase 1 */}
        <div className="absolute top-0 left-0 w-full h-screen mx-auto text-center">
        
        {/* Text Box */}
        <div className="absolute top-[55%] left-[51%] transform -translate-x-1/2 -translate-y-1/2 w-full text-left leading-[1.11]">
          <p 
            ref={section3MainTitleRef}
            className="text-[34pt] font-medium tracking-tight text-white w-[460px] mx-auto "
          >
            A few years later, I found myself as an Art Director for Singapore Airlines.
          </p>
          
          <h2 
            ref={section3Text1Ref_new}
            className="text-[34pt] font-medium tracking-tight text-white w-[460px] mx-auto"
          >
            And we had just got the news to start work on a new safety video.
          </h2>
          
        </div>

        {/* Background Image */}
        <img ref={section3BackgroundRef} src="/isv/bts1.jpg" className="absolute bottom-0 left-0 w-full h-full object-cover brightness-50 blur-[8px] -z-10"/>

        {/* Black gradient overlay from top */}
        <div
          className="pointer-events-none absolute top-0 left-0 w-full h-40 z-20"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.0) 100%)"
          }}
        />
        
      
        </div>

         {/* Phase 3: 3 Column Text */}
        <div className="absolute top-0 left-0 w-full h-screen mx-auto text-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">

            {/* Text Container - Absolute positioning for overlap */}
            <div className="relative w-[80%] mx-auto leading-[1.2] text-left h-[200px]">

              {/* Text 1 - Absolute positioned for easy animation */} 
              <h3 ref={section3Text1Ref_phase3} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18pt] font-medium text-white w-[370px]">The 2017 film did well to feature iconic landmarks, It highlighted the striking beauty of Singapore as a place.</h3>    

              {/* Text 1B - Absolute positioned for easy animation */}
              <h3 ref={section3Text1BRef_phase3} className="absolute top-1/2 left-[51.5%] transform -translate-x-1/2 -translate-y-1/2 text-4xl font-medium tracking-tight text-white w-[370px]">Singapore as a place.</h3>
        
              {/* Text 2 - Absolute positioned for easy animation */}              
              <h3 ref={section3Text2Ref_phase3} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18pt] font-medium text-white w-[370px]">Building upon the legacy of the previous film, we sought to now feature homes and communities</h3>

              {/* Text 2B - Absolute positioned for easy animation */}
              <h3 ref={section3Text2BRef_phase3} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-medium tracking-tight text-white w-[370px]">Singapore as a home.</h3>

              {/* Line between text 1 and 2 */}
              <div ref={section3LineRef} className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[2px] bg-white origin-left"></div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 4 – Insight + Title*/}
      <section 
        ref={section4Ref}
        className="min-h-screen w-screen flex items-center justify-center relative"
      >
        <div className="w-full mx-auto text-center relative h-screen">

          <div className="w-[95%] h-[91%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-2">
            
             {/* Column 1 */}
             <div className="flex-[2] gap-2 flex flex-col">

               <div className="flex-1 overflow-hidden rounded-[16pt] rounded-tl-[30pt]">
                 <img src="/isv/7.png" className="w-full h-full object-cover"/>
               </div>
               <div className="flex-1 overflow-hidden rounded-[16pt]">
                 <img src="/isv/6.png" className="w-full h-full object-cover"/>
               </div>
               <div className="flex-1 overflow-hidden rounded-[16pt]">
                 <img src="/isv/15.jpeg" className="w-full h-full object-cover rounded-bl-[30pt]"/>
               </div>
               


             </div>

            {/* Column 2 */}
            <div className="flex-[1.5] gap-2 flex flex-col">

              <div className="flex-[2] overflow-hidden rounded-[16pt]">
                <img src="/isv/12.jpeg" className="w-full h-full object-cover"/>
                
              </div>

              <div className="flex-[2] overflow-hidden rounded-[16pt]">         
              </div>

              <div className="flex-[2] overflow-hidden rounded-[16pt]">
                <img src="/isv/14.jpeg" className="w-full h-full object-cover"/>
              </div>
              

            </div>

            {/* Column 3 */}
            <div className="flex-[2] gap-2 flex flex-col">

              <div className="flex-[1] overflow-hidden rounded-[16pt]">
                <img src="/isv/4.png" className="w-full h-full object-cover"/>
              </div>

              <div className="flex-[1] overflow-hidden rounded-[16pt]">
                <img src="/isv/3.png" className="w-full h-full object-cover"/>
              </div>

              <div className="flex-[2] overflow-hidden rounded-[16pt]">
                
              </div>

              <div className="flex-[2] overflow-hidden rounded-[16pt]">
                <img src="/isv/11.jpeg" className="w-full h-full object-cover"/>
              </div>

            </div>

            {/* Column 4 */}
            <div className="flex-[1] gap-2 flex flex-col">

              <div className="flex-[2.1] overflow-hidden rounded-[16pt] ">
                <img src="/isv/9.png" className="w-full h-full object-cover"/>
              </div>

              <div className="flex-[2] overflow-hidden rounded-[16pt] ">
                
              </div>

              <div className="flex-[1] overflow-hidden rounded-[16pt]">
                <img src="/isv/13.jpeg" className="w-full h-full object-cover"/>
              </div>

              <div className="flex-[1] overflow-hidden rounded-[16pt]">
                <img src="/isv/5.png" className="w-full h-full object-cover"/>
              </div>

            </div>

            {/* Column 5 */}
            <div className="flex-[2] gap-2 flex flex-col">

              <div className="flex-[0.8] overflow-hidden rounded-[16pt]">
                <img src="/isv/1.png" className="w-full h-full object-cover rounded-tr-[30pt]"/>
              </div>

              <div className="flex-[1] overflow-hidden rounded-[16pt]">
                <img src="/isv/10.png" className="w-full h-full object-cover"/>
              </div>
              <div className="flex-[2] overflow-hidden rounded-[16pt]">
                <img src="/isv/2.png" className="w-full h-full object-cover rounded-br-[30pt]"/>
              </div>

            </div>

            
            
            

          </div>
          
          {/* Text Container */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">

            {/* Text 1 */}
            <p 
              ref={section4TextRef}
              className="hidden text-[62pt] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium tracking-tight text-white w-[900px] mx-auto leading-[1.2]"
            >
              Welcome on Board.
            </p>

            {/* Text 2 */}
            <h2 
              ref={section4Text2Ref}
              className="text-[17pt] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium tracking text-white w-[35%] mx-auto leading-[1.3]">
              Beyond the four walls of a home, our in-flight safety video takes us on an unexpected journey through Singapore’s rich and diverse communities, and in the process showcasing where they live and thrive.
            </h2>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default ISV; 