'use client';

import React, { createContext, useContext, useState } from 'react';

const HideNavContext = createContext();

export const useHideNav = () => {
  const context = useContext(HideNavContext);
  if (!context) {
    throw new Error('useHideNav must be used within a HideNavProvider');
  }
  return context;
};

export const HideNavProvider = ({ children }) => {
  const [hideNav, setHideNav] = useState(true);
  const [hideFooter, setHideFooter] = useState(false);
  const [randomRotation, setRandomRotation] = useState(() => Math.random() * 60 - 20);
  const [isWhiteBG, setIsWhiteBG] = useState(false);
  const [isArchiveInView, setIsArchiveInView] = useState(false);
  const [archiveSelectedTags, setArchiveSelectedTags] = useState(['all']);

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
    toggleHideNav,
    isWhiteBG,
    setIsWhiteBG,
    isArchiveInView,
    setIsArchiveInView,
    archiveSelectedTags,
    setArchiveSelectedTags
  };

  return (
    <HideNavContext.Provider value={value}>
      {children}
    </HideNavContext.Provider>
  );
}; 