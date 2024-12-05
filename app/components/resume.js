'use client';
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const animateIn = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.06, duration: 0.2, ease: "easeOut" },
    },
};

const animateInChild = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

const dropdown = {
    hidden: { opacity: 0, y: -20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.05, duration: 0.25, ease: "easeOut" },
    },
    fade: {
        opacity: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const dropdownChild = {
    hidden: { opacity: 0, y: -20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.25, ease: "easeOut" },
    },
    fade: {
        opacity: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Resume({ className = "" }) {
    const [timeNyc, setTimeNyc] = useState(null);
    const [timeSg, setTimeSg] = useState(null);

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

    const [showLong, setShowLong] = useState(false);
    const [showCurriculum, setShowCurriculum] = useState(false);
    const [showAsm, setShowAsm] = useState(false);
    const [showTBWA, setShowTBWA] = useState(false);
    const [showSIA, setShowSIA] = useState(false);
    const [showIKEA, setShowIKEA] = useState(false);
    const [showSC, setShowSC] = useState(false);
    const [showBBH, setShowBBH] = useState(false);
    const [showSamsung, setShowSamsung] = useState(false);
    const [showNike, setShowNike] = useState(false);
    const [showJollibee, setShowJollibee] = useState(false);
    const [showSentosa, setShowSentosa] = useState(false);
    const [showKinetic, setShowKinetic] = useState(false);
    const [showFreelance, setShowFreelance] = useState(false);

    const toggleLong = () => {
        setShowLong((prevState) => !prevState);
    };

    const toggleCurriculum = () => {
        setShowCurriculum((prevState) => !prevState);
    }

    const toggleAsm = () => {
        setShowAsm((prevState) => !prevState);
    }

    const toggleTBWA = () => {
        setShowTBWA((prevState) => !prevState);
    }

    const toggleSIA = () => {
        setShowSIA((prevState) => !prevState);
    }

    const toggleIKEA = () => {
        setShowIKEA((prevState) => !prevState);
    }

    const toggleSC = () => {
        setShowSC((prevState) => !prevState);
    }

    const toggleBBH = () => {
        setShowBBH((prevState) => !prevState);
    }

    const toggleSamsung = () => {
        setShowSamsung((prevState) => !prevState);
    }

    const toggleNike = () => {
        setShowNike((prevState) => !prevState);
    }

    const toggleJollibee = () => {
        setShowJollibee((prevState) => !prevState);
    }

    const toggleSentosa = () => {
        setShowSentosa((prevState) => !prevState);
    }

    const toggleKinetic = () => {
        setShowKinetic((prevState) => !prevState);
    }

    const toggleFreelance = () => {
        setShowFreelance((prevState) => !prevState);
    }



   

    return (
        
    <>
        {/* Page Container */}
        <motion.div className={`grid grid-cols-1 lg:grid-cols-10 w-full md:pl-4
        items-start justify-items-start font-[family-name:var(--font-geist-sans)] 
        gap-2 text-sm tracking-tight ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>
        <AnimatePresence>
            
            {/* Bio */}
            <div className="lg:flex lg:flex-wrap lg:gap-10 col-span-full w-full">

                {/* Mobile Photo Card */}
                <div className="lg:hidden relative w-full h-[620px]">

                    {/* Name */}
                    <motion.h1
                    className="z-50 pl-5 pt-5 text-6xl tracking-tighter leading-15 font-base text-[#e9e9e9] dark:text-white"
                    variants={animateInChild}
                    >
                    I am <span className="font-script absolute top-10 tracking-tight text-7xl align-top ml-2">Chris</span>
                    {/* <span className="text-xs align-top ml-2 font-normal tracking-normal italic">Leow, Chris Leow.</span> */}
                    </motion.h1>

                    {/* Image */}
                    <motion.div className="absolute top-0 left-0 w-full h-full -z-50" variants={animateInChild}>
                        <Image
                        src="/profile/profile1.jpg"
                        alt=""
                        className="rounded-lg object-cover"
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
                        rounded-full tracking-tight font-medium text-sm w-[115px] mb-1.5 font-mono whitespace-nowrap">Senior Creative</h1>
                        
                        {/* Script Header */}
                        {/* <h1 className="flex items-center justify-start -rotate-2
                        rounded-full tracking-tighter whitespace-nowrap text-2xl -ml-1.5 font-script mb-2">Senior Creative</h1> */}

                        Based in New York City
                        <span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide">{timeNyc}</span>
                        <br />
                        <i className="-ml-0.5">From Singapore</i>
                        <span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide">{timeSg}</span>
                    </motion.div>
                </div> 

                {/* Write-up Container */}
                <div className="flex-1 lg:mb-10">

                    {/* Desktop Name */}
                    <motion.h1
                    className="hidden lg:block pt-5 text-6xl tracking-tighter text-foreground"
                    variants={animateInChild}
                    >
                    I am <span className="font-script absolute tracking-tight text-7xl ml-3" style={{ wordSpacing: "-0.25em" }}>Chris Leow</span>
                    {/* <span className="text-xs align-top ml-2 font-normal tracking-normal italic">Leow, Chris Leow.</span> */}
                    </motion.h1>

                    {/* Details */}
                    {/* <motion.div
                    className="hidden lg:block mt-14 text-[#e9e9e9] dark:text-white"
                    variants={animateInChild}
                    >
                        <h1 className="flex items-center justify-center -ml-2 border-1 border-[#e9e9e9] text-[#e9e9e9] dark:text-white
                        rounded-full tracking-tight font-medium text-sm w-[115px] mb-1.5 font-mono whitespace-nowrap">Senior Creative</h1>

                        Based in New York City
                        <span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide">{timeNyc}</span>
                        <br />
                        <i className="-ml-0.5">From Singapore</i>
                        <span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide">{timeSg}</span>
                    </motion.div> */}

                    {/* Desktop */}
                    <motion.h1 
                    className="hidden lg:block mt-14 -ml-2 text-[26px] font-script tracking-tight leading-10 text-foreground"
                    animate={{rotate:-1}}
                    variants={animateInChild}>
                        
                        {/* <p className="">And here are three<br/><span className="ml-36">things about me:</span></p> */}
                        <p className="">And here are three things about me:</p>
                        
                    </motion.h1>

                    {/* Mobile Three Things */}
                    <motion.h1 
                    className="block lg:hidden mb-14 -mt-8 -ml-1 md:mt-0 text-[40px] px-2 font-script tracking-tight leading-11 mix-blend-difference text-white dark:text-white"
                    animate={{rotate:-4}}
                    variants={animateInChild}>
                    
                        <p className="">And here are three <span className="ml-28 whitespace-nowrap">things about me:</span></p>

                    </motion.h1>

                    <motion.div 
                    className="mb-12 lg:mb-0 px-5 md:px-0 ml-1 mt-14" 
                    variants={animateInChild}>
                        {/* <p className="text-xs tracking-tight -ml-1">01.</p> */}
                        <p className="text-[22px]  tracking-tight -ml-4"><span className="text-[30px] opacity-100 font-script2 align-top relative -top-2 ml-1">1</span> I don&apos;t take anything too seriously.</p>
                        <p className="text-xxs ml-0.5 opacity-35 mb-10 tracking-normal font-light">Come on, script typeface on a portfolio website?</p>
                        <p className="text-[22px] tracking-tight -ml-4"><span className="text-[30px] opacity-100 font-script2 align-top relative -top-2">2</span> I aim to have fun in whatever I do.</p>
                        <p className="text-xxs ml-1 mt-1 opacity-35 mb-10 tacking-normal font-light leading-[13px]">I coded and designed this website from ground-up on VScode with React and Next.js. Fun? Masochistic? <i>Food for thought.</i></p>
                        <p className="text-[22px] tracking-tight -ml-4"><span className="text-[30px] opacity-100 font-script2 align-top relative -top-2">3</span> I am all about craft.</p>
                        <p className="text-xxs ml-0.5 opacity-35 mb-10 tracking-normal font-light">Truly. I hope you keep this in mind as you peruse my work.</p>
                    </motion.div>

                    {/* Desktop Contact */}
                    <motion.div 
                    className="hidden lg:block z-50 col-span-full tracking-tight"
                    variants={animateInChild}>
                        <p className="mb-2 text-xl ">Contact</p>
                        <p className="">Email – <span className="font-normal">ithinkitschristopher@gmail.com</span></p>
                        <p className="">LinkedIn – <a href="https://www.linkedin.com/in/chris-leow-93372b184/" className="underline transition-colors hover:text-midground" target="_blank" rel="noopener noreferrer">Chris Leow</a></p>
                        <p className="">Instagram – <a href="https://www.instagram.com/khristurtle/" className="font-normal underline transition-colors hover:text-midground" target="_blank" rel="noopener noreferrer">@khristurtle</a></p>
                    </motion.div>

                    {/* Mobile Line */}
                    <motion.div className="lg:hidden col-span-full ml-4 w-[89vw] h-[1px] dark:bg-white/15 shadow mt-4" variants={dropdownChild} layout='position' key='alamak'/>

                </div>

                {/* Desktop Photo Card */}
                <div className="hidden lg:block relative flex-1 h-[620px]">
                    {/* Image */}
                    <motion.div className="h-full w-auto -z-10 relative" variants={animateInChild}>

                        <Image
                        src="/profile/profile.jpg"
                        alt=""
                        className="rounded-lg"
                        layout="fill"
                        objectFit="cover"
                        />

                        {/* Details */}
                        <motion.div
                        className="absolute bottom-0 pl-8 pb-6 text-[#e9e9e9] dark:text-white"
                        variants={animateInChild}
                        >
                            {/* Circle Header */}
                            <h1 className="flex items-center justify-center -ml-2 border-1 border-[#e9e9e9] text-[#e9e9e9] dark:text-white
                            rounded-full tracking-tight font-medium text-sm w-[115px] mb-1.5 font-mono whitespace-nowrap">Senior Creative</h1>
                            
                            {/* Script Header */}
                            {/* <h1 className="flex items-center justify-start -rotate-2
                            rounded-full tracking-tighter whitespace-nowrap text-2xl -ml-1.5 font-script mb-2">Senior Creative</h1> */}

                            Based in New York City
                            <span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide">{timeNyc}</span>
                            <br />
                            <i className="-ml-0.5">From Singapore</i>
                            <span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide">{timeSg}</span>
                        </motion.div>

                        {/* <motion.div 
                            className="absolute bottom-5 left-5 z-50 col-span-full tracking-tight"
                            variants={animateInChild}>
                                <p className="mb-2 text-xl ">Contact</p>
                                <p className="">Email – <span className="font-normal">ithinkitschristopher@gmail.com</span></p>
                                <p className="">LinkedIn – <a href="https://www.linkedin.com/in/chris-leow-93372b184/" className="underline transition-colors hover:text-midground" target="_blank" rel="noopener noreferrer">Chris Leow</a></p>
                                <p className="">Instagram – <a href="https://www.instagram.com/khristurtle/" className="font-normal underline transition-colors hover:text-midground" target="_blank" rel="noopener noreferrer">@khristurtle</a></p>
                        </motion.div> */}
                    </motion.div>
                </div>
            
            </div>

            {/* Line */}
            <motion.div className="hidden lg:block col-span-full w-full h-[1px] dark:bg-white/15 shadow mt-2" variants={dropdownChild} layout='position' key='alamak'/>

            {/* FAQ Button Row */}
            <div className="flex justify-between mt-1 px-5 lg:px-0 cursor-pointer mb-6 lg:mb-4 ml-1 col-span-full w-full" onClick={toggleLong} key='wtf'>
                <div 
                className={`flex items-center justify-center -ml-3 transition-non-color duration-200 w-[55px]
                rounded-full tracking-normal text-xl ${showLong ? 'bg-foreground text-background scale-90' : ''}`}>
                    FAQ
                </div>

                <div 
                className={`flex items-center justify-center border-0 border-black dark:border-white/50 transition-non-color duration-200
                rounded-full mb-2 px-1 ${showLong ? 'bg-foreground text-background scale-90' : ''}`}>
                
                {showLong ? (
                    <ChevronUpIcon className="h-4 w-4" />
                ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                )}
                </div>
            </div> 

            {/* FAQ Dropdown */}
            {showLong && (
                <motion.div 
                key="dropdown-long"
                initial="hidden"
                animate="show"
                layout="position"
                variants={dropdown}
                className="lg:flex gap-5 w-full col-span-full">
                    <motion.div 
                    key="dropdown-who"
                    className="mb-10 px-5 md:px-0 flex-1"
                    variants={dropdownChild}
                    layout="position">
                        <p className="mb-3 font-mono text-sm">Who?</p>
                        <p className="mb-3">Born and raised in sunny <i className="mr-0.5 font-light ">(to put it mildly)</i> Singapore, I was once a young kid obsessed with the romanticized image of beret-wearing, palette-wielding artists. Now, I find myself living the surreal reality of professionally conceptualizing, creating, and directing what is essentially art for the world.</p>
                        <p>With a fervor for craft and a meticulous eye for finesse, I do take a possibly unhealthy pride in creating visually compelling work across various mediums.</p>
                    </motion.div>

                    <motion.div 
                    key="dropdown-what"
                    className="mb-10 px-5 md:px-0 flex-1"
                    variants={dropdownChild}
                    layout="position">
                        <p className="mb-3 font-mono text-sm">What?</p>
                        As a multidisciplinary creative and formerly the Creative Lead at ArtScience Museum in Singapore; eight years of experience in the Advertising and Design industry is what I find myself with–having notably worked on multiple brand campaigns for Singapore Airlines as an Art Director and global brands the likes of Nike, Samsung, IKEA, Studio Ghibli, Uniqlo and MINI. 
                    </motion.div>

                    <motion.div 
                    key="dropdown-and"
                    className="mb-8 px-5 md:px-0 flex-1"
                    variants={dropdownChild}
                    layout="position">
                        <p className="mb-3 font-mono text-sm">And?</p>
                        <p className="mb-3">In my spare time after work <i>(which, realistically, isn&apos;t much)</i>, I do... even more work, but for myself—creating content through photography, videography, editing and motion design.</p>
                        <p className="">When I am finally, actually, not working, you will find me thrifting for furniture or, for a more colloquial term, stooping on the streets of New York City. I do love building my living space up, though I wouldn&apos;t go so far as to call it interior design.</p>
                    </motion.div>
                </motion.div>
            )}

            {/* Mobile Contact */}
            <motion.div 
                className="lg:hidden mt-4 mb-8 px-5 md:px-0 col-span-full tracking-tight"
                layout="position"
                variants={animateInChild}
                transition={{
                    type: "spring",
                    stiffness: 300, 
                    damping: 26, 
                    }}
                key="Contact">
                    <p className="mb-2 text-xl ">Contact</p>
                    {/* <p className="mb-1 font-script w-12 whitespace-nowrap -ml-0.5 -rotate-3 text-sm italic tracking-">Drop me a hello!</p> */}
                    <p className="">Email – <span className="font-normal">ithinkitschristopher@gmail.com</span></p>
                    <p className="">LinkedIn – <a href="https://www.linkedin.com/in/chris-leow-93372b184/" className="underline transition-colors hover:text-midground" target="_blank" rel="noopener noreferrer">Chris Leow</a></p>
                    <p className="">Instagram – <a href="https://www.instagram.com/khristurtle/" className="font-normal underline transition-colors hover:text-midground" target="_blank" rel="noopener noreferrer">@khristurtle</a></p>
            </motion.div>
            
            {/* Currently: */}
            <motion.div 
                className="col-span-full pl-5 md:pl-0 md:col-span-full relative mt-4 cursor-pointer"
                variants={animateInChild}
                key="Currently"
                layout="position"
                transition={{
                    type: "spring",
                    stiffness: 300, 
                    damping: 24, 
                    }}
                onClick={toggleCurriculum}>
                    

                <h1 className="text-[23px] md:text-3xl mb-8 -ml-1 mt-6 tracking-normal font-script -rotate-3 text-black dark:text-white">Currently:</h1>
                {/* <h1 className="text-2xl md:text-3xl mb-8 -ml-1 mt-10 tracking-tight  w-20">Currently:</h1> */}

                {/* Line */}
                <motion.div className="col-span-full -ml-1 w-[89vw] h-[1px] dark:bg-white/15 shadow" variants={dropdownChild} layout='position'/>

                {/* Button Row */}
                <div className="flex justify-between mt-4">
                    <div 
                    className={`flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 transition-non-color duration-200 
                    rounded-full tracking-tight font-medium text-sm w-[125px] mb-2 font-mono whitespace-nowrap ${showCurriculum ? 'bg-foreground text-background scale-96' : ''}`}>
                        Master&apos;s Student
                    </div>

                    <div 
                    className={`flex items-center justify-center border-0 border-black dark:border-white/50 transition-non-color duration-200
                    rounded-full mb-2 px-1 ${showCurriculum ? 'bg-foreground text-background scale-96' : ''}`}>
                       
                    {showCurriculum ? (
                        <ChevronUpIcon className="h-4 w-4" />
                    ) : (
                        <ChevronDownIcon className="h-4 w-4" />
                    )}
                    </div>
                </div>  

                <div>
                    <p>MFA Interaction Design</p>
                    <p>School of Visual Arts</p>
                    <i className="-ml-0.5">September 2024 – May 2026</i>
                </div>

                {showCurriculum && (
                    <motion.div
                    key="dropdown-curriculum"
                    initial="hidden"
                    animate="show"
                    layout="position"
                    variants={dropdown}>
                        <h1 className="mt-8 text-lg">Curriculum</h1>
                        <div className="ml-4">
                            <p className="mt-4">Research Methodologies</p>
                            <p>Service Design</p>
                            <p>UX Content Writing</p>
                            <p>Programming <i>(C, Python, JavaScript)</i></p>
                            <p>Human Interaction & Ergonomics</p>
                            <p>Physical Computing</p>
                        </div>

                        <div className="ml-4 text-black/25 dark:text-white/25">
                            <p className="mt-0">Inclusive Design</p>
                            <p>Inclusive Design II</p>
                            <p>Spatial Computing</p>
                            <p>Advanced Fundamentals of UX</p>
                            <p>Intellectual Property & the Law</p>
                            <p>Framing User Experiences</p>
                            <p>Smart Objects</p>
                            <p>Professional Practices</p>
                            <p>Digital Accessibility</p>
                            <p>Design for Cities</p>
                            <p>Prototyping Narratives</p>
                            <p>Thesis</p>
                        </div>
                    </motion.div>
                )}
            </motion.div>

            {/* ArtScience Museum */}
            <motion.div className="col-span-full pl-5 md:pl-0 md:col-span-2 sm:pr-4 mt-0"
            variants={animateInChild}
            key="ASM"
            layout="position"
            transition={{
                type: "spring",
                stiffness: 300, // Adjust for faster or slower animation
                damping: 28, // Adjust for bounciness and smoothness
                }}>
                
                <div className="">
                    <h1 className="text-[23px] md:text-3xl mb-6 -ml-2 mt-18 tracking-normal -rotate-3 w-24 font-script">Previously:</h1>

                    {/* Line */}
                    <motion.div className="col-span-full md:col-span-2 -ml-1 w-[89vw] md:w-full h-[1px] dark:bg-white/15 shadow mt-4" variants={dropdownChild} layout='position'/>

                    {/* Clickable Area */}
                    <div className="cursor-pointer" onClick={toggleAsm}>

                        {/* Button Row */}
                        <div className="flex justify-between mt-4">
                            <div 
                            className={`flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 transition-non-color duration-200
                            rounded-full tracking-tight font-medium text-sm w-[104px] mb-2 font-mono whitespace-nowrap ${showAsm ? 'bg-foreground text-background scale-96' : ''}`}>
                                Creative Lead
                            </div>

                            <div 
                            className={`flex items-center justify-center border-0 border-black dark:border-white/50 transition-non-color duration-200
                            rounded-full mb-2 px-1 ${showAsm ? 'bg-foreground text-background scale-96' : ''}`}>
                            
                            {showAsm ? (
                                <ChevronUpIcon className="h-4 w-4" />
                            ) : (
                                <ChevronDownIcon className="h-4 w-4" />
                            )}
                            </div>
                        </div> 

                        <p>Marina Bay Sands <i>(ArtScience Museum)</i></p>
                        <p className="-ml-0.5 italic opacity-75">January 2024 – November 2024</p>

                    </div>

                </div>

                { showAsm && (
                    <motion.div
                    key="dropdown-asm"
                    initial="hidden"
                    animate="show"
                    layout="position"
                    variants={dropdown}>
                        <h1 className="mt-8 2xl:mt-14 text-lg">
                        ArtScience Museum</h1>

                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 mb-4 ml-5 opacity-90">
                                The World of Studio Ghibli
                            </h1>

                            <p className="ml-5 opacity-50">
                            Creative direction for the integrated marketing campaign for The World of Studio Ghibli, the first ever Studio Ghibli exhibition in Singapore held at ArtScience Museum. Designed the Key Visual for the exhibition and provided creative direction over marketing partners as well as merchandise for the exhibition. 
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-4 mb-4 ml-5 opacity-90">
                                Goddess: Brave. Bold. Beautiful.</h1>
                            <p className="ml-5 opacity-50">
                            Creative direction and strategic positioning for the marketing campaign of Goddess, an exhibition at the ArtScience Museum that celebrates screen icons across 120 years of moving image history. 
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4 ml-5 opacity-90">
                            Frida Kahlo: The Life of an Icon</h1>
                        <p className="ml-5 opacity-50">
                        Creative direction and strategic positioning for the marketing campaign of Frida Kahlo: Life of an Icon, an exhibition at the ArtScience Museum on Mexican artist Frida Kahlo, alongside the companion exhibition Laid Bare: Frida’s Inner World. Managed and produced visuals and assets across the campaign titled Frida Forever for the lineup of activities held at the museum.
                        </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4 ml-5 opacity-90">
                            teamLab Future World: Where Art Meets Science</h1>
                        <p className="ml-5 opacity-50">
                        Creative direction and oversight on all marketing deliverables for Future World, ArtScience Museum&apos;s permanent exhibition in collaboration with teamLab.
                        </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4 ml-5 opacity-90">
                            ArtScience After Hours</h1>
                        <p className="ml-5 opacity-50">
                        Creative direction and visual identity oversight on ArtScience After Hours, an all-encompassing night time experience for the ArtScience Museum, with late-night offerings and experiences beyond daylight.
                        </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4 ml-5 opacity-90">
                            ArtScience Cinema</h1>
                        <p className="ml-5 opacity-50">
                        Creative direction on all marketing deliverables for ArtScience Cinema, ArtScience Museumss purpose-built cinema that screens a curated programme of film all year round by the museums film curatorial team.
                        </p>
                        </motion.div>
                    </motion.div>
                )}

            </motion.div>

            {/* TBWA */}
            <motion.div className="col-span-full pl-5 md:pl-0 md:col-span-2 sm:pr-4 mt-3"
            variants={animateInChild}
            key="TBWA"
            layout="position"
            transition={{
                type: "spring",
                stiffness: 300, // Adjust for faster or slower animation
                damping: 27, // Adjust for bounciness and smoothness
                }}>

                {/* Line */}
                <motion.div className="col-span-full md:col-span-2 -ml-1 w-[89vw] md:w-full h-[1px] dark:bg-white/15 shadow" variants={dropdownChild} layout='position'/>

                {/* Button Row */}
                <motion.div variants={animateInChild} className="cursor-pointer" onClick={toggleTBWA}>
                    
                    {/* Title + Button */}
                    <div className="flex justify-between mt-4">
                        <div 
                        className={`flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 transition-non-color duration-200
                        rounded-full tracking-tight font-medium text-sm w-[88px] mb-2 font-mono whitespace-nowrap ${showTBWA ? 'bg-foreground text-background scale-96' : ''}`}>
                            Art Director
                        </div>

                        <div 
                        className={`flex items-center justify-center border-0 border-black dark:border-white/50 transition-non-color duration-200
                        rounded-full mb-2 px-1 ${showTBWA ? 'bg-foreground text-background scale-96' : ''}`}>
                        
                        {showTBWA ? (
                            <ChevronUpIcon className="h-4 w-4" />
                        ) : (
                            <ChevronDownIcon className="h-4 w-4" />
                        )}
                        </div>
                    </div> 

                    <p>TBWA\ Singapore</p>
                    <i className="-ml-[1px] opacity-75">March 2021 – August 2023</i>
                </motion.div>

                {showTBWA && (
                <motion.div
                className=""
                key="dropdown-TBWA"
                initial="hidden"
                animate="show"
                layout="position"
                variants={dropdown}
                transition={{
                    type: "spring",
                    stiffness: 300, // Adjust for faster or slower animation
                    damping: 26, // Adjust for bounciness and smoothness
                    }}>

                    {/* SIA Button Row */}
                    <motion.div
                    className="flex justify-between cursor-pointer pr-1 mt-6"
                    onClick={toggleSIA}
                    variants={dropdownChild}
                    layout='position'
                    transition={{
                        type: "spring",
                        stiffness: 300, // Adjust for faster or slower animation
                        damping: 26, // Adjust for bounciness and smoothness
                        }}>
                        <button 
                        className="2xl:mt-14 text-lg whitespace-nowrap tracking-tight flex items-center">
                            Singapore Airlines
                        </button>

                        <button 
                        className="2xl:mt-14 flex items-center">
                        {showSIA 
                        ? ( <ChevronUpIcon className="ml-1 h-4 w-4"/>)
                        : ( <ChevronDownIcon className="ml-1 h-4 w-4"/>)} 
                        </button>
                    </motion.div>

                    {/* SIA Dropdown */}
                    {showSIA && (
                    <motion.div className=""
                    key="dropdown-SIA"
                    initial="hidden"
                    animate="show"
                    layout="position"
                    variants={dropdown}>

                        
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 ml-5 mb-4 opacity-90 font-base">Beyond The Cabin</h1>
                            <p className="mb-4 ml-5 opacity-50">
                            Lead Creative and Motion Designer for Beyond The Cabin, an episodic brand campaign and content series that was centred around Singapore Airline’s Cabin Crew’s as World Class travellers with worldly passions.</p>
                            <p className="mb-4 ml-5 opacity-50">
                            Produced travel guides featuring Cabin Crew, casted for their expertise and passion for destinations flown to by Singapore Airlines. Showcasing a depth of understanding they have for the destinations and novel experiences through 
                            their insights
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 ml-5 mb-4 opacity-90 font-base">Cocktail Conversations</h1>
                            <p className="mb-4 ml-5 opacity-50">
                            Lead Creative and Motion Designer for Cocktail Conversations, an episodic sustenance campaign and content series for the flagship SilverKris Lounge at Singapore Changi Airport Terminal 3. </p>
                            <p className="mb-4 ml-5 opacity-50">
                            Centred around the idea of the lounges being home to personalities from all walks of life around the world. We invited a couple of these personalities to have a conversation with us at the Crystal Bar in the First Class SilverKris Lounge, finishing off with a bespoke cocktail concocted just for them based off their answers and available for passengers to order at the bar.
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 ml-5 mb-4 opacity-90 font-base">Kris+ Brand Campaign</h1>
                            <p className="mb-4 ml-5 opacity-50">
                            Lead Creative for a tactical brand campaign for Kris+, the lifestyle rewards app by Singapore Airlines. Centred around the idea of a holiday getaway being just one tap away on the app through shopping and dining, the campaign was brought to life in the likes of a Rube Goldberg device, symbolising the domino effect through the journey of using the app.</p>
                            <p className="mb-4 ml-5 opacity-50">
                            The campaign launched with a 30s brand film and OOH placements around Singapore.
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 ml-5 mb-4 opacity-90 font-base">Travel Like Never Before</h1>
                            <p className="mb-4 ml-5 opacity-50">
                            Conceptualised and art directed a brand campaign for the recovery efforts of Singapore Airlines as travel restrictions lifted across the world in 2022. With the strategy of travelling bigger and better than ever before, the campaign was centred around travelling for the big milestone and sentimental moments now that travel is back on the table.</p>
                            <p className="mb-4 ml-5 opacity-50">
                            The brand film has been viewed over 36 million times. 
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 ml-5 mb-4 opacity-90 font-base">SilverKris Lounge</h1>
                            <p className="mb-4 ml-5 opacity-50">
                            Lead Creative, Editor and Motion Designer for the launch campaign of the brand new flagship SilverKris Lounges at Changi Airport. Produced a 90s brand film that covered the amenities across the 4 lounges.
                            </p>
                            <p className="mb-4 ml-5 opacity-50">
                            Oversaw the creation of a glass installation of the Batik Motif as the entrance facade to the lounges and the animation of the Batik Motif for an 8 metre curved digital wall at the entrance foyer.
                            </p>
                            <p className="mb-4 ml-5 opacity-50">
                            Art directed a photo asset library shoot and film shoot and offline / online edited the film till delivery.
                            </p>                          
                        </motion.div>
                        
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 ml-5 mb-4 opacity-90 font-base">Cargo THRUCOOL</h1>
                            <p className="mb-4 ml-5 opacity-50">
                            Conceptualized and art directed a film for Singapore Airlines Cargo’s THRUCOOL product, that boasts a seamless cold chain cargo service for temperature critical products that can shipped across the world with Singapore Airline’s global destinations network.
                            </p>
                        </motion.div>
                    </motion.div>
                    )}

                    {/* IKEA Button Row */}
                    <motion.div
                    className="flex justify-between cursor-pointer pr-1 mt-2"
                    onClick={toggleIKEA}
                    variants={dropdownChild}
                    layout='position'
                    transition={{
                        type: "spring",
                        stiffness: 350, // Adjust for faster or slower animation
                        damping: 31, // Adjust for bounciness and smoothness
                        }}>
                        <button 
                        className="2xl:mt-14 text-lg whitespace-nowrap tracking-tight flex items-center">
                            IKEA
                        </button>

                        <button 
                        className="2xl:mt-14 flex items-center">
                        {showIKEA 
                        ? ( <ChevronUpIcon className="ml-1 h-4 w-4"/>)
                        : ( <ChevronDownIcon className="ml-1 h-4 w-4"/>)} 
                        </button>
                    </motion.div>
                    
                    {/* IKEA Dropdown */}
                    {showIKEA && (
                    <motion.div variants={dropdownChild}
                    layout='position'
                    transition={{
                        type: "spring",
                        stiffness: 350, // Adjust for faster or slower animation
                        damping: 32, // Adjust for bounciness and smoothness
                        }}>
                        <h1 className="mt-4 ml-5 mb-4 opacity-90 font-base">Oops Happens <i className="text-neutral-500">(HEMSÄKER)</i></h1>
                        <p className="mb-4 ml-5 opacity-50">
                        Art directed and conceptualised a campaign for IKEA Singapore & Malaysia’s insurance product, HEMSAKER. A set of 9 videos that went live across IKEA’s social platforms, web pages and various other platforms.
                        </p>
                    </motion.div>
                    )}

                    {/* SC Button Row */}
                    <motion.div
                    className="flex justify-between cursor-pointer pr-1 mt-2"
                    onClick={toggleSC}
                    variants={dropdownChild}
                    layout='position'
                    transition={{
                        type: "spring",
                        stiffness: 350, // Adjust for faster or slower animation
                        damping: 31, // Adjust for bounciness and smoothness
                        }}>
                        <button 
                        className="2xl:mt-14 text-lg whitespace-nowrap tracking-tight flex items-center">
                            Standard Chartered
                        </button>

                        <button 
                        className="2xl:mt-14 flex items-center">
                        {showSC 
                        ? ( <ChevronUpIcon className="ml-1 h-4 w-4"/>)
                        : ( <ChevronDownIcon className="ml-1 h-4 w-4"/>)} 
                        </button>
                    </motion.div>

                    {/* SC Dropdown */}
                    {showSC &&(
                    <motion.div variants={dropdownChild}
                    layout='position'
                    transition={{
                        type: "spring",
                        stiffness: 350, // Adjust for faster or slower animation
                        damping: 31, // Adjust for bounciness and smoothness
                        }}>
                        <h1 className="mt-4 ml-5 mb-4 opacity-90 font-base">Marina Bay Financial Centre</h1>
                        <p className="mb-4 ml-5 opacity-50">
                        Art directed and did the offline / online edit of a video and photo set of the new Standard Chartered signage at Marina Bay Financial Centre as part of their latest brand identity refresh and brand evolution. The video and photos were circulated globally as part of internal communications in Standard Chartered Bank.
                        </p>
                    </motion.div>
                    )}

                </motion.div>
                )}
            </motion.div>

            {/* BBH */}
            <motion.div className="col-span-full pl-5 md:pl-0 md:col-span-2 sm:pr-4 mt-3"
            variants={animateInChild}
            key="BBH"
            layout="position"
            transition={{
                type: "spring",
                stiffness: 300, // Adjust for faster or slower animation
                damping: 26, // Adjust for bounciness and smoothness
                }}>

                {/* Line */}
                <motion.div className="col-span-full md:col-span-2 -ml-1 w-[89vw] md:w-full h-[1px] dark:bg-white/15 shadow" variants={dropdownChild} layout='position'/>

                {/* Button Row */}
                <motion.div variants={animateInChild} className="cursor-pointer" onClick={toggleBBH}>
                    
                    {/* Title + Button */}
                    <div className="flex justify-between mt-4">
                        <div 
                        className={`flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 transition-non-color duration-200
                        rounded-full tracking-tight font-medium text-sm w-[135px] mb-2 font-mono whitespace-nowrap ${showBBH ? 'bg-foreground text-background scale-96' : ''}`}>
                            Motion Art Director
                        </div>

                        <div 
                        className={`flex items-center justify-center border-0 border-black dark:border-white/50 transition-non-color duration-200
                        rounded-full mb-2 px-1 ${showBBH ? 'bg-foreground text-background scale-96' : ''}`}>
                        
                        {showBBH ? (
                            <ChevronUpIcon className="h-4 w-4" />
                        ) : (
                            <ChevronDownIcon className="h-4 w-4" />
                        )}
                        </div>
                    </div> 

                    <p>BBH Singapore</p>
                    <i className="-ml-[1px] opacity-75">June 2019 – March 2021</i>
                </motion.div>

                {showBBH && (
                <motion.div
                className=""
                initial="hidden"
                animate="show"
                layout="position"
                variants={dropdown}
                transition={{
                    type: "spring",
                    stiffness: 300, // Adjust for faster or slower animation
                    damping: 26, // Adjust for bounciness and smoothness
                    }}>

                    {/* SAMSUNG Button Row */}
                    <motion.div
                    className="flex justify-between cursor-pointer pr-1 mt-6"
                    onClick={toggleSamsung}
                    variants={dropdownChild}
                    layout='position'
                    transition={{
                        type: "spring",
                        stiffness: 300, // Adjust for faster or slower animation
                        damping: 26, // Adjust for bounciness and smoothness
                        }}>
                        <button 
                        className="2xl:mt-14 text-lg whitespace-nowrap tracking-tight flex items-center">
                            Samsung
                        </button>

                        <button 
                        className="2xl:mt-14 flex items-center">
                        {showSamsung 
                        ? ( <ChevronUpIcon className="ml-1 h-4 w-4"/>)
                        : ( <ChevronDownIcon className="ml-1 h-4 w-4"/>)} 
                        </button>
                    </motion.div>

                    {/* Samsung Dropdown */}
                    {showSamsung && (
                    <motion.div className=""
                    key="dropdown-SIA"
                    initial="hidden"
                    animate="show"
                    layout="position"
                    variants={dropdown}>

                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 ml-5 mb-4 opacity-90 font-base">Global Lifestyle TV Pitch</h1>
                            <p className="mb-4 ml-5 opacity-50">
                            Provided motion design direction, content series visualisations and a manifesto film for the global pitch for the Lifestyle TV campaign.</p>
                            <p className="mb-4 ml-5 opacity-50">
                            Winning both the Lifestyle TV campaign and global visual displays digital / social strategy, platform management and content creation retainer business for BBH Singapore.
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 ml-5 mb-4 opacity-90 font-base">CES 2020</h1>
                            <p className="mb-4 ml-5 opacity-50">
                            Art directed & executed on site social coverage of Samsung’s Visual display’s new releases and technology at CES 2020 in Las Vegas. </p>
                            <p className="mb-4 ml-5 opacity-50">
                            Content produced involved short form video series distributed on Facebook and Instagram feed, day to day event coverage on Instagram stories and long form event recap videos for Youtube.
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 ml-5 mb-4 opacity-90 font-base">Motion Design</h1>
                            <p className="mb-4 ml-5 opacity-50">
                            Edited and motion designed pre-roll films, Instagram Stories and Carousel posts for the Samsung Lifestyle TV social platforms. Both organic and paid media.</p>
                            <div className="ml-6 opacity-50 mb-10">
                                <h1 className="">The Frame</h1>
                                {/* <p className="mb-4">A video promoting the latest 2021 model of The Frame</p> */}

                                <h1 className="">Why Would You Do That?</h1>
                                {/* <p className="mb-4">A video promoting the features of pairing a Samsung Soundbar with a Samsung TV, executed in a tongue-in-cheek manner. </p> */}

                                <h1 className="">The Terrace Feature Highlights</h1>
                                {/* <p className="mb-4">Produced a set of 4 videos each highlighting a feature of the latest Samsung lifestyle TV, The Terrace.</p> */}

                                <h1 className="">Smart Features Highlights</h1>
                                {/* <p className="mb-4">Produced a set of 4 videos highlighting a Smart Feature that comes equipped with Samsung Smart TVs</p> */}
                                <h1>QLED 8K + Galaxy S20</h1>
                                <h1>TV Burn-in Checker</h1>
                            </div>
                        </motion.div>
                        
                    </motion.div>
                    )}

                    {/* Nike Button Row */}
                    <motion.div
                    className="flex justify-between cursor-pointer pr-1 mt-2"
                    onClick={toggleNike}
                    variants={dropdownChild}
                    layout='position'
                    transition={{
                        type: "spring",
                        stiffness: 350, // Adjust for faster or slower animation
                        damping: 31, // Adjust for bounciness and smoothness
                        }}>
                        <button 
                        className="2xl:mt-14 text-lg whitespace-nowrap tracking-tight flex items-center">
                            NIKE
                        </button>

                        <button 
                        className="2xl:mt-14 flex items-center">
                        {showNike 
                        ? ( <ChevronUpIcon className="ml-1 h-4 w-4"/>)
                        : ( <ChevronDownIcon className="ml-1 h-4 w-4"/>)} 
                        </button>
                    </motion.div>
                    
                    {/* Nike Dropdown */}
                    {showNike && (
                    <motion.div variants={dropdownChild}
                    layout='position'
                    transition={{
                        type: "spring",
                        stiffness: 350, // Adjust for faster or slower animation
                        damping: 32, // Adjust for bounciness and smoothness
                        }}>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 ml-5 mb-4 opacity-90 font-base">Athlete Stories: Koy & Toon</h1>
                            <p className="mb-4 ml-5 opacity-50">
                            Offline and online edit and animation for a set of videos and a full film highlighting the stories of Bangkok based NIKE athletes Koy & toon, distributed on Nike’s Instagram feed, stories and TV.</p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 ml-5 mb-4 opacity-90 font-base">Women&apos;s Instazine</h1>
                            <p className="mb-10 ml-5 opacity-50">
                            Edited and animated supporting assets for the campaign as well as the case study film for Women’s Instazine</p>
                        </motion.div>
                    </motion.div>
                    
                    )}

                    {/* Jollibee Button Row */}
                    <motion.div
                    className="flex justify-between cursor-pointer pr-1 mt-2 -ml-0.5"
                    onClick={toggleJollibee}
                    variants={dropdownChild}
                    layout='position'
                    transition={{
                        type: "spring",
                        stiffness: 350, // Adjust for faster or slower animation
                        damping: 31, // Adjust for bounciness and smoothness
                        }}>
                        <button 
                        className="2xl:mt-14 text-lg whitespace-nowrap tracking-tight flex items-center">
                            Jollibee
                        </button>

                        <button 
                        className="2xl:mt-14 flex items-center">
                        {showJollibee 
                        ? ( <ChevronUpIcon className="ml-1 h-4 w-4"/>)
                        : ( <ChevronDownIcon className="ml-1 h-4 w-4"/>)} 
                        </button>
                    </motion.div>

                    {/* Jollibee Dropdown */}
                    {showJollibee &&(
                    <motion.div variants={dropdownChild}
                    layout='position'
                    transition={{
                        type: "spring",
                        stiffness: 350, // Adjust for faster or slower animation
                        damping: 31, // Adjust for bounciness and smoothness
                        }}>
                        <h1 className="mt-4 ml-5 mb-4 opacity-90 font-base">JolliEverAfter</h1>
                        <p className="mb-4 ml-5 opacity-50">
                        Pre Production, Art Direction, Offline and online edit and animation of the teaser film & challenges for JolliEverAfter, a campaign for Jollibee that brought their annual long form film to TikTok in the form of 9 challenges.
                        </p>
                    </motion.div>
                    )}

                    {/* Sentosa Button Row */}
                    <motion.div
                    className="flex justify-between cursor-pointer pr-1 mt-2"
                    onClick={toggleSentosa}
                    variants={dropdownChild}
                    layout='position'
                    transition={{
                        type: "spring",
                        stiffness: 300, // Adjust for faster or slower animation
                        damping: 28, // Adjust for bounciness and smoothness
                        }}>
                        <button 
                        className="2xl:mt-14 text-lg whitespace-nowrap tracking-tight flex items-center">
                            Sentosa
                        </button>

                        <button 
                        className="2xl:mt-14 flex items-center">
                        {showSentosa 
                        ? ( <ChevronUpIcon className="ml-1 h-4 w-4"/>)
                        : ( <ChevronDownIcon className="ml-1 h-4 w-4"/>)} 
                        </button>
                    </motion.div>

                    {/* Sentosa Dropdown */}
                    {showSentosa && (
                    <motion.div className=""
                    key="dropdown-sentosa"
                    initial="hidden"
                    animate="show"
                    layout="position"
                    transition={{
                        type: "spring",
                        stiffness: 300, // Adjust for faster or slower animation
                        damping: 28, // Adjust for bounciness and smoothness
                        }}
                    variants={dropdown}>

                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 ml-5 mb-4 opacity-90 font-base">Virtual Sentosa</h1>
                            <p className="mb-4 ml-5 opacity-50">
                            Compiled footage of Virtual Sentosa and edited + animated a set of launch and PR videos for the campaign. The videos were then distributed on Sentosa’s social media platforms as well as news outlets and channels both locally and globally.</p>
                            <p className="mb-4 ml-5 opacity-50">
                            The campaign was covered by news outlets worldwide including Campaign Asia, Hypebeast, Conde Nast, NHK Japan.


                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 ml-5 mb-4 opacity-90 font-base">#BehindSentosa</h1>
                            <p className="mb-4 ml-5 opacity-50">
                            Filmed and directed a video covering the efforts undertaken by the staff of Sentosa in response to the COVID-19 outbreak. The video went live on Sentosa’s Facebook and Instagram channels.</p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 ml-5 mb-4 opacity-90 font-base">Motion Design</h1>
                            <p className="mb-4 ml-5 opacity-50">
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

                    

                </motion.div>
                )}
            </motion.div>

            {/* Kinetic */}
            <motion.div className="col-span-full pl-5 md:pl-0 md:col-span-2 sm:pr-4 mt-3" 
            variants={animateInChild}
            key="Kinetic"
            layout="position"
            transition={{
                type: "spring",
                stiffness: 300, // Adjust for faster or slower animation
                damping: 25, // Adjust for bounciness and smoothness
                }}>

                {/* Line */}
                <motion.div className="col-span-full md:col-span-2 -ml-1 w-[89vw] md:w-full h-[1px] dark:bg-white/15 shadow" variants={dropdownChild} layout='position'/>

                {/* Button Row */}
                <motion.div variants={animateInChild} className="cursor-pointer" onClick={toggleKinetic}>
                    
                    {/* Title + Button */}
                    <div className="flex justify-between mt-4">
                        <div 
                        className={`flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 transition-non-color duration-200
                        rounded-full tracking-tight font-medium text-sm w-[120px] mb-2 font-mono whitespace-nowrap ${showKinetic ? 'bg-foreground text-background scale-96' : ''}`}>
                            Motion Designer
                        </div>

                        <div 
                        className={`flex items-center justify-center border-0 border-black dark:border-white/50 transition-non-color duration-200
                        rounded-full mb-2 px-1 ${showKinetic ? 'bg-foreground text-background scale-96' : ''}`}>
                        
                        {showKinetic ? (
                            <ChevronUpIcon className="h-4 w-4" />
                        ) : (
                            <ChevronDownIcon className="h-4 w-4" />
                        )}
                        </div>
                    </div> 

                    <p>Kinetic Singapore</p>
                    <i className="-ml-[1px] opacity-75">January 2019 – Aptil 2019</i>

                  
                </motion.div>

                {showKinetic && (
                <motion.div
                className=""
                initial="hidden"
                animate="show"
                layout="position"
                variants={dropdown}
                transition={{
                    type: "spring",
                    stiffness: 300, // Adjust for faster or slower animation
                    damping: 26, // Adjust for bounciness and smoothness
                    }}>

                    <p className="mt-4">Freelance Creative</p>
                    <i className="-ml-[1px] opacity-75">July 2016 – October 2016</i>

                    <p className="mt-4">Creative Intern</p>
                    <i className="-ml-[1px] opacity-75">August 2015 – November 2015</i>

                    <h1 className="mt-8 2xl:mt-14 text-lg">
                        Uniqlo Singapore</h1>

                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-8 mb-4 ml-5 opacity-90">
                            New Style Fresh Start
                        </h1>
                        <p className="ml-5 opacity-50">
                        Produced a set of videos distributed on displays in stores around South East Asia as part of the 2019 Chinese New Year season.
                        </p>
                    </motion.div>

                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4 ml-5 opacity-90">
                            Your Stage Now Live</h1>
                        <p className="ml-5 opacity-50">
                        Art Directed and produced a set of videos for the panoramic displays during the launch of the Uniqlo flagship store as part of the Your Stage Now Live launch campaign
                        </p>
                    </motion.div>

                </motion.div>
                )}
            </motion.div>

            {/* Freelance */}
            <motion.div className="col-span-full pl-5 md:pl-0 md:col-span-2 sm:pr-4 mt-3" 
            variants={animateInChild}
            key="Freelance"
            layout="position"
            transition={{
                type: "spring",
                stiffness: 300, // Adjust for faster or slower animation
                damping: 24, // Adjust for bounciness and smoothness
                }}>

                {/* Line */}
                <motion.div className="col-span-full md:col-span-2 -ml-1 w-[89vw] md:w-full h-[1px] dark:bg-white/15 shadow" variants={dropdownChild} layout='position'/>

                {/* Button Row */}
                <motion.div variants={animateInChild} className="cursor-pointer" onClick={toggleFreelance}>
                    
                    {/* Title + Button */}
                    <div className="flex justify-between mt-4">
                        <div 
                        className={`flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 transition-non-color duration-200
                        rounded-full tracking-tight font-medium text-sm w-[80px] mb-2 font-mono whitespace-nowrap ${showFreelance ? 'bg-foreground text-background scale-96' : ''}`}>
                            Freelance
                        </div>

                        <div 
                        className={`flex items-center justify-center border-0 border-black dark:border-white/50 transition-non-color duration-200
                        rounded-full mb-2 px-1 ${showFreelance ? 'bg-foreground text-background scale-96' : ''}`}>
                        
                        {showFreelance ? (
                            <ChevronUpIcon className="h-4 w-4" />
                        ) : (
                            <ChevronDownIcon className="h-4 w-4" />
                        )}
                        </div>
                    </div> 

                    <p>Motion Designer</p>
                    <i className="-ml-[1px] opacity-75">November 2015 – January 2019</i>

                  
                </motion.div>

                {showFreelance && (
                <motion.div
                className=""
                initial="hidden"
                animate="show"
                layout="position"
                variants={dropdown}
                transition={{
                    type: "spring",
                    stiffness: 300, // Adjust for faster or slower animation
                    damping: 26, // Adjust for bounciness and smoothness
                    }}>

                    <p className="mt-4">The Secret Little Agency (TSLA)</p>
                    <p className="mt-1">MadebyAnonymous</p>
                    <p className="mt-1">GOODSTUPH</p>
                    <p className="mt-1">TMRRWstudio</p>
                    <p className="mt-1">Sixtoes.tv/TBWA Singapore</p>
                    <p className="mt-1">Superunion Singapore</p>

                    {/* <h1 className="mt-8 2xl:mt-14 text-lg">
                        Uniqlo Singapore</h1>

                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-8 mb-4 ml-5 opacity-90">
                            New Style Fresh Start
                        </h1>
                        <p className="ml-5 opacity-50">
                        Produced a set of videos distributed on displays in stores around South East Asia as part of the 2019 Chinese New Year season.
                        </p>
                    </motion.div>

                    <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4 ml-5 opacity-90">
                            Your Stage Now Live</h1>
                        <p className="ml-5 opacity-50">
                        Art Directed and produced a set of videos for the panoramic displays during the launch of the Uniqlo flagship store as part of the Your Stage Now Live launch campaign
                        </p>
                    </motion.div> */}

                </motion.div>
                )}
            </motion.div>

            <div className={`${showFreelance ? 'h-[400px]' : 'h-[200px]'}`} key='whateverdude'/>
            </AnimatePresence>    
        </motion.div>
    </>
    );
}