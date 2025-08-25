import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Ready to elevate your production with exceptional catering? Let's discuss your 
          project and create a custom solution that fits your needs, timeline, and budget.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
