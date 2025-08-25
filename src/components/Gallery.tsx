import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Photos' },
    { id: 'food', name: 'Food' },
    { id: 'setup', name: 'Setup' },
    { id: 'truck', name: 'Mobile Kitchen' },
    { id: 'service', name: 'Service' }
  ];

  const galleryImages = [
    {
      src: "/images/hero-catering-spread.jpg",
      alt: "Elegant catering spread",
      category: "food",
      title: "Premium Catering Spread",
      description: "Beautifully arranged buffet for a major studio production"
    },
    {
      src: "/images/brand/IMG_E7641.JPG",
      alt: "NOIR food truck interior",
      category: "truck",
      title: "State-of-the-Art Kitchen",
      description: "Professional-grade mobile kitchen with full commercial capabilities"
    },
    {
      src: "/images/gourmet-sandwiches.jpg",
      alt: "Gourmet sandwich platter",
      category: "food",
      title: "Gourmet Sandwich Station",
      description: "Artisanal sandwiches with premium ingredients and fresh breads"
    },
    {
      src: "/images/brand/IMG_E7642.JPG",
      alt: "NOIR food truck exterior",
      category: "truck",
      title: "Mobile Catering Unit",
      description: "Our professional catering truck ready for any location"
    },
    {
      src: "/images/craft-services-table.jpg",
      alt: "Craft services setup",
      category: "setup",
      title: "Craft Services Table",
      description: "24/7 snack station keeping crews energized throughout production"
    },
    {
      src: "/images/breakfast-catering.jpg",
      alt: "Premium breakfast spread",
      category: "food",
      title: "Executive Breakfast",
      description: "Fresh pastries, artisanal coffee, and hot breakfast options"
    },
    {
      src: "/images/brand/IMG_E7643.JPG",
      alt: "NOIR food truck side view",
      category: "truck",
      title: "Professional Mobile Kitchen",
      description: "Complete catering solution with multiple service windows"
    },
    {
      src: "/images/hot-lunch-buffet.jpg",
      alt: "Hot lunch buffet",
      category: "service",
      title: "Hot Lunch Service",
      description: "Full-service hot meal catering for large production crews"
    },
    {
      src: "/images/salad-bar-setup.jpg",
      alt: "Fresh salad bar",
      category: "setup",
      title: "Fresh Salad Bar",
      description: "Healthy options with premium greens and fresh toppings"
    },
    {
      src: "/images/coffee-station.jpg",
      alt: "Coffee service station",
      category: "service",
      title: "Premium Coffee Service",
      description: "Professional coffee station with specialty drinks and beverages"
    },
    {
      src: "/images/brand/IMG_E7647.JPG",
      alt: "NOIR branding on truck",
      category: "truck",
      title: "Professional Branding",
      description: "Clean, professional appearance reflecting our commitment to quality"
    },
    {
      src: "/images/healthy-snacks.jpeg",
      alt: "Healthy snack options",
      category: "food",
      title: "Healthy Snack Selection",
      description: "Nutritious options to keep crews energized and focused"
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/*<div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Take a behind-the-scenes look at our professional catering operations, 
            from our state-of-the-art mobile kitchen to the exceptional meals we create for film productions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                activeFilter === filter.id
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-xl"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
            <div className="text-white font-semibold mb-2">Productions Served</div>
            <div className="text-gray-400 text-sm">From indie films to major studio blockbusters</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="text-3xl font-bold text-red-500 mb-2">10,000+</div>
            <div className="text-white font-semibold mb-2">Meals Prepared</div>
            <div className="text-gray-400 text-sm">High-quality meals delivered to hungry crews</div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
            <div className="text-white font-semibold mb-2">Service Available</div>
            <div className="text-gray-400 text-sm">Ready when your production needs us most</div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors duration-200 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-500 transition-colors duration-200 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-500 transition-colors duration-200 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image */}
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-white bg-black/50 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-gray-300">{filteredImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
