// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"
import Episodes from "@/app/components/episodes-cabin.js";

export default function Ghibli({className=""}) {

const backgroundGlowRef=useRef(null);
const bannerVideoRef=useRef(null);

useEffect(() => {
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
        <motion.div className={`grid grid-cols-6 gap-2 -mt-8
            sm:gap-3 max-w-full font-[family-name:var(--font-geist-sans)] ${className}`}
            initial="hidden"
            animate="show"
            variants={animateIn}>
                
            
                
                {/* Background Glow */}
                <video 
                src="/ghibli/banner.mp4" 
                className="absolute mt-20 w-full h-screen/1.2 max-w-9xl object-cover rounded-full -z-10 
            opacity-0 dark:opacity-100 blur-3xl saturate-200"
                autoPlay 
                muted 
                loop
                playsInline
                ></video>
                
                {/* Header */}
                <motion.div 
                className="tracking-tighter col-span-full mt-8 md:mt-6 mb-8 md:mb-8"
                variants={animateInChild}>
                {/* Mobile-only header */}
                <h1 className="text-7xl text-center font-medium tracking-tighter leading-tighter -ml-2">The World of Studio Ghibli</h1>

                {/* Subheader */}
                <p className="text-xl -rotate-1 font-medium font-script tracking-tighter mt-3 
                md:-rotate-1 md:mt-1 md:text-[27px] -ml-1 text-center md:text-left">Marketing campaign for ArtScience Museum</p>
                </motion.div> 

                {/* Banner Video */}
                <motion.video 
                ref={bannerVideoRef}
                src="/ghibli/banner.mp4" 
                className="col-span-full shadow-standard rounded-lg w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-8"
                autoPlay muted loop playsInline
                variants={animateInChild}
                // whileHover={{scale:1.01}}
                >
                </motion.video>

                {/* Blurb */}
                <div className="col-span-full sm:col-span-4 lg:mr-16 ">
                    <motion.div className="text-2xl lg:text-3xl font-base tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                    Be spirited away into the magical scenes from iconic films through immersive theatrical sets, whimsical art installations and more.​
                    </motion.div>
                </div>

                {/* Project Details */}
                <div className="flex flex-row col-span-full sm:col-span-2 px-8 sm:px-0 justify-between font-mono text-xs tracking-tight ">
                    <motion.div variants={animateInChild}>
                        Role
                        <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                            <li>Creative Direction</li>
                            <li>Visual Design</li>
                        </ol>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                        Brand
                        <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                            <li>ArtScience Museum</li>
                        </ol>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                        Department
                        <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                            <li>In-house Marketing</li>
                        </ol>
                    </motion.div>
                </div>

                {/* Writeup */}
                <div className="flex flex-col sm:flex-row col-span-full px-8 sm:px-0 gap-10 mt-10 mb-14 md:mr-7">
                    <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                    <p className="mb-2 font-mono text-sm ">Why?</p>
                        <p>An integrated Marketing campaign for the first official Studio Ghibli exhibition in Singapore, and one of the largest exhibitions to be shown at ArtScience Museum, transforming 11 galleries spanning two levels. The World of Studio Ghibli is organised by ArtScience Museum under the license of award-winning animation powerhouse Studio Ghibli.</p>
                    </motion.div>
                    
                    <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                    <p className="mb-2 font-mono text-sm ">How?</p>
                        <p>Deliverables spanned a massive spectrum from On-property Banners, Digital Signages, Posters, Exhibition Guides. Merchandise to Digital OOH, Cinema pre-roll ads, In-cabin train OOHs and marketing partner with Klook as a platform.</p>
                    </motion.div>
                    
                </div>
                       
        </motion.div>
    )

}