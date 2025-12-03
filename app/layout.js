'use client';
import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import DarkModeToggle from "./components/ui/dark-mode-toggle";
import localFont from "next/font/local";
import "./globals.css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { VideoProvider } from './context/VideoContext';
import { BrowserProvider, useBrowser } from './context/BrowserContext';
import { HideNavProvider, useHideNav } from './context/HideNavContext';
import VideoDebugger from './components/ui/VideoDebugger';
import GlobalVideoControl from './components/ui/GlobalVideoControl';

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

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
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


// Footer component that uses browser context and nav context
const Footer = ({ changelog, toggleChangelog, footerRef }) => {
  const { browserType } = useBrowser();
  const { hideFooter, isWhiteBG } = useHideNav();
  
  return (
    <motion.div 
      className="fixed bottom-4 md:bottom-6 left-0 inset-x-0 mx-auto md:w-200 z-50 flex justify-center "
      animate={{ 
        y: hideFooter ? 60 : 0
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 24
      }}
    >
      <div
        ref={footerRef}
        className={`
          transition-all 
          text-center 
          rounded-full 
          whitespace-nowrap 
          tracking-tight 
          text-[10.5pt]
          font-medium
          cursor-pointer
          px-2
          pr-2 
          py-1
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
          ${browserType === 'chrome' 
            ? '' 
            : browserType === 'safari' 
              ? 'backdrop-blur-3xl' 
              : browserType === 'firefox' 
                ? 'backdrop-blur-3xl' 
                : 'backdrop-blur-3xl'
          }
          ${changelog 
            ? 'bg-foreground text-white dark:border-white/75 border-1' 
            : ' md:dark:border-white/25'
          }
        `}
        style={browserType === 'chrome' ? {
             backdropFilter: 'blur(1.25px) url(#backdrop-distortion)',
        } : {}}

        onClick={toggleChangelog}>

        <div className={`inline-flex ml-1.5 ${isWhiteBG ? 'text-black !text-black dark:!text-black font-semibold' : ''}`}>
          Built with React and Next.js
          {changelog ? (
              <ChevronDownIcon className={`h-3.5 w-auto ml-1.5 mt-[3px] ${isWhiteBG ? 'text-black !text-black dark:!text-black' : ''}`} />
          ) : (
              <ChevronUpIcon className={`h-3.5 w-auto ml-1.5 mt-[3px] ${isWhiteBG ? 'text-black !text-black dark:!text-black' : ''}`} />
          )}
        </div>
      </div>
    </motion.div>
  );
};
  
  return (
    <html lang="en">
      <body>
        <BrowserProvider>
          <HideNavProvider>
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

                {/* Video Performance Monitor - Only in development */}
                <VideoDebugger enabled={process.env.NODE_ENV === 'development'} />

                {/* Global Video Play/Pause Control */}
                <GlobalVideoControl />

                {/* Backdrop Blur */}
                <div className={`${changelog ? 'bg-black/60 backdrop-blur-sm' :'backdrop-blur-none pointer-events-none'}
                fixed top-0 left-0 w-full h-full z-[50] transition-all duration-500 md:duration-300`} />

                {/* Dark Mode Button */}
                {/* <DarkModeToggleWrapper toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} /> */}
                
                {/* Main */}
                <main>{children}</main>

              {/* About Site Footer */}
              <Footer changelog={changelog} toggleChangelog={toggleChangelog} footerRef={footerRef} />

              {/* About Site Window */}
              {changelog && (
                <motion.div 
                  ref={changelogRef}
                  className="grid grid-cols-1 md:grid-cols-4 fixed bottom-16 left-0 inset-x-0 mx-auto z-50 rounded-3xl overflow-y-auto md:overflow-hidden md:p-2 md:pt-4 no-scrollbar overflow-x-hidden
                  h-[80%] md:h-[450px] w-[78%] md:w-[90%] tracking-tight text-[9pt] text-black/50 dark:text-white/75">

                    {/* About */}
                    <motion.div className="glass-sm p-8 mt-4 md:mt-0 md:mr-2 h-[430px] md:h-[430px] overflow-y-auto no-scrollbar leading-[145%] bg-background dark:bg-black/10
                    backdrop-blur-3xl rounded-3xl drop-shadow-md relative" 
                    initial="hidden"
                    animate="show"
                    variants={animateIn}>

                      {/* Dark Mode Toggle - Top Right Corner */}
                      <div className="absolute top-2 right-3 z-10">
                        <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                      </div>

                      <h1 className="font-medium text-lg mb-4 md:-mt-1 tracking-tight text-foreground font-">About this site</h1>
                      <p className="mt-2 font-medium">Having being once told that my previous site on Squarespace was &apos;boy scout&apos; for someone who takes pride in his craft, this site was thus masochistically designed and hard-coded from ground up with Javascript, React and Next.js by yours truly.</p>
                      <p className="mt-4 font-medium">As I have had little to no experience with web development prior to this project, I also made a conscious decision to document every step of the process from the start to the first MVP iteration of this site–check it out if you happen to be curious on the process of creating a site from scratch with no prior knowledge.</p>
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
                      <p className="mt-6 text-xxs opacity-75 leading-tight">Website last meddled with on 10.05.25 for the 268th time.</p>

                    </motion.div>

                    {/* To Do */}
                    <motion.div className="glass-sm p-8 mt-4 md:mt-0 md:ml-2 h-[450px] md:h-[430px] overflow-y-auto no-scrollbar leading-[145%] bg-background dark:bg-black/10 flex flex-col gap-2 backdrop-blur-3xl rounded-3xl drop-shadow-md pr-14" 
                    initial="hidden"
                    animate="show"
                    variants={animateInToDo}>

                      <h1 className="font-medium text-lg text-foreground tracking-tight">To do:</h1>

                      <div>
                        <p className='mt-2 text-foreground font-medium text-xxs'>01</p>
                        <p className="">Adapt NYC Subway project page for mobile.</p>
                      </div>

                      <div>
                        <p className='mt-2 text-foreground font-medium text-xxs'>02</p>
                        <p className="">Explore Notion API integration.</p>
                        
                      </div>

                      <div>
                        <p className='mt-2 text-foreground font-medium text-xxs'>03</p>
                        <p className="">Build out Bloom, ISV, Expense Tracker, and Website project pages.</p>
                      </div>

                      <div>
                        <p className='mt-2 text-foreground font-medium text-xxs'>04</p>
                        <p className="line-through">#ShotOniPhone photography album.</p>
                      </div>

                      <div>
                        <p className='mt-2 text-foreground font-medium text-xxs'>05</p>
                        <p className="line-through">Develop page design for Product Design case studies. (GSAP Integration)</p>
                      </div>


                    

                    </motion.div>
                    
                    {/* Changelog Window */}
                    <motion.div className="glass-sm md:col-span-2 p-8 pr-10 mt-4 md:mt-0 md:ml-4 h-[100%] md:h-[430px] no-scrollbar bg-background relative flex flex-col
                    dark:bg-black/10 backdrop-blur-3xl rounded-3xl drop-shadow-md"
                    initial="hidden"
                    animate="show"
                    variants={animateInChangelog}>

                      {/* Title */}
                      <h1 className="font-medium text-lg tracking-tight text-foreground pt-1 mb-4 relative col-span-full flex-shrink-0">
                        Changelog
                      </h1>

                      {/* Container */}
                      <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">

                        {/* Left Column */}
                        <div className="no-scrollbar col-span-full md:col-span-1 flex flex-col gap-4 overflow-y-auto pr-4">

                          <div className="flex flex-col"> 
                            <p className='text-foreground font-medium'>Latest Iterations</p>
                          </div> 


                          <div className="flex flex-col gap-3 leading-4 mb-4"> 
                            <p className='text-foreground font-medium'>v2.12</p>
                            
                            <p>Refined the scroll duration of certain sections of NYC Subway page after two rounds of user testing – Extended duration on intro pages and Problem Statement page.</p>

                            <p>Added pause breaks to the scroll and implemented visual feedback as the user scrolls through a pause.</p>
                            
                          </div> 

                          <div className="flex flex-col gap-3 leading-4 mb-4"> 
                            <p className='text-foreground font-medium'>v2.11</p>
                            
                            <p>Completed NYC Subway page – Full GSAP implementation optimized for desktop experience. This was a multi-day endeavor and I am pleasantly surprised with how it turned out. Mobile adaptation will be required and user testing of the scroll behavior will have to be conducted.</p>
                            
                          </div> 
                        </div>
                        
                        {/* Right Column */}
                        <div className="no-scrollbar col-span-full md:col-span-1 overflow-y-auto">

                        <div className="flex flex-col"> 
                            <p className='text-foreground font-medium mb-4'>Archive</p>
                          </div>

                          <div className="flex flex-col gap-3 leading-4 mb-4"> 
                            <p className='text-foreground font-medium'>v2.1</p>
                            
                            <p>Redesigned the desktop top navbar: Upon clicking on work button, the home button changes to a chevron back button, a grid of all works on the site is displayed, the navbar expands to show categories that can be selected to filter the works displayed by skillsets. This redesigned navbar replaces the original sidebar of the website; consolidating navigation to one location.</p>

                            <p>Sidebar deprecated–removed sidebar hamburger menu.</p>
                            <p>RIP sidebar, 2024–2025.</p>

                         
                            
                          </div> 

                          <div className="flex flex-col gap-3 leading-4 mb-4"> 
                            <p className='text-foreground font-medium'>v2.03</p>
                            
                            <p>Added #shotoniPhone photography album.</p>
                            <p>Updated digital photography album with new photos.</p>
                            <p>Tweaked the margins to be narrower for the top navbar</p>
                            <p>Fixed overflow-x-hidden bug for the main page.</p>
                          </div> 

                          <div className="flex flex-col gap-3 leading-4 mb-4"> 
                            <p className='text-foreground font-medium'>v2.02</p>
                            
                            <p>Added Expense Tracker project to &apos;Everything I&apos;ve been up to&apos; section.</p>
                            <p>Improved backend performance optimizations for all videos across the site–now mounts only when visible in the viewport, and unmounts when not.</p>
                            <p>Refined formatting for some project pages.</p>
                          </div>                                


                          <div className="flex flex-col gap-3 leading-4 mb-4"> 
                            <p className='text-foreground font-medium'>v2.01</p>
                            
                            <p>Updated this changelog window from v1.0–All changes now start from v2.0 and will be progressively updated here.</p>
                            <p>Updated poster images.</p>
                            <p>Updated To Do list.</p>
                            <p>Added fallback backdrop-blur for all &apos;Liquid Glass&apos; implementations (Top Navbar, Footer) on non-Chromium browsers.</p>
                          </div>  

                          <div className="flex flex-col gap-3 leading-4 mb-4"> 
                            <p className='mt-0 text-foreground font-medium'>v2.0</p>
                            <p>Portfolio Website v2! Changelog to come. It&apos;s too much to write about right now.</p>
                          </div>

                        </div>
                        
                      </div>                

                    </motion.div>
                </motion.div>
              )}

            </body>
          </html>
            </VideoProvider>
          </HideNavProvider>
        </BrowserProvider>
      </body>
    </html>
  );
}