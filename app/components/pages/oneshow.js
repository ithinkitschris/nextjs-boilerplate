// import { motion } from "framer-motion"
"use client";
import { useEffect, useRef } from "react";
import * as motion from "framer-motion/client";
import ProjectHeader from '../common/ProjectHeader';
import { useBrowser } from '../../context/BrowserContext';

export default function Oneshow({ className = "" }) {
  const animateIn = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.3, ease: "easeOut" },
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

  const backgroundGlowRef = useRef(null);
  const bannerVideoRef = useRef(null);
  const { browserType } = useBrowser();
  const isChrome = browserType === 'chrome';

  useEffect(() => {
    if (!isChrome) return;
    
    const backgroundGlow = backgroundGlowRef.current;
    const bannerVideo = bannerVideoRef.current;

    if (backgroundGlow && bannerVideo) {
      // Ensure both videos start together
      backgroundGlow.play();
      bannerVideo.play();

      // Synchronize the videos periodically
      const syncVideos = () => {
        if (
          Math.abs(backgroundGlow.currentTime - bannerVideo.currentTime) > 0.2
        ) {
          bannerVideo.currentTime = backgroundGlow.currentTime;
        }
      };

      // Set an interval to check and sync the videos every 100ms
      const syncInterval = setInterval(syncVideos, 100);

      // Clean up the interval on component unmount
      return () => clearInterval(syncInterval);
    }
  }, [isChrome]);

  return (
    <motion.div
      className={`grid grid-cols-6 gap-2 
            sm:gap-3 max-w-full -mt-8 font-[family-name:var(--font-geist-sans)] ${className}`}
      initial="hidden"
      animate="show"
      variants={animateIn}
    >
      {/* Background Glow */}
      {isChrome && (
      <video
        ref={backgroundGlowRef}
        src="/oneshow/final.mp4"
        className="absolute mt-20 w-screen h-screen/1.2 object-cover rounded-full -z-10 
            opacity-0 dark:opacity-50 -ml-4 blur-3xl saturate-200"
        autoPlay
        muted
        loop
        controls
        playsInline
      ></video>
      )}

      <ProjectHeader 
        title="TBWA One Show Shortlist"
        subtitle="Social Media Post"
      />

      {/* Banner Video */}
      <motion.video
        src="/oneshow/final.mp4"
        className="col-span-full shadow-standard rounded-lg w-full h-screen/2 lg:w-full lg:h-[800px] object-cover mb-12"
        autoPlay
        muted
        loop
        playsInline
        variants={animateInChild}
        poster="/poster/.jpeg"
        // whileHover={{scale:1.01}}
      ></motion.video>

      {/* Blurb */}
      <div className="col-span-full sm:col-span-4 lg:mr-16 ">
        <motion.div
          className="text-2xl lg:text-4xl lg:w-5/6 font-medium tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0"
          variants={animateInChild}
        >
          A simple 3D animation for the announcement of TBWA\ Singapore&apos;s One
          Show shortlists across their social media platforms.
        </motion.div>
      </div>

      {/* Project Details */}
      <div className="flex flex-row col-span-full sm:col-span-2 px-8 sm:px-0 justify-between font-mono text-xs tracking-tight ">
        <motion.div variants={animateInChild}>
          Role
          <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
            <li>Art Direction</li>
            <li>3D Motion Design</li>
          </ol>
        </motion.div>
        <motion.div variants={animateInChild}>
          Client
          <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
            <li>TBWA\ Singapore</li>
          </ol>
        </motion.div>
        <motion.div variants={animateInChild}>
          Agency
          <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
            <li>TBWA\ Singapore</li>
          </ol>
        </motion.div>
      </div>

      <div className="col-span-full mb-3 md:mb-8 mt-20 md:mt-28">
        <h1 className="text-2xl md:text-4xl font-script -rotate-1 text-center md:text-left tracking-tighter">
          Modeling
        </h1>
      </div>

      <div className="col-span-full grid grid-cols-2 gap-1.5 lg:gap-2 mb-20">
        <img
          src="/oneshow/model1.jpeg"
          className="w-full h-full md:h-[1000px] object-cover col-span-1 rounded md:rounded-xl"
        />
        <img
          src="/oneshow/model2.jpeg"
          className="w-full h-full md:h-[1000px] object-cover col-span-1 rounded md:rounded-xl"
        />
    
      </div>

      <div className="col-span-full mb-3 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-script -rotate-1 text-center md:text-left tracking-tighter">
          Material Explorations
        </h1>
      </div>

      <div className="col-span-full grid grid-cols-3 gap-1.5 lg:gap-2 mb-20 overflow-hidden">
      <img
          src="/oneshow/material1.png"
          className="w-full col-span-1 rounded md:rounded-xl"
        />
        <img
          src="/oneshow/material2.png"
          className="w-full col-span-1 rounded md:rounded-xl"
        />
        <video
          src="/oneshow/material3.mp4"
          className="shadow rounded-lg object-cover col-span-1 w-full"
          autoPlay
          loop
          muted
          playsInline
        ></video>

      </div>

      <div className="col-span-full mb-8">
        <h1 className="text-3xl lg:text-5xl font-script -rotate-1 text-center md:text-left tracking-tighter">
          Final Output
        </h1>
      </div>

      <div className="col-span-full grid grid-cols-2 gap-1.5 lg:gap-2 mb-20">
        <video
          src="/oneshow/final.mp4"
          className="shadow rounded-lg object-cover col-span-1 w-full"
          autoPlay
          loop
          muted
          playsInline
        ></video>
    
      </div>
    </motion.div>
  );
}
