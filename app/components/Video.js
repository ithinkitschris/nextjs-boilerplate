import { useRef, useEffect } from 'react';
import { useVideoCleanup } from '../hooks/useVideoCleanup';
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
  const { registerVideo, unregisterVideo } = useVideoContext();
  
  useVideoCleanup(videoRef);

  useEffect(() => {
    if (videoId) {
      registerVideo(videoId);
      return () => unregisterVideo(videoId);
    }
  }, [videoId, registerVideo, unregisterVideo]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      poster={poster}
      loading={loading}
      {...props}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;