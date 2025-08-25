import React from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Specialized catering solutions designed specifically for the film industry. 
            From intimate indie productions to major studio films, 
            we deliver exceptional service every time.
          </p>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default ServicesPage;
