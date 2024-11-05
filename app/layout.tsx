'use client';
import {useState} from "react";
import DarkModeToggle from "./components/dark-mode-toggle";
import Navbar from "./components/nav-bar";
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen transition-all`}>
        <Navbar />
          <main className="flex-grow">{children}</main>
            <footer className="fixed bottom-8 left-0 right-0 flex gap-3 flex-wrap items-center justify-between px-10"> 
              <a href="https://hissing-sphere-1e7.notion.site/Portfolio-Website-127a92ab668680ed91ddd0619057466f"
              className="
              group transition-all duration-300 ease-in-out
              p-2 rounded-full border-1.5 border-foreground text-foreground 
              hover:bg-foreground hover:text-background
              text-sm font-bold tracking-tight
              overflow-hidden whitespace-nowrap
              w-16 hover:w-54"
              target="_blank"
              rel="noopener noreferrer"
              >
              Follow 
              <span className="opacity-0 group-hover:opacity-100 transition-opacity ease-in-out ml-1">
                my documentation here 
              </span>
              </a>
              <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
            </footer>
      </body>
    </html>
  );
}
