'use client';
import {useState} from "react";
import {Playfair_Display, Noto_Serif} from "next/font/google";
import DarkModeToggle from "./components/dark-mode-toggle";
import DocumentationButton from "./components/documentation";
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

// const playfairDisplay = Playfair_Display({
//   subsets: ["latin"], // Load Latin characters
//   variable: "--font-playfair", // CSS variable name for the font
//   display: "swap", // Optimize font loading behavior
// });

const notoSerif = Noto_Serif({
  subsets: ["latin"], // Load Latin characters
  variable: "--font-noto-serif", // CSS variable name for the font
  display: "swap", // Optimize font loading behavior
});


export default function RootLayout({ children }: { children: React.ReactNode }) {

  const [isDarkMode, setIsDarkMode] = useState(false);

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
      ${notoSerif.variable} 
      ${breathing.variable}
      antialiased flex flex-col min-h-screen font-mono
      bg-background transition-all duration-300`}>
        {/* <DocumentationButton/> */}
        <div className="fixed left-4 md:left-auto md:right-6 top-3 md:top-1 z-50">
          <div className="absolute right-12 top-1 hidden md:block w-24 tracking-tight
          font-medium text-lg font-[family-name:var(--font-geist-sans)]"></div>
          <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
        </div>        
        <SearchMenu />
        <main className="">{children}</main>
      </body>
    </html>
  );
}



// return (
//   <html className={isDarkMode ? "dark" : ""}>
//     <body className={`${geistSans.variable} ${geistMono.variable} 
//       antialiased  bg-background transition-all duration-300 saturate-0 dark:saturate-100`}>
//       <main className="">
//         <div className="sticky top-4 z-10">
//           <div className="absolute right-6">
//             <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
//           </div>
//         </div>
//         <div className="fixed top-0 left-0 bg-red-500 text-white p-4 z-50">
//           Test Fixed Positioning
//         </div>

//         <div className="">{children}</div>
//       </main>

//       {/* <footer className="fixed bottom-0 left-0 right-0 flex gap-3 flex-wrap items-center justify-between px-10 py-8 z-20">
//         <DocumentationButton />
//       </footer> */}
//     </body>
//   </html>
// );