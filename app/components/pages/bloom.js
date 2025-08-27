'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useHideNav } from '../../context/HideNavContext';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

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

const Bloom = ({ className }) => {
  const { setIsWhiteBG } = useHideNav();
  const isMobile = useMobileDetection();
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 4;

  //#region Refs
  // Section 1 refs (title)
  const section1Ref = useRef(null);
  
  // Section 2 refs (speech bubbles + section 3 content)
  const section2Ref = useRef(null);
  const section2BubbleRefs = useRef([]);
  const section2EmojiRef = useRef(null);
  const section2MainTitleRef = useRef(null);
  
  // Section 3 refs (text replacement + emoji) - now part of section 2
  const section3Text1Ref = useRef(null);
  const section3Text2Ref = useRef(null);
  const section3ContainerRef = useRef(null);
  const section3EmojiRef = useRef(null);
  
  // Section 3 refs (background transitions + text)
  const section3Ref = useRef(null);
  const section3Bg1Ref = useRef(null);
  const section3Bg2Ref = useRef(null);
  const section3Bg3Ref = useRef(null);
  const section3Bg4Ref = useRef(null);
  const section3TextPhase1Ref = useRef(null);
  const section3TextPhase2Ref = useRef(null);
  const section3TextPhase3Ref = useRef(null);
  const section3TextPhase4Ref = useRef(null);
  //#endregion

  // Section tracking for progress indicator
  const sectionRefs = [
    section1Ref, // Section 1 (Title)
    section2Ref,
    null, // Section 3 (combined with section 2)
    section3Ref, // Section 3 (background transitions)
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

    // Set initial state for section 3
    gsap.set(section3ContainerRef.current, { opacity: 0, y: 30 });
    gsap.set(section3Text1Ref.current, { opacity: 1, y: 0 });
    gsap.set(section3Text2Ref.current, { opacity: 0, y: 30 });
    
    // Set initial state for section 3 (background transitions)
    gsap.set(section3Bg1Ref.current, { opacity: 1 });
    gsap.set(section3Bg2Ref.current, { opacity: 0 });
    gsap.set(section3Bg3Ref.current, { opacity: 0 });
    gsap.set(section3Bg4Ref.current, { opacity: 0 });
    gsap.set(section3TextPhase1Ref.current, { opacity: 1, y: 0 });
    gsap.set(section3TextPhase2Ref.current, { opacity: 0, y: 30 });
    gsap.set(section3TextPhase3Ref.current, { opacity: 0, y: 30 });
    gsap.set(section3TextPhase4Ref.current, { opacity: 0, y: 30 });
    //#endregion

    //#region Animation States
    let section1AnimationComplete = false;
    let section2AnimationComplete = false;
    let section3AnimationComplete = false;
    let section3BgAnimationComplete = false;
    //#endregion

    // SECTION 2 Intro Text
    ScrollTrigger.create({
      trigger: section2Ref.current,
      start: "bottom 100%",
      end: "+=50%", // Extend the trigger area for scroll control to accommodate 4 phases
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Phase 1: Cross fade (0-50%)
        if (progress <= 0.5) {
          const crossFadeProgress = progress / 0.5; // 0 to 1 for cross fade
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
          
          // Keep phase 2 hidden
          gsap.set(section3Text2Ref.current, { opacity: 0, y: 30 });
        }
        // Phase 2: Second textbox appears (50-100%)
        else {
          const phase2Progress = (progress - 0.5) / 0.5; // 0 to 1 for phase 2
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
        }
        
        // Mark animations as complete when all phases finish
        if (progress >= 1) {
          section2AnimationComplete = true;
          section3AnimationComplete = true;
        }
      }
    });
    
    // SECTION 3 Background Transitions
    ScrollTrigger.create({
      trigger: section3Ref.current,
      start: "bottom 100%",
      end: "+=60%", // Extend the trigger area for scroll control to accommodate 4 phases
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
                 // Phase 1: Initial state (0-25%)
         if (progress <= 0.25) {
           const phase1Progress = progress / 0.25; // 0 to 1 for phase 1
           const easedProgress = gsap.parseEase("expo.out")(phase1Progress);
           
           // Keep bg1 visible, others hidden
           gsap.set(section3Bg1Ref.current, { opacity: 1 });
           gsap.set(section3Bg2Ref.current, { opacity: 0 });
           gsap.set(section3Bg3Ref.current, { opacity: 0 });
           gsap.set(section3Bg4Ref.current, { opacity: 0 });
           
           // Keep phase 1 text visible, others hidden
           gsap.set(section3TextPhase1Ref.current, { opacity: 1, y: 0 });
           gsap.set(section3TextPhase2Ref.current, { opacity: 0, y: 30 });
           gsap.set(section3TextPhase3Ref.current, { opacity: 0, y: 30 });
           gsap.set(section3TextPhase4Ref.current, { opacity: 0, y: 30 });
         }
                 // Phase 2: bg2 fades in (25-50%)
         else if (progress <= 0.5) {
           const phase2Progress = (progress - 0.25) / 0.25; // 0 to 1 for phase 2
           const easedProgress = gsap.parseEase("expo.out")(phase2Progress);
           
           // Cross fade bg1 to bg2
           gsap.set(section3Bg1Ref.current, { opacity: 1 - easedProgress });
           gsap.set(section3Bg2Ref.current, { opacity: easedProgress });
           gsap.set(section3Bg3Ref.current, { opacity: 0 });
           gsap.set(section3Bg4Ref.current, { opacity: 0 });
           
           // Cross fade text phase 1 to phase 2
           gsap.set(section3TextPhase1Ref.current, { opacity: 1 - easedProgress, y: 0 });
           gsap.set(section3TextPhase2Ref.current, { opacity: easedProgress, y: 30 - (30 * easedProgress) });
           gsap.set(section3TextPhase3Ref.current, { opacity: 0, y: 30 });
           gsap.set(section3TextPhase4Ref.current, { opacity: 0, y: 30 });
         }
                 // Phase 3: bg3 fades in (50-75%)
         else if (progress <= 0.75) {
           const phase3Progress = (progress - 0.5) / 0.25; // 0 to 1 for phase 3
           const easedProgress = gsap.parseEase("expo.out")(phase3Progress);
           
           // Cross fade bg2 to bg3
           gsap.set(section3Bg1Ref.current, { opacity: 0 });
           gsap.set(section3Bg2Ref.current, { opacity: 1 - easedProgress });
           gsap.set(section3Bg3Ref.current, { opacity: easedProgress });
           gsap.set(section3Bg4Ref.current, { opacity: 0 });
           
           // Cross fade text phase 2 to phase 3
           gsap.set(section3TextPhase1Ref.current, { opacity: 0 });
           gsap.set(section3TextPhase2Ref.current, { opacity: 1 - easedProgress, y: 0 });
           gsap.set(section3TextPhase3Ref.current, { opacity: easedProgress, y: 30 - (30 * easedProgress) });
           gsap.set(section3TextPhase4Ref.current, { opacity: 0, y: 30 });
         }
                 // Phase 4: bg4 fades in (75-100%)
         else {
           const phase4Progress = (progress - 0.75) / 0.25; // 0 to 1 for phase 4
           const easedProgress = gsap.parseEase("expo.out")(phase4Progress);
           
           // Cross fade bg3 to bg4
           gsap.set(section3Bg1Ref.current, { opacity: 0 });
           gsap.set(section3Bg2Ref.current, { opacity: 0 });
           gsap.set(section3Bg3Ref.current, { opacity: 1 - easedProgress });
           gsap.set(section3Bg4Ref.current, { opacity: easedProgress });
           
           // Cross fade text phase 3 to phase 4 (centered)
           gsap.set(section3TextPhase1Ref.current, { opacity: 0 });
           gsap.set(section3TextPhase2Ref.current, { opacity: 0 });
           gsap.set(section3TextPhase3Ref.current, { opacity: 1 - easedProgress, y: 0 });
           gsap.set(section3TextPhase4Ref.current, { opacity: easedProgress, y: 30 - (30 * easedProgress) });
         }
        
        // Mark animation as complete when all phases finish
        if (progress >= 1) {
          section3BgAnimationComplete = true;
        }
      }
    });

    // CLEANUP FUNCTION
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      document.body.style.overflow = 'auto';
      
      // Cleanup section observer
      sectionObserver.disconnect();
      
      // Reset section 13 active state when component unmounts
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
      <div className={`relative overflow-x-hidden col-span-full bg-black -mt-36 ${className || ''}`}>

      {/* Section 1 – Cover Page */}
      <section 
        ref={section1Ref}
        className="h-screen w-full text-white relative overflow-hidden flex flex-col items-center justify-center"
      >
        <img 
          src="/bloom/logo.png" 
          alt="Bloom Lockup" 
          className="mx-auto w-auto h-full scale-[25%]"
        />

        <div className="absolute bottom-24 mx-auto text-center text-foreground text-base"> 

           <img src="/bloom/stanfordlogo.png" alt="Bloom Lockup" className="w-auto h-full mx-auto scale-[50%] transform origin-bottom mb-4 pr-18"/>
          {/* <p className="font-medium text-xs uppercase tracking-widest mb-10">First Place</p> */}

          <div className="flex flex-row gap-2 justify-center">
            <p className="font-medium">Eun Soo Cho</p>
            <p className="opacity-50">|</p>
            <p className="font-medium">Soomin Jeon</p>
            <p className="opacity-50">|</p>
            <p className="font-medium">Chris Leow</p>
            <p className="opacity-50">|</p>
            <p className="font-medium">Seeun Park</p> 
          </div>

        </div>
      </section>

      {/* Section 2 – Intro Text */}
      <section 
        ref={section2Ref}
        className="min-h-screen w-screen flex items-center justify-center relative "
      >
        <div className="w-full mx-auto text-center relative h-screen bg">
          
          {/* Phase 1: Plain text box in the middle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <p 
              ref={section2MainTitleRef}
              className="text-[24pt] font-base text-white w-[40%] mx-auto"
              style={{ lineHeight: '1.2' }}
            >
              There is a serious problem regarding young adults across the world right now.
            </p>
          </div>
          
          {/* Phase 3 & 4 Container */}
          <div 
            ref={section3ContainerRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full mt-8"
          >
            <h2 
              ref={section3Text1Ref}
              className="text-[18pt] font-base text-white mx-auto"
            >
              And as young adults, we sought to make a difference in this world.
            </h2>
            
            {/* Phase 4: Second plain textbox under phase 3 textbox */}
            <div 
              ref={section3Text2Ref}
              className="w-[60%] mx-auto"
            >
              <h2 className="text-[18pt] font-base text-white mx-auto mt-2 leading-normal">
              Our goal was to support young people who are not in education, employment, or training (NEETs) in reconnecting with society and building meaningful pathways forward.
              </h2>
            </div>
          </div>
          
        </div>
      </section>

      {/* Section 3 – Background Transitions */}
      <section 
        ref={section3Ref}
        className="min-h-screen w-full relative overflow-hidden"
      >
        {/* Background Images */}
        <div className="absolute inset-0">
          <img 
            ref={section3Bg1Ref}
            src="/bloom/section3bg1.png" 
            alt="Section 3 Background 1" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img 
            ref={section3Bg2Ref}
            src="/bloom/section3bg2.png" 
            alt="Section 3 Background 2" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img 
            ref={section3Bg3Ref}
            src="/bloom/section3bg3.png" 
            alt="Section 3 Background 3" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img 
            ref={section3Bg4Ref}
            src="/bloom/section3bg4.png" 
            alt="Section 3 Background 4" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Text Content */}
        <div className="relative z-10 h-full">
          {/* Phase 1 Text - Left aligned */}
          <div 
            ref={section3TextPhase1Ref}
            className="absolute left-[10%] top-1/2 transform -translate-y-1/2 w-80 text-[#FEEED5] font-medium"
          >
            <p className="text-lg">
            Jisoo, a business major, entered
            her program without a clear goal.
            </p>
            <p className="text-lg mt-4">
            Because of this, she now faces immense difficulty finding a job post-graduation.
            </p>
          </div>
          
          {/* Phase 2 Text - Left aligned */}
          <div 
            ref={section3TextPhase2Ref}
            className="absolute left-[10%] top-1/2 transform -translate-y-1/2 w-80 text-[#FEEED5] font-medium"
          >
            <p className="text-lg">
              As her friends began to find success, her anxiety grew; leading her to withdraw from social media and fall into isolation.
            </p>
          </div>
          
          {/* Phase 3 Text - Right aligned */}
          <div 
            ref={section3TextPhase3Ref}
            className="absolute right-[10%] top-1/2 transform -translate-y-1/2 w-80 text-[#FEEED5] font-medium"
          >
            <p className="text-lg">
              She was uncertain on her path ahead, and applying for jobs was the only thing she could do.
            </p>
          </div>
          
          {/* Phase 4 Text - Center aligned */}
          <div 
            ref={section3TextPhase4Ref}
            className="absolute left-1/2 top-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full text-[#FEEED5] font-medium text-center"
          >
            <p className="text-lg w-[40%] mx-auto">
              We wanted to create a platform that would allow young people to connect with others who are facing similar challenges, and to provide them with the support and resources they need to navigate their way forward.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Bloom;

