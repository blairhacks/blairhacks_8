"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Anta } from "next/font/google";
import { useState, useEffect } from "react";
import { HiOutlineCalendar, HiOutlineTrophy, HiOutlineUsers, HiOutlineSparkles, HiXMark } from "react-icons/hi2";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { Navbar } from "@/components/Navbar";
import { Countdown } from "@/components/Countdown";

const anta = Anta({
    subsets: ["latin"],
    weight: "400",
});

interface Star {
    id: number;
    left: string;
    top: string;
    size: number;
    duration: number;
    delay: number;
}

interface Constellation {
    id: number;
    points: { x: number; y: number }[];
    opacity: number;
    duration: number;
    delay: number;
    rotate: number;
    left: number;
    top: number;
    scale: number;
    key: string; // Unique key to force re-render/reset animation
}

const constellationShapes = [
    // Cassiopeia-ish (W shape)
    [{ x: 0, y: 0 }, { x: 20, y: 30 }, { x: 40, y: 15 }, { x: 60, y: 35 }, { x: 80, y: 10 }],
    // Big Dipper-ish
    [{ x: 0, y: 0 }, { x: 20, y: 5 }, { x: 40, y: 10 }, { x: 50, y: 25 }, { x: 60, y: 40 }, { x: 80, y: 40 }, { x: 80, y: 20 }],
    // Orion-ish (Bow/Hourglass)
    [{ x: 20, y: 0 }, { x: 80, y: 0 }, { x: 50, y: 30 }, { x: 20, y: 60 }, { x: 80, y: 60 }, { x: 50, y: 30 }, { x: 65, y: 30 }, { x: 35, y: 30 }],
    // Cygnus-ish (Cross)
    [{ x: 50, y: 0 }, { x: 50, y: 80 }, { x: 20, y: 40 }, { x: 80, y: 40 }],
    // Pegasus-ish (Square + legs)
    [{ x: 20, y: 20 }, { x: 60, y: 20 }, { x: 60, y: 60 }, { x: 20, y: 60 }, { x: 20, y: 20 }, { x: 0, y: 0 }, { x: 60, y: 60 }, { x: 80, y: 80 }],
    // Random ZigZag
    [{ x: 0, y: 20 }, { x: 30, y: 0 }, { x: 50, y: 40 }, { x: 80, y: 10 }, { x: 100, y: 50 }]
];

interface Prize {
    title: string;
    description: string;
    details?: string;
    isSpecial?: boolean;
}

const prizes: Prize[] = [
    {
        title: "OVERALL",
        description: "Top builds, best demo, and track winners.",
        details: "The overall winners will be chosen based on the highest cumulative scores across all judging criteria: Impact, Creativity, Technical Complexity, and Presentation. Top 3 teams will receive major prizes!",
        isSpecial: true
    },
    {
        title: "Wolfram Award",
        description: "For projects utilizing Wolfram Language.",
        details: "The Wolfram Award is for all participants who utilize Wolfram Language as a significant component in their project. This prize contains a year of WolframOne, with a retail value of $1,660/year per user. In addition, any student who submits a project utilizing Wolfram Language is eligible for a $500 scholarship to one of our summer programs if they apply and are accepted."
    },
    {
        title: "Best Beginner Hack",
        description: "Best project by a team of first-time hackers.",
        details: "Awarded to the team composed primarily of first-time hackers that demonstrates the most impressive learning curve and execution."
    },
    {
        title: "Best Design",
        description: "Most visually appealing and user-friendly project.",
        details: "Given to the project with the most outstanding UI/UX design, considering aesthetics, usability, and accessibility."
    },
    {
        title: "Best Use of AI",
        description: "Most innovative integration of AI/ML.",
        details: "Awarded to the project that best leverages Artificial Intelligence or Machine Learning technologies to solve a problem or enhance the user experience."
    },
    {
        title: "People's Choice",
        description: "Voted by fellow hackers.",
        details: "The favorite project as voted on by all participants at the end of the hackathon."
    }
];

