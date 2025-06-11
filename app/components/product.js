'use client'

import * as motion from "framer-motion/client"
import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import SideContainer from "./SideContainer";
import CarouselVideo from "./CarouselVideo";

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.2, duration:0.5, ease:"easeOut"}
    }
}

const ProductPage = ({className, setHoveredWork, toggleWork}) => {

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
        <div className="z-50 flex gap-3 justify-end mb-10 pt-1">

          <button
            onClick={() => {
              const newIndex = Math.max(0, activeIndex - 1); 
              setActiveIndex(newIndex);
              scrollToIndex(newIndex);
            }}
            className={`w-9 h-9 pr-[1.5px] text-sm font-semibold rounded-full transition-all duration-200 backdrop-blur-2xl flex items-center justify-center
              dark:border-1 bg-background drop-shadow-md dark:border-white/20 text-foreground hover:text-white dark:text-white hover:bg-foreground dark:hover:bg-white dark:hover:text-black hover:scale-90 
              ${activeIndex === 0 ? 'opacity-35 drop-shadow-none pointer-events-none' : 'opacity-100'}`}
          >
            <ChevronLeftIcon className="w-[23px] h-[23px]" />
          </button>

          <button
            onClick={() => {
              const newIndex = Math.min(2, activeIndex + 1); 
              setActiveIndex(newIndex);
              scrollToIndex(newIndex);
            }}
            className={`w-9 h-9 pl-[1px] text-sm font-semibold rounded-full transition-all duration-200 backdrop-blur-2xl flex items-center justify-center
              dark:border-1 bg-background drop-shadow-md dark:border-white/20 text-foreground hover:text-white dark:text-white hover:bg-foreground dark:hover:bg-white dark:hover:text-black hover:scale-90 
              ${activeIndex === 2 ? 'opacity-35 drop-shadow-none pointer-events-none' : 'opacity-100'}`}
          >
            <ChevronRightIcon className="w-[23px] h-[23px]" />
          </button>

        </div>  

        {/* Horizontal Carousel Wrapper */}
        <div className="flex overflow-x-auto gap-4 rounded-3xl" ref={containerRef}>

        {/* Navigation Dots */}
        <div className="absolute left-0 right-0 bottom-2 z-20 flex justify-center gap-1 mb-3 scale-90">
            {['','',''].map((title,index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`text-[7pt] font-semibold rounded-full transition-all duration-300 flex items-center justify-center w-3.5 h-3.5 backdrop-blur-xl mix-blend-overlay ${
                  activeIndex === index
                    ? "bg-white/75 scale-75 -mx-1 px-6 backdrop-blur-xl border-b-2 border-r-[1px] border-white drop-shadow-lg"
                    : "bg-white/35 text-white hover:bg-white/80 hover:scale-100 scale-[60%] drop-shadow-lg"
                }`}
              >
                {activeIndex === index ? '' : ''}
              </button>
            ))}
          </div>

          {/* Apple Maps */}
          <div 
          ref={(el) => (itemsRef.current[0] = el)}
          onMouseEnter={() => {
            setHoveredWork("subway");
          }}
          onMouseLeave={() => {
            setHoveredWork(null);
          }}
          onClick={() => {
            toggleWork('subway')
          }}
          className="min-w-[90%] snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-300 rounded-3xl transition cursor-pointer relative hover:scale-98"
          >
            
            <SideContainer
              number="01"
              title="Enhanced Subway Navigation with Apple Maps"
              subtitle="UX Research + UI Design"
              description="Precise turn-by-turn navigation within the New York City subway with Apple Maps, powered by Ultra-Wideband technology."
              skills={["UX Research", "UI Design"]}
              hoverWidth="420px"
              hideTitle={true}
            />

            <CarouselVideo 
              src="/subway/cover.mp4"
              poster="/poster/subway.png"
            />
          </div>

          {/* Website */}
          <div 
          ref={(el) => (itemsRef.current[1] = el)}
          onMouseEnter={() => {
            setHoveredWork("website");
          }}
          onMouseLeave={() => {
            setHoveredWork(null);
          }}
          onClick={() => {
            toggleWork('website')
          }}
          className="min-w-[90%] snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-300 rounded-3xl transition cursor-pointer relative hover:scale-98"
          >
            <SideContainer
              number="02"
              title="Literally this website."
              subtitle="UI Design + Front-end Development"
              description="The process of masochistically designing and coding this site from ground up with React and Next.js by yours truly."
              skills={["UI Design", "Web Development"]}
              hoverWidth="420px"
            />

            <CarouselVideo 
              src="/website/cover.mp4"
              poster="/poster/cabinbest1.jpeg"
            />
          </div>
            
          {/* Research */}
          <div 
          ref={(el) => (itemsRef.current[2] = el)}
          
          className="min-w-[90%] snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-300 rounded-3xl transition cursor-pointer relative hover:scale-98"
          >

            <SideContainer
              number="03"
              title="A study into Time Management techniques of College Students"
              subtitle="User Research Methodologies"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              skills={["Ethnographic User Research", "Motion Design"]}
              hoverWidth="450px"
            />
              

            <CarouselVideo 
              src="/wellnessco/cover.mp4"
              poster="/poster/ghibli.jpeg"
            />
          </div>

          

      

      

        </div>

      
      </div>
    </motion.div>  

    
    
  );
};

export default ProductPage;