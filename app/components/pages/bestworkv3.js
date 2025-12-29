'use client'

import * as motion from "framer-motion/client"
import { useRef, useState, useEffect } from "react";
import SideContainer from '../ui/SideContainer';
import CarouselVideo from '../ui/CarouselVideo';
import CarouselNavButton from '../ui/CarouselNavButton';

const animateIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1, y: 0,
    transition: { staggerChildren: 0.2, duration: 0.5, ease: "easeOut" }
  }
}

const BestWorkPage3 = ({ className, toggleWork }) => {

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
          maxIndex={4}
        />

        {/* Horizontal Carousel Container*/}
        <div className="flex overflow-x-auto gap-2 md:gap-4 rounded-3xl scrollbar-hide" ref={containerRef}>

          {/* Desktop Navigation Dots */}
          <div className="absolute left-0 right-0 bottom-5 z-20 justify-center gap-1 scale-90 hidden md:flex">
            {['Beyond the Cabin', 'The World of Studio Ghibli', 'Cocktail Conversations', 'hemsaker', 'SilverKris Lounge'].map((title, index) => (
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

          {/* ISV */}
          <div
            ref={(el) => (itemsRef.current[0] = el)}

            onClick={() => {
              toggleWork('isv')
            }}
            className='min-w-[88%] snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-200 transition-all cursor-pointer relative hover:scale-98'
          >

            <SideContainer
              number="01"
              title="In-Flight Safety Video"
              subtitle="Brand Film for Singapore Airlines"
              description="Singapore Airlines' 2025 In-Flight Safety Video that takes passengers on a journey through Singapore’s iconic landmarks and most importantly, diverse communities."
              role="Art Director"
              skills={["Conceptualization", "Art Direction"]}
              hoverWidth="420px"
            />

            <CarouselVideo
              videoId="creative-isv"
              src="/isv/bestworkcover.mp4"
              poster="/poster/isv.png"
              useOptimized={false}
            />
          </div>

          {/* Ghibli */}
          <div
            ref={(el) => (itemsRef.current[1] = el)}

            onClick={() => {
              toggleWork('ghibli')
            }}
            className='min-w-[88%] snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-200 transition-all cursor-pointer relative hover:scale-98'
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
              videoId="creative-ghibli"
              src="/Ghibli/banner1.mp4"
              poster="/poster/ghibli.jpeg"
            />
          </div>

          {/* Beyond The Cabin */}
          <div
            ref={(el) => (itemsRef.current[2] = el)}

            onClick={() => {
              toggleWork('cabin')
            }}
            className='min-w-[88%] snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-200 transition-all cursor-pointer relative hover:scale-98'
          >

            <SideContainer
              number="03"
              title="Beyond The Cabin"
              subtitle="Brand Campaign for Singapore Airlines"
              description="6 Cities. 6 Cabin Crew. 6 Passions. Journey beyond the cabin with our cabin crew. You see them on board, now follow their travels around the world."
              role="Art Director"
              skills={["Creative Direction", "Motion + Graphic Design"]}
              hoverWidth="420px"
            />

            <CarouselVideo
              videoId="creative-cabin"
              src="/CCS/bestworkmontage.mp4"
              poster="/poster/cabin.jpeg"
            />
          </div>

          {/* Cocktail Conversations */}
          <div
            ref={(el) => (itemsRef.current[3] = el)}

            onClick={() => {
              toggleWork('cocktail')
            }}
            className='min-w-[88%] snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-200 transition-all cursor-pointer relative hover:scale-98'
          >

            <SideContainer
              number="04"
              title="Cocktail Conversations"
              subtitle="Brand Campaign for Singapore Airlines"
              description="If there was a drink to match every personality, how would your bespoke cocktail look and taste like?"
              role="Art Director"
              skills={["Creative Direction", "Motion + Graphic Design"]}
              onExpand={() => toggleWork('cocktail')}
              hoverWidth="460px"
            />

            <CarouselVideo
              videoId="creative-cocktail"
              src="/Cocktail/cover2.mp4"
              poster="/poster/cocktail.jpg"
            />
          </div>

          {/* IKEA */}
          <div
            ref={(el) => (itemsRef.current[4] = el)}

            onClick={() => {
              toggleWork('hemsaker');
            }}
            className='min-w-[88%] snap-start col-span-full grid grid-cols-1 xl:grid-cols-9 group duration-200 transition-all cursor-pointer relative hover:scale-98'
          >

            <SideContainer
              number="05"
              title="Oops Happens"
              subtitle="Product Campaign for IKEA"
              description="With HEMSÄKER home insurance, everything will be exactly as if it never happened."
              role="Art Director"
              skills={["Creative Direction"]}
              onExpand={() => toggleWork('hemsaker')}
              hoverWidth="370px"
            />

            <CarouselVideo
              videoId="creative-hemsaker"
              src="/Hemsaker/cover.mp4"
              poster="/poster/hemsaker.jpg"
            />
          </div>

        </div>

        {/* Mobile Navigation Dots */}
        <div className="z-20 mt-4 justify-center gap-1 scale-90 flex md:hidden">
          {['Beyond the Cabin', 'The World of Studio Ghibli', 'Cocktail Conversations', 'hemsaker', 'SilverKris Lounge'].map((title, index) => (
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

export default BestWorkPage3;