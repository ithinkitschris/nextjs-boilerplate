'use client';
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import DarkModeToggle from "./components/dark-mode-toggle";
import localFont from "next/font/local";
import "./globals.css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const animateIn = {
  hidden: { opacity: 0, y: 70, scale:0.99 },
  show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 700, damping:25},
      
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

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [changelog, setChangelog] = useState(false);
  const changelogRef = useRef(null);

  const toggleChangelog = () => {
    setChangelog((prevState) => !prevState);
};

useEffect(() => {
  function handleClickOutside(event) {
    if (changelogRef.current && !changelogRef.current.contains(event.target)) {
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
        <div className={`${changelog ? 'backdrop-blur-md md:backdrop-blur-md dark:bg-black/30' :'backdrop-blur-none pointer-events-none'} fixed top-0 left-0 w-full h-full z-50 transition-all duration-200`} />

        {/* <Dark Mode Button/> */}
        <div className="fixed left-4 md:left-auto md:right-6 top-3 md:top-2 z-50">
          <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
        </div>   

        {/* Main */}
        <main className="">{children}</main>

        {/* About Site Footer */}
        <div 
          className="fixed bottom-6 left-0 inset-x-0 mx-auto z-50 md:w-200 flex justify-center"
        >
          {/* Desktop */}
          <div
              className={`hidden md:block transition-all text-center backdrop-blur-sm rounded-full border-1 border-transparent dark:hover:border-white whitespace-nowrap tracking-tight text-[8.5pt]
                bg-background dark:bg-transparent shadow w-52 cursor-pointer hover:bg-foreground dark:hover:bg-transparent hover:text-white dark:text-white/80`}
              onClick={toggleChangelog}>
              <div className="inline-flex ml-1">How I designed and coded this site
                {changelog ? (
                    <ChevronDownIcon className="h-3 w-3 ml-1 mt-[3px]" />
                ) : (
                    <ChevronUpIcon className="h-3 w-3 ml-1 mt-[3px]" />
                )}
              </div>
          </div>

          {/* Mobile */}
          <div
              className={`md:hidden transition-all text-center backdrop-blur-xl rounded-full border-1 border-transparent dark:hover:border-white whitespace-nowrap tracking-tight text-[8.5pt]
                bg-background dark:bg-transparent shadow w-52 cursor-pointer hover:bg-foreground dark:hover:bg-transparent hover:text-white dark:text-white/90`}
              onClick={toggleChangelog}>
              <div className="inline-flex ml-1">How I designed and coded this site
                {changelog ? (
                    <ChevronDownIcon className="h-3 w-3 ml-1 mt-[3px]" />
                ) : (
                    <ChevronUpIcon className="h-3 w-3 ml-1 mt-[3px]" />
                )}
              </div>
          </div>
        </div>

        {/* About Site Window */}
        {changelog && (
          <motion.div 
            ref={changelogRef}
            className="grid grid-cols-1 md:grid-cols-4 fixed bottom-18 left-0 inset-x-0 mx-auto z-50 p-4 pt-6 backdrop-blur-2xl rounded-xl 
            h-[70%] md:h-[35%] w-[80%] md:w-screen/1.5 tracking-tight bg-background dark:bg-black/20 shadow-md border-b-1 border-white/20
            text-[9pt] text-black/50 md:text-black/40 dark:text-white/50 overflow-y-auto"
            initial="hidden"
            animate="show"
            variants={animateIn}
            layout>

              {/* Bottom Blur */}
              {/* <div className="absolute bg-gradient-to-t from-background dark:from-transparent to-transparent z-50 top-80 bottom-0 left-0 right-0 rounded-b-xl"/> */}

              <div className="fixed top-6 right-5 cursor-pointer hover:opacity-20 transition-opacity" onClick={toggleChangelog}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-black dark:text-white"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.225 5.225a.75.75 0 0 1 1.06 0L12 9.94l4.715-4.715a.75.75 0 1 1 1.06 1.06L13.06 11l4.715 4.715a.75.75 0 1 1-1.06 1.06L12 12.06l-4.715 4.715a.75.75 0 1 1-1.06-1.06L10.94 11 6.225 6.285a.75.75 0 0 1 0-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* About */}
              <div className="px-4">

                <h1 className="font-medium text-base text-foreground">You built this site yourself?!</h1>
                <p className="mt-2 leading-[130%]">Well, having being once told that my previous site on Squarespace was &apos;boy scout&apos; for someone who takes pride in his craft, this site was thus masochistically designed and coded from ground up with React and Next.js by yours truly.</p>
                <p className="mt-4 leading-[130%]">As I have had little to no experience with web dev prior to this, it was a conscious decision to document every step of the process from the start.</p>
                <p className='mt-4 -ml-1.5 leading-[130%]'>
                <a className="relative inline-flex border-1 pl-2 px-1 py-0.5 rounded-full text-black dark:text-white border-black/25 dark:border-white/65 hover:bg-foreground hover:text-background transition-all" 
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
                  
                </a></p>

              </div>

              {/* Line */}
              <div className="mx-auto h-[1px] w-[92%] bg-black/15 dark:bg-white/20 mt-8 mb-4 md:hidden"/>

              {/* To Do */}
              <div className="px-4 md:overflow-y-auto max-h-[100%]">

                <h1 className="font-medium text-base text-foreground">To do:</h1>
                <p className='mt-2 text-foreground font-medium text-xxs'>01</p>
                <p className="leading-[130%]">#ShotOniPhone photography album.</p>
                <p className='mt-3.5 text-foreground font-medium text-xxs'>02</p>
                <p className="leading-[130%]">&apos;What I&apos;m currently up to&apos; section under the profile page.</p>
                <p className='mt-2 text-foreground font-medium text-xxs'>03</p>
                <p className="leading-[130%]">Prototype placing works under the mobile profile /intro page.</p>
                <p className='mt-2 text-foreground font-medium text-xxs'>04</p>
                <p className="leading-[130%] line-through">Adapt this About-Site window to mobile–currently does not work on mobile.</p>
                <p className='mt-2 text-foreground font-medium text-xxs'>05</p>
                <p className="leading-[130%]">Rebuild &apos;Portfolio Website&apos; project page–port website documentation from Notion onto this site.</p>
                <p className='mt-2 text-foreground font-medium text-xxs'>06</p>
                <p className="leading-[130%]">Think of p5.js integration down the road.</p>
                {/* <p className='mt-2 text-foreground font-medium text-xxs'>Completed</p>
                <p className="leading-[130%] line-through">Changelog feature tracking iterations on the site.</p> */}

              </div>

              {/* Line */}
              <div className="mx-auto h-[1px] w-[92%] bg-black/15 dark:bg-white/20 mt-8 mb-4 md:hidden"/>
              
              {/* Changelog Column 1 */}
              <div className="px-4 md:overflow-y-auto max-h-[100%] hover:scroll-y">

                <h1 className="font-medium text-base text-foreground">Changelog <span className="text-xxs font-normal italic opacity-50">(version number based off git commits)</span></h1>

                <p className='mt-4 text-foreground font-medium'>v221</p>
                <p className="leading-[130%]">Adapted and optimized this About-Site window for mobile–now works on mobile.</p>

                <p className='mt-4 text-foreground font-medium'>v220</p>
                <p className="leading-[130%]">Moved changelog window to the center of the screen–now opens upon clicking the middle footer, background blurs as well.</p>
                <p className="leading-[130%]">Combined link to documentation with changelog window–new four columned layout.</p>
                <p className="leading-[130%]">Will be referring to this window as the About-Site window from here on as it no longer houses just the changelog.</p>

              </div>

              {/* Changelog Column 2 */}
              <div className="px-4 md:overflow-y-auto max-h-[100%]">

                <p className='mt-4 md:mt-11 text-foreground font-medium'>v219</p>
                <p className="leading-[130%]">This changelog window now scrolls!</p>
                <p className="leading-[130%]">Refined the opening animation for this changelog window–now has a rebound effect.</p>
                <p className="leading-[130%]">This changelog window now closes upon clicking outside of it.</p>
              
                <p className='mt-4 text-foreground font-medium'>v218</p>
                <p className="leading-[130%]">Added new photos to digital and film photography albums.</p>

                <p className='mt-4 text-foreground font-medium'>v217</p>
                <p className="leading-[130%]">Implemented this exact changelog feature; all updates will now be reflected here as I continue to iterate upon this site.</p>
                <p className="leading-[130%]">Changed BG of light mode footer notes from frosted glass to opaque white with drop shadow.</p>
                <p className="leading-[130%]">Changed the cover photo of the film photography album.</p>

              </div>
          </motion.div>
        )}

        {/* Last Updated Footer */}
        <div 
          className="hidden md:flex fixed bottom-6 right-8 z-30 justify-center text-right backdrop-blur-sm rounded-full whitespace-nowrap tracking-tight select-none
          bg-background dark:bg-transparent shadow text-[8.5pt] text-black/30 md:text-black/40 dark:text-white/80 md:dark:text-white/60 
          w-[270px]"
          >
            Last meddled with on 03.04.25 for the 221st time.
        </div>

      </body>
    </html>
  );
}
