"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/micromarc-icon.svg" alt="MicroMarc Logo" width={32} height={32} />
            <span className="text-xl font-bold text-gray-900">MicroMarc</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {['About', 'Research', 'Team', 'Collaborators', 'Contact'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-900">
                {item}
              </Link>
            ))}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 hover:text-gray-900">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {['About', 'Research', 'Team', 'Collaborators', 'Contact'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="block text-gray-600 hover:text-gray-900">
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
