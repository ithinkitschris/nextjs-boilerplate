
'use client'
import * as motion from "framer-motion/client"
import React from 'react';


const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.1, duration:0.5, ease:"easeOut"}
    }
}
const animateInChild ={
hidden: {opacity:0, y:20},
show: {
    opacity:1, y:0, 
    transition: {duration:0.3, ease:"easeOut"}
    }
}

const StressedLa = ({className}) => {
  return (
    <motion.div className={`grid grid-cols-6 md:pt-14 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

      {/* Two Images Side by Side */}
        <div className="grid grid-cols-2 col-span-full mb-1 gap-1 md:gap-2">
            <motion.img
                src="/Photography/stressed/2.jpg"
                alt="Description of Image 2"
                className="col-span-1 h-full w-full object-cover rounded-[18pt] shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/stressed/3.jpg"
                alt="Description of Image 3"
                className="col-span-1 h-full w-full object-cover rounded-[18pt] shadow-lg"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="col-span-full mb-1 lg:mb-2" variants={animateInChild} >
            <img
            src="/Photography/stressed/4.jpg"
            className="h-auto w-full object-cover rounded-[18pt] shadow-lg"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-2 col-span-full mb-1 gap-1 md:gap-2">
            <motion.img
                src="/Photography/stressed/5.jpg"
                alt="Description of Image 2"
                className="col-span-1 h-full w-full object-cover rounded-[18pt] shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/stressed/13.jpg"
                alt="Description of Image 3"
                className="col-span-1 h-full w-full object-cover rounded-[18pt] shadow-lg"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="col-span-full mb-1 lg:mb-2 md:hidden" variants={animateInChild} >
            <img
            src="/Photography/stressed/6.jpg"
            className="h-auto w-full object-cover rounded-[18pt] shadow-lg"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-2 col-span-full mb-1 gap-1 md:gap-2">
            <motion.img
                src="/Photography/stressed/8.jpg"
                alt="Description of Image 2"
                className="col-span-1 h-full w-full object-cover rounded-[18pt] shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/stressed/16.jpg"
                alt="Description of Image 3"
                className="col-span-1 h-full w-full object-cover rounded-[18pt] shadow-lg"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="col-span-full mb-1 lg:mb-2" variants={animateInChild} >
            <img
            src="/Photography/stressed/10.jpg"
            className="h-auto w-full object-cover rounded-[18pt] shadow-lg"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-2 col-span-full mb-1 gap-1 md:gap-2">
            <motion.img
                src="/Photography/stressed/7.jpg"
                alt="Description of Image 2"
                className="col-span-1 h-full w-full object-cover rounded-[18pt] shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/stressed/9.jpg"
                alt="Description of Image 3"
                className="col-span-1 h-full w-full object-cover rounded-[18pt] shadow-lg"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="col-span-full mb-1 lg:mb-2 overflow-hidden rounded-[18pt]" variants={animateInChild} >
            <img
            src="/Photography/stressed/14.jpg"
            className="h-auto w-full object-cover rounded-[18pt] shadow-lg scale-105"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-2 col-span-full mb-1 gap-1 md:gap-2 mb-32">
            <motion.img
                src="/Photography/stressed/11.jpg"
                alt="Description of Image 2"
                className="col-span-1 h-full w-full object-cover rounded-[18pt] shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/stressed/12.jpg"
                alt="Description of Image 3"
                className="col-span-1 h-full w-full object-cover rounded-[18pt] shadow-lg"
                variants={animateInChild}
            />
        </div>

        

        
    </motion.div>
  );
};

export default StressedLa;
