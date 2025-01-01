// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"

export default function Samsung({className=""}) {

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
        
        <motion.div className={`grid grid-cols-6 gap-2 
            sm:gap-3 max-w-full -mt-8 font-[family-name:var(--font-geist-sans)] ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>

            {/* Background Glow */}
            <video 
            ref={backgroundGlowRef}
            src="/samsung/montage.mp4" 
            className="absolute mt-20 w-screen h-screen/1.2 object-cover rounded-full -z-10 
            opacity-0 dark:opacity-50 -ml-4 blur-3xl saturate-200"
            autoPlay 
            muted 
            loop 
            playsInline
            ></video>
            
            {/* Header */}
            <motion.div 
            className="tracking-tighter col-span-full mt-8 md:mt-6 mb-8 md:mb-8"
            variants={animateInChild}>
                

                <h1 className=" text-[65px] md:text-8xl text-center font-medium md:font-normal 
                md:text-left tracking-tighter leading-tighter -ml-2">Samsung Lifestyle Displays</h1>

                {/* Subheader */}
                <p className="text-xl md:text-3xl font-base tracking-tight mt-4 md:mt-0.5 md:text-[27px] -ml-1 text-center md:text-left">
                Motion Design for<span className='font-script -rotate-1 relative left-2 top-1'>Samsung</span></p>
            </motion.div> 

            {/* Banner Video */}
            <motion.video src="/samsung/montage.mp4" 
            className="col-span-full shadow-standard rounded-2xl w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            // whileHover={{scale:1.01}}
            >
            </motion.video>


            {/* Blurb */}
            <div className="col-span-full sm:col-span-4 lg:mr-16 ">
                <motion.div className="text-2xl lg:text-4.5xl font-base tracking-tight text-center leading-7 md:leading-11 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                Content Creation for Samsung's Lifestyle Display's global social platforms. 
                </motion.div>
            </div>

            {/* Project Details */}
            <div className="flex flex-row col-span-full sm:col-span-2 px-8 sm:px-0 justify-between font-mono text-xs tracking-tight ">
                <motion.div variants={animateInChild}>
                    Role
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>Art Direction</li>
                        <li>Motion Design</li>
                        <li>Video Editing</li>
                        
                    </ol>
                </motion.div>
                <motion.div variants={animateInChild}>
                    Client
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>Samsung</li>
                    </ol>
                </motion.div>
                <motion.div variants={animateInChild}>
                    Agency
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>BBH Singapore</li>
                    </ol>
                </motion.div>
            </div>

            <div className="col-span-full mb-3 md:mb-8 mt-20">
                <h1 className="text-2xl md:text-5xl font-script -rotate-1 text-center md:text-left tracking-tighter">CES <span className='font-script2 text-5xl md:text-8xl tracking-tighter'>2020</span></h1>
                <h2 className='font-medium tracking-tight w-full text-center md:text-left hidden md:block'>On site social coverage of Samsung’s Visual display’s new releases and technology at CES 2020 in Las Vegas.</h2>
                <h2 className='font-medium tracking-tight w-full text-center md:text-left hidden md:block'>Content produced involved short form video series distributed on Facebook and Instagram feed, day to day event coverage on Instagram stories and long form event recap videos for Youtube.</h2>
            </div>

            <div className='col-span-full grid grid-cols-2 md:grid-cols-6 gap-1.5 lg:gap-2 mb-16 md:mb-20 px-1 md:px-4'>  
                <video
                    src='/samsung/ces_1.mp4'
                    className="shadow rounded-xl md:rounded-2xl object-cover col-span-full w-full scale-102"
                    autoPlay loop muted controls playsInline
                ></video>
            </div>

            <div className="col-span-full mb-3 md:mb-10">
                <h1 className="text-3xl md:text-5xl font-script -rotate-1 text-center md:text-left tracking-tighter">The Frame</h1>
            </div>

            <div className='col-span-full grid grid-cols-2 md:grid-cols-6 gap-1.5 lg:gap-2 mb-16 md:mb-20 px-1 md:px-4'>  
                <video
                    src='/samsung/frame_1.mp4'
                    className="shadow rounded-xl md:rounded-2xl object-cover col-span-full w-full scale-102"
                    autoPlay loop muted controls playsInline
                ></video>
            </div>

            <div className="col-span-full mb-3 md:mb-8">
                <h1 className="text-2xl md:text-4xl font-script -rotate-1 text-center md:text-left tracking-tighter">Why Would You Do That ?!</h1>
                <h2 className='font-medium tracking-tight w-full text-center md:text-left hidden md:block mt-8'>A video promoting the features of pairing a Samsung Soundbar with a Samsung TV, executed in a tongue-in-cheek manner.</h2>
                <h2 className='font-medium tracking-tight w-full text-center md:text-left hidden md:block'>Adapted in both 16:9 and 4:5 for YouTube, Facebook and Instagram.</h2>
            </div>

            <div className='col-span-full grid grid-cols-2 md:grid-cols-6 gap-1.5 lg:gap-2 mb-16 md:mb-20 px-1 md:px-4'>  
                <video
                    src='/samsung/soundbar_1.mp4'
                    className="shadow rounded-xl md:rounded-2xl object-cover col-span-full w-full scale-102"
                    autoPlay loop muted controls playsInline
                ></video>
            </div>

            

            
            

            

        </motion.div>
    )

}