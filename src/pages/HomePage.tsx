import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <Hero />
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Welcome to NOIR Cinema Catering</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Atlanta's premier film industry catering specialist. We bring professional, 
            high-quality catering services directly to your production sets, ensuring 
            your cast and crew are well-fed and energized throughout filming.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-6 rounded-lg border border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-500">Film Industry Experts</h3>
              <p className="text-gray-300">
                Specialized in understanding the unique needs and schedules of film productions
              </p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-500">24/7 Availability</h3>
              <p className="text-gray-300">
                Ready to serve your production at any hour, including weekends and holidays
              </p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-500">Atlanta Based</h3>
              <p className="text-gray-300">
                Currently Providing service in all of Georgia. Available to travel outside of the state of Georgia
              </p>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
};

export default HomePage;
