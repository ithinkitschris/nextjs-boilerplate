import React from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import OptimizedVideo from './OptimizedVideo';
import { scaleIn } from '../../constants/animations';

const VideoSquare = ({ videoSrc, tags, onClick, title, subheader, selectedTags, poster, link }) => {
  const router = useRouter();
  
  const handleClick = (e) => {
    if (link && typeof link === 'string' && link.length > 0) {
      e.preventDefault();
      e.stopPropagation();
      // Check if it's an external URL (starts with http:// or https://)
      if (link.startsWith('http://') || link.startsWith('https://')) {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        router.push(link);
      }
      return;
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      lang='en'
      className="w-full cursor-pointer group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:rounded-3xl"
      initial="hidden"
      animate="show"
      layout
      variants={scaleIn}
      onClick={handleClick}
      onFocus={(e) => {
        e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }}
    >
      {/* Square */}
      <motion.div 
        className={`group relative overflow-hidden ${selectedTags?.includes('product') ? 'rounded-[25pt]' : 'rounded-[15pt] md:rounded-3xl'} pt-[150%] md:pt-[135%] w-full
        shadow-[3px_3px_15px_rgba(0,0,0,0.2)] group-hover:shadow-none border-b-0 border-white/20
        after:absolute after:inset-0 after:z-20 after:pointer-events-none ${selectedTags?.includes('product') ? 'after:rounded-[25pt]' : 'after:rounded-2xl md:after:rounded-3xl'} after:shadow-[inset_0px_0px_10px_0px_rgba(255,255,255,0.15)]`}
        whileHover={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 1000, 
          damping: 25, 
        }}
      >
        {/* Corner Arrow */}
        <div className={`hidden lg:block absolute top-2 right-2 z-20 p-0 m-1 scale-100 
        rounded-full border-1.5 text-white group-hover:text-black border-transparent group-hover:glass group-hover:bg-white/95
        group-hover:border-white group-hover:scale-125 group-hover:m-2 group-hover:p-0.5 group-hover:px-1
        transition-all duration-200 ${link ? 'pointer-events-none' : ''}`}>
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
        </div>

        {/* Text Container */}
        <div className={`absolute inset-0 md:inset-2.5 flex flex-col items-start justify-end ${selectedTags?.includes('product') ? 'pb-6 pl-5' : 'pb-2.5 p-3 pl-3.5'} w-full mb-1 pointer-events-none`}>

          {/* Title */}
          <h1 className={`tracking-tight font-medium z-30 md:w-[80%] ${selectedTags?.includes('product') ? 'text-[20pt] leading-7' : 'text-lg 2xl:text-2xl leading-none 2xl:leading-6'} mb-1.5 text-white`}>
            {title}
          </h1>

          {/* Subheader */}
          <h3 className={`tracking-tight z-30 w-[90%] md:w-[95%] ${selectedTags?.includes('product') ? 'text-[8pt]' : 'text-[7pt] md:text-[8pt] 2xl:text-[9pt]'} 2xl:w-3/4 leading-tight opacity-80 mix-blend-screen text-white`}>
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
          className={`absolute inset-0 w-full h-full object-cover rounded-2xl pointer-events-none
            after:absolute after:inset-0 after:z-20 after:pointer-events-none after:rounded-2xl after:shadow-[inset_0px_0px_3px_0px_rgba(255,255,255,0.2)]`}
          style={{ clipPath: 'inset(0 round 0.5rem)', pointerEvents: 'none' }}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          loading="lazy"
          useOptimized={true}
        />
      </motion.div>
    </motion.button>
  );
};

export default VideoSquare; 