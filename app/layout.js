'use client';
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import DarkModeToggle from "./components/dark-mode-toggle";
import localFont from "next/font/local";
import "./globals.css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { VideoProvider } from './context/VideoContext';

const animateIn = {
  hidden: { opacity: 0, y: 90, scale:0.99 },
  show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { staggerChildren: 0.15, type: "spring", stiffness: 600, damping: 22, },
      
  },
};

const animateInToDo = {
  hidden: { opacity: 0, y: 90, scale:0.99 },
  show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay:0.07, staggerChildren: 0.15, type: "spring", stiffness: 600, damping: 22, },
      
  },
};

const animateInChangelog = {
  hidden: { opacity: 0, y: 90, scale:0.99 },
  show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay:0.14, staggerChildren: 0.15, type: "spring", stiffness: 600, damping: 22, },
      
  },
};



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const breathing = localFont({
  src: "./fonts/Breathing.ttf",
  variable: "--font-breathing",
  weight: "100",
});

const modernLine = localFont({
  src: "./fonts/AndoraModernScript.otf",
  variable: "--font-modernline",
  weight: "100",
});


export default function RootLayout({ children }) {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [changelog, setChangelog] = useState(false);
  const changelogRef = useRef(null);
  const footerRef = useRef(null);

  const toggleChangelog = () => {
    setChangelog((prevState) => !prevState);
};

useEffect(() => {
  function handleClickOutside(event) {
    if (
      changelogRef.current &&
      !changelogRef.current.contains(event.target) &&
      footerRef.current &&
      !footerRef.current.contains(event.target)
    ) {
      setChangelog(false);
    }
  }

  if (changelog) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [changelog]);

const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
  console.log("Dark mode toggled:", isDarkMode);
};
  
  return (
    <html lang="en">
      <body>
        <VideoProvider>
          <html className={isDarkMode ? "dark" : ""}>
            <body className={`
            ${geistSans.variable} 
            ${geistMono.variable}
            ${modernLine.variable} 
            ${breathing.variable}
            antialiased flex flex-col min-h-screen font-sans
            bg-background transition-all duration-300`}
            suppressHydrationWarning>

              {/* Backdrop Blur */}
              <div className={`${changelog ? 'bg-black/0 backdrop-blur' :'backdrop-blur-none pointer-events-none'}
              fixed top-0 left-0 w-full h-full z-[40] transition-all duration-500 md:duration-300`} />

              {/* Dark Mode Button */}
              <div className="absolute w-full max-w-9xl h-screen px-8">
                <div className="fixed left-[1.7rem] md:left-auto md:right-8 top-[0.55rem] md:top-12 z-[60] scale-[85%] md:scale-100">
                  <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
                </div>   
              </div>
              
              {/* Main */}
              <main>{children}</main>

              {/* About Site Footer */}
              <div className="fixed bottom-4 md:bottom-6 left-0 inset-x-0 mx-auto md:w-200 z-40 flex justify-center scale-90 md:scale-105">
                <div
                  ref={footerRef}
                  className={`
                    transition-all 
                    text-center 
                    rounded-full 
                    whitespace-nowrap 
                    tracking-tight 
                    text-[9.5pt]
                    font-medium
                    cursor-pointer
                    px-2
                    pr-2 
                    py-1
                    backdrop-blur
                    md:backdrop-blur-[2px]
                    md:[backdrop-filter:url(#backdrop-distortion)]
                                 
                    bg-background 
                    dark:bg-transparent 
                    dark:text-white
                    shadow-glass-border-xs md:glass
                  
                    border-transparent 
                    
                    md:dark:hover:border-white 
                    md:dark:hover:border-1
                    md:hover:bg-foreground 
                    md:dark:hover:bg-transparent 
                    md:hover:text-white 
                    md:hover:scale-95
                    
                    ${changelog 
                      ? 'bg-foreground text-white dark:border-white/75 border-1' 
                      : ' md:dark:border-white/25'
                    }
                  `}
                  onClick={toggleChangelog}>
                  <div className="inline-flex ml-1.5">Website built with React and Next.js
                    {changelog ? (
                        <ChevronDownIcon className="h-3.5 w-auto ml-1.5 mt-[3px]" />
                    ) : (
                        <ChevronUpIcon className="h-3.5 w-auto ml-1.5 mt-[3px]"  />
                    )}
                  </div>
                </div>
              </div>

              {/* About Site Window */}
              {changelog && (
                <motion.div 
                  ref={changelogRef}
                  className="grid grid-cols-1 md:grid-cols-4 fixed bottom-16 left-0 inset-x-0 mx-auto z-50 rounded-3xl overflow-y-auto md:p-2 md:pt-4 no-scrollbar
                  h-[82.5%] md:h-[450px] w-[78%] md:w-[90%] tracking-tight text-[9pt] text-black/50 dark:text-white/75">

                    {/* About */}
                    <motion.div className="glass-sm p-6 mt-4 md:mt-0 md:mr-2 max-h-[100%] md:overflow-y-hidden leading-[145%] bg-background dark:bg-black/10
                    backdrop-blur-3xl rounded-3xl drop-shadow-md" 
                    initial="hidden"
                    animate="show"
                    variants={animateIn}>

                      <h1 className="font-medium text-lg mb-4 -mt-1 tracking-tight text-foreground font-">About this site</h1>
                      <p className="mt-2">Having being once told that my previous site on Squarespace was &apos;boy scout&apos; for someone who takes pride in his craft, this site was thus masochistically designed and hard-coded from ground up with Javascript, React and Next.js by yours truly.</p>
                      <p className="mt-4">As I have had little to no experience with web development prior to this project, I also made a conscious decision to document every step of the process from the start to the first MVP iteration of this site–check it out if you happen to be curious on the process of creating a site from scratch with no prior knowledge.</p>
                      <a className="relative inline-flex mt-6 -ml-1.5 border-1 pl-2 px-1 py-0.5 rounded-full text-black dark:text-white border-black/25 dark:border-white/65 
                      hover:bg-foreground hover:text-background dark:hover:text-black transition-all md:hover:scale-95" 
                      href='https://ithinkitschris.notion.site/Portfolio-Website-127a92ab668680ed91ddd0619057466f' target="blank">
                        Read the documentation here
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="2 2 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-2.5 h-2.5 mt-0.5 ml-0.5">
                          <path className='opacity-0' d="M6 17L15 7"/>
                          <path d="M4 7h10v10"/>
                        </svg> 
                      </a>

                      {/* Last Updated */}
                      <p className="mt-6 text-xxs opacity-75">Website last meddled with on 07.02.25 for the 258th time.</p>

                    </motion.div>

                    {/* To Do */}
                    <motion.div className="glass-sm p-6 mt-4 md:mt-0 md:ml-2 max-h-[100%] md:overflow-y-auto no-scrollbar leading-[145%] bg-background dark:bg-black/10
                    backdrop-blur-3xl rounded-3xl drop-shadow-md" 
                    initial="hidden"
                    animate="show"
                    variants={animateInToDo}>

                      <h1 className="font-medium text-lg text-foreground font- tracking-tight">To do:</h1>
                      <p className='mt-2 text-foreground font-medium text-xxs'>01</p>
                      <p className="">#ShotOniPhone photography album.</p>
                      <p className='mt-3.5 text-foreground font-medium text-xxs'>02</p>
                      <p className=""><span className="line-through">&apos;What I&apos;m currently up to&apos; section.</span> Done!</p>
                      <p className='mt-2 text-foreground font-medium text-xxs'>03</p>
                      <p className=""><span className="line-through">Prototype placing works together with profile page.</span> Done! This has basically become v2.0 of the site; what you see now.</p>
                      <p className='mt-2 text-foreground font-medium text-xxs'>04</p>
                      <p className="leading-[135%] line-through">Adapt this About-Site window to mobile–currently does not work on mobile.</p>
                      <p className='mt-2 text-foreground font-medium text-xxs'>05</p>
                      <p className="">Rebuild &apos;Portfolio Website&apos; project page–port website documentation from Notion onto this site.</p>
                      <p className='mt-3 text-foreground font-medium text-xxs'>06</p>
                      <p className="">Explore GSAP integration.</p>
                    

                    </motion.div>
                    
                    {/* Changelog Window */}
                    <motion.div className="glass-sm md:col-span-2 p-6 mt-4 md:mt-0 md:ml-4 max-h-[100%] md:overflow-y-auto no-scrollbar bg-background relative 
                    dark:bg-black/10 backdrop-blur-3xl rounded-3xl drop-shadow-md"
                    initial="hidden"
                    animate="show"
                    variants={animateInChangelog}>

                      {/* Title */}
                      <h1 className="font-medium text-lg tracking-tight text-foreground pt-1 mb-4 relative col-span-full">
                        Changelog
                      </h1>

                      {/* Container */}
                      <div className="grid grid-cols-2 gap-4">

                        {/* Left Column */}
                        <div className="no-scrollbar col-span-full md:col-span-1">

                          <p className='text-foreground font-medium'>v2.01</p>
                          <p>Updated this changelog window from v1.0–All changes now start from v2.0 and will be progressively updated here.</p>
                          {/* <p>Added Expense Tracker project to 'Everything I've been up to' section.</p> */}
                          <p>Updated poster images.</p>
                          

                          <p className='mt-4 text-foreground font-medium'>v2.0</p>
                          <p>Portfolio Website v2 officially live! Changelog to come. It&apos;s too much to write about right now.</p>

                        </div>
                        
                        {/* Right Column */}
                        {/* <div className="no-scrollbar col-span-full md:col-span-1 bg-black">

                          <p className='text-foreground font-medium'>v2.01</p>
                          <p>Updated this changelog window from v1.0</p>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Dolor sit</p>
                          

                          <p className='mt-4 text-foreground font-medium'>v2.0</p>
                          <p>Portfolio Website v2! Changelog to come. It's too much to write about right now.</p>

                        </div> */}
                        
                      </div>                

                    </motion.div>
                </motion.div>
              )}

            </body>
          </html>
        </VideoProvider>
      </body>
    </html>
  );
}
