'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        I am an engineering student who is passionate about web and mobile app development.
        I love learning new technologies and working on creative projects that solve real problems.
        Currently exploring React, Next.js, Flutter, and backend development with Spring Boot!
      </motion.p>
    </section>
  );
}
 