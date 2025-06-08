// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"

export default function Jolli({className=""}) {

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
            src="/jollieverafter/teaser2.mp4" 
            className="absolute mt-20 w-screen h-screen/1.2 object-cover rounded-full -z-10 
            opacity-0 dark:opacity-100 -ml-4 blur-3xl saturate-200"
            autoPlay 
            muted 
            loop controls
            playsInline
            ></video>
            
            {/* Header */}
            <motion.div 
            className="tracking-tighter col-span-full mt-8 md:mt-6 mb-8 md:mb-8"
            variants={animateInChild}>
                

                <h1 className="text-7xl md:text-8xl text-center md:text-left font-medium tracking-tighter leading-tighter -ml-2">JolliEverAfter</h1>

                {/* Subheader */}
                <p className="text-xl md:text-3xl font-base tracking-tight mt-4 md:mt-0.5 md:text-[27px] -ml-1 text-center md:text-left">
                Social Media Campaign for <span className='relative font-script left-2 top-1 text-[17pt]'>Jollibee</span></p>
            </motion.div> 

            {/* Banner Video */}
            <motion.video src="/jollieverafter/teaser1.mp4" 
            className="col-span-full md:col-span-2 shadow-standard rounded-3xl w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            // whileHover={{scale:1.01}}
            >
            </motion.video>

            <motion.video src="/jollieverafter/teaser2.mp4" 
            className="hidden md:block col-span-2 shadow-standard rounded-3xl w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            // whileHover={{scale:1.01}}
            >
            </motion.video>
            
            <motion.video src="/jollieverafter/teaser3.mp4" 
            className="hidden md:block col-span-2 shadow-standard rounded-3xl w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            // whileHover={{scale:1.01}}
            >
            </motion.video>

            {/* Blurb */}
            <div className="col-span-full sm:col-span-4 lg:mr-16 ">
                <motion.div className="text-2xl lg:text-4xl lg:w-5/6 font-medium tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                An interactive social media campaign that brought Jollibee&apos;s annual Kwentong film to TikTok for the first time in 2020.
                </motion.div>
            </div>

            {/* Project Details */}
            <div className="flex flex-row col-span-full sm:col-span-2 px-8 sm:px-0 justify-between font-mono text-xs tracking-tight ">
                <motion.div variants={animateInChild}>
                    Role
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>Video Editing</li>
                        <li>Motion Design</li>
                        
                    </ol>
                </motion.div>
                <motion.div variants={animateInChild}>
                    Client
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>Jollibee</li>
                    </ol>
                </motion.div>
                <motion.div variants={animateInChild}>
                    Agency
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>BBH Singapore</li>
                    </ol>
                </motion.div>
            </div>

            {/* Writeup */}
            <div className="flex flex-col sm:flex-row col-span-full px-8 sm:px-0 gap-4 md:gap-10 mt-8 mb-20 md:mr-7">
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm "></p>
                <p className="mb-3">JolliEverAfter invited the TikTok community in the Phillippines to star in their own romantic comedy in the form of 9 challenges, each representing a moment in the rom-com story arc. Leaving it open to anyone to do any of the challenges to fill the gaps in the story, their way. </p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm "></p>
                <p className="mb-3">The result is a story of infinite possibilities and storylines strung together by everyone's own interpretation. </p> 
                </motion.div>
            </div>

            <div className="col-span-full mb-8 md:mb-4">
                <h1 className="text-4xl md:text-7xl text-center md:text-left tracking-[-2pt] font-medium mt-28">Teaser</h1>
                <h2 className='mt-12 font-medium tracking-tight w-full md:w-1/3 text-center md:text-left'>A 60 second trailer teasing the premise and setup for the 9 challenges, released on Facebook, Instagram and TikTok.</h2>
            </div>
            
            
            <div className='col-span-full grid md:grid-cols-2 gap-1 lg:gap-2'>
                <video
                    src='/jollieverafter/teaser.mp4'
                    className="shadow rounded-3xl object-cover col-span-1 w-full"
                    autoPlay
                    loop
                    muted
                    controls
                    playsInline
                ></video>

            </div>

            <div className="col-span-full mb-8 mt-20">
                <h1 className="text-4xl md:text-6xl text-center md:text-left tracking-[-2pt] font-medium mt-28">Challenges</h1>
                <h2 className='mt-12 font-medium tracking-tight w-full text-center md:text-left'>The full 9 TikTok challenges, each representing a critical plot point in the rom-com.</h2>
            </div>

            <div className='col-span-full grid grid-cols-2 md:grid-cols-6 gap-1.5 lg:gap-2 mb-20'>

                <video
                    src='/jollieverafter/1.2.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/1.1.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/2.2.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/2.1.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/3.2.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/3.1.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>
                <video
                    src='/jollieverafter/4.2.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/4.1.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/5.2.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/5.1.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/6.2.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/6.1.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/7.2.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/7.1.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/8.2.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/8.1.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/9.2.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/jollieverafter/9.1.mp4'
                    className="shadow rounded-2xl object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                
  
            </div>

            
            

            

        </motion.div>
    )

}