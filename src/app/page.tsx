'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  SiSpringboot, SiMysql, SiPostman, SiGit, SiHtml5,
  SiTailwindcss, SiHibernate, SiApachemaven
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { FaDatabase, FaJava, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function HomePage() {
  const skills = [
    { name: 'Java', icon: <FaJava className="text-orange-600 text-3xl" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600 text-3xl" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600 text-3xl" /> },
    { name: 'REST APIs', icon: <SiPostman className="text-orange-600 text-3xl" /> },
    { name: 'Hibernate', icon: <SiHibernate className="text-yellow-700 text-3xl" /> },
    { name: 'JPA', icon: <FaDatabase className="text-green-500 text-3xl" /> },
    { name: 'Maven', icon: <SiApachemaven className="text-gray-700 text-3xl" /> },
    { name: 'Git', icon: <SiGit className="text-red-500 text-3xl" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-900 dark:text-white text-3xl" /> },
    { name: 'HTML/CSS', icon: <SiHtml5 className="text-orange-500 text-3xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-500 text-3xl" /> },
    { name: 'VS Code', icon: <VscCode className="text-blue-500 text-3xl" /> },
  ];

  const projects = [
    {
      title: 'Employee Management System',
      description: 'A full CRUD backend with Spring Boot, MySQL, and REST APIs.',
      github: 'https://github.com/maroofu07/employee-management-system',
    },
    {
      title: 'Image Upload API',
      description: 'Spring Boot service to upload & serve images via REST.',
      github: 'https://github.com/maroofu07/image-upload-api',
    },
    {
      title: 'Salon Booking System (In Progress)',
      description: 'RESTful backend to manage appointments, stylists, and users.',
      github: 'https://github.com/maroofu07/salon-booking-backend',
    },
  ];

  const Divider = () => (
    <motion.div
      className="w-24 h-1 mx-auto my-12 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    />
  );

  return (
    <main className="bg-white dark:bg-black text-gray-800 dark:text-white">
      {/* HERO */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 px-6 pt-20">
        <div className="max-w-xl">
          <motion.p className="text-2xl text-gray-600 dark:text-gray-400" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            Hi! I'm
          </motion.p>
          <motion.h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 text-transparent bg-clip-text" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }}>
            Maroof Uddin
          </motion.h1>
          <motion.p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
            Backend Developer | Spring Boot Specialist | Problem Solver
          </motion.p>
          <motion.p className="mt-2 text-base text-gray-500 dark:text-gray-400" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
            Turning complex backend challenges into scalable solutions ☕
          </motion.p>
        </div>

        <motion.div className="relative w-44 h-44 md:w-56 md:h-56" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-cyan-400 to-blue-500 blur-2xl opacity-40 animate-[pulse_3s_ease-in-out_infinite] scale-[1.15] transition-all duration-500" />
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-[5px] border-blue-300 dark:border-cyan-500">
            <Image src="/my-photo.jpg" alt="Maroof Uddin" fill className="object-cover" />
          </div>
        </motion.div>
      </section>

      <Divider />

      {/* ABOUT */}
      <section id="about" className="px-6 py-20">
        <motion.h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          <div className="space-y-6">
            {[
              { icon: '🎓', title: 'B.Tech in CSE (AIML)', desc: 'Currently pursuing Computer Science with specialization in AI & ML.' },
              { icon: '💼', title: 'Backend Developer', desc: 'Building REST APIs with Spring Boot and MySQL.' },
              { icon: '🛠️', title: 'Tech Stack', desc: 'Java, Spring Boot, MySQL, REST APIs, Hibernate, Git.' },
              { icon: '🧠', title: 'Problem Solver', desc: 'Enjoy simplifying backend logic and debugging edge cases.' },
              { icon: '💬', title: 'Clear Communicator', desc: 'Writing clean documentation and collaborating effectively.' }
            ].map((item, i) => (
              <motion.div key={i} className="flex items-start gap-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <span className="text-blue-500 text-2xl">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
            I’m a passionate backend developer dedicated to crafting high-performance, scalable, and secure APIs with clean architecture principles. I thrive on solving real-world problems through elegant code and robust systems, while constantly exploring the intersection of backend development and AI/ML.
          </motion.p>
        </div>
      </section>

      <Divider />

      {/* SKILLS */}
      <section id="skills" className="min-h-screen px-6 py-20 bg-gray-50 dark:bg-gray-900">
        <motion.h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          My Skills
        </motion.h2>
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.1 }}>
          {skills.map((skill, index) => (
            <motion.div key={index} className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-md transform transition hover:scale-110 hover:shadow-xl hover:bg-blue-50 dark:hover:bg-gray-700" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }}>
              {skill.icon}
              <span className="mt-2 font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Divider />

      {/* PROJECTS */}
   
      <section id="projects" className="px-6 py-20">
  <motion.h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    Projects
  </motion.h2>

  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    {[
      {
        title: 'Employee Management System',
        description: 'A full CRUD backend with Spring Boot, MySQL, and REST APIs.',
        github: 'https://github.com/maroofu07/employee-management-system',
      },
      {
        title: 'Image Upload API',
        description: 'Spring Boot service to upload & serve images via REST.',
        github: 'https://github.com/maroofu07/Upload-Method',
      },
      {
        title: 'Salon Booking System (In Progress)',
        description: 'RESTful backend to manage appointments, stylists, and users.',
        github: '',
      },
    ].map((project, index) => (
      <motion.div key={index}
        className="border dark:border-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition bg-white dark:bg-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
          >
            View on GitHub →
          </a>
        ) : (
          <span className="inline-block mt-4 text-green-600 dark:text-green-400 font-medium">
            🔄 This project is currently running
          </span>
        )}
      </motion.div>
    ))}
  </div>
</section>


      <Divider />

      {/* CONTACT */}
  
      <section id="contact" className="px-6 py-20 flex flex-col items-center text-center">
  <motion.h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    Let’s Connect
  </motion.h2>

  <div className="flex gap-8 mb-12 text-2xl">
    <a href="https://github.com/maroofu07" target="_blank" className="hover:text-blue-600"><FaGithub /></a>
    <a href="https://www.linkedin.com/in/maroofuddin846/" target="_blank" className="hover:text-blue-600"><FaLinkedin /></a>
    <a href="https://www.instagram.com/_iam.shaikh_/" target="_blank" className="hover:text-blue-600"><FaInstagram /></a>
  </div>

  <form action="https://formsubmit.co/maroofu007@gmail.com" method="POST" className="w-full max-w-lg space-y-4 text-center">
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_next" value="https://my-portfolio-ten-liart-77.vercel.app/thanks" />
    <input type="text" name="name" required placeholder="Your Name" className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white" />
    <input type="email" name="email" required placeholder="Your Email" className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white" />
    <textarea name="message" rows={5} required placeholder="Your Message" className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white" />
    <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Send Message</button>
  </form>
</section>


    </main>
  );
}
