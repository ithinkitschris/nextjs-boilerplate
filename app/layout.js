'use client';
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import DarkModeToggle from "./components/dark-mode-toggle";
import localFont from "next/font/local";
import "./globals.css";

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
        <div className={`${changelog ? 'backdrop-blur-lg dark:bg-black/30' :'backdrop-blur-none pointer-events-none'} fixed top-0 left-0 w-full h-full z-50 transition-all duration-200`} />

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
          <div
              className={`transition-all text-center backdrop-blur-sm rounded-full border-1 border-transparent dark:hover:border-white whitespace-nowrap tracking-tight text-[8.5pt]
                bg-background dark:bg-transparent shadow w-[370px] cursor-pointer hover:bg-foreground dark:hover:bg-transparent hover:text-white dark:text-white/80`}
              onClick={toggleChangelog}>
              <div className="inline-flex ml-1">Website masochistically designed and coded with React and Next.js.
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
              </div>
          </div>
        </div>

        {/* About Site Window */}
        {changelog && (
          <motion.div 
            ref={changelogRef}
            className="hidden md:grid fixed bottom-14 left-0 inset-x-0 mx-auto z-50 items-start p-4 pt-6 backdrop-blur-xl rounded-xl 
            h-[35%] w-screen/1.5 tracking-tight bg-background dark:bg-black/20 shadow-md border-b-1 border-white/20 grid-cols-4
            text-[9pt] text-black/30 md:text-black/40 dark:text-white/80 md:dark:text-white/60"
            initial="hidden"
            animate="show"
            variants={animateIn}
            layout>

              <div className="absolute bg-gradient-to-t from-background dark:from-transparent to-transparent z-50 top-80 bottom-0 left-0 right-0 rounded-b-xl"/>

              {/* About */}
              <div className="px-4">

                <h1 className="font-medium text-base text-foreground">About this site</h1>
                <p className="mt-2 leading-[130%]">Having being once told that my previous site on Squarespace was &apos;boy scout&apos; for someone who takes pride in his craft, this site was thus designed and coded from ground up with React and Next.js by yours truly.</p>
                <p className="mt-2 leading-[130%]">As I have had little to no experience with web dev prior to this, it was a conscious decision to document every step of the process from the start.</p>
                <p className='mt-4 -ml-1.5 leading-[130%]'>
                  <a className="relative border-1 px-1.5 py-0.5 rounded-full border-black/30 dark:border-white/65 hover:bg-foreground hover:text-background transition-all" 
                  href='https://ithinkitschris.notion.site/Portfolio-Website-127a92ab668680ed91ddd0619057466f' target="blank">Read the documentation here</a></p>

              </div>

              {/* To Do */}
              <div className="px-4 overflow-y-auto max-h-[100%]">

                <h1 className="font-medium text-base text-foreground">To do:</h1>
                <p className='mt-2 text-foreground font-medium text-xxs'>1</p>
                <p className="leading-[130%]">#ShotOniPhone photography album.</p>
                <p className='mt-2 text-foreground font-medium text-xxs'>2</p>
                <p className="leading-[130%]">&apos;What I&apos;m currently up to&apos; section under the profile page.</p>
                <p className='mt-2 text-foreground font-medium text-xxs'>3</p>
                <p className="leading-[130%]">Prototype placing works under the mobile profile /intro page.</p>
                <p className='mt-2 text-foreground font-medium text-xxs'>4</p>
                <p className="leading-[130%]">Adapt this About-Site window to mobile–currently does not work on mobile.</p>
                <p className='mt-2 text-foreground font-medium text-xxs'>5</p>
                <p className="leading-[130%]">Rebuild &apos;Portfolio Website&apos; project page–port website documentation from Notion onto this site.</p>
                {/* <p className='mt-2 text-foreground font-medium text-xxs'>Completed</p>
                <p className="leading-[130%] line-through">Changelog feature tracking iterations on the site.</p> */}

              </div>
              
              {/* Changelog Column 1 */}
              <div className="px-4 overflow-y-auto max-h-[100%] hover:scroll-y">

                <h1 className="font-medium text-base text-foreground">Changelog <span className="text-xxs font-normal italic opacity-50">(version number based off git commits)</span></h1>
                <p className='mt-2 text-foreground font-medium'>v220</p>
                <p className="leading-[130%]">Moved changelog window to the center of the screen–now opens upon clicking the middle footer, background blurs as well.</p>
                <p className="leading-[130%]">Combined link to documentation with changelog window–new four columned layout.</p>
                <p className="leading-[130%]">Will be referring to this window as the About-Site window from here on as it no longer houses just the changelog.</p>

                <p className='mt-4 text-foreground font-medium'>v219</p>
                <p className="leading-[130%]">This changelog window now scrolls!</p>
                <p className="leading-[130%]">Refined the opening animation for this changelog window–now has a rebound effect.</p>
                <p className="leading-[130%]">This changelog window now closes upon clicking outside of it.</p>

              </div>

              {/* Changelog Column 2 */}
              <div className="px-4 overflow-y-auto max-h-[100%]">
              
                <p className='mt-8 text-foreground font-medium'>v218</p>
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
            Last meddled with on 03.04.25 for the 220th time.
        </div>

      </body>
    </html>
  );
}
