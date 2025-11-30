'use client';
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import BestWorkPage3 from "./bestworkv3";
import MotionDesignPage from "./motion";
import PhotographyPage from "./photography";
import ContentPage from "./content";
import ProductPage from "./product";
import { animateInChild } from "../../constants/animations";
import Currently from "./currently";
import Archive from "./archive";
import ResumeFooter from "../resume/ResumeFooter";
import { useExperienceState } from "../../hooks/useExperienceState";
import ResumeSectionHeader from "../resume/ResumeSectionHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Resume({ className = "", toggleWork }) {
    const [timeNyc, setTimeNyc] = useState(null);
    const [timeSg, setTimeSg] = useState(null);
    const [isAtTop, setIsAtTop] = useState(true);
    const { visibleSections, showStory } = useExperienceState();
    
    // GSAP scroll animation refs
    const bioSectionRef = useRef(null);
    const headersContainerRef = useRef(null);
    const header1Ref = useRef(null);
    const header2ContainerRef = useRef(null);
    const header2Ref = useRef(null);
    const header2Part2Ref = useRef(null);
    const header3Ref = useRef(null);
    const header3Part2Ref = useRef(null);

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
            setIsAtTop(window.scrollY < 1600); // Show gradient when within 100px of top
        };

        // Check initial scroll position
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // GSAP ScrollTrigger for header fade animation with extended scroll
    useEffect(() => {
        // Set initial opacity, position, and scale states
        if (headersContainerRef.current && header1Ref.current && header2ContainerRef.current && header2Ref.current && header2Part2Ref.current && header3Ref.current && header3Part2Ref.current && bioSectionRef.current) {
            gsap.set(headersContainerRef.current, { y: 150 });
            gsap.set(header1Ref.current, { opacity: 1, scale: 1.05, transformOrigin: "left" });
            gsap.set(header2ContainerRef.current, { scale: 1, transformOrigin: "left" });
            gsap.set(header2Ref.current, { opacity: 0.2 });
            gsap.set(header2Part2Ref.current, { opacity: 0.2 });
            gsap.set(header3Ref.current, { opacity: 0.1 });
            gsap.set(header3Part2Ref.current, { opacity: 0.1 });

            // Create ScrollTrigger with extended scroll
            const st = ScrollTrigger.create({
                trigger: bioSectionRef.current,
                start: "top top",
                end: "+=150%", // Extend the scroll area by 100vh
                pin: true, // Pin the section in place
                pinSpacing: true,
                scrub: 1, // Smooth scrubbing tied to scroll position
                markers: false, // Set to true for debugging
                anticipatePin: 1,
                onUpdate: (self) => {
                    const progress = self.progress; // 0 to 1
                    
                    // Phase 1: 0% to 11.33% of scroll (progress 0 to 0.1133)
                    // Header 1 = 100% → 20%, Header 2 = 20% → 100%, Header 3 = 10% (held)
                    // Container y-position moves from 150 to 0 (upward 150px)
                    // Header 1 scale moves from 1.05x to 1x
                    // Header 2 scale moves from 1x to 1.03x
                    if (progress <= 0.1133) {
                        const phase1Progress = progress / 0.1133; // Maps 0->0, 0.1133->1
                        
                        // Container: move from y: 150 to y: 0
                        const containerY = gsap.utils.interpolate(150, 0, phase1Progress);
                        gsap.set(headersContainerRef.current, { y: containerY });
                        
                        // Header 1: fade from 1 to 0.2, scale from 1.05 to 1
                        const header1Opacity = gsap.utils.interpolate(1, 0.2, phase1Progress);
                        const header1Scale = gsap.utils.interpolate(1.05, 1, phase1Progress);
                        gsap.set(header1Ref.current, { opacity: header1Opacity, scale: header1Scale, transformOrigin: "left" });
                        
                        // Header 2 Container: scale from 1 to 1.03
                        const header2ContainerScale = gsap.utils.interpolate(1, 1.03, phase1Progress);
                        gsap.set(header2ContainerRef.current, { scale: header2ContainerScale, transformOrigin: "left" });
                        
                        // Header 2: fade from 0.2 to 1
                        const header2Opacity = gsap.utils.interpolate(0.2, 1, phase1Progress);
                        gsap.set(header2Ref.current, { opacity: header2Opacity });
                        
                        // Header 2 Part 2: stay at 0.2 opacity
                        gsap.set(header2Part2Ref.current, { opacity: 0.2 });
                        
                        // Header 3: stay at 0.1 opacity (do not fade out)
                        gsap.set(header3Ref.current, { opacity: 0.1 });
                        gsap.set(header3Part2Ref.current, { opacity: 0.1 });
                    }
                    // Phase 2a1: 11.33% to 22.66% of scroll (progress 0.1133 to 0.2266)
                    // Header 2 Part 2 remains at 0.2 opacity, Header 2 stays at 1.0
                    else if (progress <= 0.2266) {
                        // Container: stay at y: 0 (already at this value from Phase 1)
                        gsap.set(headersContainerRef.current, { y: 0 });
                        
                        // Header 1: stay at 0.2 opacity and scale 1 (already at these values from Phase 1)
                        gsap.set(header1Ref.current, { opacity: 0.2, scale: 1, transformOrigin: "left" });
                        
                        // Header 2 Container: stay at scale 1.03 (already at this value from Phase 1)
                        gsap.set(header2ContainerRef.current, { scale: 1.03, transformOrigin: "left" });
                        
                        // Header 2: stay at 1 opacity (already at this value from Phase 1)
                        gsap.set(header2Ref.current, { opacity: 1 });
                        
                        // Header 2 Part 2: stay at 0.2 opacity
                        gsap.set(header2Part2Ref.current, { opacity: 0.2 });
                        
                        // Header 3: stay at 0.1 opacity (already at this value from Phase 1)
                        gsap.set(header3Ref.current, { opacity: 0.1 });
                        gsap.set(header3Part2Ref.current, { opacity: 0.1 });
                    }
                    // Phase 2a2: 22.66% to 28.33% of scroll (progress 0.2266 to 0.2833)
                    // Header 2 fades from 1 to 0.2, Header 2 Part 2 fades from 0.2 to 1
                    else if (progress <= 0.2833) {
                        const phase2a2Progress = (progress - 0.2266) / 0.0567; // Maps 0.2266->0, 0.2833->1
                        
                        // Container: stay at y: 0 (already at this value from Phase 1)
                        gsap.set(headersContainerRef.current, { y: 0 });
                        
                        // Header 1: stay at 0.2 opacity and scale 1 (already at these values from Phase 1)
                        gsap.set(header1Ref.current, { opacity: 0.2, scale: 1, transformOrigin: "left" });
                        
                        // Header 2 Container: stay at scale 1.03
                        gsap.set(header2ContainerRef.current, { scale: 1.03, transformOrigin: "left" });
                        
                        // Header 2: fade from 1 to 0.2
                        const header2Opacity = gsap.utils.interpolate(1, 0.2, phase2a2Progress);
                        gsap.set(header2Ref.current, { opacity: header2Opacity });
                        
                        // Header 2 Part 2: fade from 0.2 to 1
                        const header2Part2Opacity = gsap.utils.interpolate(0.2, 1, phase2a2Progress);
                        gsap.set(header2Part2Ref.current, { opacity: header2Part2Opacity });
                        
                        // Header 3: stay at 0.1 opacity (already at this value from Phase 1)
                        gsap.set(header3Ref.current, { opacity: 0.1 });
                        gsap.set(header3Part2Ref.current, { opacity: 0.1 });
                    }
                    // Phase 2a3: 28.33% to 39.66% of scroll (progress 0.2833 to 0.3966)
                    // Hold/pause - keep end state of Phase 2a2
                    else if (progress <= 0.3966) {
                        // Container: stay at y: 0 (already at this value from Phase 1)
                        gsap.set(headersContainerRef.current, { y: 0 });
                        
                        // Header 1: stay at 0.2 opacity and scale 1 (already at these values from Phase 1)
                        gsap.set(header1Ref.current, { opacity: 0.2, scale: 1, transformOrigin: "left" });
                        
                        // Header 2 Container: stay at scale 1.03 (end state of Phase 2a2)
                        gsap.set(header2ContainerRef.current, { scale: 1.03, transformOrigin: "left" });
                        
                        // Header 2: stay at 0.2 opacity (end state of Phase 2a2)
                        gsap.set(header2Ref.current, { opacity: 0.2 });
                        
                        // Header 2 Part 2: stay at 1 opacity (end state of Phase 2a2)
                        gsap.set(header2Part2Ref.current, { opacity: 1 });
                        
                        // Header 3: stay at 0.1 opacity (already at this value from Phase 1)
                        gsap.set(header3Ref.current, { opacity: 0.1 });
                        gsap.set(header3Part2Ref.current, { opacity: 0.1 });
                    }
                    // Phase 2b1: 39.66% to 50.99% of scroll (progress 0.3966 to 0.5099)
                    // Container moves upward (complete movement), Header 1 fades from 0.2 to 0.1, Header 2 stays at 0.2, Header 2 Part 2 fades from 1 to 0.2
                    // Header 3 fades from 0.1 to 1, Header 3 Part 2 stays at 0.1
                    // Header 2 scale moves from 1.03x to 1x
                    else if (progress <= 0.5099) {
                        const phase2b1Progress = (progress - 0.3966) / 0.1133; // Maps 0.3966->0, 0.5099->1
                        
                        // Container: move from y: 0 to y: -150 (complete upward movement of 150px)
                        const containerY = gsap.utils.interpolate(0, -150, phase2b1Progress);
                        gsap.set(headersContainerRef.current, { y: containerY });
                        
                        // Header 1: fade from 0.2 to 0.1 (from Phase 1 end state)
                        const header1Opacity = gsap.utils.interpolate(0.2, 0.1, phase2b1Progress);
                        gsap.set(header1Ref.current, { opacity: header1Opacity, scale: 1, transformOrigin: "left" });
                        
                        // Header 2 Container: scale from 1.03 to 1
                        const header2ContainerScale = gsap.utils.interpolate(1.03, 1, phase2b1Progress);
                        gsap.set(header2ContainerRef.current, { scale: header2ContainerScale, transformOrigin: "left" });
                        
                        // Header 2: stay at 0.2 opacity
                        gsap.set(header2Ref.current, { opacity: 0.2 });
                        
                        // Header 2 Part 2: fade from 1 to 0.2
                        const header2Part2Opacity = gsap.utils.interpolate(1, 0.2, phase2b1Progress);
                        gsap.set(header2Part2Ref.current, { opacity: header2Part2Opacity });
                        
                        // Header 3: fade from 0.1 to 1
                        const header3Opacity = gsap.utils.interpolate(0.1, 1, phase2b1Progress);
                        gsap.set(header3Ref.current, { opacity: header3Opacity });
                        
                        // Header 3 Part 2: stay at 0.1 opacity
                        gsap.set(header3Part2Ref.current, { opacity: 0.1 });
                    }
                    // Phase 2b1pause: 50.99% to 62.32% of scroll (progress 0.5099 to 0.6232)
                    // Short pause/hold - keep end state of Phase 2b1
                    else if (progress <= 0.6232) {
                        // Container: stay at y: -150 (already at this value from Phase 2b1)
                        gsap.set(headersContainerRef.current, { y: -150 });
                        
                        // Header 1: stay at 0.1 opacity and scale 1 (end state of Phase 2b1)
                        gsap.set(header1Ref.current, { opacity: 0.1, scale: 1, transformOrigin: "left" });
                        
                        // Header 2 Container: stay at scale 1 (end state of Phase 2b1)
                        gsap.set(header2ContainerRef.current, { scale: 1, transformOrigin: "left" });
                        
                        // Header 2: stay at 0.2 opacity (end state of Phase 2b1)
                        gsap.set(header2Ref.current, { opacity: 0.2 });
                        gsap.set(header2Part2Ref.current, { opacity: 0.2 });
                        
                        // Header 3: stay at 1 opacity (end state of Phase 2b1)
                        gsap.set(header3Ref.current, { opacity: 1 });
                        
                        // Header 3 Part 2: stay at 0.1 opacity (end state of Phase 2b1)
                        gsap.set(header3Part2Ref.current, { opacity: 0.1 });
                    }
                    // Phase 2b2: 62.32% to 73.65% of scroll (progress 0.6232 to 0.7365)
                    // Container holds at -150, Header 1 holds at 0.1, Header 2 holds at 0.2, Header 2 Part 2 holds at 0.2
                    // Header 3 fades from 1 to 0.2, Header 3 Part 2 fades from 0.1 to 1
                    else if (progress <= 0.7365) {
                        const phase2b2Progress = (progress - 0.6232) / 0.1133; // Maps 0.6232->0, 0.7365->1
                        
                        // Container: stay at y: -150 (already at this value from Phase 2b1pause)
                        gsap.set(headersContainerRef.current, { y: -150 });
                        
                        // Header 1: stay at 0.1 opacity and scale 1 (already at this value from Phase 2b1pause)
                        gsap.set(header1Ref.current, { opacity: 0.1, scale: 1, transformOrigin: "left" });
                        
                        // Header 2 Container: stay at scale 1 (already at this value from Phase 2b1pause)
                        gsap.set(header2ContainerRef.current, { scale: 1, transformOrigin: "left" });
                        
                        // Header 2: stay at 0.2 opacity (already at this value from Phase 2b1pause)
                        gsap.set(header2Ref.current, { opacity: 0.2 });
                        gsap.set(header2Part2Ref.current, { opacity: 0.2 });
                        
                        // Header 3: fade from 1 to 0.2
                        const header3Opacity = gsap.utils.interpolate(1, 0.2, phase2b2Progress);
                        gsap.set(header3Ref.current, { opacity: header3Opacity });
                        
                        // Header 3 Part 2: fade from 0.1 to 1
                        const header3Part2Opacity = gsap.utils.interpolate(0.1, 1, phase2b2Progress);
                        gsap.set(header3Part2Ref.current, { opacity: header3Part2Opacity });
                    }
                    // Phase 2c: 73.65% to 85% of scroll (progress 0.7365 to 0.85)
                    // Container holds at -150, Header 1 holds at 0.1, Header 2 holds at 0.2
                    // Header 3 holds at 0.2, Header 3 Part 2 holds at 1.0
                    else if (progress <= 0.85) {
                        
                        // Container: stay at y: -150 (already at this value from Phase 2b2)
                        gsap.set(headersContainerRef.current, { y: -150 });
                        
                        // Header 1: stay at 0.1 opacity and scale 1 (from Phase 2b2 end state)
                        gsap.set(header1Ref.current, { opacity: 0.1, scale: 1, transformOrigin: "left" });
                        
                        // Header 2 Container: stay at scale 1 (already at this value from Phase 2b2)
                        gsap.set(header2ContainerRef.current, { scale: 1, transformOrigin: "left" });
                        
                        // Header 2: stay at 0.2 opacity (already at these values from Phase 2b2)
                        gsap.set(header2Ref.current, { opacity: 0.2 });
                        gsap.set(header2Part2Ref.current, { opacity: 0.2 });
                        
                        // Header 3: stay at 0.2 opacity (end state of Phase 2b2)
                        gsap.set(header3Ref.current, { opacity: 0.2 });
                        
                        // Header 3 Part 2: stay at 1 opacity (end state of Phase 2b2)
                        gsap.set(header3Part2Ref.current, { opacity: 1 });
                    }
                    // Phase 3: 85% to 100% of scroll (progress 0.85 to 1)
                    // Header 3 stays at 0.2, Header 3 Part 2 fades from 1 to 0.2
                    else {
                        const phase3Progress = (progress - 0.85) / 0.15; // Maps 0.85->0, 1->1
                        
                        // Container: stay at y: -150 (already at this value from Phase 2c)
                        gsap.set(headersContainerRef.current, { y: -150 });
                        
                        // Header 1: stay at 0.1 opacity and scale 1 (from Phase 2c end state)
                        gsap.set(header1Ref.current, { opacity: 0.1, scale: 1, transformOrigin: "left" });
                        
                        // Header 2 Container: stay at scale 1 (already at this value from Phase 2c)
                        gsap.set(header2ContainerRef.current, { scale: 1, transformOrigin: "left" });
                        
                        // Header 2: stay at 0.2 opacity (already at these values from Phase 2c)
                        gsap.set(header2Ref.current, { opacity: 0.2 });
                        gsap.set(header2Part2Ref.current, { opacity: 0.2 });
                        
                        // Header 3: stay at 0.2 opacity (from Phase 2c end state)
                        gsap.set(header3Ref.current, { opacity: 0.2 });
                        
                        // Header 3 Part 2: fade from 1 to 0.2
                        const header3Part2Opacity = gsap.utils.interpolate(1, 0.2, phase3Progress);
                        gsap.set(header3Part2Ref.current, { opacity: header3Part2Opacity });
                    }
                }
            });
        }

        return () => {
            // Clean up ScrollTrigger instances
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

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
                <div ref={bioSectionRef} key="bio-section" className="col-span-full relative w-[100%]">
                    
                    
                    {/* Headers Container */}
                    <div ref={headersContainerRef} className="pt-72">

                        {/* Header 1 */}
                        <h1 
                            ref={header1Ref}
                            className="font-medium tracking-[-1pt] text-5xl mb-3 col-span-full"
                        >
                            Depending on your perspective<span className="opacity-100 font-light">...</span>
                        </h1>

                        {/* Header 2 */}
                        <h2
                            className="pt-7 text-5xl font-medium tracking-[-1pt] w-[90%]"
                            variants={animateInChild}
                        >
                            <span ref={header2ContainerRef} style={{ display: 'inline-block' }}>
                                <span ref={header2Ref}>Chris Leow is either a Product Designer with an intimate eye for Art Direction, </span>
                                <span ref={header2Part2Ref}>or an Art Director with an equally intimate understanding of technology.</span>
                            </span>
                        </h2>

                        {/* Header 3 */}
                        <h3
                            className="pt-7 text-3xl leading-[1.3] tracking-[-0.5pt] w-[90%]"
                            variants={animateInChild}
                        >
                            <span ref={header3Ref}>He could've been a doctor <span className="italic opacity-30">(not really)</span>, and his unhealthy obsession for craft and storytelling would still have wound him through a career leading campaigns for Studio Ghibli and Singapore Airlines, to motion design work for Nike and Uniqlo. </span>
                            <span ref={header3Part2Ref}>Today, he is a Graduate Student at the School of Visual Arts in NYC investigating user agency in Human–AI Interaction for an agentic future.</span>
                        </h3>
                    </div>

                    

                    {/* <motion.div
                    className="text-[#e9e9e9] dark:text-white flex flex-col items-start"
                    variants={animateInChild}>

                    <p>Based in New York City</p><span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide mr-2 italic">{timeNyc}</span>
                    <i className="-ml-0.5">From Singapore</i><span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide mr-2">{timeSg}</span>
                        
                    </motion.div> */}
            
                </div>

                {/* Bottom Gradient Overlay - hidden */}
                <div className={`fixed bottom-0 left-0 right-0 h-[45vh] pointer-events-none z-50 transition-opacity duration-300 ease-in-out ${isAtTop ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute inset-0 backdrop-blur-sm" style={{ maskImage: 'linear-gradient(to top, black, transparent)', WebkitMaskImage: 'linear-gradient(to top, black, transparent)' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 dark:via-background/50 dark:from-background to-transparent" />
                </div>

                {/* Memoji Wave - bottom left with same fade behavior */}
                {/* <motion.div 
                    className="fixed bottom-0 left-[45%] -translate-x-1/2 pointer-events-none z-50"
                    style={{ transformOrigin: "bottom" }}
                    animate={{
                        opacity: isAtTop ? 1 : 0,
                        scale: isAtTop ? 1 : 0.5,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 600,
                        damping: 30,
                        opacity: { duration: 0.1 }
                    }}
                >
                    <Image 
                        src="/resume/memojiwaveblackbg.svg" 
                        alt="Memoji wave" 
                        width={0} 
                        height={0}
                        className="w-72 h-72"
                    />
                </motion.div> */}

                {/* Currently */}
                <ResumeSectionHeader
                    header="Updated Dec '25"
                    title="Here are the highlights."
                    headerClassName="md:ml-1"
                />
                <Currently className='col-span-full mb-48' key='currently' toggleWork={toggleWork} />

                {/* Archive */}
                <ResumeSectionHeader
                    header=""
                    title="Here's everything"
                    headerClassName="md:ml-1"
                />
                <Archive className='col-span-full' key='archive' toggleWork={toggleWork} />

                {/* CV */}
                <ResumeSectionHeader
                    header="Curriculum Vitae"
                    title="Story time."
                    headerClassName="hidden md:block text-[12pt] mt-72 mb-3 ml-2"
                    titleClassName="hidden md:block tracking-[-2.5pt] text-[64pt] mb-8 w-full"
                />

                {/* Story Container */}
                <motion.div
                    className={`
                  hidden md:grid
                  border-r-[1.5px] border-b-[2px] border-t-[0.1px] border-l-[0.1px] 
                  border-white/15 w-full rounded-3xl col-span-full 
                  bg-background dark:bg-transparent leading-[150%]
                  transition-non-color mb-14
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

                        <p className=" font-medium text-lg lg:text-xl tracking-tight mb-4">But first, are you<span className="font-light text-lg lg:text-xl">...</span></p>

                        <p className={`flex justify-center items-center text-md lg:text-lg cursor-pointer hover:bg-foreground dark:hover:bg-transparent hover:text-background dark:hover:text-white
                    border-1.5 dark:hover:border-foreground transition-non-color rounded-full px-2.5 hover:scale-95 -ml-3
                    ${visibleSections.desktopAI ? 'border-foreground dark:bg-transparent text-foreground' : 'border-transparent'}`}
                            onClick={() => showStory('desktopAI')}
                        >In a hurry?</p>

                        <p className={`flex justify-center items-center text-md lg:text-lg cursor-pointer hover:bg-foreground dark:hover:bg-transparent hover:text-background dark:hover:text-white
                    border-1.5 dark:hover:border-foreground transition-non-color rounded-full px-2.5 hover:scale-95 -ml-3
                    ${visibleSections.desktopShort ? 'border-foreground dark:bg-transparent text-foreground' : 'border-transparent'}`}

                            onClick={() => showStory('desktopShort')}
                        >Keen to know more?</p>

                        <p className={`flex justify-center items-center text-md lg:text-lg cursor-pointer hover:bg-foreground dark:hover:bg-transparent hover:text-background dark:hover:text-white
                    border-1.5 dark:hover:border-foreground transition-non-color rounded-full px-2.5 hover:scale-95 -ml-3
                    ${visibleSections.desktopLong ? 'border-foreground dark:bg-transparent text-foreground' : 'border-transparent'}`}

                            onClick={() => showStory('desktopLong')}
                        >Down for an essay?</p>

                    </div>

                    {/* Line */}
                    <div className="absolute h-[80%] w-[1px] bg-black/5 dark:bg-white/5 left-72 top-7" />

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
                                            he finds himself with eight of his best years of experience in graphic design and advertising. In that time, he honed his craft at two of Singapore’s leading creative agencies, BBH and TBWA, where he served as Art Director on multiple brand campaigns for Singapore Airlines and had the privilege of working with global brands like IKEA, Samsung, Nike, Studio Ghibli, and Uniqlo.</p>

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

                                        <a className="mt-6 -ml-1 flex justify-center rounded-full border-1 w-[135px] pl-1 border-black/20 dark:border-white/50 mb-2"
                                            href="https://www.youtube.com/watch?v=LcGPI2tV2yY"
                                            target='blank'>

                                            Intention – Apple

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="2 2 20 20"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-2.5 h-2.5 mt-0.5 ml-0.5">
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
}