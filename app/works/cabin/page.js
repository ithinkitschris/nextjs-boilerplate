// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"
import Episodes from "@/app/components/episodes-cabin.js";

export default function CabinCrewStories({className="", isMobile}) {
    
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
            src="/CCS/montageglow_1.mp4" 
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
                {/* Mobile-only header */}
                <h1 className="sm:hidden text-7xl text-center font-medium tracking-tighter leading-tighter -ml-2">Beyond<br/>The Cabin</h1>
                {/* Desktop Header */}
                <h1 className="hidden sm:block text-7xl md:text-8xl text-center font-medium md:font-normal 
                md:text-left tracking-tighter leading-tighter -ml-2">Beyond The Cabin</h1>

                {/* Subheader */}
                <p className="text-xl -rotate-1 font-medium font-script tracking-tighter mt-3 
                md:-rotate-1 md:mt-1 md:text-[27px] -ml-1 text-center md:text-left">Brand campaign for Singapore Airlines</p>
            </motion.div> 

            {/* Banner Video */}
            <motion.video 
            ref={bannerVideoRef}
            src="/CCS/montagelow.mp4" 
            className="col-span-full shadow-standard rounded-lg w-full h-screen/2 lg:w-full lg:h-auto object-cover mb-8"
            autoPlay muted loop playsInline
            variants={animateInChild}
            // whileHover={{scale:1.01}}
            >
            </motion.video>

            {/* Blurb */}
            <div className="col-span-full sm:col-span-4 lg:mr-16 ">
                <motion.div className="text-2xl lg:text-3xl font-base tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                6 Cities. 6 Cabin Crew. 6 Passions. <br/>
                Journey beyond the cabin with our cabin crew.
                You see them on board, now follow their travels around the world. 
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
            <div className="flex flex-col sm:flex-row col-span-full px-8 sm:px-0 gap-10 mt-10 mb-14 md:mr-7">
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm ">Why?</p>
                    <p>Singapore Airlines Cabin Crew are commonly seen as being one-dimensional - from misconceptions of misogyny to them being just “servants of the cabin”. As part of the Welcome to World Class brand campaign, we want to dimensionalise Cabin Crew by “freeing” them in their portrayals, going from just “servants of the cabin” to modern, informed and relatable travelers of the world outside of the cabin.</p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm ">How?</p>
                    <p>We create travel guides fronted by our Cabin Crew, who are casted for their expertise in destinations they fly to frequently and are passionate for. Allowing them to showcase a depth of understanding they have for the destinations Singapore Airlines flies to and the unique and novel, experiences of the different destinations through their insights.</p>
                </motion.div>
                
                <motion.div className="tracking-tight sm:w-1/3" variants={animateInChild}>
                <p className="mb-2 font-mono text-sm ">And...</p>
                    <p className="mb-2">This was a campaign that I had the opportunity to oversee from conceptualisation to overall art direction, pre production, shoot, post production and execution of the motion graphics for the opening and end sequences.</p>
                    {/* <p>A 9:16 portrait film for social platforms was also adapted by me from the 16:9 main film for all 6 episodes. Using B-roll footage captured from the shoots, the 9:16 film incorporated a multi panelled approach to certain scenes to ensure the film was still watchable in a vertical format and provided additional content as well as context to the film for social consumption.</p> */}
                </motion.div>
            </div>

            <motion.div className='col-span-full mt-6' variants={animateInChild}>
                <Episodes />
            </motion.div>

            <div className="col-span-full">
                <h1 className="text-4xl font-medium tracking-tighter mt-10 mb-4">Key Visual  &  Motion Design</h1>
            </div>
            <motion.img 
                src="/CCS/End Frame KV.jpg"
                className="col-span-full
                w-full drop-shadow-lg hover:drop-shadow-xl rounded-lg 
                object-cover transition-scale duration-200"
                variants={animateInChild}
                whileHover={{scale:1.01}}>
            </motion.img>
            

            {/* <div className="col-span-full">
                <h1 className="text-4xl font-medium tracking-tighter mt-18 mb-2">Motion Design</h1>
            </div> */}

                <div className="flex flex-col gap-2 col-span-full lg:col-span-3">
                    {/* <h1 className="text-xl tracking-tight">Title Sequence</h1> */}
                    <motion.video
                        src="/CCS/Title Sequence (New York City) 16-9.mp4"
                        className="drop-shadow-lg hover:drop-shadow-xl rounded-lg 
                        object-cover transition-scale"
                        variants={animateInChild}
                        autoPlay loop muted playsInline
                        whileHover={{scale:1.02}}>
                    </motion.video>
                </div>
                <div className="flex flex-col gap-2 col-span-full lg:col-span-3 mb-40">
                    {/* <h1 className="text-xl tracking-tight">End Sequence</h1> */}

                    <motion.video
                        src="/CCS/End Frame (Paris) 16-9.mp4"
                        className="drop-shadow-lg hover:drop-shadow-xl rounded-lg 
                        object-cover transition-scale"
                        variants={animateInChild}
                        autoPlay loop muted playsInline
                        whileHover={{scale:1.02}}>
                    </motion.video>
                </div>
            
            



            {/* Behind the Scenes */}
            {/* <div className="col-span-full">
                <h1 className="text-4xl font-medium tracking-tighter mt-18 mb-2">Behind the Scenes</h1>
            </div>
                <motion.img
                    src="/CCS/bts1.jpg"
                    className="col-span-3 sm:col-span-2
                    drop-shadow-lg hover:drop-shadow-xl rounded-lg 
                    object-cover transition-scale duration-200 w-full"
                    variants={animateInChild}
                    whileHover={{scale:1.02}}>
                </motion.img>
                <motion.img
                    src="/CCS/bts2.jpg"
                    className="col-span-3 sm:col-span-2
                    drop-shadow-lg hover:drop-shadow-xl rounded-lg 
                    object-cover transition-scale duration-200 w-full"
                    variants={animateInChild}
                    whileHover={{scale:1.02}}>
                </motion.img>
                <motion.img
                    src="/CCS/bts3.jpg"
                    className="col-span-3 sm:col-span-2
                    drop-shadow-lg hover:drop-shadow-xl rounded-lg 
                    object-cover transition-scale duration-200 w-full"
                    variants={animateInChild}
                    whileHover={{scale:1.02}}>
                </motion.img>
                <motion.img
                    src="/CCS/bts4.jpg"
                    className="col-span-3 sm:col-span-2
                    drop-shadow-lg hover:drop-shadow-xl rounded-lg 
                    object-cover transition-scale duration-200 w-full"
                    variants={animateInChild}
                    whileHover={{scale:1.02}}>
                </motion.img>
                <motion.img
                    src="/CCS/bts5.jpg"
                    className="col-span-3 sm:col-span-2
                    drop-shadow-lg hover:drop-shadow-xl rounded-lg 
                    object-cover transition-scale duration-200 w-full"
                    variants={animateInChild}
                    whileHover={{scale:1.02}}>
                </motion.img>
                <motion.img
                    src="/CCS/bts6.jpg"
                    className="col-span-3 sm:col-span-2
                    drop-shadow-lg hover:drop-shadow-xl rounded-lg 
                    object-cover transition-scale duration-200 w-full"
                    variants={animateInChild}
                    whileHover={{scale:1.02}}>
                </motion.img> */}
            
            
                

    


        </motion.div>
    )
}


