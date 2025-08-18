'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const HideNavContext = createContext();

export const useHideNav = () => {
  const context = useContext(HideNavContext);
  if (!context) {
    throw new Error('useHideNav must be used within a HideNavProvider');
  }
  return context;
};

export const HideNavProvider = ({ children }) => {
  const [hideNav, setHideNav] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);
  const [randomRotation, setRandomRotation] = useState(0);

  // Scroll event listener for hiding/showing nav and footer
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const footerThreshold = 20; // Threshold for hiding footer when scrolling down
    const navThreshold = 80; // Threshold for hiding top navbar when scrolling down
    const scrollUpThreshold = 15; // Lower threshold for showing nav when scrolling up

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDelta = Math.abs(currentScrollY - lastScrollY);
          
          // Two-step hiding when scrolling down
          if (currentScrollY > lastScrollY && currentScrollY > 500) {
            // Step 1: Hide footer at 40px threshold
            if (scrollDelta > footerThreshold && !hideFooter) {
              setHideFooter(true);
            }
            // Step 2: Hide navbar at 80px threshold
            if (scrollDelta > navThreshold && !hideNav) {
              setHideNav(true);
              const randomRot = Math.random() * 60 - 20;
              setRandomRotation(randomRot);
            }
          } 
          // Show both when scrolling up
          else if (currentScrollY < lastScrollY && scrollDelta > scrollUpThreshold) {
            if (hideNav) {
              setHideNav(false);
            }
            if (hideFooter) {
              setHideFooter(false);
            }
          }
          
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideNav, hideFooter]);

  const toggleHideNav = () => {
    if (!hideNav) {
      // When hiding, generate a random rotation between -20 and 20 degrees
      const randomRot = Math.random() * 60 - 20;
      setRandomRotation(randomRot);
    }
    setHideNav(!hideNav);
  };

  const value = {
    hideNav,
    setHideNav,
    hideFooter,
    setHideFooter,
    randomRotation,
    setRandomRotation,
    toggleHideNav
  };

  return (
    <HideNavContext.Provider value={value}>
      {children}
    </HideNavContext.Provider>
  );
}; 