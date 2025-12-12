'use client';

export default function ResumeSectionHeader({ 
    header, 
    title, 
    className = "", 
    headerClassName = "", 
    titleClassName = "",
    showHeader = true,
    showTitle = true
}) {
    return (
        <>
            {showHeader && header && (
                <div 
                    key={`${header}-header`} 
                    className={`font-medium tracking-[-0.2pt] text-xs md:text-[12pt]  mb-2 col-span-full border-1 border-black/20 dark:border-white/50 p-0.5 rounded-full px-2 mx-[4%] md:mx-0 ${headerClassName}`}
                >
                    {header}
                </div>
            )}
            {showTitle && (
                <div 
                    key={`${header}-title`} 
                    className={`font-medium tracking-[-1.5pt] text-6xl md:text-[58pt] -mt-1 mb-3 col-span-full leading-[95%] w-[80%] md:w-2/3 md:ml-2 mx-[3.5%] md:mx-0 ${titleClassName}`}
                >
                    {title}
                </div>
            )}
        </>
    );
} 