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
  const totalSections = 5;

  //#region Refs
  // Section 1 refs (title)
  const section1Ref = useRef(null);
  const chevronRef = useRef(null);
  
  // Section 2 refs (intro text content)
  const section2Ref = useRef(null);
  const section2MainTitleRef = useRef(null);
  
  // Section 2 text refs (phases within section 2)
  const section3Text1Ref = useRef(null);
  const section3Text1BRef = useRef(null);
  const section3ContainerRef = useRef(null);
  const section2BackgroundRef = useRef(null);
  
  // Section 3 refs
  const section3Text1Ref_phase3 = useRef(null);
  const section3Text1BRef_phase3 = useRef(null);
  const section3Text2Ref_phase3 = useRef(null);
  const section3Text2BRef_phase3 = useRef(null);
  const section3LineRef = useRef(null);
  

  
  // Section 5 refs (new section 4)
  const section5Ref = useRef(null);
  const section5TextRef = useRef(null);
  const communityContainerRef = useRef(null);
  
  // Section 5 community item refs
  const lionDanceRef = useRef(null);
  const familiesRef = useRef(null);
  const birdUnclesRef = useRef(null);
  const cyclistsRef = useRef(null);
  const durianLoversRef = useRef(null);
  const rangoliRef = useRef(null);
  const silatTeamRef = useRef(null);
  const aquaAerobicsRef = useRef(null);
  const hawkerLoversRef = useRef(null);
  
  // Section 5 community image refs
  const lionDanceImgRef = useRef(null);
  const familiesImgRef = useRef(null);
  const birdImgRef = useRef(null);
  const durianImgRef = useRef(null);
  const rangoliImgRef = useRef(null);
  const silatImgRef = useRef(null);
  const aquaImgRef = useRef(null);
  const hawkerImgRef = useRef(null);
  
  //#endregion

  // Section tracking for progress indicator
  const sectionRefs = [
    section1Ref, // Section 1 (Title)
    section2Ref, // Section 2 (Intro Text)
    section5Ref, // Section 5 (New section 4)
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
    gsap.set(section3ContainerRef.current, { opacity: 0, y: 0 });
    gsap.set(section3Text1Ref.current, { opacity: 0, y: 30 });
    gsap.set(section3Text1BRef.current, { opacity: 0, y: 30 });
    gsap.set(section2BackgroundRef.current, { opacity: 0 });
    
    // Set initial state for section 3 - all phase 3 elements hidden initially
    gsap.set(section3Text1Ref_phase3.current, { opacity: 0, y: 50, x: 0 }); // Hidden initially, 50px below, center
    gsap.set(section3Text1BRef_phase3.current, { opacity: 0, y: 50, x: 0 }); // Hidden initially, 50px below, center
    gsap.set(section3Text2Ref_phase3.current, { opacity: 0, y: 0, x: 0, scale: 1 }); // Hidden initially, center position
    gsap.set(section3Text2BRef_phase3.current, { opacity: 0, y: 50, x: 300 }); // Hidden initially, 50px below, right
    gsap.set(section3LineRef.current, { opacity: 0, scaleX: 0 }); // Hidden initially, no scale
    
    
    // Set initial state for section 5
    gsap.set(section5TextRef.current, { opacity: 1, y: 0 }); // Visible initially
    
    // Set initial states for community items - all at 25% opacity initially
    gsap.set(lionDanceRef.current, { opacity: 1 });
    gsap.set(familiesRef.current, { opacity: 0.25 });
    gsap.set(birdUnclesRef.current, { opacity: 0.25 });
    gsap.set(cyclistsRef.current, { opacity: 0.25 });
    gsap.set(durianLoversRef.current, { opacity: 0.25 });
    gsap.set(rangoliRef.current, { opacity: 0.25 });
    gsap.set(silatTeamRef.current, { opacity: 0.25 });
    gsap.set(aquaAerobicsRef.current, { opacity: 0.25 });
    gsap.set(hawkerLoversRef.current, { opacity: 0.25 });
    
    // Set initial states for community images - only first image visible
    gsap.set(lionDanceImgRef.current, { opacity: 1 });
    gsap.set(familiesImgRef.current, { opacity: 0 });
    gsap.set(birdImgRef.current, { opacity: 0 });
    gsap.set(durianImgRef.current, { opacity: 0 });
    gsap.set(rangoliImgRef.current, { opacity: 0 });
    gsap.set(silatImgRef.current, { opacity: 0 });
    gsap.set(aquaImgRef.current, { opacity: 0 });
    gsap.set(hawkerImgRef.current, { opacity: 0 });
    
    // Set initial state for community container
    gsap.set(communityContainerRef.current, { y: 0 });
    
    
    //#endregion

    //#region Animation States
    let section1AnimationComplete = false;
    let section2AnimationComplete = false;
    let section3AnimationComplete = false;
    //#endregion

    // SECTION 2 Combined Animation (Intro + Three-Column Text)
    ScrollTrigger.create({
      trigger: section2Ref.current,
      start: "bottom 100%",
      end: "+=150%", // Extended trigger area to accommodate all phases
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Phase 1: Cross fade (0-25%)
        if (progress <= 0.25) {
          const crossFadeProgress = progress / 0.25; // 0 to 1 for cross fade
          const easedFadeOutProgress = gsap.parseEase("expo.out")(crossFadeProgress);
          const easedCrossFadeProgress = gsap.parseEase("expo.inOut")(crossFadeProgress);
          
          // Fade out initial text
          gsap.set(section2MainTitleRef.current, { 
            opacity: 1 - easedCrossFadeProgress,
            scale: 1 - (0.1 * easedCrossFadeProgress)
          });
          
          // Fade in phase 1 container
          gsap.set(section3ContainerRef.current, {
            opacity: easedCrossFadeProgress,
            y: 0 - (80 * easedCrossFadeProgress)
          });
          
          // Fade in both intro text boxes
          gsap.set(section3Text1Ref.current, {
            opacity: easedCrossFadeProgress,
            
          });
          
          gsap.set(section3Text1BRef.current, {
            opacity: easedCrossFadeProgress,
           
          });
          
          // Fade in background image
          gsap.set(section2BackgroundRef.current, {
            opacity: easedCrossFadeProgress,
            filter: `blur(${5 - (5 * easedCrossFadeProgress)}px)`
          });
          
          // Keep three-column elements hidden
          gsap.set(section3Text1Ref_phase3.current, { opacity: 0, y: 50, x: 0 });
          gsap.set(section3Text1BRef_phase3.current, { opacity: 0, y: 50, x: 0 });
          gsap.set(section3Text2Ref_phase3.current, { opacity: 0, y: 0, x: 0, scale: 1 });
          gsap.set(section3Text2BRef_phase3.current, { opacity: 0, y: 50, x: 300 });
          gsap.set(section3LineRef.current, { opacity: 0, scaleX: 0 });
        }
        // Phase 1B: Fade out phase 1 elements (25-35%)
        else if (progress <= 0.35) {
          const phase1BProgress = (progress - 0.25) / 0.10; // 0 to 1 for phase 1B
          const easedPhase1BProgress = gsap.parseEase("expo.in")(phase1BProgress);
          
          // Keep initial text hidden
          gsap.set(section2MainTitleRef.current, { 
            opacity: 0,
            scale: 0.9
          });
          
          // Fade out phase 1 container
          gsap.set(section3ContainerRef.current, {
            opacity: 1 - easedPhase1BProgress,
          });
          
          // Fade out both intro text boxes
          gsap.set(section3Text1Ref.current, {
            opacity: 1 - easedPhase1BProgress,
          });
          
          gsap.set(section3Text1BRef.current, {
            opacity: 1 - easedPhase1BProgress,
          });
          
          // Fade out background image
          gsap.set(section2BackgroundRef.current, {
            opacity: 1 - (0.5 * easedPhase1BProgress),
            filter: `blur(${0 + (50 * easedPhase1BProgress)}px)`
          });
          
          // Keep three-column elements hidden
          gsap.set(section3Text1Ref_phase3.current, { opacity: 0, y: 50, x: 0 });
          gsap.set(section3Text1BRef_phase3.current, { opacity: 0, y: 50, x: 0 });
          gsap.set(section3Text2Ref_phase3.current, { opacity: 0, y: 0, x: 0, scale: 1 });
          gsap.set(section3Text2BRef_phase3.current, { opacity: 0, y: 50, x: 300 });
          gsap.set(section3LineRef.current, { opacity: 0, scaleX: 0 });
        }
        // Phase 2: Three-Column Text Animation (35-100%)
        else {
          const phase3Progress = (progress - 0.35) / 0.65; // 0 to 1 for phase 3
          
          // Keep intro elements hidden
          gsap.set(section2MainTitleRef.current, { opacity: 0, scale: 0.9 });
          gsap.set(section2BackgroundRef.current, { opacity: 0.5, filter: "blur(50px)" });
          // gsap.set(section3ContainerRef.current, { opacity: 0, y: 0 });
          gsap.set(section3Text1Ref.current, { opacity: 0, y: 30 });
          gsap.set(section3Text1BRef.current, { opacity: 0, y: 30 });
          
          // Phase 2A: text1 animates in, 2 and 2B hidden (35-50%)
          if (phase3Progress <= 0.23) {
            const phase3AProgress = phase3Progress / 0.23; // 0 to 1 for phase 2A
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
          // Phase 2B: text1 moves left, text2 animates in (50-65%)
          else if (phase3Progress <= 0.46) {
            const phase3BProgress = (phase3Progress - 0.23) / 0.23; // 0 to 1 for phase 2B
            const easedPhase3BProgress = gsap.parseEase("expo.inOut")(phase3BProgress);
            
            // Text 1 moves left by 300px and fades to 30%
            gsap.set(section3Text1Ref_phase3.current, {
              opacity: 1 - (0.7 * easedPhase3BProgress), // Fade from 100% to 30%
              scale: 1 - (0.33 * easedPhase3BProgress), // Scale down from 1 to 0.6
              y: 0,
              x: -300 * easedPhase3BProgress // Move left by 300px
            });
            
            // Text 2 animates in from left
            gsap.set(section3Text2Ref_phase3.current, {
              opacity: easedPhase3BProgress,
              y: 0, // Keep at center vertically
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
          // Phase 2C: text2 fades out, text2B animates in (65-100%)
          else {
            const phase3CProgress = (phase3Progress - 0.46) / 0.54; // 0 to 1 for phase 2C
            const easedPhase3CProgress = gsap.parseEase("expo.inOut")(phase3CProgress);
            const easedPhase3CProgressFade = gsap.parseEase("power1.out")(phase3CProgress);
            
            // Text 1 fades out and scales down
            gsap.set(section3Text1Ref_phase3.current, {
              opacity: 0.3 - easedPhase3CProgress, // Fade from 30% to 0%
              y: 0,
              x: -300, // Keep at left position
              scale: 0.67 - (0.3 * easedPhase3CProgress) // Scale down from 1 to 0.7
            });
            
            // Text 1B animates in at left position
            gsap.set(section3Text1BRef_phase3.current, {
              opacity: easedPhase3CProgress,
              y: 0, // Keep at center position
              x: -335, // Position to the left by 300px
              scale: 1.2 - (0.2 * easedPhase3CProgress) // Scale up from 0.9 to 1
            });
            
            // Text 2 fades out and scales down
            gsap.set(section3Text2Ref_phase3.current, {
              opacity: 1 - easedPhase3CProgressFade, // Fade from 100% to 0%
              y: 0,
              x: 300, // Keep at right position
              scale: 1 - (0.15 * easedPhase3CProgress) // Scale down from 1 to 0.7
            });
            
            // Text 2B animates in to replace text2
            gsap.set(section3Text2BRef_phase3.current, {
              opacity: easedPhase3CProgress,
              y: 0, // Animate from 50px below to 0
              x: 125,
              scale: 1.2 - (0.2 * easedPhase3CProgress), // Position to the right by 300px
            });
            
            // Line animates from left to right in phase 3C
            gsap.set(section3LineRef.current, {
              x: 50 - (42 * easedPhase3CProgress),
              opacity: 0 + (1 * easedPhase3CProgressFade), // Always visible
              scaleX: easedPhase3CProgress // Animate from 0 to 1 scale (left to right)
            });
          }
        }
        
        // Mark animations as complete when phase finishes
        if (progress >= 1) {
          section2AnimationComplete = true;
        }
      }
    });
    
    // SECTION 5 - Community Animation (8 phases)
    ScrollTrigger.create({
      trigger: section5Ref.current,
      start: "bottom 100%",
      end: "+=200%", // Extended trigger area for 8 phases
      pin: section5Ref.current,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        const phaseSize = 1 / 8; // Each phase is 1/8 of the total progress
        
        // Determine current phase (0-7)
        const currentPhase = Math.floor(progress / phaseSize);
        const phaseProgress = (progress % phaseSize) / phaseSize; // Progress within current phase
        
        // Community items and images arrays for easy iteration
        const communityRefs = [
          lionDanceRef, familiesRef, birdUnclesRef, cyclistsRef,
          durianLoversRef, rangoliRef, silatTeamRef, aquaAerobicsRef, hawkerLoversRef
        ];
        
        const imageRefs = [
          lionDanceImgRef, familiesImgRef, birdImgRef, durianImgRef,
          rangoliImgRef, silatImgRef, aquaImgRef, hawkerImgRef
        ];
        
        // Reset all community items to 25% opacity
        communityRefs.forEach(ref => {
          gsap.set(ref.current, { opacity: 0.25 });
        });
        
        // Reset all images to 0 opacity
        imageRefs.forEach(ref => {
          gsap.set(ref.current, { opacity: 0 });
        });
        
        // Animate container upward movement - each phase animates 30px upward
        const baseY = -30 * currentPhase; // Base position for current phase
        const containerPhaseProgress = (progress % phaseSize) / phaseSize; // Progress within current phase (0-1)
        const containerY = baseY - (30 * containerPhaseProgress); // Animate 30px upward within each phase
        gsap.set(communityContainerRef.current, { y: containerY });
        
        // Set current phase item to full opacity
        if (currentPhase < communityRefs.length) {
          gsap.set(communityRefs[currentPhase].current, { opacity: 1 });
        }
        
        // Handle image transitions
        if (currentPhase < imageRefs.length) {
          // Fade in current image
          gsap.set(imageRefs[currentPhase].current, { opacity: 1 });
          
          // If we're in the middle of a phase transition, handle crossfade
          if (phaseProgress > 0.5 && currentPhase < imageRefs.length - 1) {
            const fadeProgress = (phaseProgress - 0.5) * 2; // 0 to 1 for fade
            const easedFadeProgress = gsap.parseEase("power2.inOut")(fadeProgress);
            
            // Fade out current image
            gsap.set(imageRefs[currentPhase].current, { 
              opacity: 1 - easedFadeProgress 
            });
            
            // Fade in next image
            gsap.set(imageRefs[currentPhase + 1].current, { 
              opacity: easedFadeProgress 
            });
          }
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

      {/* Section 2 – Combined Intro + Strategy */}
      <section 
        ref={section2Ref}
        className="min-h-screen w-screen flex items-center justify-center relative "
      >
        {/* Background Image */}
        <div 
          ref={section2BackgroundRef}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          <img 
            src="/isv/section2.jpg" 
            alt="Section 2 Background" 
            className="w-full h-full object-cover object-[35%]"
          />
          <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-black to-transparent z-0"></div>
        </div>
        
        <div className="w-full mx-auto text-center relative h-screen">
          
          {/* Phase 1: in 2017... */}
          <div className="absolute top-1/2 left-[51%] transform -translate-x-1/2 -translate-y-1/2 w-full">
            <p 
              ref={section2MainTitleRef}
              className="text-[42pt] font-medium tracking-tight text-white w-[50%] mx-auto leading-[1.1]"
            >
              <span className="text-[20pt] font-semibold">In 2017,</span> <br/>Singapore Airlines unveiled <br/> a new in-flight safety video.
            </p>
          </div>
          
          {/* Phase 2: Iconic Landmarks */}
          <div 
            ref={section3ContainerRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
          >
            <h2 
              ref={section3Text1Ref}
              className="absolute top-1/2 left-[10%] text-[17pt] font-medium text-white w-[420px] leading-[1.3] text-left z-10 "
            >
            Set across iconic landmarks in Singapore rather than within an aircraft cabin, it redefined airline safety videos at the time.
            </h2>
            
            <h2 
              ref={section3Text1BRef}
              className="hidden absolute top-1/2 right-[10%] text-2xl font-base text-white w-[420px] mx-auto leading-[1.3] mb-4 text-left"
            >
            It also grew to become a symbol of Singapore's national pride.
            </h2>
            
          </div>
          
          {/* Phase 3: Insight + Strategy */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            {/* Text Container - Absolute positioning for overlap */}
            <div className="relative w-[80%] mx-auto leading-[1.2] h-[200px]">

              {/* Text 1 */} 
              <h3 ref={section3Text1Ref_phase3} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[28pt] font-medium text-white w-[700px]">It grew to be a symbol of national pride,<br/> and presented the striking beauty of Singapore as a place to the world.</h3>    

              {/* Text 1B */}
              <h3 ref={section3Text1BRef_phase3} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-medium tracking-tight text-white">Singapore as a place</h3>
        
              {/* Text 2 */}              
              <h3 ref={section3Text2Ref_phase3} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18pt] font-medium text-white w-[440px]">Building upon the legacy of the previous film, we centred our focus on communities for the new 2025 ISV.</h3>

              {/* Text 2B */}
              <h3 ref={section3Text2BRef_phase3} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-medium tracking-tight text-white ">Singapore as a home</h3>

              {/* Line */}
              <div ref={section3LineRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[180px] h-[2px] bg-white origin-left"></div>

            </div>
          </div>
          
        </div>
      </section>

      {/* Section 4 – Insight + Title*/}
      <section 
        className="min-h-screen w-screen flex items-center justify-center relative bg-black"
      >
        <div className="w-full mx-auto text-center relative h-screen">

          {/* Text Container */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">

            {/* Text 1 */}
            <h2 
              className="text-[17pt] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium text-white w-[550px] mx-auto leading-[1.3]">
              Our in-flight safety video takes travelers on a journey through Singapore’s rich and diverse communities, and in the process showcasing where Singaporeans live and thrive on our island home.
            </h2>

            {/* Text 2 */}
            <p 
              className="hidden text-[62pt] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-medium tracking-tight text-white w-[900px] mx-auto leading-[1.2]"
            >
              Welcome on Board.
            </p>
            
          </div>

          {/* Images */}
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
        
          
        </div>
      </section>
      {/* Section 5 – Text Box Left */}
      <section 
        ref={section5Ref}
        className="min-h-screen w-screen flex items-center justify-center relative bg-black"
      >
        <div className="w-[95%] h-screen mx-auto relative flex items-center">
          
          {/* Text Box - Positioned to the left */}
           <div className="flex-[1] h-full flex flex-col pl-10">
             
             {/* Featuring... */}
             <h2
               ref={section5TextRef}
               className="text-6xl font-medium text-white tracking-tight pt-18 -ml-1">
                 Featuring<span className="font-light">...</span>
             </h2>

             {/* Community Container */}
             <div ref={communityContainerRef} className="flex-1 flex flex-col justify-center">
               <p ref={lionDanceRef} className="text-[22pt] leading-[1.2] font-medium">
                 Lion Dance Troupe
               </p>
               <p ref={familiesRef} className="text-[22pt] leading-[1.2] font-medium">
                 Families
               </p>
               <p ref={birdUnclesRef} className="text-[22pt] leading-[1.2] font-medium -ml-1.5">
                 'Bird Uncles'
               </p>
               <p ref={cyclistsRef} className="text-[22pt] leading-[1.2] font-medium">
                 Recreational Cyclists
               </p>
               <p ref={durianLoversRef} className="text-[22pt] leading-[1.2] font-medium">
                 Durian 'Lovers'
               </p>
               <p ref={rangoliRef} className="text-[22pt] leading-[1.2] font-medium">
                 Rangoli
               </p>
               <p ref={silatTeamRef} className="text-[22pt] leading-[1.2] font-medium">
                 National Silat Team
               </p>
               <p ref={aquaAerobicsRef} className="text-[22pt] leading-[1.2] font-medium">
                 Aqua Aerobics
               </p>
               <p ref={hawkerLoversRef} className="text-[22pt] leading-[1.2] font-medium">
                 Hawker Food Lovers
               </p>
             </div>
            
          </div>
          
          {/* Right side - can be left empty or add visual elements later */}
          <div className="flex-[2.5] h-[85%] rounded-[30pt] overflow-hidden glass relative">    

            {/* Glass Edge Effect */}
            <div className="absolute inset-0 rounded-[30pt] shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_10px_0px_rgba(255,255,255,1)] pointer-events-none mix-blend-overlay z-20"/>  
            
            {/* Community Images - All positioned absolutely for fade transitions */}
            <img ref={lionDanceImgRef} src="/isv/communities/liondance.png" className="absolute inset-0 w-full h-full object-cover contrast-[1.15]"/>
            <img ref={familiesImgRef} src="/isv/communities/families.png" className="absolute inset-0 w-full h-full object-cover contrast-[1.15]"/>
            <img ref={birdImgRef} src="/isv/communities/bird.png" className="absolute inset-0 w-full h-full object-cover contrast-[1.15]"/>
            <img ref={durianImgRef} src="/isv/communities/durian.png" className="absolute inset-0 w-full h-full object-cover contrast-[1.15]"/>
            <img ref={rangoliImgRef} src="/isv/communities/rangoli.png" className="absolute inset-0 w-full h-full object-cover contrast-[1.15]"/>
            <img ref={silatImgRef} src="/isv/communities/silat.png" className="absolute inset-0 w-full h-full object-cover contrast-[1.15]"/>
            <img ref={aquaImgRef} src="/isv/communities/aqua.png" className="absolute inset-0 w-full h-full object-cover contrast-[1.15]"/>
            <img ref={hawkerImgRef} src="/isv/communities/hawker.png" className="absolute inset-0 w-full h-full object-cover contrast-[1.15]"/>

          </div>
          
        </div>
      </section>

    </div>
  );
};

export default ISV; 