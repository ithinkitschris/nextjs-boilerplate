
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
    <motion.div className={`grid grid-cols-6 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

        
        
      {/* Full-Width Image */}
        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/photography/bbh/bbh8.jpg"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

      
        {/* Three Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full mb-2 gap-2">
            <motion.img
                src="/photography/bbh/bbh1.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/photography/bbh/bbh2.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />

            <motion.img
                src="/photography/bbh/bbh3.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
        </div>

        {/* Three Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full mb-2 gap-2">
            <motion.img
                src="/photography/bbh/bbh5.jpg"
                alt="Description of Image 4"
                className="col-span-2 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/photography/bbh/bbh4.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />

            <motion.img
                src="/photography/bbh/bbh6.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
        </div>

        {/* Three Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full mb-2 gap-2">
            <motion.img
                src="/photography/bbh/bbh7.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/photography/bbh/bbh9.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />

            <motion.img
                src="/photography/bbh/bbh10.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg shadow-lg"
                variants={animateInChild}
            />
        </div>

       

    </motion.div>
  );
};

export default BBH;
