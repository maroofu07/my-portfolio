'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Let\'s Connect', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md px-6 py-4 fixed top-0 left-0 right-0 z-50 flex justify-between items-center">
      <h1 className="font-bold text-2xl text-blue-600">Portfolio</h1>
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-blue-500 transition ${
                pathname === link.href ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
