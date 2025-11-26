'use client'
import React, { useState } from 'react';
import { Search, X, Menu, Facebook, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`px-3 sm:px-6 py-2 sm:py-3 md:py-4 shadow-lg fixed top-0 left-0 right-0 z-50 transition-colors duration-500 backdrop-blur-sm ${
        isMenuOpen ? 'bg-white text-gray-800' : 'text-white border-b border-amber-300/30'
      }`}
      style={!isMenuOpen ? { backgroundColor: '#A68229' } : undefined}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Name */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 shrink min-w-0">
            <h1 className={`text-xs sm:text-base md:text-lg lg:text-xl font-bold tracking-wide transition-opacity truncate ${isMenuOpen ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:opacity-90'}`}>
              <span className="hidden sm:inline">PROF. PRAMOD DASTOORKAR</span>
              <span className="sm:hidden">P. DASTOORKAR</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`transition-colors font-medium ${isMenuOpen ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-100'}`}>Home</Link>
            <Link href="/about" className={`transition-colors font-medium ${isMenuOpen ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-100'}`}>About</Link>
            <Link href="/awards" className={`transition-colors font-medium ${isMenuOpen ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-100'}`}>Awards</Link>
            <Link href="/experience" className={`transition-colors font-medium ${isMenuOpen ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-100'}`}>Experience</Link>
            <Link href="/youtube" className={`transition-colors font-medium ${isMenuOpen ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-100'}`}>YouTube</Link>
            <Link href="/titles" className={`transition-colors font-medium ${isMenuOpen ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-100'}`}>Titles</Link>
            <div className={`flex items-center space-x-2 ${isMenuOpen ? 'text-gray-700' : 'text-white'}`}>
              <span className="font-medium">EN</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-1 sm:space-x-4 shrink-0">
            <button className={`transition-colors hidden sm:block ${isMenuOpen ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-100'}`}>
              <Search size={20} />
            </button>
            <button 
              onClick={toggleMenu}
              className={`transition-colors p-1 ${isMenuOpen ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-100'}`}
            >
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <div 
        className={`fixed top-12 sm:top-14 md:top-16 left-0 right-0 bg-white shadow-2xl z-40 overflow-y-auto transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Mobile Navigation Links (visible on small screens below lg) */}
          <div className="lg:hidden mb-6 pb-6 border-b border-amber-200">
            <h3 className="font-bold text-gray-800 mb-4 text-base sm:text-lg">NAVIGATION</h3>
            <ul className="space-y-3">
              <li><Link href="/" onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 transition-colors text-sm sm:text-base block py-1">Home</Link></li>
              <li><Link href="/about" onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 transition-colors text-sm sm:text-base block py-1">About</Link></li>
              <li><Link href="/awards" onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 transition-colors text-sm sm:text-base block py-1">Awards</Link></li>
              <li><Link href="/experience" onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 transition-colors text-sm sm:text-base block py-1">Experience</Link></li>
              <li><Link href="/youtube" onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 transition-colors text-sm sm:text-base block py-1">YouTube</Link></li>
              <li><Link href="/titles" onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 transition-colors text-sm sm:text-base block py-1">Titles</Link></li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Column 1 - Main Menu */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg">QUICK LINKS</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/" onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Home</Link></li>
                <li><Link href="/about" onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 transition-colors text-sm">About</Link></li>
                <li><Link href="/awards" onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Awards & Recognition</Link></li>
                <li><Link href="/experience" onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Professional Experience</Link></li>
                <li><Link href="/youtube" onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 transition-colors text-sm">YouTube Channel</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg">EXPERTISE</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Career Guidance</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Placement Training</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Corporate Relations</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Skill Development</a></li>
              </ul>
            </div>

            {/* Column 3 - Content */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg">CONTENT</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/youtube" onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Video Lectures</Link></li>
                <li><Link href="/titles" onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Published Titles</Link></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Research Papers</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Patents</a></li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg">CONNECT</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors font-semibold text-sm">Contact Information</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors font-semibold text-sm">Speaking Engagements</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors font-semibold text-sm">Consultation</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors font-semibold text-sm">Collaborations</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-amber-200">
            {/* Achievements */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg">ACHIEVEMENTS</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/awards" onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Awards & Recognition</Link></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Success Stories</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Student Testimonials</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Industry Impact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg">RESOURCES</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link href="/youtube" onClick={toggleMenu} className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Career Videos</Link></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Interview Tips</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Resume Building</a></li>
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3 sm:mb-4 text-base sm:text-lg">FOLLOW</h3>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="w-10 h-10 bg-linear-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white hover:from-amber-600 hover:to-amber-700 transition-all shadow-md">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-linear-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white hover:from-amber-600 hover:to-amber-700 transition-all shadow-md">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-linear-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white hover:from-amber-600 hover:to-amber-700 transition-all shadow-md">
                  <Instagram size={18} />
                </a>
                <a href="https://youtube.com/@pramoddastoorkar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-linear-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white hover:from-amber-600 hover:to-amber-700 transition-all shadow-md">
                  <Youtube size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-linear-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white hover:from-amber-600 hover:to-amber-700 transition-all shadow-md">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-12 sm:h-14 md:h-16 lg:h-20"></div>
    </>
  );
};

export default Navbar;