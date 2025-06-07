// import { motion } from "framer-motion"
'use client'
import {useEffect, useRef} from 'react'
import * as motion from "framer-motion/client"

export default function Iphone({className=""}) {

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
        
        <motion.div className={`grid grid-cols-6 gap-2 md:pt-14
            sm:gap-3 max-w-full -mt-8 font-[family-name:var(--font-geist-sans)] ${className}`}
        initial="hidden"
        animate="show"
        variants={animateIn}>
            
            {/* Header */}
            <motion.div 
            className="tracking-tighter col-span-full mt-8 md:mt-6 mb-8 md:mb-8"
            variants={animateInChild}>
                <h1 className="text-7xl md:text-8xl text-center font-medium md:font-medium 
                md:text-left tracking-tighter leading-tighter -ml-2">iPhone 15 Pro</h1>
            </motion.div> 


            {/* Blurb */}
            <div className="col-span-full sm:col-span-5 lg:mr-16">
                <motion.div className="text-2xl lg:text-4xl lg:w-5/6 font-base tracking-tight text-center leading-7 sm:text-left mx-4 sm:mx-0 mb-10 sm:mb-0" variants={animateInChild}>
                A personal exercise in modelling and product visualisation techniques with the iPhone 15 Pro in Blender.
                </motion.div>
            </div>


            <div className='col-span-full grid grid-cols-2 md:grid-cols-6 gap-1.5 md:gap-3 mt-20'>

            <motion.video src="/iphone/full.mp4" 
            className="md:hidden col-span-full shadow-standard rounded-[20pt] w-full h-[600px] object-cover"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            >
            </motion.video>

            <motion.video src="/iphone/1.mp4" 
            className="hidden md:block col-span-2 shadow-standard rounded-[20pt] w-full h-screen/2 lg:w-full lg:h-full object-cover md:mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            >
            </motion.video>

            <motion.video src="/iphone/5.mp4" 
            className="hidden md:block col-span-2 shadow-standard rounded-[20pt] w-full h-screen/2 lg:w-full lg:h-full object-cover md:mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            >
            </motion.video>

            <motion.video src="/iphone/2.mp4" 
            className="hidden md:block col-span-2 shadow-standard rounded-[20pt] w-full h-screen/2 lg:w-full lg:h-full object-cover md:mb-12"
            autoPlay muted loop playsInline
            variants={animateInChild}
            poster='/poster/.jpeg'
            >
            </motion.video>
                <motion.video src="/iphone/orbit1.mp4" 
                className="col-span-1 md:col-span-2 shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/orbit2.mp4" 
                className="col-span-1 md:col-span-2 shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/orbit3.mp4" 
                className="col-span-2 shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>
            </div>

            <div className='col-span-full grid grid-cols-4 md:grid-cols-8 gap-1.5 md:gap-2 mb-20'>

                <motion.video src="/iphone/3.mp4" 
                className="col-span-2 shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/5.mp4" 
                className="md:hidden col-span-2 shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/4.mp4" 
                className="hidden md:block col-span-2 shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/4.mp4" 
                className="md:hidden col-span-full shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/6.mp4" 
                className="col-span-2 shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/8.mp4" 
                className="col-span-2 shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/lightup1.mp4" 
                className="col-span-2 shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/lightup2.mp4" 
                className="col-span-2 shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/throw1.mp4" 
                className="col-span-2 shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

                <motion.video src="/iphone/throw.mp4" 
                className="col-span-2 shadow-standard rounded-[20pt] w-full lg:w-full lg:h-full object-cover md:mb-12"
                autoPlay muted loop playsInline
                variants={animateInChild}
                poster='/poster/.jpeg'

                >
                </motion.video>

            </div>

            

        

        </motion.div>
    )

}