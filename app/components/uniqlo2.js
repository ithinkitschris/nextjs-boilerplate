// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"
import ProjectHeader from './common/ProjectHeader';

export default function Uniqlo2({className=""}) {

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
        
        <motion.div className={`grid grid-cols-6 gap-2 overflow-x-hidden
            sm:gap-3 max-w-full -mt-8 font-[family-name:var(--font-geist-sans)] ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>

            {/* Background Glow */}
            <video 
            ref={backgroundGlowRef}
            src="/uniqlo2/cover.mp4" 
            className="absolute mt-20 w-screen h-screen/1.2 object-cover rounded-full -z-10 
            opacity-0 dark:opacity-50 blur-3xl saturate-200 overflow-x-hidden"
            autoPlay 
            muted 
            loop controls
            playsInline
            ></video>
            
            <ProjectHeader 
                title="New Style Fresh Start"
                subtitle="Motion Design for"
                subtitleBrand="Uniqlo"
            />

            {/* Mobile Banner Video */}
            <motion.video src="/uniqlo2/cover.mp4" 
            className="md:hidden col-span-full shadow-standard rounded-lg w-full h-screen/2 lg:w-full lg:h-[600px] object-cover mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            >
            </motion.video>

            {/* Desktop Banner Video */}
            <motion.video src="/uniqlo2/social2.mp4" 
            className="hidden md:block col-span-2 shadow-standard rounded-lg h-auto w-full object-cover mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            >
            </motion.video>

            <motion.video src="/uniqlo2/social3.mp4" 
            className="hidden md:block col-span-2 shadow-standard rounded-lg h-auto w-full object-cover mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            >
            </motion.video>

            <motion.video src="/uniqlo2/social4.mp4" 
            className="hidden md:block col-span-2 shadow-standard rounded-lg h-auto w-full object-cover mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            >
            </motion.video>


            {/* Blurb */}
            <div className="col-span-full sm:col-span-4 lg:mr-16 ">
                <motion.div className="text-2xl lg:text-4xl lg:w-5/6 font-base tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                A set of videos produced for Uniqlo South East Asia&apos;s Chinese New Year promotion. 
                </motion.div>
            </div>

            {/* Project Details */}
            <div className="flex flex-row col-span-full sm:col-span-2 px-8 sm:px-0 justify-between font-mono text-xs tracking-tight ">
                <motion.div variants={animateInChild}>
                    Role
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>Motion Design</li>
                        
                    </ol>
                </motion.div>
                <motion.div variants={animateInChild}>
                    Client
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>Uniqlo</li>
                    </ol>
                </motion.div>
                <motion.div variants={animateInChild}>
                    Agency
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>Kinetic Singapore</li>
                    </ol>
                </motion.div>
            </div>

            {/* Writeup */}
            <div className="flex flex-col sm:flex-row col-span-full px-8 sm:px-0 gap-4 md:gap-10 mt-8 md:mr-7">
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm "></p>
                <p className="mb-3">3 sets of videos were produced at 3 different resolutions for the various displays across stores in Singapore and Malaysia.</p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm "></p>
                <p className="mb-3">A set of videos with 3 different versions were also produced for Social Media coverage on both Instagram and Facebook for a span of 3 weeks, with 1 version for each corresponding week.</p> 
                </motion.div>

            </div>

            <div className="col-span-full mb-6 md:mb-12 mt-12">
                <h1 className="text-4xl md:text-5xl font-script -rotate-3 text-center md:text-left tracking-tighter">Portrait</h1>
            </div>

            <div className='col-span-full grid grid-cols-3 gap-1.5 lg:gap-2 mb-20'>

                <video src='/uniqlo2/1280-x-2880-Cover.mp4' className='w-full col-span-1 rounded md:rounded-lg' autoPlay loop muted playsInline/>
                <video src='/uniqlo2/1280-x-2880-End.mp4' className='w-full col-span-1 rounded md:rounded-lg' autoPlay loop muted playsInline/>
                <video src='/uniqlo2/1280-x-2880-insitu.mp4' className='w-full col-span-1 rounded md:rounded-lg' autoPlay loop muted playsInline/>
                
            </div>

            {/* <div className="col-span-full mb-3 md:mb-8 md:mt-28">
                <h1 className="text-3xl md:text-5xl font-script -rotate-1 text-center md:text-left tracking-tighter">Portrait</h1>
            </div>

            <div className='col-span-full grid grid-cols-3 md:grid-cols-6 gap-1.5 lg:gap-2 mb-20'>

                <video src='/uniqlo2/1080-x-1920-Cover.mp4' className='w-full col-span-1 rounded md:rounded-lg' autoPlay loop muted playsInline/>
                <video src='/uniqlo2/1080-x-1920-Mid.mp4' className='w-full col-span-1 rounded md:rounded-lg' autoPlay loop muted playsInline/>
                <video src='/uniqlo2/1080-x-1920-End.mp4' className='w-full col-span-1 rounded md:rounded-lg' autoPlay loop muted playsInline/>
                
            </div> */}

            <div className="col-span-full mb-6 md:mb-12">
                <h1 className="text-4xl md:text-5xl font-script -rotate-3 text-center md:text-left tracking-tighter">Landscape</h1>
            </div>

            <div className='col-span-full grid grid-cols-2 gap-1.5 lg:gap-2 mb-20'>

                <video src='/uniqlo2/1920-x-1080-Cover.mp4' className='w-full col-span-1 rounded md:rounded-lg' autoPlay loop muted playsInline/>
                <video src='/uniqlo2/1920-x-1080-End.mp4' className='w-full col-span-1 rounded md:rounded-lg' autoPlay loop muted playsInline/>
                <video src='/uniqlo2/1920-x-1080-Insitu.mp4' className='w-full col-span-full rounded md:rounded-lg' autoPlay loop muted playsInline/>
                
            </div>

            <div className="col-span-full mb-6 md:mb-12">
                <h1 className="text-4xl md:text-5xl font-script -rotate-3 text-center md:text-left tracking-tighter">In-Store</h1>
            </div>

            <div className='col-span-full grid grid-cols-2 gap-1.5 lg:gap-2 mb-20'>

                <img src='/uniqlo2/insitu1.jpg' className='w-full col-span-1 rounded md:rounded-lg'/>
                <img src='/uniqlo2/insitu2.jpg' className='w-full col-span-1 rounded md:rounded-lg'/>
                <img src='/uniqlo2/insitu3.jpg' className='w-full col-span-full rounded md:rounded-lg object-cover'/>
               
            </div>

            <div className="col-span-full mb-6 md:mb-12">
                <h1 className="text-4xl md:text-5xl font-script -rotate-3 text-center md:text-left tracking-tighter">Social</h1>
            </div>

            <div className='col-span-full grid grid-cols-2 md:grid-cols-3 gap-1.5 lg:gap-2 mb-20'>

                <video src='/uniqlo2/social1.mp4' className='w-full col-span-full md:col-span-1 rounded md:rounded-lg h-[700px] md:h-[980px] object-cover' autoPlay loop muted playsInline/>
                
                <div className='col-span-2 grid grid-cols-2 gap-2'>
                    <video src='/uniqlo2/social2.mp4' className='w-full col-span-1 rounded md:rounded-lg' autoPlay loop muted playsInline/>
                    <video src='/uniqlo2/social3.mp4' className='w-full col-span-1 rounded md:rounded-lg' autoPlay loop muted playsInline/>
                    <video src='/uniqlo2/social5.mp4' className='w-full col-span-1 rounded md:rounded-lg' autoPlay loop muted playsInline/>
                    <video src='/uniqlo2/social4.mp4' className='w-full col-span-1 rounded md:rounded-lg' autoPlay loop muted playsInline/>
                </div>
                
            </div>

        </motion.div>
    )

}