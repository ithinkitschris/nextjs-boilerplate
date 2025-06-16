'use client'
import { easeOut } from "framer-motion";
import * as motion from "framer-motion/client"
import React from 'react';
import ContentGridItem from './ContentGridItem';


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

        {/* On The Road */}
        <motion.div className="col-span-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-0.5 md:gap-1 dark:md:gap-2 md:mb-1 mb-0.5 transition-all duration-300" variants={animateInChild}>
            <ContentGridItem
                videoSrc="/content/taycan.mp4"
                posterSrc="/poster/content/taycan.jpg"
                title="Taycan 4S"
                subtitle="On The Road:"
                variants={animateInChild}
            />
            
            <ContentGridItem
                videoSrc="/content/m3.mp4"
                posterSrc="/poster/content/m3.jpg"
                title="BMW M3"
                subtitle="On The Road:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/ontheroadc43.mp4"
                posterSrc="/poster/content/c43.jpg"
                title="New York"
                subtitle="On The Road:"
                variants={animateInChild}
            />
            
            <ContentGridItem
                videoSrc="/content/ontheroad1_1.mp4"
                posterSrc="/poster/content/roadbay.png"
                title="California"
                subtitle="On The Road:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/ontheroad3_1.mp4"
                posterSrc="/poster/content/roadkl.png"
                title="Kuala Lumpur"
                subtitle="On The Road:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/ontheroad4_1.mp4"
                posterSrc="/poster/content/roadmelbourne.png"
                title="Melbourne"
                subtitle="On The Road:"
                variants={animateInChild}
            />
            
            <ContentGridItem
                videoSrc="/content/rangefinder1_1.mp4"
                posterSrc="/poster/content/klleica.png"
                title="Kuala Lumpur"
                subtitle="Through the Rangefinder:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/rangefinder2_1.mp4"
                posterSrc="/poster/content/shanghaileica.png"
                title="Shanghai"
                subtitle="Through the Rangefinder:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/rangefinder3_1.mp4"
                posterSrc="/poster/content/shanghaifilm.png"
                title="Film"
                subtitle="Through the Rangefinder:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/pov2.mp4"
                posterSrc="/poster/content/12a.png"
                title="Seat 12A"
                subtitle="POV:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/pov3_1.mp4"
                posterSrc="/poster/content/15a.png"
                title="Seat 15A"
                subtitle="POV:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/pov4_1.mp4"
                posterSrc="/poster/content/nonstop.png"
                title="The World's Longest Flight"
                subtitle="POV:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/filmvsdigital1.mp4"
                posterSrc="/poster/content/filmhanoi.png"
                title="Hanoi"
                subtitle="Film vs Digital:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/filmvsdigital2.mp4"
                posterSrc="/poster/content/filmmarinabay.png"
                title="Marina Bay"
                subtitle="Film vs Digital:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/filmvsdigital3.mp4"
                posterSrc="/poster/content/filmshanghai.png"
                title="Shanghai"
                subtitle="Film vs Digital:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/blender1.mp4"
                posterSrc="/poster/content/iphoneblender.png"
                title="15 Hours of iPhone 15 Pro"
                subtitle="Blender:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/blender2.mp4"
                posterSrc="/poster/content/iphoneblender2.png"
                title="15 more hours of iPhone 15 Pro"
                subtitle="Blender:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/blender3.mp4"
                posterSrc="/poster/content/leicablender.png"
                title="Leica M10-P"
                subtitle="Blender:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/blender4.mp4"
                posterSrc="/poster/content/leicablender2.png"
                title="Modeling a Leica"
                subtitle="Blender:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/24hours1.mp4"
                posterSrc="/poster/content/24hourkl.png"
                title="Kuala Lumpur"
                subtitle="24 Hours of"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/24hours2.mp4"
                posterSrc="/poster/content/24hourmelbourne.png"
                title="Melbourne"
                subtitle="24 Hours of"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/16.mp4"
                posterSrc="/poster/content/stool.png"
                title="IKEA Stool"
                subtitle="One man's trash, another man's questionable treasure:"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/15.mp4"
                posterSrc="/poster/content/lounge.png"
                title="One Afternoon in SilverKris Lounge"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/14.mp4"
                posterSrc="/poster/content/shanghaibrands.png"
                title="Brands to check out in Shanghai"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/11.mp4"
                posterSrc="/poster/content/prints.png"
                title="Too many prints, not enough wall"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/4_1.mp4"
                posterSrc="/poster/content/jaguar.png"
                title="A Drone, A Jaguar, in California"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/3.mp4"
                posterSrc="/poster/content/chicago.png"
                title="Chicago in 26,020 steps"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/17.mp4"
                posterSrc="/poster/content/dia.png"
                title="One Afternoon at DIA Beacon"
                variants={animateInChild}
            />
            <ContentGridItem
                videoSrc="/content/5.mp4"
                posterSrc="/poster/content/manhattanbridge.png"
                title="Brooklyn"
                subtitle="N –"
                variants={animateInChild}
            />

            <ContentGridItem
                videoSrc="/content/2.mp4"
                posterSrc="/poster/content/muir.png"
                title="Muir Beach"
                variants={animateInChild}
            />
            
        </motion.div>

        

      
    </motion.div>
  );
};

export default ContentPage;
