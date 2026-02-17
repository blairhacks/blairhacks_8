"use client";

import { Anta } from "next/font/google";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const anta = Anta({
    subsets: ["latin"],
    weight: "400",
});

interface CountdownProps {
    targetDate: string | Date;
    theme?: "light" | "dark";
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function Countdown({ targetDate, theme = "light" }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const difference = target - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    if (!isClient) return null;

    const boxClass = theme === "light"
        ? "bg-white/80 border-red-200 text-gray-800 shadow-sm"
        : "bg-white/10 border-purple-500/30 text-white backdrop-blur-md";

    const labelClass = theme === "light" ? "text-red-500" : "text-purple-300";

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border ${boxClass} min-w-[70px] sm:min-w-[90px]`}>
            <span className={`${anta.className} text-2xl sm:text-4xl font-bold tabular-nums`}>
                {String(value).padStart(2, '0')}
            </span>
            <span className={`text-xs sm:text-sm uppercase tracking-wider font-semibold ${labelClass}`}>
                {label}
            </span>
        </div>
    );

    return (
        <motion.div
            className="flex flex-wrap gap-3 sm:gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Mins" />
            <TimeUnit value={timeLeft.seconds} label="Secs" />
        </motion.div>
    );
}
