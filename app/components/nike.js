// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"

export default function Nike({className=""}) {

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
            sm:gap-3 font-[family-name:var(--font-geist-sans)] md:pt-14 ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>

            {/* Background Glow */}
            <video 
            ref={backgroundGlowRef}
            src="/nike/1.mp4" 
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

                <h1 className="hidden sm:block text-7xl md:text-8xl text-center font-medium md:font-medium 
                md:text-left tracking-tighter leading-tighter -ml-2">Nike Athlete Stories: Koy & Toon</h1>

                {/* Subheader */}
                <p className="text-xl md:text-3xl font-medium tracking-tight mt-4 md:mt-0.5 md:text-[27px] -ml-1 text-center md:text-left">
                Social Media Campaign for Nike</p>

            </motion.div> 

            {/* Banner Video */}
            <motion.video src="/nike/trailer1.mp4" 
            className="col-span-full md:col-span-2 shadow-standard rounded-[18pt] w-full h-screen/1.5 lg:w-full lg:h-auto object-cover mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/nikepage1.png'
            // whileHover={{scale:1.01}}
            >
            </motion.video>

            <motion.video src="/nike/trailer3.mp4" 
            className="hidden md:block col-span-2 shadow-standard rounded-[18pt] w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/nikepage2.png'
            // whileHover={{scale:1.01}}
            >
            </motion.video>
            
            <motion.video src="/nike/3.mp4" 
            className="hidden md:block col-span-2 shadow-standard rounded-[18pt] w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/nikepage3.png'
            // whileHover={{scale:1.01}}
            >
            </motion.video>

            {/* Blurb */}
            <div className="col-span-full sm:col-span-4 lg:mr-16 ">
                <motion.div className="text-2xl lg:text-4xl font-medium tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                A set of Instagram Stories videos and a full film featuring Thai NIKE athletes Koy Ratchawin and Artiwara Kongmalai (Toon)
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
                        <li>Nike</li>
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
                <p className="mb-3">The film was produced with the aim for it to reside on the @nike Instagram TV platform, alongside a few sets of Instagram Stories that spanned various NIKE Instagram accounts to drive awareness and viewership.</p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm "></p>
                <p className="mb-3">Aside from the full film, a set of videos was also produced for the @niketraining account, focusing on the training routines of both Koy and Toon.</p> 
                </motion.div>
            </div>

            <div className="col-span-full mb-8">
                <h1 className="text-4xl md:text-6xl text-center md:text-left tracking-[-2pt] font-medium mt-28">Main Film Teaser</h1>
                <h2 className='mt-12 font-medium tracking-tight w-full md:w-4/6 text-center md:text-left'>A set of 3 Instagram Stories that was posted on the main @nike account as a teaser to drive viewership to the full film on @nike Instagram TV.</h2>
            </div>

            <div className='col-span-full grid grid-cols-2 md:grid-cols-4 gap-1.5 lg:gap-2 mb-20'>

                <video
                    src='/nike/trailer0.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/nike/trailer1.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/nike/trailer2.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/nike/trailer3.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

            </div>


            <div className="col-span-full mb-8 mt-4">
                <h1 className="text-4xl md:text-6xl text-center md:text-left tracking-[-2pt] font-medium mt-28">@nikerunning Narrative Teaser</h1>
                <h2 className='mt-12 font-medium tracking-tight w-full md:w-4/6 text-center md:text-left'>An extended 8 video set of Instagram Stories that was uploaded onto @nikerunning, serving as an alternate method of storytelling to the full film through the Instagram Stories format. 
                Viewers could then choose to swipe up to watch the full film on the main @nike account.</h2>
            </div>

            <div className='col-span-full grid grid-cols-2 md:grid-cols-4 gap-1.5 lg:gap-2 mb-20'>

                <video
                    src='/nike/Running-1.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/nike/Running-2.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/nike/Running-3.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/nike/Running-4.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/nike/Running-5.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/nike/Running-6.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>
                <video
                    src='/nike/Running-7.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/nike/Running-8.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>
                
            </div>

            <div className="col-span-full mb-8">
                <h1 className="text-4xl md:text-6xl text-center md:text-left tracking-[-2pt] font-medium mt-28">@nike Training Montage</h1>
                <h2 className='mt-12 font-medium tracking-tight w-full md:w-1/2 text-center md:text-left'>A 4 video training routine montage set that was uploaded onto the main @nike account to raise interest and drive viewership to the @niketraining Instagram account.</h2>
            </div>

            <div className='col-span-full grid grid-cols-2 md:grid-cols-4 gap-1.5 lg:gap-2 mb-20'>

                <video
                    src='/nike/montage1.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/nike/montage2.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/nike/montage3.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

                <video
                    src='/nike/montage4.mp4'
                    className="shadow rounded-[18pt] object-cover col-span-1 w-full"
                    autoPlay loop muted playsInline
                ></video>

            </div>

            
            

            

        </motion.div>
    )

}