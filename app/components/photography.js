
'use client'
import { easeOut } from "framer-motion";
import * as motion from "framer-motion/client"
import React from 'react';


const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.15, duration:0.5, ease:easeOut}
    }
}
const animateInChild ={
hidden: {opacity:0, y:20},
show: {
    opacity:1, y:0, 
    transition: {duration:0.3, ease:easeOut}
    }
}

const PhotographyPage = ({className, setSelectedWork}) => {

  return (
    <motion.div className={`grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 font-[family-name:var(--font-geist-sans)] min-h-screen gap-3 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

        {/* Personal */}
        <motion.div 
        className="group col-span-3 h-[600px] 2xl:h-5/6 tracking-tight relative z-10 overflow-hidden rounded-3xl cursor-pointer shadow hover:shadow-none" 
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}
        onClick={() => setSelectedWork('street')}>

            {/* Image */}
            <img 
            className="w-full h-full inset-0 object-cover blur-none md:group-hover:blur-lg"
            src="/Photography/street/cover2.jpg">
            </img>

            {/* Gradient */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/90 to-transparent rounded-t-lg"></div>

            {/* Text */}
            <div className="absolute inset-0 flex flex-col gap-1 items-start justify-start p-7 md:pt-8">

                <h1 className="text-4.5xl group-hover:text-6xl font-medium text-white tracking-tighter leading-tight mb-1 transition-all duration-300">
                    Digital
                </h1>

                <h1 className="text-lg ml-1 text-white tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-200">
                    Lorem ipseum dolor sit amet.
                </h1>

                <button className={`absolute right-6 font-medium text-lg tracking-tighter p-1 px-2  rounded-full 
                flex items-center justify-center border-1 border-white text-white cursor-pointer
                group-hover:bg-white group-hover:text-black group-hover:scale-90 group-hover:-m-3 transition-all duration-200`}>
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

                <h1 className="absolute opacity-0 group-hover:opacity-100 text-md text-white tracking-tight bottom-5 gap-4 flex transition-all duration-300">
                    <p className="font-medium">Equipment:</p>
                    <p>Leica M10-P</p>
                </h1>

            </div>
        </motion.div>

        {/* Film */}
        <motion.div 
        className="group col-span-3 h-[600px] 2xl:h-5/6 mt-2 md:mt-0 2xl:mt-0 tracking-tight relative z-10 overflow-hidden rounded-3xl shadow hover:shadow-none"
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}
        onClick={() => setSelectedWork('film')}>
        
        
        <img 
            className="w-full h-full inset-0 object-cover rounded-lg blur-none md:group-hover:blur-lg transition-all duration-300"
            src="/Photography/film/cover4.jpg"/>
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/70 to-transparent rounded-t-lg"></div>
        <div className="group absolute inset-0 flex flex-col gap-1 items-start justify-start p-7 md:pt-8">

            <h1 className="text-4.5xl group-hover:text-6xl font-medium text-white tracking-tighter leading-tight mb-1 transition-all duration-300">
                Film
            </h1>

            <h1 className="text-lg ml-1 text-white tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-200">
                Lorem ipseum dolor sit amet.
            </h1>
            

            <button className={`absolute right-6 font-medium text-lg tracking-tighter p-1 px-2  rounded-full 
                flex items-center justify-center border-1 border-white text-white cursor-pointer
                group-hover:bg-white group-hover:text-black group-hover:scale-90 group-hover:-m-3 transition-all duration-200`}>
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
        </div>
        <img 
            className="absolute top-24 h-screen scale-100 rounded-full blur-3xl -z-40 opacity-0 dark:opacity-100"
            src="/Photography/film/cover.jpg">
        </img>
        </motion.div>

        {/* BBH */}
        <motion.div 
        className="group col-span-3 h-[600px] 2xl:h-5/6 mt-2 md:mt-0 2xl:mt-0 tracking-tight relative z-10 overflow-hidden rounded-3xl shadow hover:shadow-none"
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}
        onClick={() => setSelectedWork('bbh')}>
        
        
        <img 
            className="w-full h-full inset-0 object-cover rounded-lg blur-none md:group-hover:blur-lg transition-all duration-300"
            src="/Photography/bbh/cover.jpg"/>

        
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black/80 to-transparent rounded-t-lg"></div>

        
        <div className="group absolute inset-0 flex flex-col gap-1 items-start justify-start p-7 md:pt-8">
            <h1 className="text-4.5xl text-[#e9e9e9] dark:text-white font-medium tracking-tight">BBH</h1>
            <p className="mt-1 ml-0.5 text-2xl text-[#e9e9e9] dark:text-white font-medium tracking-tight">Profile Headshots</p>
            

            <button className={`absolute right-6 font-medium text-lg tracking-tighter p-1 px-2  rounded-full 
            flex items-center justify-center border-1 border-white text-white cursor-pointer
            group-hover:bg-white group-hover:text-black group-hover:scale-90 group-hover:-m-3 transition-all duration-200`}>
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
        </div>
        <img 
            className="absolute top-24 h-screen scale-100 rounded-full blur-3xl -z-40 opacity-0 dark:opacity-100"
            src="/Photography/bbh/cover.jpg">
        </img>
        </motion.div>

        {/* Stressed */}
        <motion.div 
        className="group col-span-3 h-[600px] 2xl:h-5/6 mt-2 lg:mt-0 2xl:mt-0 tracking-tight relative z-10 overflow-hidden rounded-3xl shadow hover:shadow-none"
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}
        onClick={() => setSelectedWork('stressed')}>
        
        {/* Image */}
        <img 
            className="w-full h-full inset-0 object-cover rounded-lg blur-none md:group-hover:blur-lg transition-all duration-300 object-[42%]"
            src="/Photography/stressed/4.jpg"/>

        {/* Gradient */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black/80 to-transparent rounded-t-lg"></div>

        {/* Text */}
        <div className="group absolute inset-0 flex flex-col gap-1 items-start justify-start p-7 md:pt-8">
            <h1 className="text-4.5xl text-[#e9e9e9] dark:text-white font-medium tracking-tight w-5/6">Class of 2016</h1>
            {/* <p className="-mt-1 ml-1 text-2xl text-[#e9e9e9] dark:text-white font-medium tracking-tight">Profile Headshots</p> */}
            {/* <h2 className="text-xl text-white tracking-tight">Subheader</h2> */}

            <button className={`absolute right-6 font-medium text-lg tracking-tighter p-1 px-2  rounded-full 
                flex items-center justify-center border-1 text-white cursor-pointer backdrop-blur-sm
                group-hover:bg-white group-hover:text-black group-hover:scale-90 group-hover:-m-3 transition-all duration-200`}>
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
        </div>
        <img 
            className="absolute top-24 h-screen scale-100 rounded-full blur-3xl -z-40 opacity-0 dark:opacity-100"
            src="/Photography/bbh/cover.jpg">
        </img>
        </motion.div>

        {/* BTS */}
        {/* <motion.div 
        className="group col-span-3 h-[600px] mt-2 xl:mt-0 2xl:h-5/6 tracking-tight relative z-10 overflow-hidden rounded-lg" 
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}
        onClick={() => setSelectedWork('bts')}> 

            <img 
            className="w-auto h-full inset-0 object-cover rounded-lg blur-none md:group-hover:blur-lg transition-all duration-300"
            src="/Photography/bts/cover.jpg">
            </img>

            <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black/80 to-transparent rounded-t-lg"></div>
            <div className="group absolute inset-0 flex flex-col gap-1 items-start justify-start p-7 md:pt-8">

                <h1 className="text-4.5xl text-[#e9e9e9] dark:text-white font-medium tracking-tight">
                    Behind the Scenes
                </h1>

                <button className={`absolute right-6 font-medium text-lg tracking-tighter p-1 px-2  rounded-full 
                flex items-center justify-center border-1 border-white text-white cursor-pointer
                group-hover:bg-white group-hover:text-black group-hover:scale-90 group-hover:-m-3 transition-all duration-200`}>
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
            </div>
        </motion.div> */}

        {/* Unshackle */}
        {/* <motion.div 
        className="group col-span-3 h-[600px] mt-2 xl:mt-0 2xl:h-5/6 tracking-tight relative z-10 overflow-hidden rounded-3xl shadow hover:shadow-none" 
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}
        onClick={() => setSelectedWork('unshackle')}> 

            
            <img 
            className="w-auto h-full inset-0 object-cover rounded-lg blur-none md:group-hover:blur-lg transition-all duration-300 object-[58%]"
            src="/Photography/unshackle/cover.JPG">
            </img>

            
            <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black/80 to-transparent rounded-t-lg"></div>

            
            <div className="group absolute inset-0 flex flex-col gap-1 items-start justify-start p-7 md:pt-8">

                <h1 className="text-4.5xl text-[#e9e9e9] dark:text-white font-medium tracking-tight">
                    Unshackle:
                </h1>
                <p className="-mt-1 ml-0.5 text-2xl text-[#e9e9e9] dark:text-white font-medium tracking-tight">Behind the Scenes</p>

                <button className={`absolute right-6 font-medium text-lg tracking-tighter p-1 px-2  rounded-full 
                flex items-center justify-center border-1 border-white text-white cursor-pointer
                group-hover:bg-white group-hover:text-black group-hover:scale-90 group-hover:-m-3 transition-all duration-200`}>
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
            </div>
        </motion.div> */}

    </motion.div>
  );
};

export default PhotographyPage;
