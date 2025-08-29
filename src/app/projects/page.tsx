"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function ProjectsPage() {
    const projects = [
        {
            title:
                "Duty Management & Leave Request Modules — School Management",
            description:
                "Developed and integrated Duty Management and Leave Request modules for a school management system, improving task allocation efficiency and automating leave approval workflows.",
            tech: ["Java", "Spring Boot", "MySQL", "REST APIs", "JPA/Hibernate"],
            confidential: true, // 🔒 mark as confidential
            github: null,
            demo: null,
        },
        {
            title: "Personal Portfolio Website",
            description:
                "Fully responsive, animated Next.js + Tailwind CSS portfolio with particles background, dark/light theme toggle, and contact form integration.",
            tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "EmailJS"],
            confidential: false,
            github: "https://github.com/maroofu07/my-portfolio",
            demo: "https://my-portfolio-ten-liart-77.vercel.app/",
        },
        {
            title: "M.A.R.V.I.S Reflect – AI-Driven Smartwatch Assistant",
            description:
                "A personal AI assistant that sends daily reflection prompts, coaching reminders, and work alerts directly to a smartwatch. Runs fully in the cloud, pushes smart prompts, and provides AI-powered productivity reminders.",
            tech: ["Python", "Telegram Bot API", "Render", "UptimeRobot"],
            confidential: false,
            github: "https://github.com/maroofu07/marvis-reflect_SW",
            demo:
                "https://www.linkedin.com/posts/maroofuddin846_python-ai-smartwatch-activity-7346639340598366213-Avqt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFjIxgBgGXPqxZZKgNkcaxW6EdOOAix67c",
        },
        {
            title: "Employee Management System",
            description:
                "A Spring Boot REST API for managing employees with CRUD operations, role-based authentication, and MySQL integration.",
            tech: ["Spring Boot", "Java", "MySQL", "REST API"],
            confidential: false,
            github: "https://github.com/maroofu07/Employee-Managment",
            demo: null,
        },
    ];

    // ---- Carousel state ----
    const wrapRef = useRef<HTMLDivElement>(null);
    const [containerW, setContainerW] = useState(0);
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [instant, setInstant] = useState(false);

    // measure container width
    useEffect(() => {
        if (!wrapRef.current) return;
        const ro = new ResizeObserver((entries) => {
            setContainerW(entries[0].contentRect.width);
        });
        ro.observe(wrapRef.current);
        return () => ro.disconnect();
    }, []);

    // slides per view
    const slidesPerView = containerW < 640 ? 1 : containerW < 1024 ? 2 : 3;
    const gapPx = 24; // tailwind gap-6
    const safeW = Math.max(containerW, 1);
    const slideW = (safeW - gapPx * (slidesPerView - 1)) / slidesPerView;
    const maxIndex = Math.max(projects.length - slidesPerView, 0);

    // auto slide
    useEffect(() => {
        if (maxIndex === 0) return;
        const id = setInterval(() => {
            if (paused) return;
            setIndex((prev) => {
                if (prev >= maxIndex) {
                    setInstant(true);
                    return 0;
                }
                return prev + 1;
            });
        }, 3500);
        return () => clearInterval(id);
    }, [paused, maxIndex]);

    // reset instant after jump
    useEffect(() => {
        if (!instant) return;
        const t = setTimeout(() => setInstant(false), 30);
        return () => clearTimeout(t);
    }, [instant]);

    const translateX = -(index * (slideW + gapPx));

    // pause/resume handlers
    const handleEnter = () => setPaused(true);
    const handleLeave = () => setPaused(false);
    const handleTouchStart = () => setPaused(true);
    const handleTouchEnd = () => setPaused(false);
    const handleClickToggle = () => setPaused((p) => !p);

    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black p-6">
            {/* heading */}
            <motion.h1
                className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Projects
            </motion.h1>

            {/* === Responsive Carousel === */}
            <div
                ref={wrapRef}
                className="relative w-full overflow-hidden"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onClick={handleClickToggle}
            >
                <motion.div
                    className="flex"
                    style={{
                        gap: `${gapPx}px`,
                        width:
                            projects.length * slideW +
                            gapPx * Math.max(projects.length - 1, 0),
                    }}
                    animate={{ x: translateX }}
                    transition={{
                        duration: instant ? 0 : 0.6,
                        ease: "easeInOut",
                    }}
                >
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0"
                            style={{ width: `${slideW}px` }}
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 h-full hover:shadow-2xl transition-shadow">
                                <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                                    {project.title}
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, j) => (
                                        <span
                                            key={j}
                                            className="text-xs bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-200 px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.confidential ? (
                                        <Link
                                            href="/projects/confidential"
                                            className="flex items-center gap-1 text-sm text-blue-500 hover:underline"
                                        >
                                            <FaGithub /> Code
                                        </Link>
                                    ) : (
                                        project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-sm text-blue-500 hover:underline"
                                            >
                                                <FaGithub /> Code
                                            </a>
                                        )
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm text-green-500 hover:underline"
                                        >
                                            <FaExternalLinkAlt /> Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* pause indicator */}
                <div className="pointer-events-none absolute right-2 top-2 text-xs px-2 py-1 rounded-md bg-black/50 text-white">
                    {paused ? "Paused" : "Auto"}
                </div>
            </div>
        </main>
    );
}
