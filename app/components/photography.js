
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
    <motion.div className={`grid grid-cols-12 font-[family-name:var(--font-geist-sans)] min-h-screen ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

        {/* Personal */}
        <motion.div 
        className="group col-span-3 mr-2 tracking-tight h-screen/1.1 relative z-10 overflow-hidden rounded-lg cursor-pointer" 
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}
        onClick={() => setSelectedWork('street')}>

            {/* Image */}
            <img 
            className="w-auto h-full inset-0 object-cover rounded-lg  "
            src="/photography/street/cover2.jpg">
            </img>

            {/* Gradient */}
            <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black/80 to-transparent rounded-t-lg"></div>

            {/* Text */}
            <div className="absolute inset-0 flex flex-col gap-1 items-start justify-start p-6">

                <h1 className="text-5xl text-white font-medium tracking-tight">
                    Personal
                </h1>

                <button className={`absolute right-6 font-medium text-lg tracking-tighter p-1 px-2 mt-1 mr-1 rounded-full 
                flex items-center justify-center border-1.5 border-white text-white
                group-hover:bg-white group-hover:text-black group-hover:scale-90 transition-transform`}>
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
            <img 
            className="absolute top-28 rounded-full h-screen left-14 scale-120 blur-3xl -z-50 transition-opacity opacity-0 dark:opacity-100"
            src="/photography/street/cover2.jpg">
            </img>

        {/* BBH */}
        <motion.div 
        className="group col-span-3 mr-2 tracking-tight relative h-screen/1.1 z-10 overflow-hidden rounded-lg"
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}
        onClick={() => setSelectedWork('bbh')}>
        
        {/* Image */}
        <img 
            className="group w-full h-full object-cover rounded-lg transform transition-transform duration-150 hover:scale-90 hover:brightness-50"
            src="/photography/bbh/cover.jpg"/>

        {/* Gradient */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black/80 to-transparent rounded-t-lg"></div>

        {/* Text */}
        <div className="group absolute inset-0 flex flex-col gap-1 items-start justify-start p-6">
            <h1 className="text-5xl text-white font-medium tracking-tight">BBH</h1>
            <p className="-mt-1 ml-1 text-2xl text-white font-medium tracking-tight">Profile Headshots</p>
            {/* <h2 className="text-xl text-white tracking-tight">Subheader</h2> */}

            <button className={`absolute right-6 font-medium text-lg tracking-tighter p-1 px-2 mt-1 mr-1 rounded-full 
                flex items-center justify-center border-1.5 border-white text-white
                group-hover:bg-white group-hover:text-black group-hover:scale-90 transition-transform`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 2 20 20"
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
        </div>
        {/* <img 
            className="absolute top-24 h-5/6 scale-100 rounded-full blur-3xl -z-40 opacity-0 dark:opacity-100"
            src="/photography/bbh/cover.jpg">
        </img> */}
        </motion.div>

        {/* Background Glow */}
            <img 
            className="absolute top-20 scale-110 ml-20 left-1/4 h-5/6 rounded-full blur-3xl -z-40 transition-opacity opacity-0 dark:opacity-70"
            src="/photography/bbh/cover.jpg">
            </img>

        {/* BTS */}
        <motion.div 
        className="group col-span-3 mr-2 tracking-tight h-screen/1.1 relative z-10 overflow-hidden rounded-lg" 
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}
        onClick={() => setSelectedWork('bts')}> 

            {/* Image */}
            <img 
            className="bg-black w-auto h-full object-cover rounded-lg hover:brightness-50 hover:scale-95"
            src="/photography/bts/cover.jpg">
            </img>

            {/* Gradient */}
            <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black/80 to-transparent rounded-t-lg"></div>

            {/* Text */}
            <div className="group absolute inset-0 flex flex-col gap-1 items-start justify-start p-6">

                <h1 className="text-5xl text-white font-medium tracking-tight">
                    Behind the Scenes
                </h1>

                {/* <h2 className="text-xl text-white tracking-tight">
                    Subheader
                </h2> */}

                <button className={`absolute right-6 font-medium text-lg tracking-tighter p-1 px-2 mt-1 mr-1 rounded-full 
                flex items-center justify-center border-1.5 border-white text-white
                group-hover:bg-white group-hover:text-black group-hover:scale-90 transition-transform`}>
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

        <img 
        className="absolute top-24 right-48 w-screen/4 h-screen scale-125 rounded-full blur-3xl -z-20 opacity-0 dark:opacity-50"
        src="/photography/bts/cover.jpg">
        </img>


        {/* Unshackle */}
        <motion.div 
        className="group col-span-3 mr-2 tracking-tight h-screen/1.1 relative z-10 overflow-hidden rounded-lg" 
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}
        onClick={() => setSelectedWork('unshackle')}> 

            {/* Image */}
            <img 
            className="bg-black w-auto h-full object-cover rounded-lg object-[58%]"
            src="/photography/unshackle/cover.jpg">
            </img>

            {/* Gradient */}
            <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-black/80 to-transparent rounded-t-lg"></div>

            {/* Text */}
            <div className="group absolute inset-0 flex flex-col gap-1 items-start justify-start p-6">

                <h1 className="text-5xl text-white font-medium tracking-tight">
                    Unshackle:
                </h1>
                <p className="-mt-1 ml-0.5 text-2xl text-white font-medium tracking-tight">Behind the Scenes</p>

                {/* <h2 className="text-xl text-white tracking-tight">
                    Subheader
                </h2> */}

                <button className={`absolute right-6 font-medium text-lg tracking-tighter p-1 px-2 mt-1 mr-1 rounded-full 
                flex items-center justify-center border-1.5 border-white text-white
                group-hover:bg-white group-hover:text-black group-hover:scale-90 transition-transform`}>
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
