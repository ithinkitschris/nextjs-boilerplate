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

        <button className="col-span-4 rounded-lg mb-4">
            <motion.video src="/CCS/montagelow.mp4" 
            className="rounded-lg shadow-standard w-full h-96 object-cover"
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

        <button className="col-span-4 rounded-lg mb-4">
            <motion.video src="/Cocktail/montage.mp4" 
            className="rounded-lg shadow-standard w-full h-96 object-cover object-[0_30%]"
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
            <p className="mr-10">Explore the World of Studio Ghibli at ArtScience Museum. Be spirited away into the magical scenes from My Neighbor Totoro, Kiki’s Delivery Service, and other iconic films through immersive theatrical sets, whimsical art installations and more.​
            </p>
        </motion.div>

        <button className="col-span-4 rounded-lg mb-4">
            <motion.video src="/ghibli/banner.mp4" 
            className="rounded-lg shadow-standard w-full h-96 object-cover"
            autoPlay muted loop
            variants={animateInChild}
            whileHover={{scale:0.99}}
            transition={{duration:0.10}}
            onClick={() => setSelectedWork('ghibli')}>
            </motion.video>
        </button>

        <motion.div className="col-span-2 mb-2 font-base" variants={animateInChild}
        onClick={() => setSelectedWork('ghibli')}>
            <p className="font-medium text-lg tracking-tighter">04.</p>
            <h1 className="text-6xl font-semibold tracking-tighter leading-tighter mb-2 mr-20 -ml-1">JolliEverAfter</h1>
            <h1 className="text-2xl tracking-tighter mb-4 mr-10">Social Media Campaign for Jollibee</h1>
            <p className="mr-10">Explore the World of Studio Ghibli at ArtScience Museum, where imagination begins.
            </p>
        </motion.div>

        <button className="col-span-4 rounded-lg mb-4">
            <motion.video src="/jollieverafter/teaser.mp4" 
            className="rounded-lg shadow-standard w-full h-96 object-cover object-[0_35%]"
            autoPlay muted loop
            variants={animateInChild}
            whileHover={{scale:0.99}}
            transition={{duration:0.10}}
            onClick={() => setSelectedWork('ghibli')}>
            </motion.video>
        </button>

        <motion.div className="col-span-2 mb-2 font-base" variants={animateInChild}
        onClick={() => setSelectedWork('ghibli')}>
            <p className="font-medium text-lg tracking-tighter">05.</p>
            <h1 className="text-6xl font-semibold tracking-tighter leading-tighter mb-2 mr-20 -ml-1">Your Stage Now Live</h1>
            <h1 className="text-2xl tracking-tighter mb-4 mr-10">In-Store Displays for Uniqlo</h1>
            <p className="mr-10">Explore the World of Studio Ghibli at ArtScience Museum, where imagination begins.
            </p>
        </motion.div>

        <button className="col-span-4 rounded-lg mb-4">
            <motion.video src="/uniqlo1/montage.mp4" 
            className="rounded-lg shadow-standard w-full h-96 object-cover"
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