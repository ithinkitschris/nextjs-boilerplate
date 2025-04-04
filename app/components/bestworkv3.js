'use client'

import * as motion from "framer-motion/client"
import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.2, duration:0.5, ease:"easeOut"}
    }
}

const BestWorkPage3 = ({className}) => {

  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollToIndex = (index) => {
    if (!itemsRef.current[index] || !containerRef.current) return;
    
    // Save current vertical scroll position
    const scrollY = window.scrollY;
    
    // Get container dimensions
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    
    // Calculate what the scroll position should be to position the item at 5% from left edge
    // This assumes the expanded item will take 90% width and be centered in the container
    const item = itemsRef.current[index];
    const targetLeftPosition = containerWidth * 0.1; // 5% from left edge
    const scrollPosition = item.offsetLeft - targetLeftPosition;
    
    // Scroll to position
    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth"
    });
    
    // Restore vertical scroll position
    window.scrollTo({
      top: scrollY,
      behavior: "auto"
    });
    
    setActiveIndex(index);
  };


  const handleMouseEnter = (index) => {
    const hoverTimer = setTimeout(() => {
      scrollToIndex(index);
    }, 100); // Increased delay to allow for hover transition to start
    
    // Store the timer ID so we can clear it if needed
    return () => clearTimeout(hoverTimer);
  };

