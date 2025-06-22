import { motion } from "framer-motion";

const ContentGridItem = ({
  videoSrc,
  posterSrc,
  title,
  subtitle,
  className = "",
  variants,
  videoId
}) => {
  const Video = videoId ? require('./Video').default : 'video';
  const videoProps = videoId ? { videoId } : { autoPlay: true, muted: true, loop: true, playsInline: true, loading: "lazy" };

  return (
    <motion.div className="relative">
      <Video 
        src={videoSrc}
        className={`rounded-xl md:rounded-2xl w-full h-auto object-cover ${className}`}
        poster={posterSrc}
        {...videoProps}
        variants={variants}
      />

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