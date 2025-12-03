// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"
import Image from 'next/image';
import ProjectHeader from '../common/ProjectHeader';
import { useBrowser } from '../../context/BrowserContext';

export default function Ghibli({className=""}) {

const backgroundGlowRef=useRef(null);
const bannerVideoRef=useRef(null);
const { browserType } = useBrowser();
const isChrome = browserType === 'chrome';

useEffect(() => {
    if (!isChrome) return;
    
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
  }, [isChrome]);


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
        <motion.div className={`grid grid-cols-6 gap-2 -mt-8 max-w-screen overflow-x-hidden
            sm:gap-3 font-[family-name:var(--font-geist-sans)] md:pt-6 ${className}`}
            initial="hidden"
            animate="show"
            variants={animateIn}>
                
            
                
                {/* Background Glow */}
                {isChrome && (
                <video 
                ref={backgroundGlowRef}
                src="/Ghibli/banner1.mp4" 
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
                title="The World of Studio Ghibli"
                subtitle="Marketing campaign for"
                subtitleBrand="ArtScience Museum"
                />

                {/* Banner Video */}
                <motion.video 
                ref={bannerVideoRef}
                src="/Ghibli/banner1.mp4" 
                className="col-span-full shadow-standard rounded-3xl w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-8"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/ghiblibest.jpeg'
                // whileHover={{scale:1.01}}
                >
                </motion.video>

                {/* Blurb */}
                <div className="col-span-full sm:col-span-4 lg:mr-16 ">
                    <motion.div className="text-2xl lg:text-3xl font-medium tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                    Be spirited away into the magical scenes from iconic films through immersive theatrical sets, whimsical art installations and more.​
                    </motion.div>
                </div>

                {/* Project Details */}
                <div className="flex flex-row col-span-full sm:col-span-2 px-5 sm:px-0 justify-between font-mono text-xs tracking-tight ">
                    <motion.div variants={animateInChild}>
                        Role
                        <ol className="mt-2 text-sm flex-1 font-sans font-normal normal-case tracking-tight">
                            <li>Creative Direction</li>
                            <li>Visual Design</li>
                        </ol>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                        Brand
                        <ol className="mt-2 text-sm flex-1 font-sans font-normal normal-case tracking-tight">
                            <li>ArtScience Museum</li>
                        </ol>
                    </motion.div>
                    <motion.div variants={animateInChild}>
                        Department
                        <ol className="mt-2 text-sm flex-1 font-sans font-normal normal-case tracking-tight">
                            <li>In-house Marketing</li>
                        </ol>
                    </motion.div>
                </div>

                {/* Writeup */}
                <div className="flex flex-col sm:flex-row col-span-full px-5 sm:px-0 gap-10 mt-10 mb-18 md:mr-7">
                    <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                    <p className="mb-2 font-mono text-sm "></p>
                        <p>An integrated Marketing campaign for the first official Studio Ghibli exhibition in Singapore, and one of the largest exhibitions to be shown at ArtScience Museum, transforming 11 galleries spanning two levels. The World of Studio Ghibli is organised by ArtScience Museum under the license of award-winning animation powerhouse Studio Ghibli.</p>
                    </motion.div>

                    <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                    <p className="mb-2 font-mono text-sm "></p>
                        <p>I provided creative direction over the campaign for the exhibition as the Creative Lead. This involved designing the Key Visual for the exhibition through multiple iterations, oversight on the marketing deliverables, and facilitated collaboration with both the museum and curatorial team, internal stakeholders and external marketing partners.</p>
                    </motion.div>
                    
                    <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                    <p className="mb-2 font-mono text-sm "></p>
                        <p>Deliverables spanned a massive spectrum from On-property Banners, Digital Signages, Posters, Exhibition Guides. Merchandise to Digital OOH, Cinema pre-roll ads, In-cabin train OOHs and marketing partner with Klook as a platform.</p>
                    </motion.div>
                    
                </div>

                <motion.div className='col-span-full mt-0 grid grid-cols-3 gap-1.5 md:gap-2' variants={animateInChild}>
   
                    <div className="col-span-full mb-12 md:mt-32">
                        <h1 className="text-4xl md:text-6xl text-center md:text-left tracking-[-2pt] font-medium">
                            Key visuals
                        </h1>
                    </div>

                    <div className="col-span-full flex gap-1 md:gap-1.5 w-full h-auto">
                        {/* Image Wrapper */}
                        <div className="w-1/2">
                            <Image
                                src="/Ghibli/KV.jpg"
                                alt=""
                                className="rounded-3xl object-cover h-full"
                                layout="responsive"
                                width={500}
                                height={600}
                            />
                        </div>

                        {/* Video Element */}
                        <div className="w-1/2 h-full">
                            <video
                                src="/Ghibli/KVanimated.mp4"
                                className="rounded-3xl object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            ></video>
                        </div>
                    </div>

                    {/* Mobile KVs */}
                    <div className="col-span-full grid grid-cols-2 gap-1 md:gap-1.5 mb-8 md:hidden">
                        <div className="col-span-2">
                            <Image
                            src="/Ghibli/kv1.jpg"
                            alt=""
                            className="rounded-2xl object-cover"
                            layout="responsive"
                            width={500}
                            height={500}
                            />
                        </div>
                        <div className="col-span-1">
                            <Image
                            src="/Ghibli/kv2.jpg"
                            alt=""
                            className="rounded-2xl object-cover"
                            layout="responsive"
                            width={500}
                            height={500}
                            />
                        </div>
                        <div className="col-span-1">
                            <Image
                            src="/Ghibli/kv3.jpg"
                            alt=""
                            className="rounded-2xl object-cover"
                            layout="responsive"
                            width={500}
                            height={500}
                            />
                        </div>
                        <div className="col-span-1">
                            <Image
                            src="/Ghibli/kv4.jpg"
                            alt=""
                            className="rounded-2xl object-cover"
                            layout="responsive"
                            width={500}
                            height={500}
                            />
                        </div>
                        <div className="col-span-1">
                            <Image
                            src="/Ghibli/kv5.jpg"
                            alt=""
                            className="rounded-2xl object-cover"
                            layout="responsive"
                            width={500}
                            height={500}
                            />
                        </div>
                        
                    </div>

                    {/* Desktop KVs */}
                    <div className="col-span-full grid-cols-5 gap-1 md:gap-1.5 mb-8 hidden md:grid mt-8">
                        <div className="col-span-1">
                            <Image
                            src="/Ghibli/kv1.jpg"
                            alt=""
                            className="rounded-2xl object-cover"
                            layout="responsive"
                            width={500}
                            height={500}
                            />
                        </div>
                        <div className="col-span-1">
                            <Image
                            src="/Ghibli/kv2.jpg"
                            alt=""
                            className="rounded-2xl object-cover"
                            layout="responsive"
                            width={500}
                            height={500}
                            />
                        </div>
                        <div className="col-span-1">
                            <Image
                            src="/Ghibli/kv3.jpg"
                            alt=""
                            className="rounded-2xl object-cover"
                            layout="responsive"
                            width={500}
                            height={500}
                            />
                        </div>
                        <div className="col-span-1">
                            <Image
                            src="/Ghibli/kv4.jpg"
                            alt=""
                            className="rounded-2xl object-cover"
                            layout="responsive"
                            width={500}
                            height={500}
                            />
                        </div>
                        <div className="col-span-1">
                            <Image
                            src="/Ghibli/kv5.jpg"
                            alt=""
                            className="rounded-2xl object-cover"
                            layout="responsive"
                            width={500}
                            height={500}
                            />
                        </div>
                        
                    </div>


                    <Image
                        src="/Ghibli/lobby.jpg"
                        alt=""
                        className="rounded-3xl col-span-3 object-cover mb-8"
                        layout="responsive"
                        width={50}
                        height={10}
                    />

                    <Image
                        src="/Ghibli/itsnicethat.jpg"
                        alt=""
                        className="rounded-3xl col-span-3 object-cover mb-8"
                        layout="responsive"
                        width={50}
                        height={10}
                    />

                    <Image
                        src="/Ghibli/facadeartwork.jpg"
                        alt=""
                        className="rounded-3xl col-span-3 object-cover"
                        layout="responsive"
                        width={50}
                        height={10}
                    />

                    <div className="col-span-full flex gap-1.5 md:gap-2 w-full mb-8">

                        <motion.video 
                        src="/Ghibli/facade.mp4" 
                        className="w-1/2 rounded-3xl object-cover"
                        autoPlay muted loop playsInline
                        variants={animateInChild}
                        // whileHover={{scale:1.01}}
                        ></motion.video>

                        <div className="w-1/2 relative">
                            <Image
                            src="/Ghibli/facade.jpg"
                            alt=""
                            className="rounded-3xl object-cover mb-8"
                            layout="fill"
                            />
                        </div>
                        
                    </div>

                    <motion.video 
                    src="/Ghibli/mrtentrance.mp4" 
                    className="col-span-full shadow-standard rounded-3xl w-full lg:w-full lg:h-auto object-cover mt-8"
                    autoPlay muted loop playsInline
                    variants={animateInChild}
                    // whileHover={{scale:1.01}}
                    ></motion.video>
                    <motion.video 
                    src="/Ghibli/cinema.mp4" 
                    className="col-span-full shadow-standard rounded-3xl w-full lg:w-full lg:h-auto object-cover"
                    autoPlay muted loop playsInline
                    variants={animateInChild}
                    // whileHover={{scale:1.01}}
                    ></motion.video>
                    
                </motion.div>
                       
        </motion.div>
    )

}