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
  videoId,
  ...props 
}) => {
  const videoRef = useRef(null);
  const { registerVideo, unregisterVideo, markVideoLoaded, markVideoUnloaded } = useVideoContext();
  
  const { isLoaded } = useVideoOptimization(videoRef, src, {
    autoPlay,
    loop,
    muted,
    playsInline,
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

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={false}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      poster={poster}
      loading={loading}
      {...props}
    >
      {isLoaded && <source src={src} type="video/mp4" />}
    </video>
  );
};

export default Video;