'use client';
import { motion } from "framer-motion";
import {useState} from "react";
import Link from "next/link";
import DarkModeToggle from "./components/dark-mode-toggle";
import localFont from "next/font/local";
import "./globals.css";

const animateIn = {
  hidden: { opacity: 0, y: 30 },
  show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.06, duration: 0.25, ease: "easeOut" },
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
  const [isFooterHovered, setIsFooterHovered] = useState(false);
  const [changelog, setChangelog] = useState(false);

  const toggleChangelog = () => {
    setChangelog((prevState) => !prevState);
};

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
        {/* <DocumentationButton/> */}
        <div className="fixed left-4 md:left-auto md:right-6 top-3 md:top-2 z-50">
          <div className="absolute right-12 hidden md:block w-24 tracking-tight
          font-medium text-lg font-[family-name:var(--font-geist-sans)]"></div>
          <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
        </div>        
        {/* <SearchMenu /> */}
        <main className="">{children}</main>


        {/* Changelog Footer */}
        <div 
          className="hidden md:flex fixed bottom-6 right-6 z-50 justify-center text-right backdrop-blur-sm rounded-full whitespace-nowrap tracking-tight 
          bg-background dark:bg-transparent shadow text-[8.5pt] text-black/30 md:text-black/40 dark:text-white/80 md:dark:text-white/60 cursor-pointer 
          hover:dark:text-white transition-all duration-200 w-[270px] hover:bg-foreground hover:text-background border-1 border-white/0 dark:hover:border-white/70"
          onClick={toggleChangelog}>
            Last meddled with on 03.04.25 for the 217th time.
        </div>

        {/* Changelog Window */}
        {changelog && (
          <motion.div 
            className="hidden md:grid fixed bottom-14 right-6 z-50 items-start p-4 backdrop-blur-xl rounded-xl 
            h-120 w-[270px] tracking-tight bg-background dark:bg-black/20 shadow-md border-b-1 border-white/20
            text-[8.5pt] text-black/30 md:text-black/40 dark:text-white/80 md:dark:text-white/60"
            initial="hidden"
            animate="show"
            variants={animateIn}
            layout>
              <div>
                <h1 className="font-medium text-base text-foreground">Changelog</h1>

                <p className='mt-4 text-foreground'>To do:</p>
                <p className="mt-2 leading-4">#ShotOniPhone photography album.</p>
                <p className="leading-4">&apos;What I&apos;m currently up to&apos; section under the profile page.</p>
                <p className="leading-4">Prototype placing works under the mobile profile /intro page.</p>
                <p className="leading-4">Rebuild the &apos;Portfolio Website&apos; page.</p>

                <p className='mt-4 text-foreground'>v217</p>
                {/* <div className="mt-2 h-[0.5px] w-full bg-foreground opacity-25"></div> */}
                <p className="mt-2 leading-4">Implemented this exact changelog feature; all updates will now be reflected here as I continue to iterate upon this site.</p>
                <p className="mt-2 leading-4">Changed BG of light mode footer notes from frosted glass to opaque white with drop shadow.</p>
                <p className="mt-2 leading-4">Changed the cover photo of the film photography album.</p>
              </div>
          </motion.div>
        )}

        {/* Documentation Footer */}
        <div 
          className="fixed bottom-6 left-0 inset-x-0 mx-auto z-50 md:w-200 flex justify-center"
          onMouseEnter={() => setIsFooterHovered(true)}
          onMouseLeave={() => setIsFooterHovered(false)}
        >
          <div
            className={`transition-all duration-300 text-center backdrop-blur-sm rounded-full border-1 whitespace-nowrap tracking-tight text-[8.5pt]
              ${isFooterHovered 
                ? ' w-44 md:bg-foreground md:dark:bg-transparent md:border-foreground md:text-white md:dark:border-white cursor-pointer md:scale-110' 
                : ' text-black/30 md:text-black/40 dark:text-white/80 md:dark:text-white/60 ml-2.5 w-88 border-transparent scale-100 bg-background dark:bg-transparent shadow'}`}
          >
            {isFooterHovered
              ? <Link href='https://ithinkitschris.notion.site/Portfolio-Website-127a92ab668680ed91ddd0619057466f'
              target="blank"
              rel="noopener noreferrer">Read my documentation here.</Link>
              : <div className="inline-flex ml-1">Website masochistically designed and coded with React and Next.js.
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
                </div>}
          </div>
          
        </div>
      </body>
    </html>
  );
}
