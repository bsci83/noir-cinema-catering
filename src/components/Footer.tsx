import React from 'react';
import { Phone, Mail, MapPin, Clock, Star, Award, Shield } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Craft Services',
    'Breakfast Catering', 
    'Lunch Catering',
    'Dinner Catering',
    'Coffee Service',
    'Corporate Events',
    'Wrap Parties',
    'Custom Menus'
  ];

  const serviceAreas = [
    'Atlanta', 'Marietta', 'Alpharetta', 'Roswell',
    'Sandy Springs', 'Decatur', 'Duluth', 'Buckhead'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/images/brand/logo.JPEG" 
                alt="NOIR Cinema Catering" 
                className="h-12 w-12 mr-3"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">NOIR</h3>
                <p className="text-sm text-gray-400">CINEMA CATERING</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Atlanta's premier film industry catering specialist, providing exceptional 
              culinary experiences for productions of all sizes.
            </p>

            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Award className="h-4 w-4 text-blue-500" />
                <span className="text-sm">Health Department Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">5-Star Client Rating</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Service Areas */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-red-500 mt-1" />
                <div>
                  <p className="text-white font-semibold">678-403-8649</p>
                  <p className="text-gray-400 text-sm">24/7 Available</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-red-500 mt-1" />
                <div>
                  <p className="text-white">info@noircinema.catering</p>
                  <p className="text-gray-400 text-sm">Response within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 mt-1" />
                <div>
                  <p className="text-white">Dallas, GA 30132</p>
                  <p className="text-gray-400 text-sm">Statewide & Beyond</p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h5 className="text-sm font-bold text-white mb-3">Service Areas</h5>
              <div className="grid grid-cols-2 gap-1">
                {serviceAreas.map((area) => (
                  <span key={area} className="text-gray-400 text-xs">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="py-6 border-t border-gray-800">
          <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <Clock className="h-6 w-6 text-red-500" />
                <div>
                  <p className="text-white font-semibold">Emergency Catering Available 24/7</p>
                  <p className="text-gray-400 text-sm">Last-minute productions? We've got you covered.</p>
                </div>
              </div>
              <a 
                href="tel:678-403-8649"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 NOIR Cinema Catering. All rights reserved.</p>
              <p className="mt-1">Serving Atlanta's film industry with excellence since 2019.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Fully Licensed & Insured</span>
              <span>•</span>
              <span>Health Dept. Certified</span>
              <span>•</span>
              <span>500+ Productions Served</span>
            </div>
            <div className="mt-4 text-xs text-gray-600">
              Created by <a href="https://sageaaa.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors">SageAAA.com</a>
            </div>
          </div>
        </div>

        {/* SEO Keywords Footer */}
        <div className="py-4 border-t border-gray-800 text-center">
          <p className="text-gray-600 text-xs leading-relaxed">
            Film catering Atlanta | Movie set catering Georgia | Cinema catering services | 
            Production catering Atlanta | Mobile catering Georgia | Craft services Atlanta | 
            Film industry catering | Movie production catering | Atlanta film catering company | 
            Professional catering services Georgia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
