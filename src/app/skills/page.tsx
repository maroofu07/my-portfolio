'use client';
import { motion } from 'framer-motion';

const skills = [
  'React', 'Next.js', 'Flutter', 'JavaScript',
  'TypeScript', 'Java', 'Spring Boot', 'MongoDB',
  'Tailwind CSS', 'Node.js', 'Express.js', 'Git',
];

export default function SkillsPage() {
  return (
    <section className="min-h-screen px-6 py-16">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-600 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow hover:shadow-md transition hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <span className="text-gray-800 font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
