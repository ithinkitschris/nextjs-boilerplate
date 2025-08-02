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
            {showHeader && (
                <div 
                    key={`${header}-header`} 
                    className={`font-medium tracking-[-0.2pt] text-xs md:text-[12pt] mt-32 md:mt-72 mb-2 col-span-full border-1 border-black/20 dark:border-white/50 p-0.5 rounded-full px-2 ${headerClassName}`}
                >
                    {header}
                </div>
            )}
            {showTitle && (
                <div 
                    key={`${header}-title`} 
                    className={`font-medium tracking-[-1.5pt] text-5xl md:text-[58pt] -mt-1 mb-3 col-span-full leading-[95%] w-[80%] md:w-2/3 ml-1.5 md:ml-2 ${titleClassName}`}
                >
                    {title}
                </div>
            )}
        </>
    );
} 