'use client'

const CarouselVideo = ({ src, poster, className = "" }) => {
  return (
    <div className="rounded-3xl w-full col-span-full h-[520px] md:h-[760px] relative overflow-hidden border-l-2 border-t-2 border-white/0">

    {/* Glass Border */}
    <div className="absolute inset-0 rounded-3xl shadow-[0px_2px_30px_rgba(0,0,0,0.3),inset_0px_0px_10px_0px_rgba(255,255,255,0.8)] mix-blend-overlay pointer-events-none z-20"/>

    {/* Dark Gradient */}
    {/* <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent z-20 pointer-events-none h-[30%]"/> */}


    {/* Blur */}
    <div 
      className="md:hidden absolute bottom-0 left-0 right-0 h-[60%] z-10 pointer-events-none backdrop-blur-3xl rounded-b-3xl saturate-150 brightness-110 -mb-[0.5px]"
      style={{
        maskImage: 'linear-gradient(to top, black 0%, black 18%, transparent 80%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to top, black 0%, black 18%, transparent 80%, transparent 100%)'
      }}
    />

      {/* <div className="md:hidden absolute bottom-1.5 left-0 right-0 h-[26%] backdrop-blur-md rounded-[1.5rem] scale-93 glass-sm"/> */}
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