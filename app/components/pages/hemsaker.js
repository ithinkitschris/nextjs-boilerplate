// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"
import ProjectHeader from '../common/ProjectHeader';

export default function Hemsaker({className=""}) {

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
        
        <motion.div className={`grid grid-cols-6 gap-2 -mt-8 max-w-screen overflow-x-hidden
            sm:gap-3 font-[family-name:var(--font-geist-sans)] md:pt-6 ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>

            {/* Background Glow */}
            <video 
            ref={backgroundGlowRef}
            src="/Hemsaker/video1_1.mp4" 
            className="absolute mt-20 w-screen h-screen/1.2 object-cover rounded-full -z-10 
            opacity-0 dark:opacity-100 -ml-4 blur-3xl saturate-200"
            autoPlay 
            muted 
            loop controls
            playsInline
            ></video>
            
            <ProjectHeader 
                title="Oops Happens"
                subtitle="Product campaign for"
                subtitleBrand="IKEA"
            />

            {/* Banner Video */}
            <motion.video src="/Hemsaker/video1_1.mp4" 
            className="col-span-full shadow-standard rounded-3xl w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-12"
            autoPlay muted loop controls playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            // whileHover={{scale:1.01}}
            >
            </motion.video>

            {/* Blurb */}
            <div className="col-span-full sm:col-span-4 lg:mr-16 ">
                <motion.div className="text-2xl lg:text-4xl lg:w-5/6 font-medium tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                With HEMSÄKER home insurance, everything will be exactly as if it never happened.
                </motion.div>
            </div>

            {/* Project Details */}
            <div className="flex flex-row col-span-full sm:col-span-2 px-8 sm:px-0 justify-between font-mono text-xs tracking-tight ">
                <motion.div variants={animateInChild}>
                    Role
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>Ideation</li>
                        <li>Art Direction</li>
                        
                    </ol>
                </motion.div>
                <motion.div variants={animateInChild}>
                    Client
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>IKEA</li>
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
            <div className="flex flex-col sm:flex-row col-span-full px-8 sm:px-0 gap-4 md:gap-10 mt-8 mb-20 md:mr-7">
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm "></p>
                <p className="mb-3">Centered around the idea of HEMSÄKER providing coverage over various aspects of home ownership, the campaign took on a reliable and worry-free approach–with any damage caused at home being magically undone as if it never happened.</p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm "></p>
                <p className="mb-3">Utilising IKEA&apos;s FLISAT doll house shelving and LILLABO toy figurines, a series of short films were created depicting 6 seemingly accidental yet disastrous home accidents.</p> 
                </motion.div>
            </div>

            <div className="col-span-full mb-8 md:mb-8 lg:mb-10 xl:mb-10 md:mt-24">
                <h1 className="text-4xl md:text-6xl text-center md:text-left tracking-[-2pt] font-medium">Key Visuals</h1>
            </div>

            <div className='col-span-full grid grid-cols-4 gap-1 lg:gap-2'>

                <img src='/Hemsaker/2.png' 
                className='rounded-md col-span-full object-cover w-full'/>
                
                <img src='/Hemsaker/4.png' 
                className='rounded-md col-span-full md:col-span-1 object-cover w-full'/>

                <img src='/Hemsaker/1.png' 
                className='rounded-md col-span-full md:col-span-2 object-cover w-full'/>

                <img src='/Hemsaker/5.png' 
                className='rounded-md col-span-full md:col-span-1 object-cover w-full'/>    
            </div>

            <div className="col-span-full mt-20 mb-8 md:mb-8 lg:mb-10 md:mt-32">
                <h1 className="text-4xl md:text-5xl text-center md:text-left tracking-[-2pt] font-medium">Films</h1>
            </div>
            
            <div className='col-span-full grid md:grid-cols-2 gap-1 lg:gap-2'>
                <video
                    src='/Hemsaker/video1_1.mp4'
                    className="shadow rounded-lg object-cover col-span-1 w-full"
                    autoPlay
                    loop
                    muted
                    controls
                    playsInline
                ></video>

                <video
                    src='/Hemsaker/video2_1.mp4'
                    className="shadow rounded-lg object-cover col-span-1 w-full"
                    autoPlay
                    loop
                    muted
                    controls
                    playsInline
                ></video>
            </div>
            

            <div className="col-span-full mt-24 mb-8 md:mb-8 lg:mb-10">
                <h1 className="text-4xl md:text-5xl text-center md:text-left tracking-[-2pt] font-medium">Socials</h1>
            </div>
        
            <div className="col-span-full grid grid-cols-3 md:grid-cols-6 gap-1 mb-8 lg:gap-2">
                <video
                    src='/Hemsaker/1.mp4'
                    className="shadow rounded-lg object-cover h-auto flex-1 min-w-[49%] lg:min-w-[24%]"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                <video
                    src='/Hemsaker/2.mp4'
                    className="shadow rounded-lg object-cover h-auto flex-1 min-w-[49%] lg:min-w-[24%]"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                <video
                    src='/Hemsaker/3.mp4'
                    className="shadow rounded-lg object-cover h-auto flex-1 min-w-[49%] lg:min-w-[24%]"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                <video
                    src='/Hemsaker/4.mp4'
                    className="shadow rounded-lg object-cover h-auto flex-1 min-w-[49%] lg:min-w-[24%]"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                <video
                    src='/Hemsaker/5.mp4'
                    className="shadow rounded-lg object-cover h-auto flex-1 min-w-[49%] lg:min-w-[24%]"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                <video
                    src='/Hemsaker/6.mp4'
                    className="shadow rounded-lg object-cover h-auto flex-1 min-w-[49%] lg:min-w-[24%]"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
            </div>

        </motion.div>
    )

}