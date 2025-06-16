'use client'

const SideContainer = ({
  number,
  title,
  subtitle,
  description,
  role,
  skills,
  hoverWidth = "430px",
  height = "760px",
  hideTitle = false,
}) => {
  return (
    <>

    {/* SVG Filter Definition */}
    <svg width="0" height="0" style={{ position: 'absolute' }}>
      <defs>
        <filter
          id="backdrop-distortion-sidecontainer"
          x="0" y="0" width="100%" height="100%"
        >
          <feImage
            href="/displace-map.png"
            x="0" y="0"  
            preserveAspectRatio="none"
          />

          <feDisplacementMap
            in="SourceGraphic"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>

    <div 
      className={`
        absolute z-30 pl-6 pt-4 md:pl-10 md:pt-6 w-full md:w-[300px] h-full md:h-[var(--height)] 
        text-white border-white/0 rounded-3xl transition-all duration-300
        
        md:group-hover:bg-white/20 saturate-200 dark:md:group-hover:bg-transparent
        md:group-hover:glass-sidecontainer md:group-hover:backdrop-blur-3xl
        md:group-hover:scale-95 md:group-hover:ml-2.5 md:group-hover:w-[var(--hover-width)]
      `}
      style={{ 
        '--hover-width': hoverWidth, 
        '--height': height
      }}
    >

      {/* Number */}
      <button 
        className="
          scale-100 font-mono text-base tracking-tight mt-1 glass
          md:mt-0 md:-ml-1 p-2 h-6 rounded-full 
          flex items-center justify-center border-1.5 border-white mb-2 
          transition-all duration-200
          md:group-hover:bg-white md:group-hover:text-black 
          md:group-hover:scale-90 md:group-hover:ml-0
          md:group-hover:bg-white/90 drop-shadow-md"
      >
        {number}
      </button>

      {/* Corner Arrow */}
      <button 
        className={`absolute top-7 right-7 font-medium text-lg tracking-tighter p-1.5 rounded-full mt-0.5 backdrop-blur-3xl saturate-200 drop-shadow-md
        flex items-center justify-center text-white cursor-pointer opacity-0 md:group-hover:opacity-100
        border-b-1 border-r-1 border-white md:group-hover:bg-white/95
      md:group-hover:text-black md:group-hover:scale-110 md:group-hover:-m-2 transition-all duration-300`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="2 2 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4">
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </button>

      {/* Title */}
      <h1 
        className={`
          absolute bottom-11 md:static ml-2.5 md:ml-0
          text-4xl md:text-4.5xl md:group-hover:text-6xl 
          font-medium tracking-tighter leading-tighter 
          -mt-1 md:mt-0 mb-1 w-2/3 md:w-[90%]
          transition-all duration-300 
          ${hideTitle ? 'opacity-0 md:group-hover:opacity-100' : ''}
        `}
      >
        <span className="drop-shadow-sm">{title}</span>
      </h1>

      {/* Subtitle */}
      <h1 className="absolute md:static bottom-3 ml-3 md:ml-0 md:bottom-auto text-[8.5pt] md:text-base font-normal md:font-medium tracking-normal md:tracking-tight mt-5 mb-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 drop-shadow">
        {subtitle}
      </h1>

      {/* Description */}
      <p className="opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 w-[90%]">
        {description}
      </p>

      {/* Role and Skills */}
      <div className="col-span-3">
        {role && (
          <div className="absolute bottom-11 -ml-1 gap-[30px] tracking-tight flex
            opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <div className="font-semibold">Role:</div>   
            <p>{role}</p>
          </div>
        )}

        <div className={`absolute bottom-5 -ml-1 gap-5 tracking-tight flex
          opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}>
          <div className="font-semibold mr-1">Skills:</div>   
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
      </div>

    

    </div>
    </>
  );
};


export default SideContainer; 