import { createContext, useContext, useState, useCallback } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [visibleVideos, setVisibleVideos] = useState(new Set());
  const [loadedVideos, setLoadedVideos] = useState(new Set());
  const [videoStats, setVideoStats] = useState({
    totalVideos: 0,
    loadedVideos: 0,
    visibleVideos: 0
  });
  const [isGloballyPaused, setIsGloballyPaused] = useState(false);

  const registerVideo = useCallback((videoId) => {
    setVisibleVideos(prev => {
      const newSet = new Set([...prev, videoId]);
      setVideoStats(stats => ({
        ...stats,
        totalVideos: Math.max(stats.totalVideos, newSet.size),
        visibleVideos: newSet.size
      }));
      return newSet;
    });
  }, []);

  const unregisterVideo = useCallback((videoId) => {
    setVisibleVideos(prev => {
      const newSet = new Set(prev);
      newSet.delete(videoId);
      setVideoStats(stats => ({
        ...stats,
        visibleVideos: newSet.size
      }));
      return newSet;
    });
    setLoadedVideos(prev => {
      const newSet = new Set(prev);
      newSet.delete(videoId);
      setVideoStats(stats => ({
        ...stats,
        loadedVideos: newSet.size
      }));
      return newSet;
    });
  }, []);

  const markVideoLoaded = useCallback((videoId) => {
    setLoadedVideos(prev => {
      const newSet = new Set([...prev, videoId]);
      setVideoStats(stats => ({
        ...stats,
        loadedVideos: newSet.size
      }));
      return newSet;
    });
  }, []);

  const markVideoUnloaded = useCallback((videoId) => {
    setLoadedVideos(prev => {
      const newSet = new Set(prev);
      newSet.delete(videoId);
      setVideoStats(stats => ({
        ...stats,
        loadedVideos: newSet.size
      }));
      return newSet;
    });
  }, []);

  const setGlobalPause = useCallback((paused) => {
    setIsGloballyPaused(paused);
  }, []);

  return (
    <VideoContext.Provider value={{ 
      visibleVideos, 
      loadedVideos,
      videoStats,
      registerVideo, 
      unregisterVideo,
      markVideoLoaded,
      markVideoUnloaded,
      isGloballyPaused,
      setGlobalPause
    }}>
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