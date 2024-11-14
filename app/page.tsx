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

    <div className="grid grid-cols-1 sm:grid-cols-6 items-center justify-items-center 
    min-h-screen p-8 pb-20 gap-15 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <motion.video 
      src="/CCS/montageFade.mp4" 
      className="pointer-events-none absolute top-0 left-0 w-full h-full 
      object-cover rounded-full -z-10 scale-100 
      blur-3xl saturate-200 opacity-0 dark:opacity-100"
      autoPlay 
      muted 
      loop
      // initial={{opacity:0}}
      // animate={{opacity:1}}
      // transition={{duration:1, ease:"easeOut"}}
      ></motion.video>

      <motion.main 
      className="flex flex-col col-start-2 sm:col-start-3 sm:col-span-2 col-span-3 px-10 gap-8 items-center sm:items-start"
      initial="hidden"
      animate="show"
      variants={animateIn}> 

        <motion.h1 className="text-background -ml-1 -mb-3
          text-8xl tracking-tighter transition-colors text-center sm:text-left 
          text-foreground whitespace-nowrap "
          variants={animateInChild}>
          Hey.<br/>
        </motion.h1>


        <motion.ol className="list-insid text-sm text-center sm:text-left text-foreground"
        variants={animateInChild}>
          <li className="mb-4 text-xl">
            Welcome to my Portfolio. <span className="text-xs align-top italic">Well, kinda. Not quite yet.</span>
          </li>
          {/* <li className="mb-4">This is a work in progress, it will never be complete – the intent is for this site to be ever iterating
              based on your input and how you would like it to be.
          </li> */}
          <li>
            This page is a shell for whats to come.
            If you would like to follow my progress, you may check 
            out my documentation of the process thus far, or my 
            pre-existing website whose days are numbered.
          </li>
        </motion.ol>

        <div className="flex gap-2 items-center flex-row mt-2 -ml-1">
        <motion.div
          variants={animateInChild}>
            <Link href="/resume"
              className="rounded-full flex items-center justify-center
                border-1.5 border-foreground font-semibold text-foreground 
                text-sm h-10 px-1 sm:min-w-24 
                hover:scale-90 hover:border-foreground hover:drop-shadow-none
                dark:border-foreground dark:text-foreground dark:hover:bg-foreground dark:hover:text-background
                transition-all"
            >
              Who am I?
            </Link>
          </motion.div>

          <motion.div
          variants={animateInChild}>
            <a href="https://hissing-sphere-1e7.notion.site/Portfolio-Website-127a92ab668680ed91ddd0619057466f"
                className="rounded-full flex items-center justify-center
                border-1.5 border-foreground font-semibold text-foreground 
                text-sm h-10 px-1 sm:min-w-40 
                hover:scale-93 hover:border-foreground hover:drop-shadow-none
                dark:border-foreground dark:text-foreground dark:hover:bg-foreground dark:hover:text-background
                transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                How did I do this??
            </a>
          </motion.div>

          <motion.div
          variants={animateInChild}>
            <a href="http://ithinkitschris.com"
              className="rounded-full flex items-center justify-center
                border-1.5 border-foreground font-semibold text-foreground 
                text-sm h-10 px-1 sm:min-w-54 
                hover:scale-95 hover:border-foreground hover:drop-shadow-none
                dark:border-foreground dark:text-foreground dark:hover:bg-foreground dark:hover:text-background
                transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              What have I done before???
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