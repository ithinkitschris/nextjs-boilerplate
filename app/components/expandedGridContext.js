import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [expandedVideo, setExpandedVideo] = useState(null);

  return (
    <VideoContext.Provider value={{ expandedVideo, setExpandedVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => useContext(VideoContext);
