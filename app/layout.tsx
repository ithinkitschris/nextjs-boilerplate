'use client';
import {useState} from "react";
import DarkModeToggle from "./components/dark-mode-toggle";
import Navbar from "./components/nav-bar";
import BackButton from "./components/backbutton";
import DocumentationButton from "./components/documentation";
import localFont from "next/font/local";
import "./globals.css";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log("Dark mode toggled:", isDarkMode);

  };
  
  return (
    <html className={isDarkMode ? "dark" : ""}>
      <body className={`${geistSans.variable} ${geistMono.variable} 
      antialiased flex flex-col min-h-screen
      bg-background transition-all duration-300 saturate-0 dark:saturate-100`}>
        {/* <Navbar /> */}
        <header className="fixed right-6 top-3 z-10">
        </header>

        <main className="flex-grow relative">
          <div className="sticky top-3 z-10">
            <div className="absolute right-6">
              <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
            </div>
          </div>
          <div className="">{children}</div>
        </main>

        <footer className="fixed bottom-8 left-0 right-0 flex gap-3 flex-wrap items-center justify-between px-10"> 
          <DocumentationButton />
          {/* <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/> */}
        </footer>
      </body>
    </html>
  );
}