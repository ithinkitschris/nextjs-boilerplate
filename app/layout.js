'use client';
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import DarkModeToggle from "./components/dark-mode-toggle";
import localFont from "next/font/local";
import "./globals.css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const animateIn = {
  hidden: { opacity: 0, y: 90, scale:0.99 },
  show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { staggerChildren: 0.15, type: "spring", stiffness: 400, damping: 20, },
      
  },
};

const animateInToDo = {
  hidden: { opacity: 0, y: 90, scale:0.99 },
  show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay:0.08, staggerChildren: 0.15, type: "spring", stiffness: 400, damping: 20, },
      
  },
};

const animateInChangelog = {
  hidden: { opacity: 0, y: 90, scale:0.99 },
  show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay:0.16, staggerChildren: 0.15, type: "spring", stiffness: 400, damping: 20, },
      
  },
};



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
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

  const [isDarkMode, setIsDarkMode] = useState(false);
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
    <html className={isDarkMode ? "dark" : ""}>
      <body className={`
      ${geistSans.variable} 
      ${geistMono.variable} 
      ${modernLine.variable} 
      ${breathing.variable}
      antialiased flex flex-col min-h-screen font-mono
      bg-background transition-all duration-300`}>

        {/* Backdrop Blur */}
        <div className={`${changelog ? 'backdrop-blur-md md:backdrop-blur-md' :'backdrop-blur-none pointer-events-none'} fixed top-0 left-0 w-full h-full z-50 transition-all duration-500 md:duration-300`} />

        {/* <Dark Mode Button/> */}
        <div className="fixed left-4 md:left-auto md:right-6 top-3 md:top-2 z-50">
          <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
        </div>   

        {/* Main */}
        <main className="">{children}</main>

        {/* About Site Footer */}
        <div className="fixed bottom-6 left-0 inset-x-0 mx-auto z-50 md:w-200 flex justify-center">
          <div
            ref={footerRef}
            className={`transition-all text-center backdrop-blur-lg rounded-full dark:border-b-1 border-transparent md:dark:hover:border-white md:dark:hover:border-1 whitespace-nowrap tracking-tight text-[8.5pt]
              bg-background dark:bg-transparent shadow w-52 cursor-pointer md:hover:bg-foreground md:dark:hover:bg-transparent md:hover:text-white dark:text-white/90 py-0.5 md:hover:scale-95
              ${changelog ?'bg-foreground text-white dark:border-white/75 border-1' :'dark:border-white/15 md:dark:border-white/15'}`}
            onClick={toggleChangelog}>
            <div className="inline-flex ml-1">Website built with React and Next.js
              {changelog ? (
                  <ChevronDownIcon className="h-3 w-3 ml-1 mt-[3px]" />
              ) : (
                  <ChevronUpIcon className="h-3 w-3 ml-1 mt-[3px]"  />
              )}
            </div>
          </div>
        </div>

        {/* About Site Window */}
        {changelog && (
          <motion.div 
            ref={changelogRef}
            className="grid grid-cols-1 md:grid-cols-4 fixed bottom-16 left-0 inset-x-0 mx-auto z-50 rounded-2xl overflow-y-auto md:p-2 md:pt-4 no-scrollbar
            h-[82.5%] md:h-[40%] w-[78%] md:w-[90%] tracking-tight text-[9pt] text-black/50 dark:text-white/75">

              {/* About */}
              <motion.div className="p-6 mt-4 md:mt-0 md:mr-2 max-h-[100%] md:overflow-y-hidden leading-[145%] bg-background dark:bg-black/10 border-b-1 border-r-1 border-transparent 
              dark:border-white/15 md:dark:border-white/10 backdrop-blur-2xl rounded-2xl drop-shadow-md" 
              initial="hidden"
              animate="show"
              variants={animateIn}>

                <h1 className="font-medium text-lg mb-4 -mt-1 tracking-tight text-foreground font-">About this site</h1>
                <p className="mt-2">Having being once told that my previous site on Squarespace was &apos;boy scout&apos; for someone who takes pride in his craft, this site was thus masochistically designed and coded from ground up with React and Next.js by yours truly.</p>
                <p className="mt-4">As I have had little to no experience with web dev prior to this project, I also made a conscious decision to document every step of the process from the start to the first MVP iteration of this site–check it out if you happen to be curious on the process of creating a site from scratch with no prior knowledge.</p>
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
                <p className="mt-6 italic text-xxs opacity-75">Website last meddled with on 03.05.25 for the 223rd time.</p>

              </motion.div>

              {/* To Do */}
              <motion.div className="p-6 mt-4 md:mt-0 md:ml-2 max-h-[100%] md:overflow-y-auto leading-[145%] bg-background dark:bg-black/10 border-b-1 border-r-1 border-transparent 
              dark:border-white/15 md:dark:border-white/10 backdrop-blur-2xl rounded-2xl drop-shadow-md" 
              initial="hidden"
              animate="show"
              variants={animateInToDo}>

                <h1 className="font-medium text-lg text-foreground font- tracking-tight">To do:</h1>
                <p className='mt-2 text-foreground font-medium text-xxs'>01</p>
                <p className="">#ShotOniPhone photography album.</p>
                <p className='mt-3.5 text-foreground font-medium text-xxs'>02</p>
                <p className="">&apos;What I&apos;m currently up to&apos; section under the profile page.</p>
                <p className='mt-2 text-foreground font-medium text-xxs'>03</p>
                <p className="">Prototype placing works under the mobile profile /intro page.</p>
                <p className='mt-2 text-foreground font-medium text-xxs'>04</p>
                <p className="leading-[135%] line-through">Adapt this About-Site window to mobile–currently does not work on mobile.</p>
                <p className='mt-2 text-foreground font-medium text-xxs'>05</p>
                <p className="">Rebuild &apos;Portfolio Website&apos; project page–port website documentation from Notion onto this site.</p>
                <p className='mt-2 text-foreground font-medium text-xxs'>06</p>
                <p className="">Explore p5.js integration.</p>
                <p className='mt-3 text-foreground font-medium text-xxs'>07</p>
                <p className="">Explore GSAP integration.</p>
              

              </motion.div>
              
              {/* Changelog */}
              <motion.div className="grid md:grid-cols-2 md:gap-10 md:col-span-2 p-6 mt-4 md:mt-0 md:ml-4 max-h-[100%] md:overflow-y-hidden leading-[145%] bg-background 
              dark:border-white/20 dark:bg-black/10 border-b-1 border-r-1 border-transparent md:dark:border-white/10 backdrop-blur-2xl rounded-2xl drop-shadow-md"
              initial="hidden"
              animate="show"
              variants={animateInChangelog}>

              <h1 className="font-medium text-lg tracking-tight text-foreground font- pt-1 col-span-2 mb-4 md:-mb-6">
                Changelog <span className="text-xxs font-normal italic opacity-50 font-sans"> (version number based off git commits)</span>
              </h1>

                <div className="md:overflow-y-auto col-span-full md:col-span-1">

                  <p className='mt-0 text-foreground font-medium'>v223</p>
                  <p>Broke this About-Site window up into separate bubbles per section–optimized for light/dark mode and mobile/web experience.</p>
                  <p>Optimized some hover states for this window on desktop–buttons now scale down to 95% upon hover.</p>
                  <p>Fine-tuned the opening animation for this window–reworked stagger and rebound values.</p>

                  <p className='mt-4 text-foreground font-medium'>v222</p>
                  <p>This window now also closes upon clicking on the footer button–previously only closed upon clicking outside of the window.</p>
                  <p>Tweaked copy on the footer button and this window.</p>
                  <p>Fixed minor bugs on the hover states in this window.</p>

                  <p className='mt-4 text-foreground font-medium'>v221</p>
                  <p>Adapted and optimized this window for mobile.</p>
                </div>
                
                <div className="md:overflow-y-auto col-span-full md:col-span-1">

                  <p className='mt-4 md:mt-0 text-foreground font-medium'>v220</p>
                  <p>Moved this window to the center of the screen–now opens upon clicking the middle footer, background blurs as well.</p>
                  <p>Combined link to documentation with changelog window–new four columned layout.</p>
                  <p>Will be referring to this window as the About-Site window from here on as it no longer houses just the changelog.</p>

                  <p className='mt-4 text-foreground font-medium'>v219</p>
                  <p>This changelog window now scrolls!</p>
                  <p>Refined the opening animation for this changelog window–now has a rebound effect.</p>
                  <p>This changelog window now closes upon clicking outside of it.</p>
                
                  <p className='mt-4 text-foreground font-medium'>v218</p>
                  <p>Added new photos to digital and film photography albums.</p>

                  <p className='mt-4 text-foreground font-medium'>v217</p>
                  <p>Implemented this exact changelog feature; all updates will now be reflected here as I continue to iterate upon this site.</p>
                  <p>Changed BG of light mode footer notes from frosted glass to opaque white with drop shadow.</p>
                  <p>Changed the cover photo of the film photography album.</p> 
                </div>

              </motion.div>
          </motion.div>
        )}

        {/* Last Updated Footer */}
        {/* <div 
          className="hidden md:flex fixed bottom-6 right-8 z-30 justify-center text-right backdrop-blur-sm rounded-full whitespace-nowrap tracking-tight select-none
          bg-background dark:bg-transparent shadow text-[8.5pt] text-black/30 md:text-black/40 dark:text-white/80 md:dark:text-white/60 
          w-[270px]"
          >
            Last meddled with on 03.05.25 for the 222nd time.
        </div> */}

      </body>
    </html>
  );
}
