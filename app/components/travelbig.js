// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"


export default function TravelBig({className="", isMobile}) {
    
    const backgroundGlowRef=useRef(null);
    const bannerVideoRef=useRef(null);

    useEffect(() => {
        if (isMobile) return;
        
        const backgroundGlow = backgroundGlowRef.current;
        const bannerVideo = bannerVideoRef.current;
    
        if (backgroundGlow && bannerVideo) {
          // Ensure both videos start together
          backgroundGlow.play();
          bannerVideo.play();
    
          // Synchronize the videos periodically
          const syncVideos = () => {
            if (Math.abs(backgroundGlow.currentTime - bannerVideo.currentTime) > 0.2) {
              bannerVideo.currentTime = backgroundGlow.currentTime;
            }
          };
    
          // Set an interval to check and sync the videos every 100ms
          const syncInterval = setInterval(syncVideos, 100);
    
          // Clean up the interval on component unmount
          return () => clearInterval(syncInterval);
        }
      }, []);


const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.1, duration:0.3, ease:"easeOut"}
    }
}
const animateInChild ={
hidden: {opacity:0, y:20},
show: {
    opacity:1, y:0, 
    transition: {duration:0.3, ease:"easeOut"}
    }
}
 

    return(
        
        <motion.div className={`grid grid-cols-6 gap-2 -mt-8 max-w-screen
            sm:gap-3 font-[family-name:var(--font-geist-sans)] ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>

            {/* Background Glow */}
            <video 
            ref={backgroundGlowRef}
            src="/travelbig/video.mp4" 
            className="absolute mt-20 w-screen h-screen/1.2 object-cover rounded-full -z-10 
            opacity-0 dark:opacity-100 -ml-4 blur-3xl saturate-200"
            autoPlay 
            muted 
            loop
            playsInline
            ></video>
            
            {/* Header */}
            <motion.div 
            className="tracking-tighter col-span-full mt-8 md:mt-6 mb-8 md:mb-8"
            variants={animateInChild}>
                
                {/* Desktop Header */}
                <h1 className="sm:block text-7xl md:text-8xl text-center font-medium md:font-normal 
                md:text-left tracking-tighter leading-tighter -ml-2">Travel Like Never Before</h1>

                {/* Subheader */}
                <p className="text-xl md:text-3xl font-base tracking-tight mt-4 md:mt-0 md:text-[27px] -ml-1 text-center md:text-left">
                Brand campaign for <span className='font-script -rotate-1 relative left-1.5 top-1'>Singapore Airlines</span></p>
            </motion.div> 

            {/* Banner Video */}
            <motion.video 
            ref={bannerVideoRef}
            src="/travelbig/video.mp4" 
            className="col-span-full shadow-standard rounded-lg w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-8"
            autoPlay muted loop controls playsInline
            variants={animateInChild}
            // whileHover={{scale:1.01}}
            >
            </motion.video>

            {/* Blurb */}
            {/* <div className="col-span-full sm:col-span-4 lg:mr-16 ">
                <motion.div className="text-2xl lg:text-3xl font-base tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                With the Kris+ app, you’re one tap away from everything. 
                One tap away from the plus side of life.
                One tap away from a getaway.
                </motion.div>
            </div> */}

            {/* Project Details */}
            <div className="flex flex-row col-span-full sm:col-span-2 px-8 sm:px-0 justify-between font-mono text-xs tracking-tight w-full">
                <motion.div variants={animateInChild}>
                    Role
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>Art Direction</li>
                        <li>Ideation</li>
                    </ol>
                </motion.div>
                <motion.div variants={animateInChild}>
                    Client
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>Singapore Airlines</li>
                    </ol>
                </motion.div>
                <motion.div variants={animateInChild}>
                    Agency
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>TBWA\ Singapore</li>
                    </ol>
                </motion.div>
            </div>

            {/* Writeup */}
            <div className="flex flex-col sm:flex-row col-span-full px-8 sm:px-0 gap-5 mt-10 mb-24 md:mb-14 md:mr-7">
                <motion.div className="tracking-tight sm:w-1/2" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm "></p>
                    <p>A brand campaign for the recovery efforts of Singapore Airlines as travel restrictions lifted across the world in 2022. </p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/2" variants={animateInChild}>
                <p className="md:mb-[26px] font-mono text-sm "></p>
                    <p>With the strategy of travelling bigger and better than ever before, the campaign was centred around travelling for the big milestone and sentimental moments now that travel is back on the table.</p>
                </motion.div>
                
            </div>

        </motion.div>
    )
}

