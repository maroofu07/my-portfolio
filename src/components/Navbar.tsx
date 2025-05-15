'use client';

import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: "Let's Connect", href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Load theme on mount
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Update dark mode class and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / total) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-[999]"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="fixed top-1 left-0 w-full bg-white dark:bg-black shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600 dark:text-blue-400">Maroof</div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 font-medium items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  {link.name}
                </button>
              </li>
            ))}

            {/* Resume Button */}
            <li>
              <a
                href="/resume.pdf"
                download
                className="border border-blue-600 px-3 py-1 rounded text-blue-600 hover:bg-blue-600 hover:text-white transition text-sm"
              >
                📄 Resume
              </a>
            </li>
          </ul>

          {/* Dark Mode + Hamburger */}
          <div className="flex items-center gap-4 md:gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-600"
              title="Toggle Dark Mode"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>

            {/* Mobile Menu */}
            <div
              className="relative md:hidden"
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <button className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600">☰</button>
              {menuOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="block w-full text-left px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 transition"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                  <li>
                    <a
                      href="/resume.pdf"
                      download
                      className="block w-full px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-600 transition"
                    >
                      📄 Resume
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
