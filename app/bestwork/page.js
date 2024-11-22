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


const BestWorkPage = ({className, setSelectedWork, setHoveredWork}) => {
   
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

            {/* border-2 border-black/40 dark:border-[rgba(255,255,255,0.2)] */}

            <motion.div className="col-span-3 mb-4 mr-4 font-base rounded-lg p-6]" 
            variants={animateInChild} >
                <button className={`font-medium text-lg tracking-tighter p-1 w-12 h-7 mr-0.5 rounded-full 
                flex items-center justify-center border-1.5 border-foreground mb-1
                hover:bg-foreground hover:text-background hover:scale-90 transition-transform 
                ${isHovered.includes('1') ? "bg-foreground text-background scale-90" : ''}`}
                onClick={() => setSelectedWork('cocktail')}>
                01
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="2 2 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                    </svg>
                </button>

                <motion.div className="col-span-3 mr-4 font-base mb-4 rounded-lg p-6 -mt-1 relative" 
                variants={animateInChild}>

                    <button className="font-medium text-lg tracking-tighter rounded-full pr-2.5 px-2
                    flex items-center justify-center border-1.5 border-foreground mb-1
                    group-hover:bg-foreground group-hover:text-background group-hover:scale-90 transition-non-color">
                    01
                    </button>

                    <h1 className="text-7xl font-medium tracking-tighter leading-tighter mb-2 mr-20 ">Beyond The Cabin</h1>
                    <h1 className="text-2xl tracking-tighter mb-6 mr-10">Brand Campaign for Singapore Airlines</h1>
                    <div className="absolute bottom-0 flex flex-row gap-6 tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className=" font-semibold">Role:</p>
                        <p className="">Creative Direction</p>
                        <p className="">Motion Design</p>
                        <p className="">Visual Design</p>
                    </div>
                    <p className="mr-10">6 Cities. 6 Cabin Crew. 6 Passions.
                        Journey beyond the cabin with our cabin crew. You see them on board, now follow their travels around the world.
                        </p>
                </motion.div>

                
                <motion.video src="/CCS/montagelow.mp4" 
                ref={cabinVideoRef}
                className="rounded-lg w-full h-96 group-hover:h-150 object-cover col-span-6 z-10 transition-all duration-300"
                autoPlay muted loop
                transition={{duration:0.10}}>
                </motion.video>
            </button>
                
                {/* Background Glow */}
                <video src="/CCS/montagelow.mp4" 
                ref={cabinBgRef}
                className="absolute -z-50 rounded-full w-full h-screen/1.5 -mt-28 blur-3xl object-cover saturate-200 opacity-0 dark:opacity-100"
                autoPlay muted loop
                >
                </video>

            <motion.div className="col-span-3 mb-2 font-base" variants={animateInChild}>
                <button className={`font-medium text-lg tracking-tighter p-1 w-12 h-7 mr-0.5 rounded-full 
                flex items-center justify-center border-1.5 border-foreground mb-1
                hover:bg-foreground hover:text-background hover:scale-90 transition-transform
                ${isHovered.includes('2') ? "bg-foreground text-background scale-90" : ''}`}
                onClick={() => setSelectedWork('cocktail')}>
                02
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="2 2 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                    </svg>
                </button>

                <motion.div className="col-span-3 mr-4 font-base mb-4 rounded-lg p-6 -mt-1 relative" 
                variants={animateInChild}>

                    <button className="font-medium text-lg tracking-tighter rounded-full pr-2.5 px-2
                    flex items-center justify-center border-1.5 border-foreground mb-1
                    group-hover:bg-foreground group-hover:text-background group-hover:scale-90 transition-non-color">
                    02
                    </button>
                    <h1 className="text-7xl font-medium tracking-tighter leading-tighter mb-2 mr-20">Cocktail Conversations</h1>
                    <h1 className="text-2xl tracking-tighter mb-6 mr-10">Brand Campaign for Singapore Airlines</h1>
                    <p className="mr-20">If there was a drink to match every personality, how would your bespoke cocktail look and taste like?</p>
                    <div className="absolute bottom-0 flex flex-row gap-6 tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className=" font-semibold">Role:</p>
                        <p className="">Creative Direction</p>
                        <p className="">Motion Design</p>
                    </div>
                </motion.div>

                <motion.video src="/Cocktail/montage.mp4" 
                ref={cocktailVideoRef}
                className="col-span-6 rounded-lg w-full h-96 group-hover:h-150 transition-all duration-300 object-cover"
                autoPlay muted loop
                transition={{duration:0.10}}>
                </motion.video>

                {/* Background Glow */}
                <video src="/Cocktail/montage.mp4" 
                ref={cocktailBgRef}
                className="absolute blur-3xl -z-10 rounded-full w-full h-screen/2 object-cover saturate-200 opacity-0 dark:opacity-60"
                autoPlay muted loop
                >
                </video>
            </div>

            {/* Ghibli */}
            <div className="col-span-full grid grid-cols-9 border-1.5 group relative
            border-[rgb(0,0,0,0)] dark:hover:border-[rgb(255,255,255,0.2)] hover:shadow-mild hover:scale-101
            rounded-xl mb-4 transition-non-color cursor-pointer"
            onMouseEnter={() => {
                setHoveredWork('ghibli')
                setIsHovered('3')}}
            onMouseLeave={() => {
                setHoveredWork(null)
                setIsHovered([])}}
            onClick={() => {
                setSelectedWork('ghibli')}}>

                <button className="absolute right-5 top-5 font-medium text-lg tracking-tighter p-0.5 px-1 z-50 rounded-full 
                flex items-center justify-center border-1 border-white text-white cursor-pointer
                group-hover:bg-white group-hover:text-black group-hover:scale-90 group-hover:-m-2 transition-all duration-200">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="2 2 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                    </svg>
                </button>

                <motion.div className="col-span-3 mr-4 font-base mb-4 rounded-lg p-6 -mt-1 relative" 
                variants={animateInChild}>
                    <button className="font-medium text-lg tracking-tighter rounded-full pr-2.5 px-2 -ml-1
                    flex items-center justify-center border-1.5 border-foreground mb-1
                    group-hover:bg-foreground group-hover:text-background group-hover:scale-90 transition-non-color">
                    03</button>
                    <h1 className="text-7xl font-medium tracking-tighter leading-tighter mb-2 mr-20">The World of Studio Ghibli</h1>
                    <h1 className="text-2xl tracking-tighter mb-6 mr-10">Marketing Campaign for ArtScience Museum</h1>
                    <p className="mr-10">Explore the World of Studio Ghibli at ArtScience Museum. Be spirited away into the magical scenes from My Neighbor Totoro, Kiki’s Delivery Service, and other iconic films through immersive theatrical sets, whimsical art installations and more.​
                    </p>
                    <div className="absolute bottom-0 flex flex-row gap-6 tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className=" font-semibold">Role:</p>
                        <p className="">Creative Direction</p>
                        <p className="">Motion Design</p>
                        <p className="">Visual Design</p>
                    </div>
                </motion.div>
                
                <motion.video src="/ghibli/banner.mp4" 
                ref={ghibliVideoRef}
                className="rounded-lg w-full h-120 group-hover:h-135 transition-all duration-300 object-cover col-span-6"
                autoPlay muted loop 
                transition={{duration:0.10}}>
                </motion.video>

                {/* Background Glow */}
                <video src="/ghibli/banner.mp4" 
                ref={ghibliBgRef}
                className="absolute -z-10 rounded-full blur-3xl w-full h-screen/2 object-cover saturate-200 opacity-0 dark:opacity-100"
                autoPlay muted loop
                >
                </video>

            </div>
                

            {/* JolliEverAfter */}
            <div className="col-span-full grid grid-cols-9 border-1.5 group relative
            border-[rgb(0,0,0,0)] dark:hover:border-[rgb(255,255,255,0.2)] hover:shadow-mild hover:scale-101
            rounded-xl mb-4 transition-non-color cursor-pointer"
            onMouseEnter={() => {
                setHoveredWork('jolli')
                setIsHovered('4')}}
            onMouseLeave={() => {
                setHoveredWork(null)
                setIsHovered([])}}
            onClick={() => {
                setSelectedWork('jolli')}}>

                <button className="absolute right-5 top-5 font-medium text-lg tracking-tighter p-0.5 px-1 z-50 rounded-full 
                flex items-center justify-center border-1 border-white text-white cursor-pointer
                group-hover:bg-white group-hover:text-black group-hover:scale-90 group-hover:-m-2 transition-all duration-200">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="2 2 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                    </svg>
                </button>

                <motion.div className="col-span-3 mr-4 font-base mb-4 rounded-lg p-6 -mt-1 relative" 
                variants={animateInChild}>
                    <button className="font-medium text-lg tracking-tighter rounded-full pr-2.5 px-2 -ml-1
                    flex items-center justify-center border-1.5 border-foreground mb-1
                    group-hover:bg-foreground group-hover:text-background group-hover:scale-90 transition-non-color">
                    04</button>
                    <h1 className="text-7xl font-medium tracking-tighter leading-tighter mb-2 mr-20 -ml-1">JolliEverAfter</h1>
                    <h1 className="text-2xl tracking-tighter mb-6 mr-10">Social Media Campaign for Jollibee</h1>
                    <p className="mr-10">Explore the World of Studio Ghibli at ArtScience Museum, where imagination begins.
                    </p>
                    <div className="absolute bottom-0 flex flex-row gap-6 tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className=" font-semibold">Role:</p>
                        <p className="">Motion Design</p>
                        <p className="">Video Edit</p>
                    </div>
                </motion.div>

                <motion.video src="/jollieverafter/teaser.mp4" 
                className="rounded-lg col-span-6 w-full h-80 group-hover:h-200 transition-all duration-300 object-cover object-[0_35%]"
                autoPlay muted loop
                variants={animateInChild}
                transition={{duration:0.10}}>
                </motion.video>
                
            </div>

                {/* Background Glow */}
                <video src="/jollieverafter/teaser.mp4" 
                className="absolute top-2/3 -mt-56 blur-3xl -z-10 rounded-full w-full  h-2/4 object-cover saturate-200 opacity-0 dark:opacity-60"
                autoPlay muted loop
                >
                </video>

            {/* Uniqlo */}
            <div className="col-span-full grid grid-cols-9 border-1.5 group relative
            border-[rgb(0,0,0,0)] dark:hover:border-[rgb(255,255,255,0.2)] hover:shadow-mild hover:scale-101
            rounded-xl mb-4 transition-non-color cursor-pointer"
            onMouseEnter={() => {
                setHoveredWork('uniqlo1')
                setIsHovered('5')}}
            onMouseLeave={() => {
                setHoveredWork(null)
                setIsHovered([])}}
            onClick={() => {
                setSelectedWork('uniqlo')}}>

                <button className="absolute right-5 top-5 font-medium text-lg tracking-tighter p-0.5 px-1 z-50 rounded-full 
                flex items-center justify-center border-1 border-white text-white cursor-pointer
                group-hover:bg-white group-hover:text-black group-hover:scale-90 group-hover:-m-2 transition-all duration-200">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="2 2 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                    </svg>
                </button>

                <motion.div className="col-span-3 mr-4 font-base mb-4 rounded-lg p-6 -mt-1 relative" 
                variants={animateInChild}>
                    <button className="font-medium text-lg tracking-tighter rounded-full pr-2.5 px-2 -ml-1
                    flex items-center justify-center border-1.5 border-foreground mb-1
                    group-hover:bg-foreground group-hover:text-background group-hover:scale-90 transition-non-color">
                    05</button>
                    <h1 className="text-7xl font-medium tracking-tighter leading-tighter mb-2 mr-20 -ml-1">Your Stage Now Live</h1>
                    <h1 className="text-2xl tracking-tighter mb-6 mr-10">In-Store Displays for Uniqlo</h1>
                    <p className="mr-10">Explore the World of Studio Ghibli at ArtScience Museum, where imagination begins.
                    </p>
                    <div className="absolute bottom-0 flex flex-row gap-6 tracking-tight">
                        <p className=" font-semibold">Role:</p>
                        <p className="">Motion Design</p>
                        <p className="">Visual Design</p>
                    </div>
                </motion.div>


                <motion.video src="/uniqlo1/montage.mp4" 
                className="rounded-lg col-span-6 w-full h-135 object-cover"
                autoPlay muted loop
                variants={animateInChild}
                transition={{duration:0.10}}>
                </motion.video>


            </div>

            

            

            {/* <div className="relative col-span-full shadow-standard rounded-lg w-full h-96 mb-4">
                <motion.video
                    src="/ghibli/banner.mp4"
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay
                    muted
                    loop
                    variants={animateInChild}
                />
                <p className="absolute inset-0 flex flex-col items-start justify-start p-10 text-7xl tracking-tighter font-base z-10 text-background max-w-lg">
                    The World of Studio Ghibli
                    <h1 className="text-2xl tracking-tighter mb-4 mr-10">Marketing Campaign for ArtScience Museum</h1>
                    <p className="text-base mr-10">Explore the World of Studio Ghibli at ArtScience Museum, where imagination begins.</p>
                </p>
                
                
            </div> */}

            
            

            


        </motion.div>
  );
};

BestWorkPage.propTypes = {
    className: PropTypes.string.isRequired,
    setSelectedWork: PropTypes.func.isRequired,
    setHoveredWork: PropTypes.func.isRequired
};

export default BestWorkPage;