'use client'

const CarouselVideo = ({ src, poster, className = "" }) => {
  return (
    <div className="rounded-3xl w-full col-span-full h-[760px] relative overflow-hidden border-l-2 border-t-2 border-white/0">
      <div className="absolute inset-0 rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_10px_0px_rgba(255,255,255,0.8)] mix-blend-overlay pointer-events-none z-10"/>
      <video 
        src={src}
        className={`rounded-3xl w-full h-full object-cover ${className}`}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      />
    </div>
  );
};

export default CarouselVideo; 