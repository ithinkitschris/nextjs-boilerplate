
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

const PhotographyPage = ({className}) => {
  return (
    <motion.div className={`grid grid-cols-6 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

      {/* Full-Width Image */}
        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/photography/27.jpg"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

      {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-2">
            <motion.img
                src="/photography/26.jpg"
                alt="Description of Image 2"
                className="col-span-2 h-full w-full object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/photography/25.jpg"
                alt="Description of Image 3"
                className="col-span-4 h-full w-full object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="mt-2 col-span-full mb-2" variants={animateInChild} >
            <img
            src="/photography/24.jpg"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        {/* Three Images Side by Side */}
        {/* <div className="grid grid-cols-6 col-span-full gap-2 mb-2">
            <motion.img
                src="/photography/245.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/photography/23.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/photography/21.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
        </div> */}

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-2">
            <motion.img
                src="/photography/22.jpg"
                alt="Description of Image 3"
                className="col-span-3 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/photography/21.jpg"
                alt="Description of Image 3"
                className="col-span-3 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="mt-2 col-span-full" variants={animateInChild} >
            <img
            src="/photography/19.jpg"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

         {/* Two Images Side by Side
         <div className="grid grid-cols-6 col-span-full gap-2">
            <motion.img
                src="/photography/18.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/photography/17.jpg"
                alt="Description of Image 3"
                className="col-span-4 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
        </div> */}

        {/* Three Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full mt-2 gap-2">
            <motion.img
                src="/photography/15.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/photography/145.jpg"
                alt="Description of Image 3"
                className="col-span-1 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />

            <motion.img
                src="/photography/14.jpg"
                alt="Description of Image 3"
                className="col-span-3 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="mt-2 col-span-full mb-2" variants={animateInChild} >
            <img
            src="/photography/13.jpg"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-2">
            <motion.img
                src="/photography/12.jpg"
                alt="Description of Image 3"
                className="col-span-3 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/photography/11.jpg"
                alt="Description of Image 3"
                className="col-span-3 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
        </div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-2 mt-2">
            <motion.img
                src="/photography/10.jpg"
                alt="Description of Image 3"
                className="col-span-4 h-auto w-full object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/photography/9.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="mt-2 col-span-full mb-2" variants={animateInChild} >
            <img
            src="/photography/6.jpg"
            className="col-span-6 w-full h-2/3 object-cover rounded-lg shadow-lg"
            />
        </motion.div>

    </motion.div>
  );
};

export default PhotographyPage;
