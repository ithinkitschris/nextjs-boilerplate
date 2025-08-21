import React from 'react';
import { motion } from "framer-motion";
import { animateInChildMobile, skillContainer } from '../../constants/animations';

const MobileNavbar = ({ 
  showNav, 
  setShowNav, 
  selectedTags, 
  selectedWork, 
  toggleWork, 
  setShowWork, 
  toggleTag,
  isSection13Active // Covers sections 13-15 in NYC Subway page
}) => {
  const toggleNav = () => {
    if (showNav) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  return (
    <>
      {/* Mobile Home Button */}
      <motion.button
        className={`
          md:hidden fixed top-[1.2rem] left-[50%] -ml-[4.3rem] z-50
          rounded-full px-3 py-[3px] border-1.5 
          font-semibold tracking-[-0.2pt] whitespace-nowrap text-sm lg:text-[15px]
          text-white mix-blend-difference dark:mix-blend-normal
          transition-colors duration-200
          hover:text-background hover:bg-foreground hover:text-white hover:mix-blend-normal
          dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
          ${isSection13Active ? 'text-black !text-black dark:!text-black mix-blend-normal !important' : ''}
          
          ${selectedWork === 'resume' 
            ? '' 
            : 'border-transparent'
          }
        `}
        style={{
          color: isSection13Active ? '#000000' : undefined
        }}
        onClick={() => {
          toggleWork('resume');
          setShowWork(false);
          setShowNav(false);
        }}
        whileHover={{ scale: 0.96 }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 10
        }}
      >
        Home
      </motion.button>

      {/* Mobile Work Button */}
      <motion.button
        className={`
          md:hidden fixed top-[1.2rem] left-[50%] ml-1.5 z-50
          rounded-full px-3 py-[3px] border-1.5 text-sm lg:text-[15px]
          font-semibold tracking-[-0.2pt] whitespace-nowrap
          text-white mix-blend-difference dark:mix-blend-normal
          transition-colors duration-200
          hover:text-background hover:bg-foreground hover:text-white hover:mix-blend-normal
          dark:hover:text-white dark:hover:bg-transparent dark:hover:border-white
          ${isSection13Active ? 'text-black mix-blend-normal' : ''}
          ${selectedTags.length > 0 || (selectedWork && selectedWork !== '' && selectedWork !== 'resume')
            ? '' 
            : 'border-transparent'
          }
        `}
        onClick={() => {
          toggleNav();
        }}
        whileHover={{ scale: 0.96 }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 10
        }}
      >
        Work
      </motion.button>

      {/* Mobile Navbar BG */}
      <motion.div
        className={`
          md:hidden fixed top-3 md:top-6 w-full z-40
          border-white/40 transition-colors bg-background dark:bg-black/0
          backdrop-blur-xl
          glass border-b-1 border-r-0
          ${showNav ? "" : ""}
        `}
        style={{
          left: "50%",
          transform: "translateX(-50%)",
        }}
        animate={{ 
          width: showNav ? "16.5rem" : "9.6rem",
          height: showNav ? "23.5rem" : "2.7rem",
          borderRadius: showNav ? "1.5rem" : "50rem"
        }}
        transition={{
          width: { 
            type: "spring", 
            stiffness: showNav ? 500 : 500, 
            damping: showNav ? 28 : 26 
          },
          height: { 
            type: "spring", 
            stiffness: showNav ? 500 : 500, 
            damping: showNav ? 26 : 36 
          },
          borderRadius: { 
            duration: showNav ? 0.01 : 10 
          }
        }}
      />

      {/* Mobile Dropdown */}
      <motion.div
        className={`${showNav ? "ml-8" : "opacity-0 pointer-events-none"}
        relative transition-opacity duration-300`} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        variants={animateInChildMobile}
      >
        {showNav && (
          <>
            {/* Mobile Dropdown Container */}
            <div className="lg:hidden flex flex-col gap-4 items-left justify-between z-50 fixed w-screen -ml-4 font-medium top-20">
              {/* Dropdown Menu */}    
              <motion.div 
                className="flex flex-col gap-2 items-start tracking-tighter text-[23px] leading-tighter font-medium mt-4 w-full max-w-[16rem] mx-auto md:hidden z-50 relative"
                initial="hidden"
                animate="show"
                exit="fade"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17, 
                }}
                variants={skillContainer}
              >
                <motion.button 
                  className="text-left text-foreground font-normal mb-3 px-5 "
                  variants={animateInChildMobile}
                  onClick={() => {
                    toggleTag('creative');
                    toggleNav();
                    // setSelectedWork('');
                  }}
                >
                  <span className='hidden mr-1 opacity-35 text-xxs align-top'>01 </span>
                  Creative Direction
                </motion.button>

                <motion.button 
                  className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                  variants={animateInChildMobile}
                  onClick={() => {
                    toggleTag('product');
                    toggleNav();
                    // setSelectedWork('');
                  }}
                >
                  <span className='hidden mr-1 opacity-35 text-xxs align-top'>01 </span>
                  Product Design
                </motion.button>

                <motion.button 
                  className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                  variants={animateInChildMobile}
                  onClick={() => {
                    toggleTag('motion');
                    toggleNav();
                    // setSelectedWork('');
                  }}
                >
                  <span className='hidden mr-1 font-base opacity-35 text-xxs align-top'>02 </span>
                  Motion Design
                </motion.button>

                <motion.button 
                  className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                  variants={animateInChildMobile}
                  onClick={() => {
                    toggleTag('edit');
                    toggleNav();
                    // setSelectedWork('');
                  }}
                >
                  <span className='hidden mr-1 font-base opacity-35 text-xxs align-top'>03 </span>
                  Video Editing
                </motion.button>

                <motion.button 
                  className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                  variants={animateInChildMobile}
                  onClick={() => {
                    toggleTag('photography');
                    toggleNav();
                    toggleWork('photography');
                  }}
                >
                  <span className='hidden mr-1 font-base opacity-35 text-xxs align-top'>05 </span>
                  Photography
                </motion.button>

                <motion.button 
                  className="text-left text-foreground font-normal mt-1 mb-3 px-5 "
                  variants={animateInChildMobile}
                  onClick={() => {
                    toggleTag('content');
                    toggleNav();
                    toggleWork('content');
                  }}
                >
                  <span className='hidden mr-1 font-base opacity-35 text-xxs align-top'>06 </span>
                  Content Creation
                </motion.button>
              </motion.div>
            </div>
          </>
        )} 
      </motion.div>
    </>
  );
};

export default MobileNavbar; 