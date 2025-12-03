// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"
import Image from 'next/image';
import ProjectHeader from '../common/ProjectHeader';
import { useBrowser } from '../../context/BrowserContext';

export default function Kris({className="", isMobile}) {
    
    const backgroundGlowRef=useRef(null);
    const bannerVideoRef=useRef(null);
    const { browserType } = useBrowser();
    const isChrome = browserType === 'chrome';

    useEffect(() => {
        if (isMobile || !isChrome) return;
        
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
      }, [isMobile, isChrome]);


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
        
        <motion.div className={`grid grid-cols-6 gap-2 -mt-8 max-w-screen md:pt-6
            sm:gap-3 font-[family-name:var(--font-geist-sans)] ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>

            {/* Background Glow */}
            {isChrome && (
            <video 
            ref={backgroundGlowRef}
            src="/Kris/video_1.mp4" 
            className="absolute mt-20 w-screen h-screen/1.2 object-cover rounded-full -z-10 
            opacity-0 dark:opacity-100 -ml-4 blur-3xl saturate-200"
            autoPlay 
            muted 
            loop
            playsInline
            ></video>
            )}
            
            {/* Header */}
            <ProjectHeader 
                title="Kris+ Brand Campaign"
                subtitle="Brand campaign for"
                subtitleBrand="Singapore Airlines"
            />

            {/* Banner Video */}
            <motion.video 
            ref={bannerVideoRef}
            src="/Kris/video_1.mp4" 
            className="col-span-full shadow-standard rounded-3xl w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-8"
            autoPlay muted loop controls playsInline loading="lazy"
            variants={animateInChild}
            poster='/poster/krispage.jpeg'
            >
            </motion.video>

            {/* Blurb */}
            <div className="col-span-full sm:col-span-4 lg:mr-16 ">
                <motion.div className="text-2xl lg:text-3xl font-medium tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                With the Kris+ app, you’re one tap away from everything. 
                One tap away from the plus side of life.
                One tap away from a getaway.
                </motion.div>
            </div>

            {/* Project Details */}
            <div className="flex flex-row col-span-full sm:col-span-2 px-8 sm:px-0 justify-between font-mono text-xs tracking-tight ">
                <motion.div variants={animateInChild}>
                    Role
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>Creative Direction</li>
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
                <p className="mb-2 font-mono text-sm ">How?</p>
                    <p>This campaign utilises the idea of a Rube Goldberg device to showcase to showcase all the plus sides of life one’ll get to explore with Kris+.</p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/2" variants={animateInChild}>
                <p className="mb-[26px] font-mono text-sm "></p>
                    <p>From dining and shopping, we’ll show how all spending leads to an ultimate payoff through the domino effect — an aircraft taking off to signify “your next holiday”.</p>
                </motion.div>
                
            </div>

            <motion.div className='col-span-full mt-0 grid grid-cols-3 gap-1.5 md:gap-2' variants={animateInChild}>
                
                <div className="col-span-full mb-12 md:mb-18">
                    <h1 className="text-5xl md:text-[50px] font-script -rotate-3 text-center md:text-left tracking-tighter">OOHs</h1>
                </div>

                <Image
                    src="/Kris/1.jpg"
                    alt=""
                    className="rounded-3xl col-span-3 object-cover"
                    layout="responsive"
                    width={50}
                    height={10}
                    />

                <div className="col-span-full">
                    <Image
                        src="/Kris/2.jpg"
                        alt=""
                        className="rounded-3xl object-cover"
                        layout="responsive"
                        width={50}
                        height={50}
                        />
                </div>

                <div className="col-span-full flex gap-1.5 md:gap-2 w-full">
                    <div className="w-1/2">
                        <Image
                        src="/Kris/3.jpg"
                        alt=""
                        className="rounded-2xl object-cover"
                        layout="responsive"
                        width={500}
                        height={500}
                        />
                    </div>
                    <div className="w-1/2">
                        <Image
                        src="/Kris/4.jpg"
                        alt=""
                        className="rounded-2xl object-cover"
                        layout="responsive"
                        width={500}
                        height={500}
                        />
                    </div>
                </div>

                <div className="col-span-full flex gap-1.5 md:gap-2 w-full">
                    <div className="w-1/3">
                        <Image
                        src="/Kris/5.jpg"
                        alt=""
                        className="rounded-2xl object-cover"
                        layout="responsive"
                        width={50}
                        height={50}
                        />
                    </div>
                    <div className="w-2/3">
                        <Image
                        src="/Kris/6.jpg"
                        alt=""
                        className="rounded-2xl object-cover"
                        layout="responsive"
                        width={50}
                        height={50}
                        />
                    </div>
                </div>
            </motion.div>

            
            
        </motion.div>
    )
}