{/* <motion.img 
                src="/CCS/End Frame KV.jpg"
                className="col-span-full px-4 sm:px-0 mt-10
                w-full drop-shadow-lg hover:drop-shadow-xl rounded-lg 
                object-cover transition-scale duration-200"
                variants={animateInChild}
                whileHover={{scale:1.01}}>
            </motion.img> */}

//     <div className="col-span-6 border-foreground dark:border-midground rounded-2xl gap-4">

//     {/* Episodes Header */}
//     <motion.div className="col-span-full mb-4" variants={animateInChild}>
//         <h1 className="text-4xl font-medium tracking-tighter">Episodes</h1>
//     </motion.div>

//     {/* Episode Thumbnails */}
//     <motion.div className="gap-2 2xl:gap-3 grid grid-cols-6 col-span-full mb-8" variants={animateInChild}>
//         <motion.img src="/CCS/thumbnail1.jpg" 
//             className="shadow-standard hover:shadow-standard-hover rounded-lg
//             object-cover transition-scale h-full"
//             variants={animateInChild}
//             whileHover={{scale:1.05}}>
//         </motion.img>
//         <motion.img src="/CCS/thumbnail2.jpg" 
//             className="shadow-standard hover:shadow-standard-hover rounded-lg
//             object-cover transition-scale h-full"
//             variants={animateInChild}
//             whileHover={{scale:1.05}}>
//         </motion.img>
//         <motion.img src="/CCS/thumbnail3.jpg" 
//             className="shadow-standard hover:shadow-standard-hover rounded-lg
//             object-cover transition-scale h-full"
//             variants={animateInChild}
//             whileHover={{scale:1.05}}>
//         </motion.img>
//         <motion.img src="/CCS/thumbnail4.jpg" 
//             className="shadow-standard hover:shadow-standard-hover rounded-lg
//             object-cover transition-scale h-full"
//             variants={animateInChild}
//             whileHover={{scale:1.05}}>
//         </motion.img>
//         <motion.img src="/CCS/thumbnail5.jpg" 
//             className="shadow-standard hover:shadow-standard-hover rounded-lg
//             object-cover transition-scale h-full"
//             variants={animateInChild}
//             whileHover={{scale:1.05}}>
//         </motion.img>
//         <motion.img src="/CCS/thumbnail6.jpg" 
//             className="shadow-standard hover:shadow-standard-hover rounded-lg
//             object-cover transition-scale h-full"
//             variants={animateInChild}
//             whileHover={{scale:1.05}}>
//         </motion.img>
//     </motion.div>

