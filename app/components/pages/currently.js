'use client'

import * as motion from "framer-motion/client"
import CornerArrow from '../ui/CornerArrow.js';
import OptimizedVideo from '../ui/OptimizedVideo.js';

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.2, duration:0.5, ease:"easeOut"}
    }
}

const Currently = ({className, toggleWork, useOptimizedVideos = true}) => {
  return (
    <motion.div
    className={`font-[family-name:var(--font-geist-sans)] relative w-full grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

      {/* 01 */}
      <motion.div className="col-span-full md:col-span-4 mt-16 group cursor-pointer h-full relative group md:mb-4">
        {/* Video Container with Corner Arrow */}
        <motion.div 
          className="relative col-span-full cursor-pointer"
          whileHover={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 1000, 
            damping: 15, 
          }}
          
          onClick={() => {
            toggleWork('bloom');
          }}
          >
            

          {/* Corner Arrow */}
          <CornerArrow />

          {/* Video */}
          <motion.div className="rounded-3xl w-full col-span-full h-[250px] lg:h-[420px] 2xl:h-[580px] relative overflow-hidden border-b-1 border-white/15">
              <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] pointer-events-none mix-blend-overlay z-10"/>
              <video 
                videoId="currently-subway"
                src="/bloom/cover.mp4"
                className="rounded-[16pt] md:rounded-3xl w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/poster/subwaylandscape.jpg"
              />
          </motion.div>

        </motion.div>

        {/* Header and Description Container */}
        <div className="grid grid-cols-4 mb-8 mt-4 md:mt-6">

          <div className='ml-1 text-foreground col-span-full md:col-span-1'>
            <h1 className="tracking-[-0.5pt] md:tracking-[-0.8pt] font-medium text-lg md:text-[18pt] md:group-hover:ml-3 transition-all duration-200 md:w-4/5 leading-tight md:leading-6">
              Bloom
            </h1>

            <h3 className={`mt-3 md:mt-3 opacity-80 group-hover:opacity-100 transition-all md:group-hover:ml-3 duration-300 tracking-normal text-xs leading-tight md:text-[11pt] w-[90%]`}>
                UX/UI design. <br/>Stanford Longevity Design Challenge – First Place.
            </h3>
          </div>

          {/* Description Container */}
          <div className='ml-1 text-foreground col-span-full md:col-span-2 grid grid-cols-3 md:grid-cols-1'>
            
            <h3 className={`opacity-60 mt-3 md:mt-0 col-span-2 md:col-span-2 md:group-hover:opacity-100 transition-all duration-300 tracking-normal md:pr-10 text-xs md:text-sm md:leading-tight`}>
             The first digital tool that helps young Korean adults discover meaningful career paths by exploring their strengths and interests in a playful and social way.
            </h3>
          </div>
        </div>
      </motion.div>

      {/* 02 */}
      <motion.div className="col-span-full md:col-span-2 mt-16 group cursor-pointer h-full relative group md:mb-4">
        {/* Video Container with Corner Arrow */}
        <motion.div 
          className="relative col-span-full cursor-pointer"
          whileHover={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 1000, 
            damping: 15, 
          }}
          
          onClick={() => {
            toggleWork('subway');
          }}
          >
            

          {/* Corner Arrow */}
          <CornerArrow />

          {/* Video */}
          <motion.div className="rounded-3xl w-full col-span-full h-[250px] lg:h-[420px] 2xl:h-[580px] relative overflow-hidden border-b-1 border-white/15">
              <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] 
              pointer-events-none mix-blend-overlay z-10"/>
              <video 
                videoId="currently-subway"
                src="/subway/cover_blank.mp4"
                className="rounded-[16pt] md:rounded-3xl w-full h-full object-cover contrast-125 brightness-90"
                autoPlay
                muted
                loop
                playsInline
                poster="/poster/subwaylandscape.jpg"
              />
              <img 
                src="/subway/lockup.png"
                alt="Subway lockup"
                className="absolute top-1/2 left-[51.5%] transform -translate-x-1/2 -translate-y-1/2 z-20 max-w-[90%] h-auto object-contain"
              />
          </motion.div>

        </motion.div>

        {/* Header and Description Container */}
        <div className="grid grid-cols-3 mb-8 mt-4 md:mt-6">

          <div className='ml-1 text-foreground col-span-full md:col-span-1'>
            <h1 className="tracking-[-0.5pt] md:tracking-[-0.8pt] font-medium text-lg md:text-[15pt] md:group-hover:ml-3 transition-all duration-200 md:w-4/5 leading-tight md:leading-6">
              Enhanced Subway Navigation with Apple Maps
            </h1>
          </div>

          {/* Description Container */}
          <div className='ml-1 text-foreground col-span-full md:col-span-2 grid grid-cols-3 md:grid-cols-1'>
            

            <h3 className={`mt-3 md:mt-0 opacity-80 group-hover:opacity-100 transition-all duration-300 tracking-normal text-xs md:text-base w-[90%] md:w-full`}>
              UX/UI design, potential thesis topic.
            </h3>
            
            <h3 className={`opacity-60 mt-3 md:mt-3 col-span-2 md:col-span-2 md:group-hover:opacity-100 transition-all duration-300 tracking-normal md:pr-10 text-xs md:text-sm md:leading-tight`}>
              An ongoing research and design project based around enhancing the navigation experience within the New York City Subway system by providing precise turn-by-turn navigation within Apple Maps, powered by Ultra-Wideband (UWB) technology.
            </h3>
          </div>
        </div>
      </motion.div>

      {/* 03 */}
      <motion.div className="col-span-full md:col-span-2 cursor-pointer transition-all duration-200 h-full group mb-8 md:mb-0"
      >
        {/* Video Container with Corner Arrow */}
        <motion.div 
          className="relative col-span-full cursor-pointer"
          whileHover={{ scale: 0.97 }}
          transition={{
            type: "spring",
            stiffness: 1200, 
            damping: 22, 
          }}
          onClick={() => {
            window.open('https://ithinkitschris.notion.site/local-expense-tracker', '_blank');
          }}>
            

          {/* Corner Arrow */}
          <CornerArrow />

          {/* Video */}
          <motion.div className="rounded-[16pt] md:rounded-3xl w-full col-span-full h-[250px] lg:h-[420px] 2xl:h-[450px] relative overflow-hidden border-b-1 border-white/15">
              <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] 
              pointer-events-none mix-blend-overlay z-10"/>
              <OptimizedVideo 
                videoId="currently-expense"
                src="/expense/cover.mp4"
                className="rounded-[16pt] md:rounded-3xl w-full h-full object-cover object-[0%_10%]"
                autoPlay
                muted
                loop
                playsInline
                poster="/poster/expense.png"
                useOptimized={useOptimizedVideos}
              />
          </motion.div>

        </motion.div>
        
        {/* Header Container */}
        <div className='ml-1 mt-4 md:mt-8 text-foreground col-span-full md:col-span-1'>
          
          <h1 className={`tracking-tight font-medium text-lg md:text-[15pt] md:group-hover:ml-3 transition-all duration-200 leading-tight md:leading-7`}>
            On-device LLM Expense Tracker (iOS)
          </h1>

          <h3 className={`mt-4 opacity-60 md:group-hover:opacity-100 md:group-hover:ml-3 transition-all duration-300 tracking-normal md:pr-10 text-xs md:text-sm md:leading-tight`}>
            A personal project into developing and designing an on-device LLM-powered personal expense tracker for iOS using React Native, FastAPI, Ollama and Gemma3n:e2b.
          </h3>

        </div>
        
      </motion.div>

      {/* 04 */}
      <motion.div className="col-span-1 md:col-span-2 cursor-pointer transition-all duration-200 h-full group"
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
          onClick={() => {
            toggleWork('car')
          }}>
            

          {/* Corner Arrow */}
          <CornerArrow />

          {/* Video */}
          <motion.div className="rounded-[16pt] md:rounded-3xl w-full col-span-full h-[250px] lg:h-[420px] 2xl:h-[450px] relative overflow-hidden border-b-1 border-white/15">
              <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] 
              pointer-events-none mix-blend-overlay z-10"/>
              <OptimizedVideo 
                videoId="currently-car"
                src="/currently/car.mp4"
                className="rounded-[16pt] md:rounded-3xl w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/poster/car.png"
                useOptimized={useOptimizedVideos}
              />
          </motion.div>

        </motion.div>
        
      
        {/* Header Container */}
        <div className='ml-1 mt-4 md:mt-8 text-foreground col-span-full md:col-span-1'>
          
          <h1 className={`tracking-tight font-medium text-lg md:text-[15pt] md:group-hover:ml-3 transition-all duration-200 leading-tight md:leading-7`}>
            Human Car(mputer) Interaction
          </h1>

          <h3 className={`mt-4 opacity-60 md:group-hover:opacity-100 md:group-hover:ml-3 transition-all duration-300 tracking-normal md:pr-10 text-xs md:text-sm md:leading-tight md:w-4/5`}>
            A deep dive into the Human Computer Interaction of the automobile through the lens of design history.
          </h3>

        </div>
        
      </motion.div>

      {/* 05 */}
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

          // onClick={() => {
          //   toggleWork('website')
          // }}
          >

          {/* Corner Arrow */}
          <CornerArrow />

          {/* Video */}
          <motion.div className="rounded-[16pt] md:rounded-3xl w-full col-span-full h-[250px] lg:h-[420px] 2xl:h-[450px] relative overflow-hidden border-b-1 border-white/15">
              <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] 
              pointer-events-none mix-blend-overlay z-10"/>
              <OptimizedVideo 
                videoId="currently-website"
                src="/website/coverproper.mp4"
                className="rounded-[16pt] md:rounded-3xl w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/poster/website.png"
                useOptimized={useOptimizedVideos}
              />
          </motion.div>

        </motion.a>
      
        {/* Header Container */}
        <div className='ml-1 text-foreground col-span-full mt-0 md:mt-8'>
          <h1 className={`tracking-tight font-medium text-lg transition-all duration-200 md:text-[15pt] md:group-hover:ml-3 md:w-full md:leading-7 mt-4 md:mt-0`}>
            Portfolio Website v2
          </h1>

          <h3 className={`mt-2 opacity-60 md:group-hover:opacity-100 md:group-hover:ml-3 transition-all duration-300 tracking-normal md:w-1/2 text-xs md:text-sm md:leading-tight`}>
            Design and development of this website alongside exploration of the workflows of prototyping and coding with AI.
          </h3>
        </div>

        {/* Description Container DESKTOP ONLY */}
        <div className='mt-8 ml-1 text-foreground col-span-2 hidden'>
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