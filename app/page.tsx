'use client';
import {motion} from "framer-motion"

export default function Home(){




  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-5 items-center justify-items-center 
    min-h-screen p-8 pb-20 gap-15 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <motion.main 
      className="flex flex-col col-start-2 2xl:col-start-3 2xl:col-span-1 col-span-3 px-10 gap-8 items-center sm:items-start"
      initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.4, ease:"easeOut"}}>
        <h1 className="text-foreground -ml-1 -mb-3
          text-5xl tracking-tight
          transition-all">
          Hello World.
          </h1>
        <ol className="list-inside text-sm text-center sm:text-left">
          <li className="mb-4 text-lg">
            Welcome to my Portfolio.
          </li>
          <li className="mb-4">This is a work in progress, it will never be complete – the intent is for this site to be ever iterating
              based on your input and how you would like it to be.
          </li>
          <li>
            But for now, this page is a shell for whats to come.
            If you would like to follow my progress, you may check 
            out my documentation of the process below, or my 
            pre-existing website whose days are numbered.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-2 -ml-1">
          <motion.div
          initial={{opacity:0, y:10}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.3, ease:"easeOut"}}>
            <a href="https://hissing-sphere-1e7.notion.site/Portfolio-Website-127a92ab668680ed91ddd0619057466f"
                className="rounded-full flex items-center justify-center 
                bg-background border-1.5 border-midground font-semibold text-foreground
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
          initial={{opacity:0, y:10}}
          animate={{opacity:1, y:0}}
          transition={{delay:0.1, duration:0.3, ease:"easeOut"}}>
            <a href="http://ithinkitschris.com"
              className="rounded-full flex items-center justify-center 
                bg-background border-1.5 border-midground font-semibold text-foreground 
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
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}


{/* <code className="bg-black/[0.05] dark:bg-white/[.06] -ml-1 px-2 py-0.5 rounded font-sans font-bold">
  Yes, you.
</code> */}