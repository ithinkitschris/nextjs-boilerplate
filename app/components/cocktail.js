// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"

export default function Cocktail({className=""}) {

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
            src="/Cocktail/montagelow.mp4" 
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
                

                <h1 className="text-7xl md:text-8xl text-center md:text-left font-medium tracking-tighter leading-tighter -ml-2">Cocktail Conversations</h1>

                {/* Subheader */}
                <p className="text-xl md:text-3xl font-normal tracking-[-0.9px] mt-4 md:mt-0 md:text-[27px] text-center md:text-left">
                Brand campaign for <span className='relative font-script left-2 top-1 text-[18pt]'>Singapore Airlines</span></p>
            </motion.div> 

            {/* Banner Video */}
            <motion.video src="/Cocktail/montagelow.mp4" 
            className="col-span-full shadow-standard rounded-3xl w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/cocktailpage.jpeg'
            // whileHover={{scale:1.01}}
            >
            </motion.video>

            {/* Blurb */}
            <div className="col-span-full sm:col-span-4 lg:mr-16 ">
                <motion.div className="text-2xl lg:text-3xl font-medium tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                If there was a drink to match every personality, how would your bespoke Cocktail look and taste like? 
                </motion.div>
            </div>

            {/* Project Details */}
            <div className="flex flex-row col-span-full sm:col-span-2 px-8 sm:px-0 justify-between font-mono text-xs tracking-tight ">
                <motion.div variants={animateInChild}>
                    Role
                    <ol className="mt-2 text-sm font-sans font-normal normal-case tracking-tight">
                        <li>Creative Direction</li>
                        <li>Motion Design</li>
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
            <div className="flex flex-col sm:flex-row col-span-full px-8 sm:px-0 gap-10 mt-8 mb-14 md:mr-7">
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm "></p>
                <p className="mb-3">The Flagship SilverKris Lounge at Singapore Changi Airport Terminal 3 was rebuilt from ground up and opened in 2022.</p>
                <p>Post-launch, there was a need for a sustenance campaign for the lounge. One that would showcase not only its class-leading interior design but also most importantly, its meticulous service.</p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm "></p>
                <p className="mb-3">Featuring a blend of notable customers & personalities who pass through the lounge, each episode stars a different guest where we learn about their craft and travel preferences.</p> 
                <p>Through curated rapid-fire questions, the bartenders at the Crystal Bar then concoct bespoke Cocktails named after them based on their answers.</p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm "></p>
                <p>The bespoke Cocktails were available to order by any patron of the Crystal Bar the month following the episode, and recipe videos were edited and uploaded as content on social platforms.</p>
                </motion.div>

                {/* <motion.div className="tracking-tight sm:w-1/4" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm ">Personally...</p>
                <p>This was a campaign where I oversaw the conceptualisation and overall Art Direction. All Motion Graphics and title sequences in the episodes were both designed and animated by me and passed to the production team for the final masters.
                The sustenance Cocktail recipe videos for social platforms were also edited on my end.</p>
                </motion.div> */}
            </div>

            <div className="col-span-full mt-40 mb-8">
                <h1 className="text-4xl md:text-6xl text-center md:text-left tracking-[-2pt] font-medium">Motion Design</h1>
            </div>

            <h1 className="font-base text-base md:text-[16pt] font-medium mb-2 col-span-full text-center md:text-left tracking-tight">Title Sequence</h1>
            
            <video
                src='/Cocktail/titlesequence.mp4'
                className="shadow rounded-3xl object-cover col-span-6 md:col-span-6 2xl:col-span-full w-full"
                autoPlay
                loop
                muted
                controls
                playsInline
            ></video>

            <h1 className="font-base text-base md:text-2xl font-medium mb-1 mt-20 col-span-full text-center md:text-left tracking-tight">Cocktails</h1>

            <div className="col-span-full flex flex-wrap gap-1.5 mb-8 lg:gap-2">
                <video
                    src='/Cocktail/drink2.mp4'
                    className="shadow rounded-2xl object-cover h-auto flex-1 min-w-[49%] lg:min-w-[24%]"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                <video
                    src='/Cocktail/drink3.mp4'
                    className="shadow rounded-2xl object-cover h-auto flex-1 min-w-[49%] lg:min-w-[24%]"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                <video
                    src='/Cocktail/drink4.mp4'
                    className="shadow rounded-2xl object-cover h-auto flex-1 min-w-[49%] lg:min-w-[24%]"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                <video
                    src='/Cocktail/drink5.mp4'
                    className="shadow rounded-2xl object-cover h-auto flex-1 min-w-[49%] lg:min-w-[24%]"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
            </div>

            <div className="col-span-full mt-44 mb-8 md:mb-18">
                <h1 className="text-4xl md:text-6xl text-center md:text-left tracking-[-2pt] font-medium">Episodes</h1>
            </div>

            <div className="grid grid-cols-6 col-span-full mb-3 xl:mb-5 gap-0 md:gap-6">
                
                    <div className="col-span-6 md:col-span-2 lg:col-span-2 2xl:col-span-1 flex flex-col relative">
                        <div className="text-xl tracking-tight mb-2 md:mb-4 leading-7 md:mr-10 text-center md:text-left mt-4 md:mt-0">
                            <h1 className="font-medium mb-1">Episode 2: <span className="md:hidden ml-1 text-base font-script">Matt Moran</span></h1>
                            <h2 className="hidden md:block font-script tracking-wide -rotate-1 text-base md:text-xl md:tracking-tight">Matt Moran</h2>
                        </div>

                        <h3 className="text-sm font-normal md:mr-10 text-center md:text-left px-10 md:px-0 mb-3 md:mb-0">
                        Matthew pays a visit to our flagship Crystal Bar and shares his food philosophy and take on local Singaporean food. 
                        </h3>

                        <h3 className="text-sm md:mr-10 text-center md:text-left px-10 md:px-0 mb-6 md:mb-0 mt-2">
                        Watch it
                        <a href="https://www.youtube.com/watch?v=RMyGwODz048" 
                        className="px-1.5 border-1 border-foreground rounded-full ml-1.5 hover:bg-foreground hover:text-background"
                        target="blank">here</a>
                        </h3>

                    </div>

                    <video
                        src='/Cocktail/episode2.mp4'
                        className="shadow rounded-3xl object-cover col-span-6 md:col-span-4 lg:col-span-4 2xl:col-span-5 w-full"
                        autoPlay
                        loop
                        muted 
                        controls
                        playsInline
                    ></video>

                    <div className="col-span-6 md:col-span-2 lg:col-span-2 2xl:col-span-1 mt-4 flex flex-col">
                        <div className="text-xl tracking-tight mb-2 md:mb-4 leading-7 md:mr-10 text-center md:text-left mt-4 md:mt-0">
                          <h1 className="font-medium mb-1">Episode 3: <span className="md:hidden ml-1 text-sm font-script">HONNE</span></h1>
                          <h2 className="hidden md:block font-script tracking-wide -rotate-1 text-base md:text-xl md:tracking-tight">HONNE</h2>
                        </div>

                        <h3 className="text-sm font-normal md:mr-10 text-center md:text-left px-5 md:px-0 mb-3 md:mb-0">
                        It&apos;s not every day that a multi-platinum music duo walks into our flagship Crystal Bar. Tune in with HONNE as they chat with us about their craft and how travel inspires their music.
                        </h3>

                        <h3 className="text-sm md:mr-10 text-center md:text-left px-10 md:px-0 mb-6 md:mb-0 mt-2">
                        Watch it
                        <a href="https://www.youtube.com/watch?v=KiWDGCULcV4" 
                        className="px-1.5 border-1 border-foreground rounded-full ml-1.5 hover:bg-foreground hover:text-background"
                        target="blank">here</a>
                        </h3>
                    </div>

                    <video
                        src='/Cocktail/episode3.mp4'
                        className="shadow rounded-3xl object-cover col-span-6 md:col-span-4 lg:col-span-4 2xl:col-span-5 w-full"
                        autoPlay
                        loop
                        muted
                        controls
                        playsInline
                    ></video>

                    <div className="col-span-6 md:col-span-2 lg:col-span-2 2xl:col-span-1 mt-4 flex flex-col">
                        <div className="text-xl tracking-tight mb-2 md:mb-4 leading-7 md:mr-10 text-center md:text-left mt-4 md:mt-0">
                            <h1 className="font-medium mb-1">Episode 4: <span className="md:hidden ml-1 text-base font-script">Danielle Kang</span></h1>
                            <h2 className="hidden md:block font-script tracking-wide -rotate-1 text-base md:text-xl md:tracking-tight">Danielle Kang</h2>
                        </div>

                        <h3 className="text-sm font-normal md:mr-10 text-center md:text-left px-8 md:px-0 mb-3 md:mb-0">
                        In episode 4 of Cocktail Conversations, we had a tee-rific time chatting with professional golfer Danielle Kang where she shares her love of golf and travel. 
                        </h3>

                        <h3 className="text-sm md:mr-10 text-center md:text-left px-10 md:px-0 mb-6 md:mb-0 mt-2">
                        Watch it
                        <a href="https://www.youtube.com/watch?v=aGnyJamxpxg" 
                        className="px-1.5 border-1 border-foreground rounded-full ml-1.5 hover:bg-foreground hover:text-background"
                        target="blank">here</a>
                        </h3>
                    </div>

                    <video
                        src='/Cocktail/episode4.mp4'
                        className="shadow rounded-3xl object-cover col-span-6 md:col-span-4 lg:col-span-4 2xl:col-span-5 w-full"
                        autoPlay
                        loop
                        muted
                        controls
                        playsInline
                    ></video>   

                    <div className="col-span-6 md:col-span-2 lg:col-span-2 2xl:col-span-1 mt-4 flex flex-col">
                        <div className="text-xl tracking-tight mb-2 md:mb-4 leading-7 md:mr-10 text-center md:text-left mt-4 md:mt-0">
                            <h1 className="font-medium mb-1">Episode 5: <span className="md:hidden ml-1 text-base font-script">Jeannie Cho Lee</span></h1>
                            <h2 className="hidden md:block font-script tracking-wide -rotate-1 text-base md:text-xl md:tracking-tight">Jeannie Cho Lee</h2>
                        </div>

                        <h3 className="text-sm font-normal md:mr-10 text-center md:text-left px-10 md:px-0 mb-3 md:mb-0">
                        Raise your glass to our latest episode of Cocktail Conversations, where we have an exclusive chat about wine and travel with our Wine Consultant, Jeannie Cho Lee. ​
                        </h3>

                        <h3 className="text-sm md:mr-10 text-center md:text-left px-10 md:px-0 mb-6 md:mb-0 mt-2">
                        Watch it
                        <a href="https://www.youtube.com/watch?v=WhUwFR-KN9w" 
                        className="px-1.5 border-1 border-foreground rounded-full ml-1.5 hover:bg-foreground hover:text-background"
                        target="blank">here</a>
                        </h3>
                    </div>

                    <video
                        src='/Cocktail/episode5.mp4'
                        className="shadow rounded-3xl object-cover col-span-6 md:col-span-4 lg:col-span-4 2xl:col-span-5 w-full mb-40"
                        autoPlay
                        loop
                        muted
                        controls
                        playsInline
                    ></video>   
                </div>

                 
        </motion.div>
    )

}