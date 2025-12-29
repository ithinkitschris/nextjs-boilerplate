'use client';
import { motion } from "framer-motion";

const animateInChild = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1, y: 0,
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

const ProjectHeader = ({ title, subtitle, subtitleBrand, subtitleClassName = '' }) => {
    return (
        <motion.div
            className="tracking-tighter col-span-full mt-8 md:mt-6 mb-8"
            variants={animateInChild}
        >

            {/* Header */}
            <h1 className="text-6xl md:text-8xl text-center md:text-left font-medium tracking-tighter leading-tighter -ml-2">
                {title}
            </h1>

            {/* Subheader */}
            <p className={subtitleClassName
                ? `text-xl md:text-3xl font-normal md:text-[27px] text-center md:text-left ${subtitleClassName}`
                : `text-xl md:text-3xl font-normal tracking-[-0.9px] mt-4 md:mt-0 md:text-[27px] text-center md:text-left`}>
                {subtitle}
                {subtitleBrand && (
                    <span className="relative left-1.5 ">
                        {subtitleBrand}
                    </span>
                    // <span className="relative font-script left-2.5 top-1 text-[16pt]">
                    //     {subtitleBrand}
                    // </span>
                )}
            </p>
        </motion.div>
    );
};

export default ProjectHeader; 