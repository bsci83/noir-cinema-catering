import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: "/images/hero-catering-spread.jpg",
      title: "Premium Film Industry Catering",
      subtitle: "Elevating every production with exceptional culinary experiences"
    },
    {
      src: "/images/craft-services-table.jpg", 
      title: "Professional Craft Services",
      subtitle: "Keeping your crew energized throughout the longest shooting days"
    },
    {
      src: "/images/dinner-catering.jpg",
      title: "Location Catering Excellence",
      subtitle: "Full-service mobile kitchen bringing restaurant-quality meals to any set"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/images/brand/logo.JPEG" 
              alt="NOIR Cinema Catering" 
              className="h-24 w-24 mx-auto mb-4"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-white">NOIR</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 text-gray-200 tracking-widest">
            CINEMA CATERING
          </h2>

          {/* Dynamic Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
            {heroImages[currentSlide].subtitle}
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm sm:text-base">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-red-500" />
              <span>Film Industry Specialists</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-red-500" />
              <span>Mobile Kitchen Excellence</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-red-500" />
              <span>Statewide & Beyond</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              Book Your Catering
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
            >
              View Services
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-lg">
            <p className="text-gray-300">Call us: <span className="text-red-500 font-semibold">678-403-8649</span></p>
            <p className="text-gray-400 text-sm mt-2">Serving Atlanta, GA and surrounding areas</p>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-red-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
