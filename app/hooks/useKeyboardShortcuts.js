import { useEffect } from 'react';

export const useKeyboardShortcuts = ({ toggleHideNav, hideNav }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Tab') {
        event.preventDefault(); // Prevent default tab behavior
        toggleHideNav();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hideNav, toggleHideNav]); // Include hideNav in dependencies since toggleHideNav uses it
}; 