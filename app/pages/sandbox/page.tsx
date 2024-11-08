
'use client';
import { motion } from "framer-motion"

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {opacity:1, y:0, transition:{duration: 0.5, ease:"easeOut"}} 
}

export default function Sandbox() {
    
    return (
      <div className="grid grid-cols-3 items-center justify-items-center min-h-screen min-ws-screen
      font-[family-name:var(--font-geist-sans)]">
        <div className="col-start-2 text-center">
          <motion.h1 className="text-8xl font-extralight" 
          initial="hidden"
          animate="show"
          variants={animateIn}
          drag
          dragConstraints={{top:-50, left:-50, bottom:50, right:50}}>
            Sandbox
          </motion.h1>
        </div>
      </div>
    );
  }
  