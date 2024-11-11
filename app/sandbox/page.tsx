
'use client';
import { motion } from "framer-motion"
import React, {useState, useEffect} from 'react';

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {opacity:1, y:0, transition:{duration: 0.4, ease:"easeOut"}} 
}

export default function Sandbox() {

  const [timeNyc, setTimeNyc] = useState<string | null>(null);
  useEffect(() => {
    
    const currentTime = new Date();
    const timeInTimeZone = new Intl.DateTimeFormat('en-US', {
      timeZone:'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(currentTime);
    setTimeNyc(timeInTimeZone);

    const timer = setInterval(() => {
      const updatedTime = new Date();
      const updatedTimeInTimeZone = new Intl.DateTimeFormat('en-US', {
        timeZone:'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(updatedTime);

      setTimeNyc(updatedTimeInTimeZone);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [timeSg, setTimeSg] = useState<string | null>(null);
  useEffect(() => {
    
    const currentTime = new Date();
    const timeInTimeZone = new Intl.DateTimeFormat('en-US', {
      timeZone:'Asia/Singapore',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(currentTime);
    setTimeSg(timeInTimeZone);

    const timer = setInterval(() => {
      const updatedTime = new Date();
      const updatedTimeInTimeZone = new Intl.DateTimeFormat('en-US', {
        timeZone:'Asia/Singapore',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(updatedTime);

      setTimeSg(updatedTimeInTimeZone);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
    
  return (
    <div className="grid grid-cols-3 items-center justify-items-center min-h-screen min-w-screen
    font-[family-name:var(--font-geist-sans)]">
        {/* <CabinCrewStories /> */}
      
      <div className="col-start-2">

        <motion.h1 className="text-9xl font-semibold -ml-14 mb-4 tracking-tighter"
        initial="hidden"
        animate="show"
        variants={animateIn}
        drag
        dragConstraints={{top:-250, left:-500, bottom:400, right:500}}>
        <p className="text-sm text-left ml-4 tracking-normal">New York City</p>  
        {timeNyc}
        </motion.h1>

        <motion.h1 className="text-9xl font-semibold ml-14 tracking-tighter" 
        initial="hidden"
        animate="show"
        variants={animateIn}
        drag
        dragConstraints={{top:-250, left:-500, bottom:400, right:500}}>
          <p className="text-sm text-left ml-2 tracking-normal">Singapore</p>  
          {timeSg}
        </motion.h1>

      </div>
    </div>
  );
  }
  