import { motion } from "framer-motion";
import { lazy, Suspense } from 'react';

const Video = lazy(() => import('./Video'));

const ContentGridItem = ({
  videoSrc,
  posterSrc,
  title,
  subtitle,
  className = "",
  variants,
  videoId
}) => {
  const VideoComponent = videoId ? Video : 'video';
  const videoProps = videoId ? { videoId } : { autoPlay: true, muted: true, loop: true, playsInline: true, loading: "lazy" };

  return (
    <motion.div className="relative">
      <Suspense fallback={<div className={`rounded-xl md:rounded-2xl w-full h-auto ${className}`} />}>
        <VideoComponent 
          src={videoSrc}
          className={`rounded-xl md:rounded-2xl w-full h-auto object-cover ${className}`}
          poster={posterSrc}
          {...videoProps}
          variants={variants}
        />
      </Suspense>

      {/* Gradient */}
      <div className="bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 w-full h-1/4 rounded-b-2xl md:rounded-b-3xl"/>

      {/* Title */}
      <div className="absolute bottom-0 w-full text-white tracking-tight font-medium text-[8px] md:text-[14px] md:p-3 pl-2 pb-0.5">
        <h1>
          {subtitle && <span className="opacity-50">{subtitle}</span>}
          {title}
        </h1>
      </div>
    </motion.div>
  );
};

export default ContentGridItem; 