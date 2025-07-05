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
  const [deviceType, setDeviceType] = useState('unknown');
  const [isMobile, setIsMobile] = useState(false);

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

  // Device detection for mobile/desktop
  const getDeviceType = () => {
    if (typeof window === "undefined") return { deviceType: "unknown", isMobile: false };
    
    const userAgent = window.navigator.userAgent;
    
    // Mobile device detection
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const isMobileDevice = mobileRegex.test(userAgent);
    
    // More specific device detection
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent);
    const isPhone = /iPhone|Android.*Mobile|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    let deviceType = "desktop";
    if (isTablet) deviceType = "tablet";
    else if (isPhone) deviceType = "phone";
    
    return { deviceType, isMobile: isMobileDevice };
  };

  // Detect browser and device type on mount
  useEffect(() => {
    setBrowserType(getBrowserType());
    const { deviceType, isMobile } = getDeviceType();
    setDeviceType(deviceType);
    setIsMobile(isMobile);
  }, []);

  return (
    <BrowserContext.Provider value={{ browserType, deviceType, isMobile }}>
      {children}
    </BrowserContext.Provider>
  );
}; 