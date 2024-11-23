'use client';
import { useState, useEffect } from "react";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for saved theme or fallback to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const darkMode = savedTheme
      ? savedTheme === 'dark'
      : systemPrefersDark;

    setIsDarkMode(darkMode);

    // Update the `dark` class on <html>
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    // Save to localStorage
    localStorage.setItem('theme', newMode ? 'dark' : 'light');

    // Toggle the `dark` class on <html>
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        antialiased flex flex-col min-h-screen bg-background transition-all duration-300`}
      >
        <div className="fixed left-4 md:left-auto md:right-6 top-1.5 z-50">
          <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        </div>
        <SearchMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}
