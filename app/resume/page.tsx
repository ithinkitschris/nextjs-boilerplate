'use client';
import { motion, AnimatePresence } from "framer-motion";
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import Carousel from '../components/profile-carousel.js'



const animateIn = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1, y: 0,
        transition: { staggerChildren: 0.06, duration: 0.2, ease: "easeOut" }
    }
};
const animateInChild ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {duration:0.3, ease:"easeOut"}
        }
    }

const dropdown = {
    hidden: { opacity: 0, y: -20 },
    show: {
        opacity: 1, y: 0,
        transition: { staggerChildren: 0.1, duration: 0.25, ease: "easeOut" }
    },
    fade: { 
        opacity:0,
        transition: {duration:0.5, ease:"easeOut"}
     },
    
};

const dropdownChild = {
    hidden: { opacity: 0, y: -20 },
    show: {
        opacity: 1, y: 0,
        transition: { duration: 0.25, ease: "easeOut" }
    },
    fade: { 
        opacity:0,
        transition: {duration:0.5, ease:"easeOut"}
     },
    
};


export default function Resume({className=""}) {

    const [timeNyc, setTimeNyc] = useState<string | null>(null);
    useEffect(() => {
      
      const currentTime = new Date();
      const timeInTimeZone = new Intl.DateTimeFormat('en-US', {
        timeZone:'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(currentTime);
      setTimeNyc(timeInTimeZone);
  
      const timer = setInterval(() => {
        const updatedTime = new Date();
        const updatedTimeInTimeZone = new Intl.DateTimeFormat('en-US', {
          timeZone:'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(updatedTime);
  
        setTimeNyc(updatedTimeInTimeZone);
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const [timeSg, setTimeSg] = useState<string | null>(null);
    useEffect(() => {
      
      const currentTime = new Date();
      const timeInTimeZone = new Intl.DateTimeFormat('en-US', {
        timeZone:'Asia/Singapore',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(currentTime);
      setTimeSg(timeInTimeZone);
  
      const timer = setInterval(() => {
        const updatedTime = new Date();
        const updatedTimeInTimeZone = new Intl.DateTimeFormat('en-US', {
          timeZone:'Asia/Singapore',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(updatedTime);
  
        setTimeSg(updatedTimeInTimeZone);
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);

    const [showShort, setShowShort] = useState(true);
    const [showLong, setShowLong] = useState(false);
    const [showCurriculum, setShowCurriculum] = useState(false);
    const [showAsm, setShowAsm] = useState(false);

    const toggleShort = () => {
        showShort ? setShowShort(false) : setShowShort(true)
    };

    const toggleLong = () => {
        setShowLong((prevState) => !prevState);
    };

    const toggleCurriculum = () => {
        setShowCurriculum((prevState) => !prevState);
    }

    const toggleAsm = () => {
        setShowAsm((prevState) => !prevState);
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
            <div className="col-span-4 ">

                {/* Mobile Photo Card */}
                <div className="lg:hidden relative w-full h-[620px]">

                    {/* Name */}
                    <motion.h1
                    className="z-50 pl-5 pt-5 text-6xl tracking-tighter leading-15 font-base text-white"
                    variants={animateInChild}
                    >
                    I am <span className="font-script absolute top-10 tracking-tight text-7xl align-top ml-2">Chris</span>
                    {/* <span className="text-xs align-top ml-2 font-normal tracking-normal italic">Leow, Chris Leow.</span> */}
                    </motion.h1>

                    {/* Image */}
                    <motion.div className="absolute top-0 left-0 w-full h-full -z-50" variants={animateInChild}>
                        <Image
                        src="/profile/profile.jpg"
                        alt=""
                        className="rounded-lg object-cover"
                        layout="fill"
                        objectFit="cover"
                        />
                    </motion.div>

                    {/* Details */}
                    <motion.div
                    className="absolute bottom-0 pl-6 pb-14 text-white "
                    variants={animateInChild}
                    >
                        {/* Circle Header */}
                        <h1 className="flex items-center justify-center -ml-2.5 border-1 border-white/50  
                        rounded-full tracking-tighter font-medium text-sm w-[135px] mb-1.5 font-mono whitespace-nowrap">Senior Creative</h1>
                        
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

                {/* Desktop Header */}
                <motion.h1
                    className="hidden lg:block mt-2 mb-12 text-7xl tracking-tighter whitespace-nowrap leading-10 text-foreground"
                    variants={animateInChild}
                    >
                    I am Chris.
                    {/* <span className="text-xs align-top ml-2 font-normal tracking-normal italic">Leow, Chris Leow.</span> */}
                </motion.h1>

                {/* Desktop Details */}
                <motion.div
                className="mb-10 -ml-0.5 text-foreground hidden md:block"
                variants={animateInChild}>
                <p className="flex items-center justify-center -ml-1.5 border-1 border-foreground 
                rounded-full tracking-tight font-medium w-32 text-base mb-5">Senior Creative</p>
                Based in New York City
                <span className="text-neutral-300 align-top text-xs ml-1">{timeNyc}</span>
                <br />
                <i className="-ml-0.5">From Singapore</i>
                <span className="text-neutral-300 align-top text-xs ml-1">{timeSg}</span>
                </motion.div>

                <motion.h1 
                className="mb-10 -mt-8 md:mt-0 text-[52px] px-2 font-script tracking-tight leading-13 mix-blend-difference text-white"
                animate={{rotate:-4}}
                variants={animateInChild}>
                    And here are <span className="ml-12 whitespace-nowrap">some answers:</span>
                </motion.h1>

                {/* <motion.button className="px-5 text-lg font-medium tracking-tight w-full text-left mb-2 -ml-0.5" variants={animateInChild}>Simply put:</motion.button> */}

                
                <motion.div 
                className="mb-10 px-5 md:px-0"
                variants={animateInChild}>
                    <p className="font-mono text-sm">I don't anything seriously.</p>
                    Lorem ipsum blah blah bla bla bla blah blah.
                </motion.div>

                <motion.button className={`px-5 text-lg font-medium tracking-tighter w-full text-left mb-2 -ml-0.5`} onClick={toggleLong} variants={animateInChild}>Give me the entire backstory.</motion.button>

                {showLong && (
                    <motion.div 
                    key="dropdown-long"
                    initial="hidden"
                    animate="show"
                    layout="position"
                    variants={dropdown}>
                        <motion.div 
                        key="dropdown-who"
                        className="mb-10 px-5 md:px-0"
                        variants={dropdownChild}
                        layout="position">
                            <p className="mb-3 font-mono text-sm">Who?</p>
                            Born and raised in sunny <i className="mr-0.5 font-light ">(to put it mildly)</i> Singapore, I was once a young kid obsessed with the romanticized image of beret-wearing, palette-wielding artists. Now, I find myself living the surreal reality of professionally conceptualizing, creating, and directing what is essentially art for the world. 
                            With a fervor for craft and a meticulous eye for finesse, I do take a possibly unhealthy pride in creating visually compelling work across various mediums.
                        </motion.div>

                        <motion.div 
                        key="dropdown-what"
                        className="mb-10 px-5 md:px-0"
                        variants={dropdownChild}
                        layout="position">
                            <p className="mb-3 font-mono text-sm">What?</p>
                            As a multidisciplinary creative and formerly the Creative Lead at ArtScience Museum in Singapore; eight years of experience in the Advertising and Design industry is what I find myself with–having notably worked on multiple brand campaigns for Singapore Airlines as an Art Director and global brands the likes of Nike, Samsung, IKEA, Studio Ghibli, Uniqlo and MINI. 
                        </motion.div>

                        <motion.div 
                        key="dropdown-and"
                        className="mb-8 px-5 md:px-0"
                        variants={dropdownChild}
                        layout="position">
                            <p className="mb-3 font-mono text-sm">And?</p>
                            In his spare time after work <i>(which, realistically, isn&apos;t much)</i>, he does even more work, but for himself—creating content through photography, videography, editing and motion design. When he is finally not working, you will find him thrifting for furniture or, for a more colloquial term, stooping on the streets of New York City. He loves building his living space up, though he wouldn&apos;t go so far as to call it interior design.
                        </motion.div>
                    </motion.div>
                )}
            
            </div>


            <motion.div 
                className="mb-8 px-5 md:px-0"
                layout="position"
                variants={dropdownChild}
                key="Contact">
                    <p className="mb-0 font-script w-12 whitespace-nowrap -ml-1.5 -rotate-6  text-sm italic tracking-wider">Contact<span className="font-mono font-semibold">.</span></p>
                    <p className=""><span className="font-semibold">Email</span> – ithinkitschristopher@gmail.com</p>
                    <p className=""><span className="font-semibold">LinkedIn</span> – <a href="https://www.linkedin.com/in/chris-leow-93372b184/" className="underline transition-colors hover:text-midground">Chris Leow</a></p>
                    <p className=""><span className="font-semibold">Instagram</span> – <a href="https://www.instagram.com/khristurtle/" className="underline transition-colors hover:text-midground">@khristurtle</a></p>
            </motion.div>

            {/* Currently: */}
            <motion.div 
                className="col-span-full pl-5 md:pl-0 md:col-span-2 relative"
                variants={animateInChild}
                key="Currently"
                layout="position">

                <h1 className="text-4xl md:text-3xl mb-11 -ml-1 mt-10 tracking-normal font-script">
                    Currently:
                </h1>
                
                <div className="-mt-2">
                    <button 
                    className="flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 
                    rounded-full tracking-tighter font-medium text-sm w-[153px] pl-1 mb-2 font-mono whitespace-nowrap"
                    onClick={toggleCurriculum}>
                        Master's Student 
                    {showCurriculum ? (
                        <ChevronUpIcon className="ml-0.5 h-3 w-3" />
                    ) : (
                        <ChevronDownIcon className="ml-0.5 h-3 w-3" />
                    )}
                    </button>

                    <p>
                        MFA Interaction Design
                        <br/>
                        School of Visual Arts
                        <br/>
                        <i className="-ml-0.5">September 2024 – May 2026</i>
                    </p>

                </div>

                {showCurriculum && (
                    <motion.div
                    key="dropdown-curriculum"
                    initial="hidden"
                    animate="show"
                    layout="position"
                    variants={dropdown}>
                        <h1 className="mt-8 text-lg">Curriculum undertaken</h1>
                        <div className="ml-4">
                            <p className="mt-4">Research Methodologies</p>
                            <p>Service Design</p>
                            <p>UX Content Writing</p>
                            <p>Programming <i>(C, Python, JavaScript)</i></p>
                            <p>Human Interaction & Ergonomics</p>
                            <p>Physical Computing</p>
                        </div>

                        <div className="text-midground">
                            <h1 className="mt-8 text-lg">Curriculum to be undertaken</h1>
                        </div>

                        <div className="ml-4 text-midground">
                            <p className="mt-4">Inclusive Design</p>
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
            <motion.div className="col-span-full pl-5 md:pl-0 md:col-span-2 sm:pr-4 mt-11"
            variants={animateInChild}
            key="ASM"
            layout="position">
                
                <div className="">
                    <h1 className="text-4xl md:text-3xl mb-10 -ml-2 mt-10 tracking-normal -rotate-3 w-24 font-script">Previously:</h1>

                    <div className="-mt-2">
                    <button className="flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 
                        rounded-full tracking-tighter font-medium text-sm w-30 mb-2 font-mono whitespace-nowrap"
                        onClick={toggleAsm}>Creative Lead</button>
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
                        <h1 className="mt-8 2xl:mt-14 text-lg font-medium">
                        ArtScience Museum</h1>

                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-6 mb-4 opacity-90">
                                The World of Studio Ghibli
                            </h1>

                            <p className="ml-6 opacity-50">
                            Creative direction for the integrated marketing campaign for The World of Studio Ghibli, the first ever Studio Ghibli exhibition in Singapore held at ArtScience Museum. Designed the Key Visual for the exhibition and provided creative direction over marketing partners as well as merchandise for the exhibition. 
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                            <h1 className="mt-4 mb-4 opacity-90">
                                Goddess: Brave. Bold. Beautiful.</h1>
                            <p className="ml-6 opacity-50">
                            Creative direction and strategic positioning for the marketing campaign of Goddess, an exhibition at the ArtScience Museum that celebrates screen icons across 120 years of moving image history. 
                            </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4 opacity-90">
                            Frida Kahlo: The Life of an Icon</h1>
                        <p className="ml-6 opacity-50">
                        Creative direction and strategic positioning for the marketing campaign of Frida Kahlo: Life of an Icon, an exhibition at the ArtScience Museum on Mexican artist Frida Kahlo, alongside the companion exhibition Laid Bare: Frida’s Inner World. Managed and produced visuals and assets across the campaign titled Frida Forever for the lineup of activities held at the museum.
                        </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4 opacity-90">
                            ArtScience After Hours</h1>
                        <p className="ml-6 opacity-50">
                        Creative direction and visual identity oversight on ArtScience After Hours, an all-encompassing night time experience for the ArtScience Museum, with late-night offerings and experiences beyond daylight.
                        </p>
                        </motion.div>
                        <motion.div variants={dropdownChild}>
                        <h1 className="mt-4 mb-4 opacity-90">
                            ArtScience Cinema</h1>
                        <p className="ml-6 opacity-50">
                        Creative direction for all marketing deliverables for ArtScience Cinema, ArtScience Museumss purpose-built cinema that screens a curated programme of film all year round by the museums film curatorial team.
                        </p>
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>

        

            </AnimatePresence>    
        </motion.div>
    </>
    );
}