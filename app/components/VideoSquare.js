import React from 'react';
import { motion } from "framer-motion";
import OptimizedVideo from './OptimizedVideo';
import { scaleIn } from '../constants/animations';

const VideoSquare = ({ videoSrc, tags, onClick, title, subheader, selectedTags, poster }) => {
  return (
    <motion.div
      lang='en'
      className="cursor-pointer group"
      initial="hidden"
      animate="show"
      layout
      variants={scaleIn}
      onClick={onClick}
    >
      {/* Square */}
      <motion.div 
        className={`group relative overflow-hidden rounded-3xl pt-[150%]
        shadow-[3px_3px_15px_rgba(0,0,0,0.2)] group-hover:shadow-none border-b-0 border-white/20
        after:absolute after:inset-0 after:z-20 after:pointer-events-none after:rounded-2xl md:after:rounded-3xl after:shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.15)]`}
        whileHover={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 1000, 
          damping: 25, 
        }}
      >
        {/* Corner Arrow */}
        <button className="hidden lg:block absolute top-2 right-2 z-20 p-0 m-1 scale-100 
        rounded-full border-1.5 text-white group-hover:text-black border-transparent group-hover:glass group-hover:bg-white/95
        group-hover:border-white group-hover:scale-125 group-hover:m-2 group-hover:p-0.5 group-hover:px-1
        transition-all duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="2 2 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M7 17L17 7"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <path d="M7 7h10v10" />
          </svg>
        </button>

        {/* Text Container */}
        <div className="absolute inset-0 md:inset-2.5 flex flex-col items-start justify-end pb-2.5 p-3 pl-3.5 w-full mb-1">
          {/* Title */}
          <h1 className="tracking-tight font-medium z-30 w-[80%] text-xl 2xl:text-2xl leading-5 2xl:leading-6 mb-1.5 text-white">
            {title}
          </h1>

          {/* Subheader */}
          <h3 className={`tracking-tight z-30 w-[95%] text-[6pt] md:text-[8pt] 2xl:text-[9pt] 2xl:w-3/4 leading-tight opacity-60 mix-blend-screen text-white`}>
            {subheader}
          </h3>
        </div>
        
        {/* Bottom Gradient Blur */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[60%] md:h-[50%] z-10 pointer-events-none backdrop-blur-[100px] saturate-150 brightness-110 -mb-[0.5px]"
          style={{
            maskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, black 30%, transparent 100%)'
          }}
        />

        {/* Video */}
        <OptimizedVideo
          videoId={`grid-${videoSrc}`}
          src={videoSrc}
          className={`absolute inset-0 w-full h-full object-cover rounded-2xl 
            after:absolute after:inset-0 after:z-20 after:pointer-events-none after:rounded-2xl after:shadow-[inset_0px_0px_3px_0px_rgba(255,255,255,0.2)]`}
          style={{ clipPath: 'inset(0 round 0.5rem)' }}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          loading="lazy"
          useOptimized={true}
        />
      </motion.div>
    </motion.div>
  );
};

export default VideoSquare; 