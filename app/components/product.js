'use client'

import * as motion from "framer-motion/client"
import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import SideContainer from "./SideContainer";
import CarouselVideo from "./CarouselVideo";
import CarouselNavButton from "./CarouselNavButton";

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
        <CarouselNavButton 
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          scrollToIndex={scrollToIndex}
          maxIndex={2}
        />

        {/* Horizontal Carousel Wrapper */}
        <div className="flex overflow-x-auto gap-2 md:gap-4 rounded-3xl scrollbar-hide" ref={containerRef}>

        {/* Navigation Dots */}
        <div className="hidden md:flex absolute left-0 right-0 bottom-2 z-20 justify-center gap-1 mb-3 scale-90">
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
              hideTitle={false}
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
            
          {/* Car */}
          <div 
          ref={(el) => (itemsRef.current[2] = el)}
          
          className="min-w-[90%] snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-300 rounded-3xl transition cursor-pointer relative hover:scale-98"
          >

            <SideContainer
              number="03"
              title="Human (Car)mputer Interaction"
              subtitle="Research Writing + Product Design"
              description="A deep dive into the Human Computer Interaction of the automobile."
              skills={["Research Writing", "Product Design"]}
              hoverWidth="450px"
            />
              

            <CarouselVideo 
              src="/currently/car.mp4"
              poster="/poster/ghibli.jpeg"
            />
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="z-20 mt-4 justify-center gap-1 scale-90 flex md:hidden">
          {['Beyond the Cabin','The World of Studio Ghibli','Cocktail Conversations', 'hemsaker'].map((title, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`
                text-[7pt] font-semibold rounded-full transition-all duration-300 
                flex items-center justify-center w-3.5 h-3.5 backdrop-blur-xl mix-blend-overlay
                ${activeIndex === index
                  ? "bg-white/75 scale-75 -mx-1 px-6 backdrop-blur-xl border-b-2 border-r-[1px] border-white drop-shadow-lg"
                  : "bg-white/35 text-white hover:bg-white/80 hover:scale-100 scale-[60%] drop-shadow-lg"
                }
              `}
            >
              {activeIndex === index ? '' : ''}
            </button>
          ))}
        </div>

      
      </div>
    </motion.div>  

    
    
  );
};

export default ProductPage;