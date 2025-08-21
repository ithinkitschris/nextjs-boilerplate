'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useHideNav } from '../../context/HideNavContext';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

  const NycSubway = ({ className }) => {
  const { setIsWhiteBG } = useHideNav();

  // Section 2 refs (speech bubbles)
  const section2Ref = useRef(null);
  const section2BubbleRefs = useRef([]);
  
  // Section 3 refs (text replacement + emoji)
  const section3Ref = useRef(null);
  const section3Text1Ref = useRef(null);
  const section3Text2Ref = useRef(null);
  const section3EmojiRef = useRef(null);
  
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
  
  // Section 8 refs (four columns)
  const section8Ref = useRef(null);
  const section8EmojiRef = useRef(null);
  const section8Emoji1Ref = useRef(null);
  const section8Emoji2Ref = useRef(null);
  const section8Emoji3Ref = useRef(null);
  const section8Text1Ref = useRef(null);
  const section8Text2Ref = useRef(null);
  const section8Text3Ref = useRef(null);

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
  


  useEffect(() => {
    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Set initial state for section 2 bubbles
    section2BubbleRefs.current.forEach(bubble => {
      if (bubble) {
        gsap.set(bubble, { opacity: 0, scale: 0});
      }
    });

    // Set initial state for section 3
    gsap.set(section3Text2Ref.current, { opacity: 0, scale: 1.2});
    gsap.set(section3EmojiRef.current, { opacity: 0, y: 100 });
    
    // Set initial state for section 4
    gsap.set(section4Text1Ref.current, { opacity: 1, scale: 2, y: 0 });
    gsap.set(section4Text2Ref.current, { opacity: 0, scale: 1.1 });
    gsap.set(section4EmojiRef.current, { opacity: 0, y: 100 });
    gsap.set(section4BackgroundRef.current, { opacity: 0 });
    
    // Set initial state for section 5
    gsap.set(section5Text1Ref.current, { opacity: 0, y: 50 });
    gsap.set(section5Text2Ref.current, { opacity: 0, y: 50 });
    
    // Set initial state for section 6 (identical to section 4)
    gsap.set(section6Text1Ref.current, { opacity: 1, scale: 2, y: 0 });
    gsap.set(section6Text2Ref.current, { opacity: 0, scale: 1.1 });
    gsap.set(section6EmojiRef.current, { opacity: 0, y: 100 });
    gsap.set(section6BackgroundRef.current, { opacity: 0 });
    
    // Set initial state for section 7
    gsap.set(section7Text1Ref.current, { opacity: 1, scale: 1, y: 0 });
    gsap.set(section7Text2Ref.current, { opacity: 0, y: 50 });
    gsap.set(section7EmojiRef.current, { opacity: 0, y: 100 });
    gsap.set(section7BackgroundRef.current, { opacity: 0 });
    
    // Set initial state for section 8
    gsap.set(section8EmojiRef.current, { opacity: 1, scale: 1 });
    gsap.set(section8Emoji1Ref.current, { opacity: 1, scale: 1 });
    gsap.set(section8Emoji2Ref.current, { opacity: 0, scale: 1 });
    gsap.set(section8Emoji3Ref.current, { opacity: 0, scale: 1 });
    gsap.set(section8Text1Ref.current, { opacity: 1, y: 0 });
    gsap.set(section8Text2Ref.current, { opacity: 0, y: 50 });
    gsap.set(section8Text3Ref.current, { opacity: 0, y: 50 });

    // Set initial state for section 11
    gsap.set(section11OriginalRef.current, { opacity: 1, scale: 1 });
    gsap.set(section11NewRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(section11Text1Ref.current, { opacity: 0, y: 30 });
    gsap.set(section11Text2Ref.current, { opacity: 0, y: 30 });
    gsap.set(section11Text3Ref.current, { opacity: 0, y: 30 });
    gsap.set(section11TopParagraphRef.current, { opacity: 0 });
    
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

    // Set initial state for section 14 (identical to section 13)
    gsap.set(section14IconRef.current, { opacity: 0, scale: 0.8, y: 0, rotation: -21 });
    gsap.set(section14Text1Ref.current, { opacity: 0, y: 30 });
    gsap.set(section14ImageRef.current, { opacity: 1, transformOrigin: "center center" });
    gsap.set(section14LockscreenRef.current, { opacity: 0, scale: 1, transformOrigin: "center center" });
    gsap.set(section14Paragraph1Ref.current, { opacity: 0, y: 30 });
    gsap.set(section14Paragraph2Ref.current, { opacity: 0, y: 30 });

    // Set initial state for section 15 (duplicate of section 14)
    gsap.set(section15IconRef.current, { opacity: 0, scale: 0.8, y: 0, rotation: -21 });
    gsap.set(section15Text1Ref.current, { opacity: 0, y: 30 });
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
    
    // Set initial state for section 16 (identical to section 14)
    gsap.set(section16IconRef.current, { opacity: 0, scale: 0.8, y: 0, rotation: -21 });
    gsap.set(section16Text1Ref.current, { opacity: 0, y: 30 });
    gsap.set(section16ImageRef.current, { opacity: 1, transformOrigin: "center center" });
    gsap.set(section16Paragraph1Ref.current, { opacity: 0, y: 30 });
    gsap.set(section16Paragraph2Ref.current, { opacity: 0, y: 30 });

    // Set initial state for section 17 (duplicate of section 15)
    gsap.set(section17IconRef.current, { opacity: 0, scale: 0.8, y: 0, rotation: -21 });
    gsap.set(section17Text1Ref.current, { opacity: 0, y: 30 });
    gsap.set(section17ImageRef.current, { opacity: 1, transformOrigin: "center center" });
    gsap.set(section17LockscreenRef.current, { opacity: 0, scale: 1, transformOrigin: "center center" });
    gsap.set(section17Paragraph1Ref.current, { opacity: 0, y: 30 });
    gsap.set(section17Paragraph2Ref.current, { opacity: 0, y: 30 });
    
    // Set initial state for section 17 phase 3
    gsap.set(section17Phase3IconRef.current, { opacity: 0, scale: 0.8, y: 30, rotation: -21 });
    gsap.set(section17Phase3HeaderRef.current, { opacity: 0, y: 30 });
    gsap.set(section17Phase3PhoneRef.current, { opacity: 0, x: 0 });
    gsap.set(section17Phase3TextRef.current, { opacity: 0, y: 30 });
    
    // Set initial state for section 18 (all elements start hidden and scaled down)
    gsap.set(section18Image1Ref.current, { opacity: 0, scale: 0.95 });
    gsap.set(section18Image2Ref.current, { opacity: 0, scale: 0.95 });
    gsap.set(section18Image3TopRef.current, { opacity: 0, scale: 0.95 });
    gsap.set(section18Image3BottomRef.current, { opacity: 0, scale: 0.95 });
    gsap.set(section18Image4Ref.current, { opacity: 0, scale: 0.95 });

    // Set initial state for section 19 (all elements start hidden and scaled down)
    gsap.set(section19Image1Ref.current, { opacity: 0, scale: 0.95 });
    gsap.set(section19Image3Ref.current, { opacity: 0, scale: 0.95 });
    

    
    let section2AnimationComplete = false;
    let section3AnimationComplete = false;
    let section4AnimationComplete = false;
    let section5AnimationComplete = false;
    let section6AnimationComplete = false;
    let section7AnimationComplete = false;
    let section8AnimationComplete = false;
    let section11AnimationComplete = false;
    let section11Phase2AnimationComplete = false;
    let section12AnimationComplete = false;
    let section13AnimationComplete = false;
    let section14AnimationComplete = false;
    let section15AnimationComplete = false;
    let section16AnimationComplete = false;
    let section17AnimationComplete = false;
    let section18AnimationComplete = false;
    let section19AnimationComplete = false;
    
    // SECTION 2 ANIMATION
    ScrollTrigger.create({
      trigger: section2Ref.current,
      start: "bottom 100%",
      end: "+=100%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        const totalBubbles = section2BubbleRefs.current.length;
        
        // Calculate which bubble should be visible based on scroll progress
        section2BubbleRefs.current.forEach((bubble, index) => {
          if (bubble) {
            const bubbleStart = index / totalBubbles;
            const bubbleEnd = (index + 1) / totalBubbles;
            const bubbleProgress = Math.max(0, Math.min(1, (progress - bubbleStart) / (bubbleEnd - bubbleStart)));
            
            // Apply easing to the progress value before setting properties
            const easedProgress = gsap.parseEase("back.inOut(2)")(bubbleProgress);
            gsap.set(bubble, {
              opacity: easedProgress,
              scale: easedProgress
            });
            
            // Mark animation as complete when all bubbles are visible
            if (progress >= 1 && index === totalBubbles - 1) {
              section2AnimationComplete = true;
            }
          }
        });
      }
    });

    // SECTION 3 ANIMATION
    ScrollTrigger.create({
      trigger: section3Ref.current,
      start: "bottom 100%",
      end: "+=25%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Animation happens from 0% to 100% of scroll (no delays)
        const adjustedProgress = progress; // 0 to 1 for actual animation
        
        // Text 1 fades out, Text 2 and Emoji fade in together
        const textProgress = Math.min(1, adjustedProgress); // Cap at 1
        
        // Text 1 fades out and scales down
        gsap.set(section3Text1Ref.current, {
          opacity: 1 - textProgress,
          scale: 0.8 + (0.2 * (1 - textProgress))
        });
        
        // Text 2 fades in and scales down
        gsap.set(section3Text2Ref.current, {
          opacity: textProgress,
          scale: 1.1 - (0.1 * textProgress)
        });
        
        // Emoji fades in and moves up at the same time
        gsap.set(section3EmojiRef.current, {
          opacity: textProgress,
          y: 100 - (100 * textProgress)
        });
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section3AnimationComplete = true;
        }
      }
    });
    
    // SECTION 4 ANIMATION
    ScrollTrigger.create({
      trigger: section4Ref.current,
      start: "bottom 100%",
      end: "+=30%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Animation happens from 0% to 100% of scroll (no delays)
        const adjustedProgress = progress; // 0 to 1 for actual animation
        
        // Text 1 stays, Text 2 fades in, Emoji appears, Background fades in
        const textProgress = Math.min(1, adjustedProgress); // Cap at 1
        
        // Apply easing to the progress
        const easedProgress = gsap.parseEase("back.out")(textProgress);
        
        // Text 1 scales down and moves upward as text2 appears
        gsap.set(section4Text1Ref.current, {
          opacity: 1,
          scale: 2 - (0.8 * easedProgress), // Scales from 2 to 1
          y: -80 * easedProgress // Moves up 40px as animation progresses
        });
        
        // Text 2 fades in, moves up, and scales up
        gsap.set(section4Text2Ref.current, {
          opacity: easedProgress,
          y: 80 - (80 * easedProgress), // Moves up from 120px below to 0px
          scale: 0.8 + (0.2 * easedProgress) // Scales from 0.8 to 1.0
        });
        
        // Emoji fades in and moves up
        gsap.set(section4EmojiRef.current, {
          opacity: easedProgress,
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
    
    // SECTION 5 ANIMATION
    ScrollTrigger.create({
      trigger: section5Ref.current,
      start: "bottom 100%",
      end: "+=50%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Animation happens from 0% to 100% of scroll (no delays)
        const textProgress = progress; // 0 to 1 for animation
        
        // Text 1 fades in first half, Text 2 fades in second half
        if (progress <= 0.5) {
          const text1Progress = progress / 0.5; // 0 to 1 for text 1 animation
          const easedText1Progress = gsap.parseEase("power4.out")(text1Progress);
          
          gsap.set(section5Text1Ref.current, {
            opacity: easedText1Progress,
            y: 50 - (50 * easedText1Progress)
          });
          gsap.set(section5Text2Ref.current, {
            opacity: 0,
            y: 50
          });
        } else {
          const text2Progress = (progress - 0.5) / 0.5; // 0 to 1 for text 2 animation
          const easedText2Progress = gsap.parseEase("power4.out")(text2Progress);
          
          gsap.set(section5Text1Ref.current, {
            opacity: 1,
            y: 0
          });
          gsap.set(section5Text2Ref.current, {
            opacity: easedText2Progress,
            y: 50 - (50 * easedText2Progress)
          });
        }
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section5AnimationComplete = true;
        }
      }
    });
    
    // SECTION 6 ANIMATION
    ScrollTrigger.create({
      trigger: section6Ref.current,
      start: "bottom 100%",
      end: "+=25%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Animation happens from 0% to 100% of scroll (no delays)
        const adjustedProgress = progress; // 0 to 1 for actual animation
        
        // Text 1 stays, Text 2 fades in, Emoji appears, Background fades in
        const textProgress = Math.min(1, adjustedProgress); // Cap at 1
        
        // Apply easing to the progress
        const easedProgress = gsap.parseEase("back.out")(textProgress);
        
        // Text 1 scales down and moves upward as text2 appears
        gsap.set(section6Text1Ref.current, {
          opacity: 1,
          scale: 2 - (0.8 * easedProgress), // Scales from 2 to 1
          y: -140 * easedProgress // Moves up 40px as animation progresses
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
          y: 100 - (100 * easedProgress)
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
    
    // SECTION 7 ANIMATION
    ScrollTrigger.create({
      trigger: section7Ref.current,
      start: "bottom 100%",
      end: "+=25%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Animation happens from 0% to 100% of scroll (no delays)
        const adjustedProgress = progress; // 0 to 1 for actual animation
        const textProgress = adjustedProgress; // Use full progress range
        
        // Text 1 shifts upward as text2 appears
        gsap.set(section7Text1Ref.current, {
          opacity: 1,
          scale: 1,
          y: -100 * textProgress // Moves up 60px as animation progresses
        });
        
        // Text 2 fades in and moves up
        gsap.set(section7Text2Ref.current, {
          opacity: textProgress,
          y: 100 - (100 * textProgress) // Moves up from 50px below to 0px
        });
        
        // Emoji fades in and moves up
        gsap.set(section7EmojiRef.current, {
          opacity: textProgress,
          y: 100 - (100 * textProgress)
        });
        
        // Background gradient fades in
        gsap.set(section7BackgroundRef.current, {
          opacity: textProgress
        });
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section7AnimationComplete = true;
        }
      }
    });

    // SECTION 8 ANIMATION
    ScrollTrigger.create({
      trigger: section8Ref.current,
      start: "bottom 100%",
      end: "+=100%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Animation happens from 0% to 100% of scroll (no delays)
        const animationProgress = progress; // 0 to 1 for animation
        
        // Text columns animation follows section 5 pattern with easing
        if (progress <= 0.5) {
          const text2Progress = progress / 0.5; // 0 to 1 for text 2 animation
          const easedText2Progress = gsap.parseEase("power4.out")(text2Progress);
          
          // Column 2 (Text 1) stays at full opacity
          gsap.set(section8Text1Ref.current, {
            opacity: 1,
            y: 0
          });
          
          // Column 3 (Text 2) fades in and moves up
          gsap.set(section8Text2Ref.current, {
            opacity: easedText2Progress,
            y: 50 - (50 * easedText2Progress)
          });
          
          // Emoji 1 fades out, Emoji 2 fades in
          gsap.set(section8Emoji1Ref.current, {
            opacity: 1 - easedText2Progress
          });
          gsap.set(section8Emoji2Ref.current, {
            opacity: 0 + easedText2Progress
          });
          
          // Ensure column 4 is hidden during first half
          gsap.set(section8Text3Ref.current, {
            opacity: 0,
            y: 50
          });
          gsap.set(section8Emoji3Ref.current, {
            opacity: 0
          });
        } else {
          const text3Progress = (progress - 0.5) / 0.5; // 0 to 1 for text 3 animation
          const easedText3Progress = gsap.parseEase("power4.out")(text3Progress);
          
          // Column 2 (Text 1) stays at full opacity
          gsap.set(section8Text1Ref.current, {
            opacity: 1,
            y: 0
          });
          
          // Column 3 (Text 2) stays at full opacity
          gsap.set(section8Text2Ref.current, {
            opacity: 1,
            y: 0
          });
          
          // Column 4 (Text 3) fades in and moves up
          gsap.set(section8Text3Ref.current, {
            opacity: easedText3Progress,
            y: 50 - (50 * easedText3Progress)
          });
          
          // Emoji 2 fades out, Emoji 3 fades in
          gsap.set(section8Emoji2Ref.current, {
            opacity: 1 - easedText3Progress
          });
          gsap.set(section8Emoji3Ref.current, {
            opacity: 0 + easedText3Progress
          });
        }
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section8AnimationComplete = true;
        }
      }
    });

    // SECTION 11 ANIMATION (Combined Phase 1 & 2)
    ScrollTrigger.create({
      trigger: section11Ref.current,
      start: "bottom 100%",
      end: "+=100%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Phase 1: Original rectangle to first new rectangle (0-50%)
        if (progress <= 0.5) {
          const phase1Progress = progress / 0.5; // 0 to 1 for phase 1
          const easedPhase1Progress = gsap.parseEase("power3.inOut")(phase1Progress);
          
          // Original rectangle fades out and scales down
          gsap.set(section11OriginalRef.current, {
            opacity: 1 - easedPhase1Progress,
            scale: 1 - (0.2 * easedPhase1Progress)
          });
          
          // First new rectangle fades in and scales up
          gsap.set(section11NewRef.current, {
            opacity: easedPhase1Progress,
            scale: 0.8 + (0.2 * easedPhase1Progress)
          });
          
          // Top paragraph fades in first
          gsap.set(section11TopParagraphRef.current, {
            opacity: easedPhase1Progress
          });
          
          // Phase 1 text columns fade in sequentially
          if (phase1Progress <= 0.33) {
            const text1Progress = phase1Progress / 0.33;
            const easedText1Progress = gsap.parseEase("power4.out")(text1Progress);
            
            gsap.set(section11Text1Ref.current, {
              opacity: easedText1Progress,
              y: 30 - (30 * easedText1Progress)
            });
            gsap.set(section11Text2Ref.current, {
              opacity: 0,
              y: 30
            });
            gsap.set(section11Text3Ref.current, {
              opacity: 0,
              y: 30
            });
          } else if (phase1Progress <= 0.66) {
            const text2Progress = (phase1Progress - 0.33) / 0.33;
            const easedText2Progress = gsap.parseEase("power4.out")(text2Progress);
            
            gsap.set(section11Text1Ref.current, {
              opacity: 1,
              y: 0
            });
            gsap.set(section11Text2Ref.current, {
              opacity: easedText2Progress,
              y: 30 - (30 * easedText2Progress)
            });
            gsap.set(section11Text3Ref.current, {
              opacity: 0,
              y: 30
            });
          } else {
            const text3Progress = (phase1Progress - 0.66) / 0.34;
            const easedText3Progress = gsap.parseEase("power4.out")(text3Progress);
            
            gsap.set(section11Text1Ref.current, {
              opacity: 1,
              y: 0
            });
            gsap.set(section11Text2Ref.current, {
              opacity: 1,
              y: 0
            });
            gsap.set(section11Text3Ref.current, {
              opacity: easedText3Progress,
              y: 30 - (30 * easedText3Progress)
            });
          }
        }
        // Phase 2: Text content changes within the same rectangle (50-100%)
        else {
          const phase2Progress = Math.max(0, Math.min(1, (progress - 0.5) / 0.5)); // Clamp between 0 and 1
          const easedPhase2Progress = gsap.parseEase("back.out")(phase2Progress);
          
          // Original rectangle stays hidden
          gsap.set(section11OriginalRef.current, {
            opacity: 0,
            scale: 0.8
          });
          
          // Rectangle stays visible, only text content changes
          gsap.set(section11NewRef.current, {
            opacity: 1,
            scale: 1
          });
          
          // Phase 2 is split into two parts: fade out (0-30%) and fade in (30-100%)
          if (phase2Progress <= 0.3) {
            // First 30%: Phase 1 text completely fades out
            const fadeOutProgress = phase2Progress / 0.3; // 0 to 1 for fade out
            const easedFadeOutProgress = gsap.parseEase("power3.inOut")(fadeOutProgress);
            
            // Phase 1 text content fades out completely
            gsap.set(section11TopParagraphRef.current, {
              opacity: 1 - easedFadeOutProgress
            });
            gsap.set(section11Text1Ref.current, {
              opacity: 1 - easedFadeOutProgress,
              y: 0
            });
            gsap.set(section11Text2Ref.current, {
              opacity: 1 - easedFadeOutProgress,
              y: 0
            });
            gsap.set(section11Text3Ref.current, {
              opacity: 1 - easedFadeOutProgress,
              y: 0
            });
            
            // Phase 2 emoji also fades out when going back to phase 1
            gsap.set(section11Phase2EmojiRef.current, {
              opacity: 0,
              y: 100
            });
            
            // Phase 2 content stays hidden during fade out
            gsap.set(section11Phase2TopParagraphRef.current, {
              opacity: 0
            });
            gsap.set(section11Phase2Text1Ref.current, {
              opacity: 0,
              y: 30
            });
            gsap.set(section11Phase2Text2Ref.current, {
              opacity: 0,
              y: 30
            });
            gsap.set(section11Phase2Text3Ref.current, {
              opacity: 0,
              y: 30
            });
          } else {
            // Second 70%: Phase 2 text fades in
            const fadeInProgress = (phase2Progress - 0.3) / 0.7; // 0 to 1 for fade in
            const easedFadeInProgress = gsap.parseEase("power3.inOut")(fadeInProgress);
            
            // Phase 1 content stays completely hidden
            gsap.set(section11TopParagraphRef.current, {
              opacity: 0
            });
            gsap.set(section11Text1Ref.current, {
              opacity: 0,
              y: 0
            });
            gsap.set(section11Text2Ref.current, {
              opacity: 0,
              y: 0
            });
            gsap.set(section11Text3Ref.current, {
              opacity: 0,
              y: 0
            });
            
            // Phase 2 animation sequence: top paragraph first, then columns
            if (fadeInProgress <= 0.25) {
              // First 25%: Top paragraph fades in
              const topProgress = fadeInProgress / 0.25;
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
              gsap.set(section11Phase2Text1Ref.current, {
                opacity: 0,
                y: 30
              });
              gsap.set(section11Phase2Text2Ref.current, {
                opacity: 0,
                y: 30
              });
              gsap.set(section11Phase2Text3Ref.current, {
                opacity: 0,
                y: 30
              });
                         } else if (fadeInProgress <= 0.5) {
               // 25-50%: Column 1 fades in
               const text1Progress = (fadeInProgress - 0.25) / 0.25;
               const easedText1Progress = gsap.parseEase("power4.out")(text1Progress);
               
               gsap.set(section11Phase2TopParagraphRef.current, {
                 opacity: 1
               });
               gsap.set(section11Phase2Text1Ref.current, {
                 opacity: easedText1Progress,
                 y: 30 - (30 * easedText1Progress)
               });
               gsap.set(section11Phase2Text2Ref.current, {
                 opacity: 0,
                 y: 30
               });
               gsap.set(section11Phase2Text3Ref.current, {
                 opacity: 0,
                 y: 30
               });
               gsap.set(section11Phase2EmojiRef.current, {
                 opacity: 1,
                 y: 0
               });
                         } else if (fadeInProgress <= 0.75) {
               // 50-75%: Column 2 fades in
               const text2Progress = (fadeInProgress - 0.5) / 0.25;
               const easedText2Progress = gsap.parseEase("power4.out")(text2Progress);
               
               gsap.set(section11Phase2TopParagraphRef.current, {
                 opacity: 1
               });
               gsap.set(section11Phase2Text1Ref.current, {
                 opacity: 1,
                 y: 0
               });
               gsap.set(section11Phase2Text2Ref.current, {
                 opacity: easedText2Progress,
                 y: 30 - (30 * easedText2Progress)
               });
               gsap.set(section11Phase2Text3Ref.current, {
                 opacity: 0,
                 y: 30
               });
               gsap.set(section11Phase2EmojiRef.current, {
                 opacity: 1,
                 y: 0
               });
                         } else {
               // 75-100%: Column 3 fades in
               const text3Progress = (fadeInProgress - 0.75) / 0.25;
               const easedText3Progress = gsap.parseEase("power4.out")(text3Progress);
               
               gsap.set(section11Phase2TopParagraphRef.current, {
                 opacity: 1
               });
               gsap.set(section11Phase2Text1Ref.current, {
                 opacity: 1,
                 y: 0
               });
               gsap.set(section11Phase2Text2Ref.current, {
                 opacity: 1,
                 y: 0
               });
               gsap.set(section11Phase2Text3Ref.current, {
                 opacity: easedText3Progress,
                 y: 30 - (30 * easedText3Progress)
               });
               gsap.set(section11Phase2EmojiRef.current, {
                 opacity: 1 - easedText3Progress
               });
            }
          }
        }
        
        // Mark animation as complete when animation finishes (at 100% scroll)
        if (progress >= 1) {
          section11AnimationComplete = true;
          section11Phase2AnimationComplete = true;
        }
      }
    });
    
    // SECTION 12 ANIMATION 
    ScrollTrigger.create({
      trigger: section12Ref.current,
      start: "bottom 100%",
      end: "+=30%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Animation happens from 0% to 100% of scroll (no delays)
        const adjustedProgress = progress; // 0 to 1 for actual animation
        
        // Text 1 stays, Text 2 fades in, Emoji appears, Background fades in
        const textProgress = Math.min(1, adjustedProgress); // Cap at 1
        
        // Apply easing to the progress
        const easedProgress = gsap.parseEase("back.out")(textProgress);
        
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
          y: 80 - (80 * easedProgress)
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
    
    // SECTION 13 ANIMATION (3 columns)
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

    // SECTION 14 ANIMATION (3 columns) - Phase 1 & 2
    ScrollTrigger.create({
      trigger: section14Ref.current,
      start: "bottom 100%",
      end: "+=100%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Section 14 animation - no longer controls isWhiteBG
        
        // Phase 1: Initial animation (0-50%) - Original behavior
        if (progress <= 0.5) {
          const phase1Progress = progress / 0.5; // 0 to 1 for phase 1
          const easedLeftProgress = gsap.parseEase("elastic.inOut")(phase1Progress);
          const normalEasedProgress = gsap.parseEase("power4.inOut")(phase1Progress);
          
          // Left text (Column 1) fades in first half
          gsap.set(section14IconRef.current, {
            opacity: easedLeftProgress,
            scale: 0.8 + (0.2 * easedLeftProgress),
            y: 0,
            rotation: -21 + (21 * easedLeftProgress)
          });
          gsap.set(section14Text1Ref.current, {
            opacity: normalEasedProgress,
            y: 30 - (30 * normalEasedProgress)
          });
          
          // Keep right text hidden during first half
          gsap.set(section14Paragraph1Ref.current, { opacity: 0, y: 30 });
          gsap.set(section14Paragraph2Ref.current, { opacity: 0, y: 30 });
          
          // Phone image stays in center
          gsap.set(section14ImageRef.current, { 
            opacity: 1, 
            x: 0 // Center position
          });
        } 
        // Phase 2: Right text fades in second half (50-75%)
        else if (progress <= 0.75) {
          const phase2Progress = (progress - 0.5) / 0.25; // 0 to 1 for phase 2
          const easedPhase2Progress = gsap.parseEase("back.out")(phase2Progress);
          
          // Left text stays at full opacity during phase 2
          gsap.set(section14IconRef.current, { 
            opacity: 1, 
            y: 0
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
          
          // Phone stays in center
          gsap.set(section14ImageRef.current, { 
            opacity: 1, 
            x: 0
          });
        }
        // Phase 3: Phone moves left, paragraph1 moves up and fades, paragraph2 fades in (75-100%)
        else {
          const phase3Progress = (progress - 0.75) / 0.25; // 0 to 1 for phase 3
          const easedPhase3Progress = gsap.parseEase("power3.inOut")(phase3Progress);
          
          // Left text stays at full opacity (no fading out)
          gsap.set(section14IconRef.current, { 
            opacity: 1, 
            y: 0
          });
          gsap.set(section14Text1Ref.current, { 
            opacity: 1, 
            y: 0
          });
          
          // Phone moves to the left and fades with blur
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

    // SECTION 15 ANIMATION (3 columns) - Phase 1, 2 & 3
    ScrollTrigger.create({
      trigger: section15Ref.current,
      start: "bottom 100%",
      end: "+=150%", // Extend the trigger area for scroll control to accommodate phase 3
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Section 15 animation - no longer controls isWhiteBG
        
        // Phase 1: Initial animation (0-25%) - Icon and header fade in
        if (progress <= 0.25) {
          const phase1Progress = progress / 0.25; // 0 to 1 for phase 1
          const easedLeftProgress = gsap.parseEase("elastic.inOut")(phase1Progress);
          const normalEasedProgress = gsap.parseEase("power4.inOut")(phase1Progress);
          
          // Left text (Column 1) fades in first half
          gsap.set(section15IconRef.current, {
            opacity: easedLeftProgress,
            scale: 0.8 + (0.2 * easedLeftProgress),
            y: 0,
            rotation: -21 + (21 * easedLeftProgress)
          });
          gsap.set(section15Text1Ref.current, {
            opacity: normalEasedProgress,
            y: 30 - (30 * normalEasedProgress)
          });
          
          // Keep right text hidden during first half
          gsap.set(section15Paragraph1Ref.current, { opacity: 0, y: 30 });
          gsap.set(section15Paragraph2Ref.current, { opacity: 0, y: 30 });
          gsap.set(section15Column3ImageRef.current, { opacity: 0, y: 30 });
          
          // Phone image stays in center
          gsap.set(section15ImageRef.current, { 
            opacity: 1, 
            x: 0 // Center position
          });
          
          // Keep phase 3 and 4 elements hidden
          gsap.set(section15Phase3IconRef.current, { opacity: 0, scale: 0.8, y: 30, rotation: -21 });
          gsap.set(section15Phase3HeaderRef.current, { opacity: 0, y: 30 });
          gsap.set(section15Phase3PhoneRef.current, { opacity: 0, scale: 0.9, x: 0 });
          gsap.set(section15Phase3TextRef.current, { opacity: 0, y: 30 });
          gsap.set(section15Phase4DImageRef.current, { opacity: 0, y: 30 });
          gsap.set(section15Phase4DTextRef.current, { opacity: 0, y: 30 });
        } 
        // Phase 2: Right content fades in (25-50%)
        else if (progress <= 0.5) {
          const phase2Progress = (progress - 0.25) / 0.25; // 0 to 1 for phase 2
          const easedPhase2Progress = gsap.parseEase("back.out")(phase2Progress);
          
          // Left text stays visible
          gsap.set(section15IconRef.current, { opacity: 1, y: 0 });
          gsap.set(section15Text1Ref.current, { opacity: 1, y: 0 });
          
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
        // Phase 3: Fade out current elements completely (50-65%)
        else if (progress <= 0.65) {
          const phase3Progress = (progress - 0.5) / 0.15; // 0 to 1 for phase 3 (fade out)
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
        // Phase 4: Fade in new elements (65-100%)
        else {
          const phase4Progress = (progress - 0.65) / 0.35; // 0 to 1 for phase 4 (fade in)
          
          // Split phase 4 into four parts: 4A (0-25%), 4B (25-50%), 4C (50-75%), 4D (75-100%)
          if (phase4Progress <= 0.25) {
            // Phase 4A: Icon and header animate in (65-74%)
            const phase4AProgress = phase4Progress / 0.25; // 0 to 1 for phase 4A
            const easedPhase4AProgress = gsap.parseEase("power3.inOut")(phase4AProgress);
            
            // Keep current elements at opacity 0
            gsap.set(section15IconRef.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Text1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Column3ImageRef.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Paragraph1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Paragraph2Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            
            // Animate in icon and header
            gsap.set(section15Phase3IconRef.current, {
              opacity: easedPhase4AProgress,
              scale: 0.8 + (0.2 * easedPhase4AProgress),
              y: 30 - (30 * easedPhase4AProgress),
              rotation: -21 + (21 * easedPhase4AProgress)
            });
            gsap.set(section15Phase3HeaderRef.current, {
              opacity: easedPhase4AProgress,
              y: 30 - (30 * easedPhase4AProgress)
            });
            
            // Keep phone, text, and phase 4D elements hidden
            gsap.set(section15Phase3PhoneRef.current, { opacity: 0, scale: 0.9, x: 0 });
            gsap.set(section15Phase3TextRef.current, { opacity: 0, y: 30 });
            gsap.set(section15Phase4DImageRef.current, { opacity: 0, y: 30 });
            gsap.set(section15Phase4DTextRef.current, { opacity: 0, y: 30 });
          } else if (phase4Progress <= 0.5) {
            // Phase 4B: Phone animates in (74-83%)
            const phase4BProgress = (phase4Progress - 0.25) / 0.25; // 0 to 1 for phase 4B
            const easedPhase4BProgress = gsap.parseEase("power3.inOut")(phase4BProgress);
            
            // Keep current elements at opacity 0
            gsap.set(section15IconRef.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Text1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Column3ImageRef.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Paragraph1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section15Paragraph2Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            
            // Keep icon and header at full opacity
            gsap.set(section15Phase3IconRef.current, { opacity: 1, scale: 1, y: 0, rotation: 0 });
            gsap.set(section15Phase3HeaderRef.current, { opacity: 1, y: 0 });
            
            // Animate in phone
            gsap.set(section15Phase3PhoneRef.current, {
              opacity: easedPhase4BProgress,
              scale: 0.9,
              x: 0
            });
            
            // Keep text and phase 4D elements hidden
            gsap.set(section15Phase3TextRef.current, { opacity: 0, y: 30 });
            gsap.set(section15Phase4DImageRef.current, { opacity: 0, y: 30 });
            gsap.set(section15Phase4DTextRef.current, { opacity: 0, y: 30 });
          } else if (phase4Progress <= 0.75) {
            // Phase 4C: Text animates in (83-92%)
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
            // Phase 4D: Image and text animate in (92-100%)
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

    // SECTION 16 ANIMATION (3 columns) - Phase 1 & 2 (identical to section 14)
    ScrollTrigger.create({
      trigger: section16Ref.current,
      start: "bottom 100%",
      end: "+=100%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Section 16 animation - no longer controls isWhiteBG
        
        // Phase 1: Initial animation (0-50%) - Original behavior
        if (progress <= 0.5) {
          const phase1Progress = progress / 0.5; // 0 to 1 for phase 1
          const easedLeftProgress = gsap.parseEase("elastic.inOut")(phase1Progress);
          const normalEasedProgress = gsap.parseEase("power4.inOut")(phase1Progress);
          
          // Left text (Column 1) fades in first half
          gsap.set(section16IconRef.current, {
            opacity: easedLeftProgress,
            scale: 0.8 + (0.2 * easedLeftProgress),
            y: 0,
            rotation: -21 + (21 * easedLeftProgress)
          });
          gsap.set(section16Text1Ref.current, {
            opacity: normalEasedProgress,
            y: 30 - (30 * normalEasedProgress)
          });
          
          // Keep right text hidden during first half
          gsap.set(section16Paragraph1Ref.current, { opacity: 0, y: 30 });
          gsap.set(section16Paragraph2Ref.current, { opacity: 0, y: 30 });
          
          // Phone image stays in center
          gsap.set(section16ImageRef.current, { 
            opacity: 1, 
            x: 0 // Center position
          });
        } 
        // Phase 2: Right text fades in second half (50-75%)
        else if (progress <= 0.75) {
          const phase2Progress = (progress - 0.5) / 0.25; // 0 to 1 for phase 2
          const easedPhase2Progress = gsap.parseEase("back.out")(phase2Progress);
          
          // Left text stays at full opacity during phase 2
          gsap.set(section16IconRef.current, { 
            opacity: 1, 
            y: 0
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
        // Phase 3: paragraph1 moves up and fades, paragraph2 fades in (75-100%)
        else {
          const phase3Progress = (progress - 0.75) / 0.25; // 0 to 1 for phase 3
          const easedPhase3Progress = gsap.parseEase("power3.inOut")(phase3Progress);
          
          // Left text stays at full opacity (no fading out)
          gsap.set(section16IconRef.current, { 
            opacity: 1, 
            y: 0
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

    // SECTION 17 ANIMATION (3 columns) - Phase 1, 2 & 3
    ScrollTrigger.create({
      trigger: section17Ref.current,
      start: "bottom 100%",
      end: "+=150%", // Extend the trigger area for scroll control to accommodate phase 3
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Section 17 animation - no longer controls isWhiteBG
        
        // Phase 1: Initial animation (0-25%) - Icon and header fade in
        if (progress <= 0.25) {
          const phase1Progress = progress / 0.25; // 0 to 1 for phase 1
          const easedLeftProgress = gsap.parseEase("elastic.inOut")(phase1Progress);
          const normalEasedProgress = gsap.parseEase("power4.inOut")(phase1Progress);
          
          // Left text (Column 1) fades in first half
          gsap.set(section17IconRef.current, {
            opacity: easedLeftProgress,
            scale: 0.8 + (0.2 * easedLeftProgress),
            y: 0,
            rotation: -21 + (21 * easedLeftProgress)
          });
          gsap.set(section17Text1Ref.current, {
            opacity: normalEasedProgress,
            y: 30 - (30 * normalEasedProgress)
          });
          
          // Keep right text hidden during first half
          gsap.set(section17Paragraph1Ref.current, { opacity: 0, y: 30 });
          gsap.set(section17Paragraph2Ref.current, { opacity: 0, y: 30 });
          
          // Phone image stays in center
          gsap.set(section17ImageRef.current, { 
            opacity: 1, 
            x: 0 // Center position
          });
          
          // Keep phase 3 and 4 elements hidden
          gsap.set(section17Phase3IconRef.current, { opacity: 0, scale: 0.8, y: 30, rotation: -21 });
          gsap.set(section17Phase3HeaderRef.current, { opacity: 0, y: 30 });
          gsap.set(section17Phase3PhoneRef.current, { opacity: 0, x: 0 });
          gsap.set(section17Phase3TextRef.current, { opacity: 0, y: 30 });
        } 
        // Phase 2: Right content fades in (25-50%)
        else if (progress <= 0.5) {
          const phase2Progress = (progress - 0.25) / 0.25; // 0 to 1 for phase 2
          const easedPhase2Progress = gsap.parseEase("back.out")(phase2Progress);
          
          // Left text stays visible
          gsap.set(section17IconRef.current, { opacity: 1, y: 0 });
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
        // Phase 3: Fade out current elements completely (50-65%)
        else if (progress <= 0.65) {
          const phase3Progress = (progress - 0.5) / 0.15; // 0 to 1 for phase 3 (fade out)
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
        // Phase 4: Fade in new elements (65-100%)
        else {
          const phase4Progress = (progress - 0.65) / 0.35; // 0 to 1 for phase 4 (fade in)
          
          // Split phase 4 into three parts: 4A (0-33%), 4B (33-66%), 4C (66-100%)
          if (phase4Progress <= 0.33) {
            // Phase 4A: Icon and header animate in (65-76%)
            const phase4AProgress = phase4Progress / 0.33; // 0 to 1 for phase 4A
            const easedPhase4AProgress = gsap.parseEase("power3.inOut")(phase4AProgress);
            
            // Keep current elements at opacity 0
            gsap.set(section17IconRef.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section17Text1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });

            gsap.set(section17Paragraph1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section17Paragraph2Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            
            // Animate in icon and header
            gsap.set(section17Phase3IconRef.current, {
              opacity: easedPhase4AProgress,
              scale: 0.8 + (0.2 * easedPhase4AProgress),
              y: 30 - (30 * easedPhase4AProgress),
              rotation: -21 + (21 * easedPhase4AProgress)
            });
            gsap.set(section17Phase3HeaderRef.current, {
              opacity: easedPhase4AProgress,
              y: 30 - (30 * easedPhase4AProgress)
            });
            
            // Keep phone and text hidden
            gsap.set(section17Phase3PhoneRef.current, { opacity: 0, x: 0 });
            gsap.set(section17Phase3TextRef.current, { opacity: 0, y: 30 });
          } else if (phase4Progress <= 0.66) {
            // Phase 4B: Phone animates in (76-87%)
            const phase4BProgress = (phase4Progress - 0.33) / 0.33; // 0 to 1 for phase 4B
            const easedPhase4BProgress = gsap.parseEase("power3.inOut")(phase4BProgress);
            
            // Keep current elements at opacity 0
            gsap.set(section17IconRef.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section17Text1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section17Paragraph1Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            gsap.set(section17Paragraph2Ref.current, { opacity: 0, y: 0, filter: 'blur(2px)' });
            
            // Keep icon and header at full opacity
            gsap.set(section17Phase3IconRef.current, { opacity: 1, scale: 1, y: 0, rotation: 0 });
            gsap.set(section17Phase3HeaderRef.current, { opacity: 1, y: 0 });
            
            // Animate in phone
            gsap.set(section17Phase3PhoneRef.current, {
              opacity: easedPhase4BProgress,
              x: 0
            });
            
            // Keep text hidden
            gsap.set(section17Phase3TextRef.current, { opacity: 0, y: 30 });
          } else {
            // Phase 4C: Text animates in (87-100%)
            const phase4CProgress = (phase4Progress - 0.66) / 0.34; // 0 to 1 for phase 4C
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

    // SECTION 18 ANIMATION
    ScrollTrigger.create({
      trigger: section18Ref.current,
      start: "bottom 100%",
      end: "+=50%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Each element animates in sequence with 20% delay between them
        const section18Elements = [
          section18Image1Ref.current,    // Error State
          section18Image2Ref.current,    // Live Activity Cards
          section18Image3TopRef.current, // Real-time directional navigation
          section18Image3BottomRef.current, // Step-by-step itinerary
          section18Image4Ref.current     // UWB-powered proximity guidance
        ];
        
        section18Elements.forEach((element, index) => {
          if (element) {
            const elementStart = index * 0.2; // Each element starts 20% later
            const elementEnd = elementStart + 0.2; // Each element has 20% duration
            const elementProgress = Math.max(0, Math.min(1, (progress - elementStart) / (elementEnd - elementStart)));
            
            // Apply easing to the progress value before setting properties
            const easedProgress = gsap.parseEase("back.out")(elementProgress);
            
            gsap.set(element, {
              opacity: easedProgress,
              scale: 0.97 + (0.03 * easedProgress) // Scale from 0.95 to 1.0
            });
            
            // Mark animation as complete when all elements are visible
            if (progress >= 1 && index === section18Elements.length - 1) {
              section18AnimationComplete = true;
            }
          }
        });
      }
    });

    // SECTION 19 ANIMATION
    ScrollTrigger.create({
      trigger: section19Ref.current,
      start: "bottom 100%",
      end: "+=30%", // Extend the trigger area for scroll control
      pin: true, // Pin the section in place
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        
        // Each element animates in sequence with 50% delay between them
        const section19Elements = [
          section19Image1Ref.current,    // Column 1
          section19Image3Ref.current     // Column 3
        ];
        
        section19Elements.forEach((element, index) => {
          if (element) {
            const elementStart = index * 0.5; // Each element starts 50% later
            const elementEnd = elementStart + 0.5; // Each element has 50% duration
            const elementProgress = Math.max(0, Math.min(1, (progress - elementStart) / (elementEnd - elementStart)));
            
            // Apply easing to the progress value before setting properties
            const easedProgress = gsap.parseEase("back.out")(elementProgress);
            
            gsap.set(element, {
              opacity: easedProgress,
              scale: 0.9 + (0.1 * easedProgress) // Scale from 0.97 to 1.0
            });
            
            // Mark animation as complete when all elements are visible
            if (progress >= 1 && index === section19Elements.length - 1) {
              section19AnimationComplete = true;
            }
          }
        });
      }
    });

    // CLEANUP FUNCTION
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      document.body.style.overflow = 'auto';
      
      // Reset section 13 active state when component unmounts
      if (setIsWhiteBG) {
        setIsWhiteBG(false);
      }
    };
  }, [setIsWhiteBG]);

  return (
      <div className={`relative overflow-x-hidden col-span-full -mx-[8%] -mt-36 ${className || ''}`}>

      {/* Section 1 – Title */}
      <section 
        className="h-screen w-full flex items-center justify-center text-white relative overflow-hidden"
      >

        {/* Background Video */}
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
        
        <div className="text-center relative z-10">
          <img 
            src="/subway/lockup.png" 
            alt="NYC Subway Lockup" 
            className="mx-auto ml-6 mb-8 max-w-full h-auto scale-[55%]"
          />
        </div>
      </section>

      {/* Section 2 – Bubbles */}
      <section 
        ref={section2Ref}
        className="min-h-screen flex items-center justify-center relative border-0 border-white/[20%]"
      >
        <div className="w-full mx-auto text-center relative h-screen">
          {/* Text Box */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight w-2/3 mx-auto"
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
            className="absolute bottom-[25%] left-20 w-120 h-auto"
          />
          <img 
            ref={(el) => section2BubbleRefs.current[1] = el}
            src="/subway/bubble4.png" 
            alt="Speech Bubble 2" 
            className="absolute bottom-[60%] left-[8%] w-120 h-auto blur-[1.5px]"
          />
          <img 
            ref={(el) => section2BubbleRefs.current[2] = el}
            src="/subway/bubble3.png" 
            alt="Speech Bubble 3" 
            className="absolute bottom-[70%] right-[30%] w-120 h-auto blur-[2px]"
          />
          <img 
            ref={(el) => section2BubbleRefs.current[3] = el}
            src="/subway/bubble2.png" 
            alt="Speech Bubble 4" 
            className="absolute bottom-[45%] right-[2%] w-120 h-auto blur-[3px]"
          />
          <img 
            ref={(el) => section2BubbleRefs.current[4] = el}
            src="/subway/bubble5.png" 
            alt="Speech Bubble 5" 
            className="absolute bottom-[15%] right-[5%] w-120 h-auto"
          />
        </div>
        
        {/* Bottom middle emoji */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <img 
            src="/subway/section2emoji2.png" 
            alt="Section 1 Emoji" 
            className="max-w-full h-96"
          />
        </div>
      </section>

      {/* Section 3 – Take a Crack at It*/}
      <section 
        ref={section3Ref}
        className="min-h-screen flex items-center justify-center relative border-0 border-white/[20%]"
      >
        <div className="w-full mx-auto text-center relative h-screen">

          {/* Text Box 1 */}
          <div 
            ref={section3Text1Ref}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <h2 className="text-4.5xl font-medium text-foreground tracking-tight">
              We all already knew that.
            </h2>
          </div>
          
          {/* Text Box 2 */}
          <div 
            ref={section3Text2Ref}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
          >
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight">
              However, I decided to take a crack at it.
            </h2>
          </div>
          
        </div>
        
        {/* Bottom middle emoji */}
        <div 
          ref={section3EmojiRef}
          className="absolute bottom-0"
        >
          <img 
            src="/subway/section3emoji.png" 
            alt="Section 3 Emoji" 
            className="max-w-full h-96"
          />
        </div>
      </section>

      {/* Section 4 – Look Inwards */}
      <section 
        ref={section4Ref}
        className="min-h-screen flex items-center justify-center relative"
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
        <div className="w-full ">
           
            {/* Text 1 */}
             <div 
               ref={section4Text1Ref}
               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
             >
                 <p className="text-2xl font-medium text-foreground tracking-tight">So to begin...</p>

             </div>
             
             {/* Text 2 */}
             <div 
               ref={section4Text2Ref}
               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
             >
                 <h2 className="text-4xl md:text-9xl whitespace-nowrap font-semibold text-foreground tracking-tight w-full mt-0">
                    I looked inwards.
                 </h2>
             </div>
        </div>
        
        {/* Bottom middle emoji */}
        <div 
          ref={section4EmojiRef}
          className="absolute bottom-0"
        >
          <img 
            src="/subway/section4emoji.png" 
            alt="Section 4 Emoji" 
            className="max-w-full h-[29rem]"
          />
        </div>
      </section>

      {/* Section 5 – Personal Insights */}
      <section 
        ref={section5Ref}
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-32">
          
          {/* Text Column 1 */}
          <div 
            ref={section5Text1Ref}
            className="text-center md:text-left -mt-10"
          >
            <div className="mb-6">
              <img 
                src="/subway/section5icon1.png" 
                alt="Section 5 Icon 1" 
                className="h-10 dark:invert w-auto"
              />
            </div>
            <h2 className="text-4xl font-semibold tracking-tight mb-6 w-2/3 bg-gradient-to-r from-[#3d9bff] to-[#0067d4] bg-clip-text text-transparent">
                 Making my way downtown. (or not) 
            </h2>
            <p className="text-lg text-foreground leading-7">
            Subway stations can have platforms on opposing sides of the tracks heading uptown/downtown respectively, with tracks running in the middle.

            This, combined with the lack of options for crossing the tracks to get to the platform opposite can result in users entering the wrong platform via the wrong entrance and thus having to exit and re-enter.
            </p>
          </div>
          
          {/* Text Column 2 */}
          <div 
            ref={section5Text2Ref}
            className="text-center md:text-left -mt-10"
          >
            <div className="mb-6">
              <img 
                src="/subway/section5icon2.png" 
                alt="Section 5 Icon 2" 
                className="h-10 dark:invert w-auto"
              />
            </div>
            <h2 className="text-4xl font-semibold tracking-tight mb-6 w-2/3 bg-gradient-to-r from-[#3d9bff] to-[#0067d4] bg-clip-text text-transparent">
              Conduct yourself accordingly.
            </h2>
            <p className="text-lg text-foreground leading-7">
            Train conductors are a reliable source 
            of information as well as safety. 

            They tend to be located in the middle of the train and it is a common sight for commuters to ask the conductors for directions/guidance at stations. 

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
        <div className="w-full">
           
            {/* Text 1 */}
             <div 
               ref={section6Text1Ref}
               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
             >
                 <p className="text-2xl font-medium text-foreground tracking-tight">After which...</p>

             </div>
             
             {/* Text 2 */}
             <div 
               ref={section6Text2Ref}
               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[75%]"
             >
                 <p className="text-4xl md:text-7xl font-semibold text-foreground tracking-tight -mt-20"
                 style={{ lineHeight: '0.9' }}>
                 I looked to someone who knew what he was talking about.
                 </p>
             </div>
        </div>
        
        {/* Bottom middle emoji */}
        <div 
          ref={section6EmojiRef}
          className="absolute bottom-0 right-28"
        >
          <img 
            src="/subway/section6emoji.png" 
            alt="Section 6 Emoji" 
            className="max-w-full h-[24rem]"
          />
        </div>
      </section>

      {/* Section 7 – Sim Hao Jie */}
      <section 
        ref={section7Ref}
        className="min-h-screen flex items-center justify-center relative"
      >

        {/* Container */}
        <div className="w-full text-center">
           
            {/* Text 1 */}
             <div 
               ref={section7Text1Ref}
               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
             >
              <p className="text-7xl font-semibold tracking-tight mx-auto bg-gradient-to-t from-[#ffa46b] to-[#ff5f46] bg-clip-text text-transparent">Sim Hao Jie</p>

             </div>
             
             {/* Text 2 */}
             <div 
               ref={section7Text2Ref}
               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[65%]"
             >
                 <p className="text-3xl font-medium text-foreground -mt-10"
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
            className="max-w-full h-[20rem]"
          />
        </div>
      </section>

      {/* Section 8 – Expert Insights */}
      <section 
        ref={section8Ref}
        className="min-h-screen flex items-center justify-center relative"
      >
        {/* Container */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-10 items-start">
            
            {/* Column 1 - Emoji */}
            <div 
              ref={section8EmojiRef}
              className="flex justify-center items-center -ml-20 mt-[40%]"
            >
              <div className="bg-background dark:border-0 dark:glass-strong drop-shadow-xl w-64 h-64 rounded-full flex items-center justify-center relative">
                <img 
                  ref={section8Emoji1Ref}
                  src="/subway/section7emoji1.png" 
                  alt="Section 7 Emoji 1" 
                  className="max-w-full h-52 absolute inset-0 m-auto"
                />
                <img 
                  ref={section8Emoji2Ref}
                  src="/subway/section7emoji2.png" 
                  alt="Section 7 Emoji 2" 
                  className="max-w-full h-52 absolute inset-0 m-auto"
                />
                <img 
                  ref={section8Emoji3Ref}
                  src="/subway/section7emoji3.png" 
                  alt="Section 7 Emoji 3" 
                  className="max-w-full h-52 absolute inset-0 m-auto"
                />
              </div>
            </div>
            
            {/* Column 2 - Text 1 */}
            <div 
              ref={section8Text1Ref}
              className="flex items-start flex-col"
            >
              <div className="mb-4">
                <img 
                  src="/subway/section7icon1.png" 
                  alt="Safety Icon" 
                  className="h-10 w-auto dark:invert"
                />
              </div>
              <h3 className="text-4.5xl font-semibold dark:font-medium tracking-tight mb-8 bg-gradient-to-t from-[#ffa46b] to-[#ff5f46] bg-clip-text text-transparent py-4">
                Safety
              </h3>
              <p className="text-lg font-medium text-foreground text-left">
              A sense of unease and lack of safety while commuting is exacerbated by the physical environments of certain stations within the system. 
              </p>

              <p className="text-lg font-medium text-foreground text-left mt-8">
              Unclear wayfinding within the system can result in a lack of confidence in navigating the system.
              </p>
            </div>
            
            {/* Column 3 - Text 2 */}
            <div 
              ref={section8Text2Ref}
              className="flex flex-col"
            >
              <div className="mb-4">
                <img 
                  src="/subway/section7icon2.png" 
                  alt="Wayfinding Icon" 
                  className="h-10 w-auto dark:invert"
                />
              </div>
              <h3 className="text-4.5xl font-semibold dark:font-medium tracking-tight mb-10 bg-gradient-to-t from-[#ffa46b] to-[#ff5f46] bg-clip-text text-transparent py-4">
                Wayfinding
              </h3>
              <p className="text-lg font-medium text-foreground text-left">
              Station exits/entrances can be difficult to comprehend for a commuter. 
              </p>

              <p className="text-lg font-medium text-foreground text-left mt-8">
              Exits, in particular, can be confusing as they are labeled by road names and cardinal directions. A Southeast corner can be difficult to discern while underground with no visible landmarks to ground a directional cue like this.
              </p>
            </div>
            
            {/* Column 4 - Text 3 */}
            <div 
              ref={section8Text3Ref}
              className="flex flex-col"
            >
              <div className="mb-4">
                <img 
                  src="/subway/section7icon3.png" 
                  alt="Accessibility Icon" 
                  className="h-10 w-auto dark:invert"
                />
              </div>
              <h3 className="text-4.5xl font-semibold dark:font-medium tracking-tight mb-10 bg-gradient-to-t from-[#ffa46b] to-[#ff5f46] bg-clip-text text-transparent py-4">
                Accessibility
              </h3>
              <p className="text-lg font-medium text-foreground text-left">
              Not all stations within the system are fully accessible.
              </p>

              <p className="text-lg font-medium text-foreground text-left mt-8">
              This has a major impact on commuters with movement disabilities and results in itineraries that differ for most commuters as their needs take into account stations with accessibility. 
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Section 9 – Problem Statement */}
      <section 
        className="h-screen w-full flex items-center justify-center text-white relative overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-auto h-full object-cover z-0"
        >
          <source src="/subway/flyover.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-80 inset-x-96 rounded-[40pt] drop-shadow-2xl bg-white">
          <div className="flex flex-col items-start justify-start pt-8 px-16">
            <img src="/subway/section9icon1.png" alt="Section 9 Icon" className="h-12 w-auto mb-6" />
            <h1 className="text-6xl font-semibold text-black tracking-tight">
              Navigating the NYC subway system comfortably can be challenging.
            </h1>
          </div>
        </div>
      </section>

      {/* Section 10 – How Might We */}
      <section 
        className="min-h-screen flex items-center justify-center relative "
      >
        <div className="w-full mx-auto px-12 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center h-screen">
          
          {/* Left Half - Text Box */}
          <div className="text-center lg:text-left col-span-2 ml-10">
            <h2 className="text-[56pt] font-medium tracking-tight leading-[4.75rem]">
              How Might We<span className="font-extralight">...</span>
            </h2>
            <h2 className="text-[56pt] font-medium tracking-tight mb-6 bg-gradient-to-r from-[#3d9bff] to-[#0067d4] bg-clip-text text-transparent leading-[4.75rem] w-[80%]">
            provide commuters confidence when navigating the system?
            </h2>
          </div>
          
          
          {/* Right Half - Video in Rounded Rectangle */}
          <div className="bg-background dark:border-0 dark:glass-strong drop-shadow-xl rounded-3xl overflow-hidden h-[85%] mr-4 col-span-3">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/subway/flyover.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
          className="bg-white dark:border-0 dark:glass-strong drop-shadow-xl rounded-3xl w-[30%] h-[70%] mx-auto text-center absolute inset-0 m-auto z-10 overflow-hidden"
        >
          {/* Text */}
          <div className="pl-14 pt-12 text-left w-full">
            <img 
              src="/subway/section11icon1.png" 
              alt="Section 11 Icon" 
              className="h-12 w-auto mb-6"/>
            <h2 className="text-[40pt] font-semibold tracking-tight text-left bg-gradient-to-r to-[#3d9bff] from-[#0067d4] leading-[3.5rem] bg-clip-text text-transparent">
              Ultra-Wideband Technology
            </h2>
          </div>
          {/* Phone */}
          <img 
            src="/subway/section11phone2.png" 
            alt="Section 11 Icon" 
            className="w-full h-auto object-cover mt-16 ml-[17%] scale-[120%]"
          />
        </div>
        
        {/* 2nd Rounded Rectangle with 3 Text Columns */}
        <div 
          ref={section11NewRef}
          className="bg-white drop-shadow-xl rounded-3xl w-[65%] h-[52%] mx-auto text-center absolute inset-0 m-auto z-10 overflow-hidden p-11 pl-18"
        >
          {/* Phase 1 Content */}
          <div ref={section11TopParagraphRef} className="text-left mb-16">
            <h2 className="text-6xl font-semibold tracking-tight mb-4 text-black/80">
            Ultra-wide<span className="bg-gradient-to-r from-[#528ee8] to-[#1a78dd] bg-clip-text text-transparent italic -ml-0.5 pr-2">what?</span>
            </h2>
            <p className="text-xl tracking-tight text-black/60 font-semibold w-[90%]">
            Ultra-Wideband (UWB) is a short-range, high-bandwidth wireless communication technology, capable of providing precise spatial awareness and device tracking
            </p>
          </div>
          
          {/* Bottom Text */}
          <div className="flex h-full flex-1 items-start justify-start gap-10">

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

              <p className="text-sm text-gray-700 text-left">
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

              <p className="text-sm text-gray-700 text-left">
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

              <p className="text-sm text-gray-700 text-left">
                UWB also enables better device-to-device awareness, improving AirDrop by detecting which person you're pointing at.
              </p>

            </div>
          </div>
          
          {/* Phase 2 Content - Overlaid on top */}
          <div 
            ref={section11Phase2Ref}
            className="absolute inset-0 p-11 pl-18"
          >
            {/* Top Paragraph */}
            <div ref={section11Phase2TopParagraphRef} className="text-left mb-16">
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

                <p className="text-lg font-medium text-gray-600 text-left leading-7 w-[90%]">
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

                <p className="text-lg font-medium text-gray-600 text-left leading-7 w-[95%]">
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

                <p className="text-lg font-medium text-gray-600 text-left leading-7 w-[80%]">
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
        className="min-h-screen flex items-center justify-center relative bg-white/95"
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
        className="min-h-screen flex items-center justify-center relative bg-white/95"
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
          
          {/* Column 2: Placeholder Image */}
          <div 
            className="flex items-center justify-center relative"
          >
           <img 
                ref={section14ImageRef}
                src="/subway/section14phone1.png" 
                alt="Section 14 Icon" 
                className="scale-90 ml-6 mt-10"
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
        className="min-h-screen flex items-center justify-center relative bg-white/95"
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
          
          {/* Column 2: Placeholder Image */}
          <div 
            className="flex items-center justify-center relative"
          >
           <img 
              ref={section15ImageRef}
              src="/subway/section15phone1.png" 
              alt="Section 15 Icon" 
              className="scale-90 ml-6 mt-10"
              style={{ transformOrigin: 'center' }}
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
              className="h-full w-auto"
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
          
          {/* Phase 3 Column 2: New Phone */}
          <div 
            className="flex items-center justify-center relative"
          >
           <img 
              ref={section15Phase3PhoneRef}
              src="/subway/section15phone2.png" 
              alt="Section 15 Icon" 
              className="w-[82.3%] h-auto mt-0.5 ml-1.5"
              
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
            The station's navigation system guides you to your platform with precision.
            </p>
            
          </div>
          
        </div>
      </section>

      {/* Section 16 – Mock: Along the Platform */}
      <section 
        ref={section16Ref}
        className="min-h-screen flex items-center justify-center relative bg-white/95"
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
        className="min-h-screen flex items-center justify-center relative bg-white/95"
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

      {/* Section 18 – 4 Column Layout */}
      <section 
        ref={section18Ref}
        className="min-h-screen flex items-center justify-center relative bg-white/95"
      >
        <div className="w-full h-screen mx-auto px-20 flex flex-col md:flex-row items-center justify-center gap-6">
          
          {/* Column 1: Rounded Rectangle with Inset Image */}
          <div 
            className="flex-[4] flex flex-col items-center justify-between rounded-[35pt] h-[80%] bg-gray-50 drop-shadow-xl"
            ref={section18Image1Ref}
          >  
            <img 
              src="/subway/section18image1.png" 
              alt="Section 18 Image 1" 
              className="w-[90%] h-auto ml-1 mt-4 object-contain"
              style={{ transformOrigin: 'center' }}
            />

            <p className="text-[18pt] text-center font-semibold text-gray-600 tracking-tight mb-7">
              Error State
            </p>
          </div>
          
          {/* Column 2: Rounded Rectangle with Inset Image */}
          <div 
            className="flex-[4] flex flex-col items-center justify-between rounded-[35pt] h-[80%] bg-gray-50 drop-shadow-xl"
            ref={section18Image2Ref}
          >
            <img 
              src="/subway/section18image2.png" 
              alt="Section 18 Image 2" 
              className="w-[90%] h-auto ml-1 mt-4 object-contain"
              style={{ transformOrigin: 'center' }}
            />

            <p className="text-[18pt] text-center font-semibold text-gray-600 tracking-tight mb-7">
              Live Activity Cards
            </p>
          </div>
          
          {/* Column 3: 2 Stacked Images */}
          <div 
            className="flex-[3] h-[80%] flex flex-col items-center justify-center space-y-5"
          >
            <div 
            ref={section18Image3TopRef}
            className="flex flex-col items-center justify-between w-full h-full bg-white rounded-3xl drop-shadow-xl">
              <img 
                src="/subway/section18image3top.png" 
                alt="Section 18 Image 3 Top" 
                className="w-[90%] mt-4 h-auto"
                style={{ transformOrigin: 'center' }}
              />
              <p className="text-[16pt] text-center font-semibold text-gray-600 tracking-tight mb-6 w-[80%]">
                Real-time directional navigation
              </p>
            </div>

            <div 
            ref={section18Image3BottomRef}
            className="flex flex-col items-center justify-between w-full h-full bg-white rounded-3xl drop-shadow-xl">
              <img 
                src="/subway/section18image3bottom.png" 
                alt="Section 18 Image 3 Bottom" 
                className="w-[90%] mt-4 h-auto"
                style={{ transformOrigin: 'center' }}
              />
              <p className="text-[16pt] text-center font-semibold text-gray-600 tracking-tight mb-6">
                Step-by-step itinerary
              </p>
            </div>
          </div>
          
          {/* Column 4: Image */}
            <div 
              className="flex-[4] flex flex-col items-center justify-between rounded-[35pt] h-[80%] bg-gray-50 drop-shadow-xl"
              ref={section18Image4Ref}
            >
            <img 
              src="/subway/section18image4.png" 
              alt="Section 18 Image 4" 
              className="w-[90%] h-auto ml-1 mt-6 object-contain"
              style={{ transformOrigin: 'center' }}
            />

            <p className="text-[18pt] text-center font-semibold text-gray-600 tracking-tight mb-6 leading-6 w-[80%]">
              UWB-powered proximity guidance
            </p>

          </div>

          
          
        </div>
      </section>

      {/* Section 19 – 3 Columns with 3 Images */}
      <section 
        ref={section19Ref}
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="w-full h-screen mx-auto px-56 flex flex-col md:flex-row items-center justify-between gap-8 bg-white/95">
          
          {/* Column 1: Image */}

          <img 
          ref={section19Image1Ref}
          src="/subway/section19logo1.png"   
          alt="Section 19 Image 1" 
          className="flex-2 w-[30%] h-auto"
          />
          
          {/* Column 2: Image */}
          <img 
          ref={section19Image2Ref}
          src="/subway/section19emoji.png"   
          alt="Section 19 Image 2" 
          className="absolute bottom-0 left-[55%] transform -translate-x-1/2 w-[38%] h-auto"
          />
          
          {/* Column 3: Image */}
          <img 
          ref={section19Image3Ref}
          src="/subway/section19logo2.png"   
          alt="Section 19 Image 3" 
          className="flex-2 w-[10%] h-auto"
          />
          
        </div>
      </section>

      
    </div>
  );
};

export default NycSubway;
