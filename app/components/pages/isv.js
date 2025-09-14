'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useHideNav } from '../../context/HideNavContext';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import { useBrowser } from '../../context/BrowserContext';
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
  const { browserType } = useBrowser();
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 5;
  
  // Check if browser is Chrome (for video sync and background glow)
  const isChrome = browserType === 'chrome';

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
  
  // Video sync refs for cover page
  const coverVideoRef = useRef(null);
  const glowVideoRef = useRef(null);
  
  // Safety instruction text refs
  const preTakeoffRef = useRef(null);
  const seatbeltRef = useRef(null);
  const dashRef = useRef(null);
  const oxygenMaskRef = useRef(null);
  const emergencyExitsRef = useRef(null);
  const bracePositionsRef = useRef(null);
  const lifeVestsRef = useRef(null);
  const electronicDevicesRef = useRef(null);
  
  //#endregion

  // Section tracking for progress indicator
  const sectionRefs = [
    section1Ref, // Section 1 (Title)
    section2Ref, // Section 2 (Intro Text)
    section5Ref, // Section 5 (New section 4)
  ];

  // Video sync effect - only for Chrome browsers
  useEffect(() => {
    // Only enable video sync for Chrome browsers
    if (!isChrome) return;
    
    const coverVideo = coverVideoRef.current;
    const glowVideo = glowVideoRef.current;
    
    if (coverVideo && glowVideo) {
      const syncVideos = () => {
        // Sync glow video to cover video time
        if (Math.abs(coverVideo.currentTime - glowVideo.currentTime) > 0.1) {
          glowVideo.currentTime = coverVideo.currentTime;
        }
      };
      
      // Sync on play/pause
      const handlePlay = () => glowVideo.play();
      const handlePause = () => glowVideo.pause();
      const handleTimeUpdate = syncVideos;
      
      coverVideo.addEventListener('play', handlePlay);
      coverVideo.addEventListener('pause', handlePause);
      coverVideo.addEventListener('timeupdate', handleTimeUpdate);
      
      return () => {
        coverVideo.removeEventListener('play', handlePlay);
        coverVideo.removeEventListener('pause', handlePause);
        coverVideo.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [isChrome]);

  // Animations
  useEffect(() => {
    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Force enable pointer events on body and document
    document.body.style.pointerEvents = 'auto';
    document.documentElement.style.pointerEvents = 'auto';
    
    // Check for any global event listeners that might be preventing clicks
    console.log('Document body style:', document.body.style.cssText);
    console.log('Document element style:', document.documentElement.style.cssText);
    
    // Try to remove any potential event listeners
    document.removeEventListener('click', (e) => e.preventDefault(), true);
    document.removeEventListener('mousedown', (e) => e.preventDefault(), true);
    document.removeEventListener('mouseup', (e) => e.preventDefault(), true);

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
    gsap.set(section2BackgroundRef.current, { opacity: 0, scale: 1.03 });
    
    // Set initial state for section 3 - all phase 3 elements hidden initially
    gsap.set(section3Text1Ref_phase3.current, { opacity: 0, y: 50, x: 0 }); // Hidden initially, 50px below, center
    gsap.set(section3Text1BRef_phase3.current, { opacity: 0, y: 50, x: 0 }); // Hidden initially, 50px below, center
    gsap.set(section3Text2Ref_phase3.current, { opacity: 0, y: 0, x: 0, scale: 1 }); // Hidden initially, center position
    gsap.set(section3Text2BRef_phase3.current, { opacity: 0, y: 50, x: 300 }); // Hidden initially, 50px below, right
    gsap.set(section3LineRef.current, { opacity: 0, scaleX: 0 }); // Hidden initially, no scale
    
    
    // Set initial states for community items - all at 25% opacity
    gsap.set(lionDanceRef.current, { opacity: 1 });
    gsap.set(familiesRef.current, { opacity: 0.25 });
    gsap.set(birdUnclesRef.current, { opacity: 0.25 });
    gsap.set(cyclistsRef.current, { opacity: 0.25 });
    gsap.set(durianLoversRef.current, { opacity: 0.25 });
    gsap.set(rangoliRef.current, { opacity: 0.25 });
    gsap.set(silatTeamRef.current, { opacity: 0.25 });
    gsap.set(aquaAerobicsRef.current, { opacity: 0.25 });
    gsap.set(hawkerLoversRef.current, { opacity: 0.25 });
    
                // Set initial states for community images - all visible with opacity 1
    gsap.set(lionDanceImgRef.current, { opacity: 1 });
    gsap.set(familiesImgRef.current, { opacity: 1 });
    gsap.set(birdImgRef.current, { opacity: 1 });
    gsap.set(durianImgRef.current, { opacity: 1 });
    gsap.set(rangoliImgRef.current, { opacity: 1 });
    gsap.set(silatImgRef.current, { opacity: 1 });
    gsap.set(aquaImgRef.current, { opacity: 1 });
    gsap.set(hawkerImgRef.current, { opacity: 1 });
    
    // Set initial states for safety instruction texts - all hidden except pretakeoff
    gsap.set(preTakeoffRef.current, { opacity: 1, y: 0 });
    gsap.set(seatbeltRef.current, { opacity: 0, y: 20 });
    gsap.set(dashRef.current, { opacity: 0, y: 20 });
    gsap.set(oxygenMaskRef.current, { opacity: 0, y: 20 });
    gsap.set(emergencyExitsRef.current, { opacity: 0, y: 20 });
    gsap.set(bracePositionsRef.current, { opacity: 0, y: 20 });
    gsap.set(lifeVestsRef.current, { opacity: 0, y: 20 });
    gsap.set(electronicDevicesRef.current, { opacity: 0, y: 20 });
    
    
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
          
          // Fade in background image and scale down
          const scaleProgress = gsap.parseEase("power2.out")(crossFadeProgress);
          gsap.set(section2BackgroundRef.current, {
            opacity: easedCrossFadeProgress,
            scale: 1.05 - (0.05 * scaleProgress), // Scale from 1.03 to 1.0 with power2.out easing
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
            scale: 1.0, // Keep scale at 1.0
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
          gsap.set(section2BackgroundRef.current, { 
            opacity: 0.5, 
            scale: 1.0 + (0.2 * phase3Progress), // Scale from 1.0 to 1.2 with linear easing
            filter: "blur(50px)" 
          });
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
    
    // SECTION 5 - Phase 1, 2, 3, 4, 5, 6 & 7 Animation
    ScrollTrigger.create({
      trigger: section5Ref.current,
      start: "bottom 100%",
      end: "+=125%", // Combined phases 1, 2, 3, 4, 5, 6 & 7
      pin: section5Ref.current,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Phase 1: 0-14.3% progress
        if (progress <= 0.143) {
          const phase1Progress = progress / 0.143; // 0 to 1 for phase 1
          const easedProgress = gsap.parseEase("power3.inOut")(phase1Progress);
          
          // Container animates upward by 35px
          gsap.set(communityContainerRef.current, { 
            y: -35 * easedProgress 
          });
          
          // Lion dance ref fades to 0.25 opacity
          gsap.set(lionDanceRef.current, { 
            opacity: 1 - (0.75 * easedProgress) 
          });
          
          // Lion dance image fades to opacity 0 with expo.out easing
          const lionDanceVideoFadeOutProgress = gsap.parseEase("expo.out")(phase1Progress);
          gsap.set(lionDanceImgRef.current, { 
            opacity: 1 - lionDanceVideoFadeOutProgress 
          });
          
          // Families ref fades in to opacity 1
          gsap.set(familiesRef.current, { 
            opacity: 0.25 + (0.75 * easedProgress) 
          });
          
          // Safety instruction text animations
          // Pre-takeoff moves up 20px and fades out
          gsap.set(preTakeoffRef.current, { 
            opacity: 1 - easedProgress,
            y: -20 * easedProgress 
          });
          
          // Dash moves up from below (20px) and fades in
          gsap.set(seatbeltRef.current, { 
            opacity: easedProgress,
            y: 20 - (20 * easedProgress) 
          });
          
          // Keep subsequent phases at initial state
          gsap.set(birdUnclesRef.current, { opacity: 0.25 });
          gsap.set(cyclistsRef.current, { opacity: 0.25 });
          gsap.set(durianLoversRef.current, { opacity: 0.25 });
          gsap.set(rangoliRef.current, { opacity: 0.25 });
          gsap.set(silatTeamRef.current, { opacity: 0.25 });
          gsap.set(familiesImgRef.current, { opacity: 1 });
          gsap.set(birdImgRef.current, { opacity: 1 });
          gsap.set(durianImgRef.current, { opacity: 1 });
          gsap.set(rangoliImgRef.current, { opacity: 1 });
          gsap.set(silatImgRef.current, { opacity: 1 });
          gsap.set(aquaImgRef.current, { opacity: 1 });
          gsap.set(hawkerImgRef.current, { opacity: 1 });
          
          // Hide all other safety instruction texts
          gsap.set(dashRef.current, { opacity: 0, y: 20 });
          gsap.set(oxygenMaskRef.current, { opacity: 0, y: 20 });
          gsap.set(emergencyExitsRef.current, { opacity: 0, y: 20 });
          gsap.set(bracePositionsRef.current, { opacity: 0, y: 20 });
          gsap.set(lifeVestsRef.current, { opacity: 0, y: 20 });
          gsap.set(electronicDevicesRef.current, { opacity: 0, y: 20 });
        }
        // Phase 2: 14.3-28.6% progress
        else if (progress <= 0.286) {
          const phase2Progress = (progress - 0.143) / 0.143; // 0 to 1 for phase 2
          const easedProgress = gsap.parseEase("power3.inOut")(phase2Progress);
          
          // Container animates upward by another 35px (cumulative -70px)
          gsap.set(communityContainerRef.current, { 
            y: -35 - (35 * easedProgress) 
          });
          
          // Keep lion dance at final phase 1 state
          gsap.set(lionDanceRef.current, { opacity: 0.25 });
          gsap.set(lionDanceImgRef.current, { opacity: 0 });
          
          // Families ref fades to 0.25 opacity
          gsap.set(familiesRef.current, { 
            opacity: 1 - (0.75 * easedProgress) 
          });
          
          // Families image fades to opacity 0 with expo.out easing
          const familiesVideoFadeOutProgress = gsap.parseEase("expo.out")(phase2Progress);
          gsap.set(familiesImgRef.current, { 
            opacity: 1 - familiesVideoFadeOutProgress 
          });
          
          // Bird uncles ref fades in to opacity 1
          gsap.set(birdUnclesRef.current, { 
            opacity: 0.25 + (0.75 * easedProgress) 
          });
          
          // Cyclists ref also fades in to opacity 1
          gsap.set(cyclistsRef.current, { 
            opacity: 0.25 + (0.75 * easedProgress) 
          });
          
          // Safety instruction text animations - Phase 2
          // Seatbelt moves up 20px and fades out
          gsap.set(seatbeltRef.current, { 
            opacity: 1 - easedProgress,
            y: -20 * easedProgress 
          });
          
          // Dash moves up from below (20px) and fades in
          gsap.set(dashRef.current, { 
            opacity: easedProgress,
            y: 20 - (20 * easedProgress) 
          });
          
          // Keep subsequent phases at initial state
          gsap.set(durianLoversRef.current, { opacity: 0.25 });
          gsap.set(rangoliRef.current, { opacity: 0.25 });
          gsap.set(silatTeamRef.current, { opacity: 0.25 });
          gsap.set(aquaAerobicsRef.current, { opacity: 0.25 });
          gsap.set(hawkerLoversRef.current, { opacity: 0.25 });
          gsap.set(birdImgRef.current, { opacity: 1 });
          gsap.set(durianImgRef.current, { opacity: 1 });
          gsap.set(rangoliImgRef.current, { opacity: 1 });
          gsap.set(silatImgRef.current, { opacity: 1 });
          gsap.set(aquaImgRef.current, { opacity: 1 });
          gsap.set(hawkerImgRef.current, { opacity: 1 });
          
          // Hide all other safety instruction texts
          gsap.set(preTakeoffRef.current, { opacity: 0, y: -20 });
          gsap.set(oxygenMaskRef.current, { opacity: 0, y: 20 });
          gsap.set(emergencyExitsRef.current, { opacity: 0, y: 20 });
          gsap.set(bracePositionsRef.current, { opacity: 0, y: 20 });
          gsap.set(lifeVestsRef.current, { opacity: 0, y: 20 });
          gsap.set(electronicDevicesRef.current, { opacity: 0, y: 20 });
        }
        // Phase 3: 28.6-42.9% progress
        else if (progress <= 0.429) {
          const phase3Progress = (progress - 0.286) / 0.143; // 0 to 1 for phase 3
          const easedProgress = gsap.parseEase("power3.inOut")(phase3Progress);
          
          // Container animates upward by another 70px (cumulative -140px)
          gsap.set(communityContainerRef.current, { 
            y: -70 - (70 * easedProgress) 
          });
          
          // Keep previous phases at final state
          gsap.set(lionDanceRef.current, { opacity: 0.25 });
          gsap.set(lionDanceImgRef.current, { opacity: 0 });
          gsap.set(familiesRef.current, { opacity: 0.25 });
          gsap.set(familiesImgRef.current, { opacity: 0 });
          
          // Bird uncles ref fades to 0.25 opacity
          gsap.set(birdUnclesRef.current, { 
            opacity: 1 - (0.75 * easedProgress) 
          });
          
          // Bird uncles image fades to opacity 0 with expo.out easing
          const birdUnclesVideoFadeOutProgress = gsap.parseEase("expo.out")(phase3Progress);
          gsap.set(birdImgRef.current, { 
            opacity: 1 - birdUnclesVideoFadeOutProgress 
          });
          
          // Cyclists ref fades to 0.25 opacity (since it's already at 1)
          gsap.set(cyclistsRef.current, { 
            opacity: 1 - (0.75 * easedProgress) 
          });
          
          // Durian lovers ref fades in to opacity 1
          gsap.set(durianLoversRef.current, { 
            opacity: 0.25 + (0.75 * easedProgress) 
          });
          
          // Safety instruction text animations - Phase 3
          // Dash moves up 20px and fades out
          gsap.set(dashRef.current, { 
            opacity: 1 - easedProgress,
            y: -20 * easedProgress 
          });
          
          // Oxygen mask moves up from below (20px) and fades in
          gsap.set(oxygenMaskRef.current, { 
            opacity: easedProgress,
            y: 20 - (20 * easedProgress) 
          });
          
          // Keep subsequent phases at initial state
          gsap.set(rangoliRef.current, { opacity: 0.25 });
          gsap.set(silatTeamRef.current, { opacity: 0.25 });
          gsap.set(aquaAerobicsRef.current, { opacity: 0.25 });
          gsap.set(hawkerLoversRef.current, { opacity: 0.25 });
          gsap.set(durianImgRef.current, { opacity: 1 });
          gsap.set(rangoliImgRef.current, { opacity: 1 });
          gsap.set(silatImgRef.current, { opacity: 1 });
          gsap.set(aquaImgRef.current, { opacity: 1 });
          gsap.set(hawkerImgRef.current, { opacity: 1 });
          
          // Hide all other safety instruction texts
          gsap.set(preTakeoffRef.current, { opacity: 0, y: -20 });
          gsap.set(seatbeltRef.current, { opacity: 0, y: -20 });
          gsap.set(emergencyExitsRef.current, { opacity: 0, y: 20 });
          gsap.set(bracePositionsRef.current, { opacity: 0, y: 20 });
          gsap.set(lifeVestsRef.current, { opacity: 0, y: 20 });
          gsap.set(electronicDevicesRef.current, { opacity: 0, y: 20 });
        }
        // Phase 4: 42.9-57.1% progress
        else if (progress <= 0.571) {
          const phase4Progress = (progress - 0.429) / 0.142; // 0 to 1 for phase 4
          const easedProgress = gsap.parseEase("power3.inOut")(phase4Progress);
          
          // Container animates upward by another 35px (cumulative -175px)
          gsap.set(communityContainerRef.current, { 
            y: -140 - (35 * easedProgress) 
          });
          
          // Keep previous phases at final state
          gsap.set(lionDanceRef.current, { opacity: 0.25 });
          gsap.set(lionDanceImgRef.current, { opacity: 0 });
          gsap.set(familiesRef.current, { opacity: 0.25 });
          gsap.set(familiesImgRef.current, { opacity: 0 });
          gsap.set(birdUnclesRef.current, { opacity: 0.25 });
          gsap.set(birdImgRef.current, { opacity: 0 });
          gsap.set(cyclistsRef.current, { opacity: 0.25 });
          
          // Durian lovers ref fades to 0.25 opacity
          gsap.set(durianLoversRef.current, { 
            opacity: 1 - (0.75 * easedProgress) 
          });
          
          // Durian lovers image fades to opacity 0 with expo.out easing
          const durianLoversVideoFadeOutProgress = gsap.parseEase("expo.out")(phase4Progress);
          gsap.set(durianImgRef.current, { 
            opacity: 1 - durianLoversVideoFadeOutProgress 
          });
          
          // Rangoli ref fades in to opacity 1
          gsap.set(rangoliRef.current, { 
            opacity: 0.25 + (0.75 * easedProgress) 
          });
          
          // Safety instruction text animations - Phase 4
          // Oxygen mask moves up 20px and fades out
          gsap.set(oxygenMaskRef.current, { 
            opacity: 1 - easedProgress,
            y: -20 * easedProgress 
          });
          
          // Emergency exits moves up from below (20px) and fades in
          gsap.set(emergencyExitsRef.current, { 
            opacity: easedProgress,
            y: 20 - (20 * easedProgress) 
          });
          
          // Keep subsequent phases at initial state
          gsap.set(silatTeamRef.current, { opacity: 0.25 });
          gsap.set(aquaAerobicsRef.current, { opacity: 0.25 });
          gsap.set(hawkerLoversRef.current, { opacity: 0.25 });
          gsap.set(rangoliImgRef.current, { opacity: 1 });
          gsap.set(silatImgRef.current, { opacity: 1 });
          gsap.set(aquaImgRef.current, { opacity: 1 });
          gsap.set(hawkerImgRef.current, { opacity: 1 });
          
          // Hide all other safety instruction texts
          gsap.set(preTakeoffRef.current, { opacity: 0, y: -20 });
          gsap.set(seatbeltRef.current, { opacity: 0, y: -20 });
          gsap.set(dashRef.current, { opacity: 0, y: -20 });
          gsap.set(bracePositionsRef.current, { opacity: 0, y: 20 });
          gsap.set(lifeVestsRef.current, { opacity: 0, y: 20 });
          gsap.set(electronicDevicesRef.current, { opacity: 0, y: 20 });
        }
        // Phase 5: 57.1-71.4% progress
        else if (progress <= 0.714) {
          const phase5Progress = (progress - 0.571) / 0.143; // 0 to 1 for phase 5
          const easedProgress = gsap.parseEase("power3.inOut")(phase5Progress);
          
          // Container animates upward by another 35px (cumulative -210px)
          gsap.set(communityContainerRef.current, { 
            y: -175 - (35 * easedProgress) 
          });
          
          // Keep previous phases at final state
          gsap.set(lionDanceRef.current, { opacity: 0.25 });
          gsap.set(lionDanceImgRef.current, { opacity: 0 });
          gsap.set(familiesRef.current, { opacity: 0.25 });
          gsap.set(familiesImgRef.current, { opacity: 0 });
          gsap.set(birdUnclesRef.current, { opacity: 0.25 });
          gsap.set(birdImgRef.current, { opacity: 0 });
          gsap.set(cyclistsRef.current, { opacity: 0.25 });
          gsap.set(durianLoversRef.current, { opacity: 0.25 });
          gsap.set(durianImgRef.current, { opacity: 0 });
          
          // Rangoli ref fades to 0.25 opacity
          gsap.set(rangoliRef.current, { 
            opacity: 1 - (0.75 * easedProgress) 
          });
          
          // Rangoli image fades to opacity 0 with expo.out easing
          const rangoliVideoFadeOutProgress = gsap.parseEase("expo.out")(phase5Progress);
          gsap.set(rangoliImgRef.current, { 
            opacity: 1 - rangoliVideoFadeOutProgress 
          });
          
          // Silat team ref fades in to opacity 1
          gsap.set(silatTeamRef.current, { 
            opacity: 0.25 + (0.75 * easedProgress) 
          });
          
          // Safety instruction text animations - Phase 5
          // Emergency exits moves up 20px and fades out
          gsap.set(emergencyExitsRef.current, { 
            opacity: 1 - easedProgress,
            y: -20 * easedProgress 
          });
          
          // Brace positions moves up from below (20px) and fades in
          gsap.set(bracePositionsRef.current, { 
            opacity: easedProgress,
            y: 20 - (20 * easedProgress) 
          });
          
          // Keep subsequent phases at initial state
          gsap.set(aquaAerobicsRef.current, { opacity: 0.25 });
          gsap.set(hawkerLoversRef.current, { opacity: 0.25 });
          gsap.set(silatImgRef.current, { opacity: 1 });
          gsap.set(aquaImgRef.current, { opacity: 1 });
          gsap.set(hawkerImgRef.current, { opacity: 1 });
          
          // Hide all other safety instruction texts
          gsap.set(preTakeoffRef.current, { opacity: 0, y: -20 });
          gsap.set(seatbeltRef.current, { opacity: 0, y: -20 });
          gsap.set(dashRef.current, { opacity: 0, y: -20 });
          gsap.set(oxygenMaskRef.current, { opacity: 0, y: -20 });
          gsap.set(lifeVestsRef.current, { opacity: 0, y: 20 });
          gsap.set(electronicDevicesRef.current, { opacity: 0, y: 20 });
        }
        // Phase 6: 71.4-85.7% progress
        else if (progress <= 0.857) {
          const phase6Progress = (progress - 0.714) / 0.143; // 0 to 1 for phase 6
          const easedProgress = gsap.parseEase("power3.inOut")(phase6Progress);
          
          // Container animates upward by another 35px (cumulative -245px)
          gsap.set(communityContainerRef.current, { 
            y: -210 - (35 * easedProgress) 
          });
          
          // Keep previous phases at final state
          gsap.set(lionDanceRef.current, { opacity: 0.25 });
          gsap.set(lionDanceImgRef.current, { opacity: 0 });
          gsap.set(familiesRef.current, { opacity: 0.25 });
          gsap.set(familiesImgRef.current, { opacity: 0 });
          gsap.set(birdUnclesRef.current, { opacity: 0.25 });
          gsap.set(birdImgRef.current, { opacity: 0 });
          gsap.set(cyclistsRef.current, { opacity: 0.25 });
          gsap.set(durianLoversRef.current, { opacity: 0.25 });
          gsap.set(durianImgRef.current, { opacity: 0 });
          gsap.set(rangoliRef.current, { opacity: 0.25 });
          gsap.set(rangoliImgRef.current, { opacity: 0 });
          
          // Silat team ref fades to 0.25 opacity
          gsap.set(silatTeamRef.current, { 
            opacity: 1 - (0.75 * easedProgress) 
          });
          
          // Silat team image fades to opacity 0 with expo.out easing
          const silatTeamVideoFadeOutProgress = gsap.parseEase("expo.out")(phase6Progress);
          gsap.set(silatImgRef.current, { 
            opacity: 1 - silatTeamVideoFadeOutProgress 
          });
          
          // Aqua aerobics ref fades in to opacity 1
          gsap.set(aquaAerobicsRef.current, { 
            opacity: 0.25 + (0.75 * easedProgress) 
          });
          
          // Safety instruction text animations - Phase 6
          // Brace positions moves up 20px and fades out
          gsap.set(bracePositionsRef.current, { 
            opacity: 1 - easedProgress,
            y: -20 * easedProgress 
          });
          
          // Life vests moves up from below (20px) and fades in
          gsap.set(lifeVestsRef.current, { 
            opacity: easedProgress,
            y: 20 - (20 * easedProgress) 
          });
          
          // Keep phase 7 at initial state
          gsap.set(hawkerLoversRef.current, { opacity: 0.25 });
          gsap.set(aquaImgRef.current, { opacity: 1 });
          gsap.set(hawkerImgRef.current, { opacity: 1 });
          
          // Hide all other safety instruction texts
          gsap.set(preTakeoffRef.current, { opacity: 0, y: -20 });
          gsap.set(seatbeltRef.current, { opacity: 0, y: -20 });
          gsap.set(dashRef.current, { opacity: 0, y: -20 });
          gsap.set(oxygenMaskRef.current, { opacity: 0, y: -20 });
          gsap.set(emergencyExitsRef.current, { opacity: 0, y: -20 });
          gsap.set(electronicDevicesRef.current, { opacity: 0, y: 20 });
        }
        // Phase 7: 85.7-100% progress
        else {
          const phase7Progress = (progress - 0.857) / 0.143; // 0 to 1 for phase 7
          const easedProgress = gsap.parseEase("power3.inOut")(phase7Progress);
          
          // Container animates upward by another 35px (cumulative -280px)
          gsap.set(communityContainerRef.current, { 
            y: -245 - (35 * easedProgress) 
          });
          
          // Keep previous phases at final state
          gsap.set(lionDanceRef.current, { opacity: 0.25 });
          gsap.set(lionDanceImgRef.current, { opacity: 0 });
          gsap.set(familiesRef.current, { opacity: 0.25 });
          gsap.set(familiesImgRef.current, { opacity: 0 });
          gsap.set(birdUnclesRef.current, { opacity: 0.25 });
          gsap.set(birdImgRef.current, { opacity: 0 });
          gsap.set(cyclistsRef.current, { opacity: 0.25 });
          gsap.set(durianLoversRef.current, { opacity: 0.25 });
          gsap.set(durianImgRef.current, { opacity: 0 });
          gsap.set(rangoliRef.current, { opacity: 0.25 });
          gsap.set(rangoliImgRef.current, { opacity: 0 });
          gsap.set(silatTeamRef.current, { opacity: 0.25 });
          gsap.set(silatImgRef.current, { opacity: 0 });
          
          // Aqua aerobics ref fades to 0.25 opacity
          gsap.set(aquaAerobicsRef.current, { 
            opacity: 1 - (0.75 * easedProgress) 
          });
          
          // Aqua aerobics image fades to opacity 0 with expo.out easing
          const aquaAerobicsVideoFadeOutProgress = gsap.parseEase("expo.out")(phase7Progress);
          gsap.set(aquaImgRef.current, { 
            opacity: 1 - aquaAerobicsVideoFadeOutProgress 
          });
          
          // Hawker lovers ref fades in to opacity 1
          gsap.set(hawkerLoversRef.current, { 
            opacity: 0.25 + (0.75 * easedProgress) 
          });
          
          // Safety instruction text animations - Phase 7
          // Life vests moves up 20px and fades out
          gsap.set(lifeVestsRef.current, { 
            opacity: 1 - easedProgress,
            y: -20 * easedProgress 
          });
          
          // Electronic devices moves up from below (20px) and fades in
          gsap.set(electronicDevicesRef.current, { 
            opacity: easedProgress,
            y: 20 - (20 * easedProgress) 
          });
          
          // Hide all other safety instruction texts
          gsap.set(preTakeoffRef.current, { opacity: 0, y: -20 });
          gsap.set(seatbeltRef.current, { opacity: 0, y: -20 });
          gsap.set(dashRef.current, { opacity: 0, y: -20 });
          gsap.set(oxygenMaskRef.current, { opacity: 0, y: -20 });
          gsap.set(emergencyExitsRef.current, { opacity: 0, y: -20 });
          gsap.set(bracePositionsRef.current, { opacity: 0, y: -20 });
        }
      }
    });

    // SECTION 4 - No animation, text is always visible

    // CLEANUP FUNCTION
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      document.body.style.overflow = 'auto';
      document.body.style.pointerEvents = 'auto';
      
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
      <div className={`relative overflow-x-hidden col-span-full bg-[#000000] -mx-[8.5%] -mt-36 ${className || ''}`} style={{ pointerEvents: 'auto', zIndex: 1 }}>

      {/* Section 1 – Cover Page */}
      <section 
        ref={section1Ref}
        className="h-screen w-full text-white relative flex flex-col items-center justify-center"
      >
        {/* Video Container */}
        <div className="w-[94%] h-[80%] md:h-[40%] lg:h-[60%] xl:h-[90%] md:max-h-[900px] mt-2 rounded-[35pt] overflow-hidden relative">

          {/* Glass Edge Effect */}
          <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_20px_0px_rgba(255,255,255,1)] pointer-events-none mix-blend-overlay z-10"/>

          {/* Video */}
          <video
            ref={coverVideoRef}
            src="/isv/montage.mp4"
            autoPlay muted loop playsInline
            className="w-full h-full object-cover"
          />

          {/* Top left black gradient overlay */}
          <div 
            className="absolute top-0 left-0 w-full h-full mix-blend-multiply" 
            style={{
              background: 'linear-gradient(to top right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.01) 50%, transparent 100%)'
            }}
          ></div>
          
          {/* Blur overlay with mask */}
          <div 
            className="absolute top-0 left-0 w-full h-full backdrop-blur-[3pt]" 
            style={{
              mask: 'linear-gradient(to top right, black 0%, black 15%, transparent 40%, transparent 100%)',
              WebkitMask: 'linear-gradient(to top right, black 0%, black 15%, transparent 40%, transparent 100%)'
            }}
          ></div>
         
          {/* Header */}
          <div className="absolute bottom-10 left-14">
          <h3 className="text-white ml-1 text-[12pt] mb-1 font-medium mix-blend-soft-light tracking-[0.2rem] mt-0 uppercase">Singapore Airlines</h3>
          <h1 className="text-[52pt] leading-[1] tracking-tight text-white font-medium w-[450px]">In-Flight Safety Video <span className="mix-blend-soft-light"></span></h1>

          <h3 className="text-white ml-1 text-xl mt-4">Taking travelers through our island home.</h3>
          </div>

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

        {/* Background Glow - Only for Chrome browsers */}
        {isChrome && (
          <video
            ref={glowVideoRef}
            src="/isv/montage_glow.mp4"
            autoPlay muted loop playsInline
            className="hidden xl:block absolute inset-0 w-full h-full scale-75 object-cover blur-3xl -z-10 saturate-200 brightness-125"
          />
        )}
        
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
            className="w-full h-auto absolute top-1/2 transform -translate-y-1/2"
          />
          <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-black/50 via-black/80 to-transparent z-0"></div>
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
        <div className="w-full mx-auto text-center relative h-screen max-h-[1000px]">

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
        {/* Page Container */}
        <div className="w-[95%] h-screen max-h-[900px] mx-auto relative flex items-center">
          
          {/* Text Box - Positioned to the left */}
           <div className="flex-[1] h-[85%] flex flex-col pl-10">
             
            {/* Featuring... */}
            <h2
              ref={section5TextRef}
              className="text-[28pt] leading-[1.1] font-medium text-white tracking-tight -ml-1 bg-black z-20 pr-14">
                Featuring <br/>communities & locations across Singapore.
            </h2>
            
            {/* Top Gradient */}
            <div className="bg-gradient-to-b from-black to-transparent h-[35%] z-10 -ml-1.5 "/>

            {/* Community Container */}
            <div ref={communityContainerRef} className="flex-1 flex flex-col justify-center -mt-28">

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

            {/* Bottom Gradient */}
            <div className="absolute bottom-32 left-0 w-[31%] 2xl:w-[24%] bg-gradient-to-t from-black to-transparent h-[35%] z-10 -ml-1.5"/>

            {/* Safety Instruction */}
            <div className="relative h-[45px]">
            <p className="text-[12pt] font-semibold tracking-tight">Safety Instruction:</p>
            <p ref={preTakeoffRef} className="absolute bottom-0 left-0 text-[12pt]">Pre-Takeoff Procedures</p>
            <p ref={seatbeltRef} className="absolute bottom-0 left-0 text-[12pt]">Seatbelts</p>
            <p ref={dashRef} className="absolute bottom-0 left-0 text-[12pt]">–</p>
            <p ref={oxygenMaskRef} className="absolute bottom-0 left-0 text-[12pt]">Oxygen Mask</p>
            <p ref={emergencyExitsRef} className="absolute bottom-0 left-0 text-[12pt]">Emergency Exits</p>
            <p ref={bracePositionsRef} className="absolute bottom-0 left-0 text-[12pt]">Brace Positions + Evacuation</p>
            <p ref={lifeVestsRef} className="absolute bottom-0 left-0 text-[12pt]">Life Vests</p>
            <p ref={electronicDevicesRef} className="absolute bottom-0 left-0 text-[12pt]">Electronic Devices + No Smoking</p>
            </div>
            
          </div>
          
          {/* Right side - can be left empty or add visual elements later */}
          <div className="flex-[1.5] xl:flex-[2.5] 2xl:flex-[3.5] h-[85%] rounded-[30pt] overflow-hidden glass relative">    

            {/* Glass Edge Effect */}
            <div className="absolute inset-0 rounded-[30pt] shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_10px_0px_rgba(255,255,255,1)] pointer-events-none mix-blend-overlay z-20"/>  
            
            {/* Community Videos - All positioned absolutely for fade transitions */}
            <video ref={hawkerImgRef} src="/isv/nosmoking.mp4" className="absolute inset-0 w-full h-full object-cover contrast-[1.1]" autoPlay loop muted playsInline />
            <video ref={aquaImgRef} src="/isv/lifevest.mp4" className="absolute inset-0 w-full h-full object-cover contrast-[1.1]" autoPlay loop muted playsInline />
            <video ref={silatImgRef} src="/isv/silat.mp4" className="absolute inset-0 w-full h-full object-cover contrast-[1.1]" autoPlay loop muted playsInline />
            <video ref={rangoliImgRef} src="/isv/rangoli.mp4" className="absolute inset-0 w-full h-full object-cover contrast-[1.1]" autoPlay loop muted playsInline />
            <video ref={durianImgRef} src="/isv/durian.mp4" className="absolute inset-0 w-full h-full object-cover contrast-[1.1]" autoPlay loop muted playsInline />
            <video ref={birdImgRef} src="/isv/birduncles.mp4" className="absolute inset-0 w-full h-full object-cover contrast-[1.1]" autoPlay loop muted playsInline />
            <video ref={familiesImgRef} src="/isv/families.mp4" className="absolute inset-0 w-full h-full object-cover contrast-[1.15]" autoPlay loop muted playsInline />
            <video ref={lionDanceImgRef} src="/isv/liondance.mp4" className="absolute w-full h-full object-cover contrast-[1.1]" autoPlay loop muted playsInline />

          </div>
          
        </div>
      </section>

      {/* Section 6 – Direct YouTube Video Embed */}
      <section className="min-h-screen w-screen flex items-center justify-center relative bg-black" style={{ pointerEvents: 'auto' }}>
        <div className="w-full h-screen relative mx-auto" style={{ pointerEvents: 'auto' }}>
          
           <div className="w-[95%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
             
             <iframe
               className="w-full h-full rounded-3xl"
               src="https://www.youtube.com/embed/dOpwFr5-iEw?controls=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1"
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               allowFullScreen
               onLoad={() => console.log('YouTube iframe loaded')}
             />
             
             {/* Glass Edge Effect */}
             <div className="absolute inset-0 rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_20px_0px_rgba(255,255,255,1)] pointer-events-none mix-blend-overlay z-10"/>
        
        </div>
      </div>
    </section>

    {/* Section 7 – Behind the Scenes */}
    <section className="min-h-screen w-screen flex items-center justify-center relative bg-black">
      {/* Images */}
      <div className="w-[95%] h-[86%] max-h-[900px] absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row gap-2">
            
            {/* Column 1 */}
            <div className="flex-[1.2] gap-2 flex flex-col">

              <div className="flex-[0.8]">
                <h1 className="text-[32pt] xl:text-[40pt] 2xl:text-[47pt] tracking-tight leading-[0.9] font-medium text-white -mt-1.5 ml-0.5">Behind the Scenes</h1>
              </div>

              <div className="flex-[3] overflow-hidden rounded-[16pt]">
                <img src="/isv/bts/7.jpeg" className="w-full h-full object-cover"/>
              </div>

              <div className="flex-[3] overflow-hidden rounded-[16pt]">
                <img src="/isv/bts/11.jpeg" className="w-full h-full object-cover rounded-bl-[30pt]"/>
              </div>

            </div>

           {/* Column 2 */}
           <div className="flex-[1] gap-2 flex flex-col">

             <div className="flex-1 overflow-hidden rounded-[16pt]">
               <img src="/isv/bts/5.jpeg" className="w-full h-full object-cover"/>               
             </div>

             <div className="flex-1 overflow-hidden rounded-[16pt]">
               <img src="/isv/bts/1.jpeg" className="w-full h-full object-cover"/>
             </div>

             <div className="flex-[1] overflow-hidden rounded-[16pt]">
               <img src="/isv/bts/8.jpeg" className="w-full h-full object-cover"/>
             </div>
             

           </div>

           {/* Column 3 */}
           <div className="flex-[1] gap-2 flex flex-col">

             <div className="flex-[1] overflow-hidden rounded-[16pt]">
               <img src="/isv/bts/9.jpeg" className="w-full h-full object-cover"/>
             </div>

             <div className="flex-[1] overflow-hidden rounded-[16pt]">
               <img src="/isv/bts/3.jpeg" className="w-full h-full object-cover"/>
             </div>

             <div className="flex-[1.5] overflow-hidden rounded-[16pt]">
               <img src="/isv/bts/10.jpeg" className="w-full h-full object-cover"/>
             </div>

           </div>
         </div>
    </section>

 
    </div>
  );
};

export default ISV; 