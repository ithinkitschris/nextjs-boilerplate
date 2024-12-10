'use client';
import {useState} from "react";
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
        <div className="text-black/15 shadow-sm dark:text-white fixed bottom-2 left-1/2 transform -translate-x-1/2 
        whitespace-nowrap tracking-tight text-xs rounded-full p-0.5 px-1.5 z-50 dark:backdrop-blur-md bg-background dark:bg-transparent dark:mix-blend-soft-light">
          Website masochistically designed and coded by yours truly.</div>
        {/* <div className="fixed bottom-0 w-full bg-gradient-to-t h-[100px] from-white to-transparent z-40"></div> */}
      </body>
    </html>
  );
}