return (
    <motion.div
    className={`font-[family-name:var(--font-geist-sans)] ${className} w-full overflow-x-hidden`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

      <div className="relative w-full">

        {/* Side Navigation Arrows */}
        {/* <div className="absolute z-50 flex w-full justify-between px-5 top-[350px]">

          <button
            onClick={(event) => {
              event.preventDefault();
              const newIndex = Math.max(0, activeIndex - 1); 
              setActiveIndex(newIndex);
              scrollToIndex(newIndex, event);
            }}
            className={`w-8 h-8 pr-[1.5px] text-sm font-semibold rounded-full transition-all duration-200 backdrop-blur-2xl flex items-center justify-center
              border-1 shadow-md dark:border-white/35 text-foreground hover:text-white dark:text-white hover:bg-foreground dark:hover:bg-white dark:hover:text-black hover:scale-90 ${activeIndex === 0 ? 'opacity-0' : 'opacity-100'}`}
          >
            <ChevronLeftIcon className="w-[22px] h-[22px]" />
          </button>

          <button
            onClick={(event) => {
              event.preventDefault();
              const newIndex = Math.min(2, activeIndex + 1); 
              setActiveIndex(newIndex);
              scrollToIndex(newIndex, event);
            }}
            className={`w-8 h-8 pl-[1px] text-sm font-semibold rounded-full transition-all duration-200 backdrop-blur-2xl flex items-center justify-center
              border-1 shadow-md dark:border-white/35 text-foreground hover:text-white dark:text-white hover:bg-foreground dark:hover:bg-white dark:hover:text-black hover:scale-90 ${activeIndex === 2 ? 'opacity-0' : 'opacity-100'}`}
          >
            <ChevronRightIcon className="w-[22px] h-[22px]" />
          </button>

        </div> */}

        {/* Top Navigation Arrows */}
        <div className="z-50 flex gap-3 justify-end px-28 mb-10 pt-1">

          <button
            onClick={() => {
              const newIndex = Math.max(0, activeIndex - 1); 
              setActiveIndex(newIndex);
              scrollToIndex(newIndex);
            }}
            className={`w-7 h-7 pr-[1.5px] text-sm font-semibold rounded-full transition-all duration-200 backdrop-blur-2xl flex items-center justify-center
              dark:border-1 bg-background drop-shadow-md dark:border-white/50 text-foreground hover:text-white dark:text-white hover:bg-foreground dark:hover:bg-white dark:hover:text-black hover:scale-90 
              ${activeIndex === 0 ? 'opacity-35 drop-shadow-none pointer-events-none' : 'opacity-100'}`}
          >
            <ChevronLeftIcon className="w-[18px] h-[18px]" />
          </button>

          <button
            onClick={() => {
              const newIndex = Math.min(3, activeIndex + 1); 
              setActiveIndex(newIndex);
              scrollToIndex(newIndex);
            }}
            className={`w-7 h-7 pl-[1px] text-sm font-semibold rounded-full transition-all duration-200 backdrop-blur-2xl flex items-center justify-center
              dark:border-1 bg-background drop-shadow-md dark:border-white/50 text-foreground hover:text-white dark:text-white hover:bg-foreground dark:hover:bg-white dark:hover:text-black hover:scale-90 
              ${activeIndex === 3 ? 'opacity-35 drop-shadow-none pointer-events-none' : 'opacity-100'}`}
          >
            <ChevronRightIcon className="w-[18px] h-[18px]" />
          </button>

        </div>

        {/* Horizontal Carousel Wrapper */}
        <div className="flex overflow-x-auto gap-4 rounded-3xl mx-20" ref={containerRef}>

          {/* Simple Navigation Dots */}
          <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-1 mb-3 scale-90">
            {['Beyond the Cabin','The World of Studio Ghibli','Cocktail Conversations', 'hemsaker'].map((title,index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`text-[7pt] font-semibold rounded-full transition-all duration-300 flex items-center justify-center w-3.5 h-3.5  ${
                  activeIndex === index
                    ? "bg-white scale-75 -mx-1 px-6"
                    : "bg-white/35 text-white hover:bg-white hover:scale-100 scale-[60%]"
                }`}
              >
                {activeIndex === index ? '' : ''}
              </button>
            ))}
          </div>
          
          {/* Beyond The Cabin */}
          <div 
              ref={(el) => (itemsRef.current[0] = el)}
              // onMouseEnter={() => {
              //   setHoveredIndex(0);
              //   handleMouseEnter(0);
              // }}
              // onMouseLeave={() => setHoveredIndex(null)}
              className={`${hoveredIndex === 0 ? 'min-w-[90%]' : 'min-w-[90%]'} snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-300 rounded-3xl transition-all cursor-pointer relative ${hoveredIndex === 0 ? 'scale-98' : ''}`}
            >
            
            {/* Gradient */}
            {/* <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl bg-gradient-to-b from-black/70 to-transparent h-[30%] group-hover:opacity-0 transition-all duration-300"/> */}
            
            <button className={`absolute top-7 right-7 font-medium text-lg tracking-tighter p-1 px-2 rounded-full mt-0.5
            flex items-center justify-center border-1 border-white text-white cursor-pointer
            group-hover:bg-white group-hover:text-black group-hover:scale-110 group-hover:-m-3 transition-all duration-300`}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 2 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
                </svg>
            </button>
            
            {/* Side Container */}
            <div className="absolute z-40 pl-10 pt-6 group-hover:p-10 w-[300px] group-hover:w-[370px] h-full text-white group-hover:bg-white/10 dark:group-hover:bg-black/20 backdrop-blur-none group-hover:backdrop-blur-2xl rounded-3xl group-hover:shadow-lg transition-all duration-300">

              <button className="font-mono text-base tracking-tight -ml-1.5 p-2 h-6 rounded-full flex items-center justify-center border border-white mb-2 transition group-hover:bg-white group-hover:text-black group-hover:scale-90">
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
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">

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

          {/* Ghibli */}
          <div 
              ref={(el) => (itemsRef.current[1] = el)}
              // onMouseEnter={() => {
              //   setHoveredIndex(1);
              //   handleMouseEnter(1);
              // }}
              // onMouseLeave={() => setHoveredIndex(null)}
              className={`${hoveredIndex === 1 ? 'min-w-[90%]' : 'min-w-[90%]'} snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-300 rounded-3xl transition-all cursor-pointer relative ${hoveredIndex === 1 ? 'scale-98' : ''}`}
            >

            {/* Gradient */}
            {/* <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl bg-gradient-to-b from-black/70 to-transparent h-[30%] group-hover:opacity-0 transition-all duration-300"/> */}
            
            {/* Top Right Arrow */}
            <button className={`absolute top-7 right-7 font-medium text-lg tracking-tighter p-1 px-2 rounded-full mt-0.5
            flex items-center justify-center border-1 border-white text-white cursor-pointer
            group-hover:bg-white group-hover:text-black group-hover:scale-110 group-hover:-m-3 transition-all duration-300`}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 2 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
                </svg>
            </button>

            {/* Side Container */}
            <div className="absolute z-50 p-10 pt-8 w-[26%] group-hover:w-[450px] h-full text-white group-hover:bg-white/10 dark:group-hover:bg-black/20 backdrop-blur-none group-hover:backdrop-blur-2xl rounded-3xl group-hover:shadow-lg transition-all duration-300">

              <button className="font-mono text-base tracking-tight -ml-2 p-2 h-6 rounded-full flex items-center justify-center border border-white mb-2 transition group-hover:bg-white group-hover:text-black group-hover:scale-90">
                02
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 3 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg> */}
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
              poster='/poster/ghibli.jpeg'/>
          </div>

          {/* Cocktail Conversations */}
          <div 
              ref={(el) => (itemsRef.current[2] = el)}
              // onMouseEnter={() => {
              //   setHoveredIndex(2);
              //   handleMouseEnter(2);
              // }}
              // onMouseLeave={() => setHoveredIndex(null)}
              className={`${hoveredIndex === 2 ? 'min-w-[90%]' : 'min-w-[90%]'} snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-300 rounded-3xl transition-all cursor-pointer relative ${hoveredIndex === 2 ? 'scale-98' : ''}`}
            >

            {/* Gradient */}
            {/* <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl bg-gradient-to-b from-black/70 to-transparent h-[30%] group-hover:opacity-0 transition-all duration-300"/> */}
            
            {/* Side Container */}
            <div className="absolute z-40 pl-10 pt-6 group-hover:p-10 w-[28%] group-hover:w-[460px] h-full text-white group-hover:bg-white/10 dark:group-hover:bg-black/20 backdrop-blur-none group-hover:backdrop-blur-2xl rounded-3xl group-hover:shadow-lg transition-all duration-300">

              <button className="font-mono text-base tracking-tighter w-11 h-6 rounded-full flex items-center justify-center border border-white mb-2 transition group-hover:bg-white group-hover:text-black group-hover:scale-90">
                03
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

          {/* IKEA */}
          <div 
              ref={(el) => (itemsRef.current[3] = el)}
              // onMouseEnter={() => {
              //   setHoveredIndex(3);
              //   handleMouseEnter(3);
              // }}
              // onMouseLeave={() => setHoveredIndex(null)}
              className={`${hoveredIndex === 3 ? 'min-w-[90%]' : 'min-w-[90%]'} snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-300 rounded-3xl transition-all cursor-pointer relative ${hoveredIndex === 3 ? 'scale-98' : ''}`}
            >

            {/* Gradient */}
            {/* <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl bg-gradient-to-b from-black/70 to-transparent h-[30%] group-hover:opacity-0 transition-all duration-300"/> */}
            
            {/* Side Container */}
            <div className="absolute z-40 pl-10 pt-6 group-hover:p-10 w-[300px] group-hover:w-[350px] h-full text-white group-hover:bg-black/10 backdrop-blur-none group-hover:backdrop-blur-2xl rounded-3xl group-hover:shadow-lg transition-all duration-300">

              <button className="font-mono text-base tracking-tighter w-11 h-6 rounded-full flex items-center justify-center border border-white mb-2 transition group-hover:bg-white group-hover:text-black group-hover:scale-90">
                04
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 3 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </button>

              <h1 className="text-4.5xl group-hover:text-6xl font-medium tracking-tighter leading-[85%] group-hover:leading-12 mb-1 transition-all duration-300 -ml-1">
                Oops Happens
              </h1>

              <h1 className="text-base font-medium tracking-tight mt-5 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Product Campaign for IKEA
              </h1>

              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[280px]">
              With HEMSÄKER home insurance, everything will be exactly as if it never happened.
              </p>

              <div className="col-span-3">
                  
                  <div className="absolute bottom-5 -ml-1 gap-6 tracking-tight hidden 2xl:flex
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="font-semibold">Role:</div>   
                      <p>Ideation</p>
                      <p>Art Direction</p>
                  </div>
              </div>

            </div>

            {/* Video */}
            <video src="/Hemsaker/cover.mp4"
              className="rounded-3xl w-full col-span-full h-[760px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster='/poster/cocktailpage.jpeg'/>
          </div>

        </div>

        {/* Simple Navigation Dots Bottom */}
        {/* <div className="mt-4 z-20 flex justify-center gap-0 mb-3 scale-90">
            {['Beyond the Cabin','The World of Studio Ghibli','Cocktail Conversations'].map((title,index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`text-[7pt] font-semibold rounded-full transition-all duration-300 flex items-center justify-center w-3.5 h-3.5  ${
                  activeIndex === index
                    ? "bg-white scale-75 mx-1 px-1.5"
                    : "bg-white/35 text-white hover:bg-white hover:scale-75 scale-50"
                }`}
              >
                {activeIndex === index ? '' : ''}
              </button>
            ))}
          </div> */}
      </div>
    </motion.div>  

    
    
  );
};

export default BestWorkPage3;