
'use client'

import * as motion from "framer-motion/client"
import {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

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


const BestWorkPage2 = ({className, setSelectedWork, setHoveredWork}) => {
   
    const [isHovered, setIsHovered] = useState([]);

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
        <motion.div className={`grid grid-cols-9 font-[family-name:var(--font-geist-sans)] ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>
            
            {/* Beyond the Cabin */}
            <motion.div className="group col-span-full cursor-pointer rounded-xl mb-3 relative"
            variants={animateInChild}
            whileHover={{scale:0.99}}
            transition={{duration:0.15}}
            onMouseEnter={() => {
                setHoveredWork('cabin')}}
            onMouseLeave={() => {
                setHoveredWork(null)}}
            >
                <div className="absolute inset-0 flex flex-col items-left justify-start pl-10 pt-10 text-white"
                onClick={() => setSelectedWork('cabin')}>

                    <button className="font-medium text-xl tracking-tighter p-2 w-14 h-8 rounded-full text-white
                    flex items-center justify-between border-1.5 border-white mb-2 ml-1 z-20
                    group-hover:bg-white group-hover:text-black transition-colors">
                    01
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 3 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                        </svg>
                    </button>
                    <h1 className="text-7xl font-medium tracking-tighter leading-tighter mb-2 mr-20 w-screen/3 z-20">Beyond<br/> The Cabin</h1>
                    <h1 className="text-2xl tracking-tighter mb-6 mr-10 z-20">Brand Campaign for Singapore Airlines</h1>
                    {/* <div className="flex flex-row gap-4 mb-6">
                        <p className=" font-medium">Role:</p>
                        <p className="">Creative Direction</p>
                        <p className="">Motion Design</p>
                        <p className="">Ideation</p>
                    
                    </div> */}
                    <p className="text-base w-screen/4 z-20">6 Cities. 6 Cabin Crew. 6 Passions.
                        Journey beyond the cabin with our cabin crew. You see them on board, now follow their travels around the world.
                    </p>

                    {/* Gradient */}
                    <div className="absolute top-0 left-0 right-0 h-120 w-screen/2 bg-gradient-to-r from-black/70 to-transparent 
                    rounded-xl z-10 transition-all duration-500 hover:opacity-40"></div>
                </div>

                <div className="rounded-xl overflow-hidden">
                    <video
                    src="/CCS/montagelow.mp4"
                    ref={cabinVideoRef}
                    className="w-full h-120 object-cover scale-101 transition-all duration-500 group-hover:blur-md"
                    autoPlay
                    muted
                    loop
                    ></video>
                </div>
            </motion.div>
                
                {/* Background Glow */}
                <video src="/CCS/montagelow.mp4" 
                ref={cabinBgRef}
                className="absolute -z-10 top-0 rounded-full blur-3xl w-full h-screen/1.5 object-cover saturate-200 opacity-0 dark:opacity-100"
                autoPlay muted loop
                >
                </video>

            {/* Cocktail */}
            <motion.div className="group col-span-full cursor-pointer rounded-xl mb-3 relative"
            variants={animateInChild}
            whileHover={{scale:0.99}}
            transition={{duration:0.15}}
            onMouseEnter={() => {
                setHoveredWork('cocktail')}}
            onMouseLeave={() => {
                setHoveredWork(null)}}
            >
                <div className="absolute inset-0 flex flex-col items-left justify-start pl-10 pt-10 text-white"
                onClick={() => setSelectedWork('cocktail')}>

                    <button className="font-medium text-xl tracking-tighter p-2 w-16 h-8 rounded-full text-white
                    flex items-center justify-between border-1.5 border-white mb-2 ml-1 z-20
                    group-hover:bg-white group-hover:text-black transition-colors">
                    02
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 3 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                        </svg>
                    </button>
                    <h1 className="text-7xl font-medium tracking-tighter leading-tighter mb-2 mr-20 w-screen/3 z-20">Cocktail Conversations</h1>
                    <h1 className="text-2xl tracking-tighter mb-6 mr-10 z-20">Brand Campaign for Singapore Airlines</h1>
                    {/* <div className="flex flex-row gap-4 mb-6">
                        <p className=" font-medium">Role:</p>
                        <p className="">Creative Direction</p>
                        <p className="">Motion Design</p>
                        <p className="">Ideation</p>
                    
                    </div> */}
                    <p className="text-base w-screen/4 z-20">
                        If there was a drink to match every personality, how would your bespoke cocktail look and taste like?
                    </p>

                    {/* Gradient */}
                    <div className="absolute top-0 left-0 right-0 h-120 w-screen/2 bg-gradient-to-r from-black/85 to-transparent 
                    rounded-xl z-10 transition-all duration-500 hover:opacity-40"></div>
                </div>

                <div className="rounded-xl overflow-hidden">
                    <video
                    src="/cocktail/montagelow.mp4"
                    ref={cocktailVideoRef}
                    className="w-full h-120 object-cover scale-101 transition-all duration-500 group-hover:blur-md"
                    autoPlay
                    muted
                    loop
                    ></video>
                </div>
            </motion.div>
            
                {/* Background Glow */}
                <video src="/Cocktail/montage.mp4" 
                ref={cocktailBgRef}
                className="absolute top-96 mt-60 blur-3xl -z-10 rounded-full w-full h-screen/2 object-cover saturate-200 opacity-0 dark:opacity-60"
                autoPlay muted loop
                >
                </video>

            {/* Ghibli */}
            <motion.div className="group col-span-full cursor-pointer rounded-xl mb-3 relative"
            variants={animateInChild}
            whileHover={{scale:0.99}}
            transition={{duration:0.15}}
            onMouseEnter={() => {
                setHoveredWork('ghibli')}}
            onMouseLeave={() => {
                setHoveredWork(null)}}
            >
                <div className="absolute inset-0 flex flex-col items-left justify-start pl-10 pt-10 text-white"
                onClick={() => setSelectedWork('ghibli')}>

                    <button className="font-medium text-xl tracking-tighter p-2 w-14 h-8 rounded-full text-white
                    flex items-center justify-between border-1.5 border-white mb-2 ml-1 z-20
                    group-hover:bg-white group-hover:text-black transition-colors">
                    03
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 3 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                        </svg>
                    </button>
                    <h1 className="text-7xl font-medium tracking-tighter leading-tighter mb-2 mr-20 w-screen/3 z-20">The World of Studio Ghibli</h1>
                    <h1 className="text-2xl tracking-tighter mb-6 mr-10 z-20">Marketing Campaign for ArtScience Museum</h1>
                    <p className="text-base w-screen/3 z-20">Explore the World of Studio Ghibli at ArtScience Museum. Be spirited away into the magical scenes from My Neighbor Totoro, Kiki’s Delivery Service, and other iconic films through immersive theatrical sets, whimsical art installations and more.
                    </p>

                    {/* Gradient */}
                    <div className="absolute top-0 left-0 right-0 h-120 w-screen/1.5 bg-gradient-to-r from-black/80 to-transparent 
                    rounded-xl z-10 transition-all duration-500 hover:opacity-40"></div>
                </div>

                <div className="rounded-xl overflow-hidden">
                    <video
                    src="/ghibli/banner.mp4"
                    ref={ghibliVideoRef}
                    className="w-full h-120 object-cover scale-101 transition-all duration-500 group-hover:blur-md"
                    autoPlay
                    muted
                    loop
                    ></video>
                </div>
            </motion.div>

                {/* Background Glow */}
                <div className="col-span-full rounded-lg mb-4">
                    <video src="/ghibli/banner.mp4" 
                    ref={ghibliBgRef}
                    className="absolute -z-10 top-full mt-52 right-0 rounded-full blur-3xl w-full h-screen/2 object-cover saturate-200 opacity-0 dark:opacity-100"
                    autoPlay muted loop
                    >
                    </video>
                </div>
 
            {/* JolliEverAfter */}
            <motion.div className="group col-span-full cursor-pointer rounded-xl mb-3 relative"
            variants={animateInChild}
            whileHover={{scale:0.99}}
            transition={{duration:0.15}}
            onMouseEnter={() => {
                setHoveredWork('jolli')}}
            onMouseLeave={() => {
                setHoveredWork(null)}}
            >
                <div className="absolute inset-0 flex flex-col items-left justify-start pl-10 pt-10 text-white"
                onClick={() => setSelectedWork('jolli')}>

                    <button className="font-medium text-xl tracking-tighter p-2 w-14 h-8 rounded-full text-white
                    flex items-center justify-between border-1.5 border-white mb-2 ml-1 z-20
                    group-hover:bg-white group-hover:text-black transition-colors">
                    04
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 3 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                        </svg>
                    </button>
                    <h1 className="text-7xl font-medium tracking-tighter leading-tighter mb-2 mr-20 w-screen/3 z-20">JolliEverAfter</h1>
                    <h1 className="text-2xl tracking-tighter mb-6 mr-10 z-20">Social Media Campaign for Jollibee</h1>
                    <p className="text-base w-screen/3 z-20">Explore the World of Studio Ghibli at ArtScience Museum, where imagination begins.
                    </p>

                    {/* Gradient */}
                    <div className="absolute top-0 left-0 right-0 h-120 w-screen/1.5 bg-gradient-to-r from-black/80 to-transparent 
                    rounded-xl z-10 transition-all duration-500 hover:opacity-40"></div>
                </div>

                <div className="rounded-xl overflow-hidden">
                    <video
                    src="/jollieverafter/teaser.mp4"
                    // ref={jolliVideoRef}
                    className="w-full h-120 object-cover scale-101 transition-all duration-500 group-hover:blur-md"
                    autoPlay
                    muted
                    loop
                    ></video>
                </div>
            </motion.div>

                {/* Background Glow */}
                <video src="/jollieverafter/teaser.mp4" 
                className="absolute top-2/3 -mt-56 blur-3xl -z-10 rounded-full w-full  h-2/4 object-cover saturate-200 opacity-0 dark:opacity-60"
                autoPlay muted loop
                >
                </video>

            {/* Uniqlo */}
            <motion.div className="group col-span-full cursor-pointer rounded-xl mb-3 relative"
            variants={animateInChild}
            whileHover={{scale:0.99}}
            transition={{duration:0.15}}
            onMouseEnter={() => {
                setHoveredWork('uniqlo1')}}
            onMouseLeave={() => {
                setHoveredWork(null)}}
            >
                <div className="absolute inset-0 flex flex-col items-left justify-start pl-10 pt-10 text-white"
                onClick={() => setSelectedWork('uniqlo1')}>

                    <button className="font-medium text-xl tracking-tighter p-2 w-14 h-8 rounded-full text-white
                    flex items-center justify-between border-1.5 border-white mb-2 ml-1 z-20
                    group-hover:bg-white group-hover:text-black transition-colors">
                    05
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 3 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                        >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                        </svg>
                    </button>
                    <h1 className="text-7xl font-medium tracking-tighter leading-tighter mb-2 mr-20 w-screen/3 z-20">Your Stage Now Live</h1>
                    <h1 className="text-2xl tracking-tighter mb-6 mr-10 z-20">In-Store Displays for Uniqlo</h1>
                    <p className="text-base w-screen/3 z-20">Explore the World of Studio Ghibli at ArtScience Museum, where imagination begins.
                    </p>

                    {/* Gradient */}
                    <div className="absolute top-0 left-0 right-0 h-120 w-screen/1.5 bg-gradient-to-r from-black/80 to-transparent 
                    rounded-xl z-10 transition-all duration-500"></div>
                </div>

                <div className="rounded-xl overflow-hidden">
                    <video
                    src="/uniqlo1/montage.mp4"
                    // ref={jolliVideoRef}
                    className="w-full h-120 object-cover scale-101 transition-all duration-500 group-hover:blur-md"
                    autoPlay
                    muted
                    loop
                    ></video>
                </div>
            </motion.div>

        </motion.div>
  );
};

BestWorkPage2.propTypes = {
    className: PropTypes.string.isRequired,
    setSelectedWork: PropTypes.func.isRequired,
    setHoveredWork: PropTypes.func.isRequired
};

export default BestWorkPage2;