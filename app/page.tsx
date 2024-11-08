'use client';
import {motion} from "framer-motion"
import Link from "next/link";

export default function Home(){
  
  const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.1, duration:0.25, ease:"easeOut"}
    }
  }
  const animateInChild ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {duration:0.3, ease:"easeOut"}
        }
   }

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-5 items-center justify-items-center 
    min-h-screen p-8 pb-20 gap-15 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <motion.main 
      className="flex flex-col col-start-2 2xl:col-start-3 2xl:col-span-1 col-span-3 px-10 gap-8 items-center sm:items-start"
      initial="hidden"
      animate="show"
      variants={animateIn}> 

        <motion.h1 className="text-foreground -ml-1 -mb-3
          text-8xl tracking-tighter transition-colors font-light text-center sm:text-left"
          variants={animateInChild}>
          Hello World.
        </motion.h1>


        <motion.ol className="list-inside text-sm text-center sm:text-left"
        variants={animateInChild}>
          <li className="mb-4 text-xl">
            Welcome to my Portfolio.
          </li>
          <li className="mb-4">This is a work in progress, it will never be complete – the intent is for this site to be ever iterating
              based on your input and how you would like it to be.
          </li>
          <li>
            But for now, this page is a shell for whats to come.
            If you would like to follow my progress, you may check 
            out my documentation of the process thus far, or my 
            pre-existing website whose days are numbered.
          </li>
        </motion.ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-2 -ml-1">
        <motion.div
          variants={animateInChild}>
            <Link href="/pages/resume"
              className="rounded-full flex items-center justify-center 
                bg-background border-2 border-midground font-semibold text-foreground 
                text-sm h-10 px-3 sm:min-w-36 
                hover:scale-105 hover:drop-shadow-md hover:border-background 
                transition-all"
            >
              About Me
            </Link>
          </motion.div>

          <motion.div
          variants={animateInChild}>
            <a href="https://hissing-sphere-1e7.notion.site/Portfolio-Website-127a92ab668680ed91ddd0619057466f"
                className="rounded-full flex items-center justify-center 
                bg-background border-2 border-midground font-semibold text-foreground
                text-sm h-10 px-3 sm:min-w-36 
                hover:scale-105 hover:drop-shadow-md hover:border-background
                transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
            </a>
          </motion.div>

          <motion.div
          variants={animateInChild}>
            <a href="http://ithinkitschris.com"
              className="rounded-full flex items-center justify-center 
                bg-background border-2 border-midground font-semibold text-foreground 
                text-sm h-10 px-3 sm:min-w-36 
                hover:scale-105 hover:drop-shadow-md hover:border-background 
                transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Current Portfolio
            </a>
          </motion.div>

        </div>
      </motion.main>
    </div>
  );
}


{/* <code className="bg-black/[0.05] dark:bg-white/[.06] -ml-1 px-2 py-0.5 rounded font-sans font-bold">
  Yes, you.
</code> */}