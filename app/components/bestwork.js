'use client'

import * as motion from "framer-motion/client"
import {useEffect, useRef} from 'react';

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.15, duration:0.5, ease:"easeOut"}
    }
}
const animateInChild ={
hidden: {opacity:0, y:20},
show: {
    opacity:1, y:0, 
    transition: {duration:0.3, ease:"easeOut"}
    }
}


const BestWorkPage = ({className, setSelectedWork, setHoveredWork}) => {

    const cabinVideoRef=useRef(null);
    const cabinBgRef=useRef(null);
    
    const cocktailVideoRef=useRef(null);
    const cocktailBgRef=useRef(null);
    
    const ghibliVideoRef=useRef(null);
    const ghibliBgRef=useRef(null);


    useEffect(() => {
        const cabinVideo = cabinVideoRef.current;
        const cabinBg = cabinBgRef.current;
        
        const cocktailVideo = cocktailVideoRef.current;
        const cocktailBg = cocktailBgRef.current;
        
        const ghibliVideo = ghibliVideoRef.current;
        const ghibliBg = ghibliBgRef.current;
    
        if (cabinVideo && cabinBg && cocktailVideo && cocktailBg && ghibliVideo && ghibliBg) {
          // Ensure both videos start together
            cabinVideo.play();
            cabinBg.play();
            cocktailVideo.play();
            cocktailBg.play();
            ghibliVideo.play();
            ghibliBg.play();
    
          // Synchronize the videos periodically
          const syncVideos = () => {
            if (Math.abs(cabinVideo.currentTime - cabinBg.currentTime) > 0.1) {
              cabinBg.currentTime = cabinVideo.currentTime;
            }
            if (Math.abs(cocktailVideo.currentTime - cocktailBg.currentTime) > 0.1) {
              cocktailBg.currentTime = cocktailVideo.currentTime;
            }
            if (Math.abs(ghibliVideo.currentTime - ghibliBg.currentTime) > 0.1) {
              ghibliBg.currentTime = ghibliVideo.currentTime;
            }
          };
    
          // Set an interval to check and sync the videos every 100ms
          const syncInterval = setInterval(syncVideos, 100);
    
          // Clean up the interval on component unmount
          return () => clearInterval(syncInterval);
        }
      }, []);
 
    return (
        <motion.div
        className={`font-[family-name:var(--font-geist-sans)] ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>

            {/* Beyond The Cabin */}
            <div
                className="col-span-full grid grid-cols-1 xl:grid-cols-9 dark:border-1.5 border-transparent group shadow-mild md:shadow-none
                 dark:border-[rgb(255,255,255,0.2)] md:dark:border-transparent md:dark:hover:border-[rgb(255,255,255,0.2)] 
                 md:hover:shadow-mild md:hover:scale-101 rounded-xl transition-non-color cursor-pointer"
                onMouseEnter={() => {
                setHoveredWork("cabin");
                }}
                onMouseLeave={() => {
                setHoveredWork(null);
                }}
                onClick={() => {
                setSelectedWork("cabin");
                }}
            >
                <motion.div
                className="col-span-3 rounded-lg p-4 2xl:p-6 relative"
                variants={animateInChild}
                >
                <button
                    className="font-base font-mono text-base tracking-tighter w-11 h-6 rounded-full 
                    flex items-center justify-center border-1 border-foreground mb-2 -ml-0.5
                    group-hover:bg-foreground group-hover:text-background group-hover:scale-90 transition-non-color">
                    01
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 3 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                    >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                    </svg>
                </button>
                
                <h1 className="text-6xl md:text-7xl -ml-1 font-medium tracking-tighter leading-tighter mb-1 mr-24">
                    Beyond The Cabin
                </h1>
                <h1 className="text-lg tracking-tight mt-2 mb-5">Brand Campaign for <span className="ml-1 [word-spacing:-0.05em] font-script -rotate-1">Singapore Airlines</span></h1>
                <p className="mr-10 mb-4 md:w-3/4">
                    6 Cities. 6 Cabin Crew. 6 Passions. Journey beyond the cabin with our cabin crew. You see
                    them on board, now follow their travels around the world.
                </p>
                <div className="absolute bottom-4 flex-row gap-6 tracking-tight hidden 2xl:flex
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold">Role:</p>
                    <p>Creative Direction</p>
                    <p>Motion Design</p>
                    <p>Visual Design</p>
                </div>
                </motion.div>

                <motion.video
                src="/CCS/montagelow.mp4"
                ref={cabinVideoRef}
                className="rounded-b-lg md:rounded-lg w-full h-96 md:group-hover:h-150 object-cover col-span-full md:col-span-6 transition-all duration-300"
                autoPlay
                muted
                loop
                playsInline
                ></motion.video>
            </div>

            {/* Cocktail Conversations */}
            <div
                className="col-span-full grid grid-cols-1 xl:grid-cols-9 dark:border-1.5 border-transparent group shadow-mild md:shadow-none
              dark:border-[rgb(255,255,255,0.2)] md:dark:border-transparent md:dark:hover:border-[rgb(255,255,255,0.2)] mt-4 md:mt-3
                md:hover:shadow-mild md:hover:scale-101 rounded-xl transition-non-color cursor-pointer"
                onMouseEnter={() => {
                setHoveredWork("cocktail");
                }}
                onMouseLeave={() => {
                setHoveredWork(null);
                }}
                onClick={() => {
                setSelectedWork("cocktail");
                window.scrollTo({
                    top: 0,
                    behavior: "smooth", // Adds smooth scrolling effect
                  });
                }}
            >
                <motion.div
                lang="en"
                className="col-span-3 rounded-lg p-4 2xl:p-6 relative"
                variants={animateInChild}
                >
                <button
                    className="font-base font-mono text-base tracking-tighter w-11 h-6 rounded-full 
                    flex items-center justify-center border-1 border-foreground mb-2 
                    group-hover:bg-foreground group-hover:text-background group-hover:scale-90 transition-non-color">
                    02
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 3 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                    >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                    </svg>
                </button>
                <h1 className="text-6xl leading-tighter md:leading-tighter md:text-6xl font-medium tracking-tighter mb-3 break-words mr-0 hyphens-auto -ml-0.5">
                   Cocktail Conversations
                </h1>

                {/* Geist Uppercase subheader */}
                {/* <h1 className="text-sm font-medium md:text-xl font-sans uppercase tracking-wider lg:-mt-1 mb-4"> */}

                <h1 className="text-lg tracking-tight mt-2 mb-5">Brand Campaign for <span className="ml-1 [word-spacing:-0.05em] font-script -rotate-1">Singapore Airlines</span></h1>
                <p className="mr-10 mb-4 md:mb-0">If there was a drink to match every personality, how would your bespoke cocktail look and taste like?</p>
                <div className="absolute bottom-4 flex-row gap-6 tracking-tight hidden 2xl:flex
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className=" font-semibold">Role:</p>
                        <p className="">Creative Direction</p>
                        <p className="">Motion Design</p>
                </div>
                </motion.div>

                <motion.video
                src="/Cocktail/montage.mp4"
                ref={cocktailVideoRef}
                className="rounded-b-lg md:rounded-lg w-full h-96 md:group-hover:h-150 object-cover col-span-full md:col-span-6 transition-all duration-300"
                autoPlay
                muted
                loop
                playsInline
                ></motion.video>
            </div>

            {/* Ghibli */}
            <div
                className="col-span-full grid grid-cols-1 xl:grid-cols-9 dark:border-1.5 border-transparent group shadow-mild md:shadow-none
                dark:border-[rgb(255,255,255,0.2)] md:dark:border-transparent md:dark:hover:border-[rgb(255,255,255,0.2)] mt-4 md:mt-3
                  md:hover:shadow-mild md:hover:scale-101 rounded-xl transition-non-color cursor-pointer"
                onMouseEnter={() => {
                setHoveredWork("ghibli");
                }}
                onMouseLeave={() => {
                setHoveredWork(null);
                }}
                onClick={() => {
                    setSelectedWork("ghibli");
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth", // Adds smooth scrolling effect
                    });
                  }}
            >
                <motion.div
                className="col-span-3 rounded-lg p-4 2xl:p-6 relative"
                variants={animateInChild}
                >
                <button
                    className="font-base font-mono text-base tracking-tighter w-11 h-6 rounded-full 
                    flex items-center justify-center border-1 border-foreground mb-2 
                    group-hover:bg-foreground group-hover:text-background group-hover:scale-90 transition-non-color">
                    03
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 3 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                    >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                    </svg>
                </button>
                <h1 className="text-6xl md:text-7xl font-medium tracking-tighter leading-tighter mb-3 -mr-2 ">
                   The World of Studio Ghibli
                </h1>
                <h1 className="text-lg tracking-tight mt-2 mb-5">Marketing Campaign for <span className="ml-1 [word-spacing:-0.05em] font-script -rotate-1">ArtScience Museum</span></h1>
                <p className="mr-10 mb-4 md:w-3/4">Be spirited away into magical scenes from iconic films through immersive theatrical sets, whimsical art installations and more.​</p>
                <div className="absolute bottom-4 flex-row gap-6 tracking-tight hidden 2xl:flex
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className=" font-semibold">Role:</p>
                        <p className="">Creative Direction</p>
                        <p className="">Motion Design</p>
                        <p className="">Visual Design</p>
                </div>
                </motion.div>

                <motion.video
                src="/Ghibli/banner.mp4"
                ref={ghibliVideoRef}
                className="rounded-b-lg md:rounded-lg w-full h-96 md:group-hover:h-150 object-cover col-span-full md:col-span-6 transition-all duration-300"
                autoPlay
                muted
                loop
                playsInline
                ></motion.video>
            </div>

            {/* JolliEverAfter */}
            <div
                className="col-span-full grid grid-cols-1 xl:grid-cols-9 dark:border-1.5 border-transparent group shadow-mild md:shadow-none
                dark:border-[rgb(255,255,255,0.2)] md:dark:border-transparent md:dark:hover:border-[rgb(255,255,255,0.2)] mt-4 md:mt-3
                  md:hover:shadow-mild md:hover:scale-101 rounded-xl transition-non-color cursor-pointer"
                onMouseEnter={() => {
                setHoveredWork("jolli");
                }}
                onMouseLeave={() => {
                setHoveredWork(null);
                }}
                onClick={() => {
                setSelectedWork("jolli");
                }}
            >
                <motion.div
                className="col-span-3 rounded-lg p-4 2xl:p-6 relative"
                variants={animateInChild}
                >
                <button
                    className="font-base font-mono text-base tracking-tighter w-11 h-6 rounded-full 
                    flex items-center justify-center border-1 border-foreground mb-2 
                    group-hover:bg-foreground group-hover:text-background group-hover:scale-90 transition-non-color">
                    04
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 3 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                    >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                    </svg>
                </button>
                <h1 className="text-6xl md:text-7xl font-medium tracking-tighter leading-tighter mb-3 -mr-2 ">
                   JolliEverAfter
                </h1>
                <h1 className="text-lg tracking-tight mt-2 mb-5">Social Media Campaign for <span className="ml-1 [word-spacing:-0.05em] font-script -rotate-1">Jollibee</span></h1>
                <p className="mr-10 mb-4 md:w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam facilisis hendrerit. Integer pulvinar nibh erat, a iaculis nisi condimentum ac. Nam in cursus turpis, sed ullamcorper nisl. </p>
                <div className="absolute bottom-4 flex-row gap-6 tracking-tight hidden 2xl:flex
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className=" font-semibold">Role:</p>
                        <p className="">Motion Design</p>
                        <p className="">Video Edit</p>
                </div>
                </motion.div>

                <motion.video
                src="/jollieverafter/teaser.mp4"
                className="rounded-b-lg md:rounded-lg w-full h-96 md:group-hover:h-150 object-cover col-span-full md:col-span-6 transition-all duration-300"
                autoPlay
                muted
                loop
                playsInline
                ></motion.video>
            </div>

            {/* Uniqlo */}
            <div
                className="col-span-full grid grid-cols-1 xl:grid-cols-9 dark:border-1.5 border-transparent group shadow-mild md:shadow-none
                dark:border-[rgb(255,255,255,0.2)] md:dark:border-transparent md:dark:hover:border-[rgb(255,255,255,0.2)] mt-4 md:mt-3
                  md:hover:shadow-mild md:hover:scale-101 rounded-xl transition-non-color cursor-pointer"
                onMouseEnter={() => {
                setHoveredWork("uniqlo1");
                }}
                onMouseLeave={() => {
                setHoveredWork(null);
                }}
                onClick={() => {
                setSelectedWork("uniqlo1");
                }}
            >
                <motion.div
                className="col-span-3 rounded-lg p-4 2xl:p-6 relative"
                variants={animateInChild}
                >
                <button
                    className="font-base font-mono text-base tracking-tighter w-11 h-6 rounded-full 
                    flex items-center justify-center border-1 border-foreground mb-2 
                    group-hover:bg-foreground group-hover:text-background group-hover:scale-90 transition-non-color">
                    05
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 3 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                    >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                    </svg>
                </button>
                <h1 className="text-6xl leading-tighter md:text-7xl font-medium tracking-tighter mb-3 mr-10">
                   Your Stage Now Live
                </h1>
                <h1 className="text-lg tracking-tight mt-2 mb-5">In-Store Displays for<span className="ml-1.5 text-xl font-script -rotate-1">Uniqlo</span></h1>
                <p className="mr-10 mb-4 md:w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam facilisis hendrerit. Integer pulvinar nibh erat, a iaculis nisi condimentum ac. Nam in cursus turpis, sed ullamcorper nisl. </p>
                <div className="absolute bottom-4 flex-row gap-6 tracking-tight hidden 2xl:flex
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className=" font-semibold">Role:</p>
                        <p className="">Motion Design</p>
                        <p className="">Visual Design</p>
                </div>
                </motion.div>

                <motion.video
                src="/uniqlo1/montage.mp4"
                className="rounded-b-lg md:rounded-lg w-full h-96 md:group-hover:h-150 object-cover col-span-full md:col-span-6 transition-all duration-300"
                autoPlay
                muted
                loop
                playsInline
                ></motion.video>
            </div>

            {/* Background Glow */}
            <div className="absolute -z-50 top-0">
                <div className="min-w-screen flex-col blur-3xl opacity-0 dark:opacity-100">
                    <motion.video
                    src="/CCS/montagelow.mp4"
                    ref={cabinBgRef}
                    className="rounded-full w-screen h-screen md:h-screen/2 object-cover saturate-200 opacity-70"
                    autoPlay
                    muted
                    loop
                    playsInline
                    ></motion.video>

                    <motion.video
                    src="/cocktail/montage.mp4"
                    ref={cocktailBgRef}
                    className="rounded-full w-screen h-screen md:h-screen/2 object-cover saturate-200 opacity-70"
                    autoPlay
                    muted
                    loop
                    playsInline
                    ></motion.video>

                    <motion.video
                    src="/ghibli/banner.mp4"
                    ref={ghibliBgRef}
                    className="rounded-full w-screen h-screen md:h-screen/2 object-cover saturate-200 opacity-70"
                    autoPlay
                    muted
                    loop
                    playsInline
                    ></motion.video>
                </div>
            </div>

         
           

          
        </motion.div>

        
  );
};

export default BestWorkPage;