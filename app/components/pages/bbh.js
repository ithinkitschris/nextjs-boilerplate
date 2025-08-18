
'use client'
import * as motion from "framer-motion/client"
import React from 'react';


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

const BBH = ({className}) => {
  return (
    <motion.div className={`grid grid-cols-6 md:pt-6 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

        

      
        {/* Three Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full mb-1 lg:mb-2 gap-1 lg:gap-2">
            <motion.img
                src="/Photography/bbh/bbh1.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-full object-cover rounded-[18pt]"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/bbh/bbh2.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-full object-cover rounded-[18pt]"
                variants={animateInChild}
            />

            <motion.img
                src="/Photography/bbh/bbh3.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-full object-cover rounded-[18pt]"
                variants={animateInChild}
            />
        </div>

        {/* Two Images */}
        <motion.div className="grid grid-cols-6 col-span-full mb-1 lg:mb-2 gap-1 lg:gap-2 h-96 lg:h-[800px]" variants={animateInChild} >
            <img
            src="/Photography/bbh/bbh11.jpg"
            className="col-span-2 h-96 lg:h-[800px] w-full object-cover rounded-[18pt]"
            />
            <img
            src="/Photography/bbh/bbh12.jpg"
            className="col-span-4 h-96 lg:h-[800px] w-full object-cover rounded-[18pt] object-[50%_30%]"
            />
        </motion.div>

        {/* Three Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full mb-1 lg:mb-2 gap-1 lg:gap-2">
            <motion.img
                src="/Photography/bbh/bbh5.jpg"
                alt="Description of Image 4"
                className="col-span-2 h-full w-full object-cover rounded-[18pt]"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/bbh/bbh4.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-auto w-full object-cover rounded-[18pt]"
                variants={animateInChild}
            />

            <motion.img
                src="/Photography/bbh/bbh6.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-full object-cover rounded-[18pt]"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="col-span-full mb-1 lg:mb-2 gap-1 lg:gap-2" variants={animateInChild} >
            <img
            src="/Photography/bbh/bbh8.jpg"
            className="h-auto w-full object-cover rounded-[18pt]"
            />
        </motion.div>

        {/* Three Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full lg:mb-2 gap-1 lg:gap-2 mb-24">
            <motion.img
                src="/Photography/bbh/bbh7.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-full object-cover rounded-[18pt] "
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/bbh/bbh9.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-full object-cover rounded-[18pt] "
                variants={animateInChild}
            />

            <motion.img
                src="/Photography/bbh/bbh10.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-full object-cover rounded-[18pt] "
                variants={animateInChild}
            />
        </div>

       

    </motion.div>
  );
};

export default BBH;
