// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"
import ProjectHeader from './common/ProjectHeader';

export default function ISpy({className=""}) {

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
    
    return(
        
        <motion.div className={`grid grid-cols-6 gap-2 md:pt-6
            sm:gap-3 max-w-full -mt-8 font-[family-name:var(--font-geist-sans)] ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>

            {/* Background Glow */}
            <video 
            ref={backgroundGlowRef}
            src="/ispy/1.mp4" 
            className="absolute md:mt-96 w-screen h-screen/1.2 object-cover rounded-full -z-10 
            opacity-0 dark:opacity-100 md:dark:opacity-50 -ml-4 blur-3xl saturate-200"
            autoPlay 
            muted 
            loop
            playsInline
            ></video>
            
            {/* Header */}
            <ProjectHeader 
                title="I Spy in the Sky..."
                subtitle="Content series for"
                subtitleBrand="Singapore Airlines"
            />

            {/* Banner Video */}
            <motion.video src="/ispy/1.mp4" 
            className="col-span-full md:hidden shadow-standard rounded-lg w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/ispy.jpeg'
            // whileHover={{scale:1.01}}
            >
            </motion.video>

            <div className="col-span-full grid grid-cols-2 md:grid-cols-5 gap-1.5 mb-8 lg:gap-2 hidden md:grid">
                <motion.video
                    src='/ispy/1.mp4'
                    className="shadow rounded-lg object-cover h-auto col-span-2 md:col-span-1"
                    variants={animateInChild}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></motion.video>
                <motion.video
                    src='/ispy/2.mp4'
                    className="shadow rounded-lg object-cover h-auto "
                    variants={animateInChild}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></motion.video>
                <motion.video
                    src='/ispy/3.mp4'
                    className="shadow rounded-lg object-cover h-auto "
                    variants={animateInChild}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></motion.video>
                <motion.video
                    src='/ispy/4.mp4'
                    className="shadow rounded-lg object-cover h-auto "
                    variants={animateInChild}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></motion.video>
                <motion.video
                    src='/ispy/5.mp4'
                    className="shadow rounded-lg object-cover h-auto "
                    variants={animateInChild}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></motion.video>
            </div>

            {/* Blurb */}
            <div className="col-span-full sm:col-span-4 lg:mr-16 ">
                <motion.div className="text-2xl lg:text-3xl font-base tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                A social content piece that set the eyes of the children of Singapore towards the sky.
                </motion.div>
            </div>

            {/* Project Details */}
            <div className="flex flex-row col-span-full sm:col-span-2 px-8 sm:px-0 justify-between font-mono text-xs tracking-tight ">
                <motion.div variants={animateInChild} className="">
                    Role
                    <ol className="mt-2 tracking-tight">
                        <li>Ideation</li>
                    </ol>
                </motion.div>
                <motion.div variants={animateInChild} className="">
                    Client
                    <ol className="mt-2 tracking-tight">
                        <li>Singapore Airlines</li>
                    </ol>
                </motion.div>
                <motion.div variants={animateInChild} className="">
                    Agency
                    <ol className="mt-2 tracking-tight">
                        <li>TBWA\ Singapore</li>
                    </ol>
                </motion.div>
            </div>

            {/* Writeup */}
            <div className="flex flex-col sm:flex-row col-span-full px-8 sm:px-0 gap-8 mt-8 mb-14 md:mb-0 md:mr-7">
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm ">Ask:</p>
                <p className="mb-3">Singapore Airlines has one of the world&apos;s youngest and most cutting edge fleet of aircraft in the world. We sought to raise interest in the fleet, the brand and it&apos;s products.</p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm ">Insight:</p>
                <p className="mb-3">Singapore Airlines planes are commonly seen coming in to land at Changi Beach or East Coast Park; two parks that are bustling on the weekends with families. </p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm ">How:</p>
                <p className="mb-3">I spy In The Sky is a content series built around this, encouraging and inspiring parents to make plane spotting at these parks a weekend activity within the family. </p>
                <p className="mb-3">The series takes on a storybook-like art direction and copywriting, portraying the different models of aircraft in Singapore Airlines&apos; fleet and their respective distinctive features that would aid in identifying them.</p>
                </motion.div>
            </div>

            <div className="col-span-full mt-12 mb-8 md:mb-8 lg:mb-10 md:hidden">
                <motion.h1 className="text-4xl lg:text-5xl font-script -rotate-3 text-center md:text-left tracking-tighter" variants={animateInChild}>A set of Five</motion.h1>
            </div>

            <div className="col-span-full grid grid-cols-2 md:grid-cols-5 gap-1.5 mb-8 lg:gap-2 md:hidden">
                <motion.video
                    src='/ispy/1.mp4'
                    className="shadow rounded-lg object-cover h-auto col-span-2 md:col-span-1"
                    variants={animateInChild}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></motion.video>
                <motion.video
                    src='/ispy/2.mp4'
                    className="shadow rounded-lg object-cover h-auto "
                    variants={animateInChild}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></motion.video>
                <motion.video
                    src='/ispy/3.mp4'
                    className="shadow rounded-lg object-cover h-auto "
                    variants={animateInChild}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></motion.video>
                <motion.video
                    src='/ispy/4.mp4'
                    className="shadow rounded-lg object-cover h-auto "
                    variants={animateInChild}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></motion.video>
                <motion.video
                    src='/ispy/5.mp4'
                    className="shadow rounded-lg object-cover h-auto "
                    variants={animateInChild}
                    autoPlay
                    loop
                    muted
                    playsInline
                ></motion.video>
            </div>

            

        </motion.div>
    )

}