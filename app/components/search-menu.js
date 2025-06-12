import {useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchMenu = () => {
    const [isActive, setIsActive] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsActive(!isActive);
                if (!isActive) {
                    setTimeout(() => {
                        const searchInput = document.getElementById('searchInput');
                        if (searchInput) {
                            searchInput.focus();
                        }
                    }, 0);
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);


        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isActive]);

    // Function to search and filter items
    const handleSearch = (event) => {
        const queryText = event.target.value.toLowerCase();
        setQuery(queryText);
        if (queryText.trim() === '') {
            setResults([]);
            return;
        }

        // Example of searchable elements: headings and paragraphs
        const items = Array.from(document.querySelectorAll('h1, h2, h3, p, a'));
        const filteredItems = items.filter((item) =>
            item.textContent.toLowerCase().includes(queryText)
        );
        setResults(filteredItems);
    };

    const menuVariants = {
        hidden: { opacity: 0 }, // Initial state
        visible: { opacity: 1, },  // Transition to this state
        exit: { opacity: 0,  },    // Exit state
    };

    return (
        <AnimatePresence>
            {isActive && ( // Conditionally render SearchMenu
                <motion.div
                    className="fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50"
                    initial="hidden" // Initial animation state
                    animate="visible" // Animation when isActive is true
                    exit="exit" // Exit animation state
                    variants={menuVariants} // Animation variants
                    transition={{ duration: 0.2 }} // Animation duration
                >
                    {/* Search Menu Bar */}
                    <div className="p-10 font-semibold tracking-tight drop-shadow-xl">
                        <input
                            id="searchInput"
                            type="text"
                            className="w-full max-w-sm p-3 px-5 rounded-full focus:outline-none"
                            placeholder="Type to search..."
                            value={query}
                            onChange={handleSearch}
                        />

                        <ul className="mt-4 space-y-2">
                            {results.map((item, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer text-white rounded-full pl-4 hover:scale-95 transition-all duration-200"
                                    onClick={() => {
                                        item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                        setResults([]);
                                        setIsActive(false);
                                    }}
                                >
                                    {item.textContent}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchMenu;