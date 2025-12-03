'use client'

import * as motion from "framer-motion/client"
import { AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import CornerArrow from '../ui/CornerArrow.js';
import OptimizedVideo from '../ui/OptimizedVideo.js';

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.2, duration:0.5, ease:"easeOut"}
    }
}

const Currently = ({className, toggleWork, useOptimizedVideos = true}) => {
  const router = useRouter();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isBloomTooltipVisible, setIsBloomTooltipVisible] = useState(false);
  
  // Motion values for physics-based animation - First tooltip (title)
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const tooltipX = useSpring(cursorX, { stiffness: 300, damping: 30 });
  const tooltipY = useSpring(cursorY, { stiffness: 300, damping: 30 });
  
  // Convert motion values to pixel strings for left/top positioning
  const tooltipXpx = useTransform(tooltipX, (value) => `${value}px`);
  const tooltipYpx = useTransform(tooltipY, (value) => `${value}px`);
  
  // Rotation based on movement direction - First tooltip
  const rotation = useMotionValue(0);
  const springRotation = useSpring(rotation, { stiffness: 400, damping: 25 });
  
  // Motion values for second bubble (description) - Independent physics
  const descriptionX = useSpring(cursorX, { stiffness: 250, damping: 35 });
  const descriptionY = useSpring(cursorY, { stiffness: 250, damping: 35 });
  
  // Convert description motion values to pixel strings
  const descriptionXpx = useTransform(descriptionX, (value) => `${value}px`);
  const descriptionYpx = useTransform(descriptionY, (value) => `${value + 85}px`); // Offset 50px below
  
  // Rotation for description bubble - Independent
  const descriptionRotation = useMotionValue(0);
  const springDescriptionRotation = useSpring(descriptionRotation, { stiffness: 350, damping: 30 });
  
  // Bloom tooltip motion values - Three bubbles with independent physics
  const bloomCursorX = useMotionValue(0);
  const bloomCursorY = useMotionValue(0);
  const bloomTitleX = useSpring(bloomCursorX, { stiffness: 300, damping: 30 });
  const bloomTitleY = useSpring(bloomCursorY, { stiffness: 300, damping: 30 });
  const bloomSubtitleX = useSpring(bloomCursorX, { stiffness: 250, damping: 35 });
  const bloomSubtitleY = useSpring(bloomCursorY, { stiffness: 250, damping: 35 });
  const bloomDescX = useSpring(bloomCursorX, { stiffness: 220, damping: 40 });
  const bloomDescY = useSpring(bloomCursorY, { stiffness: 220, damping: 40 });
  
  // Convert Bloom motion values to pixel strings
  const bloomTitleXpx = useTransform(bloomTitleX, (value) => `${value}px`);
  const bloomTitleYpx = useTransform(bloomTitleY, (value) => `${value}px`);
  const bloomSubtitleXpx = useTransform(bloomSubtitleX, (value) => `${value}px`);
  const bloomSubtitleYpx = useTransform(bloomSubtitleY, (value) => `${value + 35}px`);
  const bloomDescXpx = useTransform(bloomDescX, (value) => `${value}px`);
  const bloomDescYpx = useTransform(bloomDescY, (value) => `${value + 100}px`);
  
  // Bloom rotations - Independent
  const bloomTitleRotation = useMotionValue(0);
  const bloomSubtitleRotation = useMotionValue(0);
  const bloomDescRotation = useMotionValue(0);
  const springBloomTitleRotation = useSpring(bloomTitleRotation, { stiffness: 400, damping: 25 });
  const springBloomSubtitleRotation = useSpring(bloomSubtitleRotation, { stiffness: 350, damping: 30 });
  const springBloomDescRotation = useSpring(bloomDescRotation, { stiffness: 300, damping: 35 });
  
  // Track previous position for velocity calculation
  const prevPosRef = useRef({ x: 0, y: 0 });
  const lastUpdateRef = useRef(Date.now());
  const hideTimeoutRef = useRef(null);
  const bloomPrevPosRef = useRef({ x: 0, y: 0 });
  const bloomLastUpdateRef = useRef(Date.now());
  const bloomHideTimeoutRef = useRef(null);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      if (bloomHideTimeoutRef.current) {
        clearTimeout(bloomHideTimeoutRef.current);
      }
    };
  }, []);
  
  const handleMouseMove = (e) => {
    if (typeof window === 'undefined') return;
    
    const tooltipOffset = 20;
    const tooltipWidth = 350; // Approximate width of tooltip
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const now = Date.now();
    const deltaTime = Math.max(now - lastUpdateRef.current, 1); // Prevent division by zero
    lastUpdateRef.current = now;
    
    let targetX = e.clientX + tooltipOffset;
    let targetY = e.clientY;
    
    // Prevent tooltip from going off right edge (no flip, just constrain to edge)
    const tooltipHalfWidth = tooltipWidth / 2;
    if (targetX + tooltipHalfWidth > viewportWidth) {
      targetX = viewportWidth - tooltipHalfWidth;
    }
    
    // Prevent tooltip from going off left edge
    if (targetX - tooltipHalfWidth < 0) {
      targetX = tooltipHalfWidth;
    }
    
    // Prevent tooltip from going off bottom edge
    if (targetY + 30 > viewportHeight) {
      targetY = viewportHeight - 30;
    }
    
    // Prevent tooltip from going off top edge
    if (targetY - 30 < 0) {
      targetY = 30;
    }
    
    // Calculate velocity for rotation
    const deltaX = targetX - prevPosRef.current.x;
    const deltaY = targetY - prevPosRef.current.y;
    const velocityX = deltaX / deltaTime;
    const speed = Math.sqrt(velocityX * velocityX + (deltaY / deltaTime) ** 2);
    
    // Calculate rotation based on horizontal movement direction and speed
    // Tilt right when moving right, left when moving left
    const maxRotation = 10; // degrees
    const rotationIntensity = Math.min(speed * 0.3, 1); // Normalize to 0-1
    
    // Calculate rotation: positive for right movement, negative for left
    // Mix with slight vertical influence for more natural feel
    const horizontalInfluence = Math.sign(velocityX) || 0;
    const verticalInfluence = Math.sign(deltaY) * 0.3; // Subtle vertical tilt
    
    // Apply rotation with intensity based on speed
    const rotationValue = (horizontalInfluence + verticalInfluence) * maxRotation * rotationIntensity;
    rotation.set(Math.max(-maxRotation, Math.min(maxRotation, rotationValue)));
    
    // Apply independent rotation to description bubble (slightly different for natural feel)
    const descriptionRotationValue = (horizontalInfluence + verticalInfluence * 0.5) * maxRotation * rotationIntensity * 0.8;
    descriptionRotation.set(Math.max(-maxRotation, Math.min(maxRotation, descriptionRotationValue)));
    
    // Update cursor position (this will trigger spring animation for both bubbles)
    cursorX.set(targetX);
    cursorY.set(targetY);
    
    // Update previous position
    prevPosRef.current = { x: targetX, y: targetY };
  };
  
  const handleBloomMouseMove = (e) => {
    if (typeof window === 'undefined') return;
    
    const tooltipOffset = 20;
    const tooltipWidth = 350;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const now = Date.now();
    const deltaTime = Math.max(now - bloomLastUpdateRef.current, 1);
    bloomLastUpdateRef.current = now;
    
    let targetX = e.clientX + tooltipOffset;
    let targetY = e.clientY;
    
    // Prevent tooltip from going off right edge (no flip, just constrain to edge)
    const tooltipHalfWidth = tooltipWidth / 2;
    if (targetX + tooltipHalfWidth > viewportWidth) {
      targetX = viewportWidth - tooltipHalfWidth;
    }
    
    // Prevent tooltip from going off left edge
    if (targetX - tooltipHalfWidth < 0) {
      targetX = tooltipHalfWidth;
    }
    
    // Prevent tooltip from going off bottom edge
    if (targetY + 30 > viewportHeight) {
      targetY = viewportHeight - 30;
    }
    
    // Prevent tooltip from going off top edge
    if (targetY - 30 < 0) {
      targetY = 30;
    }
    
    // Calculate velocity for rotation based on actual cursor movement (not adjusted position)
    const cursorDeltaX = e.clientX - bloomPrevPosRef.current.x;
    const cursorDeltaY = e.clientY - bloomPrevPosRef.current.y;
    const velocityX = cursorDeltaX / deltaTime;
    const speed = Math.sqrt(velocityX * velocityX + (cursorDeltaY / deltaTime) ** 2);
    
    // Calculate rotation based on horizontal movement direction and speed
    const maxRotation = 10;
    const rotationIntensity = Math.min(speed * 0.3, 1);
    const horizontalInfluence = Math.sign(velocityX) || 0;
    const verticalInfluence = Math.sign(cursorDeltaY) * 0.3;
    
    // Apply rotation with intensity based on speed - Different for each bubble
    const titleRotationValue = (horizontalInfluence + verticalInfluence) * maxRotation * rotationIntensity;
    const subtitleRotationValue = (horizontalInfluence + verticalInfluence * 0.5) * maxRotation * rotationIntensity * 0.8;
    const descRotationValue = (horizontalInfluence + verticalInfluence * 0.3) * maxRotation * rotationIntensity * 0.6;
    
    bloomTitleRotation.set(Math.max(-maxRotation, Math.min(maxRotation, titleRotationValue)));
    bloomSubtitleRotation.set(Math.max(-maxRotation, Math.min(maxRotation, subtitleRotationValue)));
    bloomDescRotation.set(Math.max(-maxRotation, Math.min(maxRotation, descRotationValue)));
    
    // Update cursor position (this will trigger spring animation for all three bubbles)
    bloomCursorX.set(targetX);
    bloomCursorY.set(targetY);
    
    // Update previous position - store actual cursor position for velocity calculation
    bloomPrevPosRef.current = { x: e.clientX, y: e.clientY };
  };
  
  return (
    <motion.div
    className={`font-[family-name:var(--font-geist-sans)] relative w-full mt-4 md:mt-8 grid grid-cols-2 md:grid-cols-8 gap-2 md:gap-4 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

      {/* Subway */}
      <motion.div className="col-span-full md:col-span-5 group cursor-pointer h-full relative group mb-4">

        {/* Video Container with Corner Arrow */}
        <motion.div 
          className="relative col-span-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background rounded-3xl"
          role="button"
          tabIndex={0}
          aria-label="Enhanced Subway Navigation with Apple Maps"
          aria-describedby="subway-description-tooltip"
          whileHover={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 1000, 
            damping: 15, 
          }}
          onMouseEnter={(e) => {
            // Clear any pending hide timeout
            if (hideTimeoutRef.current) {
              clearTimeout(hideTimeoutRef.current);
              hideTimeoutRef.current = null;
            }
            
            setIsTooltipVisible(true);
            // Initialize position immediately on enter
            if (typeof window !== 'undefined') {
              const tooltipOffset = 20;
              const targetX = e.clientX + tooltipOffset;
              const targetY = e.clientY;
              cursorX.set(targetX);
              cursorY.set(targetY);
              prevPosRef.current = { x: targetX, y: targetY };
              rotation.set(0);
              descriptionRotation.set(0);
            }
          }}
          onMouseLeave={() => {
            // Clear any existing timeout
            if (hideTimeoutRef.current) {
              clearTimeout(hideTimeoutRef.current);
              hideTimeoutRef.current = null;
            }
            
            setIsTooltipVisible(false);
            rotation.set(0); // Reset rotation on leave
            descriptionRotation.set(0); // Reset description rotation on leave
          }}
          onFocus={(e) => {
            // Show tooltip on keyboard focus
            if (hideTimeoutRef.current) {
              clearTimeout(hideTimeoutRef.current);
              hideTimeoutRef.current = null;
            }
            
            setIsTooltipVisible(true);
            // Position tooltip relative to focused element (center it)
            if (typeof window !== 'undefined' && e.currentTarget) {
              const rect = e.currentTarget.getBoundingClientRect();
              const tooltipOffset = 20;
              const targetX = rect.left + rect.width / 2 + tooltipOffset;
              const targetY = rect.top + rect.height / 2;
              cursorX.set(targetX);
              cursorY.set(targetY);
              prevPosRef.current = { x: targetX, y: targetY };
              rotation.set(0);
              descriptionRotation.set(0);
            }
          }}
          onBlur={() => {
            // Hide tooltip on blur
            if (hideTimeoutRef.current) {
              clearTimeout(hideTimeoutRef.current);
              hideTimeoutRef.current = null;
            }
            
            setIsTooltipVisible(false);
            rotation.set(0);
            descriptionRotation.set(0);
          }}
          onMouseMove={handleMouseMove}
          onClick={() => {
            router.push('/subway');
          }}
          onKeyDown={(e) => {
            // Allow activation with Enter or Space
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              router.push('/subway');
            }
          }}
          >

          {/* Corner Arrow */}
          <CornerArrow />

          {/* Video */}
          <motion.div className="rounded-3xl w-full col-span-full h-[250px] lg:h-[420px] 2xl:h-[520px] relative overflow-hidden border-b-1 border-white/15">
              <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] 
              pointer-events-none mix-blend-overlay z-10"/>
              <video 
                videoId="currently-subway"
                src="/subway/cover_blank.mp4"
                className="rounded-[16pt] md:rounded-3xl w-full h-full object-cover contrast-125 brightness-90"
                autoPlay
                muted
                loop
                playsInline
                poster="/poster/subwaylandscape.jpg"
              />

              {/* Lockup */}
              <img 
                src="/subway/lockup.png"
                alt="Subway lockup"
                className="absolute top-1/2 left-[52.5%] transform -translate-x-1/2 -translate-y-1/2 z-20 max-w-[60%] h-auto object-contain"
              />
          </motion.div>

        </motion.div>

      </motion.div>

      {/* Bloom */}
      <motion.div className="col-span-1 md:col-span-3 group cursor-pointer h-full relative group mb-4">

        {/* Video Container with Corner Arrow */}
        <motion.div 
          className="relative col-span-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background rounded-3xl"
          role="button"
          tabIndex={0}
          aria-label="Bloom"
          aria-describedby="bloom-description-tooltip"
          whileHover={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 1000, 
            damping: 15, 
          }}
          onMouseEnter={(e) => {
            if (bloomHideTimeoutRef.current) {
              clearTimeout(bloomHideTimeoutRef.current);
              bloomHideTimeoutRef.current = null;
            }
            
            setIsBloomTooltipVisible(true);
            if (typeof window !== 'undefined') {
              const tooltipOffset = 20;
              const targetX = e.clientX + tooltipOffset;
              const targetY = e.clientY;
              bloomCursorX.set(targetX);
              bloomCursorY.set(targetY);
              bloomPrevPosRef.current = { x: e.clientX, y: e.clientY };
              bloomTitleRotation.set(0);
              bloomSubtitleRotation.set(0);
              bloomDescRotation.set(0);
            }
          }}
          onMouseLeave={() => {
            if (bloomHideTimeoutRef.current) {
              clearTimeout(bloomHideTimeoutRef.current);
              bloomHideTimeoutRef.current = null;
            }
            
            setIsBloomTooltipVisible(false);
            bloomTitleRotation.set(0);
            bloomSubtitleRotation.set(0);
            bloomDescRotation.set(0);
          }}
          onFocus={(e) => {
            if (bloomHideTimeoutRef.current) {
              clearTimeout(bloomHideTimeoutRef.current);
              bloomHideTimeoutRef.current = null;
            }
            
            setIsBloomTooltipVisible(true);
            if (typeof window !== 'undefined' && e.currentTarget) {
              const rect = e.currentTarget.getBoundingClientRect();
              const tooltipOffset = 20;
              const targetX = rect.left + rect.width / 2 + tooltipOffset;
              const targetY = rect.top + rect.height / 2;
              bloomCursorX.set(targetX);
              bloomCursorY.set(targetY);
              // Store center position for focus - no cursor movement on focus
              bloomPrevPosRef.current = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
              bloomTitleRotation.set(0);
              bloomSubtitleRotation.set(0);
              bloomDescRotation.set(0);
            }
          }}
          onBlur={() => {
            if (bloomHideTimeoutRef.current) {
              clearTimeout(bloomHideTimeoutRef.current);
              bloomHideTimeoutRef.current = null;
            }
            
            setIsBloomTooltipVisible(false);
            bloomTitleRotation.set(0);
            bloomSubtitleRotation.set(0);
            bloomDescRotation.set(0);
          }}
          onMouseMove={handleBloomMouseMove}
          onClick={() => window.open('https://www.figma.com/deck/zX29aRXmKQE1orzfgvwDqN', '_blank')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              window.open('https://www.figma.com/deck/zX29aRXmKQE1orzfgvwDqN', '_blank');
            }
          }}
          >
            
          {/* Corner Arrow */}
          <CornerArrow />

          {/* Video */}
          <motion.div className="rounded-[16pt] md:rounded-3xl w-full col-span-full h-[250px] lg:h-[420px] 2xl:h-[520px] relative overflow-hidden border-b-1 border-white/15">
              <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] pointer-events-none mix-blend-overlay z-10"/>

              {/* WIP Overlay */}
              {/* <div className="absolute inset-0 flex flex-col items-center justify-center w-[80%] mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300 z-40">
                <h1 className="z-20 text-white text-xl md:text-3xl tracking-tight leading-[1] w-[80%] font-medium text-center">Project page is currently work in progress.</h1>
                <p className="z-20 text-white text-xxs md:text-sm leading-[1.2] w-[90%] font-medium text-center mt-4">Check back soon! <br/>Click to be directed to the project deck.</p>
              </div> */}

              {/* Video */}
              <video 
                videoId="currently-subway"
                src="/bloom/cover.mp4"
                className="rounded-[16pt] md:rounded-3xl w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/poster/subwaylandscape.jpg"
              />
          </motion.div>

        </motion.div>
      </motion.div>

      {/* ISV */}
      <motion.div className="col-span-1 md:col-span-4 h-full relative md:mb-4 group">

        {/* Video Container with Corner Arrow */}
        <motion.div 
          className="relative col-span-full cursor-pointer"
          whileHover={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 1000, 
            damping: 15, 
          }}
          onClick={() => {
            router.push('/isv');
          }}
          >
            
          {/* Corner Arrow */}
          <CornerArrow />

          {/* Lockup */}
          <img src="/isv/logo.png" className="absolute md:right-5 md:bottom-5 right-3 bottom-3 w-8 md:w-20 h-auto z-20 opacity-50" />

          {/* Video */}
          <motion.div className="rounded-[16pt] md:rounded-3xl w-full col-span-full h-[250px] lg:h-[420px] 2xl:h-[450px] relative overflow-hidden border-b-1 border-white/15">
              <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_8px_0px_rgba(255,255,255,1)] pointer-events-none mix-blend-overlay z-10"/>

              {/* WIP Overlay */}
              {/* <div className="absolute inset-0 flex flex-col items-center justify-center w-[80%] mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300 z-40">
                <h1 className="z-20 text-white text-2xl md:text-3xl tracking-tight leading-[1] w-[60%] font-medium text-center">Project page is currently work in progress.</h1>
                <p className="z-20 text-white text-xs md:text-sm font-medium text-center leading-[1.4] mt-4">Check back soon! <br/>Click to watch the film.</p>
              </div> */}

              <video 
                videoId="currently-isv"
                src="/isv/cover_2.mp4"
                className="rounded-[16pt] md:rounded-3xl w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/poster/isv.png"
              />
          </motion.div>

        </motion.div>

        {/* Header and Description Container */}
        <div className="grid grid-cols-3 mb-8 mt-4 md:mt-8">

          <div className='ml-1 text-foreground col-span-full md:col-span-1'>

            <h1 className="tracking-[-0.5pt] md:tracking-[-0.8pt] font-medium text-lg md:text-[16pt] md:group-hover:ml-3 transition-all duration-200 leading-tight md:leading-6">
              Singapore Airlines In-Flight Safety Video
            </h1>
            
          </div>

          {/* Description Container */}
          <div className='ml-1 text-foreground col-span-full md:col-span-2 '>
            
            <h3 className={`opacity-60 mt-3 md:mt-0 col-span-2 md:col-span-2 md:group-hover:opacity-100 transition-all duration-300 tracking-normal md:pr-10 text-xs md:text-sm md:leading-tight`}>
            Singapore Airlines' 2025 In-Flight Safety Video that takes passengers on a journey through Singapore’s iconic landmarks and most importantly, diverse communities.
            </h3>

          </div>
        </div>
      </motion.div>

      {/* Expense Tracker */}
      <motion.div className="col-span-1 md:col-span-2 cursor-pointer transition-all duration-200 h-full group mb-8 md:mb-0"
      >
        {/* Video Container with Corner Arrow */}
        <motion.div 
          className="relative col-span-full cursor-pointer"
          whileHover={{ scale: 0.97 }}
          transition={{
            type: "spring",
            stiffness: 1200, 
            damping: 22, 
          }}
          onClick={() => {
            window.open('https://ithinkitschris.notion.site/local-expense-tracker', '_blank');
          }}>
            

          {/* Corner Arrow */}
          <CornerArrow />

          {/* Video */}
          <motion.div className="rounded-[16pt] md:rounded-3xl w-full col-span-full h-[250px] lg:h-[420px] 2xl:h-[450px] relative overflow-hidden border-b-1 border-white/15">
              <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] 
              pointer-events-none mix-blend-overlay z-10"/>
              <OptimizedVideo 
                videoId="currently-expense"
                src="/expense/cover.mp4"
                className="rounded-[16pt] md:rounded-3xl w-full h-full object-cover object-[0%_10%]"
                autoPlay
                muted
                loop
                playsInline
                poster="/poster/expense.png"
                useOptimized={useOptimizedVideos}
              />
          </motion.div>

        </motion.div>
        
        {/* Header Container */}
        <div className='ml-1 mt-4 md:mt-8 text-foreground col-span-full md:col-span-1'>
          
          <h1 className={`tracking-tight font-medium text-lg md:text-[15pt] md:group-hover:ml-3 transition-all duration-200 leading-tight md:leading-[1.25]`}>
            On-device LLM Expense Tracker (iOS)
          </h1>

          <h3 className={`mt-4 opacity-60 md:group-hover:opacity-100 md:group-hover:ml-3 transition-all duration-300 tracking-normal md:pr-10 text-xs md:text-sm md:leading-tight`}>
            A personal project into developing and designing an on-device LLM-powered personal expense tracker for iOS using React Native, FastAPI, Ollama and Gemma3n:e2b.
          </h3>

        </div>
        
      </motion.div>

      {/* Car */}
      <motion.div className="col-span-1 md:col-span-2 cursor-pointer transition-all duration-200 h-full group"
      >
        {/* Video Container with Corner Arrow */}
        <motion.div 
          className="relative"
          whileHover={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 1200, 
            damping: 22, 
          }}
          onClick={() => {
            toggleWork('car')
          }}>
            

          {/* Corner Arrow */}
          <CornerArrow />

          {/* Video */}
          <motion.div className="rounded-[16pt] md:rounded-3xl w-full col-span-full h-[250px] lg:h-[420px] 2xl:h-[450px] relative overflow-hidden border-b-1 border-white/15">
              <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] 
              pointer-events-none mix-blend-overlay z-10"/>
              <OptimizedVideo 
                videoId="currently-car"
                src="/currently/car.mp4"
                className="rounded-[16pt] md:rounded-3xl w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/poster/car.png"
                useOptimized={useOptimizedVideos}
              />
          </motion.div>

        </motion.div>
        
      
        {/* Header Container */}
        <div className='ml-1 mt-4 md:mt-8 text-foreground col-span-full md:col-span-1'>
          
          <h1 className={`tracking-tight font-medium text-lg md:text-[15pt] md:group-hover:ml-3 transition-all duration-200 leading-tight md:leading-[1.25]`}>
            Human Car(mputer) Interaction
          </h1>

          <h3 className={`mt-4 opacity-60 md:group-hover:opacity-100 md:group-hover:ml-3 transition-all duration-300 tracking-normal md:pr-10 text-xs md:text-sm md:leading-tight md:w-4/5`}>
            A deep dive into the Human Computer Interaction of the automobile through the lens of design history.
          </h3>

        </div>
        
      </motion.div>

      {/* Tooltips - Outside container to ensure proper z-index stacking */}
      <AnimatePresence>
        {isTooltipVisible && (
          <>
            {/* First tooltip - Title */}
            <motion.div
              id="subway-title-tooltip"
              role="tooltip"
              aria-live="polite"
              className="fixed pointer-events-none z-[9999] rounded-[20pt] px-5 py-3 border-b-1 border-r-1.5 text-sm lg:text-[20px] font-semibold tracking-[-0.2pt]  bg-background max-w-[320px] leading-[1.1] border-foreground/10 text-foreground dark:bg-transparent dark:border-white/15 dark:text-white drop-shadow-xl backdrop-blur-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 30,
                duration: 0.1
              }}
              style={{
                left: tooltipXpx,
                top: tooltipYpx,
                rotate: springRotation,
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
              }}
            >
              Enhanced Subway Navigation with Apple Maps
            </motion.div>
            
            {/* Second tooltip - Description (smaller, independent physics) */}
            <motion.div
              id="subway-description-tooltip"
              role="tooltip"
              aria-live="polite"
              className="fixed pointer-events-none z-[9998] rounded-[20pt] pl-6 pr-5 py-4 border-b-1.5 border-r-1.5 text-xs lg:text-[13px] font-medium tracking-[-0.1pt] max-w-[360px] bg-background border-foreground/10 text-foreground dark:bg-transparent dark:border-white/10 dark:text-white drop-shadow-lg backdrop-blur-3xl leading-[1.5]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 30,
                duration: 0.1
              }}
              style={{
                left: descriptionXpx,
                top: descriptionYpx,
                rotate: springDescriptionRotation,
                transform: 'translate(-50%, -50%)',
                zIndex: 9998,
              }}
            >
              A hypothetical project that enhances navigation within the NYC Subway system by providing precise turn-by-turn navigation within Apple Maps, powered by Ultra-Wideband (UWB) technology.
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bloom Tooltips */}
      <AnimatePresence>
        {isBloomTooltipVisible && (
          <>
            {/* First tooltip - Title */}
            <motion.div
              id="bloom-title-tooltip"
              role="tooltip"
              aria-live="polite"
              className="fixed pointer-events-none z-[9999] rounded-[20pt] px-5 py-2 border-1.5 text-sm lg:text-[22px] font-semibold tracking-[-0.2pt] bg-background max-w-[300px] border-foreground/10 text-foreground dark:bg-transparent dark:border-white/25 dark:text-white drop-shadow-xl backdrop-blur-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 30,
                duration: 0.1
              }}
              style={{
                left: bloomTitleXpx,
                top: bloomTitleYpx,
                rotate: springBloomTitleRotation,
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
              }}
            >
              Bloom
            </motion.div>
            
            {/* Second tooltip - Stanford subtitle */}
            <motion.div
              id="bloom-subtitle-tooltip"
              role="tooltip"
              aria-live="polite"
              className="fixed pointer-events-none z-[9998] rounded-[20pt] px-4 py-2 border-1.5 text-xs lg:text-[13px] font-semibold tracking-[-0.1pt] max-w-[220px] bg-background border-foreground/10 text-foreground dark:bg-transparent dark:border-white/15 dark:text-white drop-shadow-lg backdrop-blur-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 30,
                duration: 0.1
              }}
              style={{
                left: bloomSubtitleXpx,
                top: bloomSubtitleYpx,
                rotate: springBloomSubtitleRotation,
                transform: 'translate(-50%, -50%)',
                zIndex: 9998,
              }}
            >
              Stanford Longevity Design Challenge – First Place
            </motion.div>
            
            {/* Third tooltip - Description */}
            <motion.div
              id="bloom-description-tooltip"
              role="tooltip"
              aria-live="polite"
              className="fixed pointer-events-none z-[9997] rounded-[20pt] pl-6 pr-4 py-4 border-1.5 text-xs lg:text-[13px] font-medium tracking-[-0.1pt] max-w-[290px] bg-background border-foreground/10 text-foreground dark:bg-transparent dark:border-white/10 dark:text-white drop-shadow-lg backdrop-blur-3xl leading-[1.5]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 30,
                duration: 0.1
              }}
              style={{
                left: bloomDescXpx,
                top: bloomDescYpx,
                rotate: springBloomDescRotation,
                transform: 'translate(-50%, -50%)',
                zIndex: 9997,
              }}
            >
              The first digital tool that helps young Korean adults discover meaningful career paths by exploring their strengths and interests in a playful and social way.
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </motion.div>  

  );
};

export default Currently;