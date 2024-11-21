import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

const imageCarousel = [
  {
    src: "/profile/profile1.jpg",
    alt: "Chris Leow Profile Picture 1",
    description: "...looking the nicest and most proper as I unnaturally can.",
  },
  {
    src: "/profile/profile2.jpg",
    alt: "Chris Leow Profile Picture 1",
    description: "...with my cat as I configure the Sony FX-3 for an upcoming shoot.",
  },
  {
    src: "/profile/profile3.jpg",
    alt: "Chris Leow Profile Picture 3",
    description: "...documenting work-from-home life during COVID.",
  },
  {
    src: "/profile/profile4.jpg",
    alt: "Chris Leow Profile Picture 1",
    description: "...in front of my own work.",
  },
  {
    src: "/profile/profile5.jpg",
    alt: "Chris Leow Profile Picture 2",
    description: "...in front of my own work, this time actually smiling!",
  },
  {
    src: "/profile/profile6.jpg",
    alt: "Chris Leow Profile Picture 3",
    description: "...at work and looking as corporate as I've ever been.",
  },

];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // Direction for sliding animation

  const nextImage = () => {
    setDirection(1); // Set direction for forward sliding
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCarousel.length);
  };

  const prevImage = () => {
    setDirection(-1); // Set direction for backward sliding
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + imageCarousel.length) % imageCarousel.length
    );
  };

  return (
    <div className="col-span-5 relative h-200 w-full rounded-xl drop-shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="absolute inset-0 z-0 rounded-lg object-cover scale-100 object-right">
        <AnimatePresence custom={direction}>
          <motion.div
            key={imageCarousel[currentIndex].src}
            initial={{ x: direction === 1 ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: direction === 1 ? "-100%" : "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={imageCarousel[currentIndex].src}
              alt={imageCarousel[currentIndex].alt}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute left-0 top-0 w-full h-1/3 bg-gradient-to-b from-black/50 to-transparent"></div>

      {/* Text Content */}
      <div className="relative z-10 pl-6 pt-4">
        <motion.h1
          className="-ml-1 text-4xl tracking-tight whitespace-nowrap leading-10 font-medium text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          This is me...
        </motion.h1>

        <motion.div
          className="fixed -ml-0.5 text-right bottom-4 right-6 left-32 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base mb-2">{imageCarousel[currentIndex].description}</p>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={prevImage}
          className="text-white text-xl w-10 h-10 flex items-center justify-center"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="text-white text-xl w-10 h-10 flex items-center justify-center"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
