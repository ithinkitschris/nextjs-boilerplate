'use client';
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import BestWorkPage3 from "./bestworkv3";
import MotionDesignPage from "./motion";
import PhotographyPage from "./photography";
import ContentPage from "./content";
import ProductPage from "./product";
import { animateInChild } from "../../constants/animations";
import Currently from "./currently";
import ResumeFooter from "../resume/ResumeFooter";
import { useExperienceState } from "../../hooks/useExperienceState";
import ResumeSectionHeader from "../resume/ResumeSectionHeader";

export default function Resume({ className = "", toggleWork}) {
    const [timeNyc, setTimeNyc] = useState(null);
    const [timeSg, setTimeSg] = useState(null);
    const { visibleSections, showStory } = useExperienceState();

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

        {/* Mobile Blur Background */}
        <div className="md:hidden absolute top-0 left-0 w-full h-[800px] -z-50 opacity-0 dark:opacity-100" key="mobile-blur-background">
                <motion.div key="mobile-image-container-blur" className="absolute -top-0 -left-0 -right-0 -bottom-0 brightness-150 saturate-150 blur-[80px]" variants={animateInChild}>
                    <Image
                    key="mobile-profile-image-blur"
                    src='/profile/profile.jpg'
                    alt=""
                    className=""
                    layout="fill"
                    objectFit="cover"
                    />
                </motion.div>
            </div>

        {/* Page Container */}
        <motion.div 
        key="page-container"
        className={`grid grid-cols-1 lg:grid-cols-10 w-full mt-2 md:mt-8
        items-start justify-items-start font-[family-name:var(--font-geist-sans)] 
        gap-2 text-sm tracking-tight ${className}`}
        >
            {/* Profile */}
            <div key="bio-section" className="lg:flex col-span-full w-full relative">

                {/* Mobile Photo Card */}
                <div key="mobile-photo-card" className="md:hidden relative w-full h-[620px]">

                    {/* Name */}
                    <motion.h1
                    className="z-50 pl-6 pt-3 text-4xl tracking-tighter leading-15 font-base text-[#e9e9e9] dark:text-white"
                    variants={animateInChild}
                    >
                    I am <span className="font-script absolute top-10 tracking-tight text-7xl align-top">Chris</span>
                    {/* <span className="text-xs align-top ml-2 font-normal tracking-normal italic">Leow, Chris Leow.</span> */}
                    </motion.h1>

                    <div className="absolute inset-0 rounded-3xl shadow-[0px_2px_15px_rgba(0,0,0,0.3),inset_0px_0px_6px_0px_rgba(255,255,255,1)] 
                    pointer-events-none mix-blend-overlay z-10"/>

                    {/* Image */}
                    <motion.div key="mobile-image-container" className="absolute top-0 left-0 w-full h-full -z-40 overflow-hidden rounded-3xl" variants={animateInChild}>
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

                {/* Mobile Text Container */}
                <div className="flex-1 lg:mb-10 border-0 md:hidden">

                    {/* Mobile Subheader */}
                    <h1 
                    className="mb-14 -mt-8 -ml-10 text-[38px] px-2 font-script tracking-tight leading-11 text-center mix-blend-difference dark:mix-blend-normal text-white dark:text-white"
                    style={{transform: 'rotate(-4deg)'}}>
                    
                        <p className="">And here are three <span className="ml-28 whitespace-nowrap">things about me:</span></p>

                    </h1>

                    {/* Mobile Three Things */}
                    <div 
                    className="px-5 md:px-0 ml-1 mt-14">
                        {/* <p className="text-xs tracking-tight -ml-1">01.</p> */}
                        <p className="text-[22px] tracking-tight -ml-4"><span className="text-[30px] opacity-100 font-script2 align-top relative -top-2 mr-2 ml-1">1</span> I don&apos;t take anything too seriously.</p>
                        <p className="text-xxs ml-2.5 opacity-35 mb-11 tracking-normal font-light">A bold opening statement; I know.</p>
                        <p className="text-[22px] tracking-tight -ml-4"><span className="text-[30px] opacity-100 font-script2 align-top relative -top-2 mr-2">2</span> I aim to find fun in everything I do.</p>
                        <p className="text-xxs ml-3 mt-1 opacity-35 mb-10 tracking-normal font-light leading-[13px]">Iteration becomes play, not work.</p>
                        <p className="text-[22px] tracking-tight -ml-4"><span className="text-[30px] opacity-100 font-script2 align-top relative -top-2 mr-2">3</span> Craft. Craft. Craft.</p>
                        <p className="text-xxs ml-3 mt-1 opacity-35 mb-10 tracking-normal font-light leading-[13px]">Craft is the process. I can't not create.</p>
                    </div>

                </div>

                {/* Desktop Container */}
                <div className="col-span-full hidden md:block relative w-full 
                  md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] 
                  group scale-100 hover:scale-101 transition-all duration-300">
                    
                    {/* Image */}
                    <div className="rounded-[40pt] h-full w-full relative shadow-[0px_2px_30px_rgba(0,0,0,0.3)] border-b-1 border-white/15 overflow-hidden">
                        <motion.img 
                            src='/profile/profilelandscape2.jpg'
                            className="rounded-3xl h-full w-full object-cover transition-all"
                            variants={animateInChild}
                        />
                        <div className="absolute inset-0 rounded-[40pt] shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.15)] pointer-events-none" />
                    </div>
                    
                    {/* Text Container */}
                    <div className="absolute inset-3 grid grid-cols-2 pl-10  text-white group">

                        {/* Desktop Name */}
                        <motion.h1
                            className="pt-7 text-xl font-script tracking-tight whitespace-nowrap"
                            variants={animateInChild}
                        >
                            I am
                            <p className={`font-medium font-sans tracking-[-3.5pt] xl:tracking-[-4.5pt] text-8xl lg:text-[6.5rem] xl:text-9xl -ml-3 -mt-3.5`}>
                                Chris Leow
                            </p>
                        </motion.h1>

                        {/* Desktop Subheader */}
                        <motion.h1 
                            className={`absolute font-script tracking-tight leading-8 col-span-full ml-52 xl:ml-[270px] top-32 lg:top-36 xl:top-[164px] text-[18px] lg:text-[20px] xl:text-[24px]`}
                            animate={{rotate:-0}}
                            variants={animateInChild}
                        >                       
                            <p className="-rotate-2">And here are three things about me:</p>     
                        </motion.h1>

                        {/* Desktop Three Things */}
                        <motion.div 
                            className="absolute left-10 bottom-8 w-full" 
                            variants={animateInChild}
                        >
                            {/* <p className="text-xs tracking-tight -ml-1">01.</p> */}

                            {/* 01 */}
                            <div className="text-xl lg:text-2xl tracking-[-0.02rem] mb-7">

                                {/* Number */}
                                <div className="flex items-center">
                                    <p className="text-[26px] lg:text-[32px] font-script2 align-top relative -top-2 mr-3">1</p> 

                                    {/* Header */}
                                    <h3 className="text-xl lg:text-2xl tracking-[-0.02rem]">
                                        I don't take myself too seriously.
                                    </h3>
                                </div>

                                {/* Subheader */}
                                <p className="text-xs ml-6 opacity-25 tracking-[0.02rem] font-light leading-[16px] lg:w-1/3 group-hover:opacity-75 transition-all duration-300">
                                    A bold opening statement; I know.
                                </p>
                            </div>

                            {/* 02 */}
                            <div className="text-xl lg:text-2xl tracking-[-0.02rem] mb-7 -ml-1">

                                {/* Number */}
                                <div className="flex items-center">
                                    <p className="text-[26px] lg:text-[32px] font-script2 align-top relative -top-2 mr-3">2</p> 

                                    {/* Header */}
                                    <h3 className="text-xl lg:text-2xl tracking-[-0.02rem]">
                                        I aim to find fun in everything I do.
                                    </h3>
                                </div>

                                {/* Subheader */}
                                <p className="text-xs ml-[1.65rem] opacity-25 tracking-[0.02rem] font-light leading-[16px] lg:w-1/3 group-hover:opacity-75 transition-all duration-300">
                                    Iteration becomes play, not work.
                                </p>
                            </div>

                            {/* 03 */}
                            <div className="text-xl lg:text-2xl tracking-[-0.02rem] mb-14 -ml-1">

                                {/* Number */}
                                <div className="flex items-center">
                                    <p className="text-[26px] lg:text-[32px] font-script2 align-top relative -top-2 mr-3">3</p> 

                                    {/* Header */}
                                    <h3 className="text-xl lg:text-2xl tracking-[-0.02rem]">
                                        Craft. Craft. Craft.
                                    </h3>
                                </div>

                                {/* Subheader */}
                                <p className="text-xs ml-[1.65rem] opacity-25 tracking-[0.02rem] font-light leading-[16px] lg:w-1/3 group-hover:opacity-75 transition-all duration-300">
                                    Craft is the process. I can't not create. <br/>
                                </p>
                            </div>
                        </motion.div>

                        {/* Desktop Job Title Container */}
                        <motion.div className={`col-span-1 absolute right-12 bottom-18`}>

                            {/* Details */}
                            <motion.div
                            className="text-[#e9e9e9] dark:text-white flex flex-col items-end self-end"
                            variants={animateInChild}>

                            {/* Circle Header */}
                            <h1 className="flex items-center justify-center border-1 rounded-full tracking-tight font-medium text-sm -mr-2 px-2 mb-1.5 whitespace-nowrap -ml-2">Senior Creative</h1>
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

            {/* Currently */}
            <ResumeSectionHeader 
                header="August 2025"
                title="What's new?"
                headerClassName="-mt-20 md:mt-52 mb-1 dark:border-r-1 dark:border-b-1 dark:border-white/30 md:ml-1 bg-background dark:bg-transparent drop-shadow"
                titleClassName="tracking-[-1.8pt] md:tracking-[-2.5pt] text-5xl md:text-[58pt] mb-4 md:w-5/6 ml-1.5 md:ml-2"
            />
            <Currently className='col-span-full -mt-12' key='currently' toggleWork={toggleWork}/>

            {/* Product Design */}
            <ResumeSectionHeader 
                header="UI/UX Design"
                title="Products of Design."
                headerClassName="md:ml-1"
            />
            <ProductPage className='col-span-full -mt-10' key='product' toggleWork={toggleWork}/>

            {/* Creative Direction */}
            <ResumeSectionHeader 
                header="Creative Direction"
                title="The ones that had legs."
                headerClassName="dark:border-r-1 dark:border-b-1 dark:border-white/30 md:ml-0 bg-background dark:bg-transparent drop-shadow"
            />
            <BestWorkPage3 className='col-span-full -mt-[3.2rem]' key='bestwork' toggleWork={toggleWork}/>

            {/* Motion Design */}
            <ResumeSectionHeader 
                header="Motion Design"
                title=".blend-ing .ai, .ae and .js"
                headerClassName="ml-2 md:ml-1"
                titleClassName="ml-1.5 md:ml-0"
            />
            <MotionDesignPage className='col-span-full -mt-10' key='motion' toggleWork={toggleWork}/>

            {/* Photography */}
            <ResumeSectionHeader 
                header="Photography"
                title="Photographic Memories."
                headerClassName="mb-3 ml-1"
                titleClassName="ml-2 mb-3 w-[50%]"
            />
            <PhotographyPage className='col-span-full mt-8' key='photo' toggleWork={toggleWork}/>
            
            {/* Content */}
            <ResumeSectionHeader 
                header="Content Creation"
                title="Overthinking the Algorithm."
                headerClassName="mb-3 ml-1"
                titleClassName="ml-2 mb-3 w-[50%]"
            />
            <ContentPage className='col-span-full mt-8' key='content'/>
            
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