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

const BestWorkPage = ({className, setSelectedWork}) => {
  return (
    <motion.div className={`grid grid-cols-6 font-[family-name:var(--font-geist-sans)] ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>


        <motion.div className="col-span-2 mb-2 font-base" variants={animateInChild} >
            <p className="font-medium text-lg tracking-tighter ml-0.5">01.</p>
            <h1 className="text-6xl font-semibold tracking-tighter leading-tighter mb-2 mr-20">Beyond The Cabin</h1>
            <h1 className="text-2xl tracking-tighter mb-4 mr-10">Brand Campaign for Singapore Airlines</h1>
            <p className="mr-10">6 Cities. 6 Cabin Crew. 6 Passions.<br/>
            Journey beyond the cabin with our cabin crew. You see them on board, now follow their travels around the world.
            </p>
        </motion.div>

        <button className="col-span-4 mb-4">
            <motion.video src="/CCS/montagelow.mp4" 
            className="shadow-standard rounded-lg w-full h-96 object-cover"
            autoPlay muted loop
            variants={animateInChild}
            whileHover={{scale:0.99}}
            transition={{duration:0.10}}
            onClick={() => setSelectedWork('cabin')}>
            </motion.video>
        </button>

        <motion.div className="col-span-2 mb-2 font-base" variants={animateInChild}>
            <p className="font-medium text-lg tracking-tighter ml-0.5">02.</p>
            <h1 className="text-6xl font-semibold tracking-tighter leading-tighter mb-2 mr-20">Cocktail Conversations</h1>
            <h1 className="text-2xl tracking-tighter mb-4 mr-10">Brand Campaign for Singapore Airlines</h1>
            <p className="mr-10">6 Cities. 6 Cabin Crew. 6 Passions.<br/>
            Journey beyond the cabin with our cabin crew. You see them on board, now follow their travels around the world.
            </p>
        </motion.div>

        <button className="col-span-4 mb-4">
            <motion.video src="/Cocktail/montage.mp4" 
            className="shadow-standard rounded-lg w-full h-96 object-cover"
            autoPlay muted loop
            variants={animateInChild}
            whileHover={{scale:0.99}}
            transition={{duration:0.10}}
            onClick={() => setSelectedWork('cocktail')}>
            </motion.video>
        </button>
        

        <motion.div className="col-span-2 mb-2 font-base" variants={animateInChild}
        onClick={() => setSelectedWork('ghibli')}>
            <p className="font-medium text-lg tracking-tighter">03.</p>
            <h1 className="text-6xl font-semibold tracking-tighter leading-tighter mb-2 mr-20">The World of Studio Ghibli</h1>
            <h1 className="text-2xl tracking-tighter mb-4 mr-10">Marketing Campaign for ArtScience Museum</h1>
            <p className="mr-10">Explore the World of Studio Ghibli at ArtScience Museum, where imagination begins.
            </p>
        </motion.div>

        <button className="col-span-4 mb-4">
            <motion.video src="/ghibli/banner.mp4" 
            className="shadow-standard rounded-lg w-full h-96 object-cover"
            autoPlay muted loop
            variants={animateInChild}
            whileHover={{scale:0.99}}
            transition={{duration:0.10}}
            onClick={() => setSelectedWork('ghibli')}>
            </motion.video>
        </button>

        

        {/* <div className="relative col-span-full shadow-standard rounded-lg w-full h-96 mb-4">
            <motion.video
                src="/ghibli/banner.mp4"
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                muted
                loop
                variants={animateInChild}
            />
            <p className="absolute inset-0 flex flex-col items-start justify-start p-10 text-7xl tracking-tighter font-base z-10 text-background max-w-lg">
                The World of Studio Ghibli
                <h1 className="text-2xl tracking-tighter mb-4 mr-10">Marketing Campaign for ArtScience Museum</h1>
                <p className="text-base mr-10">Explore the World of Studio Ghibli at ArtScience Museum, where imagination begins.</p>
            </p>
            
            
        </div> */}

        
        

        


    </motion.div>
  );
};

export default BestWorkPage;