
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

const IxdPage = ({className}) => {

  return (
    <motion.div className={`grid grid-cols-3 md:grid-cols-6 xl:grid-cols-12 font-[family-name:var(--font-geist-sans)] ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

        
        <motion.h1 className="col-span-full text-8xl tracking-tighter font-medium mb-4 leading-[80px] relative mt-6 md:hidden px-4" 
        variants={animateInChild}>
            This<span className="font-thin">...</span> website. <br/>Really<span className="font-light -ml-1">.</span></motion.h1>

        <motion.h1 className="col-span-full text-9xl tracking-tighter font-medium mb-4 leading-[110px] relative mt-6 hidden md:block px-2 lg:px-0" 
        variants={animateInChild}>
        This<span className="font-thin">...</span> website. Really.</motion.h1>
        
        <motion.h2 className="col-span-full font-script text-2xl md:text-5xl ml-1 -rotate-3 mt-0 mb-6 px-4 md:px-3 lg:px-0" 
        variants={animateInChild}>
            Okay<span className="font-sans">,</span> not really<span className="font-sans">.</span><span className="text-sm align-top ml-1"></span></motion.h2>


        <div className="col-span-full grid grid-cols-1 md:grid-cols-2">

            <div className="md:mt-2 md:w-5/6 2xl:mt-6 md:col-span-1 px-4 lg:px-0">
                <motion.div className="mt-6 text-sm" variants={animateInChild}>
                    No, while this website is indeed, Interaction Design. It would be terribly disingenous of me to suggest that this is the entirety of Interaction Design <i className="opacity-50">(or worse still, my understanding of it).</i>
                </motion.div>

                <motion.div className="text-sm mt-4" variants={animateInChild}>
                    Obviously, I am currently fresh on the path of Interaction Design and this page is very much a blank canvas, if you will, for what&apos;s to come in the years and possibly decades ahead.
                </motion.div>
            </div>

            <motion.h1 className="text-4xl md:text-5xl tracking-tighter font-medium mb-4 leading-10 relative mt-12 md:mt-10 lg:w-5/6 md:col-span-1 px-4 lg:px-0" 
            variants={animateInChild}>
                For now, this website is indeed, my proudest artefact of Interaction Design thus far.</motion.h1>

            <motion.div className="text-sm mt-10 md:-mt-16 2xl:-mt-10 md:mr-14 px-4 lg:px-0" variants={animateInChild}>
            It started off with a literal shower thought, one that turned into a manic passion project by the time I was out of the shower. With the guidance of my faculty, 
            I dove deep into the realm of web development with React, Next.js, Tailwind CSS and Vercel; the very backbone of what you are literally experiencing right now.
            </motion.div>

            <motion.h1 className="text-lg md:text-xl 2xl:text-2xl tracking-tighter font-medium leading-10 relative mt-8 md:mt-4 px-4 lg:px-0" 
            variants={animateInChild}>
            &quot;How do you code a website from ground up?&quot;<br/><span className="font-light italic tracking-tight text-xs relative -top-5 md:-top-2 ">–aforementioned shower thought.</span></motion.h1>

            <motion.div className="text-sm mt-4 md:mt-2 2xl:-mt-4 md:mr-14 px-4 lg:px-0" variants={animateInChild}>
            This website will always be a work-in-progress. If anything, I have designed for it to be ever-iterating; something I would be able to constantly return to with new insights from my journey as an Interaction Designer.
            Learnings, insights and perspectives that I will be able to both design implementations for and code into this very medium I have created for myself.
            </motion.div>

            {/* <motion.h1 className="text-4xl tracking-tighter font-medium mb-4 leading-10 relative mt-12 md:hidden" 
            variants={animateInChild}>
            That was a whole bunch of off-brand airy-fairy words, time for visuals.</motion.h1> */}

        </div>
        {/* <motion.div className="col-span-full overflow-hidden rounded-lg mt-10 h-[150px] md:h-[300px]" variants={animateInChild}>
            <motion.video className="col-span-full blur object-cover"
            src='/ixd/website/4.mp4'
            loop autoPlay muted playsInline/>
        </motion.div> */}



        {/* Visuals */}
        <motion.div className="col-span-full grid grid-cols-2 gap-1 md:gap-2 md:mb-1 mb-0.5 mt-10" variants={animateInChild}>
            <motion.div className="relative overflow-hidden">
            
                <video 
                src="/ixd/website/3.mp4" 
                className=" rounded-lg w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-white/100 to-transparent absolute bottom-0 w-full h-1/4 rounded-b-lg"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-black tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
                    <h1>One of the earliest builds.</h1>
                </div>
                
            </motion.div>

            <motion.div className="relative">
            
                <video 
                src="/ixd/website/4_1.mp4" 
                className=" rounded-lg w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b-lg"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
                    <h1>Implemented the frosted glass art direction.</h1>
                </div>
                
            </motion.div>

            <motion.div className="relative col-span-full mt-4">
            
                <video 
                src="/ixd/website/5.mp4" 
                className=" rounded-lg w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-white/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b-lg"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-black tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
                    <h1>First implementation of the video grid and sorting system.</h1>
                </div>
                
            </motion.div>

            <motion.div className="relative col-span-full mt-4">
            
                <img src="/ixd/website/7.png" className="rounded-lg"/>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-white/90 to-transparent absolute bottom-0 w-full h-1/4 rounded-b-lg"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-black tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
                    <h1>Alternate Design of the Favorites page.</h1>
                </div>
                
            </motion.div>

            <motion.div className="relative col-span-full mt-4">
            
                <video 
                src="/ixd/website/8.mp4" 
                className=" rounded-lg w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b-lg"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
                    <h1>First implementation of the hover-state for the homepage grid.</h1>
                </div>
                
            </motion.div>

            <motion.div className="relative col-span-full mt-4">
            
                <video 
                src="/ixd/website/9.mp4" 
                className=" rounded-lg w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-white to-transparent absolute bottom-0 w-full h-1/4 rounded-b-lg"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-black tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
                    <h1>First implementation of responsive layout for mobile optimization.</h1>
                </div>
                
            </motion.div>

            <motion.div className="relative mt-4">
            
                <img src="/ixd/website/10.png" className="rounded-lg"/>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/100 to-transparent absolute bottom-0 w-full h-1/4 rounded-b-lg"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
                    <h1>Early design of mobile homepage.</h1>
                </div>
                
            </motion.div>

            <motion.div className="relative mt-4">
            
                <video 
                src="/ixd/website/11_2.mp4" 
                className=" rounded-lg w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-white to-transparent absolute bottom-0 w-full h-1/4 rounded-b-lg"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-black tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
                    <h1>Dropdown Menus practice on profile page.</h1>
                </div>
                
            </motion.div>

            
        </motion.div>

    

            

        
    </motion.div>
  );
};

export default IxdPage;
