'use client'

import * as motion from "framer-motion/client"
import CornerArrow from './CornerArrow.js';

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.2, duration:0.5, ease:"easeOut"}
    }
}

const Currently = ({className, setHoveredWork, toggleWork}) => {
  return (
    <motion.div
    className={`font-[family-name:var(--font-geist-sans)] relative w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

      {/* 01 */}
      <motion.div className="col-span-full group cursor-pointer mt-16 h-full relative group"
      >
        {/* Video Container with Corner Arrow */}
        <motion.div 
          className="relative col-span-full"
          whileHover={{ scale: 0.995 }}
          transition={{
            type: "spring",
            stiffness: 1000, 
            damping: 15, 
          }}
          onMouseEnter={() => {
            setHoveredWork("subway");
          }}
          onMouseLeave={() => {
            setHoveredWork(null);
          }}
          onClick={() => {
            toggleWork('subway')
          }}>
            

          {/* Corner Arrow */}
          <CornerArrow />

          {/* Video */}
          <motion.div className="rounded-3xl w-full col-span-full h-[350px] md:h-[500px] relative overflow-hidden border-b-1 border-white/15">
              <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] 
              pointer-events-none mix-blend-overlay z-10"/>
              <video src="/subway/cover2.mp4"
                className="rounded-[16pt] md:rounded-3xl w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/poster/subway.png"/>
          </motion.div>

        </motion.div>

        {/* Header and Description Container */}
        <div className="grid grid-cols-3 mb-8 mt-4 md:mt-6">

          <div className='ml-1 text-foreground col-span-full md:col-span-1'>
            <h1 className="tracking-[-0.5pt] md:tracking-[-0.8pt] font-medium text-lg md:text-2xl md:group-hover:ml-3 transition-all duration-200 md:w-3/4 leading-tight md:leading-7">
              Enhanced Subway Navigation with Apple Maps
            </h1>
  
            {/* Desktop */}
            <h3 className={`hidden md:block mt-2 opacity-60 md:group-hover:opacity-100 md:group-hover:ml-3 transition-all duration-300 tracking-normal md:w-[85%] text-xs md:text-sm leading-tight `}>
              An exercise in user research and design and potential thesis topic.
            </h3>
          </div>

          {/* Description Container */}
          <div className='ml-1 text-foreground col-span-full md:col-span-2 grid grid-cols-3'>
            
            {/* Mobile */}
            <h3 className={`md:hidden mt-3 opacity-60 transition-all duration-300 tracking-normal text-xs `}>
              An exercise in user research and design and potential thesis topic.
            </h3>
            
            <h3 className={`opacity-40 mt-3 md:mt-0 col-span-2 md:col-span-2 md:group-hover:opacity-100 transition-all duration-300 tracking-normal md:pr-10 text-xs md:text-sm md:leading-tight`}>
              An ongoing research project into providing precise turn-by-turn navigation within the New York City subway system, powered by Ultra-Wideband (UWB) technology.
            </h3>
          </div>
        </div>
      </motion.div>

      {/* 02 */}
      <motion.div className="col-span-1 md:col-span-1 cursor-pointer transition-all duration-200 h-full group"
      >
        {/* Video Container with Corner Arrow */}
        <motion.div 
          className="relative"
          whileHover={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 1200, 
            damping: 22, 
          }}
          onMouseEnter={() => {
            setHoveredWork("car");
          }}
          onMouseLeave={() => {
            setHoveredWork(null);
          }}
          onClick={() => {
            toggleWork('car')
          }}>
            

          {/* Corner Arrow */}
          <CornerArrow />

          {/* Video */}
          <motion.div className="rounded-[16pt] md:rounded-3xl w-full col-span-full h-[150px] md:h-[500px] relative overflow-hidden border-b-1 border-white/15">
              <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] 
              pointer-events-none mix-blend-overlay z-10"/>
              <video src="/currently/car.mp4"
                className="rounded-[16pt] md:rounded-3xl w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/poster/car.png"/>
          </motion.div>

        </motion.div>
        
      
        {/* Header Container */}
        <div className='ml-1 mt-4 md:mt-8 text-foreground col-span-full md:col-span-1'>
          
          <h1 className={`tracking-tight font-medium text-lg md:text-2xl md:group-hover:ml-3 transition-all duration-200 md:w-3/4 leading-tight md:leading-7`}>
            Human Car(mputer) Interaction
          </h1>

          <h3 className={`mt-4 opacity-60 md:opacity-40 md:group-hover:opacity-100 transition-all duration-300 tracking-normal md:pr-10 text-xs md:text-sm md:leading-tight`}>
            A deep dive into the Human Computer Interaction of the automobile through the lens of design history.
          </h3>

        </div>
        
      </motion.div>

      {/* 03 */}
      <div className="col-span-1 md:col-span-2 cursor-pointer group transition-all duration-200 h-[150px] md:h-full grid grid-cols-1 md:grid-cols-3"
      >
        
        {/* Video Container with Corner Arrow */}
        <motion.a href="https://www.notion.so/Portfolio-Website-127a92ab668680ed91ddd0619057466f#20ca92ab6686809a8f8bf9a72e2a90cf" target="_blank"
          className="relative col-span-full"
          whileHover={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 1200, 
            damping: 22, 
          }}
          onMouseEnter={() => {
            setHoveredWork("website");
          }}
          onMouseLeave={() => {
            setHoveredWork(null);
          }}
          // onClick={() => {
          //   toggleWork('website')
          // }}
          >

          {/* Corner Arrow */}
          <CornerArrow />

          {/* Video */}
          <motion.div className="rounded-[16pt] md:rounded-3xl w-full col-span-full h-[150px] md:h-[500px] relative overflow-hidden border-b-1 border-white/15">
              <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] 
              pointer-events-none mix-blend-overlay z-10"/>
              <video src="/website/cover.mp4"
                className="rounded-[16pt] md:rounded-3xl w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/poster/website.png"/>
          </motion.div>

        </motion.a>
      
        {/* Header Container */}
        <div className='ml-1 text-foreground md:col-span-1 mt-4 md:mt-8'>
          <h1 className={`tracking-tight font-medium text-lg transition-all duration-200 md:text-2xl md:group-hover:ml-3 md:w-full md:leading-7`}>
            Portfolio Website v2
          </h1>

          <h3 className={`mt-2 opacity-60 md:group-hover:opacity-100 md:group-hover:ml-3 transition-all duration-300 tracking-normal md:w-[85%] text-xs md:text-sm md:leading-tight`}>
            Design and development of this website alongside exploration of the workflows of prototyping and coding with AI.
          </h3>
        </div>

        {/* Description Container DESKTOP ONLY */}
        <div className='mt-8 ml-1 text-foreground col-span-2 hidden md:block'>
          <h3 className={`mt-1 opacity-25 group-hover:opacity-100 transition-all duration-300 tracking-normal md:pr-10 text-xs md:text-sm leading-tight`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </h3>
        </div>
      </div>
      
    </motion.div>  

  );
};

export default Currently;