import { useRef, useEffect } from 'react';
import { useVideoOptimization } from '../hooks/useVideoCleanup';
import { useVideoContext } from '../context/VideoContext';

const Video = ({ 
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
  unloadDelay = 4000, // 4 seconds delay before unloading when leaving viewport
  videoId,
  ...props 
}) => {
  const videoRef = useRef(null);
  const { registerVideo, unregisterVideo, markVideoLoaded, markVideoUnloaded } = useVideoContext();
  
  const { isLoaded, hidePoster, hasBeenLoaded } = useVideoOptimization(videoRef, src, {
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
        autoPlay={false}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        loading={loading}
        preload={preload}
        {...props}
      >
        {isLoaded && src && <source src={src} type="video/mp4" />}
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
          autoPlay={false}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          loading={loading}
          preload={preload}
          {...props}
        >
          {isLoaded && src && <source src={src} type="video/mp4" />}
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
        autoPlay={false}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        loading={loading}
        preload={preload}
        {...props}
      >
        {isLoaded && src && <source src={src} type="video/mp4" />}
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

export default Video;