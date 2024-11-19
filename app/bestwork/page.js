'use client'
import * as motion from "framer-motion/client"
import {useState, useEffect} from 'react';

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
 
    return (
        <motion.div className={`grid grid-cols-7 font-[family-name:var(--font-geist-sans)] ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>

            {/* border-2 border-black/40 dark:border-[rgba(255,255,255,0.2)] */}

            <motion.div className="col-span-2 mb-4 mr-4 font-base rounded-lg p-6]" 
            variants={animateInChild} >
                <div className={`font-medium text-lg tracking-tighter p-1 w-12 h-7 mr-0.5 rounded-full 
                flex items-center justify-center border-1.5 border-foreground mb-1
                hover:bg-foreground hover:text-background hover:scale-90 transition-transform cursor-pointer
                ${isHovered.includes('1') ? "bg-foreground text-background scale-90" : ''}`}
                onClick={() => setSelectedWork('cocktail')}>
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
                </div>
                <h1 className="text-7xl font-medium tracking-tighter leading-tighter mb-2 mr-20">Beyond The Cabin</h1>
                <h1 className="text-2xl tracking-tighter mb-6 mr-10">Brand Campaign for Singapore Airlines</h1>
                {/* <div className="flex flex-row gap-4 mb-6">
                    <p className=" font-medium">Role:</p>
                    <p className="">Creative Direction</p>
                    <p className="">Motion Design</p>
                    <p className="">Ideation</p>
                
                </div> */}
                <p className="mr-10">6 Cities. 6 Cabin Crew. 6 Passions.
                    Journey beyond the cabin with our cabin crew. You see them on board, now follow their travels around the world.
                    </p>
            </motion.div>

            <button className="col-span-5 rounded-lg mb-4">
                <motion.video src="/CCS/montagelow.mp4" 
                className="rounded-lg shadow-standard w-full h-135 object-cover"
                autoPlay muted loop
                variants={animateInChild}
                whileHover={{scale:0.99}}
                transition={{duration:0.10}}
                onMouseEnter={() => {
                    setHoveredWork('cabin')
                    setIsHovered('1')}}
                onMouseLeave={() => {
                    setHoveredWork(null)
                    setIsHovered([])}}
                onClick={() => {
                    
                    setSelectedWork('cabin')}}>
                </motion.video>
            </button>
                
                {/* Background Glow */}
                <video src="/CCS/montagelow.mp4" 
                className="absolute -z-10 rounded-full blur-3xl w-full h-screen/2 object-cover saturate-200 opacity-0 dark:opacity-100"
                autoPlay muted loop
                >
                </video>

            <motion.div className="col-span-2 mb-2 font-base" variants={animateInChild}>
                <button className={`font-medium text-lg tracking-tighter p-1 w-12 h-7 mr-0.5 rounded-full 
                flex items-center justify-center border-1.5 border-foreground mb-1
                hover:bg-foreground hover:text-background hover:scale-90 transition-transform
                ${isHovered.includes('2') ? "bg-foreground text-background scale-90" : ''}`}
                onClick={() => setSelectedWork('cocktail')}>
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
                <h1 className="text-7xl font-medium tracking-tighter leading-tighter mb-2 mr-20">Cocktail Conversations</h1>
                <h1 className="text-2xl tracking-tighter mb-6 mr-10">Brand Campaign for Singapore Airlines</h1>
                <p className="mr-20">If there was a drink to match every personality, how would your bespoke cocktail look and taste like?
                </p>
            </motion.div>

            <button className="col-span-5 rounded-lg mb-4">
                <motion.video src="/Cocktail/montage.mp4" 
                className="rounded-lg shadow-standard w-full h-135 object-cover object-[0_30%]"
                autoPlay muted loop
                variants={animateInChild}
                whileHover={{scale:0.99}}
                transition={{duration:0.10}}
                onMouseEnter={() => {
                    setHoveredWork('cocktail')
                    setIsHovered('2')}}
                onMouseLeave={() => {
                    setHoveredWork(null)
                    setIsHovered([])}}
                onClick={() => setSelectedWork('cocktail')}>
                </motion.video>
            </button>
            
                {/* Background Glow */}
                <video src="/Cocktail/montage.mp4" 
                className="absolute top-1/4 -z-10 rounded-full blur-3xl w-full h-screen/2 object-cover saturate-200 opacity-0 dark:opacity-60"
                autoPlay muted loop
                >
                </video>

            <motion.div className="col-span-2 mb-2 font-base" variants={animateInChild}
            onClick={() => setSelectedWork('ghibli')}>
                <button className={`font-medium text-lg tracking-tighter p-1 w-12 h-7 mr-0.5 rounded-full 
                flex items-center justify-center border-1.5 border-foreground mb-1
                hover:bg-foreground hover:text-background hover:scale-90 transition-transform
                ${isHovered.includes('3') ? "bg-foreground text-background scale-90" : ''}`}
                onClick={() => setSelectedWork('ghibli')}>
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
                <h1 className="text-7xl font-medium tracking-tighter leading-tighter mb-2 mr-20">The World of Studio Ghibli</h1>
                <h1 className="text-2xl tracking-tighter mb-6 mr-10">Marketing Campaign for ArtScience Museum</h1>
                <p className="mr-10">Explore the World of Studio Ghibli at ArtScience Museum. Be spirited away into the magical scenes from My Neighbor Totoro, Kiki’s Delivery Service, and other iconic films through immersive theatrical sets, whimsical art installations and more.​
                </p>
            </motion.div>

            <button className="col-span-5 rounded-lg mb-4">
                <motion.video src="/ghibli/banner.mp4" 
                className="rounded-lg shadow-standard w-full h-135 object-cover"
                autoPlay muted loop
                variants={animateInChild}
                whileHover={{scale:0.99}}
                transition={{duration:0.10}}
                onMouseEnter={() => {
                    setHoveredWork('ghibli')
                    setIsHovered('3')}}
                onMouseLeave={() => {
                    setHoveredWork(null)
                    setIsHovered([])}}
                onClick={() => setSelectedWork('ghibli')}>
                </motion.video>
            </button>

                {/* Background Glow */}
                <video src="/ghibli/banner.mp4" 
                className="absolute top-2/4 -mt-40 -z-10 rounded-full blur-3xl w-full h-screen/2 object-cover saturate-200 opacity-0 dark:opacity-100"
                autoPlay muted loop
                >
                </video>

            <motion.div className="col-span-2 mb-2 font-base" variants={animateInChild}
            onClick={() => setSelectedWork('ghibli')}>
                <button className={`font-medium text-lg tracking-tighter p-1 w-12 h-7 mr-0.5 rounded-full 
                flex items-center justify-center border-1.5 border-foreground mb-1
                hover:bg-foreground hover:text-background hover:scale-90 transition-transform
                ${isHovered.includes('4') ? "bg-foreground text-background scale-90" : ''}`}
                onClick={() => setSelectedWork('jolli')}>
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
                <h1 className="text-7xl font-medium tracking-tighter leading-tighter mb-2 mr-20 -ml-1">JolliEverAfter</h1>
                <h1 className="text-2xl tracking-tighter mb-6 mr-10">Social Media Campaign for Jollibee</h1>
                <p className="mr-10">Explore the World of Studio Ghibli at ArtScience Museum, where imagination begins.
                </p>
            </motion.div>

            <button className="col-span-5 rounded-lg mb-4">
                <motion.video src="/jollieverafter/teaser.mp4" 
                className="rounded-lg shadow-standard w-full h-135 object-cover object-[0_35%]"
                autoPlay muted loop
                variants={animateInChild}
                whileHover={{scale:0.99}}
                transition={{duration:0.10}}
                onMouseEnter={() => {
                    setHoveredWork('jolli')
                    setIsHovered('4')}}
                onMouseLeave={() => {
                    setHoveredWork(null)
                    setIsHovered([])}}
                onClick={() => setSelectedWork('jolli')}>
                </motion.video>
            </button>

                {/* Background Glow */}
                <video src="/jollieverafter/teaser.mp4" 
                className="absolute top-2/3 -mt-56 blur-3xl -z-10 rounded-full w-full  h-2/4 object-cover saturate-200 opacity-0 dark:opacity-60"
                autoPlay muted loop
                >
                </video>

            <motion.div className="col-span-2 mb-2 font-base" variants={animateInChild}
            onClick={() => setSelectedWork('uniqlo1')}>
                <button className={`font-medium text-lg tracking-tighter p-1 w-12 h-7 mr-0.5 rounded-full 
                flex items-center justify-center border-1.5 border-foreground mb-1
                hover:bg-foreground hover:text-background hover:scale-90 transition-transform
                ${isHovered.includes('5') ? "bg-foreground text-background scale-90" : ''}`}
                onClick={() => setSelectedWork('uniqlo1')}>
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
                <h1 className="text-7xl font-medium tracking-tighter leading-tighter mb-2 mr-20 -ml-1">Your Stage Now Live</h1>
                <h1 className="text-2xl tracking-tighter mb-6 mr-10">In-Store Displays for Uniqlo</h1>
                <p className="mr-10">Explore the World of Studio Ghibli at ArtScience Museum, where imagination begins.
                </p>
            </motion.div>

            <button className="col-span-5 rounded-lg mb-4">
                <motion.video src="/uniqlo1/montage.mp4" 
                className="rounded-lg shadow-standard w-full h-135 object-cover"
                autoPlay muted loop
                variants={animateInChild}
                whileHover={{scale:0.99}}
                transition={{duration:0.10}}
                onMouseEnter={() => {
                    setHoveredWork('uniqlo')
                    setIsHovered('5')}}
                onMouseLeave={() => {
                    setHoveredWork(null)
                    setIsHovered([])}}
                onClick={() => setSelectedWork('uniqlo1')}>
                </motion.video>
            </button>

            

            

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

export default BestWorkPage;