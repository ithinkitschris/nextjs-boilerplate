import { useEffect } from 'react';

export const useVideoCleanup = (videoRef) => {
  useEffect(() => {
    const video = videoRef.current;
    
    return () => {
      if (video) {
        // Pause the video
        video.pause();
        // Remove the source
        video.removeAttribute('src');
        // Load empty source to clear the video element
        video.load();
        // Clear any event listeners
        video.onloadeddata = null;
        video.oncanplay = null;
        video.onplay = null;
        video.onpause = null;
        video.onended = null;
      }
    };
  }, [videoRef]);
};
