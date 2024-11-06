// /app/gallery/page.tsx
'use client';
import { motion } from "framer-motion"

export default function GalleryPage() {
    return (
      <div className="grid grid-cols-3 items-center justify-items-center min-h-screen min-ws-screen
      font-[family-name:var(--font-geist-sans)]">
        <div className="col-start-2 text-center">
          <motion.h1 
          className="text-8xl font-extralight"
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.5, ease:"easeOut"}}>
            Lorem Ipsum
          </motion.h1>
        </div>
      </div>
    );
  }
  