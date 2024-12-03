
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

const BTS = ({className}) => {
  return (
    <motion.div className={`grid grid-cols-6 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

        
        
      {/* Full-Width Image */}
        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/bts/12.jpg"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        <motion.div className="col-span-3 mb-2 mr-1" variants={animateInChild} >
            <img
            src="/Photography/bts/10.jpg"
            className="h-full w-auto object-cover rounded-lg shadow-lg"
            />
        </motion.div>
        <motion.div className="col-span-3 mb-2 ml-1" variants={animateInChild} >
            <img
            src="/Photography/bts/11.jpg"
            className="h-full w-auto object-cover rounded-lg shadow-lg"
            />
        </motion.div>
        
        <motion.div className="col-span-2 mb-2 mr-1" variants={animateInChild} >
            <img
            src="/Photography/bts/7.jpg"
            className="h-full w-auto object-cover rounded-lg shadow-lg"
            />
        </motion.div>
        <motion.div className="col-span-2 mb-2 mr-1 ml-1" variants={animateInChild} >
            <img
            src="/Photography/bts/8.jpg"
            className="h-full w-auto object-cover rounded-lg shadow-lg"
            />
        </motion.div>
        <motion.div className="col-span-2 mb-2 ml-1" variants={animateInChild} >
            <img
            src="/Photography/bts/9.jpg"
            className="h-full w-auto object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        <motion.div className="col-span-3 mb-2 mr-1" variants={animateInChild} >
            <img
            src="/Photography/bts/4.jpg"
            className="h-full w-auto object-cover rounded-lg shadow-lg"
            />
        </motion.div>
        <motion.div className="col-span-3 mb-2 ml-1" variants={animateInChild} >
            <img
            src="/Photography/bts/6.jpg"
            className="h-full w-auto object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        {/* Full-Width Image */}
        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/bts/1.jpg"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        <motion.div className="col-span-3 mb-2 mr-1" variants={animateInChild} >
            <img
            src="/Photography/bts/2.jpg"
            className="h-full w-auto object-cover rounded-lg shadow-lg"
            />
        </motion.div>
        <motion.div className="col-span-3 mb-2 ml-1" variants={animateInChild} >
            <img
            src="/Photography/bts/3.jpg"
            className="h-full w-auto object-cover rounded-lg shadow-lg"
            />
        </motion.div>

      
        

       

    </motion.div>
  );
};

export default BTS;
