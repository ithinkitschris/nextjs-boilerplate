const DocumentationButton = () => {

    return(
        <a href="https://hissing-sphere-1e7.notion.site/Portfolio-Website-127a92ab668680ed91ddd0619057466f"
              className="
              group transition-all duration-300 ease-in-out backdrop-blur-lg
              p-2 px-3 rounded-full  border-1.5 border-foreground text-foreground hover:border-transparent
              hover:bg-foreground hover:text-background dark:hover:border-transparent dark:bg-transparent
              dark:hover:bg-foreground
              text-base font-semibold tracking-tight
              overflow-hidden whitespace-nowrap z-50
              w-19 hover:w-62 fixed bottom-8 right-8
              font-[family-name:var(--font-geist-sans)]"
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