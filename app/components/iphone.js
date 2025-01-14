// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"

export default function Iphone({className=""}) {

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
            src="/uniqlo1/video.mp4" 
            className="absolute mt-20 w-screen h-screen/1.2 object-cover rounded-full -z-10 
            opacity-0 dark:opacity-50 -ml-4 blur-3xl saturate-200"
            autoPlay 
            muted 
            loop controls
            playsInline
            ></video>
            
            {/* Header */}
            <motion.div 
            className="tracking-tighter col-span-full mt-8 md:mt-6 mb-8 md:mb-8"
            variants={animateInChild}>
                

                <h1 className=" text-[65px] md:text-8xl text-center font-medium md:font-normal 
                md:text-left tracking-tighter leading-tighter -ml-2">iPhone 15 Pro</h1>

                {/* Subheader */}
                <p className="text-xl md:text-3xl font-base tracking-tight mt-4 md:mt-0.5 md:text-[27px] -ml-1 text-center md:text-left">
                3D Motion Design<span className='font-script -rotate-1 relative left-2 top-1'>explorations</span></p>
            </motion.div> 

            {/* Banner Video */}

            <motion.video src="/iphone/full.mp4" 
            className="md:hidden col-span-full shadow-standard rounded-lg w-full h-[600px] object-cover"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            >
            </motion.video>

            <motion.video src="/iphone/1.mp4" 
            className="hidden md:block col-span-2 shadow-standard rounded-lg w-full h-screen/2 lg:w-full lg:h-full object-cover md:mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            >
            </motion.video>

            <motion.video src="/iphone/5.mp4" 
            className="hidden md:block col-span-2 shadow-standard rounded-lg w-full h-screen/2 lg:w-full lg:h-full object-cover md:mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            >
            </motion.video>

            <motion.video src="/iphone/2.mp4" 
            className="hidden md:block col-span-2 shadow-standard rounded-lg w-full h-screen/2 lg:w-full lg:h-full object-cover md:mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            >
            </motion.video>


            {/* Blurb */}
            <div className="col-span-full sm:col-span-4 lg:mr-16 mt-8 md:mt-12">
                <motion.div className="text-2xl lg:text-4xl lg:w-5/6 font-base tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                A personal exercise in modelling and product visualisation techniques with the iPhone 15 Pro in Blender.
                </motion.div>
            </div>

            {/* Project Details */}
            <div className="md:flex flex-row col-span-full sm:col-span-2 px-8 sm:px-0 justify-between font-mono text-xs tracking-tight mt-12 hidden">
                <motion.div variants={animateInChild}>
                    Role
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                       
                        <li>Personal Exploration</li>
                        
                    </ol>
                </motion.div>
                
                
            </div>

            {/* Writeup */}
            {/* <div className="flex flex-col sm:flex-row col-span-full px-8 sm:px-0 gap-4 md:gap-10 mt-8 md:mr-7">
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm "></p>
                <p className="mb-3">As part of the launch of the first Uniqlo flagship store in Singapore at Orchard Central, I was tasked to both design and animate a set of transitions for the in-store panoramic displays.</p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm "></p>
                <p className="mb-3">The displays were primarily utilised to showcase photos and outfit shots submitted by the public through the hashtag #yourstagenowlive on Uniqlo Singapore&apos;s social media platforms. </p> 
                </motion.div>

                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm "></p>
                <p className="mb-3">The displays looped a 4 minute long video that followed a format of 4 different sets of images collaged together. While graphic transitions served as intermissions between the sets.</p> 
                </motion.div>
            </div> */}

            <div className='col-span-full grid grid-cols-2 md:grid-cols-6 gap-1.5 md:gap-3 md:mt-20'>
                <motion.video src="/iphone/orbit1.mp4" 
                className="col-span-1 md:col-span-2 shadow-standard rounded-lg w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/orbit2.mp4" 
                className="col-span-1 md:col-span-2 shadow-standard rounded-lg w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/orbit3.mp4" 
                className="col-span-2 shadow-standard rounded-lg w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>
            </div>

            <div className='col-span-full grid grid-cols-4 md:grid-cols-8 gap-1.5 md:gap-2 mb-20'>

                <motion.video src="/iphone/3.mp4" 
                className="col-span-2 shadow-standard rounded-lg w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/4.mp4" 
                className="col-span-2 shadow-standard rounded-lg w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/6.mp4" 
                className="col-span-2 shadow-standard rounded-lg w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/8.mp4" 
                className="col-span-2 shadow-standard rounded-lg w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/lightup1.mp4" 
                className="col-span-2 shadow-standard rounded-lg w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/lightup2.mp4" 
                className="col-span-2 shadow-standard rounded-lg w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/throw1.mp4" 
                className="col-span-2 shadow-standard rounded-lg w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/throw.mp4" 
                className="col-span-2 shadow-standard rounded-lg w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

            </div>

            

        

        </motion.div>
    )

}