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

const Film = ({className}) => {
  return (
    <motion.div className={`grid grid-cols-6 md:pt-6 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

        
        
      {/* Full-Width Image */}
        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/film/honne.jpg"
            className="h-auto w-full object-cover rounded-3xl"
            />
        </motion.div>

      {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-1 md:gap-2 mb-2">
            <motion.img
                src="/Photography/film/shanghai1.jpg"
                alt="Description of Image 2"
                className="relative col-span-2 h-full w-full object-cover rounded-l-3xl rounded-r-2xl"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/film/2.jpg"
                alt="Description of Image 3"
                className="col-span-4 h-full w-full object-cover rounded-r-3xl rounded-l-2xl"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/film/nyc1.jpg"
            className="h-auto w-full object-cover rounded-3xl"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-1 md:gap-2 mb-2">
            <motion.img
                src="/Photography/film/shanghai2.jpg"
                alt="Description of Image 2"
                className="col-span-3 h-full w-full object-cover rounded-l-3xl rounded-r-2xl"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/film/shanghai3.jpg"
                alt="Description of Image 3"
                className="col-span-3 h-full w-full object-cover rounded-r-3xl rounded-l-2xl"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/film/aurora.jpg"
            className="h-auto w-full object-cover rounded-3xl"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-1 md:gap-2 mb-2">
            <motion.img
                src="/Photography/film/london1.jpeg"
                alt="Description of Image 2"
                className="col-span-3 h-full w-full object-cover rounded-l-3xl rounded-r-2xl"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/film/london2.jpeg"
                alt="Description of Image 3"
                className="col-span-3 h-full w-full object-cover rounded-r-3xl rounded-l-2xl"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/film/1.jpg"
            className="h-auto w-full object-cover rounded-3xl"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-1 md:gap-2 mb-2">
            <motion.img
                src="/Photography/film/seoul3.jpg"
                alt="Description of Image 2"
                className="col-span-3 h-full w-full object-cover rounded-l-3xl rounded-r-2xl"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/film/seoul4.jpg"
                alt="Description of Image 3"
                className="col-span-3 h-full w-full object-cover rounded-r-3xl rounded-l-2xl"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/film/seoul.jpg"
            className="h-auto w-full object-cover rounded-3xl"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-1 md:gap-2 mb-2">
            <motion.img
                src="/Photography/film/NYC06-20.jpg"
                alt="Description of Image 2"
                className="col-span-3 h-full w-full object-cover rounded-l-3xl rounded-r-2xl hidden md:block"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/film/NYC06-22.jpg"
                alt="Description of Image 3"
                className="col-span-full md:col-span-3 h-full w-full object-cover rounded-r-3xl rounded-l-2xl"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/film/NYC06-13.jpg"
            className="h-auto w-full object-cover rounded-3xl"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-1 md:gap-2 mb-2">
            <motion.img
                src="/Photography/film/shanghai4.jpg"
                alt="Description of Image 2"
                className="col-span-3 h-full w-full object-cover rounded-l-3xl rounded-r-2xl"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/film/shanghai5.jpg"
                alt="Description of Image 3"
                className="col-span-3 h-full w-full object-cover rounded-r-3xl rounded-l-2xl"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/film/3.jpg"
            className="h-auto w-full object-cover rounded-3xl"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-1 md:gap-2 mb-2">
            <motion.img
                src="/Photography/film/airport1.jpg"
                alt="Description of Image 2"
                className="col-span-3 h-full w-full object-cover rounded-l-3xl rounded-r-2xl"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/film/airport2.jpg"
                alt="Description of Image 3"
                className="col-span-3 h-full w-full object-cover rounded-r-3xl rounded-l-2xl"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/film/london5.jpg"
            className="h-auto w-full object-cover rounded-3xl"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-1 md:gap-2 mb-24">
            <motion.img
                src="/Photography/film/stanford1.jpg"
                alt="Description of Image 2"
                className="col-span-full md:col-span-3 h-auto w-full object-cover rounded-l-3xl rounded-r-2xl"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/film/nyc3.jpg"
                alt="Description of Image 3"
                className="col-span-full md:col-span-3 h-auto w-full object-cover rounded-r-3xl rounded-l-2xl"
                variants={animateInChild}
            />
        </div>

    </motion.div>
  );
};

export default Film;
