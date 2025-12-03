import React from 'react';
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { animateInChild, dropdown } from "../../constants/animations";

const ExperienceCard = ({
  header,
  title,
  titleClassName,
  company,
  duration,
  isOpen,
  onToggle,
  children,
  sectionKey,
  damping,
  className = "",
}) => {
  
  return (
    <motion.div
      className={`md:col-span-1 md:w-full relative mt-4 md:mt-10 group cursor-pointer  ${className}`}
      variants={animateInChild}
      key={`card-${sectionKey}`}
      layout="position"
      transition={{
        type: "spring",
        stiffness: 300,
        damping: damping || 26,
      }}
    >
      {header && (
        <h1 className="text-[40px] md:text-3xl mb-6 -ml-1 mt-6 md:mt-0 tracking-tight font-medium text-black dark:text-white">
          {header}
        </h1>
      )}

      

      <button 
        className="cursor-pointer mt-4 w-full text-left focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 dark:focus:ring-offset-background rounded-lg"
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
        aria-expanded={isOpen}
        aria-controls={`dropdown-${sectionKey}`}
        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${title} details`}
      >
        <div className="flex justify-between">
          <div
            className={`flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 transition-all duration-200 md:group-hover:bg-foreground md:group-hover:text-background rounded-full tracking-tight font-medium text-sm mb-2 whitespace-nowrap ${titleClassName} ${isOpen ? 'bg-foreground text-background scale-96' : ''}`}
          >
            {title}
          </div>
          <div
            className={`flex items-center justify-center border-0 border-black dark:border-white/50 transition-all duration-200 md:group-hover:bg-foreground md:group-hover:text-background rounded-full mb-2 px-1 ${isOpen ? 'bg-foreground text-background scale-96' : ''}`}
            aria-hidden="true"
          >
            {isOpen ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )}
          </div>
        </div>

        <p className="">{company}</p>
        <i className="-ml-[1px] opacity-75">{duration}</i>
      </button>

      {isOpen && (
        <motion.div
          id={`dropdown-${sectionKey}`}
          key={`dropdown-${sectionKey}`}
          initial="hidden"
          animate="show"
          layout="position"
          variants={dropdown}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExperienceCard; 