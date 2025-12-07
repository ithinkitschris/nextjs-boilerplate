'use client';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import PhotographyPage from "./photography";
import ContentPage from "./content";
import { animateInChild } from "../../constants/animations";
import Currently from "./currently";
import Archive from "./archive";
import ResumeFooter from "../resume/ResumeFooter";
import { useExperienceState } from "../../hooks/useExperienceState";
import ResumeSectionHeader from "../resume/ResumeSectionHeader";
import { useHideNav } from "../../context/HideNavContext";
import { useBrowser } from "../../context/BrowserContext";
import { useRouter } from 'next/navigation';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Resume = forwardRef(({ className = "", toggleWork }, ref) => {
    //#region States and Hooks
    const router = useRouter();
    const { browserType } = useBrowser();
    const [timeNyc, setTimeNyc] = useState(null);
    const [timeSg, setTimeSg] = useState(null);
    const [isAtTop, setIsAtTop] = useState(true);
    const { visibleSections, showStory } = useExperienceState();
    const { setIsArchiveInView, setHideNav, setRandomRotation } = useHideNav();
    // Motion values for physics-based image popup animation
    const initialX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
    const initialY = typeof window !== 'undefined' ? window.innerHeight * 0.75 : 0;
    const imageCursorX = useMotionValue(initialX);
    const imageCursorY = useMotionValue(initialY);
    const imageX = useSpring(imageCursorX, { stiffness: 300, damping: 30 });
    const imageY = useSpring(imageCursorY, { stiffness: 300, damping: 30 });

    // Convert motion values to pixel strings for positioning
    const imageXpx = useTransform(imageX, (value) => `${value - 256 - 20}px`); // Place image to the left of cursor with 20px spacing
    const imageYpx = useTransform(imageY, (value) => `${value - 128}px`);

    // Motion values for ISV video popup animation (reuse cursor tracking)
    const isvVideoX = useSpring(imageCursorX, { stiffness: 300, damping: 30 });
    const isvVideoY = useSpring(imageCursorY, { stiffness: 300, damping: 30 });

    // Convert ISV video motion values to pixel strings for positioning
    const isvVideoXpx = useTransform(isvVideoX, (value) => `${value - 200}px`); // Same positioning as Ghibli video
    const isvVideoYpx = useTransform(isvVideoY, (value) => `${value - 250}px`); // Same positioning as Ghibli video

    // Motion values for Ghibli video popup animation (reuse cursor tracking)
    const ghibliVideoX = useSpring(imageCursorX, { stiffness: 300, damping: 30 });
    const ghibliVideoY = useSpring(imageCursorY, { stiffness: 300, damping: 30 });

    // Convert Ghibli video motion values to pixel strings for positioning
    const ghibliVideoXpx = useTransform(ghibliVideoX, (value) => `${value - 200}px`); // Same positioning as ISV video
    const ghibliVideoYpx = useTransform(ghibliVideoY, (value) => `${value - 250}px`); // Same positioning as ISV video

    // Motion values for Nike video popup animation (reuse cursor tracking)
    const nikeVideoX = useSpring(imageCursorX, { stiffness: 300, damping: 30 });
    const nikeVideoY = useSpring(imageCursorY, { stiffness: 300, damping: 30 });

    // Convert Nike video motion values to pixel strings for positioning
    const nikeVideoXpx = useTransform(nikeVideoX, (value) => `${value - 100}px`); // 100px to the right of default
    const nikeVideoYpx = useTransform(nikeVideoY, (value) => `${value - 370}px`); // 120px up from default

    // Motion values for Samsung video popup animation (reuse cursor tracking)
    const samsungVideoX = useSpring(imageCursorX, { stiffness: 300, damping: 30 });
    const samsungVideoY = useSpring(imageCursorY, { stiffness: 300, damping: 30 });

    // Convert Samsung video motion values to pixel strings for positioning
    const samsungVideoXpx = useTransform(samsungVideoX, (value) => `${value - 200}px`); // Same positioning as ISV video
    const samsungVideoYpx = useTransform(samsungVideoY, (value) => `${value - 250}px`); // Same positioning as ISV video

    // Motion values for Subway video popup animation (reuse cursor tracking)
    const subwayVideoX = useSpring(imageCursorX, { stiffness: 300, damping: 30 });
    const subwayVideoY = useSpring(imageCursorY, { stiffness: 300, damping: 30 });

    // Convert Subway video motion values to pixel strings for positioning
    const subwayVideoXpx = useTransform(subwayVideoX, (value) => `${value - 200}px`); // Same positioning as ISV video
    const subwayVideoYpx = useTransform(subwayVideoY, (value) => `${value - 250}px`); // Same positioning as ISV video

    // Motion values for Stanford video popup animation (reuse cursor tracking)
    const stanfordVideoX = useSpring(imageCursorX, { stiffness: 300, damping: 30 });
    const stanfordVideoY = useSpring(imageCursorY, { stiffness: 300, damping: 30 });

    // Convert Stanford video motion values to pixel strings for positioning
    const stanfordVideoXpx = useTransform(stanfordVideoX, (value) => `${value - 200}px`); // Same positioning as ISV video
    const stanfordVideoYpx = useTransform(stanfordVideoY, (value) => `${value - 250}px`); // Same positioning as ISV video

    // Motion values for Navigation video popup animation (reuse cursor tracking)
    const navigationVideoX = useSpring(imageCursorX, { stiffness: 300, damping: 30 });
    const navigationVideoY = useSpring(imageCursorY, { stiffness: 300, damping: 30 });

    // Convert Navigation video motion values to pixel strings for positioning
    const navigationVideoXpx = useTransform(navigationVideoX, (value) => `${value - 200}px`); // Same positioning as ISV video
    const navigationVideoYpx = useTransform(navigationVideoY, (value) => `${value - 250}px`); // Same positioning as ISV video

    // Motion values for Thesis video popup animation (reuse cursor tracking)
    const thesisVideoX = useSpring(imageCursorX, { stiffness: 300, damping: 30 });
    const thesisVideoY = useSpring(imageCursorY, { stiffness: 300, damping: 30 });

    // Convert Thesis video motion values to pixel strings for positioning
    const thesisVideoXpx = useTransform(thesisVideoX, (value) => `${value - 200}px`); // Same positioning as ISV video
    const thesisVideoYpx = useTransform(thesisVideoY, (value) => `${value - 250}px`); // Same positioning as ISV video

    // Rotation based on movement direction
    const imageRotation = useMotionValue(0);
    const springImageRotation = useSpring(imageRotation, { stiffness: 400, damping: 25 });

    // Track previous position for velocity calculation
    const initialPrevX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
    const initialPrevY = typeof window !== 'undefined' ? window.innerHeight * 0.75 : 0;
    const imagePrevPosRef = useRef({ x: initialPrevX, y: initialPrevY });
    const imageLastUpdateRef = useRef(Date.now());

    const [showImage, setShowImage] = useState(false);
    const [showISVVideo, setShowISVVideo] = useState(false);
    const [showGhibliVideo, setShowGhibliVideo] = useState(false);
    const [showNikeVideo, setShowNikeVideo] = useState(false);
    const [showSamsungVideo, setShowSamsungVideo] = useState(false);
    const [showSubwayVideo, setShowSubwayVideo] = useState(false);
    const [showStanfordVideo, setShowStanfordVideo] = useState(false);
    const [showNavigationVideo, setShowNavigationVideo] = useState(false);
    const [showThesisVideo, setShowThesisVideo] = useState(false);
    const [isHoveringSingaporeAirlines, setIsHoveringSingaporeAirlines] = useState(false);
    const [isHoveringStudioGhibli, setIsHoveringStudioGhibli] = useState(false);
    const [isHoveringNike, setIsHoveringNike] = useState(false);
    const [isHoveringSamsung, setIsHoveringSamsung] = useState(false);
    const [isHoveringGraduateStudent, setIsHoveringGraduateStudent] = useState(false);
    const [isHoveringStanford, setIsHoveringStanford] = useState(false);
    const [isHoveringNavigation, setIsHoveringNavigation] = useState(false);
    const [isHoveringThesis, setIsHoveringThesis] = useState(false);
    const [showCopiedMessage, setShowCopiedMessage] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isHeader2AtOpacity1, setIsHeader2AtOpacity1] = useState(false);
    const [isHeader2Part2AtOpacity1, setIsHeader2Part2AtOpacity1] = useState(false);
    const [isHeader3AboveThreshold, setIsHeader3AboveThreshold] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMouseOverBioSection, setIsMouseOverBioSection] = useState(false);
    const [isCursorNearBorder, setIsCursorNearBorder] = useState(false);

    // GSAP scroll animation refs
    const bioSectionRef = useRef(null);
    const headersContainerRef = useRef(null);
    const header1Ref = useRef(null);
    const header2ContainerRef = useRef(null);
    const header2Ref = useRef(null);
    const header2Part2Ref = useRef(null);
    const header3Ref = useRef(null);
    const header3Part2Ref = useRef(null);
    const hideISVVideoTimeoutRef = useRef(null);
    const hideGhibliVideoTimeoutRef = useRef(null);
    const hideNikeVideoTimeoutRef = useRef(null);
    const hideSamsungVideoTimeoutRef = useRef(null);
    const hideSubwayVideoTimeoutRef = useRef(null);
    const copiedMessageTimeoutRef = useRef(null);
    const hideStanfordVideoTimeoutRef = useRef(null);
    const hideNavigationVideoTimeoutRef = useRef(null);
    const hideThesisVideoTimeoutRef = useRef(null);

    // Refs for video elements and playback positions
    const isvVideoRef = useRef(null);
    const ghibliVideoRef = useRef(null);
    const nikeVideoRef = useRef(null);
    const samsungVideoRef = useRef(null);
    const subwayVideoRef = useRef(null);
    const stanfordVideoRef = useRef(null);
    const navigationVideoRef = useRef(null);
    const thesisVideoRef = useRef(null);
    const isvVideoTimeRef = useRef(0);
    const ghibliVideoTimeRef = useRef(0);
    const nikeVideoTimeRef = useRef(0);
    const samsungVideoTimeRef = useRef(0);
    const subwayVideoTimeRef = useRef(0);
    const stanfordVideoTimeRef = useRef(0);
    const navigationVideoTimeRef = useRef(0);
    const thesisVideoTimeRef = useRef(0);
    const archiveSectionRef = useRef(null);

    const storyContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const storyColumn = {
        hidden: { opacity: 0, y: 7 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 18,
                staggerChildren: 0.03,
            },
        },
    };

    const storyElement = {
        hidden: { opacity: 0, y: 7 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 12,
                staggerChildren: 0.03,
            },
        },
    };

    // Set mounted state for portal rendering
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const updateTime = (timezone, setTime) => {
            const currentTime = new Date();
            const timeInTimeZone = new Intl.DateTimeFormat("en-US", {
                timeZone: timezone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            }).format(currentTime);
            setTime(timeInTimeZone);
        };

        updateTime("America/New_York", setTimeNyc);
        updateTime("Asia/Singapore", setTimeSg);

        const timer = setInterval(() => {
            updateTime("America/New_York", setTimeNyc);
            updateTime("Asia/Singapore", setTimeSg);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY < 500); // Show gradient when within 100px of top
        };

        // Check initial scroll position
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // GSAP ScrollTrigger for header fade animation with extended scroll
    useEffect(() => {
        // Clear any existing ScrollTriggers first (like other pages do)
        // This prevents interference from ScrollTriggers created by other pages
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Immediately reset scroll to top BEFORE ScrollTrigger initializes
        // This ensures ScrollTrigger calculates positions correctly when navigating from other pages
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });

        // Wait for scroll position to actually be applied and DOM to be ready
        // Using requestAnimationFrame ensures the browser has processed the scroll change
        let rafId1, rafId2;

        const initializeScrollTrigger = () => {
            // Set initial opacity, position, and scale states
            if (headersContainerRef.current && header1Ref.current && header2ContainerRef.current && header2Ref.current && header2Part2Ref.current && header3Ref.current && header3Part2Ref.current && bioSectionRef.current) {
            gsap.set(headersContainerRef.current, { y: 150 });
            gsap.set(header1Ref.current, { opacity: 1, scale: 1.05, transformOrigin: "left" });
            gsap.set(header2ContainerRef.current, { scale: 1, transformOrigin: "left" });
            gsap.set(header2Ref.current, { opacity: 0.2 });
            setIsHeader2AtOpacity1(false);
            gsap.set(header2Part2Ref.current, { opacity: 0.2 });
            setIsHeader2Part2AtOpacity1(false);
            gsap.set(header3Ref.current, { opacity: 0.1 });
            setIsHeader3AboveThreshold(false);
            gsap.set(header3Part2Ref.current, { opacity: 0.1 });

            // Create ScrollTrigger with extended scroll
            const st = ScrollTrigger.create({
                trigger: bioSectionRef.current,
                start: "top top",
                end: "+=100%", // Extend the scroll area by 100vh
                pin: true, // Pin the section in place
                pinSpacing: true,
                scrub: 1, // Smooth scrubbing tied to scroll position
                markers: false, // Set to true for debugging
                anticipatePin: 1,
                onEnter: () => {
                    // When entering the trigger, hide navbar and set random rotation
                    setHideNav(true);
                    const initialRandomRot = Math.random() * 60 - 20;
                    setRandomRotation(initialRandomRot);
                },
                onUpdate: (self) => {
                    const progress = self.progress; // 0 to 1
                    setScrollProgress(progress);

                    // Hide navbar during header animations (phases 1-3), show after phase 3 completes
                    if (progress < 1) {
                        // During phases 1-3 (progress 0 to < 1), hide navbar
                        setHideNav(true);
                    } else {
                        // After phase 3 completes (progress >= 1), show navbar
                        setHideNav(false);
                    }

                    // Phase 1a: 0% to 21.25% of scroll (progress 0 to 0.2125)
                    // Header 1 = 100% → 20%, Header 2 = 20% → 100%, Header 3 = 10% (held)
                    // Container y-position moves from 150 to 0 (upward 150px)
                    // Header 1 scale moves from 1.05x to 1x
                    // Header 2 scale moves from 1x to 1.03x
                    if (progress <= 0.2125) {
                        const phase1Progress = progress / 0.2125; // Maps 0->0, 0.2125->1
                        const easedPhase1Progress = gsap.parseEase("power3.inOut")(phase1Progress);

                        // Container: move from y: 150 to y: 0
                        const containerY = gsap.utils.interpolate(150, 0, easedPhase1Progress);
                        gsap.set(headersContainerRef.current, { y: containerY });

                        // Header 1: fade from 1 to 0.2, scale from 1.05 to 1
                        const header1Opacity = gsap.utils.interpolate(1, 0.2, easedPhase1Progress);
                        const header1Scale = gsap.utils.interpolate(1.05, 1, easedPhase1Progress);
                        gsap.set(header1Ref.current, { opacity: header1Opacity, scale: header1Scale, transformOrigin: "left" });

                        // Header 2 Container: scale from 1 to 1.03
                        const header2ContainerScale = gsap.utils.interpolate(1, 1.03, easedPhase1Progress);
                        gsap.set(header2ContainerRef.current, { scale: header2ContainerScale, transformOrigin: "left" });

                        // Header 2: fade from 0.2 to 1
                        const header2Opacity = gsap.utils.interpolate(0.2, 1, easedPhase1Progress);
                        gsap.set(header2Ref.current, { opacity: header2Opacity });
                        setIsHeader2AtOpacity1(header2Opacity >= 0.21);

                        // Header 2 Part 2: stay at 0.2 opacity
                        gsap.set(header2Part2Ref.current, { opacity: 0.2 });
                        setIsHeader2Part2AtOpacity1(false);

                        // Header 3: stay at 0.1 opacity (do not fade out)
                        gsap.set(header3Ref.current, { opacity: 0.1 });
                        setIsHeader3AboveThreshold(false);
                        gsap.set(header3Part2Ref.current, { opacity: 0.1 });
                    }
                    // Phase 1b: 21.25% to 42.5% of scroll (progress 0.2125 to 0.425)
                    // Header 2 fades from 1 to 0.2, Header 2 Part 2 fades from 0.2 to 1
                    else if (progress <= 0.425) {
                        const phase1bProgress = (progress - 0.2125) / 0.2125; // Maps 0.2125->0, 0.425->1
                        const easedPhase1bProgress = gsap.parseEase("expo.inOut")(phase1bProgress);

                        // Container: stay at y: 0 (already at this value from Phase 1a)
                        gsap.set(headersContainerRef.current, { y: 0 });

                        // Header 1: stay at 0.2 opacity and scale 1 (already at these values from Phase 1a)
                        gsap.set(header1Ref.current, { opacity: 0.2, scale: 1, transformOrigin: "left" });

                        // Header 2 Container: stay at scale 1.03
                        gsap.set(header2ContainerRef.current, { scale: 1.03, transformOrigin: "left" });

                        // Header 2: fade from 1 to 0.2
                        const header2Opacity = gsap.utils.interpolate(1, 0.2, easedPhase1bProgress);
                        gsap.set(header2Ref.current, { opacity: header2Opacity });
                        setIsHeader2AtOpacity1(header2Opacity >= 0.21);

                        // Header 2 Part 2: fade from 0.2 to 1
                        const header2Part2Opacity = gsap.utils.interpolate(0.2, 1, easedPhase1bProgress);
                        gsap.set(header2Part2Ref.current, { opacity: header2Part2Opacity });
                        setIsHeader2Part2AtOpacity1(header2Part2Opacity >= 0.21);

                        // Header 3: stay at 0.1 opacity (already at this value from Phase 1a)
                        gsap.set(header3Ref.current, { opacity: 0.1 });
                        setIsHeader3AboveThreshold(false);
                        gsap.set(header3Part2Ref.current, { opacity: 0.1 });
                    }
                    // Phase 2b1: 42.5% to 63.75% of scroll (progress 0.425 to 0.6375)
                    // Container moves upward (complete movement), Header 1 fades from 0.2 to 0.1, Header 2 stays at 0.2, Header 2 Part 2 fades from 1 to 0.2
                    // Header 3 fades from 0.1 to 1, Header 3 Part 2 stays at 0.1
                    // Header 2 scale moves from 1.03x to 1x
                    else if (progress <= 0.6375) {
                        const phase2b1Progress = (progress - 0.425) / 0.2125; // Maps 0.425->0, 0.6375->1
                        const easedPhase2b1Progress = gsap.parseEase("power3.inOut")(phase2b1Progress);

                        // Container: move from y: 0 to y: -150 (complete upward movement of 150px)
                        const containerY = gsap.utils.interpolate(0, -150, easedPhase2b1Progress);
                        gsap.set(headersContainerRef.current, { y: containerY });

                        // Header 1: fade from 0.2 to 0.1 (from Phase 1 end state)
                        const header1Opacity = gsap.utils.interpolate(0.2, 0.1, easedPhase2b1Progress);
                        gsap.set(header1Ref.current, { opacity: header1Opacity, scale: 1, transformOrigin: "left" });

                        // Header 2 Container: scale from 1.03 to 1
                        const header2ContainerScale = gsap.utils.interpolate(1.03, 1, easedPhase2b1Progress);
                        gsap.set(header2ContainerRef.current, { scale: header2ContainerScale, transformOrigin: "left" });

                        // Header 2: stay at 0.2 opacity
                        gsap.set(header2Ref.current, { opacity: 0.2 });
                        setIsHeader2AtOpacity1(false);

                        // Header 2 Part 2: fade from 1 to 0.2
                        const header2Part2Opacity = gsap.utils.interpolate(1, 0.2, easedPhase2b1Progress);
                        gsap.set(header2Part2Ref.current, { opacity: header2Part2Opacity });
                        setIsHeader2Part2AtOpacity1(header2Part2Opacity >= 0.21);

                        // Header 3: fade from 0.1 to 1
                        const header3Opacity = gsap.utils.interpolate(0.1, 1, easedPhase2b1Progress);
                        gsap.set(header3Ref.current, { opacity: header3Opacity });
                        setIsHeader3AboveThreshold(header3Opacity >= 0.4);

                        // Header 3 Part 2: stay at 0.1 opacity
                        gsap.set(header3Part2Ref.current, { opacity: 0.1 });
                    }
                    // Phase 2b2: 63.75% to 85% of scroll (progress 0.6375 to 0.85)
                    // Container holds at -150, Header 1 holds at 0.1, Header 2 holds at 0.2, Header 2 Part 2 holds at 0.2
                    // Header 3 fades from 1 to 0.2, Header 3 Part 2 fades from 0.1 to 1
                    else if (progress <= 0.85) {
                        const phase2b2Progress = (progress - 0.6375) / 0.2125; // Maps 0.6375->0, 0.85->1
                        const easedPhase2b2Progress = gsap.parseEase("expo.inOut")(phase2b2Progress);

                        // Container: stay at y: -150 (already at this value from Phase 2b1)
                        gsap.set(headersContainerRef.current, { y: -150 });

                        // Header 1: stay at 0.1 opacity and scale 1 (already at this value from Phase 2b1)
                        gsap.set(header1Ref.current, { opacity: 0.1, scale: 1, transformOrigin: "left" });

                        // Header 2 Container: stay at scale 1 (already at this value from Phase 2b1)
                        gsap.set(header2ContainerRef.current, { scale: 1, transformOrigin: "left" });

                        // Header 2: stay at 0.2 opacity (already at this value from Phase 2b1)
                        gsap.set(header2Ref.current, { opacity: 0.2 });
                        setIsHeader2AtOpacity1(false);
                        gsap.set(header2Part2Ref.current, { opacity: 0.2 });
                        setIsHeader2Part2AtOpacity1(false);

                        // Header 3: fade from 1 to 0.2
                        const header3Opacity = gsap.utils.interpolate(1, 0.2, easedPhase2b2Progress);
                        gsap.set(header3Ref.current, { opacity: header3Opacity });
                        setIsHeader3AboveThreshold(header3Opacity >= 0.6);

                        // Header 3 Part 2: fade from 0.1 to 1
                        const header3Part2Opacity = gsap.utils.interpolate(0.1, 1, easedPhase2b2Progress);
                        gsap.set(header3Part2Ref.current, { opacity: header3Part2Opacity });
                    }
                    // Phase 3: 85% to 100% of scroll (progress 0.85 to 1)
                    // Header 3 stays at 0.2, Header 3 Part 2 fades from 1 to 0.2
                    else {
                        const phase3Progress = (progress - 0.85) / 0.15; // Maps 0.85->0, 1->1
                        const easedPhase3Progress = gsap.parseEase("power3.inOut")(phase3Progress);

                        // Container: stay at y: -150 (already at this value from Phase 2b2)
                        gsap.set(headersContainerRef.current, { y: -150 });

                        // Header 1: stay at 0.1 opacity and scale 1 (from Phase 2b2 end state)
                        gsap.set(header1Ref.current, { opacity: 0.1, scale: 1, transformOrigin: "left" });

                        // Header 2 Container: stay at scale 1 (already at this value from Phase 2b2)
                        gsap.set(header2ContainerRef.current, { scale: 1, transformOrigin: "left" });

                        // Header 2: stay at 0.2 opacity (already at these values from Phase 2b2)
                        gsap.set(header2Ref.current, { opacity: 0.2 });
                        setIsHeader2AtOpacity1(false);
                        gsap.set(header2Part2Ref.current, { opacity: 0.2 });
                        setIsHeader2Part2AtOpacity1(false);

                        // Header 3: stay at 0.2 opacity (from Phase 2b2 end state)
                        gsap.set(header3Ref.current, { opacity: 0.2 });
                        setIsHeader3AboveThreshold(false);

                        // Header 3 Part 2: fade from 1 to 0.2
                        const header3Part2Opacity = gsap.utils.interpolate(1, 0.2, easedPhase3Progress);
                        gsap.set(header3Part2Ref.current, { opacity: header3Part2Opacity });
                    }
                }
            });

            // Check initial progress and set navbar state accordingly
            // This handles cases where the ScrollTrigger is already in view when created
            const initialProgress = st.progress;
            if (initialProgress < 1) {
                setHideNav(true);
                const initialRandomRot = Math.random() * 60 - 20;
                setRandomRotation(initialRandomRot);
            } else {
                setHideNav(false);
            }

            // Refresh ScrollTrigger after creation to ensure positions are recalculated correctly
            // This is especially important when navigating from other pages
            ScrollTrigger.refresh();
                }
            };

        rafId1 = requestAnimationFrame(() => {
            rafId2 = requestAnimationFrame(() => {
                // Double-check scroll position is at top before initializing ScrollTrigger
                // Force reset if it's not (can happen with some browsers/pages)
                if (window.scrollY !== 0) {
                    window.scrollTo({
                        top: 0,
                        behavior: 'auto',
                    });
                    // Wait one more frame after forced reset
                    requestAnimationFrame(() => {
                        initializeScrollTrigger();
                    });
                } else {
                    initializeScrollTrigger();
                }
            });
        });

        return () => {
            // Cancel any pending requestAnimationFrame calls
            if (rafId1) cancelAnimationFrame(rafId1);
            if (rafId2) cancelAnimationFrame(rafId2);
            // Clean up ScrollTrigger instances
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            // Show navbar when leaving resume page
            setHideNav(false);
        };
    }, [setHideNav]);

    // Mouse tracking for image popup with physics
    useEffect(() => {
        // Track cursor position globally so we always have the current position
        const handleGlobalMouseMove = (e) => {
            // Update motion values for physics-based animation
            const now = Date.now();
            const deltaTime = Math.max(now - imageLastUpdateRef.current, 1);
            imageLastUpdateRef.current = now;

            // Calculate velocity for rotation
            const cursorDeltaX = e.clientX - imagePrevPosRef.current.x;
            const cursorDeltaY = e.clientY - imagePrevPosRef.current.y;
            const velocityX = cursorDeltaX / deltaTime;
            const speed = Math.sqrt(velocityX * velocityX + (cursorDeltaY / deltaTime) ** 2);

            // Calculate rotation based on movement direction and speed
            const maxRotation = 10;
            const rotationIntensity = Math.min(speed * 0.3, 1);
            const horizontalInfluence = Math.sign(velocityX) || 0;
            const verticalInfluence = Math.sign(cursorDeltaY) * 0.3;

            // Apply rotation with intensity based on speed
            const rotationValue = (horizontalInfluence + verticalInfluence) * maxRotation * rotationIntensity;
            imageRotation.set(Math.max(-maxRotation, Math.min(maxRotation, rotationValue)));

            // Update cursor position (this will trigger spring animation)
            imageCursorX.set(e.clientX);
            imageCursorY.set(e.clientY);

            // Update previous position
            imagePrevPosRef.current = { x: e.clientX, y: e.clientY };

            // Check if cursor is within 50px of the top navbar
            const navbarThreshold = 200;
            setIsCursorNearBorder(e.clientY < navbarThreshold);
        };

        let isInsideBioSection = false;

        const handleBioSectionMouseMove = (e) => {
            if (!isInsideBioSection) {
                setIsMouseOverBioSection(true);
                isInsideBioSection = true;
            }
            // Same physics calculation as global handler
            const now = Date.now();
            const deltaTime = Math.max(now - imageLastUpdateRef.current, 1);
            imageLastUpdateRef.current = now;

            const cursorDeltaX = e.clientX - imagePrevPosRef.current.x;
            const cursorDeltaY = e.clientY - imagePrevPosRef.current.y;
            const velocityX = cursorDeltaX / deltaTime;
            const speed = Math.sqrt(velocityX * velocityX + (cursorDeltaY / deltaTime) ** 2);

            const maxRotation = 10;
            const rotationIntensity = Math.min(speed * 0.3, 1);
            const horizontalInfluence = Math.sign(velocityX) || 0;
            const verticalInfluence = Math.sign(cursorDeltaY) * 0.3;

            const rotationValue = (horizontalInfluence + verticalInfluence) * maxRotation * rotationIntensity;
            imageRotation.set(Math.max(-maxRotation, Math.min(maxRotation, rotationValue)));

            imageCursorX.set(e.clientX);
            imageCursorY.set(e.clientY);
            imagePrevPosRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseEnter = () => {
            setIsMouseOverBioSection(true);
            isInsideBioSection = true;
        };

        const handleMouseLeave = () => {
            setIsMouseOverBioSection(false);
            isInsideBioSection = false;
        };

        // Add global mousemove listener to always track cursor position
        document.addEventListener('mousemove', handleGlobalMouseMove);

        const bioSection = bioSectionRef.current;
        if (bioSection) {
            // Use mousemove on bioSection to capture position when over it
            bioSection.addEventListener('mousemove', handleBioSectionMouseMove);
            bioSection.addEventListener('mouseenter', handleMouseEnter);
            bioSection.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            document.removeEventListener('mousemove', handleGlobalMouseMove);
            if (bioSection) {
                bioSection.removeEventListener('mousemove', handleBioSectionMouseMove);
                bioSection.removeEventListener('mouseenter', handleMouseEnter);
                bioSection.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    // Update showImage based on scroll progress (not opacity)
    useEffect(() => {
        // Image should show from 5% to 45% of scroll progress
        const isInHeader2Section = scrollProgress >= 0.03 && scrollProgress <= 0.44;

        // Check if any header 3 link is being hovered
        const isHoveringHeader3Link = isHoveringSingaporeAirlines ||
                                      isHoveringStudioGhibli ||
                                      isHoveringNike ||
                                      isHoveringSamsung ||
                                      isHoveringStanford ||
                                      isHoveringNavigation ||
                                      isHoveringThesis;

        // Check if any video popup is showing (only 1 pop-up at a time)
        const isAnyVideoShowing = showISVVideo ||
                                  showGhibliVideo ||
                                  showNikeVideo ||
                                  showSamsungVideo ||
                                  showStanfordVideo ||
                                  showNavigationVideo ||
                                  showThesisVideo;
        
        // Hide photo if hovering header 3 link or if any video is showing
        const shouldShow = isInHeader2Section &&
                          !isHoveringHeader3Link &&
                          !isAnyVideoShowing;

        // Explicit safeguard: force hide if not in header 2 section
        if (!isInHeader2Section) {
            setShowImage(false);
            imageRotation.set(0);
            return;
        }

        if (shouldShow) {
            // Show immediately when entering the section
            setShowImage(true);
            // Initialize previous position when image appears
            if (typeof window !== 'undefined') {
                imagePrevPosRef.current = { x: window.innerWidth / 2, y: window.innerHeight * 0.75 };
                imageRotation.set(0);
            }
        } else {
            // Hide immediately (no delay)
            setShowImage(false);
            imageRotation.set(0); // Reset rotation when hiding
        }
    }, [
        scrollProgress,
        isHoveringSingaporeAirlines,
        isHoveringStudioGhibli,
        isHoveringNike,
        isHoveringSamsung,
        isHoveringStanford,
        isHoveringNavigation,
        isHoveringThesis,
        showISVVideo,
        showGhibliVideo,
        showNikeVideo,
        showSamsungVideo,
        showStanfordVideo,
        showNavigationVideo,
        showThesisVideo
    ]);

    // Update showISVVideo based on hover over Singapore Airlines with delay before hiding
    useEffect(() => {
        // Clear any existing timeout
        if (hideISVVideoTimeoutRef.current) {
            clearTimeout(hideISVVideoTimeoutRef.current);
            hideISVVideoTimeoutRef.current = null;
        }

        const shouldShow = isHoveringSingaporeAirlines && !isCursorNearBorder;

        if (shouldShow) {
            // Show immediately
            setShowISVVideo(true);
        } else {
            // Save current playback time before hiding
            if (isvVideoRef.current) {
                isvVideoTimeRef.current = isvVideoRef.current.currentTime;
            }
            // Hide with 100ms delay
            hideISVVideoTimeoutRef.current = setTimeout(() => {
                setShowISVVideo(false);
                hideISVVideoTimeoutRef.current = null;
            }, 100);
        }

        // Cleanup timeout on unmount
        return () => {
            if (hideISVVideoTimeoutRef.current) {
                clearTimeout(hideISVVideoTimeoutRef.current);
                hideISVVideoTimeoutRef.current = null;
            }
        };
    }, [isHoveringSingaporeAirlines, isCursorNearBorder]);

    // Update showGhibliVideo based on hover over Studio Ghibli with delay before hiding
    useEffect(() => {
        // Clear any existing timeout
        if (hideGhibliVideoTimeoutRef.current) {
            clearTimeout(hideGhibliVideoTimeoutRef.current);
            hideGhibliVideoTimeoutRef.current = null;
        }

        const shouldShow = isHoveringStudioGhibli && !isCursorNearBorder;

        if (shouldShow) {
            // Show immediately
            setShowGhibliVideo(true);
        } else {
            // Save current playback time before hiding
            if (ghibliVideoRef.current) {
                ghibliVideoTimeRef.current = ghibliVideoRef.current.currentTime;
            }
            // Hide with 100ms delay
            hideGhibliVideoTimeoutRef.current = setTimeout(() => {
                setShowGhibliVideo(false);
                hideGhibliVideoTimeoutRef.current = null;
            }, 100);
        }

        // Cleanup timeout on unmount
        return () => {
            if (hideGhibliVideoTimeoutRef.current) {
                clearTimeout(hideGhibliVideoTimeoutRef.current);
                hideGhibliVideoTimeoutRef.current = null;
            }
        };
    }, [isHoveringStudioGhibli, isCursorNearBorder]);

    // Update showNikeVideo based on hover over Nike with delay before hiding
    useEffect(() => {
        // Clear any existing timeout
        if (hideNikeVideoTimeoutRef.current) {
            clearTimeout(hideNikeVideoTimeoutRef.current);
            hideNikeVideoTimeoutRef.current = null;
        }

        const shouldShow = isHoveringNike && !isCursorNearBorder;

        if (shouldShow) {
            // Show immediately
            setShowNikeVideo(true);
        } else {
            // Save current playback time before hiding
            if (nikeVideoRef.current) {
                nikeVideoTimeRef.current = nikeVideoRef.current.currentTime;
            }
            // Hide with 100ms delay
            hideNikeVideoTimeoutRef.current = setTimeout(() => {
                setShowNikeVideo(false);
                hideNikeVideoTimeoutRef.current = null;
            }, 100);
        }

        // Cleanup timeout on unmount
        return () => {
            if (hideNikeVideoTimeoutRef.current) {
                clearTimeout(hideNikeVideoTimeoutRef.current);
                hideNikeVideoTimeoutRef.current = null;
            }
        };
    }, [isHoveringNike, isCursorNearBorder]);

    // Update showSamsungVideo based on hover over Samsung with delay before hiding
    useEffect(() => {
        // Clear any existing timeout
        if (hideSamsungVideoTimeoutRef.current) {
            clearTimeout(hideSamsungVideoTimeoutRef.current);
            hideSamsungVideoTimeoutRef.current = null;
        }

        const shouldShow = isHoveringSamsung && !isCursorNearBorder;

        if (shouldShow) {
            // Show immediately
            setShowSamsungVideo(true);
        } else {
            // Save current playback time before hiding
            if (samsungVideoRef.current) {
                samsungVideoTimeRef.current = samsungVideoRef.current.currentTime;
            }
            // Hide with 100ms delay
            hideSamsungVideoTimeoutRef.current = setTimeout(() => {
                setShowSamsungVideo(false);
                hideSamsungVideoTimeoutRef.current = null;
            }, 100);
        }

        // Cleanup timeout on unmount
        return () => {
            if (hideSamsungVideoTimeoutRef.current) {
                clearTimeout(hideSamsungVideoTimeoutRef.current);
                hideSamsungVideoTimeoutRef.current = null;
            }
        };
    }, [isHoveringSamsung, isCursorNearBorder]);

    // Update showSubwayVideo based on hover over Graduate Student with delay before hiding
    useEffect(() => {
        // Clear any existing timeout
        if (hideSubwayVideoTimeoutRef.current) {
            clearTimeout(hideSubwayVideoTimeoutRef.current);
            hideSubwayVideoTimeoutRef.current = null;
        }

        const shouldShow = isHoveringGraduateStudent && !isCursorNearBorder;

        if (shouldShow) {
            // Show immediately
            setShowSubwayVideo(true);
        } else {
            // Save current playback time before hiding
            if (subwayVideoRef.current) {
                subwayVideoTimeRef.current = subwayVideoRef.current.currentTime;
            }
            // Hide with 100ms delay
            hideSubwayVideoTimeoutRef.current = setTimeout(() => {
                setShowSubwayVideo(false);
                hideSubwayVideoTimeoutRef.current = null;
            }, 100);
        }

        // Cleanup timeout on unmount
        return () => {
            if (hideSubwayVideoTimeoutRef.current) {
                clearTimeout(hideSubwayVideoTimeoutRef.current);
                hideSubwayVideoTimeoutRef.current = null;
            }
        };
    }, [isHoveringGraduateStudent, isCursorNearBorder]);

    // Update showStanfordVideo based on hover over Stanford with delay before hiding
    useEffect(() => {
        // Clear any existing timeout
        if (hideStanfordVideoTimeoutRef.current) {
            clearTimeout(hideStanfordVideoTimeoutRef.current);
            hideStanfordVideoTimeoutRef.current = null;
        }

        const shouldShow = isHoveringStanford && !isCursorNearBorder;

        if (shouldShow) {
            // Show immediately
            setShowStanfordVideo(true);
        } else {
            // Save current playback time before hiding
            if (stanfordVideoRef.current) {
                stanfordVideoTimeRef.current = stanfordVideoRef.current.currentTime;
            }
            // Hide with 100ms delay
            hideStanfordVideoTimeoutRef.current = setTimeout(() => {
                setShowStanfordVideo(false);
                hideStanfordVideoTimeoutRef.current = null;
            }, 100);
        }

        // Cleanup timeout on unmount
        return () => {
            if (hideStanfordVideoTimeoutRef.current) {
                clearTimeout(hideStanfordVideoTimeoutRef.current);
                hideStanfordVideoTimeoutRef.current = null;
            }
        };
    }, [isHoveringStanford, isCursorNearBorder]);

    // Update showNavigationVideo based on hover over Navigation with delay before hiding
    useEffect(() => {
        // Clear any existing timeout
        if (hideNavigationVideoTimeoutRef.current) {
            clearTimeout(hideNavigationVideoTimeoutRef.current);
            hideNavigationVideoTimeoutRef.current = null;
        }

        const shouldShow = isHoveringNavigation && !isCursorNearBorder;

        if (shouldShow) {
            // Show immediately
            setShowNavigationVideo(true);
        } else {
            // Save current playback time before hiding
            if (navigationVideoRef.current) {
                navigationVideoTimeRef.current = navigationVideoRef.current.currentTime;
            }
            // Hide with 100ms delay
            hideNavigationVideoTimeoutRef.current = setTimeout(() => {
                setShowNavigationVideo(false);
                hideNavigationVideoTimeoutRef.current = null;
            }, 100);
        }

        // Cleanup timeout on unmount
        return () => {
            if (hideNavigationVideoTimeoutRef.current) {
                clearTimeout(hideNavigationVideoTimeoutRef.current);
                hideNavigationVideoTimeoutRef.current = null;
            }
        };
    }, [isHoveringNavigation, isCursorNearBorder]);

    // Update showThesisVideo based on hover over Thesis with delay before hiding
    useEffect(() => {
        // Clear any existing timeout
        if (hideThesisVideoTimeoutRef.current) {
            clearTimeout(hideThesisVideoTimeoutRef.current);
            hideThesisVideoTimeoutRef.current = null;
        }

        const shouldShow = isHoveringThesis && !isCursorNearBorder;

        if (shouldShow) {
            // Show immediately
            setShowThesisVideo(true);
        } else {
            // Save current playback time before hiding
            if (thesisVideoRef.current) {
                thesisVideoTimeRef.current = thesisVideoRef.current.currentTime;
            }
            // Hide with 100ms delay
            hideThesisVideoTimeoutRef.current = setTimeout(() => {
                setShowThesisVideo(false);
                hideThesisVideoTimeoutRef.current = null;
            }, 100);
        }

        // Cleanup timeout on unmount
        return () => {
            if (hideThesisVideoTimeoutRef.current) {
                clearTimeout(hideThesisVideoTimeoutRef.current);
                hideThesisVideoTimeoutRef.current = null;
            }
        };
    }, [isHoveringThesis, isCursorNearBorder]);

    // Hide cursor when image is showing (but not for video popups)
    useEffect(() => {
        if (showImage) {
            document.body.style.cursor = 'none';
        } else {
            document.body.style.cursor = '';
        }

        return () => {
            document.body.style.cursor = '';
        };
    }, [showImage]);

    // IntersectionObserver to detect when Archive section is in view
    useEffect(() => {
        const archiveSection = archiveSectionRef.current;
        if (!archiveSection) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsArchiveInView(entry.isIntersecting);
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
                rootMargin: '-100px 0px -100px 0px' // Add some margin to trigger slightly before/after
            }
        );

        observer.observe(archiveSection);

        return () => {
            observer.disconnect();
        };
    }, [setIsArchiveInView]);

    // Expose scrollToArchive function via ref
    useImperativeHandle(ref, () => ({
        scrollToArchive: () => {
            if (archiveSectionRef.current) {
                const element = archiveSectionRef.current;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset for navbar

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Focus the "All" button immediately
                const allButton = archiveSectionRef.current?.querySelector('#archive-all-button');
                if (allButton) {
                    allButton.focus();
                }
            }
        }
    }));
    //#endregion

    return (
        <>
            {/* Page Container */}
            <motion.div
            key="page-container"
                className={`grid grid-cols-1 lg:grid-cols-10 w-full -mt-20 md:-mt-36
                items-start justify-items-start font-[family-name:var(--font-geist-sans)]
                gap-2 text-sm tracking-tight ${className}`}
            >

                {/* Profile / Desktop Container */}
                <main id="main-content" ref={bioSectionRef} key="bio-section" className="col-span-full relative w-[100%]">

                    {/* Headers Container */}
                    <div ref={headersContainerRef} className="pt-64">

                        {/* Header 1 */}
                        <h1
                            id="header-1"
                            ref={header1Ref}
                            className="font-medium tracking-[-1pt] text-6xl col-span-full"
                        >
                            Depending on your perspective<span className="opacity-100 font-light">...</span>
                        </h1>

                        {/* Header 2 */}
                        <h2
                            id="header-2"
                            className="pt-10 text-6xl font-medium tracking-[-1pt]"
                            variants={animateInChild}
                        >
                            <span ref={header2ContainerRef} style={{ display: 'inline-block' }}>
                                <span ref={header2Ref}>Chris Leow is either a Product Designer with an intimate eye for Art Direction, </span>
                                <span ref={header2Part2Ref}>or an Art Director with an equally intimate understanding of technology.</span>
                            </span>
                        </h2>

                        {/* Image */}
                        <AnimatePresence>
                        {showImage && (
                            <motion.div
                                className="rounded-full w-64 h-64 fixed shadow-[0px_2px_30px_rgba(0,0,0,0.3)] border-b-1 border-white/15 overflow-hidden pointer-events-none z-50 drop-shadow-[2px_10px_25px_rgba(0,0,0,0.5)]"
                                style={{
                                    left: imageXpx,
                                    top: imageYpx,
                                    rotate: springImageRotation,
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 600,
                                    damping: 30,
                                    duration: 0.1
                                }}
                            >
                                <motion.img
                                    src='/profile/profilelandscape2.jpg'
                                    className="rounded-full h-full w-full scale-[120%] origin-top object-cover object-[107%_30%] transition-all"
                                    variants={animateInChild}
                                />
                                <div className="absolute inset-0 rounded-full shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.15)] pointer-events-none" />
                            </motion.div>
                        )}
                        </AnimatePresence>

                        {/* ISV Video */}
                        {isMounted && createPortal(
                        <AnimatePresence>
                            {showISVVideo && (
                                <motion.div
                                    className="rounded-[20pt] w-96 aspect-video fixed shadow-[0px_2px_30px_rgba(0,0,0,0.3)] border-b-1 border-white/15 overflow-hidden pointer-events-none z-50 drop-shadow-[2px_10px_25px_rgba(0,0,0,0.5)]"
                                    style={{
                                        left: isvVideoXpx,
                                        top: isvVideoYpx,
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 600,
                                        damping: 30,
                                        duration: 0.1
                                    }}
                                >
                                    <motion.video
                                        ref={isvVideoRef}
                                        src="/isv/cover_2.mp4"
                                        className="h-full w-full object-cover transition-all"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        variants={animateInChild}
                                        onLoadedData={(e) => {
                                            if (isvVideoTimeRef.current > 0) {
                                                e.target.currentTime = isvVideoTimeRef.current;
                                            }
                                        }}
                                        onTimeUpdate={(e) => {
                                            isvVideoTimeRef.current = e.target.currentTime;
                                        }}
                                    />
                                    <div className="absolute inset-0 rounded-[3pt] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.15)] pointer-events-none" />
                                </motion.div>
                            )}
                        </AnimatePresence>,
                        document.body
                        )}

                        {/* Ghibli Video */}
                        {isMounted && createPortal(
                        <AnimatePresence>
                            {showGhibliVideo && (
                                <motion.div
                                    className="rounded-[20pt] w-96 aspect-video fixed shadow-[0px_2px_30px_rgba(0,0,0,0.3)] border-b-1 border-white/15 overflow-hidden pointer-events-none z-50 drop-shadow-[2px_10px_25px_rgba(0,0,0,0.5)]"
                                    style={{
                                        left: ghibliVideoXpx,
                                        top: ghibliVideoYpx,
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 600,
                                        damping: 30,
                                        duration: 0.1
                                    }}
                                >
                                    <motion.video
                                        ref={ghibliVideoRef}
                                        src="/Ghibli/banner1.mp4"
                                        className="h-full w-full object-cover transition-all"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        variants={animateInChild}
                                        onLoadedData={(e) => {
                                            if (ghibliVideoTimeRef.current > 0) {
                                                e.target.currentTime = ghibliVideoTimeRef.current;
                                            }
                                        }}
                                        onTimeUpdate={(e) => {
                                            ghibliVideoTimeRef.current = e.target.currentTime;
                                        }}
                                    />
                                    <div className="absolute inset-0 rounded-[3pt] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.15)] pointer-events-none" />
                                </motion.div>
                            )}
                        </AnimatePresence>,
                        document.body
                        )}

                        {/* Nike Video */}
                        {isMounted && createPortal(
                        <AnimatePresence>
                            {showNikeVideo && (
                                <motion.div
                                    className="rounded-[20pt] w-48 aspect-[9/16] fixed shadow-[0px_2px_30px_rgba(0,0,0,0.3)] border-b-1 border-white/15 overflow-hidden pointer-events-none z-50 drop-shadow-[2px_10px_25px_rgba(0,0,0,0.5)]"
                                    style={{
                                        left: nikeVideoXpx,
                                        top: nikeVideoYpx,
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 600,
                                        damping: 30,
                                        duration: 0.1
                                    }}
                                >
                                    <motion.video
                                        ref={nikeVideoRef}
                                        src="/nike/cover.mp4"
                                        className="h-full w-full object-cover transition-all"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        variants={animateInChild}
                                        onLoadedData={(e) => {
                                            if (nikeVideoTimeRef.current > 0) {
                                                e.target.currentTime = nikeVideoTimeRef.current;
                                            }
                                        }}
                                        onTimeUpdate={(e) => {
                                            nikeVideoTimeRef.current = e.target.currentTime;
                                        }}
                                    />
                                    <div className="absolute inset-0 rounded-[3pt] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.15)] pointer-events-none" />
                                </motion.div>
                            )}
                        </AnimatePresence>,
                        document.body
                        )}

                        {/* Samsung Video */}
                        {isMounted && createPortal(
                        <AnimatePresence>
                            {showSamsungVideo && (
                                <motion.div
                                    className="rounded-[20pt] w-96 aspect-video fixed shadow-[0px_2px_30px_rgba(0,0,0,0.3)] border-b-1 border-white/15 overflow-hidden pointer-events-none z-50 drop-shadow-[2px_10px_25px_rgba(0,0,0,0.5)]"
                                    style={{
                                        left: samsungVideoXpx,
                                        top: samsungVideoYpx,
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 600,
                                        damping: 30,
                                        duration: 0.1
                                    }}
                                >
                                    <motion.video
                                        ref={samsungVideoRef}
                                        src="/samsung/montage.mp4"
                                        className="h-full w-full object-cover transition-all"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        variants={animateInChild}
                                        onLoadedData={(e) => {
                                            if (samsungVideoTimeRef.current > 0) {
                                                e.target.currentTime = samsungVideoTimeRef.current;
                                            }
                                        }}
                                        onTimeUpdate={(e) => {
                                            samsungVideoTimeRef.current = e.target.currentTime;
                                        }}
                                    />
                                    <div className="absolute inset-0 rounded-[3pt] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.15)] pointer-events-none" />
                                </motion.div>
                            )}
                        </AnimatePresence>,
                        document.body
                        )}

                        {/* Subway Video */}
                        {isMounted && createPortal(
                        <AnimatePresence>
                            {showSubwayVideo && (
                                <motion.div
                                    className="rounded-[20pt] w-96 aspect-video fixed shadow-[0px_2px_30px_rgba(0,0,0,0.3)] border-b-1 border-white/15 overflow-hidden pointer-events-none z-50 drop-shadow-[2px_10px_25px_rgba(0,0,0,0.5)]"
                                    style={{
                                        left: subwayVideoXpx,
                                        top: subwayVideoYpx,
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 600,
                                        damping: 30,
                                        duration: 0.1
                                    }}
                                >
                                    <motion.video
                                        ref={subwayVideoRef}
                                        src="/subway/cover_blank.mp4"
                                        className="h-full w-full object-cover transition-all contrast-125 brightness-90"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        variants={animateInChild}
                                        onLoadedData={(e) => {
                                            if (subwayVideoTimeRef.current > 0) {
                                                e.target.currentTime = subwayVideoTimeRef.current;
                                            }
                                        }}
                                        onTimeUpdate={(e) => {
                                            subwayVideoTimeRef.current = e.target.currentTime;
                                        }}
                                    />
                                    {/* Lockup overlay */}
                                    <img
                                        src="/subway/lockup.png"
                                        alt="Subway lockup"
                                        className="absolute top-1/2 left-[52.5%] transform -translate-x-1/2 -translate-y-1/2 z-20 max-w-[60%] h-auto object-contain pointer-events-none"
                                    />
                                    <div className="absolute inset-0 rounded-[3pt] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.15)] pointer-events-none" />
                                </motion.div>
                            )}
                        </AnimatePresence>,
                        document.body
                        )}

                        {/* Stanford Video */}
                        {isMounted && createPortal(
                        <AnimatePresence>
                            {showStanfordVideo && (
                                <motion.div
                                    className="rounded-[20pt] w-96 aspect-video fixed shadow-[0px_2px_30px_rgba(0,0,0,0.3)] border-b-1 border-white/15 overflow-hidden pointer-events-none z-50 drop-shadow-[2px_10px_25px_rgba(0,0,0,0.5)]"
                                    style={{
                                        left: stanfordVideoXpx,
                                        top: stanfordVideoYpx,
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 600,
                                        damping: 30,
                                        duration: 0.1
                                    }}
                                >
                                    <motion.video
                                        ref={stanfordVideoRef}
                                        src="/bloom/talk.mp4"
                                        className="h-full w-full object-cover transition-all"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        variants={animateInChild}
                                        onLoadedData={(e) => {
                                            if (stanfordVideoTimeRef.current > 0) {
                                                e.target.currentTime = stanfordVideoTimeRef.current;
                                            }
                                        }}
                                        onTimeUpdate={(e) => {
                                            stanfordVideoTimeRef.current = e.target.currentTime;
                                        }}
                                    />
                                    <div className="absolute inset-0 rounded-[3pt] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.15)] pointer-events-none" />
                                </motion.div>
                            )}
                        </AnimatePresence>,
                        document.body
                        )}

                        {/* Navigation Video */}
                        {isMounted && createPortal(
                        <AnimatePresence>
                            {showNavigationVideo && (
                                <motion.div
                                    className="rounded-[20pt] w-96 aspect-video fixed shadow-[0px_2px_30px_rgba(0,0,0,0.3)] border-b-1 border-white/15 overflow-hidden pointer-events-none z-50 drop-shadow-[2px_10px_25px_rgba(0,0,0,0.5)]"
                                    style={{
                                        left: navigationVideoXpx,
                                        top: navigationVideoYpx,
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 600,
                                        damping: 30,
                                        duration: 0.1
                                    }}
                                >
                                    <motion.video
                                        ref={navigationVideoRef}
                                        src="/subway/cover_blank.mp4"
                                        className="h-full w-full object-cover transition-all contrast-125 brightness-90"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        variants={animateInChild}
                                        onLoadedData={(e) => {
                                            if (navigationVideoTimeRef.current > 0) {
                                                e.target.currentTime = navigationVideoTimeRef.current;
                                            }
                                        }}
                                        onTimeUpdate={(e) => {
                                            navigationVideoTimeRef.current = e.target.currentTime;
                                        }}
                                    />
                                    {/* Lockup overlay */}
                                    <img
                                        src="/subway/lockup.png"
                                        alt="Subway lockup"
                                        className="absolute top-1/2 left-[52.5%] transform -translate-x-1/2 -translate-y-1/2 z-20 max-w-[60%] h-auto object-contain pointer-events-none"
                                    />
                                    <div className="absolute inset-0 rounded-[3pt] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.15)] pointer-events-none" />
                                </motion.div>
                            )}
                        </AnimatePresence>,
                        document.body
                        )}

                        {/* Thesis Video */}
                        {isMounted && createPortal(
                        <AnimatePresence>
                            {showThesisVideo && (
                                <motion.div
                                    className="rounded-[20pt] w-96 aspect-video fixed shadow-[0px_2px_30px_rgba(0,0,0,0.3)] border-b-1 border-white/15 overflow-hidden pointer-events-none z-50 drop-shadow-[2px_10px_25px_rgba(0,0,0,0.5)]"
                                    style={{
                                        left: thesisVideoXpx,
                                        top: thesisVideoYpx,
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 600,
                                        damping: 30,
                                        duration: 0.1
                                    }}
                                >
                                    <motion.video
                                        ref={thesisVideoRef}
                                        src="/thesis/lifeoscover.mp4"
                                        className="h-full w-full object-cover transition-all brightness-50"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        variants={animateInChild}
                                        onLoadedData={(e) => {
                                            if (thesisVideoTimeRef.current > 0) {
                                                e.target.currentTime = thesisVideoTimeRef.current;
                                            }
                                        }}
                                        onTimeUpdate={(e) => {
                                            thesisVideoTimeRef.current = e.target.currentTime;
                                        }}
                                    />
                                    {/* Lockup overlay */}
                                    <img
                                        src="/thesis/lifeoslockup.svg"
                                        alt="LifeOS lockup"
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 scale-100 h-auto object-contain pointer-events-none"
                                    />
                                    <div className="absolute inset-0 rounded-[3pt] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.15)] pointer-events-none" />
                                </motion.div>
                            )}
                        </AnimatePresence>,
                        document.body
                    )}

                        {/* Header 3 */}
                        <h3
                            id="header-3"
                            className="pt-10 text-4xl leading-[1.3] tracking-[-0.5pt]"
                            variants={animateInChild}
                        >
                            <span ref={header3Ref}>His admittedly unhealthy obsession for craft and storytelling has wound him through a career leading campaigns for <Link href="/isv">
                                <span
                                    className="hover:opacity-80 transition-opacity underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-sm"
                                    onMouseEnter={() => setIsHoveringSingaporeAirlines(true)}
                                    onMouseLeave={() => setIsHoveringSingaporeAirlines(false)}
                                    onFocus={(e) => {
                                        // Override GSAP: set all headers to opacity 100% when focused
                                        if (header1Ref.current) {
                                            gsap.set(header1Ref.current, { opacity: 1 });
                                        }
                                        if (header2Ref.current) {
                                            gsap.set(header2Ref.current, { opacity: 1 });
                                        }
                                        if (header2Part2Ref.current) {
                                            gsap.set(header2Part2Ref.current, { opacity: 1 });
                                        }
                                        if (header3Ref.current) {
                                            gsap.set(header3Ref.current, { opacity: 1 });
                                        }
                                        if (header3Part2Ref.current) {
                                            gsap.set(header3Part2Ref.current, { opacity: 1 });
                                        }
                                        // Center focused element in viewport
                                        e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                                    }}
                                    onBlur={() => {
                                        // Let GSAP resume control - refresh ScrollTrigger to restore current scroll state
                                        ScrollTrigger.refresh();
                                    }}
                                >Singapore Airlines</span>
                            </Link> and <span
                                tabIndex={0}
                                className="underline cursor-pointer hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-sm"
                                onMouseEnter={() => setIsHoveringStudioGhibli(true)}
                                onMouseLeave={() => setIsHoveringStudioGhibli(false)}
                                onClick={() => router.push('/ghibli')}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        router.push('/ghibli');
                                    }
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                                }}
                            >Studio Ghibli</span>, to motion design work for <span
                                tabIndex={0}
                                className="underline cursor-pointer hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-sm"
                                onMouseEnter={() => setIsHoveringNike(true)}
                                onMouseLeave={() => setIsHoveringNike(false)}
                                onClick={() => router.push('/nike')}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        router.push('/nike');
                                    }
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                                }}
                            >Nike</span> and <span
                                tabIndex={0}
                                className="underline cursor-pointer hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-sm"
                                onMouseEnter={() => setIsHoveringSamsung(true)}
                                onMouseLeave={() => setIsHoveringSamsung(false)}
                                onClick={() => router.push('/samsung')}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        router.push('/samsung');
                                    }
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                                }}
                            >Samsung</span>. </span>
                            <span ref={header3Part2Ref}>Today, he is a Graduate Student in Interaction Design based in NYC. He has since spoken at <span
                                tabIndex={0}
                                className="underline cursor-pointer hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-sm"
                                onMouseEnter={() => setIsHoveringStanford(true)}
                                onMouseLeave={() => setIsHoveringStanford(false)}
                                onClick={() => window.open('https://www.figma.com/deck/zX29aRXmKQE1orzfgvwDqN/Bloom-Final-Presentation?node-id=152-476', '_blank', 'noopener,noreferrer')}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        window.open('https://www.figma.com/deck/zX29aRXmKQE1orzfgvwDqN/Bloom-Final-Presentation?node-id=152-476', '_blank', 'noopener,noreferrer');
                                    }
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                                }}
                            >Stanford</span>, reimagined navigation within the <span
                                tabIndex={0}
                                className="underline cursor-pointer hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-sm"
                                onMouseEnter={() => setIsHoveringNavigation(true)}
                                onMouseLeave={() => setIsHoveringNavigation(false)}
                                onClick={() => router.push('/subway')}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        router.push('/subway');
                                    }
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                                }}
                            >NYC subway system</span>, and is currently investigating user agency in Human–AI Interaction for his <span
                                tabIndex={0}
                                className="underline cursor-pointer hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-sm"
                                onMouseEnter={() => setIsHoveringThesis(true)}
                                onMouseLeave={() => setIsHoveringThesis(false)}
                                onClick={() => window.open('https://bargainingwiththefuture.com', '_blank', 'noopener,noreferrer')}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        window.open('https://bargainingwiththefuture.com', '_blank', 'noopener,noreferrer');
                                    }
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                                }}
                            >thesis</span>.
                            
                            <br />
                            <br />
                            
                            <span className="relative inline-block">
                                <span
                                    tabIndex={0}
                                    className="underline cursor-pointer hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-sm"
                                    onClick={async () => {
                                        try {
                                            await navigator.clipboard.writeText('ithinkitschristopher@gmail.com');
                                            setShowCopiedMessage(true);
                                            if (copiedMessageTimeoutRef.current) {
                                                clearTimeout(copiedMessageTimeoutRef.current);
                                            }
                                            copiedMessageTimeoutRef.current = setTimeout(() => {
                                                setShowCopiedMessage(false);
                                                copiedMessageTimeoutRef.current = null;
                                            }, 2000);
                                        } catch (err) {
                                            console.error('Failed to copy email to clipboard:', err);
                                        }
                                    }}
                                    onKeyDown={async (e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            try {
                                                await navigator.clipboard.writeText('ithinkitschristopher@gmail.com');
                                                setShowCopiedMessage(true);
                                                if (copiedMessageTimeoutRef.current) {
                                                    clearTimeout(copiedMessageTimeoutRef.current);
                                                }
                                                copiedMessageTimeoutRef.current = setTimeout(() => {
                                                    setShowCopiedMessage(false);
                                                    copiedMessageTimeoutRef.current = null;
                                                }, 2000);
                                            } catch (err) {
                                                console.error('Failed to copy email to clipboard:', err);
                                            }
                                        }
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                                    }}
                                >Email</span>
                                <AnimatePresence>
                                    {showCopiedMessage && (
                                        <motion.span
                                            initial={{ opacity: 0, y: 0, scale: 1 }}
                                            animate={{ opacity: 1, y: -10, scale: 1.2 }}
                                            exit={{ opacity: 0, y: -20, scale: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness:900,
                                                damping: 20
                                            }}
                                            className={`absolute left-3 bottom-full mb-2 px-3 py-1.5 rounded-full text-sm whitespace-nowrap pointer-events-none tracking-tight
                                                border border-white/35 bg-white dark:bg-transparent text-foreground
                                                shadow-glass-border-light dark:shadow-glass-border
                                                ${browserType === 'chrome' 
                                                    ? '' 
                                                    : browserType === 'safari' 
                                                        ? 'backdrop-blur-3xl bg-white' 
                                                        : browserType === 'firefox' 
                                                            ? 'backdrop-blur-3xl bg-white' 
                                                            : 'backdrop-blur-3xl bg-white'
                                                }`}
                                            style={browserType === 'chrome' ? {
                                                backdropFilter: 'blur(1.25px) url(#backdrop-distortion)',
                                            } : {}}
                                        >
                                            Copied!
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </span>/<span
                                tabIndex={0}
                                className="underline cursor-pointer hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-sm"
                                onClick={() => window.open('https://www.linkedin.com/in/chris-leow-93372b184/', '_blank', 'noopener,noreferrer')}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        window.open('https://www.linkedin.com/in/chris-leow-93372b184/', '_blank', 'noopener,noreferrer');
                                    }
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                                }}
                            >LinkedIn</span>/<span
                                tabIndex={0}
                                className="underline cursor-pointer hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-sm"
                                onClick={() => window.open('https://www.instagram.com/khristurtle/', '_blank', 'noopener,noreferrer')}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        window.open('https://www.instagram.com/khristurtle/', '_blank', 'noopener,noreferrer');
                                    }
                                }}
                                onFocus={(e) => {
                                    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                                }}
                            >Social</span></span>
                        </h3>
                    </div>
                </main>

                {/* Currently */}
                {/* <ResumeSectionHeader
                    // header="December 2025"
                    // title="Highlights."
                    headerClassName=""
                /> */}
                <Currently className='col-span-full mb-72 -mt-72' key='currently' toggleWork={toggleWork} />

                {/* Archive */}
                <ResumeSectionHeader
                    header="2016 – 2025"
                    title="Archive."
                    headerClassName="md:ml-1"
                />
                <Archive ref={archiveSectionRef} className='col-span-full' key='archive' toggleWork={toggleWork} />

                {/* CV */}
                <ResumeSectionHeader
                    // header="CV"
                    title="Info."
                    headerClassName="hidden md:block text-[12pt] mt-72 mb-3 ml-2"
                    titleClassName="hidden md:block tracking-[-2.5pt] text-[64pt] mt-72 mb-6 w-full"
                />

                {/* Story Container */}
                <motion.div
                    className={`
                  hidden md:grid
                  border-r-[1.5px] border-b-[2px] border-t-[0.1px] border-l-[0.1px]
                  border-white/15 w-full rounded-3xl col-span-full
                  bg-background dark:bg-transparent leading-[150%]
                  transition-non-color
                  shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_4px_0px_rgba(255,255,255,0.15)]
                  p-6 px-12 text-sm grid-cols-9 relative overflow-hidden
                `}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
                    key="story-container"
                >
                    {/* Story Selector */}
                    <div className="col-span-2 transition-non-color flex flex-col gap-1.5 items-start">

                        <p className="font-medium text-lg lg:text-xl tracking-tight mb-4">But first, are you<span className="font-light text-lg lg:text-xl">...</span></p>

                        <button
                            className={`flex justify-center items-center text-md lg:text-lg cursor-pointer hover:bg-foreground dark:hover:bg-transparent hover:text-background dark:hover:text-white
                    border-1.5 dark:hover:border-foreground transition-non-color rounded-full px-2.5 hover:scale-95 -ml-3
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background
                    ${visibleSections.desktopAI ? 'border-foreground dark:bg-transparent text-foreground' : 'border-transparent'}`}
                            onClick={() => showStory('desktopAI')}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    showStory('desktopAI');
                                }
                            }}
                        >In a hurry?</button>

                        <button
                            className={`flex justify-center items-center text-md lg:text-lg cursor-pointer hover:bg-foreground dark:hover:bg-transparent hover:text-background dark:hover:text-white
                    border-1.5 dark:hover:border-foreground transition-non-color rounded-full px-2.5 hover:scale-95 -ml-3
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background
                    ${visibleSections.desktopShort ? 'border-foreground dark:bg-transparent text-foreground' : 'border-transparent'}`}
                            onClick={() => showStory('desktopShort')}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    showStory('desktopShort');
                                }
                            }}
                        >Keen to know more?</button>

                        <button
                            className={`flex justify-center items-center text-md lg:text-lg cursor-pointer hover:bg-foreground dark:hover:bg-transparent hover:text-background dark:hover:text-white
                    border-1.5 dark:hover:border-foreground transition-non-color rounded-full px-2.5 hover:scale-95 -ml-3
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background
                    ${visibleSections.desktopLong ? 'border-foreground dark:bg-transparent text-foreground' : 'border-transparent'}`}
                            onClick={() => showStory('desktopLong')}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    showStory('desktopLong');
                                }
                            }}
                        >Down for an essay?</button>

                    </div>

                    {/* Line */}
                    {/* <div className="absolute h-[80%] w-[1px] bg-black/5 dark:bg-white/5 left-64 top-7" /> */}

                    {/* Stories */}
                    <AnimatePresence mode="wait">

                        {/* Extra Short */}
                        {visibleSections.desktopAI && (
                            <motion.div
                                className="col-span-7 grid grid-cols-4"
                                key="ai-content"
                                variants={storyContainer}
                                initial="hidden"
                                animate="show"
                                exit={{ opacity: 0, transition: { duration: 0 } }}
                            >
                                <motion.div className="col-span-1" variants={storyColumn}>
                                    <motion.h1 className="text-lg lg:text-xl font-medium tracking-tight" variants={storyElement}>
                                        Experience
                                    </motion.h1>
                                    <motion.div className="text-xs lg:text-sm" variants={storyElement}>
                                        <p className="mt-4 font-semibold">Design + Advertising</p>
                                        <p className="">Senior Creative</p>
                                        <p>8+ Years of Experience</p>

                                        <p className="mt-6 font-semibold">Product Design</p>
                                        <p className="">Graduate Student</p>
                                    </motion.div>
                                </motion.div>

                                <motion.div className="col-span-1" variants={storyColumn}>
                                    <motion.h1 className="text-lg lg:text-xl font-medium tracking-tight" variants={storyElement}>
                                        Education
                                    </motion.h1>
                                    <motion.div className="text-xs lg:text-sm" variants={storyElement}>
                                        <p className="mt-4">MFA Interaction Design</p>
                                        <p>School of Visual Arts</p>
                                        <i>2024 – 2026</i>

                                        <p className="mt-4">Diploma in Communication Design</p>
                                        <p>Temasek Polytechnic</p>
                                        <i>2013 – 2016</i>
                                    </motion.div>
                                </motion.div>

                                <motion.div className="col-span-2 text-xs lg:text-sm" variants={storyColumn}>
                                    <motion.h1 className="text-lg lg:text-xl font-medium tracking-tight" variants={storyElement}>
                                        Skillsets
                                    </motion.h1>
                                    <motion.div className="grid grid-cols-3 -mr-20" variants={storyElement}>
                                        <div>
                                            <p className="mt-4">Creative Direction</p>
                                            <p>Product Design</p>
                                            <p>Motion Design</p>
                                            <p>Video Editing</p>
                                            <p>Photography</p>
                                            <p>Content Creation</p>
                                        </div>
                                        <div>
                                            <p className="mt-4">Photoshop</p>
                                            <p>Illustrator</p>
                                            <p>InDesign</p>
                                            <p>Premiere Pro</p>
                                            <p>After Effects</p>
                                            <p>Figma</p>
                                            <p>Blender</p>
                                            <p>Lightroom</p>
                                        </div>
                                        <div>
                                            <p className="mt-4">VSCode</p>
                                            <p>Cursor</p>
                                            <p>Ollama</p>
                                            <p>JavaScript</p>
                                            <p>Python</p>
                                            <p>HTML / JSX</p>
                                            <p>Tailwind CSS</p>
                                            <p>React Native</p>
                                            <p>React.js</p>
                                            <p>Next.js + Vercel</p>
                                            <p>p5.js</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )}

                        {/* Short */}
                        {visibleSections.desktopShort && (
                            <motion.div
                                className="col-span-7 grid grid-cols-3 gap-10 text-sm leading-[155%]"
                                key="short-content"
                                variants={storyContainer}
                                initial="hidden"
                                animate="show"
                                exit={{ opacity: 0, transition: { duration: 0 } }}
                            >
                                {/* Who? */}
                                <motion.div className="col-span-1 " variants={storyColumn}>
                                    <motion.h1 className="text-lg lg:text-xl font-medium tracking-tight mb-4" variants={storyElement}>Who?</motion.h1>
                                    <motion.div variants={storyElement}>
                                        <p className="mb-3 text-sm tracking-normal leading-[1.4rem]">Born and raised in sunny <i className="mr-0.5 font-light ">(to put it mildly)</i> Singapore, Chris was once a kid captivated by the romanticized image of beret-wearing, palette-wielding artists. Today, he finds himself living the surreal reality of conceptualizing, designing, and directing what is, in essence, art for the world.</p>

                                        <p className="text-sm tracking-normal leading-[1.4rem]">With a meticulous eye for finesse and a fervor for craft, he takes a possibly unhealthy pride in crafting visually compelling and engaging experiences, no matter the discipline.</p>
                                    </motion.div>
                                </motion.div>

                                {/* What? */}
                                <motion.div className="col-span-1" variants={storyColumn}>
                                    <motion.h1 className="text-lg lg:text-xl font-medium tracking-tight mb-4" variants={storyElement}>What?</motion.h1>
                                    <motion.div variants={storyElement}>
                                        <p className="mb-3 text-sm tracking-normal leading-[1.4rem]">As a multidisciplinary creative and former Creative Lead at the ArtScience Museum in Singapore,
                                            he finds himself with eight of his best years of experience in graphic design and advertising. In that time, he honed his craft at two of Singapore's leading creative agencies, BBH and TBWA, where he served as Art Director on multiple brand campaigns for Singapore Airlines and had the privilege of working with global brands like IKEA, Samsung, Nike, Studio Ghibli, and Uniqlo.</p>

                                        <p className="mt-4 text-sm tracking-normal leading-[1.4rem]">Now, seeking to further his craft, Chris dedicates himself to studying human-centered design principles <span className="italic mr-0.5">(debating them, honestly)</span> as he pursues a Master’s in Interaction Design.</p>


                                        <p className="text-sm mt-4 tracking-normal leading-[1.4rem]">His goal is to blend the sensibilities he gained as an Art Director with a deep understanding of UX to create experiences that are visually delightful, intuitive, and ultimately magical—for people (and, well, himself, of course).
                                        </p>
                                    </motion.div>
                                </motion.div>

                                {/* And? */}
                                <motion.div className="col-span-1" variants={storyColumn}>
                                    <motion.h1 className="text-lg lg:text-xl font-medium tracking-tight mb-4" variants={storyElement}>And?</motion.h1>
                                    <motion.div variants={storyElement}>
                                        <p className="mb-3 text-sm tracking-normal leading-[1.4rem]">In his spare time, he works on... well, this very website, treating it as a platform for pushing his personal visual design sensibilities while gaining a firsthand understanding of what it means to continuously iterate on a design system.</p>
                                        <p className="text-sm mb-3 tracking-normal leading-[1.4rem]">Additionally, he can't now unsee the intentional design decisions of our everyday world, often devolving into arguments about whether that falls under Product Design or Interaction Design.</p>

                                        <p className="text-sm tracking-normal leading-[1.4rem]">When he is finally, actually, not working, you'll likely find him thrifting for furniture or, for a more colloquial term, stooping on the streets of New York City. He does love building his living space up, though he wouldn&apos;t go so far as to call it interior design.</p>

                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )}

                        {/* Long */}
                        {visibleSections.desktopLong && (
                            <motion.div
                                className="col-span-7 grid grid-cols-4 gap-8"
                                key="long-content"
                                variants={storyContainer}
                                initial="hidden"
                                animate="show"
                                exit={{ opacity: 0, transition: { duration: 0 } }}
                            >
                                <motion.h1
                                    className="text-lg lg:text-xl font-medium tracking-tight col-span-full -ml-0.5"
                                    variants={storyColumn}
                                >
                                    A love letter to myself:
                                </motion.h1>

                                <motion.div className="col-span-1" variants={storyColumn}>
                                    <motion.div variants={storyElement}>
                                        <p className="italic text-sm opacity-50 pr-8">If everyone is busy making everything, how can anyone perfect anything? We start to confuse convenience with joy. Abundance with choice.</p>
                                        <p className="italic text-sm opacity-50 mt-4 pr-8">Designing something requires focus. The first thing we ask is: What do we want people to feel. Surprise. Love. Connection.</p>
                                        <p className="italic text-sm opacity-50 mt-4 pr-8">Then we begin to craft around our intention. It takes time. There are a thousand no&apos;s for every yes. We simplify, we perfect, we start over, until everything we touch enhances each life it touches.
                                        </p>
                                        <p className="italic text-sm opacity-50 mt-4 pr-8">Only then do we sign our work:<br /> Designed by Apple in California</p>

                                        <a className="mt-6 -ml-1 flex justify-center rounded-full border-1 w-[135px] pl-1 border-black/20 dark:border-white/50 mb-2
                                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background"
                                            href="https://www.youtube.com/watch?v=LcGPI2tV2yY"
                                            target="_blank"
                                            rel="noopener noreferrer">

                                            Intention – Apple

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="2 2 20 20"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-2.5 h-2.5 mt-0.5 ml-0.5"
                                                aria-hidden="true">
                                                <path d="M7 1717 7" />
                                                <path d="M7 7h10v10" />
                                            </svg>
                                        </a>
                                    </motion.div>
                                </motion.div>

                                <motion.div className="col-span-1" variants={storyColumn}>
                                    <motion.div variants={storyElement}>
                                        <p className="mb-3">It all started from this very film. I remember the first time I watched it–it was very much a lightbulb moment for me. I was a student pursuing Communication Design then, a freshman back in 2014.</p>
                                        <p className="mb-3">It was at a school-wide convention, the entire design school, that is. We were in a massive auditorium, the director of our school played the film for all to watch on a screen that could&apos;ve possibly been what is two floors high.</p>
                                        <p className="mb-3">That was the first time I had watched anything like that. In retrospect, the message conveyed in the film likely didn&apos;t even register within me. But the execution absolutely did, even though the concept of Motion Graphics couldn&apos;t be more foreign to me then.</p>
                                        <p className="mb-3">Serendipitously, I found myself in a class on Motion Graphics a few months later, and I daresay it all intuitively clicked within me the first time I opened After Effects. It set me down a path driven by manic passion for crafting visuals that engaged by movement.</p>
                                        <p className="mb-3">With a combination of sheer luck and my skillset in Motion Graphics, I found myself with a foot in the Advertising industry as a young creative.</p>
                                    </motion.div>
                                </motion.div>

                                <motion.div className="col-span-1" variants={storyColumn}>
                                    <motion.div variants={storyElement}>
                                        <p className="mb-3">After 8 years, and as I ever fervently sought the next step throughout that led me from starting out as a Motion Designer to eventually being a Creative Lead; I found myself with a startling ability to tell a story behind my craft.</p>
                                        <p className="mb-3">One thing that remained absolute however, was that I never stopped <i>doing</i>. Just because I found myself an Art Director, didn&apos;t mean that I no longer needed to get my hands dirty with Illustrator and After Effects. <i className="opacity-50 mr-1.5 hidden">(along with a disproportionate amount of Powerpoint, Keynote and Teams).</i> Crafting was the one North Star that got me where I was, and kept me doing what I did, and I wasn&apos;t about to leave that behind.</p>
                                        <p className="mb-3">Every piece of work on this site went through a thousand no&apos;s for the final yes. It was crafted amidst busyness, with focus and the aim for perfection <i className="opacity-50 mr-1.5 hidden ">(not that I personally believe in the conventional understanding of perfection; I don&apos;t).</i></p>
                                        <p className="mb-6">Today, an entire decade later, as I sit here writing this, the very message of the film that started it all could not be more poignant. What was once the visuals that resonated so deeply, it is now the message that strikes a deeper chord:</p>
                                    </motion.div>
                                </motion.div>

                                <motion.div className="col-span-1" variants={storyColumn}>
                                    <motion.div variants={storyElement}>
                                        <i className="font- opacity-60">&quot;The first thing we ask is: What do we want people to feel? Delight. Surprise. Love. Connection. Then we begin to craft around our intention.&quot;</i>
                                        <p className="mt-6 mb-3">As an Advertising Creative who grew the muscle to tell stories, and now a Graduate Student currently pursuing a Master&apos;s in Interaction Design; the above message resonates immensely. It&apos;s one thing to be able to tell stories, but a completely different discipline to craft stories that people <i>want</i> to listen to.</p>
                                        <p className="mb-3">Am I capable of craft? <i className="mr-1">Well, gosh, after all this while; I sure hope so.</i> Am I able to tell stories? <i>I certainly have lots of fun doing it.</i></p>
                                        <p className="">Am I able to discern what people want to feel?</p>
                                        <p className="font- mb-3">That is precisely the question I&apos;m onto right now–in the very field of Interaction Design, and where I am at now as a Creative.</p>
                                        <p className="">More to come, as always.</p>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Resume Footer */}
                <ResumeFooter />

            </motion.div>
        </>
    );
});

Resume.displayName = 'Resume';

export default Resume;