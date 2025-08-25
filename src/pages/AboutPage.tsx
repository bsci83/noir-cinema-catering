import React from 'react';
import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About NOIR Cinema Catering</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Born from a passion for exceptional food and deep respect for the filmmaking process, 
            NOIR Cinema Catering has become Atlanta's premier film industry catering specialist.
          </p>
        </div>
      </div>
      <About />
    </div>
  );
};

export default AboutPage;