//     {/* Episodes Children */}
//     <div className="grid grid-cols-6 col-span-full mb-3 xl:mb-5">
//         <motion.div className="col-span-2 xl:col-span-1"
//             variants={animateInChild}>
//             <h1 className="text-2xl tracking-tight mb-4 leading-7">
//                 <span className="font-medium">Episode 1</span>
//                 <br/>Dance Your Way <br/>Through Seoul</h1>
//             <p className="text-base font-normal mr-10">Dance your way through Seoul with Pin, our Flight Stewardess, as we explore this vibrant city.</p>
//         </motion.div>
        
//         <motion.video
//             src="/CCS/montage1.mp4"
//             className="drop-shadow-lg hover:drop-shadow-xl rounded-lg
//             object-cover col-span-4 xl:col-span-5 w-full"
//             variants={animateInChild}
//             autoPlay loop muted drag
//             dragConstraints={{left:0,top:0,right:0,bottom:0}}>   
//         </motion.video>
//     </div>

//     <div className="grid grid-cols-6 col-span-full mb-3 xl:mb-5">
//         <motion.div className="col-span-2 xl:col-span-1"
//             variants={animateInChild}>
//             <h1 className="text-2xl tracking-tight mb-4 leading-7">
//                 <span className="font-medium">Episode 2</span>
//                 <br/>Vintage Finds <br/>In Paris</h1>
//             <p className="text-base font-normal mr-10">Uncover vintage finds with Moon, our Leading Steward. See Paris in a different light.</p>
//         </motion.div>
        
//         <motion.video
//             src="/CCS/montage2.mp4"
//             className="drop-shadow-lg hover:drop-shadow-xl rounded-lg
//             object-cover transition-scale col-span-4 xl:col-span-5 w-full"
//             variants={animateInChild}
//             autoPlay loop muted drag
//             dragConstraints={{left:0,top:0,right:0,bottom:0}}>     
//         </motion.video>
//     </div>

