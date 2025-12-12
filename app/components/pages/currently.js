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
  const [isExpenseTooltipVisible, setIsExpenseTooltipVisible] = useState(false);
  const [isIsvTooltipVisible, setIsIsvTooltipVisible] = useState(false);
  const [isThesisTooltipVisible, setIsThesisTooltipVisible] = useState(false);
  
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
  const descriptionYpx = useTransform(descriptionY, (value) => `${value + 95}px`); // Offset 50px below
  
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
  const bloomSubtitleYpx = useTransform(bloomSubtitleY, (value) => `${value + 42}px`);
  const bloomDescXpx = useTransform(bloomDescX, (value) => `${value}px`);
  const bloomDescYpx = useTransform(bloomDescY, (value) => `${value + 115}px`);
  
  // Bloom rotations - Independent
  const bloomTitleRotation = useMotionValue(0);
  const bloomSubtitleRotation = useMotionValue(0);
  const bloomDescRotation = useMotionValue(0);
  const springBloomTitleRotation = useSpring(bloomTitleRotation, { stiffness: 400, damping: 25 });
  const springBloomSubtitleRotation = useSpring(bloomSubtitleRotation, { stiffness: 350, damping: 30 });
  const springBloomDescRotation = useSpring(bloomDescRotation, { stiffness: 300, damping: 35 });
  
  // Expense tooltip motion values - Three bubbles with independent physics
  const expenseCursorX = useMotionValue(0);
  const expenseCursorY = useMotionValue(0);
  const expenseTitleX = useSpring(expenseCursorX, { stiffness: 300, damping: 30 });
  const expenseTitleY = useSpring(expenseCursorY, { stiffness: 300, damping: 30 });
  const expenseSubtitleX = useSpring(expenseCursorX, { stiffness: 250, damping: 35 });
  const expenseSubtitleY = useSpring(expenseCursorY, { stiffness: 250, damping: 35 });
  const expenseDescX = useSpring(expenseCursorX, { stiffness: 220, damping: 40 });
  const expenseDescY = useSpring(expenseCursorY, { stiffness: 220, damping: 40 });
  
  // Convert Expense motion values to pixel strings
  const expenseTitleXpx = useTransform(expenseTitleX, (value) => `${value}px`);
  const expenseTitleYpx = useTransform(expenseTitleY, (value) => `${value}px`);
  const expenseSubtitleXpx = useTransform(expenseSubtitleX, (value) => `${value}px`);
  const expenseSubtitleYpx = useTransform(expenseSubtitleY, (value) => `${value + 35}px`);
  const expenseDescXpx = useTransform(expenseDescX, (value) => `${value}px`);
  const expenseDescYpx = useTransform(expenseDescY, (value) => `${value + 95}px`);
  
  // Expense rotations - Independent
  const expenseTitleRotation = useMotionValue(0);
  const expenseSubtitleRotation = useMotionValue(0);
  const expenseDescRotation = useMotionValue(0);
  const springExpenseTitleRotation = useSpring(expenseTitleRotation, { stiffness: 400, damping: 25 });
  const springExpenseSubtitleRotation = useSpring(expenseSubtitleRotation, { stiffness: 350, damping: 30 });
  const springExpenseDescRotation = useSpring(expenseDescRotation, { stiffness: 300, damping: 35 });
  
  // ISV tooltip motion values - Three bubbles with independent physics
  const isvCursorX = useMotionValue(0);
  const isvCursorY = useMotionValue(0);
  const isvTitleX = useSpring(isvCursorX, { stiffness: 300, damping: 30 });
  const isvTitleY = useSpring(isvCursorY, { stiffness: 300, damping: 30 });
  const isvSubtitleX = useSpring(isvCursorX, { stiffness: 250, damping: 35 });
  const isvSubtitleY = useSpring(isvCursorY, { stiffness: 250, damping: 35 });
  const isvDescX = useSpring(isvCursorX, { stiffness: 220, damping: 40 });
  const isvDescY = useSpring(isvCursorY, { stiffness: 220, damping: 40 });
  
  // Convert ISV motion values to pixel strings
  const isvTitleXpx = useTransform(isvTitleX, (value) => `${value}px`);
  const isvTitleYpx = useTransform(isvTitleY, (value) => `${value}px`);
  const isvSubtitleXpx = useTransform(isvSubtitleX, (value) => `${value}px`);
  const isvSubtitleYpx = useTransform(isvSubtitleY, (value) => `${value + 35}px`);
  const isvDescXpx = useTransform(isvDescX, (value) => `${value}px`);
  const isvDescYpx = useTransform(isvDescY, (value) => `${value + 95}px`);
  
  // ISV rotations - Independent
  const isvTitleRotation = useMotionValue(0);
  const isvSubtitleRotation = useMotionValue(0);
  const isvDescRotation = useMotionValue(0);
  const springIsvTitleRotation = useSpring(isvTitleRotation, { stiffness: 400, damping: 25 });
  const springIsvSubtitleRotation = useSpring(isvSubtitleRotation, { stiffness: 350, damping: 30 });
  const springIsvDescRotation = useSpring(isvDescRotation, { stiffness: 300, damping: 35 });
  
  // Thesis tooltip motion values - Two bubbles with independent physics
  const thesisCursorX = useMotionValue(0);
  const thesisCursorY = useMotionValue(0);
  const thesisTitleX = useSpring(thesisCursorX, { stiffness: 300, damping: 30 });
  const thesisTitleY = useSpring(thesisCursorY, { stiffness: 300, damping: 30 });
  const thesisSubtitleX = useSpring(thesisCursorX, { stiffness: 250, damping: 35 });
  const thesisSubtitleY = useSpring(thesisCursorY, { stiffness: 250, damping: 35 });
  
  // Convert Thesis motion values to pixel strings
  const thesisTitleXpx = useTransform(thesisTitleX, (value) => `${value}px`);
  const thesisTitleYpx = useTransform(thesisTitleY, (value) => `${value}px`);
  const thesisSubtitleXpx = useTransform(thesisSubtitleX, (value) => `${value}px`);
  const thesisSubtitleYpx = useTransform(thesisSubtitleY, (value) => `${value + 85}px`);
  
  // Thesis rotations - Independent
  const thesisTitleRotation = useMotionValue(0);
  const thesisSubtitleRotation = useMotionValue(0);
  const springThesisTitleRotation = useSpring(thesisTitleRotation, { stiffness: 400, damping: 25 });
  const springThesisSubtitleRotation = useSpring(thesisSubtitleRotation, { stiffness: 350, damping: 30 });
  
  // Track previous position for velocity calculation
  const prevPosRef = useRef({ x: 0, y: 0 });
  const lastUpdateRef = useRef(Date.now());
  const hideTimeoutRef = useRef(null);
  const bloomPrevPosRef = useRef({ x: 0, y: 0 });
  const bloomLastUpdateRef = useRef(Date.now());
  const bloomHideTimeoutRef = useRef(null);
  const expensePrevPosRef = useRef({ x: 0, y: 0 });
  const expenseLastUpdateRef = useRef(Date.now());
  const expenseHideTimeoutRef = useRef(null);
  const isvPrevPosRef = useRef({ x: 0, y: 0 });
  const isvLastUpdateRef = useRef(Date.now());
  const isvHideTimeoutRef = useRef(null);
  const thesisPrevPosRef = useRef({ x: 0, y: 0 });
  const thesisLastUpdateRef = useRef(Date.now());
  const thesisHideTimeoutRef = useRef(null);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      if (bloomHideTimeoutRef.current) {
        clearTimeout(bloomHideTimeoutRef.current);
      }
      if (expenseHideTimeoutRef.current) {
        clearTimeout(expenseHideTimeoutRef.current);
      }
      if (isvHideTimeoutRef.current) {
        clearTimeout(isvHideTimeoutRef.current);
      }
      if (thesisHideTimeoutRef.current) {
        clearTimeout(thesisHideTimeoutRef.current);
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
  
  const handleExpenseMouseMove = (e) => {
    if (typeof window === 'undefined') return;
    
    const tooltipOffset = 20;
    const tooltipWidth = 350;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const now = Date.now();
    const deltaTime = Math.max(now - expenseLastUpdateRef.current, 1);
    expenseLastUpdateRef.current = now;
    
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
    const cursorDeltaX = e.clientX - expensePrevPosRef.current.x;
    const cursorDeltaY = e.clientY - expensePrevPosRef.current.y;
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
    
    expenseTitleRotation.set(Math.max(-maxRotation, Math.min(maxRotation, titleRotationValue)));
    expenseSubtitleRotation.set(Math.max(-maxRotation, Math.min(maxRotation, subtitleRotationValue)));
    expenseDescRotation.set(Math.max(-maxRotation, Math.min(maxRotation, descRotationValue)));
    
    // Update cursor position (this will trigger spring animation for all three bubbles)
    expenseCursorX.set(targetX);
    expenseCursorY.set(targetY);
    
    // Update previous position - store actual cursor position for velocity calculation
    expensePrevPosRef.current = { x: e.clientX, y: e.clientY };
  };
  
  const handleIsvMouseMove = (e) => {
    if (typeof window === 'undefined') return;
    
    const tooltipOffset = 20;
    const tooltipWidth = 350;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const now = Date.now();
    const deltaTime = Math.max(now - isvLastUpdateRef.current, 1);
    isvLastUpdateRef.current = now;
    
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
    const cursorDeltaX = e.clientX - isvPrevPosRef.current.x;
    const cursorDeltaY = e.clientY - isvPrevPosRef.current.y;
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
    
    isvTitleRotation.set(Math.max(-maxRotation, Math.min(maxRotation, titleRotationValue)));
    isvSubtitleRotation.set(Math.max(-maxRotation, Math.min(maxRotation, subtitleRotationValue)));
    isvDescRotation.set(Math.max(-maxRotation, Math.min(maxRotation, descRotationValue)));
    
    // Update cursor position (this will trigger spring animation for all three bubbles)
    isvCursorX.set(targetX);
    isvCursorY.set(targetY);
    
    // Update previous position - store actual cursor position for velocity calculation
    isvPrevPosRef.current = { x: e.clientX, y: e.clientY };
  };
  
  const handleThesisMouseMove = (e) => {
    if (typeof window === 'undefined') return;
    
    const tooltipOffset = 20;
    const tooltipWidth = 350;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const now = Date.now();
    const deltaTime = Math.max(now - thesisLastUpdateRef.current, 1);
    thesisLastUpdateRef.current = now;
    
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
    const cursorDeltaX = e.clientX - thesisPrevPosRef.current.x;
    const cursorDeltaY = e.clientY - thesisPrevPosRef.current.y;
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
    
    thesisTitleRotation.set(Math.max(-maxRotation, Math.min(maxRotation, titleRotationValue)));
    thesisSubtitleRotation.set(Math.max(-maxRotation, Math.min(maxRotation, subtitleRotationValue)));
    
    // Update cursor position (this will trigger spring animation for both bubbles)
    thesisCursorX.set(targetX);
    thesisCursorY.set(targetY);
    
    // Update previous position - store actual cursor position for velocity calculation
    thesisPrevPosRef.current = { x: e.clientX, y: e.clientY };
  };
  
  return (
    <motion.div
    className={`font-[family-name:var(--font-geist-sans)] relative w-full mt-4 md:mt-8 grid grid-cols-2 md:grid-cols-8 gap-2 md:gap-4 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

      {/* Thesis Cover Video */}
      <motion.button
          className="col-span-full mb-0 cursor-pointer rounded-[25pt] relative overflow-hidden h-[550px] md:h-auto w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background group"
          whileHover={{ scale: 0.99 }}
          transition={{
              type: "spring",
              stiffness: 1000,
              damping: 15,
          }}
          onMouseEnter={(e) => {
              if (thesisHideTimeoutRef.current) {
                  clearTimeout(thesisHideTimeoutRef.current);
                  thesisHideTimeoutRef.current = null;
              }

              setIsThesisTooltipVisible(true);
              if (typeof window !== 'undefined') {
                  const tooltipOffset = 20;
                  const targetX = e.clientX + tooltipOffset;
                  const targetY = e.clientY;
                  thesisCursorX.set(targetX);
                  thesisCursorY.set(targetY);
                  thesisPrevPosRef.current = { x: e.clientX, y: e.clientY };
                  thesisTitleRotation.set(0);
                  thesisSubtitleRotation.set(0);
              }
          }}
          onMouseLeave={() => {
              if (thesisHideTimeoutRef.current) {
                  clearTimeout(thesisHideTimeoutRef.current);
                  thesisHideTimeoutRef.current = null;
              }

              setIsThesisTooltipVisible(false);
              thesisTitleRotation.set(0);
              thesisSubtitleRotation.set(0);
          }}
          onFocus={(e) => {
              if (thesisHideTimeoutRef.current) {
                  clearTimeout(thesisHideTimeoutRef.current);
                  thesisHideTimeoutRef.current = null;
              }

              setIsThesisTooltipVisible(true);
              if (typeof window !== 'undefined') {
                  // Position tooltip in center of screen for keyboard navigation, offset 150px to the left
                  const centerX = window.innerWidth / 2 - 150;
                  const centerY = window.innerHeight / 2 - 150;
                  thesisCursorX.set(centerX);
                  thesisCursorY.set(centerY);
                  thesisPrevPosRef.current = { x: centerX, y: centerY };
                  thesisTitleRotation.set(0);
                  thesisSubtitleRotation.set(0);
              }
              // Center focused element in viewport
              e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
          }}
          onBlur={() => {
              if (thesisHideTimeoutRef.current) {
                  clearTimeout(thesisHideTimeoutRef.current);
                  thesisHideTimeoutRef.current = null;
              }

              setIsThesisTooltipVisible(false);
              thesisTitleRotation.set(0);
              thesisSubtitleRotation.set(0);
          }}
          onMouseMove={handleThesisMouseMove}
          onClick={() => {
              window.open('https://bargainingwiththefuture.com', '_blank');
          }}
          aria-label="Navigate to Bargaining with the Future"
          aria-describedby="thesis-description-tooltip"
      >
          {/* Corner Arrow */}
          <CornerArrow />

          {/* Glass Edge Effect */}
          <div className="absolute inset-0 rounded-[25pt] shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_25px_0px_rgba(255,255,255,1)]
          pointer-events-none mix-blend-overlay z-10"/>
          <video
              src="/thesis/lifeoscover2.mp4"
              className="w-full h-full object-cover scale-120 rounded-[25pt] brightness-75"
              autoPlay
              muted
              loop
              playsInline
              tabIndex={-1}
          />
          {/* Lockup */}
          <img
              src="/thesis/lifeoslockup.svg"
              alt="LifeOS lockup"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 scale-110 max-w-[125%] md:max-w-[60%] h-auto object-contain drop-shadow-[2px_5px_5px_rgba(0,0,0,0.2)]"
          />

          {/* Bottom Gradient Blur - Mobile Only */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[60%] pointer-events-none backdrop-blur-[100px] saturate-150 brightness-110 -mb-[0.5px] md:hidden"
            style={{
              maskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 100%)',
              zIndex: 15
            }}
          />

          {/* Text Container - Mobile Only */}
          <div className="absolute inset-0 flex flex-col items-start justify-end pb-5 pl-5 w-full mb-1 pointer-events-none z-30 md:hidden">
            {/* Title */}
            <h2 className="tracking-tight font-medium z-30 w-[80%] text-xl leading-none mb-1.5 text-white text-left">
              Bargaining with the Future:<br /> <span className="block mt-1 text-[11pt] md:text-[12pt] font-normal">Understanding Agency in Human-AI Interaction</span>
            </h2>
            {/* Description */}
            <p className="tracking-tight z-30 md:w-[90%] text-[9pt] leading-tight opacity-60 mix-blend-screen text-white text-left mt-1">
              Ongoing Interaction Design Master's Thesis.
            </p>
          </div>
      </motion.button>

      {/* Subway */}
      <motion.button 
        className="col-span-full md:col-span-6 group cursor-pointer h-full relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-[25pt]"
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
          // Position tooltip in center of screen for keyboard navigation, offset 150px to the left
          if (typeof window !== 'undefined') {
            const centerX = window.innerWidth / 2 - 150;
            const centerY = window.innerHeight / 2 - 150;
            cursorX.set(centerX);
            cursorY.set(centerY);
            prevPosRef.current = { x: centerX, y: centerY };
            rotation.set(0);
            descriptionRotation.set(0);
          }
          // Center focused element in viewport
          e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
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
      >
        {/* Corner Arrow */}
        <CornerArrow />

        {/* Video */}
        <motion.div className="rounded-[25pt] w-full col-span-full h-[400px] lg:h-[479px] 2xl:h-[593px] relative overflow-hidden border-b-1 border-white/15">
            <div className="absolute inset-0 rounded-[25pt] shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] 
            pointer-events-none mix-blend-overlay z-10"/>
            <video 
              videoId="currently-subway"
              src="/subway/cover_blank.mp4"
              className="rounded-[25pt] w-full h-full object-cover contrast-125 brightness-90"
              autoPlay
              muted
              loop
              playsInline
              poster="/poster/subwaylandscape.jpg"
              tabIndex={-1}
            />

            {/* Lockup */}
            <img 
              src="/subway/lockup.png"
              alt="Subway lockup"
              className="absolute top-1/2 left-[51%] md:left-[52.5%] transform -translate-x-1/2 -translate-y-1/2 z-20 max-w-[90%] md:max-w-[60%] h-auto object-contain"
            />

            {/* Bottom Gradient Blur */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-[60%] md:h-[50%] z-15 pointer-events-none backdrop-blur-[100px] saturate-150 brightness-110 -mb-[0.5px]"
              style={{
                maskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 100%)'
              }}
            />

            {/* Text Container - Mobile Only */}
            <div className="absolute inset-0 flex flex-col items-start justify-end pb-5 pl-5 w-full mb-1 pointer-events-none z-30 md:hidden">
              {/* Title */}
              <h2 className="tracking-tight font-medium z-30 w-[80%] text-xl leading-none mb-1.5 text-white text-left">
          Enhanced Subway Navigation<br/> with Apple Maps
        </h2>
              {/* Description */}
              <p className="tracking-tight z-30 md:w-[90%] text-[9pt] leading-tight opacity-60 mix-blend-screen text-white text-left mt-1 w-[90%]">
          Precise turn-by-turn navigation within the NYC Subway system, powered by Ultra-Wideband (UWB) technology.
        </p>
      </div>
        </motion.div>
      </motion.button>

      {/* Expense Tracker */}
      <motion.button 
        className="hidden md:block col-span-full md:col-span-2 cursor-pointer transition-all duration-200 h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-[25pt]"
        aria-label="On-device LLM Expense Tracker"
        aria-describedby="expense-description-tooltip"
        whileHover={{ scale: 0.97 }}
        transition={{
          type: "spring",
          stiffness: 1200, 
          damping: 22, 
        }}
        onMouseEnter={(e) => {
          if (expenseHideTimeoutRef.current) {
            clearTimeout(expenseHideTimeoutRef.current);
            expenseHideTimeoutRef.current = null;
          }
          
          setIsExpenseTooltipVisible(true);
          if (typeof window !== 'undefined') {
            const tooltipOffset = 20;
            const targetX = e.clientX + tooltipOffset;
            const targetY = e.clientY;
            expenseCursorX.set(targetX);
            expenseCursorY.set(targetY);
            expensePrevPosRef.current = { x: e.clientX, y: e.clientY };
            expenseTitleRotation.set(0);
            expenseSubtitleRotation.set(0);
            expenseDescRotation.set(0);
          }
        }}
        onMouseLeave={() => {
          if (expenseHideTimeoutRef.current) {
            clearTimeout(expenseHideTimeoutRef.current);
            expenseHideTimeoutRef.current = null;
          }
          
          setIsExpenseTooltipVisible(false);
          expenseTitleRotation.set(0);
          expenseSubtitleRotation.set(0);
          expenseDescRotation.set(0);
        }}
        onFocus={(e) => {
          if (expenseHideTimeoutRef.current) {
            clearTimeout(expenseHideTimeoutRef.current);
            expenseHideTimeoutRef.current = null;
          }
          
          setIsExpenseTooltipVisible(true);
          if (typeof window !== 'undefined') {
            // Position tooltip in center of screen for keyboard navigation, offset 150px to the left
            const centerX = window.innerWidth / 2 - 150;
            const centerY = window.innerHeight / 2 - 150;
            expenseCursorX.set(centerX);
            expenseCursorY.set(centerY);
            expensePrevPosRef.current = { x: centerX, y: centerY };
            expenseTitleRotation.set(0);
            expenseSubtitleRotation.set(0);
            expenseDescRotation.set(0);
          }
          // Center focused element in viewport
          e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }}
        onBlur={() => {
          if (expenseHideTimeoutRef.current) {
            clearTimeout(expenseHideTimeoutRef.current);
            expenseHideTimeoutRef.current = null;
          }
          
          setIsExpenseTooltipVisible(false);
          expenseTitleRotation.set(0);
          expenseSubtitleRotation.set(0);
          expenseDescRotation.set(0);
        }}
        onMouseMove={handleExpenseMouseMove}
        onClick={() => {
          window.open('https://ithinkitschris.notion.site/local-expense-tracker', '_blank');
        }}
      >
        {/* Corner Arrow */}
        <CornerArrow />

        {/* Video */}
        <motion.div className="rounded-[25pt] w-full col-span-full h-[500px] lg:h-[479px] 2xl:h-[593px] relative overflow-hidden border-b-1 border-white/15">
            <div className="absolute inset-0 rounded-[25pt] shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] 
            pointer-events-none mix-blend-overlay z-10"/>
            <OptimizedVideo 
              videoId="currently-expense"
              src="/optimized/expense/cover_1.mp4"
              className="rounded-[25pt] w-full h-full object-cover object-[0%_10%]"
              autoPlay
              muted
              loop
              playsInline
              poster=""
              useOptimized={useOptimizedVideos}
            />

            {/* Bottom Gradient Blur */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-[60%] md:h-[50%] z-15 pointer-events-none backdrop-blur-[100px] saturate-150 brightness-110 -mb-[0.5px]"
              style={{
                maskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 100%)'
              }}
            />

            {/* Text Container - Mobile Only */}
            <div className="absolute inset-0 flex flex-col items-start justify-end pb-6 pl-5 w-full mb-1 pointer-events-none z-30 md:hidden">
              {/* Title */}
              <h2 className="tracking-tight font-medium z-30 w-[80%] text-xl leading-none mb-1.5 text-white text-left">
                On-device LLM<br/>Expense Tracker
              </h2>
              {/* Description */}
              <p className="tracking-tight z-30 md:w-[90%] text-[9pt] leading-tight opacity-60 mix-blend-screen text-white text-left mt-1">
                A personal project into developing and designing an on-device LLM-powered personal expense tracker for iOS using React Native, FastAPI, Ollama and Gemma3n:e2b.
              </p>
            </div>
        </motion.div>
      </motion.button>

      {/* ISV */}
      <motion.button 
        className="col-span-full md:col-span-4 h-full relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-[20pt]"
        aria-label="Singapore Airlines In-Flight Safety Video"
        aria-describedby="isv-description-tooltip"
        whileHover={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 1000, 
          damping: 15, 
        }}
        onMouseEnter={(e) => {
          if (isvHideTimeoutRef.current) {
            clearTimeout(isvHideTimeoutRef.current);
            isvHideTimeoutRef.current = null;
          }
          
          setIsIsvTooltipVisible(true);
          if (typeof window !== 'undefined') {
            const tooltipOffset = 20;
            const targetX = e.clientX + tooltipOffset;
            const targetY = e.clientY;
            isvCursorX.set(targetX);
            isvCursorY.set(targetY);
            isvPrevPosRef.current = { x: e.clientX, y: e.clientY };
            isvTitleRotation.set(0);
            isvSubtitleRotation.set(0);
            isvDescRotation.set(0);
          }
        }}
        onMouseLeave={() => {
          if (isvHideTimeoutRef.current) {
            clearTimeout(isvHideTimeoutRef.current);
            isvHideTimeoutRef.current = null;
          }
          
          setIsIsvTooltipVisible(false);
          isvTitleRotation.set(0);
          isvSubtitleRotation.set(0);
          isvDescRotation.set(0);
        }}
        onFocus={(e) => {
          if (isvHideTimeoutRef.current) {
            clearTimeout(isvHideTimeoutRef.current);
            isvHideTimeoutRef.current = null;
          }
          
          setIsIsvTooltipVisible(true);
          if (typeof window !== 'undefined') {
            // Position tooltip in center of screen for keyboard navigation, offset 150px to the left
            const centerX = window.innerWidth / 2 - 150;
            const centerY = window.innerHeight / 2 - 150;
            isvCursorX.set(centerX);
            isvCursorY.set(centerY);
            isvPrevPosRef.current = { x: centerX, y: centerY };
            isvTitleRotation.set(0);
            isvSubtitleRotation.set(0);
            isvDescRotation.set(0);
          }
          // Center focused element in viewport
          e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }}
        onBlur={() => {
          if (isvHideTimeoutRef.current) {
            clearTimeout(isvHideTimeoutRef.current);
            isvHideTimeoutRef.current = null;
          }
          
          setIsIsvTooltipVisible(false);
          isvTitleRotation.set(0);
          isvSubtitleRotation.set(0);
          isvDescRotation.set(0);
        }}
        onMouseMove={handleIsvMouseMove}
        onClick={() => {
          router.push('/isv');
        }}
      >
        {/* Corner Arrow */}
        <CornerArrow />

        {/* Lockup */}
        <img src="/isv/logo.png" className="absolute md:right-5 md:bottom-5 right-4 bottom-4 w-14 md:w-20 h-auto z-20 opacity-50" />

        {/* Video */}
        <motion.div className="rounded-[20pt] w-full col-span-full h-[320px] lg:h-[420px] 2xl:h-[450px] relative overflow-hidden border-b-1 border-white/15">
            <div className="absolute inset-0 rounded-[20pt] shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_8px_0px_rgba(255,255,255,1)] pointer-events-none mix-blend-overlay z-10"/>

            <video 
              videoId="currently-isv"
              src="/isv/montagenew.mp4"
              className="rounded-[20pt] w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/poster/isv.png"
              tabIndex={-1}
            />

            {/* Bottom Gradient Blur */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-[60%] md:h-[50%] z-15 pointer-events-none backdrop-blur-[100px] saturate-150 brightness-110 -mb-[0.5px]"
              style={{
                maskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 100%)'
              }}
            />

            {/* Text Container - Mobile Only */}
            <div className="absolute inset-0 flex flex-col items-start justify-end pb-2 pl-5 w-full mb-1 pointer-events-none z-30 md:hidden">
              {/* Title */}
              <h2 className="tracking-tight font-medium z-30 w-[80%] text-xl leading-none mb-1.5 text-white text-left">
          Singapore Airlines<br/>In-Flight Safety Video
        </h2>
        {/* Description */}
        {/* <p className="tracking-tight z-30 md:w-[90%] text-[9pt] leading-tight opacity-60 mix-blend-screen text-white text-left mt-1">
          Singapore Airlines' 2025 In-Flight Safety Video that takes passengers on a journey through Singapore's iconic landmarks and most importantly, diverse communities.
        </p> */}
      </div>
        </motion.div>
      </motion.button>

      {/* Bloom */}
      <motion.button 
        className="col-span-full md:col-span-4 group cursor-pointer h-full relative  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-[20pt]"
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
          if (typeof window !== 'undefined') {
            // Position tooltip in center of screen for keyboard navigation, offset 150px to the left
            const centerX = window.innerWidth / 2 - 150;
            const centerY = window.innerHeight / 2 - 150;
            bloomCursorX.set(centerX);
            bloomCursorY.set(centerY);
            bloomPrevPosRef.current = { x: centerX, y: centerY };
            bloomTitleRotation.set(0);
            bloomSubtitleRotation.set(0);
            bloomDescRotation.set(0);
          }
          // Center focused element in viewport
          e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
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
        onClick={() => window.open('https://www.figma.com/deck/zX29aRXmKQE1orzfgvwDqN/Bloom-Final-Presentation?node-id=152-476', '_blank', 'noopener,noreferrer')}
      >
        {/* Corner Arrow */}
        <CornerArrow />

        {/* Video */}
        <motion.div className="rounded-[20pt] w-full col-span-full h-[420px] lg:h-[420px] 2xl:h-[450px] relative overflow-hidden border-b-1 border-white/15">
            <div className="absolute inset-0 rounded-[20pt] shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] pointer-events-none mix-blend-overlay z-10"/>

            {/* WIP Overlay */}
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center w-[80%] mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300 z-40">
              <h1 className="z-20 text-white text-xl md:text-3xl tracking-tight leading-[1] w-[80%] font-medium text-center">Project page is currently work in progress.</h1>
              <p className="z-20 text-white text-xxs md:text-sm leading-[1.2] w-[90%] font-medium text-center mt-4">Check back soon! <br/>Click to be directed to the project deck.</p>
            </div> */}

            {/* Video */}
            <video 
              videoId="currently-subway"
              src="/bloom/cover.mp4"
              className="rounded-[20pt] w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/poster/subwaylandscape.jpg"
              tabIndex={-1}
            />

            {/* Bottom Gradient Blur */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-[60%] md:h-[50%] z-15 pointer-events-none backdrop-blur-[100px] saturate-150 brightness-110 -mb-[0.5px]"
              style={{
                maskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 100%)'
              }}
            />

            {/* Text Container - Mobile Only */}
            <div className="absolute inset-0 flex flex-col items-start justify-end pb-3.5 pl-5 w-full mb-1 pointer-events-none z-30 md:hidden">
              {/* Title */}
              <h2 className="tracking-tight font-medium z-30 w-[80%] text-[16pt] leading-none mb-0.5 text-white text-left">
                Bloom
              </h2>
          {/* Subtitle */}
          <h3 className="tracking-tight z-30 text-[9pt] leading-tight mix-blend-screen text-white mb-0 text-left opacity-50">
            Stanford Longevity Design Challenge First Place
          </h3>
              {/* Description */}
              {/* <p className="tracking-tight z-30 md:w-[90%] text-[9pt] leading-tight opacity-60 mix-blend-screen text-white text-left mt-1">
          Helping young Korean adults discover meaningful career paths.
        </p> */}
      </div>
        </motion.div>
      </motion.button>

      {/* Tooltips - Outside container to ensure proper z-index stacking */}
      <AnimatePresence>
        {isTooltipVisible && (
          <>
            {/* First tooltip - Title */}
            <motion.div
              id="subway-title-tooltip"
              role="tooltip"
              aria-live="polite"
              className="fixed pointer-events-none z-50 rounded-[22pt] px-6 py-3 border-1 border-b-1.5 border-r-1.5 text-[18pt] font-medium tracking-[-0.2pt] bg-background leading-[1.15] border-foreground/10 text-foreground dark:bg-black/20 dark:border-white/10 dark:text-white drop-shadow-xl backdrop-blur-3xl"
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
              Enhanced Subway Navigation<br/> with Apple Maps
            </motion.div>
            
            {/* Second tooltip - Description (smaller, independent physics) */}
            <motion.div
              id="subway-description-tooltip"
              role="tooltip"
              aria-live="polite"
              className="fixed pointer-events-none z-[9998] rounded-[20pt] pl-6 pr-5 py-4 border-b-1.5 border-r-1.5 text-xs lg:text-[13px] font-medium tracking-[-0.1pt] max-w-[360px] bg-background border-foreground/10 text-foreground dark:bg-black/20 dark:border-white/10 dark:text-white drop-shadow-lg backdrop-blur-3xl leading-[1.5]"
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
              className="fixed pointer-events-none z-[9999] rounded-[20pt] px-5 py-3 border-1 border-b-1.5 border-r-1.5 text-[18pt] font-medium tracking-[-0.2pt] bg-background max-w-[300px] border-foreground/10 text-foreground dark:bg-black/20 dark:border-white/10 dark:text-white drop-shadow-xl backdrop-blur-3xl"
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
              className="fixed pointer-events-none z-[9998] rounded-[20pt] px-4 py-2 border-1 border-b-1.5 border-r-1.5 text-[15px] font-medium tracking-[-0.1pt] bg-background border-foreground/10 text-foreground dark:bg-black/20 dark:border-white/10 dark:text-white drop-shadow-lg backdrop-blur-3xl"
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
              Stanford Longevity Design Challenge <br/>First Place
            </motion.div>
            
            {/* Third tooltip - Description */}
            <motion.div
              id="bloom-description-tooltip"
              role="tooltip"
              aria-live="polite"
              className="fixed pointer-events-none z-[9997] rounded-[20pt] pl-6 pr-4 py-4 border-1 border-b-1.5 border-r-1.5 text-xs lg:text-[13px] font-medium tracking-[-0.1pt] max-w-[315px] bg-background border-foreground/10 text-foreground dark:bg-black/20 dark:border-white/10 dark:text-white drop-shadow-lg backdrop-blur-3xl leading-[1.5]"
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

      {/* Expense Tooltips */}
      <AnimatePresence>
        {isExpenseTooltipVisible && (
          <>
            {/* First tooltip - Title */}
            <motion.div
              id="expense-title-tooltip"
              role="tooltip"
              aria-live="polite"
              className="fixed pointer-events-none z-50 rounded-[22pt] px-6 py-3 border-1 border-b-1.5 border-r-1.5 text-[18pt] font-medium tracking-[-0.2pt] bg-background leading-[1.15] border-foreground/10 text-foreground dark:bg-black/20 dark:border-white/10 dark:text-white drop-shadow-xl backdrop-blur-3xl"
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
                left: expenseTitleXpx,
                top: expenseTitleYpx,
                rotate: springExpenseTitleRotation,
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
              }}
            >
              On-device LLM<br/>Expense Tracker
            </motion.div>
            
            {/* Third tooltip - Description */}
            <motion.div
              id="expense-description-tooltip"
              role="tooltip"
              aria-live="polite"
              className="fixed pointer-events-none z-[9997] rounded-[20pt] pl-6 pr-4 py-4 border-1 border-b-1.5 border-r-1.5 text-xs lg:text-[13px] font-medium tracking-[-0.1pt] max-w-[290px] bg-background border-foreground/10 text-foreground dark:bg-black/20 dark:border-white/10 dark:text-white drop-shadow-lg backdrop-blur-3xl leading-[1.5]"
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
                left: expenseDescXpx,
                top: expenseDescYpx,
                rotate: springExpenseDescRotation,
                transform: 'translate(-50%, -50%)',
                zIndex: 9997,
              }}
            >
              A personal project into developing and designing an on-device LLM-powered personal expense tracker for iOS using React Native, FastAPI, Ollama and Gemma3n:e2b.
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ISV Tooltips */}
      <AnimatePresence>
        {isIsvTooltipVisible && (
          <>
            {/* First tooltip - Title */}
            <motion.div
              id="isv-title-tooltip"
              role="tooltip"
              aria-live="polite"
              className="fixed pointer-events-none z-50 rounded-[22pt] px-6 py-3 border-1 border-b-1.5 border-r-1.5 text-[18pt] font-medium tracking-[-0.2pt] bg-background leading-[1.15] border-foreground/10 text-foreground dark:bg-black/20 dark:border-white/10 dark:text-white drop-shadow-xl backdrop-blur-3xl"
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
                left: isvTitleXpx,
                top: isvTitleYpx,
                rotate: springIsvTitleRotation,
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
              }}
            >
              Singapore Airlines<br/>In-Flight Safety Video
            </motion.div>
            
            {/* Third tooltip - Description */}
            <motion.div
              id="isv-description-tooltip"
              role="tooltip"
              aria-live="polite"
              className="fixed pointer-events-none z-[9997] rounded-[20pt] pl-6 pr-4 py-4 border-1 border-b-1.5 border-r-1.5 text-xs lg:text-[13px] font-medium tracking-[-0.1pt] max-w-[290px] bg-background border-foreground/10 text-foreground dark:bg-black/20 dark:border-white/10 dark:text-white drop-shadow-lg backdrop-blur-3xl leading-[1.5]"
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
                left: isvDescXpx,
                top: isvDescYpx,
                rotate: springIsvDescRotation,
                transform: 'translate(-50%, -50%)',
                zIndex: 9997,
              }}
            >
              Singapore Airlines' 2025 In-Flight Safety Video that takes passengers on a journey through Singapore's iconic landmarks and most importantly, diverse communities.
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Thesis Tooltips */}
      <AnimatePresence>
        {isThesisTooltipVisible && (
          <>
            {/* First tooltip - Title */}
            <motion.div
                id="thesis-title-tooltip"
                role="tooltip"
                aria-live="polite"
                className="fixed pointer-events-none z-50 rounded-[22pt] px-6 py-3 pb-4 border-b-1.5 border-r-1.5 text-[18pt] font-medium tracking-[-0.2pt] bg-background leading-[1.15] border-foreground/10 text-foreground dark:bg-black/30 dark:border-white/5 dark:text-white drop-shadow-xl backdrop-blur-3xl"
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
                    left: thesisTitleXpx,
                    top: thesisTitleYpx,
                    rotate: springThesisTitleRotation,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9999,
                }}
            >
                Bargaining with the Future:<br /> <span className="block mt-1 text-[12pt]">Understanding Agency in Human-AI Interaction</span>
            </motion.div>

            {/* Second tooltip - Subtitle */}
            <motion.div
                id="thesis-subtitle-tooltip"
                role="tooltip"
                aria-live="polite"
                className="fixed pointer-events-none z-[9998] rounded-[20pt] px-6 py-4 border-b-1.5 border-r-1.5 text-[13px] font-medium tracking-[-0.1pt] bg-background border-foreground/10 text-foreground dark:bg-black/30 dark:border-white/5 dark:text-white drop-shadow-lg backdrop-blur-3xl max-w-[310px]"
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
                    left: thesisSubtitleXpx,
                    top: thesisSubtitleYpx,
                    rotate: springThesisSubtitleRotation,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 9998,
                }}
            >
                An ongoing speculative design thesis that investigates user agency within Human–AI interaction in a fully agentic future.
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </motion.div>  

  );
};

export default Currently;