export default function Competition() {
    const [stars, setStars] = useState<Star[]>([]);
    const [constellations, setConstellations] = useState<Constellation[]>([]);
    const [selectedPrize, setSelectedPrize] = useState<Prize | null>(null);

    const generateRandomConstellation = (id: number): Constellation => {
        return {
            id,
            points: constellationShapes[Math.floor(Math.random() * constellationShapes.length)],
            opacity: Math.random() * 0.5 + 0.3, // Random max opacity
            duration: Math.random() * 5 + 5, // Slower animation (5-10s)
            delay: Math.random() * 2, // Short initial delay
            rotate: Math.random() * 360,
            left: Math.random() * 90,
            top: Math.random() * 90,
            scale: Math.random() * 0.6 + 0.4,
            key: Math.random().toString(36).substring(7) // Random key to force re-render
        };
    };

    useEffect(() => {
        const newStars = Array.from({ length: 110 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1, // Smaller, more realistic stars
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
        }));
        setStars(newStars);

        const newConstellations = Array.from({ length: 5 }).map((_, i) => generateRandomConstellation(i));
        setConstellations(newConstellations);
    }, []);

    const refreshConstellation = (id: number) => {
        setConstellations(prev => prev.map(c =>
            c.id === id ? generateRandomConstellation(id) : c
        ));
    };

    return (
        <div className="min-h-screen bg-[#05030a] text-white overflow-hidden relative font-sans selection:bg-purple-500/30">

            {/* Deep Space Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0b1f] via-[#090510] to-[#05030a]" />

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.12),transparent_55%)]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

            {/* Constellation Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Randomly Generated Constellations */}
                {constellations.map((constellation) => (
                    <motion.div
                        key={`${constellation.id}-${constellation.key}`}
                        className="absolute"
                        style={{
                            left: `${constellation.left}%`,
                            top: `${constellation.top}%`,
                            width: "150px",
                            height: "150px",
                        }}
                        initial={{
                            rotate: constellation.rotate,
                            scale: constellation.scale,
                            opacity: 0,
                        }}
                        animate={{
                            opacity: [0, constellation.opacity, 0], // Init -> Fade In -> Fade Out
                        }}
                        transition={{
                            duration: constellation.duration,
                            ease: "easeInOut",
                            delay: constellation.delay,
                            times: [0, 0.5, 1]
                        }}
                        onAnimationComplete={() => refreshConstellation(constellation.id)}
                    >
                        <svg width="100%" height="100%" viewBox="0 0 100 100" className="overflow-visible">
                            {/* Connection Lines */}
                            <motion.path
                                d={`M ${constellation.points.map((p) => `${p.x} ${p.y}`).join(' L ')}`}
                                stroke="rgba(255,255,255,0.4)"
                                strokeWidth="1"
                                fill="none"
                            />
                            {/* Stars at vertices */}
                            {constellation.points.map((p, idx) => (
                                <circle key={idx} cx={p.x} cy={p.y} r="2" fill="white" className="blur-[0.5px]" />
                            ))}
                        </svg>
                    </motion.div>
                ))}

                {/* Stars */}
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute bg-white rounded-full shadow-[0_0_6px_rgba(255,255,255,0.55)]"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: star.duration,
                            delay: star.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Space Elements - Enhanced */}

                {/* Space Elements - Enhanced */}

                {/* Planets removed as per user request */}
                {/* Black Hole with Accretion Disk (Top Left) */}
                <div className="absolute top-[18%] left-[12%] w-40 h-40 opacity-90">
                    {/* The Void */}
                    <div className="absolute inset-[15%] rounded-full bg-black z-10 shadow-[0_0_20px_rgba(0,0,0,1)] border border-purple-900/30" />

                    {/* Outer Glow / Event Horizon */}
                    <div className="absolute inset-[14%] rounded-full bg-purple-600/20 blur-md z-0 animate-pulse" style={{ animationDuration: '4s' }} />

                    {/* Accretion Disk removed as per user request */}
                </div>

                {/* Shooting Stars */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute h-[1px] w-[100px] bg-gradient-to-r from-transparent via-white to-transparent"
                        initial={{ top: "10%", left: "80%", opacity: 0, rotate: -45 }}
                        animate={{
                            top: ["10%", "40%"],
                            left: ["80%", "40%"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 7,
                            ease: "linear"
                        }}
                    />
                    <motion.div
                        className="absolute h-[1px] w-[70px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"
                        initial={{ top: "5%", left: "40%", opacity: 0, rotate: -30 }}
                        animate={{
                            top: ["5%", "25%"],
                            left: ["40%", "10%"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 2,
                            delay: 3,
                            repeat: Infinity,
                            repeatDelay: 12,
                            ease: "linear"
                        }}
                    />
                </div>

                {/* Nebula Effects (Reduced opacity to not crowd) */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />
                <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-pink-600/5 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />
            </div>

            <Navbar />

            <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-24"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm text-sm font-medium text-purple-300">
                        BlairHacks 8
                    </div>
                    <h1 className={`${anta.className} text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent mb-8 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]`}>
                        Competition
                    </h1>

                    <div className="mb-10">
                        <Countdown targetDate="2026-05-23T09:30:00" theme="dark" />
                    </div>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                        A 24-hour build sprint packed with workshops, mentors, demos, and prizes.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeawmqojf8LebsyY98MHMk8j_weRtoXcah05B3_1C0Dlaf8SQ/viewform?usp=dialog"
                            target="_blank"
                            rel="noreferrer"
                            className="transform rounded-full bg-gradient-to-r from-red-500 to-pink-600 px-8 py-4 text-lg text-white shadow-lg shadow-red-500/25 transition-all duration-200 hover:scale-105 hover:from-red-600 hover:to-pink-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05030a]"
                        >
                            Register
                        </a>
                        <a
                            href="https://discord.gg/7KQtGmTJ"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-lg text-white/90 shadow-[0_0_30px_rgba(59,130,246,0.12)] backdrop-blur transition-all duration-200 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05030a]"
                        >
                            <FaDiscord className="h-5 w-5" />
                            Join Discord
                        </a>
                    </div>
                </motion.div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Schedule Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="group relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-purple-500/20" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-300 ring-1 ring-purple-500/50">
                                    <HiOutlineCalendar className="text-3xl" />
                                </div>
                                <h2 className={`${anta.className} text-3xl font-bold text-white tracking-wide`}>Hackathon Schedule</h2>
                            </div>
                            <div className="flex-grow flex items-center justify-center min-h-[120px]">
                                <p className="text-2xl text-gray-400 font-light italic">Coming Soon...</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tracks Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-pink-500/20" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-pink-500/20 text-pink-300 ring-1 ring-pink-500/50">
                                    <HiOutlineSparkles className="text-3xl" />
                                </div>
                                <h2 className={`${anta.className} text-3xl font-bold text-white tracking-wide`}>Tracks</h2>
                            </div>
                            <div className="space-y-4 text-gray-300">
                                <p className="text-lg leading-relaxed">
                                    Build whatever you want — or compete in a track. More sponsor challenges announced soon.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                    {["Beginner-Friendly", "AI + ML", "Community Impact", "Health + Wellness"].map((t) => (
                                        <div key={t} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-gray-200">
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Prizes Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-red-500/20" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-red-500/20 text-red-300 ring-1 ring-red-500/50">
                                    <HiOutlineTrophy className="text-3xl" />
                                </div>
                                <h2 className={`${anta.className} text-3xl font-bold text-white tracking-wide`}>Prizes</h2>
                            </div>
                            <div className="space-y-4">
                                {prizes.filter(p => p.isSpecial).map((prize, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setSelectedPrize(prize)}
                                        className="relative h-32 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/10 transition-colors"
                                    >
                                        <span className="text-red-300 font-semibold tracking-wider mb-2">{prize.title}</span>
                                        <p className="text-gray-200">{prize.description}</p>
                                    </div>
                                ))}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {prizes.filter(p => !p.isSpecial).map((prize, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => setSelectedPrize(prize)}
                                            className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-gray-300 cursor-pointer hover:bg-white/10 hover:border-red-500/30 transition-all"
                                        >
                                            <div className="font-semibold text-red-100 mb-1">{prize.title}</div>
                                            <div className="text-xs text-gray-400 line-clamp-1">{prize.description}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Judges & Sponsors Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="group relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-blue-500/20" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-300 ring-1 ring-blue-500/50">
                                    <HiOutlineUsers className="text-3xl" />
                                </div>
                                <h2 className={`${anta.className} text-3xl font-bold text-white tracking-wide`}>Judging + Submissions</h2>
                            </div>
                            <div className="space-y-6">
                                <p className="text-gray-300">
                                    You’ll submit a short write-up and demo link. Judges score projects on impact, creativity, and execution.
                                </p>
                                <div className="space-y-3">
                                    {["Pitch: 1-minute demo", "Submission: repo + brief description", "Team size: 1–4", "New work only during event"].map((r) => (
                                        <div key={r} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-gray-300">
                                            {r}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
                <a
                    href="https://discord.gg/7KQtGmTJ"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="BlairHacks Discord"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 shadow-[0_0_25px_rgba(59,130,246,0.12)] backdrop-blur transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05030a]"
                >
                    <FaDiscord className="h-5 w-5" />
                </a>
                <a
                    href="https://www.instagram.com/blairhacks/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="BlairHacks Instagram"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 shadow-[0_0_25px_rgba(168,85,247,0.12)] backdrop-blur transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05030a]"
                >
                    <FaInstagram className="h-5 w-5" />
                </a>
            </div>

            {/* Prize Detail Modal */}
            <AnimatePresence>
                {selectedPrize && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPrize(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#0f0b1f] border border-white/10 p-6 shadow-2xl shadow-purple-500/20"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -ml-16 -mb-16 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className={`${anta.className} text-2xl font-bold text-white`}>{selectedPrize.title}</h3>
                                    <button
                                        onClick={() => setSelectedPrize(null)}
                                        className="p-1 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                    >
                                        <HiXMark className="text-xl" />
                                    </button>
                                </div>

                                <p className="text-lg text-purple-200 mb-4 font-medium">{selectedPrize.description}</p>

                                {selectedPrize.details && (
                                    <div className="text-gray-300 leading-relaxed text-sm bg-white/5 p-4 rounded-xl border border-white/5">
                                        {selectedPrize.details}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
