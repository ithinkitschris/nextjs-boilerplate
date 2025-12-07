'use client';

import { useRef, useEffect } from 'react';
import { useVideoOptimization } from '../../hooks/useVideoCleanup';
import { useVideoContext } from '../../context/VideoContext';
import { getOptimizedVideoPath, getOptimizedVideoSources } from '../../utils/videoOptimizer';

const OptimizedVideo = ({ 
  src, 
  className = "", 
  autoPlay = true, 
  loop = true, 
  muted = true, 
  playsInline = true,
  poster = "",
  loading = "lazy",
  preload = "metadata",
  useCache = true,
  unloadDelay = 3000,
  videoId,
  useOptimized = true, // Toggle to use optimized videos
  fallbackToOriginal = true, // Fallback to original video if optimized fails
  ...props 
}) => {
  const videoRef = useRef(null);
  const { registerVideo, unregisterVideo, markVideoLoaded, markVideoUnloaded } = useVideoContext();
  
  // Check if the src is already an optimized path
  const isAlreadyOptimized = src.includes('/optimized/');
  
  // Get optimized video sources
  const optimizedSources = useOptimized && !isAlreadyOptimized ? getOptimizedVideoSources(src) : [{ src, type: 'video/mp4' }];
  const primarySrc = optimizedSources[0].src;
  
  // If fallback is enabled and we're using optimized sources, ensure original is included
  const finalSources = fallbackToOriginal && useOptimized && !isAlreadyOptimized
    ? [...optimizedSources, { src, type: 'video/mp4' }]
    : optimizedSources;
  
  const { isLoaded, hidePoster } = useVideoOptimization(videoRef, primarySrc, {
    autoPlay,
    loop,
    muted,
    playsInline,
    useCache,
    unloadDelay,
    rootMargin: '100px',
    threshold: 0.1
  });

  useEffect(() => {
    if (videoId) {
      registerVideo(videoId);
      return () => unregisterVideo(videoId);
    }
  }, [videoId, registerVideo, unregisterVideo]);

  useEffect(() => {
    if (videoId) {
      if (isLoaded) {
        markVideoLoaded(videoId);
      } else {
        markVideoUnloaded(videoId);
      }
    }
  }, [isLoaded, videoId, markVideoLoaded, markVideoUnloaded]);

  // Check if the video has absolute or fixed positioning
  const hasAbsolutePositioning = className.includes('absolute') || className.includes('fixed');

  // If no poster, render video directly without container
  if (!poster) {
    return (
              <video
          ref={videoRef}
          className={className}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          loading={loading}
          preload={preload}
          tabIndex={-1}
          {...props}
        >
        {isLoaded && finalSources.map((source, index) => (
          <source key={index} src={source.src} type={source.type} />
        ))}
      </video>
    );
  }

  // If poster exists and video has absolute positioning, render video with original className
  if (hasAbsolutePositioning) {
    return (
      <>
        <video
          ref={videoRef}
          className={className}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          loading={loading}
          preload={preload}
          tabIndex={-1}
          {...props}
        >
          {isLoaded && finalSources.map((source, index) => (
            <source key={index} src={source.src} type={source.type} />
          ))}
        </video>
        
        {/* CSS overlay poster image positioned absolutely */}
        {!hidePoster && (
          <div 
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{ 
              backgroundImage: `url(${poster})`,
              zIndex: 1
            }}
          />
        )}
      </>
    );
  }

  // If poster exists but no absolute positioning, use container approach
  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        loading={loading}
        preload={preload}
        tabIndex={-1}
        {...props}
      >
        {isLoaded && finalSources.map((source, index) => (
          <source key={index} src={source.src} type={source.type} />
        ))}
      </video>
      
      {/* CSS overlay poster image for Safari compatibility */}
      {!hidePoster && (
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ 
            backgroundImage: `url(${poster})`,
            zIndex: 1
          }}
        />
      )}
    </div>
  );
};

export default OptimizedVideo; 