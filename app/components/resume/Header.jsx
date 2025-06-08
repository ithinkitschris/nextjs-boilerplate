import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Header = ({ timeNyc, timeSg }) => {
  return (
    <div key="bio-section" className="lg:flex lg:flex-wrap lg:gap-10 col-span-full w-full">
      {/* Mobile Photo Card */}
      <div key="mobile-photo-card" className="lg:hidden relative w-full h-[620px]">
        {/* Name */}
        <motion.h1
          key="mobile-name"
          className="z-50 pl-5 pt-5 text-6xl tracking-tighter leading-15 font-base text-[#e9e9e9] dark:text-white"
          variants={animateInChild}
        >
          I am <span key="mobile-name-chris" className="font-script absolute top-10 tracking-tight text-7xl align-top ml-2">Chris</span>
        </motion.h1>

        {/* Image */}
        <motion.div key="mobile-image-container" className="absolute top-0 left-0 w-full h-full -z-40 overflow-hidden rounded-3xl shadow-standard" variants={animateInChild}>
          <Image
            key="mobile-profile-image"
            src='/profile/profile.jpg'
            alt=""
            className="transform scale-105 translate-y-4"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        {/* Details */}
        <motion.div
          className="absolute bottom-0 pl-6 pb-14 text-[#e9e9e9] dark:text-white"
          variants={animateInChild}
        >
          {/* Circle Header */}
          <h1 className="flex items-center justify-center -ml-2 border-1 border-[#e9e9e9] text-[#e9e9e9] dark:text-white
          rounded-full tracking-tight font-medium text-sm w-[115px] mb-1.5  whitespace-nowrap">Senior Creative</h1>

          Based in New York City
          <span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide">{timeNyc}</span>
          <br />
          <i className="-ml-0.5">From Singapore</i>
          <span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide">{timeSg}</span>
        </motion.div>
      </div>

      {/* Desktop Container */}
      <div className="col-span-full mb-4 border-0 hidden lg:block relative w-full h-[650px] group scale-100 hover:scale-101 transition-all duration-300">
        {/* Image */}
        <motion.img 
          src='/profile/profilelandscape2.jpg'
          className="rounded-3xl h-full w-full group-hover:drop-shadow-xl object-cover transition-all" 
          variants={animateInChild}
        />

        <div className="absolute inset-0 pt-1 pb-4 pl-10 text-white grid grid-cols-2 group">
          {/* Desktop Name */}
          <motion.h1
            className="pt-6 text-xl font-script tracking-tight whitespace-nowrap"
            variants={animateInChild}>
            I am
            <p className="font-medium font-sans tracking-[-4.5pt] text-9xl -ml-3 -mt-3.5">
              Chris Leow
            </p>
          </motion.h1>

          {/* Desktop Details */}
          <motion.div className="col-span-1 absolute right-12 bottom-18">
            <motion.div
              className="text-[#e9e9e9] dark:text-white flex flex-col items-end self-end"
              variants={animateInChild}>
              <h1 className="flex items-center justify-center border-1 rounded-full tracking-tight font-medium text-sm w-[115px] mb-1.5 whitespace-nowrap -ml-2">Senior Creative</h1>
              <p><span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide mr-2 italic">{timeNyc}</span>Based in New York City</p>
              <i className="-ml-0.5"><span className="text-white/55 text-xxs align-top ml-2 font-base tracking-wide mr-2">{timeSg}</span>From Singapore</i>
            </motion.div>
          </motion.div>

          {/* Desktop Contact */} 
          <motion.div 
            className="z-30 tracking-tight text-white flex w-full justify-between px-4 pr-12 absolute bottom-6 col-span-full"
            variants={animateInChild}>
            <p className="text-white opacity-25 group-hover:opacity-100 transition-all duration-300">Email – <span className="transition-all duration-300 hover:text-white">ithinkitschristopher@gmail.com</span></p>
            <p className="text-white opacity-25 group-hover:opacity-100 transition-all duration-300">LinkedIn – <a href="https://www.linkedin.com/in/chris-leow-93372b184/" className="underline transition-all duration-300 hover:text-white" target="_blank" rel="noopener noreferrer">Chris Leow</a></p>
            <p className="text-white opacity-25 group-hover:opacity-100 transition-all duration-300">Instagram – <a href="https://www.instagram.com/khristurtle/" className="font-normal underline transition-all duration-300 hover:text-white" target="_blank" rel="noopener noreferrer">@khristurtle</a></p>
            <p className="text-white opacity-25 group-hover:opacity-100 transition-all duration-300"><a href="/resume/Chris Leow.pdf" download="Chris Leow.pdf" className="font-normal underline transition-all duration-300 hover:text-white" target="_blank" rel="noopener noreferrer">Resume</a></p>
          </motion.div>
        </div>
      </div>

      {/* Desktop Background Glow */}
      <motion.img 
        src='/profile/profilelandscape2.jpg' 
        className="hidden md:block absolute -z-10 blur-3xl -ml-24 mt-10 saturate-200 w-full opacity-0 dark:opacity-100"
      />
    </div>
  );
};

export default Header; 