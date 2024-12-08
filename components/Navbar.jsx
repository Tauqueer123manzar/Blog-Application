'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Blog Application
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-600 transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div className='hidden md:flex items-center space-x-4'>
              <Button variant="outline">Login</Button>
              <Button variant="outline">Signup</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            <div className="px-2 py-2 space-y-2">
              <Button variant="outline" className="mx-1">Login</Button>
              <Button variant="outline" className="mx-2">Signup</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}