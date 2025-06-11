'use client'

import * as motion from "framer-motion/client"
import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import SideContainer from './SideContainer';
import CarouselVideo from './CarouselVideo';

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.2, duration:0.5, ease:"easeOut"}
    }
}

const BestWorkPage3 = ({className, setHoveredWork, toggleWork}) => {

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
              const newIndex = Math.min(4, activeIndex + 1); 
              setActiveIndex(newIndex);
              scrollToIndex(newIndex);
            }}
            className={`w-9 h-9 pl-[1px] text-sm font-semibold rounded-full transition-all duration-200 backdrop-blur-2xl flex items-center justify-center
              dark:border-1 bg-background drop-shadow-md dark:border-white/20 text-foreground hover:text-white dark:text-white hover:bg-foreground dark:hover:bg-white dark:hover:text-black hover:scale-90 
              ${activeIndex === 4 ? 'opacity-35 drop-shadow-none pointer-events-none' : 'opacity-100'}`}
          >
            <ChevronRightIcon className="w-[23px] h-[23px]" />
          </button>

        </div>  

        {/* Horizontal Carousel Wrapper */}
        <div className="flex overflow-x-auto gap-4 rounded-3xl" ref={containerRef}>

        {/* Navigation Dots */}
        <div className="absolute left-0 right-0 bottom-2 z-20 flex justify-center gap-1 mb-3 scale-90">
            {['Beyond the Cabin','The World of Studio Ghibli','Cocktail Conversations', 'hemsaker', 'SilverKris Lounge'].map((title,index) => (
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
          
          {/* Beyond The Cabin */}
          <div 
              ref={(el) => (itemsRef.current[0] = el)}
              onMouseEnter={() => {
                setHoveredWork("cabin");
                setHoveredIndex(0);
              }}
              onMouseLeave={() => {
                setHoveredWork(null);
                setHoveredIndex(null)
              }}
              onClick={() => {
                toggleWork('cabin')
              }}
              className={`min-w-[90%] snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-200 transition-all cursor-pointer relative ${hoveredIndex === 0 ? 'scale-99' : ''}`}
            >
            
            <SideContainer
              number="01"
              title="Beyond The Cabin"
              subtitle="Brand Campaign for Singapore Airlines"
              description="6 Cities. 6 Cabin Crew. 6 Passions. Journey beyond the cabin with our cabin crew. You see them on board, now follow their travels around the world."
              role="Art Director"
              skills={["Creative Direction", "Motion + Graphic Design"]}
              hoverWidth="420px"
            />

            <CarouselVideo 
              src="/CCS/bestworkmontage.mp4"
              poster="/poster/cabinbest1.jpeg"
            />
          </div>

          {/* Ghibli */}
          <div 
              ref={(el) => (itemsRef.current[1] = el)}
              onMouseEnter={() => {
                setHoveredWork("ghibli");
                setHoveredIndex(1);
              }}
              onMouseLeave={() => {
                setHoveredWork(null);
                setHoveredIndex(null)
              }}
              onClick={() => {
                toggleWork('ghibli')
              }}
              className={`${hoveredIndex === 1 ? 'min-w-[90%]' : 'min-w-[90%]'} snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-200 rounded-3xl transition-all cursor-pointer relative ${hoveredIndex === 1 ? 'scale-99' : ''}`}
            >

            <SideContainer
              number="02"
              title="The World of Studio Ghibli"
              subtitle="Marketing Campaign for ArtScience Museum"
              description="Be spirited away into magical scenes from iconic films through immersive theatrical sets, whimsical art installations and more."
              role="Creative Lead"
              skills={["Creative Direction", "Graphic Design"]}
              onExpand={() => toggleWork('ghibli')}
              hoverWidth="440px"
            />

            <CarouselVideo 
              src="/Ghibli/banner1.mp4"
              poster="/poster/ghibli.jpeg"
            />
          </div>

          {/* Cocktail Conversations */}
          <div 
              ref={(el) => (itemsRef.current[2] = el)}
              onMouseEnter={() => {
                setHoveredWork("cocktail");
                setHoveredIndex(2);
              }}
              onMouseLeave={() => {
                setHoveredWork(null);
                setHoveredIndex(null)
              }}
              onClick={() => {
                toggleWork('cocktail')
              }}
              className={`${hoveredIndex === 2 ? 'min-w-[90%]' : 'min-w-[90%]'} snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-200 rounded-3xl transition-all cursor-pointer relative ${hoveredIndex === 2 ? 'scale-99' : ''}`}
            >
            
            <SideContainer
              number="03"
              title="Cocktail Conversations"
              subtitle="Brand Campaign for Singapore Airlines"
              description="If there was a drink to match every personality, how would your bespoke cocktail look and taste like?"
              role="Art Director"
              skills={["Creative Direction", "Motion + Graphic Design"]}
              onExpand={() => toggleWork('cocktail')}
              hoverWidth="460px"
            />

            <CarouselVideo 
              src="/Cocktail/cover2.mp4"
              poster="/poster/cocktailpage.jpeg"
            />
          </div>

          {/* IKEA */}
          <div 
              ref={(el) => (itemsRef.current[3] = el)}
              onMouseEnter={() => {
                setHoveredWork("hemsaker");
                setHoveredIndex(3);
              }}
              onMouseLeave={() => {
                setHoveredWork(null);
                setHoveredIndex(null)
              }}
              onClick={() => {
                toggleWork('hemsaker');
              }}
              className={`${hoveredIndex === 3 ? 'min-w-[90%]' : 'min-w-[90%]'} snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-200 rounded-3xl transition-all cursor-pointer relative ${hoveredIndex === 3 ? 'scale-99' : ''}`}
            >
            
            <SideContainer
              number="04"
              title="Oops Happens"
              subtitle="Product Campaign for IKEA"
              description="With HEMSÄKER home insurance, everything will be exactly as if it never happened."
              role="Art Director"
              skills={["Creative Direction"]}
              onExpand={() => toggleWork('hemsaker')}
              hoverWidth="370px"
            />

            <CarouselVideo 
              src="/Hemsaker/cover.mp4"
              poster="/poster/cocktailpage.jpeg"
            />
          </div>

          {/* Lounge */}
          <div 
              ref={(el) => (itemsRef.current[4] = el)}
              onMouseEnter={() => {
                setHoveredWork("lounge");
                setHoveredIndex(4);
              }}
              onMouseLeave={() => {
                setHoveredWork(null);
                setHoveredIndex(null)
              }}
              onClick={() => {
                toggleWork('lounge');
              }}
              className={`${hoveredIndex === 4 ? 'min-w-[90%]' : 'min-w-[90%]'} snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-200 rounded-3xl transition-all cursor-pointer relative ${hoveredIndex === 3 ? 'scale-99' : ''}`}
            >
            
            <SideContainer
              number="05"
              title="SilverKris Lounge"
              subtitle="Brand Campaign for Singapore Airlines"
              description="If there was a drink to match every personality, how would your bespoke cocktail look and taste like?"
              role="Art Director"
              skills={["Creative Direction", "Motion + Graphic Design"]}
              onExpand={() => toggleWork('lounge')}
              hoverWidth="420px"
            />

            <CarouselVideo 
              src="/lounge/montage.mp4"
              poster="/poster/cocktailpage.jpeg"
            />
          </div>

        </div>
        
      </div>
    </motion.div>  
 
  );
};

export default BestWorkPage3;