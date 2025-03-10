'use client'

import * as motion from "framer-motion/client"
import {useEffect, useRef} from 'react';

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.2, duration:0.5, ease:"easeOut"}
    }
}
const animateInChild ={
hidden: {opacity:0, y:20},
show: {
    opacity:1, y:0, 
    transition: {duration:0.3, ease:"easeOut"}
    }
}


const BestWorkPage2 = ({className, setSelectedWork, setHoveredWork}) => {

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
    className={`font-[family-name:var(--font-geist-sans)] ${className} w-full`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

        {/* Beyond The Cabin */}
        <div
            className="col-span-full grid grid-cols-1 xl:grid-cols-9 dark:border-1.5 border-transparent group shadow-mild duration-200 mt-4 md:mt-3
            md:shadow-mild md:hover:shadow-md md:hover:scale-99 rounded-3xl transition-non-color cursor-pointer relative"
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
            className="rounded-3xl p-10 pt-8 absolute z-50 group-hover:backdrop-blur-2xl h-full w-[27%] text-white group-hover:shadow-lg transition-all duration-300"
            variants={animateInChild}>

                <button
                    className="font-base font-mono text-base tracking-tighter w-11 h-6 rounded-full 
                    flex items-center justify-center border-1 border-white mb-2 -ml-0.5 
                    group-hover:bg-white group-hover:text-black group-hover:scale-90 transition-non-color">
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
                
                <h1 className="text-7.5xl group-hover:text-6xl -ml-1 font-medium tracking-tighter leading-tighter mb-1 transition-all duration-200">
                    Beyond <br/>The Cabin
                </h1>
                <h1 className="text-base font-medium tracking-[-0.3pt] mt-3 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Brand Campaign for Singapore Airlines</h1>
                <p className="md:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    6 Cities. 6 Cabin Crew. 6 Passions. Journey beyond the cabin with our cabin crew. You see
                    them on board, now follow their travels around the world.
                </p>
                <p className="absolute bottom-10 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Role:</p>
                <div className="absolute bottom-5 flex-row gap-5 tracking-tight hidden 2xl:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    
                    <p>Creative Direction</p>
                    <p>Motion Design</p>
                    <p>Visual Design</p>
                </div>
            </motion.div>

            <motion.video
            src="/CCS/bestworkmontage.mp4"
            ref={cabinVideoRef}
            className="rounded-3xl w-full h-[760px] object-cover relative right-0 col-span-full transition-all duration-200"
            autoPlay
            muted
            loop
            playsInline
            loading="lazy"
            poster='/poster/cabinbest1.jpeg'
            ></motion.video>
        </div>
    </motion.div>  
  );
};

export default BestWorkPage2;