// Animation variants extracted from page.js
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1, 
    scale: 1, 
    transition: {
      staggerChildren: 0.1, 
      type: "spring",
      stiffness: 600,
      damping: 20, 
    },
  },
  fade: {
    opacity: 0,
    transition: { duration: 0.1, ease: "easeOut" },
  },
};

export const animateIn = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.1, ease: "easeOut" },
  },
  fade: {
    opacity: 0,
    transition: { duration: 0.1, ease: "easeOut" },
  },
};

export const animateInChild = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 22,
    }
  },
  fade: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const animateInChildMobile = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1, 
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  fade: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const skillContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
  exit: { opacity: 0 },
}; 