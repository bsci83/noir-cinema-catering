import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClass = (path: string) => {
    return `hover:text-red-500 transition-colors duration-200 ${
      isActive(path) ? 'text-red-500 font-semibold' : ''
    }`;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/images/brand/logo.JPEG" 
              alt="NOIR Cinema Catering" 
              className="h-12 w-12 mr-3"
            />
            <div>
              <h1 className="text-2xl font-bold">NOIR</h1>
              <p className="text-sm text-gray-300">CINEMA CATERING</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/"
                className={getLinkClass('/')}
              >
                Home
              </Link>
              <Link 
                to="/services"
                className={getLinkClass('/services')}
              >
                Services
              </Link>
              <Link 
                to="/menu"
                className={getLinkClass('/menu')}
              >
                Menu
              </Link>
              <Link 
                to="/about"
                className={getLinkClass('/about')}
              >
                About
              </Link>
              <Link 
                to="/gallery"
                className={getLinkClass('/gallery')}
              >
                Gallery
              </Link>
              <Link 
                to="/contact"
                className={getLinkClass('/contact')}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center space-x-2 text-red-500">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">678-403-8649</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium hover:text-red-500 transition-colors duration-200 ${
                isActive('/') ? 'text-red-500 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium hover:text-red-500 transition-colors duration-200 ${
                isActive('/services') ? 'text-red-500 font-semibold' : ''
              }`}
            >
              Services
            </Link>
            <Link 
              to="/menu"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium hover:text-red-500 transition-colors duration-200 ${
                isActive('/menu') ? 'text-red-500 font-semibold' : ''
              }`}
            >
              Menu
            </Link>
            <Link 
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium hover:text-red-500 transition-colors duration-200 ${
                isActive('/about') ? 'text-red-500 font-semibold' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium hover:text-red-500 transition-colors duration-200 ${
                isActive('/gallery') ? 'text-red-500 font-semibold' : ''
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 text-base font-medium hover:text-red-500 transition-colors duration-200 ${
                isActive('/contact') ? 'text-red-500 font-semibold' : ''
              }`}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-2 text-red-500 px-3 py-2">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">678-403-8649</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
