import React from 'react';

const CornerArrow = ({ className = '' }) => {
  return (
    <button 
      className={`
        absolute top-0.5 right-0.5 md:top-2 md:right-2 z-20
        p-1.5 m-1 md:scale-125
        rounded-full border-1.5 text-white border-transparent
        group-hover:text-black group-hover:glass group-hover:bg-white/95
        group-hover:border-white group-hover:scale-[150%] 
        group-hover:m-3 md:group-hover:m-4 
        group-hover:p-0.5 group-hover:px-1
        transition-all duration-200
        ${className}
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="2 2 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path 
          d="M7 17L17 7"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
        />
        <path d="M7 7h10v10" />
      </svg>
    </button>
  );
};

export default CornerArrow; 