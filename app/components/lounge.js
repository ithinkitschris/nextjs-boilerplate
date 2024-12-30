// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"
import Image from 'next/image';

export default function Lounge({className="", isMobile}) {
    
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
            src="/lounge/film_1.mp4" 
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
                md:text-left tracking-tighter leading-tighter -ml-2">SilverKris Lounge</h1>

                {/* Subheader */}
                <p className="text-xl md:text-3xl font-base tracking-tight mt-4 md:mt-0 md:text-[27px] -ml-1 text-center md:text-left">
                Brand Campaign for <span className='font-script -rotate-1 relative left-1.5 top-1'>Singapore Airlines</span></p>
            </motion.div> 

            {/* Banner Video */}
            <motion.video 
            ref={bannerVideoRef}
            src="/lounge/film_1.mp4" 
            className="col-span-full shadow-standard rounded-lg w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-8"
            autoPlay muted loop controls playsInline
            variants={animateInChild}
            poster='/poster/loungepage.jpeg'
            >
            </motion.video>

            {/* Blurb */}
            <div className="col-span-full sm:col-span-4 lg:mr-16 ">
                <motion.div className="text-2xl lg:text-3xl font-base tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                An all-encompassing Brand Campaign spanning two years and multiple briefs for Singapore Airline’s brand new flagship SilverKris Lounges at Changi Airport Terminal 3.
                </motion.div>
            </div>

            {/* Project Details */}
            <div className="flex flex-row col-span-full sm:col-span-2 px-8 sm:px-0 justify-between font-mono text-xs tracking-tight w-full">
                <motion.div variants={animateInChild}>
                    Role
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>Creative Direction</li>
                        <li>Motion Design</li>
                        <li>Offline & Online Edit</li>
                        <li>Color Grade</li>
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
            <div className="flex flex-col sm:flex-row col-span-full px-8 sm:px-0 gap-5 mt-4 mb-18 md:mb-14 md:mr-7">

                <motion.div className="tracking-tight sm:w-1/4" variants={animateInChild}>
                <div className="md:mb-[26px] font-mono text-sm "></div>
                    
                    <ol className='text-sm font-script'>Film</ol>
                    <ol className='mb-4'>Creative Direction and complete offline, online to final delivery edit of the brand film for the lounge.</ol>

                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/4" variants={animateInChild}>
                <div className="md:mb-[26px] font-mono text-sm "></div>
                    
                    <ol className='text-sm font-script'>Photo Asset Library</ol>
                    <ol className='mb-4'>Creative Direction on the photo asset library shoot for the lounge.</ol>
                   
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/4" variants={animateInChild}>
                <div className="md:mb-[26px] font-mono text-sm "></div>
                  
                    <ol className='text-sm font-script'>Digital Wall</ol>
                    <ol className='mb-4'>Motion Design oversight on the panoramic digital display that served as the backdrop of the entrance of the lounge.</ol>

                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/4" variants={animateInChild}>
                <div className="md:mb-[26px] font-mono text-sm "></div>
                    <ol className='text-sm font-script'>Entrance Facade</ol>
                    <ol className='mb-4'>Brand oversight on an eight-metre long glass installation artwork that served as the facade of the lounge,</ol>

                </motion.div>
            </div>

            <motion.div className='col-span-full mt-0 grid grid-cols-3 gap-1.5 md:gap-2' variants={animateInChild}>

                <div className="col-span-full mb-8 md:mb-18">
                    <h1 className="text-4.5xl md:text-[40px] font-script -rotate-3 text-center md:text-left tracking-tighter">Film</h1>
                </div>

                <h1 className='text-center md:text-left col-span-full tracking-tight text-sm px-4 mb-4'>A brand film centred around the concept of juxtaposing the expansive grandeur of the lounges against fine attention to detail.</h1>
                <Image
                    src="/lounge/board.jpg"
                    alt=""
                    className="rounded-lg col-span-3 object-cover"
                    layout="responsive"
                    width={50}
                    height={10}
                    />

                
                <h1 className="mt-18 mb-8 text-3xl md:text-[35px] col-span-full 
                font-script -rotate-3 text-center md:text-left tracking-tighter">Photo asset library</h1>

                <h1 className='text-center md:text-left col-span-full tracking-tight text-sm px-4 md:px-0 mb-4'>A set of 20 images across the 4 SilverKris Lounges for Singapore Airlines&apos; marketing and communications asset library.</h1>
                
                <div className="col-span-full">
                    <Image
                        src="/lounge/7.jpg"
                        alt=""
                        className="rounded-lg object-cover"
                        layout="responsive"
                        width={50}
                        height={50}
                        />
                </div>

                <div className="col-span-full">
                    <Image
                        src="/lounge/6.jpg"
                        alt=""
                        className="rounded-lg object-cover"
                        layout="responsive"
                        width={50}
                        height={50}
                        />
                </div>

                <div className="col-span-full flex gap-1.5 md:gap-2 w-full">
                    <div className="w-1/2">
                        <Image
                        src="/lounge/3.jpg"
                        alt=""
                        className="rounded-lg object-cover"
                        layout="responsive"
                        width={500}
                        height={500}
                        />
                    </div>
                    <div className="w-1/2">
                        <Image
                        src="/lounge/5.jpg"
                        alt=""
                        className="rounded-lg object-cover"
                        layout="responsive"
                        width={500}
                        height={500}
                        />
                    </div>
                </div>

                <div className="col-span-full">
                    <Image
                        src="/lounge/4.jpg"
                        alt=""
                        className="rounded-lg object-cover"
                        layout="responsive"
                        width={50}
                        height={50}
                        />
                </div>

                <h1 className="mt-18 mb-8 text-3xl md:text-[35px] col-span-full 
                font-script -rotate-3 text-center md:text-left tracking-tighter">Digital Wall</h1>

                <h1 className='text-center md:text-left col-span-full tracking-tight text-sm px-4 md:px-0 mb-4 md:w-5/6'>A seamless looping backdrop to the entrance foyer of the SilverKris Lounges. 
                The Batik Motif is separated into 4 distinct layers and animated to both grow on screen and sway in the wind.</h1>

                <Image
                src="/lounge/entrance.jpg"
                alt=""
                className="rounded-lg col-span-3 object-cover"
                layout="responsive"
                width={50}
                height={10}
                />

                <motion.video 
                src="/lounge/insitu.mp4" 
                className="col-span-full shadow-standard rounded-lg w-full lg:w-full lg:h-auto object-cover mb-6"
                autoPlay muted loop playsInline
                variants={animateInChild}
                // whileHover={{scale:1.01}}
                ></motion.video>

                <h1 className='text-center md:text-left col-span-full font-medium tracking-tight text-sm mb-2'>Peak & Off-peak Variations</h1>

                <motion.video 
                src="/lounge/peak.mp4" 
                className="col-span-full shadow-standard rounded-lg w-full lg:w-full lg:h-auto object-cover"
                autoPlay muted loop playsInline
                variants={animateInChild}
                // whileHover={{scale:1.01}}
                ></motion.video>

                <motion.video 
                src="/lounge/offpeak.mp4" 
                className="col-span-full shadow-standard rounded-lg w-full lg:w-full lg:h-auto object-cover mb-6"
                autoPlay muted loop playsInline
                variants={animateInChild}
                // whileHover={{scale:1.01}}
                ></motion.video>

                <h1 className='text-center md:text-left col-span-full font-medium tracking-tight text-sm mb-2'>Behind the scenes</h1>

                <div className="col-span-full flex gap-1.5 md:gap-2 w-full">
                    <div className="w-1/2">
                        <Image
                        src="/lounge/bts7.jpg"
                        alt=""
                        className="rounded-lg object-cover"
                        layout="responsive"
                        width={500}
                        height={500}
                        />
                    </div>
                    <div className="w-1/2">
                        <Image
                        src="/lounge/bts8.jpg"
                        alt=""
                        className="rounded-lg object-cover"
                        layout="responsive"
                        width={500}
                        height={500}
                        />
                    </div>
                </div>

                

                <h1 className="mt-18 mb-8 text-3xl md:text-[35px] col-span-full 
                font-script -rotate-3 text-center md:text-left tracking-tighter">Entrance Facade</h1>

                <h1 className='text-center md:text-left col-span-full tracking-tight text-sm px-4 md:px-0 mb-4'>An 8 metre long glass installation of Singapore Airline’s Batik Motif serving as the grand facade to the SilverKris Lounge.</h1>

                <Image
                src="/lounge/1.jpg"
                alt=""
                className="rounded-lg col-span-3 object-cover mb-4"
                layout="responsive"
                width={50}
                height={10}
                />

                <h1 className='text-center md:text-left col-span-full font-medium tracking-tight text-sm mb-2'>Behind the scenes</h1>

                <div className="col-span-full flex gap-1.5 md:gap-2 w-full">
                    <div className="w-1/2">
                        <Image
                        src="/lounge/bts1.jpg"
                        alt=""
                        className="rounded-lg object-cover"
                        layout="responsive"
                        width={500}
                        height={500}
                        />
                    </div>
                    <div className="w-1/2">
                        <Image
                        src="/lounge/bts4.jpg"
                        alt=""
                        className="rounded-lg object-cover"
                        layout="responsive"
                        width={500}
                        height={500}
                        />
                    </div>
                </div>

                <div className="col-span-full flex gap-1.5 md:gap-2 w-full">
                    <div className="w-1/2">
                        <Image
                        src="/lounge/bts5.jpg"
                        alt=""
                        className="rounded-lg object-cover"
                        layout="responsive"
                        width={500}
                        height={500}
                        />
                    </div>
                    <div className="w-1/2">
                        <Image
                        src="/lounge/bts6.jpg"
                        alt=""
                        className="rounded-lg object-cover"
                        layout="responsive"
                        width={500}
                        height={500}
                        />
                    </div>
                </div>
            </motion.div>

        </motion.div>
    )
}

