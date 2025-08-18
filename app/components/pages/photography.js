'use client'
import { easeOut } from "framer-motion";
import * as motion from "framer-motion/client"
import React from 'react';
import CornerArrow from '../ui/CornerArrow.js';

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

const PhotographyPage = ({className, toggleWork}) => {

  return (
    <motion.div className={`grid grid-cols-2 lg:grid-cols-4 font-[family-name:var(--font-geist-sans)] gap-1.5 lg:gap-3 lg:h-[600px] 2xl:h-[800px] ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

        {/* Personal */}
        <motion.div 
        className="group col-span-1 h-[350px] lg:h-full tracking-tight relative z-10 overflow-hidden rounded-[20px] cursor-pointer shadow hover:shadow-none" 
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}

        onClick={() => toggleWork('street')}>

            {/* Image */}
            <img 
            className="w-full h-full inset-0 object-cover blur-none md:group-hover:blur-sm transition-all duration-200"
            src="/Photography/street/cover2.jpg">
            </img>

            {/* Corner Arrow */}
            <CornerArrow className='p-2 hidden md:block'/>

            {/* Gradient */}
            <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-black/90 to-transparent rounded-t-lg"></div>

            {/* Text */}
            <div className="absolute inset-0 flex flex-col gap-1 items-start justify-start pt-4 lg:pt-6 pl-5">

                <h1 className="text-2xl md:text-3xl 2xl:text-4.5xl font-medium text-white tracking-tight leading-tight">
                    Digital
                </h1>

            </div>
        </motion.div>

        {/* Film */}
        <motion.div 
        className="group col-span-1 h-[350px] lg:h-full tracking-tight relative z-10 overflow-hidden rounded-[20px] shadow hover:shadow-none cursor-pointer"
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}

        onClick={() => toggleWork('film')}>
        
        {/* Cover */}
        <img className="w-full h-full inset-0 object-cover blur-none md:group-hover:blur-sm transition-all duration-200" src="/Photography/film/cover4.jpg"/>

        {/* Corner Arrow */}
        <CornerArrow className='p-2 hidden md:block'/>

        {/* Gradient */}
        <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-black/70 to-transparent rounded-t-lg"/>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-start justify-start pt-4 lg:pt-6 pl-5">
            <h1 className="text-2xl md:text-3xl 2xl:text-4.5xl font-medium text-white tracking-tight leading-tight">
                Film
            </h1> 
        </div>

        </motion.div>

        {/* Shot on iPhone */}
        <motion.div 
        className="group col-span-1 h-[350px] lg:h-full tracking-tight relative z-10 overflow-hidden rounded-[20px] shadow hover:shadow-none cursor-pointer"
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}

        onClick={() => toggleWork('shotoniphone')}>
        
        {/* Cover */}
        <img className="w-full h-full inset-0 object-cover blur-none md:group-hover:blur-sm transition-all duration-200" src="/Photography/iphone/staticcover.jpg"/>

        {/* Corner Arrow */}
        <CornerArrow className='p-2 hidden md:block'/>

        {/* Gradient */}
        <div className="absolute top-0 left-0 right-0 h-[30%] bg-gradient-to-b from-black/70 to-transparent rounded-t-lg"/>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-start justify-start pt-4 lg:pt-6 pl-5">
            <h1 className="text-2xl md:text-3xl 2xl:text-4.5xl font-medium text-white tracking-tight leading-tight">
                #shotoniPhone
            </h1> 
        </div>

        </motion.div>

        {/* BBH */}
        <motion.div 
        className="group col-span-1 h-[350px] lg:h-full tracking-tight relative z-10 overflow-hidden rounded-[20px] shadow hover:shadow-none cursor-pointer mb-20"
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: easeOut }}
        variants={animateInChild}

        onClick={() => toggleWork('bbh')}>
        
        {/* Image */}
        <div className="w-full h-full overflow-hidden">
            <img className="w-full h-full inset-0 object-cover object-[38%] scale-110 mt-2 blur-none md:group-hover:blur-sm transition-all duration-200" src="/Photography/bbh/cover.jpg"/>
        </div>
        
        {/* Corner Arrow */}
        <CornerArrow className='p-2 hidden md:block'/>

        {/* Gradient */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/50 to-transparent rounded-t-lg"/>

        {/* Text */}
        <div className="group absolute inset-0 flex flex-col gap-1 items-start justify-start pt-4 lg:pt-6 pl-5">
            <h1 className="text-xl md:text-3xl 2xl:text-4.5xl text-[#e9e9e9] dark:text-white font-medium tracking-tight leading-5 md:leading-7 2xl:leading-9 w-2/3">BBH Profile Headshots</h1>
        </div>
        </motion.div>

    </motion.div>
  );
};

export default PhotographyPage;
