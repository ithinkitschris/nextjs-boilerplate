'use client';
import Image from "next/image";
export default function Home(){


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start">
        <h1 className="transition-all hover:text-neutral-300 hover:text-6xl text-5xl font-bold tracking-tight">
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
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Line 1{" "}
            <code className="bg-black/[0.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              Highlighted Text
            </code>
            .
          </li>
          <li>Line 2</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full transition-all flex items-center justify-center bg-foreground font-bold text-background dark:text-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 text-sm text-neutral-100 hover:text-neutral-900 sm:text-base h-10 sm:h-12 px-5 sm:min-w-44 hover:scale-105"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Button 1
          </a>
          <a
            className="rounded-full transition-all flex items-center justify-center bg-neutral-200 font-bold text-foreground dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 text-sm text-neutral-100 hover:text-neutral-100 sm:text-base h-10 sm:h-12 px-5 sm:min-w-44 hover:scale-105"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Button 2
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
