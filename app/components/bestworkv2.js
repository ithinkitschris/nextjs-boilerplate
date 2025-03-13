'use client'

import * as motion from "framer-motion/client"
import {useEffect, useRef} from 'react';

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.2, duration:0.5, ease:"easeOut"}
    }
}
const animateInChild ={
hidden: {opacity:0, y:20},
show: {
    opacity:1, y:0, 
    transition: {duration:0.3, ease:"easeOut"}
    }
}


const BestWorkPage2 = ({className, setSelectedWork, setHoveredWork}) => {

 
return (
    <motion.div
    className={`font-[family-name:var(--font-geist-sans)] ${className} w-full overflow-x-hidden`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

      <div className="relative w-full">

        {/* Horizontal Carousel Wrapper */}
        <div className="flex overflow-x-auto gap-4 rounded-3xl">
          
          {/* Beyond The Cabin */}
          <div className="min-w-[90%] snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-300 rounded-3xl transition cursor-pointer relative hover:scale-98">
            
            <button className={`absolute top-7 right-7 font-medium text-lg tracking-tighter p-1 px-2 rounded-full 
            flex items-center justify-center border-1 border-white text-white cursor-pointer
            group-hover:bg-white group-hover:text-black group-hover:scale-90 group-hover:-m-3 transition-all duration-300`}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 2 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
                </svg>
            </button>
            
            {/* Side Container */}
            <div className="absolute z-40 pl-10 pt-6 group-hover:p-10 w-[23%] group-hover:w-[28%] h-full text-white group-hover:bg-white/10 dark:group-hover:bg-black/20 backdrop-blur-none group-hover:backdrop-blur-2xl rounded-3xl group-hover:shadow-lg transition-all duration-300">

              <button className="font-mono text-base tracking-tight p-2 h-6 rounded-full flex items-center justify-center border border-white mb-2 transition group-hover:bg-white group-hover:text-black group-hover:scale-90">
                01
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 3 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg> */}
              </button>

              <h1 className="text-4.5xl group-hover:text-6xl font-medium tracking-tighter leading-tighter mb-1 transition-all duration-300 -ml-1">
                Beyond <br/> The Cabin
              </h1>

              <h1 className="text-base font-medium tracking-tight mt-5 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Brand Campaign for Singapore Airlines
              </h1>

              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[280px]">
                6 Cities. 6 Cabin Crew. 6 Passions. Journey beyond the cabin with our cabin crew. You see them on board, now follow their travels around the world.
              </p>

              <div className="col-span-3">
                  <div className="absolute bottom-10 -ml-1 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Role:</div>
                  <div className="absolute bottom-5 -ml-1 gap-3 tracking-tight hidden 2xl:flex
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                      <p>Creative Direction</p>
                      <p>Motion Design</p>
                      <p>Visual Design</p>
                  </div>
              </div>

            </div>

            {/* Video */}
            <video src="/CCS/bestworkmontage.mp4"
              className="rounded-3xl w-full col-span-full h-[760px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/poster/cabinbest1.jpeg"/>
          </div>

          {/* Cocktail Conversations */}
          <div className="min-w-[90%] snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 dark:border-1.5 border-transparent group shadow-mild  duration-300 rounded-3xl transition cursor-pointer relative hover:scale-98">
            
            {/* Side Container */}
            <div className="absolute z-40 pl-10 pt-6 group-hover:p-10 w-[28%] group-hover:w-[34%] h-full text-white group-hover:bg-white/10 dark:group-hover:bg-black/20 backdrop-blur-none group-hover:backdrop-blur-2xl rounded-3xl group-hover:shadow-lg transition-all duration-300">

              <button className="font-mono text-base tracking-tighter w-11 h-6 rounded-full flex items-center justify-center border border-white mb-2 transition group-hover:bg-white group-hover:text-black group-hover:scale-90">
                02
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 3 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </button>

              <h1 className="text-4.5xl group-hover:text-6xl font-medium tracking-tighter leading-[85%] group-hover:leading-12 mb-1 transition-all duration-300 -ml-1">
                Cocktail<br/> Conversations
              </h1>

              <h1 className="text-base font-medium tracking-tight mt-5 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Brand Campaign for Singapore Airlines
              </h1>

              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[360px]">
              If there was a drink to match every personality, how would your bespoke cocktail look and taste like?
              </p>

              <div className="col-span-3">
                  <div className="absolute bottom-10 -ml-1 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Role:</div>
                  <div className="absolute bottom-5 -ml-1 gap-6 tracking-tight hidden 2xl:flex
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                      <p>Creative Direction</p>
                      <p>Motion Design</p>
                      <p>Visual Design</p>
                  </div>
              </div>

            </div>

            {/* Video */}
            <video src="/Cocktail/bestworkmontage_1.mp4"
              className="rounded-3xl w-full col-span-full h-[760px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster='/poster/cocktailpage.jpeg'/>
          </div>

          {/* Ghibli */}
          <div className="min-w-[90%] snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 dark:border-1.5 border-transparent group shadow-mild  duration-300 rounded-3xl transition cursor-pointer relative hover:scale-98">
            
            {/* Side Container */}
            <div className="absolute z-50 p-10 pt-8 w-[26%] group-hover:w-[33%] h-full text-white group-hover:bg-white/10 dark:group-hover:bg-black/20 backdrop-blur-none group-hover:backdrop-blur-2xl rounded-3xl group-hover:shadow-lg transition-all duration-300">

              <button className="font-mono text-base tracking-tighter w-11 h-6 rounded-full flex items-center justify-center border border-white mb-2 transition group-hover:bg-white group-hover:text-black group-hover:scale-90">
                03
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 3 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </button>

              <h1 className="text-4.5xl group-hover:text-6xl font-medium tracking-tighter leading-[85%] group-hover:leading-12 mb-1 transition-all duration-300 -ml-1">
                The World of <br/>Studio Ghibli
              </h1>

              <h1 className="text-base font-medium tracking-tight mt-5 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Marketing Campaign for ArtScience Museum
              </h1>

              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[360px]">
              If there was a drink to match every personality, how would your bespoke cocktail look and taste like?
              </p>

              <div className="col-span-3">
                  <div className="absolute bottom-10 -ml-1 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Role:</div>
                  <div className="absolute bottom-5 -ml-1 gap-6 tracking-tight hidden 2xl:flex
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                      <p>Creative Direction</p>
                      <p>Motion Design</p>
                      <p>Visual Design</p>
                  </div>
              </div>

            </div>

            {/* Video */}
            <video src="/Ghibli/banner.mp4"
              className="rounded-3xl w-full col-span-full h-[760px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster='/poster/cocktailpage.jpeg'/>
          </div>

        </div>
      </div>

      {/* <div className="absolute -z-50 top-96">
            <div className="min-w-screen flex-col blur-3xl opacity-0 dark:opacity-100">
                <motion.video
                src="/CCS/montagelow.mp4"
                ref={cabinBgRef}
                className="rounded-full w-screen h-screen md:h-screen/2 object-cover saturate-200 opacity-70"
                autoPlay
                muted
                loop
                playsInline
                ></motion.video>

                <motion.video
                src="/Cocktail/montage.mp4"
                ref={cocktailBgRef}
                className="rounded-full w-screen h-screen md:h-screen/2 object-cover saturate-200 opacity-70"
                autoPlay
                muted
                loop
                playsInline
                ></motion.video>

                <motion.video
                src="/Ghibli/banner.mp4"
                ref={ghibliBgRef}
                className="rounded-full w-screen h-screen md:h-screen/2 object-cover saturate-200 opacity-70"
                autoPlay
                muted
                loop
                playsInline
                ></motion.video>
            </div>
        </div> */}
    </motion.div>  

    
    
  );
};

export default BestWorkPage2;