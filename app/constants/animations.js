export const animateInChild = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

export const dropdown = {
    hidden: { opacity: 0, y: -20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.05, duration: 0.25, ease: "easeOut" },
    },
    fade: {
        opacity: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export const dropdownChild = {
    hidden: { opacity: 0, y: -20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.25, ease: "easeOut" },
    },
    fade: {
        opacity: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
}; 