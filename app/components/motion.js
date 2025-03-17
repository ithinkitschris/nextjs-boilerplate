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



const MotionDesignPage = ({className}) => {

  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    
    if (itemsRef.current[index]) {
      // Save current vertical scroll position
      const scrollY = window.scrollY;
      
      // Scroll the item into view horizontally
      itemsRef.current[index].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      
      // Restore vertical scroll position
      window.scrollTo({
        top: scrollY,
        behavior: "auto" // Use "auto" to prevent animation conflict
      });
      
      // Prevent focus shift
      setTimeout(() => {
        document.activeElement?.blur();
      }, 100);
    }
    
    setActiveIndex(index);
  };

  // Detects active index based on scroll position
  const handleScroll = () => {
    if (!containerRef.current || !itemsRef.current.length) return;

    let closestIndex = 0;
    let minDistance = Infinity;
    const containerCenter = containerRef.current.scrollLeft + containerRef.current.clientWidth / 2;

    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(containerCenter - itemCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  // Attach the scroll listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

 
return (
    <motion.div
    className={`font-[family-name:var(--font-geist-sans)] ${className} w-full overflow-x-hidden`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

      <div className="relative w-full">

        {/* Top Navigation Arrows */}
        <div className="z-50 flex gap-3 justify-end px-8 mb-10 pt-1">

          <button
            onClick={() => {
              const newIndex = Math.max(0, activeIndex - 1); 
              setActiveIndex(newIndex);
              scrollToIndex(newIndex);
            }}
            className={`w-7 h-7 pr-[1.5px] text-sm font-semibold rounded-full transition-all duration-200 backdrop-blur-2xl flex items-center justify-center
              dark:border-1 bg-background drop-shadow-md dark:border-white/50 text-foreground hover:text-white dark:text-white hover:bg-foreground dark:hover:bg-white dark:hover:text-black hover:scale-90 
              ${activeIndex === 0 ? 'opacity-35 drop-shadow-none' : 'opacity-100'}`}
          >
            <ChevronLeftIcon className="w-[18px] h-[18px]" />
          </button>

          <button
            onClick={() => {
              const newIndex = Math.min(2, activeIndex + 1); 
              setActiveIndex(newIndex);
              scrollToIndex(newIndex);
            }}
            className={`w-7 h-7 pl-[1px] text-sm font-semibold rounded-full transition-all duration-200 backdrop-blur-2xl flex items-center justify-center
              dark:border-1 bg-background drop-shadow-md dark:border-white/50 text-foreground hover:text-white dark:text-white hover:bg-foreground dark:hover:bg-white dark:hover:text-black hover:scale-90 
              ${activeIndex === 2 ? 'opacity-35 drop-shadow-none' : 'opacity-100'}`}
          >
            <ChevronRightIcon className="w-[18px] h-[18px]" />
          </button>

        </div>

        {/* Horizontal Carousel Wrapper */}
        <div className="flex overflow-x-auto gap-4 rounded-3xl h-full" ref={containerRef}>

          {/* Simple Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-0 mb-3 scale-90">
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
          </div>

          {/* Nike */}
          <div 
          ref={(el) => (itemsRef.current[0] = el)}
          className="min-w-[450px] h-full snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 dark:border-1.5 border-transparent group  duration-300 rounded-3xl transition-all cursor-pointer relative hover:scale-98">
            
            {/* Side Container */}
            <div className="absolute z-40 p-10 pt-8 w-full h-full text-white group-hover:bg-white/10 dark:group-hover:bg-black/20 backdrop-blur-none group-hover:backdrop-blur-2xl rounded-3xl transition-all duration-300">

              <button className="font-mono text-base tracking-tighter w-11 h-6 rounded-full flex items-center justify-center border border-white mb-2 transition group-hover:bg-white group-hover:text-black group-hover:scale-90">
                01
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 3 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </button>

              <h1 className="text-4.5xl group-hover:text-6xl font-medium tracking-tighter leading-tighter mb-1 transition-all duration-300 -ml-1 opacity-100 group-hover:opacity-100">
                Nike Athlete Stories: <br/>Koy & Toon
              </h1>

              <h1 className="text-base font-medium tracking-tight mt-5 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Social Media Campaign for Nike
              </h1>

              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[93%]">
              A set of Instagram Stories videos and a full film featuring Thai NIKE athletes Koy Ratchawin and Artiwara Kongmalai (Toon)
              </p>

              <div className="col-span-3">
                  <div className="absolute bottom-5 -ml-1 gap-6 tracking-tight hidden 2xl:flex
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                      <p className="font-semibold mr-2">Role:</p>
                      <p>Motion Design</p>
                      <p>Video Editing</p>
                  </div>
              </div>

            </div>

            {/* Video */}
            <video src="/nike/cover.mp4"
              className="rounded-3xl w-full col-span-full h-[760px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster='/poster/cocktailpage.jpeg'/>
          </div>

          {/* Jollibee */}
          <div 
          ref={(el) => (itemsRef.current[-1] = el)}
          className="min-w-[610px] h-full snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 dark:border-1.5 border-transparent group  duration-300 rounded-3xl transition-all cursor-pointer relative hover:scale-98">
            
            {/* Side Container */}
            <div className="absolute z-40 p-10 pt-8 w-[62%] group-hover:w-[73%] h-full text-white group-hover:bg-white/10 dark:group-hover:bg-black/20 backdrop-blur-none group-hover:backdrop-blur-2xl rounded-3xl transition-all duration-300">

              <button className="font-mono text-base tracking-tighter w-11 h-6 rounded-full flex items-center justify-center border border-white mb-2 transition group-hover:bg-white group-hover:text-black group-hover:scale-90">
                02
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 3 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </button>

              {/* Side Action Button */}
              {/* <button className={`absolute top-7 right-7 font-medium text-lg tracking-tighter p-1 px-2 rounded-full 
              flex items-center justify-center border-1 border-white text-white cursor-pointer z-40
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
              </button> */}

              <h1 className="text-4.5xl group-hover:text-6xl font-medium tracking-tighter leading-tighter mb-1 transition-all duration-300 -ml-1 opacity-100 group-hover:opacity-100">
                JolliEverAfter
              </h1>

              <h1 className="text-base font-medium tracking-tight mt-5 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Social Media Campaign for Jollibee
              </h1>

              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[350px]">
              An interactive social media campaign that brought Jollibee's annual Kwentong film to TikTok for the first time in 2020.
              </p>

              <div className="col-span-3">
                  <div className="absolute bottom-5 -ml-1 gap-6 tracking-tight hidden 2xl:flex
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full">
                      <p className="font-semibold mr-2">Role:</p>
                      <p>Motion Design</p>
                      <p>Video Editing</p>
                  </div>
              </div>

            </div>

            {/* Video */}
            <video src="/jollieverafter/favpagecover.mp4"
              className="rounded-3xl w-full col-span-full h-[760px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster='/poster/cocktailpage.jpeg'/>
          </div>
          
          {/* Samsung */}
          <div 
          ref={(el) => (itemsRef.current[1] = el)}
          className="min-w-[90%] h-full snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-300 rounded-3xl transition cursor-pointer relative hover:scale-98">
            
            {/* Side Action Button */}
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
            <div className="absolute z-40 p-10 pt-8 w-[20%] group-hover:w-[28%] h-full text-white group-hover:bg-white/10 dark:group-hover:bg-black/20 backdrop-blur-none group-hover:backdrop-blur-2xl rounded-3xl transition-all duration-300">

              <button className="font-mono text-base tracking-tight p-2 h-6 rounded-full flex items-center justify-center border border-white mb-2 transition group-hover:bg-white group-hover:text-black group-hover:scale-90">
                03
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 3 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg> */}
              </button>

              <h1 className="text-4.5xl group-hover:text-6xl font-medium tracking-tighter leading-tighter mb-1 transition-all duration-300 -ml-1 opacity-100 group-hover:opacity-100 w-1/3">
                Samsung Lifestyle Displays
              </h1>

              <h1 className="text-base font-medium tracking-tight mt-5 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Motion Design for Samsung
              </h1>

              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[280px]">
                Content Creation for Samsung's Lifestyle Display's global social platforms.
              </p>

              <div className="col-span-3">
                  {/* <div className="absolute bottom-10 -ml-1 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Role:</div> */}
                  <div className="absolute bottom-5 -ml-1 gap-3 tracking-tight hidden 2xl:flex
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-semibold mr-2">Role:</p>
                      <p>Motion Design</p>
                      <p>Video Editing</p>
                  </div>
              </div>

            </div>

            {/* Video */}
            <video src="/samsung/montage.mp4"
              className="rounded-3xl w-full col-span-full h-[760px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/poster/cabinbest1.jpeg"/>
          </div>

          {/* 3D */}
          <div 
          ref={(el) => (itemsRef.current[2] = el)}
          className="min-w-[90%] snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-300 rounded-3xl transition cursor-pointer relative hover:scale-98">
            
            {/* Side Action Button */}
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
            <div className="absolute z-40 p-10 pt-8 w-[20%] group-hover:w-[30%] h-full text-white group-hover:bg-white/10 dark:group-hover:bg-black/20 backdrop-blur-none group-hover:backdrop-blur-2xl rounded-3xl transition-all duration-300">

              <button className="font-mono text-base tracking-tight p-2 h-6 rounded-full flex items-center justify-center border border-white mb-2 transition group-hover:bg-white group-hover:text-black group-hover:scale-90">
                04
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 3 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg> */}
              </button>

              <h1 className="text-4.5xl group-hover:text-6xl font-medium tracking-tighter leading-tighter mb-1 transition-all duration-300 -ml-1 opacity-100 group-hover:opacity-100 w-full">
                3D Motion Explorations
              </h1>

              <h1 className="text-base font-medium tracking-tight mt-5 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Personal Explorations
              </h1>

              <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[280px]">
              Various explorations as part of my journey of getting acquainted with Blender and 3D Motion Design.
              </p>

              <div className="col-span-3">
                  {/* <div className="absolute bottom-10 -ml-1 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Role:</div> */}
                  <div className="absolute bottom-5 -ml-1 gap-3 tracking-tight hidden 2xl:flex
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-semibold mr-2">Role:</p>
                      <p>3D Motion Design</p>
                  </div>
              </div>

            </div>

            {/* Video */}
            <video src="/3dpersonal/Cover.mp4"
              className="rounded-3xl w-full col-span-full h-[760px] object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/poster/cabinbest1.jpeg"/>
          </div>

        </div>
      </div>
    </motion.div>  

    
    
  );
};

export default MotionDesignPage;