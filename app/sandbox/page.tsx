'use client'

import React, { useEffect, useState } from 'react';

const CursorSpotlight = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      {/* Light Mode Layer */}
      <div className="light-mode-layer">{children}</div>

      {/* Dark Mode Layer with Spotlight Effect */}
      <div
        className="dark-mode-layer fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{
          clipPath: `circle(150px at ${cursorPos.x}px ${cursorPos.y}px)`,
          transition: 'clip-path 0.1s ease-out',
          background: 'var(--background)', // Using your dark mode background
          color: 'var(--foreground)', // Using your dark mode foreground color
          mixBlendMode: 'difference', // Blend mode to create a darkening effect
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CursorSpotlight;





// 'use client';
// import { motion } from "framer-motion"
// import React, {useState, useEffect} from 'react';

// const animateIn ={
//     hidden: {opacity:0, y:20},
//     show: {opacity:1, y:0, transition:{duration: 0.4, ease:"easeOut"}} 
// }

// export default function Sandbox() {

  
//   const [timeNyc, setTimeNyc] = useState<string | null>(null);
//   useEffect(() => {
    
//     const currentTime = new Date();
//     const timeInTimeZone = new Intl.DateTimeFormat('en-US', {
//       timeZone:'America/New_York',
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//       hour12: false,
//     }).format(currentTime);
//     setTimeNyc(timeInTimeZone);

//     const timer = setInterval(() => {
//       const updatedTime = new Date();
//       const updatedTimeInTimeZone = new Intl.DateTimeFormat('en-US', {
//         timeZone:'America/New_York',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: false,
//       }).format(updatedTime);

//       setTimeNyc(updatedTimeInTimeZone);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const [timeSg, setTimeSg] = useState<string | null>(null);
//   useEffect(() => {
    
//     const currentTime = new Date();
//     const timeInTimeZone = new Intl.DateTimeFormat('en-US', {
//       timeZone:'Asia/Singapore',
//       hour: '2-digit',
//       minute: '2-digit',
//       second: '2-digit',
//       hour12: false,
//     }).format(currentTime);
//     setTimeSg(timeInTimeZone);

//     const timer = setInterval(() => {
//       const updatedTime = new Date();
//       const updatedTimeInTimeZone = new Intl.DateTimeFormat('en-US', {
//         timeZone:'Asia/Singapore',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: false,
//       }).format(updatedTime);

//       setTimeSg(updatedTimeInTimeZone);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

  
    
//   return (
//     <div className="grid grid-cols-3 items-center justify-items-center min-h-screen min-w-screen
//     font-[family-name:var(--font-geist-sans)]">
//         {/* <CabinCrewStories /> */}
      
//       <div className="col-start-2">

//         <motion.h1 className="text-9xl font-semibold -ml-14 mb-4 tracking-tighter"
//         initial="hidden"
//         animate="show"
//         variants={animateIn}
//         drag
//         dragConstraints={{top:-250, left:-500, bottom:400, right:500}}>
//         <p className="text-sm text-left ml-4 tracking-normal">New York City</p>  
//         {timeNyc}
//         </motion.h1>

//         <motion.h1 className="text-9xl font-semibold ml-14 tracking-tighter" 
//         initial="hidden"
//         animate="show"
//         variants={animateIn}
//         drag
//         dragConstraints={{top:-250, left:-500, bottom:400, right:500}}>
//           <p className="text-sm text-left ml-2 tracking-normal">Singapore</p>  
//           {timeSg}
//         </motion.h1>

//       </div>
//     </div>
//   );
//   }
  