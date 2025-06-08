// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"

export default function ThreeD({className=""}) {

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.1, duration:0.3, ease:"easeOut"}
    }
}
const animateInChild ={
hidden: {opacity:0, y:20},
show: {
    opacity:1, y:0, 
    transition: {duration:0.3, ease:"easeOut"}
    }
}

    
return(
        <motion.div className={`grid grid-cols-6 gap-2 -mt-8 max-w-screen overflow-x-hidden
            sm:gap-3 font-[family-name:var(--font-geist-sans)] md:pt-6 ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>

            
            {/* Header */}
            <motion.div 
            className="tracking-tighter col-span-full mt-8 md:mt-6 mb-8 md:mb-8"
            variants={animateInChild}>
                

                <h1 className="text-7xl md:text-8xl text-center md:text-left font-medium tracking-tighter leading-tighter -ml-2">3D Motion Explorations</h1>

            </motion.div> 

            {/* Blurb */}
            <div className="col-span-full sm:col-span-5 lg:mr-16">
                <motion.div className="text-2xl lg:text-4xl lg:w-5/6 font-base tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                Various explorations as part of my journey of getting acquainted with Blender and 3D Motion Design.
                </motion.div>
            </div>

            {/* Banner Video */}           
            <div className='col-span-full grid grid-cols-3 md:grid-cols-6 gap-1.5 lg:gap-2 mt-20'>

                <motion.video src="/3dpersonal/iphone3.mp4" 
                className="col-span-2 shadow-standard rounded-3xl w-full h-auto object-cover"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'
                // whileHover={{scale:1.01}}
                >
                </motion.video>
                <motion.video src="/3dpersonal/glass1.mp4" 
                className="col-span-2 shadow-standard rounded-3xl w-full h-auto object-cover"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'
                // whileHover={{scale:1.01}}
                >
                </motion.video>
                <motion.video src="/3dpersonal/sphere1.mp4" 
                className="col-span-2 shadow-standard rounded-3xl w-full h-auto object-cover"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'
                // whileHover={{scale:1.01}}
                >
                </motion.video>      
            </div>

            {/* iPhone */}
            <div className='col-span-full grid grid-cols-3 md:grid-cols-6 gap-1.5 lg:gap-2'>

                <img src='/3dpersonal/iphone1.png' className='w-full h-full object-cover col-span-3 rounded-2xl'/>
                <img src='/3dpersonal/iphone2.png' className='w-full col-span-3 rounded-2xl'/>

                <div className='col-span-1 md:col-span-2 rounded-2xl'>
                    <video
                        src='/3dpersonal/iphone2.mp4'
                        className="shadow rounded-2xl object-cover col-span-full w-full"
                        autoPlay loop muted playsInline
                    ></video>
                </div>
                <div className='col-span-1 md:col-span-2 rounded-2xl'>
                    <video
                        src='/3dpersonal/iphone3.mp4'
                        className="shadow rounded-2xl object-cover col-span-full w-full"
                        autoPlay loop muted playsInline
                    ></video>
                </div>
                <div className='col-span-1 md:col-span-2 rounded-2xl'>
                    <video
                        src='/3dpersonal/iphone4.mp4'
                        className="shadow rounded-2xl object-cover col-span-full w-full"
                        autoPlay loop muted playsInline
                    ></video>
                </div>
            
            </div>
            
            {/* Blue Glass */}
            <div className='col-span-full grid grid-cols-2 md:grid-cols-8 gap-1.5 lg:gap-2'>

                <div className='col-span-1 md:col-span-2 rounded-2xl'>
                    <video
                        src='/3dpersonal/pencil1.mp4'
                        className="shadow rounded-2xl object-cover col-span-full w-full"
                        autoPlay loop muted playsInline
                    ></video>
                </div>
                <div className='col-span-1 md:col-span-2 rounded-2xl'>
                    <video
                        src='/3dpersonal/pencil3.mp4'
                        className="shadow rounded-2xl object-cover col-span-full w-full"
                        autoPlay loop muted playsInline
                    ></video>
                </div>
                <div className='col-span-1 md:col-span-2 rounded-2xl'>
                    <video
                        src='/3dpersonal/glass2.mp4'
                        className="shadow rounded-2xl object-cover col-span-full w-full"
                        autoPlay loop muted playsInline
                    ></video>
                </div>
                <div className='col-span-1 md:col-span-2 rounded-2xl'>
                    <video
                        src='/3dpersonal/glass1.mp4'
                        className="shadow rounded-2xl object-cover col-span-full w-full"
                        autoPlay loop muted playsInline
                    ></video>
                </div>
            </div>
            
            {/* Bronze Statue */}
            <div className='col-span-full grid grid-cols-2 md:grid-cols-8 gap-1.5 lg:gap-2'>

                <img src='/3dpersonal/statue0.jpeg' className='w-full h-full object-cover col-span-2 rounded-2xl'/>
                <img src='/3dpersonal/statue1.jpeg' className='w-full col-span-2 rounded-2xl'/>
                <img src='/3dpersonal/bust5.jpeg' className='w-full col-span-2 rounded-2xl'/>
                <video
                        src='/3dpersonal/sun1.mp4'
                        className="shadow rounded-2xl object-cover col-span-2 w-full"
                        autoPlay loop muted playsInline
                    ></video>
            </div>

            {/* Lady Statue */}
            <div className='col-span-full grid grid-cols-2 md:grid-cols-6 gap-1.5 lg:gap-2'>

                <img src='/3dpersonal/statue5.jpeg' className='w-full h-full object-cover col-span-1 md:col-span-2 rounded-2xl'/>
                <img src='/3dpersonal/statue3.jpeg' className='w-full col-span-1 md:col-span-2 rounded-2xl'/>
                <img src='/3dpersonal/statue4.jpeg' className='w-full h-full object-cover col-span-2 rounded-2xl'/>

            </div> 

            {/* Sphere */}
            <div className='col-span-full grid grid-cols-4 md:grid-cols-8 gap-1.5 lg:gap-2'>

                <div className='col-span-2 rounded-2xl'>
                    <video
                        src='/3dpersonal/sphere1.mp4'
                        className="shadow rounded-2xl object-cover col-span-full w-full"
                        autoPlay loop muted playsInline
                    ></video>
                </div>
                <div className='col-span-2 rounded-2xl'>
                    <video
                        src='/3dpersonal/sphere2.mp4'
                        className="shadow rounded-2xl object-cover col-span-full w-full"
                        autoPlay loop muted playsInline
                    ></video>
                </div>
                <div className='col-span-2 rounded-2xl'>
                    <video
                        src='/3dpersonal/sphere3.mp4'
                        className="shadow rounded-2xl object-cover col-span-full w-full"
                        autoPlay loop muted playsInline
                    ></video>
                </div>
                <div className='col-span-2 rounded-2xl'>
                    <video
                        src='/3dpersonal/sphere4.mp4'
                        className="shadow rounded-2xl object-cover col-span-full w-full"
                        autoPlay loop muted playsInline
                    ></video>
                </div>
            </div>
            
        </motion.div>
    )

}