//     <div className="grid grid-cols-6 col-span-full mb-3 xl:mb-5">
//         <motion.div className="col-span-2 xl:col-span-1"
//             variants={animateInChild}>
//             <h1 className="text-2xl tracking-tight mb-4 leading-7">
//                 <span className="font-medium">Episode 3</span>
//                 <br/>The Jazz Scene<br/>of Ho Chi Min City</h1>
//             <p className="text-base font-normal mr-10">Enter the jazz scene of Ho Chi Minh City with Chief Stewardess Joslyn and discover the musical side of this city.</p>
//         </motion.div>
        
//         <motion.video
//             src="/CCS/montage3.mp4"
//             className="drop-shadow-lg hover:drop-shadow-xl rounded-lg
//             object-cover transition-scale col-span-4 xl:col-span-5 w-full"
//             variants={animateInChild}
//             autoPlay loop muted drag
//             dragConstraints={{left:0,top:0,right:0,bottom:0}}>     
//         </motion.video>
//     </div>

//     <div className="grid grid-cols-6 col-span-full mb-3 xl:mb-5">
//         <motion.div className="col-span-2 xl:col-span-1"
//             variants={animateInChild}>
//             <h1 className="text-2xl tracking-tight mb-4 leading-7">
//                 <span className="font-medium">Episode 4</span>
//                 <br/>The Artsy Side<br/>of Auckland</h1>
//             <p className="text-base font-normal mr-10">Join Priscilla, our Flight Stewardess, on a journey across Auckland. Experience this artistic city through her lens.</p>
//         </motion.div>
        
//         <motion.video
//             src="/CCS/montage4.mp4"
//             className="drop-shadow-lg hover:drop-shadow-xl rounded-lg
//             object-cover transition-scale col-span-4 xl:col-span-5 w-full"
//             variants={animateInChild}
//             autoPlay loop muted drag
//             dragConstraints={{left:0,top:0,right:0,bottom:0}}>     
//         </motion.video>
//     </div>

//     <div className="grid grid-cols-6 col-span-full mb-3 xl:mb-5">
//         <motion.div className="col-span-2 xl:col-span-1"
//             variants={animateInChild}>
//             <h1 className="text-2xl tracking-tight mb-4 leading-7">
//                 <span className="font-medium">Episode 5</span>
//                 <br/>Flavours of<br/>New Delhi</h1>
//             <p className="text-base font-normal mr-10">Follow Mitchelle, our In-Flight Manager, on a culinary journey in New Delhi. Savour this flavourful city with us.</p>
//         </motion.div>
        
//         <motion.video
//             src="/CCS/montage5.mp4"
//             className="drop-shadow-lg hover:drop-shadow-xl rounded-lg
//             object-cover transition-scale col-span-4 xl:col-span-5 w-full"
//             variants={animateInChild}
//             autoPlay loop muted drag
//             dragConstraints={{left:0,top:0,right:0,bottom:0}}>     
//         </motion.video>
//     </div>

//     <div className="grid grid-cols-6 col-span-full mb-3 xl:mb-5">
//         <motion.div className="col-span-2 xl:col-span-1"
//             variants={animateInChild}>
//             <h1 className="text-2xl tracking-tight mb-4 leading-7">
//                 <span className="font-medium">Episode 6</span>
//                 <br/>New York City<br/>in Reel Life</h1>
//             <p className="text-base font-normal mr-10">Experience reel life in real life with In-Flight Manager Fadzil, on a cinematic tour around New York City.</p>
//         </motion.div>
        
//         <motion.video
//             src="/CCS/montage6.mp4"
//             className="drop-shadow-lg hover:drop-shadow-xl rounded-lg
//             object-cover transition-scale col-span-4 xl:col-span-5 w-full"
//             variants={animateInChild}
//             autoPlay loop muted drag
//             dragConstraints={{left:0,top:0,right:0,bottom:0}}>     
//         </motion.video>
//     </div>
// </div>