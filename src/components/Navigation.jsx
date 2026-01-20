'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/98 backdrop-blur-lg shadow-xl border-b border-slate-800'
          : 'bg-slate-900/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
        >
          <div className="transform group-hover:scale-110 transition-transform">
            <Logo />
          </div>
          <span className="text-xl font-bold text-white hidden sm:block">
            Faruna Godwin Abuh
          </span>
          <span className="text-xl font-bold text-white sm:hidden">
            FGA
          </span>
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-white transition-colors font-medium text-[15px]"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-300 hover:text-white transition-colors font-medium text-[15px]"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('case-studies')}
            className="text-gray-300 hover:text-white transition-colors font-medium text-[15px]"
          >
            Case Studies
          </button>
          <button
            onClick={() => scrollToSection('blog')}
            className="text-gray-300 hover:text-white transition-colors font-medium text-[15px]"
          >
            Blog
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-300 hover:text-white transition-colors font-medium text-[15px]"
          >
            Contact
          </button>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => {
            const chatButton = document.querySelector('[aria-label="Open chat"]');
            if (chatButton) chatButton.click();
          }}
          className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-sm font-semibold"
        >
          <span>💬</span>
          Chat with AI
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => {
            const chatButton = document.querySelector('[aria-label="Open chat"]');
            if (chatButton) chatButton.click();
          }}
          className="md:hidden flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-full text-sm font-semibold"
        >
          <span>💬</span>
          Chat
        </button>
      </div>
    </nav>
  );
}
