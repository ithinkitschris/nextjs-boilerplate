// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"

export default function Leica({className=""}) {

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
        
        <motion.div className={`grid grid-cols-6 gap-2 md:pt-6
            max-w-full -mt-8 font-[family-name:var(--font-geist-sans)] ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>
            
            {/* Header */}
            <motion.div 
            className="tracking-tighter col-span-full mt-8 md:mt-6 mb-4"
            variants={animateInChild}>
                
                <h1 className="text-7xl md:text-8xl text-center font-medium md:font-medium 
                md:text-left tracking-tighter leading-tighter -ml-2">Leica M10-P</h1>
            </motion.div> 

            {/* Blurb */}
            <div className="col-span-full sm:col-span-5 lg:mr-16">
                <motion.div className="text-2xl lg:text-4xl lg:w-5/6 font-base tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                A personal exercise in modelling and product visualisation techniques with a Leica M10-P in Blender.
                </motion.div>
            </div>

            <div className='col-span-full grid grid-cols-3 md:grid-cols-6 gap-1.5 md:gap-3 md:mt-20 mb-1'>
                <motion.video src="/leica/4.mp4" 
                className="col-span-1 md:col-span-2 shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/leica/5.mp4" 
                className="col-span-1 md:col-span-2 shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/leica/7.mp4" 
                className="col-span-1 md:col-span-2 shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>
            </div>

            <div className='col-span-full grid grid-cols-4 md:grid-cols-9 gap-1.5 md:gap-3 mb-20'>

                <motion.img src='/leica/3.png' className='col-span-2 md:col-span-3 shadow-standard rounded-[20pt] object-cover w-full'/>
                <motion.img src='/leica/4.png' className='col-span-2 md:col-span-3 shadow-standard rounded-[20pt] object-cover w-full'/>
                <motion.img src='/leica/5.png' className='col-span-2 md:col-span-3 shadow-standard rounded-[20pt] object-cover w-full'/>
                <motion.img src='/leica/6.png' className='col-span-2 md:col-span-3 shadow-standard rounded-[20pt] object-cover w-full'/>
                <motion.img src='/leica/7.png' className='col-span-2 md:col-span-3 shadow-standard rounded-[20pt] object-cover w-full'/>
                <motion.img src='/leica/8.png' className='col-span-2 md:col-span-3 shadow-standard rounded-[20pt] object-cover w-full'/>


            </div>

            

        

        </motion.div>
    )

}