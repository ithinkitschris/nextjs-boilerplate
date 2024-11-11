const DocumentationButton = () => {

    return(
        <a href="https://hissing-sphere-1e7.notion.site/Portfolio-Website-127a92ab668680ed91ddd0619057466f"
              className="
              group transition-all duration-300 ease-in-out
              p-2 px-3 rounded-full border-1.5 border-foreground text-foreground 
              hover:bg-foreground hover:text-background
              text-base font-bold tracking-tight
              overflow-hidden whitespace-nowrap
              w-18 hover:w-62"
              target="_blank"
              rel="noopener noreferrer"
              >
              Follow 
              <span className="opacity-0 group-hover:opacity-100 transition-opacity ease-in-out ml-1">
                my documentation here 
              </span>
              </a>
    )
}

export default DocumentationButton;