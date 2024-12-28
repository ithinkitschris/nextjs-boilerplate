
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

const WebsitePage = ({className}) => {

  return (
    <motion.div className={`grid grid-cols-3 md:grid-cols-6 xl:grid-cols-12 font-[family-name:var(--font-geist-sans)] ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

        
        <motion.h1 className="col-span-full text-8xl md:text-9xl tracking-tighter font-medium mb-4 leading-[80px] relative mt-6 px-4" 
        variants={animateInChild}>
            This<span className="font-thin">...</span> website.</motion.h1>

        {/* <motion.h1 className="col-span-full text-9xl tracking-tighter font-medium mb-4 leading-[110px] relative mt-6 hidden md:block px-2 lg:px-0" 
        variants={animateInChild}>
        This<span className="font-thin">...</span> website. Really.</motion.h1> */}
        
        <motion.h2 className="col-span-full font-script text-6xl md:text-6xl -rotate-3 mt-1 mb-6 px-4 md:px-3 lg:px-0" 
        variants={animateInChild}>
            Literally<span className="font-sans">.</span></motion.h2>


        <div className="col-span-full grid grid-cols-1 md:grid-cols-2">

            {/* <div className="md:mt-2 md:w-5/6 2xl:mt-6 md:col-span-1 px-4 lg:px-0">
                <motion.div className="mt-6 text-sm" variants={animateInChild}>
                    No, while this website is indeed, Interaction Design. It would be terribly disingenous of me to suggest that this is the entirety of Interaction Design <i className="opacity-50">(or worse still, my understanding of it).</i>
                </motion.div>

                <motion.div className="text-sm mt-4" variants={animateInChild}>
                    Obviously, I am currently fresh on the path of Interaction Design and this page is very much a blank canvas, if you will, for what&apos;s to come in the years and possibly decades ahead.
                </motion.div>
            </div>

            <motion.h1 className="text-4xl md:text-5xl tracking-tighter font-medium mb-4 leading-10 relative mt-12 md:mt-10 lg:w-5/6 md:col-span-1 px-4 lg:px-0" 
            variants={animateInChild}>
                For now, this website is indeed, my proudest artefact of Interaction Design thus far.</motion.h1> */}

            <motion.h1 className="text-xl 2xl:text-2xl tracking-tighter font-medium leading-10 relative mt-6 md:mt-4 px-4 lg:px-0" 
            variants={animateInChild}>
            &quot;How do you code a website from ground up?&quot;<br/>
            {/* <span className="font-light italic tracking-tight text-xs relative -top-5 md:-top-2 ">–aforementioned shower thought.</span> */}
            </motion.h1>

            <motion.div className="text-sm mt-6 md:-mt-16 2xl:-mt-10 md:mr-14 px-4 lg:px-0" variants={animateInChild}>
            It all started off with that literal shower thought, one that turned into a manic passion project by the time I was out of the shower. 
            </motion.div>
            
            <motion.div className="text-sm mt-6 md:-mt-16 2xl:-mt-10 md:mr-14 px-4 lg:px-0" variants={animateInChild}>
            Over the recent years, I've found myself increasingly discontent with both the state and experience of my pre-existing portfolio website. 
            
            And having found myself learning Javascript as part of my curriculum as a Master's Student in Interaction Design, the decision to rebuild my entire portfolio website and code it from ground-up made 
            complete sense as the perfect trial by fire application of my then still-very-abstract learnings on programming languages. 
            </motion.div>
          
            <motion.div className="text-sm mt-6 md:-mt-16 2xl:-mt-10 md:mr-14 px-4 lg:px-0" variants={animateInChild}>
            With the guidance of my faculty, I dove deep into the realm of web development with React, Next.js, Tailwind CSS and Vercel; 
            the very backbone of what you are literally experiencing right now.
            </motion.div>

            <motion.div className="text-sm mt-6 md:mt-2 2xl:-mt-4 md:mr-14 px-4 lg:px-0" variants={animateInChild}>
            This website will always be a work-in-progress. If anything, I have designed for it to be ever-iterating; something I would be able to constantly return to with new insights from my journey as an Interaction Designer.
            Learnings, insights and perspectives that I will be able to both design implementations for and code into this very medium I have created for myself.
            </motion.div>

            <div className="col-span-full mt-14 md:mt-18 mb-6 md:mb-8 lg:mb-10 xl:mb-20">
                <h1 className="text-3xl lg:text-6xl font-script -rotate-2 text-center md:text-left tracking-tighter">Documentation</h1>
            </div>

            <motion.div className="text-sm mt-6 2xl:mt-8 2xl:w-1/2 md:mr-14 px-4 lg:px-0" variants={animateInChild}>
            As I have had zero experience with web development prior to this project with only a basic knowledge of HTML and CSS,
            it was a conscious decision to document every step of the process right from the beginning to what we have here today.<br/>
            </motion.div>
            <motion.div className="text-sm mt-6 md:mt-2 2xl:-mt-4 md:mr-14 px-4 lg:px-0" variants={animateInChild}>
            Read the documentation for  this website 
            <a className="relative border-1 ml-1 px-1 rounded-full border-foreground hover:bg-foreground hover:text-background transition-all" 
            href='https://ithinkitschris.notion.site/Portfolio-Website-127a92ab668680ed91ddd0619057466f' target="blank">here</a>
            </motion.div>

            <div className="col-span-full mt-14 md:mt-18 mb-6 md:mb-8 lg:mb-10 xl:mb-20">
                <h1 className="text-3xl lg:text-5xl font-script -rotate-2 text-center md:text-left tracking-tighter">Desktop</h1>
            </div>

        </div>

        <div className="col-span-full grid grid-cols-2 gap-1.5 md:gap-2">

            <motion.img src='/website/desktop3.png' className="rounded-lg drop-shadow-lg col-span-full md:col-span-1" variants={animateInChild}/>
            <motion.img src='/website/desktop1.png' className="rounded-lg drop-shadow-lg col-span-full md:col-span-1" variants={animateInChild}/>
            <motion.img src='/website/desktop4.png' className="rounded-lg drop-shadow-lg col-span-full md:col-span-1" variants={animateInChild}/>
            <motion.img src='/website/desktop2.png' className="rounded-lg drop-shadow-lg col-span-full md:col-span-1" variants={animateInChild}/>

        </div>

        <div className="col-span-full mt-14 md:mt-18 mb-6 md:mb-8 lg:mb-10 xl:mb-20">
            <h1 className="text-3xl lg:text-5xl font-script -rotate-2 text-center md:text-left tracking-tighter">Mobile</h1>
        </div>

        <div className="col-span-full grid grid-cols-2 gap-1.5 md:gap-2">

            <motion.img src='/website/mobile1.png' className="rounded-lg drop-shadow-lg col-span-1" variants={animateInChild}/>
            <motion.img src='/website/mobile2.png' className="rounded-lg drop-shadow-lg col-span-1" variants={animateInChild}/>
            <motion.img src='/website/mobile3.png' className="rounded-lg drop-shadow-lg col-span-1" variants={animateInChild}/>
            <motion.img src='/website/mobile4.png' className="rounded-lg drop-shadow-lg col-span-1" variants={animateInChild}/>
            <motion.img src='/website/mobile5.png' className="rounded-lg drop-shadow-lg col-span-1" variants={animateInChild}/>
            <motion.img src='/website/mobile6.png' className="rounded-lg drop-shadow-lg col-span-1" variants={animateInChild}/>

        </div>


        <div className="col-span-full mt-18 mb-10 xl:mb-20">
            <h1 className="text-3xl lg:text-5xl font-script -rotate-2 text-center md:text-left tracking-tighter">Early builds / Iterations</h1>
        </div>

        {/* Visuals */}
        <motion.div className="col-span-full grid grid-cols-2 gap-1 md:gap-2 md:mb-1 mb-0.5" variants={animateInChild}>
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
                    <h1>First implementation of the responsive layout during mobile optimization.</h1>
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

            <div className="mb-24"></div>

            
        </motion.div>

    

            

        
    </motion.div>
  );
};

export default WebsitePage;
