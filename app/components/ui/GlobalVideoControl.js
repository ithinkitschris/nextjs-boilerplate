'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';
import { useVideoContext } from '../../context/VideoContext';
import { useBrowser } from '../../context/BrowserContext';
import { motion } from 'framer-motion';

const GlobalVideoControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasVideos, setHasVideos] = useState(false);
  const { isGloballyPaused, setGlobalPause } = useVideoContext();
  const { browserType } = useBrowser();
  const intervalRef = useRef(null);

  // Get all video elements in the DOM
  const getAllVideos = useCallback(() => {
    if (typeof window === 'undefined') return [];
    return Array.from(document.querySelectorAll('video'));
  }, []);

  // Check if any videos are currently playing
  const checkPlayingState = useCallback(() => {
    const videos = getAllVideos();
    if (videos.length === 0) {
      setHasVideos(false);
      setIsPlaying(false);
      return;
    }
    
    setHasVideos(true);
    // If globally paused, show pause icon (button will play)
    if (isGloballyPaused) {
      setIsPlaying(false);
      return;
    }
    
    const anyPlaying = videos.some(video => 
      !video.paused && 
      !video.ended && 
      video.readyState > 2
    );
    setIsPlaying(anyPlaying);
  }, [getAllVideos, isGloballyPaused]);

  // Play all videos
  const playAllVideos = useCallback(async () => {
    const videos = getAllVideos();
    if (videos.length === 0) return;

    const playPromises = videos.map(async (video) => {
      try {
        if (video.readyState >= 2) { // HAVE_CURRENT_DATA or higher
          await video.play();
        }
      } catch (error) {
        // Ignore play errors (e.g., autoplay restrictions)
        console.debug('Video play failed:', error);
      }
    });

    await Promise.allSettled(playPromises);
    checkPlayingState();
  }, [getAllVideos, checkPlayingState]);

  // Pause all videos
  const pauseAllVideos = useCallback(() => {
    const videos = getAllVideos();
    if (videos.length === 0) return;

    videos.forEach((video) => {
      try {
        video.pause();
      } catch (error) {
        console.debug('Video pause failed:', error);
      }
    });

    checkPlayingState();
  }, [getAllVideos, checkPlayingState]);

  // Toggle play/pause
  const handleToggle = useCallback(() => {
    if (isGloballyPaused || !isPlaying) {
      // Resume: clear global pause and play all videos
      setGlobalPause(false);
      playAllVideos();
    } else {
      // Pause: set global pause and pause all videos
      setGlobalPause(true);
      pauseAllVideos();
    }
  }, [isPlaying, isGloballyPaused, playAllVideos, pauseAllVideos, setGlobalPause]);

  // Check video state periodically and on mount
  useEffect(() => {
    // Initial check
    checkPlayingState();

    // Set up interval to check state periodically
    intervalRef.current = setInterval(() => {
      checkPlayingState();
    }, 500); // Check every 500ms

    // Listen for video play/pause events
    const videos = getAllVideos();
    const handlePlay = () => {
      // If globally paused, immediately pause any video that tries to play
      if (isGloballyPaused) {
        videos.forEach(video => {
          if (!video.paused) {
            video.pause();
          }
        });
      }
      checkPlayingState();
    };
    const handlePause = () => checkPlayingState();

    videos.forEach((video) => {
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handlePause);
    });

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      videos.forEach((video) => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handlePause);
      });
    };
  }, [checkPlayingState, getAllVideos, isGloballyPaused]);

  // Re-check when videos are added/removed (using MutationObserver)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new MutationObserver(() => {
      checkPlayingState();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [checkPlayingState]);

  // Don't render if no videos exist
  if (!hasVideos) {
    return null;
  }

  return (
    <motion.div
      className="fixed bottom-3.5 md:bottom-6 right-4 md:right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 24
      }}
    >
      <motion.button
        onClick={handleToggle}
        tabIndex={-1}
        className={`
          transition-all 
          text-center 
          rounded-full 
          cursor-pointer
          p-3
          bg-background 
          dark:bg-transparent 
          dark:text-white
          shadow-glass-border-xs md:glass
          border-transparent 
          md:dark:hover:border-white 
          md:dark:hover:border-1
          md:hover:bg-foreground 
          md:dark:hover:bg-transparent 
          md:hover:text-white 
          md:hover:scale-95
          flex items-center justify-center
          ${browserType === 'chrome' 
            ? '' 
            : browserType === 'safari' 
              ? 'backdrop-blur-3xl' 
              : browserType === 'firefox' 
                ? 'backdrop-blur-3xl' 
                : 'backdrop-blur-3xl'
          }
          md:dark:border-white/25
        `}
        style={browserType === 'chrome' ? {
             backdropFilter: 'blur(1.25px) url(#backdrop-distortion)',
        } : {}}
        whileHover={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 24
        }}
        aria-label={isPlaying ? 'Pause all videos' : 'Play all videos'}
      >
        {isPlaying ? (
          <PauseIcon className="h-5 w-5" />
        ) : (
          <PlayIcon className="h-5 w-5" />
        )}
      </motion.button>
    </motion.div>
  );
};

export default GlobalVideoControl;

