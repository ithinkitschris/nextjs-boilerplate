'use client';
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import BestWorkPage3 from "./bestworkv3";
import MotionDesignPage from "./motion";
import PhotographyPage from "./photography";
import ContentPage from "./content";
import ProductPage from "./product";
import { useExperienceState } from "../hooks/useExperienceState";
import { animateInChild, dropdown, dropdownChild } from "../constants/animations";
import ExperienceCard from './resume/ExperienceCard';
import Currently from "./currently";

export default function Resume({ className = "", setHoveredWork, toggleWork}) {
    const [timeNyc, setTimeNyc] = useState(null);
    const [timeSg, setTimeSg] = useState(null);
    const { visibleSections, toggleCvSection, showStory } = useExperienceState();

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
        hidden: { opacity: 0, y:7 },
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
        hidden: { opacity: 0, y:7 },
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

    return (
        
    <>
        {/* Page Container */}
        <motion.div 
        key="page-container"
        className={`grid grid-cols-1 lg:grid-cols-10 w-full mt-2 md:mt-8
        items-start justify-items-start font-[family-name:var(--font-geist-sans)] 
        gap-2 text-sm tracking-tight ${className}`}
        >
        <AnimatePresence key="animate-presence">
            
            {/* Bio */}
            <div key="bio-section" className="lg:flex lg:flex-wrap lg:gap-10 col-span-full w-full ">

                {/* Mobile Photo Card */}
                <div key="mobile-photo-card" className="lg:hidden relative w-full h-[620px]">

                    {/* Name */}
                    <motion.h1
                    className="z-50 pl-6 pt-3 text-4xl tracking-tighter leading-15 font-base text-[#e9e9e9] dark:text-white"
                    variants={animateInChild}
                    >
                    I am <span className="font-script absolute top-10 tracking-tight text-7xl align-top">Chris</span>
                    {/* <span className="text-xs align-top ml-2 font-normal tracking-normal italic">Leow, Chris Leow.</span> */}
                    </motion.h1>


                    {/* Image */}
                    <motion.div key="mobile-image-container" className="absolute top-0 left-0 w-full h-full -z-40 overflow-hidden rounded-3xl shadow-standard" variants={animateInChild}>
                        <Image
                        key="mobile-profile-image"
                        src='/profile/profile.jpg'
                        alt=""
                        className="transform scale-105 translate-y-4"
                        layout="fill"
                        objectFit="cover"
                        />
                    </motion.div>

                    {/* Details */}
                    <motion.div
                    className="absolute bottom-0 pl-6 pb-14 text-[#e9e9e9] dark:text-white"
                    variants={animateInChild}
                    >
                        {/* Circle Header */}
                        <h1 className="flex items-center justify-center -ml-2 border-1 border-[#e9e9e9] text-[#e9e9e9] dark:text-white
                        rounded-full tracking-tight font-medium text-sm w-[115px] mb-1.5  whitespace-nowrap">Senior Creative</h1>

                        Based in New York City
                        <span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide">{timeNyc}</span>
                        <br />
                        <i className="-ml-0.5">From Singapore</i>
                        <span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide">{timeSg}</span>
                    </motion.div>
                </div> 

                {/* Mobile Container */}
                <div className="flex-1 lg:mb-10 border-0 lg:hidden">

                    {/* Mobile Subheader */}
                    <h1 
                    className="mb-14 -mt-8 -ml-10 text-[38px] px-2 font-script tracking-tight leading-11 text-center mix-blend-difference dark:mix-blend-normal text-white dark:text-white"
                    style={{transform: 'rotate(-4deg)'}}>
                    
                        <p className="">And here are three <span className="ml-28 whitespace-nowrap">things about me:</span></p>

                    </h1>

                    {/* Mobile Three Things */}
                    <div 
                    className="mb-12 lg:mb-0 px-5 md:px-0 ml-1 mt-14">
                        {/* <p className="text-xs tracking-tight -ml-1">01.</p> */}
                        <p className="text-[22px] tracking-tight -ml-4"><span className="text-[30px] opacity-100 font-script2 align-top relative -top-2 mr-2 ml-1">1</span> I don&apos;t take anything too seriously.</p>
                        <p className="text-xxs ml-2.5 opacity-35 mb-11 tracking-normal font-light">A bold opening statement; I know.</p>
                        <p className="text-[22px] tracking-tight -ml-4"><span className="text-[30px] opacity-100 font-script2 align-top relative -top-2 mr-2">2</span> I aim to have fun in everything I do.</p>
                        <p className="text-xxs ml-3 mt-1 opacity-35 mb-10 tracking-normal font-light leading-[13px]">{"<p>I designed and coded this site from ground up.<br/>"}<br/>{"Fun? Curiosity? Self-hatred? <i>Possibly.</i></p>"}</p>
                        <p className="text-[22px] tracking-tight -ml-4"><span className="text-[30px] opacity-100 font-script2 align-top relative -top-2 mr-2">3</span> Craft. Craft. Craft.</p>
                        <p className="text-xxs ml-3 mt-1 opacity-35 mb-10 tracking-normal font-light leading-[13px]">Craft means everything to me. I have to <i>do</i>.<br/>I hope this comes across as you peruse my work.</p>
                    </div>

                </div>

                {/* Desktop Container */}
                <div className="col-span-full mb-4 border-0 hidden lg:block relative w-full h-[650px] group scale-100 hover:scale-101 transition-all duration-300">
                    
                    {/* Image */}
                    <div className="rounded-3xl h-full w-full relative shadow-[0px_2px_30px_rgba(0,0,0,0.3)] border-b-1 border-white/15 overflow-hidden">
                        <motion.img src='/profile/profilelandscape2.jpg'
                        className="rounded-3xl h-full w-full object-cover transition-all"
                        variants={animateInChild}/>
                        <div className="absolute inset-0 rounded-3xl shadow-[inset_0px_0px_4px_0px_rgba(255,255,255,0.2)] pointer-events-none"></div>
                    </div>

                        <div className="absolute inset-0 pt-1 pb-4 pl-10 text-white grid grid-cols-2 group">
   
                            {/* Desktop Name */}
                            <motion.h1
                            className="pt-6 text-xl font-script tracking-tight whitespace-nowrap"
                            variants={animateInChild}>
                            I am
                            <p className={`font-medium font-sans tracking-[-4.5pt] text-9xl -ml-3 -mt-3.5`}>
                            Chris Leow</p>
                            </motion.h1>

                            {/* Desktop Subheader */}
                            <motion.h1 
                            className={`absolute top-[164px] font-script tracking-tight leading-8 col-span-full ml-[270px] text-[24px]`}
                            animate={{rotate:-0}}
                            variants={animateInChild}>                       
                                <p className="-rotate-2">And here are three things about me:</p>     
                            </motion.h1>

                            {/* Desktop Three Things */}
                            <motion.div 
                            className="absolute left-10 bottom-8 w-full" 
                            variants={animateInChild}>
                                {/* <p className="text-xs tracking-tight -ml-1">01.</p> */}
                                <p className="text-2xl tracking-tight -ml-3"><span className="text-[32px] opacity-100 font-script2 align-top relative -top-2 mr-2.5 ml-1">1</span> I don&apos;t take anything too seriously.</p>
                                <p className="text-xs ml-[18px] opacity-25 mb-6 tracking-normal font-light leading-[16px] w-1/3 group-hover:opacity-50 transition-all duration-300">A bold opening statement; I know.</p>
                                <p className="text-2xl tracking-tight -ml-[13px]"><span className="text-[32px] opacity-100 font-script2 align-top relative -top-2 mr-2.5">2</span> I aim to have fun in everything I do.</p>
                                <p className="text-xs ml-[18px] opacity-25 mb-6 tracking-normal font-light leading-[16px] w-1/3 group-hover:opacity-50 transition-all duration-300">{"<p>I designed and coded this site from ground up.<br/>"}<br/>{"Fun? Curiosity? Masochism? Take your pick.</p>"}</p>
                                <p className="text-2xl tracking-tight -ml-3"><span className="text-[32px] opacity-100 font-script2 align-top relative -top-2 mr-2.5">3</span> Craft. Craft. Craft.</p>
                                <p className="text-xs ml-[18px] opacity-25 mb-12 tracking-normal font-light leading-[16px] w-1/3 group-hover:opacity-50 transition-all duration-300">Craft means everything to me. I have to <i>do</i>.<br/>I hope this comes across as you peruse my work.</p>
                            </motion.div>

                            {/* Desktop Details Container */}
                            <motion.div className={`col-span-1 absolute right-12 bottom-18`}>

                                {/* Details */}
                                <motion.div
                                className="text-[#e9e9e9] dark:text-white flex flex-col items-end self-end"
                                variants={animateInChild}>

                                {/* Circle Header */}
                                <h1 className="flex items-center justify-center border-1 rounded-full tracking-tight font-medium text-sm w-[115px] mb-1.5 whitespace-nowrap -ml-2">Senior Creative</h1>
                                <p><span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide mr-2 italic">{timeNyc}</span>Based in New York City</p>
                                <i className="-ml-0.5"><span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide mr-2">{timeSg}</span>From Singapore</i>
                                    
                                </motion.div>

                                
                            </motion.div>

                            {/* Desktop Contact */} 
                            <motion.div 
                                className="z-30 tracking-tight text-white flex w-full justify-between px-4 pr-12 absolute bottom-6 col-span-full"
                                variants={animateInChild}>
                                    {/* <p className="mb-2 text-xl">Contact</p> */}
                                    <p className="text-white opacity-25 group-hover:opacity-100 transition-all duration-300">Email – <span className="transition-all duration-300 hover:text-white">ithinkitschristopher@gmail.com</span></p>
                                    <p className="text-white opacity-25 group-hover:opacity-100 transition-all duration-300">LinkedIn – <a href="https://www.linkedin.com/in/chris-leow-93372b184/" className="underline transition-all duration-300 hover:text-white" target="_blank" rel="noopener noreferrer">Chris Leow</a></p>
                                    <p className="text-white opacity-25 group-hover:opacity-100 transition-all duration-300">Instagram – <a href="https://www.instagram.com/khristurtle/" className="font-normal underline transition-all duration-300 hover:text-white" target="_blank" rel="noopener noreferrer">@khristurtle</a></p>
                                    <p className="text-white opacity-25 group-hover:opacity-100 transition-all duration-300"><a href="/resume/Chris Leow.pdf" download="Chris Leow.pdf" className="font-normal underline transition-all duration-300 hover:text-white" target="_blank" rel="noopener noreferrer">Resume</a></p>
                                </motion.div>
                        </div>
                </div>

                {/* Desktop Background Glow */}
                <motion.img src='/profile/profilelandscape2.jpg' className="absolute -z-10 blur-[220px] left-0 mt-10 saturate-200 w-screen opacity-0 dark:opacity-100"/>

            </div>

            {/* Story Header */}
            <div className="hidden md:block font-medium tracking-[-1.5pt] md:tracking-[-2.7pt] text-5xl md:text-[58pt] mt-24 md:mt-48 ml-6 mb-3 col-span-full leading-[95%] w-2/3">Story time.
            </div>

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
                <div className="col-span-2 transition-non-color text-sm flex flex-col gap-1.5 items-start">
                    <p className=" font-medium text-2xl tracking-tight mb-4">But first, are you<span className="font-light text-2xl">...</span></p>
                    
                    <p className={`flex justify-center items-center text-lg cursor-pointer hover:bg-foreground dark:hover:bg-transparent hover:text-background dark:hover:text-white
                    border-1.5 dark:hover:border-foreground transition-non-color rounded-full px-2.5 hover:scale-95 -ml-3
                    ${visibleSections.desktopAI ? 'border-foreground dark:bg-transparent text-foreground' : 'border-transparent'}`}
                    onClick={() => showStory('desktopAI')}    
                    >In a hurry?</p>

                    <p className={`flex justify-center items-center text-lg cursor-pointer hover:bg-foreground dark:hover:bg-transparent hover:text-background dark:hover:text-white
                    border-1.5 dark:hover:border-foreground transition-non-color rounded-full px-2.5 hover:scale-95 -ml-3
                    ${visibleSections.desktopShort ? 'border-foreground dark:bg-transparent text-foreground' : 'border-transparent'}`}

                    onClick={() => showStory('desktopShort')}
                    >Keen to know more?</p>

                    <p className={`flex justify-center items-center text-lg cursor-pointer hover:bg-foreground dark:hover:bg-transparent hover:text-background dark:hover:text-white
                    border-1.5 dark:hover:border-foreground transition-non-color rounded-full px-2.5 hover:scale-95 -ml-3
                    ${visibleSections.desktopLong ? 'border-foreground dark:bg-transparent text-foreground' : 'border-transparent'}`}

                    onClick={() => showStory('desktopLong')}
                    >Down for an essay?</p>
                </div>

                {/* Line */}
                <div className="absolute h-[80%] w-[1px] bg-black/5 dark:bg-white/5 left-72 top-7"/>
                
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
                        >
                            <motion.div className="col-span-1" variants={storyColumn}>
                                <motion.h1 className="text-xl font-medium tracking-tight" variants={storyElement}>
                                    Experience
                                </motion.h1>
                                <motion.div className="text-sm" variants={storyElement}>
                                    <p className="mt-4 font-semibold">Design + Advertising</p>
                                    <p className="">Senior Creative</p>
                                    <p>8+ Years of Experience</p>

                                    <p className="mt-6 font-semibold">Product Design</p>
                                    <p className="">Graduate Student</p>     
                                </motion.div>
                            </motion.div>

                            <motion.div className="col-span-1" variants={storyColumn}>
                                <motion.h1 className="text-xl font-medium tracking-tight" variants={storyElement}>
                                    Education
                                </motion.h1>
                                <motion.div className="text-sm" variants={storyElement}>
                                    <p className="mt-4">MFA Interaction Design</p>
                                    <p>School of Visual Arts</p>
                                    <i>2024 – 2026</i>

                                    <p className="mt-4">Diploma in Communication Design</p>
                                    <p>Temasek Polytechnic</p>
                                    <i>2013 – 2016</i>
                                </motion.div>
                            </motion.div>

                            <motion.div className="col-span-2 text-sm" variants={storyColumn}>
                                <motion.h1 className="text-xl font-medium tracking-tight" variants={storyElement}>
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
                                        <p>JavaScript</p>
                                        <p>Python</p>
                                        <p>HTML / JSX</p>
                                        <p>Tailwind CSS</p>
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
                        >
                            <motion.div className="col-span-1" variants={storyColumn}>
                                <motion.h1 className="text-xl font-medium tracking-tight mb-4" variants={storyElement}>Who?</motion.h1>
                                <motion.div variants={storyElement}>
                                    <p className="mb-3">Born and raised in sunny <i className="mr-0.5 font-light ">(to put it mildly)</i> Singapore, Chris was once a young kid obsessed with the romanticized image of beret-wearing, palette-wielding artists.
                                    Now, he finds himself living the surreal reality of conceptualizing, designing, and directing what is essentially art for the world.</p>
                                    <p>With a fervor for craft and a meticulous eye for finesse, he takes a possibly unhealthy pride in crafting visually compelling work across various mediums.</p>
                                </motion.div>
                            </motion.div>

                            <motion.div className="col-span-1" variants={storyColumn}>
                                <motion.h1 className="text-xl font-medium tracking-tight mb-4" variants={storyElement}>What?</motion.h1>
                                <motion.div variants={storyElement}>
                                    <p className="mb-3">As a Multidisciplinary Creative and formerly the Creative Lead at ArtScience Museum in Singapore;
                                        he finds himself with eight years of experience in Advertising – having worked in the two leading agencies Singapore at the time: BBH and TBWA and working on multiple brand campaigns for Singapore Airlines
                                        as an Art Director and global brands the likes of IKEA, Samsung, Nike, Studio Ghibli, and Uniqlo.</p>
                                </motion.div>
                            </motion.div>

                            <motion.div className="col-span-1" variants={storyColumn}>
                                <motion.h1 className="text-xl font-medium tracking-tight mb-4" variants={storyElement}>And?</motion.h1>
                                <motion.div variants={storyElement}>
                                    <p className="mb-3">In his spare time (which, realistically, isn&apos;t much), he does... even more work, but for himself—creating content through photography, videography, editing and motion design.</p>
                                    <p>When he is finally, actually, not working, you will find him thrifting for furniture or, for a more colloquial term, stooping on the streets of New York City. He does love building his living space up,
                                    though he wouldn&apos;t go so far as to call it interior design.</p>
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
                        >
                            <motion.h1
                                className="text-xl font-medium tracking-tight col-span-full -ml-0.5"
                                variants={storyColumn}
                            >
                                A love letter to myself:
                            </motion.h1>

                            <motion.div className="col-span-1" variants={storyColumn}>
                                <motion.div variants={storyElement}>
                                    <p className="italic text-sm opacity-50 pr-8">If everyone is busy making everything, how can anyone perfect anything? We start to confuse convenience with joy. Abundance with choice.</p>
                                    <p className="italic text-sm opacity-50 mt-4 pr-8">Designing something requires focus. The first thing we ask is: What do we want people to feel. Surprise. Love. Connection.</p>
                                    <p className="italic text-sm opacity-50 mt-4 pr-8">Then we begin to craft around our intention. It takes time. There are a thousand no's for every yes. We simplify, we perfect, we start over, until everything we touch enhances each life it touches.
                                    </p>
                                    <p className="italic text-sm opacity-50 mt-4 pr-8">Only then do we sign our work:<br/> Designed by Apple in California</p>

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
                                    <p className="mb-3">One thing that remained absolute however, was that I never stopped <i>doing</i>. Just because I found myself an Art Director, didn't mean that I no longer needed to get my hands dirty with Illustrator and After Effects. <i className="opacity-50 mr-1.5 hidden">(along with a disproportionate amount of Powerpoint, Keynote and Teams).</i> Crafting was the one North Star that got me where I was, and kept me doing what I did, and I wasn't about to leave that behind.</p>
                                    <p className="mb-3">Every piece of work on this site went through a thousand no&apos;s for the final yes. It was crafted amidst busyness, with focus and the aim for perfection <i className="opacity-50 mr-1.5 hidden ">(not that I personally believe in the conventional understanding of perfection; I don&apos;t).</i></p>
                                    <p className="mb-6">Today, an entire decade later, as I sit here writing this, the very message of the film that started it all could not be more poignant. What was once the visuals that resonated so deeply, it is now the message that strikes a deeper chord:</p>
                                </motion.div>
                            </motion.div>

                            <motion.div className="col-span-1" variants={storyColumn}>
                                <motion.div variants={storyElement}>
                                    <i className="font- opacity-60">&quot;The first thing we ask is: What do we want people to feel? Delight. Surprise. Love. Connection. Then we begin to craft around our intention.&quot;</i>
                                    <p className="mt-6 mb-3">As an Advertising Creative who grew the muscle to tell stories, and now a Graduate Student currently pursuing a Masters in Interaction Design; the above message resonates immensely. It&apos;s one thing to be able to tell stories, but a completely different discipline to
                                        craft stories that people <i>want</i> to listen to.</p>
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

            {/* Currently */}
            <div key="currently-header" className="font-medium tracking-[-0.2pt] text-xs md:text-[12pt] mt-20 md:mt-52 mb-1 col-span-full dark:border-r-1 dark:border-b-1 border-black/20 dark:border-white/30 md:ml-4 px-2
            p-0.5 rounded-full bg-background dark:bg-transparent drop-shadow">June 2025</div>
            <div key="currently-title" className="font-medium tracking-[-1.8pt] md:tracking-[-2.5pt] text-5xl md:text-[52pt] mb-4 col-span-full md:w-5/6 ml-1.5 md:ml-5">Everything I've been up to lately:</div>
            <Currently className='col-span-full -mt-12' key='currently' setHoveredWork={setHoveredWork} toggleWork={toggleWork}/>

            {/* Creative Direction */}
            <div key="creative-direction-header" className="font-medium tracking-[-0.2pt] text-xs md:text-[12pt] mt-32 md:mt-72 mb-2 col-span-full dark:border-r-1 dark:border-b-1 border-black/20 dark:border-white/30 md:ml-7 px-2
            p-0.5 rounded-full bg-background dark:bg-transparent drop-shadow">Creative Direction</div>
            <div key="creative-direction-title" className="font-medium tracking-[-1.5pt] text-5xl md:text-[58pt] -mt-1 mb-3 col-span-full leading-[95%] w-[80%] md:w-2/3 ml-1.5 md:ml-9">The ones that had legs.</div>
            <BestWorkPage3 className='col-span-full -mt-[3.2rem]' key='bestwork' setHoveredWork={setHoveredWork} toggleWork={toggleWork}/>

            {/* Product Design */}
            <div key="product-design-header" className="font-medium tracking-[-0.2pt] text-xs md:text-[12pt] mt-32 md:mt-72 mb-2 col-span-full border-1 border-black/20 dark:border-white/50 p-0.5 rounded-full md:ml-8 px-2">Product Design</div>
            <div key="product-design-title" className="font-medium tracking-[-1.5pt] text-5xl md:text-[58pt] -mt-1 mb-3 col-span-full leading-[95%] w-[80%] md:w-2/3 ml-1.5 md:ml-9">Products of Design.</div>
            <ProductPage className='col-span-full -mt-10' key='product' setHoveredWork={setHoveredWork} toggleWork={toggleWork}/>

            {/* Motion Design */}
            <div key="motion-design-header" className="font-medium tracking-[-0.2pt] text-xs md:text-[12pt] mt-32 md:mt-72 mb-2 col-span-full border-1  border-black/20 dark:border-white/50 p-0.5 rounded-full ml-2 md:ml-8 px-2">Motion Design</div>
            <div key="motion-design-title" className="font-medium tracking-[-1.5pt] text-5xl md:text-[58pt] -mt-1 mb-3 col-span-full leading-[95%] w-[80%] md:w-2/3 ml-1.5 md:ml-5">.blend-ing .ai, .ae and .js</div>
            <MotionDesignPage className='col-span-full -mt-10' key='motion' setHoveredWork={setHoveredWork} toggleWork={toggleWork}/>

            {/* Photography */}
            <div key="photography-header" className="font-medium tracking-[-0.2pt] text-xs md:text-[12pt] mt-32 md:mt-72 mb-3 col-span-full border-1  border-black/20 dark:border-white/50 p-0.5 rounded-full ml-6 px-2 hidden md:block">Photography</div>
            <div key="photography-title" className="font-medium tracking-[-1.5pt] text-5xl md:text-[58pt] -mt-1 ml-5 mb-3 col-span-full leading-[95%] w-[50%] hidden md:block">Photographic Memories.</div>
            <PhotographyPage className='col-span-full mt-8 invisible md:visible' key='photo' setHoveredWork={setHoveredWork} toggleWork={toggleWork}/>
            
            {/* Content */}
            <div key="content-header" className="font-medium tracking-[-0.2pt] text-xs md:text-[12pt] ml-2 md:ml-4 mt-32 md:mt-72 mb-4 col-span-full border-1 border-black/20 dark:border-white/50 p-0.5 rounded-full px-2">Content Creation</div>
            <div key="content-title" className="font-medium tracking-[-1.5pt] text-5xl md:text-[58pt] -mt-1 ml-3 mb-8 col-span-full leading-[95%] w-[80%] ">A life of mine viewed through a short attention span.</div>
            <ContentPage className='col-span-full mt-8' key='content'/>
            
            {/* CV */}
            <div key="cv-header" className="font-medium tracking-[-0.2pt] text-[12pt] mt-72 mb-3 col-span-full border-1 border-black/20 dark:border-white/50 p-0.5 rounded-full px-2">Curriculum Vitae</div>
            <div key="cv-title" className="font-medium tracking-[-5.8pt] text-[58pt] mb-3 col-span-full leading-[95%] w-full">Info, the rest of it all.</div>

            {/* Desktop Brands Container */}
            <h1 className="text-[40px] md:text-3xl mt-20 tracking-tight font-medium text-black dark:text-white col-span-full" key='brands-header'>Worked with:</h1>
            <motion.div className="md:col-span-full md:w-full justify-between items-center mix-blend-difference relative mb-10 hidden md:flex mt-4" layout key='brands'>           
                <img src='/brandlogos/sia.png' className="w-[90px] h-[35px] object-cover opacity-80 hover:opacity-100 scale-110 hover:scale-110 transition-transform duration-300"/>
                <img src='/brandlogos/asm.png' className="w-[120px] h-[35px] object-cover opacity-80 hover:opacity-100 scale-110 hover:scale-110 transition-transform duration-300"/>
                <img src='/brandlogos/ikea.png' className="w-[75px] h-[25px]  object-cover opacity-80 hover:opacity-100 scale-110 hover:scale-110 transition-transform duration-300"/>
                <img src='/brandlogos/samsung.png' className="w-[95px] h-[28px] object-cover opacity-80 hover:opacity-100 scale-110 hover:scale-110 transition-transform duration-300"/>
                <img src='/brandlogos/uniqlo.png' className="w-[70px] h-[35px] object-cover opacity-80 hover:opacity-100 scale-110 hover:scale-110 transition-transform duration-300"/>
                <img src='/brandlogos/ghibli.png' className="w-[105px] h-[40px] object-cover opacity-80 hover:opacity-100 scale-110 hover:scale-110 transition-transform duration-300"/>
                <img src='/brandlogos/nike.png' className="w-60px] h-[36px] object-cover opacity-80 hover:opacity-100 scale-110 hover:scale-110 transition-transform duration-300"/>
                <img src='/brandlogos/sc.png' className="w-[80px] h-[37px]  object-cover opacity-80 hover:opacity-100 scale-110 hover:scale-110 transition-transform duration-300"/>
                <img src='/brandlogos/stb.png' className="w-[90px] h-[35px] object-cover opacity-80 hover:opacity-100 scale-110 hover:scale-110 transition-transform duration-300"/>
                <img src='/brandlogos/mckinsey.png' className="w-[85px] h-[32px] object-cover opacity-80 hover:opacity-100 scale-110 hover:scale-110 transition-transform duration-300"/>
                <img src='/brandlogos/jollibee.png' className="w-[80px] h-[30px] object-cover opacity-80 hover:opacity-100 scale-110 hover:scale-110 transition-transform duration-300"/>
            </motion.div>

            {/* Footer */}
            <div className="col-span-full grid-cols-5 w-full gap-8 hidden md:grid" key='footer'>  

                {/* Currently */}
                <ExperienceCard
                    header="Currently:"
                    title="Master's Student"
                    titleClassName="w-[125px]"
                    company="School of Visual Arts"
                    duration="September 2024 – May 2026"
                    isOpen={visibleSections.masters}
                    onToggle={() => toggleCvSection('masters')}
                    sectionKey="Currently"
                    damping={24}
                    showMobileDivider={false}
                    
                >
                    <h1 className="mt-8 text-lg">Curriculum</h1>
                    <div className="">
                        <p className="mt-4">Research Methodologies</p>
                        <p>Service Design</p>
                        <p>Inclusive Design</p>
                        <p>UX Content Writing</p>
                        <p>User Experience Design</p>
                        <p>Programming <i>(C, Python, JavaScript)</i></p>
                        <p>Human Interaction & Ergonomics</p>
                        <p>Intellectual Property</p>
                        <p>Physical Computing</p>
                        <p>Smart Objects</p>
                        <p>Game Design</p>

                    </div>
                    <div className=" text-black/25 dark:text-white/25">
                        <p className="mt-0">Spatial Computing</p>
                        <p>Design for Cities</p>
                        <p>Thesis</p>
                    </div>
                </ExperienceCard>

                {/* ASM */}
                <ExperienceCard
                    header="Previously:"
                    title="Creative Lead"
                    titleClassName="w-[104px]"
                    company={<span>Marina Bay Sands <i>(ArtScience Museum)</i></span>}
                    duration="January 2024 – November 2024"
                    isOpen={visibleSections.asm}
                    onToggle={() => toggleCvSection('asm')}
                    sectionKey="ASM"
                    damping={28}
                >
                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-6 mb-4  opacity-90">The World of Studio Ghibli</h1>
                        <p className=" opacity-50">Creative direction for the integrated marketing campaign for The World of Studio Ghibli, the first ever Studio Ghibli exhibition in Singapore held at ArtScience Museum. Designed the Key Visual for the exhibition and provided creative direction over marketing partners as well as merchandise for the exhibition.</p>
                    </motion.div>
                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4  opacity-90">Goddess: Brave. Bold. Beautiful.</h1>
                        <p className=" opacity-50">Creative direction and strategic positioning for the marketing campaign of Goddess, an exhibition at the ArtScience Museum that celebrates screen icons across 120 years of moving image history.</p>
                    </motion.div>
                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4  opacity-90">Frida Kahlo: The Life of an Icon</h1>
                        <p className=" opacity-50">Creative direction and strategic positioning for the marketing campaign of Frida Kahlo: Life of an Icon, an exhibition at the ArtScience Museum on Mexican artist Frida Kahlo, alongside the companion exhibition Laid Bare: Frida's Inner World. Managed and produced visuals and assets across the campaign titled Frida Forever for the lineup of activities held at the museum.</p>
                    </motion.div>
                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4  opacity-90">teamLab Future World: Where Art Meets Science</h1>
                        <p className=" opacity-50">Creative direction and oversight on all marketing deliverables for Future World, ArtScience Museum&apos;s permanent exhibition in collaboration with teamLab.</p>
                    </motion.div>
                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4  opacity-90">ArtScience After Hours</h1>
                        <p className=" opacity-50">Creative direction and visual identity oversight on ArtScience After Hours, an all-encompassing night time experience for the ArtScience Museum, with late-night offerings and experiences beyond daylight.</p>
                    </motion.div>
                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4  opacity-90">ArtScience Cinema</h1>
                        <p className=" opacity-50">Creative direction on all marketing deliverables for ArtScience Cinema, ArtScience Museumss purpose-built cinema that screens a curated programme of film all year round by the museums film curatorial team.</p>
                    </motion.div>
                </ExperienceCard>

                {/* TBWA */}
                <ExperienceCard
                    title="Art Director"
                    titleClassName="w-[88px]"
                    company="TBWA\ Singapore"
                    duration="March 2021 – August 2023"
                    isOpen={visibleSections.tbwa}
                    onToggle={() => toggleCvSection('tbwa')}
                    sectionKey="TBWA"
                    damping={27}
                    className="pt-12"
                >
                    {/* Sub-accordion for SIA */}
                    <motion.div
                        className="flex justify-between cursor-pointer pr-1 mt-6 md:mt-14"
                        onClick={() => toggleCvSection('sia')}
                        variants={dropdownChild}
                        layout='position'
                        >
                        <button className="text-lg whitespace-nowrap tracking-tight flex items-center">Singapore Airlines</button>
                        <button className="flex items-center">{visibleSections.sia ? <ChevronUpIcon className="ml-1 h-4 w-4"/> : <ChevronDownIcon className="ml-1 h-4 w-4"/>}</button>
                    </motion.div>
                    {visibleSections.sia && (
                        <motion.div key="dropdown-SIA" initial="hidden" animate="show" layout="position" variants={dropdown}>
                            <motion.div variants={dropdownChild}>
                                <h1 className="mt-6  mb-4 opacity-90 font-base">Beyond The Cabin</h1>
                                <p className="mb-4  opacity-50">Lead Creative and Motion Designer for Beyond The Cabin, an episodic brand campaign and content series that was centred around Singapore Airline's Cabin Crew's as World Class travellers with worldly passions.</p>
                                <p className="mb-4  opacity-50">Produced travel guides featuring Cabin Crew, casted for their expertise and passion for destinations flown to by Singapore Airlines. Showcasing a depth of understanding they have for the destinations and novel experiences through their insights</p>
                            </motion.div>
                            <motion.div variants={dropdownChild}>
                                <h1 className="mt-6  mb-4 opacity-90 font-base">Cocktail Conversations</h1>
                                <p className="mb-4  opacity-50">Lead Creative and Motion Designer for Cocktail Conversations, an episodic sustenance campaign and content series for the flagship SilverKris Lounge at Singapore Changi Airport Terminal 3. </p>
                                <p className="mb-4  opacity-50">Centred around the idea of the lounges being home to personalities from all walks of life around the world. We invited a couple of these personalities to have a conversation with us at the Crystal Bar in the First Class SilverKris Lounge, finishing off with a bespoke cocktail concocted just for them based off their answers and available for passengers to order at the bar.</p>
                            </motion.div>
                            <motion.div variants={dropdownChild}>
                                <h1 className="mt-6  mb-4 opacity-90 font-base">Kris+ Brand Campaign</h1>
                                <p className="mb-4  opacity-50">Lead Creative for a tactical brand campaign for Kris+, the lifestyle rewards app by Singapore Airlines. Centred around the idea of a holiday getaway being just one tap away on the app through shopping and dining, the campaign was brought to life in the likes of a Rube Goldberg device, symbolising the domino effect through the journey of using the app.</p>
                                <p className="mb-4  opacity-50">The campaign launched with a 30s brand film and OOH placements around Singapore.</p>
                            </motion.div>
                            <motion.div variants={dropdownChild}>
                                <h1 className="mt-6  mb-4 opacity-90 font-base">Travel Like Never Before</h1>
                                <p className="mb-4  opacity-50">Conceptualised and art directed a brand campaign for the recovery efforts of Singapore Airlines as travel restrictions lifted across the world in 2022. With the strategy of travelling bigger and better than ever before, the campaign was centred around travelling for the big milestone and sentimental moments now that travel is back on the table.</p>
                                <p className="mb-4  opacity-50">The brand film has been viewed over 36 million times.</p>
                            </motion.div>
                            <motion.div variants={dropdownChild}>
                                <h1 className="mt-6  mb-4 opacity-90 font-base">SilverKris Lounge</h1>
                                <p className="mb-4  opacity-50">Lead Creative, Editor and Motion Designer for the launch campaign of the brand new flagship SilverKris Lounges at Changi Airport. Produced a 90s brand film that covered the amenities across the 4 lounges.</p>
                                <p className="mb-4  opacity-50">Oversaw the creation of a glass installation of the Batik Motif as the entrance facade to the lounges and the animation of the Batik Motif for an 8 metre curved digital wall at the entrance foyer.</p>
                                <p className="mb-4  opacity-50">Art directed a photo asset library shoot and film shoot and offline / online edited the film till delivery.</p>
                            </motion.div>
                            <motion.div variants={dropdownChild}>
                                <h1 className="mt-6  mb-4 opacity-90 font-base">Cargo THRUCOOL</h1>
                                <p className="mb-4  opacity-50">Conceptualized and art directed a film for Singapore Airlines Cargo's THRUCOOL product, that boasts a seamless cold chain cargo service for temperature critical products that can shipped across the world with Singapore Airline's global destinations network.</p>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* Sub-accordion for IKEA */}
                    <motion.div className="flex justify-between cursor-pointer pr-1 mt-2 " onClick={() => toggleCvSection('ikea')} variants={dropdownChild} layout='position'>
                        <button className=" text-lg whitespace-nowrap tracking-tight flex items-center">IKEA</button>
                        <button className=" flex items-center">{visibleSections.ikea ? <ChevronUpIcon className="ml-1 h-4 w-4"/> : <ChevronDownIcon className="ml-1 h-4 w-4"/>}</button>
                    </motion.div>
                    {visibleSections.ikea && (
                        <motion.div variants={dropdownChild} layout='position'>
                            <h1 className="mt-4  mb-4 opacity-90 font-base">Oops Happens <i className="text-neutral-500">(HEMSÄKER)</i></h1>
                            <p className="mb-4  opacity-50">Art directed and conceptualised a campaign for IKEA Singapore & Malaysia's insurance product, HEMSAKER. A set of 9 videos that went live across IKEA's social platforms, web pages and various other platforms.</p>
                        </motion.div>
                    )}

                    {/* Sub-accordion for SC */}
                    <motion.div className="flex justify-between cursor-pointer pr-1 mt-2" onClick={() => toggleCvSection('sc')} variants={dropdownChild} layout='position'>
                        <button className=" text-lg whitespace-nowrap tracking-tight flex items-center">Standard Chartered</button>
                        <button className=" flex items-center">{visibleSections.sc ? <ChevronUpIcon className="ml-1 h-4 w-4"/> : <ChevronDownIcon className="ml-1 h-4 w-4"/>}</button>
                    </motion.div>
                    {visibleSections.sc && (
                        <motion.div variants={dropdownChild} layout='position'>
                            <h1 className="mt-4  mb-4 opacity-90 font-base">Marina Bay Financial Centre</h1>
                            <p className="mb-4  opacity-50">Art directed and did the offline / online edit of a video and photo set of the new Standard Chartered signage at Marina Bay Financial Centre as part of their latest brand identity refresh and brand evolution. The video and photos were circulated globally as part of internal communications in Standard Chartered Bank.</p>
                        </motion.div>
                    )}
                </ExperienceCard>

                {/* BBH */}
                <ExperienceCard
                    title="Motion Art Director"
                    titleClassName="w-[135px]"
                    company="BBH Singapore"
                    duration="June 2019 – March 2021"
                    isOpen={visibleSections.bbh}
                    onToggle={() => toggleCvSection('bbh')}
                    sectionKey="BBH"
                    damping={26}
                    className="pt-12"   
                >
                    {/* SAMSUNG Button Row */}
                    <motion.div
                    className="flex justify-between cursor-pointer pr-1 mt-6 md:mt-14"
                    onClick={() => toggleCvSection('samsung')}
                    variants={dropdownChild}
                    layout='position'
                    >
                        <button 
                        className=" text-lg whitespace-nowrap tracking-tight flex items-center">
                            Samsung
                        </button>

                        <button 
                        className=" flex items-center">
                        {visibleSections.samsung 
                        ? ( <ChevronUpIcon className="ml-1 h-4 w-4"/>)
                        : ( <ChevronDownIcon className="ml-1 h-4 w-4"/>)} 
                        </button>
                    </motion.div>

                    {/* Samsung Dropdown */}
                    {visibleSections.samsung && (
                    <motion.div className=""
                    key="dropdown-SIA"
                    initial="hidden"
                    animate="show"
                    layout="position"
                    variants={dropdown}>

                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">Global Lifestyle TV Pitch</h1>
                            <p className="mb-4  opacity-50">
                            Provided motion design direction, content series visualisations and a manifesto film for the global pitch for the Lifestyle TV campaign.</p>
                            <p className="mb-4  opacity-50">
                            Winning both the Lifestyle TV campaign and global visual displays digital / social strategy, platform management and content creation retainer business for BBH Singapore.
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">CES 2020</h1>
                            <p className="mb-4  opacity-50">
                            Art directed & executed on site social coverage of Samsung's Visual display's new releases and technology at CES 2020 in Las Vegas. </p>
                            <p className="mb-4  opacity-50">
                            Content produced involved short form video series distributed on Facebook and Instagram feed, day to day event coverage on Instagram stories and long form event recap videos for Youtube.
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">Motion Design</h1>
                            <p className="mb-4  opacity-50">
                            Edited and motion designed pre-roll films, Instagram Stories and Carousel posts for the Samsung Lifestyle TV social platforms. Both organic and paid media.</p>
                            <div className="ml-6 opacity-50 mb-10">
                                <h1 className="">The Frame</h1>
                                <h1 className="">Why Would You Do That?</h1>
                                <h1 className="">The Terrace Feature Highlights</h1>
                                <h1 className="">Smart Features Highlights</h1>
                                <h1>QLED 8K + Galaxy S20</h1>
                                <h1>TV Burn-in Checker</h1>
                            </div>
                        </motion.div>
                        
                    </motion.div>
                    )}

                    {/* Nike Button Row */}
                    <motion.div
                    className="flex justify-between cursor-pointer pr-1 mt-2"
                    onClick={() => toggleCvSection('nike')}
                    variants={dropdownChild}
                    layout='position'
                    >
                        <button 
                        className=" text-lg whitespace-nowrap tracking-tight flex items-center">
                            NIKE
                        </button>

                        <button 
                        className=" flex items-center">
                        {visibleSections.nike 
                        ? ( <ChevronUpIcon className="ml-1 h-4 w-4"/>)
                        : ( <ChevronDownIcon className="ml-1 h-4 w-4"/>)} 
                        </button>
                    </motion.div>
                    
                    {/* Nike Dropdown */}
                    {visibleSections.nike && (
                    <motion.div variants={dropdownChild}
                    layout='position'
                    >
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">Athlete Stories: Koy & Toon</h1>
                            <p className="mb-4  opacity-50">
                            Offline and online edit and animation for a set of videos and a full film highlighting the stories of Bangkok based NIKE athletes Koy & toon, distributed on Nike's Instagram feed, stories and TV.</p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">Women&apos;s Instazine</h1>
                            <p className="mb-10  opacity-50">
                            Edited and animated supporting assets for the campaign as well as the case study film for Women's Instazine</p>
                        </motion.div>
                    </motion.div>
                    
                    )}

                    {/* Jollibee Button Row */}
                    <motion.div
                    className="flex justify-between cursor-pointer pr-1 mt-2 -ml-0.5"
                    onClick={() => toggleCvSection('jollibee')}
                    variants={dropdownChild}
                    layout='position'
                    >
                        <button 
                        className=" text-lg whitespace-nowrap tracking-tight flex items-center">
                            Jollibee
                        </button>

                        <button 
                        className=" flex items-center">
                        {visibleSections.jollibee 
                        ? ( <ChevronUpIcon className="ml-1 h-4 w-4"/>)
                        : ( <ChevronDownIcon className="ml-1 h-4 w-4"/>)} 
                        </button>
                    </motion.div>

                    {/* Jollibee Dropdown */}
                    {visibleSections.jollibee &&(
                    <motion.div variants={dropdownChild}
                    layout='position'
                    >
                        <h1 className="mt-4  mb-4 opacity-90 font-base">JolliEverAfter</h1>
                        <p className="mb-4  opacity-50">
                        Pre Production, Art Direction, Offline and online edit and animation of the teaser film & challenges for JolliEverAfter, a campaign for Jollibee that brought their annual long form film to TikTok in the form of 9 challenges.
                        </p>
                    </motion.div>
                    )}

                    {/* Sentosa Button Row */}
                    <motion.div
                    className="flex justify-between cursor-pointer pr-1 mt-2"
                    onClick={() => toggleCvSection('sentosa')}
                    variants={dropdownChild}
                    layout='position'
                    >
                        <button 
                        className=" text-lg whitespace-nowrap tracking-tight flex items-center">
                            Sentosa
                        </button>

                        <button 
                        className=" flex items-center">
                        {visibleSections.sentosa 
                        ? ( <ChevronUpIcon className="ml-1 h-4 w-4"/>)
                        : ( <ChevronDownIcon className="ml-1 h-4 w-4"/>)} 
                        </button>
                    </motion.div>

                    {/* Sentosa Dropdown */}
                    {visibleSections.sentosa && (
                    <motion.div className=""
                    key="dropdown-sentosa"
                    initial="hidden"
                    animate="show"
                    layout="position"
                    variants={dropdown}>

                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">Virtual Sentosa</h1>
                            <p className="mb-4  opacity-50">
                            Compiled footage of Virtual Sentosa and edited + animated a set of launch and PR videos for the campaign. The videos were then distributed on Sentosa's social media platforms as well as news outlets and channels both locally and globally.</p>
                            <p className="mb-4  opacity-50">
                            The campaign was covered by news outlets worldwide including Campaign Asia, Hypebeast, Conde Nast, NHK Japan.
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">#BehindSentosa</h1>
                            <p className="mb-4  opacity-50">
                            Filmed and directed a video covering the efforts undertaken by the staff of Sentosa in response to the COVID-19 outbreak. The video went live on Sentosa's Facebook and Instagram channels.</p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6  mb-4 opacity-90 font-base">Motion Design</h1>
                            <p className="mb-4  opacity-50">
                            Content creation within the Social team for Sentosa within the Agency. Roles included Editor, Motion Designer and Videographer.</p>
                            <div className="ml-6 opacity-50 mb-10">
                                <h1>Sandsation: Star Wars</h1>
                                <h1>Sentosa Grillfest 2019</h1>
                                <h1>Siloso Beach Party</h1>
                                <h1>Halloween Horror Nights 2019</h1>
                                <h1>Island Lights</h1>
                                <h1>Tanjong Beach Club</h1>
                                <h1>Pokemon GO Safari Zone</h1>
                                <h1>Auriga Spa</h1>
                                <h1>AJ Hackett</h1>
                            </div>
                        </motion.div>
                        
                    </motion.div>
                    )}
                </ExperienceCard>

                {/* Kinetic */}
                <ExperienceCard
                    title="Motion Designer"
                    titleClassName="w-[120px]"
                    company="Kinetic Singapore"
                    duration="January 2019 – Aptil 2019"
                    isOpen={visibleSections.kinetic}
                    onToggle={() => toggleCvSection('kinetic')}
                    sectionKey="Kinetic"
                    damping={25}
                    className="pt-12"
                >
                    <p className="mt-4">Freelance Creative</p>
                    <i className="-ml-[1px] opacity-75">July 2016 – October 2016</i>

                    <p className="mt-4">Creative Intern</p>
                    <i className="-ml-[1px] opacity-75">August 2015 – November 2015</i>

                    <h1 className="mt-8  text-lg">
                        Uniqlo Singapore</h1>

                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-8 mb-4  opacity-90">
                            New Style Fresh Start
                        </h1>
                        <p className=" opacity-50">
                        Produced a set of videos distributed on displays in stores around South East Asia as part of the 2019 Chinese New Year season.
                        </p>
                    </motion.div>

                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4  opacity-90">
                            Your Stage Now Live</h1>
                        <p className=" opacity-50">
                        Art Directed and produced a set of videos for the panoramic displays during the launch of the Uniqlo flagship store as part of the Your Stage Now Live launch campaign
                        </p>
                    </motion.div>
                </ExperienceCard>

                <div className="lg:hidden pl-5 md:pl-0 md:col-span-1 sm:pr-10 mt-3">
                    <ExperienceCard
                        title="Motion Designer"
                        titleClassName="w-[120px]"
                        company="Freelance"
                        duration="November 2015 – January 2019"
                        isOpen={visibleSections.freelance}
                        onToggle={() => toggleCvSection('freelance')}
                        sectionKey="Freelance"
                        damping={24}
                    >
                        <p className="mt-4">The Secret Little Agency (TSLA)</p>
                        <p className="mt-1">MadebyAnonymous</p>
                        <p className="mt-1">GOODSTUPH</p>
                        <p className="mt-1">TMRRWstudio</p>
                        <p className="mt-1">Sixtoes.tv/TBWA Singapore</p>
                        <p className="mt-1">Superunion Singapore</p>
                    </ExperienceCard>
                </div>
            </div>

            {/* Bottom Spacer */}        
            <div className="col-span-full w-full h-[250px]" key='bottomspacer'/>
            
            </AnimatePresence>    
        </motion.div>
    </>
    );
}