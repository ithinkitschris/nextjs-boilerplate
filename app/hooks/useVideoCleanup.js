import { useEffect, useRef, useState } from 'react';

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

// New optimized hook for viewport-aware video management
export const useVideoOptimization = (videoRef, src, options = {}) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const observerRef = useRef(null);
  const originalSrc = useRef(src);
  
  const {
    rootMargin = '50px',
    threshold = 0.1,
    autoPlay = true,
    loop = true,
    muted = true,
    playsInline = true
  } = options;

  // Function to load video
  const loadVideo = () => {
    const video = videoRef.current;
    if (video && !isLoaded && originalSrc.current) {
      video.src = originalSrc.current;
      video.load();
      setIsLoaded(true);
    }
  };

  // Function to unload video
  const unloadVideo = () => {
    const video = videoRef.current;
    if (video && isLoaded) {
      video.pause();
      video.removeAttribute('src');
      video.load();
      setIsLoaded(false);
    }
  };

  // Intersection Observer effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const inViewport = entry.isIntersecting;
        setIsInViewport(inViewport);
        
        if (inViewport) {
          loadVideo();
        } else {
          // Small delay to prevent flicker when scrolling quickly
          setTimeout(() => {
            if (!isInViewport) {
              unloadVideo();
            }
          }, 100);
        }
      },
      {
        root: null,
        rootMargin,
        threshold
      }
    );

    observerRef.current.observe(video);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [rootMargin, threshold, isInViewport]);

  // Auto-play when video loads and is in viewport
  useEffect(() => {
    const video = videoRef.current;
    if (video && isLoaded && isInViewport && autoPlay) {
      video.play().catch(() => {
        // Ignore autoplay errors (user interaction required)
      });
    }
  }, [isLoaded, isInViewport, autoPlay]);

  // Update src when prop changes
  useEffect(() => {
    if (src !== originalSrc.current) {
      originalSrc.current = src;
      if (isInViewport) {
        loadVideo();
      }
    }
  }, [src, isInViewport]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      const video = videoRef.current;
      if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
        video.onloadeddata = null;
        video.oncanplay = null;
        video.onplay = null;
        video.onpause = null;
        video.onended = null;
      }
    };
  }, []);

  return {
    isInViewport,
    isLoaded
  };
};
