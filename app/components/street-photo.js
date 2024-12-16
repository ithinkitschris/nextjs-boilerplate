
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

const StreetPhotography = ({className}) => {
  return (
    <motion.div className={`grid grid-cols-6 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

        
        
      {/* Full-Width Image */}
        <motion.div className="col-span-full mb-1 lg:mb-2" variants={animateInChild} >
            <img
            src="/Photography/street/27.jpg"
            className="h-auto w-full object-cover rounded-lg"
            />
        </motion.div>

      {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-1 md:gap-2">
            <motion.img
                src="/Photography/street/26.jpg"
                alt="Description of Image 2"
                className="col-span-2 h-full w-full object-cover rounded-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/street/25.jpg"
                alt="Description of Image 3"
                className="col-span-4 h-full w-full object-cover rounded-lg"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="mt-1 md:mt-2 col-span-full mb-1 lg:mb-2" variants={animateInChild} >
            <img
            src="/Photography/street/24.jpg"
            className="h-auto w-full object-cover rounded-lg"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-1 md:gap-2">
            <motion.img
                src="/Photography/street/new3.JPG"
                alt="Description of Image 2"
                className="col-span-4 h-full w-full object-cover rounded-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/street/new6.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-full object-cover rounded-lg"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="mt-1 md:mt-2 col-span-full mb-1 lg:mb-2" variants={animateInChild} >
            <img
            src="/Photography/street/new1.jpg"
            className="h-auto w-full object-cover rounded-lg"
            />
        </motion.div>

        
        {/* Full-Width Image */}
        <motion.div className="col-span-full mb-1 lg:mb-2" variants={animateInChild} >
            <img
            src="/Photography/street/155.JPG"
            className="h-auto w-full object-cover rounded-lg"
            />
        </motion.div>

        {/* Three Images Side by Side */}
        {/* <div className="grid grid-cols-6 col-span-full gap-1 md:gap-2 mb-2">
            <motion.img
                src="/Photography/street/245.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/street/23.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/street/21.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg"
                variants={animateInChild}
            />
        </div> */}

        {/* Full-Width Image */}
        <motion.div className="col-span-full mb-1 lg:mb-2" variants={animateInChild} >
            <img
            src="/Photography/street/new2.JPG"
            className="h-auto w-full object-cover rounded-lg"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-1 md:gap-2">
            <motion.img
                src="/Photography/street/22.jpg"
                alt="Description of Image 3"
                className="col-span-3 w-full w-full object-cover rounded-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/street/21.jpg"
                alt="Description of Image 3"
                className="col-span-3 w-full w-full object-cover rounded-lg"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="mt-1 md:mt-2 col-span-full" variants={animateInChild} >
            <img
            src="/Photography/street/19.jpg"
            className="h-auto w-full object-cover rounded-lg"
            />
        </motion.div>

         {/* Two Images Side by Side
         <div className="grid grid-cols-6 col-span-full gap-1 md:gap-2">
            <motion.img
                src="/Photography/street/18.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-full w-auto object-cover rounded-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/street/17.jpg"
                alt="Description of Image 3"
                className="col-span-4 h-full w-auto object-cover rounded-lg"
                variants={animateInChild}
            />
        </div> */}

        {/* Three Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full mt-1 md:mt-2 gap-1 lg:gap-2">
            <motion.img
                src="/Photography/street/15.jpg"
                alt="Description of Image 3"
                className="col-span-2 h-screen/3 md:h-full w-auto object-cover rounded-lg hidden md:block"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/street/145.jpg"
                alt="Description of Image 3"
                className="col-span-2 md:col-span-1 h-screen/3 md:h-full w-full object-cover rounded-lg"
                variants={animateInChild}
            />

            <motion.img
                src="/Photography/street/14.jpg"
                alt="Description of Image 3"
                className="col-span-4 md:col-span-3 h-screen/3 md:h-full w-auto object-cover rounded-lg"
                variants={animateInChild}
            />
        </div>



        

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full mt-1 md:mt-2 gap-1 lg:gap-2">
            <motion.img
                src="/Photography/street/13.jpg"
                alt="Description of Image 3"
                className="md:col-span-4 h-screen/3 md:h-full w-full object-cover rounded-lg shadow-lg col-span-full"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/street/new4.JPG"
                alt="Description of Image 3"
                className="col-span-2 h-screen/3 md:h-full w-auto object-cover rounded-lg shadow-lg hidden md:block"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="mt-1 md:mt-2 col-span-full " variants={animateInChild} >
            <img
            src="/Photography/street/3.jpg"
            className="col-span-6 w-full h-auto object-cover rounded-lg shadow-lg"
            />
        </motion.div>


        {/* Full-Width Image */}
        <motion.div className="mt-1 md:mt-2 col-span-full " variants={animateInChild} >
            <img
            src="/Photography/street/6.jpg"
            className="col-span-6 w-full h-auto object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-1 md:gap-2 mt-1 md:mt-2">
            <motion.img
                src="/Photography/street/2_8.JPG"
                alt="Description of Image 3"
                className="col-span-3 w-full h-[300px] md:h-full object-cover rounded-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/street/2_1.JPG"
                alt="Description of Image 3"
                className="col-span-3 w-full h-[300px] md:h-full object-cover rounded-lg"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="mt-1 md:mt-2 col-span-full " variants={animateInChild} >
            <img
            src="/Photography/street/2_2.JPG"
            className="col-span-6 w-full h-auto object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        {/* Two Images Side by Side */}
        <div className="grid grid-cols-6 col-span-full gap-1 md:gap-2 mt-1 md:mt-2">
            <motion.img
                src="/Photography/street/2_9.jpg"
                alt="Description of Image 3"
                className="col-span-3 w-full h-[350px] md:h-full object-cover rounded-lg"
                variants={animateInChild}
            />
            <motion.img
                src="/Photography/street/2_6.JPG"
                alt="Description of Image 3"
                className="col-span-3 w-full h-[350px] md:h-full object-cover rounded-lg"
                variants={animateInChild}
            />
        </div>

        {/* Full-Width Image */}
        <motion.div className="mt-1 md:mt-2 col-span-full " variants={animateInChild} >
            <img
            src="/Photography/street/2_10.JPG"
            className="col-span-6 w-full h-auto object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        {/* Full-Width Image */}
        <motion.div className="mt-1 md:mt-2 col-span-full " variants={animateInChild} >
            <img
            src="/Photography/street/2_3.JPG"
            className="col-span-6 w-full h-auto object-cover rounded-lg shadow-lg"
            />
        </motion.div>

        {/* Full-Width Image */}
        <motion.div className="mt-1 md:mt-2 col-span-full mb-40" variants={animateInChild} >
            <img
            src="/Photography/street/2_7.JPG"
            className="col-span-6 w-full h-auto object-cover rounded-lg shadow-lg"
            />
        </motion.div>

    </motion.div>
  );
};

export default StreetPhotography;
