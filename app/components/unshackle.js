
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
        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/unshackle/1.jpg"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/unshackle/3.jpg"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/unshackle/5.jpg"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/unshackle/4.jpg"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/unshackle/6.jpg"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/unshackle/7.jpg"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        <motion.div className="col-span-full mb-2" variants={animateInChild} >
            <img
            src="/Photography/unshackle/2.jpg"
            className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>

      
        

       

    </motion.div>
  );
};

export default Unshackle;
