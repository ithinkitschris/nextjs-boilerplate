import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const DropdownButton = ({ 
  label, 
  isOpen, 
  onClick, 
  className = "", 
  buttonClassName = "",
  iconClassName = "h-4 w-4"
}) => {
  return (
    <div 
      className={`flex justify-between cursor-pointer ${className}`} 
      onClick={onClick}
    >
      <div 
        className={`flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 
        transition-all duration-200 md:group-hover:bg-foreground md:group-hover:text-background
        rounded-full tracking-tight font-medium text-sm whitespace-nowrap ${buttonClassName} 
        ${isOpen ? 'bg-foreground text-background scale-96' : ''}`}
      >
        {label}
      </div>

      <div 
        className={`flex items-center justify-center border-0 border-black dark:border-white/50 
        transition-all duration-200 md:group-hover:bg-foreground md:group-hover:text-background
        rounded-full mb-2 px-1 ${isOpen ? 'bg-foreground text-background scale-96' : ''}`}
      >
        {isOpen ? (
          <ChevronUpIcon className={iconClassName} />
        ) : (
          <ChevronDownIcon className={iconClassName} />
        )}
      </div>
    </div>
  );
};

export default DropdownButton; 