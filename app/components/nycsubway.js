
'use client'
import { easeOut } from "framer-motion";
import * as motion from "framer-motion/client"
import React from 'react';


const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.1, duration:0.5, ease:easeOut}
    }
}
const animateInChild ={
hidden: {opacity:0, y:20},
show: {
    opacity:1, y:0, 
    transition: {duration:0.35, ease:easeOut}
    }
}



const NycSubway = ({className}) => {

  return (
    <div className="grid grid-cols-1 col-span-full">
        <motion.div
            className="h-screen flex items-center justify-center -mt-[12vh]"
            initial="hidden"
            animate="show"
            variants={animateIn}
        >
            <motion.h1
            className="text-6xl md:text-8xl tracking-tighter font-medium text-center"
            variants={animateInChild}
            >
            The New York City Subway
            </motion.h1>
        </motion.div>

        <motion.div
            className="h-screen flex items-center justify-center"
            initial="hidden"
            animate="show"
            variants={animateIn}
        >
            <motion.h1
            className="text-6xl md:text-8xl tracking-tighter font-medium text-center"
            variants={animateInChild}
            >
            is not great.
            </motion.h1>
        </motion.div>

        <motion.div
            className="h-screen flex items-center justify-center"
            initial="hidden"
            animate="show"
            variants={animateIn}
        >
            <motion.h1
            className="text-6xl md:text-8xl tracking-tighter font-medium text-center"
            variants={animateInChild}
            >
            3
            </motion.h1>
        </motion.div>
    </div>
  );
};

export default NycSubway;
