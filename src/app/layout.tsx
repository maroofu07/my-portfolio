// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import BackToTopButton from '@/components/BackToTopButton';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import PageLoader from '@/components/PageLoader';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maroof Portfolio',
  description: 'Backend Developer | Spring Boot Specialist | Java & REST APIs',
  keywords: [
    'Maroof', 'Portfolio', 'Backend Developer', 'Spring Boot', 'Java',
    'REST API', 'Hibernate', 'MySQL', 'Framer Motion', 'Tailwind CSS'
  ],
  authors: [{ name: 'Maroof Uddin', url: 'https://your-vercel-domain.vercel.app' }],
  creator: 'Maroof Uddin',
  metadataBase: new URL('https://your-vercel-domain.vercel.app'),
  themeColor: '#0f172a',
  openGraph: {
    title: 'Maroof Portfolio',
    description: 'Backend Developer | Spring Boot Specialist | Java, REST APIs, Hibernate, MySQL',
    url: 'https://your-vercel-domain.vercel.app',
    siteName: 'Maroof Portfolio',
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Maroof Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maroof Portfolio',
    description: 'Backend Developer | Spring Boot Specialist',
    images: ['/og-image.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <PageLoader />
          <ParticlesBackground />
          <Navbar />
          <main className="pt-24 px-6">{children}</main>
          <Footer />
          <BackToTopButton /> {/* ✅ Make sure this is here */}
        </ThemeProvider>
      </body>
    </html>
  );
}
