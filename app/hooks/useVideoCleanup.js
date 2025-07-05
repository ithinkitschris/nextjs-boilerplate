import { useEffect, useRef, useState } from 'react';
import { useBrowser } from '../context/BrowserContext';

export const useVideoCleanup = (videoRef) => {
  useEffect(() => {
    const video = videoRef.current;
    
    return () => {
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
  }, [videoRef]);
};

export const useVideoOptimization = (videoRef, src, options = {}) => {
  const { isMobile, browserType } = useBrowser();
  const [isInViewport, setIsInViewport] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hidePoster, setHidePoster] = useState(false);
  const [hasBeenLoaded, setHasBeenLoaded] = useState(false);
  const observerRef = useRef(null);
  const originalSrc = useRef(src);
  const safariTimeoutRef = useRef(null);
  const unloadTimeoutRef = useRef(null);
  
  const {
    rootMargin = isMobile ? '200px' : '50px',
    threshold = 0.1,
    autoPlay = true,
    useCache = true,
    unloadDelay, // No default here - received from Video component
  } = options;

  // Load video
  const loadVideo = () => {
    const video = videoRef.current;
    if (video && !isLoaded && originalSrc.current) {
      if (!video.src || video.src !== originalSrc.current) {
        video.src = originalSrc.current;
        video.load();
      }
      setIsLoaded(true);
      setHasBeenLoaded(true);
    }
  };

  // Unload video
  const unloadVideo = () => {
    const video = videoRef.current;
    if (video && isLoaded) {
      video.pause();
      
      // Clear Safari timeout
      if (safariTimeoutRef.current) {
        clearTimeout(safariTimeoutRef.current);
        safariTimeoutRef.current = null;
      }
      
      if (useCache && hasBeenLoaded) {
        video.currentTime = 0;
      } else {
        video.removeAttribute('src');
        video.load();
        setHasBeenLoaded(false);
      }
      
      setIsLoaded(false);
      setHidePoster(false);
    }
  };

  // Video event listeners - Safari-optimized
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlaying = () => {
      // Clear any existing timeout
      if (safariTimeoutRef.current) {
        clearTimeout(safariTimeoutRef.current);
      }
      
      // For Safari, use a short delay after playing event
      const delay = browserType === 'safari' ? 200 : 100;
      
      safariTimeoutRef.current = setTimeout(() => {
        // Double-check that video is still playing and has progressed
        if (!video.paused && video.currentTime > 0) {
          setHidePoster(true);
        }
        safariTimeoutRef.current = null;
      }, delay);
    };

    const handlePause = () => {
      if (safariTimeoutRef.current) {
        clearTimeout(safariTimeoutRef.current);
        safariTimeoutRef.current = null;
      }
      setHidePoster(false);
    };

    const handleEnded = () => {
      if (safariTimeoutRef.current) {
        clearTimeout(safariTimeoutRef.current);
        safariTimeoutRef.current = null;
      }
      setHidePoster(false);
    };

    const handleLoadStart = () => {
      if (safariTimeoutRef.current) {
        clearTimeout(safariTimeoutRef.current);
        safariTimeoutRef.current = null;
      }
      setHidePoster(false);
    };

    const handleError = () => {
      if (safariTimeoutRef.current) {
        clearTimeout(safariTimeoutRef.current);
        safariTimeoutRef.current = null;
      }
      setHidePoster(false);
    };

    video.addEventListener('playing', handlePlaying);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('error', handleError);
      
      if (safariTimeoutRef.current) {
        clearTimeout(safariTimeoutRef.current);
        safariTimeoutRef.current = null;
      }
    };
  }, [browserType]);

  // Intersection Observer
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const inViewport = entry.isIntersecting;
        setIsInViewport(inViewport);
        
        if (inViewport) {
          // Cancel any pending unload when entering viewport
          if (unloadTimeoutRef.current) {
            clearTimeout(unloadTimeoutRef.current);
            unloadTimeoutRef.current = null;
          }
          loadVideo();
        } else {
          // Delay unloading when leaving viewport
          if (unloadTimeoutRef.current) {
            clearTimeout(unloadTimeoutRef.current);
          }
          
          unloadTimeoutRef.current = setTimeout(() => {
            if (!isInViewport) {
              unloadVideo();
            }
            unloadTimeoutRef.current = null;
          }, unloadDelay);
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
      if (unloadTimeoutRef.current) {
        clearTimeout(unloadTimeoutRef.current);
        unloadTimeoutRef.current = null;
      }
    };
  }, [rootMargin, threshold, isInViewport, unloadDelay]);

  // Auto-play
  useEffect(() => {
    const video = videoRef.current;
    if (video && isLoaded && isInViewport && autoPlay) {
      video.play().catch(() => {
        // Ignore autoplay errors
      });
    }
  }, [isLoaded, isInViewport, autoPlay]);

  // Update src when prop changes
  useEffect(() => {
    if (src !== originalSrc.current) {
      originalSrc.current = src;
      setHasBeenLoaded(false);
      setHidePoster(false);
      
      if (safariTimeoutRef.current) {
        clearTimeout(safariTimeoutRef.current);
        safariTimeoutRef.current = null;
      }
      
      if (unloadTimeoutRef.current) {
        clearTimeout(unloadTimeoutRef.current);
        unloadTimeoutRef.current = null;
      }
      
      if (isInViewport) {
        loadVideo();
      }
    }
  }, [src, isInViewport]);

  // Cleanup
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
      
      if (safariTimeoutRef.current) {
        clearTimeout(safariTimeoutRef.current);
        safariTimeoutRef.current = null;
      }
      
      if (unloadTimeoutRef.current) {
        clearTimeout(unloadTimeoutRef.current);
        unloadTimeoutRef.current = null;
      }
    };
  }, []);

  return {
    isInViewport,
    isLoaded,
    hidePoster,
    hasBeenLoaded
  };
};
