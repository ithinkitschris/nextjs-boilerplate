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
    <div 
      className="absolute z-40 pl-10 pt-6 w-[300px] h-[var(--height)] text-white group-hover:bg-white/20 saturate-200 dark:group-hover:bg-transparent
        backdrop-blur-none group-hover:backdrop-blur-3xl rounded-3xl group-hover:shadow-standard transition-all duration-300
        group-hover:scale-95 group-hover:ml-2.5 group-hover:w-[var(--hover-width)]"
      style={{ '--hover-width': hoverWidth, '--height': height }}
      
    >
      {/* Number */}
      <button className="font-mono text-base tracking-tight -ml-1.5 p-2 h-6 rounded-full flex items-center justify-center border border-white mb-2 transition group-hover:bg-white group-hover:text-black group-hover:scale-90">
        {number}
      </button>

      {/* Corner Arrow */}
      <button 
        className={`absolute top-7 right-7 font-medium text-lg tracking-tighter p-1.5 rounded-full mt-0.5
        flex items-center justify-center border-1 border-white text-white cursor-pointer opacity-0 group-hover:opacity-100
        group-hover:bg-white group-hover:text-black group-hover:scale-110 group-hover:-m-2 transition-all duration-300`}>
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
      <h1 className={`text-4.5xl group-hover:text-6xl font-medium tracking-tighter leading-tighter mb-1 transition-all duration-300 -ml-1 ${hideTitle ? 'opacity-0 group-hover:opacity-100' : ''}`}>
        {title}
      </h1>

      {/* Subtitle */}
      <h1 className="text-base font-medium tracking-tight mt-5 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {subtitle}
      </h1>

      {/* Description */}
      <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[90%]">
        {description}
      </p>

      {/* Role and Skills */}
      <div className="col-span-3">
        {role && (
          <div className="absolute bottom-11 -ml-1 gap-[30px] tracking-tight flex
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <div className="font-semibold">Role:</div>   
            <p>{role}</p>
          </div>
        )}

        <div className={`absolute bottom-5 -ml-1 gap-5 tracking-tight flex
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}>
          <div className="font-semibold mr-1">Skills:</div>   
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideContainer; 