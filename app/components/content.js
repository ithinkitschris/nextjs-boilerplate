
'use client'
import { easeOut } from "framer-motion";
import * as motion from "framer-motion/client"
import React from 'react';


const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.15, duration:0.5, ease:easeOut}
    }
}
const animateInChild ={
hidden: {opacity:0, y:20},
show: {
    opacity:1, y:0, 
    transition: {duration:0.3, ease:easeOut}
    }
}

const ContentPage = ({className}) => {

  return (
    <motion.div className={`grid grid-cols-3 md:grid-cols-6 xl:grid-cols-12 font-[family-name:var(--font-geist-sans)] ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

        
        <motion.h1 className="col-span-full text-5xl lg:text-6xl tracking-tight font-medium mb-4 leading-11 relative px-4 md:px-0 mt-6 md:w-5/6" variants={animateInChild}>This here is essentially my Instagram feed, & basically my life.
        <span className="font-script text-2xl -rotate-2 ml-3 mb-6 hidden md:inline"> Wait woahI have one ?</span></motion.h1>
        <motion.h2 className="col-span-full font-script text-2xl ml-3 -rotate-2 -mt-2 mb-6 md:hidden" variants={animateInChild}> Wait woahI have one ?</motion.h2>
        <motion.h3 className="col-span-full text-xs lg:text-base font-medium tracking-tight mb-10 md:mb-6 px-4 lg:px-0 -mt-1" variants={animateInChild}>You may also alternatively, find it natively here: 
            <a href="https://www.instagram.com/khristurtle/reels/"
            className="font-script underline ml-1.5 relative top-0.5"
            target="blank"
            rel="noopener noreferrer">@khristurtle</a>
            
            </motion.h3>

        {/* <h2 className="col-span-full tracking-wider text-xs px-4 font-semibold -mt-2 mb-2">REELS</h2> */}


        {/* On The Road */}
        <motion.div className="col-span-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-0.5 md:gap-1 md:mb-1 mb-0.5 " variants={animateInChild}>

            <motion.div className="relative">
                
                <video 
                src="/content/ontheroadc43.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/c43.jpg'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
                    <h1><span className="opacity-50">On The Road:</span> New York</h1>
                </div>
                
            </motion.div>

            <motion.div className="relative">
            
                <video 
                src="/content/ontheroad1_1.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/roadbay.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
                    <h1><span className="opacity-50">On The Road:</span> California</h1>
                </div>
                
            </motion.div>

            <motion.div className="relative">
            
                <video 
                src="/content/ontheroad3_1.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/roadkl.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
                    <h1><span className="opacity-50">On The Road:</span> Kuala Lumpur</h1>
                </div>
                
            </motion.div>

            <motion.div className="relative">
            
                <video 
                src="/content/ontheroad4_1.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/roadmelbourne.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
                    <h1><span className="opacity-50">On The Road:</span> Melbourne</h1>
                </div>
                
            </motion.div>
            
            <div className="relative">
            
                <video 
                src="/content/rangefinder1_1.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/klleica.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px] md:leading-4">
                    <h1><span className="opacity-50">Through the Rangefinder:<br/></span>Kuala Lumpur</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/rangefinder2_1.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/shanghaileica.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px] md:leading-4">
                    <h1><span className="opacity-50">Through the Rangefinder:<br/></span>Shanghai</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/rangefinder3_1.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/shanghaifilm.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px] md:leading-4">
                    <h1><span className="opacity-50">Through the Rangefinder:<br/></span>Film</h1>
                </div>
                
            </div>
            
            <div className="relative">
            
                <video 
                src="/content/pov2.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/12a.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1><span className="opacity-50">POV: </span>Seat 12A</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/pov3_1.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/15a.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1><span className="opacity-50">POV: </span>Seat 15A</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/pov4_1.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/nonstop.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1><span className="opacity-50">POV: </span>The World&apos;s Longest Flight</h1>
                </div>
                
            </div>
            
            <div className="relative">
            
                <video 
                src="/content/filmvsdigital1.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/filmhanoi.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
                    <h1><span className="opacity-50">Film vs Digital: </span>Hanoi</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/filmvsdigital2.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/filmmarinabay.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
                    <h1><span className="opacity-50">Film vs Digital: </span>Marina Bay</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/filmvsdigital3.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/filmshanghai.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
                    <h1><span className="opacity-50">Film vs Digital: </span>Shanghai</h1>
                </div>
                
            </div>
        
            <div className="relative">
            
                <video 
                src="/content/blender1.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/iphoneblender.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1><span className="opacity-50">Blender: </span>15 Hours of iPhone 15 Pro</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/blender2.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/iphoneblender2.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1><span className="opacity-50">Blender: </span>15 more hours of iPhone 15 Pro</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/blender3.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/leicablender.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1><span className="opacity-50">Blender: </span>Leica M10-P</h1>
                </div>
                
            </div>
            
            <div className="relative">
            
                <video 
                src="/content/blender4.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/leicablender2.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1><span className="opacity-50">Blender: </span>Modeling a Leica</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/24hours1.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/24hourkl.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1><span className="opacity-50">24 Hours of </span>Kuala Lumpur</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/24hours2.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/24hourmelbourne.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1><span className="opacity-50">24 Hours of </span>Melbourne</h1>
                </div>
                
            </div>
        
            <div className="relative">
            
                <video 
                src="/content/16.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/stool.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px] md:leading-4 md:w-2/3">
                    <h1><span className="opacity-50">One man&apos;s trash, another man&apos;s questionable treasure: </span>IKEA Stool</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/15.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/lounge.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1><span className="opacity-50"></span>One Afternoon in SilverKris Lounge</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/14.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/shanghaibrands.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1><span className="opacity-50"></span>Brands to check out in Shanghai</h1>
                </div>

            </div>

            <div className="relative">
            
                <video 
                src="/content/11.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/prints.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1>Too many prints, not enough wall</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/4_1.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/jaguar.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1><span className="opacity-50"></span>A Drone, A Jaguar, in California</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/3.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/chicago.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1><span className="opacity-50"></span>Chicago in 26,020 steps</h1>
                </div>

            </div>

            <div className="relative">
            
                <video 
                src="/content/17.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/dia.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1>One Afternoon at DIA Beacon</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/5.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/manhattanbridge.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1><span className="opacity-50"></span>N – Brooklyn</h1>
                </div>
                
            </div>

            <div className="relative">
            
                <video 
                src="/content/2.mp4" 
                className=" rounded w-full h-auto object-cover"
                autoPlay muted loop playsInline loading="lazy"
                poster='/poster/content/muir.png'
                variants={animateInChild}>
                </video>

                {/* Gradient */}
                <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b"/>

                {/* Title */}
                <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-1.5 leading-[10px]">
                    <h1><span className="opacity-50"></span>Muir Beach</h1>
                </div>

            </div>
            
        </motion.div>

        

      
    </motion.div>
  );
};

export default ContentPage;
