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
      <nav className={`px-6 py-4 shadow-lg fixed top-0 left-0 right-0 z-50 transition-colors duration-500 backdrop-blur-sm ${
        isMenuOpen ? 'bg-white text-gray-800' : 'text-white border-b border-amber-300/30'
      }`}
      style={!isMenuOpen ? { backgroundColor: '#A68229' } : undefined}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Name */}
          <Link href="/" className="flex items-center space-x-3">
            <h1 className={`text-xl font-bold tracking-wide transition-opacity ${isMenuOpen ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:opacity-90'}`}>PROF. PRAMOD DASTOORKAR</h1>
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
          <div className="flex items-center space-x-4">
            <button className={`transition-colors ${isMenuOpen ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-100'}`}>
              <Search size={20} />
            </button>
            <button 
              onClick={toggleMenu}
              className={`transition-colors ${isMenuOpen ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-100'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <div 
        className={`fixed top-16 left-0 right-0 bg-white shadow-2xl z-40 overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 - Main Menu */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 text-lg">QUICK LINKS</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Home</Link></li>
                <li><Link href="/about" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">About</Link></li>
                <li><Link href="/awards" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Awards & Recognition</Link></li>
                <li><Link href="/experience" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Professional Experience</Link></li>
                <li><Link href="/youtube" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">YouTube Channel</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 text-lg">EXPERTISE</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Career Guidance</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Placement Training</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Corporate Relations</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Skill Development</a></li>
              </ul>
            </div>

            {/* Column 3 - Content */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 text-lg">CONTENT</h3>
              <ul className="space-y-3">
                <li><Link href="/youtube" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Video Lectures</Link></li>
                <li><Link href="/titles" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Published Titles</Link></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Research Papers</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Patents</a></li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4 text-lg">CONNECT</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors font-semibold text-sm">Contact Information</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors font-semibold text-sm">Speaking Engagements</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors font-semibold text-sm">Consultation</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors font-semibold text-sm">Collaborations</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 pt-8 border-t border-amber-200">
            {/* Achievements */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">ACHIEVEMENTS</h3>
              <ul className="space-y-3">
                <li><Link href="/awards" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Awards & Recognition</Link></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Success Stories</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Student Testimonials</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Industry Impact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">RESOURCES</h3>
              <ul className="space-y-3">
                <li><Link href="/youtube" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Career Videos</Link></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Interview Tips</a></li>
                <li><a href="#" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">Resume Building</a></li>
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">FOLLOW</h3>
              <div className="flex space-x-3">
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
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;