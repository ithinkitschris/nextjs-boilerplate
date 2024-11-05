'use client';
import Link from 'next/link';
// import Image from "next/image";
export default function Home(){


  return (
    
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center 
    min-h-screen p-8 pb-20 gap-15 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="transition-all drop-shadow text-foreground -ml-1
          hover:text-6xl text-5xl font-bold tracking-tight">
          Hello World.
          </h1>
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={200}
          height={38}
          priority
        /> */}
        <ol className="list-inside text-sm text-center sm:text-left">
          <li className="mb-2 font-bold">
            I am Chris. Welcome to my Portfolio.
          </li>
          <li>This is a work in progress, it will never be complete –
            <br />
              the intent is for this site to be ever iterating
            <br />
              based on your input and how you'd like it to be.
          </li>
          <li className="mt-2 mb-2 font-bold">
           Yes, you.
          </li>
          <li>
            But for now, this page is a shell for what's to come.
            <br />
            If you'd like to follow my progress, you may check out
            <br />
            my documentation of the process below.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-2 -ml-1">
          <Link href="/resume"
              className="rounded-full transition-all flex items-center justify-center 
              bg-background drop-shadow font-bold text-foreground 
              dark:border-2 dark:border-neutral-500
              sm:text-base h-10 sm:h-12 px-5 sm:min-w-36 
              hover:scale-105 hover:drop-shadow-xl" 
              rel="noopener noreferrer"
            >
              Resume
          </Link>
          <Link href="/gallery"
            className="rounded-full transition-all flex items-center justify-center 
            bg-background drop-shadow hover:drop-shadow-xl font-bold text-foreground 
            dark:border-2 dark:border-neutral-500
            sm:text-base h-10 sm:h-12 px-5 sm:min-w-36 hover:scale-105"
            rel="noopener noreferrer"
          >
            Work
          </Link>
        </div>
      
      </main>
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