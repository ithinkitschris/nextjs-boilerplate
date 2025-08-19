'use client'
import * as motion from "framer-motion/client"
import React from 'react';

const animateIn ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {staggerChildren: 0.15, duration:0.25, ease:"easeOut"}
    }
}
const animateInChild ={
    hidden: {opacity:0, y:20},
    show: {
        opacity:1, y:0, 
        transition: {duration:0.2, ease:"easeOut"}
    }
}

// Simplified image data array - easy to modify, add, or reorder images
const images = [

 
    { 
        type: 'split', 
        images: [
            { src: '/Photography/iphone/sg1.jpg', cols: 3 },
            { src: '/Photography/iphone/nyc9.jpg', cols: 3 },
        ]
    },

    // Full-span video
    { type: 'video', src: '/Photography/iphone/film/film1.mp4' },
    
    // Three images side by side
    { 
        type: 'three', 
        images: [
            { src: '/Photography/iphone/nyc3.jpg' },
            { src: '/Photography/iphone/nyc2.jpg' },
            { src: '/Photography/iphone/nyc4.jpg' }
        ]
    },


    // Full-span video
    { type: 'video', src: '/Photography/iphone/film/film5.mp4' },

    // Square aspect ratio images
    // { type: 'square', src: '/Photography/iphone/1.jpg' },
    // { type: 'square', src: '/Photography/iphone/2.jpg' },
    // { type: 'square', src: '/Photography/iphone/seoul1.jpg' },

    { 
        type: 'split', 
        images: [
            { src: '/Photography/iphone/nyc8.jpg', cols: 3 },
            { src: '/Photography/iphone/nyc6.jpg', cols: 3 },
        ]
    },

    // Full-span video
    { type: 'video', src: '/Photography/iphone/film/film3.mp4' },

    { 
        type: 'three', 
        images: [
            { src: '/Photography/iphone/wtc3.jpg' },
            { src: '/Photography/iphone/wtc2.jpg' },
            { src: '/Photography/iphone/wtc1.jpg' }
        ]
    },
    // Full-span still image
    { type: 'stills', src: '/Photography/iphone/film/film3.jpg' },

     // Full-span video
     { type: 'video', src: '/Photography/iphone/film/film2.mp4' },

    // Full-span still image
    { type: 'stills', src: '/Photography/iphone/film/film2.jpg' },

    // { 
    //     type: 'split', 
    //     images: [
    //         { src: '/Photography/iphone/toilet1.jpg', cols: 3 },
    //         { src: '/Photography/iphone/nyc5.jpg', cols: 3 },
    //     ]
    // },
    
    // Bottom spacer
    { type: 'spacer', height: '200px' }
];

const ShotOnIphone = ({className}) => {
    const renderImage = (image, index) => {
        if (image.type === 'video') {
            return (
                <motion.div key={index} className="col-span-full mb-2 relative" variants={animateInChild}>
                    <video
                        src={image.src}
                        className="h-auto w-full object-cover rounded-[17.5pt]"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="absolute bottom-0 md:bottom-3 right-0 md:right-3">
                        <p className="text-white/75 text-[6.5pt] md:text-xs font-medium px-3 py-1 rounded-lg">
                            ProRes Log + Variable ND Filter
                        </p>
                    </div>
                </motion.div>
            );
        }
        
        if (image.type === 'stills') {
            return (
                <motion.div key={index} className="col-span-full mb-2" variants={animateInChild}>
                    <img
                        src={image.src}
                        className="h-auto w-full object-cover rounded-[17.5pt]"
                        alt=""
                    />
                </motion.div>
            );
        }
        
        if (image.type === 'full') {
            return (
                <motion.div key={index} className="col-span-full mb-2" variants={animateInChild}>
                    <img
                        src={image.src}
                        className="h-auto w-full object-cover rounded-[17.5pt]"
                        alt=""
                    />
                </motion.div>
            );
        }
        
        if (image.type === 'square') {
            return (
                <motion.div key={index} className="col-span-2 mb-2 mr-2" variants={animateInChild}>
                    <div className="aspect-square w-full">
                        <img
                            src={image.src}
                            alt=""
                            className="h-full w-full object-cover rounded-2xl"
                        />
                    </div>
                </motion.div>
            );
        }
        
        if (image.type === 'split') {
            return (
                <div key={index} className="grid grid-cols-6 col-span-full gap-1 md:gap-2 mb-2">
                    {image.images.map((img, imgIndex) => (
                        <motion.img
                            key={imgIndex}
                            src={img.src}
                            alt=""
                            className={`col-span-${img.cols} h-full w-full object-cover rounded-[17.5pt]`}
                            variants={animateInChild}
                        />
                    ))}
                </div>
            );
        }
        
        if (image.type === 'three') {
            return (
                <div key={index} className="grid grid-cols-6 col-span-full gap-1 lg:gap-2 mb-2">
                    {image.images.map((img, imgIndex) => (
                        <motion.img
                            key={imgIndex}
                            src={img.src}
                            alt=""
                            className="col-span-2 h-full w-full object-cover rounded-[17.5pt]"
                            variants={animateInChild}
                        />
                    ))}
                </div>
            );
        }
        
        if (image.type === 'spacer') {
            return (
                <div key={index} className="col-span-full" style={{ height: image.height }}></div>
            );
        }
        
        return null;
    };

    return (
        <motion.div 
            className={`grid grid-cols-6 md:pt-6 ${className}`}
            initial="hidden"
            animate="show"
            variants={animateIn}
        >
            {images.map((image, index) => renderImage(image, index))}
        </motion.div>
    );
};

export default ShotOnIphone;
