'use client'

import * as motion from "framer-motion/client"
import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import SideContainer from './SideContainer';

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.2, duration:0.5, ease:"easeOut"}
    }
}

const Currently = ({className, setHoveredWork, toggleWork}) => {

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
    className={`font-[family-name:var(--font-geist-sans)] relative w-full grid grid-cols-3 gap-4 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

      {/* 01 */}
      <div className={`col-span-full group mt-16 transition-all duration-200 h-full grid grid-cols-3 `}>

        {/* Video Container */}
        <div className="rounded-3xl w-full col-span-full h-[550px] relative overflow-hidden border-b-1 border-white/20">
          <div className="absolute inset-0 rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_3px_0px_rgba(255,255,255,0.2)] pointer-events-none z-10"/>
          <video src="/subway/cover4.mp4"
            className="rounded-3xl w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/poster/subway.png"/>
        </div>

        {/* Header Container */}
        <div className='ml-1 -mt-2 text-foreground col-span-1 mb-20'>
          <h1 className={`tracking-tight font-medium text-2xl group-hover:ml-3 transition-all duration-200 w-3/4 leading-7`}>
            Enhanced Subway Navigation with Apple Maps
          </h1>

          <h3 className={`mt-2 opacity-75 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300 w-[85%] tracking-normal text-sm`}>
            An exercise in Product Design and potential thesis topic.
          </h3>
        </div>

        {/* Description Container */}
        <div className='ml-1 -mt-2 text-foreground col-span-2 mb-20'>
          <h3 className={`mt-1 opacity-25 group-hover:opacity-100 transition-all duration-300 tracking-normal pr-10`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h3>
        </div>

      </div>

      {/* 02 */}
      <a className="col-span-1 cursor-pointer group hover:scale-98 transition-all duration-200 h-full relative"
      href="https://www.notion.so/Portfolio-Website-127a92ab668680ed91ddd0619057466f?source=copy_link#20ca92ab6686809a8f8bf9a72e2a90cf"
      target="_blank"
      rel="noopener noreferrer"
      >
        {/* Corner Arrow */}
        <button className="absolute top-2 right-2 z-20 p-1.5 m-1 scale-125
          rounded-full border-1.5 text-white border-transparent 
          group-hover:border-white group-hover:scale-[150%] group-hover:m-4 group-hover:p-0.5 group-hover:px-1
          transition-all duration-200">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="2 2 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4">
              <path d="M7 17L17 7"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <path d="M7 7h10v10" />
              </svg>
          </button>

        {/* Video */}
        <div className="rounded-3xl w-full col-span-full h-[500px] relative overflow-hidden border-b-1 border-white/15">
          <div className="absolute inset-0 rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_3px_0px_rgba(255,255,255,0.2)] pointer-events-none z-10"/>
            <img src="/currently/carplay.jpg"
            className="rounded-3xl w-full col-span-full h-[500px] object-cover shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_3px_0px_rgba(255,255,255,0.2)]"
            alt="Human Car(mputer) Interaction"
            />
        </div>
        
      
        {/* Header Container */}
        <div className='ml-1 mt-8 text-foreground col-span-1'>
          <h1 className={`tracking-tight font-medium text-2xl group-hover:ml-3 transition-all duration-200 w-3/4 leading-7`}>
            Human Car(mputer) Interaction
          </h1>
        </div>

        {/* Description Container */}
        <div className='ml-1 mt-2 text-foreground col-span-2'>
          <h3 className={`opacity-25 group-hover:ml-3 group-hover:opacity-100 transition-all duration-300 tracking-normal pr-10`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </h3>
        </div>
      </a>

      {/* 03 */}
      <a className="col-span-2 cursor-pointer group hover:scale-98 transition-all duration-200 h-full grid grid-cols-3 relative"
      href="https://www.notion.so/Portfolio-Website-127a92ab668680ed91ddd0619057466f?source=copy_link#20ca92ab6686809a8f8bf9a72e2a90cf"
      target="_blank"
      rel="noopener noreferrer"
      >
        
        {/* Corner Arrow */}
        <button className="absolute top-2 right-2 z-20 p-1.5 m-1 scale-125
        rounded-full border-1.5 text-white border-transparent 
        group-hover:border-white group-hover:scale-[150%] group-hover:m-4 group-hover:p-0.5 group-hover:px-1
        transition-all duration-200">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="2 2 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4">
            <path d="M7 17L17 7"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <path d="M7 7h10v10" />
            </svg>
        </button>
        
        {/* Video */}
        <div className="rounded-3xl w-full col-span-full h-[500px] relative overflow-hidden border-b-1 border-white/15">
          <div className="absolute inset-0 rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_3px_0px_rgba(255,255,255,0.2)] pointer-events-none z-10"/>
          <video src="/website/cover.mp4"
            className="rounded-3xl w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/poster/subway.png"/>
        </div>
      
        {/* Header Container */}
        <div className='ml-1 text-foreground col-span-1'>
          <h1 className={`tracking-tight font-medium text-2xl group-hover:ml-3 transition-all duration-200 w-3/4 leading-7`}>
            Portfolio Website v2
          </h1>
 
          <h3 className={`mt-2 opacity-60 group-hover:opacity-100 group-hover:ml-3 transition-all duration-300 tracking-normal w-[85%] text-sm leading-tight`}>
            Design and development of this website and exploration of the capabilities of AI and code.
          </h3>
        </div>

        {/* Description Container */}
        <div className='ml-1 text-foreground col-span-2'>
          <h3 className={`mt-1 opacity-25 group-hover:opacity-100 transition-all duration-300 tracking-normal pr-10`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </h3>
        </div>
      </a>
      
    </motion.div>  
 
  );
};

export default Currently;