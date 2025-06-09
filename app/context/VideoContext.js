import { createContext, useContext, useState, useCallback } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [visibleVideos, setVisibleVideos] = useState(new Set());

  const registerVideo = useCallback((videoId) => {
    setVisibleVideos(prev => new Set([...prev, videoId]));
  }, []);

  const unregisterVideo = useCallback((videoId) => {
    setVisibleVideos(prev => {
      const newSet = new Set(prev);
      newSet.delete(videoId);
      return newSet;
    });
  }, []);

  return (
    <VideoContext.Provider value={{ visibleVideos, registerVideo, unregisterVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideoContext must be used within a VideoProvider');
  }
  return context;
};