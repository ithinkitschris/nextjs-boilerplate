import { createContext, useState } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav((prev) => (!prev));
    };

    return (
        <NavContext.Provider value={{ showNav, setShowNav, toggleNav }}>
            {children}
        </NavContext.Provider>
    );
};