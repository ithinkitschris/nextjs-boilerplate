
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

const Unshackle = ({className}) => {
  return (
    <motion.div className={`grid grid-cols-6 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

        
        
      {/* Full-Width Image */}
        <motion.div className="col-span-full mb-1 md:mb-2" variants={animateInChild} >
            <img
            src="/Photography/unshackle/1.JPG"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        <motion.div className="col-span-full mb-1 md:mb-2" variants={animateInChild} >
            <img
            src="/Photography/unshackle/3.JPG"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        <motion.div className="col-span-full mb-1 md:mb-2" variants={animateInChild} >
            <img
            src="/Photography/unshackle/5.JPG"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        <motion.div className="col-span-full mb-1 md:mb-2" variants={animateInChild} >
            <img
            src="/Photography/unshackle/4.JPG"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        <motion.div className="col-span-full mb-1 md:mb-2" variants={animateInChild} >
            <img
            src="/Photography/unshackle/6.JPG"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        <motion.div className="col-span-full mb-1 md:mb-2" variants={animateInChild} >
            <img
            src="/Photography/unshackle/7.JPG"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        <motion.div className="col-span-full mb-1 md:mb-2" variants={animateInChild} >
            <img
            src="/Photography/unshackle/2.JPG"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

      
        

       

    </motion.div>
  );
};

export default Unshackle;
