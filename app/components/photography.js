
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
    <motion.div className={`grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 font-[family-name:var(--font-geist-sans)] min-h-screen ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

        {/* Personal */}
        <motion.div 
        className="group col-span-3 h-[600px] 2xl:h-5/6 tracking-tight relative z-10 overflow-hidden rounded-lg cursor-pointer md:mr-2" 
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}
        onClick={() => setSelectedWork('street')}>

            {/* Image */}
            <img 
            className="w-full h-full inset-0 object-cover rounded-lg blur-none md:group-hover:blur-sm transition-all duration-300"
            src="/photography/street/cover2.jpg">
            </img>

            {/* Gradient */}
            <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black/80 to-transparent rounded-t-lg"></div>

            {/* Text */}
            <div className="absolute inset-0 flex flex-col gap-1 items-start justify-start p-6">

                <h1 className="text-5xl text-[#e9e9e9] dark:text-white font-medium tracking-tight">
                    Personal
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
        </motion.div>

            {/* Background Glow */}
            {/* <img 
            className="absolute top-28 rounded-full h-screen left-14 scale-120 blur-3xl -z-50 opacity-0 dark:opacity-100"
            src="/photography/street/cover2.jpg">
            </img> */}

        {/* BBH */}
        <motion.div 
        className="group col-span-3 h-[600px] 2xl:h-5/6 mt-2 2xl:mt-0 tracking-tight relative z-10 overflow-hidden rounded-lg md:mr-2"
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}
        onClick={() => setSelectedWork('bbh')}>
        
        {/* Image */}
        <img 
            className="w-full h-full inset-0 object-cover rounded-lg blur-none md:group-hover:blur-sm transition-all duration-300"
            src="/photography/bbh/cover.jpg"/>

        {/* Gradient */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black/80 to-transparent rounded-t-lg"></div>

        {/* Text */}
        <div className="group absolute inset-0 flex flex-col gap-1 items-start justify-start p-6">
            <h1 className="text-5xl text-[#e9e9e9] dark:text-white font-medium tracking-tight">BBH</h1>
            <p className="-mt-1 ml-1 text-2xl text-[#e9e9e9] dark:text-white font-medium tracking-tight">Profile Headshots</p>
            {/* <h2 className="text-xl text-white tracking-tight">Subheader</h2> */}

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
            src="/photography/bbh/cover.jpg">
        </img>
        </motion.div>

        {/* Background Glow */}
            {/* <img 
            className="absolute top-0 left-96 rounded-full blur- -z-40 opacity-70"
            src="/photography/bbh/cover.jpg">
            </img> */}

        {/* BTS */}
        <motion.div 
        className="group col-span-3 h-[600px] mt-2 2xl:mt-0 2xl:h-5/6 tracking-tight relative z-10 overflow-hidden rounded-lg md:mr-2" 
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}
        onClick={() => setSelectedWork('bts')}> 

            {/* Image */}
            <img 
            className="w-auto h-full inset-0 object-cover rounded-lg blur-none md:group-hover:blur-sm transition-all duration-300"
            src="/photography/bts/cover.jpg">
            </img>

            {/* Gradient */}
            <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black/80 to-transparent rounded-t-lg"></div>

            {/* Text */}
            <div className="group absolute inset-0 flex flex-col gap-1 items-start justify-start p-6">

                <h1 className="text-5xl text-[#e9e9e9] dark:text-white font-medium tracking-tight">
                    Behind the Scenes
                </h1>

                {/* <h2 className="text-xl text-white tracking-tight">
                    Subheader
                </h2> */}

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

        
        </motion.div>

            {/* <img 
            className="absolute top-24 right-48 w-screen/4 h-screen scale-125 rounded-full blur-3xl -z-20 opacity-0 dark:opacity-50"
            src="/photography/bts/cover.jpg">
            </img> */}


        {/* Unshackle */}
        <motion.div 
        className="group col-span-3 h-[600px] mt-2 2xl:mt-0 2xl:h-5/6 tracking-tight relative z-10 overflow-hidden rounded-lg " 
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}
        onClick={() => setSelectedWork('unshackle')}> 

            {/* Image */}
            <img 
            className="w-auto h-full inset-0 object-cover rounded-lg blur-none md:group-hover:blur-sm transition-all duration-300 object-[58%]"
            src="/photography/unshackle/cover.jpg">
            </img>

            {/* Gradient */}
            <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black/80 to-transparent rounded-t-lg"></div>

            {/* Text */}
            <div className="group absolute inset-0 flex flex-col gap-1 items-start justify-start p-6">

                <h1 className="text-5xl text-[#e9e9e9] dark:text-white font-medium tracking-tight">
                    Unshackle:
                </h1>
                <p className="-mt-1 ml-0.5 text-2xl text-[#e9e9e9] dark:text-white font-medium tracking-tight">Behind the Scenes</p>

                {/* <h2 className="text-xl text-white tracking-tight">
                    Subheader
                </h2> */}

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
        </motion.div>

    </motion.div>
  );
};

export default PhotographyPage;
