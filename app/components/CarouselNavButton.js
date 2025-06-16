import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const CarouselNavButton = ({ 
  activeIndex, 
  setActiveIndex, 
  scrollToIndex, 
  maxIndex = 4,
  className = "",
  scale = "90 md:scale-100",
  buttonSize = "w-9 h-9",
  iconSize = "w-[23px] h-[23px]",
  iconStrokeWidth = 2.5
}) => {
  return (
    <div className={`z-50 flex gap-3 justify-end -mr-5 md:mr-0 mb-6 md:mb-10 scale-${scale} ${className}`}>
      <motion.button
        onClick={() => {
          const newIndex = Math.max(0, activeIndex - 1); 
          setActiveIndex(newIndex);
          scrollToIndex(newIndex);
        }}
        whileHover={{ scale: 0.92 }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 10
        }}
        className={`
          ${buttonSize} pr-[1.5px] text-sm font-semibold rounded-full 
          backdrop-blur-2xl transition-opacity duration-200
          flex items-center justify-center
          dark:border-1 bg-background drop-shadow-md 
          dark:border-white/20 text-foreground 
          md:hover:text-white dark:text-white 
          md:hover:bg-foreground dark:md:hover:bg-white 
          dark:md:hover:text-black
          ${activeIndex === 0 
            ? 'opacity-35 drop-shadow-none pointer-events-none' 
            : 'opacity-100'
          }
        `}
      >
        <ChevronLeftIcon className={iconSize} style={{ strokeWidth: iconStrokeWidth }} />
      </motion.button>

      <motion.button
        onClick={() => {
          const newIndex = Math.min(maxIndex, activeIndex + 1); 
          setActiveIndex(newIndex);
          scrollToIndex(newIndex);
        }}
        whileHover={{ scale: 0.92 }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 10
        }}
        className={`
          ${buttonSize} pl-[2px] text-sm font-semibold rounded-full 
          backdrop-blur-2xl transition-opacity duration-200
          flex items-center justify-center
          dark:border-1 bg-background drop-shadow-md 
          dark:border-white/20 text-foreground 
          md:hover:text-white md:dark:text-white 
          md:hover:bg-foreground dark:md:hover:bg-white 
          dark:md:hover:text-black
          ${activeIndex === maxIndex 
            ? 'opacity-35 drop-shadow-none pointer-events-none' 
            : activeIndex === 1 || activeIndex === 2 || activeIndex === 3
              ? 'opacity-100'
              : 'opacity-100 dark:bg-foreground dark:text-black md:dark:bg-transparent'
          }
        `}
      >
        <ChevronRightIcon className={iconSize} style={{ strokeWidth: iconStrokeWidth }} />
      </motion.button>
    </div>
  );
};

export default CarouselNavButton; 