
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
    <motion.div className={`grid grid-cols-3 md:grid-cols-6 xl:grid-cols-12 font-[family-name:var(--font-geist-sans)] pr-24 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>
       
        <motion.h1 className="col-span-full text-8xl md:text-9xl tracking-tighter font-medium mb-4 mt-6 px-4 md:px-0" 
        variants={animateInChild}>
            Enhanced Subway Navigation with Apple Maps
        </motion.h1>

        <motion.div className="col-span-full tracking-tighter md:text-6xl font-medium mb-4 mt-20 px-4 md:px-0" 
        variants={animateInChild}>
            01. Getting Started    
        </motion.div>

        <motion.div className="col-span-full tracking-tighter md:text-3xl font-medium mb-4 mt-10 px-4 md:px-0" 
        variants={animateInChild}>
            Initial Thoughts

            <motion.div className='mt-4 font-normal text-sm tracking-tight grid grid-cols-3 gap-5' variants={animateInChild}>
            <p>Navigation within the NYC subway system can often be a pain for commuters within the city; especially so for tourists or short-term visitors unfamiliar with the workings of the system as well as the directions within the city.</p>
            <p>A common issue especially within Manhattan comes from both entering and tapping into the wrong subway platform than your intended direction–entering the Uptown entrance when you be heading Downtown instead; resulting in having to forfeit your fare, head back up to street level, cross the road, enter the Downtown entrance and pay the fare a second time just to be on your way.</p>
            <p>The goal of this project is to understand the most common pain points in navigating within the subway system and to propose a concept that would aid in easing navigation seamlessly within the Apple ecosystem.</p>
            </motion.div>

        </motion.div>

        <motion.div className="col-span-full tracking-tighter md:text-3xl font-medium mb-4 mt-10 px-4 md:px-0" 
        variants={animateInChild}>
            Mechanics

            <motion.div className='mt-4 font-normal text-sm tracking-tight grid grid-cols-3 gap-5' variants={animateInChild}>
                
            <div>
                <h2 className="text-lg mb-2">Ultra-wideband</h2>
                Ultra-Wideband (UWB) is a short-range, high-bandwidth wireless communication technology, capable of providing precise spatial awareness and device tracking; this is a technology that Apple has integrated into its ecosystem since 2019 with the introduction of the iPhone 11. Below is a list of major functionalities UWB technology has enabled within the Apple ecosystem:

                <p className="mt-2">1. AirTag / Find My
                Apple’s AirTag relies on UWB for Precision Finding. UWB enables an iPhone to measure its distance and direction from an AirTag with centimeter-level accuracy.
                </p>
                2. Spatial Awareness
                With U1-enabled devices, Handoff works more smoothly by prioritizing nearby devices. When you bring your iPhone close to a HomePod mini, a visual and haptic effect appears, making it easier to transfer music. UWB also enables better device-to-device awareness, improving AirDrop by detecting which person you’re pointing at.
                3. Apple Watch & Home Automation
                The Apple Watch Series 9 and Ultra 2 feature UWB for better Find My tracking and HomeKit automation–Smart home devices (e.g., HomePods, Apple TV) can detect when a U1-enabled device is nearby, triggering personalized experiences.
            </div>
            </motion.div>
            
        </motion.div>










    </motion.div>
  );
};

export default NycSubway;
