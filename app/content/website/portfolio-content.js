// Auto-generated from markdown file
// This file contains the parsed portfolio website content

export const portfolioWebsiteContent = {
  "sections": [
    {
      "chapterNumber": "01.",
      "chapterTitle": "Portfolio Website",
      "subsections": [
        {
          "title": "",
          "content": "This here will be the entire documentation of my process into building a portfolio website from the ground up using a combination of **React** and **Next.js.** It is exhaustive, as such I am implementing a legend for navigating my documentation below.\n\nI’d recommend jumping straight to [Website Development (Front-end)](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f.md).\nIf you enjoy a slow gruelling boil however, feel free to dive into [Readings & Learnings](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f.md)",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "*(Updated for June 2025)*",
          "content": "If you would like to skip the entire part where I built [Portfolio Website v1 (2024)](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f.md)  from scratch and are interested in the iteration upon it for [Portfolio Website v2 (2025)](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f.md)  with exploration and incorporation of ‘vibe coding’ and rapid prototyping into my process, jump straight to [**Cursor**](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f.md) \n\nThe sections are **written and formatted chronologically** in order of progress from top to bottom, with legends provided below:\n\n- Unformatted – Painful, slog work.\n- **Bolded** – Significant learnings.\n- ***** – Breakthroughs.",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "02.",
      "chapterTitle": "Portfolio Website v1 (2024)",
      "subsections": [],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "03.",
      "chapterTitle": "**I asked ChatGPT**",
      "subsections": [
        {
          "title": "",
          "content": "- **Prompt**\n\n    > I intend to build a portfolio website from scratch. I have little to no knowledge of building a website from scratch but I am keen to utilise React, GSAP, Next.js and figma. Could you give me some starter tips right from the beginning?\n    > \n- **Answer**\n\n    Building a portfolio website from scratch using React, GSAP, Next.js, and Figma is a great way to showcase your skills. Here's a roadmap to help you get started:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "04.",
      "chapterTitle": "1. Plan and Design (Figma)",
      "subsections": [
        {
          "title": "",
          "content": "- **Set Goals:** Define the purpose of your portfolio. Is it to showcase projects, highlight skills, or attract employers?\n    - **Wireframes & Mockups:** Use Figma to design your website layout. Focus on key sections like:\n        - Introduction (about me)\n        - Project showcase\n        - Skills & technologies\n        - Contact information\n    - **Responsive Design:** Ensure your design works well on both desktop and mobile devices.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "05.",
      "chapterTitle": "2. Set Up Your Development Environment",
      "subsections": [
        {
          "title": "",
          "content": "- **Install Node.js & npm**: Ensure you have Node.js and npm installed to manage dependencies.\n        - [Node.js download](https://nodejs.org/)\n    - **Code Editor**: Use an editor like VS Code for better productivity. Install relevant extensions for React, Next.js, and GSAP.\n        - [VS Code download](https://code.visualstudio.com/)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "06.",
      "chapterTitle": "3. Learn the Basics of HTML, CSS, and JavaScript",
      "subsections": [
        {
          "title": "",
          "content": "- **HTML & CSS**: Even though you'll use React for component building, you need basic knowledge of HTML and CSS for structuring and styling your site.\n    - **JavaScript ES6+**: Learn modern JavaScript features (e.g., arrow functions, promises, etc.).",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "07.",
      "chapterTitle": "4. **React Basics**",
      "subsections": [
        {
          "title": "",
          "content": "- **Functional Components**: Start by learning how to create functional components in React.\n    - **State Management**: Understand how to manage the state of components using `useState` and `useEffect`.\n\n    - **Props**: Learn how to pass data between components using props.\n    - **React Router**: Learn to create multiple pages for your site using React Router if needed.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "08.",
      "chapterTitle": "5. **Next.js Framework**",
      "subsections": [
        {
          "title": "",
          "content": "- **Pages and Routing**: Next.js simplifies routing. Create your portfolio pages (e.g., Home, Projects, About) by adding files in the `pages` directory.\n    - **Static Site Generation (SSG) and Server-Side Rendering (SSR)**: These are Next.js's main features. For a portfolio, SSG is usually preferred to load pages faster.\n    - **Styling in Next.js**: You can use CSS Modules, styled-components, or Tailwind CSS for styling in Next.js. Choose one and stick to it.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "09.",
      "chapterTitle": "6. **Integrating GSAP for Animations**",
      "subsections": [
        {
          "title": "",
          "content": "- **GSAP Basics**: Learn how to import and use GSAP for animations. You can animate elements like text, images, and buttons.\n    - **Trigger Animations**: Implement animations when a user scrolls or interacts with your portfolio sections (e.g., project hover effects, page transitions).\n    - **Optimizing Performance**: Be cautious of performance with heavy animations. GSAP has smooth performance, but testing is key.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "10.",
      "chapterTitle": "7. **Responsive Design**",
      "subsections": [
        {
          "title": "",
          "content": "- **Media Queries**: Ensure your site looks good on all devices (desktop, tablet, mobile) by using media queries.\n    - **Flexbox/Grid**: Use CSS Flexbox or Grid to create responsive layouts.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "11.",
      "chapterTitle": "8. **Deploy Your Website**",
      "subsections": [
        {
          "title": "",
          "content": "- **Vercel**: Since you're using Next.js, you can deploy your website easily on Vercel, which offers seamless integration with Next.js.\n        - [Vercel deployment](https://vercel.com/)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "12.",
      "chapterTitle": "Suggested Workflow:",
      "subsections": [
        {
          "title": "",
          "content": "1. **Figma**: Create the design and gather assets (images, icons, typography).\n    2. **Next.js**: Set up the project, define routes and pages.\n    3. **React Components**: Build reusable components (e.g., Navbar, Footer, ProjectCard).\n    4. **GSAP**: Implement animations where needed.\n    5. **Testing and Refining**: Test your site on different devices and browsers.\n    6. **Deploy**: Push your code to GitHub and deploy to Vercel.\n\n    Let me know if you need help with any of the steps!",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "13.",
      "chapterTitle": "Readings & Learnings",
      "subsections": [
        {
          "title": "",
          "content": "- **Mandatories** *(In learning order)*\n    - **React**\n        - 01. I asked ChatGPT\n            - to explain React.\n\n                > What is React used for? Could you give me a rundown assuming I have no prior knowledge whatsoever. I only have basic knowledge of HTML, CSS and Javascript.\n                >",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "14.",
      "chapterTitle": "What is **React**?",
      "subsections": [
        {
          "title": "",
          "content": "React is a **JavaScript library** (not a full framework) for building user interfaces (UIs), mainly for web applications. It helps you build fast, interactive, and dynamic web pages by breaking them down into small, reusable components.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "15.",
      "chapterTitle": "How is React different from basic HTML, CSS, and JavaScript?",
      "subsections": [
        {
          "title": "",
          "content": "With basic HTML, CSS, and JavaScript, you build web pages that can display static content and add some interactivity (like clicking a button or changing styles). But as the web becomes more interactive and apps get bigger, it becomes harder to manage and update your code efficiently.\n\n                Here’s where **React** comes in. It helps you:\n\n                1. **Break your UI into components**:\n                Instead of managing one giant HTML file, you can split your web page into smaller pieces called **components**. Each component handles its own appearance and behavior, which makes it easier to build and maintain complex UIs.\n                    - Example: You can have a `Header` component, a `Footer` component, a `Button` component, etc., all separate and reusable across different parts of your site.\n                2. **Keep your UI updated efficiently**:\n                React automatically updates the parts of the page that need to change without reloading the whole page, making it faster. It uses something called a **virtual DOM** (Document Object Model) to handle these changes efficiently.\n                3. **Write logic and UI together**:\n                In React, you combine your JavaScript logic with your HTML-like code (called JSX) to make it easier to handle dynamic data. Instead of updating your HTML manually with JavaScript, React dynamically changes the content based on data (called **state** and **props**) without you having to manually manipulate the DOM.\n                    - Example: If you have a button that shows a counter when clicked, React handles the counting logic and updates the number in the UI automatically.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "16.",
      "chapterTitle": "Key Concepts of React",
      "subsections": [
        {
          "title": "",
          "content": "1. **Components**:\n\n                    A React application is made up of components, which are like small building blocks of the UI. Each component is independent and can have its own logic and design.\n\n                    - Example of a simple React component:Here, `Welcome` is a component that outputs a heading.\n\n                        ```jsx\n                        jsx\n                        Copy code\n                        function Welcome() {\n                          return <h1>Hello, World!</h1>;\n                        }\n\n                        ```\n\n                2. **JSX (JavaScript XML)**:\n\n                    React uses JSX, a syntax that allows you to write HTML-like code inside JavaScript. It looks like HTML but can also include JavaScript logic.\n\n                    - Example:The `{name}` is JavaScript logic within the HTML-like JSX.\n\n                        ```jsx\n                        jsx\n                        Copy code\n                        const name = \"Alice\";\n                        const element = <h1>Hello, {name}!</h1>;\n\n                        ```\n\n                3. **State and Props**:\n                    - **State**: State is data that can change within a component. React uses state to manage the dynamic data of the application. When the state changes, React automatically re-renders the component.\n                        - Example: A button that changes a count:\n\n                            ```jsx\n                            jsx\n                            Copy code\n                            function Counter() {\n                              const [count, setCount] = useState(0);\n\n                              return (\n                                <div>\n                                  <p>You clicked {count} times</p>\n                                  <button onClick={() => setCount(count + 1)}>Click me</button>\n                                </div>\n                              );\n                            }\n\n                            ```\n\n                    - **Props (Properties)**: Props are inputs that you pass from one component to another. It’s how you pass data between components.\n                        - Example: Passing a name as a prop:\n\n                            ```jsx\n                            jsx\n                            Copy code\n                            function Greeting(props) {\n                              return <h1>Hello, {props.name}!</h1>;\n                            }\n\n                            function App() {\n                              return <Greeting name=\"Alice\" />;\n                            }\n\n                            ```\n\n                4. **Reactivity**:\n\n                    React automatically updates the UI when something (like state) changes, making sure the UI always matches the underlying data.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "17.",
      "chapterTitle": "Why use React?",
      "subsections": [
        {
          "title": "",
          "content": "- **Component-based structure**: It helps organize code into reusable, maintainable chunks.\n                - **Efficient updates**: React only updates parts of the page that change, making apps faster.\n                - **Big community and ecosystem**: React is widely used and has lots of libraries, tools, and community support.\n                - **Learn once, use anywhere**: React is used not just for websites, but for building mobile apps (React Native) and even desktop apps (Electron).",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "18.",
      "chapterTitle": "Putting it all together",
      "subsections": [
        {
          "title": "",
          "content": "With React, instead of building static web pages with HTML and CSS and handling interactions with JavaScript, you build **components** that are interactive, reusable, and self-contained. These components update dynamically as the data in your application changes.\n\n                Does that make sense so far? Let me know if you'd like more details on any part!\n\n            - to explain the difference between React as a JS library and Next.js as a framework.\n\n                > What is the difference between React as a javascript library and a framework like Next.js?\n                > \n\n                The key difference between **React** and a framework like **Next.js** lies in their scope and purpose. Let's break it down:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "19.",
      "chapterTitle": "**1. React (JavaScript Library)**",
      "subsections": [
        {
          "title": "",
          "content": "- **React** is a **library**, which means it provides tools to help you build user interfaces, but it doesn’t dictate how you should structure your entire project or handle other aspects of your web application (like routing or data fetching).\n                - **Focus**: React’s primary focus is on building reusable UI components. It helps you efficiently manage the state and update the user interface when that state changes. React by itself does not include:\n                    - Routing (how users move between different pages)\n                    - Server-side rendering (rendering pages on the server before sending them to the client)\n                    - API handling or data fetching\n                - **How it works**: React is all about components. It lets you build a UI by combining these small, independent building blocks (components), and it handles changes in your application’s data with its virtual DOM for efficient UI updates.\n                - **Flexibility**: React gives you a lot of freedom. Since it’s just a UI library, you have to choose and configure additional tools (like routing, server-side logic, etc.) yourself, which makes it more flexible but also potentially more complex for beginners.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "20.",
      "chapterTitle": "**2. Next.js (Framework built on React)**",
      "subsections": [
        {
          "title": "",
          "content": "- **Next.js** is a **framework** that extends React’s capabilities by adding tools and conventions to help you build full-fledged applications more easily. A framework is more opinionated—it provides solutions for handling various aspects of web development, such as routing, API handling, and server-side rendering.\n                - **Focus**: While React handles the front-end (UI), Next.js goes beyond that by providing built-in features like:\n                    - **File-based routing**: You don’t need to set up a routing library manually—Next.js automatically turns your files in the `pages` directory into routes.\n                    - **Server-side rendering (SSR)** and **static site generation (SSG)**: It allows you to choose whether you want your pages to be pre-rendered on the server (SSR) or statically generated at build time (SSG), improving SEO and performance.\n                    - **API routes**: You can create back-end APIs directly within the Next.js project, making it easier to handle both the front-end and back-end in one place.\n                    - **Built-in optimizations**: It offers features like image optimization, automatic code splitting (only loading the JavaScript you need for each page), and more.\n                - **How it works**: Next.js takes care of many things React doesn’t, so you can focus on building your app instead of configuring separate tools. It organizes your project into pages (which React doesn’t do on its own), manages routing out of the box, and allows for hybrid rendering (both client-side and server-side rendering).\n                - **Structured and opinionated**: Next.js provides a lot of the pieces you need for web development, which reduces flexibility but gives you a more complete solution for building apps. You don’t have to worry about picking libraries for routing or setting up SSR—it’s all built in.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "21.",
      "chapterTitle": "**Key Differences**",
      "subsections": [
        {
          "title": "",
          "content": "| Aspect | React | Next.js |\n                | --- | --- | --- |\n                | **Type** | UI Library | Full-fledged Framework |\n                | **Focus** | Building UI components | Building entire web applications |\n                | **Routing** | Requires a separate library (like React Router) | Built-in file-based routing |\n                | **Rendering** | Client-side rendering only by default | Supports server-side rendering (SSR), static generation (SSG), and client-side rendering |\n                | **Data Fetching** | Requires external libraries | Built-in support for data fetching methods like `getStaticProps`, `getServerSideProps` |\n                | **API Handling** | No built-in API routes | Built-in API routes |\n                | **Project Structure** | More flexible, you structure the app | More opinionated, specific structure (e.g., `pages` folder) |\n                | **SEO** | Requires additional setup for SSR or SSG | Better SEO out of the box with SSR and SSG |",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "22.",
      "chapterTitle": "Summary:",
      "subsections": [
        {
          "title": "",
          "content": "- **React** is a flexible library that helps you build user interfaces using components. It’s more minimal, leaving the choice of other tools up to you.\n                - **Next.js** is a framework that builds on React and provides additional features like routing, server-side rendering, and API handling, making it easier to develop complete web applications without having to configure everything from scratch.\n\n                Let me know if you'd like more detail on how they work together!\n\n        - **02. I attempt the React Documentation**\n\n            https://react.dev/learn/tutorial-tic-tac-toe\n\n            - 22 October\n\n                ![I love it. They added a note with steps to use my own local dev environment, this is perfect. I much prefer this with Node.js instead of cloud web editors.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image.png)\n\n                I love it. They added a note with steps to use my own local dev environment, this is perfect. I much prefer this with Node.js instead of cloud web editors.\n\n                ![Nice.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%201.png)\n\n                Nice.\n\n            - **26 October**\n                - **It’s 11:28pm.**\n\n                    I first started the Tic-Tac-Toe tutorial on Tuesday, October 22nd. I made it up to the point where I am able to input X into the respective squares and that the current board state is saved onto the parent `Board` component itself and not the `Square` component.\n\n                    - The code looks like this currently:\n\n                        ```jsx\n                        import { useState } from \"react\";\n\n                        function Square({ value, onSquareClick }) {\n                          // function handleClick() {\n                          //   console.log(\"clicked!\");\n                          //   setValue('X');\n                          // }\n\n                          return (\n                            <button className=\"square\" onClick={onSquareClick}>\n                              {value}\n                            </button>\n                          );\n                        }\n\n                        export default function Board() {\n                          const [squares, setSquares] = useState(Array(9).fill(null));\n                          const [xIsNExt, setXIsNext] = useState(true);\n\n                          function handleClick(i) {\n                            const nextSquares = squares.slice();\n                            if (xIsNExt) {\n                              nextSquares[i] = \"X\";\n                            }\n                            nextSquares[i] = \"X\";\n                            setSquares(nextSquares);\n                            console.log(\"Click!\");\n                          }\n\n                          return (\n                            <>\n                              <div>\n                                <h1>Test</h1>\n                              </div>\n\n                              <div className=\"board-row\">\n                                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />\n                                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />\n                                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />\n                              </div>\n                              <div className=\"board-row\">\n                                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />\n                                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />\n                                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />\n                              </div>\n                              <div className=\"board-row\">\n                                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />\n                                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />\n                                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />\n                              </div>\n                            </>\n                          );\n                        }\n                        ```\n\n\n                    I had immense difficulty understanding the relation between the `Board` and `Square` component and how they callback arguments between each other. I still do. But right now on the 26th October, after rereading the code and the below recap from the documentation, I realise that I potentially have a slight glimmer of understanding to how it works.\n\n                    <aside>\n                    <img src=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" alt=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" width=\"40px\" />\n\n                    1. Clicking on the upper left square runs the function that the `button` received as its `onClick` prop from the `Square`. The `Square` component received that function as its `onSquareClick` prop from the `Board`. The `Board` component defined that function directly in the JSX. It calls `handleClick` with an argument of `0`.\n                    2. The `squares` state of the `Board` component was updated, so the `Board` and all of its children re-render. This causes the `value` prop of the `Square` component with index `0` to change from `null` to `X`.\n                    3. `handleClick` uses the argument (`0`) to update the first element of the `squares` array from `null` to `X`.\n                    </aside>\n\n                    My current understanding is as so: The `Squre` component has an `onClick` function under it’s return. onClick is assigned to `onSquareClick` which is then fed as a prop to the `Board`. I still do not understand the syntax of JSX, but that’s for another time. There is a conditional attached to `onSquareClick` under `Board` which is the function`handleClick`, which was set up to assign “X” to the array value in `handleClick` as an argument. `onClick`, the value “X” is updated to the first element of the `squares` array as defined in the function `handleClick`, and this is because of the argument (`0`) defined.\n\n                    😵‍💫\n\n                    Moving on.\n\n                    <aside>\n                    <img src=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" alt=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" width=\"40px\" />\n\n                    > The DOM `<button>` element’s `onClick` attribute has a special meaning to React because it is a built-in component. For custom components like Square, the naming is up to you. You could give any name to the `Square`’s `onSquareClick` prop or `Board`’s `handleClick` function, and the code would work the same. In React, it’s conventional to use `onSomething` names for props which represent events and `handleSomething` for the function definitions which handle those events.\n                    > \n                    </aside>\n\n                    - I asked ChatGPT on what a ‘return’ in a function is.\n\n                        In this function, the `return` statement serves as an **early exit**. It immediately stops the function’s execution if the condition `squares[i]` is true.\n\n                        - **Purpose**: This line checks if the element at position `i` in `squares` already has a value. If `squares[i]` has been set (meaning it’s not `null` or `undefined`), `return` will stop the function right here.\n                        - **Effect**: The rest of the code won’t run if the square is already filled, preventing the player from marking an already occupied square with \"X\" or \"O\".\n\n                        In general, `return` in JavaScript functions:\n\n                        1. **Stops execution**: It ends the function’s execution immediately when called.\n                        2. **Optionally returns a value**: If you write `return someValue`, the function will output `someValue`. Here, `return;` simply stops the function without returning any specific value.\n\n                        In this case, it’s used just to stop execution when `squares[i]` has a value, ensuring a square can’t be marked twice.\n\n                - It’s 1:05am.",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "Game win condition function.",
          "content": "The documentation provided a `calculateWinner`function that checks to determine the win condition. It was pretty interesting and I wanted to delve a bit deeper to how it logically works.\n\n                    - **Code**\n\n                        ```jsx\n                        function calculateWinner(squares) {\n                          const lines = [\n                            [0, 1, 2],\n                            [3, 4, 5],\n                            [6, 7, 8],\n                            [0, 3, 6],\n                            [1, 4, 7],\n                            [2, 5, 8],\n                            [0, 4, 8],\n                            [2, 4, 6]\n                          ];\n                          for (let i = 0; i < lines.length; i++) {\n                            const [a, b, c] = lines [i];\n                            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){\n                              return squares[a];\n                            }\n                          }\n                          return null;\n                        }\n                        ```\n\n                    - I asked ChatGPT to explain\n\n                        This `calculateWinner` function determines if there's a winner in a game of Tic-Tac-Toe based on the current board state, represented by the `squares` array. Here’s a step-by-step breakdown of how it works:",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "23.",
      "chapterTitle": "Function Overview",
      "subsections": [
        {
          "title": "",
          "content": "- The function takes one parameter, `squares`, which is an array of 9 elements representing a Tic-Tac-Toe board.\n                            - Each element can be `\"X\"`, `\"O\"`, or `null` (indicating an empty square).\n                        - The goal is to check if any player (either `\"X\"` or `\"O\"`) has a winning combination (three identical symbols in a row, column, or diagonal).",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "24.",
      "chapterTitle": "Key Steps in the Function",
      "subsections": [
        {
          "title": "",
          "content": "1. **Define Winning Combinations**\n\n                            ```jsx\n                            javascript\n                            Copy code\n                            const lines = [\n                              [0, 1, 2],\n                              [3, 4, 5],\n                              [6, 7, 8],\n                              [0, 3, 6],\n                              [1, 4, 7],\n                              [2, 5, 8],\n                              [0, 4, 8],\n                              [2, 4, 6]\n                            ];\n\n                            ```\n\n                            - The `lines` array contains all possible winning combinations, represented as sets of indices within the `squares` array.\n                            - Each inner array (like `[0, 1, 2]`) represents a possible win (e.g., the top row).\n                        2. **Loop Through Winning Combinations**\n\n                            ```jsx\n                            javascript\n                            Copy code\n                            for (let i = 0; i < lines.length; i++) {\n                              const [a, b, c] = lines[i];\n\n                            ```\n\n                            - The function loops through each winning combination in `lines`.\n                            - In each iteration, it destructures `a`, `b`, and `c` from `lines[i]`, representing the indices of one possible win (e.g., `a = 0`, `b = 1`, `c = 2` for the top row).\n                        3. **Check for a Winner**\n\n                            ```jsx\n                            javascript\n                            Copy code\n                            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {\n                              return squares[a];\n                            }\n\n                            ```\n\n                            - This `if` condition checks three things:\n                                1. `squares[a]`: Ensures that the square at index `a` is not `null` (so we don't check empty rows).\n                                2. `squares[a] === squares[b]`: Verifies that the value at index `a` is the same as at index `b`.\n                                3. `squares[a] === squares[c]`: Confirms that the value at index `a` also matches the value at index `c`.\n                            - If all conditions are true, it means there’s a winning line (a row, column, or diagonal) filled by the same player (`\"X\"` or `\"O\"`).\n                            - The function then returns `squares[a]`, the symbol of the winning player.\n                        4. **Return `null` if No Winner Found**\n\n                            ```jsx\n                            javascript\n                            Copy code\n                            return null;\n\n                            ```\n\n                            - If none of the winning combinations match, the loop completes without finding a winner.\n                            - The function returns `null`, indicating there is no winner yet (the game is still in progress or tied).",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "25.",
      "chapterTitle": "Example Usage",
      "subsections": [
        {
          "title": "",
          "content": "Suppose `squares` represents the following board state:\n\n                        ```jsx\n                        javascript\n                        Copy code\n                        const squares = [\"X\", \"X\", \"X\", null, \"O\", null, \"O\", null, \"O\"];\n\n                        ```\n\n                        1. The function checks the top row (`[0, 1, 2]`), finds that all squares in this row contain `\"X\"`.\n                        2. It returns `\"X\"`, indicating that the player with `\"X\"` has won.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "26.",
      "chapterTitle": "Summary",
      "subsections": [
        {
          "title": "",
          "content": "The `calculateWinner` function:\n\n                        - Loops through all possible winning combinations.\n                        - Checks if any combination is filled with the same non-empty symbol.\n                        - Returns the symbol of the winner if found, or `null` if there’s no winner.\n\n                        This logic effectively determines if there’s a winner in a Tic-Tac-Toe game.\n\n\n                    I have followed the documentation down to the point where the game now works. I could understand the steps between the above and here fairly well. \n\n                    > Congratulations! You now have a working tic-tac-toe game. And you’ve just learned the basics of React too. So *you* are the real winner here. Here is what the code should look like:\n                    > \n\n                    I am a winner? Me??? \n\n                - It’s 1:25am.\n\n                    I’m 1/3 into the documentation on implementing a history feature to the game and it is extremely incomprehensible at this point. \n\n                    ![Is this even english??](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%202.png)\n\n                    Is this even english??\n\n                    I followed the refactoring of the code to a T from the React documentation and found myself at this screen (that I’ve seen too many times at this point). \n\n                    ![On second thoughts I also realised this was because of a redundant redefinition of squares which was refactored into the `Game`function argument as part of the history feature implementation.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%203.png)\n\n                    On second thoughts I also realised this was because of a redundant redefinition of squares which was refactored into the `Game`function argument as part of the history feature implementation.\n\n                    This one was a little more pesky though, and after having a triple looked at my syntax throughout the code it still persisted. And so I found myself retracing my steps upwards the documentation to ensure all the code provided in the documentation matched mine. I did not want to use ChatGPT to check my code for syntax errors at this point.\n\n                    After a bit more digging I found this:\n\n                    ```jsx\n                    const [xIsNExt, setXIsNext] = useState(true);\n                    ```\n\n                    I noticed a typographical error in the state variable `xIsNExt`, when then cascaded downwards into the rest of the code which I typed out and autofilled with xIsNExt with the help of VScode. Brilliant.\n\n                    I corrected all instances of `xIsNExt`with cmd-D and all is well.\n\n                    ![The game post refactor.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%204.png)\n\n                    The game post refactor.\n\n                    ![Holy mother of brackets. I genuinely don’t understand and can’t keep track of the brackets at this point, but I move on.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%205.png)\n\n                    Holy mother of brackets. I genuinely don’t understand and can’t keep track of the brackets at this point, but I move on.",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "On keys",
          "content": "<aside>\n                    <img src=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" alt=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" width=\"40px\" />\n\n                    **It’s strongly recommended that you assign proper keys whenever you build dynamic lists.** If you don’t have an appropriate key, you may want to consider restructuring your data so that you do.\n\n                    </aside>\n\n                    I still do not fully understand how keys are implemented, but understand the purpose of them. Placing the above callout here as a reminder for the future.\n\n                - It’s 2:11am.",
          "isCollapsible": true,
          "isExpanded": false
        },
        {
          "title": "Wrapping up",
          "content": "https://github.com/ithinkitschris/React-Explorations/tree/main\n\n                    I am done. The game works as intended.\n\n                    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%206.png)\n\n                    Did I understand all of it? No, not at all. My head hurts.\n                    Did I understand some bits of it? Yeah, kinda. I think that’s enough for now. \n\n                    ![‘Decent grasp’? You have misplaced your hope.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%207.png)\n\n                    ‘Decent grasp’? You have misplaced your hope.\n\n            - 27 October\n                - It’s 10:25am.\n\n                    > React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called *components*. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React.\n                    > \n\n                    I give up. I had a read through this page of the documentation and I don’t understand most of it. I think I’ll skip this chapter and head straight to Next.js. Let’s see if this plan backfires.\n\n                    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%208.png)\n\n                    Managed to learn how to create a React app from scratch with Terminal though, did it to get the code for this products list working on the local dev environment. `npx create-react-app thinking-in-react` in a folder worked.\n\n    - **Next.js**\n        - 01. I asked ChatGPT\n            - to explain what a ‘Framework’ is.\n\n                In web development, a **framework** is a set of tools, libraries, and conventions designed to help you build applications more efficiently. It provides a structure and pre-built functionality so that you don't have to write everything from scratch. This saves time, ensures consistency, and often improves security and performance.\n\n                For example, **Next.js** is a React-based framework. It adds several features on top of React that make building websites easier, such as:\n\n                1. **File-based routing**: You can create new pages just by creating a file in the \"pages\" folder, instead of manually setting up routes.\n                2. **Server-side rendering (SSR) and static site generation (SSG)**: Next.js helps you optimize how your website content is loaded, making it faster.\n                3. **API routes**: You can create backend APIs within the same project.\n                4. **Optimization features**: It has built-in optimizations like image handling and code-splitting to improve performance.\n\n                In short, a framework gives you a foundation with pre-built pieces so that you can focus more on the unique aspects of your website or application.\n\n        - **02. I attempt the Next.js React Foundations Documentation**\n\n            https://nextjs.org/learn/react-foundations\n\n            - 27 October\n                - It is *11:08am*.\n\n                    I have started on Next.js. Time to learn more about React in regards to Next.js in the Next.js documentation.\n\n                    - Notes for self\n                        - [**Building blocks of a web application**](https://nextjs.org/learn/react-foundations/what-is-react-and-nextjs#building-blocks-of-a-web-application)\n\n                            There are a few things you need to consider when building modern applications. Such as:\n\n                            - **User Interface** - how users will consume and interact with your application.\n                            - **Routing** - how users navigate between different parts of your application.\n                            - **Data Fetching** - where your data lives and how to get it.\n                            - **Rendering** - when and where you render static or dynamic content.\n                            - **Integrations** - what third-party services you use (for CMS, auth, payments, etc.) and how you connect to them.\n                            - **Infrastructure** - where you deploy, store, and run your application code (serverless, CDN, edge, etc.).\n                            - **Performance** - how to optimize your application for end-users.\n                            - **Scalability** - how your application adapts as your team, data, and traffic grow.\n                            - **Developer Experience** - your team's experience building and maintaining your application.\n                        - [**Imperative vs. declarative programming**](https://nextjs.org/learn/react-foundations/updating-ui-with-javascript#imperative-vs-declarative-programming)\n\n                            The code above is a good example of **imperative** **programming.** You're writing the steps for **how** the user interface should be updated. But when it comes to building user interfaces, a declarative approach is often preferred because it can speed up the development process. Instead of having to write DOM methods, it would be helpful if developers were able to declare **what** they want to show (in this case, an `h1` tag with some text).\n\n                            In other words, **imperative programming** is like giving a chef step-by-step instructions on how to make a pizza. **Declarative programming** is like ordering a pizza without being concerned about the steps it takes to make the pizza. 🍕\n\n                            [React](https://react.dev/) is a popular declarative library that you can use build user interfaces.\n\n                            ![Again, is this even english???](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%209.png)\n\n                            Again, is this even english???\n\n                        - [**What is JSX?**](https://nextjs.org/learn/react-foundations/getting-started-with-react#what-is-jsx)\n\n                            JSX is a syntax extension for JavaScript that allows you to describe your UI in a familiar *HTML-like* syntax. The nice thing about JSX is that apart from following [three JSX rules](https://react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx), you don't need to learn any new symbols or syntax outside of HTML and JavaScript.\n\n                            But browsers don't understand JSX out of the box, so you'll need a JavaScript compiler, such as a [Babel](https://babeljs.io/), to transform your JSX code into regular JavaScript.\n\n                        - [**React core concepts**](https://nextjs.org/learn/react-foundations/building-ui-with-components#react-core-concepts)\n\n                            <aside>\n                            <img src=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" alt=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" width=\"40px\" />\n\n                            There are three core concepts of React that you'll need to be familiar with to start building React applications. These are:\n\n                            - Components\n                            - Props\n                            - State\n                            </aside>\n\n                            Oh goodness, here we go again.\n\n                - It is *1:13pm*.\n                    - Displaying Data with Props\n\n                        <aside>\n                        <img src=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" alt=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" width=\"40px\" />\n\n                        Regular HTML elements have attributes that you can use to pass pieces of information that change the behavior of those elements. For example, changing the `src` attribute of an `<img>` element changes the image that is shown. Changing the `href` attribute of an `<a>` tag changes the destination of the link.\n\n                        In the same way, you can pass pieces of information as properties to React components. These are called `props`. Take for instance, the possible variations of a button:\n\n                        [](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Flearn-props.png&w=3840&q=75&dpl=dpl_EE1puEMj59Gokv64hirVd9pA5tT7)\n\n                        Similar to a JavaScript function, you can design components that accept custom arguments (or props) that change the component's behavior or what is visibly shown when it's rendered to the screen. Then, you can pass down these props from parent components to child components.\n\n                        </aside>\n\n                        For now it seems like the Next.js documentation is doing a better job at explaining props than the documentation from React itself.\n\n                    - Mapping arrays to lists\n\n                        ```jsx\n                        function HomePage() {\n                                const names = ['Apple', 'Orange', 'Bananas'];\n\n                                return (\n                                    <div>\n                                        <Header title=\"React\"/>\n                                        <ul>\n                                            {names.map((name)=> (\n                                                <li>{name}</li>\n                                            ))}\n                                        </ul>>\n                                    </div>\n                                );\n                              }\n                        ```\n\n                        I was curious to what `array.map()` meant and how it is supposed to work. \n\n                        - I asked ChatGPT to explain **this code provided by the Next.js documentation**",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "27.",
      "chapterTitle": "Code Breakdown",
      "subsections": [
        {
          "title": "",
          "content": "```jsx\n                            javascript\n                            Copy code\n                            return (\n                                <div>\n                                    <Header title=\"React\"/>\n                                    <ul>\n                                        {names.map((name) => (\n                                            <li>{name}</li>\n                                        ))}\n                                    </ul>\n                                </div>\n                            );\n                            ```\n\n                            1. **`<div>` Element**:\n                                - The entire code is wrapped in a `<div>`, which serves as the root container for this part of the UI.\n                            2. **`<Header title=\"React\" />`**:\n                                - `Header` is a **React component** being called with a `title` prop.\n                                - By setting `title=\"React\"`, you’re passing the string `\"React\"` to `Header` as a prop, which `Header` can access and display within its own JSX structure.\n                            3. **`<ul>` Element**:\n                                - `<ul>` stands for an **unordered list** (a bulleted list in HTML).\n                                - Inside the `<ul>`, there’s a **JavaScript expression** that dynamically generates `<li>` elements based on the contents of an array named `names`.\n                            4. **`{names.map((name) => (<li>{name}</li>))}`**:\n                                - This line uses **JavaScript expression brackets `{ }`** within JSX to embed JavaScript logic.\n                                - `names.map(...)` is a JavaScript array method that iterates over each item in the `names` array. The `map` method creates a new `<li>` element for each item in the `names` array.\n                                - `(name) => (<li>{name}</li>)` is an **arrow function** that takes a single `name` from the array and returns a `<li>` element with `{name}` inside it.\n                                    - `{name}` inside `<li>` is the **JSX syntax** for embedding the value of `name`, meaning each `name` will appear as a separate list item in the output.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "28.",
      "chapterTitle": "Example in Context",
      "subsections": [
        {
          "title": "",
          "content": "Suppose `names` is an array like this:\n\n                            ```jsx\n                            javascript\n                            Copy code\n                            const names = [\"Alice\", \"Bob\", \"Charlie\"];\n\n                            ```\n\n                            Then, this code will render:\n\n                            ```html\n                            html\n                            Copy code\n                            <div>\n                                <Header title=\"React\" />\n                                <ul>\n                                    <li>Alice</li>\n                                    <li>Bob</li>\n                                    <li>Charlie</li>\n                                </ul>\n                            </div>\n\n                            ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "29.",
      "chapterTitle": "Summary",
      "subsections": [
        {
          "title": "",
          "content": "- **`<Header title=\"React\" />`**: Renders a `Header` component, passing `\"React\"` as the `title` prop.\n                            - **`names.map((name) => (<li>{name}</li>))`**: Generates a list item for each `name` in the `names` array, rendering each name within a `<li>` element inside the `<ul>`.\n\n                            Let me know if you'd like further clarification on any part of this!\n\n                        - I asked ChatGPT to explain **arrow functions** (Wow I still don’t understand this)\n\n                            An **arrow function** in JavaScript is a more concise way to write functions, introduced in ES6 (ECMAScript 2015). Arrow functions use the `=>` syntax and have some unique characteristics, especially with regard to how they handle the `this` keyword.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "30.",
      "chapterTitle": "Basic Syntax",
      "subsections": [
        {
          "title": "",
          "content": "Here's how a basic arrow function looks compared to a regular function:\n\n                            ```jsx\n                            javascript\n                            Copy code\n                            // Regular function\n                            function add(a, b) {\n                              return a + b;\n                            }\n\n                            // Arrow function\n                            const add = (a, b) => {\n                              return a + b;\n                            };\n\n                            ```\n\n                            For single expressions, arrow functions allow an even more concise syntax:\n\n                            ```jsx\n                            javascript\n                            Copy code\n                            const add = (a, b) => a + b;\n\n                            ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "31.",
      "chapterTitle": "Key Characteristics",
      "subsections": [
        {
          "title": "",
          "content": "1. **Concise Syntax**:\n                                - Arrow functions allow you to write functions in a shorter form, which makes code easier to read.\n                                - When the function body contains only a single expression, you can omit the `return` keyword and the curly braces `{}`. This is called an **implicit return**.\n                            2. **No `this` Binding**:\n                                - Unlike regular functions, arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding lexical scope.\n                                - This is useful when using functions within methods or callbacks because they keep the `this` context from their parent scope.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "32.",
      "chapterTitle": "Example of `this` Behavior",
      "subsections": [
        {
          "title": "",
          "content": "In regular functions, `this` depends on how the function is called. In arrow functions, `this` is inherited from the parent scope, which can simplify some code.\n\n                            Here’s a comparison:\n\n                            ```jsx\n                            javascript\n                            Copy code\n                            // Using regular function\n                            function Person() {\n                              this.age = 0;\n                              setInterval(function() {\n                                this.age++; // `this` here refers to the global object, not `Person`\n                                console.log(this.age);\n                              }, 1000);\n                            }\n\n                            const person = new Person(); // This will not behave as expected\n\n                            ```\n\n                            With an arrow function, `this` keeps the context of `Person`:\n\n                            ```jsx\n                            javascript\n                            Copy code\n                            function Person() {\n                              this.age = 0;\n                              setInterval(() => {\n                                this.age++; // `this` refers to the Person instance\n                                console.log(this.age);\n                              }, 1000);\n                            }\n\n                            const person = new Person(); // This will increment age correctly\n\n                            ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "33.",
      "chapterTitle": "Examples of Arrow Functions",
      "subsections": [
        {
          "title": "",
          "content": "1. **Single Parameter** (No need for parentheses):\n\n                                ```jsx\n                                javascript\n                                Copy code\n                                const square = x => x * x;\n                                console.log(square(5)); // Outputs: 25\n\n                                ```\n\n                            2. **Multiple Parameters** (Parentheses required):\n\n                                ```jsx\n                                javascript\n                                Copy code\n                                const multiply = (a, b) => a * b;\n                                console.log(multiply(2, 3)); // Outputs: 6\n\n                                ```\n\n                            3. **No Parameters** (Empty parentheses required):\n\n                                ```jsx\n                                javascript\n                                Copy code\n                                const greet = () => \"Hello, world!\";\n                                console.log(greet()); // Outputs: Hello, world!\n\n                                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "34.",
      "chapterTitle": "When to Use Arrow Functions",
      "subsections": [
        {
          "title": "",
          "content": "- They are often used in callbacks, array methods like `map` and `filter`, and places where you want to avoid creating new `this` contexts.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "35.",
      "chapterTitle": "Summary",
      "subsections": [
        {
          "title": "",
          "content": "Arrow functions are shorter, lexically bind `this`, and allow implicit returns for single expressions, making them a popular choice for concise and functional-style JavaScript code.\n\n\n                        <aside>\n                        <img src=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" alt=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" width=\"40px\" />\n\n                        **`{names.map((name) => (<li>{name}</li>))}`**:\n\n                        - This line uses **JavaScript expression brackets `{ }`** within JSX to embed JavaScript logic.\n                        - `names.map(...)` is a JavaScript array method that iterates over each item in the `names` array. The `map` method creates a new `<li>` element for each item in the `names` array.\n                        - `(name) => (<li>{name}</li>)` is an **arrow function** that takes a single `name` from the array and returns a `<li>` element with `{name}` inside it.\n                            - `{name}` inside `<li>` is the **JSX syntax** for embedding the value of `name`, meaning each `name` will appear as a separate list item in the output.\n                        </aside>\n\n                        This explanation by ChatGPT on the `array.map()` method is pretty succinct and explains how it works well.\n\n            - **28 October**\n                - **Interactivity with State**\n                    - Notes for self:\n\n                        In React, event names are camelCased. The `onClick` event is one of many possible events you can use to respond to user interaction. For example, you can use `onChange` for input fields or `onSubmit` for forms.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "36.",
      "chapterTitle": "[**Listening to events**](https://nextjs.org/learn/react-foundations/updating-state#listening-to-events)",
      "subsections": [
        {
          "title": "",
          "content": "To make the button do something when clicked, you can use the `onClick` event:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "37.",
      "chapterTitle": "[**Handling events**](https://nextjs.org/learn/react-foundations/updating-state#handling-events)",
      "subsections": [
        {
          "title": "",
          "content": "You can define a function to \"handle\" events whenever they are triggered. Create a function before the return statement called `handleClick()`:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "38.",
      "chapterTitle": "[**State and hooks**](https://nextjs.org/learn/react-foundations/updating-state#state-and-hooks)",
      "subsections": [
        {
          "title": "",
          "content": "React has a set of functions called [hooks](https://react.dev/learn). Hooks allow you to add additional logic such as **state** to your components. You can think of state as any information in your UI that changes over time, usually triggered by user interaction.\n\n                        Add `useState()` to your project. It returns an array, and you can access and use those array values inside your component using **array destructuring**:\n\n                        index.html\n\n                        ```\n                        function HomePage() {  // ...  const [] = React.useState();   // ...}\n                        ```\n\n                        The first item in the array is the state `value`, which you can name anything. It's recommended to name it something descriptive:\n\n                        index.html\n\n                        ```\n                        function HomePage() {  // ...  const [likes] = React.useState();   // ...}\n                        ```\n\n                        The second item in the array is a function to `update` the value. You can name the update function anything, but it's common to prefix it with `set` followed by the name of the state variable you're updating:\n\n                        index.html\n\n                        ```\n                        function HomePage() {  // ...  const [likes, setLikes] = React.useState();   // ...}\n                        ```\n\n                        You can also take the opportunity to add the initial value of your `likes` state to `0`:\n\n                        index.html\n\n                        ```\n                        function HomePage() {  // ...  const [likes, setLikes] = React.useState(0);}\n                        ```\n\n                        Then, you can check the initial state is working by using the state variable inside your component.\n\n                        index.html\n\n                        ```\n                        function HomePage() {  // ...  const [likes, setLikes] = React.useState(0);  // ...   return (    // ...    <button onClick={handleClick}>Like({likes})</button>  );}\n                        ```\n\n                        Finally, you can call your state updater function, `setLikes` in your `HomePage` component, let's add it inside the `handleClick()` function you previously defined:\n\n                        index.html\n\n                        ```\n                        function HomePage() {  // ...  const [likes, setLikes] = React.useState(0);   function handleClick() {    setLikes(likes + 1);  }   return (    <div>      {/* ... */}      <button onClick={handleClick}>Likes ({likes})</button>    </div>  );}\n                        ```\n\n                        Clicking the button will now call the `handleClick` function, which calls the `setLikes` state updater function with a single argument of the current number of likes + 1.\n\n\n                    Honestly, this part of the Next.js documentation on Interactivity with State is so well written and adequately paced out it actually shed so much light on how `State` is utilised and transferred across React `Components` I just had to copy and paste the entire chunk of the documentation to above just so I have it ready for quick reference. \n\n                    I don’t think I am anywhere close to understanding React, but this helped me comprehend just a bit more of it.\n\n                    And i’ll take what I can get.\n\n        - **03. I attempt the Next.js Documentation**\n\n            https://nextjs.org/learn/dashboard-app\n\n            - **28 October*** (Getting Started)\n                - **It is 9:07pm*** (Next.js Documentation, TypeScript, Tailwind and custom fonts)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "39.",
      "chapterTitle": "https://nextjs.org/learn/dashboard-app/getting-started",
      "subsections": [
        {
          "title": "",
          "content": "I’ve gotten started with the Next.js documentation fully now.\n\n                    The React foundations documentation written by Next.js was immensely helpful and insightful into the workings of React. But now it is time to have a go with Next.js\n\n                    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2010.png)\n\n                    > Unlike tutorials that have you write code from scratch, much of the code for this course is already written for you. This better reflects real-world development, where you'll likely be working with existing codebases. \n\n                    Our goal is to help you focus on learning the main features of Next.js, without having to write *all* the application code.\n                    > \n\n                    Right off the bat I was provided with a sample frontend file directory to work with as per the documentation’s directions. That is one huge directory (relative to what I’m used to, as a child in all of this).",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "40.",
      "chapterTitle": "**Two observations after having a look through the provided source code.**",
      "subsections": [
        {
          "title": "",
          "content": "1. The file extensions for most, if not all the files are .tsx, something i’ve never come across before, obviously. I’ve come to learn that this is TypeScript. Perfect, I’ve been intending to learn and implement TypeScript instead of vanilla Javascript. This is great, daunting, but great.\n                    2. Holy crap is the image below even english???\n\n                        ![Here we go, Tailwind CSS.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2011.png)\n\n                        Here we go, Tailwind CSS.\n\n                        Again, after a bit more reading into the documentation; this is… Tailwind. I’ve been wary on whether I should implement Tailwind into the overall workflow for this project, and my goodness what is this code even. It’s almost masochistic.\n\n                        After a bit of deliberation and opinion from my best friend (who’s the professional SWE), I think i’ll take the challenge of adopting Tailwind on, until it gets too genuinely impossible—as if the learning curve for React wasn’t vertical enough.\n\n                        This is most definitely masochistic.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "41.",
      "chapterTitle": "Tailwind",
      "subsections": [
        {
          "title": "",
          "content": "[Tailwind](https://tailwindcss.com/) is a CSS framework that speeds up the development process by allowing you to quickly write [utility classes](https://tailwindcss.com/docs/utility-first) directly in your TSX markup.\n\n                    In Tailwind, you style elements by adding class names. For example, adding the class `\"text-blue-500\"` will turn the `<h1>` text blue:\n\n                    ```jsx\n                    <h1 className=\"text-blue-500\">I'm blue!</h1>\n                    ```\n\n                    - From the Tailwind website\n\n                        Traditionally, whenever you need to style something on the web, you write CSS.",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "Using a traditional approach where custom designs require custom CSS",
          "content": "```html\n                        <div class=\"chat-notification\"><div class=\"chat-notification-logo-wrapper\"><img class=\"chat-notification-logo\" src=\"/img/logo.svg\" alt=\"ChitChat Logo\"></div><div class=\"chat-notification-content\"><h4 class=\"chat-notification-title\">ChitChat</h4><p class=\"chat-notification-message\">You have a new message!</p></div></div><style>\n                          .chat-notification {\n                            display: flex;\n                            align-items: center;\n                            max-width: 24rem;\n                            margin: 0 auto;\n                            padding: 1.5rem;\n                            border-radius: 0.5rem;\n                            background-color: #fff;\n                            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n                          }\n                          .chat-notification-logo-wrapper {\n                            flex-shrink: 0;\n                          }\n                          .chat-notification-logo {\n                            height: 3rem;\n                            width: 3rem;\n                          }\n                          .chat-notification-content {\n                            margin-left: 1.5rem;\n                          }\n                          .chat-notification-title {\n                            color: #1a202c;\n                            font-size: 1.25rem;\n                            line-height: 1.25;\n                          }\n                          .chat-notification-message {\n                            color: #718096;\n                            font-size: 1rem;\n                            line-height: 1.5;\n                          }\n                        </style>\n                        ```\n\n                        With Tailwind, you style elements by applying pre-existing classes directly in your HTML.",
          "isCollapsible": true,
          "isExpanded": false
        },
        {
          "title": "Using utility classes to build custom designs without writing CSS",
          "content": "```html\n                        <div class=\"p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4\">\n                          <div class=\"shrink-0\">\n                            <img class=\"size-12\" src=\"/img/logo.svg\" alt=\"ChitChat Logo\">\n                          </div>\n                          <div>\n                            <div class=\"text-xl font-medium text-black\">ChitChat</div>\n                            <p class=\"text-slate-500\">You have a new message!</p>\n                          </div>\n                        </div>\n                        ```\n\n                        In the example above, we’ve used:\n\n                        - Tailwind’s [**flexbox**](https://tailwindcss.com/docs/display#flex) and [**padding**](https://tailwindcss.com/docs/padding) utilities (**`flex`**, **`shrink-0`**, and **`p-6`**) to control the overall card layout\n                        - The [**max-width**](https://tailwindcss.com/docs/max-width) and [**margin**](https://tailwindcss.com/docs/margin) utilities (**`max-w-sm`** and **`mx-auto`**) to constrain the card width and center it horizontally\n                        - The [**background color**](https://tailwindcss.com/docs/background-color), [**border radius**](https://tailwindcss.com/docs/border-radius), and [**box-shadow**](https://tailwindcss.com/docs/box-shadow) utilities (**`bg-white`**, **`rounded-xl`**, and **`shadow-lg`**) to style the card’s appearance\n                        - The [**size**](https://tailwindcss.com/docs/size) utilities (**`size-12`**) to set the width and height of the logo image\n                        - The [**gap**](https://tailwindcss.com/docs/gap) utilities (**`gap-x-4`**) to handle the spacing between the logo and the text\n                        - The [**font size**](https://tailwindcss.com/docs/font-size), [**text color**](https://tailwindcss.com/docs/text-color), and [**font-weight**](https://tailwindcss.com/docs/font-weight) utilities (**`text-xl`**, **`text-black`**, **`font-medium`**, etc.) to style the card text\n\n                    > Now I know what you’re thinking, *“this is an atrocity, what a horrible mess!”* and you’re right, it’s kind of ugly. In fact it’s just about impossible to think this is a good idea the first time you see it — **you have to actually try it**.\n                    > \n\n                    This is an actual quote from the Tailwind website. Self awareness is indeed key!!!",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "42.",
      "chapterTitle": "Adding custom fonts",
      "subsections": [
        {
          "title": "",
          "content": "```tsx\n                    import {Inter, Lusitana} from 'next/font/google';\n\n                    export const inter = Inter({subsets: ['latin']});\n                    export const lusitana = Lusitana({\n                        subsets: ['latin'], \n                        weight: ['400','700'],\n                    });\n                    ```\n\n                    Successfully added custom fonts to the code. The documentation guided how to import Inter from Google Fonts and to then apply it to a `<body>`.\n\n                    ```jsx\n                    <body *className*={`${inter.className} antialiased`}>{*children*}</body>\n                    ```\n\n                    This wasn’t too hard. But the Next.js documentation is honestly proving itself to be really good so far. Much better than React’s.\n\n                    ![Current progress of the ‘website’ with Lusitana applied here.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2012.png)\n\n                    Current progress of the ‘website’ with Lusitana applied here.\n\n                    It is 10:26pm. I am done for the night. On to the section covering optimizing images tomorrow.\n\n            - 29 October (Documentation)\n                - It is 7:25am (Images, Page routing and Links)\n\n                    Good morning, it is time to continue on the Next.js documentation.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "43.",
      "chapterTitle": "[**The `<Image>` component**](https://nextjs.org/learn/dashboard-app/optimizing-fonts-images#the-image-component)",
      "subsections": [
        {
          "title": "",
          "content": "> Next.js can serve **static assets**, like images, under the top-level [`/public`](https://nextjs.org/docs/app/building-your-application/optimizing/static-assets) folder. Files inside `/public` can be referenced in your application.\n                    > \n\n                    The `<Image>` Component is an extension of the HTML `<img>` tag, and comes with automatic image optimization, such as:\n\n                    - Preventing layout shift automatically when images are loading.\n                    - Resizing images to avoid shipping large images to devices with a smaller viewport.\n                    - Lazy loading images by default (images load as they enter the viewport).\n                    - Serving images in modern formats, like [WebP](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp) and [AVIF](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#avif_image), when the browser supports it.\n\n                    Pretty straightforward section for images.\n\n                    ```jsx\n                    <div className=\"flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12\">\n                    {/* Add Hero Images Here */}\n                    <Image\n                    src=\"/hero-desktop.png\"\n                    width={1000}\n                    height={760}\n                    className=\"hidden md:block\"\n                    alt=\"Screenshots of the dashboard project showing desktop version\"\n                    />\n                    ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "44.",
      "chapterTitle": "[**Creating the dashboard page**](https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages#creating-the-dashboard-page)",
      "subsections": [
        {
          "title": "",
          "content": "Create a new folder called `dashboard` inside `/app`. Then, create a new `page.tsx` file inside the `dashboard` folder with the following content:\n\n                    /app/dashboard/page.tsx\n\n                    ```\n                    export default function Page() {  return <p>Dashboard Page</p>;}\n                    ```\n\n                    Now, make sure that the development server is running and visit [http://localhost:3000/dashboard](http://localhost:3000/dashboard). You should see the \"Dashboard Page\" text.\n\n                    This is how you can create different pages in Next.js: create a new route segment using a folder, and add a `page` file inside it.\n\n                    By having a special name for `page` files, Next.js allows you to [colocate](https://nextjs.org/docs/app/building-your-application/routing#colocation) UI components, test files, and other related code with your routes. Only the content inside the `page` file will be publicly accessible. For example, the `/ui` and `/lib` folders are *colocated* inside the `/app` folder along with your routes.\n\n                    Pretty straightforward as well so far, I have learnt how to create pages within a Next.js website now. Awesome.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "45.",
      "chapterTitle": "[**Creating the dashboard layout**](https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages#creating-the-dashboard-layout)",
      "subsections": [
        {
          "title": "",
          "content": "Dashboards have some sort of navigation that is shared across multiple pages. In Next.js, you can use a special `layout.tsx` file to create UI that is shared between multiple pages. Let's create a layout for the dashboard pages!\n\n                    Inside the `/dashboard` folder, add a new file called `layout.tsx` and paste the following code:\n\n                    Okay things are getting funky here, but I’m still hanging on with my comprehension of it all. This is the code that was provided to act as the consistent side bar navigation element across the pages. \n\n                    ```jsx\n                    import SideNav from '@/app/ui/dashboard/sidenav';\n\n                    export default function Layout({ children }: { children: React.ReactNode }) {\n                    return (\n                    <div className=\"flex h-screen flex-col md:flex-row md:overflow-hidden\">\n                    <div className=\"w-full flex-none md:w-64\">\n                    <SideNav />\n                    </div>\n                    <div className=\"flex-grow p-6 md:overflow-y-auto md:p-12\">{children}</div>\n                    </div>\n                    );\n                    }\n                    ```\n\n                    But the one line that caught my attention and pushed me to dive deeper was this: \n\n                    ```jsx\n                    export default function Layout({ children }: { children: React.ReactNode }) {\n                    ```\n\n                    - I asked ChatGPT to explain the line",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "46.",
      "chapterTitle": "Breakdown:",
      "subsections": [
        {
          "title": "",
          "content": "1. **`export default`**:\n                            - This makes the `Layout` component the default export of the file, meaning you can import it into another file without using curly braces.\n                            - For example, you would import it with: `import Layout from './Layout';`\n                        2. **`function Layout`**:\n                            - This is a function declaration that creates a functional component named `Layout`. In React, functional components are simply JavaScript functions that return JSX (the syntax used to describe what the UI should look like).\n                        3. **`({children}: {children: React.ReactNode})`**:\n                            - This is the parameter of the function, which uses **TypeScript** syntax for typing.\n                            - `children` is a **prop** passed to the `Layout` component.\n                            - `children` is a special prop in React that represents any nested elements or components within `<Layout>...</Layout>`.\n                            - The syntax `{children}: {children: React.ReactNode}` is a TypeScript type annotation, where:\n                                - The first `{children}` destructures the `children` prop from the function's props.\n                                - The second `{children: React.ReactNode}` is a TypeScript type annotation specifying that `children` must be of type `React.ReactNode`.\n                                - `React.ReactNode` is a TypeScript type that can represent any renderable element in React, such as strings, JSX, or even null.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "47.",
      "chapterTitle": "Purpose of the `Layout` Component",
      "subsections": [
        {
          "title": "",
          "content": "The `Layout` component acts as a wrapper for any elements or components that are passed to it as `children`. This pattern is commonly used to add consistent structure, styling, or elements (like headers or footers) to various parts of a React application.\n\n                        Here’s an example of how this component might be used:\n\n                        ```jsx\n                        jsx\n                        Copy code\n                        <Layout>\n                          <h1>Hello, World!</h1><p>This is some content inside the layout.</p>\n                        </Layout>\n\n                        ```\n\n                        In this example, `<h1>` and `<p>` elements are passed as `children` to the `Layout` component. The `Layout` component can then render them within a consistent layout structure.\n\n                        Let me know if you’d like more information on a specific part of this!",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "48.",
      "chapterTitle": "[**The `<Link>` component**](https://nextjs.org/learn/dashboard-app/navigating-between-pages#the-link-component)",
      "subsections": [
        {
          "title": "",
          "content": "In Next.js, you can use the `<Link />` Component to link between pages in your application. `<Link>` allows you to do [client-side navigation](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works) with JavaScript.\n\n                    To use the `<Link />` component, open `/app/ui/dashboard/nav-links.tsx`, and import the `Link` component from [`next/link`](https://nextjs.org/docs/app/api-reference/components/link). Then, replace the `<a>` tag with `<Link>`:\n\n                    Using <Link> instead of <a>. Interesting concept.\n\n                - It is 9:09am (Seeding a database to the documentation website)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "49.",
      "chapterTitle": "**Setting Up Your Database**",
      "subsections": [
        {
          "title": "",
          "content": "Before you can continue working on your dashboard, you'll need some data. In this chapter, you'll be setting up a PostgreSQL database using `@vercel/postgres`. If you're already familiar with PostgreSQL and would prefer to use your own provider, you can skip this chapter and set it up on your own. Otherwise, let's continue!\n\n                    ![The dev environment is returning me this message instead of the expected ‘Database seeded successfully’](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2013.png)\n\n                    The dev environment is returning me this message instead of the expected ‘Database seeded successfully’\n\n                    I’m defeated. I’ve reached the part on setting up a Database on Vercel and seeding it with placeholder data from client side and I can’t get the code to work. I think i’ll be skipping this part as well as pretty much the rest of the documentation. I don’t think i’ll be requiring databases for the purposes of my portfolio website. \n\n                    It might just be time to get started with a boilerplate site from Next.js and raw-dogging it from there.\n\n                - It is 9:30am (Created a Portfolio template site from the Next.js templates + Vercel deployment)\n\n                    [My Portfolio](https://portfolio-attempt-01.vercel.app/)\n\n                    Production deployment of the site on Vercel.\n\n                    I have created a site which was cloned from Next.js’s repo onto my own GitHub repo and then deployed on Vercel.\n\n                    Time to download the source code and set up the local dev environment to work on this.\n\n    - **Figma**\n        - 01. I asked ChatGPT\n            - Full Stack Workflow\n                - Prompt\n\n                    > How does Figma work when used in a full-stack workflow with React and Next.js for web development?\n                    > \n                - Answer\n\n                    Using Figma in a React and Next.js project allows for an efficient design-to-development workflow, especially when implementing designs as code. Here’s how it generally works:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "50.",
      "chapterTitle": "1. **Designing Components in Figma**",
      "subsections": [
        {
          "title": "",
          "content": "- Figma is often the first stage where designers create high-fidelity mockups, interactions, and component designs. These components, typically organized within a Figma design system, represent what developers will need to build as React components.\n                    - Design specifications, such as padding, colors, typography, and component states, are accessible directly in Figma, which developers can reference to replicate designs accurately.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "51.",
      "chapterTitle": "2. **Exporting Assets and Styles**",
      "subsections": [
        {
          "title": "",
          "content": "- **SVGs and Icons:** Figma lets you export vector assets like SVGs that can be directly imported into React as components or as images.\n                    - **Images and Graphics:** You can export images in formats like PNG or JPEG, which can then be used within React components.\n                    - **CSS and Design Tokens:** Figma plugins, such as *Figma Tokens*, can generate design tokens (e.g., colors, spacing) in CSS or JSON format, making it easy to implement them as variables in your CSS or JavaScript.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "52.",
      "chapterTitle": "3. **Using Figma to Code Plugins and APIs**",
      "subsections": [
        {
          "title": "",
          "content": "- Figma plugins like *Figma to Code* generate JSX, HTML, or CSS code snippets directly from designs, which you can adapt in React. This is most useful for simple layouts and styles that might need some tweaking for optimization.\n                    - Figma also offers a REST API, enabling developers to pull Figma data programmatically. This is helpful for dynamically syncing design updates with code or automating asset exports.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "53.",
      "chapterTitle": "4. **Implementing Components in React with Next.js**",
      "subsections": [
        {
          "title": "",
          "content": "- Each component designed in Figma should correspond to a React component. For example, if you have a Figma button component, you’ll create a `Button` component in React with props that match the button's design states.\n                    - In Next.js, these components are typically placed in a reusable component folder, allowing them to be used across pages. Figma design details guide the props, CSS classes, and layout structure of these components.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "54.",
      "chapterTitle": "5. **Styling Components with CSS or Tailwind (Optionally)**",
      "subsections": [
        {
          "title": "",
          "content": "- Figma designs often come with detailed measurements and spacing, which you can translate into CSS or use directly with libraries like Tailwind CSS.\n                    - You can create custom classes or utilities based on Figma’s styles to make your components match exactly as designed.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "55.",
      "chapterTitle": "6. **Building Responsive and Interactive Features**",
      "subsections": [
        {
          "title": "",
          "content": "- Figma offers constraints and breakpoints for responsive design, which can be mimicked in React components with media queries or libraries like Tailwind CSS.\n                    - Interactions in Figma (like hover states) need to be implemented using JavaScript or CSS in your React components. You might use frameworks like Framer Motion or React Spring for complex animations to match the Figma prototype.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "56.",
      "chapterTitle": "7. **Iterative Updates and Feedback Loops**",
      "subsections": [
        {
          "title": "",
          "content": "- Figma makes it easy for designers to make quick edits and share prototypes. As designs are updated, developers can see the changes and adjust components in React.\n                    - Plugins like *Figma Mirror* or *Figma for VSCode* allow developers to view Figma designs directly in their editor, making the implementation process faster.\n\n                    ---\n\n                    Using Figma as a design reference within React and Next.js helps maintain design consistency, keeps components modular, and makes the implementation feel more seamless. When done right, it creates a fluid bridge between design and development!\n\n            - Tokenization\n                - Prompt\n\n                    > Could you explain tokenisation and how it pertains to Figma?\n                    > \n                - Answer\n\n                    Tokenization in the context of design, and specifically Figma, refers to breaking down design elements into reusable, standardized pieces called \"design tokens.\" These tokens capture design values (e.g., colors, typography, spacing) as variables, making it easy to manage, scale, and apply consistent styling across a design system and codebase.\n\n                    Here's a breakdown of tokenization and how it works in Figma:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "57.",
      "chapterTitle": "1. **What Are Design Tokens?**",
      "subsections": [
        {
          "title": "",
          "content": "- **Design Tokens** are single values that represent design decisions. They can be colors, font sizes, spacing values, or any other styling property that contributes to the look and feel of a design.\n                    - A token typically has a name and a value. For example:\n\n                        ```json\n                        json\n                        Copy code\n                        {\n                          \"colorPrimary\": \"#FF5733\",\n                          \"fontSizeBase\": \"16px\",\n                          \"spacingSmall\": \"8px\"\n                        }\n\n                        ```\n\n                    - Tokens are often grouped into categories like colors, typography, spacing, shadows, etc.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "58.",
      "chapterTitle": "2. **Why Use Tokens in Design?**",
      "subsections": [
        {
          "title": "",
          "content": "- **Consistency:** Design tokens create a single source of truth. When tokens are used throughout a design, changing a single token value (like a brand color) updates all instances automatically.\n                    - **Scalability:** Tokens make it easy to apply global changes and support multiple themes (e.g., light/dark mode) by switching token sets.\n                    - **Developer-Friendly:** Tokens translate seamlessly into code, which helps bridge the gap between design and development.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "59.",
      "chapterTitle": "3. **How Tokens Work in Figma**",
      "subsections": [
        {
          "title": "",
          "content": "- **Figma Plugins for Tokens:** Plugins like *Figma Tokens* allow designers to create, manage, and apply tokens directly in Figma. Designers can assign token values to specific design elements (e.g., assigning a color token to a button background).\n                    - **Exporting Tokens:** Once tokens are created in Figma, they can be exported in various formats, like JSON, which can then be imported into the development environment. This makes it easy to keep design tokens in sync between Figma and code.\n                    - **Applying Tokens:** Designers can apply tokens directly to layers and elements in Figma, enabling quick updates across the entire design whenever a token value changes.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "60.",
      "chapterTitle": "4. **Tokens and Code Integration (React, Next.js)**",
      "subsections": [
        {
          "title": "",
          "content": "- Once exported, design tokens can be implemented in CSS (e.g., as custom properties in a `.css` file), JavaScript objects, or styling libraries like Tailwind CSS or Styled Components.\n                    - **Dynamic Themes:** In a React or Next.js project, tokens can be integrated as theme variables, enabling dynamic theming. For instance, switching from a light to dark theme is as simple as switching to a different token set.\n                    - **Code Example: Using Tokens in CSS**\n                        - If you export a JSON file with tokens, you can convert them to CSS variables in a root file:\n\n                            ```css\n                            css\n                            Copy code\n                            :root {\n                              --color-primary: #FF5733;\n                              --font-size-base: 16px;\n                              --spacing-small: 8px;\n                            }\n\n                            ```\n\n                        - Then, these variables can be used consistently throughout your styles, ensuring they match the design exactly.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "61.",
      "chapterTitle": "5. **Responsive and Contextual Tokens**",
      "subsections": [
        {
          "title": "",
          "content": "- Tokens also allow for responsive or adaptive design by defining specific tokens for different screen sizes or contexts. For example:\n\n                        ```json\n                        json\n                        Copy code\n                        {\n                          \"fontSizeBase\": {\n                            \"mobile\": \"14px\",\n                            \"desktop\": \"16px\"\n                          },\n                          \"spacingSmall\": {\n                            \"mobile\": \"4px\",\n                            \"desktop\": \"8px\"\n                          }\n                        }\n\n                        ```\n\n                    - This helps to maintain a cohesive design system across multiple device types without duplicating work.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "62.",
      "chapterTitle": "6. **Benefits of Tokens in Figma for Development**",
      "subsections": [
        {
          "title": "",
          "content": "- **Streamlined Handoff:** When developers use tokens from Figma, they’re getting a design that's already prepped for integration, reducing guesswork and rework.\n                    - **Design-System-Driven Development:** Tokens ensure that each design decision is backed by the design system, making it easier to adapt designs in the future while ensuring consistency.\n\n                    ---\n\n                    Overall, Figma and tokenization go hand-in-hand to create a highly efficient and consistent workflow, especially when translating design into code. For projects involving both Figma and frameworks like React and Next.js, tokens can be a game-changer, making scaling and maintaining design decisions much more manageable.\n\n        - Appendix\n\n            https://framesxdesign.com/\n\n            (Thank you Martin, you’re the best as always)\n\n- **Optionals**\n    - Three.js\n        - 01. I attempt the Three.js Documentation\n            - **28 October**\n\n                https://threejs.org/docs/index.html#manual/en/introduction/Installation",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "It is *7:13am*",
          "content": "- Installation\n\n                    I am currently exploring Three.js with the aim to eventually create a simple game for my class on Physical Computing. Ideally, my learnings from Three.js will also be transferrable to a website should the need arise.\n\n                    I have created the project folder as prescribed in the documentation and started both an index.html and main.js source file. They work well.\n\n                    ![localhost:5173](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2014.png)\n\n                    localhost:5173\n\n                    <aside>\n                    <img src=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" alt=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" width=\"40px\" />",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "63.",
      "chapterTitle": "**Creating the scene**",
      "subsections": [
        {
          "title": "",
          "content": "To actually be able to display anything with three.js, we need three things: scene, camera and renderer, so that we can render the scene with camera.\n\n                    </aside>\n\n                    ```jsx\n                    const camera = new THREE.PerspectiveCamera\n                    ( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );\n                    ```\n\n                    <aside>\n                    <img src=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" alt=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" width=\"40px\" />\n\n                    There are a few different cameras in three.js. For now, let's use a `PerspectiveCamera`.\n\n                    The first attribute is the `field of view`. FOV is the extent of the scene that is seen on the display at any given moment. The value is in degrees.\n\n                    The second one is the `aspect ratio`. You almost always want to use the width of the element divided by the height, or you'll get the same result as when you play old movies on a widescreen TV - the image looks squished.\n\n                    The next two attributes are the `near` and `far` clipping plane. What that means, is that objects further away from the camera than the value of `far` or closer than `near` won't be rendered. You don't have to worry about this now, but you may want to use other values in your apps to get better performance.\n\n                    </aside>\n\n                    [Screen Recording 2024-10-28 at 7.36.13 AM.mov](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/Screen_Recording_2024-10-28_at_7.36.13_AM.mov)\n\n                    Success! I have myself a cube rotating along the X and Y axis. This feels so much more intuitive and understandable coming right from React. My goodness.\n\n                    - Code\n\n                        ```\n                        import * as THREE from 'three';\n\n                        const scene = new THREE.Scene();\n                        const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);\n\n                        const renderer = new THREE.WebGLRenderer();\n                        renderer.setSize(window.innerWidth, window.innerHeight);\n                        document.body.appendChild(renderer.domElement);\n\n                        const geometry = new THREE.BoxGeometry(1,1,1);\n                        const material = new THREE.MeshBasicMaterial({color:0xffffff});\n                        const cube = new THREE.Mesh(geometry,material);\n                        scene.add(cube);\n\n                        camera.position.z = 15;\n\n                        function cubeRotation(){\n                            cube.rotation.x += 0.01;\n                            cube.rotation.y += 0.01;\n                        }\n\n                        function animate() {\n                            cubeRotation();\n                            renderer.render(scene, camera);\n                        }  \n\n                        renderer.setAnimationLoop(animate);\n                        ```\n\n                - Render Passes\n\n                    ```jsx\n                    const renderPass = new RenderPass( scene, camera );\n                    composer.addPass( renderPass );\n                    ```\n\n                    ![The cube was looking aliased after introducing a bloom pass over it.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2015.png)\n\n                    The cube was looking aliased after introducing a bloom pass over it.\n\n                    ```jsx\n                    const renderer = new THREE.WebGLRenderer({ antialias: true });\n                    const composer = new EffectComposer(renderer);\n\n                    composer.setSize(window.innerWidth, window.innerHeight);\n                    ```\n\n                    ![After introducing antialiasing.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2016.png)\n\n                    After introducing antialiasing.\n\n                    ```jsx\n                    const bloomPass = new UnrealBloomPass(\n                    new THREE.Vector2(window.innerWidth, window.innerHeight),\n                    1.5,  // Strength\n                    0.4,  // Radius\n                    0.85  // Threshold\n                    );\n                    ```\n\n                - Lighting\n\n                    I’d like to now shade my cube with lighting. As such, I jumped to the section in the reference on lighting. DirectionalLight seemed like a decent starting point to introduce lighting into the scene.\n\n                    <aside>\n                    <img src=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" alt=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" width=\"40px\" />",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "64.",
      "chapterTitle": "DirectionalLight",
      "subsections": [
        {
          "title": "",
          "content": "A light that gets emitted in a specific direction. This light will behave as though it is infinitely far away and the rays produced from it are all parallel. The common use case for this is to simulate daylight; the sun is far enough away that its position can be considered to be infinite, and all light rays coming from it are parallel.\n\n                    </aside>\n\n                    ```jsx\n                    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );\n                    scene.add( directionalLight );\n                    ```\n\n                    The above code didn’t work after introducing it into the scene. It didn’t quite make sense however as the code was self explanatory and should be working.\n\n                    ```jsx\n                    const directionalLight = new THREE.DirectionalLight( \n                        0xffffff, 1,\n                        {castShadow: true} \n                    );\n                    ```\n\n                    I tried introducing a `{castShadow: true}` condition to the function as it was stated in the documentation that it is set to false by default. Didn’t work.\n\n                    - And so I turned to ChatGPT\n\n                        Your current setup uses `MeshBasicMaterial`, which does not respond to lighting. To have the cube react to the `DirectionalLight`, you need to change the material to one that supports lighting, like `MeshStandardMaterial` or `MeshLambertMaterial`.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "65.",
      "chapterTitle": "Steps to Add Lighting",
      "subsections": [
        {
          "title": "",
          "content": "1. **Change Material to Respond to Light**:\n                        Replace `MeshBasicMaterial` with `MeshStandardMaterial` or `MeshLambertMaterial`, which are both responsive to lights.\n                        2. **Set Up the Directional Light Properly**:\n                        Position the `DirectionalLight` in a way that it illuminates the cube.\n\n                    I changed the material of the cube to `MeshStandardMaterial` and of course, it worked. \n\n                    [Screen Recording 2024-10-28 at 8.45.42 AM.mov](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/Screen_Recording_2024-10-28_at_8.45.42_AM.mov)\n\n                - World\n\n                    I would like to create a scene, a world. That would require a plane, let me have a look into the reference.\n\n\n    - GSAP\n\n        https://gsap.com/\n\n    - TypeScript\n\n        https://www.typescriptlang.org/\n\n    - Tailwind CSS\n\n        https://tailwindcss.com/\n\n    - Webflow\n    - MUI + Emotion\n\n        https://mui.com/\n\n    - Lottie\n\n        https://lottiereact.com/",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "66.",
      "chapterTitle": "Website Development (Front-end)",
      "subsections": [
        {
          "title": "",
          "content": "- 1. **Getting Started**\n    - **30 October*** (Portfolio website & Boilerplate template)\n        - ~~It is 10:10am (Figuring out the Portfolio template source code)~~\n\n            Im back to the grind with the template portfolio website provided by Next.js. I’m feeling especially tired and admittedly a little defeated today, but I will push on with this. \n\n            First things first, to understand the code for layout.tsx and page.tsx in the app root folder of the template provided.\n\n            - Code for layout.tsx\n\n                ```tsx\n                import './global.css'\n                import type { Metadata } from 'next'\n                import { GeistSans } from 'geist/font/sans'\n                import { GeistMono } from 'geist/font/mono'\n                import { Navbar } from './components/nav'\n                import { Analytics } from '@vercel/analytics/react'\n                import { SpeedInsights } from '@vercel/speed-insights/next'\n                import Footer from './components/footer'\n                import { baseUrl } from './sitemap'\n\n                export const metadata: Metadata = {\n                  metadataBase: new URL(baseUrl),\n                  title: {\n                    default: 'Testing',\n                    template: '%s | Next.js Portfolio Starter',\n                  },\n                  description: 'This is my portfolio.',\n                  openGraph: {\n                    title: 'My Portfolio',\n                    description: 'This is my portfolio.',\n                    url: baseUrl,\n                    siteName: 'My Portfolio',\n                    locale: 'en_US',\n                    type: 'website',\n                  },\n                  robots: {\n                    index: true,\n                    follow: true,\n                    googleBot: {\n                      index: true,\n                      follow: true,\n                      'max-video-preview': -1,\n                      'max-image-preview': 'large',\n                      'max-snippet': -1,\n                    },\n                  },\n                }\n\n                const cx = (...classes) => classes.filter(Boolean).join(' ')\n\n                export default function RootLayout({\n                  children,\n                }: {\n                  children: React.ReactNode\n                }) {\n                  return (\n                    <html\n                      lang=\"en\"\n                      className={cx(\n                        'text-black bg-white dark:text-white dark:bg-black',\n                        GeistSans.variable,\n                        GeistMono.variable\n                      )}\n                    >\n                      <body className=\"antialiased max-w-xl mx-4 mt-8 lg:mx-auto\">\n                        <main className=\"flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0\">\n                          <Navbar />\n                          {children}\n                          <Footer />\n                          <Analytics />\n                          <SpeedInsights />\n                        </main>\n                      </body>\n                    </html>\n                  )\n                }\n\n                ```\n\n            - Code for page.tsx\n\n                ```tsx\n                import { BlogPosts } from 'app/components/posts'\n\n                export default function Page() {\n                  return (\n                    <section>\n                      <h1 className=\"mb-8 text-2xl font-semibold tracking-tighter\">\n                        My Portfolio\n                      </h1>\n                      <p className=\"mb-4\">\n                        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in\n                        Vim's keystroke commands and tabs' flexibility for personal viewing\n                        preferences. This extends to my support for static typing, where its\n                        early error detection ensures cleaner code, and my preference for dark\n                        mode, which eases long coding sessions by reducing eye strain.`}\n                      </p>\n                      <div className=\"my-8\">\n                        <BlogPosts />\n                      </div>\n                    </section>\n                  )\n                }\n\n                ```\n\n            - How the template homepage currently looks\n\n                ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2017.png)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "67.",
      "chapterTitle": "layout.tsx",
      "subsections": [
        {
          "title": "",
          "content": "For the sake of clarity on the documentation of my progress here I will first begin unpacking layout.tsx.\n\n            ```tsx\n            export default function RootLayout({\n              children,\n            }: {\n              children: React.ReactNode\n            }) {\n              return (\n                <html\n                  lang=\"en\"\n                  className={cx(\n                    'text-black bg-white dark:text-white dark:bg-black',\n                    GeistSans.variable,\n                    GeistMono.variable\n                  )}\n                >\n                  <body className=\"antialiased max-w-xl mx-4 mt-8 lg:mx-auto\">\n                    <main className=\"flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0\">\n                      <Navbar />\n                      {children}\n                      <Footer />\n                      <Analytics />\n                      <SpeedInsights />\n                    </main>\n                  </body>\n                </html>\n              )\n            }\n            ```\n\n            In the code above I see `<Navbar/>` and `<Footer/>` as components that are relevant to me. I still struggle to understand `{children}` but think I have hunches to what it stands for.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "68.",
      "chapterTitle": "Adding Helvetica to the site",
      "subsections": [
        {
          "title": "",
          "content": "```tsx\n            import './global.css'\n            import type { Metadata } from 'next'\n            import { GeistSans } from 'geist/font/sans'\n            import { GeistMono } from 'geist/font/mono'\n            import { Navbar } from './components/nav'\n            import { Analytics } from '@vercel/analytics/react'\n            import { SpeedInsights } from '@vercel/speed-insights/next'\n            import Footer from './components/footer'\n            import { baseUrl } from './sitemap'\n            ```\n\n            From the above ‘header’ code of layout.tsx we can see that `GeistSans` and `GeistMono` are currently imported and used on the website as part of the template. \n\n            As part of my first tweak to this site I would like to implement a Grotesque sans-serif font as a placeholder start. My go-to font has been Apple’s San Francisco in recent times, but a quick google search has led me to learn that, again for obvious reasons, you can’t simply just use it for a website. It is their proprietary developer font after all. \n\n            As such I will now attempt to import Helvetica into the site. I know, I know. After about a decade of practicing typography as both a student and a professional, I am falling back to Helvetica. Often times, simple just works. To be fair, I would like to be a little bit pedantic here and specify that it is Helvetica I am looking for, and not Helvetica *Neue.* I have my thoughts on Helvetica Neue but we are already sidetracking too heavily here.\n\n            - I asked ChatGPT on how to import Helvetica / Helvetica Neue for use on a website.\n\n                To use Helvetica on your React or Next.js website, you can either import it from a web font provider like Google Fonts (if using a similar font like *Helvetica Neue*) or load it as a locally hosted font. Helvetica is not freely available as a web font, so if you have access to the Helvetica font files, you can host them locally.\n\n                Here are both methods:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "69.",
      "chapterTitle": "Option 1: Use a Similar Google Font (e.g., Helvetica Neue)",
      "subsections": [
        {
          "title": "",
          "content": "Google Fonts does not have Helvetica, but you can use `Arial`, `Roboto`, or `Helvetica Neue` as similar alternatives. Here's how you can import a similar font from Google Fonts in your project.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "70.",
      "chapterTitle": "1. Install and Import via Google Fonts",
      "subsections": [
        {
          "title": "",
          "content": "In your `global.css` file, you can import a similar font from Google Fonts:\n\n                ```css\n                css\n                Copy code\n                /* global.css */\n                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n                ```\n\n                Then, you can apply it to the body or specific components in CSS:\n\n                ```css\n                css\n                Copy code\n                /* global.css */\n                body {\n                  font-family: 'Roboto', sans-serif;\n                }\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "71.",
      "chapterTitle": "2. Apply Globally in Your Next.js Project",
      "subsections": [
        {
          "title": "",
          "content": "Your layout or main component can now reference `global.css` to apply the font.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "72.",
      "chapterTitle": "Option 2: Host Helvetica Locally",
      "subsections": [
        {
          "title": "",
          "content": "If you have access to the Helvetica font files (e.g., Helvetica.ttf), you can host them in your project.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "73.",
      "chapterTitle": "1. Add Font Files to Your Project",
      "subsections": [
        {
          "title": "",
          "content": "Add the font files in your project, for instance in `public/fonts/Helvetica`:\n\n                - `public/fonts/Helvetica/Helvetica-Regular.ttf`\n                - `public/fonts/Helvetica/Helvetica-Bold.ttf`",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "74.",
      "chapterTitle": "2. Import and Define in CSS",
      "subsections": [
        {
          "title": "",
          "content": "In your `global.css`, add the following:\n\n                ```css\n                css\n                Copy code\n                @font-face {\n                  font-family: 'Helvetica';\n                  src: url('/fonts/Helvetica/Helvetica-Regular.ttf') format('truetype');\n                  font-weight: 400;\n                }\n\n                @font-face {\n                  font-family: 'Helvetica';\n                  src: url('/fonts/Helvetica/Helvetica-Bold.ttf') format('truetype');\n                  font-weight: 700;\n                }\n\n                body {\n                  font-family: 'Helvetica', sans-serif;\n                }\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "75.",
      "chapterTitle": "Using the Font in Your Next.js Components",
      "subsections": [
        {
          "title": "",
          "content": "Now you can apply Helvetica site-wide or to specific elements in your components by simply using `font-family: 'Helvetica', sans-serif;`. This approach gives you more control over font weights and styling options across your Next.js site.\n\n\n            ![May be biting off more than I can chew here with importing a local font which is Helvetica.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2018.png)\n\n            May be biting off more than I can chew here with importing a local font which is Helvetica.\n\n            No go, Helvetica is obviously not hosted on a platform like google fonts, and I don’t think I want to spend any more time figuring out importing a local font right now. \n\n            I will fall back to importing **Roboto** for now.",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "Update from 4:40pm on 30th October.",
          "content": "I failed with all the above, I could not even get the default font of Geist to work on the Portfolio template site. For some reason the Portfolio template site did not come with the tailwind.config.js file and my attempts to install tailwind or it’s dependencies failed with that source code.\n\n            As such, I am restarting my attempts from scratch with the boilerplate template instead. I will be creating a new toggle entry on this above, so let us continue this documentation over there.",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "76.",
      "chapterTitle": "nav.tsx",
      "subsections": [
        {
          "title": "",
          "content": "I am now on nav.tsx under the components folder to dive into the `<Navbar/>` component code. \n\n            ```tsx\n            import Link from 'next/link'\n\n            const navItems = {\n              '/': {\n                name: 'home',\n              },\n              '/blog': {\n                name: 'blog',\n              },\n              'https://vercel.com/templates/next.js/portfolio-starter-kit': {\n                name: 'deploy',\n              },\n            }\n\n            export function Navbar() {\n              return (\n                <aside className=\"-ml-[8px] mb-16 tracking-tight\">\n                  <div className=\"lg:sticky lg:top-20\">\n                    <nav\n                      className=\"flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative\"\n                      id=\"nav\"\n                    >\n                      <div className=\"flex flex-row space-x-0 pr-10\">\n                        {Object.entries(navItems).map(([path, { name }]) => {\n                          return (\n                            <Link\n                              key={path}\n                              href={path}\n                              className=\"transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1\"\n                            >\n                              {name}\n                            </Link>\n                          )\n                        })}\n                      </div>\n                    </nav>\n                  </div>\n                </aside>\n              )\n            }\n\n            ```\n\n            The first thing I’ve done is to remove the ‘deploy’ from the navbar, that won’t be required for the site, for hopefully obvious reasons. \n\n            - I asked ChatGPT to explain the `Navbar()` code.\n\n                This code defines a `Navbar` component in Next.js using React and Tailwind CSS classes to style a responsive sidebar-style navigation bar (`<aside>`) that dynamically renders navigation links. Here’s a breakdown:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "77.",
      "chapterTitle": "Code Structure and Key Parts",
      "subsections": [
        {
          "title": "",
          "content": "1. **Navbar Component**:\n                    - The component `Navbar` is exported as a function, allowing it to be imported and used in other parts of the app.\n                2. **Container Elements**:\n                    - The navigation links are wrapped in an `<aside>` element, which is often used to create sidebars or secondary content.\n                    - The `ml-[8px] mb-16 tracking-tight` classes apply margin and font tracking (letter spacing), giving the navbar specific spacing and a tight character spacing.\n                    - Inside `<aside>`, a `div` with `lg:sticky lg:top-20` applies a sticky positioning on larger screens, so the navbar stays in view when scrolling.\n                3. **Navigation (`<nav>`)**:\n                    - The `<nav>` element contains the actual navigation links, with multiple utility classes for responsive layout, padding, overflow, and a custom scroll behavior.\n                    - `md:overflow-auto` allows horizontal scrolling if needed on medium or smaller screens.\n                4. **Rendering Links Dynamically**:\n                    - `Object.entries(navItems).map(([path, { name }]) => { ... })` iterates over each entry in `navItems` (an object where each key-value pair represents a path and associated metadata).\n                    - This approach allows the navbar to automatically create links for each path specified in `navItems` without hard-coding them.\n                5. **Individual Link Elements**:\n                    - Inside the `map`, a `<Link>` component from Next.js is used for each link.\n                    - Each `Link` receives:\n                        - `key={path}`: A unique key based on the path.\n                        - `href={path}`: The URL path that the link should navigate to.\n                        - `className`: Tailwind classes to style the links with transitions, alignment, padding, and responsive color transitions on hover.\n                    - The `{name}` placeholder inserts the name associated with each path, rendering the text of the link.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "78.",
      "chapterTitle": "Tailwind Classes",
      "subsections": [
        {
          "title": "",
          "content": "- **Layout and Positioning**:\n                    - `flex flex-row items-start`: Arranges items horizontally.\n                    - `space-x-0 pr-10`: Sets spacing between link elements and padding on the right side.\n                - **Interactive Styles**:\n                    - `transition-all`: Smoothly animates any changes in styles, like color.\n                    - `hover:text-neutral-800 dark:hover:text-neutral-200`: Changes text color on hover, with light/dark mode options.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "79.",
      "chapterTitle": "Summary",
      "subsections": [
        {
          "title": "",
          "content": "The component is a responsive, sticky sidebar with dynamically generated navigation links, styled for smooth interaction. This setup is efficient and easy to update, as any changes in `navItems` will automatically reflect in the navbar.\n\n            - I asked ChatGPT to further explain the `<nav>` part of the code, specifically how it serves to render links dynamically instead of it being hard coded.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "80.",
      "chapterTitle": "Code Breakdown",
      "subsections": [
        {
          "title": "",
          "content": "1. **Dynamic Link Rendering with `map()`**:\n                    - `Object.entries(navItems)` converts the `navItems` object into an array of key-value pairs.\n                    - Each entry in `navItems` becomes an array `[path, { name }]`, where:\n                        - `path` represents the key (typically a URL path).\n                        - `{ name }` is the value, containing additional properties, specifically the `name` in this case, which is used as the link text.\n                    - `.map(([path, { name }]) => { ... })` iterates over each pair, creating a new `<Link>` component for each one.\n                2. **`<Link>` Component for Navigation**:\n                    - **`key={path}`**: This unique identifier helps React track and manage each component efficiently, preventing re-rendering issues.\n                    - **`href={path}`**: Specifies the URL path for the link. Clicking on the link will navigate to the path specified in `navItems`.\n                    - **`className`**:\n                        - Tailwind CSS classes here handle styling and responsiveness.\n                        - `transition-all` allows smooth transitions for all styles that change on hover or interaction.\n                        - `hover:text-neutral-200 dark:hover:text-neutral-200`: Changes the link text color to a neutral tone when hovered over, with a darker color in dark mode.\n                        - `flex align-middle relative py-1 px-2 m-1`: Styles the link layout and spacing, setting it as a flex container and applying padding and margins to control spacing around each link.\n                3. **`{name}`**:\n                    - `{name}` inside `<Link>` displays the name associated with each `path` in `navItems`. This means each link text corresponds to its associated name in the `navItems` object.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "81.",
      "chapterTitle": "Example `navItems` Object",
      "subsections": [
        {
          "title": "",
          "content": "Suppose `navItems` is structured like this:\n\n                ```jsx\n                javascript\n                Copy code\n                const navItems = {\n                  '/home': { name: 'Home' },\n                  '/about': { name: 'About' },\n                  '/contact': { name: 'Contact' },\n                };\n\n                ```\n\n                The `map()` function would generate the following:\n\n                ```jsx\n                jsx\n                Copy code\n                <div className=\"flex flex-row space-x-0 pr-10\">\n                  <Link href=\"/home\" key=\"/home\" className=\"transition-all ...\">Home</Link><Link href=\"/about\" key=\"/about\" className=\"transition-all ...\">About</Link><Link href=\"/contact\" key=\"/contact\" className=\"transition-all ...\">Contact</Link>\n                </div>\n\n                ```\n\n                This approach makes the navigation menu flexible and easy to maintain, as adding or removing items from `navItems` will update the navbar links automatically without needing to modify the JSX.\n\n        - **It is 4:45pm*** (Restarting from scratch with the Next.js Boilerplate template)\n\n            Okay I will admit, I kind of broke through and did not do much of documentation for my progress on this. So I am currently writing all of this in retrospect at 10:51pm.\n\n            But the Boilerplate template has proven to be significantly easier to figure and to build from, and most importantly comes with Tailwind installed and properly functioning with the tailwind.config.ts file, Geist font working and able to be called throughout the source code and lastly just a simpler base to iteratively build upon. \n\n            ![This is how the Boilerplate template looks like. ](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2019.png)\n\n            This is how the Boilerplate template looks like. \n\n            [And this is the progress I’ve made tweaking the html and Tailwind code.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/Screen_Recording_2024-10-30_at_10.55.30_PM.mov)\n\n            And this is the progress I’ve made tweaking the html and Tailwind code.\n\n            - <main> code from above\n\n                ```tsx\n                export default function Home() {\n                  return (\n                    <div className=\"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]\">\n                      <main className=\"flex flex-col gap-10 row-start-2 items-center sm:items-start\">\n                        <h1 className=\"transition-all hover:text-neutral-300 hover:text-6xl text-5xl font-bold tracking-tight\">\n                          Hello World.\n                          </h1>\n                        <ol className=\"list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]\">\n                          <li className=\"mb-2\">\n                            Line 1{\" \"}\n                            <code className=\"bg-black/[0.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold\">\n                              Highlighted Text\n                            </code>\n                            .\n                          </li>\n                          <li>Line 2</li>\n                        </ol>\n\n                        <div className=\"flex gap-4 items-center flex-col sm:flex-row\">\n                          <a\n                            className=\"rounded-full transition-all flex items-center justify-center bg-foreground font-bold text-background dark:text-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 text-sm text-neutral-100 hover:text-neutral-900 sm:text-base h-10 sm:h-12 px-5 sm:min-w-44 hover:scale-105\"\n                            href=\"https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app\"\n                            target=\"_blank\"\n                            rel=\"noopener noreferrer\"\n                          >\n                            Button 1\n                          </a>\n                          <a\n                            className=\"rounded-full transition-all flex items-center justify-center bg-neutral-200 font-bold text-foreground dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 text-sm text-neutral-100 hover:text-neutral-100 sm:text-base h-10 sm:h-12 px-5 sm:min-w-44 hover:scale-105\"\n                            href=\"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app\"\n                            target=\"_blank\"\n                            rel=\"noopener noreferrer\"\n                          >\n                            Button 2\n                          </a>\n                        </div>\n                      </main>\n                ```\n\n\n            I have to say, at this point at least, it is utterly bizarre that the Tailwind CSS code is way more decipherable than React and to a certain extent the Next.js code. It looks like the most lunatic implementation of code ever but after a bit of studying into the exact utility strings, it all started to make sense—it’s basically writing CSS drunk and with absolutely no regard to traditional CSS classes whatsoever. The CSS ‘class’ is whatever you define with the HTML you’re currently writing. \n\n            To be fair, this was where ChatGPT truly punched above it’s weight (as if it wasn’t already), when I asked for a cheat sheet of Tailwind utility strings—and it basically became a matter of referencing it whenever I needed to define CSS to a HTML element.\n\n            - **Said Tailwind cheat sheet**",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "82.",
      "chapterTitle": "1. **Container**",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                css\n                Copy code\n                container           /* Centered container with padding */\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "83.",
      "chapterTitle": "2. **Display**",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                css\n                Copy code\n                block, inline-block, inline, hidden, flex, inline-flex, grid, inline-grid, contents, list-item, table, table-caption, table-cell, table-column, table-row\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "84.",
      "chapterTitle": "3. **Positioning**",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                css\n                Copy code\n                static, fixed, absolute, relative, sticky, top-0, right-0, bottom-0, left-0\n                inset-0, inset-x-0, inset-y-0   /* Full width/height positioning */\n                z-0, z-10, z-20, z-30, z-auto\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "85.",
      "chapterTitle": "4. **Flexbox and Grid**",
      "subsections": [],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "86.",
      "chapterTitle": "Flexbox",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                css\n                Copy code\n                flex, flex-row, flex-row-reverse, flex-col, flex-col-reverse\n                flex-wrap, flex-wrap-reverse, flex-nowrap\n                place-content-center, place-items-center\n                justify-center, justify-start, justify-end, justify-around, justify-between, justify-evenly\n                items-center, items-start, items-end, items-baseline, items-stretch\n                self-center, self-start, self-end, self-auto\n                flex-none, flex-1, flex-grow, flex-grow-0, flex-shrink, flex-shrink-0\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "87.",
      "chapterTitle": "Grid",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                css\n                Copy code\n                grid, grid-cols-1, grid-cols-2, ..., grid-cols-12, grid-rows-1, ..., grid-rows-6\n                gap-0, gap-1, ..., gap-20\n                col-span-1, ..., col-span-12, col-start-1, ..., col-start-12, col-end-1, ..., col-end-12\n                row-span-1, ..., row-span-6, row-start-1, ..., row-start-6, row-end-1, ..., row-end-6\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "88.",
      "chapterTitle": "5. **Spacing**",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                css\n                Copy code\n                m-0, m-1, ..., m-96        /* Margin */\n                mx-0, my-0, mt-0, mr-0, mb-0, ml-0\n                p-0, p-1, ..., p-96        /* Padding */\n                px-0, py-0, pt-0, pr-0, pb-0, pl-0\n                space-x-0, space-y-0       /* Space between elements */\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "89.",
      "chapterTitle": "6. **Sizing**",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                css\n                Copy code\n                w-0, w-1, ..., w-96, w-auto, w-full, w-screen\n                min-w-0, min-w-full, min-w-screen\n                max-w-xs, max-w-sm, max-w-md, ..., max-w-full, max-w-screen-sm, ..., max-w-screen-2xl\n                h-0, h-1, ..., h-96, h-auto, h-full, h-screen\n                min-h-0, min-h-full, min-h-screen\n                max-h-0, max-h-full, max-h-screen\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "90.",
      "chapterTitle": "7. **Typography**",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                css\n                Copy code\n                text-left, text-center, text-right, text-justify\n                text-xs, text-sm, text-base, text-lg, text-xl, ..., text-9xl\n                font-sans, font-serif, font-mono, font-thin, font-light, font-normal, font-medium, font-semibold, font-bold, font-extrabold, font-black\n                italic, not-italic\n                uppercase, lowercase, capitalize, normal-case\n                underline, line-through, no-underline\n                tracking-tighter, tracking-tight, tracking-normal, tracking-wide, tracking-wider, tracking-widest\n                leading-none, leading-tight, leading-snug, leading-normal, leading-relaxed, leading-loose\n                text-transparent, text-black, text-white, text-gray-100, ..., text-gray-900, text-red-500, ..., text-indigo-500\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "91.",
      "chapterTitle": "8. **Background**",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                css\n                Copy code\n                bg-fixed, bg-local, bg-scroll\n                bg-transparent, bg-black, bg-white, bg-gray-100, ..., bg-gray-900, bg-red-500, ..., bg-indigo-500\n                bg-opacity-0, ..., bg-opacity-100\n                bg-bottom, bg-center, bg-left, bg-left-bottom, bg-left-top, bg-right, bg-right-bottom, bg-right-top, bg-top\n                bg-cover, bg-contain, bg-auto\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "92.",
      "chapterTitle": "9. **Borders**",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                css\n                Copy code\n                border, border-0, border-2, border-4, border-8\n                border-t, border-r, border-b, border-l\n                border-transparent, border-black, border-white, border-gray-100, ..., border-gray-900\n                rounded-none, rounded-sm, rounded, rounded-md, rounded-lg, rounded-full\n                rounded-t-none, rounded-r-none, rounded-b-none, rounded-l-none, rounded-tl-none, rounded-tr-none, rounded-br-none, rounded-bl-none\n                border-solid, border-dashed, border-dotted, border-double, border-none\n                border-opacity-0, ..., border-opacity-100\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "93.",
      "chapterTitle": "10. **Effects**",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                css\n                Copy code\n                shadow, shadow-xs, shadow-sm, shadow-md, shadow-lg, shadow-xl, shadow-2xl, shadow-inner, shadow-outline, shadow-none\n                opacity-0, ..., opacity-100\n                filter, blur-sm, blur, blur-md, blur-lg, brightness-50, brightness-75, brightness-100, contrast-50, contrast-75, contrast-100, grayscale, invert, sepia\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "94.",
      "chapterTitle": "11. **Tables**",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                css\n                Copy code\n                table-auto, table-fixed\n                border-collapse, border-separate\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "95.",
      "chapterTitle": "12. **Transitions and Animations**",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                css\n                Copy code\n                transition, transition-none, transition-all, transition-colors, transition-opacity, transition-shadow, transition-transform\n                duration-75, duration-100, duration-150, ..., duration-1000\n                ease-linear, ease-in, ease-out, ease-in-out\n                delay-75, delay-100, delay-150, ..., delay-1000\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "96.",
      "chapterTitle": "13. **Transforms**",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                css\n                Copy code\n                transform, transform-gpu\n                scale-0, scale-50, ..., scale-100, scale-105, scale-110\n                rotate-0, rotate-45, rotate-90, rotate-180, -rotate-45, -rotate-90, -rotate-180\n                translate-x-0, translate-x-1, ..., translate-x-full, -translate-x-1, ..., -translate-x-full\n                translate-y-0, translate-y-1, ..., translate-y-full, -translate-y-1, ..., -translate-y-full\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "97.",
      "chapterTitle": "14. **Interactivity**",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                css\n                Copy code\n                cursor-auto, cursor-default, cursor-pointer, cursor-wait, cursor-move, cursor-not-allowed\n                select-none, select-text, select-all, select-auto\n                resize-none, resize-y, resize-x, resize\n                appearance-none\n                pointer-events-none, pointer-events-auto\n                outline-none, outline-white, outline-black\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "98.",
      "chapterTitle": "15. **Visibility and Screen Readers**",
      "subsections": [
        {
          "title": "",
          "content": "I am aware however, that this is just the beginning and pure child’s play level of Tailwind implementation, and the perils of Tailwind that i’ve heard so much about have yet to manifest themselves.\n\n            ![My live thoughts on Tailwind as it slowly started to click at 5:31pm.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2020.png)\n\n            My live thoughts on Tailwind as it slowly started to click at 5:31pm.\n\n            I think this is good enough progress for today. I will attempt a light and dark mode toggle switch, and to further explore background / foreground colour Tailwind definitions and implementation tomorrow.\n\n            ```tsx\n            theme: {\n                extend: {\n                  colors: {\n                    background: \"var(--background)\",\n                    foreground: \"var(--foreground)\",\n                  },\n                },\n              },\n            ```\n\n    - **31 October*** (Dark mode toggle)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "99.",
      "chapterTitle": "Dark Mode toggle button",
      "subsections": [
        {
          "title": "",
          "content": "Good morning. It is time to attempt a dark mode toggle button for the site. There isn’t a goal behind this, just thought it’d be something minute that’s worth an attempt at implementing and to grasp a better understand of how something like this would be implemented with React.\n\n        - I asked ChatGPT on the implementation.\n\n            To implement a dark mode toggle in your Next.js app without relying on local storage, you can use a simple state management approach with React's `useState` hook. Below is a step-by-step guide on how to implement a dark mode toggle button in your `Home` component.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "100.",
      "chapterTitle": "Step 1: Update the Component",
      "subsections": [
        {
          "title": "",
          "content": "You’ll want to add a state variable to track whether dark mode is enabled, and then conditionally apply the dark class to the outer `div`. Here’s how you can do that:\n\n            ```jsx\n            javascript\n            Copy code\n            import { useState } from \"react\";\n            import Image from \"next/image\";\n\n            export default function Home() {\n              // State variable to track dark mode\n              const [isDarkMode, setIsDarkMode] = useState(false);\n\n              // Toggle dark mode\n              const toggleDarkMode = () => {\n                setIsDarkMode(!isDarkMode);\n              };\n\n              return (\n                <div\n                  className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ${isDarkMode ? 'dark' : ''}`}\n                >\n                  <main className=\"flex flex-col gap-10 row-start-2 items-center sm:items-start\">\n                    <h1 className=\"transition-all hover:text-neutral-300 hover:text-6xl text-5xl font-bold tracking-tight\">\n                      Hello World.\n                    </h1>\n\n                    <ol className=\"list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]\">\n                      <li className=\"mb-2\">\n                        Line 1{\" \"}\n                        <code className=\"bg-black/[0.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold\">\n                          Highlighted Text\n                        </code>\n                        .\n                      </li>\n                      <li>Line 2</li>\n                    </ol>\n\n                    <div className=\"flex gap-4 items-center flex-col sm:flex-row\">\n                      <a\n                        className=\"rounded-full transition-all flex items-center justify-center bg-foreground font-bold text-background dark:text-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 text-sm text-neutral-100 hover:text-neutral-900 sm:text-base h-10 sm:h-12 px-5 sm:min-w-44\"\n                        href=\"https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app\"\n                        target=\"_blank\"\n                        rel=\"noopener noreferrer\"\n                      >\n                        Button 1\n                      </a>\n                      <a\n                        className=\"rounded-full transition-all flex items-center justify-center bg-neutral-200 font-bold text-foreground dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 text-sm text-neutral-100 hover:text-neutral-100 sm:text-base h-10 sm:h-12 px-5 sm:min-w-44\"\n                        href=\"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app\"\n                        target=\"_blank\"\n                        rel=\"noopener noreferrer\"\n                      >\n                        Button 2\n                      </a>\n                    </div>\n\n                    {/* Dark Mode Toggle Button */}\n                    <button\n                      onClick={toggleDarkMode}\n                      className=\"mt-4 p-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white\"\n                    >\n                      Toggle Dark Mode\n                    </button>\n                  </main>\n\n                  <footer className=\"row-start-3 flex gap-6 flex-wrap items-center justify-center\">\n                    <a\n                      className=\"flex items-center gap-2 hover:underline hover:underline-offset-4\"\n                      href=\"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app\"\n                      target=\"_blank\"\n                      rel=\"noopener noreferrer\"\n                    >\n                      <Image\n                        aria-hidden\n                        src=\"/file.svg\"\n                        alt=\"File icon\"\n                        width={16}\n                        height={16}\n                      />\n                      Learn\n                    </a>\n                    <a\n                      className=\"flex items-center gap-2 hover:underline hover:underline-offset-4\"\n                      href=\"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app\"\n                      target=\"_blank\"\n                      rel=\"noopener noreferrer\"\n                    >\n                      <Image\n                        aria-hidden\n                        src=\"/window.svg\"\n                        alt=\"Window icon\"\n                        width={16}\n                        height={16}\n                      />\n                      Examples\n                    </a>\n                    <a\n                      className=\"flex items-center gap-2 hover:underline hover:underline-offset-4\"\n                      href=\"https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app\"\n                      target=\"_blank\"\n                      rel=\"noopener noreferrer\"\n                    >\n                      <Image\n                        aria-hidden\n                        src=\"/globe.svg\"\n                        alt=\"Globe icon\"\n                        width={16}\n                        height={16}\n                      />\n                      Go to nextjs.org →\n                    </a>\n                  </footer>\n                </div>\n              );\n            }\n\n            ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "101.",
      "chapterTitle": "Explanation:",
      "subsections": [
        {
          "title": "",
          "content": "1. **State Management**: The `useState` hook initializes a `isDarkMode` state variable to `false` by default.\n            2. **Toggle Function**: The `toggleDarkMode` function toggles the `isDarkMode` state when the button is clicked.\n            3. **Conditional Class Application**: The `dark` class is conditionally added to the main `div` based on the `isDarkMode` state. This class enables the dark mode styles defined in your Tailwind CSS setup.\n            4. **Button**: A button is added to the UI that toggles dark mode when clicked. The button has styles that change based on the current mode (light or dark).",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "102.",
      "chapterTitle": "Benefits:",
      "subsections": [
        {
          "title": "",
          "content": "- **No Local Storage**: This implementation does not require local storage, so the user's choice of theme resets every time the page is refreshed.\n            - **Simplicity**: It’s a straightforward implementation using React's state management.\n\n            Feel free to customize the button styles or text to fit your application's design!\n\n\n        ![page.tsx is currently a Server rendered component by default.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2021.png)\n\n        page.tsx is currently a Server rendered component by default.\n\n        Interestingly enough, ChatGPT did not take into account the fact that the current `page.tsx` is a Server component by default and that the React hook `useState` requires the component to be a client one.",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "This I actually understood, and realised the error.",
          "content": "Now I have to convert `page.tsx` into a client component, I kind of know how to do this from my learnings from the Next.js documentation above, at least in theory. Let’s see whether it pans out…\n\n        - Recap on Server & Client components from Next.js Documentation",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "103.",
      "chapterTitle": "[**Using Client Components**](https://nextjs.org/learn/react-foundations/server-and-client-components#using-client-components)",
      "subsections": [
        {
          "title": "",
          "content": "As you learned in the last chapter, Next.js uses Server Components by default - this is to improve your application's performance and means you don't have to take additional steps to adopt them.\n\n            Looking back at the error in your browser, Next.js is warning you that you're trying to `useState` inside a Server Component. You can fix this by moving the interactive \"Like\" button to a Client Component.\n\n            Create a new file called `like-button.js` inside the `app` folder that exports a `LikeButton` component:\n\n            /app/like-button.js\n\n            ```\n            export default function LikeButton() {}\n            ```\n\n            Move the `<button>` element and the `handleClick()` function from `page.js` to your new `LikeButton` component:\n\n            /app/like-button.js\n\n            ```\n            export default function LikeButton() {  function handleClick() {    setLikes(likes + 1);  }   return <button onClick={handleClick}>Like ({likes})</button>;}\n            ```\n\n            Next, move the `likes` state and the import:\n\n            /app/like-button.js\n\n            ```\n            import { useState } from 'react'; export default function LikeButton() {  const [likes, setLikes] = useState(0);   function handleClick() {    setLikes(likes + 1);  }   return <button onClick={handleClick}>Like ({likes})</button>;}\n            ```\n\n            Now, to make the `LikeButton` a Client Component, add the React `'use client'` directive at the top of the file. This tells React to render the component on the client.\n\n            /app/like-button.js\n\n            ```\n            'use client'; import { useState } from 'react'; export default function LikeButton() {  const [likes, setLikes] = useState(0);   function handleClick() {    setLikes(likes + 1);  }   return <button onClick={handleClick}>Like ({likes})</button>;}\n            ```\n\n            Back in your `page.js` file, import the `LikeButton` component into your page:\n\n            /app/page.js\n\n            ```\n            import LikeButton from './like-button'; function Header({ title }) {  return <h1>{title ? title : 'Default title'}</h1>;} export default function HomePage() {  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];   return (    <div>      <Header title=\"Develop. Preview. Ship.\" />      <ul>        {names.map((name) => (          <li key={name}>{name}</li>        ))}      </ul>      <LikeButton />    </div>  );}\n            ```\n\n            Save both files and view your app in the browser. Now that there are no errors, once you make changes and save, you should notice the browser automatically updates to reflect the change.\n\n            This feature is called [Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh). It gives you instantaneous feedback on any edits you make and comes pre-configured with Next.js.\n\n\n        ![Separate dark-mode-toggle.tsx file just for the client-side toggle button.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2022.png)\n\n        Separate dark-mode-toggle.tsx file just for the client-side toggle button.\n\n        Following the Next.js documentation, I have ported the dark mode code over to a separate client-side .tsx file that exports the component as darkModeToggle.\n\n        I followed up by importing darkModeToggle into the root page.tsx and placed <darkModeToggle/> into the <body> of page.tsx.\n\n        If you’re a seasoned React developer I’m certain you’re already shaking your head in disapproval at this point. If you’re not a seasoned React developer however, which I am obviously not as well, the below error is both an obvious oversight when it comes to React code and a key learning reminder.\n\n        ![The error log very helpfully states that React components have to be in PascalCase](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2023.png)\n\n        The error log very helpfully states that React components have to be in PascalCase\n\n        React components have to be in PascalCase. I exported darkModeToggle in conventional camelCase and thus it spat it back at me with this error log.\n\n        Reformatting darkModeToggle into PascalCase gave me the below:\n\n        ![I now have a Dark Mode toggle button!](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2024.png)\n\n        I now have a Dark Mode toggle button!\n\n        Alas, the button does not work.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "104.",
      "chapterTitle": "Post-troubleshooting",
      "subsections": [
        {
          "title": "",
          "content": "Wow, okay. It is currently 12:05pm. Migrating the `darkModeToggle` React state to a separate client-side component which was `dark-mode-toggle.tsx` wasn’t as straightforward as it seemed to get it work. \n\n        I had to go through many frustrating rounds with ChatGPT to troubleshoot the issue of the button not working. \n\n        I eventually find myself having the `isDarkMode` state nested within `layout.tsx` which honestly isn’t ideal, because `layout.tsx` is now client-side, which is not compatible with the Metadata code which resides here as well.\n\n        - Current layout.tsx code\n\n            ```tsx\n            'use client';\n            import {useState} from \"react\";\n            import DarkModeToggle from \"./dark-mode-toggle\";\n            import type { Metadata } from \"next\";\n            import localFont from \"next/font/local\";\n            import \"./globals.css\";\n\n            const geistSans = localFont({\n              src: \"./fonts/GeistVF.woff\",\n              variable: \"--font-geist-sans\",\n              weight: \"100 900\",\n            });\n            const geistMono = localFont({\n              src: \"./fonts/GeistMonoVF.woff\",\n              variable: \"--font-geist-mono\",\n              weight: \"100 900\",\n            });\n\n            // export const metadata: Metadata = {\n            //   title: \"Create Next App\",\n            //   description: \"Generated by create next app\",\n            // };\n\n            export default function RootLayout({ children }: { children: React.ReactNode }) {\n              const [isDarkMode, setIsDarkMode] = useState(false);\n\n              const toggleDarkMode = () => {\n                setIsDarkMode(!isDarkMode);\n                console.log(\"Dark mode toggled:\", isDarkMode);\n              };\n\n              return (\n                <html className={isDarkMode ? \"dark\" : \"\"}>\n                  <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen transition-all`}>\n                    <main className=\"flex-grow\">{children}</main>\n                    <footer className=\"fixed bottom-14 left-0 right-14 flex gap-10 flex-wrap items-center justify-end \"> {/* Fixed footer */}\n                    <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>\n                    </footer>\n                  </body>\n                </html>\n              );\n            }\n\n            ```\n\n\n        But as of this `layout.tsx` code, the dark mode toggle button is working. Another solution that fixed the issue was also implementing `darkMode: 'class',` under `tailwind.config.ts`. I suspect that was the main issue in the first place, and that `isDarkMode` state can nested elsewhere instead of `layout.tsx`. But that will be for another time.\n\n        - Current tailwind.config.ts code\n\n            ```tsx\n            import type { Config } from \"tailwindcss\";\n\n            const config: Config = {\n              darkMode: 'class', \n              content: [\n                \"./pages/**/*.{js,ts,jsx,tsx,mdx}\",\n                \"./components/**/*.{js,ts,jsx,tsx,mdx}\",\n                \"./app/**/*.{js,ts,jsx,tsx,mdx}\",\n              ],\n              theme: {\n                extend: {\n                  colors: {\n                    background: \"var(--background)\",\n                    foreground: \"var(--foreground)\",\n                  },\n                  scale: {\n                    '120':'1.20',\n                  }\n                },\n              },\n              plugins: [],\n            };\n            export default config;\n\n            ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "105.",
      "chapterTitle": "Dark Mode button with Tailwind styling",
      "subsections": [
        {
          "title": "",
          "content": "After I got the button functionally working, I dived into styling it with Tailwind. This was a little bit of a headache as well as the button was initially placed not only at the bottom of the screen, but overflowed below—which meant you had to scroll down to even see the button.\n\n        This was solved by implementing `fixed`, I placed it in `<footer>` after all and as such it makes sense for it to be fixed in position at the bottom. I also added a margin of -14. \n\n        - Tailwind code for the footer\n\n            ```jsx\n            <footer className=\"fixed bottom-14 left-0 right-14 flex gap-10 flex-wrap items-center justify-end \">\n                    <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>\n                    </footer>\n            ```\n\n        - Tailwind code for the button\n\n            ```tsx\n             <button\n                  onClick={toggleDarkMode}\n                  className=\"transition-all duration-200 p-4 rounded-full border-2 border-foreground text-foreground hover:scale-120 hover:border-background hover:bg-neutral-800 hover:dark:bg-neutral-200 hover:text-background font-bold tracking-tight\"\n                >\n                  {isDarkMode ? 'Light' : 'Dark'} \n                </button>\n            ```\n\n\n        Naturally I also explored having the text within the button change between ‘Dark’ and ‘Light’ depending on the current state of the theme. \n\n        Obviously, I had to ask ChatGPT on this as this is very much React state implementation and that entire realm still hurts my mind. The code that ChatGPT returned back to me still hurt nevertheless, but a little more forgiving than if I were to figure it out on my own—that is to say it would’ve been nigh impossible. \n\n        - ChatGPT implementation\n\n            To implement the feature where the button text changes from \"Dark\" to \"Light\" based on the current mode, you can follow these steps:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "106.",
      "chapterTitle": "Step 1: Update the DarkModeToggle Component",
      "subsections": [
        {
          "title": "",
          "content": "You'll need to pass the `isDarkMode` state as a prop to the `DarkModeToggle` component. Based on this state, you can conditionally render the button text.\n\n            Here's how to modify your existing `DarkModeToggle` component:",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "`dark-mode-toggle.tsx`",
          "content": "```tsx\n            tsx\n            Copy code\n            'use client';\n            import { FC } from \"react\";\n\n            interface DarkModeToggleProps {\n              toggleDarkMode: () => void;\n              isDarkMode: boolean; // Add isDarkMode prop\n            }\n\n            const DarkModeToggle: FC<DarkModeToggleProps> = ({ toggleDarkMode, isDarkMode }) => {\n              return (\n                <button\n                  onClick={toggleDarkMode}\n                  className=\"transition-all p-4 rounded-full border-2 border-foreground text-foreground hover:scale-120 hover:border-background hover:bg-neutral-800 hover:dark:bg-neutral-200 hover:text-background font-bold tracking-tight\"\n                >\n                  {isDarkMode ? 'Light' : 'Dark'} {/* Change text based on isDarkMode */}\n                </button>\n              );\n            };\n\n            export default DarkModeToggle;\n\n            ```",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "107.",
      "chapterTitle": "Step 2: Update the Root Layout",
      "subsections": [
        {
          "title": "",
          "content": "You need to pass the `isDarkMode` state to the `DarkModeToggle` component in your `RootLayout`.\n\n            Here's how to modify your `layout.tsx` code:",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "`layout.tsx`",
          "content": "```tsx\n            tsx\n            Copy code\n            'use client';\n            import { useState } from \"react\";\n            import DarkModeToggle from \"./dark-mode-toggle\";\n            import type { Metadata } from \"next\";\n            import localFont from \"next/font/local\";\n            import \"./globals.css\";\n\n            const geistSans = localFont({\n              src: \"./fonts/GeistVF.woff\",\n              variable: \"--font-geist-sans\",\n              weight: \"100 900\",\n            });\n            const geistMono = localFont({\n              src: \"./fonts/GeistMonoVF.woff\",\n              variable: \"--font-geist-mono\",\n              weight: \"100 900\",\n            });\n\n            export default function RootLayout({ children }: { children: React.ReactNode }) {\n              const [isDarkMode, setIsDarkMode] = useState(false);\n\n              const toggleDarkMode = () => {\n                setIsDarkMode(!isDarkMode);\n              };\n\n              return (\n                <html className={isDarkMode ? \"dark\" : \"\"}>\n                  <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>\n                    {children}\n                    <footer className=\"flex gap-1 flex-wrap items-center justify-center py-4\">\n                      {/* Pass isDarkMode to the DarkModeToggle */}\n                      <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />\n                    </footer>\n                  </body>\n                </html>\n              );\n            }\n\n            ```",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "108.",
      "chapterTitle": "Summary",
      "subsections": [
        {
          "title": "",
          "content": "With these changes, when you click the button, it will toggle the dark mode state, and the button text will change accordingly between \"Dark\" and \"Light\". This way, users will have a clear indication of the action they are about to take with the button.\n\n\n        I think I am able to make sense of the implementation of React here, but it is still immensely daunting and incomprehensible to write from scratch. I am beginning to get the logic of the implementation, but the mechanics of the code is… hard.\n\n        [Screen Recording 2024-10-31 at 12.26.31 PM.mov](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/Screen_Recording_2024-10-31_at_12.26.31_PM.mov)\n\n        Dark mode toggle now works site-wide. I am done.\n\n    - 01 November (Tailwind Documentation readings)\n\n\n        - Tailwind Documentation\n            - Hover, Focus, States\n\n                A quick reference table of every single modifier included in Tailwind by default.\n\n                | **Modifier** | **CSS** |\n                | --- | --- |\n                | [**hover**](https://tailwindcss.com/docs/hover-focus-and-other-states#hover) | **`&:hover`** |\n                | [**focus**](https://tailwindcss.com/docs/hover-focus-and-other-states#focus) | **`&:focus`** |\n                | [**focus-within**](https://tailwindcss.com/docs/hover-focus-and-other-states#focus-within) | **`&:focus-within`** |\n                | [**focus-visible**](https://tailwindcss.com/docs/hover-focus-and-other-states#focus-visible) | **`&:focus-visible`** |\n                | [**active**](https://tailwindcss.com/docs/hover-focus-and-other-states#active) | **`&:active`** |\n                | [**visited**](https://tailwindcss.com/docs/hover-focus-and-other-states#visited) | **`&:visited`** |\n                | [**target**](https://tailwindcss.com/docs/hover-focus-and-other-states#target) | **`&:target`** |\n                | [*****](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-direct-children) | **`& > *`** |\n                | [**has**](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-descendants) | **`&:has`** |\n                | [**first**](https://tailwindcss.com/docs/hover-focus-and-other-states#first) | **`&:first-child`** |\n                | [**last**](https://tailwindcss.com/docs/hover-focus-and-other-states#last) | **`&:last-child`** |\n                | [**only**](https://tailwindcss.com/docs/hover-focus-and-other-states#only) | **`&:only-child`** |\n                | [**odd**](https://tailwindcss.com/docs/hover-focus-and-other-states#odd) | **`&:nth-child(odd)`** |\n                | [**even**](https://tailwindcss.com/docs/hover-focus-and-other-states#even) | **`&:nth-child(even)`** |\n                | [**first-of-type**](https://tailwindcss.com/docs/hover-focus-and-other-states#first-of-type) | **`&:first-of-type`** |\n                | [**last-of-type**](https://tailwindcss.com/docs/hover-focus-and-other-states#last-of-type) | **`&:last-of-type`** |\n                | [**only-of-type**](https://tailwindcss.com/docs/hover-focus-and-other-states#only-of-type) | **`&:only-of-type`** |\n                | [**empty**](https://tailwindcss.com/docs/hover-focus-and-other-states#empty) | **`&:empty`** |\n                | [**disabled**](https://tailwindcss.com/docs/hover-focus-and-other-states#disabled) | **`&:disabled`** |\n                | [**enabled**](https://tailwindcss.com/docs/hover-focus-and-other-states#enabled) | **`&:enabled`** |\n                | [**checked**](https://tailwindcss.com/docs/hover-focus-and-other-states#checked) | **`&:checked`** |\n                | [**indeterminate**](https://tailwindcss.com/docs/hover-focus-and-other-states#indeterminate) | **`&:indeterminate`** |\n                | [**default**](https://tailwindcss.com/docs/hover-focus-and-other-states#default) | **`&:default`** |\n                | [**required**](https://tailwindcss.com/docs/hover-focus-and-other-states#required) | **`&:required`** |\n                | [**valid**](https://tailwindcss.com/docs/hover-focus-and-other-states#valid) | **`&:valid`** |\n                | [**invalid**](https://tailwindcss.com/docs/hover-focus-and-other-states#invalid) | **`&:invalid`** |\n                | [**in-range**](https://tailwindcss.com/docs/hover-focus-and-other-states#in-range) | **`&:in-range`** |\n                | [**out-of-range**](https://tailwindcss.com/docs/hover-focus-and-other-states#out-of-range) | **`&:out-of-range`** |\n                | [**placeholder-shown**](https://tailwindcss.com/docs/hover-focus-and-other-states#placeholder-shown) | **`&:placeholder-shown`** |\n                | [**autofill**](https://tailwindcss.com/docs/hover-focus-and-other-states#autofill) | **`&:autofill`** |\n                | [**read-only**](https://tailwindcss.com/docs/hover-focus-and-other-states#read-only) | **`&:read-only`** |\n                | [**before**](https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after) | **`&::before`** |\n                | [**after**](https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after) | **`&::after`** |\n                | [**first-letter**](https://tailwindcss.com/docs/hover-focus-and-other-states#first-line-and-first-letter) | **`&::first-letter`** |\n                | [**first-line**](https://tailwindcss.com/docs/hover-focus-and-other-states#first-line-and-first-letter) | **`&::first-line`** |\n                | [**marker**](https://tailwindcss.com/docs/hover-focus-and-other-states#highlighted-text) | **`&::marker`** |\n                | [**selection**](https://tailwindcss.com/docs/hover-focus-and-other-states#selection) | **`&::selection`** |\n                | [**file**](https://tailwindcss.com/docs/hover-focus-and-other-states#file-input-buttons) | **`&::file-selector-button`** |\n                | [**backdrop**](https://tailwindcss.com/docs/hover-focus-and-other-states#dialog-backdrops) | **`&::backdrop`** |\n                | [**placeholder**](https://tailwindcss.com/docs/hover-focus-and-other-states#placeholder) | **`&::placeholder`** |\n                | [**sm**](https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints) | **`@media (min-width: 640px)`** |\n                | [**md**](https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints) | **`@media (min-width: 768px)`** |\n                | [**lg**](https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints) | **`@media (min-width: 1024px)`** |\n                | [**xl**](https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints) | **`@media (min-width: 1280px)`** |\n                | [**2xl**](https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints) | **`@media (min-width: 1536px)`** |\n                | [**min-[…]**](https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints) | **`@media (min-width: …)`** |\n                | [**max-sm**](https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints) | **`@media not all and (min-width: 640px)`** |\n                | [**max-md**](https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints) | **`@media not all and (min-width: 768px)`** |\n                | [**max-lg**](https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints) | **`@media not all and (min-width: 1024px)`** |\n                | [**max-xl**](https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints) | **`@media not all and (min-width: 1280px)`** |\n                | [**max-2xl**](https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints) | **`@media not all and (min-width: 1536px)`** |\n                | [**max-[…]**](https://tailwindcss.com/docs/hover-focus-and-other-states#responsive-breakpoints) | **`@media (max-width: …)`** |\n                | [**dark**](https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-color-scheme) | **`@media (prefers-color-scheme: dark)`** |\n                | [**portrait**](https://tailwindcss.com/docs/hover-focus-and-other-states#viewport-orientation) | **`@media (orientation: portrait)`** |\n                | [**landscape**](https://tailwindcss.com/docs/hover-focus-and-other-states#viewport-orientation) | **`@media (orientation: landscape)`** |\n                | [**motion-safe**](https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-reduced-motion) | **`@media (prefers-reduced-motion: no-preference)`** |\n                | [**motion-reduce**](https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-reduced-motion) | **`@media (prefers-reduced-motion: reduce)`** |\n                | [**contrast-more**](https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-contrast) | **`@media (prefers-contrast: more)`** |\n                | [**contrast-less**](https://tailwindcss.com/docs/hover-focus-and-other-states#prefers-contrast) | **`@media (prefers-contrast: less)`** |\n                | [**print**](https://tailwindcss.com/docs/hover-focus-and-other-states#print-styles) | **`@media print`** |\n                | [**supports-[…]**](https://tailwindcss.com/docs/hover-focus-and-other-states#supports-rules) | **`@supports (…)`** |\n                | [**aria-checked**](https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states) | **`&[aria-checked=“true”]`** |\n                | [**aria-disabled**](https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states) | **`&[aria-disabled=“true”]`** |\n                | [**aria-expanded**](https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states) | **`&[aria-expanded=“true”]`** |\n                | [**aria-hidden**](https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states) | **`&[aria-hidden=“true”]`** |\n                | [**aria-pressed**](https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states) | **`&[aria-pressed=“true”]`** |\n                | [**aria-readonly**](https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states) | **`&[aria-readonly=“true”]`** |\n                | [**aria-required**](https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states) | **`&[aria-required=“true”]`** |\n                | [**aria-selected**](https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states) | **`&[aria-selected=“true”]`** |\n                | [**aria-[…]**](https://tailwindcss.com/docs/hover-focus-and-other-states#aria-states) | **`&[aria-…]`** |\n                | [**data-[…]**](https://tailwindcss.com/docs/hover-focus-and-other-states#data-attributes) | **`&[data-…]`** |\n                | [**rtl**](https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support) | **`[dir=“rtl”] &`** |\n                | [**ltr**](https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support) | **`[dir=“ltr”] &`** |\n                | [**open**](https://tailwindcss.com/docs/hover-focus-and-other-states#open-closed-state) | **`&[open]`** |",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "109.",
      "chapterTitle": "[**​Pseudo-class reference**](https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-class-reference)",
      "subsections": [
        {
          "title": "",
          "content": "This is a comprehensive list of examples for all the pseudo-class modifiers included in Tailwind to complement the [**pseudo-classes documentation**](https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-classes) at the beginning of this guide.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "110.",
      "chapterTitle": "[**​hover (:hover)**](https://tailwindcss.com/docs/hover-focus-and-other-states#hover)",
      "subsections": [
        {
          "title": "",
          "content": "Style an element when the user hovers over it with the mouse cursor using the **`hover`** modifier:\n\n                ```html\n                <div class=\"bg-black hover:bg-white ...\"><!-- ... -->\n                </div>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "111.",
      "chapterTitle": "[**​focus (:focus)**](https://tailwindcss.com/docs/hover-focus-and-other-states#focus)",
      "subsections": [
        {
          "title": "",
          "content": "Style an element when it has focus using the **`focus`** modifier:\n\n                ```html\n                <input class=\"border-gray-300 focus:border-blue-400 ...\" />\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "112.",
      "chapterTitle": "[**​focus-within (:focus-within)**](https://tailwindcss.com/docs/hover-focus-and-other-states#focus-within)",
      "subsections": [
        {
          "title": "",
          "content": "Style an element when it or one of its descendants has focus using the **`focus-within`** modifier:\n\n                ```html\n                <div class=\"focus-within:shadow-lg ...\"><input type=\"text\" /></div>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "113.",
      "chapterTitle": "[**​focus-visible (:focus-visible)**](https://tailwindcss.com/docs/hover-focus-and-other-states#focus-visible)",
      "subsections": [
        {
          "title": "",
          "content": "Style an element when it has been focused using the keyboard using the **`focus-visible`** modifier:\n\n                ```html\n                <button class=\"focus:outline-none focus-visible:ring ...\">\n                  Submit\n                </button>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "114.",
      "chapterTitle": "[**​active (:active)**](https://tailwindcss.com/docs/hover-focus-and-other-states#active)",
      "subsections": [
        {
          "title": "",
          "content": "Style an element when it is being pressed using the **`active`** modifier:\n\n                ```html\n                <button class=\"bg-blue-500 active:bg-blue-600 ...\">\n                  Submit\n                </button>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "115.",
      "chapterTitle": "[**​visited (:visited)**](https://tailwindcss.com/docs/hover-focus-and-other-states#visited)",
      "subsections": [
        {
          "title": "",
          "content": "Style a link when it has already been visited using the **`visited`** modifier:\n\n                ```html\n                <a href=\"https://seinfeldquotes.com\" class=\"text-blue-600 visited:text-purple-600 ...\">\n                  Inspiration\n                </a>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "116.",
      "chapterTitle": "[**​target (:target)**](https://tailwindcss.com/docs/hover-focus-and-other-states#target)",
      "subsections": [
        {
          "title": "",
          "content": "Style an element if its ID matches the current URL fragment using the **`target`** modifier:\n\n                ```html\n                <div id=\"about\" class=\"target:shadow-lg ...\"><!-- ... -->\n                </div>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "117.",
      "chapterTitle": "[**​first (:first-child)**](https://tailwindcss.com/docs/hover-focus-and-other-states#first)",
      "subsections": [
        {
          "title": "",
          "content": "Style an element if it’s the first child using the **`first`** modifier:\n\n                ```html\n                <ul>\n                  {#each people as person}\n                    <li class=\"py-4 first:pt-0 ...\"><!-- ... -->\n                    </li>\n                  {/each}\n                </ul>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "118.",
      "chapterTitle": "[**​last (:last-child)**](https://tailwindcss.com/docs/hover-focus-and-other-states#last)",
      "subsections": [
        {
          "title": "",
          "content": "Style an element if it’s the last child using the **`last`** modifier:\n\n                ```html\n                <ul>\n                  {#each people as person}\n                    <li class=\"py-4 last:pb-0 ...\"><!-- ... -->\n                    </li>\n                  {/each}\n                </ul>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "119.",
      "chapterTitle": "[**​only (:only-child)**](https://tailwindcss.com/docs/hover-focus-and-other-states#only)",
      "subsections": [
        {
          "title": "",
          "content": "Style an element if it’s the only child using the **`only`** modifier:\n\n                ```html\n                <ul>\n                  {#each people as person}\n                    <li class=\"py-4 only:py-0 ...\"><!-- ... -->\n                    </li>\n                  {/each}\n                </ul>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "120.",
      "chapterTitle": "[**​odd (:nth-child(odd))**](https://tailwindcss.com/docs/hover-focus-and-other-states#odd)",
      "subsections": [
        {
          "title": "",
          "content": "Style an element if it’s an oddly numbered child using the **`odd`** modifier:\n\n                ```html\n                <table>\n                  {#each people as person}\n                    <tr class=\"bg-white odd:bg-gray-100 ...\"><!-- ... -->\n                    </tr>\n                  {/each}\n                </table>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "121.",
      "chapterTitle": "[**​even (:nth-child(even))**](https://tailwindcss.com/docs/hover-focus-and-other-states#even)",
      "subsections": [
        {
          "title": "",
          "content": "Style an element if it’s an evenly numbered child using the **`even`** modifier:\n\n                ```html\n                <table>\n                  {#each people as person}\n                    <tr class=\"bg-white even:bg-gray-100 ...\"><!-- ... -->\n                    </tr>\n                  {/each}\n                </table>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "122.",
      "chapterTitle": "[**​first-of-type (:first-of-type)**](https://tailwindcss.com/docs/hover-focus-and-other-states#first-of-type)",
      "subsections": [
        {
          "title": "",
          "content": "Style an element if it’s the first child of its type using the **`first-of-type`** modifier:\n\n                ```html\n                <nav><img src=\"/logo.svg\" alt=\"Vandelay Industries\" />\n                  {#each links as link}\n                    <a href=\"#\" class=\"ml-2 first-of-type:ml-6 ...\"><!-- ... -->\n                    </a>\n                  {/each}\n                </nav>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "123.",
      "chapterTitle": "[**​last-of-type (:last-of-type)**](https://tailwindcss.com/docs/hover-focus-and-other-states#last-of-type)",
      "subsections": [
        {
          "title": "",
          "content": "Style an element if it’s the last child of its type using the **`last-of-type`** modifier:\n\n                ```html\n                <nav><img src=\"/logo.svg\" alt=\"Vandelay Industries\" />\n                  {#each links as link}\n                    <a href=\"#\" class=\"mr-2 last-of-type:mr-6 ...\"><!-- ... -->\n                    </a>\n                  {/each}\n                  <button>More</button></nav>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "124.",
      "chapterTitle": "[**​only-of-type (:only-of-type)**](https://tailwindcss.com/docs/hover-focus-and-other-states#only-of-type)",
      "subsections": [
        {
          "title": "",
          "content": "Style an element if it’s the only child of its type using the **`only-of-type`** modifier:\n\n                ```html\n                <nav><img src=\"/logo.svg\" alt=\"Vandelay Industries\" />\n                  {#each links as link}\n                    <a href=\"#\" class=\"mx-2 only-of-type:mx-6 ...\"><!-- ... -->\n                    </a>\n                  {/each}\n                  <button>More</button></nav>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "125.",
      "chapterTitle": "[**​empty (:empty)**](https://tailwindcss.com/docs/hover-focus-and-other-states#empty)",
      "subsections": [
        {
          "title": "",
          "content": "Style an element if it has no content using the **`empty`** modifier:\n\n                ```html\n                <ul>\n                  {#each people as person}\n                    <li class=\"empty:hidden ...\">{person.hobby}</li>\n                  {/each}\n                </ul>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "126.",
      "chapterTitle": "[**​disabled (:disabled)**](https://tailwindcss.com/docs/hover-focus-and-other-states#disabled)",
      "subsections": [
        {
          "title": "",
          "content": "Style an input when it’s disabled using the **`disabled`** modifier:\n\n                ```html\n                <input class=\"disabled:opacity-75 ...\" />\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "127.",
      "chapterTitle": "[**​enabled (:enabled)**](https://tailwindcss.com/docs/hover-focus-and-other-states#enabled)",
      "subsections": [
        {
          "title": "",
          "content": "Style an input when it’s enabled using the **`enabled`** modifier, most helpful when you only want to apply another style when an element is not disabled:\n\n                ```html\n                <input class=\"enabled:hover:border-gray-400 disabled:opacity-75 ...\" />\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "128.",
      "chapterTitle": "[**​checked (:checked)**](https://tailwindcss.com/docs/hover-focus-and-other-states#checked)",
      "subsections": [
        {
          "title": "",
          "content": "Style a checkbox or radio button when it’s checked using the **`checked`** modifier:\n\n                ```html\n                <input type=\"checkbox\" class=\"appearance-none checked:bg-blue-500 ...\" />\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "129.",
      "chapterTitle": "[**​indeterminate (:indeterminate)**](https://tailwindcss.com/docs/hover-focus-and-other-states#indeterminate)",
      "subsections": [
        {
          "title": "",
          "content": "Style a checkbox or radio button in an indeterminate state using the **`indeterminate`** modifier:\n\n                ```html\n                <input type=\"checkbox\" class=\"appearance-none indeterminate:bg-gray-300 ...\" />\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "130.",
      "chapterTitle": "[**​default (:default)**](https://tailwindcss.com/docs/hover-focus-and-other-states#default)",
      "subsections": [
        {
          "title": "",
          "content": "Style an option, checkbox or radio button that was the default value when the page initially loaded using the **`default`** modifier:\n\n                ```html\n                <input type=\"checkbox\" class=\"default:ring-2 ...\" />\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "131.",
      "chapterTitle": "[**​required (:required)**](https://tailwindcss.com/docs/hover-focus-and-other-states#required)",
      "subsections": [
        {
          "title": "",
          "content": "Style an input when it’s required using the **`required`** modifier:\n\n                ```html\n                <input class=\"required:border-red-500 ...\" />\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "132.",
      "chapterTitle": "[**​valid (:valid)**](https://tailwindcss.com/docs/hover-focus-and-other-states#valid)",
      "subsections": [
        {
          "title": "",
          "content": "Style an input when it’s valid using the **`valid`** modifier:\n\n                ```html\n                <input class=\"valid:border-green-500 ...\" />\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "133.",
      "chapterTitle": "[**​invalid (:invalid)**](https://tailwindcss.com/docs/hover-focus-and-other-states#invalid)",
      "subsections": [
        {
          "title": "",
          "content": "Style an input when it’s invalid using the **`invalid`** modifier:\n\n                ```html\n                <input class=\"invalid:border-red-500 ...\" />\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "134.",
      "chapterTitle": "[**​in-range (:in-range)**](https://tailwindcss.com/docs/hover-focus-and-other-states#in-range)",
      "subsections": [
        {
          "title": "",
          "content": "Style an input when its value is within a specified range limit using the **`in-range`** modifier:\n\n                ```html\n                <input min=\"1\" max=\"5\" class=\"in-range:border-green-500 ...\" />\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "135.",
      "chapterTitle": "[**​out-of-range (:out-of-range)**](https://tailwindcss.com/docs/hover-focus-and-other-states#out-of-range)",
      "subsections": [
        {
          "title": "",
          "content": "Style an input when its value is outside of a specified range limit using the **`out-of-range`** modifier:\n\n                ```html\n                <input min=\"1\" max=\"5\" class=\"out-of-range:border-red-500 ...\" />\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "136.",
      "chapterTitle": "[**​placeholder-shown (:placeholder-shown)**](https://tailwindcss.com/docs/hover-focus-and-other-states#placeholder-shown)",
      "subsections": [
        {
          "title": "",
          "content": "Style an input when the placeholder is shown using the **`placeholder-shown`** modifier:\n\n                ```html\n                <input class=\"placeholder-shown:border-gray-500 ...\" placeholder=\"you@example.com\" />\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "137.",
      "chapterTitle": "[**​autofill (:autofill)**](https://tailwindcss.com/docs/hover-focus-and-other-states#autofill)",
      "subsections": [
        {
          "title": "",
          "content": "Style an input when it has been autofilled by the browser using the **`autofill`** modifier:\n\n                ```html\n                <input class=\"autofill:bg-yellow-200 ...\" />\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "138.",
      "chapterTitle": "[**​read-only (:read-only)**](https://tailwindcss.com/docs/hover-focus-and-other-states#read-only)",
      "subsections": [
        {
          "title": "",
          "content": "Style an input when it is read-only using the **`read-only`** modifier:\n\n                ```html\n                <input class=\"read-only:bg-gray-100 ...\" />\n                ```\n\n            - Breakpoints\n\n                First, make sure you’ve added the [**viewport meta tag**](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) to the **`<head>`** of your document:\n\n                ```html\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                ```\n\n                Then to add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the **`:`** character:\n\n                ```html\n                <!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->\n                <img class=\"w-16 md:w-32 lg:w-48\" src=\"...\">\n                ```\n\n                There are five breakpoints by default, inspired by common device resolutions:\n\n                | **Breakpoint prefix** | **Minimum width** | **CSS** |\n                | --- | --- | --- |\n                | **`sm`** | 640px | **`@media (min-width: 640px) { ... }`** |\n                | **`md`** | 768px | **`@media (min-width: 768px) { ... }`** |\n                | **`lg`** | 1024px | **`@media (min-width: 1024px) { ... }`** |\n                | **`xl`** | 1280px | **`@media (min-width: 1280px) { ... }`** |\n                | **`2xl`** | 1536px | **`@media (min-width: 1536px) { ... }`** |",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "139.",
      "chapterTitle": "[**Working mobile-first**](https://tailwindcss.com/docs/responsive-design#working-mobile-first)",
      "subsections": [
        {
          "title": "",
          "content": "By default, Tailwind uses a mobile-first breakpoint system, similar to what you might be used to in other frameworks like Bootstrap.\n\n                What this means is that unprefixed utilities (like **`uppercase`**) take effect on all screen sizes, while prefixed utilities (like **`md:uppercase`**) only take effect at the specified breakpoint *and above*.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "140.",
      "chapterTitle": "[**​Targeting mobile screens**](https://tailwindcss.com/docs/responsive-design#targeting-mobile-screens)",
      "subsections": [
        {
          "title": "",
          "content": "Where this approach surprises people most often is that to style something for mobile, you need to use the unprefixed version of a utility, not the **`sm:`** prefixed version. Don’t think of **`sm:`** as meaning “on small screens”, think of it as “at the small *breakpoint*“.",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "Don’t use `sm:` to target mobile devices",
          "content": "```html\n                <!-- This will only center text on screens 640px and wider, not on small screens -->\n                <div class=\"sm:text-center\"></div>\n                ```",
          "isCollapsible": true,
          "isExpanded": false
        },
        {
          "title": "Use unprefixed utilities to target mobile, and override them at larger breakpoints",
          "content": "```html\n                <!-- This will center text on mobile, and left align it on screens 640px and wider -->\n                <div class=\"text-center sm:text-left\"></div>\n                ```\n\n                For this reason, it’s often a good idea to implement the mobile layout for a design first, then layer on any changes that make sense for **`sm`** screens, followed by **`md`** screens, etc.\n\n            - Dark Mode\n\n\n            - \n\n        This will be a quick one, I only have 15 minutes to cram in a bit of documentation on my progress. But I am currently at the point where I am reading through Tailwind’s documentation for a better grasp on how I am going to be styling my React components moving on.\n\n        An important area I would like to acquaint myself with would be **CSS Flexbox**, I have zero understanding of how it all works right now and I am aware that it is basically core to developing a functional website in this day and age, alongside dark mode.\n\n    - 02 November (Dissecting some Tailwind code)\n        - It is 7:46pm\n\n            Today was an unproductive one, but I am here to cram in a bit just a bit more readings on Tailwind and to maybe ~~hopefully implement a site-wide navbar at the top.~~",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "141.",
      "chapterTitle": "Understanding CSS Flexbox",
      "subsections": [
        {
          "title": "",
          "content": "I did a bit of reading yesterday on CSS flexbox over here on this website, it has been immensely helpful as a cheat sheet to flex of sorts.\n\n            https://css-tricks.com/snippets/css/a-guide-to-flexbox/\n\n            I do feel that this reading is not going to be of much use and that I will only get a much better grasp of flex once I get started with actual implementation on the site itself.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "142.",
      "chapterTitle": "Dissecting the Tailwind code in the existing code",
      "subsections": [
        {
          "title": "",
          "content": "- `<main>` and <`div>` code on `page.tsx`\n\n                ```tsx\n                <div className=\"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]\">\n                      <main className=\"flex flex-col gap-10 row-start-2 items-center sm:items-start\">\n                ```\n\n\n            Under the `<main>` code I see the familiar flex and flex-col Tailwind utility strings. However under the `<div>` code I find myself looking at `grid` and `grid-rows[20px_1fr_20px]`—this is foreign to me.\n\n            - And so I asked ChatGPT to explain\n\n                This Tailwind code sets up a grid layout with specific row sizes, spacing, and styling. Let’s break down each part:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "143.",
      "chapterTitle": "Tailwind Classes Explained",
      "subsections": [
        {
          "title": "",
          "content": "1. **`grid`**: This enables CSS grid layout on the `<div>`, allowing content to be placed in rows and columns.\n                2. **`grid-rows-[20px_1fr_20px]`**: This customizes the grid’s row heights:\n                    - **`20px`**: The first row has a fixed height of 20px.\n                    - **`1fr`**: The middle row takes up the remaining available space (1 fraction unit).\n                    - **`20px`**: The last row has a fixed height of 20px as well.\n                    - This configuration is often used to position items like headers and footers with a central content area in between that can expand to fit the screen.\n                3. **`items-center`**: Aligns all items in the grid vertically to the center of their row.\n                4. **`justify-items-center`**: Centers items horizontally within their respective grid columns.\n                5. **`min-h-screen`**: Sets the minimum height of the `<div>` to the full height of the viewport (`100vh`), ensuring it spans the screen.\n                6. **`p-8`**: Adds 2rem (32px) padding on all sides.\n                7. **`pb-20`**: Adds 5rem (80px) padding specifically on the bottom. This additional padding could be for spacing content from a footer.\n                8. **`gap-16`**: Creates a 4rem (64px) gap between grid items, adding vertical spacing between rows.\n                9. **`sm:p-20`**: Sets padding on all sides to 5rem (80px) when on small screens or larger (breakpoint `sm`).\n                10. **`font-[family-name:var(--font-geist-sans)]`**: Applies a custom font family, `-font-geist-sans`, which has been defined in the CSS using a CSS variable.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "144.",
      "chapterTitle": "Summary",
      "subsections": [
        {
          "title": "",
          "content": "This layout is designed to:\n\n                - Divide the screen into three rows: two narrow fixed-height rows (often used for headers and footers) and one flexible middle row.\n                - Center its content vertically and horizontally within each grid area.\n                - Span the full height of the screen and adapt padding based on screen size for a balanced, responsive layout.\n\n                4o\n\n\n            Interesting. Im understanding this as having to define `grid` first in the `<div>`. And then defining CSS flexbox in the `<main>`within the`<div>`.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "145.",
      "chapterTitle": "<a href> modifications",
      "subsections": [
        {
          "title": "",
          "content": "I am now exploring tweaking some of the existing placeholder text within the code. Something I’d like to note down just for future me would be this bit of code for buttons / links.\n\n            ```tsx\n            <a className=\"\"\"\n               href=\"\"\n               target=\"_blank\"\n               rel=\"noopener noreferrer\"\n            >\n            ```\n\n            With a focus on `target=\"_blank\"`, this opens the link in a new browser tab, I forsee this being an important definition in the near future.\n\n            - An important and interesting bit on  `*rel*=\"noopener noreferrer\"`",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "146.",
      "chapterTitle": "Important Note",
      "subsections": [
        {
          "title": "",
          "content": "For security reasons, when using `target=\"_blank\"`, it’s recommended to also add `rel=\"noopener noreferrer\"`, like so:\n\n                ```html\n                html\n                Copy code\n                <a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Open in New Tab</a>\n\n                ```\n\n                This prevents the new tab from gaining access to the `window.opener` object of the original page, which can help protect against certain types of security vulnerabilities (such as phishing attacks where the new tab can manipulate the original page).\n\n                4o",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "147.",
      "chapterTitle": "You said:",
      "subsections": [
        {
          "title": "",
          "content": "What does this mean\n                rel=\"noopener noreferrer\"",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "148.",
      "chapterTitle": "ChatGPT said:",
      "subsections": [
        {
          "title": "",
          "content": "ChatGPT\n\n                The `rel=\"noopener noreferrer\"` attribute is used with links that open in a new tab (when `target=\"_blank\"` is set). It has two key parts, each with a specific purpose:\n\n                1. **`noopener`**:\n                    - This prevents the newly opened page from having access to the original page’s `window.opener` property.\n                    - Without `noopener`, the new page can use `window.opener` to access and manipulate the original page, which can be a security risk.\n                    - For example, a malicious website could replace the original page's content with a fake login form, tricking users into entering sensitive information.\n                2. **`noreferrer`**:\n                    - This part prevents the browser from sending the \"referrer\" information (the URL of the page that contains the link) to the new page.\n                    - This can help with privacy, as the new page won't know which specific URL the user came from.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "149.",
      "chapterTitle": "Example of usage",
      "subsections": [
        {
          "title": "",
          "content": "```html\n                html\n                Copy code\n                <a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Visit Example</a>\n\n                ```\n\n                In this example:\n\n                - `noopener` enhances security by cutting off the new tab’s access to `window.opener`.\n                - `noreferrer` enhances privacy by not passing the referring URL to `example.com`.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "150.",
      "chapterTitle": "Why Use It?",
      "subsections": [
        {
          "title": "",
          "content": "When `target=\"_blank\"` is used to open links in a new tab, adding `rel=\"noopener noreferrer\"` is a good practice for both security and privacy reasons.\n\n\n            ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2025.png)\n\n            Think i’m done for the night. Explored the Tailwind code for the buttons and did a bit of tweaking with the gap, margins and paddings. \n\n            ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2026.png)\n\n            Also added a white border in the dark mode as the drop shadow property does not automatically invert in dark mode. I’m certain there’s a workaround for this but I’m happy to have them as just solid borders for now.\n\n            - Some ChatGPT explanations\n                - rel=”noopener noreferrer”\n\n                    What does this mean\n                    rel=\"noopener noreferrer\"",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "151.",
      "chapterTitle": "ChatGPT said:",
      "subsections": [
        {
          "title": "",
          "content": "ChatGPT\n\n                    The `rel=\"noopener noreferrer\"` attribute is used with links that open in a new tab (when `target=\"_blank\"` is set). It has two key parts, each with a specific purpose:\n\n                    1. **`noopener`**:\n                        - This prevents the newly opened page from having access to the original page’s `window.opener` property.\n                        - Without `noopener`, the new page can use `window.opener` to access and manipulate the original page, which can be a security risk.\n                        - For example, a malicious website could replace the original page's content with a fake login form, tricking users into entering sensitive information.\n                    2. **`noreferrer`**:\n                        - This part prevents the browser from sending the \"referrer\" information (the URL of the page that contains the link) to the new page.\n                        - This can help with privacy, as the new page won't know which specific URL the user came from.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "152.",
      "chapterTitle": "Example of usage",
      "subsections": [
        {
          "title": "",
          "content": "```html\n                    html\n                    Copy code\n                    <a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Visit Example</a>\n\n                    ```\n\n                    In this example:\n\n                    - `noopener` enhances security by cutting off the new tab’s access to `window.opener`.\n                    - `noreferrer` enhances privacy by not passing the referring URL to `example.com`.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "153.",
      "chapterTitle": "Why Use It?",
      "subsections": [
        {
          "title": "",
          "content": "When `target=\"_blank\"` is used to open links in a new tab, adding `rel=\"noopener noreferrer\"` is a good practice for both security and privacy reasons.\n\n                - Tailwind code for buttons\n\n                    Could you explain this tailwind code please\n\n                    <a\n                                className=\"rounded-full transition-all flex items-center justify-center \n                                bg-background drop-shadow hover:drop-shadow-xl font-bold text-foreground \n                                dark:border-2 dark:border-neutral-500\n                                sm:text-base h-10 sm:h-12 px-5 sm:min-w-44 hover:scale-105\"",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "154.",
      "chapterTitle": "ChatGPT said:",
      "subsections": [
        {
          "title": "",
          "content": "ChatGPT\n\n                    Sure! Let’s break down each part of this Tailwind CSS code to see what it does.\n\n                    ```html\n                    html\n                    Copy code\n                    <a\n                        className=\"rounded-full transition-all flex items-center justify-center\n                        bg-background drop-shadow hover:drop-shadow-xl font-bold text-foreground\n                        dark:border-2 dark:border-neutral-500\n                        sm:text-base h-10 sm:h-12 px-5 sm:min-w-44 hover:scale-105\"\n                    >\n\n                    ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "155.",
      "chapterTitle": "Explanation of Each Class",
      "subsections": [
        {
          "title": "",
          "content": "- **`rounded-full`**: This applies full border-radius to make the button completely rounded, like a circle or pill shape, depending on its width and height.\n                    - **`transition-all`**: Enables smooth transition effects on all properties that change (such as scale or shadow on hover).\n                    - **`flex`**: Turns the `<a>` element into a flex container, allowing better control over alignment for any child elements.\n                    - **`items-center`**: Vertically centers the content inside the flex container.\n                    - **`justify-center`**: Horizontally centers the content inside the flex container.\n                    - **`bg-background`**: Sets the background color to a custom color defined as `-background` in your Tailwind config (likely from your theme extension in `tailwind.config.ts`).\n                    - **`drop-shadow`**: Adds a subtle shadow around the element, making it stand out slightly.\n                    - **`hover:drop-shadow-xl`**: When hovered, this increases the shadow size to `xl`, giving a larger shadow effect and enhancing the hover effect visually.\n                    - **`font-bold`**: Sets the font weight to bold for a stronger, more pronounced look for the text.\n                    - **`text-foreground`**: Sets the text color to another custom color defined as `-foreground` in your Tailwind config.\n                    - **`dark:border-2`**: Adds a border of `2px` width when dark mode is active.\n                    - **`dark:border-neutral-500`**: Changes the border color to `neutral-500` in dark mode, which is a medium gray, for a subtle contrast in dark mode.\n                    - **`sm:text-base`**: Sets the font size to `base` (typically 16px) on small screens (`sm`) and larger. Without this, the font size will remain the default.\n                    - **`h-10 sm:h-12`**: Sets the height to `10` (2.5rem or 40px) on all screens, and increases it to `12` (3rem or 48px) on small screens and up.\n                    - **`px-5`**: Adds horizontal padding of `5` (1.25rem or 20px) on both left and right, providing space around the text or content.\n                    - **`sm:min-w-44`**: Sets a minimum width of `44` (11rem or 176px) on small screens and larger, ensuring the button has a consistent width on larger displays.\n                    - **`hover:scale-105`**: Slightly increases the scale (size) of the button by 5% on hover, adding a subtle zoom effect to enhance interactivity.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "156.",
      "chapterTitle": "Summary",
      "subsections": [
        {
          "title": "",
          "content": "This code styles an anchor (`<a>`) element as a rounded button with centered text, a background color, and a drop shadow. It adapts in size on small screens and includes a dark mode effect with an extra border. The hover effects enhance the button’s visibility and interactivity through increased shadow size and slight scaling.\n\n- 2. **Creating Pages**\n    - **04 November*** (Creating and routing pages + Documentation button)\n        - **It is 9:06am** (Creating pages & <link>)\n\n            I have about an hour of time, I intend to create a new page in this hour and to link it from the root page. Simple enough? We shall see.\n\n            ![This is a great start.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2027.png)\n\n            This is a great start.\n\n            This is odd, I followed the steps to create a new page on Next.js with the app router method and it is still returning this error to me. Time for some painful troubleshooting.\n\n            ![Success on localhost:3000/gallery](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2028.png)\n\n            Success on localhost:3000/gallery\n\n            Got it. I have a gallery page now. Turns out the issue was having a blank layout.tsx in the same folder, deleting it and only having the page.tsx in app/gallery solved the issue. I don’t quite understand why but I don’t really have time for that now.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "157.",
      "chapterTitle": "Linking Pages on the website",
      "subsections": [
        {
          "title": "",
          "content": "Now to link the pages I’ve just created to the root page as an exercise.\n\n            - Recapping from the React Documentation",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "158.",
      "chapterTitle": "[**The `<Link>` component**](https://nextjs.org/learn/dashboard-app/navigating-between-pages#the-link-component)",
      "subsections": [
        {
          "title": "",
          "content": "In Next.js, you can use the `<Link />` Component to link between pages in your application. `<Link>` allows you to do [client-side navigation](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works) with JavaScript.\n\n                To use the `<Link />` component, open `/app/ui/dashboard/nav-links.tsx`, and import the `Link` component from [`next/link`](https://nextjs.org/docs/app/api-reference/components/link). Then, replace the `<a>` tag with `<Link>`:\n\n                /app/ui/dashboard/nav-links.tsx\n\n                ```\n                import {  UserGroupIcon,  HomeIcon,  DocumentDuplicateIcon,} from '@heroicons/react/24/outline';import Link from 'next/link'; // ... export default function NavLinks() {  return (    <>      {links.map((link) => {        const LinkIcon = link.icon;        return (          <Link            key={link.name}            href={link.href}            className=\"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3\"          >            <LinkIcon className=\"w-6\" />            <p className=\"hidden md:block\">{link.name}</p>          </Link>        );      })}    </>  );}\n                ```\n\n                As you can see, the `Link` component is similar to using `<a>` tags, but instead of `<a href=\"…\">`, you use `<Link href=\"…\">`.\n\n                Save your changes and check to see if it works in your localhost. You should now be able to navigate between the pages without seeing a full refresh. Although parts of your application are rendered on the server, there's no full page refresh, making it feel like a web app. Why is that?\n\n\n            After reading and recapping that excerpt from the React Documentation on linking pages with <Link>, I realised how inapplicable and useless that bit of documentation was due to the already-almost-complete nature of their Dashboard tutorial and how it doesn’t instruct you well on creating a new page and setting up the links from scratch. \n\n            - And so I turned to ChatGPT\n\n                > So I now have a Gallery page set up. I would like to link this page to a button on my root page with <Link>. How do I do that?\n                >",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "159.",
      "chapterTitle": "ChatGPT said:",
      "subsections": [
        {
          "title": "",
          "content": "ChatGPT\n\n                To link your Gallery page to a button on the root page in Next.js, you can use the `<Link>` component provided by Next.js. Here’s how you can set it up:\n\n                1. **Import** the `Link` component from `next/link`.\n                2. **Wrap** your button inside the `<Link>` component and set the `href` attribute to your Gallery page path (e.g., `/gallery`).\n\n                Here’s an example of how it would look:\n\n                ```jsx\n                javascript\n                Copy code\n                // Root page component (e.g., page.tsx or index.tsx)\n\n                import Link from 'next/link';\n\n                export default function Home() {\n                  return (\n                    <div className=\"flex items-center justify-center h-screen\">\n                      <Link href=\"/gallery\">\n                        <a className=\"rounded-full transition-all bg-background drop-shadow hover:drop-shadow-xl font-bold text-foreground px-5 py-2 hover:scale-105\">\n                          Go to Gallery\n                        </a>\n                      </Link>\n                    </div>\n                  );\n                }\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "160.",
      "chapterTitle": "Explanation:",
      "subsections": [
        {
          "title": "",
          "content": "- **`<Link href=\"/gallery\">`**: This sets the path to the Gallery page.\n                - **Button Styling**: You can add any Tailwind CSS classes to style your button.\n                - **`<a>` tag inside `<Link>`**: Next.js automatically handles the routing, and it’s standard practice to use an `<a>` tag inside `<Link>` for styling and accessibility.\n\n                Now, when you click this button, it will navigate to the Gallery page without a full page reload, providing a smooth transition.\n\n\n            ![ChatGPT hallucinated me a solution.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2029.png)\n\n            ChatGPT hallucinated me a solution.\n\n            - I corrected ChatGPT\n\n                > This is incorrect, I am unable to have <a> tag inside <Link>. Could you give me a solution where I have the tailwind code inside <Link> instead?\n\n                <Link href=\"/gallery\">\n                            <a\n                              className=\"rounded-full transition-all flex items-center justify-center \n                              bg-background drop-shadow hover:drop-shadow-xl font-bold text-foreground \n                              dark:border-2 dark:border-neutral-500\n                              sm:text-base h-10 sm:h-12 px-5 sm:min-w-36 hover:scale-105\"\n                              href=\"\"\n                              rel=\"noopener noreferrer\"\n                            >\n                              Button 1\n                            </a>\n                          </Link>\n                >",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "161.",
      "chapterTitle": "ChatGPT said:",
      "subsections": [
        {
          "title": "",
          "content": "Starting in Next.js 13, the `<Link>` component no longer requires an `<a>` tag inside it for styling. You can apply the Tailwind CSS classes directly to the `<Link>` component. Here’s how you can set it up without the `<a>` tag:\n\n                ```jsx\n                javascript\n                Copy code\n                <Link\n                  href=\"/gallery\"\n                  className=\"rounded-full transition-all flex items-center justify-center\n                             bg-background drop-shadow hover:drop-shadow-xl font-bold text-foreground\n                             dark:border-2 dark:border-neutral-500 sm:text-base h-10 sm:h-12\n                             px-5 sm:min-w-36 hover:scale-105\"\n                  rel=\"noopener noreferrer\"\n                >\n                  Button 1\n                </Link>\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "162.",
      "chapterTitle": "Explanation:",
      "subsections": [
        {
          "title": "",
          "content": "- **Directly applied classes to `<Link>`**: This works with Next.js 13+ where `<Link>` supports direct styling without needing an inner `<a>`.\n                - **Attributes**: The `href` and `rel` attributes are applied to `<Link>` itself, and Tailwind styling is added as usual.\n\n                This should allow your Tailwind styles to be applied directly to the link button component without any issues.\n\n                4o\n\n\n            <aside>\n            <img src=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" alt=\"https://www.notion.so/icons/thought-alert_lightgray.svg\" width=\"40px\" />",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "163.",
      "chapterTitle": "ChatGPT said:",
      "subsections": [
        {
          "title": "",
          "content": "Starting in Next.js 13, the `<Link>` component no longer requires an `<a>` tag inside it for styling. You can apply the Tailwind CSS classes directly to the `<Link>` component. Here’s how you can set it up without the `<a>` tag:\n\n            </aside>\n\n            Much better, this makes sense. \n\n            ```tsx\n            <div className=\"flex gap-4 items-center flex-col sm:flex-row mt-2 -ml-1\">\n                      <Link href=\"/gallery\"\n                          className=\"rounded-full transition-all flex items-center justify-center \n                          bg-background drop-shadow hover:drop-shadow-xl font-bold text-foreground \n                          dark:border-2 dark:border-neutral-500\n                          sm:text-base h-10 sm:h-12 px-5 sm:min-w-36 hover:scale-105\"\n                          rel=\"noopener noreferrer\"\n                        >\n                          Gallery\n                      </Link>\n            ```\n\n            This works, button 1 on the home page now routes to the Gallery page that was just set up. Time to hook the second button up to the Resume page.\n\n            ![Success! I flipped the positions of Resume & Gallery while at it.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2030.png)\n\n            Success! I flipped the positions of Resume & Gallery while at it.\n\n            Done. My home page’s buttons now route to an About and a Gallery page. And i’m just about wrapped up after an hour—it being 09:56am now. This is great progress.\n\n        - **It is 4:52pm** (Button to this documentation)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "164.",
      "chapterTitle": "Link to Documentation",
      "subsections": [
        {
          "title": "",
          "content": "I would like to create a button that links to this Notion documentation here from the site. Ideally it would live on the bottom as part of the footer, but as baby steps I will attempt to link it from one of the existing buttons.\n\n            ![It works, you will just have to trust me on this.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2031.png)\n\n            It works, you will just have to trust me on this.\n\n            Okay it works. A simple `<a *href*=\"https://hissing-sphere-1e7.notion.site/Portfolio-Website-127a92ab668680ed91ddd0619057466f?pvs=74\"` works. This is good. Simple enough. Now to create a dedicated button for it in the footer.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "165.",
      "chapterTitle": "Creating a button in the footer",
      "subsections": [
        {
          "title": "",
          "content": "Works! I basically referenced the dark-mode-toggle button that I inserted into the footer under layout.tsx and created another instance for the documentation button and it worked just as I intended in my head. This is going too uncomfortably smoothly. \n\n            ![Two buttons!](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2032.png)\n\n            Two buttons!\n\n            This is not where I would like the button to live, obviously. But this is a good start. I also needed the button to open my documentation in a new tab and I knew past me saving the code for that for future me would’ve paid off, and future me is very thankful for past me. \n\n            Said code to open links in a new browser tab saved by past me.\n\n            Not to forget `*rel*=\"noopener noreferrer\"`.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "166.",
      "chapterTitle": "Positioning the button",
      "subsections": [
        {
          "title": "",
          "content": "![The buttons are now placed in their respective corners. I also tweaked the background to an off-white shade JUST for the sake of screenshots for my documentation here.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2033.png)\n\n            The buttons are now placed in their respective corners. I also tweaked the background to an off-white shade JUST for the sake of screenshots for my documentation here.\n\n            In regards to the positioning of the buttons, I had to use `justify-between` for the two buttons to be spread out within their flex container as defined in `<footer>`. Interestingly enough I’ve learnt that `justify-between` only works if you define `left-0 right-0` which forces the components in their flex container to span the width of the screen. Without it, the flex container will only span whatever that is within the container which is the two buttons.\n\n            ![Without `left-0 right-0`.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2034.png)\n\n            Without `left-0 right-0`.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "167.",
      "chapterTitle": "Animating the button",
      "subsections": [
        {
          "title": "",
          "content": "Bit of an ambitious goal here, but I would like to implement a function where the button to follow my documentation expands on `hover:`to expose the entire line “Follow my documentation here” instead of it being a long button right now. I have no idea how to implement this and I don’t even know if it is possible. But lets see.\n\n            I got help from ChatGPT on this, and I have myself a decent implementation of this function.\n\n            [The hover state for the line is disconnected with the hover state for the button.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/Untitled.mov)\n\n            The hover state for the line is disconnected with the hover state for the button.\n\n            However the `hover:` state for the rest of the button “my documentation here” applies only the line itself and not for the `hover:` state of the button. \n\n            As such, they are disconnected and hovering over the button to expand it will not necessarily cause the rest of the line to fade in as well. This is an issue. I have yet to find a solution to this where I am able to ‘group’ the hover states of both buttons. Almost sounds like a React state implementation (massive shudder), hope we don’t have to go there.\n\n            I don’t have time to figure this out now and will call it quits here for today.\n\n            [Current state of the website, 6:30pm, 04 November 2024.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/Screen_Recording_2024-11-04_at_6.23.01_PM.mov)\n\n            Current state of the website, 6:30pm, 04 November 2024.\n\n    - **05 November*** (Navbar + CSS Grids Page layout) ****\n        - **It is 10:45am** (Site-wide navigation bar)\n\n            I will give myself 20 minutes to troubleshoot the issue with the disconnected `hover:` states of the Documentation button. After which I will move on to implementing a site-wide navbar at the top. That will be quite the breakthrough if I do accomplish it by 1pm.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "168.",
      "chapterTitle": "Troubleshooting the Documentation button",
      "subsections": [
        {
          "title": "",
          "content": "It’s done. It is 11:04am. I got help from ChatGPT. Worked flawlessly the first time round. \n\n            - Prompt\n\n                Currently, the hover: states of the <a> and <span> are disconnected. Is there a way to connect the hover: states of both so that on hover: on the <a>, the <span>'s hover: state will also be visible?\n\n            - Answer\n\n                To ensure that the `<span>` becomes visible when you hover over the `<a>` element, you can make use of Tailwind's `group` utility. By adding `group` to the parent `<a>` and using `group-hover` on the `<span>`, the hover effect on the `<a>` will trigger the visibility change on the `<span>`. Here’s how to modify your code:\n\n                ```jsx\n                jsx\n                Copy code\n                <a\n                  href=\"https://hissing-sphere-1e7.notion.site/Portfolio-Website-127a92ab668680ed91ddd0619057466f\"\n                  className=\"\n                    group transition-all duration-200 ease-in-out\n                    p-3 rounded-full border-2 border-foreground text-foreground\n                    hover:bg-foreground hover:text-background\n                    font-bold tracking-tight\n                    overflow-hidden whitespace-nowrap\n                    w-20 hover:w-64\n                  \"\n                  target=\"_blank\"\n                  rel=\"noopener noreferrer\"\n                >\n                  Follow\n                  <span\n                    className=\"\n                      opacity-0 group-hover:opacity-100\n                      transition-opacity duration-300 ease-in-out ml-1.5\n                    \"\n                  >\n                    my documentation here\n                  </span>\n                </a>\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "169.",
      "chapterTitle": "Explanation:",
      "subsections": [
        {
          "title": "",
          "content": "- **`group`**: Added to the `<a>` element. This utility groups child elements so that they can react to the parent’s hover state.\n                - **`group-hover:opacity-100`**: Applied to the `<span>`, ensuring that the span's opacity changes when the `<a>` is hovered.\n\n                This way, the `<span>` will become visible when you hover over the `<a>` button, creating a seamless hover effect across both elements.\n\n\n            [The hover states of the <a> and <span> are now connected.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/Screen_Recording_2024-11-05_at_11.05.55_AM.mov)\n\n            The hover states of the <a> and <span> are now connected.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "170.",
      "chapterTitle": "Tailwind’s group utility and group-hover:",
      "subsections": [
        {
          "title": "",
          "content": "From this I’ve acquainted myself with and implemented the group utility on a parent, which in this case was the button `<a>`, and then applied `group-hover:` to a nested child within the parent which is `<span>`, which links the two together. Great.\n\n            - Current documentation button code\n\n                ```tsx\n                <a href=\"https://hissing-sphere-1e7.notion.site/Portfolio-Website-127a92ab668680ed91ddd0619057466f\"\n                className=\"\n                 group transition-all duration-200 ease-in-out\n                 p-3 rounded-full border-2 border-foreground text-foreground \n                 hover:bg-foreground hover:text-background\n                 font-bold tracking-tight\n                 overflow-hidden whitespace-nowrap\n                 w-20 hover:w-64\"\n                 target=\"_blank\"\n                 rel=\"noopener noreferrer\"\n                >\n                Follow \n                 <span className=\"opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ml-1.5\">\n                 my documentation here \n                 </span>\n                </a>\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "171.",
      "chapterTitle": "Top Navbar",
      "subsections": [
        {
          "title": "",
          "content": "This is going to be a challenge. If i’m to wager a guess on the implementation without the help of ChatGPT *yet,* it would involve creating a React component which I will title NavBar. Within the NavBar.tsx will exist `export default function NavBar()`. Within NavBar.tsx will also be code that links to the various pages on the site with `<Link>`\n\n            This NavBar component will then be imported into layout.tsx for it to exist site-wide.\n\n            I shall ask ChatGPT now and see how close I got with my hunch.\n\n            - Prompt\n\n                > I would like to implement a site-wide navigation bar at the top of the window that will link to the different pages on my website. How do I accomplish this?\n                > \n            - Answer\n\n                To create a site-wide navigation bar in Next.js with Tailwind CSS, you can add a new `Navbar` component and include it in your layout file. Here’s how:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "172.",
      "chapterTitle": "Step 1: Create the Navbar Component",
      "subsections": [
        {
          "title": "",
          "content": "In your `components` folder, create a file called `Navbar.tsx`:\n\n                ```tsx\n                tsx\n                Copy code\n                // components/Navbar.tsx\n                import Link from 'next/link';\n\n                const Navbar = () => {\n                  return (\n                    <nav className=\"fixed top-0 left-0 right-0 bg-background shadow-lg p-4 flex justify-between items-center z-10\">\n                      <div className=\"text-foreground font-bold text-lg\">My Website</div>\n                      <div className=\"flex gap-4\">\n                        <Link href=\"/\" className=\"hover:text-accent transition-colors\">\n                          Home\n                        </Link>\n                        <Link href=\"/gallery\" className=\"hover:text-accent transition-colors\">\n                          Gallery\n                        </Link>\n                        <Link href=\"/about\" className=\"hover:text-accent transition-colors\">\n                          About\n                        </Link>\n                      </div>\n                    </nav>\n                  );\n                };\n\n                export default Navbar;\n\n                ```\n\n                This `Navbar` component creates a bar with links that can point to different pages.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "173.",
      "chapterTitle": "Step 2: Add the Navbar Component to Your Layout",
      "subsections": [
        {
          "title": "",
          "content": "In your `layout.tsx` file (or your main layout file), import the `Navbar` and render it at the top:\n\n                ```tsx\n                tsx\n                Copy code\n                import Navbar from './components/Navbar';\n\n                export default function Layout({ children }) {\n                  return (\n                    <html lang=\"en\">\n                      <body className=\"min-h-screen flex flex-col\">\n                        <Navbar /> {/* Add Navbar here */}\n                        <main className=\"pt-16 flex-grow\">{children}</main>\n                      </body>\n                    </html>\n                  );\n                }\n\n                ```\n\n                The `pt-16` in `main` adds padding to ensure the navbar doesn’t overlap the content below.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "174.",
      "chapterTitle": "Step 3: Style the Navbar with Tailwind CSS",
      "subsections": [
        {
          "title": "",
          "content": "Customize the colors and styles in your `tailwind.config.ts` if needed, or add specific classes directly in `Navbar.tsx`. You can adjust colors and add transitions or hover effects for an interactive experience.\n\n                This approach gives you a site-wide, fixed navigation bar at the top of the window that stays visible as you navigate between pages.\n\n\n            ![Navigation bar!](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2035.png)\n\n            Navigation bar!\n\n            It is 12:28pm. I have myself a Navbar that works and routes to the Resume and Gallery page I created yesterday. This was surprisingly smooth to implement. \n\n            Couple of notes on the ChatGPT implementation in regards to my initial hunch from above: The React component approach to the Navbar in this situation was surprisingly straightforward. I do believe this is because this didn’t require any instances of `state` or `props` and was just a simple construction of `<nav>` nested within the component, which was then imported into layout.tsx to live site-wide.\n\n            I was pretty much spot on with my initial hunch, aside from the difficulty I was mentally preparing myself for. The only thing that I got wrong was `export default function Navbar()`. That line of code is only used for the root React component of the website, which in this case would be the `page.tsx` file in the root directory. All other React components would simply be exported as `export default Navbar;`.\n\n            I still struggle to understand arrow functions though, I will give it one more go with ChatGPT.\n\n            - Prompt\n\n                > Could you explain the arrow function in this code? I still don't understand arrow functions in Javascript.\n                > \n            - Answer\n\n                In your code, the arrow function is used to define the `Navbar` component. Arrow functions in JavaScript are a shorthand way of writing functions, and they provide some additional features that are useful in modern JavaScript, especially in React. Here’s a breakdown of how this arrow function works in your example:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "175.",
      "chapterTitle": "Understanding Arrow Function Syntax",
      "subsections": [
        {
          "title": "",
          "content": "The syntax for an arrow function is:\n\n                ```jsx\n                javascript\n                Copy code\n                const functionName = () => {\n                    // function body\n                };\n\n                ```\n\n                In this case, the `Navbar` component is created as a constant with an arrow function:\n\n                ```jsx\n                javascript\n                Copy code\n                const Navbar = () => {\n                    // function body\n                };\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "176.",
      "chapterTitle": "Breaking Down the Code",
      "subsections": [
        {
          "title": "",
          "content": "1. **Defining the Component**: `const Navbar = () => { ... };`\n                    - Here, `Navbar` is a constant that stores an arrow function. The arrow function itself does not take any parameters, hence the empty parentheses `()`.\n                    - Arrow functions are typically used in React functional components for their concise syntax and easy readability.\n                2. **Return Statement**:\n\n                    ```jsx\n                    javascript\n                    Copy code\n                    return (\n                        <nav className=\"...\">\n                            // JSX elements\n                        </nav>\n                    );\n\n                    ```\n\n                    - The arrow function uses a `return` statement to output JSX. JSX is the syntax React uses to create HTML elements inside JavaScript.\n                    - In this case, it returns a `<nav>` element containing `Link` elements for navigation.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "177.",
      "chapterTitle": "Why Use Arrow Functions?",
      "subsections": [
        {
          "title": "",
          "content": "Arrow functions have some special characteristics:\n\n                - **Conciseness**: They allow a shorter syntax for functions. In your example, without the arrow function, it would look like:\n\n                    ```jsx\n                    javascript\n                    Copy code\n                    const Navbar = function() {\n                        return (\n                            <nav> ... </nav>\n                        );\n                    };\n\n                    ```\n\n                - **Lexical `this` Binding**: Arrow functions do not have their own `this` context. They inherit `this` from the outer scope. This makes them especially useful in React components where functions need to access the component context without explicitly binding `this`.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "178.",
      "chapterTitle": "Example with Parameters",
      "subsections": [
        {
          "title": "",
          "content": "If your component needed props, you’d pass them like this:\n\n                ```jsx\n                javascript\n                Copy code\n                const Navbar = (props) => { ... }\n\n                ```\n\n                Or if you wanted to destructure props directly:\n\n                ```jsx\n                javascript\n                Copy code\n                const Navbar = ({ someProp }) => { ... }\n\n                ```\n\n                In sum, the arrow function in your code is a simpler and cleaner way to define the `Navbar` component without worrying about `this` binding, making it ideal for React components like `Navbar`.\n\n\n            I still do not understand the above. But I will keep trudging on.",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "But hey, I have myself a Navbar before 1pm.",
          "content": "- **It is 10:15pm*** (Resume Page)",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "179.",
      "chapterTitle": "Styling the Resume Page",
      "subsections": [
        {
          "title": "",
          "content": "Wow, where do I even begin. I’ve broken through so much on this in pockets of time throughout the day today that I have to again write this in retrospect. \n\n            I am still deep in the midst of figuring out how to layout and style a blank page from ground up but this is what I have learnt so far and the current status of the resume page. The text are just ‘ported over’ from my existing website that resides on Squarespace.\n\n            ![A 5 column CSS grid at full width.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2036.png)\n\n            A 5 column CSS grid at full width.\n\n            [The page is set up to be responsive to different window sizes including (and most importantly) mobile.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/Untitled.mp4)\n\n            The page is set up to be responsive to different window sizes including (and most importantly) mobile.\n\n            - Current code for the page at 10:15pm\n\n                ```tsx\n                export default function Resume() {\n                    return (\n                        <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-start justify-items-center sm:justify-items-start\n                        min-h-screen min-w-screen p-10 mt-10 gap-4 font-[family-name:var(--font-geist-sans)]\">\n                            <div className=\"col-span-1 transition-all text-normal tracking-tight text-foreground -mt-5 pr-12\">\n                                <h1 className=\"-ml-1 text-4xl leading-loose font-semibold\">\n                                    Chris Leow\n                                </h1>\n                                <p className=\"mb-8 font-semibold\">\n                                    Email – ithinkitschristopher@gmail.com\n                                    <br/>\n                                    LinkedIn – <a href=\"https://www.linkedin.com/in/chris-leow-93372b184/\" className=\"underline transition-all hover:text-midground\">Chris Leow</a>\n                                    <br/>\n                                    Instagram – <a href=\"https://www.instagram.com/khristurtle/\" className=\"underline transition-all hover:text-midground\">@khristurtle</a>\n                                </p>\n                                <p className=\"tracking-tight mb-4\">\n                                    Born and raised in sunny <i>(to put it mildly)</i> Singapore, Chris was once a young kid obsessed with the romanticized image of beret-wearing, palette-wielding artists. Now, he finds himself living the surreal reality of professionally conceptualizing, creating, and directing what is essentially art for the world. \n                                    With a fervor for craft and a meticulous eye for finesse, he takes a possibly unhealthy pride in creating visually compelling work across various mediums.\n                                </p>\n                                <p className=\"tracking-tight mb-4\">\n                                    As a multidisciplinary creative and formerly the Creative Lead at ArtScience Museum in Singapore, Chris has eight years of experience in the Advertising and Design industry. He has most notably worked on multiple brand campaigns for Singapore Airlines as an Art Director and global brands the likes of Nike, Samsung, IKEA, Studio Ghibli, Uniqlo and MINI. \n                                </p>\n                                <p className=\"tracking-tight mb-4\">\n                                    In his spare time after work <i>(which, realistically, isn't much)</i>, he does even more work, but for himself—creating content through photography, videography, editing and motion design. When he is finally not working, you will find him thrifting for furniture or, for a more colloquial term, stooping on the streets of New York City. He loves building his living space up, though he wouldn’t go so far as to call it interior design.\n                                </p>\n                            </div>\n                            <div className=\"pr-18\">\n                                <h1 className=\"font-semibold text-xl mb-2\">\n                                Currently:<br/>\n                                </h1>\n                                <p>\n                                Master of Fine Arts (MFA) Interaction Design\n                                School of Visual Arts, New York City\n                                September 2024 – May 2026\n                                </p>\n                            </div>\n\n                            <div className=\"tracking-tight text-foreground\">\n                                COLUMN 03\n                            </div>\n\n                            <div className=\"tracking-tight text-foreground\">\n                                COLUMN 04\n                            </div>\n\n                            <div className=\"tracking-tight text-foreground\">\n                                COLUMN 05\n                            </div>\n                        </div>\n                    );\n                }\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "180.",
      "chapterTitle": "CSS Grid",
      "subsections": [
        {
          "title": "",
          "content": "This. This was such a joy to break through on. As I got started with formatting the completely blank page back in the day; I knew I needed a grid system. Something akin to the grid system that I am familiar from my years of using Squarespace for my current portfolio. \n\n            And so I dug into CSS Grids and had the understanding to implement them in the main overarching `<div>` of the page. It took quite a lot of experimentation and trial and error but this is what I currently settled on.\n\n            ```jsx\n            <div *className*=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5> \n            ```\n\n            What we have above is code that implements a grid onto the page. Which then defines a single column for screens lesser than `sm` (small)—which would be mobile. 2 columns for screens larger than breakpoint of `sm`, 3 columns for `lg` (large), and the full 5 columned grid for most screens (`2xl`) when full-screened.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "181.",
      "chapterTitle": "But what about CSS Flexbox?",
      "subsections": [
        {
          "title": "",
          "content": "That was a question that was pertinent in my head, CSS Grid seemed to be working holistically at creating a responsive layout, so what was Flex all about? \n\n            - And so I asked ChatGPT\n                - Prompt\n\n                    > What is the difference between grid and flex?\n                    > \n                - Answer\n\n                    The **key difference** between `grid` and `flex` in CSS lies in their primary design philosophy and how they handle layout.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "182.",
      "chapterTitle": "1. **CSS Grid**",
      "subsections": [
        {
          "title": "",
          "content": "CSS Grid is a **two-dimensional layout system**. It allows you to work with rows and columns simultaneously, giving you more control over the overall layout structure.\n\n                    - **Best for**: Complex layouts where both rows and columns need to be managed, like page layouts, dashboards, galleries, etc.\n                    - **Rows and Columns**: You can define both rows and columns, set grid gaps, and place items within a grid at specific positions.\n                    - **Explicit control over placement**: Grid makes it easier to control the exact placement of items, allowing precise placement like `grid-column-start`, `grid-row-start`, and spanning across multiple rows/columns.\n                    - **Responsive layouts**: With CSS Grid, you can set layouts to adapt responsively with `grid-template-areas` or by adjusting `grid-template-columns` and `grid-template-rows` based on screen size.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "183.",
      "chapterTitle": "Example of a CSS Grid Layout",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                    css\n                    Copy code\n                    .container {\n                      display: grid;\n                      grid-template-columns: repeat(3, 1fr);\n                      gap: 10px;\n                    }\n\n                    ```\n\n                    ```html\n                    html\n                    Copy code\n                    <div class=\"container\">\n                      <div>Item 1</div>\n                      <div>Item 2</div>\n                      <div>Item 3</div>\n                    </div>\n\n                    ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "184.",
      "chapterTitle": "2. **Flexbox**",
      "subsections": [
        {
          "title": "",
          "content": "Flexbox is a **one-dimensional layout system**. It is designed for laying out items in a single direction, either row (horizontal) or column (vertical).\n\n                    - **Best for**: Simple layouts, such as aligning items in a navbar, centering elements, or distributing items evenly in one direction.\n                    - **Row or Column**: You define the main direction of items (using `flex-direction: row` or `column`), and they align themselves based on that.\n                    - **Space distribution and alignment**: Flexbox makes it easy to distribute space between items, align them, and manage their order without relying on their HTML structure.\n                    - **Responsive layouts**: Flexbox is also responsive-friendly, as it can adjust how items take up space based on available space.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "185.",
      "chapterTitle": "Example of a Flexbox Layout",
      "subsections": [
        {
          "title": "",
          "content": "```css\n                    css\n                    Copy code\n                    .container {\n                      display: flex;\n                      gap: 10px;\n                      justify-content: space-between;\n                    }\n\n                    ```\n\n                    ```html\n                    html\n                    Copy code\n                    <div class=\"container\">\n                      <div>Item 1</div>\n                      <div>Item 2</div>\n                      <div>Item 3</div>\n                    </div>\n\n                    ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "186.",
      "chapterTitle": "**When to Use Which Layout System?**",
      "subsections": [
        {
          "title": "",
          "content": "- Use **CSS Grid** for more complex layouts where elements need to align in both rows and columns.\n                    - Use **Flexbox** for simpler, linear layouts where you only need to control alignment in one direction.\n\n            Cool, that made things clear. Thanks again OpenAI. I understood it to mean that CSS Grid is ultimately used to define the overall layout of a page, while Flex can then can used to minutely adjust components and divs within the CSS Grid itself. Sounds simple enough, but also menacingly layered.\n\n            I have not yet implemented Flex in my current code, I don’t think it’ll be as simple as I make it out to be.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "187.",
      "chapterTitle": "Now that we are caught up.",
      "subsections": [
        {
          "title": "",
          "content": "I am done writing in retrospect and are back in real time, I would now like to further refine the layout of my page and am thinking of dividing the columns by rows. I know, don’t think that was a very eloquently written description of what I intend to implement; but i’ll let screenshots do the talking. \n\n            ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2037.png)\n\n            Scratch that about screenshots doing the talking, it is now exactly midnight and I haven’t been able to implement what I set out to do. As such, I have settled with this 5 columned layout that is at least, thankfully, responsive, for now.\n\n    - ~~06 November~~\n        - ~~It is Midnight (Page animations)~~",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "188.",
      "chapterTitle": "~~Page Animations~~",
      "subsections": [
        {
          "title": "",
          "content": "- **07 November*** (Implementing Animations)\n\n        I am keeping the above chapter and striking it out ONLY because my goodness have I both gotten so far ahead of myself and so deep into the zone that I simply just had no capacity to document what I’ve done between yesterday and today.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "189.",
      "chapterTitle": "Current state of the website.",
      "subsections": [
        {
          "title": "",
          "content": "[Current progress of the website in full screen 16:9](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1.mov)\n\n        Current progress of the website in full screen 16:9\n\n        [Current progress of the website in portrait.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/2.mov)\n\n        Current progress of the website in portrait.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "190.",
      "chapterTitle": "Implementing Animations with Framer-Motion",
      "subsections": [
        {
          "title": "",
          "content": "Animations. Animations. Animations. My greatest passion in life. But I’m sure you already know this about me. If there was any one skill set I could keep in life; it would be my eye for Motion Design. \n\n        I digress greatly, but I hope the above screen recordings speak for themselves on the progress of the website. \n\n        I could not help myself but to introduce animations albeit currently subtle onto the website; and this was achieved with Framer Motion, and interestingly enough I only learnt of this through ChatGPT. \n\n        My initial goal revolved around having the pages cross fade between each other upon navigation instead of a default ‘hard refresh’. This was when I queried ChatGPT on how I may implement something this that I was fed the solution to import Framer Motion as a library.\n\n        I was initially skeptical on this as I intended to learn and work with GSAP at the start of this project and so I asked it on the difference between GSAP and Framer Motion and why I should be using Framer Motion.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "191.",
      "chapterTitle": "Framer Motion vs GSAP",
      "subsections": [
        {
          "title": "",
          "content": "- Prompt\n\n            > What is Framer Motion and is it similar to GSAP?\n            > \n        - Answer\n\n            Yes, Framer Motion is similar to GSAP (GreenSock Animation Platform) in that both are powerful JavaScript libraries for creating animations on the web. However, they have different focuses, approaches, and integrations, especially in the context of modern frontend frameworks like React.\n\n            Here’s a breakdown of **Framer Motion** and how it compares to **GSAP**:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "192.",
      "chapterTitle": "1. **Framer Motion**:",
      "subsections": [
        {
          "title": "",
          "content": "- **Designed for React**: Framer Motion is built specifically for React and offers a declarative, component-based approach to animations. It allows you to animate properties directly within JSX using props like `initial`, `animate`, and `exit`, which is convenient for React developers.\n            - **Simple API for Complex Animations**: Framer Motion provides a straightforward API that integrates seamlessly with React, making it ideal for managing animations within React’s component lifecycle.\n            - **Animation Features**: It supports a range of animations, including fade, slide, scale, spring physics-based animations, and gestures like drag and hover.\n            - **Ideal for Page Transitions**: Framer Motion’s `AnimatePresence` component is especially useful for animating page transitions in React frameworks like Next.js.\n            - **Lightweight**: Framer Motion is generally lightweight and suitable for most animation needs in a React app without adding significant bundle size.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "193.",
      "chapterTitle": "2. **GSAP (GreenSock Animation Platform)**:",
      "subsections": [
        {
          "title": "",
          "content": "- **General JavaScript Library**: GSAP is a standalone JavaScript library, meaning it can work with any JavaScript setup, not just React. It’s popular across different frameworks (Vue, vanilla JS, Angular) and even in non-web environments like games.\n            - **Advanced Timeline Control**: GSAP offers complex timeline management with fine-grained control over animation sequences. This makes it ideal for intricate animations that require precise coordination, which might be challenging to achieve with Framer Motion alone.\n            - **Powerful Animation Capabilities**: It’s highly optimized for performance and can handle large-scale animations, such as interactive scroll animations, SVG animations, and morphing effects, which are often used in more complex websites.\n            - **Plugin Ecosystem**: GSAP comes with additional plugins (e.g., ScrollTrigger, MorphSVG, and SplitText) for advanced features, which extend its capabilities for more specialized use cases.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "194.",
      "chapterTitle": "**Comparing Usage**:",
      "subsections": [
        {
          "title": "",
          "content": "- **For React Projects**: Framer Motion’s integration with React’s component model makes it ideal for handling typical UI animations, like page transitions, modal animations, and gesture interactions.\n            - **For Complex Animations**: If you need highly detailed animations or advanced control (especially outside React), GSAP is likely the better choice. It can achieve the same animations as Framer Motion but offers more versatility and customization for non-standard use cases.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "195.",
      "chapterTitle": "**Choosing Between the Two**:",
      "subsections": [
        {
          "title": "",
          "content": "- **Framer Motion** is generally easier to work with for React developers and is sufficient for common UI animations.\n            - **GSAP** is more versatile and powerful if you’re building animations with complex requirements or working outside the React ecosystem.\n\n            In many cases, you can even combine both if you want to use Framer Motion for simpler UI animations and GSAP for more intensive custom animations in specific components.\n\n\n        Fair enough, I was fairly convinced with the explanation that Framer Motion is tightly integrated with React and that I could use both Framer Motion and GSAP further down the road. \n\n        And honestly, it’s implementation was really simple. Yes, it took time to read a fair bit on the documentation and to get acquainted with the syntax and code. But past that it has been a very straightforward implementation.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "196.",
      "chapterTitle": "<motion.div> implementation",
      "subsections": [
        {
          "title": "",
          "content": "```tsx\n        <motion.main \n              className=\"flex flex-col col-start-2 2xl:col-start-3 2xl:col-span-1 col-span-3 px-10 gap-8 items-center sm:items-start\"\n              initial={{opacity:0, y:20}}\n              animate={{opacity:1, y:0}}\n              transition={{duration:0.4, ease:\"easeOut\"}}>\n        ```\n\n        The above snippet of code is an example of how motion is injected into the `<div>`within the source code. It works together with Tailwind and I’ve opted to place the motion code after Tailwind code. \n\n        You begin by defining the `initial` parameters. Which in this case would be `opacity:0, y:20`, causing the header to be invisible and 20px below the midpoint of the page.\n\n        You then define`animate`, which would be the endpoint of the animation. In this case being `opacity:1, y:0`, resulting in the header being now fully visible at an opacity of 1 and animated upwards from -20px to the midpoint of 0px. \n\n        This culminates in a subtle upwards movement as it fades in.\n\n        And of course, the animation has to be eased—which is absolutely my sole commandment when it comes to Motion Design. This is done with `transition={{duration:0.4, ease:\"easeOut\"}}>`, resulting in the upwards motion taking place over a span of 0.4 seconds and a taper off in velocity at the end of the animation. And that’s pretty much it.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "197.",
      "chapterTitle": "Variants & Staggered children",
      "subsections": [
        {
          "title": "",
          "content": "What an absurd combination of words that’s actually supposed to make sense. \n\n        But yes the next logical step that I looked into the implementation was to figure out the Variants system that Framer Motion employs. Which would be to define a custom ‘function’ that you could then apply to every `<motion.div>` without having to re-define the specific animation parameters. (Looking at your lunacy, Tailwind. (Okay I’m aware you can define custom templates in Tailwind too, but I haven’t gotten to that yet. (wow, nested thoughts))).\n\n        ```tsx\n        const animateIn ={\n            hidden: {opacity:0, y:20},\n            show: {opacity:1, y:0, transition:{duration: 0.5, ease:\"easeOut\"}} \n        }\n\n        export default function Sandbox() {\n\n            return (\n              <div className=\"grid grid-cols-3 items-center justify-items-center min-h-screen min-ws-screen\n              font-[family-name:var(--font-geist-sans)]\">\n                <div className=\"col-start-2 text-center\">\n                  <motion.h1 className=\"text-8xl font-extralight\" \n                  initial=\"hidden\"\n                  animate=\"show\"\n                  variants={animateIn}\n                  drag\n                  dragConstraints={{top:-50, left:-50, bottom:50, right:50}}>\n                    Sandbox\n                  </motion.h1>\n                </div>\n              </div>\n            );\n          }\n        ```\n\n        At the top you will find a function which I have named `animateIn` that defines the animation parameters.\n\n        And within the `return()` code you will see the implementation of it within `<motion.h1>` where I just needed to define `initial`, `animate`, and `variants` to the parameters of the `animateIn` without having to either type out or paste the specific values again.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "198.",
      "chapterTitle": "Staggered Children",
      "subsections": [
        {
          "title": "",
          "content": "With the above function set up, this then enables the ability to stagger the animations of the `<div>`s by a parent and child structure\n\n        - Full code\n\n            ```tsx\n            export default function Resume() {\n\n                    const animateIn ={\n                        hidden: {opacity:0, y:20},\n                        show: {\n                            opacity:1, y:0, \n                            transition: {staggerChildren: 0.03, duration:0.2, ease:\"easeOut\"}\n                        }\n                    }\n                    const animateInChild ={\n                        hidden: {opacity:0, y:20},\n                        show: {\n                            opacity:1, y:0, \n                            transition: {duration:0.3, ease:\"easeOut\"}\n                            }\n                        }\n\n                return (\n                    <motion.div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5\n                    items-start justify-items-start min-h-screen\n                    p-14 mt-4 gap-8 text-base tracking-tight\n                    font-[family-name:var(--font-geist-sans)]\"\n                    initial=\"hidden\"\n                    animate=\"show\"\n                    // whileInView=\"show\"\n                    // viewport={{once:true}}\n                    variants={animateIn}>\n\n                        <div className= \"col-span-1 mr-10\">\n                            <motion.h1 \n                            className=\"-ml-0.5 text-2xl mb-8\"\n                            variants={animateInChild}>\n                                Chris Leow\n                            </motion.h1>\n\n                            <motion.h1 \n                            className=\"mb-8 -ml-0.5\"\n                            variants={animateInChild}>\n                                <span className=\"underline\" style={{ textUnderlineOffset: '2px' }}>Senior Creative</span><br/>\n                                Based in New York City<br/>\n                                <i className=\"-ml-0.5\">From Singapore</i>\n                            </motion.h1>\n                            {/* <motion.div className=\"mb-4 text-lg\" variants={animateInChild}>\n                            Creative Direction. Graphic Design. Content Creation. Edit. 2D + 3D Motion Design. Photography. Videography.\n                            </motion.div> */}\n                            <motion.p \n                            className=\"mb-4\"\n                            variants={animateInChild}>\n                                Born and raised in sunny <i>(to put it mildly)</i> Singapore, Chris was once a young kid obsessed with the romanticized image of beret-wearing, palette-wielding artists. Now, he finds himself living the surreal reality of professionally conceptualizing, creating, and directing what is essentially art for the world. \n                                With a fervor for craft and a meticulous eye for finesse, he takes a possibly unhealthy pride in creating visually compelling work across various mediums.\n                            </motion.p>\n                            <motion.p \n                            className=\"mb-4\"\n                            variants={animateInChild}>\n                                As a multidisciplinary creative and formerly the Creative Lead at ArtScience Museum in Singapore, Chris has eight years of experience in the Advertising and Design industry. He has most notably worked on multiple brand campaigns for Singapore Airlines as an Art Director and global brands the likes of Nike, Samsung, IKEA, Studio Ghibli, Uniqlo and MINI. \n                            </motion.p>\n                            <motion.p \n                            className=\"mb-10\"\n                            variants={animateInChild}>\n                                In his spare time after work <i>(which, realistically, isn't much)</i>, he does even more work, but for himself—creating content through photography, videography, editing and motion design. When he is finally not working, you will find him thrifting for furniture or, for a more colloquial term, stooping on the streets of New York City. He loves building his living space up, though he wouldn’t go so far as to call it interior design.\n                            </motion.p>\n\n                            <motion.p \n                            className=\"mb-8\"\n                            variants={animateInChild}>\n                                Email – ithinkitschristopher@gmail.com\n                                <br/>\n                                LinkedIn – <a href=\"https://www.linkedin.com/in/chris-leow-93372b184/\" className=\"underline transition-all hover:text-midground\">Chris Leow</a>\n                                <br/>\n                                Instagram – <a href=\"https://www.instagram.com/khristurtle/\" className=\"underline transition-all hover:text-midground\">@khristurtle</a>\n                            </motion.p>\n                        </div>\n            ```\n\n\n        In the code above you will find the same `animateIn` function but now with `staggerChildren:0.03` which dictates a 0.03 second delay between the start of the animation for each children `<div>` after the parent.\n\n        ```tsx\n        <motion.div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5\n                items-start justify-items-start min-h-screen\n                p-14 mt-4 gap-8 text-base tracking-tight\n                font-[family-name:var(--font-geist-sans)]\"\n                initial=\"hidden\"\n                animate=\"show\"\n                variants={animateIn}>\n\n                    <div className= \"col-span-1 mr-10\">\n                        <motion.h1 \n                        className=\"-ml-0.5 text-2xl mb-8\"\n                        variants={animateInChild}>\n                            Chris Leow\n                        </motion.h1>\n        ```\n\n        `animateIn` is called within the parent `<motion.div>`. `<motion.h1>` below is then a child of `<motion.div>`, `animateInChild` is then called within `<motion.h1>` which causes it to both only animate in after the parent `<motion.div>` AND after a delay of 0.03 seconds.\n\n        Rinse and repeat this for the rest of the code and we end up with a smoothly staggered fade in animation of the resume page.\n\n        [2.mov](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/2%201.mov)\n\n    - **08 November** (World Clock)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "199.",
      "chapterTitle": "World Clock",
      "subsections": [
        {
          "title": "",
          "content": "![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2038.png)\n\n        On this, I had a little thought to explore implementing a live clock to display both NYC and Singapore times. This will likely have to be done with React as it involves live refreshing every second, so i’ll take this as some React practice for what’s to come.\n\n        - I asked ChatGPT\n\n            To create a live clock in React, you can use the `useState` and `useEffect` hooks to update the time every second. Here's an example:\n\n            ```jsx\n            javascript\n            Copy code\n            import React, { useState, useEffect } from 'react';\n\n            export default function LiveClock() {\n              const [time, setTime] = useState(new Date().toLocaleTimeString());\n\n              useEffect(() => {\n                const timer = setInterval(() => {\n                  setTime(new Date().toLocaleTimeString());\n                }, 1000);\n\n                // Cleanup the interval on component unmount\n                return () => clearInterval(timer);\n              }, []);\n\n              return (\n                <div>\n                  <span className=\"underline\" style={{ textUnderlineOffset: '2px' }}>Senior Creative</span><br/>\n                  Based in New York City<br/>\n                  <i className=\"-ml-0.5\">From Singapore - {time}</i>\n                </div>\n              );\n            }\n\n            ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "200.",
      "chapterTitle": "Explanation:",
      "subsections": [
        {
          "title": "",
          "content": "- **`useState`** initializes the `time` state with the current time.\n            - **`useEffect`** sets up a timer that updates the `time` state every second.\n            - **`clearInterval`** ensures the timer is cleared when the component is unmounted to avoid memory leaks.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "201.",
      "chapterTitle": "Result:",
      "subsections": [
        {
          "title": "",
          "content": "The `LiveClock` component will display the time and update it in real-time every second. You can insert this component anywhere in your JSX layout.\n\n\n        I will first attempt this on my Sandbox page instead of implementing it on my already stable resume page.\n\n        [Time.mov](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/Time.mov)\n\n        So here it is, I’ve managed get a separate live clock for both NYC and SG. This involved creating two separate React useStates, which was simple enough to implement with the code given by ChatGPT. \n\n        But deep down I know I am deeply discontent with still not fully understanding how the code works. As such I dived in deeper,\n\n        - On the React code\n            - Prompt\n\n                > Could you explain in detail the react code above and how it is implemented? I still struggle to understand the logic and would like to learn.\n                > \n            - Answer\n\n                Of course! Let's break down the code step by step to help you understand how it's implemented and why it works the way it does.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "202.",
      "chapterTitle": "1. Overview of the Code",
      "subsections": [
        {
          "title": "",
          "content": "This React component displays a real-time clock showing the current time in the `America/New_York` time zone, with an animation when it initially appears. It also updates the displayed time every second.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "203.",
      "chapterTitle": "2. Code Analysis",
      "subsections": [],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "204.",
      "chapterTitle": "1. Imports and Setup:",
      "subsections": [
        {
          "title": "",
          "content": "```jsx\n                javascript\n                Copy code\n                'use client';\n                import { motion } from \"framer-motion\";\n                import React, { useState, useEffect } from 'react';\n\n                ```\n\n                - **`'use client';`**: This directive tells Next.js that this component is a client-side component, meaning it will be rendered in the browser and not on the server.\n                - **`import { motion } from \"framer-motion\";`**: Imports the `motion` component from the Framer Motion library for animation purposes.\n                - **`import React, { useState, useEffect } from 'react';`**: Imports React and the `useState` and `useEffect` hooks.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "205.",
      "chapterTitle": "2. Animation Configuration:",
      "subsections": [
        {
          "title": "",
          "content": "```jsx\n                javascript\n                Copy code\n                const animateIn = {\n                    hidden: { opacity: 0, y: 20 },\n                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: \"easeOut\" } }\n                };\n\n                ```\n\n                - **`animateIn`**: An object that defines the animation variants for Framer Motion.\n                    - **`hidden`**: Initial state of the component (before animation). The component starts invisible and is shifted down by 20 pixels.\n                    - **`show`**: Final state of the component after the animation. The opacity transitions to 1, and it moves to its original position (`y: 0`). The animation lasts 0.5 seconds with an \"easeOut\" easing function.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "206.",
      "chapterTitle": "3. Main Component:",
      "subsections": [
        {
          "title": "",
          "content": "```jsx\n                javascript\n                Copy code\n                export default function Sandbox() {\n\n                ```\n\n                - The `Sandbox` function is a React functional component. This is where the main logic and JSX rendering happen.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "207.",
      "chapterTitle": "4. `useState` Hook:",
      "subsections": [
        {
          "title": "",
          "content": "```jsx\n                javascript\n                Copy code\n                const [time, setTime] = useState<string | null>(null);\n\n                ```\n\n                - **`useState`**: A React hook that declares a state variable called `time` and a function `setTime` to update it.\n                - Initially, `time` is set to `null`. This means when the component first renders, it doesn't display any time.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "208.",
      "chapterTitle": "5. `useEffect` Hook:",
      "subsections": [
        {
          "title": "",
          "content": "```jsx\n                javascript\n                Copy code\n                useEffect(() => {\n                    const timer = setInterval(() => {\n                      const currentTime = new Date();\n                      const timeInTimeZone = new Intl.DateTimeFormat('en-US', {\n                        timeZone: 'America/New_York',\n                        hour: '2-digit',\n                        minute: '2-digit',\n                        second: '2-digit',\n                        hour12: false,\n                      }).format(currentTime);\n\n                      setTime(timeInTimeZone);\n                    }, 1000);\n\n                    return () => clearInterval(timer);\n                  }, []);\n\n                ```\n\n                - **`useEffect`**: A hook that runs side effects in React. In this case, it's used to create and clear an interval.\n                - **Interval Logic**:\n                    - **`setInterval`**: A JavaScript function that runs the given code repeatedly every 1000 milliseconds (1 second).\n                    - **`Intl.DateTimeFormat`**: A built-in JavaScript object that formats the date and time according to the specified time zone and format options.\n                    - **`setTime`**: Updates the `time` state with the formatted current time.\n                - **Cleanup Function**:\n                    - **`return () => clearInterval(timer);`**: Clears the interval when the component is unmounted or re-rendered to prevent memory leaks.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "209.",
      "chapterTitle": "6. JSX Rendering:",
      "subsections": [
        {
          "title": "",
          "content": "```jsx\n                javascript\n                Copy code\n                return (\n                    <div className=\"grid grid-cols-3 items-center justify-items-center min-h-screen min-w-screen font-[family-name:var(--font-geist-sans)]\">\n                      <div className=\"col-start-2 text-center\">\n                        {time && (\n                          <motion.h1 className=\"text-8xl font-extralight\"\n                            initial=\"hidden\"\n                            animate=\"show\"\n                            variants={animateIn}\n                            drag\n                            dragConstraints={{ top: -50, left: -50, bottom: 50, right: 50 }}>\n                            {time}\n                          </motion.h1>\n                        )}\n                      </div>\n                    </div>\n                );\n\n                ```\n\n                - **`<div className=\"grid grid-cols-3 ...\">`**: The outer container uses Tailwind CSS for styling. It creates a grid layout that spans three columns.\n                - **`<div className=\"col-start-2 ...\">`**: Centers the content in the middle column.\n                - **`{time && ...}`**: Conditional rendering. The `motion.h1` element only renders if `time` is not `null`.\n                - **`motion.h1`**:\n                    - **`initial` and `animate`**: Specifies the animation states.\n                    - **`variants={animateIn}`**: Connects the `animateIn` animation configuration.\n                    - **`drag` and `dragConstraints`**: Enables the element to be draggable within the defined boundaries.\n                - **`{time}`**: Displays the current time stored in the `time` state.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "210.",
      "chapterTitle": "3. How It Works",
      "subsections": [
        {
          "title": "",
          "content": "- **Initial Render**: The component mounts, and `useEffect` runs. The `setInterval` starts, updating `time` every second.\n                - **Animation**: The `motion.h1` animates from its hidden state to its shown state when it is first rendered.\n                - **Updates**: Every second, `time` is updated using `setTime`, triggering a re-render to display the new time.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "211.",
      "chapterTitle": "4. Key Concepts to Understand",
      "subsections": [
        {
          "title": "",
          "content": "- **`useState` and `useEffect`**: Core React hooks for managing state and side effects.\n                - **Animation Variants**: How Framer Motion handles animations.\n                - **Conditional Rendering**: Ensures that the `motion.h1` only renders when `time` has been set.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "212.",
      "chapterTitle": "5. Common Questions",
      "subsections": [
        {
          "title": "",
          "content": "- **Why use `useEffect`?**: To set up the timer that runs every second and updates the state.\n                - **Why use `useState`?**: To hold the current time value so that React can track changes and re-render as needed.\n                - **Why is there a conditional `{time && ...}`?**: This ensures the clock only renders after `time` is initialized, preventing errors with null or undefined values.\n\n                I hope this detailed explanation helps you better understand the logic and structure of the code! Let me know if you need any further clarification or have more questions.\n\n        - On useState and useEffect\n\n            Of course! Here's a more detailed explanation of `useEffect` and `useState`:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "213.",
      "chapterTitle": "`useState`",
      "subsections": [
        {
          "title": "",
          "content": "- **What is it?** `useState` is a React Hook that lets you add state to functional components.\n            - **How does it work?** It initializes a state variable and returns an array with two elements:\n                1. The current state value.\n                2. A function that allows you to update that state.",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "Example:",
          "content": "```jsx\n            javascript\n            Copy code\n            const [count, setCount] = useState(0);\n\n            ```\n\n            - `count` is the current state.\n            - `setCount` is a function you can call to update `count`.\n            - `useState(0)` sets the initial value of `count` to `0`.",
          "isCollapsible": true,
          "isExpanded": false
        },
        {
          "title": "How to use it:",
          "content": "- When you call `setCount(newValue)`, React will re-render the component and use the new value of `count` in the rendered output.",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "214.",
      "chapterTitle": "`useEffect`",
      "subsections": [
        {
          "title": "",
          "content": "- **What is it?** `useEffect` is a React Hook used to perform side effects in functional components, such as data fetching, DOM manipulation, or setting up subscriptions.\n            - **How does it work?** It runs after the component has rendered, and it can optionally run again when certain dependencies change.",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "Example:",
          "content": "```jsx\n            javascript\n            Copy code\n            useEffect(() => {\n              console.log('This code runs after the component renders or updates');\n            });\n\n            ```\n\n            - By default, `useEffect` runs after every render.",
          "isCollapsible": true,
          "isExpanded": false
        },
        {
          "title": "Dependency Array:",
          "content": "- You can pass a second argument to `useEffect`, called the dependency array:\n\n            ```jsx\n            javascript\n            Copy code\n            useEffect(() => {\n              console.log('This code runs only once when the component mounts');\n            }, []); // Empty array means it runs only once.\n\n            ```\n\n            - When the array has values (e.g., `[count]`), `useEffect` runs only when those specific values change.",
          "isCollapsible": true,
          "isExpanded": false
        },
        {
          "title": "Cleanup Function:",
          "content": "- If `useEffect` returns a function, that function is run during the cleanup phase (before the component unmounts or before the effect runs again):\n\n            ```jsx\n            javascript\n            Copy code\n            useEffect(() => {\n              const timer = setInterval(() => {\n                console.log('This runs every second');\n              }, 1000);\n\n              return () => clearInterval(timer); // Cleans up the timer on component unmount\n            }, []);\n\n            ```",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "215.",
      "chapterTitle": "How They Work Together",
      "subsections": [
        {
          "title": "",
          "content": "- `useState` creates state that can be updated and reflected in your component.\n            - `useEffect` runs logic based on the state or props and handles any side effects.\n\n            In your clock code:\n\n            - You use `useState` to store the current time.\n            - You use `useEffect` to set up an interval that updates the time every second.\n            - The `setTime` function updates the time, causing the component to re-render and display the new time.\n\n            These hooks help make React components dynamic and interactive by managing data and side effects seamlessly.\n\n\n        Honestly, still not quite getting it. But I’m beginning to understand the syntax and the use cases of useState and useEffect a fair bit more. Still far from being able to map out the functions in my head and then implementing it from scratch, but it’s something. I’ll take it.\n\n        [Final implementation of world clocks within resume.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/Time_2.mov)\n\n        Final implementation of world clocks within resume.\n\n- 3. **Formatting Pages**\n    - **9 November** (Background Glow, Formatting pages with CSS Grid)\n\n        Documentation is incredibly backlogged now. But I will drop a status recording of the website here just for posterity’s sake.\n\n        [1.mp4](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1.mp4)\n\n        [cabin page.mp4](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/cabin_page.mp4)\n\n    - 10 November (Early Home Page implementation–Adaptive grid)\n\n        [grid.mp4](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/grid.mp4)\n\n    - **11 November** (Project Page Design Freeze, scrollIntoView)\n\n        [React scrollIntoView implemented to scroll to the appropriate episode footage when an episode thumbnail is selected.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/Untitled%201.mp4)\n\n        React scrollIntoView implemented to scroll to the appropriate episode footage when an episode thumbnail is selected.\n\n    - **12 November** (Photography Grid)\n\n        [Screen Recording 2024-11-13 at 12.22.52 PM.mp4](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/Screen_Recording_2024-11-13_at_12.22.52_PM.mp4)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "216.",
      "chapterTitle": "Photography Page",
      "subsections": [
        {
          "title": "",
          "content": "A pretty simple implementation of what I’ve had in mind. This layout is identical to the page for photography that I currently have on my existing portfolio website. \n\n        I don’t think I am entirely happy with the layout as of right now as my gut is telling me there are better ways to present photographic work than a hard-coded grid.\n\n        But in the interest of time and the looming deadline for this project that’s in a month’s time, I will be freezing this design and focusing more on the functionality of the overall website.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "217.",
      "chapterTitle": "Concerns",
      "subsections": [
        {
          "title": "",
          "content": "I just have 1 major concern on the implementation of this page and it’s the fact that the photos are currently hard coded into the page, with defined `col-spans` and rearrangement (even re-layout) would require deep investigation into the code every time and careful refactoring to ensure it does not break the rest of the layout of the page.\n\n        For now, it works, but I’m concern about the scalability of this page into the future. \n\n        - Current code for the page (you will see how the photos are hard-coded)\n\n            ```jsx\n\n            'use client'\n            import * as motion from \"framer-motion/client\"\n            import React from 'react';\n\n            const animateIn ={\n                hidden: {opacity:0, y:20},\n                show: {\n                    opacity:1, y:0, \n                    transition: {staggerChildren: 0.15, duration:0.5, ease:\"easeOut\"}\n                }\n            }\n            const animateInChild ={\n            hidden: {opacity:0, y:20},\n            show: {\n                opacity:1, y:0, \n                transition: {duration:0.3, ease:\"easeOut\"}\n                }\n            }\n\n            const PhotographyPage = ({className}) => {\n              return (\n                <motion.div className={`grid grid-cols-6 ${className}`}\n                initial=\"hidden\"\n                animate=\"show\"\n                variants={animateIn}>\n\n                  {/* Full-Width Image */}\n                    <motion.div className=\"col-span-full mb-2\" variants={animateInChild} >\n                        <img\n                        src=\"/photography/27.jpg\"\n                        className=\"h-full w-auto object-cover rounded-lg shadow-lg\"\n                        />\n                    </motion.div>\n\n                  {/* Two Images Side by Side */}\n                    <div className=\"grid grid-cols-6 col-span-full gap-2\">\n                        <motion.img\n                            src=\"/photography/26.jpg\"\n                            alt=\"Description of Image 2\"\n                            className=\"col-span-2 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n                        <motion.img\n                            src=\"/photography/25.jpg\"\n                            alt=\"Description of Image 3\"\n                            className=\"col-span-4 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n                    </div>\n\n                    {/* Full-Width Image */}\n                    <motion.div className=\"mt-2 col-span-full mb-2\" variants={animateInChild} >\n                        <img\n                        src=\"/photography/24.jpg\"\n                        className=\"h-full w-auto object-cover rounded-lg shadow-lg\"\n                        />\n                    </motion.div>\n\n                    {/* Three Images Side by Side */}\n                    {/* <div className=\"grid grid-cols-6 col-span-full gap-2 mb-2\">\n                        <motion.img\n                            src=\"/photography/245.jpg\"\n                            alt=\"Description of Image 3\"\n                            className=\"col-span-2 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n                        <motion.img\n                            src=\"/photography/23.jpg\"\n                            alt=\"Description of Image 3\"\n                            className=\"col-span-2 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n                        <motion.img\n                            src=\"/photography/21.jpg\"\n                            alt=\"Description of Image 3\"\n                            className=\"col-span-2 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n                    </div> */}\n\n                    {/* Two Images Side by Side */}\n                    <div className=\"grid grid-cols-6 col-span-full gap-2\">\n                        <motion.img\n                            src=\"/photography/22.jpg\"\n                            alt=\"Description of Image 3\"\n                            className=\"col-span-3 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n                        <motion.img\n                            src=\"/photography/21.jpg\"\n                            alt=\"Description of Image 3\"\n                            className=\"col-span-3 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n                    </div>\n\n                    {/* Full-Width Image */}\n                    <motion.div className=\"mt-2 col-span-full\" variants={animateInChild} >\n                        <img\n                        src=\"/photography/19.jpg\"\n                        className=\"h-full w-auto object-cover rounded-lg shadow-lg\"\n                        />\n                    </motion.div>\n\n                     {/* Two Images Side by Side\n                     <div className=\"grid grid-cols-6 col-span-full gap-2\">\n                        <motion.img\n                            src=\"/photography/18.jpg\"\n                            alt=\"Description of Image 3\"\n                            className=\"col-span-2 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n                        <motion.img\n                            src=\"/photography/17.jpg\"\n                            alt=\"Description of Image 3\"\n                            className=\"col-span-4 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n                    </div> */}\n\n                    {/* Three Images Side by Side */}\n                    <div className=\"grid grid-cols-6 col-span-full mt-2 gap-2\">\n                        <motion.img\n                            src=\"/photography/15.jpg\"\n                            alt=\"Description of Image 3\"\n                            className=\"col-span-2 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n                        <motion.img\n                            src=\"/photography/145.jpg\"\n                            alt=\"Description of Image 3\"\n                            className=\"col-span-1 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n\n                        <motion.img\n                            src=\"/photography/14.jpg\"\n                            alt=\"Description of Image 3\"\n                            className=\"col-span-3 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n                    </div>\n\n                    {/* Full-Width Image */}\n                    <motion.div className=\"mt-2 col-span-full mb-2\" variants={animateInChild} >\n                        <img\n                        src=\"/photography/13.jpg\"\n                        className=\"h-full w-auto object-cover rounded-lg shadow-lg\"\n                        />\n                    </motion.div>\n\n                    {/* Two Images Side by Side */}\n                    <div className=\"grid grid-cols-6 col-span-full gap-2\">\n                        <motion.img\n                            src=\"/photography/12.jpg\"\n                            alt=\"Description of Image 3\"\n                            className=\"col-span-3 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n                        <motion.img\n                            src=\"/photography/11.jpg\"\n                            alt=\"Description of Image 3\"\n                            className=\"col-span-3 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n                    </div>\n\n                    {/* Two Images Side by Side */}\n                    <div className=\"grid grid-cols-6 col-span-full gap-2 mt-2\">\n                        <motion.img\n                            src=\"/photography/10.jpg\"\n                            alt=\"Description of Image 3\"\n                            className=\"col-span-4 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n                        <motion.img\n                            src=\"/photography/9.jpg\"\n                            alt=\"Description of Image 3\"\n                            className=\"col-span-2 h-full w-auto object-cover rounded-lg shadow-lg\"\n                            variants={animateInChild}\n                        />\n                    </div>\n\n                    {/* Full-Width Image */}\n                    <motion.div className=\"mt-2 col-span-full mb-2\" variants={animateInChild} >\n                        <img\n                        src=\"/photography/6.jpg\"\n                        className=\"col-span-6 w-full h-2/3 object-cover rounded-lg shadow-lg\"\n                        />\n                    </motion.div>\n\n                </motion.div>\n              );\n            };\n\n            export default PhotographyPage;\n\n            ```\n\n- 4. **Home Page***\n    - **13 November** (Figma Designs & Implementation)\n        - **It is 12:15pm** (Status update)\n\n            Okay, I am back. I’ve gotten so deep into the weeds of everything the past few days that I have completely forsaken documentation of the process and I would like to rope myself back into this before it gets too backlogged.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "218.",
      "chapterTitle": "Home Page",
      "subsections": [
        {
          "title": "",
          "content": "Currently, the home page operates as a grid of squares that have videos playing within them. Again, similar to how my existing site on Squarespace is like now.",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "Functionality",
          "content": "The major difference is that you’ll be able to select the work you’d like to see based on categories at the top and have the grid update in real-time to any combination you have selected. \n\n            [Current status of the Grid (Home page)](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/Screen_Recording_2024-11-13_at_12.37.33_PM.mov)\n\n            Current status of the Grid (Home page)\n\n            The positioning and naming of the categories at the top are currently placeholder and the functionality *sorta* works right now, with the squares updating based on what you have selected; with the photography category rendering an entire grid of photos instead as a React component from the work done yesterday *(12 November).*",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "219.",
      "chapterTitle": "Design",
      "subsections": [
        {
          "title": "",
          "content": "Again, my gut is indicating that i’m not entirely satisfied with the current mechanics and layout of this page. I do feel like there is more room to more dynamically present my work instead of containers as they are right now. \n\n            I will spend a fair bit of time today trying to devise a design that works, and then attempt to implement that in code later tonight. Will report back in a bit. \n\n        - **It is 3:35pm** (Figma Designs)\n\n            Okay I am back after a few hours on Figma drafting some layouts for the home page as described in the above entry.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "220.",
      "chapterTitle": "Layout Explorations",
      "subsections": [
        {
          "title": "",
          "content": "01. **Video Grid**\n\n            Turns out the video grid layout might still be something I would go for even after this round of explorations. My biggest concern was responsiveness between desktop and mobile and the grids would be the easiest to adapt for mobile.\n\n            ![Full width grid with category navigation at the top.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2039.png)\n\n            Full width grid with category navigation at the top.\n\n            ![9 Column grid with category navigation on the left-most column.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2040.png)\n\n            9 Column grid with category navigation on the left-most column.\n\n            ![15 Column grid with category navigation and work names on the left-most 3 columns.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2041.png)\n\n            15 Column grid with category navigation and work names on the left-most 3 columns.\n\n            02. **Typography-Video Project Rows**\n\n            I actually do fancy the layout for this option more than the first Video Grid option. But I foresee it only working well in this 16:9 aspect ratio, and I struggle to comprehend how it will respond and adapt in the ratios between 16:9 and 9:16.\n\n            ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2042.png)\n\n            03. **Pure Typography**\n\n            Purely an indulgent exercise, not an option when it comes to displaying work.\n\n            ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2043.png)\n\n            And with the options above I will proceed to further build out the Video Grid homepage that I currently have. I’m kind of split between the top and side navigation bar with a slight preference for the side bar.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "221.",
      "chapterTitle": "Grid Page with Side Navigation",
      "subsections": [
        {
          "title": "",
          "content": "[Reverted to having the videos in a square format instead of a portrait aspect ratio as in the Figma layouts.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1%201.mp4)\n\n            Reverted to having the videos in a square format instead of a portrait aspect ratio as in the Figma layouts.\n\n            Here it is, the grid page implemented with code with my earlier Figma layout explorations as reference. \n\n            This took countless rounds of troubleshooting to get the layout right—with the biggest culprit being the videos being the most difficult to stick within a defined 1:1 aspect ratio. It was a massive CSS Grid headache and this even led to me rolling back to a previous commit just to get back on track.\n\n            Eventually solved the layout by burying the grid within another `<div>` and that worked flawlessly in fitting within the 9 columned grid.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "222.",
      "chapterTitle": "Getting the side navigation to work",
      "subsections": [
        {
          "title": "",
          "content": "This is the next step, might just break this into a completely new chapter as I foresee this being a massive multi-day endeavour. I’m going to need to dive deep into the React states already set up in this page and really work out the countless layers of logic that I’ve set up in this layout. \n\n    - **14 November** (Sidebar Navigation + Active States)\n        - **It is 11:15am** (Active States)\n        - ~~It is 3pm (Refactoring the sideNav buttons~~) Failed.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "223.",
      "chapterTitle": "Refactoring the buttons",
      "subsections": [
        {
          "title": "",
          "content": "Here is the current code for each of the buttons on the sideNav. It’s tedious, repetitive and long. And any updates to categorisation on my site will involve hardcoding each individual button. As such it is entirely necessarily to optimize and refactor the code right now to ensure scalability.\n\n            - Current sample code (I have over 400 lines of this currently)\n\n                ```jsx\n                <motion.h1\n                className=\"text-xl font-medium mb-4 text-foreground\"\n                variants={animateInChild}>\n                Skillsets\n                </motion.h1>\n\n                <motion.button \n                className={`hover:text-foreground text-left mr-8 \n                ${selectedTags.includes('creative') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}\n                whileHover={{scale:1.06}}\n                animate={{scale: selectedTags.includes('creative') ? 1.06 : 1}}\n                variants={animateInChild}\n                onClick={() => {\n                toggleTag('creative');\n                console.log(selectedTags);\n                }}>Creative Direction</motion.button>\n\n                <motion.button \n                className={`hover:text-foreground text-left mr-8 \n                ${selectedTags.includes('graphic') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}\n                whileHover={{scale:1.06}}\n                animate={{scale: selectedTags.includes('graphic') ? 1.06 : 1}}\n                variants={animateInChild}\n                onClick={() => toggleTag('graphic')}>Visual Design</motion.button>\n\n                <motion.button \n                className={`hover:text-foreground text-left mr-8 \n                ${selectedTags.includes('edit') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}\n                whileHover={{scale:1.06}}\n                animate={{scale: selectedTags.includes('edit') ? 1.06 : 1}}\n                variants={animateInChild}\n                onClick={() => toggleTag('edit')}>Video Editing</motion.button>\n\n                <motion.button \n                className={`hover:text-foreground text-left mr-8 \n                ${selectedTags.includes('motion') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}\n                whileHover={{scale:1.06}}\n                animate={{scale: selectedTags.includes('motion') ? 1.06 : 1}}\n                variants={animateInChild}\n                onClick={() => toggleTag('motion')}>Motion Design</motion.button>\n\n                <motion.button \n                className={`hover:text-foreground text-left mr-8 \n                ${selectedTags.includes('ixd') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}\n                whileHover={{scale:1.06}}\n                animate={{scale: selectedTags.includes('ixd') ? 1.06 : 1}}\n                variants={animateInChild}\n                onClick={() => toggleTag('ixd')}>Interaction Design</motion.button>\n\n                <motion.button \n                className={`hover:text-foreground text-left mr-8 \n                ${showPhotography ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}\n                whileHover={{scale:1.06}}\n                animate={{ scale: showPhotography ? 1.06 : 1 }}\n                variants={animateInChild}\n                onClick={() => toggleTag('Photography')}>Photography</motion.button>\n\n                <motion.button \n                className={`hover:text-foreground text-left mr-8 \n                ${selectedTags.includes('content') ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'}`}\n                whileHover={{scale:1.06}}\n                animate={{scale: selectedTags.includes('content') ? 1.06 : 1}}\n                variants={animateInChild}\n                onClick={() => toggleTag('content')}>Content Creation</motion.button>\n                </motion.div>\n                ```\n\n\n            I obviously am not capable of cooking up a refactor for these buttons as of right now and while I might be spend hours coming up with one and have it functional, it just isn’t a good use of my time right now. As such…",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "224.",
      "chapterTitle": "I asked ChatGPT",
      "subsections": [
        {
          "title": "",
          "content": "- Prompt\n\n                > Hey Im going to need your help on this. Here is my current code for my grid page. I would like to further optimize my buttons. How should I approach this in the simplest manner possible?\n                > \n            - Answer\n\n                To optimize your buttons while keeping the code organized and simple, you can refactor your repeated button code into a reusable component. This way, you can handle all buttons with similar styles and logic efficiently. Here’s how you can do it:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "225.",
      "chapterTitle": "Step 1: Create a Reusable Button Component",
      "subsections": [
        {
          "title": "",
          "content": "First, define a `NavButton` component that handles all the common props and logic for your buttons:\n\n                ```jsx\n                jsx\n                Copy code\n                const NavButton = ({ label, tag, selectedTags, showPhotography, onClick }) => {\n                  const isActive =\n                    (tag === 'all' && selectedTags.length === 0 && !showPhotography) ||\n                    (tag !== 'all' && selectedTags.includes(tag)) ||\n                    (tag === 'Photography' && showPhotography);\n\n                  return (\n                    <motion.button\n                      className={`hover:text-foreground text-left text-xl mr-8 ${\n                        isActive ? 'text-foreground' : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'\n                      }`}\n                      whileHover={{ scale: 1.06 }}\n                      animate={{ scale: isActive ? 1.06 : 1 }}\n                      variants={animateInChild}\n                      onClick={onClick}\n                    >\n                      {label}\n                    </motion.button>\n                  );\n                };\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "226.",
      "chapterTitle": "Step 2: Use the Reusable Button Component",
      "subsections": [
        {
          "title": "",
          "content": "Now, replace your individual buttons with the `NavButton` component to keep your code clean and organized:\n\n                ```jsx\n                jsx\n                Copy code\n                return (\n                  <div className=\"grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-9 px-8 py-6 mt-12 text-sm 2xl:text-base\">\n                    {/* Side Navbar */}\n                    <motion.div\n                      className=\"col-span-1 flex flex-col gap-10 tracking-tight\"\n                      initial=\"hidden\"\n                      animate=\"show\"\n                      variants={animateIn}\n                    >\n                      {/* Give me... */}\n                      <div className=\"flex flex-col gap-1 items-start text-left text-neutral-350 dark:text-neutral-500\">\n                        <motion.h1\n                          className=\"text-3xl font-medium mb-2 -ml-0.5 text-foreground tracking-tighter\"\n                          variants={animateInChild}\n                        >\n                          Give me...\n                        </motion.h1>\n\n                        <NavButton\n                          label=\"everything.\"\n                          tag=\"all\"\n                          selectedTags={selectedTags}\n                          showPhotography={showPhotography}\n                          onClick={() => toggleTag('all')}\n                        />\n\n                        <NavButton\n                          label=\"the best!\"\n                          tag=\"best\"\n                          selectedTags={selectedTags}\n                          showPhotography={showPhotography}\n                          onClick={() => toggleTag('best')}\n                        />\n\n                        <motion.button\n                          className=\"hover:text-foreground text-left text-xl mr-4\"\n                          whileHover={{ scale: 1.06 }}\n                          variants={animateInChild}\n                          onClick={toggleNav}\n                        >\n                          more choice, man.\n                        </motion.button>\n                      </div>\n\n                      {/* Skillsets */}\n                      <AnimatePresence>\n                        {showNav && (\n                          <>\n                            <motion.div\n                              className=\"flex flex-col gap-1 items-start text-left dark:text-neutral-500\"\n                              initial=\"hidden\"\n                              animate=\"show\"\n                              exit=\"exit\"\n                              variants={skillContainer}\n                            >\n                              <motion.h1\n                                className=\"text-xl font-medium mb-4 text-foreground\"\n                                variants={animateInChild}\n                              >\n                                Skillsets\n                              </motion.h1>\n\n                              <NavButton\n                                label=\"Creative Direction\"\n                                tag=\"creative\"\n                                selectedTags={selectedTags}\n                                showPhotography={showPhotography}\n                                onClick={() => toggleTag('creative')}\n                              />\n\n                              <NavButton\n                                label=\"Visual Design\"\n                                tag=\"graphic\"\n                                selectedTags={selectedTags}\n                                showPhotography={showPhotography}\n                                onClick={() => toggleTag('graphic')}\n                              />\n\n                              <NavButton\n                                label=\"Video Editing\"\n                                tag=\"edit\"\n                                selectedTags={selectedTags}\n                                showPhotography={showPhotography}\n                                onClick={() => toggleTag('edit')}\n                              />\n\n                              <NavButton\n                                label=\"Motion Design\"\n                                tag=\"motion\"\n                                selectedTags={selectedTags}\n                                showPhotography={showPhotography}\n                                onClick={() => toggleTag('motion')}\n                              />\n\n                              <NavButton\n                                label=\"Interaction Design\"\n                                tag=\"ixd\"\n                                selectedTags={selectedTags}\n                                showPhotography={showPhotography}\n                                onClick={() => toggleTag('ixd')}\n                              />\n\n                              <NavButton\n                                label=\"Photography\"\n                                tag=\"Photography\"\n                                selectedTags={selectedTags}\n                                showPhotography={showPhotography}\n                                onClick={() => toggleTag('Photography')}\n                              />\n\n                              <NavButton\n                                label=\"Content Creation\"\n                                tag=\"content\"\n                                selectedTags={selectedTags}\n                                showPhotography={showPhotography}\n                                onClick={() => toggleTag('content')}\n                              />\n                            </motion.div>\n                          </>\n                        )}\n                      </AnimatePresence>\n                    </motion.div>\n                  </div>\n                );\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "227.",
      "chapterTitle": "Benefits of This Approach",
      "subsections": [
        {
          "title": "",
          "content": "1. **Simplified Code**: Using a reusable `NavButton` component reduces redundancy and makes your code easier to read.\n                2. **Easy Updates**: If you need to change the button styling or behavior, you only need to update the `NavButton` component.\n                3. **Better Organization**: Keeping logic for each button in a single component helps in maintaining and scaling your project efficiently.\n\n                This way, your code is more manageable and you avoid repeating the same logic for each button.\n\n\n            The code that ChatGPT provided while in principle sounds just about right and I can see the logic behind it, simply does not work as it provided a single button that is somehow meant to universally work for ALL buttons in the sideNav.\n\n            As such I am going to try again, but this time to break down the button components that we’re going to look to create.\n\n            I will likely break it down into HeaderButtons, SkillButtons and WorkButtons. Let’s see how that pans out.\n\n            But for now i’m going to have to rollback to my previous commit as this code from ChatGPT was completely useless and my currently code is now spaghetti as a result.",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "I asked ChatGPT again",
          "content": "- Prompt\n\n                > Let's try again, this is getting too complicated and we're not on the right track. I would like to instead now create buttons just for specific groups in the sideNav. Could you create a component that would optimise this set of buttons for skillsets?\n                > \n            - Answer\n\n                You can optimize your `Skillsets` buttons by creating a reusable `SkillButton` component. Here's how you can refactor your code to make it cleaner and easier to manage:",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "228.",
      "chapterTitle": "Step 1: Create a `SkillButton` Component",
      "subsections": [
        {
          "title": "",
          "content": "```jsx\n                jsx\n                Copy code\n                import { motion } from 'framer-motion';\n\n                const SkillButton = ({ label, tag, selectedTags, showPhotography, onClick }) => {\n                  const isActive =\n                    (tag === 'Photography' && showPhotography) || selectedTags.includes(tag);\n\n                  return (\n                    <motion.button\n                      className={`hover:text-foreground text-left mr-8 ${\n                        isActive\n                          ? 'text-foreground'\n                          : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'\n                      }`}\n                      whileHover={{ scale: 1.06 }}\n                      animate={{ scale: isActive ? 1.06 : 1 }}\n                      variants={animateInChild}\n                      onClick={onClick}\n                    >\n                      {label}\n                    </motion.button>\n                  );\n                };\n\n                export default SkillButton;\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "229.",
      "chapterTitle": "Step 2: Use the `SkillButton` Component in Your `Skillsets` Section",
      "subsections": [
        {
          "title": "",
          "content": "```jsx\n                jsx\n                Copy code\n                import SkillButton from './SkillButton'; // Adjust the import path as necessary\n\n                const Skillsets = ({ showNav, selectedTags, showPhotography, toggleTag }) => (\n                  <AnimatePresence>\n                    {showNav && (\n                      <motion.div\n                        className=\"flex flex-col gap-1 items-start text-left dark:text-neutral-500\"\n                        initial=\"hidden\"\n                        animate=\"show\"\n                        exit=\"exit\"\n                        variants={skillContainer}\n                      >\n                        <motion.h1\n                          className=\"text-xl font-medium mb-4 text-foreground\"\n                          variants={animateInChild}\n                        >\n                          Skillsets\n                        </motion.h1>\n\n                        <SkillButton\n                          label=\"Creative Direction\"\n                          tag=\"creative\"\n                          selectedTags={selectedTags}\n                          showPhotography={showPhotography}\n                          onClick={() => toggleTag('creative')}\n                        />\n                        <SkillButton\n                          label=\"Visual Design\"\n                          tag=\"graphic\"\n                          selectedTags={selectedTags}\n                          showPhotography={showPhotography}\n                          onClick={() => toggleTag('graphic')}\n                        />\n                        <SkillButton\n                          label=\"Video Editing\"\n                          tag=\"edit\"\n                          selectedTags={selectedTags}\n                          showPhotography={showPhotography}\n                          onClick={() => toggleTag('edit')}\n                        />\n                        <SkillButton\n                          label=\"Motion Design\"\n                          tag=\"motion\"\n                          selectedTags={selectedTags}\n                          showPhotography={showPhotography}\n                          onClick={() => toggleTag('motion')}\n                        />\n                        <SkillButton\n                          label=\"Interaction Design\"\n                          tag=\"ixd\"\n                          selectedTags={selectedTags}\n                          showPhotography={showPhotography}\n                          onClick={() => toggleTag('ixd')}\n                        />\n                        <SkillButton\n                          label=\"Photography\"\n                          tag=\"Photography\"\n                          selectedTags={selectedTags}\n                          showPhotography={showPhotography}\n                          onClick={() => toggleTag('Photography')}\n                        />\n                        <SkillButton\n                          label=\"Content Creation\"\n                          tag=\"content\"\n                          selectedTags={selectedTags}\n                          showPhotography={showPhotography}\n                          onClick={() => toggleTag('content')}\n                        />\n                      </motion.div>\n                    )}\n                  </AnimatePresence>\n                );\n\n                export default Skillsets;\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "230.",
      "chapterTitle": "Explanation",
      "subsections": [
        {
          "title": "",
          "content": "1. **SkillButton Component**: A reusable component that handles the active state, hover effect, and scale animation. It uses `isActive` to determine if the button should be highlighted.\n                2. **Skillsets Component**: Uses the `SkillButton` component to render each button, passing down the necessary props like `label`, `tag`, and `onClick` handler.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "231.",
      "chapterTitle": "Benefits",
      "subsections": [
        {
          "title": "",
          "content": "- **Cleaner Code**: Using a `SkillButton` component reduces repetition and makes your code easier to maintain.\n                - **Reusability**: If you need to add more buttons or change the behavior, you only need to modify the `SkillButton` component.\n\n                Let me know if you have any questions or need further customization!",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "232.",
      "chapterTitle": "Yeah, nah.",
      "subsections": [
        {
          "title": "",
          "content": "Breaking it down into different buttons didn’t help. It still broke the functionality of the button that was otherwise working 100% when hardcoded. \n\n            [The button disappears onClick. I had a very strong hunch it’s due to the motion conditional attached to it.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1%201.mov)\n\n            The button disappears onClick. I had a very strong hunch it’s due to the motion conditional attached to it.\n\n            [Hunch was kind of right when I commented the motion line out, but still not great. Calling it quits.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/2%202.mov)\n\n            Hunch was kind of right when I commented the motion line out, but still not great. Calling it quits.\n\n            I think I’ll skip refactoring at this point because it simply isn’t worth the time getting this right, right now. I’ll continue to hard code and ensure the navigation is functional at the very least before I attempt any refactors down the road.\n\n        - **It is 5pm (Diving deeper into states)**",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "233.",
      "chapterTitle": "Hover and Active states with React",
      "subsections": [
        {
          "title": "",
          "content": "Well that was a whole bunch of wasted time with the refactor, but now I’ll dive deeper into fully fleshing out the hover and active states of the buttons on the side navigation bar.\n\n            Honestly, I’m very slowly starting to get the hang of React and `useState`, I wrote my first ever `useState` hook that actually worked and I just felt like I needed to document this here. \n\n            - Said useState code\n\n                ```jsx\n                const [showNav, setShowNav] = useState(false);\n                const toggleNav = () => {\n                  if (showNav) {\n                    setShowNav(false);\n                  } else {\n                    setShowNav(true);\n                  }\n                };\n                ```\n\n\n            Simple, but actually worked and is key to having the expanded sideNav appear upon clicking ‘Give me more options, man’.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "234.",
      "chapterTitle": "Work titles expanding on Hover of the respective tile.",
      "subsections": [
        {
          "title": "",
          "content": "[1_1.mp4](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1_1.mp4)\n\n            Here we go. Now this works, the work titles on the sideNav come into view upon hover of their respective tile on the right. \n\n            The work titles will also come into view when selected and categorised by the skillsets categories above.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "235.",
      "chapterTitle": "One big concern: Scalability",
      "subsections": [
        {
          "title": "",
          "content": "[2.mp4](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/2.mp4)\n\n            This is how the code for the page looks now and it is extremely worrying in terms of scalability once I get deeper into the weeds of categorisation and tagging. There’s something deep within me that’s against all of these hardcoded repetition, but it’s something i’ll accept for now.\n\n            ```jsx\n            <motion.button \n            className={`hover:text-foreground text-left mr-8\n            ${selectedTags.includes('creative') || hoveredWork ==='ghibli' \n              ? 'text-foreground' \n              : 'text-neutral-350 dark:text-neutral-500 dark:hover:text-foreground'\n            } transition-colors duration-100`}\n            whileHover={{scale:1.06}}\n            animate={{scale: \n              selectedTags.includes('creative', 'motion') ||\n              hoveredWork==='ghibli' \n              ? 1.06 : 1\n            }}\n            variants={animateInChild}>The World of Studio Ghibli\n            </motion.button>\n            ```\n\n        - **One more breakthrough***",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "236.",
      "chapterTitle": "Project pages integrated within Home page",
      "subsections": [
        {
          "title": "",
          "content": "[Beyond the Cabin page imported as a component and updated with useState to replace the grid component. This is scalable to all project pages.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/3.mp4)\n\n            Beyond the Cabin page imported as a component and updated with useState to replace the grid component. This is scalable to all project pages.\n\n            As I was getting into the weeds of populating the sideNav with tags and states, it occurred to me that it was possible to have entire project pages load in as React components, replacing the grid.\n\n            This is opposed to the original intent of having the user click through into a separate full screen page as it has been all this while.\n\n            And it works!\n\n            It makes complete sense as it both lessens the amount of steps to click through but also now solves the looming issue of implementing navigation out of the project and to other projects that a fullscreen approach would entail.\n\n    - **15 November** (Top Navigation branch)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "237.",
      "chapterTitle": "Top Navigation experiment",
      "subsections": [
        {
          "title": "",
          "content": "[1.mp4](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1%202.mp4)\n\n        Committed my first branch to Github for this. I had a thought to divide up the user journey of the homepage just a bit more, starting with just the first layer of Give me… which now lives as a row at the top with `flex-row`.",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "Using `showNav` to toggle `col-span` to alter layout.",
          "content": "Upon clicking on ‘more options’ the `sideNav` will then toggle in from the left side, allowing users to basically toggle between side navigation and full screen while also providing a clearer journey.\n\n        ```jsx\n        <div className={showNav ? \"col-span-8\" : \"col-span-full\"}>\n        ```\n\n        I have ideas in mind for how this could look better and will definitely intend to animate the changes as well *(if possible),* but for now I’ll be damned if this is a decent proof of concept of what I had in mind earlier this morning.",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "238.",
      "chapterTitle": "Animation",
      "subsections": [
        {
          "title": "",
          "content": "[The toggle between col-span-8 and col-span-full is now animated.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1%202.mov)\n\n        The toggle between col-span-8 and col-span-full is now animated.\n\n        Animation works! This was a bit of a frustrating process. \n\n        The main issue was that when applying the `layout` prop to the parent `motion.div`, it affected the children further within the `motion.div`itself, which caused unwanted animations between the toggles between the grid and projects.\n\n        ```jsx\n        {/* Grid */}\n              <motion.div\n                className={showNav ? \"col-span-8\" : \"col-span-full\"}\n                layout=\"position\" // Animate the position change of the parent container\n                layoutId=\"sideNav enterExit\" // Unique identifier for the layout transition\n                transition={{ duration: 0.2, type: \"spring\", stiffness: 800, damping: 40 }}  // Control the speed of the transition\n              > \n                {/* The grid container does not animate layout */}\n                <div className=\"grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 col-span-full gap-3 mt-10 md:mt-0\">\n                  <AnimatePresence>\n                    {selectedWork === 'photography' ? (\n                      <PhotographyPage key=\"photography\" className=\"col-span-full -mt-22\"/>\n                    ) : selectedWork === 'cabin' ? (\n                      <CabinCrewStories key=\"cabin\" className=\"col-span-full -mt-10\"/>\n                    ) : (\n                      filteredVideos.map((video) => (\n                        <VideoSquare\n                          key={video.src}\n                          videoSrc={video.src}\n                          link={video.link}\n                          tags={video.tags}\n                          setHoveredWork={setHoveredWork}\n                          onClick={() => { \n                            if (video.tags.includes('cabin')) { \n                              setSelectedWork('cabin'); \n                            } \n                          }} \n                        />\n                      ))\n                    )}\n                  </AnimatePresence>\n                </div> \n              </motion.div>\n        ```\n\n        This was only solved with the use of `layoutID` which confined the `layout` prop to only divs that matched the assigned `layoutID`. With the parent `motion.div` the only div with the assigned ID, the `layout` prop only applied to that div without affecting the child divs further below.\n\n    - **16 November*** (Combined top navigation + Fav works page functionality + Reset Button)\n        - It is 12:45pm (Combined topNav status update)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "239.",
      "chapterTitle": "Current state of the website",
      "subsections": [
        {
          "title": "",
          "content": "[1.mov](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1%203.mov)\n\n            Latest update on the status of the website, I had a thought to combine the top navigation bar with the Give me… bar for a combined top navigation that now controls what is shown within the grid area of the page—essentially housing the entire website now in a single page and controlled by React states.\n\n            Also designed a dedicated ‘personal favourites’ or best work page that’s separate from the grid layout into a component that is then inserted within the page onClick of the personal favourites button on the top nav. \n\n        - It is 3pm (Passing props from HomePage to BestWorkPage)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "240.",
      "chapterTitle": "Clicking through a React component to toggle State",
      "subsections": [
        {
          "title": "",
          "content": "![‘my favourites’ page is a React component (`BestWorkPage`) loaded into the Homepage.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2044.png)\n\n            ‘my favourites’ page is a React component (`BestWorkPage`) loaded into the Homepage.\n\n            So I have created a React component titled `BestWorkPage` which is loaded onto the homepage here as seen above. However as it is a separate React component entirely and not part of the homepage code, I began to wonder how I’d be able to control the `selectedWork` state that lives on the homepage to enable clicking through into the work selected.\n\n            I know this to be possible, with a vague hunch on passing props between React components even though they’re not part of the same code.\n\n            - **ChatGPT answered**\n\n                To enable interaction between your `BestWorkPage` component and the `GridPage` to update the `selectedWork` state in the `GridPage`, you can pass the `setSelectedWork` function as a prop from `GridPage` to `BestWorkPage`. This way, `BestWorkPage` can call `setSelectedWork` when a video is clicked, updating the state in the parent component.\n\n                Here's how you can modify your setup:",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "241.",
      "chapterTitle": "Step-by-Step Solution",
      "subsections": [
        {
          "title": "",
          "content": "1. **Pass `setSelectedWork` as a Prop**\n                    - In `GridPage`, when rendering `BestWorkPage`, pass `setSelectedWork` as a prop:\n\n                    ```jsx\n                    jsx\n                    Copy code\n                    <BestWorkPage key=\"bestwork\" className=\"col-span-full mt-2 pl-4\" setSelectedWork={setSelectedWork} />\n\n                    ```\n\n                2. **Update `BestWorkPage` to Use the Prop**\n                    - Modify `BestWorkPage` to accept `setSelectedWork` as a prop and use it in the `onClick` event for the videos:\n\n                    ```jsx\n                    jsx\n                    Copy code\n                    import * as motion from \"framer-motion/client\";\n                    import React from 'react';\n\n                    const animateIn = {\n                      hidden: { opacity: 0, y: 20 },\n                      show: {\n                        opacity: 1,\n                        y: 0,\n                        transition: { staggerChildren: 0.15, duration: 0.5, ease: \"easeOut\" },\n                      },\n                    };\n                    const animateInChild = {\n                      hidden: { opacity: 0, y: 20 },\n                      show: {\n                        opacity: 1,\n                        y: 0,\n                        transition: { duration: 0.3, ease: \"easeOut\" },\n                      },\n                    };\n\n                    const BestWorkPage = ({ className, setSelectedWork }) => {\n                      return (\n                        <motion.div\n                          className={`grid grid-cols-6 font-[family-name:var(--font-geist-sans)] ${className}`}\n                          initial=\"hidden\"\n                          animate=\"show\"\n                          variants={animateIn}\n                        >\n                          {/* Example Video 1 */}\n                          <motion.video\n                            src=\"/CCS/montagelow.mp4\"\n                            className=\"col-span-4 shadow-standard rounded-lg w-full h-96 object-cover mb-4\"\n                            autoPlay\n                            muted\n                            loop\n                            variants={animateInChild}\n                            onClick={() => setSelectedWork('cabin')} // Set selectedWork to 'cabin'\n                          ></motion.video>\n\n                          {/* Example Video 2 */}\n                          <motion.video\n                            src=\"/Cocktail/montage.mp4\"\n                            className=\"col-span-4 shadow-standard rounded-lg w-full h-96 object-cover mb-4\"\n                            autoPlay\n                            muted\n                            loop\n                            variants={animateInChild}\n                            onClick={() => setSelectedWork('cocktail')} // Set selectedWork to 'cocktail'\n                          ></motion.video>\n\n                          {/* Example Video 3 */}\n                          <motion.video\n                            src=\"/ghibli/banner.mp4\"\n                            className=\"col-span-4 shadow-standard rounded-lg w-full h-96 object-cover mb-4\"\n                            autoPlay\n                            muted\n                            loop\n                            variants={animateInChild}\n                            onClick={() => setSelectedWork('ghibli')} // Set selectedWork to 'ghibli'\n                          ></motion.video>\n                        </motion.div>\n                      );\n                    };\n\n                    export default BestWorkPage;\n\n                    ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "242.",
      "chapterTitle": "Explanation",
      "subsections": [
        {
          "title": "",
          "content": "1. **Prop Passing**: The `setSelectedWork` function from `GridPage` is passed to `BestWorkPage` as a prop.\n                2. **State Update**: Inside `BestWorkPage`, the `onClick` event of each video calls `setSelectedWork` with the desired work type, updating the `selectedWork` state in `GridPage`.\n                3. **Result**: Clicking a video in `BestWorkPage` will change the `selectedWork` state in `GridPage`, which will update the displayed content accordingly.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "243.",
      "chapterTitle": "Benefits",
      "subsections": [
        {
          "title": "",
          "content": "- **Reactivity**: The `selectedWork` state is managed in one place (`GridPage`), keeping the logic centralized and making the behavior consistent across components.\n                - **Flexibility**: You can add more videos and update the `setSelectedWork` calls to handle additional work types easily.\n\n                This approach keeps your state management simple and maintains a clear flow of data between components.\n\n\n            [Final working implementation with both setSelectedWork and setHoveredWork](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/2%203.mov)\n\n            Final working implementation with both setSelectedWork and setHoveredWork\n\n            My hunch that props can be passed between components regardless of code file was more or less on the mark. \n\n            ```jsx\n            : selectedWork === 'bestwork' ? \n            (<BestWorkPage key=\"bestwork\" className=\"col-span-full mt-2\" \n            setSelectedWork={setSelectedWork} setHoveredWork={setHoveredWork}/>\n            ```\n\n            The above snippet of code resides on the Homepage code, which basically dictates that upon selection of the BestWorkPage, to pass the `setSelectedWork` and `setHoveredWork` props into the component itself. \n\n            ```jsx\n            const BestWorkPage = ({className, setSelectedWork, setHoveredWork}) => {\n              return (\n                <motion.div className={`grid grid-cols-6 font-[family-name:var(--font-geist-sans)] ml-6 ${className}`}\n                initial=\"hidden\"\n                animate=\"show\"\n                variants={animateIn}>\n            ```\n\n            And here is the code from within the component itself receiving `className`, `setSelectedWork` and `setHoveredWork`. \n\n            ```jsx\n            <button className=\"col-span-4 rounded-lg mb-4\">\n                        <motion.video src=\"/CCS/montagelow.mp4\" \n                        className=\"rounded-lg shadow-standard w-full h-96 object-cover\"\n                        autoPlay muted loop\n                        variants={animateInChild}\n                        whileHover={{scale:0.99}}\n                        transition={{duration:0.10}}\n                        onMouseEnter={() => {setHoveredWork('cabin')}}\n                        onMouseLeave={() => setHoveredWork(null)}\n                        onClick={() => {\n\n                            setSelectedWork('cabin')}}>\n                        </motion.video>\n                    </button>\n            ```\n\n            Which results in being able to set states within the component itself even though the `useState` code doesn’t even exist within this component. The code above is for the video of the Beyond the Cabin row, where the video is now a button that `onClick`, adds the `‘cabin’` tag to the `SelectedWork` array, toggling the Beyond the Cabin page to appear on the Homepage. \n\n            Additionally there is also a `onMouseEnter` and `onMouseLeave` state to light up the Beyond the Cabin title on the side navigation bar upon hovering over the video. \n\n        - **It is 7pm** (Reset Button)\n\n            [1.mov](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1%204.mov)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "244.",
      "chapterTitle": "Reset button.",
      "subsections": [
        {
          "title": "",
          "content": "Again, i’m writing this in retrospect on the 17th November, the next morning in fact. But yes, I have implemented a universal reset button that appears upon any state change from the default Homepage initial state that will return the user back to that.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "245.",
      "chapterTitle": "useState",
      "subsections": [
        {
          "title": "",
          "content": "For this to happen I actually wrote my own useState code *(wow!!!! Im actually understanding React!!!).* \n\n            ```jsx\n            const [showReset, setShowReset] = useState(false);\n            ```\n\n            And also a corresponding function `toggleReset` to set the state for showReset. However I very quickly realised that having to hardcode every single logic interaction in `toggleReset` to set the condition for the reset button to appear was clearly unsustainable and not scalable. As such I turned to ChatGPT for a more optimised solution, which I was then presented with…",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "246.",
      "chapterTitle": "useEffect",
      "subsections": [
        {
          "title": "",
          "content": "```jsx\n            useEffect(() => {\n              if (selectedWork.length > 0) {\n                setShowReset(true); \n              } else if (selectedTags.includes('all') || selectedTags.length === 0) {\n                setShowReset(false); \n              } else {\n                setShowReset(true); \n              }\n              console.log('selectedWork:', selectedWork)\n              console.log('showReset:', showReset);\n            }, [selectedTags, selectedWork]);\n            ```\n\n            This is my first ‘real-world application’ of `useEffect`, it made complete sense. `useEffect` basically looks out for any changes in state in real-time and conditionally sets states based on it. What the code above does is to conditionally look out for changes in any of the states made by selected a piece of work or skillset, and then sets the state of `showReset` with `setShowReset`. \n\n            It still took quite a long time to map out the logic in my head to configure this code out but ultimately what we have here is a bit of code that checks…\n\n            1. If there are any work selected (`selectedWork.length > 0`), **show Reset.** *(This was a solution to an odd edge case where the button wasn’t showing upon toggling to a piece of work from the grid itself, so it now universally checks if there’s any work toggled regardless of where it’s selected from.)*\n            2. If nothing is selected / back on initial state (`selectedTags.includes('all')` OR `selectedTags.length === 0`), **hide Reset** \n            3. All other cases to show reset button. \n\n            Very nifty piece of code if I may say so myself.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "247.",
      "chapterTitle": "The cherry on top",
      "subsections": [
        {
          "title": "",
          "content": "After which I spent around 2-3 hours getting the animations and for the button to stay sticky on the page upon scrolling down. I won’t go into detail on the multiple rounds of troubleshooting and frequent ChatGPT hallucination, but it took a long while. I got it working in the end, which is the best I could hope for. \n\n    - 18 November (Designed Action Prompt Button + Photography landing page)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "248.",
      "chapterTitle": "Action Prompt button",
      "subsections": [
        {
          "title": "",
          "content": "[2.mp4](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/2%201.mp4)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "249.",
      "chapterTitle": "Redesigned Photography landing page",
      "subsections": [
        {
          "title": "",
          "content": "[3.mp4](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/3%201.mp4)\n\n    - 19 November (Redesigned Favourites page)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "250.",
      "chapterTitle": "Favourites Page redesign",
      "subsections": [
        {
          "title": "",
          "content": "![Original design of Favourites page.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2045.png)\n\n        Original design of Favourites page.\n\n        ![New design of Favourites Page](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2046.png)\n\n        New design of Favourites Page",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "251.",
      "chapterTitle": "I’m actually split; I’m not sure if I like the new design.",
      "subsections": [
        {
          "title": "",
          "content": "I had the redesign of the favourites page imagined in my head. But now that it is implemented and in flesh, i’m quite split—my gut is telling me that the original design is still the better choice.\n\n        The new design looked good in my head, but in practice feels just a bit over the line of being too busy for a page that already has a lot going on. \n\n        I’m not sure, this is probably where user testing will come in handy.\n\n    - 20 November (Redesigned Profile page)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "252.",
      "chapterTitle": "Included photos of me, that’s kinda it.",
      "subsections": [
        {
          "title": "",
          "content": "![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2047.png)\n\n        ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2048.png)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "253.",
      "chapterTitle": "Okay, it’s not kind of it, **this page still requires a lot more work**. But this will do for now.",
      "subsections": [
        {
          "title": "",
          "content": "- **21 November** (Home Page hover state design)\n\n        [2_1.mp4](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/2_1.mp4)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "254.",
      "chapterTitle": "Finally.",
      "subsections": [
        {
          "title": "",
          "content": "I got down to implementing a hover state for the home page grid; one that will give you the title of the work and it’s relevant information as you navigate the main grid of works. \n\n        Was a pretty simple implementation and the above is the design i’ve settled on with a frosted glass effect—*not entirely sure if this is the art direction I would like my site to go down, but it’ll do for now.*\n\n        It was a matter of pure Tailwind implementation on the `VideoSquare` component that dealt with initial and hover state for both light and dark modes. The code is below if you’d like to peek it. \n\n        - **Code for VideoSquare**\n\n            ```jsx\n            const VideoSquare = ({ videoSrc, tags, setHoveredWork, onClick, title, subheader, role }) => {\n              return (\n                <motion.div\n                  className=\"overflow-hidden bg-background drop-shadow-lg rounded-lg ease-in-out hover:scale-98 hover:drop-shadow-md cursor-pointer group-hover:z-50\"\n                  initial=\"hidden\"\n                  animate=\"show\"\n                  whileHover={{scale:0.98}}\n                  exit=\"fade\"\n                  variants={scaleIn}\n                  onMouseEnter={() => {setHoveredWork(tags[0]); console.log(tags)}}\n                  onMouseLeave={() => setHoveredWork(null)}\n                  onClick={onClick}>\n\n                      {/* Title */}\n                      <div className=\"pt-[100%] group relative\">\n\n                        {/* Text Container */}\n                        <div className=\"absolute inset-0 flex flex-col items-start justify-between p-3 md:p-6 gap-4\">\n\n                          {/* Title of work */}\n                          <h1 className=\"text-3xl md:text-5xl tracking-tight font-medium text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 w-3/4 mix-blend-screen leading-tighter md:leading-11\">\n                            {title}\n                          </h1>\n\n                          {/* Work Details Container */}\n                          <div className=\"z-50 flex flex-row justify-between\">\n\n                            {/* Subheader */}\n                            <h3 className=\"z-50 text-white font-medium tracking-tight text-base opacity-0 group-hover:opacity-100\n                            transition-all duration-300 leading-5 w-1/2\">\n                            {subheader}\n                            </h3>\n\n                            {/* Role */}\n                            <h3 className=\"z-50 text-white tracking-tight text-xs opacity-0 group-hover:opacity-100\n                            transition-all duration-300 leading-5 w-1/2\">\n                            {role}\n                            </h3>\n                          </div>\n                        </div>\n\n                        {/* Corner Arrow */}\n                        <button className=\"absolute top-2 right-2 z-20 p-0 m-1 scale-100\n                        rounded-full border-0 border-[rgba(255,255,255,0.5)] text-white backdrop-blur\n                        group-hover:bg-white group-hover:text-black group-hover:scale-150 group-hover:m-2 group-hover:px-1\n                        transition-all duration-200\">\n                            <svg\n                            xmlns=\"http://www.w3.org/2000/svg\"\n                            viewBox=\"2 2 20 20\"\n                            fill=\"none\"\n                            stroke=\"currentColor\"\n                            strokeWidth=\"1.5\"\n                            strokeLinecap=\"round\"\n                            strokeLinejoin=\"round\"\n                            className=\"w-4 h-4\">\n                            <path d=\"M7 17L17 7\"\n                            className=\"opacity-0 group-hover:opacity-100 transition-opacity duration-200\" />\n                            <path d=\"M7 7h10v10\" />\n                            </svg>\n                        </button>\n\n                        {/* Gradient */}\n                        {/* <div className=\"absolute inset-0 z-10 h-2/3 bg-gradient-to-b from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blend-multiply\">\n                        </div> */}\n\n                        {/* Video */}\n                        <video\n                          className=\"absolute scale-102 inset-0 w-full h-full object-cover blur-none \n                          md:group-hover:blur-xl group-hover:opacity-80 transition-all duration-200\"\n                          autoPlay muted loop playsInline>\n                          <source src={videoSrc} type=\"video/mp4\" />\n                        </video>\n                      </div>\n\n                </motion.div>\n              );\n            };\n            ```\n\n\n- 5. **Mobile***\n    - **22 November*** (Commenced Mobile Adaptation)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "255.",
      "chapterTitle": "Mobile-first Philosophy.",
      "subsections": [
        {
          "title": "",
          "content": "I know. In this day and age, the website should technically have been designed and built mobile-first and then iterated upon for the desktop experience. You would think my very own years of exposure in the Advertising and Marketing industries would have ingrained that upon me—that something along the lines of upwards of 85% site visits are from mobile devices. \n\n        However, I guess for the purpose of my learning to build a website from ground up, I focused entirely on first getting a functional desktop site; and now that I feel like I have that, I have found myself now turning towards adapting it towards mobile.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "256.",
      "chapterTitle": "The age of 9:16.",
      "subsections": [
        {
          "title": "",
          "content": "Again, I should preface that this is written in retrospect on the morning of 23rd November; I got pulled too deep into the focus zone of creating mobile-only tailwind utility configurations yesterday that I wished not to break that by documenting here.",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "Current state of the mobile site",
          "content": "[1.mov](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1%205.mov)\n\n        Honestly, adapting to the mobile site isn’t challenging in a bit—it’s more hyper-focusing on the logic between the Tailwind breakpoints and making sure every bit of the code abides by the breakpoints as defined by yourself.",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "257.",
      "chapterTitle": "The biggest challenge thus far.",
      "subsections": [
        {
          "title": "",
          "content": "That being said, the **inability to hover** on mobile currently poses as the biggest hurdle when it comes to designing and planning for interactions on the site thus far. A large portion of the desktop site was planned with the ability to hover and glance information before clicking-through for more. **This is simply not possible on mobile**, you either tap through, or don’t.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "258.",
      "chapterTitle": "Redesigning the homepage experience.",
      "subsections": [
        {
          "title": "",
          "content": "Which leads me to my next step for today (23rd November), I’m seeing myself having to redesign the homepage experience just for mobile. The grids layout where you get to hover over to glance details of the work just doesn’t work for the mobile experience. \n\n        I will have to develop a design that allows you to glance all relevant information in a single go. \n\n    - **23 November** (Mobile Homepage + Profile page)\n        - **It is 11am** (Redesigning the Homepage)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "259.",
      "chapterTitle": "Let’s go. It’s going to be a long day ahead.",
      "subsections": [
        {
          "title": "",
          "content": "![Current homepage](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2049.png)\n\n            Current homepage\n\n            ![Photography landing page](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2050.png)\n\n            Photography landing page\n\n            First off, I’m envisioning a card based design similar to what I already have for my photography landing page—except this will be for the main homepage grid, every single piece of work will be housed in a card with the title and a subheader.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "260.",
      "chapterTitle": "Responsive Layout",
      "subsections": [
        {
          "title": "",
          "content": "[1.mp4](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1%203.mp4)\n\n            The grid layout for mobile has now been changed to be single columned on `md:` and below breakpoints, now for the design of the card that will apply only on `md:` and below.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "261.",
      "chapterTitle": "Card Design",
      "subsections": [
        {
          "title": "",
          "content": "[Final Design.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1_1%201.mp4)\n\n            Final Design.\n\n            ![Original Intent.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2051.png)\n\n            Original Intent.\n\n            So here it is, the final design for the mobile homepage on the left. Opted to go for a portrait format per work tile instead of the original intent of having them be landscape cards. \n\n            To be fair, the landscape card original intent does look more compact for a mobile experience—and there is still merit to that design on second glance. The biggest gripe for that layout to me is still the sheer business of the text from all the cards; one that the portrait layout solves by giving more room to breathe in between works.\n\n        - It is 3:30pm (Mobile profile page)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "262.",
      "chapterTitle": "Profile Page for Mobile",
      "subsections": [
        {
          "title": "",
          "content": "![Light mode](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2052.png)\n\n            Light mode\n\n            ![Dark mode](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2053.png)\n\n            Dark mode\n\n            Kind of stumbled down the rabbit hole and decided to format up the design for the mobile version of the profile page. This is what I’ve currently landed upon, feels like its about 30% of the way there. Definitely more redesigns to come, but this is good enough for now.\n\n            ![Desktop page](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2054.png)\n\n            Desktop page\n\n            Also in the process messed up the layout for the desktop version between the codes are one and intertwined. Funny how the tables have now turned and I’m designing for the mobile version first and desktop second *(forsaken)*.\n\n            - Current Profile page code\n\n                ```tsx\n                'use client';\n                import { motion } from \"framer-motion\";\n                import React, {useState, useEffect} from 'react';\n                import Image from 'next/image';\n                import Carousel from '../components/profile-carousel.js'\n\n                const animateIn = {\n                    hidden: { opacity: 0, y: 20 },\n                    show: {\n                        opacity: 1, y: 0,\n                        transition: { staggerChildren: 0.03, duration: 0.2, ease: \"easeOut\" }\n                    }\n                };\n                const animateInChild ={\n                    hidden: {opacity:0, y:20},\n                    show: {\n                        opacity:1, y:0, \n                        transition: {duration:0.3, ease:\"easeOut\"}\n                        }\n                    }\n\n                export default function Resume({className=\"\"}) {\n\n                    const [timeNyc, setTimeNyc] = useState<string | null>(null);\n                    useEffect(() => {\n\n                      const currentTime = new Date();\n                      const timeInTimeZone = new Intl.DateTimeFormat('en-US', {\n                        timeZone:'America/New_York',\n                        hour: '2-digit',\n                        minute: '2-digit',\n                        second: '2-digit',\n                        hour12: false,\n                      }).format(currentTime);\n                      setTimeNyc(timeInTimeZone);\n\n                      const timer = setInterval(() => {\n                        const updatedTime = new Date();\n                        const updatedTimeInTimeZone = new Intl.DateTimeFormat('en-US', {\n                          timeZone:'America/New_York',\n                          hour: '2-digit',\n                          minute: '2-digit',\n                          second: '2-digit',\n                          hour12: false,\n                        }).format(updatedTime);\n\n                        setTimeNyc(updatedTimeInTimeZone);\n                      }, 1000);\n\n                      return () => clearInterval(timer);\n                    }, []);\n\n                    const [timeSg, setTimeSg] = useState<string | null>(null);\n                    useEffect(() => {\n\n                      const currentTime = new Date();\n                      const timeInTimeZone = new Intl.DateTimeFormat('en-US', {\n                        timeZone:'Asia/Singapore',\n                        hour: '2-digit',\n                        minute: '2-digit',\n                        second: '2-digit',\n                        hour12: false,\n                      }).format(currentTime);\n                      setTimeSg(timeInTimeZone);\n\n                      const timer = setInterval(() => {\n                        const updatedTime = new Date();\n                        const updatedTimeInTimeZone = new Intl.DateTimeFormat('en-US', {\n                          timeZone:'Asia/Singapore',\n                          hour: '2-digit',\n                          minute: '2-digit',\n                          second: '2-digit',\n                          hour12: false,\n                        }).format(updatedTime);\n\n                        setTimeSg(updatedTimeInTimeZone);\n                      }, 1000);\n\n                      return () => clearInterval(timer);\n                    }, []);\n\n\n\n                    return (\n\n                    <>\n                        {/* Page Container */}\n                        <motion.div className={`grid grid-cols-1 lg:grid-cols-10 w-full md:pl-4\n                        items-start justify-items-start font-[family-name:var(--font-geist-sans)]\n                        gap-2 text-sm tracking-tight ${className}`}\n                        initial=\"hidden\"\n                        animate=\"show\"\n                        variants={animateIn}>\n\n\n\n                            {/* Bio */}\n                            <div className=\"col-span-4 \">\n\n                                {/* Mobile Photo Card */}\n                                <div className=\"lg:hidden relative w-full h-[600px]\">\n                                    <motion.h1\n                                    className=\"z-50 pl-5 pt-8 text-7xl tracking-tighter whitespace-nowrap leading-10 font-base text-white\"\n                                    variants={animateInChild}\n                                    >\n                                    I am Chris.\n                                    {/* <span className=\"text-xs align-top ml-2 font-normal tracking-normal italic\">Leow, Chris Leow.</span> */}\n                                    </motion.h1>\n\n                                    <Image\n                                    src=\"/profile/profile.jpg\"\n                                    alt=\"\"\n                                    className=\"absolute rounded-lg top-0 left-0 h-full w-full object-cover -z-50 object-bottom\"\n                                    layout=\"fill\"\n                                    objectFit=\"cover\"\n                                    />\n\n                                    <motion.div\n                                    className=\"absolute bottom-0 pl-6 pb-5 text-white \"\n                                    variants={animateInChild}\n                                    >\n                                        <p className=\"flex items-center justify-center -ml-1.5 border-1 border-white \n                                        rounded-full tracking-tight font-medium w-32 text-base mb-2\">Senior Creative</p>\n                                        Based in New York City\n                                        <span className=\"text-neutral-300 align-top text-xs ml-1\">{timeNyc}</span>\n                                        <br />\n                                        <i className=\"-ml-0.5\">From Singapore</i>\n                                        <span className=\"text-neutral-300 align-top text-xs ml-1\">{timeSg}</span>\n                                    </motion.div>\n                                </div>\n\n                                {/* Desktop Header */}\n                                <motion.h1\n                                    className=\"hidden lg:block mt-2 mb-12 text-7xl tracking-tighter whitespace-nowrap leading-10 font-base text-foreground\"\n                                    variants={animateInChild}\n                                    >\n                                    I am Chris.\n                                    {/* <span className=\"text-xs align-top ml-2 font-normal tracking-normal italic\">Leow, Chris Leow.</span> */}\n                                </motion.h1>\n\n                                {/* Desktop Details */}\n                                <motion.div\n                                className=\"mb-6 -ml-0.5 text-foreground hidden md:block\"\n                                variants={animateInChild}>\n                                <p className=\"flex items-center justify-center -ml-1.5 border-1 border-foreground rounded-full tracking-tight font-medium w-32 text-base mb-5\">Senior Creative</p>\n                                Based in New York City\n                                <span className=\"text-neutral-300 align-top text-xs ml-1\">{timeNyc}</span>\n                                <br />\n                                <i className=\"-ml-0.5\">From Singapore</i>\n                                <span className=\"text-neutral-300 align-top text-xs ml-1\">{timeSg}</span>\n                                </motion.div>\n\n                                <motion.p \n                                className=\"mb-8 mt-8 md:mt-0 px-5 md:px-0 text-4xl font-medium tracking-tight\"\n                                variants={animateInChild}>\n                                    & Here are answers.\n                                </motion.p>\n\n                                <motion.div \n                                className=\"mb-6 px-5 md:px-0\"\n                                variants={animateInChild}>\n                                    <p className=\"mb-2 italic font-mono tracking-tighter\">Who?</p>\n                                    Born and raised in sunny <i className=\"mr-0.5 font-light \">(to put it mildly)</i> Singapore, I was once a young kid obsessed with the romanticized image of beret-wearing, palette-wielding artists. Now, I find myself living the surreal reality of professionally conceptualizing, creating, and directing what is essentially art for the world. \n                                    With a fervor for craft and a meticulous eye for finesse, I do take a possibly unhealthy pride in creating visually compelling work across various mediums.\n                                </motion.div>\n\n                                <motion.div \n                                className=\"mb-6 px-5 md:px-0\"\n                                variants={animateInChild}>\n                                    <p className=\"mb-2 italic font-mono tracking-tighter\">What?</p>\n                                    As a multidisciplinary creative and formerly the Creative Lead at ArtScience Museum in Singapore; eight years of experience in the Advertising and Design industry is what I find myself with–having notably worked on multiple brand campaigns for Singapore Airlines as an Art Director and global brands the likes of Nike, Samsung, IKEA, Studio Ghibli, Uniqlo and MINI. \n                                </motion.div>\n\n                                <motion.div \n                                className=\"mb-10 px-5 md:px-0\"\n                                variants={animateInChild}>\n                                    <p className=\"mb-2 italic font-mono tracking-tighter\">And?</p>\n                                    In his spare time after work <i>(which, realistically, isn&apos;t much)</i>, he does even more work, but for himself—creating content through photography, videography, editing and motion design. When he is finally not working, you will find him thrifting for furniture or, for a more colloquial term, stooping on the streets of New York City. He loves building his living space up, though he wouldn&apos;t go so far as to call it interior design.\n                                </motion.div>\n\n                                <motion.div \n                                className=\"mb-8 px-5 md:px-0\"\n                                variants={animateInChild}>\n                                    <p className=\"mb-2 italic font-mono tracking-tighter\">I'm sold.</p>\n                                    Email – ithinkitschristopher@gmail.com\n                                    <br/>\n                                    LinkedIn – <a href=\"https://www.linkedin.com/in/chris-leow-93372b184/\" className=\"underline transition-colors hover:text-midground\">Chris Leow</a>\n                                    <br/>\n                                    Instagram – <a href=\"https://www.instagram.com/khristurtle/\" className=\"underline transition-colors hover:text-midground\">@khristurtle</a>\n                                </motion.div>\n                            </div>\n\n                            <div className=\"hidden md:block md:col-span-5\"/>\n\n                            {/* <div className=\"hidden md:block col-span-5\">\n                                <Carousel className=\"w-full col-span-full\" />\n                            </div> */}\n\n                            {/* Currently: */}\n                            <div className=\"col-span-full pl-5 md:pl-0 md:col-span-2\">\n\n                                <motion.h1 className=\"text-4xl md:text-3xl mb-11 -ml-0.5 mt-10 tracking-tight\" variants={animateInChild}>\n                                Currently:<br/>\n                                </motion.h1>\n\n                                    <motion.div variants={animateInChild} className=\"-mt-2\">\n                                        <p className=\"flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 \n                                        rounded-full tracking-tight font-medium w-36 text-base mb-2\">Master's Student</p>\n                                        <p>\n                                            MFA Interaction Design\n                                            <br/>\n                                            School of Visual Arts\n                                            <br/>\n                                            <i className=\"-ml-0.5\">September 2024 – May 2026</i>\n                                        </p>\n                                    </motion.div>\n\n                                    <motion.div variants={animateInChild}>\n                                        <h1 className=\"mt-8 text-lg\" >Curriculum undertaken</h1>\n                                    </motion.div>\n\n                                    <motion.div className=\"ml-4\" variants={animateInChild}>\n                                        <p className=\"mt-4\">Research Methodologies</p>\n                                        <p>Service Design</p>\n                                        <p>UX Content Writing</p>\n                                        <p>Programming <i>(C, Python, JavaScript)</i></p>\n                                        <p>Human Interaction & Ergonomics</p>\n                                        <p>Physical Computing</p>\n                                    </motion.div>\n\n                                    <motion.div className=\"text-midground\" variants={animateInChild}>\n                                        <h1 className=\"mt-8 text-lg\" >Curriculum to be undertaken</h1>\n                                    </motion.div>\n\n                                    <motion.div className=\"ml-4 text-midground\" variants={animateInChild}>\n                                        <p className=\"mt-4\">Inclusive Design</p>\n                                        <p>Inclusive Design II</p>\n                                        <p>Spatial Computing</p>\n                                        <p>Advanced Fundamentals of UX</p>\n                                        <p>Intellectual Property & the Law</p>\n                                        <p>Framing User Experiences</p>\n                                        <p>Smart Objects</p>\n                                        <p>Professional Practices</p>\n                                        <p>Digital Accessibility</p>\n                                        <p>Design for Cities</p>\n                                        <p>Prototyping Narratives</p>\n                                        <p>Thesis</p>\n                                    </motion.div>\n\n                            </div>\n\n                            {/* ArtScience Museum */}\n                            <div className=\"col-span-full pl-5 md:pl-0 md:col-span-2 sm:pr-4 mt-11\">\n\n                                <motion.div variants={animateInChild} className=\"\">\n                                    <p className=\"text-4xl md:text-3xl mb-10 -ml-0.5 tracking-tight\">\n                                        Previously:\n                                    </p>\n\n                                    <div className=\"-mt-2\">\n                                    <p className=\"flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 \n                                        rounded-full tracking-tight font-medium w-30 text-base mb-2\">Creative Lead</p>\n                                    <p>Marina Bay Sands <i>(ArtScience Museum)</i></p>\n                                    <p className=\"-ml-0.5 italic opacity-75\">January 2024 – November 2024</p>\n                                    </div>\n                                </motion.div>\n\n                                <div>\n                                    <motion.h1 className=\"mt-8 2xl:mt-14 text-lg font-medium\" variants={animateInChild}>\n                                    ArtScience Museum</motion.h1>\n\n                                    <motion.div variants={animateInChild}>\n                                        <h1 className=\"mt-6 mb-4 opacity-90\">\n                                            The World of Studio Ghibli\n                                        </h1>\n\n                                        <p className=\"ml-6 opacity-50\">\n                                        Creative direction for the integrated marketing campaign for The World of Studio Ghibli, the first ever Studio Ghibli exhibition in Singapore held at ArtScience Museum. Designed the Key Visual for the exhibition and provided creative direction over marketing partners as well as merchandise for the exhibition. \n                                        </p>\n                                    </motion.div>\n                                    <motion.div variants={animateInChild}>\n                                        <h1 className=\"mt-4 mb-4 opacity-90\">\n                                            Goddess: Brave. Bold. Beautiful.</h1>\n                                        <p className=\"ml-6 opacity-50\">\n                                        Creative direction and strategic positioning for the marketing campaign of Goddess, an exhibition at the ArtScience Museum that celebrates screen icons across 120 years of moving image history. \n                                        </p>\n                                    </motion.div>\n                                    <motion.div variants={animateInChild}>\n                                    <h1 className=\"mt-4 mb-4 opacity-90\">\n                                        Frida Kahlo: The Life of an Icon</h1>\n                                    <p className=\"ml-6 opacity-50\">\n                                    Creative direction and strategic positioning for the marketing campaign of Frida Kahlo: Life of an Icon, an exhibition at the ArtScience Museum on Mexican artist Frida Kahlo, alongside the companion exhibition Laid Bare: Frida’s Inner World. Managed and produced visuals and assets across the campaign titled Frida Forever for the lineup of activities held at the museum.\n                                    </p>\n                                    </motion.div>\n                                    <motion.div variants={animateInChild}>\n                                    <h1 className=\"mt-4 mb-4 opacity-90\">\n                                        ArtScience After Hours</h1>\n                                    <p className=\"ml-6 opacity-50\">\n                                    Creative direction and visual identity oversight on ArtScience After Hours, an all-encompassing night time experience for the ArtScience Museum, with late-night offerings and experiences beyond daylight.\n                                    </p>\n                                    </motion.div>\n                                    <motion.div variants={animateInChild}>\n                                    <h1 className=\"mt-4 mb-4 opacity-90\">\n                                        ArtScience Cinema</h1>\n                                    <p className=\"ml-6 opacity-50\">\n                                    Creative direction for all marketing deliverables for ArtScience Cinema, ArtScience Museumss purpose-built cinema that screens a curated programme of film all year round by the museums film curatorial team.\n                                    </p>\n                                    </motion.div>\n\n\n                                </div>\n                            </div>\n\n                            {/* TBWA */}\n                            <div className=\"col-span-full pl-5 md:pl-0 md:col-span-2 sm:pr-4 mt-28\">\n                                <motion.div variants={animateInChild}>\n                                <div>\n                                <p className=\"flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 \n                                        rounded-full tracking-tight font-medium w-26 text-base mb-2\">Art Director</p>\n                                    <p>\n                                    TBWA\\ Singapore<br/>\n                                    <i className=\"-ml-0.5 opacity-75\">March 2021 – August 2023</i>\n                                    </p>\n                                </div>\n                                </motion.div>\n\n                                    <motion.h1 className=\"mt-8 2xl:mt-14 text-lg font-medium\" variants={animateInChild}>Singapore Airlines</motion.h1>\n\n                                    <motion.div variants={animateInChild}>\n                                        <h1 className=\"mt-6 mb-4 opacity-90 font-base\">Beyond The Cabin</h1>\n                                        <p className=\"mb-4 ml-6 opacity-50\">\n                                        Lead Creative and Motion Designer for Beyond The Cabin, an episodic brand campaign and content series that was centred around Singapore Airline’s Cabin Crew’s as World Class travellers with worldly passions.</p>\n                                        <p className=\"mb-4 ml-6 opacity-50\">\n                                        Produced travel guides featuring Cabin Crew, casted for their expertise and passion for destinations flown to by Singapore Airlines. Showcasing a depth of understanding they have for the destinations and novel experiences through \n                                        their insights\n                                        </p>\n                                    </motion.div>\n                                    <motion.div variants={animateInChild}>\n                                        <h1 className=\"mt-6 mb-4 opacity-90 font-base\">Cocktail Conversations</h1>\n                                        <p className=\"mb-4 ml-6 opacity-50\">\n                                        Lead Creative and Motion Designer for Cocktail Conversations, an episodic sustenance campaign and content series for the flagship SilverKris Lounge at Singapore Changi Airport Terminal 3. </p>\n                                        <p className=\"mb-4 ml-6 opacity-50\">\n                                        Centred around the idea of the lounges being home to personalities from all walks of life around the world. We invited a couple of these personalities to have a conversation with us at the Crystal Bar in the First Class SilverKris Lounge, finishing off with a bespoke cocktail concocted just for them based off their answers and available for passengers to order at the bar.\n                                        </p>\n                                    </motion.div>\n                                    <motion.div variants={animateInChild}>\n                                        <h1 className=\"mt-6 mb-4 opacity-90 font-base\">Kris+ Brand Campaign</h1>\n                                        <p className=\"mb-4 ml-6 opacity-50\">\n                                        Lead Creative for a tactical brand campaign for Kris+, the lifestyle rewards app by Singapore Airlines. Centred around the idea of a holiday getaway being just one tap away on the app through shopping and dining, the campaign was brought to life in the likes of a Rube Goldberg device, symbolising the domino effect through the journey of using the app.</p>\n                                        <p className=\"mb-4 ml-6 opacity-50\">\n                                        The campaign launched with a 30s brand film and OOH placements around Singapore.\n                                        </p>\n                                    </motion.div>\n                                    <motion.div variants={animateInChild}>\n                                        <h1 className=\"mt-6 mb-4 opacity-90 font-base\">Travel Like Never Before</h1>\n                                        <p className=\"mb-4 ml-6 opacity-50\">\n                                        Conceptualised and art directed a brand campaign for the recovery efforts of Singapore Airlines as travel restrictions lifted across the world in 2022. With the strategy of travelling bigger and better than ever before, the campaign was centred around travelling for the big milestone and sentimental moments now that travel is back on the table.</p>\n                                        <p className=\"mb-4 ml-6 opacity-50\">\n                                        The brand film has been viewed over 36 million times. \n                                        </p>\n                                    </motion.div>\n                                    <motion.div variants={animateInChild}>\n                                        <h1 className=\"mt-6 mb-4 opacity-90 font-base\">SilverKris Lounge</h1>\n                                        <p className=\"mb-4 ml-6 opacity-50\">\n                                        Lead Creative, Editor and Motion Designer for the launch campaign of the brand new flagship SilverKris Lounges at Changi Airport. Produced a 90s brand film that covered the amenities across the 4 lounges.\n                                        </p>\n                                        <p className=\"mb-4 ml-6 opacity-50\">\n                                        Oversaw the creation of a glass installation of the Batik Motif as the entrance facade to the lounges and the animation of the Batik Motif for an 8 metre curved digital wall at the entrance foyer.\n                                        </p>\n                                        <p className=\"mb-4 ml-6 opacity-50\">\n                                        Art directed a photo asset library shoot and film shoot and offline / online edited the film till delivery.\n                                        </p>                          \n                                    </motion.div>\n                                    {/* <motion.div variants={animateInChild}>\n                                        <h1 className=\"mt-6 mb-4 opacity-90 font-base\">Cargo THRUCOOL</h1>\n                                        <p className=\"mb-4 ml-6 opacity-50\">\n                                        Conceptualized and art directed a film for Singapore Airlines Cargo’s THRUCOOL product, that boasts a seamless cold chain cargo service for temperature critical products that can shipped across the world with Singapore Airline’s global destinations network.\n                                        </p>\n                                    </motion.div> */}\n\n                                    <motion.h1 className=\"mt-8 2xl:mt-14 text-xl\" variants={animateInChild}>IKEA</motion.h1>\n\n                                    <motion.div variants={animateInChild}>\n                                        <h1 className=\"mt-6 mb-4 opacity-90 font-base\">Oops Happens <i className=\"text-neutral-500\">(HEMSÄKER)</i></h1>\n                                        <p className=\"mb-4 ml-6 opacity-50\">\n                                        Art directed and conceptualised a campaign for IKEA Singapore & Malaysia’s insurance product, HEMSAKER. A set of 9 videos that went live across IKEA’s social platforms, web pages and various other platforms.\n                                        </p>\n                                    </motion.div>\n\n                                    <motion.h1 className=\"mt-8 2xl:mt-14 text-xl\" variants={animateInChild}>Standard Chartered Bank</motion.h1>\n\n                                    <motion.div variants={animateInChild}>\n                                        <h1 className=\"mt-6 mb-4 opacity-90 font-base\">Marina Bay Financial Centre</h1>\n                                        <p className=\"mb-4 ml-6 opacity-50\">\n                                        Art directed and did the offline / online edit of a video and photo set of the new Standard Chartered signage at Marina Bay Financial Centre as part of their latest brand identity refresh and brand evolution. The video and photos were circulated globally as part of internal communications in Standard Chartered Bank.\n                                        </p>\n                                    </motion.div>\n\n                            </div>\n\n                            {/* BBH */}\n                            <div className=\"col-span-full pl-5 md:pl-0 md:col-span-2 sm:pr-4 mt-28\">\n                                <motion.div variants={animateInChild}>\n                                <p className=\"flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 \n                                        rounded-full tracking-tight font-medium w-40 text-base mb-2\">Motion Art Director</p>\n                                BBH Singapore<br/>\n                                <i className=\"-ml-0.5\">June 2019 – March 2021</i>\n                                </motion.div>\n\n                                <motion.h1 className=\"mt-8 2xl:mt-14 text-xl\" variants={animateInChild}>NIKE</motion.h1>\n\n                                    <motion.div variants={animateInChild}>\n                                    <h1 className=\"mt-6 mb-4\">Athlete Stories: Koy & Toon</h1>\n                                    <p className=\"ml-6 mb-4\">\n                                    Offline and online edit and animation for a set of videos and a full film highlighting the stories of Bangkok based NIKE athletes Koy & toon, distributed on Nike’s Instagram feed, stories and TV.\n                                    </p>\n                                    </motion.div>\n\n                                    <motion.div variants={animateInChild}>\n                                    <h1 className=\"mt-6 mb-4\">Womens Instazine</h1>\n                                    <p className=\"ml-6 mb-4\">\n                                    Edited and animated supporting assets for the campaign as well as the case study film for Women’s Instazine\n                                    </p>\n                                    </motion.div>\n\n                                <motion.h1 className=\"mt-8 2xl:mt-14 text-xl\" variants={animateInChild}>Samsung</motion.h1>\n\n                                    <motion.div variants={animateInChild}>\n                                    <h1 className=\"mt-6 mb-4\">Global Lifestyle TV Pitch</h1>\n                                    <p className=\"ml-6 mb-4\">\n                                    Provided motion design direction, content series visualisations and a manifesto film for the global pitch for the Lifestyle TV campaign.\n                                    </p>\n                                    <p className=\"ml-6\">\n                                    Winning both the Lifestyle TV campaign and global visual displays digital / social strategy, platform management and content creation retainer business for BBH Singapore.\n                                    </p>\n                                    </motion.div>\n\n                                    <motion.div variants={animateInChild}>\n                                    <h1 className=\"mt-6 mb-4\">CES 2020</h1>\n                                    <p className=\"ml-6 mb-4\">\n                                    Art directed & executed on site social coverage of Samsung’s Visual display’s new releases and technology at CES 2020 in Las Vegas. \n                                    </p>\n                                    <p className=\"ml-6\">\n                                    Content produced involved short form video series distributed on Facebook and Instagram feed, day to day event coverage on Instagram stories and long form event recap videos for Youtube.  \n                                    </p>\n                                    </motion.div>\n\n                                    <motion.div variants={animateInChild}>\n                                    <h1 className=\"mt-6 mb-4\">Motion Design</h1>\n                                        <div className=\"ml-6\">\n                                            <h1 className=\"\">The Frame</h1>\n                                            {/* <p className=\"mb-4\">A video promoting the latest 2021 model of The Frame</p> */}\n\n                                            <h1 className=\"\">Why Would You Do That?</h1>\n                                            {/* <p className=\"mb-4\">A video promoting the features of pairing a Samsung Soundbar with a Samsung TV, executed in a tongue-in-cheek manner. </p> */}\n\n                                            <h1 className=\"\">The Terrace Feature Highlights</h1>\n                                            {/* <p className=\"mb-4\">Produced a set of 4 videos each highlighting a feature of the latest Samsung lifestyle TV, The Terrace.</p> */}\n\n                                            <h1 className=\"\">Smart Features Highlights</h1>\n                                            {/* <p className=\"mb-4\">Produced a set of 4 videos highlighting a Smart Feature that comes equipped with Samsung Smart TVs</p> */}\n                                            <h1>QLED 8K + Galaxy S20</h1>\n                                            <h1>TV Burn-in Checker</h1>\n                                        </div>\n                                    </motion.div>\n\n                                    <motion.div variants={animateInChild}>\n                                    <h1 className=\"mt-8 text-xl\">Jollibee</h1>\n                                    <h1 className=\"mt-6 mb-4\">JolliEverAfter</h1>\n                                    <p className=\"ml-6\">\n                                    Pre Production, Art Direction, Offline and online edit and animation of the teaser film & challenges for JolliEverAfter, a campaign for Jollibee that brought their annual long form film to TikTok in the form of 9 challenges.\n                                    </p>\n                                    </motion.div>\n                                    <motion.div variants={animateInChild}>\n                                    <h1 className=\"mt-8 text-xl\">Sentosa</h1>\n                                    <h1 className=\"mt-6 mb-4\">Virtual Sentosa</h1>\n                                    <p className=\"ml-6 mb-4\">\n                                    Compiled footage of Virtual Sentosa and edited + animated a set of launch and PR videos for the campaign. The videos were then distributed on Sentosa’s social media platforms as well as news outlets and channels both locally and globally.\n                                    </p>\n                                    <p className=\"ml-6 mb-4\">\n                                    The campaign was covered by news outlets worldwide including Campaign Asia, Hypebeast, Conde Nast, NHK Japan.\n                                    </p>\n                                    <p className=\"ml-6 mb-4\">\n                                    Various rounds of Case Studies were also edited and animated.\n                                    </p>\n                                    <h1 className=\"mt-6 mb-4\">Social Media Content Creation</h1>\n                                    <p className=\"ml-6 mb-4\">\n                                    #BehindSentosa\n                                    </p>\n                                    <p className=\"ml-6 mb-4\">\n                                    Filmed and directed a video covering the efforts undertaken by the staff of Sentosa in response to the COVID-19 outbreak. The video went live on Sentosa’s Facebook and Instagram channels.\n                                    </p>\n                                    <p className=\"ml-6 mb-4\">\n                                    Halloween Horror Nights 2019\n                                    </p>\n                                    <p className=\"ml-6 mb-4\">\n                                    Art directed, filmed and produced a video distributed on Youtube and Facebook covering the behind the scenes and the attractions of Halloween Horror Nights 2019\n                                    </p>\n                                    <p className=\"ml-6 mb-4\">\n                                    Sentosa Grillfest 2019\n                                    </p>\n                                    <p className=\"ml-6 mb-4\">\n                                    Art directed and produced event coverage, interviews and quiz videos for the annual Grillfest on Sentosa.\n                                    </p>\n                                    <p className=\"ml-6 mb-4\">\n                                    Sandsation: Star Wars 2019\n                                    </p>\n                                    <p className=\"ml-6 mb-4\">\n                                    Art directed and produced teaser films and event coverage of the behind the scenes and happenings of the Star Wars edition of Sentosa Sandsation.\n                                    </p>\n                                    </motion.div>\n                            </div>\n\n                            {/* Kinetic */}\n                            <div className=\"col-span-full pl-5 md:pl-0 md:col-span-2 sm:pr-4 mt-28\">\n                            <motion.div variants={animateInChild}>\n                            <p className=\"flex items-center justify-center -ml-2 border-1 border-black dark:border-white/50 \n                                        rounded-full tracking-tight font-medium w-[140px] text-base mb-2\">Motion Designer</p>\n                            <h3>Kinetic Singapore</h3>\n                            <i className=\"-ml-0.5 mb-2\">January 2019 – April 2019</i>\n                            </motion.div>\n\n                                <motion.h1 className=\"mt-8 2xl:mt-14 text-xl\" variants={animateInChild}>Uniqlo</motion.h1>\n\n                                    <motion.div variants={animateInChild}>\n                                    <h1 className=\"mt-6 mb-4\">New Style Fresh Start</h1>\n                                    <p className=\"ml-6 mb-4\">\n                                    Produced a set of videos distributed on displays in stores around South East Asia as part of the 2019 Chinese New Year season.\n                                    </p>\n                                    </motion.div>\n\n                                    <motion.div variants={animateInChild}>\n                                    <h1 className=\"mt-6 mb-4\">Your Stage Now Live</h1>\n                                    <p className=\"ml-6 mb-4\">\n                                    Art Directed and produced a set of videos for the panoramic displays during the launch of the Uniqlo flagship store as part of the Your Stage Now Live launch campaign\n                                    </p>\n                                    </motion.div>\n                            </div>\n                        </motion.div>\n                    </>\n                    );\n                }\n                ```\n\n    - **24 November** (Fonts)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "263.",
      "chapterTitle": "Major font dilemmas",
      "subsections": [
        {
          "title": "",
          "content": "Here I find myself stuck in a massive dilemma for the past 2-3 hours. I’ll just let images do the talking. \n\n        ![Geist + Noto Serif](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2055.png)\n\n        Geist + Noto Serif\n\n        ![Geist + Uppercase Geist](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2056.png)\n\n        Geist + Uppercase Geist",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "264.",
      "chapterTitle": "Font Pairings",
      "subsections": [
        {
          "title": "",
          "content": "I’m finding myself really conflicted with font pairings as of right now. On one hand a full Geist-sans webpage would just be a little too sterile and as piecemeal as can be. On the other, I find myself going a little too far with the usage of—fonts that I’ve used so far: Geist-sans, Geist-mono, Breathing *(script)*, Noto Serif—a grotesque combination of fonts. \n\n        My gut screams at me after years as a designer and art director to never use more than 2 fonts for a piece of design and here I am contemplating juggling 3, or even 4. \n\n        Is it possibly too much? I think it is. *But what is the limit?* \n\n        ![Geist + Script + Noto Serif *(three fonts, my gut can’t take this)*](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2057.png)\n\n        Geist + Script + Noto Serif *(three fonts, my gut can’t take this)*",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "265.",
      "chapterTitle": "Geist + Uppercase Geist + Script.",
      "subsections": [
        {
          "title": "",
          "content": "Could this be a viable combination? It is three ‘types’ of type treatments but technically with only two fonts. I might give this a try.\n\n        ![Geist + Uppercase + Script](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2058.png)\n\n        Geist + Uppercase + Script\n\n        Neater, with only two typefaces for the site. Possibly sterile? This would be the ‘correct, restrained’ approach to visual design. \n\n        ![Geist + Noto Serif + Script](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2059.png)\n\n        Geist + Noto Serif + Script\n\n        Noto Serif here feels softer and works well with the script treatment. However we end up with three typefaces in a single design which is… questionable.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "266.",
      "chapterTitle": "Torn.",
      "subsections": [
        {
          "title": "",
          "content": "I will need to make a decision on this before proceeding with the rest of the site, I am not keen on redoing all of the Tailwind type utility definitions if I would like to change up the typeface for the site further down the road.\n\n        ![Geist + Uppercase](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2060.png)\n\n        Geist + Uppercase\n\n        ![Geist + Script *(do I hate this???????) I really almost don’t. Which is worrying.*](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2061.png)\n\n        Geist + Script *(do I hate this???????) I really almost don’t. Which is worrying.*\n\n        ![Geist Uppercase subheaders](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2062.png)\n\n        Geist Uppercase subheaders\n\n        ![Script subheaders](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2063.png)\n\n        Script subheaders\n\n        ![Do I hate this???](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2064.png)\n\n        Do I hate this???\n\n        ![Screenshot 2024-11-24 at 2.41.25 PM.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/Screenshot_2024-11-24_at_2.41.25_PM.png)\n\n    - **25 November*** (Redesigned Top Navigation Bar)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "267.",
      "chapterTitle": "Redesigned Top Navigation Bar",
      "subsections": [
        {
          "title": "",
          "content": "![Light mode – Drop Shadow treatment](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2065.png)\n\n        Light mode – Drop Shadow treatment\n\n        ![Dark mode – Frosted Glass treatment](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2066.png)\n\n        Dark mode – Frosted Glass treatment\n\n        Had a bit of a realisation that the top navigation bar didn’t necessarily need to be a literal bar fixed to the top of the screen, and that it was possible to ‘detach’ it.\n\n        The implementation was simple enough as well, it was a matter of adding a `top-2` to the bar, that is still `position:fixed`. With `rounded-full` it became more or less a detached ‘dynamic island’ of it’s own. I can promise you that I wasn’t directly inspired by the ‘dynamic island’ though, but it eventually felt like the most intuitive implementation of a ‘detached’ top navigation bar in the end.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "268.",
      "chapterTitle": "Dropdown Menu",
      "subsections": [
        {
          "title": "",
          "content": "[1.mov](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1%206.mov)\n\n        With the redesigned TopNav, an appropriate dropdown menu for it naturally followed–it was no longer about having the entire navigation bar expand downwards to fill half of the vertical space of the screen. \n\n        It had to follow the detached nature of the new TopNav. This called for a more delicate approach to the animation of the expansion and contraction of the bar, something that couldn’t be done with Tailwind CSS and `transition-all`.\n\n        As such I had to dabble into actually animating the dropdown animation with *Motion* (Framer Motion literally rebranded themselves to Motion midway through this project, as such I’ll be referring to the library as *Motion* from here on.)\n\n        Using Motion provided a massive amount of control and nuance to the animation, and also integrates perfectly with the conditionals from React’s useState hooks.\n\n        ```jsx\n        {/* Mobile Navbar BG */}\n        <motion.div\n          className={`md:hidden fixed dark:backdrop-blur-lg md:backdrop-blur-lg top-2 w-full max-w-[69%] shadow lg:shadow-[0px_0px_15px_-8px_rgba(0,0,0,0.4)] z-20\n            border-white/80 dark:border-white/15 transition-colors bg-background dark:bg-black/20 blur-[0.2px]\n            ${showNav ? \" border-b-1 bg-background backdrop-blur-lg md:bg-white/0 dark:bg-black/45 shadow-standard\" : \"\"}`}\n          style={{\n            left: \"50%\",\n            transform: \"translateX(-50%)\",\n          }}\n            animate={{ \n              width: showNav ? \"20rem\" : \"11.4rem\",\n              height: showNav ? \"30rem\" : \"2.5rem\",\n              borderRadius: showNav ? \"0.7rem\" : \"50rem\"}}\n            transition={{\n              width: { type: \"spring\", stiffness: 500 , damping: showNav ? 28 : 26 },\n              height: { type: \"spring\", stiffness: 500 , damping: showNav ? 26 : 36 }, // Faster or bouncier for height\n              borderRadius: { duration: showNav ? 0.01 : 10 } \n            }}\n        ></motion.div>\n        ```\n\n        In the above code we can see the `width`, `height`, and `borderRadius` being defined in *Motion* directly instead of with CSS. The parameters are then defined by the conditional useState hook `showNav`. `Animate` defines the start and end parameters while `transition` allows for fine control on the easing and animation behaviour, down to the individual properties itself–which is an impressive amount of control. Awesome. All this culminated in the animation of the dropdown menu as seen above.\n\n    - **26 November** (Redesigned Home Page)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "269.",
      "chapterTitle": "3 Columned Grid",
      "subsections": [
        {
          "title": "",
          "content": "![3 Columned ALL WORK page.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2067.png)\n\n        3 Columned ALL WORK page.\n\n        ![Full-span individual category page. ](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2068.png)\n\n        Full-span individual category page. \n\n        Had a thought to conditionally break the All Works page into smaller tiles as a 3-columned grid, as compared to the earlier iteration of having it be full-span tiles. While the look of the full-span tiles is admittedly satisfying (and fairly indulgent), it simply made no practical sense on the All Works page which would ultimately hold up to 20 pieces of work or even more in the future. That’s a massive amount to scroll through–no sane person would do that.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "270.",
      "chapterTitle": "Two bits of code that makes this all tick.",
      "subsections": [
        {
          "title": "",
          "content": "```jsx\n        {/* Grid / Page */}\n                    <motion.div \n                    className={`grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-span-full md:gap-1.5 mt-4 md:mt-4\n                    ${selectedTags.includes('creative') || selectedTags.includes('edit') || selectedTags.includes('motion') ? 'grid-cols-1 gap-2' : 'grid-cols-3 gap-1'}`}>\n        ```\n\n        ```jsx\n        {/* Square */}\n                  <div className={`lg:pt-[100%] group relative overflow-hidden\n                    ${selectedTags.includes('all') ? 'pt-[161%]' : 'pt-[140%]'}`}>\n        ```\n\n        Because the project squares are created ‘procedurally’ with an array, it was a matter of introducing the conditionals into the two above snippets of code that enabled this switch in layout. \n\n        The logic goes as: IF any of the skillset categories are selected, `grid-cols-1`. ELSE, `grid-cols-3`. Which lands us with the 3 columned layout on the All Works page (which is the unselected empty array default).\n\n        This is nifty as it allows for more work to be seen at a glance on the All Works page as well as offering a closer look upon selection of a skillset category which narrows the number of work presented at a go.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "271.",
      "chapterTitle": "Bit of an indulgent design direction.",
      "subsections": [
        {
          "title": "",
          "content": "![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2069.png)\n\n        This was an alternative treatment I toyed for a bit–having the work themselves be blurred, lending for a more attention on the name of the work itself and its purpose. The work would un-blur on hover and the type will fade out, offering a clear look into the video playing.\n\n        Bit of an indulgent visual experiment here, but ultimately deemed it too funky and just not the most intuitive for the home page of the site.\n\n    - **27 November*** (Redesigned Profile Page)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "272.",
      "chapterTitle": "Redesigned Profile Page",
      "subsections": [
        {
          "title": "",
          "content": "![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2070.png)\n\n        ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2071.png)\n\n        Here’s where the profile page is at now. But the biggest thing about this redesign is…",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "273.",
      "chapterTitle": "Dropdown menus",
      "subsections": [
        {
          "title": "",
          "content": "I took this on as a challenge to ultimately grind at React useState hooks, and decided that the profile page was perfect opportunity to practice dropdown menus–it is simply the densest page on the entire site in regards to text. \n\n        [Dropdown menus in action.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/2%202.mp4)\n\n        Dropdown menus in action.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "274.",
      "chapterTitle": "How the useState hooks are implemented",
      "subsections": [
        {
          "title": "",
          "content": "![Toggle button code.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2072.png)\n\n        Toggle button code.\n\n        What we have above is the code for the button to toggle the dropdown menu. We have the hook of `showAsm` conditionally toggling the CSS of the button. IF `showAsm` is true, button background turns black, text white, and it scales a little smaller at 96%. ELSE remove the aforementioned CSS.\n\n        We also have the hook conditionally changing the chevron arrows that would indicate expansion or contraction. \n\n        ![Code for the container that drops down upon toggling.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2073.png)\n\n        Code for the container that drops down upon toggling.\n\n        And here is the second part of the magic, with `{showAsm &&()}`, we’re basically able to toggle entire `div`s based on the boolean state of React useState hooks. IF true, to show the `div`. ELSE, do not render the `div`.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "275.",
      "chapterTitle": "The Antithesis to DRY (Don’t Repeat Yourself).",
      "subsections": [
        {
          "title": "",
          "content": "![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2074.png)\n\n        This is how the hooks are set up–it is a **hardcoded nightmare.** I am simply not anywhere close to the capability to write a more abstracted and procedural function that would consolidate all of the state booleans.\n\n        I could get ChatGPT to spit me out a function that consolidates all states into an array, but I’m not about to dive into that without full comprehension of the code, which I don’t quite have the time now. \n\n        So I will have to repeat myself in my code here… multiple times. Eugh.\n\n- 6. Content Creation Page\n    - 05 December\n\n\n- **…on Typescript***\n\n    You will notice through my documentation that I started out using TypeScript as is default for next.js and it was something that I was keen to learn from the start. But you will also realise that I eventually dropped it in favour of vanilla Javascript, which also results in me having a grotesque mish-mash of .js and .tsx files within my directory now.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "276.",
      "chapterTitle": "It’s just too arcane for little tangible benefit.",
      "subsections": [
        {
          "title": "",
          "content": "That’s pretty much it. I realised that while I completely understand the use cases of TypeScript and it’s importance, the layer of complexity that it adds at this point was just too much for me to handle. I found myself sifting through code and actively deciphering which parts of the code were 1. Tailwind 2. React 3. Javascript 4. TypeScript. And oftentimes it’s the TypeScript code that would look so damned arcane.\n\n    Upon realising this I opted to drop the usage of TypeScript for now to focus on getting acquainted with React and Javascript code first before stepping up to TypeScript in the future.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "277.",
      "chapterTitle": "Example TypeScript code that scrambles my lizard brain.",
      "subsections": [
        {
          "title": "",
          "content": "```jsx\n    export default function RootLayout({ children }: { children: React.ReactNode }) {\n    ```\n\n    ```tsx\n    const [timeNyc, setTimeNyc] = useState<string | null>(null);\n        useEffect(() => {\n    ```\n\n    ```tsx\n    interface DarkModeToggleProps {\n      toggleDarkMode: () => void;\n      isDarkMode: boolean; // Add isDarkMode prop\n    }\n\n    const DarkModeToggle: FC<DarkModeToggleProps> = ({ toggleDarkMode, isDarkMode }) => {\n    ```\n\n    On second read and with a better understanding of React syntax, these snippets of code aren’t as arcane as I remembered them to be. Regardless, I think I can do without the Type definitions right now, would rather focus entirely on familiarising myself with pure React and Javascript syntax first. \n\n- misc.\n    - **Designs**\n        - **Home Page**\n            - **Drafts**\n\n    - End of Day Status\n        - 19 November\n\n            ![Home Page](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/19_November.png)\n\n            Home Page\n\n        - 21 November\n\n            ![Home Page](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2075.png)\n\n            Home Page\n\n            ![Favourites Page](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2076.png)\n\n            Favourites Page\n\n            ![Profile Page](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2077.png)\n\n            Profile Page\n\n        - 22 November\n            - Desktop\n\n                ![Home Page](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2078.png)\n\n                Home Page\n\n                ![Favourites Page](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2079.png)\n\n                Favourites Page\n\n            - Mobile\n\n\n                ![Home Page](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2080.png)\n\n                Home Page\n\n                ![Favourites Page](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2081.png)\n\n                Favourites Page\n\n        - 23 November\n            - Desktop\n\n                ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2082.png)\n\n                ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2083.png)\n\n            - Mobile\n\n\n                ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2084.png)\n\n                ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2085.png)\n\n                ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2086.png)\n\n                ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2087.png)\n\n        - 28 November\n            - Desktop (Little to no change on desktop. All work done on developing the mobile site)\n\n                ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2088.png)\n\n            - Mobile\n\n\n                ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2089.png)\n\n                ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2090.png)\n\n                ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2091.png)\n\n                ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2092.png)\n\n    - **~~Keyboard Navigation~~** (Put on hold)\n        - **17 November** (Search Menu)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "278.",
      "chapterTitle": "Search Menu",
      "subsections": [
        {
          "title": "",
          "content": "Here is the start of something new, massive, and honestly unsure if it’s even possible to implement at my level.\n\n            But I would like to introduce an alternate way to navigation around the website beyond the rudimentary cursor; a search menu that you can call upon at any point, input a search and be directed to the exact result.\n\n            - I asked ChatGPT\n\n                Absolutely! Here’s how you can implement the search feature using **React**, **Next.js**, and **Tailwind CSS**.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "279.",
      "chapterTitle": "Step-by-Step Implementation",
      "subsections": [
        {
          "title": "",
          "content": "1. **Create the Search Menu Component**\n\n                ```jsx\n                jsx\n                Copy code\n                // components/SearchMenu.js\n                import { useState, useEffect } from 'react';\n\n                const SearchMenu = () => {\n                  const [isActive, setIsActive] = useState(false);\n                  const [query, setQuery] = useState('');\n                  const [results, setResults] = useState([]);\n\n                  // Event listener to toggle the menu when \"ESC\" is pressed\n                  useEffect(() => {\n                    const handleKeyDown = (event) => {\n                      if (event.key === 'Escape') {\n                        setIsActive(!isActive);\n                        if (!isActive) {\n                          document.getElementById('searchInput').focus();\n                        }\n                      }\n                    };\n                    window.addEventListener('keydown', handleKeyDown);\n\n                    return () => {\n                      window.removeEventListener('keydown', handleKeyDown);\n                    };\n                  }, [isActive]);\n\n                  // Function to search and filter items\n                  const handleSearch = (event) => {\n                    const queryText = event.target.value.toLowerCase();\n                    setQuery(queryText);\n                    if (queryText.trim() === '') {\n                      setResults([]);\n                      return;\n                    }\n\n                    // Example of searchable elements: headings and paragraphs\n                    const items = Array.from(document.querySelectorAll('h1, h2, h3, p, a'));\n                    const filteredItems = items.filter((item) =>\n                      item.textContent.toLowerCase().includes(queryText)\n                    );\n                    setResults(filteredItems);\n                  };\n\n                  return (\n                    <div\n                      className={`fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50 ${\n                        isActive ? 'block' : 'hidden'\n                      }`}\n                    >\n                      <div className=\"w-full max-w-md p-4\">\n                        <input\n                          id=\"searchInput\"\n                          type=\"text\"\n                          className=\"w-full p-2 border rounded-md focus:outline-none\"\n                          placeholder=\"Type to search...\"\n                          value={query}\n                          onChange={handleSearch}\n                        />\n                        <ul className=\"mt-4 space-y-2\">\n                          {results.map((item, index) => (\n                            <li\n                              key={index}\n                              className=\"p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200\"\n                              onClick={() => {\n                                item.scrollIntoView({ behavior: 'smooth' });\n                                setResults([]);\n                                setIsActive(false);\n                              }}\n                            >\n                              {item.textContent}\n                            </li>\n                          ))}\n                        </ul>\n                      </div>\n                    </div>\n                  );\n                };\n\n                export default SearchMenu;\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "280.",
      "chapterTitle": "2. **Using the Search Menu in Your Pages**",
      "subsections": [
        {
          "title": "",
          "content": "```jsx\n                jsx\n                Copy code\n                // pages/_app.js\n                import '../styles/globals.css';\n                import SearchMenu from '../components/SearchMenu';\n\n                function MyApp({ Component, pageProps }) {\n                  return (\n                    <>\n                      <SearchMenu />\n                      <Component {...pageProps} />\n                    </>\n                  );\n                }\n\n                export default MyApp;\n\n                ```",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "281.",
      "chapterTitle": "3. **Styling with Tailwind CSS**",
      "subsections": [
        {
          "title": "",
          "content": "Ensure you have Tailwind CSS configured in your project. The component uses Tailwind classes for styling:\n\n                - `fixed inset-0 bg-white bg-opacity-90`: Makes the search menu a full-screen overlay.\n                - `flex items-center justify-center`: Centers the search menu on the screen.\n                - `w-full max-w-md p-4`: Sets the maximum width and padding of the search container.\n                - `p-2 border rounded-md`: Styles the search input.\n                - `mt-4 space-y-2`: Adds margin and spacing between the search results.\n                - `bg-gray-100 rounded cursor-pointer hover:bg-gray-200`: Styles each search result item.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "282.",
      "chapterTitle": "4. **Explanation of the Code**",
      "subsections": [
        {
          "title": "",
          "content": "- **State Management**: `useState` is used to manage the state of the search menu (`isActive`), the query (`query`), and the search results (`results`).\n                - **Event Handling**: `useEffect` adds and removes the `keydown` event listener to toggle the search menu when the `ESC` key is pressed.\n                - **Search Logic**: The `handleSearch` function filters elements on the page (like headings and paragraphs) based on the user's input and updates the results.\n                - **Smooth Scrolling**: Clicking a search result scrolls to the matching element and closes the search menu.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "283.",
      "chapterTitle": "5. **Additional Considerations**",
      "subsections": [
        {
          "title": "",
          "content": "- **Accessibility**: Ensure that the search menu is accessible by testing it with keyboard navigation and screen readers.\n                - **Optimization**: If your site has a large amount of content, consider using a more efficient search algorithm or integrating a search library like [Fuse.js](https://fusejs.io/).\n\n                This setup should work seamlessly in a Next.js project with Tailwind CSS. Let me know if you have any questions or need further assistance!",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "284.",
      "chapterTitle": "Proof of concept",
      "subsections": [
        {
          "title": "",
          "content": "[SearchMenu component functioning on my sandbox page.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1%207.mov)\n\n            SearchMenu component functioning on my sandbox page.\n\n            Placeholder\n\n            [Initial round of styling with Tailwind.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1_1%202.mp4)\n\n            Initial round of styling with Tailwind.\n\n            - Full Code as of right now\n\n                ```jsx\n                import {useState, useEffect} from 'react';\n\n                const SearchMenu = () => {\n                    const [isActive, setIsActive] = useState(false);\n                    const [query, setQuery] = useState('');\n                    const [results, setResults] = useState([]);\n\n                    useEffect(() => {\n                        const handleKeyDown = (event) => {\n                            if (event.key === 'Escape') {\n                                setIsActive(!isActive);\n                                if (!isActive) {\n                                    document.getElementById('searchInput').focus();\n                                }\n                            }\n                        };\n                        window.addEventListener('keydown', handleKeyDown);\n\n                        return () => {\n                            window.removeEventListener('keydown', handleKeyDown);\n                        };\n                    }, [isActive]);\n\n                    // Function to search and filter items\n                    const handleSearch = (event) => {\n                        const queryText = event.target.value.toLowerCase();\n                        setQuery(queryText);\n                        if (queryText.trim() === '') {\n                            setResults([]);\n                            return;\n                        }\n\n                        // Example of searchable elements: headings and paragraphs\n                        const items = Array.from(document.querySelectorAll('h1, h2, h3, p, a'));\n                        const filteredItems = items.filter((item) =>\n                            item.textContent.toLowerCase().includes(queryText)\n                        );\n                        setResults(filteredItems);\n                    };\n\n                    return (\n\n                        // Search Menu Screen\n                        <div\n                        className={`fixed inset-0 backdrop-blur-xl back flex items-center justify-center z-50 ${\n                            isActive ? 'opacity-100' : 'hidden'\n                        }`}\n                        >\n                            {/* Search Menu Bar */}\n                            <div className=\"p-10 font-semibold tracking-tight\">\n                                <input\n                                id=\"searchInput\"\n                                type=\"text\"\n                                className=\"w-full max-w-sm p-3 px-5 rounded-full focus:outline-none\"\n                                placeholder=\"Type to search...\"\n                                value={query}\n                                onChange={handleSearch}\n                            />\n\n                            <ul className=\"mt-4 space-y-2\">\n                                {results.map((item,index) => (\n                                    <li\n                                        key={index}\n                                        className=\"cursor-pointer  text-white rounded-full \n                                        pl-4 hover:scale-95 transition-all duration-200\"\n                                        onClick={() => {\n                                            item.scrollIntoView({ behavior: 'smooth' });\n                                            setResults([]);\n                                            setIsActive(false);\n                                        }}\n                                    >\n                                        {item.textContent}\n                                    </li>\n                                ))}\n                            </ul>\n                        </div>\n                     </div>\n                    );\n                };\n\n                export default SearchMenu;\n                ```\n\n    - **Prompt-based**\n\n        This is still far down the road, but it’s definitely something that will have to worked on.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "285.",
      "chapterTitle": "Deployment (Back-end)",
      "subsections": [
        {
          "title": "",
          "content": "- **01. Getting Started***",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "286.",
      "chapterTitle": "The time has come",
      "subsections": [
        {
          "title": "",
          "content": "for the site to go from [localhost:3000](http://localhost:3000) to ithinkitschris.com.\n\n    Here’s the thing and a gentle reminder; I genuinely had and still basically have no prior knowledge to building a website from ground-up. That obviously includes both the front-end and back-end.\n\n    And so, with the above chapter in this documentation, I have spent a grand total of a month and a half grinding away at the front-end of things. While in the process, also coming around to a massive amount of insight and perspective into the world of Product Design and web development, and just how infinitely high the ceiling of web development is able to scale.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "287.",
      "chapterTitle": "The back-end.",
      "subsections": [
        {
          "title": "",
          "content": "But of course, the past 6 weeks of work would’ve been all for absolute naught if I could not get it deployed and live for everyone to access. And so, we find ourselves at the doorstep of back-end development.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "288.",
      "chapterTitle": "I asked for help.",
      "subsections": [
        {
          "title": "",
          "content": "This time not from ChatGPT, but my actual faculty *(Thank you Carrie).*\n\n    I was presented with a few options to consider and conduct further research into, things were considerably simpler as my website is entirely hardcoded—mainly because I’m evidently not big-brained enough to develop a CMS (*aiming for the moon is great, let’s not consider Jupiter*).\n\n    As such, here were the options:\n\n    1. **Vercel** (the most obvious as it is literally already integrated with my usage of Next.js in my stack)\n    2. **Amazon S3 Container + Cloudfront**\n    3. **Firebase** (*Thanks for the suggestion, Will*)\n\n    Some more funky suggestions that are… funky.\n\n    1. **Vercel for deployment + S3 / Cloudfront for static media caching.** (*Thanks Ray*)\n    2. I**mgur for media hosting.** (*Truly funky, Brian*)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "289.",
      "chapterTitle": "Vercel.",
      "subsections": [
        {
          "title": "",
          "content": "is what I turned to. And upon a bit more of a study into their pricing plans, found out that they do offer a free tier that works perfectly for the scope of my project.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "290.",
      "chapterTitle": "Technical Debt.",
      "subsections": [
        {
          "title": "",
          "content": "![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2093.png)\n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2094.png)\n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2095.png)",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "It only took four hours of clearing it.",
          "content": "Because of the tight integration between Next.js and Vercel, Vercel has the capability to build a preview environment every single time my dev code is pushed to Github. \n\n    But I’ve learnt through this; that even though my code may be *borderline tolerable* for the dev compiler and environment, the preview (*and subsequently, production*) compiler is way stricter. It kicked up errors for issues all over the project—especially **TypeScript ones,** others included apostrophes and next.js / React component file structure.",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "291.",
      "chapterTitle": "Live.",
      "subsections": [
        {
          "title": "",
          "content": "![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2096.png)\n\n    Here it is, a screenshot of my code in a production environment for the first time. Surreal. But evidently, this is not how the website is supposed to look—absolutely not for a production environment.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "292.",
      "chapterTitle": "A tale of Case-Sensitivity",
      "subsections": [
        {
          "title": "",
          "content": "Some media simply was not loading—it wasn’t even a case of file size or connectivity. They just straight up refused to load. I couldn’t for the life of me figure out why; this was way more abstract of a problem to solve than the hard logic of syntax and code.\n\n    I turned to ChatGPT for some ideas; and it expectedly returned me a list of possible reasons why and how I may troubleshoot this, a far cry from the hard solutions it used to give me when I faced issues with front-end code. I sifted through the list of around 10 possible solutions, my heart sinking as I read further down the list in an almost *for-loop-esque* function that basically had my sense of `hopelessness ++` as we iterated through this array. \n\n    I glanced across the 3rd suggestion of checking for case sensitivity, surely that wouldn’t be the case; that sounds too simple. My media is already in the public folder and it is properly structured and routed in my code—***it works flawlessly in the dev environment, surely it has nothing to do with file structure and naming.*** My hunch was all on file size and connectivity, that perhaps my videos were simply too heavy for production.\n\n    But it was only after about an hour of poring over the possible reasons why, I returned to the idea of case-sensitivity and realised…\n\n    ![‘Kris’ in the code.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2097.png)\n\n    ‘Kris’ in the code.\n\n    ![‘kris’ in the Public folder.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2098.png)\n\n    ‘kris’ in the Public folder.\n\n    It truly was a cocktail of emotions moment, if there was a moment to describe the very definition of Cognitive Dissonance; it would’ve been that. \n\n    I simultaneously felt both a genius for successfully troubleshooting this and an absolute neanderthal for being this careless with the naming of my assets right from the very onset of the project. \n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%2099.png)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "293.",
      "chapterTitle": "And here it is, live.",
      "subsections": [
        {
          "title": "",
          "content": "All media loads (*albeit terribly, this is the next step).* And is truly live on my domain which I’ve sentimentally held for 10 years at this point—since I was last a student. \n\n- **02. Performance Optimization**\n    - **Next.js Documentation**",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "294.",
      "chapterTitle": "Next.js & Vercel",
      "subsections": [
        {
          "title": "",
          "content": "![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20100.png)\n\n        Now that I find myself at the back-end of things, it only made sense to be reminded to read up on the Next.js and Vercel documentation a second time. (*Thanks Ray*).\n\n        Pretty much everything *(frontend/backend/everything)* flew over my head the first time I read the documentation six weeks ago. It’s time to read one more time now with more context to find bits that Next.js and Vercel is able to provide when it comes to the optimization of performance for projects built and deployed on their framework.\n\n    - **Poster Images***",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "295.",
      "chapterTitle": "Why did I take this long???",
      "subsections": [
        {
          "title": "",
          "content": "Honestly, the simplest yet most effective implementation on my back-end journey thus far. It’s kind of unreal why I waited this long before implementing this.\n\n        ```jsx\n        <motion.video\n        src=\"/uniqlo1/montage.mp4\"\n        className=\"rounded-b-lg md:rounded-lg w-full h-96 md:group-hover:h-150 object-cover col-span-full md:col-span-6 transition-all duration-300\"\n        autoPlay\n        muted\n        loop\n        playsInline\n        loading=\"lazy\"\n        poster='/poster/uniqlobest.png'\n        ></motion.video>\n        ```\n\n        The poster attribute as seen in the code snippet above basically loads a placeholder image while the video loads. This prevents having essentially an empty page or div during the time it takes for a video to load. \n\n        ![Poster src in my videoData array.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20101.png)\n\n        Poster src in my videoData array.\n\n        I immediately turned to adding the poster attribute to my videoData array that is the backbone of my home page. I turned up the blur value of the videos that are currently on my home page and took screenshots of each square to create what is essentially blurred placeholder images that will be the poster image. \n\n        ```jsx\n        const VideoSquare = ({ *videoSrc*, *tags*, *setHoveredWork*, *onClick*, *title*, *subheader*, *selectedTags*, *poster* })\n        ```\n\n        I then fed the `poster` prop into my VideoSquare component above and had it fed to the Video `div` as `{poster}` as seen below. \n\n        ```jsx\n        <video\n          className={`absolute inset-0 w-full h-full object-cover rounded-lg \n          md:group-hover:blur-xl md:group-hover:opacity-80 transition-all duration-500 \n          ${selectedTags.includes('all') \n            ? `${isExpanded ? 'opacity-100' : 'opacity-100 blur-[30px] md:blur-0'}`\n            : 'blur-[0px] opacity-100'}`}\n          style={{ clipPath: 'inset(0 round 0.5rem)' }}\n          autoPlay muted loop playsInline\n          poster={poster}>\n          <source src={videoSrc} type=\"video/mp4\" />\n        </video>\n        ```\n\n        And voila. While the loading times of my home page remains unchanged—that is to say, still really lethargic—it FEELS a lot faster now with the implementation of placeholder with this poster attribute. \n\n        [The blurred placeholder images in action.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1%204.mp4)\n\n        The blurred placeholder images in action.\n\n    - **~~Mobile Homepage Refactor*~~**",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "296.",
      "chapterTitle": "In pursuit of the smoothest Mobile experience…",
      "subsections": [
        {
          "title": "",
          "content": "Ooooooof now this one’s worthy of a documentation because I honestly wouldn’t be able to recall how the resulting code now functions off the top of my head.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "297.",
      "chapterTitle": "Portfolio Website v2 (2025)",
      "subsections": [],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "298.",
      "chapterTitle": "One-page methodology",
      "subsections": [
        {
          "title": "",
          "content": "As soon as I felt adequately accomplished with the first version of the website and it was fully deployed with most bugs addressed, I had already found myself itching with the idea of having the site be on a single vertical page that you would scroll through instead of clicking through into separate pages. \n\nThis was an ‘affordance’ that I had begun to notice in most contemporary web pages of today, where most content on the site lives upon the first load/instance of the site, and that you’d navigate through it by scrolling downwards. This is in contrast to the navigation of websites in the not-too-distant past, where information lived on separate pages and you navigated through by choosing what you were seeking and clicking into it.\n\n- **Website v1**\n\n    ![The Resume Page of Website v1](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20102.png)\n\n    The Resume Page of Website v1\n\n    ![‘Home page’ of Website v1. Even through I had ultimately streamlined the number of pages of v1 website to two, I had still felt the itch to explore what it would be like if they all lived on a single vertical page. ](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/Screenshot_2025-06-08_at_12.03.56.png)\n\n    ‘Home page’ of Website v1. Even through I had ultimately streamlined the number of pages of v1 website to two, I had still felt the itch to explore what it would be like if they all lived on a single vertical page. \n\n\nAnd so, a new branch was naturally created on my repository back in February of 2025, and I had begun to explore prototypes of how my site could function and look as a single vertical page. \n\nIt is now June of 2025 as I write this, and understandably, I have come pretty far since the first prototypes of February. Better late than never however, and you will find some current shots of what the v2 page looks like.\n\n- **Website v2**",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "299.",
      "chapterTitle": "Profile Card",
      "subsections": [
        {
          "title": "",
          "content": "![Upon first load of the site: The profile card stands more on its own with more white space around it. Information has room to breathe and it is no longer as dense.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20103.png)\n\n    Upon first load of the site: The profile card stands more on its own with more white space around it. Information has room to breathe and it is no longer as dense.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "300.",
      "chapterTitle": "Profile Information",
      "subsections": [
        {
          "title": "",
          "content": "[You are now able to select the type and length of information you are looking for instead of having all of displayed within viewport at once.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1%205.mp4)\n\n    You are now able to select the type and length of information you are looking for instead of having all of displayed within viewport at once.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "301.",
      "chapterTitle": "Work Selector",
      "subsections": [
        {
          "title": "",
          "content": "[The primary interaction with work is now through horizontal carousels divided up by skillset, the example above is for Product Design.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/2%203.mp4)\n\n    The primary interaction with work is now through horizontal carousels divided up by skillset, the example above is for Product Design.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "302.",
      "chapterTitle": "Footer",
      "subsections": [
        {
          "title": "",
          "content": "![The experience dropdowns now exist at the bottom of the page as a footer.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20104.png)\n\n    The experience dropdowns now exist at the bottom of the page as a footer.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "303.",
      "chapterTitle": "Full page",
      "subsections": [
        {
          "title": "",
          "content": "![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20105.png)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "304.",
      "chapterTitle": "**Cursor**",
      "subsections": [
        {
          "title": "",
          "content": "Not even an entire year ago, I embarked on the journey to code my portfolio website from little to no prior knowledge of web development, and in correlation, this very document as well. Vibe coding wasn’t even a concept then. However, it already felt a little superhuman to be able to prompt ChatGPT and learn pretty much everything I’ve documented above when it comes to web dev. The v1 version of the website would not have been possible without the aid of AI \n\nBut it was around the end of 2024 when the concept of vibe coding started circulating within the programming circles with the rise of IDEs with Cursor and AI-driven coding platforms like v0 by Vercel–it was now actually possible to prompt a Javascript/React/CSS prototype to life without having to deal with anything related to the codebase itself. Even then, I caught myself pondering on the redundancy of everything I had just gone through in the prior months. In spite of the fact that I am, in fact, **still a complete novice at all of this**–my knowledge and workflows from just *months prior* now felt obsolete. **Insanity.**\n\nNow, as I finally find myself with the time to jump back into exploring this wasteland that is web development and programming with React, I would like to also take the opportunity to explore the boundaries of vibe coding with Cursor as I work on the v2 iteration of my portfolio website. In the documentation below, you will find a few case studies and examples in which I am attempting to incorporate AI into my process of building the site.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "305.",
      "chapterTitle": "**Refactoring**",
      "subsections": [
        {
          "title": "",
          "content": "- **Work Header and Subheaders**\n    - **Prompt**\n\n        *cabin.js highlighted as context for this instance*\n\n        > This is my portfolio website and each work I have is in a separate component. This is the cabin.js component for example. Each work has a set header and subheader tailwind css style. I would like to refactor this style so that I can tweak the style across all works / components on the website instead of individually changing the style on each work. How do I do this?\n        > \n    - **Response**\n\n        ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20106.png)\n\n        The agent within Cursor understood the prompt adequately and did exactly as prompted. ProjectHeader was created as a separate React component that would be reusable across all work pages. \n\n        ![New code for header and subheader.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20107.png)\n\n        New code for header and subheader.\n\n        ![Previous code for each individual work component.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20108.png)\n\n        Previous code for each individual work component.\n\n        Now, it was a matter of applying this ProjectHeader component across all my work components in order for the Tailwind CSS style to be applied and consistent across all work. I attempted to get the AI to automate this for me, starting small with just 4 work components.\n\n        ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20109.png)\n\n        ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20110.png)\n\n        It failed. This was one of the first few instances in which the AI seemed to face a barrier in accessing my codebase. Small issue, I proceeded to manually apply the same code across all my work components; a small inconvenience now that will solve all future tweaks to the Header styles.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "306.",
      "chapterTitle": "But here’s the best part.",
      "subsections": [
        {
          "title": "",
          "content": "[3.mp4](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/3%202.mp4)\n\n        As I had copied the code for ProjectHeader from cabin.js ready to be pasted onto all other work components, the AI within Cursor recognized it accordingly and when replacing the legacy Header code within other work components, it not only gave the option to paste the ProjectHeader code from within clipboard but also to **automatically adapt it with the pre-existing title and subtitle copy in that particular work component.** When then all applies upon pressing tab. \n\n        This repeatedly worked across all work components and allowed me to apply the same code across the codebase multiple times faster than I would manually paste and type in the appropriate copy for each instance. \n\n- **Side Container**\n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20111.png)\n\n    Every work featured on the home page in the horizontal carousels feature a side container div that provides information on the work on hover. However as this was coded from scratch from prototypes, it was hardcoded. Any tweaks to the styling of one side container had to be manually copy and pasted across all other side containers. \n\n    - **Code**\n\n        ```jsx\n        {/* Side Container */}\n        <div className=\"absolute z-40 pl-10 pt-6 w-[300px] group-hover:w-[430px] h-full text-white group-hover:bg-white/10 dark:group-hover:bg-transparent\n        backdrop-blur-none group-hover:backdrop-blur-3xl rounded-3xl group-hover:shadow-standard transition-all duration-300\n        group-hover:scale-95 group-hover:ml-2.5\">\n\n          <button className=\"font-mono text-base tracking-tight -ml-1.5 p-2 h-6 rounded-full flex items-center justify-center border border-white mb-2 transition group-hover:bg-white group-hover:text-black group-hover:scale-90\">\n            01\n          </button>\n\n        <button className={`absolute top-7 right-7 font-medium text-lg tracking-tighter p-1.5 rounded-full mt-0.5\n        flex items-center justify-center border-1 border-white text-white cursor-pointer opacity-0 group-hover:opacity-100\n        group-hover:bg-white group-hover:text-black group-hover:scale-110 group-hover:-m-2 transition-all duration-300`}>\n            <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            viewBox=\"2 2 20 20\"\n            fill=\"none\"\n            stroke=\"currentColor\"\n            strokeWidth=\"2\"\n            strokeLinecap=\"round\"\n            strokeLinejoin=\"round\"\n            className=\"w-4 h-4\">\n            <path d=\"M7 17L17 7\" />\n            <path d=\"M7 7h10v10\" />\n            </svg>\n        </button>\n\n          <h1 className=\"text-4.5xl group-hover:text-6xl font-medium tracking-tighter leading-tighter mb-1 transition-all duration-300 -ml-1\">\n            Beyond <br/> The Cabin\n          </h1>\n\n          <h1 className=\"text-base font-medium tracking-tight mt-5 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300\">\n            Brand Campaign for Singapore Airlines\n          </h1>\n\n          <p className=\"opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[90%]\">\n            6 Cities. 6 Cabin Crew. 6 Passions. Journey beyond the cabin with our cabin crew. You see them on board, now follow their travels around the world.\n          </p>\n\n          <div className=\"col-span-3\">\n            <div className=\"absolute bottom-11 -ml-1 gap-[30px] tracking-tight flex\n              opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap\">\n              <div className=\"font-semibold\">Role:</div>   \n              <p>Art Director</p>\n            </div>\n\n            <div className=\"absolute bottom-5 -ml-1 gap-5 tracking-tight flex\n              opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap\">\n              <div className=\"font-semibold mr-1\">Skills:</div>   \n              <p>Creative Direction</p>\n              <p>Motion + Graphic Design</p>\n            </div>\n          </div>\n\n        </div>\n\n        {/* Video */}\n        <video src=\"/CCS/bestworkmontage.mp4\"\n          className=\"rounded-3xl w-full col-span-full h-[760px] object-cover\"\n          autoPlay\n          muted\n          loop\n          playsInline\n          poster=\"/poster/cabinbest1.jpeg\"/>\n        </div>\n        ```\n\n\n    And so right now I’d like to refactor this into a reusable component which can then be applied in place of the hardcode in the other horizontal carousels. Any change in the styling in the component code will apply consistently across all instances.\n\n    - **Refactor**\n\n        ![My prompt to the Cursor AI Agent](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20112.png)\n\n        My prompt to the Cursor AI Agent\n\n        ![Response](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20113.png)\n\n        Response\n\n        - Suggested code\n\n            ```jsx\n            'use client'\n\n            const CarouselItemSideContainer = ({\n              number, // \"01\", \"02\", etc.\n              title, // \"Beyond The Cabin\"\n              subtitle, // \"Brand Campaign for Singapore Airlines\"\n              description, // The paragraph text\n              role, // \"Art Director\"\n              skills, // Array of skills [\"Creative Direction\", \"Motion + Graphic Design\"]\n              onExpand, // Optional click handler for the expand button\n            }) => {\n              return (\n                <div className=\"absolute z-40 pl-10 pt-6 w-[300px] group-hover:w-[430px] h-full text-white group-hover:bg-white/10 dark:group-hover:bg-transparent\n                  backdrop-blur-none group-hover:backdrop-blur-3xl rounded-3xl group-hover:shadow-standard transition-all duration-300\n                  group-hover:scale-95 group-hover:ml-2.5\">\n\n                  <button className=\"font-mono text-base tracking-tight -ml-1.5 p-2 h-6 rounded-full flex items-center justify-center border border-white mb-2 transition group-hover:bg-white group-hover:text-black group-hover:scale-90\">\n                    {number}\n                  </button>\n\n                  <button \n                    onClick={onExpand}\n                    className={`absolute top-7 right-7 font-medium text-lg tracking-tighter p-1.5 rounded-full mt-0.5\n                    flex items-center justify-center border-1 border-white text-white cursor-pointer opacity-0 group-hover:opacity-100\n                    group-hover:bg-white group-hover:text-black group-hover:scale-110 group-hover:-m-2 transition-all duration-300`}>\n                    <svg\n                      xmlns=\"http://www.w3.org/2000/svg\"\n                      viewBox=\"2 2 20 20\"\n                      fill=\"none\"\n                      stroke=\"currentColor\"\n                      strokeWidth=\"2\"\n                      strokeLinecap=\"round\"\n                      strokeLinejoin=\"round\"\n                      className=\"w-4 h-4\">\n                      <path d=\"M7 17L17 7\" />\n                      <path d=\"M7 7h10v10\" />\n                    </svg>\n                  </button>\n\n                  <h1 className=\"text-4.5xl group-hover:text-6xl font-medium tracking-tighter leading-tighter mb-1 transition-all duration-300 -ml-1\">\n                    {title}\n                  </h1>\n\n                  <h1 className=\"text-base font-medium tracking-tight mt-5 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300\">\n                    {subtitle}\n                  </h1>\n\n                  <p className=\"opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[90%]\">\n                    {description}\n                  </p>\n\n                  <div className=\"col-span-3\">\n                    <div className=\"absolute bottom-11 -ml-1 gap-[30px] tracking-tight flex\n                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap\">\n                      <div className=\"font-semibold\">Role:</div>   \n                      <p>{role}</p>\n                    </div>\n\n                    <div className=\"absolute bottom-5 -ml-1 gap-5 tracking-tight flex\n                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap\">\n                      <div className=\"font-semibold mr-1\">Skills:</div>   \n                      {skills.map((skill, index) => (\n                        <p key={index}>{skill}</p>\n                      ))}\n                    </div>\n                  </div>\n                </div>\n              );\n            };\n\n            export default CarouselItemSideContainer;\n            ```\n\n\n    Works perfectly as I had envisioned and planned for it to. \n\n    - **Tweaks**\n\n        ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20114.png)\n\n\n    After making a few minor tweaks to the code I then prompted it to apply this new SideContainer component across the horizontal carousel for Creative Direction initially. \n\n    - **Implementation**\n\n        ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20115.png)\n\n        ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20116.png)\n\n        ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20117.png)\n\n\n    All in all, a perfect example in which Cursor has been completely changing the way I have been approaching code. It’s mindblowing how much it is taking the toll away from the manual efforts of refactoring and implementation.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "307.",
      "chapterTitle": "**But wait, that was not the happy ending after all**",
      "subsections": [
        {
          "title": "",
          "content": "After implementing the component across bestworkv3.js, I then attempted to tweak the hoverWidth value on the page itself and found it to not be working. \n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20118.png)\n\n    This implementation did not work. In fact, it broke the website and it now could not load/build. \n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20119.png)\n\n    So upon further prompting, it became apparent that the width values that I had ideally hoped to pass on as props to the SideContainer component were not exactly ‘dynamic’ as envisioned and that the AI had automatically generated tailwind classes for the rest of the works as it implemented the component across the code. It also now started to incorporate CSS custom properties beyond my current stack/what I am familiar with–which also ultimately did not work. **The frustration stage with AI has arrived.**\n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20120.png)\n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20121.png)\n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20122.png)\n\n    ![Now, this solution worked like a charm.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20123.png)\n\n    Now, this solution worked like a charm.\n\n    And so I had to learn. \n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20124.png)\n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20125.png)\n\n    This was great. It would have been beyond my means solving for and coming up with a solution to this problem; I have no understanding on CSS custom properties. However the implementation and subsequent explanation of it is clear and understandable, and I now have a nascent understanding of the constraints of passing dynamic props to tailwind and using CSS variables to circumvent it. \n\n    Would I be able to code this from scratch? Yeah well no. But at least I now have a better idea of what’s going on if I were to see this sort of implementation elsewhere.\n\n- **Markdown Formatting**\n\n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20126.png)\n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20127.png)\n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20128.png)\n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20129.png)\n\n    ![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20130.png)\n\n- **Resume.js**\n    - **Prompt**\n\n        *resume.js is highlighted as context for this instance*\n\n        > Could you take a look at this page and suggest refactors? Do not make any changes, only suggestions please.\n        > \n    - **Response**\n\n        Of course. After reviewing app/components/resume.js, I have several suggestions for refactoring that would improve its structure, maintainability, and overall code quality. The file is quite large, and breaking it down will make it much easier to work with.\n\n        Here are my suggestions:",
          "isCollapsible": false,
          "isExpanded": true
        },
        {
          "title": "1. Componentization: Break Down the Monolith",
          "content": "The most significant improvement would be to split the single, 1500+ line Resume component into smaller, more focused components.\n\n        - **Problem:** A single large file is difficult to navigate, debug, and maintain. It mixes many different concerns (bio, story, work experience, projects, etc.).\n        - **Suggestion:** Create a new directory like app/components/resume/ and break the page into logical pieces. Here's a possible structure:\n        - Bio.jsx: The top section with your photo, name, and contact details.\n        - Story.jsx: The \"Story time\" section where users can select different lengths of your bio.\n        - Experience.jsx: The entire \"Curriculum Vitae\" section. This could be further broken down into an ExperienceItem.jsx for each job.\n        - Section.jsx: A reusable component for the main content sections like \"Creative Direction\", \"Product Design\", etc., that share a similar header/title layout.\n        - BrandLogos.jsx: The row of logos for \"Worked with:\".\n        - **Benefit:** This will make the code dramatically easier to read and manage. Each file will have a single responsibility, aligning with best practices in React development.",
          "isCollapsible": true,
          "isExpanded": false
        },
        {
          "title": "2. State Management Consolidation",
          "content": "You're using many useState hooks to control the visibility of different UI sections. This can be simplified.\n\n        - **Problem:** The component has over 15 individual useState variables for toggles (e.g., showAsm, showTBWA, showSIA). This adds a lot of boilerplate code for state declarations and toggle functions.\n        - **Suggestion:** Consolidate this state. You could use a single state object, but a more robust solution is to create a custom hook (e.g., useExperienceState). This hook would manage an object of all visibility flags and provide a single toggleSection function that takes the section name as an argument.\n        - **Benefit:** This will clean up the Resume component significantly, reduce repetitive code, and make the state logic more scalable and easier to manage from one central place.",
          "isCollapsible": true,
          "isExpanded": false
        },
        {
          "title": "3. Create Reusable UI Components",
          "content": "The code contains a lot of duplicated JSX for similar UI elements, especially the dropdowns in your work history.\n\n        - **Problem:** Copy-pasting JSX for each job entry in the \"Curriculum Vitae\" section is not maintainable. If you want to change the style or behavior of these dropdowns, you have to edit every single one.\n        - **Suggestion:** Create a generic, reusable Accordion or Dropdown component. This component would accept props like title, subtitle, and children. It would internally handle the state for being open or closed, the chevron icon switching, and the motion.div animations.\n        - **Benefit:** This will drastically reduce code duplication, ensure UI consistency, and make the main component's code more declarative and easier to understand.",
          "isCollapsible": true,
          "isExpanded": false
        },
        {
          "title": "4. Centralize Constants",
          "content": "The animation variants for Framer Motion are defined directly inside the component.\n\n        - **Problem:** If you split the code into smaller components as suggested, you would need to pass these animation objects down as props or redefine them in each child component, which is inefficient.\n        - **Suggestion:** Move the animateInChild, dropdown, and dropdownChild objects into a separate file, like app/constants/animations.js. Any component that needs these animations can then simply import them.\n        - **Benefit:** This separates your animation logic from your component structure, promotes reusability, and makes your animation styles easy to manage and keep consistent across the entire application.\n\n        By implementing these suggestions, you will transform your resume page into a much more professional, scalable, and maintainable codebase, which is a great practice for any project.",
          "isCollapsible": true,
          "isExpanded": false
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "308.",
      "chapterTitle": "**Liquid Glass**",
      "subsections": [
        {
          "title": "",
          "content": "[End result](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1%208.mov)\n\nEnd result\n\nFrosted glass has always been a part of the language of my website right from the beginning, in no small part due to the backdrop-blur CSS string, making it effortless to turn pretty much any surface into ‘frosted glass’ by blurring content that is behind it. \n\nI’ve always intended to take the look of it beyond just a flat pane and to introduce a bit of dimensionality to it. I had a limited time window to develop the v1 website however, and amongst all the other things I had to get done for the website, I settled with the design you’ll find below; a surface with backdrop-blur and a white border at the bottom and right edges. \n\n![Top navbar from v1 website. ](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20131.png)\n\nTop navbar from v1 website. \n\nSubtlety was the name of the game here when I tweaked the values for the bottom border of the v1 navbar. I wanted it to be almost indiscernible, a little attention to detail touch if you noticed it. I didn’t want the navbar background to stand out on the website; the content on the page was the focus after all. It is pretty interesting to look back at this design in hindsight, it looks almost undesigned. It’s thought-provoking how much ‘design taste’ can evolve and change so drastically over the span of just a few months since I did this.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "309.",
      "chapterTitle": "Neo-skeuomorphism",
      "subsections": [
        {
          "title": "",
          "content": "Alas, as of this writing in June 2025, Apple had recently unveiled their new design language, touting it as Liquid Glass. Neo-skeuomorphism as a design movement is no longer a speculation; it is upon us. As a massive believer and fan of the movement ever since Google first introduced Material Design in 2014 with the ultimate design philosophy of emulating physicality on a two dimensional digital surface, I fell in love with Liquid Glass as a direction instantly. What I wasn’t prepared for however, was how far Apple decided to take the transmission of the material properties of Liquid Glass. **Bold, even.** Certain applications of it across their platforms have it almost completely clear, raising very serious legibility and ultimately accessibility concerns. While I’m certain and do hope that Apple will continue to refine the values to strike the balance between the idea crystal clarity of literal liquid glass and legibility, I’m also struck by how daring of a move this was; perhaps we had grown too used to the frosted glass language that had been prominent for the better part of the past few years?",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "310.",
      "chapterTitle": "Why not?",
      "subsections": [
        {
          "title": "",
          "content": "Accordingly, I was also tempted to give emulating the look a go. I already had the building blocks in place with the codebase for the UI of my website set up. Obviously I knew I wasn’t going to find myself with an exact reproduction of Liquid Glass, knowing that the actual implementation of it by Apple is likely physics driven with the glass deformation around the edges along with caustics and specular highlights. \n\nI, however, **wield the power of CSS**, and I was keen to find out how far that would get me.\n\nWith Liquid Glass now as a reference, I set to work tweaking the values of my Tailwind CSS strings and landed with this as a result:\n\n[1.mp4](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1%206.mp4)\n\n- Code\n\n    ```\n    className={`rounded-full flex items-center justify-center \n                w-[162px] h-[50px] bg-background dark:bg-transparent brightness-[120%]\n                saturate-100 border-r-1 border-b-1 border-white/45 backdrop-blur-[10px]\n                shadow-[0px_3px_10px_rgba(0,0,0,0.15),inset_0px_-1px_6px_0px_rgba(255,255,255,0.3)]`}\n    ```\n\n\nI was decently content, this iteration of the navbar already looked like a much welcomed coat of paint over what I had before in v1. I knew this was as far as pure Tailwing CSS strings could get me short of displacement maps for distortion and I actually called it quits; it was a quick and easy experiment.",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "311.",
      "chapterTitle": "I obviously couldn’t resist stopping there.",
      "subsections": [
        {
          "title": "",
          "content": "And so, I found myself typing this prompt into Cursor the next day.\n\n![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20132.png)\n\nI had prior knowledge of SVG filters and applying displacement maps with them to distort content on webpages, and knew that this could be a viable option to achieving the edge distortion of Liquid Glass. I just had no idea how to implement it, having never done it before. This was a perfect opportunity to test out vibe coding with Cursor once again. \n\nIn short, it wasn’t great. Cursor wasn’t able to simply ‘vibe’ out literally the effect and the relevant implementation of Liquid Glass. I wasn’t expecting it to, and I’m quite glad it couldn’t, but it struggled to create any sort of distortion beyond creating the boilerplate code for SVG filters.\n\n![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20133.png)\n\nWhat it did however, was correctly create the SVG filter definition at the top of my file as well as implement it within my navbar code; laying the groundwork for me to build upon. \n\n![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20134.png)\n\n![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20135.png)\n\n![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20136.png)\n\n![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20137.png)\n\nAfter multiple rounds of analyzing the vibe code, troubleshooting, and getting nowhere with Cursor and its insistence to use feTurbulence as a map for displacement. I decided to instead actually read up on creating and applying displacement maps of my own instead of procedurally with SVG filters and came across this [site](https://www.smashingmagazine.com/2021/09/deep-dive-wonderful-world-svg-displacement-filtering/). \n\n![Diagram explaining the application of a displacement map (the red–blue gradient image)](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20138.png)\n\nDiagram explaining the application of a displacement map (the red–blue gradient image)\n\nThis seemed like something, I figured I could try creating a map that would distort the four edges of whatever it is composited on. Trying my luck, I opened Photoshop and asked ChatGPT on how the RGB values inform distortion. \n\n![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/30e142c5-ffbe-4ca2-9f32-a9ed9f93b8e1.png)\n\n![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/93faad2e-334d-4a76-ba7d-eb22e20aa182.png)\n\n![Inputting values that are either 0, 128 or 255 for the Red and Green channels of the color picker, I was able to ‘control the direction’ to which content was being distorted. ](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20139.png)\n\nInputting values that are either 0, 128 or 255 for the Red and Green channels of the color picker, I was able to ‘control the direction’ to which content was being distorted. \n\n![displace-map.png import](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20140.png)\n\ndisplace-map.png import\n\nImporting the above map as feImage into my SVG filter and getting it composited as a displacement map I found myself with this:\n\n![image.png](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20141.png)\n\nNow this was something! I was getting close! However the image was quite evidently applying onto the container as a literal 512x512 square. I just needed it to span whatever size and aspect ratio of the container the filter was applied to. \n\n![A simple line of code fed to me by Cursor was all that was needed: *preserveAspectRatio*=\"none\" ](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/image%20142.png)\n\nA simple line of code fed to me by Cursor was all that was needed: *preserveAspectRatio*=\"none\"",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "312.",
      "chapterTitle": "The result:",
      "subsections": [
        {
          "title": "",
          "content": "[1 3.mov](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1_3.mov)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    },
    {
      "chapterNumber": "313.",
      "chapterTitle": "Wiggle on hover",
      "subsections": [
        {
          "title": "",
          "content": "![Added a spring transition for the scaling on hover for the menubar for a liquid feel.](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1556ff13-848c-4df6-8ba4-a9d3410ee42d.png)\n\nAdded a spring transition for the scaling on hover for the menubar for a liquid feel.\n\n[1.mov](Portfolio%20Website%20127a92ab668680ed91ddd0619057466f/1%209.mov)",
          "isCollapsible": false,
          "isExpanded": true
        }
      ],
      "isCollapsible": true,
      "isExpanded": false
    }
  ]
};

// Export individual sections for easier access
export const sections = portfolioWebsiteContent.sections;

// Helper function to get section by title
export const getSectionByTitle = (title) => {
  return sections.find(section => section.chapterTitle.toLowerCase().includes(title.toLowerCase()));
};

// Helper function to get all section titles
export const getAllSectionTitles = () => {
  return sections.map(section => section.chapterTitle);
};
