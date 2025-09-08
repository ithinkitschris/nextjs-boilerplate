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
    className={`font-[family-name:var(--font-geist-sans)] relative w-full mt-4 md:mt-8 grid grid-cols-2 md:grid-cols-8 gap-2 md:gap-4 ${className}`}
    initial="hidden"
    animate="show"
    variants={animateIn}>

      {/* Subway */}
      <motion.div className="col-span-full md:col-span-5 group cursor-pointer h-full relative group mb-4">

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
          <motion.div className="rounded-3xl w-full col-span-full h-[250px] lg:h-[420px] 2xl:h-[520px] relative overflow-hidden border-b-1 border-white/15">
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

              {/* Lockup */}
              <img 
                src="/subway/lockup.png"
                alt="Subway lockup"
                className="absolute top-1/2 left-[52.5%] transform -translate-x-1/2 -translate-y-1/2 z-20 max-w-[60%] h-auto object-contain"
              />
          </motion.div>

        </motion.div>

        {/* Header and Description Container */}
        <div className="grid grid-cols-3 mb-8 mt-6 md:mt-8">

          {/* Header Container */}
          <div className='ml-1 text-foreground col-span-1'>
            <h1 className="tracking-[-0.5pt] md:tracking-[-0.8pt] font-medium text-lg md:text-[15pt] md:group-hover:ml-3 transition-all duration-200 leading-tight md:leading-6 w-[90%]">
              Enhanced Subway Navigation with Apple Maps
            </h1>
          </div>

          {/* Description Container */}
          <div className='ml-1 text-foreground col-span-2 '>
            
            <h3 className={`opacity-60 md:group-hover:opacity-100 transition-all duration-300 tracking-normal md:pr-10 text-xs md:text-sm md:leading-tight`}>
              An ongoing research and design project based around enhancing the navigation experience within the New York City Subway system by providing precise turn-by-turn navigation within Apple Maps, powered by Ultra-Wideband (UWB) technology.
            </h3>
          </div>
        </div>

      </motion.div>

      {/* Bloom */}
      <motion.div className="col-span-1 md:col-span-3 group cursor-pointer h-full relative group mb-4">

        {/* Video Container with Corner Arrow */}
        <motion.div 
          className="relative col-span-full cursor-pointer"
          whileHover={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 1000, 
            damping: 15, 
          }}
          onClick={() => window.open('https://www.figma.com/deck/zX29aRXmKQE1orzfgvwDqN', '_blank')}
          >
            
          {/* Corner Arrow */}
          <CornerArrow />

          {/* Video */}
          <motion.div className="rounded-[16pt] md:rounded-3xl w-full col-span-full h-[250px] lg:h-[420px] 2xl:h-[520px] relative overflow-hidden border-b-1 border-white/15">
              <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_5px_0px_rgba(255,255,255,1)] pointer-events-none mix-blend-overlay z-10"/>

              {/* WIP Overlay */}
              {/* <div className="absolute inset-0 flex flex-col items-center justify-center w-[80%] mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300 z-40">
                <h1 className="z-20 text-white text-xl md:text-3xl tracking-tight leading-[1] w-[80%] font-medium text-center">Project page is currently work in progress.</h1>
                <p className="z-20 text-white text-xxs md:text-sm leading-[1.2] w-[90%] font-medium text-center mt-4">Check back soon! <br/>Click to be directed to the project deck.</p>
              </div> */}

              {/* Video */}
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
        <div className="grid grid-cols-3 mb-8 mt-4 md:mt-8">

          {/* Header Container */}
          <div className="col-span-full md:col-span-1">

            <h1 className="tracking-[-0.5pt] md:tracking-[-0.8pt] font-medium text-lg md:text-[16pt] md:group-hover:ml-3 transition-all duration-200 md:w-4/5 leading-tight md:leading-6 col-span-full ">
              Bloom
            </h1>

            <h3 className={`opacity-80 group-hover:opacity-100 transition-all md:group-hover:ml-3 duration-300 mt-2 tracking-normal text-xs leading-tight md:text-[10pt] w-[90%] col-span-full `}>
              Stanford Longevity Design Challenge – First Place
            </h3>
          </div>

          {/* Description Container */}
          <h3 className={`opacity-60 md:group-hover:opacity-100 transition-all duration-300 tracking-normal md:pr-10 text-xs md:text-sm md:leading-tight col-span-full md:col-span-2 mt-3 md:mt-0`}>
            The first digital tool that helps young Korean adults discover meaningful career paths by exploring their strengths and interests in a playful and social way.
          </h3>
        
        </div>
      </motion.div>

      {/* ISV */}
      <motion.div className="col-span-1 md:col-span-4 h-full relative md:mb-4 group">

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
            toggleWork('isv');
          }}
          >
            
          {/* Corner Arrow */}
          <CornerArrow />

          {/* Lockup */}
          <img src="/isv/logo.png" className="absolute md:right-5 md:bottom-5 right-3 bottom-3 w-8 md:w-20 h-auto z-20 opacity-50" />

          {/* Video */}
          <motion.div className="rounded-[16pt] md:rounded-3xl w-full col-span-full h-[250px] lg:h-[420px] 2xl:h-[450px] relative overflow-hidden border-b-1 border-white/15">
              <div className="absolute inset-0 rounded-[16pt] md:rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_8px_0px_rgba(255,255,255,1)] pointer-events-none mix-blend-overlay z-10"/>

              {/* WIP Overlay */}
              {/* <div className="absolute inset-0 flex flex-col items-center justify-center w-[80%] mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300 z-40">
                <h1 className="z-20 text-white text-2xl md:text-3xl tracking-tight leading-[1] w-[60%] font-medium text-center">Project page is currently work in progress.</h1>
                <p className="z-20 text-white text-xs md:text-sm font-medium text-center leading-[1.4] mt-4">Check back soon! <br/>Click to watch the film.</p>
              </div> */}

              <video 
                videoId="currently-isv"
                src="/isv/cover_2.mp4"
                className="rounded-[16pt] md:rounded-3xl w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/poster/isv.png"
              />
          </motion.div>

        </motion.div>

        {/* Header and Description Container */}
        <div className="grid grid-cols-3 mb-8 mt-4 md:mt-8">

          <div className='ml-1 text-foreground col-span-full md:col-span-1'>

            <h1 className="tracking-[-0.5pt] md:tracking-[-0.8pt] font-medium text-lg md:text-[16pt] md:group-hover:ml-3 transition-all duration-200 leading-tight md:leading-6">
              Singapore Airlines In-Flight Safety Video
            </h1>
            
          </div>

          {/* Description Container */}
          <div className='ml-1 text-foreground col-span-full md:col-span-2 '>
            
            <h3 className={`opacity-60 mt-3 md:mt-0 col-span-2 md:col-span-2 md:group-hover:opacity-100 transition-all duration-300 tracking-normal md:pr-10 text-xs md:text-sm md:leading-tight`}>
            Singapore Airlines' 2025 In-Flight Safety Video that takes passengers on a journey through Singapore’s iconic landmarks and most importantly, diverse communities.
            </h3>

          </div>
        </div>
      </motion.div>

      {/* Expense Tracker */}
      <motion.div className="col-span-1 md:col-span-2 cursor-pointer transition-all duration-200 h-full group mb-8 md:mb-0"
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
          
          <h1 className={`tracking-tight font-medium text-lg md:text-[15pt] md:group-hover:ml-3 transition-all duration-200 leading-tight md:leading-[1.25]`}>
            On-device LLM Expense Tracker (iOS)
          </h1>

          <h3 className={`mt-4 opacity-60 md:group-hover:opacity-100 md:group-hover:ml-3 transition-all duration-300 tracking-normal md:pr-10 text-xs md:text-sm md:leading-tight`}>
            A personal project into developing and designing an on-device LLM-powered personal expense tracker for iOS using React Native, FastAPI, Ollama and Gemma3n:e2b.
          </h3>

        </div>
        
      </motion.div>

      {/* Car */}
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
          
          <h1 className={`tracking-tight font-medium text-lg md:text-[15pt] md:group-hover:ml-3 transition-all duration-200 leading-tight md:leading-[1.25]`}>
            Human Car(mputer) Interaction
          </h1>

          <h3 className={`mt-4 opacity-60 md:group-hover:opacity-100 md:group-hover:ml-3 transition-all duration-300 tracking-normal md:pr-10 text-xs md:text-sm md:leading-tight md:w-4/5`}>
            A deep dive into the Human Computer Interaction of the automobile through the lens of design history.
          </h3>

        </div>
        
      </motion.div>



    </motion.div>  

  );
};

export default Currently;