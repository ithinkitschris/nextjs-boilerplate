'use client';
export default function Home(){


  return (
    
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center 
    min-h-screen p-8 pb-20 gap-15 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-foreground -ml-1
          hover:text-6xl text-5xl font-bold tracking-tight
          transition-all">
          Hello World.
          </h1>
        <ol className="list-inside text-sm text-center sm:text-left">
          <li className="mb-2 font-bold">
            I am Chris. Welcome to my Portfolio.
          </li>
          <li>This is a work in progress, it will never be complete –
            <br />
              the intent is for this site to be ever iterating
            <br />
              based on your input and how you would like it to be.
          </li>
          <li className="mt-2 mb-2 font-bold">
           Yes, you.
          </li>
          <li>
            But for now, this page is a shell for whats to come.
            <br />
            If you would like to follow my progress, you may check 
            <br />
            out my documentation of the process below, or my 
            <br /> 
            pre-existing website whose days are numbered.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-2 -ml-1">
          <a href="https://hissing-sphere-1e7.notion.site/Portfolio-Website-127a92ab668680ed91ddd0619057466f"
              className="rounded-full flex items-center justify-center 
              bg-background border-1.5 border-background drop-shadow font-bold text-foreground 
              dark:border-1.5 dark:border-neutral-500
              text-sm h-10 sm:h-12 px-5 sm:min-w-36 
              hover:scale-105 hover:drop-shadow-xl
              transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
          </a>
          <a href="http://ithinkitschris.com"
            className="rounded-full flex items-center justify-center 
              bg-background border-1.5 border-background drop-shadow font-bold text-foreground 
              dark:border-1.5 dark:border-neutral-500
              text-sm h-10 sm:h-12 px-5 sm:min-w-36 
              hover:scale-105 hover:drop-shadow-xl
              transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Current Portfolio
          </a>
          
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