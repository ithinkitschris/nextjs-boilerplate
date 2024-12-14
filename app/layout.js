'use client';
import {useState} from "react";
import Link from "next/link";
import DarkModeToggle from "./components/dark-mode-toggle";
import localFont from "next/font/local";
import "./globals.css";
import SearchMenu from "./components/search-menu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const breathing = localFont({
  src: "./fonts/Breathing.ttf",
  variable: "--font-breathing",
  weight: "100",
});

const modernLine = localFont({
  src: "./fonts/AndoraModernScript.otf",
  variable: "--font-modernline",
  weight: "100",
});


export default function RootLayout({ children }) {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isFooterHovered, setIsFooterHovered] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log("Dark mode toggled:", isDarkMode);
  };
  
  return (
    <html className={isDarkMode ? "dark" : ""}>
      <body className={`
      ${geistSans.variable} 
      ${geistMono.variable} 
      ${modernLine.variable} 
      ${breathing.variable}
      antialiased flex flex-col min-h-screen font-mono
      bg-background transition-all duration-300`}>
        {/* <DocumentationButton/> */}
        <div className="fixed left-4 md:left-auto md:right-6 top-3 md:top-2 z-50">
          <div className="absolute right-12 hidden md:block w-24 tracking-tight
          font-medium text-lg font-[family-name:var(--font-geist-sans)]"></div>
          <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
        </div>        
        <SearchMenu />
        <main className="">{children}</main>

        <div 
          className="fixed bottom-3 inset-x-0 mx-auto z-50 md:w-200 flex justify-center"
          onMouseEnter={() => setIsFooterHovered(true)}
          onMouseLeave={() => setIsFooterHovered(false)}
        >
          <div
            className={`transition-all duration-300 text-center backdrop-blur-sm rounded-full border-1 whitespace-nowrap tracking-tighter text-xs font-medium
              ${isFooterHovered 
                ? ' md:w-44 md:bg-foreground md:dark:bg-transparent md:border-foreground md:text-white md:dark:border-white cursor-pointer md:scale-110' 
                : ' text-black/15 md:text-black/40 dark:text-white/20 md:dark:text-white/60 w-80 border-transparent scale-100'}`}
          >
            {isFooterHovered
              ? <Link href='https://ithinkitschris.notion.site/Portfolio-Website-127a92ab668680ed91ddd0619057466f'
              target="blank"
              rel="noopener noreferrer">Read the Documentation here.</Link>
              : 'Website masochistically designed and coded by yours truly.'}
          </div>
        </div>
      </body>
    </html>
  );
}
