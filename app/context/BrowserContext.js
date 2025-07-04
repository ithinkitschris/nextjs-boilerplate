'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const BrowserContext = createContext();

export const useBrowser = () => {
  const context = useContext(BrowserContext);
  if (!context) {
    throw new Error('useBrowser must be used within a BrowserProvider');
  }
  return context;
};

export const BrowserProvider = ({ children }) => {
  const [browserType, setBrowserType] = useState('unknown');

  // Browser detection for backdrop-filter fallbacks
  const getBrowserType = () => {
    if (typeof window === "undefined") return "unknown";
    
    const userAgent = window.navigator.userAgent;
    
    // More robust browser detection
    const isFirefox = userAgent.includes("Firefox");
    const isEdge = userAgent.includes("Edg");
    const isOpera = userAgent.includes("OPR") || userAgent.includes("Opera");
    const isSafari = userAgent.includes("Safari") && !userAgent.includes("Chrome") && !userAgent.includes("Chromium");
    const isChrome = userAgent.includes("Chrome") && !isEdge && !isOpera && !isSafari;
    
    if (isChrome) return "chrome";
    if (isFirefox) return "firefox"; 
    if (isSafari) return "safari";
    return "unknown";
  };

  // Detect browser type on mount
  useEffect(() => {
    setBrowserType(getBrowserType());
  }, []);

  return (
    <BrowserContext.Provider value={{ browserType }}>
      {children}
    </BrowserContext.Provider>
  );
}; 