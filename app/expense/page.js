'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import DesktopNavbar from '../components/ui/DesktopNavbar';
import ProjectHeader from '../components/common/ProjectHeader';
import { useMobileDetection } from '../hooks/useMobileDetection';
import { useVideoNavigationSimple } from '../hooks/useVideoNavigationSimple';
import { skillsetData } from '../data/videoData';
import { useBrowser } from '../context/BrowserContext';
import { useHideNav } from '../context/HideNavContext';

const animateIn = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1, y: 0,
        transition: { staggerChildren: 0.1, duration: 0.3, ease: "easeOut" }
    }
};

const animateInChild = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1, y: 0,
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

export default function ExpensePage() {
    const router = useRouter();
    const { browserType } = useBrowser();
    const { hideNav, randomRotation, toggleHideNav, setIsWhiteBG, isWhiteBG, setIsArchiveInView, setArchiveSelectedTags } = useHideNav();
    const isMobile = useMobileDetection();
    const { selectedTags, setSelectedTags, selectedWork, setSelectedWork, toggleTag, toggleWork } = useVideoNavigationSimple();

    const [showNav, setShowNav] = useState(false);
    const [showWork, setShowWork] = useState(false);

    return (
        <>
            {/* Entire Page column setup */}
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 mt-12
      text-sm font-[family-name:var(--font-geist-sans)] max-w-9xl w-full mx-auto">

                {/* Top Navbar */}
                <motion.div
                    className="col-span-full fixed top-[0.4rem] md:top-10 z-[45] mb-4 w-screen max-w-9xl pl-3"
                    animate={{
                        y: 0,
                        rotateZ: 0
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 24
                    }}
                >
                    {/* Desktop Navbar */}
                    <DesktopNavbar
                        showNav={showNav}
                        setShowNav={setShowNav}
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                        selectedWork={selectedWork}
                        setSelectedWork={setSelectedWork}
                        toggleWork={toggleWork}
                        setShowWork={setShowWork}
                        skillsetData={skillsetData}
                        toggleTag={toggleTag}
                        isWhiteBG={isWhiteBG}
                        scrollToArchive={() => { }}
                        homeOnly={true}
                        onHomeClick={() => router.push('/')}
                    />
                </motion.div>

                {/* Page Container */}
                <div className="col-span-full px-[6%]">
                    <motion.div
                        className="grid grid-cols-8 gap-2 max-w-screen overflow-x-hidden sm:gap-3 font-[family-name:var(--font-geist-sans)] md:pt-18 pl-2"
                        initial="hidden"
                        animate="show"
                        variants={animateIn}
                    >
                        {/* Header */}
                        <ProjectHeader
                            title="On-device LLM Expense Tracker"
                            subtitle="An ongoing pet project that started off as a simple curiosity into local LLMs turned into my form of practicing front-end iOS development with Swift and the Foundation Model framework."
                            subtitleBrand=""
                            subtitleClassName="tracking-[-0.5px] mt-6"
                        />

                        {/* Documentation Link */}
                        <motion.a
                            href="https://ithinkitschris.notion.site/local-expense-tracker"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="col-span-full flex items-center justify-center md:justify-start pl-5 text-[16px] pr-4 py-2 rounded-full hover:bg-foreground hover:text-background w-fit font-medium tracking-[-0.2px] glass -ml-2"
                            variants={animateInChild}
                            whileHover={{ scale: 0.99 }}
                            transition={{
                                type: "spring",
                                stiffness: 800,
                                damping: 10
                            }}
                        >
                            Read the full documentation
                            <span className="ml-1.5 text-xs">↗</span>
                        </motion.a>

                        {/* CLI Section */}
                        <div className="col-span-full mt-20 mb-8">
                            <h2 className="text-4xl md:text-6xl text-center md:text-left tracking-[-2pt] font-medium">CLI</h2>
                            <p className="text-xl md:text-2xl text-center md:text-left font-normal text-white/60 mt-2 tracking-[-0.08pt]">Ollama + Gemma Gemma3n:e2b</p>
                        </div>

                        <motion.div className="col-span-full columns-2 md:columns-3 gap-3 mb-20 block" variants={animateInChild}>
                            <img
                                src="/expense/cli-1.png"
                                alt="CLI 1"
                                className="w-full h-auto object-cover rounded-3xl shadow-lg mb-3 break-inside-avoid"
                            />
                            <img
                                src="/expense/cli-2.png"
                                alt="CLI 2"
                                className="w-full h-auto object-cover rounded-3xl shadow-lg mb-3 break-inside-avoid"
                            />
                            <img
                                src="/expense/cli-3.png"
                                alt="CLI 3"
                                className="w-full h-auto object-cover rounded-3xl shadow-lg mb-3 break-inside-avoid"
                            />
                            <img
                                src="/expense/cli-4.png"
                                alt="CLI 4"
                                className="w-full h-auto object-cover rounded-3xl shadow-lg mb-3 break-inside-avoid"
                            />
                            <img
                                src="/expense/cli-5.png"
                                alt="CLI 5"
                                className="w-full h-auto object-cover rounded-3xl shadow-lg mb-3 break-inside-avoid"
                            />
                            <video
                                src="/expense/cli.mov"
                                className="col-span-2 md:col-span-2 w-full h-auto object-cover rounded-3xl shadow-lg"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </motion.div>

                        {/* V1 Section */}
                        <div className="col-span-full mt-20 mb-8">
                            <h2 className="text-4xl md:text-6xl text-center md:text-left tracking-[-2pt] font-medium">v1</h2>
                            <p className="text-xl md:text-2xl text-center md:text-left font-normal text-white/60 mt-2 tracking-[-0.08pt]">React Native + Cursor</p>
                        </div>

                        <motion.div className="col-span-full columns-2 md:columns-4 gap-3 mb-20 block" variants={animateInChild}>
                            <video
                                src="/expense/v2-1.mp4"
                                className="w-full h-[670px] object-cover rounded-3xl shadow-lg mb-3 break-inside-avoid"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <div className="rounded-3xl shadow-lg mb-3 break-inside-avoid overflow-hidden">
                                <img
                                    src="/expense/v1-3.png"
                                    alt="Expense Tracker V1-2"
                                    className="w-full h-auto object-cover -mt-[40px]"
                                />
                            </div>
                            <div className="rounded-3xl shadow-lg mb-3 break-inside-avoid overflow-hidden">
                                <img
                                    src="/expense/v1.png"
                                    alt="Expense Tracker V1-2"
                                    className="w-full h-auto object-cover -mt-[40px]"
                                />
                            </div>
                            <div className="rounded-3xl shadow-lg mb-3 break-inside-avoid overflow-hidden">
                                <img
                                    src="/expense/v1-1.png"
                                    alt="Expense Tracker V1-3"
                                    className="w-full h-auto object-cover -mt-[40px]"
                                />
                            </div>
                        </motion.div>

                        {/* V2 Section */}
                        <div className="col-span-full mt-40 mb-8">
                            <h2 className="text-4xl md:text-6xl text-center md:text-left tracking-[-2pt] font-medium">v2</h2>
                            <p className="text-xl md:text-2xl text-center md:text-left font-normal text-white/60 mt-2 tracking-[-0.08pt]">React Native + Cursor</p>
                        </div>

                        <motion.div className="col-span-full columns-2 md:columns-4 gap-3 mb-20 block" variants={animateInChild}>
                            <video
                                src="/expense/v2-2.mp4"
                                className="w-full h-auto object-cover rounded-3xl shadow-lg mb-3 break-inside-avoid"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <video
                                src="/expense/v2.mp4"
                                className="w-full h-[443px] object-cover rounded-3xl shadow-lg mb-3 break-inside-avoid"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            {/* <img
                                src="/expense/v2-1.png"
                                alt="Expense Tracker V2-1"
                                className="w-full h-auto object-cover rounded-3xl shadow-lg mb-3 break-inside-avoid"
                            /> */}
                            <video
                                src="/expense/v2-scroll.mp4"
                                className="w-full h-auto object-cover rounded-3xl shadow-lg mb-3 break-inside-avoid"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <img
                                src="/expense/v2-2.png"
                                alt="Expense Tracker V2-2"
                                className="w-full h-auto object-cover rounded-3xl shadow-lg mb-3 break-inside-avoid"
                            />
                            {/* 
                            <video
                                src="/expense/v2-detail.mp4"
                                className="w-full h-auto object-cover rounded-3xl shadow-lg mb-3 break-inside-avoid"
                                autoPlay
                                loop
                                muted
                                playsInline
                            /> */}
                            <video
                                src="/expense/v2-alt.mp4"
                                className="w-full h-auto object-cover rounded-3xl shadow-lg mb-3 break-inside-avoid"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </motion.div>

                        {/* V3 Section */}
                        <div className="col-span-full mt-40 mb-8">
                            <h2 className="text-4xl md:text-6xl text-center md:text-left tracking-[-2pt] font-medium">v3</h2>
                            <p className="text-xl md:text-2xl text-center md:text-left font-normal text-white/60 mt-2 tracking-[-0.05pt]">Rebuilt from scratch with SwiftUI, Google Antigravity, and Xcode</p>
                        </div>

                        <motion.div className="col-span-full grid grid-cols-2 md:grid-cols-4 gap-3 mb-40" variants={animateInChild}>
                            <video
                                src="/expense/v3-scroll.mp4"
                                className="w-full h-auto object-cover rounded-3xl shadow-lg"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <video
                                src="/expense/v3-month.mp4"
                                className="w-full h-auto object-cover rounded-3xl shadow-lg"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <video
                                src="/expense/v3-detail.mp4"
                                className="w-full h-auto object-cover rounded-3xl shadow-lg"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <video
                                src="/expense/v3-add.mp4"
                                className="w-full h-auto object-cover rounded-3xl shadow-lg"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <div className="rounded-3xl shadow-lg overflow-hidden col-span-1">
                                <video
                                    src="/expense/v3-recordAdd.mp4"
                                    className="w-full h-auto object-cover -mt-[44px]"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>
                            <div className="rounded-3xl shadow-lg overflow-hidden col-span-1">
                                <video
                                    src="/expense/v3-recordOverall1.mp4"
                                    className="w-full h-auto object-cover -mt-[44px]"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </>
    );
}
