'use client'

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'
import Logo from '../assets/images/cktv_logo.jpeg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '/news' },
    // { name: 'Live TV', href: '/live' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'About Us', href: '/about-us' },

  ];

  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src={Logo.src} alt="CKTV India Logo" width={60} height={60} className="mr-3" />
            <div>
              <h1 className="text-2xl font-bold">CKTV India</h1>
              <p className="text-sm">Your Trusted News Source</p>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-accent transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 hover:bg-secondary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
